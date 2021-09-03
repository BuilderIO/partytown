import { callMethod, getter, proxy, setter } from './worker-proxy';
import { ExtraInstruction, SerializedNode } from '../types';
import { imageRequest, scriptElementSetSrc } from './worker-exec';
import { ChildDocument, InstanceIdKey, PrivateValues, srcUrls } from './worker-constants';
import { len, toLower } from '../utils';
import { webWorkerCtx } from './worker-constants';
import type { WorkerDocument, WorkerMainDocument } from './worker-document';
import { WorkerContentWindow } from './worker-content-window';

export class WorkerNode {
  [InstanceIdKey]: number;
  [ChildDocument]: boolean;
  nodeName: string;
  nodeType: number;
  [PrivateValues]: { $url$?: string };

  constructor(nodeCstr: SerializedNode) {
    this[InstanceIdKey] = nodeCstr.$instanceId$!;
    this[ChildDocument] = nodeCstr.$childDocument$!;
    this.nodeType = nodeCstr.$interfaceType$;
    this.nodeName = nodeCstr.$data$;
    this[PrivateValues] = {};
    return proxy(nodeCstr.$interfaceType$, this, []);
  }

  get ownerDocument(): WorkerDocument {
    return self.document as any;
  }
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

export class WorkerIFrameElement extends WorkerElement {
  [PrivateValues]: { $url$?: string; $window$?: any };

  get contentDocument() {
    return this.contentWindow.document;
  }

  get contentWindow() {
    if (!this[PrivateValues].$window$) {
      this[PrivateValues].$window$ = new WorkerContentWindow(this[InstanceIdKey]);
    }
    return this[PrivateValues].$window$;
  }
}

class WorkerSrcElement extends WorkerElement {
  [PrivateValues]: {
    /** completed */
    c?: boolean;
    $url$?: string;
    $onload$?: ((ev: any) => void)[];
    $onerror$?: ((ev: any) => void)[];
  };

  addEventListener(...args: any[]) {
    if (this[ChildDocument]) {
      callMethod(this, ['addEventListener'], args);
    } else {
      const privateValues = this[PrivateValues];
      if (args[0] === 'load') {
        (privateValues.$onload$ = privateValues.$onload$ || []).push(args[1]);
      } else if (args[0] === 'error') {
        (privateValues.$onerror$ = privateValues.$onerror$ || []).push(args[1]);
      }
    }
  }

  get async() {
    return true;
  }
  set async(_: boolean) {}

  get complete() {
    if (this[ChildDocument]) {
      return getter(this, ['complete']);
    } else {
      const hasCompleted = this[PrivateValues].c;
      return hasCompleted !== false;
    }
  }

  get defer() {
    return true;
  }
  set defer(_: boolean) {}

  get onload() {
    if (this[ChildDocument]) {
      return getter(this, ['onload']);
    } else {
      const onload = this[PrivateValues].$onload$;
      return (onload && onload[0]) || null;
    }
  }
  set onload(cb: ((ev: any) => void) | null) {
    if (this[ChildDocument]) {
      setter(this, ['onload'], cb);
    } else {
      this[PrivateValues].$onload$ = cb ? [cb] : [];
    }
  }

  get onerror() {
    if (this[ChildDocument]) {
      return getter(this, ['onerror']);
    } else {
      const onerror = this[PrivateValues].$onerror$;
      return (onerror && onerror[0]) || null;
    }
  }
  set onerror(cb: ((ev: any) => void) | null) {
    if (this[ChildDocument]) {
      setter(this, ['onerror'], cb);
    } else {
      this[PrivateValues].$onerror$ = cb ? [cb] : [];
    }
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

  get naturlaWidth() {
    return 1;
  }
  get naturalHeight() {
    return 1;
  }
}

export class WorkerScriptElement extends WorkerSrcElement {
  get src() {
    if (this[ChildDocument]) {
      return getter(this, ['src']);
    } else {
      return srcUrls.get(this[InstanceIdKey]) || '';
    }
  }
  set src(url: string) {
    if (this[ChildDocument]) {
      setter(this, ['src'], url);
    } else {
      if (srcUrls.get(this[InstanceIdKey]) !== url) {
        srcUrls.set(this[InstanceIdKey], url);
        scriptElementSetSrc(this);
      }
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

const resolveUrl = (url?: string) => new URL(url || '', webWorkerCtx.$location$ + '');

export const createElement = (
  doc: WorkerMainDocument,
  tagName: string,
  $extraInstructions$: ExtraInstruction[]
) => {
  tagName = toLower(tagName);

  if (tagName === 'script') {
    $extraInstructions$.push(ExtraInstruction.SET_INERT_SCRIPT, ExtraInstruction.SET_PARTYTOWN_ID);
  } else if (tagName === 'img') {
    $extraInstructions$.push(ExtraInstruction.SET_INERT_IMG, ExtraInstruction.SET_PARTYTOWN_ID);
  }

  return callMethod(doc, ['createElement'], [tagName], $extraInstructions$);
};
