import {
  callMethod,
  constructGlobal,
  getter,
  InstanceIdKey,
  randomId,
  setter,
  WinIdKey,
  WorkerEventTargetProxy,
} from './bridge';
import { CallType, InitLazyMediaConstructor } from '../../types';
import {
  defineCstr,
  defineCstrName,
  EMPTY_ARRAY,
  MediaSourceKey,
  SourceBuffersKey,
  SourceBufferTasksKey,
} from './utils';
import { TimeRanges } from './time-ranges';

/** https://developer.mozilla.org/en-US/docs/Web/API/MediaSource */
export const createMediaSourceConstructor: InitLazyMediaConstructor = (env, win, cstrName) => {
  const MediaSource = class extends WorkerEventTargetProxy {
    [SourceBuffersKey]: SourceBufferList;

    constructor() {
      super(env.$winId$, randomId());
      this[SourceBuffersKey] = new SourceBufferList(this as any);
      constructGlobal(this, cstrName, EMPTY_ARRAY);
    }

    get activeSourceBuffers() {
      return [];
    }

    addSourceBuffer(mimeType: string) {
      const sourceBuffer = new SourceBuffer(this);
      this[SourceBuffersKey].push(sourceBuffer);
      callMethod(this, ['addSourceBuffer'], [mimeType]);
      return sourceBuffer;
    }

    clearLiveSeekableRange() {
      callMethod(this, ['clearLiveSeekableRange'], EMPTY_ARRAY, CallType.NonBlocking);
    }

    get duration() {
      return getter(this, ['duration']);
    }
    set duration(value) {
      setter(this, ['duration'], value);
    }

    endOfStream(endOfStreamError?: string) {
      callMethod(this, ['endOfStream'], [endOfStreamError], CallType.NonBlockingNoSideEffect);
    }

    get readyState() {
      return getter(this, ['readyState']);
    }

    removeSourceBuffer(sourceBuffer: SourceBuffer) {
      const index = getSourceBufferIndex(sourceBuffer);
      if (index > -1) {
        this[SourceBuffersKey].splice(index, 1);
        callMethod(this, ['removeSourceBuffer'], [index], CallType.Blocking);
      }
    }

    setLiveSeekableRange(start: number, end: number) {
      callMethod(this, ['setLiveSeekableRange'], [start, end], CallType.NonBlocking);
    }

    get sourceBuffers() {
      return this[SourceBuffersKey];
    }

    static isTypeSupported(mimeType: string) {
      // https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/isTypeSupported
      if (!isStaticTypeSupported.has(mimeType)) {
        const isSupported = callMethod(win, [cstrName, 'isTypeSupported'], [mimeType]);
        isStaticTypeSupported.set(mimeType, isSupported);
      }
      return isStaticTypeSupported.get(mimeType);
    }
  };

  // patch URL.createObjectURL() so that the main thread's MediaSource instance is used
  const winURL = (win.URL = defineCstrName('URL', class extends URL {}));
  winURL.createObjectURL = (obj: any) => callMethod(win, ['URL', 'createObjectURL'], [obj]);
  winURL.revokeObjectURL = (obj: any) => callMethod(win, ['URL', 'revokeObjectURL'], [obj]);

  return defineCstrName(cstrName, MediaSource);
};

class SourceBufferList extends Array {
  [MediaSourceKey]: MediaSource;

  constructor(mediaSource: MediaSource) {
    super();
    this[MediaSourceKey] = mediaSource;
  }

  addEventListener(...args: any[]) {
    callMethod(
      this[MediaSourceKey],
      ['sourceBuffers', 'addEventListener'],
      args,
      CallType.NonBlockingNoSideEffect
    );
  }

  removeEventListener(...args: any[]) {
    callMethod(
      this[MediaSourceKey],
      ['sourceBuffers', 'removeEventListener'],
      args,
      CallType.NonBlockingNoSideEffect
    );
  }
}

class SourceBuffer extends WorkerEventTargetProxy {
  [MediaSourceKey]: any;
  [SourceBufferTasksKey]: SourceBufferTask[] = [];

  constructor(mediaSource: any) {
    super(mediaSource[WinIdKey], mediaSource[InstanceIdKey], ['sourceBuffers']);
    this[MediaSourceKey] = mediaSource;
  }

  abort() {
    const sbIndex = getSourceBufferIndex(this);
    callMethod(this, [sbIndex, 'appendWindowStart'], EMPTY_ARRAY, CallType.Blocking);
  }

  addEventListener(...args: any[]) {
    const sbIndex = getSourceBufferIndex(this);
    callMethod(this, [sbIndex, 'addEventListener'], args, CallType.NonBlockingNoSideEffect);
  }

  appendBuffer(buf: ArrayBuffer | ArrayBufferView) {
    this[SourceBufferTasksKey].push(['appendBuffer', [buf], buf]);
    drainSourceBufferQueue(this);
  }

  get appendWindowStart() {
    const sbIndex = getSourceBufferIndex(this);
    return getter(this, [sbIndex, 'appendWindowStart']);
  }
  set appendWindowStart(value: number) {
    const sbIndex = getSourceBufferIndex(this);
    setter(this, [sbIndex, 'appendWindowStart'], value);
  }

  get appendWindowEnd() {
    const sbIndex = getSourceBufferIndex(this);
    return getter(this, [sbIndex, 'appendWindowEnd']);
  }
  set appendWindowEnd(value: number) {
    const sbIndex = getSourceBufferIndex(this);
    setter(this, [sbIndex, 'appendWindowEnd'], value);
  }

  get buffered() {
    const mediaSource = this[MediaSourceKey];
    const sbIndex = getSourceBufferIndex(this);
    const timeRanges = new TimeRanges(mediaSource[WinIdKey], mediaSource[InstanceIdKey], [
      'sourceBuffers',
      sbIndex,
      'buffered',
    ]);
    return timeRanges;
  }

  changeType(mimeType: string) {
    const sbIndex = getSourceBufferIndex(this);
    callMethod(this, [sbIndex, 'changeType'], [mimeType], CallType.NonBlocking);
  }

  get mode() {
    const sbIndex = getSourceBufferIndex(this);
    return getter(this, [sbIndex, 'mode']);
  }
  set mode(value: number) {
    const sbIndex = getSourceBufferIndex(this);
    setter(this, [sbIndex, 'mode'], value);
  }

  remove(start: number, end: number) {
    this[SourceBufferTasksKey].push(['remove', [start, end]]);
    drainSourceBufferQueue(this);
  }

  removeEventListener(...args: any[]) {
    const sbIndex = getSourceBufferIndex(this);
    callMethod(this, [sbIndex, 'removeEventListener'], args, CallType.NonBlockingNoSideEffect);
  }

  get timestampOffset() {
    const sbIndex = getSourceBufferIndex(this);
    return getter(this, [sbIndex, 'timestampOffset']);
  }
  set timestampOffset(value: number) {
    const sbIndex = getSourceBufferIndex(this);
    setter(this, [sbIndex, 'timestampOffset'], value);
  }

  get updating() {
    const sbIndex = getSourceBufferIndex(this);
    return getter(this, [sbIndex, 'updating']);
  }
}

const drainSourceBufferQueue = (sourceBuffer: SourceBuffer) => {
  if (sourceBuffer[SourceBufferTasksKey].length) {
    if (!sourceBuffer.updating) {
      const task = sourceBuffer[SourceBufferTasksKey].shift();

      if (task) {
        const sbIndex = getSourceBufferIndex(sourceBuffer);
        callMethod(
          sourceBuffer,
          [sbIndex, task[0]],
          task[1],
          CallType.NonBlockingNoSideEffect,
          undefined,
          task[2]
        );
      }
    }
    setTimeout(() => drainSourceBufferQueue(sourceBuffer), 50);
  }
};

const getSourceBufferIndex = (sourceBuffer: SourceBuffer) => {
  if (sourceBuffer) {
    const mediaSource = sourceBuffer[MediaSourceKey];
    const sourceBufferList: SourceBufferList = mediaSource[SourceBuffersKey];
    return sourceBufferList.indexOf(sourceBuffer);
  }
  return -1;
};

defineCstr('SourceBufferList', SourceBufferList);
defineCstr('SourceBuffer', SourceBuffer);

const isStaticTypeSupported = new Map<string, boolean>();

type SourceBufferTask = ['appendBuffer', any[], any] | ['remove', any[]];
