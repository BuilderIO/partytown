import type { MediaSelf } from '../../types';
import { initCanvas } from './canvas';
import { initMedia } from './media';

self.$bridgeFromMedia$ = (
  WorkerBase,
  WorkerEventTargetProxy,
  env,
  win,
  windowMediaConstructors
) => {
  // initialize window environment media
  windowMediaConstructors.map((mediaCstrName) => {
    // remove bogus media constructor getters
    delete win[mediaCstrName];
  });

  initCanvas(WorkerBase, win);
  initMedia(WorkerBase, WorkerEventTargetProxy, env, win);
};

declare const self: MediaSelf;
