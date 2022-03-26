import { createEnvironment } from './worker-environment';
import { definePrototypePropertyDescriptor, SCRIPT_TYPE } from '../utils';
import {
  ABOUT_BLANK,
  environments,
  InstanceIdKey,
  webWorkerCtx,
  WinIdKey,
} from './worker-constants';
import { getPartytownScript, resolveUrl } from './worker-exec';
import { getter, sendToMain, setter } from './worker-proxy';
import { HTMLSrcElementDescriptorMap } from './worker-src-element';
import { setInstanceStateValue } from './worker-state';
import {
  StateProp,
  WebWorkerEnvironment,
  WorkerInstance,
  WorkerMessageType,
  WorkerNode,
} from '../types';

export const patchHTMLIFrameElement = (WorkerHTMLIFrameElement: any, env: WebWorkerEnvironment) => {
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
        console.log('iframe get src');
        let src = getIframeEnv(this).$location$.href;
        return src.startsWith('about:') ? '' : src;
      },
      set(src: string) {
        if (!src.startsWith('about:')) {
          console.log('iframe set src', 1);
          let xhr = new XMLHttpRequest();
          let xhrStatus: number;
          let env = getIframeEnv(this);

          console.log('iframe set src', 2);
          env.$location$.href = src = resolveUrl(env, src);
          env.$isLoading$ = 1;

          console.log('iframe set src', 3);
          setInstanceStateValue(this, StateProp.loadErrorStatus, undefined);

          console.log('iframe set src', 4);
          xhr.open('GET', src, false);
          xhr.send();
          xhrStatus = xhr.status;

          console.log('iframe set src', 5);
          if (xhrStatus > 199 && xhrStatus < 300) {
            console.log('iframe set src', 6);
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
            console.log('iframe set src', 7);
            sendToMain(true);
            console.log('iframe set src', 8);
            webWorkerCtx.$postMessage$([WorkerMessageType.InitializeNextScript, env.$winId$]);
            console.log('iframe set src', 9);
          } else {
            console.log('iframe set src', 10);
            setInstanceStateValue(this, StateProp.loadErrorStatus, xhrStatus);
            env.$isLoading$ = 0;
          }
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
        $url$: getter(iframe, ['src']) || ABOUT_BLANK,
      },
      true
    );
  }

  return environments[$winId$];
};
