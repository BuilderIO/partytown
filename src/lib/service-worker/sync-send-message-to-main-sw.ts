import type { MainAccessRequest, MainAccessResponse, WebWorkerContext } from '../types';
import { partytownLibUrl } from '../web-worker/worker-constants';

const syncSendMessageToMainServiceWorker = (
  webWorkerCtx: WebWorkerContext,
  accessReq: MainAccessRequest
): MainAccessResponse => {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', partytownLibUrl('proxytown'), false);
  xhr.send(JSON.stringify(accessReq));
  // look ma, i'm synchronous (•‿•)
  return JSON.parse(xhr.responseText);
};

export default syncSendMessageToMainServiceWorker;
