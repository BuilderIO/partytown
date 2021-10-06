import {
  AccessType,
  ImmediateSetter,
  InterfaceType,
  MainAccessRequest,
  MainAccessResponse,
  NodeName,
  PlatformInstanceId,
  SerializedTransfer,
} from '../types';
import { constructInstance } from './worker-constructors';
import {
  debug,
  len,
  logWorkerCall,
  logWorkerGlobalConstructor,
  logWorkerGetter,
  logWorkerSetter,
  randomId,
} from '../utils';
import { deserializeFromMain, serializeForMain } from './worker-serialization';
import { getInstanceStateValue, setStateValue } from './worker-state';
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
  $newInstanceId$?: number,
  $contextWinId$?: number
) => {
  const $winId$ = instance[WinIdKey];
  const $instanceId$ = instance[InstanceIdKey];

  const $forwardToWorkerAccess$ = webWorkerCtx.$winId$ !== $winId$ || !!$contextWinId$;

  const accessReq: MainAccessRequest = {
    $msgId$: randomId(),
    $winId$,
    $forwardToWorkerAccess$,
    $instanceId$: instance[InstanceIdKey],
    $interfaceType$: instance[InterfaceTypeKey],
    $nodeName$: instance[NodeNameKey],
    $accessType$,
    $memberPath$,
    $data$,
    $immediateSetters$,
    $newInstanceId$,
    $contextWinId$,
  };

  const accessRsp: MainAccessResponse = syncSendMessage(webWorkerCtx, accessReq);

  const isPromise = accessRsp.$isPromise$;
  const rtnValue = deserializeFromMain($winId$, $instanceId$, $memberPath$, accessRsp.$rtnValue$!);

  if (accessRsp.$error$) {
    if (debug) {
      console.error(self.name, JSON.stringify(accessReq));
    }
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
  applyBeforeSyncSetters(instance[WinIdKey], instance);

  const rtnValue = syncMessage(instance, AccessType.Get, memberPath);
  logWorkerGetter(instance, memberPath, rtnValue);
  return rtnValue;
};

export const setter = (instance: WorkerProxy, memberPath: string[], value: any) => {
  const winId = instance[WinIdKey];
  const instanceId = instance[InstanceIdKey];
  const immediateSetters = instance[ImmediateSettersKey];
  const serializedValue = serializeForMain(winId, instanceId, value);

  logWorkerSetter(instance, memberPath, value);

  if (immediateSetters) {
    // queue up setters to be applied immediately after the
    // node is added to the dom
    immediateSetters.push([memberPath, serializedValue]);
    return;
  }

  if (instanceId === PlatformInstanceId.window) {
    if (typeof value === 'function' || (typeof value === 'object' && value)) {
      setStateValue(instanceId, memberPath[0], serializedValue);
    }
  }

  syncMessage(instance, AccessType.Set, memberPath, serializedValue);
};

export const callMethod = (
  instance: WorkerProxy,
  memberPath: string[],
  args: any[],
  immediateSetters?: ImmediateSetter[],
  newInstanceId?: number,
  contextWinId?: number
) => {
  const winId = instance[WinIdKey];

  applyBeforeSyncSetters(winId, instance);

  args.forEach((arg) => {
    if (arg) {
      applyBeforeSyncSetters(winId, arg);
    }
  });

  const rtnValue = syncMessage(
    instance,
    AccessType.CallMethod,
    memberPath,
    serializeForMain(winId, instance[InstanceIdKey], args),
    immediateSetters,
    newInstanceId,
    contextWinId
  );
  logWorkerCall(instance, memberPath, args, rtnValue);
  return rtnValue;
};

export const createGlobalConstructorProxy = (
  self: any,
  interfaceType: InterfaceType,
  cstrName: string
) => {
  const GlobalCstr = class {
    constructor(...args: any[]) {
      const winId = webWorkerCtx.$winId$;
      const instanceId = randomId();
      const workerProxy = new WorkerProxy(interfaceType, instanceId, winId);

      args.forEach((arg) => {
        if (arg) {
          applyBeforeSyncSetters(winId, arg);
        }
      });

      syncMessage(
        workerProxy,
        AccessType.GlobalConstructor,
        [cstrName],
        serializeForMain(winId, instanceId, args)
      );

      logWorkerGlobalConstructor(workerProxy, cstrName, args);

      return workerProxy;
    }
  };

  self[cstrName] = Object.defineProperty(GlobalCstr, 'name', {
    value: cstrName,
  });
};

export const applyBeforeSyncSetters = (winId: number, instance: WorkerProxy) => {
  const beforeSyncValues = instance[ImmediateSettersKey];
  if (beforeSyncValues) {
    instance[ImmediateSettersKey] = undefined;

    const winDoc = constructInstance(
      InterfaceType.Document,
      PlatformInstanceId.document,
      winId,
      NodeName.Document
    );
    const syncedTarget = callMethod(
      winDoc,
      ['createElement'],
      [instance[NodeNameKey]],
      beforeSyncValues,
      instance[InstanceIdKey]
    );

    if (debug && instance[InstanceIdKey] !== syncedTarget[InstanceIdKey]) {
      console.error('Main and web worker instance ids do not match', instance, syncedTarget);
    }
  }
};

const createComplexMember = (
  interfaceType: InterfaceType,
  instance: WorkerProxy,
  memberPath: string[]
) => {
  if (
    interfaceType === InterfaceType.CommentNode ||
    interfaceType === InterfaceType.DocumentTypeNode
  ) {
    // have these nodes interfaces just use the same as a text node
    interfaceType = InterfaceType.TextNode;
  }

  const interfaceInfo = webWorkerCtx.$interfaces$.find((i) => i[0] === interfaceType);
  if (interfaceInfo) {
    const memberTypeInfo = interfaceInfo[2];
    const memberInfo = memberTypeInfo[memberPath[len(memberPath) - 1]];
    if (memberInfo === InterfaceType.Function) {
      return (...args: any[]) => callMethod(instance, memberPath, args);
    } else if (memberInfo > InterfaceType.Window) {
      return proxy(memberInfo, instance, [...memberPath]);
    }
  }

  const stateValue = getInstanceStateValue<Function>(instance, memberPath[0]);
  if (typeof stateValue === 'function') {
    return (...args: any[]) => {
      const rtnValue = stateValue.apply(instance, args);
      logWorkerCall(instance, memberPath, args, rtnValue, false);
      return rtnValue;
    };
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
