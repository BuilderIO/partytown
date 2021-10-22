import { ApplyPath, InterfaceType, NodeName, PlatformInstanceId } from './types';
import {
  InstanceIdKey,
  InterfaceTypeKey,
  NodeNameKey,
  webWorkerCtx,
  WinIdKey,
} from './web-worker/worker-constants';

export const debug = (globalThis as any).partytownDebug;

export const isPromise = (v: any): v is Promise<unknown> => typeof v === 'object' && v && v.then;

export const toLower = (str: string) => str.toLowerCase();

export const toUpper = (str: string) => str.toUpperCase();

export const logMain = (msg: string) => {
  if (debug) {
    console.debug.apply(console, [
      `%cMain 🌎`,
      `background: #717171; color: white; padding: 2px 3px; border-radius: 2px; font-size: 0.8em;`,
      msg,
    ]);
  }
};

export const logWorker = (msg: string, winId = -1) => {
  if (debug) {
    try {
      const config = webWorkerCtx.$config$;

      if (config.logStackTraces) {
        const frames = new Error().stack!.split('\n');
        const i = frames.findIndex((f) => f.includes('logWorker'));
        msg += '\n' + frames.slice(i + 1).join('\n');
      }

      let prefix: string;
      let color: string;
      if (winId > -1) {
        prefix = `Worker (${normalizedWinId(winId)}) 🎉`;
        color = winColor(winId);
      } else {
        prefix = self.name;
        color = `#9844bf`;
      }

      if (webWorkerCtx.lastLog !== msg) {
        webWorkerCtx.lastLog = msg;
        console.debug.apply(console, [
          `%c${prefix}`,
          `background: ${color}; color: white; padding: 2px 3px; border-radius: 2px; font-size: 0.8em;`,
          msg,
        ]);
      }
    } catch (e) {}
  }
};

const winIds: number[] = [];
export const normalizedWinId = (winId: number) => {
  if (!winIds.includes(winId)) {
    winIds.push(winId);
  }
  return winIds.indexOf(winId) + 1;
};

const winColor = (winId: number) => {
  const colors = ['#00309e', '#ea3655', '#eea727'];
  const index = normalizedWinId(winId) - 1;
  return colors[index] || colors[colors.length - 1];
};

export const logWorkerGetter = (
  target: any,
  applyPath: ApplyPath,
  rtnValue: any,
  restrictedToWorker = false
) => {
  if (debug && webWorkerCtx.$config$.logGetters) {
    try {
      const msg = `Get ${logTargetProp(target, 'Get', applyPath)}, returned: ${logValue(
        applyPath,
        rtnValue
      )}${restrictedToWorker ? ' (restricted to worker)' : ''}`;
      if (!msg.includes('Symbol(')) {
        logWorker(msg, target[WinIdKey]);
      }
    } catch (e) {}
  }
};

export const logWorkerSetter = (
  target: any,
  applyPath: ApplyPath,
  value: any,
  restrictedToWorker = false
) => {
  if (debug && webWorkerCtx.$config$.logSetters) {
    try {
      logWorker(
        `Set ${logTargetProp(target, 'Set', applyPath)}, value: ${logValue(applyPath, value)}${
          restrictedToWorker ? ' (restricted to worker)' : ''
        }`,
        target[WinIdKey]
      );
    } catch (e) {}
  }
};

export const logWorkerCall = (target: any, applyPath: ApplyPath, args: any[], rtnValue: any) => {
  if (debug && webWorkerCtx.$config$.logCalls) {
    try {
      logWorker(
        `Call ${logTargetProp(target, 'Call', applyPath)}(${args
          .map((v) => logValue(applyPath, v))
          .join(', ')}), returned: ${logValue(applyPath, rtnValue)}`,
        target[WinIdKey]
      );
    } catch (e) {}
  }
};

export const logWorkerGlobalConstructor = (winId: number, cstrName: string, args: any[]) => {
  if (debug && webWorkerCtx.$config$.logCalls) {
    try {
      logWorker(`Construct new ${cstrName}(${args.map((v) => logValue([], v)).join(', ')})`, winId);
    } catch (e) {}
  }
};

const logTargetProp = (target: any, accessType: 'Get' | 'Set' | 'Call', applyPath: string[]) => {
  let n = '';
  if (target) {
    const instanceId = target[InstanceIdKey];
    if (instanceId === PlatformInstanceId.window) {
      n = '';
    } else if (instanceId === PlatformInstanceId.document) {
      n = 'document.';
    } else if (instanceId === PlatformInstanceId.documentElement) {
      n = 'document.documentElement.';
    } else if (instanceId === PlatformInstanceId.head) {
      n = 'document.head.';
    } else if (instanceId === PlatformInstanceId.body) {
      n = 'document.body.';
    } else if (target.nodeType === 1) {
      n = toLower(target.nodeName) + '.';
    } else if (target[InterfaceTypeKey] === InterfaceType.Element && target[NodeNameKey]) {
      n = `<${toLower(target[NodeNameKey])}>`;
    } else if (target[InterfaceTypeKey] === InterfaceType.CommentNode) {
      n = 'comment.';
    } else if (target[InterfaceTypeKey] === InterfaceType.AttributeNode) {
      n = 'attributes.';
    } else if (target[InterfaceTypeKey] === InterfaceType.DocumentFragmentNode) {
      n = 'fragment.';
    } else if (target[InterfaceTypeKey] === InterfaceType.DocumentTypeNode) {
      n = 'documentTypeNode.';
    } else if (target[InterfaceTypeKey] === InterfaceType.MutationObserver) {
      n = 'mutationObserver.';
    } else if (target[InterfaceTypeKey] <= InterfaceType.DocumentFragmentNode) {
      n = 'node.';
    } else {
      n = '¯\\_(ツ)_/¯ TARGET.';
      console.warn('¯\\_(ツ)_/¯ TARGET', target);
    }
  }
  if ('Get' === accessType && applyPath.length > 1) {
    const first = applyPath.slice(0, applyPath.length - 1);
    const last = applyPath[applyPath.length - 1];
    if (!isNaN(last as any)) {
      return (n += `${first.join('.')}[${last}]`);
    }
  }
  return (n += applyPath.join('.'));
};

/**
 * Helper just to have pretty console logs while debugging
 */
const logValue = (applyPath: ApplyPath, v: any): string => {
  const type = typeof v;
  if (v === undefined) {
    return 'undefined';
  }
  if (type === 'boolean' || type === 'number' || v == null) {
    return JSON.stringify(v);
  }
  if (type === 'string') {
    if (applyPath.includes('cookie')) {
      return JSON.stringify(v.substr(0, 10) + '...');
    }
    return JSON.stringify(v);
  }
  if (Array.isArray(v)) {
    return `[${v.map(logValue).join(', ')}]`;
  }
  if (type === 'object') {
    const instanceId = v[InstanceIdKey];
    if (typeof instanceId === 'number') {
      if (instanceId === PlatformInstanceId.body) {
        return `<body>`;
      }
      if (instanceId === PlatformInstanceId.document) {
        return NodeName.Document;
      }
      if (instanceId === PlatformInstanceId.documentElement) {
        return `<html>`;
      }
      if (instanceId === PlatformInstanceId.head) {
        return `<head>`;
      }
      if (instanceId === PlatformInstanceId.window) {
        return `window`;
      }
      if (v[InterfaceTypeKey] === InterfaceType.Element && v[NodeNameKey]) {
        return `<${toLower(v[NodeNameKey])}>`;
      }
      if (v[InterfaceTypeKey] === InterfaceType.DocumentTypeNode) {
        return `<!DOCTYPE ${v[NodeNameKey]}>`;
      }
      if (v[InterfaceTypeKey] <= InterfaceType.DocumentFragmentNode) {
        return v[NodeNameKey];
      }
      return '¯\\_(ツ)_/¯ instance obj';
    }
    if (v[Symbol.iterator]) {
      return `[${Array.from(v)
        .map((i) => logValue(applyPath, i))
        .join(', ')}]`;
    }
    if ('value' in v) {
      return JSON.stringify(v.value);
    }
    return JSON.stringify(v);
  }
  if (isPromise(v)) {
    return `Promise`;
  }
  if (type === 'function') {
    return `ƒ() ${v.name || ''}`.trim();
  }

  return `¯\\_(ツ)_/¯ ${String(v)}`.trim();
};

export const len = (obj: { length: number }) => obj.length;

export const getConstructorName = (obj: { constructor?: { name?: string } } | undefined | null) =>
  (obj && obj.constructor && obj.constructor.name) || '';

const startsWith = (str: string, val: string) => str.startsWith(val);

export const isValidMemberName = (memberName: string) => {
  if (startsWith(memberName, 'webkit') || startsWith(memberName, 'toJSON')) {
    return false;
  } else if (startsWith(memberName, 'on') && toLower(memberName) === memberName) {
    return false;
  } else {
    return true;
  }
};

export const getLastMemberName = (applyPath: ApplyPath, i?: number) => {
  for (i = len(applyPath) - 1; i >= 0; i--) {
    if (typeof applyPath[i] === 'string') {
      return applyPath[i] as string;
    }
  }
  return applyPath[0] as string;
};

export const defineConstructorName = (Cstr: any, value: string) =>
  Object.defineProperty(Cstr, 'name', {
    value,
  });

export const nextTick = (cb: Function, ms?: number) => setTimeout(cb, ms);

export const EMPTY_ARRAY = [];
if (debug) {
  Object.freeze(EMPTY_ARRAY);
}

export const PT_INITIALIZED_EVENT = `pt0`;
export const PT_IFRAME_APPENDED = `pt1`;

export const randomId = () => Math.round(Math.random() * 9999999999 + PlatformInstanceId.body);

/**
 * The `type` attribute for Partytown scripts, which does two things:
 *
 * 1. Prevents the `<script>` from executing on the main thread.
 * 2. Is used as a selector so the Partytown library can find all scripts to execute in a web worker.
 *
 * @public
 */
export const SCRIPT_TYPE = `text/partytown`;

export const SCRIPT_TYPE_EXEC = `-x`;
