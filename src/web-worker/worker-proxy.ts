import {
  AccessType,
  ExtraInstruction,
  InitWebWorkerContext,
  MainAccessRequest,
  MainAccessResponse,
  SerializedInstance,
  SerializedType,
  SerializedValueTransfer,
  WebWorkerContext,
} from '../types';
import { constructInstance } from './worker-implementations';
import { InstanceIdKey, ProxyKey } from './worker-symbols';
import { logWorker, PT_PROXY_URL, stackTrace } from '../utils';

const syncRequestToServiceWorker = (
  $accessType$: AccessType,
  target: any,
  $memberName$: string,
  $data$?: any,
  $extraInstructions$?: ExtraInstruction[]
) => {
  const accessReq: MainAccessRequest = {
    $key$: webWorkerCtx.$key$,
    $msgId$: webWorkerCtx.$msgId$++,
    $accessType$,
    $instanceId$: target[InstanceIdKey],
    $memberName$,
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

  const rtn = constructValue(target, $memberName$, accessRsp.$rtnValue$!);
  if (isPromise) {
    return Promise.resolve(rtn);
  }
  return rtn;
};

export const getter = (target: any, memberName: string) =>
  syncRequestToServiceWorker(AccessType.Get, target, memberName);

export const setter = (target: any, memberName: string, value: any) =>
  syncRequestToServiceWorker(AccessType.Set, target, memberName, value);

export const callMethod = (
  target: any,
  memberName: string,
  args: any[],
  extraInstructions?: ExtraInstruction[]
) => syncRequestToServiceWorker(AccessType.Apply, target, memberName, args, extraInstructions);

const createMethodProxy =
  (target: any, methodName: string) =>
  (...args: any[]) =>
    callMethod(target, methodName, args);

export const proxy = <T = any>(obj: T): T => {
  if (
    !obj ||
    (typeof obj !== 'object' && typeof obj !== 'function') ||
    (obj as any)[ProxyKey] ||
    String(obj).includes('[native')
  ) {
    return obj;
  }

  return new Proxy<any>(obj, {
    get(target, propKey) {
      if (propKey === ProxyKey) {
        return true;
      }

      if (Reflect.has(target, propKey)) {
        return Reflect.get(target, propKey);
      }

      const memberName = String(propKey);
      if (webWorkerCtx.$methodNames$.includes(memberName)) {
        return createMethodProxy(target, memberName);
      }

      logWorker(`get "${memberName}"`);

      const rtn = getter(target, memberName);

      logWorker(`get "${memberName}", value: "${rtn}"`);

      return rtn;
    },

    set(target, propKey, value, receiver) {
      if (Reflect.has(target, propKey)) {
        Reflect.set(target, propKey, value, receiver);
      } else {
        setter(target, String(propKey), value);
      }
      return true;
    },
  });
};

const constructValue = (
  target: any,
  memberName: string,
  serializedValueTransfer: SerializedValueTransfer
): any => {
  if (Array.isArray(serializedValueTransfer)) {
    const serializedType = serializedValueTransfer[0];
    const serializedValue = serializedValueTransfer[1] as any;

    if (serializedType === SerializedType.Primitive) {
      return serializedValue;
    }

    if (serializedType === SerializedType.Method) {
      return createMethodProxy(target, memberName);
    }

    if (serializedType === SerializedType.Instance) {
      const serializedInstance: SerializedInstance = serializedValue;
      return constructInstance(serializedInstance);
    }

    if (serializedType === SerializedType.Object) {
      return proxy(serializedValue);
    }

    if (serializedType === SerializedType.Array) {
      const serializedArray: SerializedValueTransfer[] = serializedValue;
      return serializedArray.map((v) => constructValue(target, memberName, v));
    }
  }

  return undefined;
};

const initWebWorkerContext: InitWebWorkerContext = {
  $msgId$: 0,
  $importScripts$: importScripts.bind(self),
};

export const webWorkerCtx: WebWorkerContext = initWebWorkerContext as any;
