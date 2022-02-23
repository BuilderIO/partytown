import { callMethod, setter } from './worker-proxy';
import { CallType, NodeName, StateProp, WorkerNode } from '../types';
import { createEnvironment, getEnv, getEnvWindow } from './worker-environment';
import {
  cachedProps,
  cachedTreeProps,
  definePrototypeNodeType,
  getOrCreateNodeInstance,
} from './worker-constructors';
import { definePrototypePropertyDescriptor, randomId, SCRIPT_TYPE } from '../utils';
import { elementStructurePropNames, IS_TAG_REG, WinIdKey } from './worker-constants';
import { getInstanceStateValue } from './worker-state';
import { getPartytownScript } from './worker-exec';
import { isScriptJsType } from './worker-script';

export const patchDocument = (WorkerDocument: any) => {
  const DocumentDescriptorMap: PropertyDescriptorMap & ThisType<WorkerNode> = {
    body: {
      get() {
        return getEnv(this).$body$;
      },
    },

    createElement: {
      value(tagName: string) {
        tagName = tagName.toUpperCase();
        if (!IS_TAG_REG.test(tagName)) {
          throw tagName + ' not valid';
        }

        const winId = this[WinIdKey];
        const instanceId = randomId();
        const elm = getOrCreateNodeInstance(winId, instanceId, tagName);

        callMethod(this, ['createElement'], [tagName], CallType.NonBlocking, instanceId);

        if (tagName === NodeName.IFrame) {
          // an iframe element's instanceId is the same as its contentWindow's winId
          // and the contentWindow's parentWinId is the iframe element's winId
          const env = createEnvironment(
            {
              $winId$: instanceId,
              $parentWinId$: winId,
              $url$: 'about:blank',
            },
            true
          );

          // iframe's get the native fetch
          // common for analytics to use "const fetch = iframe.contentWindow.fetch"
          // so they don't go through a patched fetch()
          env.$window$.fetch = fetch;

          setter(elm, ['srcdoc'], getPartytownScript());
        } else if (tagName === NodeName.Script) {
          const scriptType = getInstanceStateValue(elm, StateProp.type);
          if (isScriptJsType(scriptType)) {
            setter(elm, ['type'], SCRIPT_TYPE);
          }
        }

        return elm;
      },
    },

    createElementNS: {
      value(namespace: string, tagName: string) {
        tagName = tagName.toLowerCase();

        const winId = this[WinIdKey];
        const instanceId = randomId();
        const nsElm = getOrCreateNodeInstance(winId, instanceId, tagName, namespace);

        callMethod(
          this,
          ['createElementNS'],
          [namespace, tagName],
          CallType.NonBlocking,
          instanceId
        );

        return nsElm;
      },
    },

    createTextNode: {
      value(text: string) {
        const winId = this[WinIdKey];
        const instanceId = randomId();
        const textNode = getOrCreateNodeInstance(winId, instanceId, NodeName.Text);

        callMethod(this, ['createTextNode'], [text], CallType.NonBlocking, instanceId);

        return textNode;
      },
    },

    createEvent: {
      value: (type: string) => new Event(type),
    },

    currentScript: {
      get() {
        const winId = this[WinIdKey];
        const currentScriptId = getEnv(this).$currentScriptId$!;
        if (currentScriptId > 0) {
          return getOrCreateNodeInstance(winId, currentScriptId, NodeName.Script);
        }
        return null;
      },
    },

    defaultView: {
      get() {
        return getEnvWindow(this);
      },
    },

    documentElement: {
      get() {
        return getEnv(this).$documentElement$;
      },
    },

    getElementsByTagName: {
      value(tagName: string) {
        tagName = tagName.toUpperCase();
        if (tagName === NodeName.Body) {
          return [getEnv(this).$body$];
        } else if (tagName === NodeName.Head) {
          return [getEnv(this).$head$];
        } else {
          return callMethod(this, ['getElementsByTagName'], [tagName]);
        }
      },
    },

    head: {
      get() {
        return getEnv(this).$head$;
      },
    },

    implementation: {
      value: {
        hasFeature: () => true,
      },
    },

    location: {
      get() {
        return getEnv(this).$location$;
      },
      set(url) {
        getEnv(this).$location$.href = url + '';
      },
    },

    nodeType: {
      value: 9,
    },

    parentNode: {
      value: null,
    },

    parentElement: {
      value: null,
    },

    readyState: {
      value: 'complete',
    },
  };

  definePrototypePropertyDescriptor(WorkerDocument, DocumentDescriptorMap);

  cachedProps(WorkerDocument, 'compatMode,referrer');
};

export const patchDocumentElementChild = (WokerDocumentElementChild: any) => {
  const DocumentElementChildDescriptorMap: PropertyDescriptorMap & ThisType<WorkerNode> = {
    parentElement: {
      get() {
        return (this as any).parentNode;
      },
    },
    parentNode: {
      get() {
        return getEnv(this).$documentElement$;
      },
    },
  };
  definePrototypePropertyDescriptor(WokerDocumentElementChild, DocumentElementChildDescriptorMap);
};

export const patchHTMLHtmlElement = (WorkerHTMLHtmlElement: any) => {
  const DocumentElementDescriptorMap: PropertyDescriptorMap & ThisType<WorkerNode> = {
    parentElement: {
      value: null,
    },
    parentNode: {
      get() {
        return getEnv(this).$document$;
      },
    },
  };
  definePrototypePropertyDescriptor(WorkerHTMLHtmlElement, DocumentElementDescriptorMap);
};

export const patchDocumentFragment = (WorkerDocumentFragment: any) => {
  definePrototypeNodeType(WorkerDocumentFragment, 11);
  cachedTreeProps(WorkerDocumentFragment, elementStructurePropNames);
};
