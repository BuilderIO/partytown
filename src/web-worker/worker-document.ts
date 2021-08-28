import { callMethod, getter, setter } from './worker-proxy';
import { createElement, createScript, WorkerElement } from './worker-node';
import { InterfaceType, PlatformApiId } from '../types';
import { logWorkerGetter, logWorkerSetter, toLower } from '../utils';
import { PrivateValues, webWorkerCtx } from './worker-constants';

export class WorkerDocument extends WorkerElement {
  [PrivateValues]: {
    BODY?: WorkerElement;
    HEAD?: WorkerElement;
    HTML?: WorkerElement;
    $url$?: string;
  };

  get body() {
    return getElementProp(this, PlatformApiId.body, 'BODY');
  }

  get cookie() {
    logWorkerGetter(this, ['cookie'], webWorkerCtx.$documentCookie$, true);
    return webWorkerCtx.$documentCookie$;
  }
  set cookie(cookie: string) {
    setter(this, ['cookie'], (webWorkerCtx.$documentCookie$ = cookie));
  }

  createElement(tagName: string) {
    return createElement(this, tagName, []);
  }

  get compatMode() {
    return webWorkerCtx.$documentCompatMode$;
  }

  get createEventObject() {
    // common check we can just avoid
    return undefined;
  }

  get currentScript() {
    const currentScriptInstanceId = webWorkerCtx.$currentScript$;
    if (currentScriptInstanceId) {
      return createScript(currentScriptInstanceId);
    }
    return null;
  }

  get defaultView() {
    return self;
  }

  get documentElement() {
    return getElementProp(this, PlatformApiId.documentElement, 'HTML');
  }

  getElementsByTagName(tagName: string) {
    if (toLower(tagName) === 'script') {
      // always return just the first script
      return [createScript(webWorkerCtx.$firstScriptId$)];
    }
    return callMethod(this, ['getElementsByTagName'], [tagName]);
  }

  get head() {
    return getElementProp(this, PlatformApiId.head, 'HEAD');
  }

  get location() {
    logWorkerGetter(this, ['location'], webWorkerCtx.$location$, true);
    return webWorkerCtx.$location$;
  }
  set location(url: any) {
    logWorkerSetter(this, ['location'], url);
    webWorkerCtx.$location$!.href = url + '';
  }

  get ownerDocument() {
    return null as any;
  }

  get readyState() {
    if (webWorkerCtx.$documentReadyState$ !== 'complete') {
      webWorkerCtx.$documentReadyState$ = getter(this, ['readyState']);
    } else {
      logWorkerGetter(this, ['readyState'], webWorkerCtx.$documentReadyState$, true);
    }
    return webWorkerCtx.$documentReadyState$;
  }

  get referrer() {
    logWorkerGetter(this, ['referrer'], webWorkerCtx.$documentReferrer$, true);
    return webWorkerCtx.$documentReferrer$;
  }

  get title() {
    logWorkerGetter(this, ['title'], webWorkerCtx.$documentTitle$, true);
    return webWorkerCtx.$documentTitle$;
  }
  set title(value: string) {
    setter(this, ['title'], (webWorkerCtx.$documentTitle$ = value));
  }
}

const getElementProp = (
  doc: WorkerDocument,
  instanceId: number,
  tagName: 'BODY' | 'HEAD' | 'HTML'
) => {
  const privateValues = doc[PrivateValues];
  if (!privateValues[tagName]) {
    privateValues[tagName] = new WorkerElement({
      $interfaceType$: InterfaceType.Element,
      $instanceId$: instanceId,
      $data$: tagName,
    });
  }
  return privateValues[tagName];
};
