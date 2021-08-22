export const debug = (globalThis as any).partytownDebug;

export const isPromise = (value: any): value is Promise<unknown> => value instanceof Promise;

export const toLower = (str: string) => str.toLowerCase();

export const toUpper = (str: string) => str.toUpperCase();

export const logMain = (msg: string) =>
  debug && console.debug.apply(console, log('Main Thread 🌎', '#717171', msg));

export const logWorker = (msg: string) =>
  debug && console.debug.apply(console, log(self.name, '#3498db', msg));

const log = (prefix: string, color: string, msg: string) => [
  `%c${prefix}`,
  `background: ${color}; color: white; padding: 2px 3px; border-radius: 2px; font-size: 0.8em;`,
  msg + '\n' + stackTrace(),
];

const stackTrace = () => {
  const frames = new Error().stack!.split('\n');
  const i = frames.findIndex((f) => f.includes('logWorker'));
  return frames.slice(i + 1).join('\n');
};

export const PT_PROXY_URL = `partytown-proxy`;
