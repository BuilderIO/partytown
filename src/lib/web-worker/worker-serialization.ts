import {
  ApplyPath,
  InterfaceType,
  PlatformInstanceId,
  RefHandlerCallbackData,
  SerializedInstance,
  SerializedObject,
  SerializedRefTransferData,
  SerializedTransfer,
  SerializedType,
} from '../types';
import { callMethod } from './worker-proxy';
import { constructEvent, constructInstance } from './worker-constructors';
import {
  environments,
  InstanceIdKey,
  InterfaceTypeKey,
  NodeNameKey,
  webWorkerRefIdsByRef,
  webWorkerRefsByRefId,
  WinIdKey,
} from './worker-constants';
import { NodeList } from './worker-node-list';
import { setWorkerRef } from './worker-state';

export const serializeForMain = (
  $winId$: number,
  $instanceId$: number,
  value: any,
  added?: Set<any>
): SerializedTransfer | undefined => {
  if (value !== undefined) {
    let type = typeof value;

    if (type === 'string' || type === 'boolean' || type === 'number' || value == null) {
      return [SerializedType.Primitive, value];
    }

    if (type === 'function') {
      return [
        SerializedType.Ref,
        {
          $winId$,
          $instanceId$,
          $refId$: setWorkerRef(value),
        },
      ];
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
        return [
          SerializedType.Instance,
          {
            $winId$: value[WinIdKey],
            $interfaceType$: value[InterfaceTypeKey],
            $instanceId$: value[InstanceIdKey],
            $nodeName$: value[NodeNameKey],
          },
        ];
      }

      if (value instanceof Event) {
        return [
          SerializedType.Event,
          serializeObjectForMain($winId$, $instanceId$, value, false, added),
        ];
      }

      return [
        SerializedType.Object,
        serializeObjectForMain($winId$, $instanceId$, value, true, added),
      ];
    }
  }
};

const serializeObjectForMain = (
  winId: number,
  instanceId: number,
  obj: any,
  includeFunctions: boolean,
  added: Set<any>,
  serializedObj?: SerializedObject,
  propName?: string,
  propValue?: any
) => {
  serializedObj = {};
  if (!added.has(obj)) {
    added.add(obj);
    for (propName in obj) {
      propValue = obj[propName];
      if (includeFunctions || typeof propValue !== 'function') {
        serializedObj[propName] = serializeForMain(winId, instanceId, propValue, added);
      }
    }
  }
  return serializedObj;
};

export const serializeInstanceForMain = (
  instance: any,
  value: any
): SerializedTransfer | undefined =>
  instance
    ? serializeForMain(instance[WinIdKey], instance[InstanceIdKey], value)
    : [SerializedType.Primitive, value];

export const deserializeFromMain = (
  instanceId: number | undefined | null,
  applyPath: ApplyPath,
  serializedValueTransfer?: SerializedTransfer,
  serializedType?: SerializedType,
  serializedValue?: any
): any => {
  if (serializedValueTransfer) {
    serializedType = serializedValueTransfer[0];
    serializedValue = serializedValueTransfer[1] as any;

    if (
      serializedType === SerializedType.Primitive ||
      serializedType === SerializedType.CSSRule ||
      serializedType === SerializedType.CSSRuleList
    ) {
      return serializedValue;
    }

    if (serializedType === SerializedType.Ref) {
      return deserializeRefFromMain(instanceId!, applyPath, serializedValue);
    }

    if (serializedType === SerializedType.Instance) {
      return constructSerializedInstance(serializedValue);
    }

    if (serializedType === SerializedType.NodeList) {
      return new NodeList(serializedValue.map(constructSerializedInstance));
    }

    if (serializedType === SerializedType.Array) {
      return (serializedValue as SerializedTransfer[]).map((v) =>
        deserializeFromMain(instanceId, applyPath, v)
      );
    }

    if (serializedType === SerializedType.Event) {
      return constructEvent(deserializeObjectFromMain(instanceId!, applyPath, serializedValue));
    }

    if (serializedType === SerializedType.Object) {
      return deserializeObjectFromMain(instanceId!, applyPath, serializedValue);
    }
  }
};

const deserializeObjectFromMain = (
  instanceId: number,
  applyPath: ApplyPath,
  serializedValue: any,
  obj?: any,
  key?: string
) => {
  obj = {};
  for (key in serializedValue) {
    obj[key] = deserializeFromMain(instanceId, [...applyPath, key], serializedValue[key]);
  }
  return obj;
};

export const constructSerializedInstance = ({
  $interfaceType$,
  $instanceId$,
  $winId$,
  $nodeName$,
  $data$,
}: SerializedInstance): any => {
  const env = environments[$winId$];
  if ($instanceId$ === PlatformInstanceId.window) {
    return env.$window$;
  } else if ($instanceId$ === PlatformInstanceId.document) {
    return env.$document$;
  } else if ($instanceId$ === PlatformInstanceId.documentElement) {
    return env.$documentElement$;
  } else if ($instanceId$ === PlatformInstanceId.head) {
    return env.$head$;
  } else if ($instanceId$ === PlatformInstanceId.body) {
    return env.$body$;
  } else {
    return constructInstance($interfaceType$, $instanceId$!, $winId$, $nodeName$);
  }
};

export const callWorkerRefHandler = ({
  $instanceId$,
  $refId$,
  $thisArg$,
  $args$,
}: RefHandlerCallbackData) => {
  if (webWorkerRefsByRefId[$refId$]) {
    try {
      const thisArg = deserializeFromMain($instanceId$, [], $thisArg$);
      const args = deserializeFromMain($instanceId$, [], $args$);
      webWorkerRefsByRefId[$refId$].apply(thisArg, args);
    } catch (e) {
      console.error(e);
    }
  }
};

const deserializeRefFromMain = (
  instanceId: number,
  applyPath: ApplyPath,
  { $winId$, $refId$ }: SerializedRefTransferData
) => {
  if (!webWorkerRefsByRefId[$refId$]) {
    webWorkerRefIdsByRef.set(
      (webWorkerRefsByRefId[$refId$] = function (this: any, ...args: any[]) {
        const instance = constructInstance(InterfaceType.Window, instanceId, $winId$);
        return callMethod(instance, applyPath, args);
      }),
      $refId$
    );
  }

  return webWorkerRefsByRefId[$refId$];
};
