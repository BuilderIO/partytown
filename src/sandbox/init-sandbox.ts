import { CreateWorker, InitWebWorkerData, InstanceId } from '../types';
import { logMain } from '../utils';
import { mainAccessHandler } from './main-access-handler';
import { readImplementations } from './read-interfaces';
import { readMainScripts } from './read-main-scripts';
import { setInstanceId } from './main-instances';

export const initSandbox = async (sandboxWindow: Window, createWebWorker: CreateWorker) => {
  logMain(`Loaded`);

  const key = Math.random();
  const mainWindow = sandboxWindow.parent!;
  const mainDocument = mainWindow.document;
  const swContainer = sandboxWindow.navigator.serviceWorker;
  const swRegistration = await swContainer.getRegistration();

  const methodNames = readImplementations(mainWindow, mainDocument);
  const workerGroups = readMainScripts(mainDocument);

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

  for (const workerName in workerGroups) {
    const initWebWorkerData: InitWebWorkerData = {
      $initializeScripts$: workerGroups[workerName],
      $methodNames$: methodNames,
      $scopePath$: swRegistration!.scope!,
      $key$: key,
    };
    logMain(
      `Creating "${workerName}" web worker group, total scripts: ${initWebWorkerData.$initializeScripts$.length}`
    );
    const webWorker = createWebWorker(workerName);
    webWorker.postMessage(initWebWorkerData);
  }
};
