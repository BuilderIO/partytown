import type { MainAccessRequest, Messenger } from '../types';

import { onMessageFromWebWorker } from '../sandbox/on-messenge-from-worker';

const createMessengerServiceWorker: Messenger = async (sandboxWindow, receiveMessage) => {
  const swContainer = sandboxWindow.navigator.serviceWorker;
  const swRegistration = await swContainer.getRegistration();

  const receiveMessageFromWorker = (ev: MessageEvent<MainAccessRequest>) =>
    receiveMessage(
      ev.data,
      (accessRsp) => swRegistration!.active && swRegistration!.active.postMessage(accessRsp)
    );

  swContainer.addEventListener('message', receiveMessageFromWorker);

  return !!swRegistration ? onMessageFromWebWorker : null;
};

export default createMessengerServiceWorker;
