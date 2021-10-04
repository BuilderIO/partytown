import { callMethod, createGlobalConstructorProxy, proxy } from './worker-proxy';
import {
  constructInstance,
  elementConstructors,
  getTagNameFromConstructor,
} from './worker-constructors';
import { HTMLAnchorElement } from './worker-anchor';
import { HTMLDocument, WorkerDocumentElementChild } from './worker-document';
import { HTMLElement } from './worker-element';
import { HTMLIFrameElement, Window } from './worker-iframe';
import { HTMLImageElement } from './worker-image';
import { HTMLScriptElement } from './worker-script';
import { InstanceIdKey, webWorkerCtx, WinIdKey } from './worker-constants';
import {
  InterfaceInfo,
  InterfaceType,
  MembersInterfaceTypeInfo,
  PlatformInstanceId,
} from '../types';
import { nextTick, TOP_WIN_ID } from '../utils';
import { Node } from './worker-node';
import { sendBeacon } from './worker-exec';

export const initWebWorkerGlobal = (
  self: any,
  windowMemberTypeInfo: MembersInterfaceTypeInfo,
  interfaces: InterfaceInfo[],
  htmlCstrNames: string[]
) => {
  self[WinIdKey] = webWorkerCtx.$winId$;
  self[InstanceIdKey] = PlatformInstanceId.window;

  Object.keys(windowMemberTypeInfo).map((memberName) => {
    if (!self[memberName] && windowMemberTypeInfo[memberName] === InterfaceType.Function) {
      self[memberName] = (...args: any[]) => callMethod(self, [memberName], args);
    }
  });

  interfaces.map((i) => createGlobalConstructorProxy(self, i[0], i[1]));

  self.requestAnimationFrame = (cb: (t: number) => void) => nextTick(() => cb(Date.now()), 9);
  self.cancelAnimationFrame = clearTimeout;

  Object.defineProperty(self, 'location', {
    get: () => webWorkerCtx.$location$,
    set: (href) => (webWorkerCtx.$location$.href = href + ''),
  });

  self.document = constructInstance(InterfaceType.Document, PlatformInstanceId.document);
  self.history = proxy(InterfaceType.History, self, ['history']);
  self.localStorage = proxy(InterfaceType.Storage, self, ['localStorage']);
  self.screen = proxy(InterfaceType.Object, self, ['screen']);
  self.sessionStorage = proxy(InterfaceType.Storage, self, ['sessionStorage']);

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

  self.HTMLDocument = self.Document = HTMLDocument;
  self.HTMLElement = self.Element = HTMLElement;
  self.Image = HTMLImageElement;
  self.Node = Node;
  self.Window = Window;

  htmlCstrNames.map((htmlCstrName) => {
    if (!self[htmlCstrName]) {
      elementConstructors[getTagNameFromConstructor(htmlCstrName)] = self[htmlCstrName] =
        Object.defineProperty(class extends HTMLElement {}, 'name', {
          value: htmlCstrName,
        });
    }
  });

  elementConstructors.A = self.HTMLAnchorElement = HTMLAnchorElement;
  elementConstructors.BODY = elementConstructors.HEAD = WorkerDocumentElementChild;
  elementConstructors.IFRAME = self.HTMLIFrameElement = HTMLIFrameElement;
  elementConstructors.SCRIPT = self.HTMLScriptElement = HTMLScriptElement;
};
