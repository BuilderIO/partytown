import type { WebWorkerContext } from '../types';

export const WinIdKey = Symbol();
export const InstanceIdKey = Symbol();
export const InterfaceTypeKey = Symbol();
export const NodeNameKey = Symbol();
export const PrivateValues = Symbol();
export const ProxyKey = Symbol();
export const srcUrls = new Map<number, string>();
export const webWorkerCtx: WebWorkerContext = {} as any;
