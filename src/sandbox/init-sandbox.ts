import {
  CreateWorker,
  InitWebWorkerData,
  MessageFromWorkerToSandbox,
  PlatformApiId,
  PostMessageToWorker,
  WorkerMessageType,
} from '../types';
import { debug, logMain, PT_INITIALIZED_EVENT } from '../utils';
import { getAndSetInstanceId, setInstanceId } from './main-instances';
import { mainAccessHandler } from './main-access-handler';
import { mainCtx } from './main-context';
import { readMainInterfaces } from './read-interfaces';
import { readMainScripts } from './read-main-scripts';

export const initSandbox = async (createWebWorker: CreateWorker) => {
  const starTime = debug ? performance.now() : 0;
  const sandboxDocument = mainCtx.$sandboxDocument$;
  const mainDocument = mainCtx.$document$;
  const workerScripts = readMainScripts(mainDocument);
  const swContainer = mainCtx.$sandboxWindow$.navigator.serviceWorker;
  const swRegistration = await swContainer.getRegistration();

  setInstanceId(mainCtx.$window$, PlatformApiId.window);
  setInstanceId(mainCtx.$document$, PlatformApiId.document);
  setInstanceId(mainCtx.$documentElement$, PlatformApiId.documentElement);
  setInstanceId(mainCtx.$head$, PlatformApiId.head);
  setInstanceId(mainCtx.$body$, PlatformApiId.body);
  setInstanceId(mainCtx.$history$, PlatformApiId.history);
  setInstanceId(mainCtx.$localStorage$, PlatformApiId.localStorage);
  setInstanceId(mainCtx.$sessionStorage$, PlatformApiId.sessionStorage);

  const onMessageFromWorker = (
    postMessage: PostMessageToWorker,
    workerName: string,
    ev: MessageEvent<MessageFromWorkerToSandbox>
  ) => {
    const msg = ev.data;
    const msgType = msg[0];

    if (msgType === WorkerMessageType.MainDataRequestFromWorker) {
      // web worker has requested data from the main thread
      const firstScriptId = getAndSetInstanceId(mainDocument.querySelector('script'));
      const mainInterfaces = readMainInterfaces(
        mainCtx.$sandboxWindow$,
        sandboxDocument,
        sandboxDocument.documentElement
      );
      const initWebWorkerData: InitWebWorkerData = {
        $config$: mainCtx.$config$,
        $documentCompatMode$: mainDocument.compatMode,
        $documentCookie$: mainDocument.cookie,
        $documentReadyState$: mainDocument.readyState,
        $documentReferrer$: mainDocument.referrer,
        $documentTitle$: mainDocument.title,
        $firstScriptId$: firstScriptId,
        $initializeScripts$: workerScripts[workerName],
        $interfaces$: mainInterfaces,
        $scopePath$: swRegistration!.scope!,
        $url$: mainCtx.$url$,
      };
      // send to the web worker the main data
      postMessage([WorkerMessageType.MainDataResponseToWorker, initWebWorkerData]);
    } else if (msgType === WorkerMessageType.WorkerInitializeStart) {
      // web worker has been initialized with the main data
      mainDocument.dispatchEvent(new CustomEvent(PT_INITIALIZED_EVENT));
      // send to the web worker to initialize the next script
      postMessage([WorkerMessageType.InitializeNextWorkerScript]);
    } else if (msgType === WorkerMessageType.InitializeNextWorkerScript) {
      // web worker has finished initializing the script, and has another one to do
      // doing this postMessage back-and-forth so we don't have long running tasks
      postMessage([WorkerMessageType.InitializeNextWorkerScript]);
    } else if (debug && msgType === WorkerMessageType.WorkerInitializeEnd) {
      logMain(`Startup ${(performance.now() - starTime).toFixed(1)}ms`);
    }
  };

  swContainer.addEventListener('message', (ev) => {
    mainAccessHandler(ev.data).then((accessRsp) => {
      if (swRegistration && swRegistration.active) {
        swRegistration.active.postMessage(accessRsp);
      }
    });
  });

  for (const workerName in workerScripts) {
    logMain(`Creating "${workerName}" web worker`);
    const webWorker = createWebWorker(workerName);
    const postMessage: PostMessageToWorker = webWorker.postMessage.bind(webWorker);
    webWorker.onmessage = (ev) => onMessageFromWorker(postMessage, workerName, ev);
    mainCtx.$workerPostMessage$.push(postMessage);
  }
};
