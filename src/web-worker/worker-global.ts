import { callMethod } from './worker-proxy';
import { createElement } from './worker-node';
import { InstanceIdKey, webWorkerCtx } from './worker-constants';
import { InterfaceType, MemberTypeInfo, NodeName, PlatformApiId } from '../types';
import { WorkerDocument } from './worker-document';
import { WorkerContentWindow } from './worker-iframe';

export const initWebWorkerGlobal = (self: any, windowMemberTypeInfo: MemberTypeInfo) => {
  self[InstanceIdKey] = PlatformApiId.window;

  Object.defineProperty(self, 'location', {
    get: () => webWorkerCtx.$location$,
    set: (href) => (webWorkerCtx.$location$!.href = href + ''),
  });

  self.document = new WorkerDocument({
    $winId$: webWorkerCtx.$winId$,
    $interfaceType$: InterfaceType.Document,
    $instanceId$: PlatformApiId.document,
    $nodeName$: NodeName.Document,
  });

  self.history = webWorkerCtx.$history$;

  self.Image = class {
    constructor() {
      return createElement(self.document, 'img', []);
    }
  };

  self.localStorage = webWorkerCtx.$localStorage$;
  self.sessionStorage = webWorkerCtx.$sessionStorage$;

  self.requestAnimationFrame = (cb: (t: number) => void) => setTimeout(() => cb(Date.now()), 16);
  self.cancelAnimationFrame = (id: number) => clearTimeout(id);

  Object.keys(windowMemberTypeInfo).forEach((memberName) => {
    if (!self[memberName] && windowMemberTypeInfo[memberName] === InterfaceType.Method) {
      self[memberName] = (...args: any[]) => callMethod(self, [memberName], args);
    }
  });

  self.self = self.window = self;

  self.parent = self.top = new WorkerContentWindow(0);
};
