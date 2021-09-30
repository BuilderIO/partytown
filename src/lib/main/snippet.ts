import type { MainWindow, PartytownForwardProperty } from '../types';

export function snippet(win: MainWindow, doc: Document) {
  var config = win.partytown || {};
  var forward = config.forward || [];
  var script = doc.createElement('script');

  function createForwardFn(forwardProp: PartytownForwardProperty) {
    return function () {
      // see src/lib/sandbox/main-forward-trigger.ts and src/lib/web-worker/worker-forwarded-trigger.ts
      (win._ptf = win._ptf || []).push(forwardProp, arguments);
    };
  }

  function createArrayPushFn(forwardProp: PartytownForwardProperty, arr?: any) {
    arr = [];
    arr.push = createForwardFn(forwardProp);
    return arr;
  }

  forward.map((forwardProp) => {
    (win as any)[forwardProp[0]] =
      forwardProp[1] === 1 ? createArrayPushFn(forwardProp) : createForwardFn(forwardProp);
  });

  script.async = script.defer = true;

  script.src = (config.lib || '/~partytown/') + (config.debug ? 'debug/' : '') + 'partytown.js';

  doc.head.appendChild(script);
}
