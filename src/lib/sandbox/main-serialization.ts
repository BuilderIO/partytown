import { getConstructorName, isValidMemberName, noop } from '../utils';
import { getInstance, getAndSetInstanceId, getInstanceId } from './main-instances';
import {
  InterfaceType,
  MainWindowContext,
  PlatformApiId,
  SerializedInstance,
  SerializedNodeList,
  SerializedTransfer,
  SerializedType,
  WorkerMessageType,
} from '../types';

export const serializeForWorker = (
  winCtx: MainWindowContext,
  value: any,
  added: Set<any>,
  type?: string,
  obj?: { [key: string]: SerializedTransfer }
): SerializedTransfer => {
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
          $instanceId$: PlatformApiId.window,
        };
        return [SerializedType.Instance, winInstance];
      }

      if (isNodeList(getConstructorName(value))) {
        const nodeList: SerializedNodeList = {
          $winId$: winCtx.$winId$,
          $interfaceType$: InterfaceType.NodeList,
          $data$: Array.from(value).map((v) => serializeForWorker(winCtx, v, added)[1]) as any,
        };
        return [SerializedType.Instance, nodeList];
      }

      obj = {};
      if (!added.has(value)) {
        added.add(value);
        for (const k in value) {
          if (isValidMemberName(k)) {
            obj[k] = serializeForWorker(winCtx, value[k], added);
          }
        }
      }

      return [SerializedType.Object, obj];
    }
  }
  return [];
};

export const deserializeFromWorker = (
  winCtx: MainWindowContext,
  instanceId: number,
  serializedTransfer: SerializedTransfer
): any => {
  const serializedType = serializedTransfer[0];
  const serializedValue = serializedTransfer[1] as any;

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
    const serializeInstance: SerializedInstance = serializedValue;
    return getInstance(winCtx, serializeInstance.$instanceId$!);
  }

  if (serializedType === SerializedType.Object) {
    const obj: { [key: string]: any } = {};
    for (const k in serializedValue) {
      obj[k] = deserializeFromWorker(winCtx, instanceId, serializedValue[k]);
    }
    return obj;
  }

  return undefined;
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
