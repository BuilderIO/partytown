import type { MainWindow, MainWindowContext, WinId } from '../types';

export const instanceIds = new WeakMap<any, number>();
export const instances: [number, any][] = [];
export const mainRefs = new Map<number, Function>();
export const winCtxs: { [winId: WinId]: MainWindowContext | undefined } = {};
export const windowIds = new WeakMap<MainWindow, number>();
