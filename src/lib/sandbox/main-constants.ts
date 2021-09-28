import type { MainAccessResponse, MainWindow, MainWindowContext, RefMap } from '../types';

export const forwardMsgResolves = new Map<number, (accessRsp: MainAccessResponse) => void>();
export const mainInstanceIdByInstance = new WeakMap<any, number>();
export const mainInstances: [number, any][] = [];
export const mainInstanceRefs: { [instanceId: number]: RefMap } = {};
export const winCtxs = new Map<number, MainWindowContext>();
export const windows = new WeakSet<MainWindow>();
