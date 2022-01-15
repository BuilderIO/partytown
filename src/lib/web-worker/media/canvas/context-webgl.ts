import { ApplyPathKey, callMethod, InstanceIdKey, randomId, setter, WinIdKey } from '../bridge';
import { CallType } from '../../../types';
import type { WorkerProxy } from '../../worker-proxy-constructor';

export const createContextWebGL = (
  canvasInstance: WorkerProxy,
  contextType: string,
  contextAttributes: any
) => {
  // https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext
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

  const WebGLRenderingContextHandler = {
    get(target: any, propName: string | symbol) {
      if (typeof propName === 'string') {
        if (typeof ctx[propName] !== 'function') {
          // context prop getter
          return ctx[propName];
        }

        // context method
        return (...args: any[]) => {
          return callMethod(ctxInstance, [propName], args, getWebGlMethodCallType(propName));
        };
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

  return new Proxy(ctx, WebGLRenderingContextHandler);
};

const ctxWebGLGetterMethods = 'checkFramebufferStatus,makeXRCompatible'.split(',');

const getWebGlMethodCallType = (methodName: string) =>
  methodName.startsWith('create') ||
  methodName.startsWith('get') ||
  methodName.startsWith('is') ||
  ctxWebGLGetterMethods.includes(methodName)
    ? CallType.Blocking
    : CallType.NonBlocking;
