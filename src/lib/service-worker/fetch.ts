import { CacheControl, ContentType, response } from './response';
import { debug, PT_PROXY_URL } from '../utils';
import { httpRequestFromWebWorker } from './sw-message';
import Sandbox from '@sandbox';
import SandboxDebug from '@sandbox-debug';

export const onFetchServiceWorkerRequest = (self: ServiceWorkerGlobalScope, ev: FetchEvent) => {
  const req = ev.request;
  const pathname = new URL(req.url).pathname;

  if (debug && pathname.endsWith('partytown-sandbox.debug')) {
    // debug version (sandbox and web worker are not inlined)
    ev.respondWith(response(SandboxDebug, ContentType.HTML, CacheControl.NoStore));
  } else if (!debug && pathname.endsWith('partytown-sandbox')) {
    // sandbox and webworker, minified and inlined
    ev.respondWith(response(Sandbox, ContentType.HTML, CacheControl.NoStore));
  } else if (pathname.endsWith(PT_PROXY_URL)) {
    // proxy request
    ev.respondWith(httpRequestFromWebWorker(self, req));
  }
};
