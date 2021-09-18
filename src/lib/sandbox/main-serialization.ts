import { getConstructorName, isValidMemberName, noop } from '../utils';
import { getInstance, getAndSetInstanceId } from './main-instances';
import {
  InterfaceType,
  MainWindowContext,
  PlatformInstanceId,
  SerializedInstance,
  SerializedTransfer,
  SerializedType,
  WorkerMessageType,
} from '../types';

export const serializeForWorker = (
  winCtx: MainWindowContext,
  value: any,
  added: Set<any>,
  type?: string,
  obj?: { [key: string]: SerializedTransfer | undefined },
  key?: string
): SerializedTransfer | undefined => {
  if (value !== undefined) {
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
      return setRef(winCtx, instanceId, serializedValue);
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

const instanceRefs = new WeakMap<any, RefHandlerMap>();

const setRef = (winCtx: MainWindowContext, instanceId: number, refId: number) => {
  let instance = getInstance(winCtx, instanceId);
  let refHandlerMap: RefHandlerMap | undefined;
  let refHandler: RefHandler | undefined;

  if (instance) {
    refHandlerMap = instanceRefs.get(instance);
    if (!refHandlerMap) {
      refHandlerMap = new Map<number, RefHandler>();
    }

    refHandler = refHandlerMap.get(refId);
    if (!refHandler) {
      refHandler = createRefHandler(winCtx, refId);
      refHandlerMap.set(refId, refHandler);
    }

    return refHandler;
  }

  return noop;
};

const createRefHandler = (winCtx: MainWindowContext, refId: number): RefHandler =>
  function (this: any, ...args: any[]) {
    const serializedTarget = serializeForWorker(winCtx, this, new Set());
    const serializedArgs = serializeForWorker(winCtx, args, new Set());
    winCtx.$worker$!.postMessage([
      WorkerMessageType.RefHandlerCallback,
      refId,
      serializedTarget,
      serializedArgs,
    ]);
  };

type RefHandler = (...args: any[]) => void;

type RefHandlerMap = Map<number, RefHandler>;
