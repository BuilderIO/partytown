import {
  ApplyPath,
  ApplyPathType,
  InterfaceType,
  MainAccessRequest,
  MainAccessResponse,
  MainAccessTask,
} from '../types';
import {
  cachedDimensions,
  InstanceIdKey,
  InterfaceTypeKey,
  webWorkerCtx,
  WinIdKey,
} from './worker-constants';
import {
  debug,
  defineConstructorName,
  getLastMemberName,
  len,
  logWorker,
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
import { getInstanceStateValue } from './worker-state';
import syncSendMessage from '@sync-send-message-to-main';
import { WorkerProxy } from './worker-proxy-constructor';

const taskQueue: MainAccessTask[] = [];

const queue = (
  instance: WorkerProxy,
  $applyPath$: ApplyPath,
  isSetter?: boolean,
  $assignInstanceId$?: number
) => {
  const $instanceId$ = instance[InstanceIdKey];
  taskQueue.push({
    $winId$: instance[WinIdKey],
    $instanceId$,
    $applyPath$,
    $assignInstanceId$,
  });

  if (!isSetter) {
    return sync();
  }

  setTimeout(sync, 50);
};

export const sync = () => {
  if (len(taskQueue)) {
    if (debug && webWorkerCtx.$config$.logMainAccess) {
      logWorker(`Main access, tasks sent: ${taskQueue.length}`);
    }

    const endTask = taskQueue[len(taskQueue) - 1];
    const accessReq: MainAccessRequest = {
      $msgId$: randomId(),
      $tasks$: taskQueue.slice(),
    };
    taskQueue.length = 0;

    const accessRsp: MainAccessResponse = syncSendMessage(webWorkerCtx, accessReq);

    const isPromise = accessRsp.$isPromise$;

    const rtnValue = deserializeFromMain(
      endTask.$instanceId$,
      endTask.$applyPath$,
      accessRsp.$rtnValue$!
    );

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
  }
};

export const getter = (instance: WorkerProxy, applyPath: ApplyPath) => {
  let cacheKey = [instance[WinIdKey], instance[InstanceIdKey], applyPath[0]].join('.');
  let rtnValue = cachedDimensions.get(cacheKey);
  let key: string;

  if (typeof rtnValue === 'number') {
    logWorkerGetter(instance, applyPath, rtnValue);
    return rtnValue;
  }

  rtnValue = queue(instance, applyPath);

  if (rtnValue && !rtnValue[InstanceIdKey] && rtnValue.ptD === 9) {
    for (key in rtnValue) {
      cachedDimensions.set(
        instance[WinIdKey] + '.' + instance[InstanceIdKey] + '.' + key,
        rtnValue[key]
      );
    }
    rtnValue = cachedDimensions.get(cacheKey);
  }
  logWorkerGetter(instance, applyPath, rtnValue);
  return rtnValue;
};

export const setter = (instance: WorkerProxy, applyPath: ApplyPath, value: any) => {
  const serializedValue = serializeInstanceForMain(instance, value);

  logWorkerSetter(instance, applyPath, value);

  queue(instance, [...applyPath, serializedValue, ApplyPathType.SetValue], true);
};

export const callMethod = (
  instance: WorkerProxy,
  applyPath: ApplyPath,
  args: any[],
  assignInstanceId?: number
) => {
  const isSetter = setterMethods.some((m) => applyPath.join('.').includes(m));

  const rtnValue = queue(
    instance,
    [...applyPath, serializeInstanceForMain(instance, args)],
    isSetter,
    assignInstanceId
  );
  logWorkerCall(instance, applyPath, args, rtnValue);

  if (!isSetter) {
    cachedDimensions.clear();
  }

  return rtnValue;
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

      queue(workerProxy, [
        ApplyPathType.GlobalConstructor,
        cstrName,
        serializeForMain(winId, instanceId, args),
      ]);

      logWorkerGlobalConstructor(winId, cstrName, args);

      return workerProxy;
    }
  };

  return defineConstructorName(GlobalCstr, cstrName);
};

export const proxy = <T = any>(
  interfaceType: InterfaceType,
  target: T,
  initApplyPath: ApplyPath
): T => {
  if (
    !target ||
    (typeof target !== 'object' && typeof target !== 'function') ||
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

      const applyPath: ApplyPath = [...initApplyPath, String(propKey)];
      const interfaceInfo = webWorkerCtx.$interfaces$.find((i) => i[0] === interfaceType);
      if (interfaceInfo) {
        const memberTypeInfo = interfaceInfo[2];
        const memberInfo = memberTypeInfo[getLastMemberName(applyPath)];
        if (memberInfo === InterfaceType.Function) {
          return (...args: any[]) => callMethod(target, applyPath, args);
        } else if (memberInfo > InterfaceType.Window) {
          return proxy(memberInfo, target, [...applyPath]);
        }
      }

      const stateValue = getInstanceStateValue<Function>(target, applyPath[0]);
      if (typeof stateValue === 'function') {
        return (...args: any[]) => {
          const rtnValue = stateValue.apply(target, args);
          logWorkerCall(target, applyPath, args, rtnValue);
          return rtnValue;
        };
      }

      return getter(target, applyPath);
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
        setter(target, [...initApplyPath, propKey], value);
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

const setterMethods =
  'addEventListener,removeEventListener,createElement,createTextNode,insertBefore,insertRule,deleteRule,setAttribute,setItem,removeItem,classList.add,classList.remove,classList.toggle'.split(
    ','
  );
