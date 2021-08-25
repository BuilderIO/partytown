import { InstanceId } from '../types';

let instanceIds = InstanceId.document + 1;
let cleanupTmr: any = 0;

const instancesById = new Map<number, any>();
const InstanceIdKey = Symbol();

const cleanupInstanceRefs = () => {
  instancesById.forEach((nodeInstance: Node, instanceId) => {
    if (instanceId > InstanceId.document && !nodeInstance.isConnected) {
      instancesById.delete(instanceId);
    }
  });
};

export const setInstanceId = (instance: Node | Window, instanceId: number) => {
  if (instance) {
    instancesById.set(instanceId, instance);
    (instance as any)[InstanceIdKey] = instanceId;

    clearTimeout(cleanupTmr);
    cleanupTmr = setTimeout(cleanupInstanceRefs, 5000);
  }
};

export const getInstanceId = (instance: Node | Window | null | undefined, instanceId?: number) => {
  if (instance) {
    instanceId = (instance as any)[InstanceIdKey];
    if (typeof instanceId !== 'number') {
      instanceId = instanceIds++;
      setInstanceId(instance, instanceId);
    }
    return instanceId;
  }
  return -1;
};

const getInstanceBySymbolProp = (instanceId: number, childNodes: NodeListOf<ChildNode>): any => {
  if (childNodes) {
    for (let i = 0, l = childNodes.length, n: Node; i < l; i++) {
      n = childNodes[i];

      if ((n as any)[InstanceIdKey] === instanceId) {
        return n;
      }

      n = getInstanceBySymbolProp(instanceId, n.childNodes);
      if (n) {
        return n;
      }
    }
  }
  return null;
};

export const getInstance = (instanceId: number, instance?: any) => {
  instance = instancesById.get(instanceId);
  if (!instance) {
    instance = getInstanceBySymbolProp(instanceId, document.childNodes);
    if (instance) {
      instancesById.set(instanceId, instance);
    }
  }
  return instance;
};
