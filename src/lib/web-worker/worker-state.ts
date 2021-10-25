import { getter } from './worker-proxy';
import {
  InstanceIdKey,
  webWorkerRefIdsByRef,
  webWorkerRefsByRefId,
  webWorkerState,
} from './worker-constants';
import { randomId } from '../utils';
import type { RefHandler, StateRecord } from '../types';
import type { WorkerProxy } from './worker-proxy-constructor';

export const getInstanceStateValue = <T = any>(instance: WorkerProxy, stateKey: string | number) =>
  getStateValue<T>(instance[InstanceIdKey], stateKey);

export const getStateValue = <T = any>(
  instanceId: number,
  stateKey: string | number,
  stateRecord?: StateRecord
): T | undefined => {
  stateRecord = webWorkerState[instanceId];
  return stateRecord ? stateRecord[stateKey] : undefined;
};

export const setInstanceStateValue = (
  instance: WorkerProxy,
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

export const setWorkerRef = (ref: RefHandler, refId?: number) => {
  refId = webWorkerRefIdsByRef.get(ref);
  if (!refId) {
    webWorkerRefIdsByRef.set(ref, (refId = randomId()));
    webWorkerRefsByRefId[refId] = ref;
  }
  return refId;
};

/**
 * Properties to add to the Constructor's prototype
 * that should only do a main read once, cache the value, and
 * returned the cached value after in subsequent reads after that
 */
export const readonlyCachedProps = (Cstr: any, props: string) =>
  props.split(',').map((propName) => {
    Object.defineProperty(Cstr.prototype, propName, {
      get() {
        let stateRecord = webWorkerState[this[InstanceIdKey]];
        if (stateRecord && propName in stateRecord) {
          return stateRecord[propName];
        }

        let val = getter(this, [propName]);
        setInstanceStateValue(this, propName, val);
        return val;
      },
      set(val) {
        setInstanceStateValue(this, propName, val);
      },
    });
  });

/**
 * Properties that always return a value, without doing a main access.
 * Same as:
 * get propName() { return propValue }
 */
export const constantProps = (Cstr: any, props: { [propName: string]: any }) =>
  Object.keys(props).map((propName) => (Cstr.prototype[propName] = props[propName]));
