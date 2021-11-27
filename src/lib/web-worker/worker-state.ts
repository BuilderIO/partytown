import { InstanceStateKey, webWorkerRefIdsByRef, webWorkerRefsByRefId } from './worker-constants';
import { randomId } from '../utils';
import type { RefHandler } from '../types';
import type { WorkerProxy } from './worker-proxy-constructor';

export const hasInstanceStateValue = (instance: WorkerProxy, stateKey: string | number) =>
  stateKey in instance[InstanceStateKey];

export const getInstanceStateValue = <T = any>(
  instance: WorkerProxy,
  stateKey: string | number
): T => instance[InstanceStateKey][stateKey];

export const setInstanceStateValue = (
  instance: WorkerProxy,
  stateKey: string | number,
  stateValue: any
) => (instance[InstanceStateKey][stateKey] = stateValue);

export const setWorkerRef = (ref: RefHandler, refId?: number) => {
  refId = webWorkerRefIdsByRef.get(ref);
  if (!refId) {
    webWorkerRefIdsByRef.set(ref, (refId = randomId()));
    webWorkerRefsByRefId[refId] = ref;
  }
  return refId;
};
