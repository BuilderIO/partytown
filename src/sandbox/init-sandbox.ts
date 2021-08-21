import { CreateWorker, InitWebWorkerData, InstanceId } from '../types';
import { getInstanceId, setInstanceId } from './main-instances';
import { logMain } from '../utils';
import { mainAccessHandler } from './main-access-handler';
import { readImplementations } from './read-interfaces';
import { readMainScripts } from './read-main-scripts';

export const initSandbox = async (sandboxWindow: Window, createWebWorker: CreateWorker) => {
  const key = Math.random();
  const mainWindow = sandboxWindow.parent!;
  const mainDocument = mainWindow.document;
  const url = mainWindow.location + '';
  const swContainer = sandboxWindow.navigator.serviceWorker;
  const swRegistration = await swContainer.getRegistration();

  const methodNames = readImplementations(mainWindow, mainDocument);
  const workerGroups = readMainScripts(mainDocument);
  const firstScriptId = getInstanceId(mainDocument.querySelector('script'));

  setInstanceId(mainWindow, InstanceId.window);
  setInstanceId(mainDocument, InstanceId.document);

  swContainer.addEventListener('message', (ev) => {
    requestAnimationFrame(async () => {
      const accessRsp = await mainAccessHandler(key, ev.data);
      if (swRegistration && swRegistration.active) {
        swRegistration.active.postMessage(accessRsp);
      }
    });
  });

  logMain(`Loaded sandbox for ${url}`);

  for (const workerName in workerGroups) {
    const initWebWorkerData: InitWebWorkerData = {
      $initializeScripts$: workerGroups[workerName],
      $methodNames$: methodNames,
      $scopePath$: swRegistration!.scope!,
      $key$: key,
      $firstScriptId$: firstScriptId,
      $url$: url,
    };
    logMain(
      `Creating "${workerName}" web worker group, total scripts: ${initWebWorkerData.$initializeScripts$.length}`
    );
    const webWorker = createWebWorker(workerName);
    webWorker.postMessage(initWebWorkerData);
  }
};
