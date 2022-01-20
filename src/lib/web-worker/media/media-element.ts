import { AudioTrackList, hasAudioTracks } from './audio-track';
import { definePrototypePropertyDescriptor, getter, InstanceIdKey, WinIdKey } from './bridge';
import { ReadyStateKey, TimeRangesKey } from './utils';
import { TimeRanges } from './time-ranges';

const HTMLMediaDescriptorMap: PropertyDescriptorMap & ThisType<any> = {
  buffered: {
    get() {
      if (!this[TimeRangesKey]) {
        this[TimeRangesKey] = new TimeRanges(this[WinIdKey], this[InstanceIdKey], ['buffered']);

        setTimeout(() => {
          this[TimeRangesKey] = undefined;
        }, 5000);
      }
      return this[TimeRangesKey];
    },
  },

  readyState: {
    get() {
      if (this[ReadyStateKey] === 4) {
        return 4;
      }
      if (typeof this[ReadyStateKey] !== 'number') {
        this[ReadyStateKey] = getter(this, ['readyState']);

        setTimeout(() => {
          this[ReadyStateKey] = undefined;
        }, 1000);
      }
      return this[ReadyStateKey];
    },
  },
};

if (hasAudioTracks) {
  HTMLMediaDescriptorMap.audioTracks = {
    get(this: any) {
      return new AudioTrackList(this);
    },
  };
}

definePrototypePropertyDescriptor(self.HTMLMediaElement, HTMLMediaDescriptorMap);
