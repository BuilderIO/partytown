import { callMethod } from './worker-proxy';
import { constructInstance } from './worker-constructors';
import { getStateValue, getWorkerRef, setStateValue, setWorkerRef } from './worker-state';
import {
  InterfaceType,
  PlatformInstanceId,
  RefHandler,
  RefHandlerCallbackData,
  RefMap,
  SerializedInstance,
  SerializedRefTransferData,
  SerializedTransfer,
  SerializedType,
  StateProp,
} from '../types';
import { InstanceIdKey, InterfaceTypeKey, NodeNameKey, WinIdKey } from './worker-constants';
import { NodeList } from './worker-node-list';

export const serializeForMain = (
  $winId$: number,
  $instanceId$: number,
  value: any,
  added?: Set<any>
): SerializedTransfer | undefined => {
  if (value !== undefined) {
    let type = typeof value;
    let key: string;
    let obj: { [key: string]: SerializedTransfer | undefined };

    if (type === 'string' || type === 'boolean' || type === 'number' || value == null) {
      return [SerializedType.Primitive, value];
    }

    if (type === 'function') {
      const refData: SerializedRefTransferData = {
        $winId$,
        $instanceId$,
        $refId$: setWorkerRef(value),
      };
      return [SerializedType.Ref, refData];
    }

    added = added || new Set();
    if (Array.isArray(value)) {
      if (!added.has(value)) {
        return [
          SerializedType.Array,
          value.map((v) => serializeForMain($winId$, $instanceId$, v, added)),
        ];
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

      obj = {};
      if (!added.has(value)) {
        added.add(value);
        for (key in value) {
          obj[key] = serializeForMain($winId$, $instanceId$, value[key], added);
        }
      }

      return [SerializedType.Object, obj];
    }
  }
};

export const deserializeFromMain = (
  winId: number,
  instanceId: number | undefined | null,
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
      return deserializeRefFromMain(instanceId!, memberPath, serializedValue);
    }

    if (serializedType === SerializedType.Instance) {
      const serializedInstance: SerializedInstance = serializedValue;
      return constructSerializedInstance(serializedInstance);
    }

    if (serializedType === SerializedType.Array) {
      const serializedArray: SerializedTransfer[] = serializedValue;
      return serializedArray.map((v) => deserializeFromMain(winId, instanceId, memberPath, v));
    }

    if (serializedType === SerializedType.Object) {
      obj = {};
      for (key in serializedValue) {
        obj[key] = deserializeFromMain(
          winId,
          instanceId,
          [...memberPath, key],
          serializedValue[key]
        );
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
  if ($instanceId$ === PlatformInstanceId.window) {
    return self;
  } else if ($interfaceType$ === InterfaceType.NodeList) {
    return new NodeList($items$!.map(constructSerializedInstance));
  } else {
    return constructInstance($interfaceType$, $instanceId$!, $winId$, $nodeName$!);
  }
};

export const callWorkerRefHandler = (
  { $winId$, $instanceId$, $refId$, $thisArg$, $args$ }: RefHandlerCallbackData,
  workerRef?: RefHandler
) => {
  workerRef = getWorkerRef($refId$);
  if (workerRef) {
    try {
      const thisArg = deserializeFromMain($winId$, $instanceId$, [], $thisArg$);
      const args = deserializeFromMain($winId$, $instanceId$, [], $args$);
      workerRef.apply(thisArg, args);
    } catch (e) {
      console.error(e);
    }
  }
};

const deserializeRefFromMain = (
  instanceId: number,
  memberPath: string[],
  { $winId$, $refId$ }: SerializedRefTransferData
) => {
  let workerRefHandler: RefHandler | undefined;

  let workerRefMap = getStateValue<RefMap>(instanceId, StateProp.instanceRefs);
  if (!workerRefMap) {
    setStateValue(instanceId, StateProp.instanceRefs, (workerRefMap = {}));
  }

  workerRefHandler = workerRefMap[$refId$];
  if (!workerRefHandler) {
    workerRefMap[$refId$] = workerRefHandler = function (this: any, ...args: any[]) {
      const instance = constructInstance(InterfaceType.Window, instanceId, $winId$);
      return callMethod(instance, memberPath, args);
    };
  }

  return workerRefHandler;
};
