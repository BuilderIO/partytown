import {
  cachedDimensions,
  cachedStructure,
  commaSplit,
  environments,
  getterDimensionPropNames,
  InstanceIdKey,
  webWorkerInstances,
  WinIdKey,
} from './worker-constants';
import { callMethod, getter, setter } from './worker-proxy';
import { definePrototypeProperty, definePrototypeValue, EMPTY_ARRAY } from '../utils';
import {
  getInstanceStateValue,
  hasInstanceStateValue,
  setInstanceStateValue,
} from './worker-state';
import type { InstanceId, WinId, WorkerInstance, WorkerNode } from '../types';

export const getOrCreateNodeInstance = (
  winId: WinId,
  instanceId: InstanceId,
  nodeName?: string,
  namespace?: string,
  instance?: WorkerNode,
  prevInstanceId?: string
) => {
  instance = webWorkerInstances.get(instanceId);
  if (!instance && nodeName && environments[winId]) {
    const prevInstance =  webWorkerInstances.get(prevInstanceId || '');
    instance = environments[winId].$createNode$(nodeName, instanceId, namespace, prevInstance);
    webWorkerInstances.set(instanceId, instance!);
  }
  return instance;
};

export const definePrototypeNodeType = (Cstr: any, nodeType: number) =>
  definePrototypeValue(Cstr, 'nodeType', nodeType);

export const cachedTreeProps = (Cstr: any, treeProps: string[]) =>
  treeProps.map((propName) =>
    definePrototypeProperty(Cstr, propName, {
      get(this: WorkerInstance) {
        let cacheKey = getInstanceCacheKey(this, propName);
        let result = cachedStructure.get(cacheKey);
        if (!result) {
          result = getter(this, [propName]);
          cachedStructure.set(cacheKey, result);
        }
        return result;
      },
    })
  );

const getInstanceCacheKey = (instance: WorkerInstance, memberName: string, args?: any[]) =>
  [
    instance[WinIdKey],
    instance[InstanceIdKey],
    memberName,
    ...(args || EMPTY_ARRAY).map((arg) => String(arg && arg[WinIdKey] ? arg[InstanceIdKey] : arg)),
  ].join('.');

/**
 * Properties to add to the Constructor's prototype
 * that should only do a main read once, cache the value, and
 * returned the cached value after in subsequent reads after that.
 * A setter will update the cache.
 */
export const cachedProps = (Cstr: any, propNames: string) =>
  commaSplit(propNames).map((propName) =>
    definePrototypeProperty(Cstr, propName, {
      get(this: WorkerInstance) {
        if (!hasInstanceStateValue(this, propName)) {
          setInstanceStateValue(this, propName, getter(this, [propName]));
        }
        return getInstanceStateValue(this, propName);
      },
      set(this: WorkerInstance, val) {
        if (getInstanceStateValue(this, propName) !== val) {
          setter(this, [propName], val);
        }
        setInstanceStateValue(this, propName, val);
      },
    })
  );

/**
 * Properties that always return a value, without doing a main access.
 * Same as:
 * get propName() { return propValue }
 */
export const constantProps = (Cstr: any, props: { [propName: string]: any }) =>
  Object.keys(props).map((propName) => definePrototypeValue(Cstr, propName, props[propName]));

/**
 * Known dimension properties to add to the Constructor's prototype
 * that when called they'll check the dimension cache, and if it's
 * not in the cache then to get all dimensions in one call and
 * set its cache. The dimension cache is cleared when another method is called.
 */
export const cachedDimensionProps = (Cstr: any) =>
  getterDimensionPropNames.map((propName) =>
    definePrototypeProperty(Cstr, propName, {
      get(this: WorkerNode) {
        const dimension = cachedDimensions.get(getInstanceCacheKey(this, propName));
        if (typeof dimension === 'number') {
          return dimension;
        }

        const groupedDimensions: { [key: string]: number } = getter(
          this,
          [propName],
          getterDimensionPropNames
        );

        if (groupedDimensions && typeof groupedDimensions === 'object') {
          Object.entries(groupedDimensions).map(([dimensionPropName, value]) =>
            cachedDimensions.set(getInstanceCacheKey(this, dimensionPropName), value)
          );

          return groupedDimensions[propName];
        }
        return groupedDimensions;
      },
    })
  );

/**
 * Methods that return dimensions that can be cached, similar to cachedDimensionProps()
 */
export const cachedDimensionMethods = (Cstr: any, dimensionMethodNames: string[]) =>
  dimensionMethodNames.map((methodName) => {
    Cstr.prototype[methodName] = function (...args: any[]) {
      let cacheKey = getInstanceCacheKey(this, methodName, args);
      let dimensions = cachedDimensions.get(cacheKey);
      if (!dimensions) {
        dimensions = callMethod(this, [methodName], args);
        cachedDimensions.set(cacheKey, dimensions);
      }
      return dimensions;
    };
  });
