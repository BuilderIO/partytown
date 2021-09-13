import type { MainWindow, PartytownConfig, PartytownConfigInit } from '../types';

(function (win: MainWindow, doc: Document) {
  let config: PartytownConfig = win.partytown || {};
  let script = doc.createElement('script');
  script.async = script.defer = true;
  script.src = '/~partytown/partytown.' + (config.debug ? 'debug.js' : 'js');

  _ptq = [];

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
          _ptq!.push(targetPath, arguments);
        };
      }
    }
    return hasProps;
  }

  patch(win, config.init || {});

  doc.head.appendChild(script);
})(window as any, document);

declare var _ptq: any[];
