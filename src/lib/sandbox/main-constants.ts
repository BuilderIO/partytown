import type { MainAccessResponse, MainWindow, MainWindowContext } from '../types';

export const forwardMsgResolves = new Map<number, [(accessRsp: MainAccessResponse) => void, any]>();
export const mainInstanceIdByInstance = new WeakMap<any, number>();
export const mainInstances: [number, any][] = [];
export const mainInstanceRefs: { [instanceId: number]: { [key: string]: Function } } = {};
export const winCtxs = new Map<number, MainWindowContext>();
export const windows = new WeakSet<MainWindow>();
