import { debug, logWorker, nextTick } from '../utils';
import { InitializeScriptData, StateProp, WorkerMessageType } from '../types';
import { getInstanceStateValue, setStateValue } from './worker-instance';
import { InstanceIdKey, webWorkerCtx, WinIdKey } from './worker-constants';
import type { WorkerScriptElement } from './worker-script';

export const initNextScriptsInWebWorker = (initScript: InitializeScriptData) => {
  const winId = initScript.$winId$;
  const instanceId = initScript.$instanceId$;
  const content = initScript.$content$;
  const url = initScript.$url$;
  let errorMsg = '';

  try {
    if (url) {
      importScriptUrl(winId, instanceId, url);
    } else if (content) {
      if (debug && webWorkerCtx.$config$.logScriptExecution) {
        logWorker(`Execute script[data-pt-id="${winId}.${instanceId}"]`);
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

export const scriptElementSetSrc = (script: WorkerScriptElement) => {
  nextTick(() => {
    let $winId$ = script[WinIdKey];
    let $instanceId$ = script[InstanceIdKey];
    let $stateProp$ = StateProp.loadHandlers;

    try {
      importScriptUrl($winId$, $instanceId$, script.src);
    } catch (e) {
      $stateProp$ = StateProp.errorHandlers;
      console.error(e);
    }

    webWorkerCtx.$postMessage$([
      WorkerMessageType.RunStateProp,
      { $winId$, $instanceId$, $stateProp$ },
    ]);

    setCurrentScript(-1, '');
  }, 50);
};

const importScriptUrl = (winId: number, instanceId: number, scriptUrl: string) => {
  scriptUrl = resolveUrl(scriptUrl) + '';
  setStateValue(winId, instanceId, StateProp.url, scriptUrl);

  if (debug && winId !== webWorkerCtx.$winId$) {
    console.error(
      `Incorrect window context, winId: ${winId}, instanceId: ${instanceId}, scriptUrl: ${scriptUrl}`
    );
  }

  setCurrentScript(instanceId, scriptUrl);

  if (debug && webWorkerCtx.$config$.logScriptExecution) {
    logWorker(`Execute script[data-pt-id="${winId}.${instanceId}"], src: ${scriptUrl}`);
  }
  webWorkerCtx.$importScripts$(scriptUrl);
};

const setCurrentScript = (instanceId: number, src: string) => {
  webWorkerCtx.$currentScriptId$ = instanceId;
  webWorkerCtx.$currentScriptUrl$ = src;
};

export const resolveUrl = (url?: string) => new URL(url || '', webWorkerCtx.$location$ + '');

export const sendBeacon = (url: string, data?: any) => {
  if (debug && webWorkerCtx.$config$.logSendBeaconRequests) {
    try {
      logWorker(`sendBeacon: ${resolveUrl(url)}${data ? ', data: ' + JSON.stringify(data) : ''}`);
    } catch (e) {
      console.error(e);
    }
  }
  try {
    fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      keepalive: true,
    });
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};
