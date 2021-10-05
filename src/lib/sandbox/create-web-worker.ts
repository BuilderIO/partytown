import { debug, logMain } from '../utils';
import type { MainWindowContext } from '../types';
import { onMessageFromWebWorker } from './messenger';
import WebWorkerBlob from '@web-worker-blob';
import WebWorkerUrl from '@web-worker-url';

export const createWebWorker = (winCtx: MainWindowContext) => {
  winCtx.$worker$ = new Worker(
    debug
      ? WebWorkerUrl
      : URL.createObjectURL(
          new Blob([WebWorkerBlob], {
            type: 'text/javascript',
          })
        ),
    { name: `Partytown (${winCtx.$winId$}) 🎉` }
  );

  winCtx.$worker$.onmessage = (ev) => onMessageFromWebWorker(winCtx, ev.data);

  if (debug) {
    logMain(winCtx, `Created Web Worker (${winCtx.$winId$})`);
    winCtx.$worker$.onerror = (ev) => console.error(`Web Worker (${winCtx.$winId$}) Error`, ev);
  }
};
