import { createEnvironment, getEnv } from './worker-environment';
import { definePrototypePropertyDescriptor, SCRIPT_TYPE } from '../utils';
import { environments, InstanceIdKey, webWorkerCtx, WinIdKey } from './worker-constants';
import { getPartytownScript, resolveUrl } from './worker-exec';
import { getter, sendToMain, setter } from './worker-proxy';
import { HTMLSrcElementDescriptorMap } from './worker-src-element';
import { setInstanceStateValue } from './worker-state';
import { StateProp, WorkerInstance, WorkerMessageType, WorkerNode } from '../types';

export const patchHTMLIFrameElement = (WorkerHTMLIFrameElement: any) => {
  const HTMLIFrameDescriptorMap: PropertyDescriptorMap & ThisType<WorkerNode> = {
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

  definePrototypePropertyDescriptor(WorkerHTMLIFrameElement, HTMLIFrameDescriptorMap);
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
