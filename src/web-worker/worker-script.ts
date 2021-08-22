import { webWorkerCtx } from './worker-proxy';
import type { InitializeScriptData } from '../types';
import { logWorker } from '../utils';

export const initMainScriptsInWebWorker = (initializeScripts: InitializeScriptData[]) => {
  initializeScripts.forEach((initializeScript) => {
    if (initializeScript.$url$) {
      importScriptUrl(initializeScript.$instanceId$, initializeScript.$url$);
    } else if (initializeScript.$content$) {
      initializeScriptContent(initializeScript.$instanceId$, initializeScript.$content$);
    }
  });
};

const initializeScriptContent = (instanceId: number, scriptContent: string) => {
  try {
    logWorker(`Run script content [data-partytown-id="${instanceId}"]`);
    webWorkerCtx.$currentScript$ = instanceId;
    const runScript = new Function(scriptContent);
    runScript();
    webWorkerCtx.$currentScript$ = -1;
  } catch (e) {
    console.error('Party foul,', e, '\n' + scriptContent);
  }
};

export const importScriptUrl = (instanceId: number, scriptUrl: string) => {
  try {
    scriptUrl = new URL(scriptUrl, webWorkerCtx.$currentLocationUrl$) + '';
    webWorkerCtx.$currentScript$ = instanceId;

    logWorker(`Run script url [data-partytown-id="${instanceId}"] - ${scriptUrl}`);

    webWorkerCtx.$importScripts$(scriptUrl);

    webWorkerCtx.$currentScript$ = -1;
  } catch (e) {
    console.error('Party foul,', scriptUrl, e);
  }
};
