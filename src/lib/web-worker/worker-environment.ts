import { createWindow } from './worker-window';
import { debug } from '../utils';
import { environments, webWorkerCtx, WinIdKey } from './worker-constants';
import { InitializeEnvironmentData, WinId, WorkerMessageType } from '../types';
import { logWorker, normalizedWinId } from '../log';

export const createEnvironment = (
  { $winId$, $parentWinId$, $url$ }: InitializeEnvironmentData,
  isIframeWindow?: boolean
) => {
  if (!environments[$winId$]) {
    // create a simulated global environment for this window
    // if it hasn't already been created (like an iframe)
    createWindow($winId$, $parentWinId$, $url$, isIframeWindow);

    if (debug) {
      const winType = $winId$ === $parentWinId$ ? 'top' : 'iframe';
      logWorker(`Created ${winType} window ${normalizedWinId($winId$)} environment`, $winId$);
    }
  }

  webWorkerCtx.$postMessage$([WorkerMessageType.InitializeNextScript, $winId$]);

  return environments[$winId$];
};

export const getEnv = (instance: { [WinIdKey]: WinId }) => environments[instance[WinIdKey]];

export const getEnvWindow = (instance: { [WinIdKey]: WinId }) => getEnv(instance).$window$;
