import type { ApplyPath, WorkerConstructor } from '../types';
import { cachedDimensions } from './worker-constants';
import { logDimensionCacheClearStyle } from '../log';
import { getter, setter } from './worker-proxy';
import { defineConstructorName } from '../utils';

export const createCSSStyleDeclarationCstr = (
  win: any,
  WorkerBase: WorkerConstructor,
  cstrName: string
) => {
  win[cstrName] = defineConstructorName(
    class extends WorkerBase {
      private _: any;

      constructor(
        winId: number,
        instanceId: number,
        applyPath: ApplyPath,
        _nodeName: string,
        styles: any
      ) {
        super(winId, instanceId, applyPath);

        this._ = styles || {};

        return new Proxy(this, {
          get(target, propName) {
            if ((target as any)[propName]) {
              return (target as any)[propName];
            }
            if (!(target as any)[propName] && typeof propName === 'string' && !target._[propName]) {
              target._[propName] = getter(target, [propName]);
            }
            return target._[propName];
          },
          set(target: any, propName, propValue) {
            target._[propName] = propValue;
            setter(target, [propName], propValue);
            logDimensionCacheClearStyle(target, propName);
            cachedDimensions.clear();
            return true;
          },
        });
      }
      getPropertyValue(propName: string) {
        return this._[propName];
      }
      setProperty(propName: string, propValue: any) {
        this._[propName] = propValue;
      }
    },
    cstrName
  );
};
