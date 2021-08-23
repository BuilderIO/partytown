import { importScriptUrl } from './worker-script';
import { InstanceIdKey, NodeNameKey, PrivateValues } from './worker-constants';
import { SerializedConstructorType } from '../types';
import { toLower } from '../utils';
import { webWorkerCtx } from './worker-constants';
import { WorkerNode } from './worker-node';

export class WorkerElement extends WorkerNode {
  get localName() {
    return toLower(this[NodeNameKey]);
  }
  get tagName() {
    return this[NodeNameKey];
  }
}

export class WorkerScriptElement extends WorkerElement {
  get async() {
    return !!this[PrivateValues].a;
  }
  set async(value: boolean) {
    this[PrivateValues].a = value;
  }
  get src() {
    return this[PrivateValues].$url$ || '';
  }
  set src(url: string) {
    this[PrivateValues].$url$ = url;
    const instanceId = this[InstanceIdKey];
    importScriptUrl(instanceId, url);
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
    return getUrl(this).href;
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

const getUrl = (elm: WorkerElement) => new URL(elm[PrivateValues].$url$ || '', webWorkerCtx.$url$);

export const ElementConstructors: { [tagname: string]: any } = {
  A: WorkerAnchorElement,
  SCRIPT: WorkerScriptElement,
};

export const createScript = ($instanceId$: number) =>
  new WorkerScriptElement({
    $cstr$: SerializedConstructorType.Element,
    $instanceId$,
    $nodeName$: 'SCRIPT',
  });
