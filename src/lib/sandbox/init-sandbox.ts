import { createWebWorker } from './create-web-worker';
import { debug } from '../utils';
import { mainAccessHandler } from './main-access-handler';
import {
  MainWindow,
  MainWindowContext,
  MessengerRequestCallback,
  PlatformInstanceId,
} from '../types';
import { readNextScript } from './read-main-scripts';
import { setInstanceId } from './main-instances';
import syncCreateMessenger from '@sync-create-messenger';
import { winCtxs, windows } from './main-constants';

export const initSandbox = async (sandboxWindow: Window, winIds: number) => {
  const mainWindow: MainWindow = sandboxWindow.parent as any;
  const $config$ = mainWindow.partytown || {};
  const $libPath$ = $config$.lib || '/~partytown/';

  const registerWindow = (win: MainWindow) => {
    if (!windows.has(win)) {
      windows.add(win);

      const parentWin = win.parent;
      const winCtx: MainWindowContext = {
        $winId$: (win._ptId = winIds++),
        $parentWinId$: parentWin._ptId!,
        $cleanupInc$: 0,
        $config$,
        $libPath$,
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

      createWebWorker(winCtx);

      win.addEventListener('load', () => readNextScript(winCtx));
    }
  };

  mainWindow._ptWin = registerWindow;

  const receiveMessage: MessengerRequestCallback = (accessReq, responseCallback) => {
    const accessWinId = accessReq.$winId$;
    const winCtx = winCtxs.get(accessWinId)!;
    mainAccessHandler(winCtx, accessReq).then(responseCallback);
  };

  const success = await syncCreateMessenger(sandboxWindow, receiveMessage);

  if (success) {
    registerWindow(mainWindow);
  }
};
