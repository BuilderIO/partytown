import { getConstructorName, isValidMemberName } from '../utils';
import { getInstance, getAndSetInstanceId } from './main-instances';
import {
  InterfaceType,
  PartytownWebWorker,
  PlatformInstanceId,
  RefHandlerCallbackData,
  SerializedCSSRule,
  SerializedInstance,
  SerializedObject,
  SerializedRefTransferData,
  SerializedTransfer,
  SerializedType,
  WorkerMessageType,
} from '../types';
import { mainRefs } from './main-constants';

export const serializeForWorker = (
  $winId$: number,
  value: any,
  added?: Set<any>,
  type?: string,
  cstrName?: string
): SerializedTransfer | undefined => {
  if (value !== undefined) {
    type = typeof value;

    if (type === 'string' || type === 'number' || type === 'boolean' || value == null) {
      return [SerializedType.Primitive, value];
    }

    if (type === 'function') {
      return [SerializedType.Function];
    }

    added = added || new Set();
    if (Array.isArray(value)) {
      if (!added.has(value)) {
        added.add(value);
        return [SerializedType.Array, value.map((v) => serializeForWorker($winId$, v, added))];
      }
      return [SerializedType.Array, []];
    }

    if (type === 'object') {
      if (value.nodeType) {
        return [
          SerializedType.Instance,
          {
            $winId$,
            $interfaceType$: value.nodeType,
            $instanceId$: getAndSetInstanceId(value),
            $parentInstanceId$: getAndSetInstanceId(value.parentNode),
            $nodeName$: value.nodeName,
          },
        ];
      }

      cstrName = getConstructorName(value);
      if (cstrName === 'Window') {
        return [
          SerializedType.Instance,
          {
            $winId$,
            $interfaceType$: InterfaceType.Window,
            $instanceId$: PlatformInstanceId.window,
          },
        ];
      }

      if (cstrName === 'HTMLCollection' || cstrName === 'NodeList') {
        return [
          SerializedType.NodeList,
          Array.from(value).map((v) => serializeForWorker($winId$, v, added)![1]) as any,
        ];
      }

      if (cstrName === 'Event') {
        return [SerializedType.Event, serializeObjectForWorker($winId$, value, added)];
      }

      if (cstrName === 'CSSRuleList') {
        return [SerializedType.CSSRuleList, Array.from(value).map(serializeCssRuleForWorker)];
      }

      if (cstrName.startsWith('CSS') && cstrName.endsWith('Rule')) {
        return [SerializedType.CSSRule, serializeCssRuleForWorker(value)];
      }

      if (cstrName === 'CSSStyleDeclaration') {
        return [SerializedType.Object, serializeObjectForWorker($winId$, value, added)];
      }

      return [SerializedType.Object, serializeObjectForWorker($winId$, value, added, true, true)];
    }
  }
};

const serializeObjectForWorker = (
  winId: number,
  obj: any,
  added: Set<any>,
  includeFunctions?: boolean,
  includeEmptyStrings?: boolean,
  serializedObj?: SerializedObject,
  propName?: string,
  propValue?: any
) => {
  serializedObj = {};
  if (!added.has(obj)) {
    added.add(obj);
    for (propName in obj) {
      if (isValidMemberName(propName)) {
        propValue = obj[propName];
        if (includeFunctions || typeof propValue !== 'function') {
          if (includeEmptyStrings || propValue !== '') {
            serializedObj[propName] = serializeForWorker(winId, propValue, added);
          }
        }
      }
    }
  }
  return serializedObj;
};

const serializeCssRuleForWorker = (cssRule: any) => {
  let obj: SerializedCSSRule = {};
  let key: string;
  for (key in cssRule) {
    if (validCssRuleProps.includes(key)) {
      obj[key] = cssRule[key];
    }
  }
  return obj;
};

export const deserializeFromWorker = (
  worker: PartytownWebWorker,
  serializedTransfer: SerializedTransfer | undefined,
  serializedType?: SerializedType,
  serializedValue?: any
): any => {
  if (serializedTransfer) {
    serializedType = serializedTransfer[0];
    serializedValue = serializedTransfer[1] as any;

    if (serializedType === SerializedType.Primitive) {
      return serializedValue;
    }

    if (serializedType === SerializedType.Ref) {
      return deserializeRefFromWorker(worker, serializedValue);
    }

    if (serializedType === SerializedType.Array) {
      return (serializedValue as SerializedTransfer[]).map((v) => deserializeFromWorker(worker, v));
    }

    if (serializedType === SerializedType.Instance) {
      return getInstance(
        (serializedValue as SerializedInstance).$winId$,
        (serializedValue as SerializedInstance).$instanceId$!
      );
    }

    if (serializedType === SerializedType.Event) {
      return constructEvent(deserializeObjectFromWorker(worker, serializedValue));
    }

    if (serializedType === SerializedType.Object) {
      return deserializeObjectFromWorker(worker, serializedValue);
    }
  }
};

const deserializeRefFromWorker = (
  worker: PartytownWebWorker,
  { $winId$, $instanceId$, $refId$ }: SerializedRefTransferData
) => {
  let ref = mainRefs.get($refId$);

  if (!ref) {
    ref = function (this: any, ...args: any[]) {
      const refHandlerData: RefHandlerCallbackData = {
        $instanceId$,
        $refId$,
        $thisArg$: serializeForWorker($winId$, this),
        $args$: serializeForWorker($winId$, args),
      };
      worker.postMessage([WorkerMessageType.RefHandlerCallback, refHandlerData]);
    };
    mainRefs.set($refId$, ref);
  }

  return ref;
};

const constructEvent = (eventProps: any) =>
  new ('detail' in eventProps ? CustomEvent : Event)(eventProps.type, eventProps);

const deserializeObjectFromWorker = (
  worker: PartytownWebWorker,
  serializedValue: any,
  obj?: any,
  key?: string
) => {
  obj = {};
  for (key in serializedValue) {
    obj[key] = deserializeFromWorker(worker, serializedValue[key]);
  }
  return obj;
};

const validCssRuleProps =
  'cssText,selectorText,href,media,namespaceURI,prefix,name,conditionText'.split(',');
