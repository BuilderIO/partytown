import { callMethod } from './worker-proxy';
import { constructInstance } from './worker-constructors';
import { HTMLImageElement } from './worker-image';
import { InstanceIdKey, webWorkerCtx, WinIdKey } from './worker-constants';
import { InterfaceType, MemberTypeInfo, PlatformInstanceId } from '../types';
import { nextTick, TOP_WIN_ID } from '../utils';
import { sendBeacon } from './worker-exec';

export const initWebWorkerGlobal = (self: any, windowMemberTypeInfo: MemberTypeInfo) => {
  self[WinIdKey] = webWorkerCtx.$winId$;
  self[InstanceIdKey] = PlatformInstanceId.window;

  Object.keys(windowMemberTypeInfo).forEach((memberName) => {
    if (!self[memberName] && windowMemberTypeInfo[memberName] === InterfaceType.Method) {
      self[memberName] = (...args: any[]) => callMethod(self, [memberName], args);
    }
  });

  self.requestAnimationFrame = (cb: (t: number) => void) => nextTick(() => cb(Date.now()), 9);
  self.cancelAnimationFrame = clearTimeout;

  Object.defineProperty(self, 'location', {
    get: () => webWorkerCtx.$location$,
    set: (href) => (webWorkerCtx.$location$.href = href + ''),
  });

  self.document = constructInstance(InterfaceType.Document, PlatformInstanceId.document);
  self.history = constructInstance(InterfaceType.History, PlatformInstanceId.history);
  self.localStorage = constructInstance(InterfaceType.Storage, PlatformInstanceId.localStorage);
  self.sessionStorage = constructInstance(InterfaceType.Storage, PlatformInstanceId.sessionStorage);

  self.Image = HTMLImageElement;
  navigator.sendBeacon = sendBeacon;

  self.self = self.window = self;

  if (webWorkerCtx.$winId$ === TOP_WIN_ID) {
    self.parent = self.top = self;
  } else {
    self.parent = constructInstance(
      InterfaceType.Window,
      PlatformInstanceId.window,
      webWorkerCtx.$parentWinId$
    );

    self.top = constructInstance(InterfaceType.Window, PlatformInstanceId.window, TOP_WIN_ID);
  }
};
