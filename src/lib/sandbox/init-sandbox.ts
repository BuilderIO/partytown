import { createWebWorker } from './messenger';
import { debug, TOP_WIN_ID } from '../utils';
import { mainAccessHandler } from './main-access-handler';
import { MainAccessRequest, MainWindow, MainWindowContext, PlatformInstanceId } from '../types';
import { readNextScript } from './read-main-scripts';
import { setInstanceId } from './main-instances';

export const initSandbox = async (sandboxWindow: Window) => {
  let winIds = TOP_WIN_ID;
  const winCtxs = new Map<number, MainWindowContext>();
  const windows = new WeakSet<MainWindow>();
  const mainWindow: MainWindow = sandboxWindow.parent as any;
  const swContainer = sandboxWindow.navigator.serviceWorker;
  const swRegistration = await swContainer.getRegistration();

  const onMessageFromServiceWorker = (ev: MessageEvent<MainAccessRequest>) => {
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
        $instanceIdByInstance$: new WeakMap(),
        $instances$: [],
        $nextId$: PlatformInstanceId.body + 1,
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

      swContainer.addEventListener('message', onMessageFromServiceWorker);

      createWebWorker(winCtxs, winCtx);

      win.addEventListener('load', () => readNextScript(winCtx));
    }
  };

  mainWindow.partyWin = registerWindow;

  if (swRegistration) {
    registerWindow(mainWindow);
  }
};
