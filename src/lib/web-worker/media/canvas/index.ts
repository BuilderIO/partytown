import { definePrototypePropertyDescriptor } from '../bridge';
import { ContextKey } from '../utils';
import { createContext2D } from './context-2d';
import { createContextWebGL } from './context-webgl';

const HTMLCanvasDescriptorMap: PropertyDescriptorMap & ThisType<Node> = {
  getContext: {
    value(this: any, contextType: string, contextAttributes: any) {
      // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
      if (!this[ContextKey]) {
        this[ContextKey] = (contextType.includes('webgl') ? createContextWebGL : createContext2D)(
          this,
          contextType,
          contextAttributes
        );
      }
      return this[ContextKey];
    },
  },
};

definePrototypePropertyDescriptor(self.HTMLCanvasElement, HTMLCanvasDescriptorMap);
