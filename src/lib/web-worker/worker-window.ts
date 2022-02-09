import { addStorageApi } from './worker-storage';
import { callMethod, constructGlobal } from './worker-proxy';
import { CallType, NodeName, PlatformInstanceId } from '../types';
import { createNavigator } from './worker-navigator';
import { createImageConstructor } from './worker-image';
import { createNodeInstance, getOrCreateNodeInstance } from './worker-constructors';
import { debug, defineConstructorName, defineProperty, len, randomId } from '../utils';
import {
  envGlobalConstructors,
  environments,
  postMessages,
  webWorkerlocalStorage,
  webWorkerSessionStorage,
  WinIdKey,
} from './worker-constants';
import { getEnv } from './worker-environment';
import { resolveUrl } from './worker-exec';
import { lazyLoadMedia, windowMediaConstructors } from './worker-media';
import { Location } from './worker-location';
import { normalizedWinId } from '../log';
import { WorkerInstance } from './worker-instance';

export class Window extends WorkerInstance {
  constructor($winId$: number, $parentWinId$: number, url: string, isIframeWindow?: boolean) {
    super($winId$, PlatformInstanceId.window);

    let _this: any = this;
    let globalName: string;
    let value: any;
    let historyState: any;

    // assign global properties already in the web worker global
    // that we can put onto the environment window
    for (globalName in self) {
      if (!(globalName in _this) && globalName !== 'onmessage') {
        // global properties already in the web worker global
        value = self[globalName] as any;
        if (value != null) {
          // function examples: atob(), fetch()
          // object examples: crypto, indexedDB
          // boolean examples: isSecureContext, crossOriginIsolated
          const isFunction = typeof value === 'function' && !value.toString().startsWith('class');
          _this[globalName] = isFunction ? value.bind(self) : value;
        }
      }
    }

    // assign web worker global properties to the environment window
    // window.Promise = self.Promise
    Object.getOwnPropertyNames(self).map((globalName) => {
      if (!(globalName in _this)) {
        _this[globalName] = (self as any)[globalName];
      }
    });

    envGlobalConstructors.forEach((GlobalCstr, cstrName) => {
      // create the constructor and set as a prop
      _this[cstrName] = defineConstructorName(
        class {
          constructor(...args: any[]) {
            const instance = new GlobalCstr($winId$, randomId());
            constructGlobal(instance, cstrName, args);
            return instance;
          }
        },
        cstrName
      );
    });

    windowMediaConstructors.map((cstrName) =>
      defineProperty(_this, cstrName, {
        get() {
          // lazy load media constructors if called, remove the getter
          delete _this[cstrName];
          const initMediaConstructors = lazyLoadMedia();
          const initMediaConstructor = initMediaConstructors[cstrName];
          return (_this[cstrName] = initMediaConstructor(getEnv(_this), _this, cstrName));
        },
      })
    );

    if ('trustedTypes' in (self as any)) {
      // https://developer.mozilla.org/en-US/docs/Web/API/Trusted_Types_API
      _this.trustedTypes = (self as any).trustedTypes;
    }

    environments[$winId$] = {
      $winId$,
      $parentWinId$,
      $window$: new Proxy(_this, {
        has: () =>
          // window "has" any and all props, this is especially true for global variables
          // that are meant to be assigned to window, but without "window." prefix,
          // like: <script>globalProp = true</script>
          true,
      }),
      $document$: createNodeInstance(
        $winId$,
        PlatformInstanceId.document,
        NodeName.Document
      ) as any,
      $documentElement$: createNodeInstance(
        $winId$,
        PlatformInstanceId.documentElement,
        NodeName.DocumentElement
      ) as any,
      $head$: createNodeInstance($winId$, PlatformInstanceId.head, NodeName.Head) as any,
      $body$: createNodeInstance($winId$, PlatformInstanceId.body, NodeName.Body) as any,
      $location$: new Location(url) as any,
    };

    // requestAnimationFrame() is provided by Chrome in a web worker, but not Safari
    _this.requestAnimationFrame = (cb: (ts: number) => void) =>
      setTimeout(() => cb(performance.now()), 9);
    _this.cancelAnimationFrame = (id: number) => clearTimeout(id);

    // ensure requestIdleCallback() happens in the worker and doesn't call to main
    // it's also not provided by Safari
    _this.requestIdleCallback = (
      cb: (opts: { didTimeout: boolean; timeRemaining: () => number }) => void,
      start?: number
    ) => {
      start = Date.now();
      return setTimeout(
        () =>
          cb({
            didTimeout: false,
            timeRemaining: () => Math.max(0, 50 - (Date.now() - start!)),
          }),
        1
      );
    };
    _this.cancelIdleCallback = (id: number) => clearTimeout(id);

    // add storage APIs to the window
    addStorageApi(_this, 'localStorage', webWorkerlocalStorage);
    addStorageApi(_this, 'sessionStorage', webWorkerSessionStorage);

    if (isIframeWindow) {
      historyState = {};
      _this.history = {
        pushState(stateObj: any) {
          historyState = stateObj;
        },
        replaceState(stateObj: any) {
          historyState = stateObj;
        },
        get state() {
          return historyState;
        },
        length: 0,
      };
    }

    _this.Worker = undefined;
  }

  addEventListener(...args: any[]) {
    if (args[0] === 'load') {
      if (getEnv(this).$runWindowLoadEvent$) {
        setTimeout(() => args[1]({ type: 'load' }));
      }
    } else {
      callMethod(this, ['addEventListener'], args, CallType.NonBlocking);
    }
  }

  get body() {
    return getEnv(this).$body$;
  }

  get document() {
    return getEnv(this).$document$;
  }

  get documentElement() {
    return getEnv(this).$documentElement$;
  }

  fetch(input: string | URL | Request, init: any) {
    input = typeof input === 'string' || input instanceof URL ? String(input) : input.url;
    return fetch(resolveUrl(getEnv(this), input), init);
  }

  get frameElement() {
    const env = getEnv(this);
    const parentWinId = env.$parentWinId$;
    const winId = env.$winId$;

    if (winId === parentWinId) {
      // this is the top window, not in an iframe
      return null;
    }

    // the winId of an iframe's window is the same
    // as the instanceId of the containing iframe element
    return getOrCreateNodeInstance(parentWinId, winId, NodeName.IFrame);
  }

  get globalThis() {
    return this;
  }

  get head() {
    return getEnv(this).$head$;
  }

  get location() {
    return getEnv(this).$location$;
  }
  set location(loc: any) {
    getEnv(this).$location$.href = loc + '';
  }

  get Image() {
    return createImageConstructor(getEnv(this));
  }

  get name() {
    return (
      name +
      (debug ? `${normalizedWinId(this[WinIdKey])} (${this[WinIdKey]})` : (this[WinIdKey] as any))
    );
  }

  get navigator() {
    return createNavigator(getEnv(this));
  }

  get origin() {
    return getEnv(this).$location$.origin;
  }

  get parent() {
    return proxyAncestorPostMessage(
      environments[getEnv(this).$parentWinId$].$window$,
      this[WinIdKey]
    );
  }

  postMessage(...args: any[]) {
    callMethod(this, ['postMessage'], args, CallType.NonBlockingNoSideEffect);
  }

  get self() {
    return this;
  }

  get top(): any {
    for (let envWinId in environments) {
      if (environments[envWinId].$winId$ === environments[envWinId].$parentWinId$) {
        return proxyAncestorPostMessage(environments[envWinId].$window$, this[WinIdKey]);
      }
    }
  }

  get window() {
    return this;
  }

  get XMLHttpRequest() {
    const env = getEnv(this);
    return class XMLHttpRequest_ extends (self as any).XMLHttpRequest {
      open(...args: any[]) {
        args[1] = resolveUrl(env, args[1]);
        super.open(...args);
      }
      set withCredentials(_: any) {}
    };
  }
}

const proxyAncestorPostMessage = (parentWin: any, $winId$: number) =>
  new Proxy<any>(parentWin, {
    get: (targetParent, propName) => {
      if (propName === 'postMessage') {
        return (...args: any[]) => {
          if (len(postMessages) > 20) {
            postMessages.splice(0, 5);
          }
          postMessages.push({
            $data$: JSON.stringify(args[0]),
            $winId$,
          });
          targetParent.postMessage(...args);
        };
      } else {
        return targetParent[propName];
      }
    },
  });
