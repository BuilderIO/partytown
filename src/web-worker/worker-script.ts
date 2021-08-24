import { logWorker } from '../utils';
import { webWorkerCtx } from './worker-constants';

export const initNextScriptsInWebWorker = () => {
  const script = webWorkerCtx.$initializeScripts$.shift();
  if (script) {
    if (script.$url$) {
      importScriptUrl(script.$instanceId$, script.$url$);
    } else if (script.$content$) {
      initializeScriptContent(script.$instanceId$, script.$content$);
    }
  }
  return script;
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
    scriptUrl = new URL(scriptUrl, webWorkerCtx.$url$) + '';
    webWorkerCtx.$currentScript$ = instanceId;

    logWorker(`Run script url [data-partytown-id="${instanceId}"] ${scriptUrl}`);

    webWorkerCtx.$importScripts$!(scriptUrl);

    webWorkerCtx.$currentScript$ = -1;
  } catch (e) {
    console.error('Party foul,', scriptUrl, e);
  }
};
