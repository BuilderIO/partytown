import {
  ApplyPath,
  PlatformInstanceId,
  RefHandlerCallbackData,
  SerializedInstance,
  SerializedObject,
  SerializedRefTransferData,
  SerializedTransfer,
  SerializedType,
  WebWorkerEnvironment,
} from '../types';
import { Attr } from './worker-node';
import { callMethod } from './worker-proxy';
import { CSSStyleDeclaration } from './worker-css-style-declaration';
import {
  environments,
  InstanceIdKey,
  postMessages,
  webWorkerRefIdsByRef,
  webWorkerRefsByRefId,
  WinIdKey,
} from './worker-constants';
import { getConstructorName, noop } from '../utils';
import { getOrCreateNodeInstance } from './worker-constructors';
import { NodeList } from './worker-node-list';
import { setWorkerRef } from './worker-state';

export const serializeForMain = (
  $winId$: number,
  $instanceId$: number,
  value: any,
  added?: Set<any>,
  type?: string
): SerializedTransfer | undefined => {
  if (value !== undefined && (type = typeof value)) {
    if (type === 'string' || type === 'boolean' || type === 'number' || value == null) {
      return [SerializedType.Primitive, value];
    } else if (type === 'function') {
      return [
        SerializedType.Ref,
        {
          $winId$,
          $instanceId$,
          $refId$: setWorkerRef(value),
        },
      ];
    } else if ((added = added || new Set()) && Array.isArray(value)) {
      if (added.has(value)) {
        return [SerializedType.Array, []];
      } else {
        return (
          added.add(value) && [
            SerializedType.Array,
            value.map((v) => serializeForMain($winId$, $instanceId$, v, added)),
          ]
        );
      }
    } else if (type === 'object') {
      if (typeof value[InstanceIdKey] === 'number') {
        return [
          SerializedType.Instance,
          {
            $winId$: value[WinIdKey],
            $instanceId$: value[InstanceIdKey],
          },
        ];
      } else if (value instanceof Event) {
        return [
          SerializedType.Event,
          serializeObjectForMain($winId$, $instanceId$, value, false, added),
        ];
      } else if (supportsTrustedHTML && value instanceof TrustedHTML) {
        // https://developer.mozilla.org/en-US/docs/Web/API/Trusted_Types_API
        return [SerializedType.Primitive, value.toString()];
      } else if (value instanceof ArrayBuffer) {
        return [SerializedType.ArrayBuffer, value];
      } else if (ArrayBuffer.isView(value)) {
        return [SerializedType.ArrayBufferView, value.buffer, getConstructorName(value)];
      } else {
        return [
          SerializedType.Object,
          serializeObjectForMain($winId$, $instanceId$, value, true, added),
        ];
      }
    } else {
      return;
    }
  } else {
    return value;
  }
};

const supportsTrustedHTML = typeof TrustedHTML !== 'undefined';

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
  winId: number | undefined | null,
  instanceId: number | undefined | null,
  applyPath: ApplyPath,
  serializedValueTransfer?: SerializedTransfer,
  serializedType?: SerializedType,
  serializedValue?: any,
  obj?: any,
  key?: string
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
      return deserializeRefFromMain(applyPath, serializedValue);
    }

    if (serializedType === SerializedType.Function) {
      return noop;
    }

    if (serializedType === SerializedType.Instance) {
      return getOrCreateSerializedInstance(serializedValue);
    }

    if (serializedType === SerializedType.NodeList) {
      return new NodeList(serializedValue.map(getOrCreateSerializedInstance));
    }

    if (serializedType === SerializedType.Attr) {
      return new Attr(serializedValue);
    }

    if (serializedType === SerializedType.Array) {
      return (serializedValue as SerializedTransfer[]).map((v) =>
        deserializeFromMain(winId, instanceId, applyPath, v)
      );
    }

    obj = {};
    for (key in serializedValue) {
      obj[key] = deserializeFromMain(winId!, instanceId, [...applyPath, key], serializedValue[key]);
    }

    if (serializedType === SerializedType.CSSStyleDeclaration) {
      return new CSSStyleDeclaration(winId!, instanceId!, applyPath, obj);
    }

    if (serializedType === SerializedType.Event) {
      if (obj.type === 'message' && obj.origin) {
        let postMessageKey = JSON.stringify(obj.data);
        let postMessageData = postMessages.find((pm) => pm.$data$ === postMessageKey);
        if (postMessageData) {
          obj.origin = postMessageData.$origin$;
        }
      }
      return new Proxy(new Event(obj.type, obj), {
        get: (target: any, propName) =>
          propName in obj ? obj[propName] : target[String(propName)],
      });
    }

    if (serializedType === SerializedType.Object) {
      return obj;
    }
  }
};

export const getOrCreateSerializedInstance = ({
  $winId$,
  $instanceId$,
  $nodeName$,
}: SerializedInstance): any =>
  getPlatformInstance($winId$, $instanceId$) ||
  getOrCreateNodeInstance($winId$, $instanceId$!, $nodeName$!);

export const getPlatformInstance = (
  winId: number,
  instanceId: number | undefined,
  env?: WebWorkerEnvironment
) => {
  if ((env = environments[winId]) && instanceId === PlatformInstanceId.window) {
    return env.$window$;
  } else if (instanceId === PlatformInstanceId.document) {
    return env.$document$;
  } else if (instanceId === PlatformInstanceId.documentElement) {
    return env.$documentElement$;
  } else if (instanceId === PlatformInstanceId.head) {
    return env.$head$;
  } else if (instanceId === PlatformInstanceId.body) {
    return env.$body$;
  } else {
    return;
  }
};

export const callWorkerRefHandler = ({
  $winId$,
  $instanceId$,
  $refId$,
  $thisArg$,
  $args$,
}: RefHandlerCallbackData) => {
  if (webWorkerRefsByRefId[$refId$]) {
    try {
      webWorkerRefsByRefId[$refId$].apply(
        deserializeFromMain($winId$, $instanceId$, [], $thisArg$),
        deserializeFromMain($winId$, $instanceId$, [], $args$)
      );
    } catch (e) {
      console.error(e);
    }
  }
};

const deserializeRefFromMain = (
  applyPath: ApplyPath,
  { $winId$, $instanceId$, $nodeName$, $refId$ }: SerializedRefTransferData
) => {
  if (!webWorkerRefsByRefId[$refId$]) {
    webWorkerRefIdsByRef.set(
      (webWorkerRefsByRefId[$refId$] = function (this: any, ...args: any[]) {
        const instance = getOrCreateNodeInstance($winId$, $instanceId$, $nodeName$!);
        return callMethod(instance, applyPath, args);
      }),
      $refId$
    );
  }

  return webWorkerRefsByRefId[$refId$];
};

declare const TrustedHTML: any;
