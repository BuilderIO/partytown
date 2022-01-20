import {
  callMethod,
  getter,
  InstanceIdKey,
  setter,
  WinIdKey,
  WorkerEventTargetProxy,
} from './bridge';
import { CallType } from '../../types';
import {
  defineCstr,
  EMPTY_ARRAY,
  MediaSourceKey,
  SourceBuffersKey,
  SourceBufferTasksKey,
} from './utils';
import { TimeRanges } from './time-ranges';

export class SourceBufferList extends Array {
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

export class SourceBuffer extends WorkerEventTargetProxy {
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

export const getSourceBufferIndex = (sourceBuffer: SourceBuffer) => {
  if (sourceBuffer) {
    const mediaSource = sourceBuffer[MediaSourceKey];
    const sourceBufferList: SourceBufferList = mediaSource[SourceBuffersKey];
    return sourceBufferList.indexOf(sourceBuffer);
  }
  return -1;
};

defineCstr('SourceBufferList', SourceBufferList);
defineCstr('SourceBuffer', SourceBuffer);

type SourceBufferTask = ['appendBuffer', any[], any] | ['remove', any[]];
