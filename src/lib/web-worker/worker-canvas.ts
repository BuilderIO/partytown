import { HTMLElement } from './worker-element';
import { InterfaceType } from '../types';
import { proxy } from './worker-proxy';
import { serializeInstanceForMain } from './worker-serialization';

export class HTMLCanvasElement extends HTMLElement {
  getContext(...args: any[]) {
    return proxy(InterfaceType.CanvasRenderingContext2D, this, [
      'getContext',
      serializeInstanceForMain(this, args),
    ]);
  }
}
