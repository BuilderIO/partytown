import { debug, logWorker, nextTick } from '../utils';
import { InitializeScriptData, WorkerMessageType } from '../types';
import { InstanceIdKey, PrivateValues, srcUrls, webWorkerCtx, WinIdKey } from './worker-constants';
import type { WorkerImageElement, WorkerScriptElement } from './worker-node';

export const initNextScriptsInWebWorker = (initScript: InitializeScriptData) => {
  let instanceId = initScript.$instanceId$;
  let content = initScript.$content$;
  let url = initScript.$url$;
  let errorMsg = '';

  try {
    if (url) {
      importScriptUrl(initScript.$winId$, instanceId, url);
    } else if (content) {
      if (debug && webWorkerCtx.$config$.logScriptExecution) {
        logWorker(`Execute script content [data-pt-id="${instanceId}"]`);
      }
      setCurrentScript(instanceId, '');
      const runScript = new Function(content);
      runScript();
    }
  } catch (e) {
    console.error('Party foul,', e, '\n' + (url || content));
    errorMsg = e + '';
  }
  setCurrentScript(-1, '');

  webWorkerCtx.$postMessage$([WorkerMessageType.InitializedWorkerScript, instanceId, errorMsg]);
};

export const imageRequest = (elm: WorkerImageElement) => {
  if (debug && webWorkerCtx.$config$.logImageRequests) {
    logWorker(`Image Request: ${elm.src}`);
  }

  const privateValues = elm[PrivateValues];
  privateValues.c = false;

  fetch(elm.src, { mode: 'no-cors' }).then((rsp) => {
    privateValues.c = true;
    if (rsp.ok) {
      if (privateValues.$onload$) {
        privateValues.$onload$.forEach((onload) => onload({ type: 'load' }));
      }
    } else if (privateValues.$onerror$) {
      privateValues.$onerror$.forEach((onerror) => onerror({ type: 'error' }));
    }
  });
};

export const scriptElementSetSrc = (script: WorkerScriptElement) => {
  nextTick(() => {
    const scripWinId = script[WinIdKey];
    const scriptInstanceId = script[InstanceIdKey];
    const ev = { type: 'load', target: script, currentTarget: script };
    try {
      if (importScriptUrl(scripWinId, scriptInstanceId, script.src)) {
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

const importScriptUrl = (winId: number, instanceId: number, scriptUrl: string) => {
  scriptUrl = new URL(scriptUrl, webWorkerCtx.$location$ + '') + '';
  srcUrls.set(instanceId, scriptUrl);

  if (debug && winId !== webWorkerCtx.$winId$) {
    logWorker(
      `Incorrect window context, winId: ${winId}, instanceId: ${instanceId}, scriptUrl: ${scriptUrl}`
    );
  }

  if (setCurrentScript(instanceId, scriptUrl)) {
    if (debug && webWorkerCtx.$config$.logScriptExecution) {
      logWorker(`Execute script [data-pt-id="${instanceId}"] ${scriptUrl}`);
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
