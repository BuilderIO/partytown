import { debug, len, SCRIPT_TYPE } from '../utils';
import {
  EventHandler,
  InitializeScriptData,
  NodeName,
  StateProp,
  WebWorkerEnvironment,
  WorkerMessageType,
} from '../types';
import { environments, postMessages, webWorkerCtx } from './worker-constants';
import { getEnv } from './worker-environment';
import { getInstanceStateValue, setInstanceStateValue } from './worker-state';
import { getOrCreateNodeInstance } from './worker-constructors';
import { logWorker } from '../log';
import { setter } from './worker-proxy';
import type { WorkerInstance } from './worker-instance';

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
      console.error(urlError);
      errorMsg = String(urlError.stack || urlError);
      runStateLoadHandlers(instance!, StateProp.errorHandlers);
    }
  } else if (scriptContent) {
    errorMsg = runScriptContent(env, instanceId, scriptContent, winId, errorMsg);
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
  winId: number,
  errorMsg: string
) => {
  try {
    if (debug && webWorkerCtx.$config$.logScriptExecution) {
      logWorker(
        `Execute script (${instanceId}): ${scriptContent
          .substring(0, 100)
          .split('\n')
          .map((l) => l.trim())
          .join(' ')
          .trim()
          .substring(0, 60)}...`,
        winId
      );
    }

    env.$currentScriptId$ = instanceId;
    run(env, scriptContent);
  } catch (contentError: any) {
    console.error(scriptContent, contentError);
    errorMsg = String(contentError.stack || contentError);
  }

  env.$currentScriptId$ = -1;

  return errorMsg;
};

const run = (env: WebWorkerEnvironment, scriptContent: string, scriptUrl?: string) => {
  const doc: any = new Proxy(env.$document$, {
    get: (target: any, propName) => {
      if (propName === 'defaultView') {
        return win;
      } else {
        return target[propName];
      }
    },
  });

  const win: any = new Proxy(env.$window$, {
    get: (target: any, propName) => {
      if (propName === 'document') {
        return doc;
      } else if (propName === 'window' || propName === 'globalThis' || propName === 'self') {
        return win;
      } else if (propName === 'parent' || propName === 'top') {
        return new Proxy(target[propName], {
          get: (targetParent: any, parentPropName) => {
            if (parentPropName === 'postMessage') {
              return (...args: any[]) => {
                if (len(postMessages) > 20) {
                  postMessages.splice(0, 5);
                }
                postMessages.push({
                  $data$: JSON.stringify(args[0]),
                  $origin$: env.$location$.origin,
                });
                targetParent.postMessage(...args);
              };
            } else {
              return targetParent[parentPropName];
            }
          },
        });
      } else {
        return target[propName];
      }
    },
    has: () => true,
  });

  new Function(
    `with(this){${scriptContent
      .replace(/\bthis\b/g, 'thi$(this)')
      .replace(/\/\/# so/g, '//Xso')};function thi$(t){return t===this?window:t}}` +
      (scriptUrl ? '\n//# sourceURL=' + scriptUrl : '')
  ).call(win);
};

const runStateLoadHandlers = (
  instance: WorkerInstance,
  type: StateProp,
  handlers?: EventHandler[]
) => {
  handlers = getInstanceStateValue(instance, type);
  if (handlers) {
    setTimeout(() => handlers!.map((cb) => cb({ type })));
  }
};

export const insertIframe = (winId: number, iframe: WorkerInstance) => {
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

export const getUrl = (elm: WorkerInstance) =>
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
