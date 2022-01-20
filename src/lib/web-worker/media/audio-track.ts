import { callMethod, getter, InstanceIdKey, setter, WinIdKey, WorkerProxy } from './bridge';
import { CallType } from '../../types';
import { defineCstr } from './utils';
import { SourceBuffer } from './source-buffer';

export const AudioTrackList = class {
  constructor(mediaElm: any) {
    const audioTracks = 'audioTracks';
    const winId = mediaElm[WinIdKey];
    const instanceId = mediaElm[InstanceIdKey];

    const instance = {
      addEventListener(...args: any[]) {
        callMethod(
          mediaElm,
          [audioTracks, 'addEventListener'],
          args,
          CallType.NonBlockingNoSideEffect
        );
      },
      getTrackById(...args: any[]) {
        return callMethod(mediaElm, [audioTracks, 'getTrackById'], args);
      },
      get length(): number {
        return getter(mediaElm, [audioTracks, 'length']);
      },
      removeEventListener(...args: any[]) {
        callMethod(
          mediaElm,
          [audioTracks, 'removeEventListener'],
          args,
          CallType.NonBlockingNoSideEffect
        );
      },
    };

    return new Proxy(instance, {
      get(target: any, propName) {
        if (typeof propName === 'number') {
          return new AudioTrack(winId, instanceId, [audioTracks, propName]);
        }
        return target[propName];
      },
    }) as any;
  }
};

const AudioTrack = class extends WorkerProxy {
  get enabled() {
    return getter(this, ['enabled']);
  }
  set enabled(value: any) {
    setter(this, ['enabled'], value);
  }

  get id() {
    return getter(this, ['id']);
  }

  get kind() {
    return getter(this, ['kind']);
  }

  get label() {
    return getter(this, ['label']);
  }

  get language() {
    return getter(this, ['language']);
  }

  get sourceBuffer() {
    return new SourceBuffer(this);
  }
};

export const hasAudioTracks = 'audioTracks' in (self.HTMLMediaElement.prototype as any);
if (hasAudioTracks) {
  // not all browsers have audioTracks, only add if it's found
  defineCstr('AudioTrackList', AudioTrackList);
  defineCstr('AudioTrack', AudioTrack);
}
