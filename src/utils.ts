import { InstanceIdKey, webWorkerCtx } from './web-worker/worker-constants';
import { PlatformApiId } from './types';

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

export const logWorkerGetter = (
  target: any,
  memberPath: string[],
  rtn: any,
  isCached?: boolean
) => {
  if (debug && webWorkerCtx.$config$.logGetters) {
    logWorker(
      `Get ${logTargetProp(target, memberPath)}, returned: ${logValue(memberPath, rtn)}${
        isCached ? ' (cached)' : ''
      }`
    );
  }
};

export const logWorkerSetter = (target: any, memberPath: string[], value: any) => {
  if (debug && webWorkerCtx.$config$.logSetters) {
    logWorker(`Set ${logTargetProp(target, memberPath)}, value: ${logValue(memberPath, value)}`);
  }
};

export const logWorkerCall = (target: any, memberPath: string[], args: any[], rtn: any) => {
  if (debug && webWorkerCtx.$config$.logCalls) {
    logWorker(
      `Call ${logTargetProp(target, memberPath)}(${args
        .map((v) => logValue(memberPath, v))
        .join(', ')}), returned: ${logValue(memberPath, rtn)}`
    );
  }
};

const logTargetProp = (target: any, memberPath: string[]) => {
  let n = '';
  if (target) {
    if (target[InstanceIdKey] === PlatformApiId.document) {
      n = 'document.';
    } else if (target[InstanceIdKey] === PlatformApiId.documentElement) {
      n = 'document.documentElement.';
    } else if (target[InstanceIdKey] === PlatformApiId.head) {
      n = 'document.head.';
    } else if (target[InstanceIdKey] === PlatformApiId.body) {
      n = 'document.body.';
    } else if (target[InstanceIdKey] === PlatformApiId.history) {
      n = 'history.';
    } else if (target[InstanceIdKey] === PlatformApiId.localStorage) {
      n = 'localStorage.';
    } else if (target[InstanceIdKey] === PlatformApiId.sessionStorage) {
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
const logValue = (memberPath: string[], v: any): string => {
  const type = typeof v;
  if (type === 'boolean' || type === 'number' || v == null) {
    return JSON.stringify(v);
  }
  if (type === 'string') {
    if (memberPath.includes('cookie')) {
      return JSON.stringify(v.substr(0, 10) + '...');
    }
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
      return `[${Array.from(v)
        .map((i) => logValue(memberPath, i))
        .join(', ')}]`;
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

export const noop = () => {};

export const isValidMemberName = (memberName: string) => {
  if (memberName.startsWith('webkit')) {
    return false;
  } else if (memberName.startsWith('on') && toLower(memberName) === memberName) {
    return false;
  } else {
    return true;
  }
};

export const PT_PROXY_URL = `proxytown`;
export const PT_INITIALIZED_EVENT = `ptinit`;
export const PT_SCRIPT_TYPE = `text/partytown`;
