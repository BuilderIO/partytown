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

const queueTask = (
  target: any,
  $accessType$: AccessType,
  $memberPath$: string[],
  data?: any,
  $extraInstructions$?: ExtraInstruction[]
) => {
  const winId: number = target[WinIdKey];
  const winQueue = (webWorkerCtx.$tasks$[winId] = webWorkerCtx.$tasks$[winId] || []);

  const $forwardToWin$ = webWorkerCtx.$winId$ !== winId;

  const accessReqTask: MainAccessRequestTask = {
    $instanceId$: target[InstanceIdKey],
    $interfaceType$: target[InterfaceTypeKey],
    $nodeName$: target[NodeNameKey],
    $accessType$,
    $memberPath$,
    $data$: serializeForMain(data, new Set()),
    $extraInstructions$,
  };

  winQueue.push(accessReqTask);
  return drainQueue(target, $memberPath$, $forwardToWin$, winQueue);
};

const drainQueue = (
  target: any,
  $memberPath$: string[],
  $forwardToWin$: boolean,
  queue: MainAccessRequestTask[]
) => {
  if (len(queue)) {
    const accessReq: MainAccessRequest = {
      $msgId$: Math.random(),
      $winId$: target[WinIdKey],
      $forwardToWin$,
      $tasks$: [...queue],
    };
    queue.length = 0;

    const xhr = new XMLHttpRequest();
    const accessReqData = JSON.stringify(accessReq);
    xhr.open('POST', webWorkerCtx.$scopePath$ + PT_PROXY_URL, false);
    xhr.send(JSON.stringify(accessReq));

    // look ma, i'm synchronous (•‿•)

    const accessRsp: MainAccessResponse = JSON.parse(xhr.responseText);
    const errors = accessRsp.$errors$.join();
    const isPromise = accessRsp.$isPromise$;
    const rtn = deserializeFromMain(target, $memberPath$, accessRsp.$rtnValue$!);
    if (errors) {
      if (debug) {
        console.error(self.name, accessReqData);
      }
      if (isPromise) {
        return Promise.reject(errors);
      }
      throw new Error(errors);
    }

    if (isPromise) {
      return Promise.resolve(rtn);
    }
    return rtn;
  }
};

export const getter = (
  target: any,
  memberPath: string[],
  extraInstructions?: ExtraInstruction[]
) => {
  const rtn = queueTask(target, AccessType.Get, memberPath, undefined, extraInstructions);
  logWorkerGetter(target, memberPath, rtn);
  return rtn;
};

export const setter = (target: any, memberPath: string[], value: any) => {
  logWorkerSetter(target, memberPath, value);
  queueTask(target, AccessType.Set, memberPath, value);
};

export const callMethod = (
  target: any,
  memberPath: string[],
  args: any[],
  extraInstructions?: ExtraInstruction[]
) => {
  const rtn = queueTask(target, AccessType.CallMethod, memberPath, args, extraInstructions);
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
