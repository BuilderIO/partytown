import type { InitWebWorkerData } from '../types';
import { initMainScriptsInWebWorker } from './worker-script';
import { initWebWorkerGlobal } from './worker-global';
import { logWorker } from '../utils';
import { webWorkerCtx } from './worker-proxy';

export const initWebWorker = (self: Worker, initWebWorkerData: InitWebWorkerData) => {
  logWorker(`Initialized`);

  Object.assign(webWorkerCtx, initWebWorkerData);

  webWorkerCtx.$msgId$ = 0;
  webWorkerCtx.$importScripts$ = importScripts.bind(self);
  (self as any).importScripts = null;

  const doc = initWebWorkerGlobal(self);
  initMainScriptsInWebWorker(doc, webWorkerCtx.$initializeScripts$);
};
