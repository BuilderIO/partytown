import { callMethod } from './worker-proxy';
import { debug, logWorker } from '../utils';
import { ElementConstructors, WorkerElement, WorkerNode, WorkerNodeList } from './worker-node';
import {
  InterfaceType,
  PlatformApiId,
  SerializedInstance,
  SerializedNode,
  SerializedNodeList,
  SerializedRefTransfer,
  SerializedTransfer,
  SerializedType,
} from '../types';
import { InstanceIdKey, webWorkerCtx } from './worker-constants';

let refIds = 1;
const refsByRefId = new Map<number, Ref>();
const refIdsByRef = new WeakMap<Ref, number>();

export const serializeForMain = (value: any): SerializedTransfer => {
  const type = typeof value;
  if (type === 'string' || type === 'boolean' || type === 'number' || value == null) {
    return [SerializedType.Primitive, value];
  }

  if (type === 'function') {
    return serializeRef(value);
  }

  if (Array.isArray(value)) {
    return [SerializedType.Array, value.map(serializeForMain)];
  }

  if (type === 'object') {
    if (typeof value[InstanceIdKey] === 'number') {
      return [SerializedType.InstanceById, value[InstanceIdKey]];
    }

    const serializedObj: { [key: string]: SerializedTransfer } = {};
    for (const k in value) {
      serializedObj[k] = serializeForMain(value[k]);
    }
    return [SerializedType.Object, serializedObj];
  }

  return [];
};

export const deserializeFromMain = (
  target: any,
  memberPath: string[],
  serializedValueTransfer: SerializedTransfer
): any => {
  if (serializedValueTransfer) {
    const serializedType = serializedValueTransfer[0];
    const serializedValue = serializedValueTransfer[1] as any;

    if (serializedType === SerializedType.Primitive) {
      return serializedValue;
    }

    if (serializedType === SerializedType.Method) {
      return (...args: any[]) => callMethod(target, memberPath, args);
    }

    if (serializedType === SerializedType.Instance) {
      const serializedInstance: SerializedInstance = serializedValue;
      return constructInstance(serializedInstance);
    }

    if (serializedType === SerializedType.Array) {
      const serializedArray: SerializedTransfer[] = serializedValue;
      return serializedArray.map((v) => deserializeFromMain(target, memberPath, v));
    }

    if (serializedType === SerializedType.Object) {
      const obj: { [key: string]: any } = {};
      for (const key in serializedValue) {
        obj[key] = deserializeFromMain(target, [...memberPath, key], serializedValue[key]);
      }
      return obj;
    }
  }
  return undefined;
};

const constructInstance = (serializedInstance: SerializedInstance): any => {
  const interfaceType = serializedInstance.$interfaceType$;
  const instanceId = serializedInstance.$instanceId$;
  const doc = webWorkerCtx.$document$!;
  const serializedNode: SerializedNode = serializedInstance as any;

  if (instanceId === PlatformApiId.body) {
    return doc.body;
  }
  if (instanceId === PlatformApiId.document) {
    return doc;
  }
  if (instanceId === PlatformApiId.documentElement) {
    return doc.documentElement;
  }
  if (instanceId === PlatformApiId.head) {
    return doc.head;
  }
  if (instanceId === PlatformApiId.history) {
    return webWorkerCtx.$history$;
  }
  if (instanceId === PlatformApiId.localStorage) {
    return webWorkerCtx.$localStorage$;
  }
  if (instanceId === PlatformApiId.sessionStorage) {
    return webWorkerCtx.$sessionStorage$;
  }
  if (instanceId === PlatformApiId.window) {
    return self;
  }
  if (interfaceType === InterfaceType.Element) {
    return new (ElementConstructors[serializedNode.$data$] || WorkerElement)(serializedNode);
  }
  if (interfaceType === InterfaceType.TextNode) {
    return new WorkerNode(serializedInstance as SerializedNode);
  }
  if (interfaceType === InterfaceType.NodeList) {
    const serializedNodeList: SerializedNodeList = serializedInstance as any;
    return new WorkerNodeList(serializedNodeList.$data$.map(constructInstance));
  }
  return {};
};

const serializeRef = (ref: any): SerializedRefTransfer => {
  let refId = refIdsByRef.get(ref);
  if (!refId) {
    refId = refIds++;
    refIdsByRef.set(ref, refId);
    refsByRefId.set(refId, ref);
  }
  return [SerializedType.Ref, refId];
};

export const callRefHandler = (
  refId: number,
  serializedTarget: SerializedTransfer,
  serializedArgs: SerializedTransfer
) => {
  const ref = refsByRefId.get(refId);
  if (ref) {
    try {
      const target = deserializeFromMain(null, [], serializedTarget);
      const args = deserializeFromMain(target, [], serializedArgs);
      ref.apply(target, args);
    } catch (e) {
      console.error(e);
    }
  } else if (debug) {
    logWorker(`Unable to find callRefHandler, ref "${refId}", args: ${serializedArgs}`);
  }
};

type Ref = any;
