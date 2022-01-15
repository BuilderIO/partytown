import { onMessageFromWebWorker } from '../sandbox/on-messenge-from-worker';
import { readMainPlatform } from '../sandbox/read-main-platform';
import {
  MainAccessRequest,
  MainWindow,
  MessageFromWorkerToSandbox,
  Messenger,
  PartytownWebWorker,
  WorkerMessageType,
} from '../types';

const createMessengerServiceWorker: Messenger = async (sandboxWindow, receiveMessage) => {
  const swContainer = sandboxWindow.navigator.serviceWorker;
  const swRegistration = await swContainer.getRegistration();

  const receiveMessageFromWorker = (ev: MessageEvent<MainAccessRequest>) =>
    receiveMessage(
      ev.data,
      (accessRsp) => swRegistration!.active && swRegistration!.active.postMessage(accessRsp)
    );

  swContainer.addEventListener('message', receiveMessageFromWorker);

  const onMessage = (
    worker: PartytownWebWorker,
    mainWindow: MainWindow,
    msg: MessageFromWorkerToSandbox
  ) => {
    if (msg[0] === WorkerMessageType.MainDataRequestFromWorker) {
      // web worker has requested data from the main thread
      // collect up all the info about the main thread interfaces
      // send the main thread interface data to the web worker
      worker.postMessage([
        WorkerMessageType.MainDataResponseToWorker,
        readMainPlatform(mainWindow),
      ]);
    } else {
      onMessageFromWebWorker(worker, mainWindow, msg);
    }
  };
  return !!swRegistration ? onMessage : null;
};

export default createMessengerServiceWorker;
