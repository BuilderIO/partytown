import { debug } from '../utils';
import { logMain, normalizedWinId } from '../log';
import { MainWindow, PartytownWebWorker, WinId, WorkerMessageType } from '../types';
import { winCtxs, windowIds } from './main-constants';

export const registerWindow = (
  worker: PartytownWebWorker,
  $winId$: WinId,
  $window$: MainWindow
) => {
  if (!windowIds.has($window$)) {
    windowIds.set($window$, $winId$);

    const doc = $window$.document;
    const history = $window$.history;
    const $parentWinId$ = windowIds.get($window$.parent)!;

    const sendInitEnvData = () =>
      worker.postMessage([
        WorkerMessageType.InitializeEnvironment,
        {
          $winId$,
          $parentWinId$,
          $url$: doc.baseURI,
          $visibilityState$: doc.visibilityState,
        },
      ]);

    const pushState = history.pushState.bind(history);
    const replaceState = history.replaceState.bind(history);

    const onLocationChange = () =>
      setTimeout(() =>
        worker.postMessage([WorkerMessageType.LocationUpdate, $winId$, doc.baseURI])
      );

    history.pushState = (data, _, url) => {
      pushState(data, _, url);
      onLocationChange();
    };

    history.replaceState = (data, _, url) => {
      replaceState(data, _, url);
      onLocationChange();
    };

    $window$.addEventListener('popstate', onLocationChange);
    $window$.addEventListener('hashchange', onLocationChange);
    doc.addEventListener('visibilitychange', () =>
      worker.postMessage([WorkerMessageType.DocumentVisibilityState, $winId$, doc.visibilityState])
    );

    winCtxs[$winId$] = {
      $winId$,
      $window$,
    };

    if (debug) {
      winCtxs[$winId$]!.$startTime$ = performance.now();
    }

    if (debug) {
      const winType = $winId$ === $parentWinId$ ? 'top' : 'iframe';
      logMain(`Registered ${winType} window ${normalizedWinId($winId$)}`);
    }

    if (doc.readyState === 'complete') {
      sendInitEnvData();
    } else {
      $window$.addEventListener('load', sendInitEnvData);
    }
  }
};
