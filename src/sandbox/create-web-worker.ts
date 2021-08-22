import { debug } from '../utils';
import WebWorkerBlob from '@web-worker-blob';

export const createWebWorker = (workerName: string) =>
  new Worker(
    debug
      ? './partytown-ww.debug.js'
      : URL.createObjectURL(
          new Blob([WebWorkerBlob], {
            type: 'text/javascript',
          })
        ),
    { name: `Partytown${workerName !== 'default' ? ` (${workerName})` : ``} 🎉` }
  );
