import { callRefHandler, handleForwardedAccessRequest } from './worker-serialization';
import { initNextScriptsInWebWorker } from './worker-exec';
import { initWebWorker } from './init-worker';
import {
  InitializeScriptData,
  InitWebWorkerData,
  MainAccessRequest,
  MessageFromSandboxToWorker,
  WorkerMessageType,
} from '../types';
import { webWorkerCtx } from './worker-constants';
import { debug, logWorker } from '../utils';

const queuedEvents: MessageEvent<MessageFromSandboxToWorker>[] = [];

const onMessage = (ev: MessageEvent<MessageFromSandboxToWorker>) => {
  const msg = ev.data;
  const msgType = msg[0];
  const msgData = msg[1];

  if (webWorkerCtx.$isInitialized$) {
    if (msgType === WorkerMessageType.InitializeNextWorkerScript) {
      // message from main to web worker that it should initialize the next script
      initNextScriptsInWebWorker(msgData as InitializeScriptData);
    } else if (msgType === WorkerMessageType.RefHandlerCallback) {
      // main has called a ref handler
      callRefHandler(msgData as number, msg[2]!, msg[3]!);
    } else if (msgType === WorkerMessageType.ForwardMainDataRequest) {
      // message forwarded from another window, like the main window accessing data from an iframe
      handleForwardedAccessRequest(msgData as MainAccessRequest);
    }
  } else if (msgType === WorkerMessageType.MainDataResponseToWorker) {
    // initialize the web worker with the received the main data
    initWebWorker(self as any, msgData as InitWebWorkerData);
    webWorkerCtx.$postMessage$([WorkerMessageType.InitializeNextWorkerScript]);

    setTimeout(() => {
      if (debug && queuedEvents.length) {
        logWorker(`Queued ready messages: ${queuedEvents.length}`);
      }
      queuedEvents.forEach(onMessage);
      queuedEvents.length = 0;
    }, 99);
  } else {
    queuedEvents.push(ev);
  }
};

self.onmessage = onMessage;

postMessage([WorkerMessageType.MainDataRequestFromWorker]);
