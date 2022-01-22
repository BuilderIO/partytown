import type { ApplyPath } from '../types';
import { cachedDimensions } from './worker-constants';
import { logDimensionCacheClearStyle } from '../log';
import { setter } from './worker-proxy';
import { WorkerInstance } from './worker-instance';

export class CSSStyleDeclaration extends WorkerInstance {
  constructor(winId: number, instanceId: number, applyPath: ApplyPath, styles: any) {
    super(winId, instanceId, applyPath);

    Object.assign(this, styles);

    return new Proxy(this, {
      get(target, propName) {
        return (target as any)[propName];
      },
      set(target, propName, propValue) {
        setter(target, [propName], propValue);
        logDimensionCacheClearStyle(target, propName);
        cachedDimensions.clear();
        return true;
      },
    });
  }

  getPropertyValue(propName: string) {
    return (this as any)[propName];
  }

  setProperty(propName: string, propValue: any) {
    (this as any)[propName] = propValue;
  }
}
