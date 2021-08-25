import { callMethod, getter, setter } from './worker-proxy';
import { createElement, createScript, WorkerElement } from './worker-node';
import { toLower } from '../utils';
import { webWorkerCtx } from './worker-constants';

export class WorkerDocument extends WorkerElement {
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

  getElementsByTagName(tagName: string) {
    if (toLower(tagName) === 'script') {
      // always return just the first script
      return [createScript(webWorkerCtx.$firstScriptId$)];
    }
    return callMethod(this, ['getElementsByTagName'], [tagName]);
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
