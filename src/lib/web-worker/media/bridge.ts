import type { MediaSelf } from '../../types';

export const [
  getter,
  setter,
  callMethod,
  constructGlobal,
  definePrototypePropertyDescriptor,
  randomId,
  WorkerProxy,
  WorkerEventTargetProxy,
  WinIdKey,
  InstanceIdKey,
  ApplyPathKey,
] = self.ptm!;

declare const self: MediaSelf;
