import { CreatedKey, InstanceIdKey, instances, winCtxs, windowIds } from './main-constants';
import type { InstanceId, WinId } from '../types';
import { randomId } from '../utils';

export const getAndSetInstanceId = (instance: any, instanceId?: InstanceId) => {
  if (instance) {
    if ((instanceId = windowIds.get(instance))) {
      return instanceId;
    }
    if (!(instanceId = instance[InstanceIdKey])) {
      setInstanceId(instance, (instanceId = randomId()));
    }
    return instanceId;
  }
};

export const getInstance = <T = any>(
  winId: WinId,
  instanceId: InstanceId,
  docId?: string
): T | undefined => {
  if (winId === instanceId && winCtxs[winId] && winCtxs[winId]!.$window$) {
    return winCtxs[winId]!.$window$ as any;
  } else {
    [instanceId, docId] = instanceId.split('.');
    if (docId) {
      return instances.get(instanceId)[docId];
    } else {
      return instances.get(instanceId);
    }
  }
};

export const setInstanceId = (instance: any, instanceId: InstanceId, now?: number) => {
  if (instance) {
    instances.set(instanceId, instance);
    instance[InstanceIdKey] = instanceId;
    instance[CreatedKey] = now = Date.now();

    if (now > lastCleanup + 5000) {
      instances.forEach((storedInstance: any, instanceId) => {
        if (storedInstance[CreatedKey] < lastCleanup) {
          if (storedInstance.nodeType && !storedInstance.isConnected) {
            instances.delete(instanceId);
          }
        }
      });
      lastCleanup = now;
    }
  }
};

let lastCleanup = 0;
