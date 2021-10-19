import type { MainWindow, MainWindowContext, WinId } from '../types';

export const mainRefs = new Map<number, Function>();
export const windowIds = new WeakMap<MainWindow, number>();
export const winCtxs: { [winId: WinId]: MainWindowContext | undefined } = {};
