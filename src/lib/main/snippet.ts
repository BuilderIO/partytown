import { debug } from '../utils';
import type { MainWindow, PartytownConfig } from '../types';

export function snippet(
  win: MainWindow,
  doc: Document,
  nav: Navigator,
  top: Window,
  useAtomics: boolean,
  config?: PartytownConfig,
  libPath?: string,
  timeout?: any,
  scripts?: NodeListOf<HTMLScriptElement>,
  sandbox?: HTMLIFrameElement | HTMLScriptElement,
  mainForwardFn?: any,
  isReady?: number
) {
  // ES5 just so IE11 doesn't choke on arrow fns
  function ready() {
    if (!isReady) {
      isReady = 1;
      if (debug) {
        // default to use debug files
        libPath = (config!.lib || '/~partytown/') + (config!.debug !== false ? 'debug/' : '');
      } else {
        // default to use production, non-debug files
        libPath = (config!.lib || '/~partytown/') + (config!.debug ? 'debug/' : '');
      }

      if (libPath[0] == '/') {
        // grab all the partytown scripts
        scripts = doc.querySelectorAll('script[type="text/partytown"]');

        if (top != win) {
          // this is an iframe
          top!.dispatchEvent(new CustomEvent('pt1', { detail: win }));
        } else {
          // set a timeout to fire if PT hasn't initialized in Xms
          timeout = setTimeout(fallback, 9999);
          doc.addEventListener('pt0', clearFallback);

          if (useAtomics) {
            // atomics support
            loadSandbox(1);
          } else if (nav.serviceWorker) {
            // service worker support
            nav.serviceWorker
              .register(libPath + (config!.swPath || 'partytown-sw.js'), {
                scope: libPath,
              })
              .then(function (swRegistration) {
                if (swRegistration.active) {
                  loadSandbox();
                } else if (swRegistration.installing) {
                  swRegistration.installing.addEventListener('statechange', function (ev) {
                    if ((ev.target as any as ServiceWorker).state == 'activated') {
                      loadSandbox();
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
      } else if (debug) {
        console.warn('Partytown config.lib url must start with "/"');
      }
    }
  }

  function loadSandbox(isAtomics?: number) {
    sandbox = doc.createElement(isAtomics ? 'script' : 'iframe');
    if (!isAtomics) {
      sandbox.setAttribute('style', 'display:block;width:0;height:0;border:0;visibility:hidden');
      sandbox.setAttribute('aria-hidden', !0 as any);
    }
    sandbox.src =
      libPath +
      'partytown-' +
      (isAtomics ? 'atomics.js?v=_VERSION_' : 'sandbox-sw.html?' + Date.now());
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

    // remove any previously patched functions
    if (top == win) {
      (config!.forward || []).map((function(forwardProps) {
        delete win[forwardProps.split(".")[0] as any];
      }))
    }

    for (i = 0; i < scripts!.length; i++) {
      script = doc.createElement('script');
      script.innerHTML = scripts![i].innerHTML;
      doc.head.appendChild(script);
    }

    if (sandbox) {
      sandbox.parentNode!.removeChild(sandbox);
    }
  }

  function clearFallback() {
    // Partytown has initialized, clear the fallback timeout
    clearTimeout(timeout);
  }

  config = win.partytown || {};

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
              : mainForwardFn[forwardPropsArr[i]] || {}
            : function () {
                // queue these calls to be forwarded on later, after Partytown is ready
                (win._ptf = win._ptf || []).push(forwardPropsArr, arguments);
              };
      });
    });
  }

  if (doc.readyState == 'complete') {
    ready();
  } else {
    win.addEventListener('DOMContentLoaded', ready);
    win.addEventListener('load', ready);
  }
}
