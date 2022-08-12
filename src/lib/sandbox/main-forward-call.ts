import { forwardCallWrapper, len, randomId } from '../utils';
import { MainWindow, PartytownWebWorker, WinId, WorkerMessageType } from '../types';
import { serializeForWorker } from './main-serialization';

export const mainForwardCall = (worker: PartytownWebWorker, $winId$: WinId, win: MainWindow) => {
  const queuedForwardCalls = win._ptfc;
  const forwards = (win.partytown || {}).forwardCall || [];
  let i: number;
  let mainForwardFn: any;

  const forwardCall = ($forward$: string[], args: any, callId?: string) => {
    const $callId$ = callId || randomId();

    worker.postMessage([
      WorkerMessageType.ForwardMainCall,
      {
        $winId$,
        $forward$,
        $callId$,
        $args$: serializeForWorker($winId$, Array.from(args)),
      },
    ]);

    return $callId$;
  };

  const forwardCallWithWrapper = ($forward$: string[], args: any, callId?: string) => {
    const wrappedCallId = forwardCall($forward$, args, callId);

    return forwardCallWrapper(wrappedCallId, win);
  };

  win._ptfc = undefined;

  forwards.map((forwardProps) => {
    mainForwardFn = win;
    forwardProps.split('.').map((_, i, arr) => {
      mainForwardFn = mainForwardFn[arr[i]] =
        i + 1 < len(arr)
          ? mainForwardFn[arr[i]] || (arr[i + 1] === 'push' ? [] : {})
          : (...args: any) => forwardCallWithWrapper(arr, args);
    });
  });

  if (queuedForwardCalls) {
    for (i = 0; i < len(queuedForwardCalls); i += 3) {
      forwardCall(queuedForwardCalls[i], queuedForwardCalls[i + 1], queuedForwardCalls[i + 2]);
    }
  }
};
