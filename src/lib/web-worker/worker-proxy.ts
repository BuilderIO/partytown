import {
  AccessType,
  ExtraInstruction,
  InterfaceType,
  MainAccessRequest,
  MainAccessRequestTask,
  MainAccessResponse,
} from '../types';
import {
  debug,
  len,
  logWorkerCall,
  logWorkerGetter,
  logWorkerSetter,
  PT_PROXY_URL,
} from '../utils';
import { deserializeFromMain, serializeForMain } from './worker-serialization';
import {
  InstanceIdKey,
  InterfaceTypeKey,
  NodeNameKey,
  ProxyKey,
  webWorkerCtx,
  WinIdKey,
} from './worker-constants';

const syncRequestToServiceWorker = (
  target: any,
  $accessType$: AccessType,
  memberPath: string[],
  data?: any,
  $extraInstructions$?: ExtraInstruction[]
) => {
  const $winId$ = target[WinIdKey];
  const $instanceId$ = target[InstanceIdKey];

  const accessReqTask: MainAccessRequestTask = {
    $instanceId$,
    $interfaceType$: target[InterfaceTypeKey],
    $nodeName$: target[NodeNameKey],

    $accessType$,
    $memberPath$: memberPath,
    $data$: serializeForMain(data, new Set()),
    $extraInstructions$,
  };

  const accessReq: MainAccessRequest = {
    $msgId$: Math.random(),
    $winId$,
    $forwardToWin$: webWorkerCtx.$winId$ !== target[WinIdKey],
    $tasks$: [accessReqTask],
  };

  if (debug && typeof accessReq.$winId$ !== 'number') {
    console.error(`Target missing winId`, accessReq);
  }

  const xhr = new XMLHttpRequest();
  xhr.open('POST', webWorkerCtx.$scopePath$ + PT_PROXY_URL, false);
  xhr.send(JSON.stringify(accessReq));

  // look ma, i'm synchronous (•‿•)

  const accessRsp: MainAccessResponse = JSON.parse(xhr.responseText);
  const errors = accessRsp.$errors$.join();
  const isPromise = accessRsp.$isPromise$;
  const rtn = deserializeFromMain(target, memberPath, accessRsp.$rtnValue$!);
  if (errors) {
    if (isPromise) {
      return Promise.reject(errors);
    }
    throw new Error(errors);
  }

  if (isPromise) {
    return Promise.resolve(rtn);
  }
  return rtn;
};

export const getter = (
  target: any,
  memberPath: string[],
  extraInstructions?: ExtraInstruction[]
) => {
  const rtn = syncRequestToServiceWorker(
    target,
    AccessType.Get,
    memberPath,
    undefined,
    extraInstructions
  );
  logWorkerGetter(target, memberPath, rtn);
  return rtn;
};

export const setter = (target: any, memberPath: string[], value: any) => {
  logWorkerSetter(target, memberPath, value);
  return syncRequestToServiceWorker(target, AccessType.Set, memberPath, value);
};

export const callMethod = (
  target: any,
  memberPath: string[],
  args: any[],
  extraInstructions?: ExtraInstruction[]
) => {
  const rtn = syncRequestToServiceWorker(
    target,
    AccessType.CallMethod,
    memberPath,
    args,
    extraInstructions
  );
  logWorkerCall(target, memberPath, args, rtn);
  return rtn;
};

const createComplexMember = (interfaceType: InterfaceType, target: any, memberPath: string[]) => {
  const interfaceInfo = webWorkerCtx.$interfaces$.find((i) => i[0] === interfaceType);
  if (interfaceInfo) {
    const memberTypeInfo = interfaceInfo[1];
    const memberInfo = memberTypeInfo[memberPath[len(memberPath) - 1]];
    if (memberInfo === InterfaceType.Method) {
      return (...args: any[]) => callMethod(target, memberPath, args);
    } else if (memberInfo > InterfaceType.Window) {
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
