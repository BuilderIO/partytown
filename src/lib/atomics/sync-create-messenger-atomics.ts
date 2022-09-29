import {
  MainAccessRequest,
  MessageFromWorkerToSandbox,
  Messenger,
  PartytownWebWorker,
  WorkerMessageType,
} from '../types';
import { onMessageFromWebWorker } from '../sandbox/on-messenge-from-worker';
import { initMainPlatform } from '../sandbox/read-main-platform';

const createMessengerAtomics: Messenger = async (receiveMessage) => {
  const size = 1024 * 1024 * 1024;
  const sharedDataBuffer = new SharedArrayBuffer(size);
  const sharedData = new Int32Array(sharedDataBuffer);

  return (worker: PartytownWebWorker, msg: MessageFromWorkerToSandbox) => {
    const msgType = msg[0];
    const accessReq = msg[1] as MainAccessRequest;

    if (msgType === WorkerMessageType.MainDataRequestFromWorker) {
      // web worker has requested the initial data from the main thread
      // collect up the info about the main thread interfaces
      // send the main thread interface data to the web worker
      initMainPlatform((data) => {
        if (data) {
          data.$sharedDataBuffer$ = sharedDataBuffer;
        }
        worker.postMessage([WorkerMessageType.MainDataResponseToWorker, data]);
      });
    } else if (msgType === WorkerMessageType.ForwardWorkerAccessRequest) {
      receiveMessage(accessReq, (accessRsp) => {
        const stringifiedData = JSON.stringify(accessRsp);
        const stringifiedDataLength = stringifiedData.length;
        for (let i = 0; i < stringifiedDataLength; i++) {
          sharedData[i + 1] = stringifiedData.charCodeAt(i);
        }
        sharedData[0] = stringifiedDataLength;
        Atomics.notify(sharedData, 0);
      });
    } else {
      onMessageFromWebWorker(worker, msg);
    }
  };
};
export default createMessengerAtomics;
