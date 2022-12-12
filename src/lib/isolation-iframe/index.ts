import WebWorkerBlob from '../build-modules/web-worker-blob';
import WebWorkerUrl from '../build-modules/web-worker-url';
import {
  IsolationIframeMessageType,
  MessageFromSandboxToIsolationIframe,
  PartytownWebWorker,
  PassMessagePortToServiceWorkerRequest,
  WorkerMessageType,
} from '../types';
import { createPartytownWorker, registerServiceWorker } from '../utils';

const useAtomics = crossOriginIsolated;

window.addEventListener(
  'message',
  (iframeEv: MessageEvent<MessageFromSandboxToIsolationIframe>) => {
    if (iframeEv.data[0] === IsolationIframeMessageType.InitializeIframe) {
      const { $debug$, $libPath$, $workerMsgPort$, $backendMsgPort$ } = iframeEv.data[1];

      if (useAtomics) {
        initWebWorker($debug$, $libPath$, $workerMsgPort$);
      } else {
        if (!$backendMsgPort$) {
          throw new Error('MessagePort for service worker is missing.');
        }

        initSwWorkers($debug$, $libPath$, $workerMsgPort$, $backendMsgPort$);
      }
    }
  }
);

const initWebWorker = (debug: boolean, libPath: string, workerMessagePort: MessagePort) => {
  const workerUrl = debug
    ? libPath + WebWorkerUrl
    : URL.createObjectURL(
        new Blob([WebWorkerBlob], {
          type: 'text/javascript',
        })
      );
  const worker: PartytownWebWorker = createPartytownWorker(workerUrl + '&useMsgPort=true');

  worker.postMessage([WorkerMessageType.SetMessagePort, workerMessagePort], [workerMessagePort]);
};

const initSwWorkers = (
  debug: boolean,
  libPath: string,
  workerMessagePort: MessagePort,
  backendMessagePort: MessagePort
) => {
  const onServiceWorkerCreated = () => {
    const swContainer = window.navigator.serviceWorker;
    swContainer.getRegistration().then((swReg) => {
      const passMessagePortReq: PassMessagePortToServiceWorkerRequest = {
        $msgPort$: backendMessagePort,
      };
      swReg!.active!.postMessage(passMessagePortReq, [backendMessagePort]);

      initWebWorker(debug, libPath, workerMessagePort);
    });
  };

  registerServiceWorker({
    nav: navigator,
    libPath,
    onSuccess: onServiceWorkerCreated,
    onError: console.error,
  });
};
