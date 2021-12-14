import type { MainWindow } from '../types';

export function snippet(win: MainWindow, doc: Document) {
  // ES5 just so IE11 doesn't choke on arrow fns
  var config = win.partytown || {};
  var forward = config.forward || [];
  var script = doc.createElement('script');
  var mainForwardFn: any;

  forward.map(function (forwardProps) {
    mainForwardFn = win;
    forwardProps.split('.').map(function (_, i, arr) {
      mainForwardFn = mainForwardFn[arr[i]] =
        i + 1 < arr.length
          ? arr[i + 1] === 'push'
            ? []
            : {}
          : function () {
              // queue these calls to be forwarded on later, after Partytown is ready
              (win._ptf = win._ptf || []).push(arr, arguments);
            };
    });
  });

  script.async = 1 as any;
  script.src = (config.lib || '/~partytown/') + (config.debug ? 'debug/' : '') + 'partytown.js';

  doc.head.appendChild(script);
}
