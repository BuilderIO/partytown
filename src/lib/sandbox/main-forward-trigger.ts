import { len } from '../utils';
import { MainWindow, PartytownWebWorker, WorkerMessageType } from '../types';
import { serializeForWorker } from './main-serialization';

export const mainForwardTrigger = (
  worker: PartytownWebWorker,
  $winId$: number,
  win: MainWindow
) => {
  let queuedForwardCalls = win._ptf;
  let forwards = (win.partytown || {}).forward || [];
  let i: number;
  let mainForwardFn: any;

  let forwardCall = ($forward$: string[], args: any) =>
    worker.postMessage([
      WorkerMessageType.ForwardMainTrigger,
      {
        $winId$,
        $forward$,
        $args$: serializeForWorker($winId$, Array.from(args)),
      },
    ]);

  win._ptf = undefined;

  forwards.map((forwardProps) => {
    mainForwardFn = win;
    forwardProps.split('.').map((_, i, arr) => {
      mainForwardFn = mainForwardFn[arr[i]] =
        i + 1 < len(arr)
          ? mainForwardFn[arr[i]] || (arr[i + 1] === 'push' ? [] : {})
          : (...args: any) => forwardCall(arr, args);
    });
  });

  if (queuedForwardCalls) {
    for (i = 0; i < len(queuedForwardCalls); i += 2) {
      forwardCall(queuedForwardCalls[i], queuedForwardCalls[i + 1]);
    }
  }
};
