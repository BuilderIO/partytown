import { MainAccessRequest, MainWindow, MainWindowContext, PlatformApiId } from '../types';
import { debug } from '../utils';
import { mainAccessHandler } from './main-access-handler';
import { setInstanceId } from './main-instances';
import { createWebWorker } from './messenger';
import { readNextScript } from './read-main-scripts';

export const initSandbox = async (sandboxWindow: Window) => {
  let winIds = 0;
  const windows = new WeakSet<MainWindow>();
  const winCtxs = new Map<number, MainWindowContext>();
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
        $history$: win.history,
        $instanceIdByInstance$: new WeakMap(),
        $instances$: [],
        $localStorage$: win.localStorage,
        $nextId$: PlatformApiId.body + 1,
        $scopePath$: swRegistration!.scope,
        $sessionStorage$: win.sessionStorage,
        $url$: win.location + '',
        $window$: win,
      };

      winCtxs.set(winCtx.$winId$, winCtx);

      if (debug) {
        winCtx.$startTime$ = performance.now();
      }

      setInstanceId(winCtx, win, PlatformApiId.window);
      setInstanceId(winCtx, win.history, PlatformApiId.history);
      setInstanceId(winCtx, win.localStorage, PlatformApiId.localStorage);
      setInstanceId(winCtx, win.sessionStorage, PlatformApiId.sessionStorage);

      swContainer.addEventListener('message', onMessageFromServiceWorker);

      createWebWorker(winCtx);

      win.addEventListener('load', () => readNextScript(winCtx));
    }
  };

  mainWindow.partyWin = registerWindow;

  if (swRegistration) {
    registerWindow(mainWindow);
  }
};
