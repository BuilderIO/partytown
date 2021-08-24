import { debug, PT_INITIALIZED_EVENT } from '../utils';
import SandboxHash from '@sandbox-hash';

(function (
  document: Document,
  navigator: Navigator,
  scope: string,
  sandbox?: HTMLIFrameElement,
  scripts?: NodeListOf<HTMLScriptElement>,
  timeout?: any
) {
  function ready() {
    if (!sandbox) {
      sandbox = document.createElement('iframe');
      sandbox.setAttribute('style', 'display:block;width:0;height:0;border:0;visibility:hidden');
      sandbox.setAttribute('aria-hidden', 'true');
      sandbox.src = scope + 'partytown-sandbox' + (debug ? '.debug' : '-' + SandboxHash);
      document.body.appendChild(sandbox);
    }
  }

  function fallback(i?: number, script?: HTMLScriptElement) {
    if (debug) {
      console.warn(`Partytown script fallback`);
    }

    sandbox = 1 as any;
    for (i = 0; i < scripts!.length; i++) {
      script = document.createElement('script');
      script.innerHTML = scripts![i].innerHTML;
      document.body.appendChild(script);
    }
  }

  scripts = document.querySelectorAll('script[type="text/partytown"]');
  if (scripts.length) {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
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

      timeout = setTimeout(fallback, 10000);
      document.addEventListener(PT_INITIALIZED_EVENT, function () {
        clearTimeout(timeout);
      });
    } else {
      fallback();
    }
  }
})(document, navigator, '/~partytown/');
