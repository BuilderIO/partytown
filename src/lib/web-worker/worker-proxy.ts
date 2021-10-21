import {
  AccessType,
  ImmediateSetter,
  InterfaceType,
  MainAccessRequest,
  MainAccessResponse,
  SerializedTransfer,
} from '../types';
import {
  defineConstructorName,
  len,
  logWorkerCall,
  logWorkerGlobalConstructor,
  logWorkerGetter,
  logWorkerSetter,
  randomId,
} from '../utils';
import {
  deserializeFromMain,
  serializeForMain,
  serializeInstanceForMain,
} from './worker-serialization';
import { getEnv } from './worker-environment';
import { getInstanceStateValue } from './worker-state';
import {
  ImmediateSettersKey,
  InstanceIdKey,
  InterfaceTypeKey,
  NodeNameKey,
  ProxyKey,
  webWorkerCtx,
  WinIdKey,
} from './worker-constants';
import syncSendMessage from '@sync-send-message-to-main';
import { WorkerProxy } from './worker-proxy-constructor';

const syncMessage = (
  instance: WorkerProxy,
  $accessType$: AccessType,
  $memberPath$: string[],
  $data$?: SerializedTransfer | undefined,
  $immediateSetters$?: ImmediateSetter[],
  $assignInstanceId$?: number
) => {
  const $winId$ = instance[WinIdKey];
  const $instanceId$ = instance[InstanceIdKey];

  const accessReq: MainAccessRequest = {
    $msgId$: randomId(),
    $winId$,
    $instanceId$: instance[InstanceIdKey],
    $interfaceType$: instance[InterfaceTypeKey],
    $nodeName$: instance[NodeNameKey],
    $accessType$,
    $memberPath$,
    $data$,
    $immediateSetters$,
    $assignInstanceId$,
  };

  const accessRsp: MainAccessResponse = syncSendMessage(webWorkerCtx, accessReq);

  const isPromise = accessRsp.$isPromise$;
  const rtnValue = deserializeFromMain($winId$, $instanceId$, $memberPath$, accessRsp.$rtnValue$!);

  if (accessRsp.$error$) {
    if (isPromise) {
      return Promise.reject(accessRsp.$error$);
    }
    throw new Error(accessRsp.$error$);
  }

  if (isPromise) {
    return Promise.resolve(rtnValue);
  }
  return rtnValue;
};

export const getter = (instance: WorkerProxy, memberPath: string[]) => {
  applyBeforeSyncSetters(instance);

  const rtnValue = syncMessage(instance, AccessType.Get, memberPath);
  logWorkerGetter(instance, memberPath, rtnValue);
  return rtnValue;
};

export const setter = (instance: WorkerProxy, memberPath: string[], value: any) => {
  const immediateSetters = instance[ImmediateSettersKey];
  const serializedValue = serializeInstanceForMain(instance, value);

  logWorkerSetter(instance, memberPath, value);

  if (immediateSetters) {
    // queue up setters to be applied immediately after the
    // node is added to the dom
    immediateSetters.push([AccessType.Set, memberPath, serializedValue]);
  } else {
    syncMessage(instance, AccessType.Set, memberPath, serializedValue);
  }
};

export const callMethod = (
  instance: WorkerProxy,
  memberPath: string[],
  args: any[],
  immediateSetters?: ImmediateSetter[],
  assignInstanceId?: number,
  isImmediateSetterCall?: boolean
) => {
  if (isImmediateSetterCall && instance[ImmediateSettersKey]) {
    instance[ImmediateSettersKey]!.push([
      AccessType.CallMethod,
      memberPath,
      serializeInstanceForMain(instance, args),
    ]);
  } else {
    applyBeforeSyncSetters(instance);
    args.map(applyBeforeSyncSetters);

    const rtnValue = syncMessage(
      instance,
      AccessType.CallMethod,
      memberPath,
      serializeInstanceForMain(instance, args),
      immediateSetters,
      assignInstanceId
    );
    logWorkerCall(instance, memberPath, args, rtnValue);
    return rtnValue;
  }
};

export const createGlobalConstructorProxy = (
  winId: number,
  interfaceType: InterfaceType,
  cstrName: string
) => {
  const GlobalCstr = class {
    constructor(...args: any[]) {
      const instanceId = randomId();
      const workerProxy = new WorkerProxy(interfaceType, instanceId, winId);

      args.map(applyBeforeSyncSetters);

      syncMessage(
        workerProxy,
        AccessType.GlobalConstructor,
        [cstrName],
        serializeForMain(winId, instanceId, args)
      );

      logWorkerGlobalConstructor(winId, cstrName, args);

      return workerProxy;
    }
  };

  return defineConstructorName(GlobalCstr, cstrName);
};

export const applyBeforeSyncSetters = (instance: WorkerProxy) => {
  if (instance) {
    const beforeSyncValues = instance[ImmediateSettersKey];
    if (beforeSyncValues) {
      instance[ImmediateSettersKey] = undefined;

      callMethod(
        getEnv(instance).$document$,
        ['createElement'],
        [instance[NodeNameKey]],
        beforeSyncValues,
        instance[InstanceIdKey]
      );
    }
  }
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
    get(target, propKey, receiver) {
      if (typeof propKey === 'symbol' || Reflect.has(target, propKey)) {
        return Reflect.get(target, propKey, receiver);
      }

      if (shouldRestrictToWorker(interfaceType, propKey)) {
        // this getter is for the Window instance, but it's not one of the known window members
        // the value should only be read from the window environment and
        // should not get the value from the main thread's window
        // if the member is in the environment window instance, get the value
        if (Reflect.has(self, propKey)) {
          return Reflect.get(self, propKey, receiver);
        }

        const globalRtnValue = target[propKey];
        logWorkerGetter(target, [propKey], globalRtnValue, true);
        return globalRtnValue;
      }

      if (
        interfaceType === InterfaceType.CommentNode ||
        interfaceType === InterfaceType.DocumentTypeNode
      ) {
        // have these nodes interfaces just use the same as a text node
        interfaceType = InterfaceType.TextNode;
      }

      const memberPath = [...initMemberPath, String(propKey)];
      const interfaceInfo = webWorkerCtx.$interfaces$.find((i) => i[0] === interfaceType);
      if (interfaceInfo) {
        const memberTypeInfo = interfaceInfo[2];
        const memberInfo = memberTypeInfo[memberPath[len(memberPath) - 1]];
        if (memberInfo === InterfaceType.Function) {
          return (...args: any[]) => callMethod(target, memberPath, args);
        } else if (memberInfo > InterfaceType.Window) {
          return proxy(memberInfo, target, [...memberPath]);
        }
      }

      const stateValue = getInstanceStateValue<Function>(target, memberPath[0]);
      if (typeof stateValue === 'function') {
        return (...args: any[]) => {
          const rtnValue = stateValue.apply(target, args);
          logWorkerCall(target, memberPath, args, rtnValue);
          return rtnValue;
        };
      }

      return getter(target, memberPath);
    },

    set(target, propKey, value, receiver) {
      if (typeof propKey === 'symbol' || Reflect.has(target, propKey)) {
        Reflect.set(target, propKey, value, receiver);
      } else if (shouldRestrictToWorker(interfaceType, propKey)) {
        // this value should only be set within the web worker world
        // it does not get passed and set to the main thread's window
        // set the value to just the window environment
        target[propKey] = value;
        logWorkerSetter(target, [propKey], value, true);
      } else {
        setter(target, [...initMemberPath, propKey], value);
      }
      return true;
    },

    has(target, propKey) {
      if (interfaceType === InterfaceType.Window) {
        return true;
      }
      return Reflect.has(target, propKey);
    },
  });
};

const shouldRestrictToWorker = (interfaceType: InterfaceType, propKey: string) =>
  interfaceType === InterfaceType.Window &&
  (!webWorkerCtx.$windowMemberNames$.includes(propKey) ||
    webWorkerCtx.$forwardedTriggers$.includes(propKey));
