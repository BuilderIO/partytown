import { constructInstance } from './worker-constructors';
import { getInstanceStateValue, setInstanceStateValue } from './worker-state';
import { getter, setter } from './worker-proxy';
import { HTMLSrcElement } from './worker-element';
import { ImmediateSettersKey, InstanceIdKey, webWorkerCtx, WinIdKey } from './worker-constants';
import { InterfaceType, PlatformInstanceId, StateProp } from '../types';
import { Location } from './worker-location';
import { resolveUrl, updateIframeContent } from './worker-exec';
import { serializeForMain } from './worker-serialization';
import { WorkerProxy } from './worker-instance';

export class HTMLIFrameElement extends HTMLSrcElement {
  get contentDocument() {
    return this.contentWindow!.document;
  }

  get contentWindow() {
    let win: Window;
    let winId = getInstanceStateValue(this, StateProp.partyWinId);
    if (!winId) {
      winId = getter(this, ['_ptId']);
      setInstanceStateValue(this, StateProp.partyWinId, winId);
    }
    win = new Window(InterfaceType.Window, PlatformInstanceId.window, winId);
    win.location = this.src;
    return win;
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
          this[ImmediateSettersKey]!.push([
            ['srcdoc'],
            serializeForMain(this[WinIdKey], this[InstanceIdKey], iframeContent),
          ]);
        } else {
          setter(this, ['srcdoc'], iframeContent);
        }
      }
    }
  }
}

export class Window extends WorkerProxy {
  get document() {
    return constructInstance(InterfaceType.Document, PlatformInstanceId.document, this[WinIdKey]);
  }

  get location(): Location {
    let location = getInstanceStateValue<Location>(this, StateProp.url);
    if (!location) {
      setInstanceStateValue(this, StateProp.url, (location = new Location('about:blank')));
    }
    return location;
  }
  set location(url: any) {
    this.location.href = !url || url === '' ? 'about:blank' : url;
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
