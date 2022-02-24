import type { ApplyPath, WorkerConstructor } from '../types';
import { cachedDimensions, InstanceDataKey } from './worker-constants';
import { defineConstructorName } from '../utils';
import { getter, setter } from './worker-proxy';
import { logDimensionCacheClearStyle } from '../log';

export const createCSSStyleDeclarationCstr = (
  win: any,
  WorkerBase: WorkerConstructor,
  cstrName: string
) => {
  win[cstrName] = defineConstructorName(
    class extends WorkerBase {
      constructor(winId: number, instanceId: number, applyPath: ApplyPath, styles: any) {
        super(winId, instanceId, applyPath, styles || {});

        return new Proxy(this, {
          get(target: any, propName) {
            if (target[propName]) {
              return target[propName];
            }
            if (
              !target[propName] &&
              typeof propName === 'string' &&
              !target[InstanceDataKey][propName]
            ) {
              target[InstanceDataKey][propName] = getter(target, [propName]);
            }
            return target[InstanceDataKey][propName];
          },
          set(target: any, propName, propValue) {
            target[InstanceDataKey][propName] = propValue;
            setter(target, [propName], propValue);
            logDimensionCacheClearStyle(target, propName);
            cachedDimensions.clear();
            return true;
          },
        });
      }
      getPropertyValue(propName: string) {
        return (this as any)[InstanceDataKey][propName];
      }
      setProperty(propName: string, propValue: any) {
        (this as any)[InstanceDataKey][propName] = propValue;
      }
    },
    cstrName
  );
};
