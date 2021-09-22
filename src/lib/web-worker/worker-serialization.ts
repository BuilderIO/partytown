import { callMethod } from './worker-proxy';
import { constructInstance } from './worker-constructors';
import { debug, logWorker, randomId } from '../utils';
import {
  InterfaceType,
  PlatformInstanceId,
  SerializedInstance,
  SerializedRefTransfer,
  SerializedTransfer,
  SerializedType,
} from '../types';
import { InstanceIdKey, InterfaceTypeKey, NodeNameKey, WinIdKey } from './worker-constants';
import { WorkerNodeList } from './worker-node';

export const serializeForMain = (value: any, added?: Set<any>): SerializedTransfer | undefined => {
  if (value !== undefined) {
    added = added || new Set();
    const type = typeof value;
    if (type === 'string' || type === 'boolean' || type === 'number' || value == null) {
      return [SerializedType.Primitive, value];
    }

    if (type === 'function') {
      return serializeRef(value);
    }

    if (Array.isArray(value)) {
      if (!added.has(value)) {
        return [SerializedType.Array, value.map((v) => serializeForMain(v, added))];
      }
      return [SerializedType.Array, []];
    }

    if (type === 'object') {
      if (typeof value[InstanceIdKey] === 'number') {
        const serializeInstance: SerializedInstance = {
          $winId$: value[WinIdKey],
          $interfaceType$: value[InterfaceTypeKey],
          $instanceId$: value[InstanceIdKey],
          $nodeName$: value[NodeNameKey],
        };
        return [SerializedType.Instance, serializeInstance];
      }

      const serializedObj: { [key: string]: SerializedTransfer | undefined } = {};
      if (!added.has(value)) {
        added.add(value);
        for (const k in value) {
          serializedObj[k] = serializeForMain(value[k], added);
        }
      }

      return [SerializedType.Object, serializedObj];
    }
  }
};

export const deserializeFromMain = (
  target: any,
  memberPath: string[],
  serializedValueTransfer?: SerializedTransfer,
  serializedType?: SerializedType,
  serializedValue?: any,
  obj?: { [key: string]: any },
  key?: string
): any => {
  if (serializedValueTransfer) {
    serializedType = serializedValueTransfer[0];
    serializedValue = serializedValueTransfer[1] as any;

    if (serializedType === SerializedType.Primitive) {
      return serializedValue;
    }

    if (serializedType === SerializedType.Method) {
      return (...args: any[]) => callMethod(target, memberPath, args);
    }

    if (serializedType === SerializedType.Instance) {
      const serializedInstance: SerializedInstance = serializedValue;
      return constructSerializedInstance(serializedInstance);
    }

    if (serializedType === SerializedType.Array) {
      const serializedArray: SerializedTransfer[] = serializedValue;
      return serializedArray.map((v) => deserializeFromMain(target, memberPath, v));
    }

    if (serializedType === SerializedType.Object) {
      obj = {};
      for (key in serializedValue) {
        obj[key] = deserializeFromMain(target, [...memberPath, key], serializedValue[key]);
      }
      return obj;
    }
  }
};

export const constructSerializedInstance = ({
  $interfaceType$,
  $instanceId$,
  $winId$,
  $nodeName$,
  $items$,
}: SerializedInstance): any => {
  if ($instanceId$ === PlatformInstanceId.history) {
    return history;
  } else if ($instanceId$ === PlatformInstanceId.localStorage) {
    return localStorage;
  } else if ($instanceId$ === PlatformInstanceId.sessionStorage) {
    return sessionStorage;
  } else if ($instanceId$ === PlatformInstanceId.window) {
    return self;
  } else if ($interfaceType$ === InterfaceType.NodeList) {
    return new WorkerNodeList($items$!.map(constructSerializedInstance));
  } else {
    return constructInstance($interfaceType$, $instanceId$!, $winId$, $nodeName$!);
  }
};

const refsByRefId = new Map<number, Ref>();
const refIdsByRef = new WeakMap<Ref, number>();

const serializeRef = (ref: any, refId?: number): SerializedRefTransfer => {
  refId = refIdsByRef.get(ref);
  if (!refId) {
    refIdsByRef.set(ref, (refId = randomId()));
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
