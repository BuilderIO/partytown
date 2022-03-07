import { commaSplit } from './worker-constants';
import { definePrototypePropertyDescriptor } from '../utils';
import { getInstanceStateValue, setInstanceStateValue } from './worker-state';
import { getter, setter } from './worker-proxy';
import { resolveToUrl } from './worker-exec';
import { StateProp, WebWorkerEnvironment, WorkerNode } from '../types';

export const patchHTMLAnchorElement = (WorkerHTMLAnchorElement: any, env: WebWorkerEnvironment) => {
  const HTMLAnchorDescriptorMap: PropertyDescriptorMap & ThisType<WorkerNode> = {};

  commaSplit('hash,host,hostname,href,origin,pathname,port,protocol,search').map((anchorProp) => {
    HTMLAnchorDescriptorMap[anchorProp] = {
      get(this: any) {
        let value = getInstanceStateValue(this, StateProp.url);
        let href: string;

        if (typeof value !== 'string') {
          href = getter(this, ['href']);
          setInstanceStateValue(this, StateProp.url, href);
          value = (new URL(href) as any)[anchorProp];
        }

        return (resolveToUrl(env, value) as any)[anchorProp];
      },

      set(this: any, value) {
        let href = getInstanceStateValue(this, StateProp.url);
        let url: any = resolveToUrl(env, href);

        url[anchorProp] = new URL(value + '', url.href);

        setInstanceStateValue(this, StateProp.url, url.href);

        setter(this, ['href'], url.href);
      },
    };
  });

  definePrototypePropertyDescriptor(WorkerHTMLAnchorElement, HTMLAnchorDescriptorMap);
};
