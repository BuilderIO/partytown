import { debug, logWorker } from '../utils';
import { EventHandler, InitializeScriptData, StateProp, WorkerMessageType } from '../types';
import { getInstanceStateValue, runStateHandlers, setStateValue } from './worker-instance';
import { webWorkerCtx } from './worker-constants';
import type { WorkerNode } from './worker-node';

export const initNextScriptsInWebWorker = (initScript: InitializeScriptData) => {
  let $winId$ = initScript.$winId$;
  let $instanceId$ = initScript.$instanceId$;
  let content = initScript.$content$;
  let url = initScript.$url$;
  let errorMsg = '';
  let handlersType = StateProp.loadHandlers;

  if (url) {
    try {
      url = resolveUrl(url) + '';
      setStateValue($winId$, $instanceId$, StateProp.url, url);
      setCurrentScript($instanceId$, url);

      if (debug && $winId$ !== webWorkerCtx.$winId$) {
        console.error(
          `Incorrect window context, winId: ${$winId$}, instanceId: ${$instanceId$}, url: ${url}`
        );
      }

      if (debug && webWorkerCtx.$config$.logScriptExecution) {
        logWorker(`Execute script[data-pt-id="${$winId$}.${$instanceId$}"], src: ${url}`);
      }

      webWorkerCtx.$importScripts$(url);
    } catch (urlError) {
      console.error(name, urlError, '\n' + url);
      handlersType = StateProp.errorHandlers;
      errorMsg = urlError + '';
    }

    if (!runStateHandlers($winId$, $instanceId$, handlersType)) {
      webWorkerCtx.$postMessage$([
        WorkerMessageType.RunStateHandlers,
        {
          $winId$,
          $instanceId$: $instanceId$,
          $stateProp$: handlersType,
        },
      ]);
    }
  } else if (content) {
    try {
      if (debug && webWorkerCtx.$config$.logScriptExecution) {
        logWorker(`Execute script[data-pt-id="${$winId$}.${$instanceId$}"]`);
      }
      setCurrentScript($instanceId$, '');
      const runScript = new Function(content);
      runScript();
    } catch (contentError) {
      console.error(name, contentError, '\n' + content);
      handlersType = StateProp.errorHandlers;
      errorMsg = contentError + '';
    }
  }

  setCurrentScript(-1, '');

  webWorkerCtx.$postMessage$([WorkerMessageType.InitializedWorkerScript, $instanceId$, errorMsg]);
};

const setCurrentScript = (instanceId: number, src: string) => {
  webWorkerCtx.$currentScriptId$ = instanceId;
  webWorkerCtx.$currentScriptUrl$ = src;
};

export const insertIframe = (iframe: WorkerNode) => {
  let handlers: EventHandler[];

  if (getInstanceStateValue(iframe, StateProp.isSuccessfulLoad)) {
    handlers = getInstanceStateValue(iframe, StateProp.loadHandlers);
    if (handlers) {
      handlers.forEach((onLoad) => onLoad({ type: 'load' }));
    }
  } else {
    handlers = getInstanceStateValue(iframe, StateProp.loadHandlers);
    if (handlers) {
      handlers.forEach((onError) => onError({ type: 'error' }));
    }
  }
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
