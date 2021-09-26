import type { Messenger, PartytownWebWorker, MainWindow, MessageFromWorkerToSandbox, MainAccessRequest } from '../types';

import { WorkerMessageType } from '../types';
import { onMessageFromWebWorker } from '../sandbox/on-messenge-from-worker';

const createMessengerAtomics: Messenger = async (sandboxWindow, receiveMessage) => {
  if (!('SharedArrayBuffer' in sandboxWindow)) {
    return null;
  }

  return (
    worker: PartytownWebWorker,
    mainWindow: MainWindow,
    msg: MessageFromWorkerToSandbox
  ) => {
    const msgType = msg[0];
    if (msgType === WorkerMessageType.ForwardWorkerAccessRequest) {
      const accessReq = msg[1] as MainAccessRequest;
      receiveMessage(accessReq, (accessRsp) => {
        const sharedData = new Int32Array(accessReq.$sharedDataBuffer$!);
        const stringifiedData = JSON.stringify(accessRsp);
        const stringifiedDataLength = stringifiedData.length;
        for (let i = 0; i < stringifiedDataLength; i++) {
          sharedData[i] = stringifiedData.charCodeAt(i);
        }
        Atomics.notify(sharedData, 0);
      });
    } else {
      onMessageFromWebWorker(worker, mainWindow, msg);
    }
  };
};

export default createMessengerAtomics;
