import type { MainAccessResponse } from '../types';

export default function syncSendMessageToMainServiceWorker(
  webWorkerCtx: any,
  accessReq: any
): MainAccessResponse {
  // dynamically replaced at build-time with
  webWorkerCtx;
  accessReq;
  return null as any;
}
