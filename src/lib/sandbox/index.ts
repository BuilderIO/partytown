import { createPartytownWorker, debug } from '../utils';
import { getAndSetInstanceId } from './main-instances';
import { mainWindow, libPath, sandboxLibPath } from './main-globals';
import { logMain } from '../log';
import { mainAccessHandler } from './main-access-handler';
import {
  InitIsolationIframeData,
  IsolationIframeMessageType,
  MainAccessRequest,
  MessageFromSandboxToIsolationIframe,
  MessageFromWorkerToSandbox,
  MessengerRequestCallback,
  PartytownWebWorker,
  WorkerMessageType,
} from '../types';
import { registerWindow } from './main-register-window';
import syncCreateMessenger from '../build-modules/sync-create-messenger';
import WebWorkerBlob from '../build-modules/web-worker-blob';
import WebWorkerUrl from '../build-modules/web-worker-url';
import { VERSION } from '../build-modules/version';

const useAtomics = crossOriginIsolated;

let worker: PartytownWebWorker;

const receiveMessage: MessengerRequestCallback = (accessReq, responseCallback) =>
  mainAccessHandler(worker, accessReq).then(responseCallback);

syncCreateMessenger(receiveMessage).then((onMessageHandler) => {
  if (onMessageHandler) {
    if (sandboxLibPath) {
      worker = getIsolatedWorker();
    } else {
      worker = createPartytownWorker(
        debug
          ? libPath + WebWorkerUrl
          : URL.createObjectURL(
              new Blob([WebWorkerBlob], {
                type: 'text/javascript',
              })
            )
      );

      if (debug) {
        worker.onerror = (ev) => console.error(`Web Worker Error`, ev);
      }
    }

    worker.onmessage = (ev: MessageEvent<MessageFromWorkerToSandbox>) => {
      const msg: MessageFromWorkerToSandbox = ev.data;
      if (msg[0] === WorkerMessageType.AsyncAccessRequest) {
        // fire and forget async call within web worker
        mainAccessHandler(worker, msg[1]);
      } else {
        // blocking call within web worker
        onMessageHandler(worker, msg);
      }
    };

    if (debug) {
      logMain(`Created Partytown web worker (${VERSION})`);
    }

    mainWindow.addEventListener<any>('pt1', (ev: CustomEvent) =>
      registerWindow(worker, getAndSetInstanceId(ev.detail.frameElement)!, ev.detail)
    );
  }
});

const getIsolatedWorker = () => {
  let iframe: HTMLIFrameElement | undefined;
  const { port1: sandboxPort, port2: webWorkerPort } = new MessageChannel();

  if (useAtomics) {
    iframe = initIsolationIframe(true, webWorkerPort);
  } else {
    const { port1: swSandboxPort, port2: serviceWorkerPort } = new MessageChannel();

    swSandboxPort.onmessage = (ev: MessageEvent<MainAccessRequest>) => {
      receiveMessage(ev.data, (accessRsp) => {
        swSandboxPort.postMessage(accessRsp);
      });
    };

    iframe = initIsolationIframe(false, webWorkerPort, serviceWorkerPort);
  }

  document.body.appendChild(iframe);

  return sandboxPort as PartytownWebWorker;
};

const initIsolationIframe = (
  atomics: boolean,
  workerMessagePort: MessagePort,
  backendMessagePort?: MessagePort
) => {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('style', 'display:block;width:0;height:0;border:0;visibility:hidden');
  iframe.setAttribute('aria-hidden', 'true');

  if (atomics) {
    iframe.src = sandboxLibPath + 'partytown-isolation-atomics.html';
    iframe.setAttribute('allow', 'cross-origin-isolated');
  } else {
    iframe.src = sandboxLibPath + 'partytown-isolation-sw.html';
    iframe.setAttribute('sandbox', 'allow-same-origin allow-scripts');
  }

  iframe.onload = () => {
    const initData: InitIsolationIframeData = {
      $debug$: debug,
      $libPath$: libPath,
      $workerMsgPort$: workerMessagePort,
      $backendMsgPort$: backendMessagePort,
    };

    iframe.contentWindow!.postMessage(
      [
        IsolationIframeMessageType.InitializeIframe,
        initData,
      ] as MessageFromSandboxToIsolationIframe,
      '*',
      [workerMessagePort, backendMessagePort].filter((port): port is MessagePort => !!port)
    );
  };

  return iframe;
};
