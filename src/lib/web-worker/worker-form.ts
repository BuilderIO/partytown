import { definePrototypePropertyDescriptor } from '../utils';
import type { WorkerNode } from '../types';
import { cachedProps } from './worker-constructors';

export const patchHTMLFormElement = (WorkerHTMLFormElement: any) => {
  const HTMLFormDescriptorMap: PropertyDescriptorMap & ThisType<WorkerNode> = {};

  definePrototypePropertyDescriptor(WorkerHTMLFormElement, HTMLFormDescriptorMap);
  cachedProps(WorkerHTMLFormElement, 'elements');
};
