import { InstanceIdKey, NodeNameKey, NodeTypeKey, PrivateValues } from './worker-symbols';
import { proxy } from './worker-proxy';
import type { SerializedConstructorType, SerializedNode } from '../types';

export class WorkerNode {
  [InstanceIdKey]: number;
  [NodeNameKey]: string;
  [NodeTypeKey]: SerializedConstructorType;
  [PrivateValues]: { [key: string]: any };

  constructor(nodeCstr: SerializedNode) {
    this[InstanceIdKey] = nodeCstr.$instanceId$!;
    this[NodeTypeKey] = nodeCstr.$cstr$;
    this[NodeNameKey] = nodeCstr.$nodeName$;
    this[PrivateValues] = {};
    return proxy(this);
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
      $cstr$: this[NodeTypeKey],
      $nodeName$: this[NodeNameKey],
      $instanceId$: this[InstanceIdKey],
    };
  }
}
