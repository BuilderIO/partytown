import { callMethod } from './worker-proxy';
import { createElement } from './worker-node';
import { InstanceIdKey, webWorkerCtx } from './worker-constants';
import { InterfaceType, MemberTypeInfo, PlatformApiId } from '../types';

export const initWebWorkerGlobal = (self: any, windowMemberTypeInfo: MemberTypeInfo) => {
  self[InstanceIdKey] = PlatformApiId.window;

  Object.defineProperty(self, 'location', {
    get: () => webWorkerCtx.$location$,
    set: (href) => (webWorkerCtx.$location$!.href = href + ''),
  });

  self.document = webWorkerCtx.$document$;
  self.history = webWorkerCtx.$history$;

  self.Image = class {
    constructor() {
      return createElement(webWorkerCtx.$document$!, 'img', []);
    }
  };

  self.localStorage = webWorkerCtx.$localStorage$;
  self.sessionStorage = webWorkerCtx.$sessionStorage$;

  self.requestAnimationFrame = (cb: (t: number) => void) => setTimeout(() => cb(Date.now()), 16);
  self.cancelAnimationFrame = (id: number) => clearTimeout(id);

  self.self = self.parent = self.top = self.window = self;

  Object.keys(windowMemberTypeInfo).forEach((memberName) => {
    if (!self[memberName] && windowMemberTypeInfo[memberName] === InterfaceType.Method) {
      self[memberName] = (...args: any[]) => callMethod(self, [memberName], args);
    }
  });
};
