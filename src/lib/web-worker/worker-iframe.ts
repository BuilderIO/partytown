import { createEnvironment, getEnv } from './worker-environment';
import { environments, InstanceIdKey, webWorkerCtx, WinIdKey } from './worker-constants';
import { getter, sendToMain, setter } from './worker-proxy';
import { getPartytownScript, resolveUrl } from './worker-exec';
import { HTMLSrcElementDescriptorMap } from './worker-src-element';
import type { Node } from './worker-node';
import { SCRIPT_TYPE } from '../utils';
import { setInstanceStateValue } from './worker-state';
import { StateProp, WorkerMessageType } from '../types';
import type { WorkerInstance } from './worker-instance';

export const HTMLIFrameDescriptorMap: PropertyDescriptorMap & ThisType<Node> = {
  contentDocument: {
    get() {
      return getIframeEnv(this).$document$;
    },
  },

  contentWindow: {
    get() {
      return getIframeEnv(this).$window$;
    },
  },

  src: {
    get() {
      let src = getIframeEnv(this).$location$.href;
      if (src.startsWith('about')) {
        src = '';
      }
      return src;
    },
    set(src: string) {
      let xhr = new XMLHttpRequest();
      let xhrStatus: number;
      let env = getIframeEnv(this);

      env.$location$.href = src = resolveUrl(getEnv(this), src);
      env.$isLoading$ = 1;

      setInstanceStateValue(this, StateProp.loadErrorStatus, undefined);

      xhr.open('GET', src, false);
      xhr.send();
      xhrStatus = xhr.status;

      if (xhrStatus > 199 && xhrStatus < 300) {
        setter(
          this,
          ['srcdoc'],
          `<base href="${src}">` +
            xhr.responseText
              .replace(/<script>/g, `<script type="${SCRIPT_TYPE}">`)
              .replace(/<script /g, `<script type="${SCRIPT_TYPE}" `)
              .replace(/text\/javascript/g, SCRIPT_TYPE) +
            getPartytownScript()
        );

        sendToMain(true);
        webWorkerCtx.$postMessage$([WorkerMessageType.InitializeNextScript, env.$winId$]);
      } else {
        setInstanceStateValue(this, StateProp.loadErrorStatus, xhrStatus);
        env.$isLoading$ = 0;
      }
    },
  },

  ...HTMLSrcElementDescriptorMap,
};

const getIframeEnv = (iframe: WorkerInstance) => {
  // the winId of an iframe's contentWindow is the same
  // as the instanceId of the containing iframe element
  const $winId$ = iframe[InstanceIdKey];

  if (!environments[$winId$]) {
    createEnvironment(
      {
        $winId$,
        // iframe contentWindow parent winId is the iframe element's winId
        $parentWinId$: iframe[WinIdKey],
        $url$: getter(iframe, ['src']) || 'about:blank',
      },
      true
    );
  }

  return environments[$winId$];
};
