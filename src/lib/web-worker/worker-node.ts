import { InterfaceTypeKey, NodeNameKey } from './worker-constants';
import { len } from '../utils';
import type { WorkerDocument } from './worker-document';
import { WorkerInstance } from './worker-instance';

export class WorkerNode extends WorkerInstance {
  get ownerDocument(): WorkerDocument {
    return document as any;
  }

  get href() {
    return undefined;
  }
  set href(_: any) {}

  get nodeName() {
    return this[NodeNameKey];
  }

  get nodeType() {
    return this[InterfaceTypeKey];
  }
}

export class WorkerNodeList {
  private _: WorkerNode[];

  constructor(workerNodes: WorkerNode[]) {
    (this._ = workerNodes).forEach((node, index) => ((this as any)[index] = node));
  }
  entries() {
    return this._.entries();
  }
  forEach(cb: (value: WorkerNode, index: number) => void, thisArg?: any) {
    this._.forEach(cb, thisArg);
  }
  item(index: number) {
    return (this as any)[index];
  }
  keys() {
    return this._.keys();
  }
  get length() {
    return len(this._);
  }
  values() {
    return this._.values();
  }
  [Symbol.iterator]() {
    return this._[Symbol.iterator]();
  }
}
