import { debug, logMain, normalizedWinId } from '../utils';
import {
  InitializeEnvironmentData,
  MainWindow,
  PartytownWebWorker,
  WorkerMessageType,
} from '../types';
import { winCtxs, windowIds } from './main-constants';

export const registerWindow = (
  worker: PartytownWebWorker,
  $winId$: number,
  $window$: MainWindow
) => {
  if (!windowIds.has($window$)) {
    windowIds.set($window$, $winId$);

    const doc = $window$.document;
    const history = $window$.history;

    const envData: InitializeEnvironmentData = {
      $winId$,
      $parentWinId$: windowIds.get($window$.parent)!,
      $url$: doc.baseURI,
    };

    const sendInitEnvData = () =>
      worker.postMessage([WorkerMessageType.InitializeEnvironment, envData]);

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

    winCtxs[$winId$] = {
      $winId$,
      $window$,
    };

    if (debug) {
      winCtxs[$winId$]!.$startTime$ = performance.now();
    }

    if (debug) {
      const winType = envData.$winId$ === envData.$parentWinId$ ? 'top' : 'iframe';
      logMain(`Registered ${winType} window ${normalizedWinId($winId$)} (${$winId$})`);
    }

    if (doc.readyState === 'complete') {
      sendInitEnvData();
    } else {
      $window$.addEventListener('load', sendInitEnvData);
    }
  }
};
