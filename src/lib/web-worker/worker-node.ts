import { cachedTreeProps } from './worker-constructors';
import { callMethod, setter, sendToMain } from './worker-proxy';
import {
  CallType,
  NodeName,
  StateProp,
  WebWorkerEnvironment,
  WorkerConstructor,
  WorkerMessageType,
  WorkerNode,
} from '../types';
import {
  commaSplit,
  InstanceDataKey,
  InstanceIdKey,
  webWorkerCtx,
  WinIdKey,
} from './worker-constants';
import { defineConstructorName, SCRIPT_TYPE, SCRIPT_TYPE_EXEC } from '../utils';
import { getInstanceStateValue } from './worker-state';
import { insertIframe, runScriptContent } from './worker-exec';
import { isScriptJsType } from './worker-script';

export const createNodeCstr = (
  win: any,
  env: WebWorkerEnvironment,
  WorkerBase: WorkerConstructor
) => {
  const WorkerNode = defineConstructorName(
    class extends WorkerBase {
      appendChild(node: WorkerNode) {
        return this.insertBefore(node, null);
      }

      get href() {
        // some scripts are just using node.href and looping up the tree
        // just adding this prop to all nodes to avoid unnecessary main access
        return;
      }
      set href(_: any) {}

      insertBefore(newNode: WorkerNode, referenceNode: Node | null) {
        // ensure the node being added to the window's document
        // is given the same winId as the window it's being added to
        const winId = (newNode[WinIdKey] = this[WinIdKey]);
        const instanceId = newNode[InstanceIdKey];
        const nodeName = newNode[InstanceDataKey];
        const isScript = nodeName === NodeName.Script;
        const isIFrame = nodeName === NodeName.IFrame;

        if (isScript) {
          const scriptContent = getInstanceStateValue<string>(newNode, StateProp.innerHTML);
          const scriptType = getInstanceStateValue<string>(newNode, StateProp.type);

          if (scriptContent) {
            if (isScriptJsType(scriptType)) {
              const errorMsg = runScriptContent(env, instanceId, scriptContent, winId, '');
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
        return this[InstanceDataKey];
      }

      get nodeType() {
        return 3;
      }

      get ownerDocument(): Document {
        return env.$document$;
      }
    },
    'Node'
  );

  cachedTreeProps(
    WorkerNode,
    commaSplit(
      'childNodes,firstChild,isConnected,lastChild,nextSibling,parentElement,parentNode,previousSibling'
    )
  );

  win.Node = WorkerNode;
};
