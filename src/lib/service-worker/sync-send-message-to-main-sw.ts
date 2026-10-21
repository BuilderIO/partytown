import {
  type MainAccessRequest,
  type MainAccessResponse,
  type WebWorkerContext,
  WorkerMessageType,
} from '../types';
import { partytownLibUrl } from '../web-worker/worker-constants';

let isBypassed = false;

// tell the main thread once, later messages would be ignored anyway
const bypassServiceWorker = (
  webWorkerCtx: WebWorkerContext,
  accessReq: MainAccessRequest
): MainAccessResponse => {
  if (!isBypassed) {
    isBypassed = true;
    webWorkerCtx.$postMessage$([WorkerMessageType.ServiceWorkerBypassed]);
  }
  return { $msgId$: accessReq.$msgId$, $error$: 'NoServiceWorker' };
};

const syncSendMessageToMainServiceWorker = (
  webWorkerCtx: WebWorkerContext,
  accessReq: MainAccessRequest
): MainAccessResponse => {
  const swContainer = navigator.serviceWorker;
  if (swContainer && !swContainer.controller) {
    // webkit and firefox expose the service worker to the worker, chromium
    // doesn't: it isn't controlled by it, so the request would reach the
    // server. don't send it (#794)
    return bypassServiceWorker(webWorkerCtx, accessReq);
  }
  const xhr = new XMLHttpRequest();
  xhr.open('POST', partytownLibUrl('proxytown'), false);
  xhr.send(JSON.stringify(accessReq));
  if (xhr.status != 200) {
    // the service worker always answers with a 200, so this request reached the
    // server instead: the worker isn't controlled by the service worker, e.g. some
    // iOS Safari sessions. have the main thread fall back like on the timeout,
    // which does nothing once partytown has initialized (#794). the server's
    // response isn't json, don't parse it
    return bypassServiceWorker(webWorkerCtx, accessReq);
  }
  // look ma, i'm synchronous (•‿•)
  return JSON.parse(xhr.responseText);
};

export default syncSendMessageToMainServiceWorker;
