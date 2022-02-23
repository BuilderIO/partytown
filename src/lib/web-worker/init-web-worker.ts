import {
  commaSplit,
  webWorkerCtx,
  webWorkerlocalStorage,
  webWorkerSessionStorage,
} from './worker-constants';
import type { InitWebWorkerData } from '../types';
import { logWorker } from '../log';
import type { PartytownConfig } from '@builder.io/partytown/integration';

export const initWebWorker = (initWebWorkerData: InitWebWorkerData) => {
  const config: PartytownConfig = (webWorkerCtx.$config$ = JSON.parse(initWebWorkerData.$config$));
  webWorkerCtx.$importScripts$ = importScripts.bind(self);
  webWorkerCtx.$interfaces$ = initWebWorkerData.$interfaces$;
  webWorkerCtx.$libPath$ = initWebWorkerData.$libPath$;
  webWorkerCtx.$postMessage$ = (postMessage as any).bind(self);
  webWorkerCtx.$sharedDataBuffer$ = initWebWorkerData.$sharedDataBuffer$;

  webWorkerlocalStorage.set(origin, initWebWorkerData.$localStorage$);
  webWorkerSessionStorage.set(origin, initWebWorkerData.$sessionStorage$);

  (self as any).importScripts = undefined;
  delete (self as any).postMessage;
  delete (self as any).WorkerGlobalScope;

  (commaSplit('resolveUrl,get,set,apply') as any).map((configName: keyof PartytownConfig) => {
    if (config[configName]) {
      config[configName] = new Function('return ' + config[configName])();
    }
  });

  webWorkerCtx.$isInitialized$ = 1;

  logWorker(`Initialized web worker`);
};
