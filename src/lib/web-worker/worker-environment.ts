import { createWindow } from './worker-window';
import { debug } from '../utils';
import { environments, webWorkerCtx } from './worker-constants';
import { InitializeEnvironmentData, WorkerMessageType } from '../types';
import { logWorker, normalizedWinId } from '../log';

export const createEnvironment = (
  { $winId$, $parentWinId$, $url$, $visibilityState$ }: InitializeEnvironmentData,
  isIframeWindow?: boolean
) => {
  console.log('createEnvironment', 1);
  if (!environments[$winId$]) {
    console.log('createEnvironment', 2);
    // create a simulated global environment for this window
    // if it hasn't already been created (like an iframe)
    environments[$winId$] = createWindow(
      $winId$,
      $parentWinId$,
      $url$,
      $visibilityState$,
      isIframeWindow
    );

    if (debug) {
      const winType = $winId$ === $parentWinId$ ? 'top' : 'iframe';
      console.log(`Created ${winType} window ${normalizedWinId($winId$)} environment`);
    }
  }

  console.log('createEnvironment', 3);
  webWorkerCtx.$postMessage$([WorkerMessageType.InitializeNextScript, $winId$]);

  return environments[$winId$];
};
