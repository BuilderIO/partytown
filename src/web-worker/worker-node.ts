import { callMethod, getter, proxy, setter } from './worker-proxy';
import { ExtraInstruction, InterfaceType, SerializedNode } from '../types';
import { imageRequest, importScriptUrl } from './worker-requests';
import { InstanceIdKey, NodeNameKey, NodeTypeKey, PrivateValues } from './worker-constants';
import { len, toLower } from '../utils';
import { webWorkerCtx } from './worker-constants';
import type { WorkerDocument } from './worker-document';

export class WorkerNode {
  [InstanceIdKey]: number;
  [NodeNameKey]: string;
  [NodeTypeKey]: InterfaceType;
  [PrivateValues]: { $url$?: string };

  constructor(nodeCstr: SerializedNode) {
    this[InstanceIdKey] = nodeCstr.$instanceId$!;
    this[NodeTypeKey] = nodeCstr.$interfaceType$;
    this[NodeNameKey] = nodeCstr.$data$;
    this[PrivateValues] = {};
    return proxy(nodeCstr.$interfaceType$, this, []);
  }

  get nodeName() {
    return this[NodeNameKey];
  }

  get nodeType() {
    return this[NodeTypeKey];
  }

  get ownerDocument() {
    return self.document;
  }

  toJSON(): SerializedNode {
    return {
      $interfaceType$: this[NodeTypeKey],
      $instanceId$: this[InstanceIdKey],
      $data$: this[NodeNameKey],
    };
  }
}

export class WorkerElement extends WorkerNode {
  get localName() {
    return toLower(this[NodeNameKey]);
  }
  get tagName() {
    return this[NodeNameKey];
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

export class WorkerImageElement extends WorkerElement {
  [PrivateValues]: {
    /** completed */
    c?: boolean;
    $url$?: string;
    $onload$?: ((ev: any) => void)[];
    $onerror$: ((ev: any) => void)[];
  };

  addEventListener(eventName: string, handler: (ev: any) => void) {
    const privateValues = this[PrivateValues];
    if (eventName === 'load') {
      (privateValues.$onload$ = privateValues.$onload$ || []).push(handler);
    } else if (eventName === 'error') {
      (privateValues.$onerror$ = privateValues.$onerror$ || []).push(handler);
    }
  }

  get alt() {
    return '';
  }
  set alt(_: string) {}

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

  get src() {
    return getUrl(this) + '';
  }
  set src(url: string) {
    this[PrivateValues].$url$ = url;
    imageRequest(this);
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

export class WorkerScriptElement extends WorkerElement {
  [PrivateValues]: { a: boolean; $url$: string };

  get async() {
    return !!this[PrivateValues].a;
  }
  set async(value: boolean) {
    this[PrivateValues].a = value;
  }
  get src() {
    return getUrl(this) + '';
  }
  set src(url: string) {
    this[PrivateValues].$url$ = url;
    const instanceId = this[InstanceIdKey];
    importScriptUrl(instanceId, url);
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
