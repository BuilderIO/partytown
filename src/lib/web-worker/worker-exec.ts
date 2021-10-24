import { debug, logWorker, nextTick, SCRIPT_TYPE, SCRIPT_TYPE_EXEC } from '../utils';
import {
  EventHandler,
  InitializeScriptData,
  WebWorkerEnvironment,
  StateProp,
  WorkerMessageType,
} from '../types';
import { environments, InstanceIdKey, webWorkerCtx, WinIdKey } from './worker-constants';
import { getEnv } from './worker-environment';
import { getInstanceStateValue, getStateValue, setStateValue } from './worker-state';
import type { Location } from './worker-location';
import type { Node } from './worker-node';
import type { WorkerProxy } from './worker-proxy-constructor';

export const initNextScriptsInWebWorker = async (initScript: InitializeScriptData) => {
  let winId = initScript.$winId$;
  let instanceId = initScript.$instanceId$;
  let scriptContent = initScript.$content$;
  let scriptSrc = initScript.$url$;
  let errorMsg = '';
  let env = environments[winId];
  let rsp: Response;
  let scriptUrl: URL;

  if (scriptSrc) {
    try {
      scriptUrl = resolveToUrl(env, scriptSrc);
      scriptSrc = scriptUrl + '';
      setStateValue(instanceId, StateProp.url, scriptSrc);

      if (debug && webWorkerCtx.$config$.logScriptExecution) {
        logWorker(`Execute script (${instanceId}) src: ${scriptSrc}`, winId);
      }

      try {
        rsp = await self.fetch(scriptSrc);
      } catch (e) {
        if (scriptUrl.origin !== origin) {
          scriptSrc = 'https://partytown.builder.io/api/proxy?p=' + scriptSrc;
          logWorker(`Proxied script (${instanceId}) src: ${scriptSrc}`, winId);
        } else {
          throw e;
        }
      }

      rsp = await self.fetch(scriptSrc);
      if (rsp.ok) {
        scriptContent = await rsp.text();

        env.$currentScriptId$ = instanceId;
        env.$currentScriptUrl$ = scriptSrc;
        env.$run$(scriptContent);
        runStateLoadHandlers(instanceId, StateProp.loadHandlers);
      } else {
        console.error(rsp.status, 'url:', scriptSrc);
        errorMsg = rsp.statusText;
        runStateLoadHandlers(instanceId, StateProp.errorHandlers);
      }
    } catch (urlError: any) {
      console.error('url:', scriptSrc, urlError);
      errorMsg = String(urlError.stack || urlError) + '';
      runStateLoadHandlers(instanceId, StateProp.errorHandlers);
    }
  } else if (scriptContent) {
    errorMsg = runScriptContent(env, instanceId, scriptContent, winId);
  }

  env.$currentScriptId$ = -1;
  env.$currentScriptUrl$ = '';

  webWorkerCtx.$postMessage$([
    WorkerMessageType.InitializedEnvironmentScript,
    winId,
    instanceId,
    errorMsg,
  ]);
};

export const runScriptContent = (
  env: WebWorkerEnvironment,
  instanceId: number,
  scriptContent: string,
  winId: number
) => {
  let errorMsg = '';
  try {
    if (debug && webWorkerCtx.$config$.logScriptExecution) {
      logWorker(
        `Execute script (${instanceId}): ${scriptContent
          .substr(0, 100)
          .split('\n')
          .map((l) => l.trim())
          .join(' ')
          .trim()
          .substr(0, 60)}...`,
        winId
      );
    }

    env.$currentScriptId$ = instanceId;
    env.$currentScriptUrl$ = '';
    env.$run$(scriptContent);
  } catch (contentError: any) {
    console.error(scriptContent, contentError);
    errorMsg = String(contentError.stack || contentError) + '';
  }

  env.$currentScriptId$ = -1;
  env.$currentScriptUrl$ = '';

  return errorMsg;
};

const runStateLoadHandlers = (instanceId: number, type: StateProp, handlers?: EventHandler[]) => {
  handlers = getStateValue(instanceId, type);
  if (handlers) {
    nextTick(() => handlers!.map((cb) => cb({ type })));
  }
};

export const insertIframe = (iframe: Node) => {
  // and iframe element's instanceId is also
  // the winId of it's contentWindow
  let i = 0;
  const winId = iframe[InstanceIdKey];

  const callback = () => {
    if (environments[winId] && environments[winId].$isInitialized$) {
      let type = getInstanceStateValue<StateProp>(iframe, StateProp.loadErrorStatus)
        ? StateProp.errorHandlers
        : StateProp.loadHandlers;

      let handlers = getInstanceStateValue<EventHandler[]>(iframe, type);
      if (handlers) {
        handlers.map((handler) => handler({ type }));
      }
    } else if (i++ > 2000) {
      let errorHandlers = getInstanceStateValue<EventHandler[]>(iframe, StateProp.errorHandlers);
      if (errorHandlers) {
        errorHandlers.map((handler) => handler({ type: StateProp.errorHandlers }));
      }
      console.error(`Timeout`);
    } else {
      setTimeout(callback, 9);
    }
  };

  callback();
};

const resolveToUrl = (env: WebWorkerEnvironment, url?: string, baseLocation?: Location) => {
  baseLocation = env.$location$;
  while (!baseLocation.host) {
    env = environments[env.$parentWinId$];
    baseLocation = env.$location$;
    if (env.$isTop$) {
      break;
    }
  }
  return new URL(url || '', baseLocation);
};

export const resolveUrl = (env: WebWorkerEnvironment, url?: string) => resolveToUrl(env, url) + '';

export const getUrl = (elm: WorkerProxy) =>
  resolveToUrl(getEnv(elm), getInstanceStateValue(elm, StateProp.url));

export const updateIframeContent = (url: string, html: string) =>
  `<base href="${url}">` +
  html
    .replace(/<script>/g, `<script type="${SCRIPT_TYPE}">`)
    .replace(/<script /g, `<script type="${SCRIPT_TYPE}" `)
    .replace(/text\/javascript/g, SCRIPT_TYPE) +
  getPartytownScript();

export const getPartytownScript = () =>
  `<script src=${JSON.stringify(webWorkerCtx.$libPath$ + 'partytown.js')} async defer></script>`;
