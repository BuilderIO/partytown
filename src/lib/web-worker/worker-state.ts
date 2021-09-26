import {
  InstanceIdKey,
  webWorkerRefIdsByRef,
  webWorkerRefsByRefId,
  webWorkerState,
} from './worker-constants';
import { randomId } from '../utils';
import type { RefHandler, StateRecord } from '../types';
import type { WorkerInstance } from './worker-instance';

export const getInstanceStateValue = <T = any>(
  instance: WorkerInstance,
  stateKey: string | number
) => getStateValue<T>(instance[InstanceIdKey], stateKey);

export const getStateValue = <T = any>(
  instanceId: number,
  stateKey: string | number,
  stateRecord?: StateRecord
): T | undefined => {
  stateRecord = webWorkerState[instanceId];
  return stateRecord ? stateRecord[stateKey] : undefined;
};

export const setInstanceStateValue = (
  instance: WorkerInstance,
  stateKey: string | number,
  stateValue: any
) => setStateValue(instance[InstanceIdKey], stateKey, stateValue);

export const setStateValue = (
  instanceId: number,
  stateKey: string | number,
  stateValue: any,
  stateRecord?: StateRecord
) => {
  stateRecord = webWorkerState[instanceId] || {};
  stateRecord[stateKey] = stateValue;
  webWorkerState[instanceId] = stateRecord;
};

export const getWorkerRef = (refId: number) => webWorkerRefsByRefId[refId];

export const setWorkerRef = (ref: RefHandler, refId?: number) => {
  refId = webWorkerRefIdsByRef.get(ref);
  if (!refId) {
    webWorkerRefIdsByRef.set(ref, (refId = randomId()));
    webWorkerRefsByRefId[refId] = ref;
  }
  return refId;
};
