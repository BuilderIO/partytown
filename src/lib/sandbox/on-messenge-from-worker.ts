import { initializedWorkerScript, readNextScript } from './read-main-scripts';
import { mainWindow } from './main-globals';
import {
  MainWindowContext,
  MessageFromWorkerToSandbox,
  PartytownWebWorker,
  WinId,
  WorkerMessageType,
} from '../types';
import { randomId } from '../utils';
import { registerWindow } from './main-register-window';
import { winCtxs } from './main-constants';

export const onMessageFromWebWorker = (
  worker: PartytownWebWorker,
  msg: MessageFromWorkerToSandbox,
  winCtx?: MainWindowContext
) => {
  if (msg[0] === WorkerMessageType.InitializedWebWorker) {
    // web worker has finished initializing and ready to run scripts
    registerWindow(worker, randomId(), mainWindow);
  } else {
    winCtx = winCtxs[msg[1] as WinId]!;
    if (winCtx) {
      if (msg[0] === WorkerMessageType.InitializeNextScript) {
        // web worker has been initialized with the main data
        console.log('onMessageFromWebWorker', 1);
        requestAnimationFrame(() => {
          console.log('onMessageFromWebWorker', 2);
          readNextScript(worker, winCtx!);
        });
      } else if (msg[0] === WorkerMessageType.InitializedEnvironmentScript) {
        // web worker has finished initializing the script, and has another one to do
        // doing this postMessage back-and-forth so we don't have long running tasks
        console.log('onMessageFromWebWorker', 3);
        initializedWorkerScript(worker, winCtx, msg[2], msg[3]);
      }
    }
  }
};
