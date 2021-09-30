import type { MainAccessRequest, Messenger, MessengerResponseCallback } from '../types';

const createMessengerServiceWorker: Messenger = async (sandboxWindow, receiveMessage) => {
  const swContainer = sandboxWindow.navigator.serviceWorker;
  const swRegistration = await swContainer.getRegistration();

  const receiveMessageFromWorker = (ev: MessageEvent<MainAccessRequest>) =>
    receiveMessage(ev.data, sendMessageToWorker);

  const sendMessageToWorker: MessengerResponseCallback = (accessRsp) => {
    if (swRegistration && swRegistration.active) {
      swRegistration.active.postMessage(accessRsp);
    }
  };

  swContainer.addEventListener('message', receiveMessageFromWorker);

  return !!swRegistration;
};

export default createMessengerServiceWorker;
