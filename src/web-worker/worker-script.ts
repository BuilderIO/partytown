import { debug, logWorker } from '../utils';
import { importScriptUrl } from './worker-requests';
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
    if (debug && webWorkerCtx.$config$.logScriptExecution) {
      logWorker(`Execute script content [data-partytown-id="${instanceId}"]`);
    }
    webWorkerCtx.$currentScript$ = instanceId;
    const runScript = new Function(scriptContent);
    runScript();
    webWorkerCtx.$currentScript$ = -1;
  } catch (e) {
    console.error('Party foul,', e, '\n' + scriptContent);
  }
};
