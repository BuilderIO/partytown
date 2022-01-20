import { definePrototypePropertyDescriptor } from './bridge';

export const HTMLVideoDescriptorMap: PropertyDescriptorMap & ThisType<Node> = {};

definePrototypePropertyDescriptor(self.HTMLVideoElement, HTMLVideoDescriptorMap);
