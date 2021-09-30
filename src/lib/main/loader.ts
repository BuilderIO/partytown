import { debug, PT_INITIALIZED_EVENT, SCRIPT_TYPE } from '../utils';
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
  function ready() {
    if (!sandbox) {
      sandbox = doc.createElement('iframe');
      sandbox.dataset.partytown = 'sandbox';
      sandbox.setAttribute('style', 'display:block;width:0;height:0;border:0;visibility:hidden');
      sandbox.setAttribute('aria-hidden', 'true');
      sandbox.src = libPath + 'partytown-sandbox-sw?' + Date.now();
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

  libPath = (win.partytown || {}).lib || '/~partytown/';
  if (debug) {
    libPath += 'debug/';
  }

  scripts = doc.querySelectorAll(`script[type="${SCRIPT_TYPE}"]`);

  if (location !== parent.location) {
    (parent as MainWindow)._ptWin!(win);
  } else {
    if (scripts!.length) {
      if ('serviceWorker' in nav) {
        nav.serviceWorker
          .register(libPath + 'partytown-sw.js', {
            scope: libPath,
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
}
