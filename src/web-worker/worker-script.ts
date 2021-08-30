import { debug, logWorker } from '../utils';
import { importScriptUrl } from './worker-requests';
import type { InitializeScriptData } from '../types';
import { webWorkerCtx } from './worker-constants';

export const initNextScriptsInWebWorker = (script?: InitializeScriptData) => {
  script = webWorkerCtx.$initializeScripts$.shift();
  if (script) {
    const instanceId = script.$instanceId$;
    const content = script.$content$;
    const url = script.$url$;
    try {
      if (url) {
        importScriptUrl(instanceId, url);
      } else if (content) {
        if (debug && webWorkerCtx.$config$.logScriptExecution) {
          logWorker(`Execute script content [data-partytown-id="${instanceId}"]`);
        }
        webWorkerCtx.$currentScript$ = instanceId;
        const runScript = new Function(content);
        runScript();
      }
      webWorkerCtx.$currentScript$ = -1;
    } catch (e) {
      console.error('Party foul,', e, '\n' + (url || content));
    }
  }
};
