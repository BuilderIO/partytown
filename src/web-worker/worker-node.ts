import { InstanceIdKey, NodeNameKey, NodeTypeKey, PrivateValues } from './worker-constants';
import type { InterfaceType, SerializedNode } from '../types';
import { proxy } from './worker-proxy';

export class WorkerNode {
  [InstanceIdKey]: number;
  [NodeNameKey]: string;
  [NodeTypeKey]: InterfaceType;
  [PrivateValues]: { [key: string]: any };

  constructor(nodeCstr: SerializedNode) {
    this[InstanceIdKey] = nodeCstr.$instanceId$!;
    this[NodeTypeKey] = nodeCstr.$interfaceType$;
    this[NodeNameKey] = nodeCstr.$nodeName$;
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
      $nodeName$: this[NodeNameKey],
    };
  }
}
