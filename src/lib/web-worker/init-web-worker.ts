import { CSSStyleSheet } from './worker-style';
import { defineWorkerInterface, patchPrototypes } from './worker-define-constructors';
import { EMPTY_ARRAY, logWorker } from '../utils';
import type { InitWebWorkerData } from '../types';
import { Node } from './worker-node';
import type { PartytownConfig } from '@builder.io/partytown/intergration';
import { webWorkerCtx } from './worker-constants';
import { Window } from './worker-window';

export const initWebWorker = (initWebWorkerData: InitWebWorkerData) => {
  const config: PartytownConfig = (webWorkerCtx.$config$ = JSON.parse(initWebWorkerData.$config$));
  if (config.resolveUrl) {
    Object.assign(config, {
      resolveUrl: new Function('return ' + config.resolveUrl)(),
    });
  }

  webWorkerCtx.$libPath$ = initWebWorkerData.$libPath$;
  webWorkerCtx.$localStorage$ = initWebWorkerData.$localStorage$;
  webWorkerCtx.$sessionStorage$ = initWebWorkerData.$sessionStorage$;
  webWorkerCtx.$forwardedTriggers$ = (config.forward || EMPTY_ARRAY).map((f) => f[0]);
  webWorkerCtx.$postMessage$ = postMessage.bind(self);
  webWorkerCtx.$sharedDataBuffer$ = initWebWorkerData.$sharedDataBuffer$;

  (self as any).postMessage = (self as any).importScripts = undefined;

  (self as any).Node = Node;
  (self as any).Window = Window;
  (self as any).CSSStyleSheet = CSSStyleSheet;

  initWebWorkerData.$interfaces$.map(defineWorkerInterface);

  patchPrototypes();

  webWorkerCtx.$isInitialized$ = 1;

  logWorker(`Initialized web worker`);
};
