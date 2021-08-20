import { Document } from './worker-proxy';
import { InstanceId } from '../types';
import { InstanceIdKey } from './worker-symbols';

export const initWebWorkerGlobal = (self: any) => {
  self[InstanceIdKey] = InstanceId.window;

  self.document = new Document({
    $instanceId$: InstanceId.document,
    $cstr$: 9,
    $nodeName$: '#document',
  });

  self.self = self.parent = self.top = self.window = self;

  self.requestAnimationFrame = (cb: (t: number) => void) => setTimeout(() => cb(Date.now()), 24);
  self.cancelAnimationFrame = (id: number) => clearTimeout(id);
};
