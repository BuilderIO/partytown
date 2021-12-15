import { initializedWorkerScript, readNextScript } from './read-main-scripts';
import {
  MainWindow,
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
  mainWindow: MainWindow,
  msg: MessageFromWorkerToSandbox
) => {
  const msgType = msg[0];

  if (msgType === WorkerMessageType.InitializedWebWorker) {
    // web worker has finished initializing and ready to run scripts
    registerWindow(worker, randomId(), mainWindow);
  } else {
    const winId = msg[1] as WinId;
    const winCtx = winCtxs[winId]!;
    if (winCtx) {
      if (msgType === WorkerMessageType.InitializeNextScript) {
        // web worker has been initialized with the main data
        readNextScript(worker, winCtx);
      } else if (msgType === WorkerMessageType.InitializedEnvironmentScript) {
        // web worker has finished initializing the script, and has another one to do
        // doing this postMessage back-and-forth so we don't have long running tasks
        initializedWorkerScript(worker, winCtx, msg[2], msg[3]);
      }
    }
  }
};
