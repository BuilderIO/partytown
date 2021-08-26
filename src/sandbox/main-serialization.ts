import { getConstructorName } from '../utils';
import { getInstance, getInstanceId } from './main-instances';
import {
  InterfaceType,
  SerializedInstance,
  SerializedNode,
  SerializedNodeList,
  SerializedType,
  SerializedValueTransfer,
} from '../types';

export const serializeValue = (value: any, added: Set<any>): SerializedValueTransfer => {
  const type = typeof value;
  if (type === 'string' || type === 'number' || type === 'boolean' || value == null) {
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
    if (value.nodeType) {
      const nodeInstance: SerializedNode = {
        $interfaceType$: value.nodeType,
        $instanceId$: getInstanceId(value),
        $data$: value.nodeName,
      };
      return [SerializedType.Instance, nodeInstance];
    }

    if (!added.has(value)) {
      added.add(value);

      if (isNodeList(getConstructorName(value))) {
        const nodeList: SerializedNodeList = {
          $interfaceType$: InterfaceType.NodeList,
          $data$: Array.from(value).map((v) => serializeValue(v, added)[1]),
        };
        return [SerializedType.Instance, nodeList];
      }

      const obj: { [key: string]: any } = {};
      for (const k in value) {
        obj[k] = serializeValue(value[k], added);
      }
      return [SerializedType.Object, obj];
    }

    return [SerializedType.Object, {}];
  }

  return [];
};

const isNodeList = (cstrName: string) => cstrName === 'HTMLCollection' || cstrName === 'NodeList';

export const deserializeValue = (serializedValue: any): any => {
  const type = typeof serializedValue;
  if (type === 'string' || type === 'boolean' || type === 'number' || serializedValue == null) {
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
