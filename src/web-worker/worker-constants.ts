import type { InitWebWorkerContext, WebWorkerContext } from '../types';

export const InstanceIdKey = Symbol();
export const NodeNameKey = Symbol();
export const NodeTypeKey = Symbol();
export const PrivateValues = Symbol();
export const ProxyKey = Symbol();

export const webWorkerCtx: WebWorkerContext = {} as any;
