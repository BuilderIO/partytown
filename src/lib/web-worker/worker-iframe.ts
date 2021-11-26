import { environments, InstanceIdKey } from './worker-constants';
import { getEnv } from './worker-environment';
import { getInstanceStateValue, setInstanceStateValue } from './worker-state';
import { HTMLSrcElementDescriptorMap } from './worker-src-element';
import type { Node } from './worker-node';
import { resolveUrl, updateIframeContent } from './worker-exec';
import { setter } from './worker-proxy';
import { StateProp } from '../types';

export const HTMLIFrameDescriptorMap: PropertyDescriptorMap & ThisType<Node> = {
  contentDocument: {
    get() {
      return (this as any).contentWindow.document;
    },
  },

  contentWindow: {
    get() {
      // the winId of an iframe's window is the same
      // as the instanceId of the containing iframe element
      const iframeContentWinId = this[InstanceIdKey];
      const env = environments[iframeContentWinId];
      return env.$window$;
    },
  },

  src: {
    get() {
      return getInstanceStateValue(this, StateProp.url) || '';
    },
    set(url: string) {
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
    },
  },

  ...HTMLSrcElementDescriptorMap,
};
