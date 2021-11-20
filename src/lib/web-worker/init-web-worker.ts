import { CSSStyleSheet } from './worker-style';
import { defineWorkerInterface, patchPrototypes } from './worker-define-constructors';
import { EMPTY_ARRAY, logWorker } from '../utils';
import type { InitWebWorkerData } from '../types';
import { Node } from './worker-node';
import { webWorkerCtx } from './worker-constants';
import { Window } from './worker-window';

export const initWebWorker = (initWebWorkerData: InitWebWorkerData) => {
  // merge it into the web worker context object
  Object.assign(webWorkerCtx, initWebWorkerData);

  webWorkerCtx.$forwardedTriggers$ = (webWorkerCtx.$config$.forward || EMPTY_ARRAY).map(
    (f) => f[0]
  );

  webWorkerCtx.$postMessage$ = postMessage.bind(self);

  (self as any).postMessage = (self as any).importScripts = undefined;

  (self as any).Node = Node;
  (self as any).Window = Window;
  (self as any).CSSStyleSheet = CSSStyleSheet;

  webWorkerCtx.$interfaces$.map(defineWorkerInterface);

  patchPrototypes();

  webWorkerCtx.$isInitialized$ = 1;

  logWorker(`Initialized web worker`);
};
