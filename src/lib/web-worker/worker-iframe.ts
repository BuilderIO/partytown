import { constructInstance } from './worker-constructors';
import { getter, setter } from './worker-proxy';
import { getInstanceStateValue, setInstanceStateValue, WorkerInstance } from './worker-instance';
import { InterfaceType, PlatformInstanceId, StateProp } from '../types';
import { PT_SCRIPT, PT_SCRIPT_TYPE } from '../utils';
import { resolveUrl } from './worker-exec';
import { ImmediateSettersKey, webWorkerCtx, WinIdKey } from './worker-constants';
import { serializeForMain } from './worker-serialization';
import { WorkerSrcElement } from './worker-element';

export class WorkerIFrameElement extends WorkerSrcElement {
  get contentDocument() {
    return this.contentWindow!.document;
  }

  get contentWindow() {
    let winId = getInstanceStateValue(this, StateProp.partyWinId);
    if (!winId) {
      winId = getter(this, ['partyWinId']);
      setInstanceStateValue(this, StateProp.partyWinId, winId);
    }
    return new WorkerContentWindow(InterfaceType.Window, PlatformInstanceId.window, winId);
  }

  get src() {
    return getInstanceStateValue(this, StateProp.url) || '';
  }
  set src(url: string) {
    let xhr = new XMLHttpRequest();
    let iframeContent: string;
    let isSuccessfulLoad: boolean;

    url = resolveUrl(url) + '';
    if (this.src !== url) {
      setInstanceStateValue(this, StateProp.url, url);

      xhr.open('GET', url, false);
      xhr.send();

      isSuccessfulLoad = xhr.status > 199 && xhr.status < 300;
      setInstanceStateValue(this, StateProp.isSuccessfulLoad, isSuccessfulLoad);

      if (isSuccessfulLoad) {
        iframeContent = updateIframeContent(url, xhr.responseText);
        if (this[ImmediateSettersKey]) {
          this[ImmediateSettersKey]!.push([['srcdoc'], serializeForMain(iframeContent)]);
        } else {
          setter(this, ['srcdoc'], iframeContent);
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
