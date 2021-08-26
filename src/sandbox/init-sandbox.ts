import {
  CreateWorker,
  InitWebWorkerData,
  InstanceId,
  MainWindow,
  SandboxMessageToWebWorker,
  WebWorkerMessageToSandbox,
  WebWorkerRequestToSandboxMessage,
  WebWorkerResponseFromSandboxMessage,
} from '../types';
import { getInstance, getInstanceId, setInstanceId } from './main-instances';
import { logMain, PT_INITIALIZED_EVENT, PT_SCRIPT_INIT_TYPE } from '../utils';
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

  const swContainer = sandboxWindow.navigator.serviceWorker;
  const swRegistration = await swContainer.getRegistration();

  const onMessageFromWorker = (
    webWorker: Worker,
    workerName: string,
    ev: MessageEvent<WebWorkerRequestToSandboxMessage>
  ) => {
    const msg = ev.data;
    const msgType = msg[0];
    const remainingScripts = msg[2];

    if (msgType === WebWorkerMessageToSandbox.MainDataRequest) {
      const firstScriptId = getInstanceId(mainDocument.querySelector('script'));
      const mainInterfaces = readMainInterfaces(sandboxWindow, sandboxDocument);
      const initWebWorkerData: InitWebWorkerData = {
        $config$: mainWindow.partytown || {},
        $documentCompatMode$: mainDocument.compatMode,
        $documentCookie$: mainDocument.cookie,
        $documentReadyState$: mainDocument.readyState,
        $documentReferrer$: mainDocument.referrer,
        $documentTitle$: mainDocument.title,
        $firstScriptId$: firstScriptId,
        $initializeScripts$: workerGroups[workerName],
        $interfaces$: mainInterfaces,
        $scopePath$: swRegistration!.scope!,
        $url$: mainWindow.location + '',
      };
      const msgToWorker: WebWorkerResponseFromSandboxMessage = [
        SandboxMessageToWebWorker.MainDataResponse,
        initWebWorkerData,
      ];
      webWorker.postMessage(msgToWorker);
    } else if (msgType === WebWorkerMessageToSandbox.ScriptInitialized) {
      const script = getInstance<HTMLScriptElement>(msg[1]);
      if (script) {
        script.type = PT_SCRIPT_INIT_TYPE;
      }

      if (remainingScripts > 0) {
        const msgToWorker: WebWorkerResponseFromSandboxMessage = [
          SandboxMessageToWebWorker.InitializeNextScript,
        ];
        webWorker.postMessage(msgToWorker);
      } else {
        mainDocument.dispatchEvent(new CustomEvent(PT_INITIALIZED_EVENT));
      }
    }
  };

  setInstanceId(mainWindow.history, InstanceId.history);
  setInstanceId(mainWindow.localStorage, InstanceId.localStorage);
  setInstanceId(mainWindow.sessionStorage, InstanceId.sessionStorage);
  setInstanceId(mainWindow, InstanceId.window);
  setInstanceId(mainDocument, InstanceId.document);
  setInstanceId(mainDocument.documentElement, InstanceId.documentElement);
  setInstanceId(mainDocument.head, InstanceId.head);
  setInstanceId(mainDocument.body, InstanceId.body);

  swContainer.addEventListener('message', async (ev) => {
    const accessRsp = await mainAccessHandler(ev.data);
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
