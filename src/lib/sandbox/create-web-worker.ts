import type { MainWindowContext } from '../types';
import { debug } from '../utils';
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
};
