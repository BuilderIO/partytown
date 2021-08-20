import { getInstance, getInstanceId } from './main-instances';
import {
  SerializedConstructorType,
  SerializedHTMLCollection,
  SerializedInstance,
  SerializedNode,
  SerializedType,
  SerializedValueTransfer,
} from '../types';

export const serializeValue = (value: any, added: Set<any>): SerializedValueTransfer => {
  const type = typeof value;
  if (type === 'string' || type === 'number' || type === 'boolean' || value === null) {
    return [SerializedType.Primitive, value];
  }

  if (type === 'function') {
    return [SerializedType.Method];
  }

  if (Array.isArray(value)) {
    if (!added.has(value)) {
      added.add(value);
      return [SerializedType.Array, value.map((v) => serializeValue(v, added))];
    }
    return [SerializedType.Array, []];
  }

  if (type === 'object') {
    if (value === window.parent) {
      return [SerializedType.Window];
    }
    if (value === window.parent!.document) {
      return [SerializedType.Document];
    }

    if (value.nodeType) {
      const nodeInstance: SerializedNode = {
        $instanceId$: getInstanceId(value),
        $cstr$: value.nodeType,
        $nodeName$: value.nodeName,
      };
      return [SerializedType.Instance, nodeInstance];
    }

    if (!added.has(value)) {
      added.add(value);

      if (value.constructor) {
        const cstrName = value.constructor.name;
        if (cstrName === 'HTMLCollection') {
          const htmlCollectionInstance: SerializedHTMLCollection = {
            $cstr$: SerializedConstructorType.HTMLCollection,
            $items$: Array.from(value).map((v) => serializeValue(v, added)[1]),
          };
          const htmlCollection: SerializedValueTransfer = [
            SerializedType.Instance,
            htmlCollectionInstance,
          ];
          return htmlCollection;
        }
      }

      const obj: { [key: string]: any } = {};
      const objTransfer: SerializedValueTransfer = [SerializedType.Object, obj];
      for (const k in value) {
        obj[k] = serializeValue(value[k], added);
      }
      return objTransfer;
    }

    return [SerializedType.Object, {}];
  }

  return [];
};

export const deserializeValue = (serializedValue: any): any => {
  const type = typeof serializedValue;
  if (type === 'string' || type === 'boolean' || type === 'number' || serializeValue == null) {
    return serializedValue;
  }
  if (Array.isArray(serializedValue)) {
    return serializedValue.map(deserializeValue);
  }
  if (type === 'object') {
    const instance = getInstance((serializedValue as SerializedInstance).$instanceId$!);
    if (instance) {
      return instance;
    }
    const deserializedValue: { [key: string]: any } = {};
    for (const k in serializedValue) {
      deserializedValue[k] = deserializeValue(serializedValue[k]);
    }
    return deserializedValue;
  }
  return undefined;
};
