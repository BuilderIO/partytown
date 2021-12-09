import {
  ApplyPath,
  ApplyPathType,
  HookOptions,
  MainAccessRequest,
  MainAccessResponse,
  MainAccessTask,
  WorkerMessageType,
} from '../types';
import {
  ApplyPathKey,
  cachedDimensions,
  dimensionMethodNames,
  HookContinue,
  HookPrevent,
  InstanceIdKey,
  NodeNameKey,
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
import type { Node } from './worker-node';
import syncSendMessage from '@sync-send-message-to-main';
import type { WorkerProxy } from './worker-proxy-constructor';

const taskQueue: MainAccessTask[] = [];

let asyncMsgTimer: any = 0;

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
    return sendToMain(true);
  }

  asyncMsgTimer = setTimeout(sendToMain, 30);
};

export const sendToMain = (isBlocking?: boolean) => {
  clearTimeout(asyncMsgTimer);

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

    if (isBlocking) {
      // blocking call, returns response value from main
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

      return isPromise ? Promise.resolve(rtnValue) : rtnValue;
    }

    // async call, fire and forget, returns undefined
    webWorkerCtx.$postMessage$([WorkerMessageType.AsyncAccessRequest, accessReq]);
  }
};

export const getter = (instance: WorkerProxy, applyPath: ApplyPath, groupedGetters?: string[]) => {
  let rtnValue: any;
  if (webWorkerCtx.$config$.get) {
    rtnValue = webWorkerCtx.$config$.get(createHookOptions(instance, applyPath));
    if (rtnValue !== HookContinue) {
      return rtnValue;
    }
  }

  rtnValue = queue(instance, applyPath, false, undefined, groupedGetters);

  logWorkerGetter(instance, applyPath, rtnValue, false, !!groupedGetters);

  return rtnValue;
};

export const setter = (instance: WorkerProxy, applyPath: ApplyPath, value: any) => {
  if (webWorkerCtx.$config$.set) {
    const hookSetterValue = webWorkerCtx.$config$.set({
      value,
      prevent: HookPrevent,
      ...createHookOptions(instance, applyPath),
    });
    if (hookSetterValue === HookPrevent) {
      return;
    }
    if (hookSetterValue !== HookContinue) {
      value = hookSetterValue;
    }
  }

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
  let rtnValue: any;
  if (webWorkerCtx.$config$.apply) {
    rtnValue = webWorkerCtx.$config$.apply({ args, ...createHookOptions(instance, applyPath) });
    if (rtnValue !== HookContinue) {
      return rtnValue;
    }
  }

  const methodName = applyPath[len(applyPath) - 1];
  const isSetter = setterMethods.includes(methodName);

  const callApplyPath = [...applyPath, serializeInstanceForMain(instance, args)];

  rtnValue = queue(instance, callApplyPath, isSetter, assignInstanceId);

  logWorkerCall(instance, callApplyPath, args, rtnValue);

  if (!isSetter && !dimensionMethodNames.includes(methodName)) {
    cachedDimensions.clear();
  }

  return rtnValue;
};

const createHookOptions = (instance: WorkerProxy, applyPath: ApplyPath): HookOptions => ({
  name: applyPath.join('.'),
  continue: HookContinue,
  nodeName: (instance as any as Node)[NodeNameKey],
  constructor: (instance as any).constructor && (instance as any).constructor.name,
});

const setterMethods =
  'addEventListener,removeEventListener,createElement,createTextNode,insertBefore,insertRule,deleteRule,setAttribute,setItem,removeItem,classList.add,classList.remove,classList.toggle'.split(
    ','
  );
