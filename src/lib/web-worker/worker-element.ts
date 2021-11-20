import type { Node } from './worker-node';
import { NodeNameKey } from './worker-constants';

export const ElementDescriptorMap: PropertyDescriptorMap & ThisType<Node> = {
  localName: {
    get() {
      return this[NodeNameKey]!.toLowerCase();
    },
  },
  namespaceURI: {
    get() {
      return 'http://www.w3.org/' + (this[NodeNameKey] === 'SVG' ? '2000/svg' : '1999/xhtml');
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
