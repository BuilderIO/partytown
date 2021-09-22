import { applyBeforeSyncSetters, callMethod } from './worker-proxy';
import { EMPTY_ARRAY, len } from '../utils';
import { insertIframe } from './worker-exec';
import { InterfaceTypeKey, NodeNameKey, webWorkerCtx, WinIdKey } from './worker-constants';
import { NodeName, WorkerMessageType } from '../types';
import type { WorkerDocument } from './worker-document';
import { WorkerInstance } from './worker-instance';

export class WorkerNode extends WorkerInstance {
  appendChild(node: WorkerNode) {
    return this.insertBefore(node, null);
  }

  get ownerDocument(): WorkerDocument {
    return document as any;
  }

  get href() {
    return undefined;
  }
  set href(_: any) {}

  insertBefore(newNode: WorkerNode, referenceNode: WorkerNode | null) {
    applyBeforeSyncSetters(this[WinIdKey], newNode);

    newNode = callMethod(this, ['insertBefore'], [newNode, referenceNode], EMPTY_ARRAY);

    if (newNode[NodeNameKey] === NodeName.IFrame) {
      insertIframe(newNode);
    } else if (newNode[NodeNameKey] === NodeName.Script) {
      webWorkerCtx.$postMessage$([WorkerMessageType.InitializeNextWorkerScript]);
    }

    return newNode;
  }

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
