import { initNextScriptsInWebWorker } from './worker-script';
import { initWebWorker } from './init-worker';
import { webWorkerCtx } from './worker-constants';
import {
  WebWorkerRequestFromMain,
  WebWorkerResponseFromMain,
  WebWorkerResponseFromMainMessage,
} from '../types';

self.onmessage = (ev: MessageEvent<WebWorkerResponseFromMainMessage>) => {
  const msg = ev.data;
  const msgType = msg[0];
  if (msgType === WebWorkerResponseFromMain.MainDataResponse) {
    initWebWorker(self as any, msg[1]);
  } else if (msgType === WebWorkerResponseFromMain.NextScriptResponse) {
    initNextScriptsInWebWorker();
  }

  if (webWorkerCtx.$initializeScripts$.length > 0) {
    self.postMessage(WebWorkerRequestFromMain.NextScriptRequest);
  }
};

// trigger loading main data
self.postMessage(WebWorkerRequestFromMain.MainDataRequest);
