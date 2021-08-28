import { getConstructorName, isValidMemberName, noop } from '../utils';
import { getInstance, getInstanceId } from './main-instances';
import { getMainPlatformApi, getMainPlatformApiId } from './main-platform-api';
import {
  InterfaceType,
  SerializedNode,
  SerializedNodeList,
  SerializedTransfer,
  SerializedType,
  WorkerMessageType,
} from '../types';
import { mainCtx } from './main-context';

export const serializeForWorker = (value: any, added: Set<any>): SerializedTransfer => {
  const type = typeof value;
  if (type === 'string' || type === 'number' || type === 'boolean' || value == null) {
    return [SerializedType.Primitive, value];
  }

  const platformApiId = getMainPlatformApiId(value);
  if (platformApiId > -1) {
    return [SerializedType.PlatformApi, platformApiId];
  }

  if (type === 'function') {
    return [SerializedType.Method];
  }

  if (Array.isArray(value)) {
    if (!added.has(value)) {
      added.add(value);
      return [SerializedType.Array, value.map((v) => serializeForWorker(v, added))];
    }
    return [SerializedType.Array, []];
  }

  if (type === 'object') {
    if (value.nodeType) {
      const nodeInstance: SerializedNode = {
        $interfaceType$: value.nodeType,
        $instanceId$: getInstanceId(value),
        $data$: value.nodeName,
      };
      return [SerializedType.Instance, nodeInstance];
    }

    if (isNodeList(getConstructorName(value))) {
      const nodeList: SerializedNodeList = {
        $interfaceType$: InterfaceType.NodeList,
        $data$: Array.from(value).map((v) => serializeForWorker(v, added)[1]) as any,
      };
      return [SerializedType.Instance, nodeList];
    }

    const obj: { [key: string]: SerializedTransfer } = {};
    if (!added.has(value)) {
      added.add(value);

      for (const k in value) {
        if (isValidMemberName(k)) {
          obj[k] = serializeForWorker(value[k], added);
        }
      }
    }

    return [SerializedType.Object, obj];
  }

  return [];
};

export const deserializeFromWorker = (
  instanceId: number,
  serializedTransfer: SerializedTransfer
): any => {
  const serializedType = serializedTransfer[0];
  const serializedValue = serializedTransfer[1] as any;

  if (serializedType === SerializedType.Primitive) {
    return serializedValue;
  }

  if (serializedType === SerializedType.PlatformApi) {
    return getMainPlatformApi(serializedValue);
  }

  if (serializedType === SerializedType.Ref) {
    return setRef(instanceId, serializedValue);
  }

  if (serializedType === SerializedType.Array) {
    return (serializedValue as SerializedTransfer[]).map((v) =>
      deserializeFromWorker(instanceId, v)
    );
  }

  if (serializedType === SerializedType.Object) {
    const obj: { [key: string]: any } = {};
    for (const k in serializedValue) {
      obj[k] = deserializeFromWorker(instanceId, serializedValue[k]);
    }
    return obj;
  }

  return undefined;
};

const isNodeList = (cstrName: string) => cstrName === 'HTMLCollection' || cstrName === 'NodeList';

const instanceRefs = new WeakMap<any, RefHandlerMap>();

const setRef = (instanceId: number, refId: number) => {
  let instance = getInstance(instanceId);
  let refHandlerMap: RefHandlerMap | undefined;
  let refHandler: RefHandler | undefined;

  if (instance) {
    refHandlerMap = instanceRefs.get(instance);
    if (!refHandlerMap) {
      refHandlerMap = new Map<number, RefHandler>();
    }

    refHandler = refHandlerMap.get(refId);
    if (!refHandler) {
      refHandler = createRefHandler(refId);
      refHandlerMap.set(refId, refHandler);
    }

    return refHandler;
  }

  return noop;
};

const createRefHandler = (refId: number): RefHandler =>
  function (this: any, ...args: any[]) {
    const serializedTarget = serializeForWorker(this, new Set());
    const serializedArgs = serializeForWorker(args, new Set());
    mainCtx.$workerPostMessage$.forEach((postMessage) =>
      postMessage([WorkerMessageType.RefHandlerCallback, refId, serializedTarget, serializedArgs])
    );
  };

type RefHandler = (...args: any[]) => void;

type RefHandlerMap = Map<number, RefHandler>;
