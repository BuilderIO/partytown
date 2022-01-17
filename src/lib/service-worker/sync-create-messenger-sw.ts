import {
  MainAccessRequest,
  MessageFromWorkerToSandbox,
  Messenger,
  PartytownWebWorker,
  WorkerMessageType,
} from '../types';
import { onMessageFromWebWorker } from '../sandbox/on-messenge-from-worker';
import { readMainPlatform } from '../sandbox/read-main-platform';

const createMessengerServiceWorker: Messenger = (receiveMessage) => {
  const swContainer = window.navigator.serviceWorker;
  return swContainer.getRegistration().then((swRegistration) => {
    swContainer.addEventListener('message', (ev: MessageEvent<MainAccessRequest>) =>
      receiveMessage(
        ev.data,
        (accessRsp) => swRegistration!.active && swRegistration!.active.postMessage(accessRsp)
      )
    );

    return (worker: PartytownWebWorker, msg: MessageFromWorkerToSandbox) => {
      if (msg[0] === WorkerMessageType.MainDataRequestFromWorker) {
        // web worker has requested data from the main thread
        // collect up all the info about the main thread interfaces
        // send the main thread interface data to the web worker
        worker.postMessage([WorkerMessageType.MainDataResponseToWorker, readMainPlatform()]);
      } else {
        onMessageFromWebWorker(worker, msg);
      }
    };
  });
};

export default createMessengerServiceWorker;
