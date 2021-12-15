import { debug, PT_IFRAME_APPENDED, PT_INITIALIZED_EVENT, SCRIPT_TYPE } from '../utils';
import type { MainWindow, PartytownConfig } from '../types';

export function snippet(
  win: MainWindow,
  doc: Document,
  nav: Navigator,
  top: Window,
  crossOriginIsolated: boolean,
  config?: PartytownConfig,
  libPath?: string,
  timeout?: any,
  scripts?: NodeListOf<HTMLScriptElement>,
  sandbox?: HTMLIFrameElement,
  mainForwardFn?: any,
  useAtomics?: boolean
) {
  // ES5 just so IE11 doesn't choke on arrow fns
  function ready() {
    libPath = (config!.lib || '/~partytown/') + (config!.debug ? 'debug/' : '');

    // grab all the partytown scripts
    scripts = doc.querySelectorAll(`script[type="${SCRIPT_TYPE}"]`);

    if (top != win) {
      // this is an iframe
      top!.dispatchEvent(new CustomEvent(PT_IFRAME_APPENDED, { detail: win }));
    } else if (scripts!.length) {
      // set a timeout to fire if PT hasn't initialized in Xms
      timeout = setTimeout(fallback, debug ? 60000 : 9999);
      doc.addEventListener(PT_INITIALIZED_EVENT, clearFallback);

      useAtomics = crossOriginIsolated;
      if (debug && useAtomics) {
        useAtomics = !win.location.search.includes('forceServiceWorker');
      }
      if (useAtomics) {
        // atomics support
        loadSandbox('atomics');
      } else if (nav.serviceWorker) {
        // service worker support
        nav.serviceWorker
          .register(libPath + 'partytown-sw.js' + (crossOriginIsolated ? '?isolated' : ''), {
            scope: libPath,
          })
          .then(function (swRegistration) {
            if (swRegistration.active) {
              loadSandbox('sw');
            } else if (swRegistration.installing) {
              swRegistration.installing.addEventListener('statechange', function (ev) {
                if ((ev.target as any as ServiceWorker).state == 'activated') {
                  loadSandbox('sw');
                }
              });
            } else if (debug) {
              console.warn(swRegistration);
            }
          }, console.error);
      } else {
        // no support for atomics or service worker
        fallback();
      }
    }
  }

  function loadSandbox(msgType: 'sw' | 'atomics') {
    sandbox = doc.createElement('iframe');
    sandbox.setAttribute('style', 'display:block;width:0;height:0;border:0;visibility:hidden');
    sandbox.setAttribute('aria-hidden', !0 as any);
    sandbox.src = libPath + 'partytown-sandbox-' + msgType + '.html?' + Date.now();
    doc.body.appendChild(sandbox);
  }

  function fallback(i?: number, script?: HTMLScriptElement) {
    // no support or timeout reached
    // basically "undo" all of the text/partytown scripts
    // so they act as normal scripts
    if (debug) {
      console.warn(`Partytown script fallback`);
    }

    clearFallback();
    for (i = 0; i < scripts!.length; i++) {
      script = doc.createElement('script');
      script.innerHTML = scripts![i].innerHTML;
      doc.head.appendChild(script);
    }
  }

  function clearFallback() {
    // Partytown has initialized, clear the fallback timeout
    clearTimeout(timeout);
  }

  config = win.partytown || {};
  crossOriginIsolated = win.crossOriginIsolated;

  if (top == win) {
    // this is the top window
    // patch the functions that'll be forwarded to the worker
    (config.forward || []).map(function (forwardProps) {
      mainForwardFn = win;
      forwardProps.split('.').map(function (_, i, forwardPropsArr) {
        mainForwardFn = mainForwardFn[forwardPropsArr[i]] =
          i + 1 < forwardPropsArr.length
            ? forwardPropsArr[i + 1] == 'push'
              ? []
              : {}
            : function () {
                // queue these calls to be forwarded on later, after Partytown is ready
                (win._ptf = win._ptf || []).push(forwardPropsArr, arguments);
              };
      });
    });
  }

  if (doc.readyState == 'complete') {
    // document is ready, kick it off
    ready();
  } else {
    // not ready yet, wait for window load
    win.addEventListener('load', ready);
  }
}
