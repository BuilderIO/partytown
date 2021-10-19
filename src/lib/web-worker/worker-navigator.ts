import { debug, logWorker } from '../utils';
import { environments, webWorkerCtx } from './worker-constants';
import { resolveUrl } from './worker-exec';

export const createNavigator = (winId: number) => {
  const navigator = self.navigator as any;

  navigator.sendBeacon = (url: string, body?: any) => {
    const env = environments[winId];
    if (debug && webWorkerCtx.$config$.logSendBeaconRequests) {
      try {
        logWorker(
          `sendBeacon: ${resolveUrl(env, url)}${body ? ', data: ' + JSON.stringify(body) : ''}`
        );
      } catch (e) {
        console.error(e);
      }
    }
    try {
      fetch(resolveUrl(env, url), {
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
