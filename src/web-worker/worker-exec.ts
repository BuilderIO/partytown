import { debug, logWorker, nextTick } from '../utils';
import type { InitializeScriptData } from '../types';
import { InstanceIdKey, PrivateValues, srcUrls, webWorkerCtx } from './worker-constants';
import type { WorkerImageElement, WorkerScriptElement } from './worker-node';

export const initNextScriptsInWebWorker = (initScript?: InitializeScriptData) => {
  initScript = webWorkerCtx.$initializeScripts$.shift();
  if (initScript) {
    const instanceId = initScript.$instanceId$;
    const content = initScript.$content$;
    const url = initScript.$url$;
    try {
      if (url) {
        importScriptUrl(instanceId, url);
      } else if (content) {
        if (debug && webWorkerCtx.$config$.logScriptExecution) {
          logWorker(`Execute script content [data-partytown-id="${instanceId}"]`);
        }
        setCurrentScript(instanceId, '');
        const runScript = new Function(content);
        runScript();
      }
    } catch (e) {
      console.error('Party foul,', e, '\n' + (url || content));
    }
    setCurrentScript(-1, '');
  }
};

export const imageRequest = (image: WorkerImageElement) => {
  if (debug && webWorkerCtx.$config$.logImageRequests) {
    logWorker(`Image request: ${image.src}`);
  }

  const xhr = new XMLHttpRequest();
  const privateValues = image[PrivateValues];

  privateValues.c = false;

  xhr.onreadystatechange = function (ev, xhrStatus?: number) {
    if (xhr.readyState === 4 /* XMLHttpRequest.DONE */) {
      xhrStatus = xhr.status;

      privateValues.c = true;

      if (xhrStatus === 0 || (xhrStatus >= 200 && xhrStatus < 400)) {
        if (privateValues.$onload$) {
          privateValues.$onload$.forEach((onload) => onload({ ...ev, type: 'load' }));
        }
      } else if (privateValues.$onerror$) {
        privateValues.$onerror$.forEach((onerror) => onerror({ ...ev, type: 'error' }));
      }
    }
  };

  xhr.open('GET', image.src, true);
  xhr.send();
};

export const scriptElementSetSrc = (script: WorkerScriptElement) => {
  nextTick(() => {
    const instanceId = script[InstanceIdKey];
    const ev = { type: 'load', target: script, currentTarget: script };
    try {
      if (importScriptUrl(instanceId, script.src)) {
        if (script[PrivateValues].$onload$) {
          nextTick(() => script[PrivateValues].$onload$!.forEach((cb) => cb(ev)));
        }
        setCurrentScript(-1, '');
      }
    } catch (e) {
      console.error(e);
      if (script[PrivateValues].$onerror$) {
        nextTick(() =>
          script[PrivateValues].$onerror$!.forEach((cb) => cb({ ...ev, type: 'error' }))
        );
      }
    }
  });
};

const importScriptUrl = (instanceId: number, scriptUrl: string) => {
  scriptUrl = new URL(scriptUrl, webWorkerCtx.$location$ + '') + '';

  srcUrls.set(instanceId, scriptUrl);
  if (setCurrentScript(instanceId, scriptUrl)) {
    if (debug && webWorkerCtx.$config$.logScriptExecution) {
      logWorker(`Execute script [data-partytown-id="${instanceId}"] ${scriptUrl}`);
    }

    webWorkerCtx.$importScripts$(scriptUrl);
    return true;
  }
  return false;
};

const setCurrentScript = (instanceId: number, src: string) => {
  webWorkerCtx.$currentScriptId$ = instanceId;
  if (src !== webWorkerCtx.$currentScriptUrl$) {
    webWorkerCtx.$currentScriptUrl$ = src;
    return true;
  }
  return false;
};
