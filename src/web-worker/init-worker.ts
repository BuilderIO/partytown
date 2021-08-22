import type { InitWebWorkerData } from '../types';
import { initMainScriptsInWebWorker } from './worker-script';
import { initWebWorkerGlobal } from './worker-global';
import { logWorker } from '../utils';
import { webWorkerCtx } from './worker-proxy';

export const initWebWorker = (self: Worker, initWebWorkerData: InitWebWorkerData) => {
  logWorker(`Loaded web worker, scripts: ${initWebWorkerData.$initializeScripts$.length}`);

  Object.assign(webWorkerCtx, initWebWorkerData);

  (self as any).importScripts = null;

  initWebWorkerGlobal(self);
  initMainScriptsInWebWorker(webWorkerCtx.$initializeScripts$);
};
