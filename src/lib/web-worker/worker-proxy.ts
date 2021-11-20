import {
  ApplyPath,
  ApplyPathType,
  MainAccessRequest,
  MainAccessResponse,
  MainAccessTask,
} from '../types';
import {
  ApplyPathKey,
  cachedDimensions,
  dimensionMethodNames,
  InstanceIdKey,
  webWorkerCtx,
  WinIdKey,
} from './worker-constants';
import {
  debug,
  len,
  logWorker,
  logWorkerCall,
  logWorkerGetter,
  logWorkerSetter,
  randomId,
} from '../utils';
import { deserializeFromMain, serializeInstanceForMain } from './worker-serialization';
import syncSendMessage from '@sync-send-message-to-main';
import type { WorkerProxy } from './worker-proxy-constructor';

const taskQueue: MainAccessTask[] = [];

export const queue = (
  instance: WorkerProxy,
  $applyPath$: ApplyPath,
  isSetter?: boolean,
  $assignInstanceId$?: number,
  $groupedGetters$?: string[]
) => {
  const $instanceId$ = instance[InstanceIdKey];
  taskQueue.push({
    $winId$: instance[WinIdKey],
    $instanceId$,
    $applyPath$: [...instance[ApplyPathKey], ...$applyPath$],
    $assignInstanceId$,
    $groupedGetters$,
  });

  if (!isSetter) {
    return sync();
  }

  setTimeout(sync, 40);
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

export const getter = (instance: WorkerProxy, applyPath: ApplyPath, groupedGetters?: string[]) => {
  const rtnValue = queue(instance, applyPath, false, undefined, groupedGetters);

  logWorkerGetter(instance, applyPath, rtnValue, false, !!groupedGetters);

  return rtnValue;
};

export const setter = (instance: WorkerProxy, applyPath: ApplyPath, value: any) => {
  const serializedValue = serializeInstanceForMain(instance, value);

  const setterApplyPath = [...applyPath, serializedValue, ApplyPathType.SetValue];

  logWorkerSetter(instance, setterApplyPath, value);

  queue(instance, setterApplyPath, true);
};

export const callMethod = (
  instance: WorkerProxy,
  applyPath: ApplyPath,
  args: any[],
  assignInstanceId?: number
) => {
  const methodName = applyPath[len(applyPath) - 1];
  const isSetter = setterMethods.includes(methodName);

  const callApplyPath = [...applyPath, serializeInstanceForMain(instance, args)];

  const rtnValue = queue(instance, callApplyPath, isSetter, assignInstanceId);

  logWorkerCall(instance, callApplyPath, args, rtnValue);

  if (!isSetter && !dimensionMethodNames.includes(methodName)) {
    cachedDimensions.clear();
  }

  return rtnValue;
};

const setterMethods =
  'addEventListener,removeEventListener,createElement,createTextNode,insertBefore,insertRule,deleteRule,setAttribute,setItem,removeItem,classList.add,classList.remove,classList.toggle'.split(
    ','
  );
