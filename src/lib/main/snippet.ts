import type { MainWindow, PartytownConfig } from '../types';

var win: MainWindow = window as any;
var doc = document;
var config: PartytownConfig = win.partytown || {};
var script = doc.createElement('script');
var target: any;

win._ptf = [];

(config.forward || []).map((forwardConfig) => {
  target = win;
  forwardConfig.split('.').map((forwardProp, index, arr) => {
    target = target[forwardProp] =
      index < arr.length - 1
        ? target[forwardProp] || {}
        : function () {
            win._ptf!.push(forwardConfig, arguments);
          };
  });
});

script.async = script.defer = true;
script.src = '/~partytown/partytown.' + (config.debug ? 'debug.js' : 'js');
doc.head.appendChild(script);
