export const debug = (globalThis as any).partytownDebug;

export const isPromise = (v: any): v is Promise<unknown> => v instanceof Promise;

export const toLower = (str: string) => str.toLowerCase();

export const toUpper = (str: string) => str.toUpperCase();

export const logMain = (msg: string) =>
  debug && console.debug.apply(console, log('Main Thread 🌎', '#717171', msg));

export const logWorker = (msg: string) =>
  debug && console.debug.apply(console, log(self.name, '#3498db', msg));

const log = (prefix: string, color: string, msg: string) => [
  `%c${prefix}`,
  `background: ${color}; color: white; padding: 2px 3px; border-radius: 2px; font-size: 0.8em;`,
  msg + stackTrace(),
];

const stackTrace = () => {
  if (debug) {
    const frames = new Error().stack!.split('\n');
    const i = frames.findIndex((f) => f.includes('logWorker') || f.includes('logMain'));
    return '\n' + frames.slice(i + 1).join('\n');
  }
  return '';
};

export const logValue = (v: any) => {
  const type = typeof v;
  if (type === 'boolean' || type === 'number' || type === 'string' || v == null) {
    return JSON.stringify(v);
  }
  if (isPromise(v)) {
    return `Promise`;
  }
  if (v && (v as Node).nodeName) {
    if (v.nodeType === 1) {
      return `<${toLower(v.nodeName)}>`;
    }
    return v.nodeName;
  }
  return '?';
};

export const PT_PROXY_URL = `partytown-proxy`;
