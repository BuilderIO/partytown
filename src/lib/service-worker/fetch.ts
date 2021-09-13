import { httpRequestFromWebWorker } from './sw-message';
import { debug, PT_PROXY_URL } from '../utils';
import Sandbox from '@sandbox';
import SandboxHash from '@sandbox-hash';
import SandboxDebug from '@sandbox-debug';

export const onFetchServiceWorkerRequest = (self: ServiceWorkerGlobalScope, ev: FetchEvent) => {
  const req = ev.request;
  const pathname = new URL(req.url).pathname;

  if (debug && pathname.endsWith('partytown-sandbox.debug')) {
    ev.respondWith(
      new Response(SandboxDebug, {
        headers: { 'content-type': 'text/html', 'Cache-Control': 'no-store' },
      })
    );
  } else if (!debug && pathname.endsWith('partytown-sandbox-' + SandboxHash)) {
    ev.respondWith(
      new Response(Sandbox, {
        headers: {
          'content-type': 'text/html',
          'Cache-Control': 'max-age=31556952, immutable',
        },
      })
    );
  } else if (pathname.endsWith(PT_PROXY_URL)) {
    ev.respondWith(httpRequestFromWebWorker(self, req));
  }
};
