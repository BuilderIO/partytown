import type { MainAccessRequest, MainAccessResponse } from '../types';

const resolves = new Map<number, MessageResolve>();

export const receiveMessageFromSandboxToServiceWorker = (ev: ExtendableMessageEvent) => {
  const accessRsp: MainAccessResponse = ev.data;
  console.log('receiveMessageFromSandboxToServiceWorker', accessRsp);
  const r = resolves.get(accessRsp.$msgId$);
  if (r) {
    resolves.delete(accessRsp.$msgId$);
    clearTimeout(r.$timeoutId$);
    r.$resolve$(accessRsp);
  }
};

const sendMessageToSandboxFromServiceWorker = (
  self: ServiceWorkerGlobalScope,
  accessReq: MainAccessRequest
) => {
  return new Promise<MainAccessResponse>(async (resolve) => {
    const clients = await self.clients.matchAll();
    const client = clients[0];
    if (client) {
      const msgResolve: MessageResolve = {
        $resolve$: resolve,
        $timeoutId$: setTimeout(() => {
          resolves.delete(accessReq.$msgId$);
          resolve({
            $msgId$: accessReq.$msgId$,
            $instanceId$: accessReq.$instanceId$,
            $error$: `partytown timeout`,
          });
          console.warn(`partytown timeout`, accessReq);
        }, 5000),
      };
      resolves.set(accessReq.$msgId$, msgResolve);
      console.log('sendMessageToSandboxFromServiceWorker', accessReq);
      client.postMessage(accessReq);
    } else {
      resolve({
        $msgId$: accessReq.$msgId$,
        $instanceId$: accessReq.$instanceId$,
        $error$: `partytown client not found: ${accessReq}`,
      });
    }
  });
};

export const httpRequestFromWebWorker = (self: ServiceWorkerGlobalScope, req: Request) => {
  return new Promise<Response>(async (resolve) => {
    const accessReq: MainAccessRequest = await req.clone().json();
    const responseData = await sendMessageToSandboxFromServiceWorker(self, accessReq);

    resolve(
      new Response(JSON.stringify(responseData), {
        headers: { 'content-type': 'application/json' },
      })
    );
  });
};

interface MessageResolve {
  $resolve$: (data?: any) => void;
  $timeoutId$: any;
}
