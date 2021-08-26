import { callMethod } from './worker-proxy';
import { ElementConstructors, WorkerElement, WorkerNode, WorkerNodeList } from './worker-node';
import {
  InterfaceType,
  SerializedInstance,
  SerializedNode,
  SerializedNodeList,
  SerializedTransfer,
  SerializedType,
} from '../types';

export const serializeForMain = (value: any): SerializedTransfer => {
  const type = typeof value;
  if (type === 'string' || type === 'boolean' || type === 'number' || value == null) {
    return [SerializedType.Primitive, value];
  }

  if (Array.isArray(value)) {
    return [SerializedType.Array, value.map(serializeForMain)];
  }

  if (type === 'object') {
    const serializedValue: { [key: string]: SerializedTransfer } = {};
    for (const k in value) {
      serializedValue[k] = serializeForMain(value[k]);
    }
    return [SerializedType.Object, serializedValue];
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
        obj[key] = deserializeFromMain(target, memberPath, serializedValue[key]);
      }
      return obj;
    }
  }
  return undefined;
};

const constructInstance = (serializedInstance: SerializedInstance): any => {
  const interfaceType = serializedInstance.$interfaceType$;

  if (interfaceType === InterfaceType.Element) {
    const serializedNode: SerializedNode = serializedInstance as any;
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
