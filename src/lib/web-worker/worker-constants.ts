import type { RefHandler, StateMap, WebWorkerContext, WebWorkerEnvironment } from '../types';

export const WinIdKey = Symbol();
export const InstanceIdKey = Symbol();
export const InterfaceTypeKey = Symbol();
export const NodeNameKey = Symbol();

export const webWorkerRefsByRefId: { [refId: number]: RefHandler } = {};
export const webWorkerRefIdsByRef = new WeakMap<RefHandler, number>();

export const webWorkerState: StateMap = {};
export const webWorkerCtx: WebWorkerContext = {} as any;
export const cachedDimensions = new Map<string, any>();

export const environments: { [winId: number]: WebWorkerEnvironment } = {};
