import { InstanceId } from './types';
import { InstanceIdKey, webWorkerCtx } from './web-worker/worker-constants';

export const debug = (globalThis as any).partytownDebug;

export const isPromise = (v: any): v is Promise<unknown> => v instanceof Promise;

export const toLower = (str: string) => str.toLowerCase();

export const toUpper = (str: string) => str.toUpperCase();

export const logMain = (msg: string) =>
  debug &&
  console.debug.apply(console, [
    `%cMain Thread 🌎`,
    `background: #717171; color: white; padding: 2px 3px; border-radius: 2px; font-size: 0.8em;`,
    msg,
  ]);

export const logWorker = (msg: string) => {
  if (debug) {
    const config = webWorkerCtx.$config$;

    if (config.logStackTraces) {
      const frames = new Error().stack!.split('\n');
      const i = frames.findIndex((f) => f.includes('logWorker'));
      msg += '\n' + frames.slice(i + 1).join('\n');
    }

    console.debug.apply(console, [
      `%c${self.name}`,
      `background: #3498db; color: white; padding: 2px 3px; border-radius: 2px; font-size: 0.8em;`,
      msg,
    ]);
  }
};

export const logTargetProp = (target: any, memberPath: string[]) => {
  let n = '';
  if (target) {
    if (target[InstanceIdKey] === InstanceId.document) {
      n = 'document.';
    } else if (target[InstanceIdKey] === InstanceId.documentElement) {
      n = 'document.documentElement.';
    } else if (target[InstanceIdKey] === InstanceId.head) {
      n = 'document.head.';
    } else if (target[InstanceIdKey] === InstanceId.body) {
      n = 'document.body.';
    } else if (target[InstanceIdKey] === InstanceId.history) {
      n = 'history.';
    } else if (target[InstanceIdKey] === InstanceId.localStorage) {
      n = 'localStorage.';
    } else if (target[InstanceIdKey] === InstanceId.sessionStorage) {
      n = 'sessionStorage.';
    } else if (target.nodeType === 1) {
      n = toLower(target.nodeName) + '.';
    } else if (target.nodeType === 3) {
      n = 'node.';
    }
  }
  return (n += memberPath.join('.'));
};

/**
 * Helper just to have pretty console logs while debugging
 */
export const logValue = (v: any): string => {
  const type = typeof v;
  if (type === 'boolean' || type === 'number' || type === 'string' || v == null) {
    return JSON.stringify(v);
  }
  if (isPromise(v)) {
    return `Promise`;
  }
  if (Array.isArray(v)) {
    return `[${v.map(logValue).join(', ')}]`;
  }
  if (type === 'object') {
    if ((v as Node).nodeName) {
      if (v.nodeType === 1) {
        return `<${toLower(v.nodeName)}>`;
      }
      return v.nodeName;
    }
    if (v[Symbol.iterator]) {
      return `[${Array.from(v).map(logValue).join(', ')}]`;
    }
    if ('value' in v) {
      return JSON.stringify(v.value);
    }
    return JSON.stringify(v);
  }
  if (type === 'function') {
    return `ƒ() ${v.name || ''}`.trim();
  }

  return `¯\\_(ツ)_/¯ ${String(v)}`.trim();
};

export const len = (obj: { length: number }) => obj.length;

export const getConstructorName = (obj: { constructor?: { name?: string } } | undefined | null) =>
  (obj && obj.constructor && obj.constructor.name) || '';

export const PT_PROXY_URL = `proxytown`;
export const PT_INITIALIZED_EVENT = `ptinit`;
export const PT_SCRIPT_INIT_TYPE = `text/partytown-initialized`;
