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
  $window$: MainWindow,
  $isTop$?: number
) => {
  if (!windowIds.has($window$)) {
    windowIds.set($window$, $winId$);

    const doc = $window$.document;
    const $url$ = doc.baseURI;

    const envData: InitializeEnvironmentData = {
      $winId$,
      $parentWinId$: windowIds.get($window$.parent)!,
      $isTop$,
      $url$,
    };

    const sendInitEnvData = () =>
      worker.postMessage([WorkerMessageType.InitializeEnvironment, envData]);

    winCtxs[$winId$] = {
      $winId$,
      $window$,
      $url$,
    };
    if (debug) {
      winCtxs[$winId$]!.$startTime$ = performance.now();
    }

    if (debug) {
      const winType = envData.$isTop$ ? 'top' : 'iframe';
      logMain(`Registered ${winType} window ${normalizedWinId($winId$)} (${$winId$})`);
    }

    if (doc.readyState === 'complete') {
      sendInitEnvData();
    } else {
      $window$.addEventListener('load', sendInitEnvData);
    }
  }
};
