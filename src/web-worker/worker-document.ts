import { callMethod, getter, setter } from './worker-proxy';
import { createScript, WorkerElement } from './worker-element';
import type { ExtraInstruction } from '../types';
import { logWorker, toLower } from '../utils';
import { setLocation, WorkerLocation } from './worker-location';
import { webWorkerCtx } from './worker-constants';

export class WorkerDocument extends WorkerElement {
  createElement(tagName: string) {
    tagName = toLower(tagName);

    const $extraInstructions$: ExtraInstruction[] = [];

    if (tagName === 'script') {
      $extraInstructions$.push(
        {
          $setAttributeName$: 'type',
          $setAttributeValue$: 'text/partytown',
        },
        { $setPartytownId$: true }
      );
      logWorker(`Create inert <script>`);
    }

    return callMethod(this, ['createElement'], [tagName], $extraInstructions$);
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
    return new WorkerLocation(webWorkerCtx.$url$) as any;
  }
  set location(url: string) {
    setLocation(url);
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
