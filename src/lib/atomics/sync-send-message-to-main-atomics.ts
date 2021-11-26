import {
  MainAccessRequest,
  MainAccessResponse,
  WebWorkerContext,
  WorkerMessageType,
} from '../types';

const syncSendMessageToMainAtomics = (
  webWorkerCtx: WebWorkerContext,
  accessReq: MainAccessRequest
): MainAccessResponse => {
  const sharedDataBuffer = webWorkerCtx.$sharedDataBuffer$!;
  const sharedData = new Int32Array(sharedDataBuffer);

  // Reset length before call
  Atomics.store(sharedData, 0, 0);

  // Asyncronously call main
  webWorkerCtx.$postMessage$([WorkerMessageType.ForwardWorkerAccessRequest, accessReq]);

  // Syncronously wait for response
  Atomics.wait(sharedData, 0, 0);
  let dataLength = Atomics.load(sharedData, 0);
  if (dataLength === 0) {
    console.error('Atomics failed', sharedDataBuffer);
  }

  let accessRespStr = '';
  for (let i = 0; i < dataLength; i++) {
    accessRespStr += String.fromCharCode(sharedData[i + 1]);
  }

  return JSON.parse(accessRespStr) as MainAccessResponse;
};

export default syncSendMessageToMainAtomics;
