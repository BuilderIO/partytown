import { debug, logWorker, nextTick, normalizedWinId, SCRIPT_TYPE } from '../utils';
import {
  EventHandler,
  InitializeScriptData,
  NodeName,
  StateProp,
  WebWorkerEnvironment,
  WorkerMessageType,
} from '../types';
import { environments, InstanceIdKey, webWorkerCtx } from './worker-constants';
import { getEnv } from './worker-environment';
import { getOrCreateNodeInstance } from './worker-constructors';
import { getInstanceStateValue, setInstanceStateValue } from './worker-state';
import { setter } from './worker-proxy';
import type { WorkerProxy } from './worker-proxy-constructor';

export const initNextScriptsInWebWorker = async (initScript: InitializeScriptData) => {
  let winId = initScript.$winId$;
  let instanceId = initScript.$instanceId$;
  let instance = getOrCreateNodeInstance(winId, instanceId, NodeName.Script);
  let scriptContent = initScript.$content$;
  let scriptSrc = initScript.$url$;
  let scriptOrgSrc = initScript.$orgUrl$;
  let errorMsg = '';
  let env = environments[winId];
  let rsp: Response;

  if (scriptSrc) {
    try {
      scriptSrc = resolveToUrl(env, scriptSrc) + '';

      setInstanceStateValue(instance!, StateProp.url, scriptSrc);

      if (debug && webWorkerCtx.$config$.logScriptExecution) {
        logWorker(`Execute script (${instanceId}) src: ${scriptOrgSrc}`, winId);
      }

      rsp = await self.fetch(scriptSrc);
      if (rsp.ok) {
        scriptContent = await rsp.text();

        env.$currentScriptId$ = instanceId;
        run(env, scriptContent, scriptOrgSrc || scriptSrc);
        runStateLoadHandlers(instance!, StateProp.loadHandlers);
      } else {
        errorMsg = rsp.statusText;
        runStateLoadHandlers(instance!, StateProp.errorHandlers);
      }
    } catch (urlError: any) {
      errorMsg = String(urlError.stack || urlError) + '';
      runStateLoadHandlers(instance!, StateProp.errorHandlers);
    }
  } else if (scriptContent) {
    errorMsg = runScriptContent(env, instanceId, scriptContent, winId);
  }

  env.$currentScriptId$ = -1;

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
    run(env, scriptContent);
  } catch (contentError: any) {
    console.error(scriptContent, contentError);
    errorMsg = String(contentError.stack || contentError) + '';
  }

  env.$currentScriptId$ = -1;

  return errorMsg;
};

const run = (env: WebWorkerEnvironment, scriptContent: string, scriptUrl?: string) => {
  scriptContent = scriptContent.replace(/\/\/# source/g, '//Xsource');
  new Function(
    `with(this){${scriptContent}}` + (scriptUrl ? '\n//# sourceURL=' + scriptUrl : '')
  ).apply(env.$window$);
};

const runStateLoadHandlers = (
  instance: WorkerProxy,
  type: StateProp,
  handlers?: EventHandler[]
) => {
  handlers = getInstanceStateValue(instance, type);
  if (handlers) {
    nextTick(() => handlers!.map((cb) => cb({ type })));
  }
};

export const insertIframe = (winId: number, iframe: WorkerProxy) => {
  // an iframe element's instanceId is also
  // the winId of its contentWindow
  let i = 0;
  let type: string;
  let handlers: EventHandler[];

  if (debug) {
    setter(iframe, ['dataset', 'ptwindow'], winId);
  }

  const callback = () => {
    if (environments[winId] && environments[winId].$isInitialized$) {
      type = getInstanceStateValue<StateProp>(iframe, StateProp.loadErrorStatus)
        ? StateProp.errorHandlers
        : StateProp.loadHandlers;

      handlers = getInstanceStateValue<EventHandler[]>(iframe, type);
      if (handlers) {
        handlers.map((handler) => handler({ type }));
      }
    } else if (i++ > 2000) {
      handlers = getInstanceStateValue<EventHandler[]>(iframe, StateProp.errorHandlers);
      if (handlers) {
        handlers.map((handler) => handler({ type: StateProp.errorHandlers }));
      }
    } else {
      setTimeout(callback, 9);
    }
  };

  callback();
};

const resolveToUrl = (
  env: WebWorkerEnvironment,
  url: string,
  noUserHook?: boolean,
  baseLocation?: Location
) => {
  baseLocation = env.$location$;
  while (!baseLocation.host) {
    env = environments[env.$parentWinId$];
    baseLocation = env.$location$;
    if (env.$winId$ === env.$parentWinId$) {
      break;
    }
  }

  const resolvedUrl = new URL(url || '', baseLocation as any);
  if (!noUserHook && webWorkerCtx.$config$.resolveUrl) {
    const configResolvedUrl = webWorkerCtx.$config$.resolveUrl!(resolvedUrl, baseLocation);
    if (configResolvedUrl) {
      return configResolvedUrl;
    }
  }
  return resolvedUrl;
};

export const resolveUrl = (env: WebWorkerEnvironment, url: string, noUserHook?: boolean) =>
  resolveToUrl(env, url, noUserHook) + '';

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
  `<script src=${JSON.stringify(webWorkerCtx.$libPath$ + 'partytown.js')} async></script>`;
