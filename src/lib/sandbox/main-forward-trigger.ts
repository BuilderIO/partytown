import { len } from '../utils';
import { MainWindow, PartytownWebWorker, WinId, WorkerMessageType } from '../types';
import { serializeForWorker } from './main-serialization';

export const mainForwardTrigger = (worker: PartytownWebWorker, $winId$: WinId, win: MainWindow) => {
  let queuedForwardCalls = win._ptf;
  let forwards = (win.partytown || {}).forward || [];
  let pushBacks = (win.partytown || {}).pushBack || [];
  let i: number;
  let mainForwardFn: any;

  let forwardCall = ($forward$: string[], args: any) => {
    // Allow to push data back to window object, according to config
    pushBackData($forward$, args)

    worker.postMessage([
      WorkerMessageType.ForwardMainTrigger,
      {
        $winId$,
        $forward$,
        $args$: serializeForWorker($winId$, Array.from(args)),
      },
    ]);
  }

  // Read config and execute a splice instead of the push method on the given global object
  const pushBackData = (forwardArr: string[], args: any) => {
    if (pushBacks.length > 0 && pushBacks.includes(forwardArr.join('.'))) {
      if (forwardArr.length === 2 && forwardArr[1] === 'push') {
        win[forwardArr[0]] = win[forwardArr[0]] || [];
        win[forwardArr[0]].splice(win[forwardArr[0]].length, 0, ...args);
      } else {
        console.warn(`Error with 'pushBack' config`);
      }
    }
  }

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
