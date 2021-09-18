import { constructInstance } from './worker-serialization';
import { getter, setter } from './worker-proxy';
import { getInstanceStateValue, setInstanceStateValue, WorkerInstance } from './worker-instance';
import {
  EventHandler,
  ExtraInstruction,
  InterfaceType,
  PlatformInstanceId,
  StateProp,
} from '../types';
import { nextTick, PT_SCRIPT, PT_SCRIPT_TYPE } from '../utils';
import { resolveUrl } from './worker-exec';
import { WorkerSrcElement } from './worker-element';
import { webWorkerCtx, WinIdKey } from './worker-constants';

export class WorkerIFrameElement extends WorkerSrcElement {
  get contentDocument() {
    return this.contentWindow!.document;
  }

  get contentWindow() {
    let winId = getInstanceStateValue(this, StateProp.partyWinId);
    if (!winId) {
      winId = getter(this, ['partyWinId'], [ExtraInstruction.WAIT_FOR_INSTANCE_MEMBER]);
      setInstanceStateValue(this, StateProp.partyWinId, winId);
    }
    return new WorkerContentWindow(InterfaceType.Window, PlatformInstanceId.window, winId);
  }

  get src() {
    return getInstanceStateValue(this, StateProp.url) || '';
  }
  set src(url: string) {
    let xhr = new XMLHttpRequest();
    let callbacks: EventHandler[];

    url = resolveUrl(url) + '';

    if (this.src !== url) {
      setInstanceStateValue(this, StateProp.url, url);

      xhr.open('GET', url, false);
      xhr.send();

      if (xhr.status > 199 && xhr.status < 300) {
        setter(this, ['srcdoc'], updateIframeContent(url, xhr.responseText));

        callbacks = getInstanceStateValue(this, StateProp.loadHandlers);
        if (callbacks) {
          nextTick(() => callbacks.forEach((onload) => onload({ type: 'load' })));
        }
      } else {
        callbacks = getInstanceStateValue(this, StateProp.errorHandlers);
        if (callbacks) {
          nextTick(() => callbacks.forEach((onerror) => onerror({ type: 'error' })));
        }
      }
    }
  }
}

export class WorkerContentWindow extends WorkerInstance {
  get document() {
    return constructInstance(InterfaceType.Document, PlatformInstanceId.document, this[WinIdKey]);
  }

  get parent() {
    return constructInstance(
      InterfaceType.Window,
      PlatformInstanceId.window,
      webWorkerCtx.$parentWinId$
    );
  }

  get self() {
    return this;
  }

  get top() {
    return top;
  }

  get window() {
    return this;
  }
}

const updateIframeContent = (url: string, html: string) =>
  `<base href="${url}">` +
  html
    .replace(/<script>/g, `<script type="${PT_SCRIPT_TYPE}">`)
    .replace(/<script /g, `<script type="${PT_SCRIPT_TYPE}" `)
    .replace(/text\/javascript/g, PT_SCRIPT_TYPE) +
  PT_SCRIPT;
