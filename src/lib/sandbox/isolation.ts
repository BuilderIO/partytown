import type { MessageType } from 'scripts/utils';
import {
  InitIsolationIframeData,
  IsolationIframeMessageType,
  MainAccessRequest,
  MessageFromSandboxToIsolationIframe,
  MessengerRequestCallback,
  PartytownWebWorker,
} from '../types';
import { libPath, sandboxLibPath } from './main-globals';
import { debug } from '../utils';

export const getIsolatedWorker = (receiveMessage: MessengerRequestCallback): PartytownWebWorker => {
  const useAtomics = crossOriginIsolated;
  return useAtomics ? getIsolatedWorkerAtomics() : getIsolatedWorkerSw(receiveMessage);
};

export const getIsolatedWorkerAtomics = (): PartytownWebWorker => {
  const { port1: sandboxPort, port2: webWorkerPort } = new MessageChannel();

  const iframe = initIsolationIframe('atomics', webWorkerPort);
  document.body.appendChild(iframe);

  return sandboxPort;
};

export const getIsolatedWorkerSw = (
  receiveMessage: MessengerRequestCallback
): PartytownWebWorker => {
  const { port1: sandboxPort, port2: webWorkerPort } = new MessageChannel();
  const { port1: sandboxSwPort, port2: serviceWorkerPort } = new MessageChannel();

  sandboxSwPort.onmessage = (ev: MessageEvent<MainAccessRequest>) => {
    receiveMessage(ev.data, (accessRsp) => {
      sandboxSwPort.postMessage(accessRsp);
    });
  };

  const iframe = initIsolationIframe('sw', webWorkerPort, serviceWorkerPort);
  document.body.appendChild(iframe);

  return sandboxPort;
};

const initIsolationIframe = (
  msgType: MessageType,
  workerMessagePort: MessagePort,
  backendMessagePort?: MessagePort
) => {
  const iframe = document.createElement('iframe');

  iframe.src = sandboxLibPath + `partytown-isolation-${msgType}.html`;
  iframe.setAttribute('style', 'display:block;width:0;height:0;border:0;visibility:hidden');
  iframe.setAttribute('aria-hidden', 'true');
  iframe.setAttribute('sandbox', 'allow-same-origin allow-scripts');

  if (msgType === 'atomics') {
    iframe.setAttribute('allow', 'cross-origin-isolated');
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
      [workerMessagePort, backendMessagePort].filter(isMessagePort)
    );
  };

  return iframe;
};

const isMessagePort = (port?: MessagePort): port is MessagePort => !!port;
