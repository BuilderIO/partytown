import { ApplyPathType, NodeName, PlatformInstanceId } from '../types';
import { createAudioConstructor } from './worker-audio';
import { createNavigator } from './worker-navigator';
import { createImageConstructor } from './worker-image';
import { createNodeInstance, getOrCreateNodeInstance } from './worker-constructors';
import {
  debug,
  defineConstructorName,
  defineProperty,
  logWorkerGlobalConstructor,
  normalizedWinId,
  randomId,
} from '../utils';
import { envGlobalConstructors, environments, WinIdKey } from './worker-constants';
import { getEnv } from './worker-environment';
import { getter, queue } from './worker-proxy';
import { Location } from './worker-location';
import { resolveUrl } from './worker-exec';
import { serializeInstanceForMain } from './worker-serialization';
import { WorkerProxy } from './worker-proxy-constructor';

export class Window extends WorkerProxy {
  constructor($winId$: number, $parentWinId$: number, url: string) {
    super($winId$, PlatformInstanceId.window);

    // assign global properties already in the web worker global
    // that we can put onto the environment window
    for (const globalName in self) {
      if (!(globalName in this) && globalName !== 'onmessage') {
        // global properties already in the web worker global
        const value = self[globalName] as any;
        if (value != null) {
          // function examples: atob(), fetch()
          // object examples: crypto, performance, indexedDB
          // boolean examples: isSecureContext, crossOriginIsolated
          const isFunction = typeof value === 'function' && !value.toString().startsWith('class');
          (this as any)[globalName] = isFunction ? value.bind(self) : value;
        }
      }
    }

    // assign web worker global properties to the environment window
    // window.Promise = self.Promise
    Object.getOwnPropertyNames(self).map((globalName) => {
      if (!(globalName in this)) {
        (this as any)[globalName] = (self as any)[globalName];
      }
    });

    for (const envCstrName in envGlobalConstructors) {
      (this as any)[envCstrName] = defineConstructorName(
        class {
          constructor(...cstrArgs: any[]) {
            const GlobalCstr = envGlobalConstructors[envCstrName];
            const instance = new GlobalCstr($winId$, randomId());

            const serializedCstrArgs = serializeInstanceForMain(instance, cstrArgs);
            const newInstanceApplyPath = [
              ApplyPathType.GlobalConstructor,
              envCstrName,
              serializedCstrArgs,
            ];
            queue(instance, newInstanceApplyPath);

            logWorkerGlobalConstructor($winId$, envCstrName, cstrArgs);

            return instance;
          }
        },
        envCstrName
      );
    }

    const win = new Proxy(this, {
      has() {
        // window "has" any and all props, this is especially true for global variables
        // that are meant to be assigned to window, but without "window." prefix,
        // like: <script>globalProp = true</script>
        return true;
      },
    });

    environments[$winId$] = {
      $winId$,
      $parentWinId$,
      $window$: win as any,
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
    (this as any).requestAnimationFrame = (cb: (ts: number) => void) =>
      setTimeout(() => cb(performance.now()), 9);
    (this as any).cancelAnimationFrame = (id: number) => clearTimeout(id);

    defineProperty((this as any).performance, 'timing', {
      get: () => {
        const timing = getter(this, ['performance', 'timing']);
        return timing
          ? {
              ...timing,
              toJSON: () => timing,
            }
          : undefined;
      },
    });

    return win;
  }

  get Audio() {
    return createAudioConstructor(getEnv(this));
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
    const winId = this[WinIdKey];
    return name + (debug ? `${normalizedWinId(winId)} (${winId})` : (winId as any));
  }

  get navigator() {
    return createNavigator(getEnv(this));
  }

  get origin() {
    return getEnv(this).$location$.origin;
  }

  get parent() {
    return environments[getEnv(this).$parentWinId$].$window$;
  }

  get self() {
    return this;
  }

  get top(): any {
    for (const envWinId in environments) {
      if (environments[envWinId].$winId$ === environments[envWinId].$parentWinId$) {
        return environments[envWinId].$window$;
      }
    }
  }

  get window() {
    return this;
  }
}

export const patchWebWorkerWindowPrototype = () => {
  // we already assigned the same prototypes found on the main thread's Window
  // to the worker's Window, but actually it assigned a few that are already on
  // the web worker's global we can use instead. So manually set which web worker
  // globals we can reuse, instead of calling the main access.
  // These same window properties will be assigned to the window instance
  // when Window is constructed, and these won't make calls to the main thread.
  const webWorkerGlobals =
    'atob,btoa,crypto,indexedDB,performance,setTimeout,setInterval,clearTimeout,clearInterval'.split(
      ','
    );
  webWorkerGlobals.map((memberName) => delete (Window as any).prototype[memberName]);
};
