import { httpRequestFromWebWorker } from './sw-message';
import { PT_PROXY_URL, PT_SANDBOX_URL } from '../utils';

export const onFetchServiceWorkerRequest = (self: ServiceWorkerGlobalScope, ev: FetchEvent) => {
  const req = ev.request;
  const pathname = new URL(req.url).pathname;

  if (pathname.endsWith(PT_SANDBOX_URL)) {
    ev.respondWith(
      new Response(SANDBOX, {
        headers: { 'content-type': 'text/html' },
      })
    );
  } else if (pathname.endsWith(PT_PROXY_URL)) {
    ev.respondWith(httpRequestFromWebWorker(self, req));
  }
};

const SANDBOX = (globalThis as any).SANDBOX;
