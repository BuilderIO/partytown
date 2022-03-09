import {
  cachedDimensionMethods,
  cachedDimensionProps,
  cachedProps,
  cachedTreeProps,
} from './worker-constructors';
import {
  commaSplit,
  elementStructurePropNames,
  InstanceDataKey,
  NamespaceKey,
} from './worker-constants';
import { definePrototypePropertyDescriptor } from '../utils';
import type { WorkerNode } from '../types';

export const patchElement = (WorkerElement: any, WorkerHTMLElement: any) => {
  const ElementDescriptorMap: PropertyDescriptorMap & ThisType<WorkerNode> = {
    localName: {
      get() {
        return this[InstanceDataKey]!.toLowerCase();
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
        return this[InstanceDataKey];
      },
    },
  };

  definePrototypePropertyDescriptor(WorkerElement, ElementDescriptorMap);

  // Element
  cachedTreeProps(WorkerElement, elementStructurePropNames);
  cachedProps(WorkerElement, 'id');

  // HTMLElement
  cachedDimensionProps(WorkerHTMLElement);
  cachedDimensionMethods(WorkerHTMLElement, commaSplit('getClientRects,getBoundingClientRect'));
};
