import {
  AccessType,
  ExtraInstruction,
  InterfaceType,
  MainAccessRequest,
  MainAccessResponse,
  SerializedInstance,
  SerializedType,
  SerializedValueTransfer,
} from '../types';
import { constructInstance } from './worker-implementations';
import { InstanceIdKey, ProxyKey, webWorkerCtx } from './worker-constants';
import { debug, logValue, logWorker, PT_PROXY_URL } from '../utils';

const syncRequestToServiceWorker = (
  $accessType$: AccessType,
  target: any,
  memberPath: string[],
  $data$?: any,
  $extraInstructions$?: ExtraInstruction[]
) => {
  const accessReq: MainAccessRequest = {
    $msgId$: webWorkerCtx.$msgId$++,
    $accessType$,
    $instanceId$: target[InstanceIdKey],
    $memberPath$: memberPath,
    $data$,
    $extraInstructions$,
  };

  const xhr = new XMLHttpRequest();
  xhr.open('POST', webWorkerCtx.$scopePath$ + PT_PROXY_URL, false);
  xhr.send(JSON.stringify(accessReq));

  // look ma, i'm synchronous (•‿•)

  const accessRsp: MainAccessResponse = JSON.parse(xhr.responseText);
  const error = accessRsp.$error$;
  const isPromise = accessRsp.$isPromise$;
  if (error) {
    if (isPromise) {
      return Promise.reject(error);
    }
    throw new Error(error);
  }

  const rtn = constructValue(target, memberPath, accessRsp.$rtnValue$!);
  if (isPromise) {
    return Promise.resolve(rtn);
  }
  return rtn;
};

export const getter = (target: any, memberPath: string[]) => {
  const rtn = syncRequestToServiceWorker(AccessType.Get, target, memberPath);
  if (debug && webWorkerCtx.$config$.logGetters) {
    logWorker(`Get ${memberPath.join('.')}, returned: ${logValue(rtn)}`);
  }
  return rtn;
};

export const setter = (target: any, memberPath: string[], value: any) => {
  if (debug && webWorkerCtx.$config$.logSetters) {
    logWorker(`Set ${memberPath.join('.')}, value: ${logValue(value)}`);
  }
  return syncRequestToServiceWorker(AccessType.Set, target, memberPath, value);
};

export const callMethod = (
  target: any,
  memberPath: string[],
  args: any[],
  extraInstructions?: ExtraInstruction[]
) => {
  const rtn = syncRequestToServiceWorker(
    AccessType.CallMethod,
    target,
    memberPath,
    args,
    extraInstructions
  );

  if (debug && webWorkerCtx.$config$.logCalls) {
    logWorker(
      `Call ${memberPath.join('.')}(${args.map(logValue).join(', ')}), returned: ${logValue(rtn)}`
    );
  }

  return rtn;
};

const createComplexMember = (interfaceType: InterfaceType, target: any, memberPath: string[]) => {
  const interfaceInfo = webWorkerCtx.$interfaces$.find((i) => i[0] === interfaceType);
  if (interfaceInfo) {
    const memberTypeInfo = interfaceInfo[1];
    const memberInfo = memberTypeInfo[memberPath[memberPath.length - 1]];
    if (memberInfo === InterfaceType.Method) {
      return (...args: any[]) => callMethod(target, memberPath, args);
    } else if (memberInfo > 0) {
      return proxy(memberInfo, target, [...memberPath]);
    }
  }
  return null;
};

export const proxy = <T = any>(
  interfaceType: InterfaceType,
  target: T,
  initMemberPath: string[]
): T => {
  if (
    !target ||
    (typeof target !== 'object' && typeof target !== 'function') ||
    (target as any)[ProxyKey] ||
    String(target).includes('[native')
  ) {
    return target;
  }

  return new Proxy<any>(target, {
    get(target, propKey) {
      if (propKey === ProxyKey) {
        return true;
      }

      if (Reflect.has(target, propKey)) {
        return Reflect.get(target, propKey);
      }

      const memberPath = [...initMemberPath, String(propKey)];
      const complexProp = createComplexMember(interfaceType, target, memberPath);
      if (complexProp) {
        return complexProp;
      }

      return getter(target, memberPath);
    },

    set(target, propKey, value, receiver) {
      if (Reflect.has(target, propKey)) {
        Reflect.set(target, propKey, value, receiver);
      } else {
        setter(target, [...initMemberPath, String(propKey)], value);
      }
      return true;
    },
  });
};

const constructValue = (
  target: any,
  memberPath: string[],
  serializedValueTransfer: SerializedValueTransfer
): any => {
  if (Array.isArray(serializedValueTransfer)) {
    const serializedType = serializedValueTransfer[0];
    const serializedValue = serializedValueTransfer[1] as any;

    if (serializedType === SerializedType.Primitive) {
      return serializedValue;
    }

    if (serializedType === SerializedType.Method) {
      return (...args: any[]) => callMethod(target, memberPath, args);
    }

    if (serializedType === SerializedType.Instance) {
      const serializedInstance: SerializedInstance = serializedValue;
      return constructInstance(serializedInstance);
    }

    if (serializedType === SerializedType.Object) {
      const obj: { [key: string]: any } = {};
      for (const key in serializedValue) {
        obj[key] = constructValue(target, memberPath, serializedValue[key]);
      }
      return obj;
    }

    if (serializedType === SerializedType.Array) {
      const serializedArray: SerializedValueTransfer[] = serializedValue;
      return serializedArray.map((v) => constructValue(target, memberPath, v));
    }
  }

  return undefined;
};
