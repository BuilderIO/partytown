import { CreateWorker, InitWebWorkerData, InstanceId } from '../types';
import { mainAccessHandler } from './main-access-handler';
import { readImplementations } from './read-interfaces';
import { readMainScripts } from './read-main-scripts';
import { setInstanceId } from './main-instances';

export const initSandbox = async (sandboxWindow: Window, createWebWorker: CreateWorker) => {
  const key = Math.random();
  const mainWindow = sandboxWindow.parent!;
  const mainDocument = mainWindow.document;
  const swContainer = sandboxWindow.navigator.serviceWorker;
  const swRegistration = await swContainer.getRegistration();

  const webWorker = createWebWorker();

  const initWebWorkerData: InitWebWorkerData = {
    $initializeScripts$: readMainScripts(mainDocument),
    $methodNames$: readImplementations(mainWindow, mainDocument),
    $scopePath$: swRegistration!.scope!,
    $key$: key,
  };

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

  webWorker.postMessage(initWebWorkerData);
};
