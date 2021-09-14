import { callMethod, getter, proxy, setter } from './worker-proxy';
import { ExtraInstruction, InterfaceType, PlatformApiId, SerializedInstance } from '../types';
import { imageRequest, scriptElementSetSrc } from './worker-exec';
import {
  InstanceIdKey,
  InterfaceTypeKey,
  NodeNameKey,
  PrivateValues,
  srcUrls,
  WinIdKey,
} from './worker-constants';
import { len, PT_SCRIPT, toLower } from '../utils';
import { webWorkerCtx } from './worker-constants';
import type { WorkerDocument } from './worker-document';

export class WorkerNode {
  [WinIdKey]: number;
  [InstanceIdKey]: number;
  [InterfaceTypeKey]: number;
  [NodeNameKey]: string;
  [PrivateValues]: { $url$?: string };
  nodeName: string;
  nodeType: number;

  constructor(nodeCstr: SerializedInstance) {
    this[PrivateValues] = {};
    this[WinIdKey] = nodeCstr.$winId$;
    this[InstanceIdKey] = nodeCstr.$instanceId$!;
    this.nodeType = this[InterfaceTypeKey] = nodeCstr.$interfaceType$;
    this.nodeName = this[NodeNameKey] = nodeCstr.$nodeName$!;
    return proxy(nodeCstr.$interfaceType$, this, []);
  }

  get ownerDocument(): WorkerDocument {
    return document as any;
  }

  get href() {
    return undefined;
  }
  set href(_: any) {}
}

export class WorkerElement extends WorkerNode {
  get localName() {
    return toLower(this.nodeName);
  }
  get tagName() {
    return this.nodeName;
  }
}

export class WorkerAnchorElement extends WorkerElement {
  get hash() {
    return getUrl(this).hash;
  }
  get host() {
    return getUrl(this).host;
  }
  get hostname() {
    return getUrl(this).hostname;
  }
  get href() {
    return getUrl(this) + '';
  }
  set href($url$: string) {
    this[PrivateValues].$url$ = $url$;
  }
  get origin() {
    return getUrl(this).origin;
  }
  get pathname() {
    return getUrl(this).pathname;
  }
  get port() {
    return getUrl(this).port;
  }
  get protocol() {
    return getUrl(this).protocol;
  }
  get search() {
    return getUrl(this).search;
  }
}

export class WorkerDocumentElementChild extends WorkerElement {
  get parentElement() {
    return document.documentElement;
  }
  get parentNode() {
    return document.documentElement;
  }
}

export class WorkerDocumentElement extends WorkerElement {
  get parentElement() {
    return null;
  }
  get parentNode() {
    return document;
  }
}

export class WorkerSrcElement extends WorkerElement {
  [PrivateValues]: {
    /** completed */
    c?: boolean;
    $url$?: string;
    $onload$?: ((ev: any) => void)[];
    $onerror$?: ((ev: any) => void)[];
  };

  addEventListener(...args: any[]) {
    const privateValues = this[PrivateValues];
    if (args[0] === 'load') {
      (privateValues.$onload$ = privateValues.$onload$ || []).push(args[1]);
    } else if (args[0] === 'error') {
      (privateValues.$onerror$ = privateValues.$onerror$ || []).push(args[1]);
    }
  }

  get async() {
    return true;
  }
  set async(_: boolean) {}

  get complete() {
    const hasCompleted = this[PrivateValues].c;
    return hasCompleted !== false;
  }

  get defer() {
    return true;
  }
  set defer(_: boolean) {}

  get onload() {
    const onload = this[PrivateValues].$onload$;
    return (onload && onload[0]) || null;
  }
  set onload(cb: ((ev: any) => void) | null) {
    this[PrivateValues].$onload$ = cb ? [cb] : [];
  }

  get onerror() {
    const onerror = this[PrivateValues].$onerror$;
    return (onerror && onerror[0]) || null;
  }
  set onerror(cb: ((ev: any) => void) | null) {
    this[PrivateValues].$onerror$ = cb ? [cb] : [];
  }
}

export class WorkerImageElement extends WorkerSrcElement {
  get src() {
    return srcUrls.get(this[InstanceIdKey]) || '';
  }
  set src(url: string) {
    url = resolveUrl(url) + '';
    if (srcUrls.get(this[InstanceIdKey]) !== url) {
      srcUrls.set(this[InstanceIdKey], url);
      imageRequest(this);
    }
  }

  get width() {
    return 1;
  }
  set width(_: number) {}

  get height() {
    return 1;
  }
  set height(_: number) {}
}

export class WorkerScriptElement extends WorkerSrcElement {
  get src() {
    if (this[WinIdKey] === webWorkerCtx.$winId$) {
      return srcUrls.get(this[InstanceIdKey]) || '';
    }
    return getter(this, ['src']);
  }
  set src(url: string) {
    if (this[WinIdKey] === webWorkerCtx.$winId$) {
      if (srcUrls.get(this[InstanceIdKey]) !== url) {
        srcUrls.set(this[InstanceIdKey], url);
        scriptElementSetSrc(this);
      }
    } else {
      setter(this, ['src'], url);
    }
  }

  get type() {
    return getter(this, ['type']);
  }
  set type(type: string) {
    if (type !== 'text/javascript') {
      setter(this, ['type'], type);
    }
  }
}

export class WorkerNodeList {
  [PrivateValues]: WorkerNode[];

  constructor(workerNodes: WorkerNode[]) {
    (this[PrivateValues] = workerNodes).forEach((node, index) => ((this as any)[index] = node));
  }
  entries() {
    return this[PrivateValues].entries();
  }
  forEach(cb: (value: WorkerNode, index: number) => void, thisArg?: any) {
    this[PrivateValues].forEach(cb, thisArg);
  }
  item(index: number) {
    return (this as any)[index];
  }
  keys() {
    return this[PrivateValues].keys();
  }
  get length() {
    return len(this[PrivateValues]);
  }
  values() {
    return this[PrivateValues].values();
  }
  [Symbol.iterator]() {
    return this[PrivateValues][Symbol.iterator]();
  }
}

const getUrl = (elm: WorkerElement) => resolveUrl(elm[PrivateValues].$url$);

export const resolveUrl = (url?: string) => new URL(url || '', webWorkerCtx.$location$ + '');

export const createElement = (
  doc: WorkerDocument,
  tagName: string,
  $extraInstructions$: ExtraInstruction[]
) => {
  tagName = toLower(tagName);

  if (tagName === 'script') {
    $extraInstructions$.push(ExtraInstruction.SET_INERT_SCRIPT, ExtraInstruction.SET_PARTYTOWN_ID);
  } else if (tagName === 'img') {
    $extraInstructions$.push(ExtraInstruction.SET_INERT_IMG, ExtraInstruction.SET_PARTYTOWN_ID);
  } else if (tagName === 'iframe') {
    $extraInstructions$.push(ExtraInstruction.SET_IFRAME_SRCDOC, PT_SCRIPT as any);
  }

  return callMethod(doc, ['createElement'], [tagName], $extraInstructions$);
};
