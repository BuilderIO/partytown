import type { WorkerWindow } from '../../types';

export const ContextKey = Symbol();
export const MediaSourceKey = Symbol();
export const ReadyStateKey = Symbol();
export const SourceBuffersKey = Symbol();
export const SourceBufferTasksKey = Symbol();
export const TimeRangesKey = Symbol();

export const EMPTY_ARRAY = [];

export const defineCstr = (win: WorkerWindow, cstrName: string, Cstr: any) =>
  (win[cstrName] = defineCstrName(cstrName, Cstr));

export const defineCstrName = (cstrName: string, Cstr: any) =>
  Object.defineProperty(Cstr, 'name', {
    value: cstrName,
  });

export const notImpl = (api: string) => console.warn(`${api} not implemented`);
