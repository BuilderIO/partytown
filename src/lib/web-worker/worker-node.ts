import { callMethod, getter, setter, sync } from './worker-proxy';
import { getEnv } from './worker-environment';
import { getInstanceStateValue } from './worker-state';
import { insertIframe, runScriptContent } from './worker-exec';
import {
  InstanceIdKey,
  InterfaceTypeKey,
  NodeNameKey,
  ParentInstanceIdKey,
  webWorkerCtx,
  webWorkerInstances,
  WinIdKey,
} from './worker-constants';
import { NodeName, StateProp, WorkerMessageType } from '../types';
import type { HTMLDocument } from './worker-document';
import { SCRIPT_TYPE, SCRIPT_TYPE_EXEC } from '../utils';
import { WorkerProxy } from './worker-proxy-constructor';
import { getPlatformInstance } from './worker-serialization';

export class Node extends WorkerProxy {
  appendChild(node: Node) {
    return this.insertBefore(node, null);
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
      const scriptContent = getInstanceStateValue<string>(newNode, StateProp.innerHTML);

      if (scriptContent) {
        const errorMsg = runScriptContent(getEnv(newNode), instanceId, scriptContent, winId);
        const datasetType = errorMsg ? 'pterror' : 'ptid';
        const datasetValue = errorMsg || instanceId;

        setter(newNode, ['type'], SCRIPT_TYPE + SCRIPT_TYPE_EXEC);
        setter(newNode, ['dataset', datasetType], datasetValue);
        setter(newNode, ['innerHTML'], scriptContent);
      }
    }

    callMethod(this, ['insertBefore'], [newNode, referenceNode]);

    if (isIFrame) {
      insertIframe(newNode);
    }
    if (isScript) {
      sync();
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

  get ownerDocument(): HTMLDocument {
    return getEnv(this).$document$;
  }

  get parentNode() {
    let winId = this[WinIdKey];
    let parentInstanceId = this[ParentInstanceIdKey];
    let parentNode: any =
      getPlatformInstance(winId, parentInstanceId) || webWorkerInstances.get(parentInstanceId!);

    if (!parentNode) {
      parentNode = getter(this, ['parentNode']);
      if (parentNode) {
        this[ParentInstanceIdKey] = parentNode[InstanceIdKey];
      }
    }
    return parentNode;
  }
}
