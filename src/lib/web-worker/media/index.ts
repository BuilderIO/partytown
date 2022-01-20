import { createAudioConstructor } from './audio';
import './media-element';
import { createMediaSourceConstructor } from './media-source';
import './canvas/index';
import type { InitLazyMediaConstructors } from '../../types';

const MediaCstrs: InitLazyMediaConstructors = {
  Audio: createAudioConstructor,
  MediaSource: createMediaSourceConstructor,
};

(self as any).ptm = MediaCstrs;
