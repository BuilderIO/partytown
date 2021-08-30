import { callMethod, getter, proxy, setter } from './worker-proxy';
import { ExtraInstruction, InterfaceType, SerializedNode } from '../types';
import { imageRequest, scriptElementSetSrc } from './worker-requests';
import { InstanceIdKey, PrivateValues } from './worker-constants';
import { len, toLower } from '../utils';
import { webWorkerCtx } from './worker-constants';
import type { WorkerDocument } from './worker-document';

export class WorkerNode {
  [InstanceIdKey]: number;
  nodeName: string;
  nodeType: number;
  [PrivateValues]: { $url$?: string };

  constructor(nodeCstr: SerializedNode) {
    this[InstanceIdKey] = nodeCstr.$instanceId$!;
    this.nodeType = nodeCstr.$interfaceType$;
    this.nodeName = nodeCstr.$data$;
    this[PrivateValues] = {};
    return proxy(nodeCstr.$interfaceType$, this, []);
  }

  get ownerDocument() {
    return self.document;
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

class WorkerSrcElement extends WorkerElement {
  [PrivateValues]: {
    /** async */
    a?: boolean;
    /** completed */
    c?: boolean;
    $url$?: string;
    $onload$?: ((ev: any) => void)[];
    $onerror$?: ((ev: any) => void)[];
  };

  addEventListener(eventName: string, handler: (ev: any) => void) {
    const privateValues = this[PrivateValues];
    if (eventName === 'load') {
      (privateValues.$onload$ = privateValues.$onload$ || []).push(handler);
    } else if (eventName === 'error') {
      (privateValues.$onerror$ = privateValues.$onerror$ || []).push(handler);
    }
  }

  get complete() {
    const hasCompleted = this[PrivateValues].c;
    return hasCompleted !== false;
  }

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
  get alt() {
    return '';
  }
  set alt(_: string) {}

  get src() {
    return getUrl(this) + '';
  }
  set src(url: string) {
    if (url !== '' && this[PrivateValues].$url$ !== url) {
      this[PrivateValues].$url$ = url;
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
    return getUrl(this) + '';
  }
  set src(url: string) {
    if (url !== '' && this[PrivateValues].$url$ !== url) {
      this[PrivateValues].$url$ = url;
      scriptElementSetSrc(this);
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

const getUrl = (elm: WorkerElement) =>
  new URL(elm[PrivateValues].$url$ || '', webWorkerCtx.$location$ + '');

export const ElementConstructors: { [tagname: string]: any } = {
  A: WorkerAnchorElement,
  IMG: WorkerImageElement,
  SCRIPT: WorkerScriptElement,
};

export const createScript = ($instanceId$: number) =>
  new WorkerScriptElement({
    $interfaceType$: InterfaceType.Element,
    $instanceId$,
    $data$: 'SCRIPT',
  });

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
  }

  return callMethod(doc, ['createElement'], [tagName], $extraInstructions$);
};
