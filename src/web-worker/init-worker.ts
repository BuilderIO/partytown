import type { InitWebWorkerData } from '../types';
import { initMainScriptsInWebWorker } from './worker-script';
import { initWebWorkerGlobal } from './worker-global';
import { logWorker } from '../utils';
import { webWorkerCtx } from './worker-constants';

export const initWebWorker = (self: Worker, initWebWorkerData: InitWebWorkerData) => {
  Object.assign(webWorkerCtx, initWebWorkerData);

  logWorker(`Loaded web worker, scripts: ${webWorkerCtx.$initializeScripts$.length}`);

  webWorkerCtx.$importScripts$ = importScripts.bind(self);
  (self as any).importScripts = null;

  initWebWorkerGlobal(self);
  initMainScriptsInWebWorker(webWorkerCtx.$initializeScripts$);
};
