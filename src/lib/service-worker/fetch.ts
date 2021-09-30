import { debug } from '../utils';
import type { MainAccessRequest, MainAccessResponse } from '../types';
import Sandbox from '@sandbox';
import SandboxDebug from '@sandbox-debug';

export const onFetchServiceWorkerRequest = (self: ServiceWorkerGlobalScope, ev: FetchEvent) => {
  const req = ev.request;
  const pathname = new URL(req.url).pathname;

  if (debug && pathname.endsWith('debug/partytown-sandbox-sw')) {
    // debug version (sandbox and web worker are not inlined)
    ev.respondWith(response(SandboxDebug));
  } else if (!debug && pathname.endsWith('partytown-sandbox-sw')) {
    // sandbox and webworker, minified and inlined
    ev.respondWith(response(Sandbox));
  } else if (pathname.endsWith('proxytown')) {
    // proxy request
    ev.respondWith(httpRequestFromWebWorker(self, req));
  }
};

const resolves = new Map<number, MessageResolve>();

export const receiveMessageFromSandboxToServiceWorker = (ev: ExtendableMessageEvent) => {
  const accessRsp: MainAccessResponse = ev.data;

  const r = resolves.get(accessRsp.$msgId$);
  if (r) {
    resolves.delete(accessRsp.$msgId$);
    clearTimeout(r[1]);
    r[0](accessRsp);
  }
};

const sendMessageToSandboxFromServiceWorker = (
  self: ServiceWorkerGlobalScope,
  accessReq: MainAccessRequest
) =>
  new Promise<MainAccessResponse>(async (resolve) => {
    const clients = await self.clients.matchAll();
    const client = [...clients].sort((a, b) => {
      if (a.url > b.url) return -1;
      if (a.url < b.url) return 1;
      return 0;
    })[0];

    if (client) {
      const timeout = debug ? 120000 : 10000;
      const msgResolve: MessageResolve = [
        resolve,
        setTimeout(() => {
          resolves.delete(accessReq.$msgId$);
          resolve(swMessageError(accessReq, `Timeout`));
        }, timeout),
      ];
      resolves.set(accessReq.$msgId$, msgResolve);
      client.postMessage(accessReq);
    } else {
      resolve(swMessageError(accessReq, `No Party`));
    }
  });

const swMessageError = (accessReq: MainAccessRequest, err: string) => ({
  $winId$: accessReq.$winId$,
  $msgId$: accessReq.$msgId$,
  $tasks$: [],
  $errors$: [err],
});

type MessageResolve = [(data?: any) => void, any];

const httpRequestFromWebWorker = (self: ServiceWorkerGlobalScope, req: Request) =>
  new Promise<Response>(async (resolve) => {
    const accessReq: MainAccessRequest = await req.clone().json();
    const responseData = await sendMessageToSandboxFromServiceWorker(self, accessReq);

    resolve(response(JSON.stringify(responseData), 'application/json'));
  });

const response = (body: string, contentType?: string) =>
  new Response(body, {
    headers: {
      'content-type': contentType || 'text/html',
      'Cache-Control': 'no-store',
    },
  });

const enum ContentType {
  HTML,
  JSON,
}
