import { debug, logWorker } from '../utils';
import { environments, webWorkerCtx } from './worker-constants';
import type { EventHandler } from '../types';
import { resolveUrl } from './worker-exec';

export const createImageConstructor = (winId: number) => {
  return class HTMLImageElement {
    s: string;
    l: EventHandler[];
    e: EventHandler[];

    constructor() {
      this.s = '';
      this.l = [];
      this.e = [];
    }

    get src() {
      return this.s;
    }
    set src(src: string) {
      const env = environments[winId];
      if (debug && webWorkerCtx.$config$.logImageRequests) {
        logWorker(`Image() request: ${resolveUrl(env, src)}`, winId);
      }

      fetch(resolveUrl(env, src), {
        mode: 'no-cors',
        keepalive: true,
      }).then(
        (rsp) => {
          if (rsp.ok || rsp.status === 0) {
            this.l.map((cb) => cb({ type: 'load' }));
          } else {
            this.e.map((cb) => cb({ type: 'error' }));
          }
        },
        () => this.e.forEach((cb) => cb({ type: 'error' }))
      );
    }

    addEventListener(eventName: 'load' | 'error', cb: EventHandler) {
      if (eventName === 'load') {
        this.l.push(cb);
      }
      if (eventName === 'error') {
        this.e.push(cb);
      }
    }

    get onload() {
      return this.l[0];
    }
    set onload(cb: EventHandler) {
      this.l = [cb];
    }

    get onerror() {
      return this.e[0];
    }
    set onerror(cb: EventHandler) {
      this.e = [cb];
    }
  };
};
