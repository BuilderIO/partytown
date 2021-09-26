import { initializedWorkerScript, readNextScript } from './read-main-scripts';
import {
  MainWindow,
  MessageFromWorkerToSandbox,
  PartytownWebWorker,
  WinId,
  WorkerMessageType,
} from '../types';
import { randomId } from '../utils';
import { readMainInterfaces } from './read-main-interfaces';
import { registerWindow } from './main-register-window';
import { winCtxs } from './main-constants';

export const onMessageFromWebWorker = (
  worker: PartytownWebWorker,
  mainWindow: MainWindow,
  msg: MessageFromWorkerToSandbox
) => {
  const msgType = msg[0];

  if (msgType === WorkerMessageType.MainDataRequestFromWorker) {
    // web worker has requested data from the main thread
    // collect up all the info about the main thread interfaces
    const initWebWorkerData = readMainInterfaces(mainWindow);

    // send the main thread interface data to the web worker
    worker.postMessage([WorkerMessageType.MainDataResponseToWorker, initWebWorkerData]);
  } else if (msgType === WorkerMessageType.InitializedWebWorker) {
    // web worker has finished initializing and ready to run scripts
    registerWindow(worker, randomId(), mainWindow, 1);
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
        initializedWorkerScript(worker, winCtx, msg[2] as number, msg[3] as string);
      }
    }
  }
};
