import { callMethod, getter, setter } from './worker-proxy';
import { createElement, createScript, WorkerElement } from './worker-node';
import { InstanceId, InterfaceType } from '../types';
import { PrivateValues, webWorkerCtx } from './worker-constants';
import { toLower } from '../utils';

export class WorkerDocument extends WorkerElement {
  [PrivateValues]: {
    BODY?: WorkerElement;
    HEAD?: WorkerElement;
    HTML?: WorkerElement;
    $url$?: string;
  };

  get body() {
    return getElementProp(this, InstanceId.body, 'BODY');
  }

  get cookie() {
    return webWorkerCtx.$documentCookie$;
  }
  set cookie(cookie: string) {
    setter(this, ['cookie'], (webWorkerCtx.$documentCookie$ = cookie));
  }

  createElement(tagName: string) {
    return createElement(this, tagName, []);
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
    return getElementProp(this, InstanceId.documentElement, 'HTML');
  }

  getElementsByTagName(tagName: string) {
    if (toLower(tagName) === 'script') {
      // always return just the first script
      return [createScript(webWorkerCtx.$firstScriptId$)];
    }
    return callMethod(this, ['getElementsByTagName'], [tagName]);
  }

  get head() {
    return getElementProp(this, InstanceId.head, 'HEAD');
  }

  get location() {
    return webWorkerCtx.$location$;
  }
  set location(url: any) {
    if (typeof url === 'string') {
      webWorkerCtx.$location$!.href = url;
    }
  }

  get ownerDocument() {
    return null as any;
  }

  get readyState() {
    if (webWorkerCtx.$documentReadyState$ !== 'complete') {
      webWorkerCtx.$documentReadyState$ = getter(this, ['readyState']);
    }
    return webWorkerCtx.$documentReadyState$;
  }

  get referrer() {
    return webWorkerCtx.$documentReferrer$;
  }
  set referrer(value: string) {
    webWorkerCtx.$documentReferrer$ = value;
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
