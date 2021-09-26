import type { MainAccessRequest, MainAccessResponse, WebWorkerContext } from '../types';

import { WorkerMessageType } from '../types';

const syncSendMessageToMainAtomics = (
  webWorkerCtx: WebWorkerContext,
  accessReq: MainAccessRequest
): MainAccessResponse => {
  const sharedDataBuffer = new SharedArrayBuffer(1024 * 1024);
  const sharedData = new Int32Array(sharedDataBuffer);

  accessReq.$sharedDataBuffer$ = sharedDataBuffer;
  webWorkerCtx.$postMessage$([WorkerMessageType.ForwardWorkerAccessRequest, accessReq]);

  Atomics.wait(sharedData, 0, Atomics.load(sharedData, 0));

  let accessRespStr = '';
  let dataIndex = 0;
  let charCode;

  while (charCode = sharedData[dataIndex++]) {
    accessRespStr += String.fromCharCode(charCode);
  }

  accessReq.$sharedDataBuffer$ = undefined;

  return JSON.parse(accessRespStr) as MainAccessResponse;
};

export default syncSendMessageToMainAtomics;
