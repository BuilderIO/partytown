import type { WebWorkerContext } from '../types';

export const InstanceIdKey = Symbol();
export const PrivateValues = Symbol();
export const ProxyKey = Symbol();

export const webWorkerCtx: WebWorkerContext = {} as any;
