import type { MediaSelf } from '../../types';

export const [
  getter,
  setter,
  callMethod,
  constructGlobal,
  definePrototypePropertyDescriptor,
  randomId,
  WinIdKey,
  InstanceIdKey,
  ApplyPathKey,
] = self.$bridgeToMedia$!;

delete self.$bridgeToMedia$;

declare const self: MediaSelf;
