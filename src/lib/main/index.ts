import { debug, PT_INITIALIZED_EVENT, PT_SCRIPT_TYPE } from '../utils';
import type { MainWindow } from '../types';
import SandboxHash from '@sandbox-hash';

(function (
  doc: Document,
  nav: Navigator,
  scope: string,
  sandbox?: HTMLIFrameElement,
  scripts?: NodeListOf<HTMLScriptElement>,
  timeout?: any
) {
  function ready() {
    if (!sandbox) {
      sandbox = doc.createElement('iframe');
      sandbox.setAttribute('style', 'display:block;width:0;height:0;border:0;visibility:hidden');
      sandbox.setAttribute('aria-hidden', 'true');
      sandbox.src =
        scope + 'partytown-sandbox' + (debug ? '.debug' : '-' + SandboxHash) + '?' + Date.now();
      doc.body.appendChild(sandbox);
    }
  }

  function fallback(i?: number, script?: HTMLScriptElement) {
    if (debug) {
      console.warn(`Partytown script fallback`);
    }

    sandbox = 1 as any;
    for (i = 0; i < scripts!.length; i++) {
      script = doc.createElement('script');
      script.innerHTML = scripts![i].innerHTML;
      doc.body.appendChild(script);
    }
  }

  scripts = doc.querySelectorAll(`script[type="${PT_SCRIPT_TYPE}"]`);
  if (location !== parent.location) {
    (parent as MainWindow).partyWin!(window as MainWindow);
  } else {
    if (scripts!.length) {
      if ('serviceWorker' in nav) {
        nav.serviceWorker
          .register(scope + (debug ? 'partytown-sw.debug.js' : 'partytown-sw.js'), {
            scope: scope,
          })
          .then(
            function (swRegistration) {
              if (swRegistration.active) {
                ready();
              } else if (swRegistration.installing) {
                swRegistration.installing.addEventListener('statechange', function (ev) {
                  if ((ev.target as any as ServiceWorker).state === 'activated') {
                    ready();
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

        timeout = setTimeout(fallback, debug ? 60000 : 10000);
        doc.addEventListener(PT_INITIALIZED_EVENT, function () {
          clearTimeout(timeout);
        });
      } else {
        fallback();
      }
    }
  }
})(document, navigator, '/~partytown/');
