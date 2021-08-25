import { debug, logWorker } from '../utils';
import { PrivateValues, webWorkerCtx } from './worker-constants';
import type { WorkerImageElement } from './worker-node';

export const importScriptUrl = (instanceId: number, scriptUrl: string) => {
  try {
    scriptUrl = new URL(scriptUrl, webWorkerCtx.$location$ + '') + '';
    webWorkerCtx.$currentScript$ = instanceId;

    if (debug && webWorkerCtx.$config$.logScriptExecution) {
      logWorker(`Execute script [data-partytown-id="${instanceId}"] ${scriptUrl}`);
    }

    webWorkerCtx.$importScripts$!(scriptUrl);

    webWorkerCtx.$currentScript$ = -1;
  } catch (e) {
    console.error('Party foul,', scriptUrl, e);
  }
};

export const imageRequest = (image: WorkerImageElement) => {
  if (debug && webWorkerCtx.$config$.logImageRequests) {
    logWorker(`Image request: ${image.src}`);
  }

  image[PrivateValues].c = false;
  const privateValues = image[PrivateValues];
  const xhr = new XMLHttpRequest();

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
