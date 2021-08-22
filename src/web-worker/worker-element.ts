import { importScriptUrl } from './worker-script';
import { InstanceIdKey, NodeNameKey, PrivateValues } from './worker-symbols';
import { toLower } from '../utils';
import { SerializedConstructorType } from '../types';
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
    return !!this[PrivateValues].async;
  }
  set async(value: boolean) {
    this[PrivateValues].async = value;
  }
  get src() {
    return this[PrivateValues].src || '';
  }
  set src(src: string) {
    this[PrivateValues].src = src;
    const instanceId = this[InstanceIdKey];
    importScriptUrl(instanceId, src);
  }
}

export const createScript = ($instanceId$: number) =>
  new WorkerScriptElement({
    $cstr$: SerializedConstructorType.Element,
    $instanceId$,
    $nodeName$: 'SCRIPT',
  });
