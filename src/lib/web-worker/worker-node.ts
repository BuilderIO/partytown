import { InstanceIdKey, NodeNameKey, webWorkerCtx, WinIdKey } from './worker-constants';
import { callMethod, setter, sendToMain } from './worker-proxy';
import { CallType, NodeName, SerializedAttr, StateProp, WorkerMessageType } from '../types';
import { getEnv } from './worker-environment';
import { getInstanceStateValue } from './worker-state';
import { insertIframe, runScriptContent } from './worker-exec';
import { isScriptJsType } from './worker-script';
import { SCRIPT_TYPE, SCRIPT_TYPE_EXEC } from '../utils';
import { WorkerInstance } from './worker-instance';

export class Node extends WorkerInstance {
  appendChild(node: Node) {
    return this.insertBefore(node, null);
  }

  get href() {
    // some scripts are just using node.href and looping up the tree
    // just adding this prop to all nodes to avoid unnecessary main access
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
      const scriptType = getInstanceStateValue<string>(newNode, StateProp.type);

      if (scriptContent) {
        if (isScriptJsType(scriptType)) {
          const errorMsg = runScriptContent(getEnv(newNode), instanceId, scriptContent, winId, '');
          const datasetType = errorMsg ? 'pterror' : 'ptid';
          const datasetValue = errorMsg || instanceId;
          setter(newNode, ['type'], SCRIPT_TYPE + SCRIPT_TYPE_EXEC);
          setter(newNode, ['dataset', datasetType], datasetValue);
        }
        setter(newNode, ['innerHTML'], scriptContent);
      }
    }

    callMethod(this, ['insertBefore'], [newNode, referenceNode], CallType.NonBlocking);

    if (isIFrame) {
      // an iframe element's instanceId is also
      // the winId of its contentWindow
      insertIframe(instanceId, newNode);
    }
    if (isScript) {
      sendToMain(true);
      webWorkerCtx.$postMessage$([WorkerMessageType.InitializeNextScript, winId]);
    }

    return newNode;
  }

  get nodeName() {
    return this[NodeNameKey];
  }

  get nodeType() {
    return 3;
  }

  get ownerDocument(): Document {
    return getEnv(this).$document$;
  }
}

export class Attr {
  name: string;
  value: string;

  constructor(serializedAttr: SerializedAttr) {
    this.name = serializedAttr[0];
    this.value = serializedAttr[1];
  }
  get nodeName() {
    return this.name;
  }
  get nodeType() {
    return 2;
  }
}
