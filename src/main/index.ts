import { debug } from '../utils';
import SandboxHash from '@sandbox-hash';

(function (document: Document, navigator: Navigator, scope: string, sandbox?: HTMLIFrameElement) {
  function ready() {
    if (!sandbox) {
      sandbox = document.createElement('iframe');
      sandbox.setAttribute('style', 'display:block;width:0;height:0;border:0;visibility:hidden');
      sandbox.setAttribute('aria-hidden', 'true');
      sandbox.src = scope + 'partytown-sandbox' + (debug ? '.debug' : '-' + SandboxHash);
      document.body.appendChild(sandbox);
    }
  }
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
  }
})(document, navigator, '/~partytown/');
