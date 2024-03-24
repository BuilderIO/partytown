import { debug } from '../utils';
import type { MainAccessRequest, MainAccessResponse } from '../types';
import Sandbox from '@sandbox';
import SandboxDebug from '@sandbox-debug';

export const onFetchServiceWorkerRequest = (ev: FetchEvent) => {
  const req = ev.request;
  const url = new URL(req.url);
  const pathname = url.pathname;

  if (debug && pathname.endsWith('sw.html')) {
    // debug version (sandbox and web worker are not inlined)
    ev.respondWith(response(SandboxDebug));
  } else if (!debug && pathname.endsWith('sw.html')) {
    // sandbox and webworker, minified and inlined
    ev.respondWith(response(Sandbox));
  } else if (pathname.endsWith('proxytown')) {
    // proxy request
    ev.respondWith(httpRequestFromWebWorker(req));
  }
};

const resolves = new Map<string, MessageResolve>();

export const receiveMessageFromSandboxToServiceWorker = (ev: ExtendableMessageEvent) => {
  const accessRsp: MainAccessResponse = ev.data;

  const r = resolves.get(accessRsp.$msgId$);
  if (r) {
    resolves.delete(accessRsp.$msgId$);
    clearTimeout(r[1]);
    r[0](accessRsp);
  }
};

const getClientByTab = (clients: Client[], msgId: string) => {
  const tabId = msgId.split('.').pop();
  let client = clients.find((a) => a.url.endsWith(`?${tabId}`));
  if (!client) {
    client = [...clients].sort((a, b) => {
      if (a.url > b.url) return -1;
      if (a.url < b.url) return 1;
      return 0;
    })[0];
  }

  return client;
}

const sendMessageToSandboxFromServiceWorker = (accessReq: MainAccessRequest) =>
  new Promise<MainAccessResponse>(async (resolve) => {
    const clients = await (self as any as ServiceWorkerGlobalScope).clients.matchAll();
    const client = getClientByTab([...clients], accessReq.$msgId$);

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
      resolve(swMessageError(accessReq, `NoParty`));
    }
  });

const swMessageError = (accessReq: MainAccessRequest, $error$: string): MainAccessResponse => ({
  $msgId$: accessReq.$msgId$,
  $error$,
});

type MessageResolve = [(data?: any) => void, any];

const httpRequestFromWebWorker = (req: Request) =>
  new Promise<Response>(async (resolve) => {
    const accessReq: MainAccessRequest = await req.clone().json();
    const responseData = await sendMessageToSandboxFromServiceWorker(accessReq);
    resolve(response(JSON.stringify(responseData), 'application/json'));
  });

const response = (body: string, contentType?: string) =>
  new Response(body, {
    headers: {
      'content-type': contentType || 'text/html',
      'Cache-Control': 'no-store',
    },
  });
