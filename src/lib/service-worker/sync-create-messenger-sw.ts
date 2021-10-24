import type { MainAccessRequest, Messenger } from '../types';

const createMessengerServiceWorker: Messenger = async (sandboxWindow, receiveMessage) => {
  const swContainer = sandboxWindow.navigator.serviceWorker;
  const swRegistration = await swContainer.getRegistration();

  const receiveMessageFromWorker = (ev: MessageEvent<MainAccessRequest>) =>
    receiveMessage(
      ev.data,
      (accessRsp) => swRegistration!.active && swRegistration!.active.postMessage(accessRsp)
    );

  swContainer.addEventListener('message', receiveMessageFromWorker);

  return !!swRegistration;
};

export default createMessengerServiceWorker;
