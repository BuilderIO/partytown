import { CSSStyleSheet } from './worker-style';
import { defineWorkerInterface, patchPrototypes } from './worker-define-constructors';
import { logWorker } from '../log';
import type { InitWebWorkerData } from '../types';
import { Node } from './worker-node';
import type { PartytownConfig } from '@builder.io/partytown/integration';
import { Performance } from './worker-performance';
import { webWorkerCtx, webWorkerlocalStorage, webWorkerSessionStorage } from './worker-constants';
import { Window } from './worker-window';

export const initWebWorker = (initWebWorkerData: InitWebWorkerData) => {
  const config: PartytownConfig = (webWorkerCtx.$config$ = JSON.parse(initWebWorkerData.$config$));
  webWorkerCtx.$importScripts$ = importScripts.bind(self);
  webWorkerCtx.$libPath$ = initWebWorkerData.$libPath$;
  webWorkerCtx.$postMessage$ = (postMessage as any).bind(self);
  webWorkerCtx.$sharedDataBuffer$ = initWebWorkerData.$sharedDataBuffer$;

  webWorkerlocalStorage.set(origin, initWebWorkerData.$localStorage$);
  webWorkerSessionStorage.set(origin, initWebWorkerData.$sessionStorage$);

  delete (self as any).postMessage;
  delete (self as any).importScripts;

  (self as any).Node = Node;
  (self as any).Window = Window;
  (self as any).CSSStyleSheet = CSSStyleSheet;
  (self as any).Performance = Performance;

  initWebWorkerData.$interfaces$.map(defineWorkerInterface);

  patchPrototypes();

  const fnConfigs: (keyof PartytownConfig)[] = ['resolveUrl', 'get', 'set', 'apply'];
  fnConfigs.map((configName: keyof PartytownConfig) => {
    if (config[configName]) {
      config[configName] = new Function('return ' + config[configName])();
    }
  });

  webWorkerCtx.$isInitialized$ = 1;

  logWorker(`Initialized web worker`);
};
