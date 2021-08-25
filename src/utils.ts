import { webWorkerCtx } from './web-worker/worker-constants';

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

export const logValue = (v: any) => {
  const type = typeof v;
  if (type === 'boolean' || type === 'number' || type === 'string' || v == null) {
    return JSON.stringify(v);
  }
  if (isPromise(v)) {
    return `Promise`;
  }
  if (type === 'object') {
    if ((v as Node).nodeName) {
      if (v.nodeType === 1) {
        return `<${toLower(v.nodeName)}>`;
      }
      return v.nodeName;
    }
    if ('value' in v) {
      return JSON.stringify(v.value);
    }
    return JSON.stringify(v);
  }

  return '¯\\_(ツ)_/¯';
};

export const PT_PROXY_URL = `partytown-proxy`;
export const PT_INITIALIZED_EVENT = `ptinit`;
export const PT_SCRIPT_INIT_TYPE = `text/partytown-initialized`;
