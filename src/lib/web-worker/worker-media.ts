import {
  ApplyPathKey,
  commaSplit,
  InstanceIdKey,
  partytownLibUrl,
  webWorkerCtx,
  WinIdKey,
} from './worker-constants';
import { callMethod, constructGlobal, getter, setter } from './worker-proxy';
import { definePrototypePropertyDescriptor, randomId } from '../utils';
import type { InitLazyMediaConstructors, MediaSelf } from '../types';
import { WorkerEventTargetProxy, WorkerInstance } from './worker-instance';

export const lazyLoadMedia = (): InitLazyMediaConstructors => {
  if (!self.ptm) {
    // assign functions the lazy loaded code will need
    self.ptm = [
      getter,
      setter,
      callMethod,
      constructGlobal,
      definePrototypePropertyDescriptor,
      randomId,
      WorkerInstance,
      WorkerEventTargetProxy,
      WinIdKey,
      InstanceIdKey,
      ApplyPathKey,
    ];

    // sync load partytown-media, which will reset self.ptm
    // to Window media constructors, like Audio and MediaSource
    webWorkerCtx.$importScripts$(partytownLibUrl('partytown-media.js'));
  }

  // return the map of Window media constructors
  return self.ptm as any;
};

export const htmlMedia = commaSplit('AUDIO,CANVAS,VIDEO');

export const windowMediaConstructors = commaSplit('Audio,MediaSource');

declare const self: MediaSelf;
