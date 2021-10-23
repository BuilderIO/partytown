import { environments, InstanceIdKey } from './worker-constants';
import { getEnv } from './worker-environment';
import { getInstanceStateValue, setInstanceStateValue } from './worker-state';
import { HTMLSrcElement } from './worker-element';
import { resolveUrl, updateIframeContent } from './worker-exec';
import { setter } from './worker-proxy';
import { StateProp } from '../types';

export class HTMLIFrameElement extends HTMLSrcElement {
  get contentDocument() {
    return this.contentWindow.document;
  }

  get contentWindow() {
    // the winId of an iframe's window is the same
    // as the instanceId of the containing iframe element
    const iframeContentWinId = this[InstanceIdKey];
    const env = environments[iframeContentWinId];
    return env.$window$;
  }

  get src() {
    return getInstanceStateValue(this, StateProp.url) || '';
  }
  set src(url: string) {
    let xhr = new XMLHttpRequest();
    let xhrStatus: number;

    url = resolveUrl(getEnv(this), url);

    setInstanceStateValue(this, StateProp.loadErrorStatus, undefined);
    setInstanceStateValue(this, StateProp.url, url);

    xhr.open('GET', url, false);
    xhr.send();
    xhrStatus = xhr.status;

    if (xhrStatus > 199 && xhrStatus < 300) {
      setter(this, ['srcdoc'], updateIframeContent(url, xhr.responseText));
    } else {
      setInstanceStateValue(this, StateProp.loadErrorStatus, xhrStatus);
    }
  }
}
