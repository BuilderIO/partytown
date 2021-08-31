import type { WebWorkerContext } from '../types';

export const InstanceIdKey = Symbol();
export const PrivateValues = Symbol();
export const ProxyKey = Symbol();
export const srcUrls = new Map<number, string>();
export const webWorkerCtx: WebWorkerContext = {} as any;
