import { createElement } from './worker-node';
import { InstanceId } from '../types';
import { InstanceIdKey, webWorkerCtx } from './worker-constants';

export const initWebWorkerGlobal = (self: any) => {
  self[InstanceIdKey] = InstanceId.window;

  const globalProps: GlobalProp[] = [
    ['document', webWorkerCtx.$document$],
    ['history', webWorkerCtx.$history$],
    [
      'Image',
      class {
        constructor() {
          return createElement(webWorkerCtx.$document$!, 'img', []);
        }
      },
    ],
    ['localStorage', webWorkerCtx.$localStorage$],
    [
      'location',
      webWorkerCtx.$location$,
      (href: any) => (typeof href === 'string' ? (webWorkerCtx.$location$!.href = href) : 0),
    ],
    ['sessionStorage', webWorkerCtx.$sessionStorage$],
  ];

  globalProps.forEach((globalProp) =>
    Object.defineProperty(self, globalProp[0], {
      get: () => globalProp[1],
      set: (val) => (globalProp[2] ? globalProp[2](val) : 0),
    })
  );

  self.requestAnimationFrame = (cb: (t: number) => void) => setTimeout(() => cb(Date.now()), 16);
  self.cancelAnimationFrame = (id: number) => clearTimeout(id);

  self.self = self.parent = self.top = self.window = self;
};

type GlobalProp = [string, any] | [string, any, (value: any) => void];
