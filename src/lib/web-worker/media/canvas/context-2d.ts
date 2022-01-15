import { ApplyPathKey, callMethod, InstanceIdKey, randomId, setter, WinIdKey } from '../bridge';
import { CallType } from '../../../types';
import { defineCstr, notImpl } from '../utils';
import type { WorkerProxy } from '../../worker-proxy-constructor';

export const createContext2D = (
  canvasInstance: WorkerProxy,
  contextType: string,
  contextAttributes: any
) => {
  // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D

  const winId: number = (canvasInstance as any)[WinIdKey];
  const ctxInstanceId = randomId();
  const ctxInstance = { [WinIdKey]: winId, [InstanceIdKey]: ctxInstanceId, [ApplyPathKey]: [] };

  const ctx = callMethod(
    canvasInstance,
    ['getContext'],
    [contextType, contextAttributes],
    CallType.Blocking,
    ctxInstanceId
  );

  const CanvasRenderingContext2D = {
    get(target: any, propName: string | symbol) {
      if (typeof propName === 'string' && propName in ctx) {
        if (typeof ctx[propName] === 'function') {
          // context method
          return (...args: any[]) => {
            if (propName.startsWith('create')) {
              // createConicGradient,createImageData,createLinearGradient,createPattern,createRadialGradient
              // getter method, remember the instance

              const instanceId = randomId();
              callMethod(ctxInstance, [propName], args, CallType.NonBlocking, instanceId);

              if (propName === 'createImageData' || propName === 'createPattern') {
                notImpl(`${propName}()`);
                return { setTransform: () => {} };
              }

              // createConicGradient,createLinearGradient,createRadialGradient
              return new CanvasGradient(winId, instanceId);
            }

            // context method
            const methodCallType = ctx2dGetterMethods.includes(propName)
              ? CallType.Blocking
              : CallType.NonBlocking;
            return callMethod(ctxInstance, [propName], args, methodCallType);
          };
        }

        // context prop getter
        return ctx[propName];
      }

      // symbol prop getter
      return target[propName];
    },

    set(target: any, propName: string | symbol, value: any) {
      if (typeof propName === 'string' && propName in ctx) {
        // context prop setter
        if (ctx[propName] !== value && typeof value !== 'function') {
          setter(ctxInstance, [propName], value);
        }
        ctx[propName] = value;
      } else {
        target[propName] = value;
      }
      return true;
    },
  };

  return new Proxy(ctx, CanvasRenderingContext2D);
};

const CanvasGradient = class {
  constructor(winId: number, instanceId: number) {
    (this as any)[WinIdKey] = winId;
    (this as any)[InstanceIdKey] = instanceId;
    (this as any)[ApplyPathKey] = [];
  }

  addColorStop(...args: any[]) {
    callMethod(this, ['addColorStop'], args, CallType.NonBlocking);
  }
};

defineCstr('CanvasGradient', CanvasGradient);
defineCstr('CanvasPattern', CanvasPattern);

const ctx2dGetterMethods =
  'getContextAttributes,getImageData,getLineDash,getTransform,isPointInPath,isPointInStroke,measureText'.split(
    ','
  );
