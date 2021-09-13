import { InitWebWorkerData, PlatformApiId } from '../types';
import { initWebWorkerGlobal } from './worker-global';
import { logWorker } from '../utils';
import { webWorkerCtx } from './worker-constants';
import { WorkerHistory } from './worker-history';
import { WorkerLocation } from './worker-location';
import { WorkerStorage } from './worker-storage';

export const initWebWorker = (self: Worker, initWebWorkerData: InitWebWorkerData) => {
  Object.assign(webWorkerCtx, initWebWorkerData);

  logWorker(
    `Loaded web worker, winId: ${webWorkerCtx.$winId$}${
      webWorkerCtx.$winId$ > 0 ? `, parentId: ` + webWorkerCtx.$parentWinId$ : ``
    }`
  );

  webWorkerCtx.$importScripts$ = importScripts.bind(self);
  (self as any).importScripts = undefined;

  webWorkerCtx.$postMessage$ = postMessage.bind(self);
  (self as any).postMessage = (msg: any, targetOrigin: string) =>
    logWorker(`postMessage(${JSON.stringify(msg)}, "${targetOrigin}"})`);

  webWorkerCtx.$location$ = new WorkerLocation(initWebWorkerData.$url$);
  webWorkerCtx.$history$ = new WorkerHistory();
  webWorkerCtx.$localStorage$ = new WorkerStorage(PlatformApiId.localStorage);
  webWorkerCtx.$sessionStorage$ = new WorkerStorage(PlatformApiId.sessionStorage);

  initWebWorkerGlobal(self, initWebWorkerData.$interfaces$[0][1]);

  webWorkerCtx.$isInitialized$ = true;
};
