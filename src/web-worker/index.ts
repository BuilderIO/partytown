import { callRefHandler } from './worker-serialization';
import { debug, len } from '../utils';
import { initNextScriptsInWebWorker } from './worker-exec';
import { initWebWorker } from './init-worker';
import { InitWebWorkerData, MessageFromSandboxToWorker, WorkerMessageType } from '../types';
import { webWorkerCtx } from './worker-constants';

self.onmessage = (ev: MessageEvent<MessageFromSandboxToWorker>) => {
  const msg = ev.data;
  const msgType = msg[0];

  if (msgType === WorkerMessageType.MainDataResponseToWorker) {
    // initialize the web worker with the received the main data
    initWebWorker(self as any, msg[1] as InitWebWorkerData);
    // send back to main that the web worker is initialized
    webWorkerCtx.$postMessage$([WorkerMessageType.WorkerInitializeStart]);
  } else if (msgType === WorkerMessageType.InitializeNextWorkerScript) {
    // message from main to web worker that it should initialize the next script
    initNextScriptsInWebWorker();

    if (len(webWorkerCtx.$initializeScripts$)) {
      // send back to main that there is another script to do yet
      // doing this postMessage back-and-forth so we don't have long running tasks
      webWorkerCtx.$postMessage$([WorkerMessageType.InitializeNextWorkerScript]);
    } else if (debug) {
      webWorkerCtx.$postMessage$([WorkerMessageType.WorkerInitializeEnd]);
    }
  } else if (msgType === WorkerMessageType.RefHandlerCallback) {
    // main has called a ref handler
    callRefHandler(msg[1] as number, msg[2]!, msg[3]!);
  }
};

// web worker started up
// request the data from main
self.postMessage([WorkerMessageType.MainDataRequestFromWorker]);
