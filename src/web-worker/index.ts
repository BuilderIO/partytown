import type { InitWebWorkerData } from '../types';
import { initWebWorker } from './init-worker';

self.onmessage = (evFromSandbox: MessageEvent<InitWebWorkerData>) => {
  initWebWorker(self as any, evFromSandbox.data);
  self.onmessage = null;
};
