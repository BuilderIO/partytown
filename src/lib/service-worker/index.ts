import { onFetchServiceWorkerRequest, receiveMessageFromSandboxToServiceWorker } from './fetch';

const swSelf: ServiceWorkerGlobalScope = self as any;

swSelf.oninstall = () => swSelf.skipWaiting();
swSelf.onactivate = () => swSelf.clients.claim();
swSelf.onmessage = receiveMessageFromSandboxToServiceWorker;
swSelf.onfetch = (ev) => onFetchServiceWorkerRequest(swSelf, ev);
