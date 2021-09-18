import { callMethod, getter, setter } from './worker-proxy';
import { constructInstance } from './worker-serialization';
import { ExtraInstruction, InterfaceType, NodeName, PlatformInstanceId } from '../types';
import { logWorkerGetter, logWorkerSetter, PT_SCRIPT, toLower } from '../utils';
import { webWorkerCtx, WinIdKey } from './worker-constants';
import { WorkerElement } from './worker-element';

export class WorkerDocument extends WorkerElement {
  get body() {
    return constructInstance(
      InterfaceType.Element,
      PlatformInstanceId.body,
      this[WinIdKey],
      NodeName.Body
    );
  }

  get compatMode() {
    return webWorkerCtx.$documentCompatMode$;
  }

  get cookie() {
    logWorkerGetter(this, ['cookie'], webWorkerCtx.$documentCookie$, true);
    return webWorkerCtx.$documentCookie$;
  }
  set cookie(cookie: string) {
    setter(this, ['cookie'], (webWorkerCtx.$documentCookie$ = cookie));
  }

  createElement(tagName: string, $extraInstructions$?: ExtraInstruction[]) {
    tagName = toLower(tagName);

    if (tagName === 'script') {
      $extraInstructions$ = [ExtraInstruction.SET_INERT_SCRIPT];
    } else if (tagName === 'iframe') {
      $extraInstructions$ = [ExtraInstruction.SET_IFRAME_SRCDOC, PT_SCRIPT as any];
    }

    return callMethod(this, ['createElement'], [tagName], $extraInstructions$);
  }

  get createEventObject() {
    // common check we can just avoid
    return undefined;
  }

  get currentScript() {
    if (webWorkerCtx.$currentScriptId$) {
      return constructInstance(
        InterfaceType.Element,
        webWorkerCtx.$currentScriptId$,
        this[WinIdKey],
        NodeName.Script
      );
    }
    return null;
  }

  get defaultView() {
    return self;
  }

  get documentElement() {
    return constructInstance(
      InterfaceType.Element,
      PlatformInstanceId.documentElement,
      this[WinIdKey],
      NodeName.DocumentElement
    );
  }

  getElementsByTagName(tagName: string) {
    tagName = toLower(tagName);
    if (tagName === 'body') {
      return [this.body];
    }
    if (tagName === 'head') {
      return [this.head];
    }
    if (tagName === 'script') {
      return [
        constructInstance(
          InterfaceType.Element,
          webWorkerCtx.$firstScriptId$,
          this[WinIdKey],
          NodeName.Script
        ),
      ];
    }
    return callMethod(this, ['getElementsByTagName'], [tagName]);
  }

  get head() {
    return constructInstance(
      InterfaceType.Element,
      PlatformInstanceId.head,
      this[WinIdKey],
      NodeName.Head
    );
  }

  get implementation() {
    return {
      hasFeature: () => true,
    };
  }

  get location() {
    logWorkerGetter(this, ['location'], webWorkerCtx.$location$, true);
    return webWorkerCtx.$location$;
  }
  set location(url: any) {
    logWorkerSetter(this, ['location'], url);
    webWorkerCtx.$location$!.href = url + '';
  }

  get parentNode() {
    return null;
  }

  get parentElement() {
    return null;
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
