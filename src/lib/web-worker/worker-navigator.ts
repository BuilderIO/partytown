import type { WebWorkerEnvironment } from '../types';
import { debug } from '../utils';
import { logWorker } from '../log';
import { resolveUrl } from './worker-exec';
import { webWorkerCtx } from './worker-constants';

export const createNavigator = (env: WebWorkerEnvironment) => {
  let key: any;
  let nav: any = {
    sendBeacon: (url: string, body?: any) => {
      if (debug && webWorkerCtx.$config$.logSendBeaconRequests) {
        try {
          logWorker(
            `sendBeacon: ${resolveUrl(env, url, null)}${
              body ? ', data: ' + JSON.stringify(body) : ''
            }`
          );
        } catch (e) {
          console.error(e);
        }
      }
      try {
        fetch(resolveUrl(env, url, null), {
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
    },
  };

  for (key in navigator) {
    nav[key] = (navigator as any)[key];
  }

  return new Proxy(nav, {
    set(_, propName, propValue) {
        (navigator as any)[propName] = propValue;
      return true;
    },
  });
};
