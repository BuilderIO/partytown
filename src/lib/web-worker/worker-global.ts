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
    const interfaceType = windowMemberTypeInfo[memberName];

    if (!self[memberName] && interfaceType > InterfaceType.Window) {
      // this globa doesn't already exist in the worker
      // and the interface type isn't a Window object
      if (interfaceType === InterfaceType.Function) {
        // this is a global function, like alert()
        self[memberName] = (...args: any[]) => callMethod(self, [memberName], args);
      } else if (interfaceType > InterfaceType.DocumentFragmentNode) {
        // this is a global implementation, like localStorage
        self[memberName] = proxy(interfaceType, self, [memberName]);
      }
    }
  });

  interfaces.map((i) => createGlobalConstructorProxy(self, i[0], i[1]));

  Object.defineProperty(self, 'location', {
    get: () => webWorkerCtx.$location$,
    set: (href) => (webWorkerCtx.$location$.href = href + ''),
  });

  self.document = constructInstance(InterfaceType.Document, PlatformInstanceId.document);

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

  self.Document = HTMLDocument;
  self.HTMLElement = self.Element = HTMLElement;
  self.Image = HTMLImageElement;
  self.Node = Node;

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
