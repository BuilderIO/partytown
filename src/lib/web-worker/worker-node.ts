import { applyBeforeSyncSetters, callMethod } from './worker-proxy';
import { EMPTY_ARRAY } from '../utils';
import type { HTMLDocument } from './worker-document';
import { insertIframe } from './worker-exec';
import { InterfaceTypeKey, NodeNameKey, webWorkerCtx, WinIdKey } from './worker-constants';
import { NodeName, WorkerMessageType } from '../types';
import { WorkerProxy } from './worker-proxy-constructor';

export class Node extends WorkerProxy {
  appendChild(node: Node) {
    return this.insertBefore(node, null);
  }

  get ownerDocument(): HTMLDocument {
    return document as any;
  }

  get href() {
    return undefined;
  }
  set href(_: any) {}

  insertBefore(newNode: Node, referenceNode: Node | null) {
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
