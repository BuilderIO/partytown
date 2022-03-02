import type { InstanceId, MainWindow, MainWindowContext, WinId } from '../types';

export const InstanceIdKey = /*#__PURE__*/ Symbol();
export const CreatedKey = /*#__PURE__*/ Symbol();
export const instances = /*#__PURE__*/ new Map<InstanceId, any>();
export const mainRefs = /*#__PURE__*/ new Map<InstanceId, Function>();
export const winCtxs: { [winId: WinId]: MainWindowContext | undefined } = {};
export const windowIds = /*#__PURE__*/ new WeakMap<MainWindow, WinId>();
