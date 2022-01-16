import { onMessageFromWebWorker } from '../sandbox/on-messenge-from-worker';
import { readMainPlatform } from '../sandbox/read-main-platform';
import {
  MainAccessRequest,
  MainWindow,
  MessageFromWorkerToSandbox,
  Messenger,
  PartytownWebWorker,
  WorkerMessageType,
} from '../types';

const createMessengerAtomics: Messenger = async (sandboxWindow, receiveMessage) => {
  const size = 1024 * 1024 * 1024;
  const sharedDataBuffer = new SharedArrayBuffer(size);
  const sharedData = new Int32Array(sharedDataBuffer);

  return (worker: PartytownWebWorker, mainWindow: MainWindow, msg: MessageFromWorkerToSandbox) => {
    const msgType = msg[0];
    const accessReq = msg[1] as MainAccessRequest;

    if (msgType === WorkerMessageType.MainDataRequestFromWorker) {
      // web worker has requested data from the main thread
      // collect up all the info about the main thread interfaces
      // send the main thread interface data to the web worker
      const initData = readMainPlatform(mainWindow);
      initData.$sharedDataBuffer$ = sharedDataBuffer;
      worker.postMessage([WorkerMessageType.MainDataResponseToWorker, initData]);
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
      onMessageFromWebWorker(worker, mainWindow, msg);
    }
  };
};
export default createMessengerAtomics;
