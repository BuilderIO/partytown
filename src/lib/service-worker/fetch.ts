import { debug } from '../utils';
import type { MainAccessRequest, MainAccessResponse } from '../types';
import Sandbox from '@sandbox';
import SandboxDebug from '@sandbox-debug';

export const onFetchServiceWorkerRequest = (ev: FetchEvent, messagePort?: MessagePort) => {
  const req = ev.request;
  const url = new URL(req.url);
  const pathname = url.pathname;

  if (debug && pathname.endsWith('partytown-sandbox-sw.html')) {
    // debug version (sandbox and web worker are not inlined)
    ev.respondWith(response(SandboxDebug));
  } else if (!debug && pathname.endsWith('partytown-sandbox-sw.html')) {
    // sandbox and webworker, minified and inlined
    ev.respondWith(response(Sandbox));
  } else if (pathname.endsWith('proxytown')) {
    // proxy request
    ev.respondWith(httpRequestFromWebWorker(req, messagePort));
  }
};

const resolves = new Map<string, MessageResolve>();

export const receiveMessageFromSandboxToServiceWorker = (
  ev: ExtendableMessageEvent | MessageEvent
) => {
  const accessRsp: MainAccessResponse = ev.data;

  const r = resolves.get(accessRsp.$msgId$);
  if (r) {
    resolves.delete(accessRsp.$msgId$);
    clearTimeout(r[1]);
    r[0](accessRsp);
  }
};

const sendMessageToSandboxFromServiceWorker = (accessReq: MainAccessRequest) =>
  new Promise<MainAccessResponse>(async (resolve) => {
    const clients = await (self as any as ServiceWorkerGlobalScope).clients.matchAll();
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
      resolve(swMessageError(accessReq, `NoParty`));
    }
  });

const sendMessageToMessagePort = (accessReq: MainAccessRequest, messagePort: MessagePort) =>
  new Promise<MainAccessResponse>(async (resolve) => {
    const timeout = debug ? 120000 : 10000;
    const msgResolve: MessageResolve = [
      resolve,
      setTimeout(() => {
        resolves.delete(accessReq.$msgId$);
        resolve(swMessageError(accessReq, `Timeout`));
      }, timeout),
    ];
    resolves.set(accessReq.$msgId$, msgResolve);
    messagePort.postMessage(accessReq);
  });

const swMessageError = (accessReq: MainAccessRequest, $error$: string): MainAccessResponse => ({
  $msgId$: accessReq.$msgId$,
  $error$,
});

type MessageResolve = [(data?: any) => void, any];

const httpRequestFromWebWorker = (req: Request, messagePort?: MessagePort) =>
  new Promise<Response>(async (resolve) => {
    const accessReq: MainAccessRequest = await req.clone().json();
    const responseData = messagePort
      ? await sendMessageToMessagePort(accessReq, messagePort)
      : await sendMessageToSandboxFromServiceWorker(accessReq);
    resolve(response(JSON.stringify(responseData), 'application/json'));
  });

const response = (body: string, contentType?: string) =>
  new Response(body, {
    headers: {
      'content-type': contentType || 'text/html',
      'Cache-Control': 'no-store',
    },
  });
