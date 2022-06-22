import { definePrototypePropertyDescriptor, SCRIPT_TYPE } from '../utils';
import { getInstanceStateValue, setInstanceStateValue } from './worker-state';
import { getter, setter } from './worker-proxy';
import { HTMLSrcElementDescriptorMap } from './worker-src-element';
import { resolveUrl } from './worker-exec';
import { StateProp, WebWorkerEnvironment, WorkerNode } from '../types';
import { webWorkerCtx } from './worker-constants';

export const patchHTMLScriptElement = (WorkerHTMLScriptElement: any, env: WebWorkerEnvironment) => {
  const HTMLScriptDescriptorMap: PropertyDescriptorMap & ThisType<WorkerNode> = {
    innerHTML: innerHTMLDescriptor,
    innerText: innerHTMLDescriptor,

    src: {
      get() {
        return getInstanceStateValue<string>(this, StateProp.url) || '';
      },
      set(url: string) {
        const orgUrl = resolveUrl(env, url, null);
        const config = webWorkerCtx.$config$;
        url = resolveUrl(env, url, 'script');
        setInstanceStateValue(this, StateProp.url, url);
        setter(this, ['src'], url);

        if (orgUrl !== url) {
          setter(this, ['dataset', 'ptsrc'], orgUrl);
        }

        if (this.type && config.loadScriptsOnMainThread) {
          const shouldExecuteScriptViaMainThread = config.loadScriptsOnMainThread.some(scriptUrl => 
            scriptUrl === url
          )

          if (shouldExecuteScriptViaMainThread) {
            setter(this, ['type'], 'text/javascript');
          }
        }
      },
    },

    textContent: innerHTMLDescriptor,

    type: {
      get() {
        return getter(this, ['type']);
      },
      set(type: string) {
        if (!isScriptJsType(type)) {
          setInstanceStateValue(this, StateProp.type, type);
          setter(this, ['type'], type);
        }
      },
    },

    ...HTMLSrcElementDescriptorMap,
  };

  definePrototypePropertyDescriptor(WorkerHTMLScriptElement, HTMLScriptDescriptorMap);
};

const innerHTMLDescriptor: PropertyDescriptor & ThisType<WorkerNode> = {
  get() {
    return getInstanceStateValue<string>(this, StateProp.innerHTML) || '';
  },
  set(scriptContent: string) {
    setInstanceStateValue(this, StateProp.innerHTML, scriptContent);
  },
};

export const isScriptJsType = (scriptType: string) =>
  !scriptType || scriptType === 'text/javascript';
