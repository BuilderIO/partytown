import { callRefHandler } from './worker-serialization';
import { debug, logWorker, nextTick } from '../utils';
import { initNextScriptsInWebWorker } from './worker-exec';
import { initWebWorker } from './init-worker';
import {
  InitializeScriptData,
  InitWebWorkerData,
  MainAccessRequest,
  MessageFromSandboxToWorker,
  RunStatePropData,
  WorkerMessageType,
} from '../types';
import { webWorkerCtx } from './worker-constants';
import { workerAccessHandler } from './worker-access-handler';
import { workerEventForwarding } from './worker-event-forwarding';
import { runStateProp } from './worker-instance';

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
      callRefHandler(msgData as number, msg[2] as any, msg[3] as any);
    } else if (msgType === WorkerMessageType.ForwardMainDataRequest) {
      // message forwarded from another window, like the main window accessing data from an iframe
      workerAccessHandler(msgData as MainAccessRequest);
    } else if (msgType === WorkerMessageType.ForwardEvent) {
      workerEventForwarding(msgData as any, msg[2] as any);
    } else if (msgType === WorkerMessageType.RunStateProp) {
      const data: RunStatePropData = msgData as any;
      runStateProp(data.$winId$, data.$instanceId$, data.$stateProp$);
    }
  } else if (msgType === WorkerMessageType.MainDataResponseToWorker) {
    // initialize the web worker with the received the main data
    initWebWorker(self as any, msgData as InitWebWorkerData);
    webWorkerCtx.$postMessage$([WorkerMessageType.InitializeNextWorkerScript]);

    nextTick(() => {
      if (debug && queuedEvents.length) {
        logWorker(`Queued ready messages: ${queuedEvents.length}`);
      }
      queuedEvents.slice().forEach(onMessage);
      queuedEvents.length = 0;
    });
  } else {
    queuedEvents.push(ev);
  }
};

self.onmessage = onMessage;

postMessage([WorkerMessageType.MainDataRequestFromWorker]);
