import { debug, logMain, PT_IFRAME_APPENDED } from '../utils';
import { getAndSetInstanceId } from './main-instances';
import { mainAccessHandler } from './main-access-handler';
import type {
  MainWindow,
  MessageFromWorkerToSandbox,
  MessengerRequestCallback,
  PartytownWebWorker,
} from '../types';
import { onMessageFromWebWorker } from './on-messenge-from-worker';
import { registerWindow } from './main-register-window';
import syncCreateMessenger from '@sync-create-messenger';
import WebWorkerBlob from '@web-worker-blob';
import WebWorkerUrl from '@web-worker-url';
import { winCtxs, windowIds } from './main-constants';

export const initSandbox = async (sandboxWindow: any) => {
  let worker: PartytownWebWorker;

  const mainWindow: MainWindow = sandboxWindow.parent;

  const receiveMessage: MessengerRequestCallback = (accessReq, responseCallback) =>
    mainAccessHandler(worker, accessReq).then(responseCallback);

  const success = await syncCreateMessenger(sandboxWindow, receiveMessage);

  if (success) {
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

    worker.onmessage = (ev: MessageEvent<MessageFromWorkerToSandbox>) =>
      onMessageFromWebWorker(worker, mainWindow, ev.data);

    if (debug) {
      logMain(`Created web worker`);
      worker.onerror = (ev) => console.error(`Web Worker Error`, ev);
    }

    mainWindow.addEventListener<any>(PT_IFRAME_APPENDED, (ev: CustomEvent) => {
      const win: MainWindow = ev.detail;
      const parentWinId = windowIds.get(win.parent);
      const parentWinCtx = winCtxs[parentWinId!]!;
      const winId = getAndSetInstanceId(parentWinCtx, win.frameElement);
      registerWindow(worker, winId, win);
    });
  }
};
