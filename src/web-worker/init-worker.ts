import { InitWebWorkerData, InstanceId, InterfaceType, NodeName } from '../types';
import { initWebWorkerGlobal } from './worker-global';
import { logWorker } from '../utils';
import { webWorkerCtx } from './worker-constants';
import { WorkerDocument } from './worker-document';
import { WorkerLocation } from './worker-location';
import { WorkerHistory } from './worker-history';

export const initWebWorker = (self: Worker, initWebWorkerData: InitWebWorkerData) => {
  Object.assign(webWorkerCtx, initWebWorkerData);

  logWorker(`Loaded web worker, scripts: ${webWorkerCtx.$initializeScripts$.length}`);

  webWorkerCtx.$importScripts$ = importScripts.bind(self);
  (self as any).importScripts = null;

  webWorkerCtx.$location$ = new WorkerLocation(initWebWorkerData.$url$);
  webWorkerCtx.$history$ = new WorkerHistory();
  webWorkerCtx.$document$ = new WorkerDocument({
    $instanceId$: InstanceId.document,
    $interfaceType$: InterfaceType.Document,
    $nodeName$: NodeName.Document,
  });

  initWebWorkerGlobal(self);
};
