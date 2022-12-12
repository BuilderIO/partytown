import type { MainAccessResponse, PassMessagePortToServiceWorkerRequest } from '../types';
import { onFetchServiceWorkerRequest, receiveMessageFromSandboxToServiceWorker } from './fetch';

(self as any as ServiceWorkerGlobalScope).oninstall = () =>
  (self as any as ServiceWorkerGlobalScope).skipWaiting();

(self as any as ServiceWorkerGlobalScope).onactivate = () =>
  (self as any as ServiceWorkerGlobalScope).clients.claim();

(self as any as ServiceWorkerGlobalScope).onmessage = (ev: ExtendableMessageEvent) => {
  const data: MainAccessResponse | PassMessagePortToServiceWorkerRequest = ev.data;

  if ('$msgPort$' in data) {
    const messagePort = data.$msgPort$;
    messagePort.onmessage = receiveMessageFromSandboxToServiceWorker;
    (self as any as ServiceWorkerGlobalScope).onfetch = (ev: FetchEvent) =>
      onFetchServiceWorkerRequest(ev, messagePort);
    return;
  }

  return receiveMessageFromSandboxToServiceWorker(ev);
};

(self as any as ServiceWorkerGlobalScope).onfetch = onFetchServiceWorkerRequest;
