import { InstanceIdKey, WinIdKey } from './worker-constants';
import type { Node } from './worker-node';
import { serializeInstanceForMain } from './worker-serialization';

export const HTMLCanvasDescriptorMap: PropertyDescriptorMap & ThisType<Node> = {
  getContext: {
    value(...args: any[]) {
      const applyPath = ['getContext', serializeInstanceForMain(this, args)];
      const ctx = new (self as any).CanvasRenderingContext2D(
        this[WinIdKey],
        this[InstanceIdKey],
        applyPath
      );
      return ctx;
    },
  },
};
