import type { Node } from './worker-node';
import { NamespaceKey, NodeNameKey } from './worker-constants';

export const ElementDescriptorMap: PropertyDescriptorMap & ThisType<Node> = {
  localName: {
    get() {
      return this[NodeNameKey]!.toLowerCase();
    },
  },
  namespaceURI: {
    get() {
      return this[NamespaceKey] || 'http://www.w3.org/1999/xhtml';
    },
  },
  nodeType: {
    value: 1,
  },
  tagName: {
    get() {
      return this[NodeNameKey];
    },
  },
};
