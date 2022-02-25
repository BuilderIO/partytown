import { definePrototypePropertyDescriptor, EMPTY_ARRAY } from '../utils';
import type { WorkerNode } from '../types';
import { callMethod } from './worker-proxy';

export const patchSvgElement = (WorkerSVGGraphicsElement: any) => {
  const getMatrix = (elm: any, methodName: string) => {
    const { a, b, c, d, e, f } = callMethod(elm, [methodName], EMPTY_ARRAY);

    // Native returns the deprecated SVGMatrix, which has been replaced w/ DOMMatrixReadOnly
    // https://developer.mozilla.org/en-US/docs/Web/API/DOMMatrixReadOnly
    // DOMMatrixReadOnly and DOMMatrix are available in the web worker
    return new DOMMatrixReadOnly([a, b, c, d, e, f]);
  };

  // https://developer.mozilla.org/en-US/docs/Web/API/SVGGraphicsElement
  const SVGGraphicsElementDescriptorMap: PropertyDescriptorMap & ThisType<WorkerNode> = {
    ...WorkerSVGGraphicsElement,

    getCTM: {
      value: function () {
        return getMatrix(this, 'getCTM');
      },
    },

    getScreenCTM: {
      value: function () {
        return getMatrix(this, 'getScreenCTM');
      },
    },
  };

  definePrototypePropertyDescriptor(WorkerSVGGraphicsElement, SVGGraphicsElementDescriptorMap);
};
