import type { WebWorkerEnvironment } from '../types';
import { debug } from '../utils';
import { logWorker } from '../log';
import { resolveUrl } from './worker-exec';
import { webWorkerCtx } from './worker-constants';

export const createNavigator = (env: WebWorkerEnvironment) => {
  const navigator = self.navigator as any;

  navigator.sendBeacon = (url: string, body?: any) => {
    if (debug && webWorkerCtx.$config$.logSendBeaconRequests) {
      try {
        logWorker(
          `sendBeacon: ${resolveUrl(env, url, true)}${
            body ? ', data: ' + JSON.stringify(body) : ''
          }`
        );
      } catch (e) {
        console.error(e);
      }
    }
    try {
      fetch(resolveUrl(env, url, true), {
        method: 'POST',
        body,
        mode: 'no-cors',
        keepalive: true,
      });
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  return navigator;
};
