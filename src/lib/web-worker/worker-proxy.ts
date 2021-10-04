import {
  AccessType,
  ImmediateSetter,
  InterfaceType,
  MainAccessRequest,
  MainAccessRequestTask,
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
import { getInstanceStateValue, setInstanceStateValue } from './worker-state';
import {
  ImmediateSettersKey,
  InstanceIdKey,
  InterfaceTypeKey,
  NodeNameKey,
  ProxyKey,
  taskQueue,
  webWorkerCtx,
  WinIdKey,
} from './worker-constants';
import syncSendMessage from '@sync-send-message-to-main';
import { WorkerProxy } from './worker-proxy-constructor';

const queueTask = (
  instance: WorkerProxy,
  $accessType$: AccessType,
  $memberPath$: string[],
  $data$?: SerializedTransfer | undefined,
  $immediateSetters$?: ImmediateSetter[],
  $newInstanceId$?: number
) => {
  const winId = instance[WinIdKey];
  const winQueue = (taskQueue[winId] = taskQueue[winId] || []);

  const $forwardToWorkerAccess$ = webWorkerCtx.$winId$ !== winId;

  const accessReqTask: MainAccessRequestTask = {
    $instanceId$: instance[InstanceIdKey],
    $interfaceType$: instance[InterfaceTypeKey],
    $nodeName$: instance[NodeNameKey],
    $accessType$,
    $memberPath$,
    $data$,
    $immediateSetters$,
    $newInstanceId$,
  };

  winQueue.push(accessReqTask);

  return drainQueue(
    winId,
    accessReqTask.$instanceId$,
    $memberPath$,
    $forwardToWorkerAccess$,
    winQueue
  );
};

const drainQueue = (
  $winId$: number,
  $instanceId$: number,
  $memberPath$: string[],
  $forwardToWorkerAccess$: boolean,
  queue: MainAccessRequestTask[]
) => {
  if (len(queue)) {
    const accessReq: MainAccessRequest = {
      $msgId$: randomId(),
      $winId$,
      $forwardToWorkerAccess$,
      $tasks$: [...queue],
    };
    const accessRsp: MainAccessResponse = syncSendMessage(webWorkerCtx, accessReq);

    const errors = accessRsp.$errors$.join();
    const isPromise = accessRsp.$isPromise$;
    const rtn = deserializeFromMain($winId$, $instanceId$, $memberPath$, accessRsp.$rtnValue$!);

    queue.length = 0;

    if (errors) {
      if (debug) {
        console.error(self.name, JSON.stringify(accessReq));
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

export const getter = (instance: WorkerProxy, memberPath: string[]) => {
  applyBeforeSyncSetters(instance[WinIdKey], instance);

  const rtn = queueTask(instance, AccessType.Get, memberPath);
  logWorkerGetter(instance, memberPath, rtn);
  return rtn;
};

export const setter = (instance: WorkerProxy, memberPath: string[], value: any) => {
  logWorkerSetter(instance, memberPath, value);

  if (instance[ImmediateSettersKey]) {
    instance[ImmediateSettersKey]!.push([
      memberPath,
      serializeForMain(instance[WinIdKey], instance[InstanceIdKey], value),
    ]);
  } else {
    const serializedValue = serializeForMain(instance[WinIdKey], instance[InstanceIdKey], value);

    if (typeof value === 'function') {
      setInstanceStateValue(instance, memberPath.join('.'), value);
    }

    queueTask(instance, AccessType.Set, memberPath, serializedValue);
  }
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

      queueTask(
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

export const callMethod = (
  instance: WorkerProxy,
  memberPath: string[],
  args: any[],
  immediateSetters?: ImmediateSetter[],
  newInstanceId?: number
) => {
  const winId = instance[WinIdKey];
  applyBeforeSyncSetters(winId, instance);

  args.forEach((arg) => {
    if (arg) {
      applyBeforeSyncSetters(winId, arg);
    }
  });

  const rtn = queueTask(
    instance,
    AccessType.CallMethod,
    memberPath,
    serializeForMain(winId, instance[InstanceIdKey], args),
    immediateSetters,
    newInstanceId
  );
  logWorkerCall(instance, memberPath, args, rtn);
  return rtn;
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

  const stateValue = getInstanceStateValue<Function>(instance, memberPath.join('.'));
  if (typeof stateValue === 'function') {
    return (...args: any[]) => stateValue.apply(instance, args);
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
