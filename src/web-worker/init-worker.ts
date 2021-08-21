import type { InitWebWorkerData } from '../types';
import { initMainScriptsInWebWorker } from './worker-script';
import { initWebWorkerGlobal } from './worker-global';
import { logWorker } from '../utils';
import { webWorkerContext } from './worker-proxy';

export const initWebWorker = (self: Worker, initWebWorkerData: InitWebWorkerData) => {
  logWorker(`Initialized`);

  Object.assign(webWorkerContext, initWebWorkerData);

  webWorkerContext.$msgId$ = 0;
  webWorkerContext.$importScripts$ = importScripts.bind(self);
  (self as any).importScripts = null;

  const doc = initWebWorkerGlobal(self);
  initMainScriptsInWebWorker(doc, webWorkerContext.$initializeScripts$);
};
