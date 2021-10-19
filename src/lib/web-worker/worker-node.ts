import { applyBeforeSyncSetters, callMethod } from './worker-proxy';
import { getEnv } from './worker-environment';
import type { HTMLDocument } from './worker-document';
import { insertIframe, insertScriptContent } from './worker-exec';
import {
  InstanceIdKey,
  InterfaceTypeKey,
  NodeNameKey,
  webWorkerCtx,
  WinIdKey,
} from './worker-constants';
import { NodeName, WorkerMessageType } from '../types';
import { WorkerProxy } from './worker-proxy-constructor';

export class Node extends WorkerProxy {
  appendChild(node: Node) {
    return this.insertBefore(node, null);
  }

  get ownerDocument(): HTMLDocument {
    return getEnv(this).$document$;
  }

  get href() {
    return;
  }
  set href(_: any) {}

  insertBefore(newNode: Node, referenceNode: Node | null) {
    // ensure the node being added to the window's document
    // is given the same winId as the window it's being added to
    const winId = (newNode[WinIdKey] = this[WinIdKey]);
    const instanceId = newNode[InstanceIdKey];
    const nodeName = newNode[NodeNameKey];
    const isScript = nodeName === NodeName.Script;
    const isIFrame = nodeName === NodeName.IFrame;

    if (isScript) {
      insertScriptContent(newNode);
    }

    applyBeforeSyncSetters(newNode);

    newNode = callMethod(this, ['insertBefore'], [newNode, referenceNode], undefined, instanceId);

    if (isIFrame) {
      insertIframe(newNode);
    }
    if (isScript) {
      webWorkerCtx.$postMessage$([WorkerMessageType.InitializeNextScript, winId]);
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
