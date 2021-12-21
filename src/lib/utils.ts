import { ApplyPath, InterfaceType, NodeName, PlatformInstanceId } from './types';
import {
  ApplyPathKey,
  InstanceIdKey,
  NodeNameKey,
  webWorkerCtx,
  WinIdKey,
} from './web-worker/worker-constants';

export const debug = !!(globalThis as any).partytownDebug;

export const isPromise = (v: any): v is Promise<unknown> => typeof v === 'object' && v && v.then;

export const noop = () => true;

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
  restrictedToWorker = false,
  groupedGetters = false
) => {
  if (debug && webWorkerCtx.$config$.logGetters) {
    try {
      const msg = `Get ${logTargetProp(target, 'Get', applyPath)}, returned: ${logValue(
        applyPath,
        rtnValue
      )}${restrictedToWorker ? ' (restricted to worker)' : ''}${
        groupedGetters ? ' (grouped getter)' : ''
      }`;
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
      applyPath = applyPath.slice(0, applyPath.length - 2);
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
      applyPath = applyPath.slice(0, applyPath.length - 1);
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
    const cstrName = getConstructorName(target);
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
    } else if (target[NodeNameKey]) {
      let nodeName: string = target[NodeNameKey];
      if (nodeName === NodeName.Text) {
        n = 'textNode.';
      } else if (nodeName === NodeName.Comment) {
        n = 'commentNode.';
      } else if (nodeName === NodeName.Document) {
        n = 'document.';
      } else if (nodeName === NodeName.DocumentTypeNode) {
        n = 'doctype.';
      } else {
        n = nodeName.toLowerCase() + 'Element.';
      }
    } else if (target.nodeType === InterfaceType.AttributeNode) {
      n = 'attributes.';
    } else if (cstrName === 'CanvasRenderingContext2D') {
      n = 'context2D.';
    } else if (cstrName === 'CSSStyleDeclaration') {
      n = 'value.';
    } else if (cstrName === 'MutationObserver') {
      n = 'mutationObserver.';
    } else if (cstrName === 'NamedNodeMap') {
      n = 'namedNodeMap.';
    } else if (cstrName === 'ResizeObserver') {
      n = 'resizeObserver.';
    } else {
      n = '¯\\_(ツ)_/¯ TARGET.';
      console.warn('¯\\_(ツ)_/¯ TARGET', target);
    }

    if (target[ApplyPathKey] && target[ApplyPathKey].length) {
      n += [...target[ApplyPathKey]].join('.') + '.';
    }
  }
  if (applyPath.length > 1) {
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
    return JSON.stringify(v.length > 50 ? v.substr(0, 40) + '...' : v);
  }
  if (Array.isArray(v)) {
    return `[${v.map(logValue).join(', ')}]`;
  }
  if (type === 'object') {
    const instanceId: number = v[InstanceIdKey];
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

      if (v[NodeNameKey]) {
        if (v.nodeType === 1) {
          return `<${v[NodeNameKey].toLowerCase()}>`;
        }
        if (v.nodeType === InterfaceType.DocumentTypeNode) {
          return `<!DOCTYPE ${v[NodeNameKey]}>`;
        }
        if (v.nodeType <= InterfaceType.DocumentFragmentNode) {
          return v[NodeNameKey];
        }
      }

      return '¯\\_(ツ)_/¯ instance obj';
    }

    if (v[Symbol.iterator]) {
      return `[${Array.from(v)
        .map((i) => logValue(applyPath, i))
        .join(', ')}]`;
    }
    if ('value' in v) {
      if (typeof v.value === 'string') {
        return `"${v.value}"`;
      }
      return objToString(v.value);
    }
    return objToString(v);
  }
  if (isPromise(v)) {
    return `Promise`;
  }
  if (type === 'function') {
    return `ƒ() ${v.name || ''}`.trim();
  }

  return `¯\\_(ツ)_/¯ ${String(v)}`.trim();
};

const objToString = (obj: any) => {
  const s: string[] = [];
  for (let key in obj) {
    const value = obj[key];
    const type = typeof value;
    if (type === 'string') {
      s.push(`${key}: "${value}"`);
    } else if (type === 'function') {
      s.push(`${key}: ƒ`);
    } else if (Array.isArray(type)) {
      s.push(`${key}: [..]`);
    } else if (type === 'object' && value) {
      s.push(`${key}: {..}`);
    } else {
      s.push(`${key}: ${String(value)}`);
    }
  }
  let str = s.join(', ');
  if (str.length > 200) {
    str = str.substr(0, 200) + '..';
  }
  return `{ ${str} }`;
};

export const len = (obj: { length: number }) => obj.length;

export const getConstructorName = (obj: { constructor: { name: string } } | undefined | null) => {
  try {
    return obj!.constructor.name;
  } catch (e) {}
  return '';
};

export const startsWith = (str: string, val: string) => str.startsWith(val);

export const isValidMemberName = (memberName: string) => {
  if (
    startsWith(memberName, 'webkit') ||
    startsWith(memberName, 'toJSON') ||
    startsWith(memberName, 'constructor') ||
    startsWith(memberName, 'toString') ||
    startsWith(memberName, '_')
  ) {
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
  /*#__PURE__*/ Object.freeze(EMPTY_ARRAY);
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

export const defineProperty = (obj: any, memberName: string, descriptor: PropertyDescriptor) =>
  Object.defineProperty(obj, memberName, { ...descriptor, configurable: true });

export const definePrototypeProperty = (
  Cstr: any,
  memberName: string,
  descriptor: PropertyDescriptor
) => defineProperty(Cstr.prototype, memberName, descriptor);

export const definePrototypePropertyDescriptor = (Cstr: any, propertyDescriptorMap: any) =>
  Object.defineProperties(Cstr.prototype, propertyDescriptorMap);

export const definePrototypeValue = (Cstr: any, memberName: string, value: any) =>
  definePrototypeProperty(Cstr, memberName, {
    value,
    writable: true,
  });
