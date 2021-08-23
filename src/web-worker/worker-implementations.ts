import { ElementConstructors, WorkerElement } from './worker-element';
import { PrivateValues } from './worker-constants';
import {
  SerializedConstructorType,
  SerializedHTMLCollection,
  SerializedInstance,
  SerializedNode,
} from '../types';
import { WorkerNode } from './worker-node';

export class WorkerHTMLCollection {
  [PrivateValues]: SerializedHTMLCollection;

  constructor(serializedHtmlCollection: SerializedHTMLCollection) {
    this[PrivateValues] = serializedHtmlCollection;
    serializedHtmlCollection.$data$.forEach(
      (item, index) => ((this as any)[index] = constructInstance(item))
    );
  }

  item(index: number) {
    return (this as any)[index];
  }

  get length() {
    return this[PrivateValues].$data$.length;
  }
}

export const constructInstance = (serializedInstance: SerializedInstance) => {
  const cstr = serializedInstance.$cstr$;

  if (cstr === SerializedConstructorType.Element) {
    const serializedNode: SerializedNode = serializedInstance as any;
    return new (ElementConstructors[serializedNode.$nodeName$] || WorkerElement)(serializedNode);
  }

  if (
    cstr === SerializedConstructorType.TextNode ||
    cstr === SerializedConstructorType.CommentNode ||
    cstr === SerializedConstructorType.DocumentFragmentNode
  ) {
    return new WorkerNode(serializedInstance as SerializedNode);
  }

  if (cstr === SerializedConstructorType.HTMLCollection) {
    return new WorkerHTMLCollection(serializedInstance as SerializedHTMLCollection);
  }

  return {};
};
