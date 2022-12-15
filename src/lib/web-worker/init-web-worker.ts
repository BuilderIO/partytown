import {
  commaSplit,
  webWorkerCtx,
  webWorkerlocalStorage,
  webWorkerSessionStorage,
} from './worker-constants';
import type { InitWebWorkerData } from '../types';
import type { PartytownConfig } from '@builder.io/partytown/integration';

export const initWebWorker = (initWebWorkerData: InitWebWorkerData) => {
  const config: PartytownConfig = (webWorkerCtx.$config$ = JSON.parse(initWebWorkerData.$config$));
  const locOrigin = initWebWorkerData.$origin$;
  webWorkerCtx.$importScripts$ = importScripts.bind(self);
  webWorkerCtx.$interfaces$ = initWebWorkerData.$interfaces$;
  webWorkerCtx.$libPath$ = initWebWorkerData.$libPath$;
  webWorkerCtx.$origin$ = locOrigin;
  webWorkerCtx.$postMessage$ = (postMessage as any).bind(self);
  webWorkerCtx.$sharedDataBuffer$ = initWebWorkerData.$sharedDataBuffer$;

  webWorkerlocalStorage.set(locOrigin, initWebWorkerData.$localStorage$);
  webWorkerSessionStorage.set(locOrigin, initWebWorkerData.$sessionStorage$);

  (self as any).importScripts = undefined;
  delete (self as any).postMessage;
  delete (self as any).WorkerGlobalScope;

  (commaSplit('resolveUrl,get,set,apply,returnValue') as any).map(
    (configName: keyof PartytownConfig) => {
      if (config[configName]) {
        config[configName] = new Function('return ' + config[configName])();
      }
    }
  );
};
