import { callMethod, getter, setter } from './worker-proxy';
import {
  cachedDimensions,
  InstanceIdKey,
  webWorkerRefIdsByRef,
  webWorkerRefsByRefId,
  webWorkerState,
  WinIdKey,
} from './worker-constants';
import { EMPTY_ARRAY, randomId } from '../utils';
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
export const cachedReadonlyProps = (Cstr: any, props: string) =>
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

/**
 * Known dimension properties to add to the Constructor's prototype
 * that when called they'll check the dimension cache, and if it's
 * not in the cache then to get all dimensions in one call and
 * set its cache.
 */
export const cachedDimensionProps = (Cstr: any) =>
  dimensionPropNames.map((propName) => {
    Object.defineProperty(Cstr.prototype, propName, {
      get() {
        const dimension = cachedDimensions.get(getDimensionCacheKey(this, propName));
        if (typeof dimension === 'number') {
          return dimension;
        }

        const groupedDimensions: { [key: string]: number } = getter(
          this,
          [propName],
          dimensionPropNames
        );

        Object.entries(groupedDimensions).map(([dimensionPropName, value]) => {
          cachedDimensions.set(getDimensionCacheKey(this, dimensionPropName), value);
        });

        return groupedDimensions[propName];
      },
      set(val) {
        cachedDimensions.set(getDimensionCacheKey(this, propName), val);
        setter(this, [propName], val);
      },
    });
  });

export const cachedDimensionMethods = (Cstr: any) =>
  dimensionMethodNames.map((methodName) => {
    Cstr.prototype[methodName] = function () {
      let cacheKey = getDimensionCacheKey(this, methodName);
      let dimensions = cachedDimensions.get(cacheKey);
      if (!dimensions) {
        dimensions = callMethod(this, [methodName], EMPTY_ARRAY);
        cachedDimensions.set(cacheKey, dimensions);
      }
      return dimensions;
    };
  });

const dimensionPropNames =
  'innerHeight,innerWidth,outerHeight,outerWidth,clientHeight,clientWidth,clientTop,clientLeft,scrollHeight,scrollWidth,scrollTop,scrollLeft,offsetHeight,offsetWidth,offsetTop,offsetLeft'.split(
    ','
  );

const dimensionMethodNames = 'getClientRects,getBoundingClientRect'.split(',');

const getDimensionCacheKey = (instance: WorkerProxy, memberName: string) =>
  instance[WinIdKey] + '.' + instance[InstanceIdKey] + '.' + memberName;
