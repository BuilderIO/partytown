import type { MainAccessRequest, MainAccessResponse, WebWorkerContext } from '../types';

const syncSendMessageToMainServiceWorker = (
  webWorkerCtx: WebWorkerContext,
  accessReq: MainAccessRequest
): MainAccessResponse => {
  const xhr = new XMLHttpRequest();
  const url = webWorkerCtx.$libPath$ + 'proxytown';
  xhr.open('POST', url, false);
  xhr.send(JSON.stringify(accessReq));
  // look ma, i'm synchronous (•‿•)
  return JSON.parse(xhr.responseText);
};

export default syncSendMessageToMainServiceWorker;
