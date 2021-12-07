import { onFetchServiceWorkerRequest, receiveMessageFromSandboxToServiceWorker } from './fetch';

(self as any as ServiceWorkerGlobalScope).oninstall = () =>
  (self as any as ServiceWorkerGlobalScope).skipWaiting();

(self as any as ServiceWorkerGlobalScope).onactivate = () =>
  (self as any as ServiceWorkerGlobalScope).clients.claim();

(self as any as ServiceWorkerGlobalScope).onmessage = receiveMessageFromSandboxToServiceWorker;

(self as any as ServiceWorkerGlobalScope).onfetch = onFetchServiceWorkerRequest;
