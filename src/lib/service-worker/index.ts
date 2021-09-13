import { onFetchServiceWorkerRequest } from './fetch';
import { receiveMessageFromSandboxToServiceWorker } from './sw-message';

const initServiceWorker = (self: ServiceWorkerGlobalScope) => {
  self.oninstall = () => self.skipWaiting();
  self.onactivate = () => self.clients.claim();
  self.onmessage = receiveMessageFromSandboxToServiceWorker;
  self.onfetch = (ev) => onFetchServiceWorkerRequest(self, ev);
};

initServiceWorker(self as any);
