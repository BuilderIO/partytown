import { defineConstructorName, EMPTY_ARRAY, logWorker } from '../utils';
import { elementConstructors, getTagNameFromConstructor } from './worker-constructors';
import { HTMLAnchorElement } from './worker-anchor';
import { HTMLCanvasElement } from './worker-canvas';
import { HTMLElement } from './worker-element';
import { HTMLIFrameElement } from './worker-iframe';
import { HTMLScriptElement } from './worker-script';
import type { InitWebWorkerData } from '../types';
import { webWorkerCtx } from './worker-constants';

export const initWebWorker = (initWebWorkerData: InitWebWorkerData) => {
  Object.assign(webWorkerCtx, initWebWorkerData);

  webWorkerCtx.$forwardedTriggers$ = (webWorkerCtx.$config$.forward || EMPTY_ARRAY).map(
    (f) => f[0]
  );

  webWorkerCtx.$windowMembers$ = webWorkerCtx.$interfaces$[0][2];
  webWorkerCtx.$windowMemberNames$ = Object.keys(webWorkerCtx.$windowMembers$).filter(
    (m) => !webWorkerCtx.$forwardedTriggers$.includes(m)
  );

  webWorkerCtx.$postMessage$ = postMessage.bind(self);

  (self as any).postMessage = (self as any).importScripts = undefined;

  // create the same HTMLElement constructors that were found on main's window
  // and add each constructor to the elementConstructors map, to be used by windows later
  webWorkerCtx.$htmlConstructors$.map(
    (htmlCstrName) =>
      (elementConstructors[getTagNameFromConstructor(htmlCstrName)] = defineConstructorName(
        class extends HTMLElement {},
        htmlCstrName
      ))
  );
  elementConstructors.A = HTMLAnchorElement;
  elementConstructors.CANVAS = HTMLCanvasElement;
  elementConstructors.IFRAME = HTMLIFrameElement;
  elementConstructors.SCRIPT = HTMLScriptElement;

  webWorkerCtx.$isInitialized$ = 1;

  logWorker(`Initialized web worker`);
};
