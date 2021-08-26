import { ElementConstructors, WorkerElement } from './worker-node';
import { InterfaceType, SerializedInstance, SerializedNode, SerializedNodeList } from '../types';
import { len } from '../utils';
import { PrivateValues } from './worker-constants';
import { WorkerNode } from './worker-node';

/**
 * https://developer.mozilla.org/en-US/docs/Web/API/NodeList
 * Also acting as the implementation for HTMLCollection
 *
 */
export class WorkerNodeList {
  [PrivateValues]: WorkerNode[];

  constructor(serializedNodes: SerializedNode[]) {
    (this[PrivateValues] = serializedNodes.map(constructInstance)).forEach(
      (node, index) => ((this as any)[index] = node)
    );
  }

  entries() {
    return this[PrivateValues].entries();
  }

  forEach(cb: (value: WorkerNode, index: number) => void, thisArg?: any) {
    this[PrivateValues].forEach(cb, thisArg);
  }

  item(index: number) {
    return (this as any)[index];
  }

  keys() {
    return this[PrivateValues].keys();
  }

  get length() {
    return len(this[PrivateValues]);
  }

  values() {
    return this[PrivateValues].values();
  }

  [Symbol.iterator]() {
    return this[PrivateValues][Symbol.iterator]();
  }
}

export const constructInstance = (serializedInstance: SerializedInstance) => {
  const interfaceType = serializedInstance.$interfaceType$;

  if (interfaceType === InterfaceType.Element) {
    const serializedNode: SerializedNode = serializedInstance as any;
    return new (ElementConstructors[serializedNode.$data$] || WorkerElement)(serializedNode);
  }

  if (interfaceType === InterfaceType.TextNode) {
    return new WorkerNode(serializedInstance as SerializedNode);
  }

  if (interfaceType === InterfaceType.NodeList) {
    return new WorkerNodeList((serializedInstance as SerializedNodeList).$data$);
  }

  return {};
};
