import { getConstructorName, isValidMemberName, noop } from '../utils';
import { getInstance, getAndSetInstanceId } from './main-instances';
import {
  InterfaceType,
  MainWindowContext,
  PlatformInstanceId,
  RefHandler,
  RefMap,
  SerializedInstance,
  SerializedTransfer,
  SerializedType,
  WorkerMessageType,
} from '../types';
import { mainInstanceRefs } from './main-constants';

export const serializeForWorker = (
  winCtx: MainWindowContext,
  value: any,
  added?: Set<any>,
  type?: string,
  obj?: { [key: string]: SerializedTransfer | undefined },
  key?: string
): SerializedTransfer | undefined => {
  if (value !== undefined) {
    added = added || new Set();
    type = typeof value;

    if (type === 'string' || type === 'number' || type === 'boolean' || value == null) {
      return [SerializedType.Primitive, value];
    }

    if (type === 'function') {
      return [SerializedType.Method];
    }

    if (Array.isArray(value)) {
      if (!added.has(value)) {
        added.add(value);
        return [SerializedType.Array, value.map((v) => serializeForWorker(winCtx, v, added))];
      }
      return [SerializedType.Array, []];
    }

    if (type === 'object') {
      if (value.nodeType) {
        const nodeInstance: SerializedInstance = {
          $winId$: winCtx.$winId$,
          $interfaceType$: value.nodeType,
          $instanceId$: getAndSetInstanceId(winCtx, value),
          $nodeName$: value.nodeName,
        };
        return [SerializedType.Instance, nodeInstance];
      }

      if (value === value.window) {
        const winInstance: SerializedInstance = {
          $winId$: winCtx.$winId$,
          $interfaceType$: InterfaceType.Window,
          $instanceId$: PlatformInstanceId.window,
        };
        return [SerializedType.Instance, winInstance];
      }

      if (isNodeList(getConstructorName(value))) {
        const nodeList: SerializedInstance = {
          $winId$: winCtx.$winId$,
          $interfaceType$: InterfaceType.NodeList,
          $items$: Array.from(value).map((v) => serializeForWorker(winCtx, v, added)![1]) as any,
        };
        return [SerializedType.Instance, nodeList];
      }

      obj = {};
      if (!added.has(value)) {
        added.add(value);
        for (key in value) {
          if (isValidMemberName(key)) {
            obj[key] = serializeForWorker(winCtx, value[key], added);
          }
        }
      }
      return [SerializedType.Object, obj];
    }
  }
};

export const deserializeFromWorker = (
  winCtx: MainWindowContext,
  instanceId: number,
  serializedTransfer: SerializedTransfer | undefined,
  serializedType?: SerializedType,
  serializedValue?: any,
  obj?: { [key: string]: any },
  key?: string
): any => {
  if (serializedTransfer) {
    serializedType = serializedTransfer[0];
    serializedValue = serializedTransfer[1] as any;

    if (serializedType === SerializedType.Primitive) {
      return serializedValue;
    }

    if (serializedType === SerializedType.Ref) {
      return deserializeRefFromWorker(winCtx, instanceId, serializedValue);
    }

    if (serializedType === SerializedType.Array) {
      return (serializedValue as SerializedTransfer[]).map((v) =>
        deserializeFromWorker(winCtx, instanceId, v)
      );
    }

    if (serializedType === SerializedType.Instance) {
      return getInstance(winCtx, (serializedValue as SerializedInstance).$instanceId$!);
    }

    if (serializedType === SerializedType.Object) {
      obj = {};
      for (key in serializedValue) {
        obj[key] = deserializeFromWorker(winCtx, instanceId, serializedValue[key]);
      }
      return obj;
    }
  }
};

const isNodeList = (cstrName: string) => cstrName === 'HTMLCollection' || cstrName === 'NodeList';

const deserializeRefFromWorker = (winCtx: MainWindowContext, instanceId: number, refId: number) => {
  let instance = getInstance(winCtx, instanceId);
  let mainRefHandlerMap: RefMap | undefined;
  let mainRefHandler: RefHandler | undefined;

  if (instance) {
    mainRefHandlerMap = mainInstanceRefs.get(instance);
    if (!mainRefHandlerMap) {
      mainInstanceRefs.set(instance, (mainRefHandlerMap = {}));
    }

    mainRefHandler = mainRefHandlerMap[refId];
    if (!mainRefHandler) {
      mainRefHandler = createMainRefHandler(winCtx, refId);
      mainRefHandlerMap[refId] = mainRefHandler;
    }

    return mainRefHandler;
  }

  return noop;
};

const createMainRefHandler = (winCtx: MainWindowContext, refId: number): RefHandler =>
  function (this: any, ...args: any[]) {
    const serializedTarget = serializeForWorker(winCtx, this);
    const serializedArgs = serializeForWorker(winCtx, args);
    winCtx.$worker$!.postMessage([
      WorkerMessageType.RefHandlerCallback,
      refId,
      serializedTarget,
      serializedArgs,
    ]);
  };
