import { InstanceId } from '../types';

let instanceIds = InstanceId.document + 1;

const instancesById = new Map<number, any>();
const InstanceIdKey = Symbol();

export const setInstanceId = (instance: any, instanceId: number) => {
  instancesById.set(instanceId, instance);
  instance[InstanceIdKey] = instanceId;
};

export const getInstanceId = (instance: any): number => {
  let instanceId = instance[InstanceIdKey];
  if (typeof instanceId !== 'number') {
    instanceId = instanceIds++;
    setInstanceId(instance, instanceId);
  }
  return instanceId;
};

export const getInstance = (instanceId: number) => instancesById.get(instanceId);
