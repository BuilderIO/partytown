import { ElementConstructors, WorkerElement } from './worker-node';
import {
  InterfaceType,
  SerializedHTMLCollection,
  SerializedInstance,
  SerializedNode,
} from '../types';
import { PrivateValues } from './worker-constants';
import { WorkerNode } from './worker-node';

/**
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection
 */
export class WorkerHTMLCollection {
  [PrivateValues]: SerializedNode[];

  constructor(serializedNodes: SerializedNode[]) {
    (this[PrivateValues] = serializedNodes).forEach(
      (item, index) => ((this as any)[index] = constructInstance(item))
    );
  }

  item(index: number) {
    return (this as any)[index];
  }

  get length() {
    return this[PrivateValues].length;
  }
}

export const constructInstance = (serializedInstance: SerializedInstance) => {
  const interfaceType = serializedInstance.$interfaceType$;

  if (interfaceType === InterfaceType.Element) {
    const serializedNode: SerializedNode = serializedInstance as any;
    return new (ElementConstructors[serializedNode.$nodeName$] || WorkerElement)(serializedNode);
  }

  if (interfaceType === InterfaceType.TextNode) {
    return new WorkerNode(serializedInstance as SerializedNode);
  }

  if (interfaceType === InterfaceType.HTMLCollection) {
    return new WorkerHTMLCollection((serializedInstance as SerializedHTMLCollection).$data$);
  }

  return {};
};
