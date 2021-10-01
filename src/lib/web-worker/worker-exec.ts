import { debug, logWorker, nextTick, SCRIPT_TYPE } from '../utils';
import { EventHandler, InitializeScriptData, StateProp, WorkerMessageType } from '../types';
import { getInstanceStateValue, getStateValue, setStateValue } from './worker-state';
import type { HTMLElement } from './worker-element';
import type { Node } from './worker-node';
import { webWorkerCtx } from './worker-constants';

export const initNextScriptsInWebWorker = (initScript: InitializeScriptData) => {
  let winId = initScript.$winId$;
  let instanceId = initScript.$instanceId$;
  let content = initScript.$content$;
  let url = initScript.$url$;
  let errorMsg = '';
  let handlersType = StateProp.loadHandlers;

  if (url) {
    try {
      url = resolveUrl(url) + '';
      setStateValue(instanceId, StateProp.url, url);
      setCurrentScript(instanceId, url);

      if (debug && winId !== webWorkerCtx.$winId$) {
        console.error(
          `Incorrect window context, winId: ${winId}, instanceId: ${instanceId}, url: ${url}`
        );
      }

      if (debug && webWorkerCtx.$config$.logScriptExecution) {
        logWorker(`Execute script[data-pt-id="${winId}.${instanceId}"], src: ${url}`);
      }

      webWorkerCtx.$importScripts$(url);
    } catch (urlError: any) {
      console.error(name, urlError, '\n' + url);
      handlersType = StateProp.errorHandlers;
      errorMsg = String(urlError.stack || urlError) + '';
    }

    if (!runStateHandlers(instanceId, handlersType)) {
      webWorkerCtx.$postMessage$([WorkerMessageType.RunStateHandlers, instanceId, handlersType]);
    }
  } else if (content) {
    try {
      if (debug && webWorkerCtx.$config$.logScriptExecution) {
        logWorker(`Execute script[data-pt-id="${winId}.${instanceId}"]`);
      }
      setCurrentScript(instanceId, '');
      new Function(content)();
    } catch (contentError: any) {
      console.error(name, contentError, '\n' + content);
      handlersType = StateProp.errorHandlers;
      errorMsg = String(contentError.stack || contentError) + '';
    }
  }

  setCurrentScript(-1, '');

  webWorkerCtx.$postMessage$([WorkerMessageType.InitializedWorkerScript, instanceId, errorMsg]);
};

export const runStateHandlers = (
  instanceId: number,
  handlerType: StateProp,
  handlers?: EventHandler[]
) => {
  handlers = getStateValue(instanceId, handlerType);
  if (handlers) {
    nextTick(() =>
      handlers!.map((cb) =>
        cb({ type: handlerType === StateProp.errorHandlers ? 'error' : 'load' })
      )
    );
  }
  return !!handlers;
};

const setCurrentScript = (instanceId: number, src: string) => {
  webWorkerCtx.$currentScriptId$ = instanceId;
  webWorkerCtx.$currentScriptUrl$ = src;
};

export const insertIframe = (iframe: Node) => {
  let handlersType = getInstanceStateValue<StateProp>(iframe, StateProp.isSuccessfulLoad)
    ? StateProp.loadHandlers
    : StateProp.errorHandlers;
  let handlers = getInstanceStateValue<EventHandler[]>(iframe, handlersType);
  if (handlers) {
    handlers.forEach((handler) => handler({ type: StateProp.loadHandlers }));
  }
};

export const resolveUrl = (url?: string) => new URL(url || '', webWorkerCtx.$location$ + '');

export const getUrl = (elm: HTMLElement) => resolveUrl(getInstanceStateValue(elm, StateProp.href));

export const updateIframeContent = (url: string, html: string) =>
  `<base href="${url}">` +
  html
    .replace(/<script>/g, `<script type="${SCRIPT_TYPE}">`)
    .replace(/<script /g, `<script type="${SCRIPT_TYPE}" `)
    .replace(/text\/javascript/g, SCRIPT_TYPE) +
  getPartytownScript();

export const getPartytownScript = () =>
  `<script src=${JSON.stringify(webWorkerCtx.$libPath$ + 'partytown.js')} async defer></script>`;

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
