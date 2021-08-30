import { debug, logWorker, nextTick } from '../utils';
import { InstanceIdKey, PrivateValues, webWorkerCtx } from './worker-constants';
import type { WorkerImageElement, WorkerScriptElement } from './worker-node';

export const importScriptUrl = (instanceId: number, scriptUrl: string) => {
  scriptUrl = new URL(scriptUrl, webWorkerCtx.$location$ + '') + '';
  webWorkerCtx.$currentScript$ = instanceId;

  if (debug && webWorkerCtx.$config$.logScriptExecution) {
    logWorker(`Execute script [data-partytown-id="${instanceId}"] ${scriptUrl}`);
  }

  webWorkerCtx.$importScripts$!(scriptUrl);

  webWorkerCtx.$currentScript$ = -1;
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
      importScriptUrl(instanceId, script.src);
      if (script[PrivateValues].$onload$) {
        nextTick(() => script[PrivateValues].$onload$!.forEach((cb) => cb(ev)));
      }
    } catch (e) {
      if (script[PrivateValues].$onerror$) {
        nextTick(() =>
          script[PrivateValues].$onerror$!.forEach((cb) => cb({ ...ev, type: 'error' }))
        );
      }
    }
  });
};
