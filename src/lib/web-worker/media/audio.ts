import type { InitLazyMediaConstructor, WebWorkerEnvironment } from '../../types';
import { defineCstrName } from './utils';

export const createAudioConstructor: InitLazyMediaConstructor = (env: WebWorkerEnvironment) =>
  defineCstrName(
    'HTMLAudioElement',
    class {
      constructor(src?: string) {
        const audio = env.$document$.createElement('audio');
        audio.src = src!;
        return audio;
      }
    }
  );
