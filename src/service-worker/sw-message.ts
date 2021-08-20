import type { MainAccessRequest, MainAccessResponse } from '../types';

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
    const client = clients[0];
    if (client) {
      const msgResolve: MessageResolve = [
        resolve,
        setTimeout(() => {
          resolves.delete(accessReq.$msgId$);
          resolve({
            $msgId$: accessReq.$msgId$,
            $instanceId$: accessReq.$instanceId$,
            $error$: `partytown timeout`,
          });
          console.warn(`partytown timeout`, accessReq);
        }, 5000),
      ];
      resolves.set(accessReq.$msgId$, msgResolve);
      client.postMessage(accessReq);
    } else {
      resolve({
        $msgId$: accessReq.$msgId$,
        $instanceId$: accessReq.$instanceId$,
        $error$: `Partytown client not found: ${accessReq}`,
      });
    }
  });

export const httpRequestFromWebWorker = (self: ServiceWorkerGlobalScope, req: Request) =>
  new Promise<Response>(async (resolve) => {
    const accessReq: MainAccessRequest = await req.clone().json();
    const responseData = await sendMessageToSandboxFromServiceWorker(self, accessReq);

    resolve(
      new Response(JSON.stringify(responseData), {
        headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-cache no-store' },
      })
    );
  });

type MessageResolve = [(data?: any) => void, any];
