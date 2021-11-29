import type { WebWorkerEnvironment } from '../types';

export const createAudioConstructor = (env: WebWorkerEnvironment) => {
  return class Audio {
    constructor(src?: string) {
      const audio = env.$document$.createElement('audio');
      audio.src = src!;
      return audio;
    }
  };
};
