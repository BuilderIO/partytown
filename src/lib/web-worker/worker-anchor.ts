import { getUrl } from './worker-exec';
import type { Node } from './worker-node';
import { setInstanceStateValue } from './worker-state';
import { setter } from './worker-proxy';
import { StateProp } from '../types';

export const HTMLAnchorDescriptorMap: PropertyDescriptorMap & ThisType<Node> = {
  hash: {
    get() {
      return getUrl(this).hash;
    },
  },
  host: {
    get() {
      return getUrl(this).host;
    },
  },
  hostname: {
    get() {
      return getUrl(this).hostname;
    },
  },
  href: {
    get() {
      return getUrl(this).href;
    },
    set(href) {
      href = href + '';
      setInstanceStateValue(this, StateProp.url, href);
      setter(this, ['href'], href);
    },
  },
  origin: {
    get() {
      return getUrl(this).origin;
    },
  },
  pathname: {
    get() {
      return getUrl(this).pathname;
    },
  },
  port: {
    get() {
      return getUrl(this).port;
    },
  },
  protocol: {
    get() {
      return getUrl(this).protocol;
    },
  },
  search: {
    get() {
      return getUrl(this).search;
    },
  },
};
