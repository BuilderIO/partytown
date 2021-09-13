import type { MainWindow, PartytownConfig, PartytownConfigInit } from '../types';

(function (win: MainWindow, doc: Document) {
  var config: PartytownConfig = win.partytown || {};
  var script = doc.createElement('script');
  script.async = script.defer = true;
  script.src = '/~partytown/partytown.' + (config.debug ? 'debug.js' : 'js');

  win._ptq = [];

  function patch(
    target: { [key: string]: any },
    initConfig: PartytownConfigInit,
    fullPath?: string,
    targetPath?: string,
    key?: string,
    hasProps?: string
  ) {
    for (key in initConfig) {
      hasProps = targetPath = fullPath + '.' + key;
      if (!patch((target[key] = {}), initConfig[key], targetPath)) {
        target[key] = function () {
          win._ptq!.push(targetPath, arguments);
        };
      }
    }
    return hasProps;
  }

  patch(win, config.init || {});

  doc.head.appendChild(script);
})(window as any, document);
