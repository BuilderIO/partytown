import { getConstructorName } from '../utils';
import { getInstance, getInstanceId } from './main-instances';
import {
  InterfaceType,
  SerializedNode,
  SerializedNodeList,
  SerializedTransfer,
  SerializedType,
} from '../types';

export const serializeForWorker = (value: any, added: Set<any>): SerializedTransfer => {
  const type = typeof value;
  if (type === 'string' || type === 'number' || type === 'boolean' || value == null) {
    return [SerializedType.Primitive, value];
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

    if (!added.has(value)) {
      added.add(value);

      if (isNodeList(getConstructorName(value))) {
        const nodeList: SerializedNodeList = {
          $interfaceType$: InterfaceType.NodeList,
          $data$: Array.from(value).map((v) => serializeForWorker(v, added)[1]) as any,
        };
        return [SerializedType.Instance, nodeList];
      }

      const obj: { [key: string]: SerializedTransfer } = {};
      for (const k in value) {
        obj[k] = serializeForWorker(value[k], added);
      }
      return [SerializedType.Object, obj];
    }

    return [SerializedType.Object, {}];
  }

  if (type === 'function') {
    return [SerializedType.Method];
  }

  return [];
};

const isNodeList = (cstrName: string) => cstrName === 'HTMLCollection' || cstrName === 'NodeList';

export const deserializeFromWorker = (serializedTransfer: SerializedTransfer): any => {
  const serializedType = serializedTransfer[0];
  const serializedValue = serializedTransfer[1] as any;

  if (serializedType === SerializedType.Primitive) {
    return serializedValue;
  }

  if (serializedType === SerializedType.InstanceById) {
    return getInstance(serializedValue);
  }

  if (serializedType === SerializedType.Array) {
    return (serializedValue as SerializedTransfer[]).map(deserializeFromWorker);
  }

  if (serializedType === SerializedType.Object) {
    const obj: { [key: string]: any } = {};
    for (const k in serializedValue) {
      obj[k] = deserializeFromWorker(serializedValue[k]);
    }
    return obj;
  }

  return undefined;
};
