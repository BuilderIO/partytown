import { addStorageApi } from './worker-storage';
import {
  ApplyPath,
  CallType,
  InstanceId,
  InterfaceType,
  NodeName,
  PlatformInstanceId,
  WinId,
  WorkerConstructor,
  WorkerInstance,
  WorkerNode,
  WorkerWindow,
} from '../types';
import {
  ApplyPathKey,
  commaSplit,
  environments,
  eventTargetMethods,
  InstanceDataKey,
  InstanceIdKey,
  InstanceStateKey,
  NamespaceKey,
  postMessages,
  webWorkerCtx,
  webWorkerlocalStorage,
  webWorkerSessionStorage,
  WinIdKey,
} from './worker-constants';
import {
  cachedDimensionMethods,
  cachedDimensionProps,
  cachedProps,
  definePrototypeNodeType,
  getOrCreateNodeInstance,
} from './worker-constructors';
import { callMethod, constructGlobal, getter, setter } from './worker-proxy';
import { createCSSStyleDeclarationCstr } from './worker-css-style-declaration';
import { createCSSStyleSheetConstructor } from './worker-style';
import { createImageConstructor } from './worker-image';
import { createNavigator } from './worker-navigator';
import { createNodeCstr } from './worker-node';
import { createPerformanceConstructor } from './worker-performance';
import {
  debug,
  defineConstructorName,
  defineProperty,
  definePrototypeProperty,
  definePrototypeValue,
  EMPTY_ARRAY,
  getConstructorName,
  len,
  randomId,
} from '../utils';
import { getEnv } from './worker-environment';
import {
  getInstanceStateValue,
  hasInstanceStateValue,
  setInstanceStateValue,
} from './worker-state';
import { getInitWindowMedia, htmlMedia, windowMediaConstructors } from './worker-media';
import { logWorker, normalizedWinId } from '../log';
import {
  patchDocument,
  patchDocumentElementChild,
  patchDocumentFragment,
  patchHTMLHtmlElement,
} from './worker-document';
import { patchElement } from './worker-element';
import { patchHTMLAnchorElement } from './worker-anchor';
import { patchHTMLFormElement } from './worker-form';
import { patchHTMLIFrameElement } from './worker-iframe';
import { patchHTMLScriptElement } from './worker-script';
import { patchSvgElement } from './worker-svg';
import { resolveUrl } from './worker-exec';

export const createWindow = (
  $winId$: WinId,
  $parentWinId$: WinId,
  url: string,
  isIframeWindow?: boolean
) => {
  // base class all Nodes/Elements/Global Constructors will extend
  const WorkerBase = class implements WorkerInstance {
    [WinIdKey]: WinId;
    [InstanceIdKey]: InstanceId;
    [ApplyPathKey]: string[];
    [InstanceDataKey]: any;
    [NamespaceKey]: string | undefined;
    [InstanceStateKey]: { [key: string]: any };

    constructor(
      winId: WinId,
      instanceId: InstanceId,
      applyPath?: ApplyPath,
      instanceData?: any,
      namespace?: string
    ) {
      this[WinIdKey] = winId!;
      this[InstanceIdKey] = instanceId!;
      this[ApplyPathKey] = applyPath || [];
      this[InstanceDataKey] = instanceData;
      this[InstanceStateKey] = {};
      if (namespace) {
        this[NamespaceKey] = namespace;
      }
    }
  };

  const WorkerLocation = defineConstructorName(
    class extends URL {
      assign() {
        logWorker(`location.assign(), noop`);
      }
      reload() {
        logWorker(`location.reload(), noop`);
      }
      replace() {
        logWorker(`location.replace(), noop`);
      }
    },
    'Location'
  );

  const $location$ = new WorkerLocation(url);
  const isSameOrigin = $location$.origin === webWorkerCtx.$origin$;

  // window global eveything will live within
  const WorkerWindow = defineConstructorName(
    class extends WorkerBase implements WorkerWindow {
      constructor() {
        super($winId$, PlatformInstanceId.window);

        let win: WorkerWindow = this;
        let value: any;
        let historyState: any;
        let hasInitializedMedia = 0;

        let initWindowMedia = () => {
          if (!hasInitializedMedia) {
            getInitWindowMedia()(
              WorkerBase,
              WorkerEventTargetProxy,
              environments[$winId$],
              win,
              windowMediaConstructors
            );
            hasInitializedMedia = 1;
          }
        };

        let nodeCstrs: { [nodeName: string]: WorkerConstructor } = {};
        let $createNode$ = (
          nodeName: string,
          instanceId: InstanceId,
          namespace?: string
        ): WorkerNode => {
          if (htmlMedia.includes(nodeName)) {
            initWindowMedia();
          }
          const NodeCstr = nodeCstrs[nodeName]
            ? nodeCstrs[nodeName]
            : nodeName.includes('-')
            ? nodeCstrs.UNKNOWN
            : nodeCstrs.DIV;
          return new NodeCstr($winId$, instanceId, EMPTY_ARRAY, nodeName, namespace) as any;
        };

        win.Window = WorkerWindow;

        createNodeCstr(win, WorkerBase);
        createCSSStyleDeclarationCstr(win, WorkerBase, 'CSSStyleDeclaration');
        createPerformanceConstructor(win, WorkerBase, 'Performance');

        // define all of the global constructors that should live on window
        webWorkerCtx.$interfaces$.map(
          ([cstrName, superCstrName, members, interfaceType, nodeName]) => {
            const SuperCstr = TrapConstructors[cstrName]
              ? WorkerTrapProxy
              : superCstrName === 'EventTarget'
              ? WorkerEventTargetProxy
              : superCstrName === 'Object'
              ? WorkerBase
              : win[superCstrName];

            const Cstr = (win[cstrName] = defineConstructorName(
              interfaceType === InterfaceType.EnvGlobalConstructor
                ? class extends WorkerBase {
                    // create the constructor and set as a prop on window
                    constructor(...args: any[]) {
                      super($winId$, randomId());
                      constructGlobal(this, cstrName, args);
                    }
                  }
                : win[cstrName] || class extends SuperCstr {},
              cstrName
            ));

            if (nodeName) {
              // this is a node name, such as #text or an element's tagname, like all caps DIV
              nodeCstrs[nodeName] = Cstr;
            }

            members.map(([memberName, memberType, staticValue]) => {
              if (!(memberName in Cstr.prototype) && !(memberName in SuperCstr.prototype)) {
                // member not already in the constructor's prototype
                if (typeof memberType === 'string') {
                  definePrototypeProperty(Cstr, memberName, {
                    get(this: WorkerInstance) {
                      if (!hasInstanceStateValue(this, memberName)) {
                        const winId = this[WinIdKey];
                        const instanceId = this[InstanceIdKey];
                        const applyPath = [...this[ApplyPathKey], memberName];
                        const PropCstr: typeof WorkerBase = win[memberType];

                        if (PropCstr) {
                          setInstanceStateValue(
                            this,
                            memberName,
                            new PropCstr(winId, instanceId, applyPath)
                          );
                        }
                      }
                      return getInstanceStateValue(this, memberName);
                    },
                    set(this: WorkerInstance, value) {
                      setInstanceStateValue(this, memberName, value);
                    },
                  });
                } else {
                  // interface type
                  if (memberType === InterfaceType.Function) {
                    // method that should access main
                    definePrototypeValue(Cstr, memberName, function (this: Node, ...args: any[]) {
                      return callMethod(this, [memberName], args);
                    });
                  } else if (memberType > 0) {
                    // property
                    if (staticValue !== undefined) {
                      // static property that doesn't change
                      // and no need to access main
                      definePrototypeValue(Cstr, memberName, staticValue);
                    } else {
                      // property getter/setter that should access main
                      definePrototypeProperty(Cstr, memberName, {
                        get(this: WorkerNode) {
                          return getter(this, [memberName]);
                        },
                        set(this: WorkerNode, value) {
                          return setter(this, [memberName], value);
                        },
                      });
                    }
                  }
                }
              }
            });
          }
        );

        // we already assigned the same prototypes found on the main thread's Window
        // to the worker's Window, but actually it assigned a few that are already on
        // the web worker's global we can use instead. So manually set which web worker
        // globals we can reuse, instead of calling the main access.
        // These same window properties will be assigned to the window instance
        // when Window is constructed, and these won't make calls to the main thread.
        commaSplit(
          'atob,btoa,crypto,indexedDB,setTimeout,setInterval,clearTimeout,clearInterval'
        ).map((globalName) => {
          delete (WorkerWindow as any).prototype[globalName];

          if (!(globalName in win)) {
            // global properties already in the web worker global
            value = (self as any)[globalName];
            if (value != null) {
              // function examples: atob(), fetch()
              // object examples: crypto, indexedDB
              // boolean examples: isSecureContext, crossOriginIsolated
              win[globalName] =
                typeof value === 'function' && !value.toString().startsWith('class')
                  ? value.bind(self)
                  : value;
            }
          }
        });

        // assign web worker global properties to the environment window
        // window.Promise = self.Promise
        Object.getOwnPropertyNames(self).map((globalName) => {
          if (!(globalName in win)) {
            win[globalName] = (self as any)[globalName];
          }
        });

        windowMediaConstructors.map((cstrName) =>
          defineProperty(win, cstrName, {
            get() {
              // lazy load media constructors if called, replacing this getter
              initWindowMedia();
              return win[cstrName];
            },
          })
        );

        if ('trustedTypes' in (self as any)) {
          // https://developer.mozilla.org/en-US/docs/Web/API/Trusted_Types_API
          win.trustedTypes = (self as any).trustedTypes;
        }

        // patch this window's global constructors with some additional props
        patchElement(win.Element);
        patchDocument(win.Document, isSameOrigin);
        patchDocumentFragment(win.DocumentFragment);
        patchHTMLAnchorElement(win.HTMLAnchorElement);
        patchHTMLFormElement(win.HTMLFormElement);
        patchHTMLIFrameElement(win.HTMLIFrameElement);
        patchHTMLScriptElement(win.HTMLScriptElement);
        patchSvgElement(win.SVGGraphicsElement);
        patchDocumentElementChild(win.HTMLHeadElement);
        patchDocumentElementChild(win.HTMLBodyElement);
        patchHTMLHtmlElement(win.HTMLHtmlElement);
        createCSSStyleSheetConstructor(win, 'CSSStyleSheet');

        definePrototypeNodeType(win.Comment, 8);
        definePrototypeNodeType(win.DocumentType, 10);

        environments[$winId$] = {
          $winId$,
          $parentWinId$,
          $window$: new Proxy(win, {
            has: () =>
              // window "has" any and all props, this is especially true for global variables
              // that are meant to be assigned to window, but without "window." prefix,
              // like: <script>globalProp = true</script>
              true,
          }) as any,
          $document$: $createNode$(NodeName.Document, PlatformInstanceId.document) as any,
          $documentElement$: $createNode$(
            NodeName.DocumentElement,
            PlatformInstanceId.documentElement
          ) as any,
          $head$: $createNode$(NodeName.Head, PlatformInstanceId.head) as any,
          $body$: $createNode$(NodeName.Body, PlatformInstanceId.body) as any,
          $location$,
          $createNode$,
        };

        // requestAnimationFrame() is provided by Chrome in a web worker, but not Safari
        win.requestAnimationFrame = (cb: (ts: number) => void) =>
          setTimeout(() => cb(performance.now()), 9);
        win.cancelAnimationFrame = (id: number) => clearTimeout(id);

        // ensure requestIdleCallback() happens in the worker and doesn't call to main
        // it's also not provided by Safari
        win.requestIdleCallback = (
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
        win.cancelIdleCallback = (id: number) => clearTimeout(id);

        // add storage APIs to the window
        addStorageApi(win, 'localStorage', webWorkerlocalStorage, isSameOrigin);
        addStorageApi(win, 'sessionStorage', webWorkerSessionStorage, isSameOrigin);

        if (!isSameOrigin) {
          win.indexeddb = undefined;
        }

        if (isIframeWindow) {
          historyState = {};
          win.history = {
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

        win.Worker = undefined;
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
        return $location$;
      }
      set location(loc: any) {
        $location$.href = loc + '';
      }

      get Image() {
        return createImageConstructor(getEnv(this));
      }

      get name() {
        return (
          name +
          (debug
            ? `${normalizedWinId(this[WinIdKey])} (${this[WinIdKey]})`
            : (this[WinIdKey] as any))
        );
      }

      get navigator() {
        return createNavigator(getEnv(this));
      }

      get origin() {
        return $location$.origin;
      }
      set origin(_) {}

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
        const Xhr = XMLHttpRequest;
        const str = String(Xhr);
        const ExtendedXhr = defineConstructorName(
          class extends Xhr {
            open(...args: any[]) {
              args[1] = resolveUrl(env, args[1]);
              (super.open as any)(...args);
            }
            set withCredentials(_: any) {}
            toString() {
              return str;
            }
          },
          getConstructorName(Xhr)
        );
        ExtendedXhr.prototype.constructor.toString = () => str;
        return ExtendedXhr;
      }
    },
    'Window'
  );

  // extends WorkerBase, but also a proxy so certain constructors like style.color work
  const WorkerTrapProxy = class extends WorkerBase {
    constructor(winId: WinId, instanceId: InstanceId, applyPath?: ApplyPath, nodeName?: string) {
      super(winId, instanceId, applyPath, nodeName);

      return new Proxy(this, {
        get(instance, propName) {
          return getter(instance, [propName]);
        },
        set(instance, propName, propValue) {
          setter(instance, [propName], propValue);
          return true;
        },
      });
    }
  };

  const WorkerEventTargetProxy = class extends WorkerBase {};
  eventTargetMethods.map(
    (methodName) =>
      ((WorkerEventTargetProxy as any).prototype[methodName] = function (...args: any[]) {
        return callMethod(this, [methodName], args, CallType.NonBlocking);
      })
  );

  cachedProps(WorkerWindow, 'devicePixelRatio');
  cachedDimensionProps(WorkerWindow);
  cachedDimensionMethods(WorkerWindow, ['getComputedStyle']);

  new WorkerWindow();
};

const proxyAncestorPostMessage = (parentWin: any, $winId$: WinId) =>
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

// Trap Constructors are ones where all properties have
// proxy traps, such as dataset.name
const TrapConstructors: { [cstrName: string]: 1 } = {
  DOMStringMap: 1,
  NamedNodeMap: 1,
};
