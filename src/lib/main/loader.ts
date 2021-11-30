import { debug, PT_IFRAME_APPENDED, PT_INITIALIZED_EVENT, SCRIPT_TYPE } from '../utils';
import type { MainWindow } from '../types';

export function loader(
  win: MainWindow,
  doc: Document,
  nav: Navigator,
  libPath?: string,
  sandbox?: HTMLIFrameElement,
  scripts?: NodeListOf<HTMLScriptElement>,
  timeout?: any
) {
  function loadSandbox(msgType: 'sw' | 'atomics') {
    if (!sandbox) {
      sandbox = doc.createElement('iframe');
      sandbox.dataset.partytown = 'sandbox';
      sandbox.setAttribute('style', 'display:block;width:0;height:0;border:0;visibility:hidden');
      sandbox.setAttribute('aria-hidden', 'true');
      sandbox.src = libPath + 'partytown-sandbox-' + msgType + '.html?' + Date.now();
      doc.body.appendChild(sandbox);
    }
  }

  function fallback(i?: number, script?: HTMLScriptElement) {
    // no support or timeout reached
    // basically "undo" all of the text/partytown scripts
    // so they act as normal scripts
    if (debug) {
      console.warn(`Partytown script fallback`);
    }
    clearTimeout(timeout);
    sandbox = 1 as any;
    for (i = 0; i < scripts!.length; i++) {
      script = doc.createElement('script');
      script.innerHTML = scripts![i].innerHTML;
      doc.body.appendChild(script);
    }
  }

  function ready() {
    libPath = (win.partytown || {}).lib || '/~partytown/';
    if (debug) {
      libPath += 'debug/';
    }

    scripts = doc.querySelectorAll(`script[type="${SCRIPT_TYPE}"]`);

    if (top !== win) {
      // this is an iframe
      top!.dispatchEvent(new CustomEvent(PT_IFRAME_APPENDED, { detail: win }));
    } else {
      if (scripts!.length) {
        timeout = setTimeout(fallback, debug ? 60000 : 10000);
        doc.addEventListener(PT_INITIALIZED_EVENT, function () {
          clearTimeout(timeout);
        });
        let useAtomics = win.crossOriginIsolated;
        if (debug && useAtomics) {
          useAtomics = !window.location.search.includes('forceServiceWorker');
        }
        if (useAtomics) {
          // atomics support
          loadSandbox('atomics');
        } else if ('serviceWorker' in nav) {
          // service worker support
          const isolatedQuery = win.crossOriginIsolated ? '?isolated' : '';
          nav.serviceWorker
            .register(libPath + 'partytown-sw.js' + isolatedQuery, {
              scope: libPath,
            })
            .then(
              function (swRegistration) {
                if (swRegistration.active) {
                  loadSandbox('sw');
                } else if (swRegistration.installing) {
                  swRegistration.installing.addEventListener('statechange', function (ev) {
                    if ((ev.target as any as ServiceWorker).state === 'activated') {
                      loadSandbox('sw');
                    }
                  });
                } else {
                  console.warn(swRegistration);
                }
              },
              function (e) {
                console.error(e);
              }
            );
        } else {
          // no support for atomics or service worker
          fallback();
        }
      }
    }
  }

  if (doc.readyState === 'complete') {
    ready();
  } else {
    window.addEventListener('load', ready);
  }
}
