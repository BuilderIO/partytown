import type { MainAccessRequest, MainAccessResponse, WebWorkerContext } from '../types';

const syncSendMessageToMainAtomics = (
  webWorkerCtx: WebWorkerContext,
  accessReq: MainAccessRequest
): MainAccessResponse => {
  const accessRsp: MainAccessResponse = {
    $msgId$: accessReq.$msgId$,
    $error$: `Atomics not implemented (yet)`,
  };
  return accessRsp;
};

export default syncSendMessageToMainAtomics;
