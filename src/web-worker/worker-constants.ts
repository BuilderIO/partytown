import type { InitWebWorkerContext, WebWorkerContext } from '../types';

export const InstanceIdKey = Symbol();
export const NodeNameKey = Symbol();
export const NodeTypeKey = Symbol();
export const PrivateValues = Symbol();
export const ProxyKey = Symbol();

const initWebWorkerContext: InitWebWorkerContext = {
  $msgId$: 0,
};

export const webWorkerCtx: WebWorkerContext = initWebWorkerContext as any;
