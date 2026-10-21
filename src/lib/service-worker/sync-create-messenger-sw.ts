import {
  type MainAccessRequest,
  type MessageFromWorkerToSandbox,
  type Messenger,
  type PartytownWebWorker,
  WorkerMessageType,
} from '../types';
import { mainWindow } from '../sandbox/main-globals';
import { onMessageFromWebWorker } from '../sandbox/on-messenge-from-worker';
import { readMainInterfaces, readMainPlatform } from '../sandbox/read-main-platform';

// have the main thread fall back right away, no reason to wait for the timeout
const fallbackOnMainThread = () => mainWindow.document.dispatchEvent(new CustomEvent('pt2'));

const createMessengerServiceWorker: Messenger = (receiveMessage) => {
  const swContainer = window.navigator.serviceWorker;
  if (!swContainer.controller) {
    // the sandbox was served by the server instead of the service worker, e.g.
    // Safari private browsing, so the worker's proxytown requests would 404.
    // don't start the worker (#554)
    fallbackOnMainThread();
    return Promise.resolve(null);
  }
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
        worker.postMessage([WorkerMessageType.MainDataResponseToWorker, readMainPlatform()]);
      } else if (msg[0] === WorkerMessageType.MainInterfacesRequestFromWorker) {
        // web worker has requested the rest of the html/svg interfaces
        worker.postMessage([
          WorkerMessageType.MainInterfacesResponseToWorker,
          readMainInterfaces(),
        ]);
      } else if (msg[0] === WorkerMessageType.ServiceWorkerBypassed) {
        // the worker's first proxytown request reached the server, the worker
        // isn't controlled by the service worker even though this sandbox is
        fallbackOnMainThread();
      } else {
        onMessageFromWebWorker(worker, msg);
      }
    };
  });
};

export default createMessengerServiceWorker;
