import { createPartytownWorker, debug } from '../utils';
import { getAndSetInstanceId } from './main-instances';
import { mainWindow, libPath, sandboxLibPath } from './main-globals';
import { logMain } from '../log';
import { mainAccessHandler } from './main-access-handler';
import {
  MessageFromWorkerToSandbox,
  MessengerRequestCallback,
  PartytownWebWorker,
  WorkerMessageType,
} from '../types';
import { getIsolatedWorker } from './isolation';
import { registerWindow } from './main-register-window';
import syncCreateMessenger from '../build-modules/sync-create-messenger';
import WebWorkerBlob from '../build-modules/web-worker-blob';
import WebWorkerUrl from '../build-modules/web-worker-url';
import { VERSION } from '../build-modules/version';

let worker: PartytownWebWorker;

const receiveMessage: MessengerRequestCallback = (accessReq, responseCallback) =>
  mainAccessHandler(worker, accessReq).then(responseCallback);

syncCreateMessenger(receiveMessage).then((onMessageHandler) => {
  if (onMessageHandler) {
    if (sandboxLibPath) {
      worker = getIsolatedWorker(receiveMessage);
    } else {
      worker = createPartytownWorker(
        debug
          ? libPath + WebWorkerUrl
          : URL.createObjectURL(
              new Blob([WebWorkerBlob], {
                type: 'text/javascript',
              })
            )
      );

      if (debug) {
        worker.onerror = (ev) => console.error(`Web Worker Error`, ev);
      }
    }

    worker.onmessage = (ev: MessageEvent<MessageFromWorkerToSandbox>) => {
      const msg: MessageFromWorkerToSandbox = ev.data;
      if (msg[0] === WorkerMessageType.AsyncAccessRequest) {
        // fire and forget async call within web worker
        mainAccessHandler(worker, msg[1]);
      } else {
        // blocking call within web worker
        onMessageHandler(worker, msg);
      }
    };

    if (debug) {
      logMain(`Created Partytown web worker (${VERSION})`);
    }

    mainWindow.addEventListener<any>('pt1', (ev: CustomEvent) =>
      registerWindow(worker, getAndSetInstanceId(ev.detail.frameElement)!, ev.detail)
    );
  }
});
