import { debug, logMain, PT_IFRAME_APPENDED } from '../utils';
import { getAndSetInstanceId } from './main-instances';
import { mainAccessHandler } from './main-access-handler';
import {
  MainWindow,
  MessageFromWorkerToSandbox,
  MessengerRequestCallback,
  PartytownWebWorker,
  WorkerMessageType,
} from '../types';
import { registerWindow } from './main-register-window';
import syncCreateMessenger from '../build-modules/sync-create-messenger';
import WebWorkerBlob from '../build-modules/web-worker-blob';
import WebWorkerUrl from '../build-modules/web-worker-url';

export const initSandbox = async (sandboxWindow: any) => {
  let worker: PartytownWebWorker;

  const mainWindow: MainWindow = sandboxWindow.parent;
  const receiveMessage: MessengerRequestCallback = (accessReq, responseCallback) =>
    mainAccessHandler(worker, accessReq).then(responseCallback);

  const onMessageHandler = await syncCreateMessenger(sandboxWindow, receiveMessage);

  if (onMessageHandler) {
    worker = new Worker(
      debug
        ? WebWorkerUrl
        : URL.createObjectURL(
            new Blob([WebWorkerBlob], {
              type: 'text/javascript',
            })
          ),
      { name: `Partytown 🎉` }
    );

    worker.onmessage = (ev: MessageEvent<MessageFromWorkerToSandbox>) => {
      const msg: MessageFromWorkerToSandbox = ev.data;
      if (msg[0] === WorkerMessageType.AsyncAccessRequest) {
        // fire and forget async call within web worker
        mainAccessHandler(worker, msg[1]);
      } else {
        // blocking call within web worker
        onMessageHandler(worker, mainWindow, msg);
      }
    };

    if (debug) {
      logMain(`Created web worker`);
      worker.onerror = (ev) => console.error(`Web Worker Error`, ev);
    }

    mainWindow.addEventListener<any>(PT_IFRAME_APPENDED, (ev: CustomEvent) => {
      const win: MainWindow = ev.detail;
      const winId = getAndSetInstanceId(win.frameElement);
      registerWindow(worker, winId, win);
    });
  }
};
