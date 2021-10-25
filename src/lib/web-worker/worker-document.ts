import { callMethod, setter } from './worker-proxy';
import { constantProps, readonlyCachedProps } from './worker-state';
import { constructInstance, getElementConstructor } from './worker-constructors';
import { createEnvironment, getEnv, getEnvWindow } from './worker-environment';
import { defineConstructorName, randomId, SCRIPT_TYPE } from '../utils';
import { getPartytownScript } from './worker-exec';
import { HTMLElement } from './worker-element';
import { InterfaceType, NodeName } from '../types';
import { WinIdKey } from './worker-constants';

export class HTMLDocument extends HTMLElement {
  get body() {
    return getEnv(this).$body$;
  }

  createElement(tagName: string) {
    tagName = tagName.toUpperCase();

    const winId = this[WinIdKey];
    const instanceId = randomId();
    const ElementCstr = getElementConstructor(tagName);
    const elm = new ElementCstr(InterfaceType.Element, instanceId, winId, tagName);

    callMethod(this, ['createElement'], [tagName], instanceId);

    if (tagName === NodeName.IFrame) {
      // an iframe element's instanceId is the same as its contentWindow's winId
      // and the contentWindow's parentWinId is the iframe element's winId
      createEnvironment({ $winId$: instanceId, $parentWinId$: winId, $url$: 'about:blank' });

      setter(elm, ['srcdoc'], getPartytownScript());
    } else if (tagName === NodeName.Script) {
      setter(elm, ['type'], SCRIPT_TYPE);
    }

    return elm;
  }

  createElementNS(ns: string, tagName: string) {
    tagName = tagName.toUpperCase();
    const winId = this[WinIdKey];
    const instanceId = randomId();
    const elm = constructInstance(InterfaceType.Element, instanceId, winId, tagName);

    callMethod(this, ['createElementNS'], [ns, tagName], instanceId);

    return elm;
  }

  createTextNode(text: string) {
    const winId = this[WinIdKey];
    const instanceId = randomId();

    const node = constructInstance(InterfaceType.TextNode, instanceId, winId);

    callMethod(this, ['createTextNode'], [text], instanceId);

    return node;
  }

  createEvent(type: string) {
    return new Event(type);
  }

  get currentScript() {
    const currentScriptId = getEnv(this).$currentScriptId$!;
    if (currentScriptId > 0) {
      return constructInstance(
        InterfaceType.Element,
        currentScriptId,
        this[WinIdKey],
        NodeName.Script
      );
    }
    return null;
  }

  get defaultView() {
    return getEnvWindow(this);
  }

  get documentElement() {
    return getEnv(this).$documentElement$;
  }

  getElementsByTagName(tagName: string) {
    tagName = tagName.toUpperCase();
    if (tagName === NodeName.Body) {
      return [this.body];
    } else if (tagName === NodeName.Head) {
      return [this.head];
    } else {
      return callMethod(this, ['getElementsByTagName'], [tagName]);
    }
  }

  get head() {
    return getEnv(this).$head$;
  }

  get implementation() {
    return {
      hasFeature: () => true,
    };
  }

  get location() {
    return getEnv(this).$location$;
  }
  set location(url: any) {
    getEnv(this).$location$.href = url + '';
  }
}

readonlyCachedProps(HTMLDocument, 'referrer,title');

constantProps(HTMLDocument, {
  compatMode: 'CSS1Compat',
  createEventObject: undefined,
  parentElement: null,
  parentNode: null,
  readyState: 'complete',
});

export const constructDocumentElementChild = (
  winId: number,
  instanceId: number,
  titleCaseNodeName: 'Body' | 'Head',
  documentElement: HTMLElement
) => {
  const HtmlCstr: typeof HTMLElement = defineConstructorName(
    class extends HTMLElement {
      get parentElement() {
        return documentElement;
      }
      get parentNode() {
        return documentElement;
      }
    },
    `HTML${titleCaseNodeName}Element`
  );
  return new HtmlCstr(InterfaceType.Element, instanceId, winId, titleCaseNodeName.toUpperCase());
};
