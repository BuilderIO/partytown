import { createWebWorker } from './messenger';
import { debug } from '../utils';
import { mainAccessHandler } from './main-access-handler';
import { MainAccessRequest, MainWindow, MainWindowContext, PlatformInstanceId } from '../types';
import { readNextScript } from './read-main-scripts';
import { setInstanceId } from './main-instances';
import { winCtxs, windows } from './main-constants';

export const initSandbox = async (sandboxWindow: Window, winIds: number) => {
  const mainWindow: MainWindow = sandboxWindow.parent as any;
  const swContainer = sandboxWindow.navigator.serviceWorker;
  const swRegistration = await swContainer.getRegistration();

  const onMessageFromServiceWorkerToSandbox = (ev: MessageEvent<MainAccessRequest>) => {
    const accessReq = ev.data;
    const accessWinId = accessReq.$winId$;
    const winCtx = winCtxs.get(accessWinId);

    if (winCtx) {
      mainAccessHandler(winCtx, accessReq).then((accessRsp) => {
        if (swRegistration && swRegistration.active) {
          swRegistration.active.postMessage(accessRsp);
        }
      });
    }
  };

  const registerWindow = (win: MainWindow) => {
    if (!windows.has(win)) {
      windows.add(win);

      const parentWin = win.parent;
      const winCtx: MainWindowContext = {
        $winId$: (win.partyWinId = winIds++),
        $parentWinId$: parentWin.partyWinId!,
        $config$: mainWindow.partytown,
        $cleanupInc$: 0,
        $scopePath$: swRegistration!.scope,
        $url$: win.document.baseURI,
        $window$: win,
      };

      winCtxs.set(winCtx.$winId$, winCtx);

      if (debug) {
        winCtx.$startTime$ = performance.now();
      }

      setInstanceId(winCtx, win, PlatformInstanceId.window);
      setInstanceId(winCtx, win.history, PlatformInstanceId.history);
      setInstanceId(winCtx, win.localStorage, PlatformInstanceId.localStorage);
      setInstanceId(winCtx, win.sessionStorage, PlatformInstanceId.sessionStorage);

      swContainer.addEventListener('message', onMessageFromServiceWorkerToSandbox);

      createWebWorker(winCtx);

      win.addEventListener('load', () => readNextScript(winCtx));
    }
  };

  mainWindow.partyWin = registerWindow;

  if (swRegistration) {
    registerWindow(mainWindow);
  }
};
