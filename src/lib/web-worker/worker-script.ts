import { callMethod, getter, setter } from './worker-proxy';
import { getEnv } from './worker-environment';
import { getInstanceStateValue, setInstanceStateValue } from './worker-state';
import { HTMLSrcElementDescriptorMap } from './worker-src-element';
import type { Node } from './worker-node';
import { resolveUrl } from './worker-exec';
import { StateProp } from '../types';

const innerHTMLDescriptor: PropertyDescriptor & ThisType<Node> = {
  get() {
    return getInstanceStateValue<string>(this, StateProp.innerHTML) || '';
  },
  set(scriptContent: string) {
    setInstanceStateValue(this, StateProp.innerHTML, scriptContent);
  },
};

export const HTMLScriptDescriptorMap: PropertyDescriptorMap & ThisType<Node> = {
  innerHTML: innerHTMLDescriptor,
  innerText: innerHTMLDescriptor,

  src: {
    get() {
      return getInstanceStateValue<string>(this, StateProp.url) || '';
    },
    set(url: string) {
      const env = getEnv(this);
      const orgUrl = resolveUrl(env, url, true);
      url = resolveUrl(env, url);
      setInstanceStateValue(this, StateProp.url, url);
      setter(this, ['src'], url);
      if (orgUrl !== url) {
        setter(this, ['dataset', 'ptsrc'], orgUrl);
      }
    },
  },

  getAttribute: {
    value(attrName: string) {
      if (attrName === 'src') {
        return (this as any).src;
      }
      return callMethod(this, ['getAttribute'], [attrName]);
    },
  },

  setAttribute: {
    value(attrName: string, attrValue: any) {
      if (attrName === 'src') {
        (this as any).src = attrValue;
      } else {
        callMethod(this, ['setAttribute'], [attrName, attrValue]);
      }
    },
  },

  textContent: innerHTMLDescriptor,

  type: {
    get() {
      return getter(this, ['type']);
    },
    set(type: string) {
      if (type !== 'text/javascript') {
        setter(this, ['type'], type);
      }
    },
  },

  ...HTMLSrcElementDescriptorMap,
};
