import { callWorkerRefHandler } from './worker-serialization';
import { debug, logWorker, nextTick } from '../utils';
import { initNextScriptsInWebWorker } from './worker-exec';
import { initWebWorker } from './init-worker';
import {
  InitializeScriptData,
  InitWebWorkerData,
  MainAccessRequest,
  MessageFromSandboxToWorker,
  WorkerMessageType,
} from '../types';
import { runStateHandlers } from './worker-exec';
import { webWorkerCtx } from './worker-constants';
import { workerAccessHandler } from './worker-access-handler';
import { workerEventForwarding } from './worker-event-forwarding';

const queuedEvents: MessageEvent<MessageFromSandboxToWorker>[] = [];

const receiveMessageFromSandboxToWorker = (ev: MessageEvent<MessageFromSandboxToWorker>) => {
  const msg = ev.data;
  const msgType = msg[0];
  const msgData1 = msg[1];
  const msgData2 = msg[2];

  if (webWorkerCtx.$isInitialized$) {
    if (msgType === WorkerMessageType.InitializeNextWorkerScript) {
      // message from main to web worker that it should initialize the next script
      initNextScriptsInWebWorker(msgData1 as InitializeScriptData);
    } else if (msgType === WorkerMessageType.RefHandlerCallback) {
      // main has called a worker ref handler
      callWorkerRefHandler(msgData1 as number, msgData2 as any, msg[3] as any);
    } else if (msgType === WorkerMessageType.ForwardMainDataRequest) {
      // message forwarded from another window, like the main window accessing data from an iframe
      workerAccessHandler(msgData1 as MainAccessRequest);
    } else if (msgType === WorkerMessageType.ForwardEvent) {
      workerEventForwarding(msgData1 as any, msgData2 as any);
    } else if (msgType === WorkerMessageType.RunStateHandlers) {
      runStateHandlers(msgData1 as number, msgData2 as any);
    }
  } else if (msgType === WorkerMessageType.MainDataResponseToWorker) {
    // initialize the web worker with the received the main data
    initWebWorker(self as any, msgData1 as InitWebWorkerData);
    webWorkerCtx.$postMessage$([WorkerMessageType.InitializeNextWorkerScript]);

    nextTick(() => {
      if (debug && queuedEvents.length) {
        logWorker(`Queued ready messages: ${queuedEvents.length}`);
      }
      queuedEvents.slice().forEach(receiveMessageFromSandboxToWorker);
      queuedEvents.length = 0;
    });
  } else {
    queuedEvents.push(ev);
  }
};

self.onmessage = receiveMessageFromSandboxToWorker;

postMessage([WorkerMessageType.MainDataRequestFromWorker]);
