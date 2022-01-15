import { definePrototypePropertyDescriptor } from './bridge';

export const HTMLVideoDescriptorMap: PropertyDescriptorMap & ThisType<Node> = {
  currentTime: {
    get() {
      return 0;
    },
  },
  playbackRate: {
    get() {
      return 1;
    },
  },
};

definePrototypePropertyDescriptor(self.HTMLVideoElement, HTMLVideoDescriptorMap);
