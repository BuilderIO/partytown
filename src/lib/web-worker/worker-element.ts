import {
  cachedDimensionMethods,
  cachedDimensionProps,
  cachedProps,
  cachedTreeProps,
} from './worker-constructors';
import {
  commaSplit,
  elementStructurePropNames,
  NamespaceKey,
  NodeNameKey,
} from './worker-constants';
import { definePrototypePropertyDescriptor } from '../utils';
import type { WorkerNode } from '../types';

export const patchElement = (WorkerElement: any) => {
  const ElementDescriptorMap: PropertyDescriptorMap & ThisType<WorkerNode> = {
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

  definePrototypePropertyDescriptor(WorkerElement, ElementDescriptorMap);

  cachedTreeProps(WorkerElement, elementStructurePropNames);

  cachedDimensionProps(WorkerElement);
  cachedDimensionMethods(WorkerElement, commaSplit('getClientRects,getBoundingClientRect'));
  cachedProps(WorkerElement, 'id');
};
