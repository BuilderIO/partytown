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
import type { MediaSelf } from '../types';
import { VERSION } from '../build-modules/version';

export const getInitWindowMedia = () => {
  if (!webWorkerCtx.$initWindowMedia$) {
    // assign functions the lazy loaded code will need
    // partytown media script will load from self.ptb
    self.$bridgeToMedia$ = [
      getter,
      setter,
      callMethod,
      constructGlobal,
      definePrototypePropertyDescriptor,
      randomId,
      WinIdKey,
      InstanceIdKey,
      ApplyPathKey,
    ];

    // sync load partytown-media, which will set self.ptm
    // to Window media constructors, like Audio and MediaSource
    webWorkerCtx.$importScripts$(partytownLibUrl('partytown-media.js?v=' + VERSION));

    // keep reference to the loaded media constructors, like MediaSource
    webWorkerCtx.$initWindowMedia$ = self.$bridgeFromMedia$;
    delete self.$bridgeFromMedia$;
  }

  // get initialize Window media fn
  return webWorkerCtx.$initWindowMedia$!;
};

export const htmlMedia = commaSplit('AUDIO,CANVAS,VIDEO');

export const windowMediaConstructors = commaSplit('Audio,MediaSource');

declare const self: MediaSelf;
