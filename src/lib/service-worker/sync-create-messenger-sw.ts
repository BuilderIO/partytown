import {
  MainAccessRequest,
  MessageFromWorkerToSandbox,
  Messenger,
  PartytownWebWorker,
  WorkerMessageType,
} from '../types';
import { onMessageFromWebWorker } from '../sandbox/on-messenge-from-worker';
import { initMainPlatform } from '../sandbox/read-main-platform';

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
        // web worker has requested the initial data from the main thread
        // collect up info about the main thread interfaces
        // send the main thread interface data to the web worker
        initMainPlatform((data) =>
          worker.postMessage([WorkerMessageType.MainDataResponseToWorker, data])
        );
      } else {
        onMessageFromWebWorker(worker, msg);
      }
    };
  });
};

export default createMessengerServiceWorker;
