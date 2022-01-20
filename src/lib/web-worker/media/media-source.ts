import {
  callMethod,
  constructGlobal,
  getter,
  randomId,
  setter,
  WorkerEventTargetProxy,
} from './bridge';
import { CallType, InitLazyMediaConstructor } from '../../types';
import { defineCstrName, EMPTY_ARRAY, SourceBuffersKey } from './utils';
import { getSourceBufferIndex, SourceBuffer, SourceBufferList } from './source-buffer';

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

const isStaticTypeSupported = new Map<string, boolean>();
