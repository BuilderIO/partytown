import { callMethod } from './worker-proxy';
import { constructInstance } from './worker-constructors';
import {
  getInstanceStateValue,
  getWorkerRef,
  setInstanceStateValue,
  setWorkerRef,
} from './worker-state';
import {
  InterfaceType,
  PlatformInstanceId,
  RefHandler,
  RefMap,
  SerializedInstance,
  SerializedTransfer,
  SerializedType,
  StateProp,
} from '../types';
import { InstanceIdKey, InterfaceTypeKey, NodeNameKey, WinIdKey } from './worker-constants';
import { WorkerNodeList } from './worker-node';
import type { WorkerInstance } from './worker-instance';

export const serializeForMain = (value: any, added?: Set<any>): SerializedTransfer | undefined => {
  if (value !== undefined) {
    added = added || new Set();
    const type = typeof value;

    if (type === 'string' || type === 'boolean' || type === 'number' || value == null) {
      return [SerializedType.Primitive, value];
    }

    if (type === 'function') {
      return [SerializedType.Ref, setWorkerRef(value)];
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
  instance: WorkerInstance | null | undefined,
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

    if (serializedType === SerializedType.Ref) {
      return deserializeRefFromMain(instance, memberPath, serializedValue);
    }

    if (serializedType === SerializedType.Method && instance) {
      return (...args: any[]) => callMethod(instance, memberPath, args);
    }

    if (serializedType === SerializedType.Instance) {
      const serializedInstance: SerializedInstance = serializedValue;
      return constructSerializedInstance(serializedInstance);
    }

    if (serializedType === SerializedType.Array) {
      const serializedArray: SerializedTransfer[] = serializedValue;
      return serializedArray.map((v) => deserializeFromMain(instance, memberPath, v));
    }

    if (serializedType === SerializedType.Object) {
      obj = {};
      for (key in serializedValue) {
        obj[key] = deserializeFromMain(instance, [...memberPath, key], serializedValue[key]);
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

export const callWorkerRefHandler = (
  workerRefId: number,
  serializedTarget: SerializedTransfer,
  serializedArgs: SerializedTransfer,
  workerRef?: RefHandler
) => {
  workerRef = getWorkerRef(workerRefId);
  if (workerRef) {
    try {
      const target = deserializeFromMain(null, [], serializedTarget);
      const args = deserializeFromMain(target, [], serializedArgs);
      workerRef.apply(target, args);
    } catch (e) {
      console.error(e);
    }
  }
};

const deserializeRefFromMain = (instance: any, memberPath: string[], refId: number) => {
  let workerRefHandler: RefHandler | undefined;

  let workerRefMap = getInstanceStateValue<RefMap>(instance, StateProp.instanceRefs);
  if (!workerRefMap) {
    setInstanceStateValue(instance, StateProp.instanceRefs, (workerRefMap = {}));
  }

  workerRefHandler = workerRefMap[refId];
  if (!workerRefHandler) {
    workerRefMap[refId] = workerRefHandler = createWorkerRefHandler(refId);
  }

  return workerRefHandler;
};

const createWorkerRefHandler = (refId: number): RefHandler => {
  return function (this: any, ...args: any[]) {};
};
