import { forwardMsgResolves, winCtxs } from './main-constants';
import { getAndSetInstanceId } from './main-instances';
import {
  InitWebWorkerData,
  MainAccessResponse,
  MainWindowContext,
  MessageFromWorkerToSandbox,
  WorkerMessageType,
} from '../types';
import { initializedWorkerScript, readNextScript } from './read-main-scripts';
import { readMainInterfaces } from './read-main-interfaces';

export const onMessageFromWebWorker = (
  winCtx: MainWindowContext,
  msg: MessageFromWorkerToSandbox
) => {
  const msgType = msg[0];
  const win = winCtx.$window$;
  const doc = win.document;

  if (msgType === WorkerMessageType.MainDataRequestFromWorker) {
    // web worker has requested data from the main thread
    const initWebWorkerData: InitWebWorkerData = {
      $winId$: winCtx.$winId$,
      $parentWinId$: winCtx.$parentWinId$,
      $config$: winCtx.$config$ || {},
      $documentCompatMode$: doc.compatMode,
      $documentReadyState$: doc.readyState,
      $documentReferrer$: doc.referrer,
      $firstScriptId$: getAndSetInstanceId(winCtx, doc.querySelector('script')),
      $htmlConstructors$: Object.getOwnPropertyNames(win).filter((c) => c.startsWith('HTML')),
      $interfaces$: readMainInterfaces(win, doc),
      $libPath$: new URL(winCtx.$libPath$, winCtx.$url$) + '',
      $url$: winCtx.$url$,
    };

    // send to the web worker the main data
    winCtx.$worker$!.postMessage([WorkerMessageType.MainDataResponseToWorker, initWebWorkerData]);
  } else if (msgType === WorkerMessageType.InitializeNextWorkerScript) {
    // web worker has been initialized with the main data
    readNextScript(winCtx);
  } else if (msgType === WorkerMessageType.InitializedWorkerScript) {
    // web worker has finished initializing the script, and has another one to do
    // doing this postMessage back-and-forth so we don't have long running tasks
    initializedWorkerScript(winCtx, doc, msg[1] as number, msg[2] as string);
  } else if (msgType === WorkerMessageType.ForwardWorkerAccessResponse) {
    const accessRsp = msg[1] as MainAccessResponse;

    const forwardMsgResolveData = forwardMsgResolves.get(accessRsp.$msgId$);
    if (forwardMsgResolveData) {
      clearTimeout(forwardMsgResolveData[1]);
      forwardMsgResolves.delete(accessRsp.$msgId$);

      forwardMsgResolveData[0](accessRsp);
      readNextScript(winCtx);
    }
  } else if (msgType === WorkerMessageType.RunStateHandlers) {
    // run this state prop on all web workers (only one of them actually has it)
    // this is used for script onload, when the function was created in another window
    winCtxs.forEach((winCtx) => winCtx.$worker$!.postMessage(msg));
  }
};
