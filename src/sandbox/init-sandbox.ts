import {
  CreateWorker,
  InitWebWorkerData,
  InstanceId,
  MainWindow,
  WebWorkerRequestFromMain,
  WebWorkerResponseFromMain,
  WebWorkerResponseFromMainMessage,
} from '../types';
import { getInstanceId, setInstanceId } from './main-instances';
import { logMain } from '../utils';
import { mainAccessHandler } from './main-access-handler';
import { readMainInterfaces } from './read-interfaces';
import { readMainScripts } from './read-main-scripts';

export const initSandbox = async (
  sandboxWindow: Window,
  sandboxDocument: Document,
  createWebWorker: CreateWorker,
  requestIdleCallback: typeof window.requestIdleCallback
) => {
  const mainWindow: MainWindow = sandboxWindow.parent!;
  const mainDocument = mainWindow.document;
  const workerGroups = readMainScripts(mainDocument);
  const key = Math.random();

  const swContainer = sandboxWindow.navigator.serviceWorker;
  const swRegistration = await swContainer.getRegistration();

  const onMessageFromWorker = (
    webWorker: Worker,
    workerName: string,
    ev: MessageEvent<WebWorkerRequestFromMain>
  ) => {
    const msgType = ev.data;
    if (msgType === WebWorkerRequestFromMain.MainDataRequest) {
      const firstScriptId = getInstanceId(mainDocument.querySelector('script'));
      const mainInterfaces = readMainInterfaces(sandboxDocument);
      const initWebWorkerData: InitWebWorkerData = {
        $config$: mainWindow.partytown || {},
        $documentCookie$: mainDocument.cookie,
        $documentReadyState$: mainDocument.readyState,
        $documentReferrer$: mainDocument.referrer,
        $firstScriptId$: firstScriptId,
        $initializeScripts$: workerGroups[workerName],
        $interfaces$: mainInterfaces,
        $key$: key,
        $scopePath$: swRegistration!.scope!,
        $url$: mainWindow.location + '',
      };
      const msgToWorker: WebWorkerResponseFromMainMessage = [
        WebWorkerResponseFromMain.MainDataResponse,
        initWebWorkerData,
      ];
      webWorker.postMessage(msgToWorker);
    } else if (msgType === WebWorkerRequestFromMain.NextScriptRequest) {
      const msgToWorker: WebWorkerResponseFromMainMessage = [
        WebWorkerResponseFromMain.NextScriptResponse,
      ];
      webWorker.postMessage(msgToWorker);
    }
  };

  setInstanceId(mainWindow, InstanceId.window);
  setInstanceId(mainDocument, InstanceId.document);

  swContainer.addEventListener('message', async (ev) => {
    const accessRsp = await mainAccessHandler(key, ev.data);
    if (swRegistration && swRegistration.active) {
      swRegistration.active.postMessage(accessRsp);
    }
  });

  for (const workerName in workerGroups) {
    logMain(`Creating "${workerName}" web worker`);
    const webWorker = createWebWorker(workerName);
    webWorker.onmessage = (ev) =>
      requestIdleCallback(() => onMessageFromWorker(webWorker, workerName, ev));
  }
};
