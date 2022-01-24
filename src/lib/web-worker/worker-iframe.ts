import { environments, InstanceIdKey, webWorkerCtx } from './worker-constants';
import { getEnv } from './worker-environment';
import { getInstanceStateValue, setInstanceStateValue } from './worker-state';
import { getPartytownScript, resolveUrl } from './worker-exec';
import { HTMLSrcElementDescriptorMap } from './worker-src-element';
import type { Node } from './worker-node';
import { SCRIPT_TYPE } from '../utils';
import { sendToMain, setter } from './worker-proxy';
import { StateProp, WorkerMessageType } from '../types';

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
      return environments[this[InstanceIdKey]].$window$;
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
        setter(
          this,
          ['srcdoc'],
          `<base href="${url}">` +
            xhr.responseText
              .replace(/<script>/g, `<script type="${SCRIPT_TYPE}">`)
              .replace(/<script /g, `<script type="${SCRIPT_TYPE}" `)
              .replace(/text\/javascript/g, SCRIPT_TYPE) +
            getPartytownScript()
        );

        sendToMain(true);
        webWorkerCtx.$postMessage$([WorkerMessageType.InitializeNextScript, this[InstanceIdKey]]);
      } else {
        setInstanceStateValue(this, StateProp.loadErrorStatus, xhrStatus);
      }
    },
  },

  ...HTMLSrcElementDescriptorMap,
};
