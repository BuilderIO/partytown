import type { InitWebWorkerData } from '../types';
import { initWebWorkerGlobal } from './worker-global';
import { Location } from './worker-location';
import { logWorker, TOP_WIN_ID } from '../utils';
import { webWorkerCtx } from './worker-constants';

export const initWebWorker = (self: Worker, initWebWorkerData: InitWebWorkerData) => {
  Object.assign(webWorkerCtx, initWebWorkerData);

  logWorker(
    `Loaded web worker, winId: ${webWorkerCtx.$winId$}${
      webWorkerCtx.$winId$ > TOP_WIN_ID ? `, parentId: ` + webWorkerCtx.$parentWinId$ : ``
    }`
  );

  webWorkerCtx.$importScripts$ = importScripts.bind(self);
  (self as any).importScripts = undefined;

  webWorkerCtx.$postMessage$ = postMessage.bind(self);
  (self as any).postMessage = (msg: any, targetOrigin: string) =>
    logWorker(`postMessage(${JSON.stringify(msg)}, "${targetOrigin}"})`);

  webWorkerCtx.$location$ = new Location(initWebWorkerData.$url$);

  initWebWorkerGlobal(
    self,
    initWebWorkerData.$interfaces$[0][1],
    initWebWorkerData.$interfaces$,
    initWebWorkerData.$htmlConstructors$
  );

  webWorkerCtx.$isInitialized$ = true;
};
