import { debug } from '../utils';
import type { EventHandler, WebWorkerEnvironment } from '../types';
import { logWorker } from '../log';
import { resolveUrl } from './worker-exec';
import { webWorkerCtx } from './worker-constants';

export const createImageConstructor = (env: WebWorkerEnvironment) =>
  class HTMLImageElement {
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
      if (debug && webWorkerCtx.$config$.logImageRequests) {
        logWorker(`Image() request: ${resolveUrl(env, src, null)}`, env.$winId$);
      }

      this.s = src;

      fetch(resolveUrl(env, src, null), {
        mode: 'no-cors',
        credentials: 'include',
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
