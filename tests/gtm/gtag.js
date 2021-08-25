console.warn('loaded gtag');

// Copyright 2012 Google Inc. All rights reserved.
(function () {
  var data = {
    resource: {
      version: '1',

      macros: [
        { function: '__e' },
        { vtp_signal: 0, function: '__c', vtp_value: 0 },
        { function: '__c', vtp_value: '' },
        { function: '__c', vtp_value: 0 },
        {
          function: '__aev',
          vtp_varType: 'URL',
          vtp_component: 'IS_OUTBOUND',
          vtp_affiliatedDomains: ['list'],
        },
        {
          function: '__v',
          vtp_name: 'gtm.triggers',
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: '',
        },
        { function: '__v', vtp_name: 'gtm.elementId', vtp_dataLayerVersion: 1 },
        { function: '__v', vtp_name: 'gtm.elementClasses', vtp_dataLayerVersion: 1 },
        { function: '__aev', vtp_varType: 'URL', vtp_component: 'URL_NO_FRAGMENT' },
        { function: '__aev', vtp_varType: 'URL', vtp_component: 'HOST', vtp_stripWww: true },
        { function: '__aev', vtp_varType: 'URL', vtp_component: 'EXTENSION' },
        { function: '__aev', vtp_varType: 'TEXT' },
        { function: '__aev', vtp_varType: 'URL', vtp_component: 'PATH' },
        { function: '__v', vtp_name: 'gtm.videoStatus', vtp_dataLayerVersion: 1 },
        { function: '__v', vtp_name: 'gtm.videoUrl', vtp_dataLayerVersion: 1 },
        { function: '__v', vtp_name: 'gtm.videoTitle', vtp_dataLayerVersion: 1 },
        { function: '__v', vtp_name: 'gtm.videoProvider', vtp_dataLayerVersion: 1 },
        { function: '__v', vtp_name: 'gtm.videoCurrentTime', vtp_dataLayerVersion: 1 },
        { function: '__v', vtp_name: 'gtm.videoDuration', vtp_dataLayerVersion: 1 },
        { function: '__v', vtp_name: 'gtm.videoPercent', vtp_dataLayerVersion: 1 },
        { function: '__v', vtp_name: 'gtm.videoVisible', vtp_dataLayerVersion: 1 },
        {
          function: '__u',
          vtp_component: 'QUERY',
          vtp_queryKey: 'q,s,search,query,keyword',
          vtp_multiQueryKeys: true,
          vtp_ignoreEmptyQueryParam: true,
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        { function: '__v', vtp_name: 'gtm.scrollThreshold', vtp_dataLayerVersion: 1 },
        { function: '__v', vtp_name: 'gtm.historyChangeSource', vtp_dataLayerVersion: 1 },
        { function: '__v', vtp_name: 'gtm.oldUrl', vtp_dataLayerVersion: 1 },
        { function: '__v', vtp_name: 'gtm.newUrl', vtp_dataLayerVersion: 1 },
      ],
      tags: [
        {
          function: '__gct',
          vtp_trackingId: 'G-RW6PJCQQKH',
          vtp_sessionDuration: 0,
          vtp_googleSignals: ['macro', 1],
          vtp_foreignTld: ['macro', 2],
          vtp_restrictDomain: ['macro', 3],
          vtp_eventSettings: ['map', 'purchase', ['map', 'blacklisted', false, 'conversion', true]],
          tag_id: 7,
        },
        {
          function: '__get',
          vtp_eventName: 'click',
          vtp_settings: [
            'map',
            'streamId',
            'G-RW6PJCQQKH',
            'eventParameters',
            [
              'map',
              'link_id',
              ['macro', 6],
              'link_classes',
              ['macro', 7],
              'link_url',
              ['macro', 8],
              'link_domain',
              ['macro', 9],
              'outbound',
              true,
            ],
          ],
          vtp_deferrable: false,
          tag_id: 17,
        },
        {
          function: '__get',
          vtp_eventName: 'file_download',
          vtp_settings: [
            'map',
            'streamId',
            'G-RW6PJCQQKH',
            'eventParameters',
            [
              'map',
              'link_id',
              ['macro', 6],
              'link_text',
              ['macro', 11],
              'link_url',
              ['macro', 8],
              'file_name',
              ['macro', 12],
              'file_extension',
              ['macro', 10],
            ],
          ],
          vtp_deferrable: false,
          tag_id: 24,
        },
        {
          function: '__get',
          vtp_eventName: ['template', 'video_', ['macro', 13]],
          vtp_settings: [
            'map',
            'streamId',
            'G-RW6PJCQQKH',
            'eventParameters',
            [
              'map',
              'video_url',
              ['macro', 14],
              'video_title',
              ['macro', 15],
              'video_provider',
              ['macro', 16],
              'video_current_time',
              ['macro', 17],
              'video_duration',
              ['macro', 18],
              'video_percent',
              ['macro', 19],
              'visible',
              ['macro', 20],
            ],
          ],
          vtp_deferrable: false,
          tag_id: 27,
        },
        {
          function: '__get',
          vtp_eventName: 'view_search_results',
          vtp_settings: [
            'map',
            'streamId',
            'G-RW6PJCQQKH',
            'eventParameters',
            ['map', 'search_term', ['macro', 21]],
          ],
          vtp_deferrable: true,
          tag_id: 32,
        },
        {
          function: '__get',
          vtp_eventName: 'scroll',
          vtp_settings: [
            'map',
            'streamId',
            'G-RW6PJCQQKH',
            'eventParameters',
            ['map', 'percent_scrolled', ['macro', 22]],
          ],
          vtp_deferrable: false,
          tag_id: 35,
        },
        {
          function: '__get',
          vtp_eventName: 'page_view',
          vtp_settings: [
            'map',
            'streamId',
            'G-RW6PJCQQKH',
            'eventParameters',
            ['map', 'page_referrer', ['macro', 24]],
          ],
          vtp_deferrable: false,
          tag_id: 38,
        },
        {
          function: '__dlm',
          vtp_userInput: [
            'list',
            ['map', 'key', 'gtm.gtagReferrer.G-RW6PJCQQKH', 'value', ['macro', 24]],
          ],
          tag_id: 39,
        },
        {
          function: '__lcl',
          vtp_waitForTags: false,
          vtp_checkValidation: true,
          vtp_uniqueTriggerId: '1_15',
          tag_id: 40,
        },
        {
          function: '__lcl',
          vtp_waitForTags: false,
          vtp_checkValidation: true,
          vtp_uniqueTriggerId: '1_22',
          tag_id: 41,
        },
        {
          function: '__ytl',
          vtp_captureStart: true,
          vtp_captureComplete: true,
          vtp_captureProgress: true,
          vtp_progressThresholdsPercent: '10,25,50,75',
          vtp_triggerStartOption: 'DOM_READY',
          vtp_uniqueTriggerId: '1_25',
          vtp_enableTriggerStartOption: true,
          tag_id: 42,
        },
        {
          function: '__sdl',
          vtp_verticalThresholdUnits: 'PERCENT',
          vtp_verticalThresholdsPercent: '90',
          vtp_verticalThresholdOn: true,
          vtp_horizontalThresholdOn: false,
          vtp_triggerStartOption: 'WINDOW_LOAD',
          vtp_uniqueTriggerId: '1_33',
          vtp_enableTriggerStartOption: true,
          tag_id: 43,
        },
        {
          function: '__ehl',
          vtp_groupEvents: true,
          vtp_groupEventsInterval: 1000,
          vtp_uniqueTriggerId: '1_36',
          tag_id: 44,
        },
      ],
      predicates: [
        { function: '_eq', arg0: ['macro', 0], arg1: 'gtm.js' },
        { function: '_eq', arg0: ['macro', 4], arg1: true },
        { function: '_eq', arg0: ['macro', 0], arg1: 'gtm.linkClick' },
        { function: '_re', arg0: ['macro', 5], arg1: '(^$|((^|,)1_15($|,)))' },
        {
          function: '_re',
          arg0: ['macro', 10],
          arg1: 'pdf|xlsx?|docx?|txt|rtf|csv|exe|key|pp(s|t|tx)|7z|pkg|rar|gz|zip|avi|mov|mp4|mpe?g|wmv|midi?|mp3|wav|wma',
          ignore_case: true,
        },
        { function: '_re', arg0: ['macro', 5], arg1: '(^$|((^|,)1_22($|,)))' },
        { function: '_eq', arg0: ['macro', 0], arg1: 'gtm.video' },
        { function: '_re', arg0: ['macro', 5], arg1: '(^$|((^|,)1_25($|,)))' },
        { function: '_eq', arg0: ['macro', 21], arg1: 'undefined' },
        { function: '_eq', arg0: ['macro', 0], arg1: 'gtm.scrollDepth' },
        { function: '_re', arg0: ['macro', 5], arg1: '(^$|((^|,)1_33($|,)))' },
        {
          function: '_eq',
          arg0: ['macro', 23],
          arg1: ['list', 'pushState', 'popstate', 'replaceState'],
          any_of: true,
        },
        { function: '_eq', arg0: ['macro', 24], arg1: ['macro', 25] },
        { function: '_eq', arg0: ['macro', 0], arg1: 'gtm.historyChange-v2' },
        { function: '_re', arg0: ['macro', 5], arg1: '(^$|((^|,)1_36($|,)))' },
        { function: '_eq', arg0: ['macro', 0], arg1: 'gtm.dom' },
        { function: '_eq', arg0: ['macro', 0], arg1: 'gtm.load' },
      ],
      rules: [
        [
          ['if', 0],
          ['add', 0, 8, 9, 12],
        ],
        [
          ['if', 1, 2, 3],
          ['add', 1],
        ],
        [
          ['if', 2, 4, 5],
          ['add', 2],
        ],
        [
          ['if', 6, 7],
          ['add', 3],
        ],
        [
          ['if', 0],
          ['unless', 8],
          ['add', 4],
        ],
        [
          ['if', 9, 10],
          ['add', 5],
        ],
        [
          ['if', 11, 13, 14],
          ['unless', 12],
          ['add', 6, 7],
        ],
        [
          ['if', 15],
          ['add', 10],
        ],
        [
          ['if', 16],
          ['add', 11],
        ],
      ],
    },
    runtime: [],
  };

  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var ba,
    da = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ea = function (a) {
      var b = 'undefined' != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      return b ? b.call(a) : { next: da(a) };
    },
    fa =
      'function' == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ha;
  if ('function' == typeof Object.setPrototypeOf) ha = Object.setPrototypeOf;
  else {
    var ia;
    a: {
      var ja = { a: !0 },
        ma = {};
      try {
        ma.__proto__ = ja;
        ia = ma.a;
        break a;
      } catch (a) {
        console.error('hack', a);
      }
      ia = !1;
    }
    ha = ia
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + ' is not extensible');
          return a;
        }
      : null;
  }
  var na = ha,
    pa = function (a, b) {
      a.prototype = fa(b.prototype);
      a.prototype.constructor = a;
      if (na) na(a, b);
      else
        for (var c in b)
          if ('prototype' != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.qj = b.prototype;
    },
    qa = this || self,
    ra = function (a) {
      return a;
    };
  var sa = {},
    ta = function (a, b) {
      sa[a] = sa[a] || [];
      sa[a][b] = !0;
    },
    ua = function (a) {
      for (var b = [], c = sa[a] || [], d = 0; d < c.length; d++)
        c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
      for (var e = 0; e < b.length; e++)
        b[e] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'.charAt(b[e] || 0);
      return b.join('');
    };
  var wa = function () {},
    ya = function (a) {
      return 'function' == typeof a;
    },
    g = function (a) {
      return 'string' == typeof a;
    },
    za = function (a) {
      return 'number' == typeof a && !isNaN(a);
    },
    Aa = function (a) {
      var b = '[object Array]' == Object.prototype.toString.call(Object(a));
      Array.isArray ? Array.isArray(a) !== b && ta('TAGGING', 4) : ta('TAGGING', 5);
      return b;
    },
    Ba = function (a, b) {
      if (Array.prototype.indexOf) {
        var c = a.indexOf(b);
        return 'number' == typeof c ? c : -1;
      }
      for (var d = 0; d < a.length; d++) if (a[d] === b) return d;
      return -1;
    },
    Ca = function (a, b) {
      if (a && Aa(a)) for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    Ea = function (a, b) {
      if (!za(a) || !za(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    Ia = function (a, b) {
      for (var c = new Fa(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    Na = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    Oa = function (a) {
      return (
        !!a &&
        ('[object Arguments]' == Object.prototype.toString.call(a) ||
          Object.prototype.hasOwnProperty.call(a, 'callee'))
      );
    },
    Pa = function (a) {
      return Math.round(Number(a)) || 0;
    },
    Qa = function (a) {
      return 'false' == String(a).toLowerCase() ? !1 : !!a;
    },
    Sa = function (a) {
      var b = [];
      if (Aa(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    Ta = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, '') : '';
    },
    Ua = function () {
      return new Date(Date.now());
    },
    Va = function () {
      return Ua().getTime();
    },
    Fa = function () {
      this.prefix = 'gtm.';
      this.values = {};
    };
  Fa.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  Fa.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var Wa = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Xa = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c();
          } catch (d) {
            console.error('hack', d);
          }
        }
      };
    },
    Ya = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Za = function (a) {
      for (var b in a) if (a.hasOwnProperty(b)) return !0;
      return !1;
    },
    $a = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    bb = function (a, b) {
      for (var c = {}, d = c, e = a.split('.'), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    cb = /^\w{1,9}$/,
    db = function (a, b) {
      a = a || {};
      b = b || ',';
      var c = [];
      Na(a, function (d, e) {
        cb.test(d) && e && c.push(d);
      });
      return c.join(b);
    };
  var eb,
    fb = function () {
      if (void 0 === eb) {
        var a = null,
          b = qa.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy('goog#html', {
              createHTML: ra,
              createScript: ra,
              createScriptURL: ra,
            });
          } catch (c) {
            console.error('hack', c);
            qa.console && qa.console.error(c.message);
          }
          eb = a;
        } else eb = a;
      }
      return eb;
    };
  var hb = function (a, b) {
    this.o = b === gb ? a : '';
  };
  hb.prototype.toString = function () {
    return this.o + '';
  };
  var gb = {};
  var kb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  var lb;
  a: {
    var mb = qa.navigator;
    if (mb) {
      var nb = mb.userAgent;
      if (nb) {
        lb = nb;
        break a;
      }
    }
    lb = '';
  }
  var ob = function (a) {
    return -1 != lb.indexOf(a);
  };
  var sb = {},
    tb = function (a, b, c) {
      this.o = c === sb ? a : '';
    };
  tb.prototype.toString = function () {
    return this.o.toString();
  };
  var ub = function (a) {
      return a instanceof tb && a.constructor === tb ? a.o : 'type_error:SafeHtml';
    },
    vb = function (a) {
      var b = fb(),
        c = b ? b.createHTML(a) : a;
      return new tb(c, null, sb);
    },
    wb = new tb((qa.trustedTypes && qa.trustedTypes.emptyHTML) || '', 0, sb);
  var xb = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    yb = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  var zb = (function (a) {
      var b = !1,
        c;
      return function () {
        b || ((c = a()), (b = !0));
        return c;
      };
    })(function () {
      var a = document.createElement('div'),
        b = document.createElement('div');
      b.appendChild(document.createElement('div'));
      a.appendChild(b);
      var c = a.firstChild.firstChild;
      a.innerHTML = ub(wb);
      return !c.parentElement;
    }),
    Ab = function (a, b) {
      if (zb()) for (; a.lastChild; ) a.removeChild(a.lastChild);
      a.innerHTML = ub(b);
    };
  var m = window,
    A = document,
    Bb = navigator,
    Cb = A.currentScript && A.currentScript.src,
    Db = function (a, b) {
      var c = m[a];
      m[a] = void 0 === c ? b : c;
      return m[a];
    },
    Eb = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in { loaded: 1, complete: 1 } && ((a.onreadystatechange = null), b());
            }));
    },
    Fb = function (a, b, c) {
      var d = A.createElement('script');
      d.type = 'text/javascript';
      d.async = !0;
      var e,
        f = fb(),
        h = f ? f.createScriptURL(a) : a;
      e = new hb(h, gb);
      d.src = e instanceof hb && e.constructor === hb ? e.o : 'type_error:TrustedResourceUrl';
      var k,
        l,
        n = ((d.ownerDocument && d.ownerDocument.defaultView) || window).document,
        p = null === (l = n.querySelector) || void 0 === l ? void 0 : l.call(n, 'script[nonce]');
      (k = p ? p.nonce || p.getAttribute('nonce') || '' : '') && d.setAttribute('nonce', k);
      Eb(d, b);
      c && (d.onerror = c);
      var q = A.getElementsByTagName('script')[0] || A.body || A.head;
      q.parentNode.insertBefore(d, q);
      return d;
    },
    Gb = function () {
      if (Cb) {
        var a = Cb.toLowerCase();
        if (0 === a.indexOf('https://')) return 2;
        if (0 === a.indexOf('http://')) return 3;
      }
      return 1;
    },
    Hb = function (a, b) {
      var c = A.createElement('iframe');
      c.height = '0';
      c.width = '0';
      c.style.display = 'none';
      c.style.visibility = 'hidden';
      var d = (A.body && A.body.lastChild) || A.body || A.head;
      d.parentNode.insertBefore(c, d);
      Eb(c, b);
      void 0 !== a && (c.src = a);
      return c;
    },
    Kb = function (a, b, c) {
      var d = new Image(1, 1);
      d.onload = function () {
        d.onload = null;
        b && b();
      };
      d.onerror = function () {
        d.onerror = null;
        c && c();
      };
      d.src = a;
      return d;
    },
    Lb = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent('on' + b, c);
    },
    Mb = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent('on' + b, c);
    },
    F = function (a) {
      m.setTimeout(a, 0);
    },
    Nb = function (a, b) {
      return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null;
    },
    Ob = function (a) {
      var b = a.innerText || a.textContent || '';
      b && ' ' != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ''));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, ' '));
      return b;
    },
    Pb = function (a) {
      var b = A.createElement('div'),
        c = vb('A<div>' + a + '</div>');
      Ab(b, c);
      b = b.lastChild;
      for (var d = []; b.firstChild; ) d.push(b.removeChild(b.firstChild));
      return d;
    },
    Qb = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, h = 0; f && h <= c; h++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    Rb = function (a) {
      (Bb.sendBeacon && Bb.sendBeacon(a)) || Kb(a);
    },
    Sb = function (a, b) {
      var c = a[b];
      c && 'string' === typeof c.animVal && (c = c.animVal);
      return c;
    },
    Vb = function (a) {
      var b = A.featurePolicy;
      return b && ya(b.features) ? -1 !== b.features().indexOf(a) : !1;
    }; /*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var Wb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Xb = function (a) {
      if (null == a) return String(a);
      var b = Wb.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : 'object';
    },
    Yb = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    Zb = function (a) {
      if (!a || 'object' != Xb(a) || a.nodeType || a == a.window) return !1;
      try {
        if (a.constructor && !Yb(a, 'constructor') && !Yb(a.constructor.prototype, 'isPrototypeOf'))
          return !1;
      } catch (c) {
        console.error('hack', c);
        return !1;
      }
      for (var b in a);
      return void 0 === b || Yb(a, b);
    },
    I = function (a, b) {
      var c = b || ('array' == Xb(a) ? [] : {}),
        d;
      for (d in a)
        if (Yb(a, d)) {
          var e = a[d];
          'array' == Xb(e)
            ? ('array' != Xb(c[d]) && (c[d] = []), (c[d] = I(e, c[d])))
            : Zb(e)
            ? (Zb(c[d]) || (c[d] = {}), (c[d] = I(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  var $b = function (a) {
    if (void 0 === a || Aa(a) || Zb(a)) return !0;
    switch (typeof a) {
      case 'boolean':
      case 'number':
      case 'string':
      case 'function':
        return !0;
    }
    return !1;
  };
  var ac = (function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        },
      };
    };
    return {
      Og: a('consent'),
      Pg: a('consent_always_fire'),
      Ze: a('convert_case_to'),
      $e: a('convert_false_to'),
      af: a('convert_null_to'),
      bf: a('convert_true_to'),
      cf: a('convert_undefined_to'),
      Zi: a('debug_mode_metadata'),
      aj: a('event_data_overrides'),
      lb: a('function'),
      Dh: a('instance_name'),
      Fh: a('live_only'),
      Gh: a('malware_disabled'),
      Hh: a('metadata'),
      bj: a('original_activity_id'),
      cj: a('original_vendor_template_id'),
      Jh: a('once_per_event'),
      Ff: a('once_per_load'),
      ej: a('priority_override'),
      fj: a('respected_consent_types'),
      Jf: a('setup_tags'),
      Kf: a('tag_id'),
      Lf: a('teardown_tags'),
    };
  })();
  var yc;
  var zc = [],
    Ac = [],
    Gc = [],
    Hc = [],
    Ic = [],
    Jc = {},
    Kc,
    Lc,
    Mc,
    Nc = function (a, b) {
      var c = a['function'];
      if (!c) throw Error('Error: No function name given for function call.');
      var d = Jc[c],
        e = {},
        f;
      for (f in a)
        if (a.hasOwnProperty(f))
          if (0 === f.indexOf('vtp_'))
            d && b && b.Wf && b.Wf(a[f]), (e[void 0 !== d ? f : f.substr(4)] = a[f]);
          else if (f === ac.Pg.toString() && a[f]) {
          }
      d && b && b.Vf && (e.vtp_gtmCachedValues = b.Vf);
      return void 0 !== d ? d(e) : yc(c, e, b);
    },
    Pc = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = Oc(a[e], b, c));
      return d;
    },
    Oc = function (a, b, c) {
      if (Aa(a)) {
        var d;
        switch (a[0]) {
          case 'function_id':
            return a[1];
          case 'list':
            d = [];
            for (var e = 1; e < a.length; e++) d.push(Oc(a[e], b, c));
            return d;
          case 'macro':
            var f = a[1];
            if (c[f]) return;
            var h = zc[f];
            if (!h || b.Ee(h)) return;
            c[f] = !0;
            try {
              var k = Pc(h, b, c);
              k.vtp_gtmEventId = b.id;
              d = Nc(k, b);
              Mc && (d = Mc.Yh(d, k));
            } catch (y) {
              console.error('hack', y);
              b.lg && b.lg(y, Number(f)), (d = !1);
            }
            c[f] = !1;
            return d;
          case 'map':
            d = {};
            for (var l = 1; l < a.length; l += 2) d[Oc(a[l], b, c)] = Oc(a[l + 1], b, c);
            return d;
          case 'template':
            d = [];
            for (var n = !1, p = 1; p < a.length; p++) {
              var q = Oc(a[p], b, c);
              Lc && (n = n || q === Lc.Vc);
              d.push(q);
            }
            return Lc && n ? Lc.ai(d) : d.join('');
          case 'escape':
            d = Oc(a[1], b, c);
            if (Lc && Aa(a[1]) && 'macro' === a[1][0] && Lc.ui(a)) return Lc.Ii(d);
            d = String(d);
            for (var r = 2; r < a.length; r++) bc[a[r]] && (d = bc[a[r]](d));
            return d;
          case 'tag':
            var u = a[1];
            if (!Hc[u]) throw Error('Unable to resolve tag reference ' + u + '.');
            return (d = { cg: a[2], index: u });
          case 'zb':
            var t = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            t['function'] = a[1];
            var v = Qc(t, b, c),
              x = !!a[4];
            return x || 2 !== v ? x !== (1 === v) : null;
          default:
            throw Error('Attempting to expand unknown Value type: ' + a[0] + '.');
        }
      }
      return a;
    },
    Qc = function (a, b, c) {
      try {
        return Kc(Pc(a, b, c));
      } catch (d) {
        console.error('hack', d);
        JSON.stringify(a);
      }
      return 2;
    };
  var Tc = function (a) {
      function b(r) {
        for (var u = 0; u < r.length; u++) d[r[u]] = !0;
      }
      for (var c = [], d = [], e = Rc(a), f = 0; f < Ac.length; f++) {
        var h = Ac[f],
          k = Sc(h, e);
        if (k) {
          for (var l = h.add || [], n = 0; n < l.length; n++) c[l[n]] = !0;
          b(h.block || []);
        } else null === k && b(h.block || []);
      }
      for (var p = [], q = 0; q < Hc.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    Sc = function (a, b) {
      for (var c = a['if'] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
      }
      for (var f = a.unless || [], h = 0; h < f.length; h++) {
        var k = b(f[h]);
        if (2 === k) return null;
        if (1 === k) return !1;
      }
      return !0;
    },
    Rc = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = Qc(Gc[c], a));
        return b[c];
      };
    };
  var Uc = {
    Yh: function (a, b) {
      b[ac.Ze] && 'string' === typeof a && (a = 1 == b[ac.Ze] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(ac.af) && null === a && (a = b[ac.af]);
      b.hasOwnProperty(ac.cf) && void 0 === a && (a = b[ac.cf]);
      b.hasOwnProperty(ac.bf) && !0 === a && (a = b[ac.bf]);
      b.hasOwnProperty(ac.$e) && !1 === a && (a = b[ac.$e]);
      return a;
    },
  };
  var Vc = function (a, b) {
    var c = String(a);
    return c;
  };
  var $c = function (a) {
      var b = {},
        c = 0;
      Na(a, function (e, f) {
        if (void 0 !== f)
          if (((f = Vc(f, 100)), Wc.hasOwnProperty(e))) b[Wc[e]] = Xc(f);
          else if (Yc.hasOwnProperty(e)) {
            var h = Yc[e],
              k = Xc(f);
            b.hasOwnProperty(h) || (b[h] = k);
          } else if ('category' === e)
            for (var l = Xc(f).split('/', 5), n = 0; n < l.length; n++) {
              var p = Zc[n],
                q = l[n];
              b.hasOwnProperty(p) || (b[p] = q);
            }
          else 10 > c && ((b['k' + c] = Xc(Vc(e, 40))), (b['v' + c] = Xc(f)), c++);
      });
      var d = [];
      Na(b, function (e, f) {
        d.push('' + e + f);
      });
      return d.join('~');
    },
    Xc = function (a) {
      return ('' + a).replace(/~/g, function () {
        return '~~';
      });
    },
    Wc = {
      item_id: 'id',
      item_name: 'nm',
      item_brand: 'br',
      item_category: 'ca',
      item_category2: 'c2',
      item_category3: 'c3',
      item_category4: 'c4',
      item_category5: 'c5',
      item_variant: 'va',
      price: 'pr',
      quantity: 'qt',
      coupon: 'cp',
      item_list_name: 'ln',
      index: 'lp',
      item_list_id: 'li',
      discount: 'ds',
      affiliation: 'af',
      promotion_id: 'pi',
      promotion_name: 'pn',
      creative_name: 'cn',
      creative_slot: 'cs',
      location_id: 'lo',
    },
    Yc = {
      id: 'id',
      name: 'nm',
      brand: 'br',
      variant: 'va',
      list_name: 'ln',
      list_position: 'lp',
      list: 'ln',
      position: 'lp',
      creative: 'cn',
    },
    Zc = ['ca', 'c2', 'c3', 'c4', 'c5'];
  var ad = function (a) {
      var b = [];
      Na(a, function (c, d) {
        null != d && b.push(encodeURIComponent(c) + '=' + encodeURIComponent(String(d)));
      });
      return b.join('&');
    },
    hd = function (a, b, c, d) {
      this.Ra = a.Ra;
      this.rb = a.rb;
      this.J = a.J;
      this.s = b;
      this.F = c;
      this.C = ad(a.Ra);
      this.o = ad(a.J);
      this.O = d ? this.o.length : 0;
      if (16384 < this.O) throw Error('EVENT_TOO_LARGE');
    };
  var id = function () {
    this.events = [];
    this.o = this.Ra = '';
    this.C = 0;
    this.s = !1;
  };
  id.prototype.add = function (a) {
    return this.F(a)
      ? (this.events.push(a), (this.Ra = a.C), (this.o = a.s), (this.C += a.O), (this.s = a.F), !0)
      : !1;
  };
  id.prototype.F = function (a) {
    var b = 20 > this.events.length && 16384 > a.O + this.C,
      c = this.Ra === a.C && this.o === a.s && this.s === a.F;
    return 0 == this.events.length || (b && c);
  };
  var jd = function (a, b) {
      Na(a, function (c, d) {
        null != d && b.push(encodeURIComponent(c) + '=' + encodeURIComponent(d));
      });
    },
    kd = function (a, b) {
      var c = [];
      a.C && c.push(a.C);
      b && c.push('_s=' + b);
      jd(a.rb, c);
      var d = !1;
      a.o && (c.push(a.o), (d = !0));
      var e = c.join('&'),
        f = '',
        h = e.length + a.s.length + 1;
      d && 2048 < h && ((f = c.pop()), (e = c.join('&')));
      return { Ke: e, body: f };
    },
    ld = function (a, b) {
      var c = a.events;
      if (1 == c.length) return kd(c[0], b);
      var d = [];
      a.Ra && d.push(a.Ra);
      for (var e = {}, f = 0; f < c.length; f++)
        Na(c[f].rb, function (u, t) {
          null != t && ((e[u] = e[u] || {}), (e[u][String(t)] = e[u][String(t)] + 1 || 1));
        });
      var h = {};
      Na(e, function (u, t) {
        var v,
          x = -1,
          y = 0;
        Na(t, function (w, z) {
          y += z;
          var B = (w.length + u.length + 2) * (z - 1);
          B > x && ((v = w), (x = B));
        });
        y == c.length && (h[u] = v);
      });
      jd(h, d);
      b && d.push('_s=' + b);
      for (var k = d.join('&'), l = [], n = {}, p = 0; p < c.length; n = { Ec: n.Ec }, p++) {
        var q = [];
        n.Ec = {};
        Na(
          c[p].rb,
          (function (u) {
            return function (t, v) {
              h[t] != '' + v && (u.Ec[t] = v);
            };
          })(n)
        );
        c[p].o && q.push(c[p].o);
        jd(n.Ec, q);
        l.push(q.join('&'));
      }
      var r = l.join('\r\n');
      return { Ke: k, body: r };
    };
  var L = {
    ac: '_ee',
    ad: '_syn_or_mod',
    gj: '_uei',
    Yd: '_eu',
    dj: '_pci',
    Ab: 'event_callback',
    Kc: 'event_timeout',
    Da: 'gtag.config',
    La: 'gtag.get',
    xa: 'purchase',
    yb: 'refund',
    cb: 'begin_checkout',
    vb: 'add_to_cart',
    wb: 'remove_from_cart',
    Yg: 'view_cart',
    ef: 'add_to_wishlist',
    Ka: 'view_item',
    Rb: 'view_promotion',
    Gc: 'select_promotion',
    Cd: 'select_item',
    xb: 'view_item_list',
    df: 'add_payment_info',
    Xg: 'add_shipping_info',
    Na: 'value_key',
    Va: 'value_callback',
    Ea: 'allow_ad_personalization_signals',
    Xb: 'restricted_data_processing',
    Sb: 'allow_google_signals',
    Ha: 'cookie_expires',
    Tb: 'cookie_update',
    Zb: 'session_duration',
    Pc: 'session_engaged_time',
    Pa: 'user_properties',
    oa: 'transport_url',
    R: 'ads_data_redaction',
    ya: 'user_data',
    Ub: 'first_party_collection',
    D: 'ad_storage',
    H: 'analytics_storage',
    Xe: 'region',
    Ye: 'wait_for_update',
    Ga: 'conversion_linker',
    Fa: 'conversion_cookie_prefix',
    fa: 'value',
    da: 'currency',
    zf: 'trip_type',
    X: 'items',
    sf: 'passengers',
    Ed: 'allow_custom_scripts',
    Eb: 'session_id',
    xf: 'quantity',
    kb: 'transaction_id',
    ib: 'language',
    Jc: 'country',
    Hc: 'allow_enhanced_conversions',
    Jd: 'aw_merchant_id',
    Hd: 'aw_feed_country',
    Id: 'aw_feed_language',
    Gd: 'discount',
    ma: 'developer_id',
    Rc: 'delivery_postal_code',
    Pd: 'estimated_delivery_date',
    Nd: 'shipping',
    Wd: 'new_customer',
    Kd: 'customer_lifetime_value',
    Od: 'enhanced_conversions',
    zb: 'page_view',
    na: 'linker',
    P: 'domains',
    Cb: 'decorate_forms',
    qf: 'enhanced_conversions_automatic_settings',
    hh: 'auto_detection_enabled',
  };
  (L.ff = 'user_engagement'),
    (L.Sg = 'app_remove'),
    (L.Tg = 'app_store_refund'),
    (L.Ug = 'app_store_subscription_cancel'),
    (L.Vg = 'app_store_subscription_convert'),
    (L.Wg = 'app_store_subscription_renew'),
    (L.Zg = 'first_open'),
    (L.$g = 'first_visit'),
    (L.ah = 'in_app_purchase'),
    (L.bh = 'session_start'),
    (L.dh = 'user_data_login'),
    (L.eh = 'user_data_logout'),
    (L.fh = 'allow_display_features'),
    (L.eb = 'client_id'),
    (L.la = 'cookie_domain'),
    (L.Ic = 'cookie_name'),
    (L.fb = 'cookie_path'),
    (L.Ma = 'cookie_flags'),
    (L.jf = 'custom_map'),
    (L.Td = 'groups'),
    (L.$i = 'non_interaction'),
    (L.Db = 'page_location'),
    (L.rf = 'page_path'),
    (L.Wa = 'page_referrer'),
    (L.Xd = 'page_title'),
    (L.Yb = 'send_page_view'),
    (L.jb = 'send_to'),
    (L.Oc = 'session_engaged'),
    (L.Mc = '_logged_in_state'),
    (L.Qc = 'session_number'),
    (L.zh = 'tracking_id'),
    (L.Oa = 'url_passthrough'),
    (L.Bb = 'accept_incoming'),
    (L.Wb = 'url_position'),
    (L.vf = 'phone_conversion_number'),
    (L.tf = 'phone_conversion_callback'),
    (L.uf = 'phone_conversion_css_class'),
    (L.wf = 'phone_conversion_options'),
    (L.vh = 'phone_conversion_ids'),
    (L.uh = 'phone_conversion_country_code'),
    (L.hf = 'aw_remarketing'),
    (L.Fd = 'aw_remarketing_only'),
    (L.Dd = 'gclid'),
    (L.gh = 'auid'),
    (L.mh = 'affiliation'),
    (L.pf = 'tax'),
    (L.Md = 'list_name'),
    (L.nf = 'checkout_step'),
    (L.lf = 'checkout_option'),
    (L.nh = 'coupon'),
    (L.oh = 'promotions'),
    (L.Fb = 'user_id'),
    (L.wh = 'retoken'),
    (L.ca = 'cookie_prefix'),
    (L.kf = 'disable_merchant_reported_purchases'),
    (L.lh = 'dc_natural_search'),
    (L.kh = 'dc_custom_params'),
    (L.sh = 'method'),
    (L.yh = 'search_term'),
    (L.jh = 'content_type'),
    (L.th = 'optimize_id'),
    (L.ph = 'experiments'),
    (L.Vb = 'google_signals'),
    (L.Sd = 'google_tld'),
    (L.Sc = 'update'),
    (L.Rd = 'firebase_id'),
    (L.Lc = 'ga_restrict_domain'),
    (L.Qd = 'event_settings'),
    (L.Ld = 'dynamic_event_settings'),
    (L.$b = 'user_data_settings'),
    (L.xh = 'screen_name'),
    (L.rh = '_x_19'),
    (L.hb = '_ecid'),
    (L.qh = '_x_20'),
    (L.Vd = 'internal_traffic_results'),
    (L.yf = 'traffic_type'),
    (L.Nc = 'referral_exclusion_definition'),
    (L.Ud = 'ignore_referrer'),
    (L.ih = 'content_group');
  (L.Ah = [
    L.Ea,
    L.Hc,
    L.Sb,
    L.X,
    L.Xb,
    L.la,
    L.Ha,
    L.Ma,
    L.Ic,
    L.fb,
    L.ca,
    L.Tb,
    L.jf,
    L.ma,
    L.Ld,
    L.Ab,
    L.Qd,
    L.Kc,
    L.Ub,
    L.Lc,
    L.Vb,
    L.Sd,
    L.Td,
    L.Vd,
    L.na,
    L.Nc,
    L.jb,
    L.Yb,
    L.Zb,
    L.Pc,
    L.oa,
    L.Sc,
    L.$b,
    L.Pa,
    L.Rc,
    L.Yd,
  ]),
    (L.Af = [L.Db, L.Wa, L.Xd, L.ib, L.xh, L.Fb, L.Rd, L.ih]),
    (L.Ch = [L.Sg, L.Tg, L.Ug, L.Vg, L.Wg, L.Zg, L.$g, L.ah, L.bh, L.ff]);
  L.Cf = [L.xa, L.yb, L.cb, L.vb, L.wb, L.Yg, L.ef, L.Ka, L.Rb, L.Gc, L.xb, L.Cd, L.df, L.Xg];
  L.Bf = [L.Ea, L.Sb, L.Tb];
  L.Df = [L.Ha, L.Kc, L.Zb, L.Pc];
  var vd = function (a) {
    ta('GTM', a);
  };
  var wd = function (a, b) {
    this.o = a;
    this.defaultValue = void 0 === b ? !1 : b;
  };
  var xd = new wd(1936, !0),
    yd = new wd(1933);
  var Ad = function () {
    var a = zd;
    if (a.Ce && a.hasOwnProperty('Ce')) return a.Ce;
    var b = new a();
    return (a.Ce = b);
  };
  var zd = function () {
      var a = {};
      this.o = function (b, c) {
        return null != a[b] ? a[b] : c;
      };
      this.s = function () {
        a[yd.o] = !0;
      };
    },
    Bd = function (a) {
      return Ad().o(a.o, a.defaultValue);
    };
  var Cd = [];
  function Nd() {
    var a = Db('google_tag_data', {});
    a.ics ||
      (a.ics = {
        entries: {},
        set: Od,
        update: Pd,
        addListener: Qd,
        notifyListeners: Rd,
        active: !1,
        usedDefault: !1,
      });
    return a.ics;
  }
  function Od(a, b, c, d, e, f) {
    var h = Nd();
    h.active = !0;
    h.usedDefault = !0;
    if (void 0 != b) {
      var k = h.entries,
        l = k[a] || {},
        n = l.region,
        p = c && g(c) ? c.toUpperCase() : void 0;
      d = d.toUpperCase();
      e = e.toUpperCase();
      if ('' === d || p === e || (p === d ? n !== e : !p && !n)) {
        var q = !!(f && 0 < f && void 0 === l.update),
          r = { region: p, initial: 'granted' === b, update: l.update, quiet: q };
        if ('' !== d || !1 !== l.initial) k[a] = r;
        q &&
          m.setTimeout(function () {
            k[a] === r && r.quiet && ((r.quiet = !1), Sd(a), Rd(), ta('TAGGING', 2));
          }, f);
      }
    }
  }
  function Pd(a, b) {
    var c = Nd();
    c.active = !0;
    if (void 0 != b) {
      var d = Td(a),
        e = c.entries,
        f = (e[a] = e[a] || {});
      f.update = 'granted' === b;
      var h = Td(a);
      f.quiet ? ((f.quiet = !1), Sd(a)) : h !== d && Sd(a);
    }
  }
  function Qd(a, b) {
    Cd.push({ qe: a, ii: b });
  }
  function Sd(a) {
    for (var b = 0; b < Cd.length; ++b) {
      var c = Cd[b];
      Aa(c.qe) && -1 !== c.qe.indexOf(a) && (c.pg = !0);
    }
  }
  function Rd(a) {
    for (var b = 0; b < Cd.length; ++b) {
      var c = Cd[b];
      if (c.pg) {
        c.pg = !1;
        try {
          c.ii({ Xh: a });
        } catch (d) {
          console.error('hack', d);
        }
      }
    }
  }
  var Td = function (a) {
      var b = Nd().entries[a] || {};
      return void 0 !== b.update ? b.update : b.initial;
    },
    Ud = function (a) {
      return (Nd().entries[a] || {}).initial;
    },
    Vd = function (a) {
      return !(Nd().entries[a] || {}).quiet;
    },
    Wd = function () {
      return Bd(yd) ? Nd().active : !1;
    },
    Xd = function () {
      return Nd().usedDefault;
    },
    Yd = function (a, b) {
      Nd().addListener(a, b);
    },
    Zd = function (a) {
      Nd().notifyListeners(a);
    },
    $d = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!Vd(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        Yd(b, function (e) {
          d || c() || ((d = !0), a(e));
        });
      } else a({});
    },
    ae = function (a, b) {
      function c() {
        for (var f = [], h = 0; h < d.length; h++) {
          var k = d[h];
          !1 === Td(k) || e[k] || (f.push(k), (e[k] = !0));
        }
        return f;
      }
      var d = g(b) ? [b] : b,
        e = {};
      c().length !== d.length &&
        Yd(d, function (f) {
          var h = c();
          0 < h.length && ((f.qe = h), a(f));
        });
    };
  function be(a) {
    for (var b = [], c = 0; c < ce.length; c++) {
      var d = a(ce[c]);
      b[c] = !0 === d ? '1' : !1 === d ? '0' : '-';
    }
    return b.join('');
  }
  var ce = [L.D, L.H],
    de = function (a) {
      var b = a[L.Xe];
      b && vd(40);
      var c = a[L.Ye];
      c && vd(41);
      for (var d = Aa(b) ? b : [b], e = { Nb: 0 }; e.Nb < d.length; e = { Nb: e.Nb }, ++e.Nb)
        Na(
          a,
          (function (f) {
            return function (h, k) {
              if (h !== L.Xe && h !== L.Ye) {
                var l = d[f.Nb];
                Nd().set(h, k, l, 'US', 'US-WI', c);
              }
            };
          })(e)
        );
    },
    ee = function (a, b) {
      Na(a, function (c, d) {
        Nd().update(c, d);
      });
      Zd(b);
    },
    N = function (a) {
      var b = Td(a);
      return void 0 != b ? b : !0;
    },
    fe = function () {
      return 'G1' + be(Td);
    },
    ge = function (a, b) {
      ae(a, b);
    },
    he = function (a, b) {
      $d(a, b);
    };
  var je = function (a) {
      return ie ? A.querySelectorAll(a) : null;
    },
    ke = function (a, b) {
      if (!ie) return null;
      if (Element.prototype.closest)
        try {
          return a.closest(b);
        } catch (e) {
          console.error('hack', e);
          return null;
        }
      var c =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector,
        d = a;
      if (!A.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d;
        } catch (e) {
          console.error('hack', e);
          break;
        }
        d = d.parentElement || d.parentNode;
      } while (null !== d && 1 === d.nodeType);
      return null;
    },
    le = !1;
  if (A.querySelectorAll)
    try {
      var me = A.querySelectorAll(':root');
      me && 1 == me.length && me[0] == A.documentElement && (le = !0);
    } catch (a) {
      console.error('hack', A);
    }
  var ie = le;
  var ne,
    oe = !1;
  var pe = function (a) {
    if (A.hidden) return !0;
    var b = a.getBoundingClientRect();
    if (b.top == b.bottom || b.left == b.right || !m.getComputedStyle) return !0;
    var c = m.getComputedStyle(a, null);
    if ('hidden' === c.visibility) return !0;
    for (var d = a, e = c; d; ) {
      if ('none' === e.display) return !0;
      var f = e.opacity,
        h = e.filter;
      if (h) {
        var k = h.indexOf('opacity(');
        0 <= k &&
          ((h = h.substring(k + 8, h.indexOf(')', k))),
          '%' == h.charAt(h.length - 1) && (h = h.substring(0, h.length - 1)),
          (f = Math.min(h, f)));
      }
      if (void 0 !== f && 0 >= f) return !0;
      (d = d.parentElement) && (e = m.getComputedStyle(d, null));
    }
    return !1;
  };
  var qe = function () {
      var a = A.body,
        b = A.documentElement || (a && a.parentElement),
        c,
        d;
      if (A.compatMode && 'BackCompat' !== A.compatMode)
        (c = b ? b.clientHeight : 0), (d = b ? b.clientWidth : 0);
      else {
        var e = function (f, h) {
          return f && h ? Math.min(f, h) : Math.max(f, h);
        };
        vd(7);
        c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
        d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0);
      }
      return { width: d, height: c };
    },
    re = function (a) {
      var b = qe(),
        c = b.height,
        d = b.width,
        e = a.getBoundingClientRect(),
        f = e.bottom - e.top,
        h = e.right - e.left;
      return f && h
        ? (1 - Math.min((Math.max(0 - e.left, 0) + Math.max(e.right - d, 0)) / h, 1)) *
            (1 - Math.min((Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f, 1))
        : 0;
    };
  var ye = /:[0-9]+$/,
    ze = function (a, b, c) {
      for (var d = a.split('&'), e = 0; e < d.length; e++) {
        var f = d[e].split('=');
        if (decodeURIComponent(f[0]).replace(/\+/g, ' ') === b) {
          var h = f.slice(1).join('=');
          return c ? h : decodeURIComponent(h).replace(/\+/g, ' ');
        }
      }
    },
    Ce = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ('protocol' === b || 'port' === b) a.protocol = Ae(a.protocol) || Ae(m.location.protocol);
      'port' === b
        ? (a.port = String(
            Number(a.hostname ? a.port : m.location.port) ||
              ('http' == a.protocol ? 80 : 'https' == a.protocol ? 443 : '')
          ))
        : 'host' === b &&
          (a.hostname = (a.hostname || m.location.hostname).replace(ye, '').toLowerCase());
      return Be(a, b, c, d, e);
    },
    Be = function (a, b, c, d, e) {
      var f,
        h = Ae(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case 'url_no_fragment':
          f = De(a);
          break;
        case 'protocol':
          f = h;
          break;
        case 'host':
          f = a.hostname.replace(ye, '').toLowerCase();
          if (c) {
            var k = /^www\d*\./.exec(f);
            k && k[0] && (f = f.substr(k[0].length));
          }
          break;
        case 'port':
          f = String(Number(a.port) || ('http' == h ? 80 : 'https' == h ? 443 : ''));
          break;
        case 'path':
          a.pathname || a.hostname || ta('TAGGING', 1);
          f = '/' == a.pathname.substr(0, 1) ? a.pathname : '/' + a.pathname;
          var l = f.split('/');
          0 <= Ba(d || [], l[l.length - 1]) && (l[l.length - 1] = '');
          f = l.join('/');
          break;
        case 'query':
          f = a.search.replace('?', '');
          e && (f = ze(f, e, void 0));
          break;
        case 'extension':
          var n = a.pathname.split('.');
          f = 1 < n.length ? n[n.length - 1] : '';
          f = f.split('/')[0];
          break;
        case 'fragment':
          f = a.hash.replace('#', '');
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    Ae = function (a) {
      return a ? a.replace(':', '').toLowerCase() : '';
    },
    De = function (a) {
      var b = '';
      if (a && a.href) {
        var c = a.href.indexOf('#');
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    Ee = function (a) {
      var b = A.createElement('a');
      a && (b.href = a);
      var c = b.pathname;
      '/' !== c[0] && (a || ta('TAGGING', 1), (c = '/' + c));
      var d = b.hostname.replace(ye, '');
      return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: d,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port,
      };
    },
    Fe = function (a) {
      function b(n) {
        var p = n.split('=')[0];
        return 0 > d.indexOf(p) ? n : p + '=0';
      }
      function c(n) {
        return n
          .split('&')
          .map(b)
          .filter(function (p) {
            return void 0 != p;
          })
          .join('&');
      }
      var d = 'gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl'.split(' '),
        e = Ee(a),
        f = a.split(/[?#]/)[0],
        h = e.search,
        k = e.hash;
      '?' === h[0] && (h = h.substring(1));
      '#' === k[0] && (k = k.substring(1));
      h = c(h);
      k = c(k);
      '' !== h && (h = '?' + h);
      '' !== k && (k = '#' + k);
      var l = '' + f + h + k;
      '/' === l[l.length - 1] && (l = l.substring(0, l.length - 1));
      return l;
    };
  var Ie = {},
    Je = !0,
    Ke = !1;
  Ie.Mg = 'true';
  var Le = function (a) {
    if ('false' === Ie.Mg || !Je) return !1;
    if (Ke) return !0;
    var b,
      c = 'AW-' + a;
    if (!oe) {
      oe = !0;
      ne = ne || {};
    }
    b = ne[c];
    return !!b && !!b.preAutoPii;
  };
  var Me = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),
    Ne = new RegExp(/@(gmail|googlemail)\./i),
    Oe = new RegExp(/support|noreply/i),
    Pe = 'SCRIPT STYLE IMG SVG PATH BR'.split(' '),
    Qe = ['BR'],
    Re = {};
  function Se(a) {
    var b;
    if (a === A.body) b = 'body';
    else {
      var c;
      if (a.id) c = '#' + a.id;
      else {
        var d;
        if (a.parentElement) {
          var e;
          a: {
            var f = a.parentElement;
            if (f) {
              for (var h = 0; h < f.childElementCount; h++)
                if (f.children[h] === a) {
                  e = h + 1;
                  break a;
                }
              e = -1;
            } else e = 1;
          }
          d = Se(a.parentElement) + '>:nth-child(' + e + ')';
        } else d = '';
        c = d;
      }
      b = c;
    }
    return b;
  }
  function Te(a, b) {
    if (1 >= a.length) return a;
    var c = a.filter(b);
    return 0 == c.length ? a : c;
  }
  function Ue(a) {
    if (0 == a.length) return null;
    var b;
    b = Te(a, function (c) {
      return !Oe.test(c.wa);
    });
    b = Te(b, function (c) {
      return 'INPUT' === c.element.tagName.toUpperCase();
    });
    b = Te(b, function (c) {
      return !pe(c.element);
    });
    return b[0];
  }
  var Ve = function (a) {
      a = a || { Ae: !0, Be: !0 };
      a.Za = a.Za || { email: !0, phone: !0, Tf: !0 };
      var b,
        c = a,
        d = !!c.Ae + '.' + !!c.Be;
      c && c.ld && c.ld.length && (d += '.' + c.ld.join('.'));
      c && c.Za && (d += '.' + c.Za.email + '.' + c.Za.phone + '.' + c.Za.Tf);
      b = d;
      var e = Re[b];
      if (e && 200 > Va() - e.timestamp) return e.result;
      var f;
      var h = [],
        k = A.body;
      if (k) {
        for (var l = k.querySelectorAll('*'), n = 0; n < l.length && 1e4 > n; n++) {
          var p = l[n];
          if (!(0 <= Pe.indexOf(p.tagName.toUpperCase()))) {
            for (var q = !1, r = 0; r < p.childElementCount && 1e4 > r; r++)
              if (!(0 <= Qe.indexOf(p.children[r].tagName.toUpperCase()))) {
                q = !0;
                break;
              }
            q || h.push(p);
          }
        }
        f = { elements: h, status: 1e4 < l.length ? '2' : '1' };
      } else f = { elements: h, status: '4' };
      var u = f,
        t = u.status,
        v;
      if (a.Za && a.Za.email) {
        for (var x = u.elements, y = [], w = 0; w < x.length; w++) {
          var z = x[w],
            B = z.textContent;
          z.value && (B = z.value);
          if (B) {
            var C = B.match(Me);
            if (C) {
              var D = C[0],
                E;
              if (m.location) {
                var H = Be(m.location, 'host', !0);
                E = 0 <= D.toLowerCase().indexOf(H);
              } else E = !1;
              E || y.push({ element: z, wa: D });
            }
          }
        }
        var J;
        var K = a && a.ld;
        if (K && 0 !== K.length) {
          for (var M = [], T = 0; T < y.length; T++) {
            for (var R = !0, G = 0; G < K.length; G++) {
              var P = K[G];
              if (P && ke(y[T].element, P)) {
                R = !1;
                break;
              }
            }
            R && M.push(y[T]);
          }
          J = M;
        } else J = y;
        v = Ue(J);
        10 < y.length && (t = '3');
      }
      var aa = [];
      if (v) {
        var ca = v.element,
          la = { wa: v.wa, tagName: ca.tagName, type: 1 };
        a.Ae && (la.querySelector = Se(ca));
        a.Be && (la.isVisible = !pe(ca));
        aa.push(la);
      }
      var O = { elements: aa, status: t };
      Re[b] = { timestamp: Va(), result: O };
      return O;
    },
    We = function (a) {
      return a.tagName + ':' + a.isVisible + ':' + a.wa.length + ':' + Ne.test(a.wa);
    };
  var Xe = function (a) {
      return /^e\d+$/.test(a) || /^[0-9A-Za-z_-]{43}$/.test(a);
    },
    Ye = function (a) {
      return void 0 === a || null === a ? '' : g(a) ? Ta(String(a)) : 'e0';
    },
    $e = function (a) {
      return a.replace(Ze, '');
    },
    bf = function (a) {
      return af(a.replace(/\s/g, ''));
    },
    af = function (a) {
      return Ta(a.replace(cf, '').toLowerCase());
    },
    ef = function (a) {
      a = a.replace(/[\s-()/.]/g, '');
      '+' !== a.charAt(0) && (a = '+' + a);
      return df.test(a) ? a : 'e0';
    },
    gf = function (a) {
      var b = a.toLowerCase().split('@');
      if (2 == b.length) {
        var c = b[0];
        /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ''));
        c = c + '@' + b[1];
        if (ff.test(c)) return c;
      }
      return 'e0';
    },
    kf = function (a, b, c) {
      window.Promise || c([], []);
      Promise.all(
        a.map(function (d) {
          return d.value && hf(d.name)
            ? jf(d.value).then(function (e) {
                d.value = e;
              })
            : Promise.resolve();
        })
      )
        .then(function () {
          c(a, b);
        })
        .catch(function (e) {
          console.error('hack', e);
          c([], []);
        });
    },
    jf = function (a) {
      if ('' === a || 'e0' === a) return Promise.resolve(a);
      if (m.crypto && m.crypto.subtle)
        try {
          var b = lf(a);
          return m.crypto.subtle
            .digest('SHA-256', b)
            .then(function (c) {
              var d = Array.from(new Uint8Array(c))
                .map(function (e) {
                  return String.fromCharCode(e);
                })
                .join('');
              return m.btoa(d).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
            })
            .catch(function (e) {
              console.error('hack', e);
              return 'e2';
            });
        } catch (c) {
          console.error('hack', c);
          return Promise.resolve('e2');
        }
      else return Promise.resolve('e1');
    },
    lf = function (a) {
      var b;
      if (m.TextEncoder) b = new m.TextEncoder('utf-8').encode(a);
      else {
        for (var c = [], d = 0; d < a.length; d++) {
          var e = a.charCodeAt(d);
          128 > e
            ? c.push(e)
            : 2048 > e
            ? c.push(192 | (e >> 6), 128 | (e & 63))
            : 55296 > e || 57344 <= e
            ? c.push(224 | (e >> 12), 128 | ((e >> 6) & 63), 128 | (e & 63))
            : ((e = 65536 + (((e & 1023) << 10) | (a.charCodeAt(++d) & 1023))),
              c.push(
                240 | (e >> 18),
                128 | ((e >> 12) & 63),
                128 | ((e >> 6) & 63),
                128 | (e & 63)
              ));
        }
        b = new Uint8Array(c);
      }
      return b;
    },
    cf = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
    ff = /^\S+@\S+\.\S+$/,
    df = /^\+\d{11,15}$/,
    Ze = /[.~]/g,
    mf = {},
    nf =
      ((mf.email = 'em'),
      (mf.phone_number = 'pn'),
      (mf.first_name = 'fn'),
      (mf.last_name = 'ln'),
      (mf.street = 'sa'),
      (mf.city = 'ct'),
      (mf.region = 'rg'),
      (mf.country = 'co'),
      (mf.postal_code = 'pc'),
      (mf.error_code = 'ec'),
      mf),
    of = function (a, b, c) {
      function d(t, v, x) {
        var y = t[v];
        Aa(y) || (y = [y]);
        for (var w = 0; w < y.length; ++w) {
          var z = Ye(y[w]);
          '' !== z && h.push({ name: v, value: x(z), index: void 0 });
        }
      }
      function e(t, v, x, y) {
        var w = Ye(t[v]);
        '' !== w && h.push({ name: v, value: x(w), index: y });
      }
      function f(t) {
        return function (v) {
          vd(64);
          return t(v);
        };
      }
      var h = [],
        k = [];
      if ('https:' === m.location.protocol) {
        var l = function (t, v) {
          var x = t[v];
          Aa(x) || (x = [x]);
          for (var y = 0; y < x.length; ++y) {
            var w = Ye(x[y]);
            if ('' !== w) return w;
          }
          return null;
        };
        d(a, 'email', gf);
        var n = l(a, 'email');
        if (n) for (var p = 0; p < b.length; p++) k.push(b[p].wa.toLowerCase() === n.toLowerCase());
        d(a, 'phone_number', ef);
        d(a, 'first_name', f(bf));
        d(a, 'last_name', f(bf));
        var q = a.home_address || {};
        d(q, 'street', f(af));
        d(q, 'city', f(af));
        d(q, 'postal_code', f($e));
        d(q, 'region', f(af));
        d(q, 'country', f($e));
        var r = a.address || {};
        Aa(r) || (r = [r]);
        for (var u = 0; u < r.length; u++)
          e(r[u], 'first_name', bf, u),
            e(r[u], 'last_name', bf, u),
            e(r[u], 'street', af, u),
            e(r[u], 'city', af, u),
            e(r[u], 'postal_code', $e, u),
            e(r[u], 'region', af, u),
            e(r[u], 'country', $e, u);
        kf(h, k, c);
      } else h.push({ name: 'error_code', value: 'e3', index: void 0 }), c(h, k);
    },
    pf = function (a, b) {
      of(a, [], function (c, d) {
        for (var e = ['tv.1'], f = 0; f < c.length; ++f) {
          var h = c[f].name,
            k = c[f].value,
            l = c[f].index,
            n = nf[h];
          n && k && (!hf(h) || Xe(k)) && (void 0 !== l && (n += l), e.push(n + '.' + k));
        }
        b(encodeURIComponent(e.join('~')), d);
      });
    },
    qf = function (a, b) {
      if (m.Promise)
        try {
          return new Promise(function (c) {
            of(a, b, function (d, e) {
              for (var f = ['tv.1'], h = 0; h < d.length; ++h) {
                var k = d[h].name,
                  l = d[h].value,
                  n = d[h].index,
                  p = nf[k];
                p && l && (!hf(k) || Xe(l)) && (void 0 !== n && (p += n), f.push(p + '.' + l));
              }
              c({ vc: encodeURIComponent(f.join('~')), ic: e });
            });
          });
        } catch (c) {
          console.error('hack', c);
        }
    },
    hf = function (a) {
      return -1 !== ['email', 'phone_number', 'first_name', 'last_name', 'street'].indexOf(a);
    };
  var rf = function () {
      this.eventModel = {};
      this.targetConfig = {};
      this.containerConfig = {};
      this.remoteConfig = {};
      this.globalConfig = {};
      this.onSuccess = function () {};
      this.onFailure = function () {};
      this.setContainerTypeLoaded = function () {};
      this.getContainerTypeLoaded = function () {};
      this.eventId = void 0;
      this.isGtmEvent = !1;
    },
    sf = function (a) {
      var b = new rf();
      b.eventModel = a;
      return b;
    },
    tf = function (a, b) {
      a.targetConfig = b;
      return a;
    },
    uf = function (a, b) {
      a.containerConfig = b;
      return a;
    },
    vf = function (a, b) {
      a.remoteConfig = b;
      return a;
    },
    wf = function (a, b) {
      a.globalConfig = b;
      return a;
    },
    xf = function (a, b) {
      a.onSuccess = b;
      return a;
    },
    yf = function (a, b) {
      a.setContainerTypeLoaded = b;
      return a;
    },
    zf = function (a, b) {
      a.getContainerTypeLoaded = b;
      return a;
    },
    Af = function (a, b) {
      a.onFailure = b;
      return a;
    };
  rf.prototype.getWithConfig = function (a) {
    if (void 0 !== this.eventModel[a]) return this.eventModel[a];
    if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
    if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
    if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a];
    if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
  };
  var Bf = function (a) {
      function b(d) {
        for (var e = Object.keys(d), f = 0; f < e.length; ++f) c[e[f]] = 1;
      }
      var c = {};
      b(a.eventModel);
      b(a.targetConfig);
      b(a.containerConfig);
      b(a.globalConfig);
      return Object.keys(c);
    },
    Cf = function (a, b, c) {
      function d(h) {
        Zb(h) &&
          Na(h, function (k, l) {
            f = !0;
            e[k] = l;
          });
      }
      var e = {},
        f = !1;
      (c && 1 !== c) ||
        (d(a.globalConfig[b]), d(a.remoteConfig[b]), d(a.containerConfig[b]), d(a.targetConfig[b]));
      (c && 2 !== c) || d(a.eventModel[b]);
      return f ? e : void 0;
    };
  var Df = {},
    Q = null,
    Ef = Math.random();
  Df.M = 'G-RW6PJCQQKH';
  Df.$c = '8n0';
  Df.Rg =
    'ChAI8LGSiQYQ/8Hu4Z6Hr8soEiUAGwtSqjAUp41FHncVYQ2ru2tZ54f2xc1oKRMdWV9asNnC8rC3GgK0nA\x3d\x3d';
  var Ff = {
      __cl: !0,
      __ecl: !0,
      __ehl: !0,
      __evl: !0,
      __fal: !0,
      __fil: !0,
      __fsl: !0,
      __hl: !0,
      __jel: !0,
      __lcl: !0,
      __sdl: !0,
      __tl: !0,
      __ytl: !0,
    },
    Gf = { __paused: !0, __tg: !0 },
    Hf;
  for (Hf in Ff) Ff.hasOwnProperty(Hf) && (Gf[Hf] = !0);
  var If = 'www.googletagmanager.com/gtm.js';
  If = 'www.googletagmanager.com/gtag/js';
  var Jf = If,
    Kf = Qa(''),
    Lf = null,
    Mf = null,
    Nf = 'https://www.googletagmanager.com/a?id=' + Df.M + '&cv=1',
    Of = {},
    Pf = {},
    Qf = function () {
      var a = Q.sequence || 1;
      Q.sequence = a + 1;
      return a;
    };
  Df.Qg = '';
  var Rf = {},
    Sf = new Fa(),
    Tf = {},
    Uf = {},
    Xf = {
      name: 'dataLayer',
      set: function (a, b) {
        I(bb(a, b), Tf);
        Vf();
      },
      get: function (a) {
        return Wf(a, 2);
      },
      reset: function () {
        Sf = new Fa();
        Tf = {};
        Vf();
      },
    },
    Wf = function (a, b) {
      return 2 != b ? Sf.get(a) : Yf(a);
    },
    Yf = function (a) {
      var b,
        c = a.split('.');
      b = b || [];
      for (var d = Tf, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== Ba(b, d)) return;
      }
      return d;
    },
    Zf = function (a, b) {
      Uf.hasOwnProperty(a) || (Sf.set(a, b), I(bb(a, b), Tf), Vf());
    },
    Vf = function (a) {
      Na(Uf, function (b, c) {
        Sf.set(b, c);
        I(bb(b, void 0), Tf);
        I(bb(b, c), Tf);
        a && delete Uf[b];
      });
    },
    ag = function (a, b, c) {
      Rf[a] = Rf[a] || {};
      Rf[a][b] = $f(b, c);
    },
    $f = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? Yf(a) : Sf.get(a);
      'array' === Xb(d) || 'object' === Xb(d) ? (c = I(d)) : (c = d);
      return c;
    },
    bg = function (a, b) {
      if (Rf[a]) return Rf[a][b];
    },
    cg = function (a, b) {
      Rf[a] && delete Rf[a][b];
    };
  var dg = function (a, b, c) {
      if (c) {
        var d = c.selector_type,
          e = String(c.value),
          f;
        if ('js_variable' === d) {
          e = e.replace(/\["?'?/g, '.').replace(/"?'?\]/g, '');
          for (var h = e.split(','), k = 0; k < h.length; k++) {
            var l = h[k].trim();
            if (l) {
              if (0 === l.indexOf('dataLayer.')) f = Wf(l.substring(10));
              else {
                var n = l.split('.');
                f = m[n.shift()];
                for (var p = 0; p < n.length; p++) f = f && f[n[p]];
              }
              if (void 0 !== f) break;
            }
          }
        } else if ('css_selector' === d && ie) {
          var q = je(e);
          q && 0 < q.length && (f = Ob(q[0]) || Ta(q[0].value));
        }
        f && (a[b] = f);
      }
    },
    eg = function (a) {
      if (a) {
        var b = {};
        dg(b, 'email', a.email);
        dg(b, 'phone_number', a.phone);
        b.address = [];
        for (var c = a.name_and_address || [], d = 0; d < c.length; d++) {
          var e = {};
          dg(e, 'first_name', c[d].first_name);
          dg(e, 'last_name', c[d].last_name);
          dg(e, 'street', c[d].street);
          dg(e, 'city', c[d].city);
          dg(e, 'region', c[d].region);
          dg(e, 'country', c[d].country);
          dg(e, 'postal_code', c[d].postal_code);
          b.address.push(e);
        }
        return b;
      }
    },
    fg = function (a) {
      if (a)
        switch (a.mode) {
          case 'selectors':
            return eg(a.selectors);
          case 'auto_detect':
            var b;
            var c = a.auto_detect;
            if (c) {
              var d = Ve({
                  Ae: !1,
                  Be: !1,
                  ld: c.exclude_element_selectors,
                  Za: { email: !!c.email, phone: !!c.phone, Tf: !!c.address },
                }).elements,
                e = {};
              if (0 < d.length)
                for (var f = 0; f < d.length; f++) {
                  var h = d[f];
                  if (1 === h.type) {
                    e.email = h.wa;
                    break;
                  }
                }
              b = e;
            } else b = void 0;
            return b;
        }
    },
    gg = function (a) {
      switch (a.enhanced_conversions_mode) {
        case 'manual':
          var b = a.enhanced_conversions_manual_var;
          return void 0 !== b ? b : m.enhanced_conversion_data;
        case 'automatic':
          return eg(a[L.qf]);
      }
    };
  var hg = {},
    ig = function (a, b) {
      if (m._gtmexpgrp && m._gtmexpgrp.hasOwnProperty(a)) return m._gtmexpgrp[a];
      void 0 === hg[a] && (hg[a] = Math.floor(Math.random() * b));
      return hg[a];
    };
  function jg(a, b, c) {
    for (var d = [], e = b.split(';'), f = 0; f < e.length; f++) {
      var h = e[f].split('='),
        k = h[0].replace(/^\s*|\s*$/g, '');
      if (k && k == a) {
        var l = h
          .slice(1)
          .join('=')
          .replace(/^\s*|\s*$/g, '');
        l && c && (l = decodeURIComponent(l));
        d.push(l);
      }
    }
    return d;
  }
  function kg(a) {
    return 'null' !== a.origin;
  }
  var ng = function (a, b, c, d) {
      return lg(d) ? jg(a, String(b || mg()), c) : [];
    },
    qg = function (a, b, c, d, e) {
      if (lg(e)) {
        var f = og(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = pg(
            f,
            function (h) {
              return h.hd;
            },
            b
          );
          if (1 === f.length) return f[0].id;
          f = pg(
            f,
            function (h) {
              return h.wc;
            },
            c
          );
          return f[0] ? f[0].id : void 0;
        }
      }
    };
  function rg(a, b, c, d) {
    var e = mg(),
      f = window;
    kg(f) && (f.document.cookie = a);
    var h = mg();
    return e != h || (void 0 != c && 0 <= ng(b, h, !1, d).indexOf(c));
  }
  var yg = function (a, b, c) {
      function d(u, t, v) {
        if (null == v) return delete h[t], u;
        h[t] = v;
        return u + '; ' + t + '=' + v;
      }
      function e(u, t) {
        if (null == t) return delete h[t], u;
        h[t] = !0;
        return u + '; ' + t;
      }
      if (!lg(c.Sa)) return 2;
      var f;
      void 0 == b
        ? (f = a + '=deleted; expires=' + new Date(0).toUTCString())
        : (c.encode && (b = encodeURIComponent(b)), (b = vg(b)), (f = a + '=' + b));
      var h = {};
      f = d(f, 'path', c.path);
      var k;
      c.expires instanceof Date
        ? (k = c.expires.toUTCString())
        : null != c.expires && (k = '' + c.expires);
      f = d(f, 'expires', k);
      f = d(f, 'max-age', c.nj);
      f = d(f, 'samesite', c.oj);
      c.pj && (f = e(f, 'secure'));
      var l = c.domain;
      if ('auto' === l) {
        for (var n = wg(), p = 0; p < n.length; ++p) {
          var q = 'none' !== n[p] ? n[p] : void 0,
            r = d(f, 'domain', q);
          r = e(r, c.flags);
          if (!xg(q, c.path) && rg(r, a, b, c.Sa)) return 0;
        }
        return 1;
      }
      l && 'none' !== l && (f = d(f, 'domain', l));
      f = e(f, c.flags);
      return xg(l, c.path) ? 1 : rg(f, a, b, c.Sa) ? 0 : 1;
    },
    zg = function (a, b, c) {
      null == c.path && (c.path = '/');
      c.domain || (c.domain = 'auto');
      return yg(a, b, c);
    };
  function pg(a, b, c) {
    for (var d = [], e = [], f, h = 0; h < a.length; h++) {
      var k = a[h],
        l = b(k);
      l === c ? d.push(k) : void 0 === f || l < f ? ((e = [k]), (f = l)) : l === f && e.push(k);
    }
    return 0 < d.length ? d : e;
  }
  function og(a, b, c) {
    for (var d = [], e = ng(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var h = e[f].split('.'),
        k = h.shift();
      if (!b || -1 !== b.indexOf(k)) {
        var l = h.shift();
        l &&
          ((l = l.split('-')), d.push({ id: h.join('.'), hd: 1 * l[0] || 1, wc: 1 * l[1] || 1 }));
      }
    }
    return d;
  }
  var vg = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    Ag = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Bg = /(^|\.)doubleclick\.net$/i,
    xg = function (a, b) {
      return Bg.test(window.document.location.hostname) || ('/' === b && Ag.test(a));
    },
    mg = function () {
      return kg(window) ? window.document.cookie : '';
    },
    wg = function () {
      var a = [],
        b = window.document.location.hostname.split('.');
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ['none'];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join('.'));
      var e = window.document.location.hostname;
      Bg.test(e) || Ag.test(e) || a.push('none');
      return a;
    },
    lg = function (a) {
      if (!Bd(yd) || !a || !Wd()) return !0;
      if (!Vd(a)) return !1;
      var b = Td(a);
      return null == b ? !0 : !!b;
    };
  var Cg = function () {
      return [Math.round(2147483647 * Math.random()), Math.round(Va() / 1e3)].join('.');
    },
    Fg = function (a, b, c, d, e) {
      var f = Dg(b);
      return qg(a, f, Eg(c), d, e);
    },
    Gg = function (a, b, c, d) {
      var e = '' + Dg(c),
        f = Eg(d);
      1 < f && (e += '-' + f);
      return [b, e, a].join('.');
    },
    Dg = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf('.') ? a.substr(1) : a;
      return a.split('.').length;
    },
    Eg = function (a) {
      if (!a || '/' === a) return 1;
      '/' !== a[0] && (a = '/' + a);
      '/' !== a[a.length - 1] && (a += '/');
      return a.split('/').length - 1;
    };
  function Hg(a, b, c) {
    var d,
      e = Number(null != a.ob ? a.ob : void 0);
    0 !== e && (d = new Date((b || Va()) + 1e3 * (e || 7776e3)));
    return { path: a.path, domain: a.domain, flags: a.flags, encode: !!c, expires: d };
  }
  var Ig = ['1'],
    Jg = {},
    Ng = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = Kg(a.prefix);
      if (!Jg[c] && !Lg(c, a.path, a.domain) && b) {
        var d = Kg(a.prefix),
          e = Cg();
        if (0 === Mg(d, e, a)) {
          var f = Db('google_tag_data', {});
          f._gcl_au ? ta('GTM', 57) : (f._gcl_au = e);
        }
        Lg(c, a.path, a.domain);
      }
    };
  function Mg(a, b, c) {
    var d = Gg(b, '1', c.domain, c.path),
      e = Hg(c);
    e.Sa = 'ad_storage';
    return zg(a, d, e);
  }
  function Lg(a, b, c) {
    var d = Fg(a, b, c, Ig, 'ad_storage');
    d && (Jg[a] = d);
    return d;
  }
  function Kg(a) {
    return (a || '_gcl') + '_au';
  }
  var Og = function (a) {
    for (
      var b = [],
        c = A.cookie.split(';'),
        d = new RegExp('^\\s*' + (a || '_gac') + '_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$'),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f && b.push({ Se: f[1], value: f[2], timestamp: Number(f[2].split('.')[1]) || 0 });
    }
    b.sort(function (h, k) {
      return k.timestamp - h.timestamp;
    });
    return b;
  };
  function Pg(a, b) {
    var c = Og(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split('.');
      if (!('1' !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) && Number(f[1])) {
        d[c[e].Se] || (d[c[e].Se] = []);
        var h = { version: f[0], timestamp: 1e3 * Number(f[1]), ra: f[2] };
        b && 3 < f.length && (h.labels = f.slice(3));
        d[c[e].Se].push(h);
      }
    }
    return d;
  }
  function Qg() {
    for (var a = Rg, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function Sg() {
    var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    a += a.toLowerCase() + '0123456789-_';
    return a + '.';
  }
  var Rg, Tg;
  function Ug(a) {
    function b(l) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = Tg[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n)) throw Error('Unknown base64 encoding at char: ' + n);
      }
      return l;
    }
    Rg = Rg || Sg();
    Tg = Tg || Qg();
    for (var c = '', d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        h = b(64),
        k = b(64);
      if (64 === k && -1 === e) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      64 != h &&
        ((c += String.fromCharCode(((f << 4) & 240) | (h >> 2))),
        64 != k && (c += String.fromCharCode(((h << 6) & 192) | k)));
    }
  }
  var Vg;
  var Zg = function () {
      var a = Wg,
        b = Xg,
        c = Yg(),
        d = function (h) {
          a(h.target || h.srcElement || {});
        },
        e = function (h) {
          b(h.target || h.srcElement || {});
        };
      if (!c.init) {
        Lb(A, 'mousedown', d);
        Lb(A, 'keyup', d);
        Lb(A, 'submit', e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    $g = function (a, b, c, d, e) {
      var f = { callback: a, domains: b, fragment: 2 === c, placement: c, forms: d, sameHost: e };
      Yg().decorators.push(f);
    },
    ah = function (a, b, c) {
      for (var d = Yg().decorators, e = {}, f = 0; f < d.length; ++f) {
        var h = d[f],
          k;
        if ((k = !c || h.forms))
          a: {
            var l = h.domains,
              n = a,
              p = !!h.sameHost;
            if (l && (p || n !== A.location.hostname))
              for (var q = 0; q < l.length; q++)
                if (l[q] instanceof RegExp) {
                  if (l[q].test(n)) {
                    k = !0;
                    break a;
                  }
                } else if (0 <= n.indexOf(l[q]) || (p && 0 <= l[q].indexOf(n))) {
                  k = !0;
                  break a;
                }
            k = !1;
          }
        if (k) {
          var r = h.placement;
          void 0 == r && (r = h.fragment ? 2 : 1);
          r === b && Ya(e, h.callback());
        }
      }
      return e;
    },
    Yg = function () {
      var a = Db('google_tag_data', {}),
        b = a.gl;
      (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
      return b;
    };
  var bh = /(.*?)\*(.*?)\*(.*)/,
    ch = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    dh = /^(?:www\.|m\.|amp\.)+/,
    eh = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function fh(a) {
    return new RegExp('(.*?)(^|&)' + a + '=([^&]*)&?(.*)');
  }
  var hh = function (a) {
      var b = [],
        c;
      for (c in a)
        if (a.hasOwnProperty(c)) {
          var d = a[c];
          if (void 0 !== d && d === d && null !== d && '[object Object]' !== d.toString()) {
            b.push(c);
            var e = b,
              f = e.push,
              h,
              k = String(d);
            Rg = Rg || Sg();
            Tg = Tg || Qg();
            for (var l = [], n = 0; n < k.length; n += 3) {
              var p = n + 1 < k.length,
                q = n + 2 < k.length,
                r = k.charCodeAt(n),
                u = p ? k.charCodeAt(n + 1) : 0,
                t = q ? k.charCodeAt(n + 2) : 0,
                v = r >> 2,
                x = ((r & 3) << 4) | (u >> 4),
                y = ((u & 15) << 2) | (t >> 6),
                w = t & 63;
              q || ((w = 64), p || (y = 64));
              l.push(Rg[v], Rg[x], Rg[y], Rg[w]);
            }
            h = l.join('');
            f.call(e, h);
          }
        }
      var z = b.join('*');
      return ['1', gh(z), z].join('*');
    },
    gh = function (a, b) {
      var c = [
          window.navigator.userAgent,
          new Date().getTimezoneOffset(),
          window.navigator.userLanguage || window.navigator.language,
          Math.floor(new Date().getTime() / 60 / 1e3) - (void 0 === b ? 0 : b),
          a,
        ].join('*'),
        d;
      if (!(d = Vg)) {
        for (var e = Array(256), f = 0; 256 > f; f++) {
          for (var h = f, k = 0; 8 > k; k++) h = h & 1 ? (h >>> 1) ^ 3988292384 : h >>> 1;
          e[f] = h;
        }
        d = e;
      }
      Vg = d;
      for (var l = 4294967295, n = 0; n < c.length; n++)
        l = (l >>> 8) ^ Vg[(l ^ c.charCodeAt(n)) & 255];
      return ((l ^ -1) >>> 0).toString(36);
    },
    jh = function () {
      return function (a) {
        var b = Ee(m.location.href),
          c = b.search.replace('?', ''),
          d = ze(c, '_gl', !0) || '';
        a.query = ih(d) || {};
        var e = Ce(b, 'fragment').match(fh('_gl'));
        a.fragment = ih((e && e[3]) || '') || {};
      };
    },
    kh = function (a) {
      var b = jh(),
        c = Yg();
      c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
      var d = {},
        e = c.data;
      e && (Ya(d, e.query), a && Ya(d, e.fragment));
      return d;
    },
    ih = function (a) {
      var b;
      b = void 0 === b ? 3 : b;
      try {
        if (a) {
          var c;
          a: {
            for (var d = a, e = 0; 3 > e; ++e) {
              var f = bh.exec(d);
              if (f) {
                c = f;
                break a;
              }
              d = decodeURIComponent(d);
            }
            c = void 0;
          }
          var h = c;
          if (h && '1' === h[1]) {
            var k = h[3],
              l;
            a: {
              for (var n = h[2], p = 0; p < b; ++p)
                if (n === gh(k, p)) {
                  l = !0;
                  break a;
                }
              l = !1;
            }
            if (l) {
              for (var q = {}, r = k ? k.split('*') : [], u = 0; u < r.length; u += 2)
                q[r[u]] = Ug(r[u + 1]);
              return q;
            }
          }
        }
      } catch (t) {
        console.error('hack', t);
      }
    };
  function lh(a, b, c, d) {
    function e(p) {
      var q = p,
        r = fh(a).exec(q),
        u = q;
      if (r) {
        var t = r[2],
          v = r[4];
        u = r[1];
        v && (u = u + t + v);
      }
      p = u;
      var x = p.charAt(p.length - 1);
      p && '&' !== x && (p += '&');
      return p + n;
    }
    d = void 0 === d ? !1 : d;
    var f = eh.exec(c);
    if (!f) return '';
    var h = f[1],
      k = f[2] || '',
      l = f[3] || '',
      n = a + '=' + b;
    d ? (l = '#' + e(l.substring(1))) : (k = '?' + e(k.substring(1)));
    return '' + h + k + l;
  }
  function mh(a, b) {
    var c = 'FORM' === (a.tagName || '').toUpperCase(),
      d = ah(b, 1, c),
      e = ah(b, 2, c),
      f = ah(b, 3, c);
    if (Za(d)) {
      var h = hh(d);
      c ? nh('_gl', h, a) : oh('_gl', h, a, !1);
    }
    if (!c && Za(e)) {
      var k = hh(e);
      oh('_gl', k, a, !0);
    }
    for (var l in f)
      if (f.hasOwnProperty(l))
        a: {
          var n = l,
            p = f[l],
            q = a;
          if (q.tagName) {
            if ('a' === q.tagName.toLowerCase()) {
              oh(n, p, q, void 0);
              break a;
            }
            if ('form' === q.tagName.toLowerCase()) {
              nh(n, p, q);
              break a;
            }
          }
          'string' == typeof q && lh(n, p, q, void 0);
        }
  }
  function oh(a, b, c, d) {
    if (c.href) {
      var e = lh(a, b, c.href, void 0 === d ? !1 : d);
      kb.test(e) && (c.href = e);
    }
  }
  function nh(a, b, c) {
    if (c && c.action) {
      var d = (c.method || '').toLowerCase();
      if ('get' === d) {
        for (var e = c.childNodes || [], f = !1, h = 0; h < e.length; h++) {
          var k = e[h];
          if (k.name === a) {
            k.setAttribute('value', b);
            f = !0;
            break;
          }
        }
        if (!f) {
          var l = A.createElement('input');
          l.setAttribute('type', 'hidden');
          l.setAttribute('name', a);
          l.setAttribute('value', b);
          c.appendChild(l);
        }
      } else if ('post' === d) {
        var n = lh(a, b, c.action);
        kb.test(n) && (c.action = n);
      }
    }
  }
  var Wg = function (a) {
      try {
        var b;
        a: {
          for (var c = a, d = 100; c && 0 < d; ) {
            if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
              b = c;
              break a;
            }
            c = c.parentNode;
            d--;
          }
          b = null;
        }
        var e = b;
        if (e) {
          var f = e.protocol;
          ('http:' !== f && 'https:' !== f) || mh(e, e.hostname);
        }
      } catch (h) {
        console.error('hack', h);
      }
    },
    Xg = function (a) {
      try {
        if (a.action) {
          var b = Ce(Ee(a.action), 'host');
          mh(a, b);
        }
      } catch (c) {
        console.error('hack', c);
      }
    },
    ph = function (a, b, c, d) {
      Zg();
      $g(a, b, 'fragment' === c ? 2 : 1, !!d, !1);
    },
    qh = function (a, b) {
      Zg();
      $g(a, [Be(m.location, 'host', !0)], b, !0, !0);
    },
    rh = function () {
      var a = A.location.hostname,
        b = ch.exec(A.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = '';
      if (c) {
        var f = c.split('/'),
          h = f[1];
        e = 's' === h ? decodeURIComponent(f[2]) : decodeURIComponent(h);
      } else if (d) {
        if (0 === d.indexOf('xn--')) return !1;
        e = d.replace(/-/g, '.').replace(/\.\./g, '-');
      }
      var k = a.replace(dh, ''),
        l = e.replace(dh, ''),
        n;
      if (!(n = k === l)) {
        var p = '.' + l;
        n = k.substring(k.length - p.length, k.length) === p;
      }
      return n;
    },
    sh = function (a, b) {
      return !1 === a ? !1 : a || b || rh();
    };
  var th = {};
  var uh = /^\w+$/,
    vh = /^[\w-]+$/,
    wh = { aw: '_aw', dc: '_dc', gf: '_gf', ha: '_ha', gp: '_gp', gb: '_gb' },
    xh = function () {
      if (!Bd(yd) || !Wd()) return !0;
      var a = Td('ad_storage');
      return null == a ? !0 : !!a;
    },
    yh = function (a, b) {
      Vd('ad_storage')
        ? xh()
          ? a()
          : ae(a, 'ad_storage')
        : b
        ? ta('TAGGING', 3)
        : $d(
            function () {
              yh(a, !0);
            },
            ['ad_storage']
          );
    },
    Ah = function (a) {
      return zh(a).map(function (b) {
        return b.ra;
      });
    },
    zh = function (a) {
      var b = [];
      if (!kg(m) || !A.cookie) return b;
      var c = ng(a, A.cookie, void 0, 'ad_storage');
      if (!c || 0 == c.length) return b;
      for (var d = {}, e = 0; e < c.length; d = { Dc: d.Dc }, e++) {
        var f = Bh(c[e]);
        if (null != f) {
          var h = f,
            k = h.version;
          d.Dc = h.ra;
          var l = h.timestamp,
            n = h.labels,
            p = Ca(
              b,
              (function (q) {
                return function (r) {
                  return r.ra === q.Dc;
                };
              })(d)
            );
          p
            ? ((p.timestamp = Math.max(p.timestamp, l)), (p.labels = Ch(p.labels, n || [])))
            : b.push({ version: k, ra: d.Dc, timestamp: l, labels: n });
        }
      }
      b.sort(function (q, r) {
        return r.timestamp - q.timestamp;
      });
      return Dh(b);
    };
  function Ch(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++) (c[a[e]] = !0), d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d;
  }
  function Eh(a) {
    return a && 'string' == typeof a && a.match(uh) ? a : '_gcl';
  }
  var Gh = function () {
      var a = Ee(m.location.href),
        b = Ce(a, 'query', !1, void 0, 'gclid'),
        c = Ce(a, 'query', !1, void 0, 'gclsrc'),
        d = Ce(a, 'query', !1, void 0, 'wbraid'),
        e = Ce(a, 'query', !1, void 0, 'dclid');
      if (!b || !c || !d) {
        var f = a.hash.replace('#', '');
        b = b || ze(f, 'gclid', void 0);
        c = c || ze(f, 'gclsrc', void 0);
        d = d || ze(f, 'wbraid', void 0);
      }
      return Fh(b, c, e, d);
    },
    Fh = function (a, b, c, d) {
      var e = {},
        f = function (h, k) {
          e[k] || (e[k] = []);
          e[k].push(h);
        };
      e.gclid = a;
      e.gclsrc = b;
      e.dclid = c;
      void 0 !== d && vh.test(d) && ((e.gbraid = d), f(d, 'gb'));
      if (void 0 !== a && a.match(vh))
        switch (b) {
          case void 0:
            f(a, 'aw');
            break;
          case 'aw.ds':
            f(a, 'aw');
            f(a, 'dc');
            break;
          case 'ds':
            f(a, 'dc');
            break;
          case '3p.ds':
            f(a, 'dc');
            break;
          case 'gf':
            f(a, 'gf');
            break;
          case 'ha':
            f(a, 'ha');
        }
      c && f(c, 'dc');
      return e;
    },
    Ih = function (a) {
      var b = Gh();
      yh(function () {
        Hh(b, !1, a);
      });
    };
  function Hh(a, b, c, d, e) {
    function f(x, y) {
      var w = Jh(x, h);
      w && (zg(w, y, k), (l = !0));
    }
    c = c || {};
    e = e || [];
    var h = Eh(c.prefix);
    d = d || Va();
    var k = Hg(c, d, !0);
    k.Sa = 'ad_storage';
    var l = !1,
      n = Math.round(d / 1e3),
      p = function (x) {
        var y = ['GCL', n, x];
        0 < e.length && y.push(e.join('.'));
        return y.join('.');
      };
    a.aw && f('aw', p(a.aw[0]));
    a.dc && f('dc', p(a.dc[0]));
    a.gf && f('gf', p(a.gf[0]));
    a.ha && f('ha', p(a.ha[0]));
    a.gp && f('gp', p(a.gp[0]));
    if (
      (void 0 == th.enable_gbraid_cookie_write ? 0 : th.enable_gbraid_cookie_write) &&
      !l &&
      a.gb
    ) {
      var q = a.gb[0],
        r = Jh('gb', h),
        u = !1;
      if (!b)
        for (var t = zh(r), v = 0; v < t.length; v++)
          t[v].ra === q && t[v].labels && 0 < t[v].labels.length && (u = !0);
      u || f('gb', p(q));
    }
  }
  var Lh = function (a, b) {
      var c = kh(!0);
      yh(function () {
        for (var d = Eh(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== wh[f]) {
            var h = Jh(f, d),
              k = c[h];
            if (k) {
              var l = Math.min(Kh(k), Va()),
                n;
              b: {
                var p = l;
                if (kg(m))
                  for (var q = ng(h, A.cookie, void 0, 'ad_storage'), r = 0; r < q.length; ++r)
                    if (Kh(q[r]) > p) {
                      n = !0;
                      break b;
                    }
                n = !1;
              }
              if (!n) {
                var u = Hg(b, l, !0);
                u.Sa = 'ad_storage';
                zg(h, k, u);
              }
            }
          }
        }
        Hh(Fh(c.gclid, c.gclsrc), !1, b);
      });
    },
    Jh = function (a, b) {
      var c = wh[a];
      if (void 0 !== c) return b + c;
    },
    Kh = function (a) {
      return 0 !== Mh(a.split('.')).length ? 1e3 * (Number(a.split('.')[1]) || 0) : 0;
    };
  function Bh(a) {
    var b = Mh(a.split('.'));
    return 0 === b.length
      ? null
      : { version: b[0], ra: b[2], timestamp: 1e3 * (Number(b[1]) || 0), labels: b.slice(3) };
  }
  function Mh(a) {
    return 3 > a.length || ('GCL' !== a[0] && '1' !== a[0]) || !/^\d+$/.test(a[1]) || !vh.test(a[2])
      ? []
      : a;
  }
  var Nh = function (a, b, c, d, e) {
      if (Aa(b) && kg(m)) {
        var f = Eh(e),
          h = function () {
            for (var k = {}, l = 0; l < a.length; ++l) {
              var n = Jh(a[l], f);
              if (n) {
                var p = ng(n, A.cookie, void 0, 'ad_storage');
                p.length && (k[n] = p.sort()[p.length - 1]);
              }
            }
            return k;
          };
        yh(function () {
          ph(h, b, c, d);
        });
      }
    },
    Dh = function (a) {
      return a.filter(function (b) {
        return vh.test(b.ra);
      });
    },
    Oh = function (a, b) {
      if (kg(m)) {
        for (var c = Eh(b.prefix), d = {}, e = 0; e < a.length; e++)
          wh[a[e]] && (d[a[e]] = wh[a[e]]);
        yh(function () {
          Na(d, function (f, h) {
            var k = ng(c + h, A.cookie, void 0, 'ad_storage');
            k.sort(function (u, t) {
              return Kh(t) - Kh(u);
            });
            if (k.length) {
              var l = k[0],
                n = Kh(l),
                p = 0 !== Mh(l.split('.')).length ? l.split('.').slice(3) : [],
                q = {},
                r;
              r = 0 !== Mh(l.split('.')).length ? l.split('.')[2] : void 0;
              q[f] = [r];
              Hh(q, !0, b, n, p);
            }
          });
        });
      }
    };
  function Ph(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var Qh = function (a) {
    function b(e, f, h) {
      h && (e[f] = h);
    }
    if (Wd()) {
      var c = Gh();
      if (Ph(c, a)) {
        var d = {};
        b(d, 'gclid', c.gclid);
        b(d, 'dclid', c.dclid);
        b(d, 'gclsrc', c.gclsrc);
        b(d, 'wbraid', c.gbraid);
        qh(function () {
          return d;
        }, 3);
        qh(function () {
          var e = {};
          return (e._up = '1'), e;
        }, 1);
      }
    }
  };
  function Rh(a, b) {
    var c = Eh(b),
      d = Jh(a, c);
    if (!d) return 0;
    for (var e = zh(d), f = 0, h = 0; h < e.length; h++) f = Math.max(f, e[h].timestamp);
    return f;
  }
  function Sh(a) {
    var b = 0,
      c;
    for (c in a)
      for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var Th = /^\d+\.fls\.doubleclick\.net$/;
  function Uh(a, b) {
    Vd(L.D)
      ? N(L.D)
        ? a()
        : ae(a, L.D)
      : b
      ? vd(42)
      : he(
          function () {
            Uh(a, !0);
          },
          [L.D]
        );
  }
  function Vh(a) {
    var b = Ee(m.location.href),
      c = Ce(b, 'host', !1);
    if (c && c.match(Th)) {
      var d = Ce(b, 'path').split(a + '=');
      if (1 < d.length) return d[1].split(';')[0].split('?')[0];
    }
  }
  function Wh(a, b, c) {
    if ('aw' === a || 'dc' === a || 'gb' === a) {
      var d = Vh('gcl' + a);
      if (d) return d.split('.');
    }
    var e = Eh(b);
    if ('_gcl' == e) {
      c = void 0 === c ? !0 : c;
      var f = !N(L.D) && c,
        h;
      h = Gh()[a] || [];
      if (0 < h.length) return f ? ['0'] : h;
    }
    var k = Jh(a, e);
    return k ? Ah(k) : [];
  }
  var Xh = function (a, b) {
      return Wh('aw', a, b);
    },
    Yh = function (a, b) {
      return Wh('dc', a, b);
    };
  function Zh(a) {
    var b = [];
    Na(a, function (c, d) {
      d = Dh(d);
      for (var e = [], f = 0; f < d.length; f++) e.push(d[f].ra);
      e.length && b.push(c + ':' + e.join(','));
    });
    return b.join(';');
  }
  var $h = function (a) {
      var b = Vh('gac');
      return b ? (!N(L.D) && a ? '0' : decodeURIComponent(b)) : Zh(xh() ? Pg() : {});
    },
    ai = function (a) {
      var b = Vh('gacgb');
      return b ? (!N(L.D) && a ? '0' : decodeURIComponent(b)) : Zh(xh() ? Pg('_gac_gb', !0) : {});
    },
    bi = function (a, b) {
      var c = Gh(),
        d = [],
        e = c.gclid,
        f = c.dclid,
        h = c.gclsrc || 'aw';
      !e || ('aw.ds' !== h && 'aw' !== h && 'ds' !== h) || d.push({ ra: e, ve: h });
      f && d.push({ ra: f, ve: 'ds' });
      Uh(function () {
        Ng(b);
        var k = Jg[Kg(b.prefix)],
          l = !1;
        if (k && 0 < d.length)
          for (var n = (Q.joined_auid = Q.joined_auid || {}), p = 0; p < d.length; p++) {
            var q = d[p],
              r = q.ra,
              u = q.ve,
              t = (b.prefix || '_gcl') + '.' + u + '.' + r;
            if (!n[t]) {
              var v = 'https://adservice.google.com/pagead/regclk';
              v =
                'gb' === u
                  ? v + '?gbraid=' + r + '&auid=' + k
                  : v + '?gclid=' + r + '&auid=' + k + '&gclsrc=' + u;
              Rb(v);
              l = n[t] = !0;
            }
          }
        null == a && (a = l);
        var x = !0;
        x = !1;
        if (x && a && k) {
          var y = Kg(b.prefix),
            w = Jg[y];
          w && Mg(y, w, b);
        }
      });
    },
    ci = function (a) {
      var b;
      if (Vh('gclaw') || Vh('gac') || 0 < (Gh().aw || []).length) b = !1;
      else {
        var c;
        if (0 < (Gh().gb || []).length) c = !0;
        else {
          var d = Math.max(Rh('aw', a), Sh(xh() ? Pg() : {}));
          c = Math.max(Rh('gb', a), Sh(xh() ? Pg('_gac_gb', !0) : {})) > d;
        }
        b = c;
      }
      return b;
    };
  function di(a) {
    var b = (Bb && Bb.userAgent) || '';
    if (0 > b.indexOf('Safari') || /Chrome|Coast|Opera|Edg|Silk|Android/.test(b)) return !1;
    var c = (/Version\/([\d\.]+)/.exec(b) || [])[1] || '';
    if ('' === c) return !1;
    for (var d = a.split('.'), e = c.split('.'), f = 0; f < e.length; f++) {
      if (void 0 === d[f]) return !0;
      if (e[f] != d[f]) return Number(e[f]) > Number(d[f]);
    }
    return e.length >= d.length;
  }
  var ei = /[A-Z]+/,
    fi = /\s/,
    gi = function (a) {
      if (g(a) && ((a = Ta(a)), !fi.test(a))) {
        var b = a.indexOf('-');
        if (!(0 > b)) {
          var c = a.substring(0, b);
          if (ei.test(c)) {
            for (var d = a.substring(b + 1).split('/'), e = 0; e < d.length; e++) if (!d[e]) return;
            return { id: a, prefix: c, containerId: c + '-' + d[0], N: d };
          }
        }
      }
    },
    ii = function (a) {
      for (var b = {}, c = 0; c < a.length; ++c) {
        var d = gi(a[c]);
        d && (b[d.id] = d);
      }
      hi(b);
      var e = [];
      Na(b, function (f, h) {
        e.push(h);
      });
      return e;
    };
  function hi(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        'AW' === d.prefix && d.N[1] && b.push(d.containerId);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var ji = function () {
    var a = !1;
    return a;
  };
  var li = function (a, b, c, d) {
      return (2 === ki() || d || 'http:' != m.location.protocol ? a : b) + c;
    },
    ki = function () {
      var a = Gb(),
        b;
      if (1 === a)
        a: {
          var c = Jf;
          c = c.toLowerCase();
          for (
            var d = 'https://' + c,
              e = 'http://' + c,
              f = 1,
              h = A.getElementsByTagName('script'),
              k = 0;
            k < h.length && 100 > k;
            k++
          ) {
            var l = h[k].src;
            if (l) {
              l = l.toLowerCase();
              if (0 === l.indexOf(e)) {
                b = 3;
                break a;
              }
              1 === f && 0 === l.indexOf(d) && (f = 2);
            }
          }
          b = f;
        }
      else b = a;
      return b;
    };
  var xi = function (a, b) {
    var c = a ? gg(a) : m.enhanced_conversion_data,
      d = (a || {}).enhanced_conversions_mode;
    if (m.Promise)
      try {
        return c
          ? qf(c, b).then(function (e) {
              e.oe = d;
              return e;
            })
          : Promise.resolve({ vc: '', ic: [], oe: d });
      } catch (e) {
        console.error('hack', e);
      }
  };
  function yi(a) {
    if (N(L.D)) return a;
    a = a.replace(/&url=([^&#]+)/, function (b, c) {
      var d = Fe(decodeURIComponent(c));
      return '&url=' + encodeURIComponent(d);
    });
    a = a.replace(/&ref=([^&#]+)/, function (b, c) {
      var d = Fe(decodeURIComponent(c));
      return '&ref=' + encodeURIComponent(d);
    });
    return a;
  }
  function zi() {
    if (Kf || (!0 !== m._gtmdgs && !di('11'))) return -1;
    var a = Pa('1');
    return ig(1, 100) < a ? ig(2, 2) : -1;
  }
  function Ai(a) {
    var b;
    if (!a || !a.length) return;
    for (var c = [], d = 0; d < a.length; ++d) {
      var e = a[d];
      e && e.estimated_delivery_date ? c.push('' + e.estimated_delivery_date) : c.push('');
    }
    b = c.join(',');
    return b;
  }
  function Bi() {
    var a = !1;
    return a;
  }
  var Ci = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
    Di = {
      cl: ['ecl'],
      customPixels: ['nonGooglePixels'],
      ecl: ['cl'],
      ehl: ['hl'],
      hl: ['ehl'],
      html: [
        'customScripts',
        'customPixels',
        'nonGooglePixels',
        'nonGoogleScripts',
        'nonGoogleIframes',
      ],
      customScripts: [
        'html',
        'customPixels',
        'nonGooglePixels',
        'nonGoogleScripts',
        'nonGoogleIframes',
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ['nonGooglePixels'],
      nonGoogleIframes: ['nonGooglePixels'],
    },
    Ei = {
      cl: ['ecl'],
      customPixels: ['customScripts', 'html'],
      ecl: ['cl'],
      ehl: ['hl'],
      hl: ['ehl'],
      html: ['customScripts'],
      customScripts: ['html'],
      nonGooglePixels: [
        'customPixels',
        'customScripts',
        'html',
        'nonGoogleScripts',
        'nonGoogleIframes',
      ],
      nonGoogleScripts: ['customScripts', 'html'],
      nonGoogleIframes: ['customScripts', 'html', 'nonGoogleScripts'],
    },
    Fi =
      'google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes'.split(
        ' '
      );
  var Gi = function () {
      var a = !1;
      a = !0;
      return a;
    },
    Ii = function (a) {
      var b = Wf('gtm.allowlist') || Wf('gtm.whitelist');
      b && vd(9);
      Gi() && (b = 'google gtagfl lcl zone oid op'.split(' '));
      var c = b && $a(Sa(b), Di),
        d = Wf('gtm.blocklist') || Wf('gtm.blacklist');
      d || ((d = Wf('tagTypeBlacklist')) && vd(3));
      d ? vd(8) : (d = []);
      Hi() && ((d = Sa(d)), d.push('nonGooglePixels', 'nonGoogleScripts', 'sandboxedScripts'));
      0 <= Ba(Sa(d), 'google') && vd(2);
      var e = d && $a(Sa(d), Ei),
        f = {};
      return function (h) {
        var k = h && h[ac.lb];
        if (!k || 'string' != typeof k) return !0;
        k = k.replace(/^_*/, '');
        if (void 0 !== f[k]) return f[k];
        var l = Pf[k] || [],
          n = a(k, l);
        if (b) {
          var p;
          if ((p = n))
            a: {
              if (0 > Ba(c, k))
                if (l && 0 < l.length)
                  for (var q = 0; q < l.length; q++) {
                    if (0 > Ba(c, l[q])) {
                      vd(11);
                      p = !1;
                      break a;
                    }
                  }
                else {
                  p = !1;
                  break a;
                }
              p = !0;
            }
          n = p;
        }
        var r = !1;
        if (d) {
          var u = 0 <= Ba(e, k);
          if (u) r = u;
          else {
            var t = Ia(e, l || []);
            t && vd(10);
            r = t;
          }
        }
        var v = !n || r;
        v ||
          !(0 <= Ba(l, 'sandboxedScripts')) ||
          (c && -1 !== Ba(c, 'sandboxedScripts')) ||
          (v = Ia(e, Fi));
        return (f[k] = v);
      };
    },
    Hi = function () {
      return Ci.test(m.location && m.location.hostname);
    };
  var Ji = !1,
    Ki = 0,
    Li = [];
  function Mi(a) {
    if (!Ji) {
      var b = A.createEventObject,
        c = 'complete' == A.readyState,
        d = 'interactive' == A.readyState;
      if (!a || 'readystatechange' != a.type || c || (!b && d)) {
        Ji = !0;
        for (var e = 0; e < Li.length; e++) F(Li[e]);
      }
      Li.push = function () {
        for (var f = 0; f < arguments.length; f++) F(arguments[f]);
        return 0;
      };
    }
  }
  function Ni() {
    if (!Ji && 140 > Ki) {
      Ki++;
      try {
        A.documentElement.doScroll('left'), Mi();
      } catch (a) {
        console.error('hack', a);
        m.setTimeout(Ni, 50);
      }
    }
  }
  var Oi = function (a) {
    Ji ? a() : Li.push(a);
  };
  var Qi = function (a, b) {
      this.o = !1;
      this.F = [];
      this.O = { tags: [] };
      this.aa = !1;
      this.s = this.C = 0;
      Pi(this, a, b);
    },
    Ri = function (a, b, c, d) {
      if (Gf.hasOwnProperty(b) || '__zone' === b) return -1;
      var e = {};
      Zb(d) && (e = I(d, e));
      e.id = c;
      e.status = 'timeout';
      return a.O.tags.push(e) - 1;
    },
    Si = function (a, b, c, d) {
      var e = a.O.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    Ti = function (a) {
      if (!a.o) {
        for (var b = a.F, c = 0; c < b.length; c++) b[c]();
        a.o = !0;
        a.F.length = 0;
      }
    },
    Pi = function (a, b, c) {
      ya(b) && Ui(a, b);
      c &&
        m.setTimeout(function () {
          return Ti(a);
        }, Number(c));
    },
    Ui = function (a, b) {
      var c = Xa(function () {
        return F(function () {
          b(Df.M, a.O);
        });
      });
      a.o ? c() : a.F.push(c);
    },
    Vi = function (a) {
      a.C++;
      return Xa(function () {
        a.s++;
        a.aa && a.s >= a.C && Ti(a);
      });
    };
  var Wi = function () {
      function a(d) {
        return !za(d) || 0 > d ? 0 : d;
      }
      if (!Q._li && m.performance && m.performance.timing) {
        var b = m.performance.timing.navigationStart,
          c = za(Xf.get('gtm.start')) ? Xf.get('gtm.start') : 0;
        Q._li = { cst: a(c - b), cbt: a(Mf - b) };
      }
    },
    Xi = function (a) {
      m.performance && m.performance.mark(Df.M + '_' + a + '_start');
    },
    Yi = function (a) {
      if (m.performance) {
        var b = Df.M + '_' + a + '_start',
          c = Df.M + '_' + a + '_duration';
        m.performance.measure(c, b);
        var d = m.performance.getEntriesByName(c)[0];
        m.performance.clearMarks(b);
        m.performance.clearMeasures(c);
        var e = Q._p || {};
        void 0 === e[a] && ((e[a] = d.duration), (Q._p = e));
        return d.duration;
      }
    },
    Zi = function () {
      if (m.performance && m.performance.now) {
        var a = Q._p || {};
        a.PAGEVIEW = m.performance.now();
        Q._p = a;
      }
    };
  var $i = {},
    aj = function () {
      return m.GoogleAnalyticsObject && m[m.GoogleAnalyticsObject];
    },
    bj = !1;
  function jj() {
    return m.GoogleAnalyticsObject || 'ga';
  }
  var kj = function (a) {},
    lj = function (a, b) {
      return function () {
        var c = aj(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get('sendHitTask');
          d.set('sendHitTask', function (f) {
            var h = f.get('hitPayload'),
              k = f.get('hitCallback'),
              l = 0 > h.indexOf('&tid=' + b);
            l &&
              (f.set('hitPayload', h.replace(/&tid=UA-[0-9]+-[0-9]+/, '&tid=' + b), !0),
              f.set('hitCallback', void 0, !0));
            e(f);
            l &&
              (f.set('hitPayload', h, !0),
              f.set('hitCallback', k, !0),
              f.set('_x_19', void 0, !0),
              e(f));
          });
        }
      };
    };
  var sj = function (a) {},
    wj = function (a) {},
    xj = function () {
      return (
        '&tc=' +
        Hc.filter(function (a) {
          return a;
        }).length
      );
    },
    Aj = function () {
      2022 <= yj().length && zj();
    },
    Bj = function (a) {
      return 0 === a.indexOf('gtm.') ? encodeURIComponent(a) : '*';
    },
    Dj = function () {
      Cj || (Cj = m.setTimeout(zj, 500));
    },
    zj = function () {
      Cj && (m.clearTimeout(Cj), (Cj = void 0));
      void 0 === Ej ||
        (Fj[Ej] && !Gj && !Hj) ||
        (Ij[Ej] || Jj.vi() || 0 >= Kj--
          ? (vd(1), (Ij[Ej] = !0))
          : (Jj.Ni(), Kb(yj(!0)), (Fj[Ej] = !0), (Lj = Mj = Nj = Hj = Gj = '')));
    },
    yj = function (a) {
      var b = Ej;
      if (void 0 === b) return '';
      var c = ua('GTM'),
        d = ua('TAGGING');
      return [
        Oj,
        Fj[b] ? '' : '&es=1',
        Pj[b],
        sj(b),
        c ? '&u=' + c : '',
        d ? '&ut=' + d : '',
        xj(),
        Gj,
        Hj,
        Nj,
        Mj,
        wj(a),
        Lj,
        '&z=0',
      ].join('');
    },
    Rj = function () {
      Oj = Qj();
    },
    Qj = function () {
      return [Nf, '&v=3&t=t', '&pid=' + Ea(), '&rv=' + Df.$c].join('');
    },
    vj = ['L', 'S', 'Y'],
    rj = ['S', 'E'],
    Sj = { sampleRate: '0.005000', Jg: '', Ig: Number('5') },
    Tj =
      0 <= A.location.search.indexOf('?gtm_latency=') ||
      0 <= A.location.search.indexOf('&gtm_latency='),
    Uj;
  if (!(Uj = Tj)) {
    var Vj = Math.random(),
      Wj = Sj.sampleRate;
    Uj = Vj < Wj;
  }
  var Xj = Uj,
    Yj = { label: Df.M + ' Container', children: [{ label: 'Initialization', children: [] }] },
    Oj = Qj(),
    Fj = {},
    Gj = '',
    Hj = '',
    Lj = '',
    Mj = '',
    uj = {},
    tj = !1,
    qj = {},
    Zj = {},
    Nj = '',
    Ej = void 0,
    Pj = {},
    Ij = {},
    Cj = void 0,
    ak = 5;
  0 < Sj.Ig && (ak = Sj.Ig);
  var Jj = (function (a, b) {
      for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
      return {
        vi: function () {
          return c < a ? !1 : Va() - d[c % a] < b;
        },
        Ni: function () {
          var f = c++ % a;
          d[f] = Va();
        },
      };
    })(ak, 1e3),
    Kj = 1e3,
    ck = function (a, b) {
      if (Xj && !Ij[a] && Ej !== a) {
        zj();
        Ej = a;
        Lj = Gj = '';
        Pj[a] = '&e=' + Bj(b) + '&eid=' + a;
        Dj();
      }
    },
    dk = function (a, b, c, d) {
      if (Xj && b) {
        var e,
          f = String(b[ac.lb] || '').replace(/_/g, '');
        0 === f.indexOf('cvt') && (f = 'cvt');
        e = f;
        var h = c + e;
        if (!Ij[a]) {
          a !== Ej && (zj(), (Ej = a));
          Gj = Gj ? Gj + '.' + h : '&tr=' + h;
          var k = b['function'];
          if (!k) throw Error('Error: No function name given for function call.');
          var l = (Jc[k] ? '1' : '2') + e;
          Lj = Lj ? Lj + '.' + l : '&ti=' + l;
          Dj();
          Aj();
        }
      }
    };
  var kk = function (a, b, c) {
      if (Xj && !Ij[a]) {
        a !== Ej && (zj(), (Ej = a));
        var d = c + b;
        Hj = Hj ? Hj + '.' + d : '&epr=' + d;
        Dj();
        Aj();
      }
    },
    lk = function (a, b, c) {};
  var mk = {
      active: !0,
      isAllowed: function () {
        return !0;
      },
    },
    nk = function (a) {
      var b = Q.zones;
      return b ? b.checkState(Df.M, a) : mk;
    },
    ok = function (a) {
      var b = Q.zones;
      !b && a && (b = Q.zones = a());
      return b;
    };
  function pk() {}
  function qk() {}
  function rk(a, b, c, d) {
    var e = Hc[a],
      f = sk(a, b, c, d);
    if (!f) return null;
    var h = Oc(e[ac.Jf], c, []);
    if (h && h.length) {
      var k = h[0];
      f = rk(
        k.index,
        { onSuccess: f, onFailure: 1 === k.cg ? b.terminate : f, terminate: b.terminate },
        c,
        d
      );
    }
    return f;
  }
  function sk(a, b, c, d) {
    function e() {
      if (f[ac.Gh]) k();
      else {
        var x = Pc(f, c, []);
        var y = x[ac.Og];
        if (null != y)
          for (var w = 0; w < y.length; w++)
            if (!N(y[w])) {
              k();
              return;
            }
        var z = Ri(c.mb, String(f[ac.lb]), Number(f[ac.Kf]), x[ac.Hh]),
          B = !1;
        x.vtp_gtmOnSuccess = function () {
          if (!B) {
            B = !0;
            var E = Va() - D;
            dk(c.id, Hc[a], '5', E);
            Si(c.mb, z, 'success', E);
            h();
          }
        };
        x.vtp_gtmOnFailure = function () {
          if (!B) {
            B = !0;
            var E = Va() - D;
            dk(c.id, Hc[a], '6', E);
            Si(c.mb, z, 'failure', E);
            k();
          }
        };
        x.vtp_gtmTagId = f.tag_id;
        x.vtp_gtmEventId = c.id;
        dk(c.id, f, '1');
        var C = function () {
          var E = Va() - D;
          dk(c.id, f, '7', E);
          Si(c.mb, z, 'exception', E);
          B || ((B = !0), k());
        };
        var D = Va();
        try {
          Nc(x, c);
        } catch (E) {
          console.error('hack', E);
          C(E);
        }
      }
    }
    var f = Hc[a],
      h = b.onSuccess,
      k = b.onFailure,
      l = b.terminate;
    if (c.Ee(f)) return null;
    var n = Oc(f[ac.Lf], c, []);
    if (n && n.length) {
      var p = n[0],
        q = rk(p.index, { onSuccess: h, onFailure: k, terminate: l }, c, d);
      if (!q) return null;
      h = q;
      k = 2 === p.cg ? l : q;
    }
    if (f[ac.Ff] || f[ac.Jh]) {
      var r = f[ac.Ff] ? Ic : c.Ui,
        u = h,
        t = k;
      if (!r[a]) {
        e = Xa(e);
        var v = tk(a, r, e);
        h = v.onSuccess;
        k = v.onFailure;
      }
      return function () {
        r[a](u, t);
      };
    }
    return e;
  }
  function tk(a, b, c) {
    var d = [],
      e = [];
    b[a] = uk(d, e, c);
    return {
      onSuccess: function () {
        b[a] = vk;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = wk;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function uk(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function vk(a) {
    a();
  }
  function wk(a, b) {
    b();
  }
  var zk = function (a, b) {
    for (var c = [], d = 0; d < Hc.length; d++)
      if (a[d]) {
        var e = Hc[d];
        var f = Vi(b.mb);
        try {
          var h = rk(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
          if (h) {
            var k = c,
              l = k.push,
              n = d,
              p = e['function'];
            if (!p) throw 'Error: No function name given for function call.';
            var q = Jc[p];
            l.call(k, { Cg: n, qg: q ? q.priorityOverride || 0 : 0, hi: h });
          } else xk(d, b), f();
        } catch (t) {
          console.error('hack', t);
          f();
        }
      }
    var r = b.mb;
    r.aa = !0;
    r.s >= r.C && Ti(r);
    c.sort(yk);
    for (var u = 0; u < c.length; u++) c[u].hi();
    return 0 < c.length;
  };
  function yk(a, b) {
    var c,
      d = b.qg,
      e = a.qg;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
      var h = a.Cg,
        k = b.Cg;
      f = h > k ? 1 : h < k ? -1 : 0;
    }
    return f;
  }
  function xk(a, b) {
    if (!Xj) return;
    var c = function (d) {
      var e = b.Ee(Hc[d]) ? '3' : '4',
        f = Oc(Hc[d][ac.Jf], b, []);
      f && f.length && c(f[0].index);
      dk(b.id, Hc[d], e);
      var h = Oc(Hc[d][ac.Lf], b, []);
      h && h.length && c(h[0].index);
    };
    c(a);
  }
  var Ak = !1,
    Gk = function (a) {
      var b = Va(),
        c = a['gtm.uniqueEventId'],
        d = a.event;
      if ('gtm.js' === d) {
        if (Ak) return !1;
        Ak = !0;
      }
      var h = nk(c),
        k = !1;
      if (!h.active) {
        if ('gtm.js' !== d) return !1;
        k = !0;
        h = nk(Number.MAX_SAFE_INTEGER);
      }
      ck(c, d);
      var l = a.eventCallback,
        n = a.eventTimeout,
        p = l;
      var q = {
        id: c,
        name: d,
        Ee: Ii(h.isAllowed),
        Ui: [],
        lg: function () {
          vd(6);
        },
        Wf: Bk(c),
        mb: new Qi(p, n),
      };
      q.Vf = Ck();
      Dk(c, q.mb);
      var r = Tc(q);
      k && (r = Ek(r));
      var u = zk(r, q);
      ('gtm.js' !== d && 'gtm.sync' !== d) || kj(Df.M);
      switch (d) {
        case 'gtm.init':
          u && vd(20);
      }
      return Fk(r, u);
    };
  function Bk(a) {
    return function (b) {
      Xj && ($b(b) || lk(a, 'input', b));
    };
  }
  function Dk(a, b) {
    ag(a, 'event', 1);
    ag(a, 'ecommerce', 1);
    ag(a, 'gtm');
    ag(a, 'eventModel');
  }
  function Ck() {
    var a = {};
    a.event = $f('event', 1);
    a.ecommerce = $f('ecommerce', 1);
    a.gtm = $f('gtm');
    a.eventModel = $f('eventModel');
    return a;
  }
  function Ek(a) {
    for (var b = [], c = 0; c < a.length; c++) a[c] && Ff[String(Hc[c][ac.lb])] && (b[c] = !0);
    return b;
  }
  function Fk(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++) if (a[c] && Hc[c] && !Gf[String(Hc[c][ac.lb])]) return !0;
    return !1;
  }
  function Hk(a, b) {
    if (a) {
      var c = '' + a;
      0 !== c.indexOf('http://') && 0 !== c.indexOf('https://') && (c = 'https://' + c);
      '/' === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return Ee('' + c + b).href;
    }
  }
  function Ik(a, b) {
    return Jk() ? Hk(a, b) : void 0;
  }
  function Jk() {
    var a = !1;
    return a;
  }
  var Kk;
  if (3 === Df.$c.length) Kk = 'g';
  else {
    var Lk = 'G';
    Lk = 'g';
    Kk = Lk;
  }
  var Mk = {
      '': 'n',
      'UA': 'u',
      'AW': 'a',
      'DC': 'd',
      'G': 'e',
      'GF': 'f',
      'HA': 'h',
      'GTM': Kk,
      'OPT': 'o',
    },
    Nk = function (a) {
      var b = Df.M.split('-'),
        c = b[0].toUpperCase(),
        d = Mk[c] || 'i',
        e = a && 'GTM' === c ? b[1] : 'OPT' === c ? b[1] : '',
        f;
      if (3 === Df.$c.length) {
        var h = 'w';
        h = ji() ? 's' : 'o';
        f = '2' + h;
      } else f = '';
      return f + d + Df.$c + e;
    };
  function Ok(a, b) {
    if ('' === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var Pk = function (a, b) {
    a.addEventListener && a.addEventListener.call(a, 'message', b, !1);
  };
  var Qk = function () {
    return ob('iPhone') && !ob('iPod') && !ob('iPad');
  };
  ob('Opera');
  ob('Trident') || ob('MSIE');
  ob('Edge');
  !ob('Gecko') ||
    (-1 != lb.toLowerCase().indexOf('webkit') && !ob('Edge')) ||
    ob('Trident') ||
    ob('MSIE') ||
    ob('Edge');
  -1 != lb.toLowerCase().indexOf('webkit') && !ob('Edge') && ob('Mobile');
  ob('Macintosh');
  ob('Windows');
  ob('Linux') || ob('CrOS');
  var Rk = qa.navigator || null;
  Rk && (Rk.appVersion || '').indexOf('X11');
  ob('Android');
  Qk();
  ob('iPad');
  ob('iPod');
  Qk() || ob('iPad') || ob('iPod');
  lb.toLowerCase().indexOf('kaios');
  var Sk = function (a, b) {
      for (var c = a, d = 0; 50 > d; ++d) {
        var e;
        try {
          e = !(!c.frames || !c.frames[b]);
        } catch (k) {
          console.error('hack', k);
          e = !1;
        }
        if (e) return c;
        var f;
        a: {
          try {
            var h = c.parent;
            if (h && h != c) {
              f = h;
              break a;
            }
          } catch (k) {
            console.error('hack', k);
          }
          f = null;
        }
        if (!(c = f)) break;
      }
      return null;
    },
    Tk = function (a) {
      var b = A;
      b = void 0 === b ? window.document : b;
      if (!a || !b.head) return null;
      var c = document.createElement('meta');
      b.head.appendChild(c);
      c.httpEquiv = 'origin-trial';
      c.content = a;
      return c;
    };
  var Uk = function () {};
  var Vk = function (a) {
      void 0 !== a.addtlConsent && 'string' !== typeof a.addtlConsent && (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies && 'boolean' !== typeof a.gdprApplies && (a.gdprApplies = void 0);
      return (void 0 !== a.tcString && 'string' !== typeof a.tcString) ||
        (void 0 !== a.listenerId && 'number' !== typeof a.listenerId)
        ? 2
        : a.cmpStatus && 'error' !== a.cmpStatus
        ? 0
        : 3;
    },
    Wk = function (a, b) {
      this.s = a;
      this.o = null;
      this.F = {};
      this.aa = 0;
      this.O = void 0 === b ? 500 : b;
      this.C = null;
    };
  pa(Wk, Uk);
  var Yk = function (a) {
    return 'function' === typeof a.s.__tcfapi || null != Xk(a);
  };
  Wk.prototype.addEventListener = function (a) {
    var b = {},
      c = yb(function () {
        return a(b);
      }),
      d = 0;
    -1 !== this.O &&
      (d = setTimeout(function () {
        b.tcString = 'tcunavailable';
        b.internalErrorState = 1;
        c();
      }, this.O));
    var e = function (f, h) {
      clearTimeout(d);
      f
        ? ((b = f),
          (b.internalErrorState = Vk(b)),
          (h && 0 === b.internalErrorState) ||
            ((b.tcString = 'tcunavailable'), h || (b.internalErrorState = 3)))
        : ((b.tcString = 'tcunavailable'), (b.internalErrorState = 3));
      a(b);
    };
    try {
      Zk(this, 'addEventListener', e);
    } catch (f) {
      console.error('hack', f);
      (b.tcString = 'tcunavailable'),
        (b.internalErrorState = 3),
        d && (clearTimeout(d), (d = 0)),
        c();
    }
  };
  Wk.prototype.removeEventListener = function (a) {
    a && a.listenerId && Zk(this, 'removeEventListener', null, a.listenerId);
  };
  var al = function (a, b, c) {
      var d;
      d = void 0 === d ? '755' : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? '755' : d];
            break a;
          }
        }
        e = void 0;
      }
      var h = e;
      if (0 === h) return !1;
      var k = c;
      2 === c ? ((k = 0), 2 === h && (k = 1)) : 3 === c && ((k = 1), 1 === h && (k = 0));
      var l;
      if (0 === k)
        if (a.purpose && a.vendor) {
          var n = $k(a.vendor.consents, void 0 === d ? '755' : d);
          l =
            n &&
            '1' === b &&
            a.purposeOneTreatment &&
            ('DE' === a.publisherCC || (Bd(xd) && 'CH' === a.publisherCC))
              ? !0
              : n && $k(a.purpose.consents, b);
        } else l = !0;
      else
        l =
          1 === k
            ? a.purpose && a.vendor
              ? $k(a.purpose.legitimateInterests, b) &&
                $k(a.vendor.legitimateInterests, void 0 === d ? '755' : d)
              : !0
            : !0;
      return l;
    },
    $k = function (a, b) {
      return !(!a || !a[b]);
    },
    Zk = function (a, b, c, d) {
      c || (c = function () {});
      if ('function' === typeof a.s.__tcfapi) {
        var e = a.s.__tcfapi;
        e(b, 2, c, d);
      } else if (Xk(a)) {
        bl(a);
        var f = ++a.aa;
        a.F[f] = c;
        if (a.o) {
          var h = {};
          a.o.postMessage(
            ((h.__tcfapiCall = { command: b, version: 2, callId: f, parameter: d }), h),
            '*'
          );
        }
      } else c({}, !1);
    },
    Xk = function (a) {
      if (a.o) return a.o;
      a.o = Sk(a.s, '__tcfapiLocator');
      return a.o;
    },
    bl = function (a) {
      a.C ||
        ((a.C = function (b) {
          try {
            var c;
            c = ('string' === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
            a.F[c.callId](c.returnValue, c.success);
          } catch (d) {
            console.error('hack', d);
          }
        }),
        Pk(a.s, a.C));
    };
  var cl = !0;
  cl = !1;
  var dl = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 },
    el = Ok('', 550),
    fl = Ok('', 500);
  function gl() {
    var a = Q.tcf || {};
    return (Q.tcf = a);
  }
  var hl = function (a, b) {
      this.C = a;
      this.o = b;
      this.s = Va();
    },
    il = function (a) {},
    jl = function (a) {},
    pl = function () {
      var a = gl(),
        b = new Wk(m, cl ? 3e3 : -1),
        c = new hl(b, a);
      if (
        (kl() ? !0 === m.gtag_enable_tcf_support : !1 !== m.gtag_enable_tcf_support) &&
        !a.active &&
        ('function' === typeof m.__tcfapi || Yk(b))
      ) {
        a.active = !0;
        a.yc = {};
        ll();
        var d = null;
        cl
          ? (d = m.setTimeout(function () {
              ml(a);
              nl(a);
              d = null;
            }, fl))
          : (a.tcString = 'tcunavailable');
        try {
          b.addEventListener(function (e) {
            d && (clearTimeout(d), (d = null));
            if (0 !== e.internalErrorState) ml(a), nl(a), il(c);
            else {
              var f;
              a.gdprApplies = e.gdprApplies;
              if (!1 === e.gdprApplies) (f = ol()), b.removeEventListener(e);
              else if (
                'tcloaded' === e.eventStatus ||
                'useractioncomplete' === e.eventStatus ||
                'cmpuishown' === e.eventStatus
              ) {
                var h = {},
                  k;
                for (k in dl)
                  if (dl.hasOwnProperty(k))
                    if ('1' === k) {
                      var l,
                        n = e,
                        p = !0;
                      p = void 0 === p ? !1 : p;
                      var q;
                      var r = n;
                      !1 === r.gdprApplies
                        ? (q = !0)
                        : (void 0 === r.internalErrorState && (r.internalErrorState = Vk(r)),
                          (q =
                            'error' === r.cmpStatus ||
                            0 !== r.internalErrorState ||
                            ('loaded' === r.cmpStatus &&
                              ('tcloaded' === r.eventStatus ||
                                'useractioncomplete' === r.eventStatus))
                              ? !0
                              : !1));
                      l = q
                        ? !1 === n.gdprApplies ||
                          'tcunavailable' === n.tcString ||
                          (void 0 === n.gdprApplies && !p) ||
                          'string' !== typeof n.tcString ||
                          !n.tcString.length
                          ? !0
                          : al(n, '1', 0)
                        : !1;
                      h['1'] = l;
                    } else h[k] = al(e, k, dl[k]);
                f = h;
              }
              f && ((a.tcString = e.tcString || 'tcempty'), (a.yc = f), nl(a), il(c));
            }
          }),
            jl(c);
        } catch (e) {
          console.error('hack', e);
          d && (clearTimeout(d), (d = null)), ml(a), nl(a);
        }
      }
    };
  function ml(a) {
    a.type = 'e';
    a.tcString = 'tcunavailable';
    cl && (a.yc = ol());
  }
  function ll() {
    var a = {},
      b = ((a.ad_storage = 'denied'), (a.wait_for_update = el), a);
    de(b);
  }
  var kl = function () {
    var a = !1;
    a = !0;
    return a;
  };
  function ol() {
    var a = {},
      b;
    for (b in dl) dl.hasOwnProperty(b) && (a[b] = !0);
    return a;
  }
  function nl(a) {
    var b = {},
      c = ((b.ad_storage = a.yc['1'] ? 'granted' : 'denied'), b);
    ql();
    ee(c, 0);
  }
  var rl = function () {
      var a = gl();
      if (a.active && void 0 !== a.loadTime) return Number(a.loadTime);
    },
    ql = function () {
      var a = gl();
      return a.active ? a.tcString || '' : '';
    },
    sl = function () {
      var a = gl();
      return a.active && void 0 !== a.gdprApplies ? (a.gdprApplies ? '1' : '0') : '';
    },
    tl = function (a) {
      if (!dl.hasOwnProperty(String(a))) return !0;
      var b = gl();
      return b.active && b.yc ? !!b.yc[String(a)] : !0;
    };
  var ul = !1;
  var vl = !1;
  function wl(a) {
    var b = String(m.location).split(/[?#]/)[0],
      c = Df.Rg || m._CONSENT_MODE_SALT,
      d;
    if (a) {
      var e;
      if (c) {
        var f = b + a + c,
          h = 1,
          k,
          l,
          n;
        if (f)
          for (h = 0, l = f.length - 1; 0 <= l; l--)
            (n = f.charCodeAt(l)),
              (h = ((h << 6) & 268435455) + n + (n << 14)),
              (k = h & 266338304),
              (h = 0 != k ? h ^ (k >> 21) : h);
        e = String(h);
      } else e = '0';
      d = e;
    } else d = '';
    return d;
  }
  function xl(a) {
    function b(t) {
      var v;
      Q.reported_gclid || (Q.reported_gclid = {});
      v = Q.reported_gclid;
      var x;
      x =
        !h || (Wd() && !N(L.D))
          ? l + (t ? 'gcu' : 'gcs')
          : l + '.' + (f.prefix || '_gcl') + (t ? 'gcu' : 'gcs');
      if (!v[x]) {
        v[x] = !0;
        var y = [],
          w = {},
          z = function (K, M) {
            M && (y.push(K + '=' + encodeURIComponent(M)), (w[K] = !0));
          },
          B = 'https://www.google.com';
        if (Wd()) {
          var C = N(L.D);
          z('gcs', fe());
          t && z('gcu', '1');
          Xd() && z('gcd', 'G1' + be(Ud));
          Q.dedupe_gclid || (Q.dedupe_gclid = '' + Cg());
          z('rnd', Q.dedupe_gclid);
          if ((!l || (n && 'aw.ds' !== n)) && N(L.D)) {
            var D = Ah('_gcl_aw');
            z('gclaw', D.join('.'));
          }
          z('url', String(m.location).split(/[?#]/)[0]);
          z('dclid', yl(d, p));
          var E = !1;
          E = !0;
          C || (!d && !E) || (B = 'https://pagead2.googlesyndication.com');
        }
        z('gdpr_consent', ql()), z('gdpr', sl());
        '1' === kh(!1)._up && z('gtm_up', '1');
        z('gclid', yl(d, l));
        z('gclsrc', n);
        if (
          !(w.gclid || w.dclid || w.gclaw) &&
          (z('gbraid', yl(d, q)), !w.gbraid && Wd() && N(L.D))
        ) {
          var H = Ah('_gcl_gb');
          z('gclgb', H.join('.'));
        }
        z('gtm', Nk(!e));
        h && N(L.D) && (Ng(f || {}), z('auid', Jg[Kg(f.prefix)] || ''));
        ul || (a.gd && z('did', a.gd)), vl && (a.Kb && z('gdid', a.Kb), a.Jb && z('edid', a.Jb));
        var J = B + '/pagead/landing?' + y.join('&');
        Rb(J);
      }
    }
    var c = !!a.pe,
      d = !!a.sa,
      e = a.U,
      f = void 0 === a.ed ? {} : a.ed,
      h = void 0 === a.qd ? !0 : a.qd,
      k = Gh(),
      l = k.gclid || '',
      n = k.gclsrc,
      p = k.dclid || '',
      q = k.gbraid || '',
      r = !c && ((!l || (n && 'aw.ds' !== n) ? !1 : !0) || q),
      u = Wd();
    if (r || u)
      u
        ? he(
            function () {
              b();
              N(L.D) ||
                ge(function (t) {
                  return b(!0, t.Xh);
                }, L.D);
            },
            [L.D]
          )
        : b();
  }
  function yl(a, b) {
    var c = a && !N(L.D);
    return b && c ? '0' : b;
  }
  var zl = ['aw', 'dc', 'gb'];
  function Al(a, b, c, d) {
    var e = a.Hg,
      f = a.callback,
      h = a.mg;
    if ('function' === typeof f)
      if (e === L.Dd && void 0 === h) {
        var k = d(b.prefix, c);
        0 === k.length ? f(void 0) : 1 === k.length ? f(k[0]) : f(k);
      } else e === L.gh ? (vd(65), Ng(b, !1), f(Jg[Kg(b.prefix)])) : f(h);
  }
  function Bl(a, b) {
    var c = a.Yf,
      d = a.kg,
      e = a.Eg;
    if (a.Ib) {
      var f = void 0 === c ? !0 : !!c;
      sh(d[L.Bb], !!d[L.P]) && Lh(zl, b);
      Ih(b);
      Oh(zl, b);
      bi(f, b);
    }
    d[L.P] && Nh(zl, d[L.P], d[L.Wb], !!d[L.Cb], b.prefix);
    e && Qh(['aw', 'dc', 'gb']);
  }
  var Cl = !1;
  var Dl = function () {
      this.o = {};
    },
    El = function (a, b, c) {
      null != c && (a.o[b] = c);
    },
    Fl = function (a) {
      return Object.keys(a.o)
        .map(function (b) {
          return encodeURIComponent(b) + '=' + encodeURIComponent(a.o[b]);
        })
        .join('&');
    },
    Hl = function (a, b, c, d, e) {};
  var Jl = !1,
    Kl = Number('200');
  function Ll() {
    if (!m.Promise) return !1;
    ya(A.interestCohort) ||
      Jl ||
      ((Jl = !0),
      Tk(
        'A489+ZNTpP/HCOD+k3I13nobRVH7eyh5fz5LGhYvQlNf9WauHk/0awCtXOEoWTIK9JN8bgzgn2SfPdaFXe5O9QkAAACKeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9'
      ));
    return ya(A.interestCohort);
  }
  function Ml() {
    var a = Q.floc;
    if (a) {
      var b = a.ts,
        c = a.floc;
      if (b && c && 1e3 > Va() - b) return Promise.resolve(c);
    }
    var d = void 0;
    try {
      d = Promise.race([
        A.interestCohort().then(function (e) {
          Q.floc = { ts: Va(), floc: e };
          return e;
        }),
        new Promise(function (e) {
          m.setTimeout(function () {
            return e();
          }, Kl);
        }),
      ]).catch(function (e) {
        console.error('hack', e);
      });
    } catch (e) {
      console.error('hack', e);
      return;
    }
    return d;
  }
  var Km = function () {
      var a = !0;
      (tl(7) && tl(9) && tl(10)) || (a = !1);
      var b = !0;
      b = !1;
      b && !Jm() && (a = !1);
      return a;
    },
    Jm = function () {
      var a = !0;
      (tl(3) && tl(4)) || (a = !1);
      return a;
    };
  var qn = !1;
  var rn = !1;
  rn = !0;
  function sn() {
    var a = Q;
    return (a.gcq = a.gcq || new tn());
  }
  var un = function (a, b, c) {
      sn().register(a, b, c);
    },
    vn = function (a, b, c, d) {
      sn().push('event', [b, a], c, d);
    },
    wn = function (a, b) {
      sn().push('config', [a], b);
    },
    xn = function (a, b, c, d) {
      sn().push('get', [a, b], c, d);
    },
    yn = {},
    zn = function () {
      this.status = 1;
      this.containerConfig = {};
      this.targetConfig = {};
      this.remoteConfig = {};
      this.s = {};
      this.C = null;
      this.o = !1;
    },
    An = function (a, b, c, d, e) {
      this.type = a;
      this.C = b;
      this.U = c || '';
      this.o = d;
      this.s = e;
    },
    tn = function () {
      this.s = {};
      this.C = {};
      this.o = [];
      this.F = { AW: !1, UA: !1 };
      this.enableDeferrableCommandAfterConfig = qn;
    },
    Bn = function (a, b) {
      var c = gi(b);
      return (a.s[c.containerId] = a.s[c.containerId] || new zn());
    },
    Cn = function (a, b, c) {
      if (b) {
        var d = gi(b);
        if (d && 1 === Bn(a, b).status) {
          Bn(a, b).status = 2;
          var e = {};
          Xj &&
            (e.timeoutId = m.setTimeout(function () {
              vd(38);
              Dj();
            }, 3e3));
          a.push('require', [e], d.containerId);
          yn[d.containerId] = Va();
          if (ji()) {
          } else {
            var h = '/gtag/js?id=' + encodeURIComponent(d.containerId) + '&l=dataLayer&cx=c',
              k =
                ('http:' != m.location.protocol ? 'https:' : 'http:') +
                ('//www.googletagmanager.com' + h),
              l = Ik(c, h) || k;
            Fb(l);
          }
        }
      }
    },
    Dn = function (a, b, c, d) {
      if (d.U) {
        var e = Bn(a, d.U),
          f = e.C;
        if (f) {
          var h = I(c),
            k = I(e.targetConfig[d.U]),
            l = I(e.containerConfig),
            n = I(e.remoteConfig),
            p = I(a.C),
            q = Wf('gtm.uniqueEventId'),
            r = gi(d.U).prefix,
            u = Xa(function () {
              var v = h[L.Ab];
              v && F(v);
            }),
            t = zf(
              yf(
                Af(
                  xf(wf(vf(uf(tf(sf(h), k), l), n), p), function () {
                    kk(q, r, '2');
                    rn && u();
                  }),
                  function () {
                    kk(q, r, '3');
                    rn && u();
                  }
                ),
                function (v, x) {
                  a.F[v] = x;
                }
              ),
              function (v) {
                return a.F[v];
              }
            );
          try {
            kk(q, r, '1');
            f(d.U, b, d.C, t);
          } catch (v) {
            console.error('hack', v);
            kk(q, r, '4');
          }
        }
      }
    };
  tn.prototype.register = function (a, b, c) {
    var d = Bn(this, a);
    if (3 !== d.status) {
      d.C = b;
      d.status = 3;
      c && (I(d.remoteConfig, c), (d.remoteConfig = c));
      var e = gi(a),
        f = yn[e.containerId];
      if (void 0 !== f) {
        var h = Q[e.containerId].bootstrap,
          k = e.prefix.toUpperCase();
        Q[e.containerId]._spx && (k = k.toLowerCase());
        var l = Wf('gtm.uniqueEventId'),
          n = k,
          p = Va() - h;
        if (Xj && !Ij[l]) {
          l !== Ej && (zj(), (Ej = l));
          var q = n + '.' + Math.floor(h - f) + '.' + Math.floor(p);
          Mj = Mj ? Mj + ',' + q : '&cl=' + q;
        }
        delete yn[e.containerId];
      }
      this.flush();
    }
  };
  tn.prototype.push = function (a, b, c, d) {
    var e = Math.floor(Va() / 1e3);
    Cn(this, c, b[0][L.oa] || this.C[L.oa]);
    qn && c && Bn(this, c).o && (d = !1);
    this.o.push(new An(a, e, c, b, d));
    d || this.flush();
  };
  tn.prototype.insert = function (a, b, c) {
    var d = Math.floor(Va() / 1e3);
    0 < this.o.length
      ? this.o.splice(1, 0, new An(a, d, c, b, !1))
      : this.o.push(new An(a, d, c, b, !1));
  };
  tn.prototype.flush = function (a) {
    for (var b = this, c = [], d = !1, e = {}; this.o.length; ) {
      var f = this.o[0];
      if (f.s)
        qn
          ? !f.U || Bn(this, f.U).o
            ? ((f.s = !1), this.o.push(f))
            : c.push(f)
          : ((f.s = !1), this.o.push(f)),
          this.o.shift();
      else {
        switch (f.type) {
          case 'require':
            if (3 !== Bn(this, f.U).status && !a) {
              qn && this.o.push.apply(this.o, c);
              return;
            }
            Xj && m.clearTimeout(f.o[0].timeoutId);
            break;
          case 'set':
            Na(f.o[0], function (r, u) {
              I(bb(r, u), b.C);
            });
            break;
          case 'config':
            e.Ja = {};
            Na(
              f.o[0],
              (function (r) {
                return function (u, t) {
                  I(bb(u, t), r.Ja);
                };
              })(e)
            );
            var h = !!e.Ja[L.Sc];
            delete e.Ja[L.Sc];
            var k = Bn(this, f.U),
              l = gi(f.U),
              n = l.containerId === l.id;
            h || (n ? (k.containerConfig = {}) : (k.targetConfig[f.U] = {}));
            (k.o && h) || Dn(this, L.Da, e.Ja, f);
            k.o = !0;
            delete e.Ja[L.ac];
            n ? I(e.Ja, k.containerConfig) : I(e.Ja, k.targetConfig[f.U]);
            qn && (d = !0);
            break;
          case 'event':
            e.Cc = {};
            Na(
              f.o[0],
              (function (r) {
                return function (u, t) {
                  I(bb(u, t), r.Cc);
                };
              })(e)
            );
            Dn(this, f.o[1], e.Cc, f);
            break;
          case 'get':
            var p = {},
              q = ((p[L.Na] = f.o[0]), (p[L.Va] = f.o[1]), p);
            Dn(this, L.La, q, f);
        }
        this.o.shift();
        En(this, f);
      }
      e = { Ja: e.Ja, Cc: e.Cc };
    }
    qn && (this.o.push.apply(this.o, c), d && this.flush());
  };
  var En = function (a, b) {
    if ('require' !== b.type)
      if (b.U)
        for (var c = a.getCommandListeners(b.U)[b.type] || [], d = 0; d < c.length; d++) c[d]();
      else
        for (var e in a.s)
          if (a.s.hasOwnProperty(e)) {
            var f = a.s[e];
            if (f && f.s) for (var h = f.s[b.type] || [], k = 0; k < h.length; k++) h[k]();
          }
  };
  tn.prototype.getRemoteConfig = function (a) {
    return Bn(this, a).remoteConfig;
  };
  tn.prototype.getCommandListeners = function (a) {
    return Bn(this, a).s;
  };
  var Fn = function (a, b, c) {
      var d = {
        'event': b,
        'gtm.element': a,
        'gtm.elementClasses': Sb(a, 'className'),
        'gtm.elementId': a['for'] || Nb(a, 'id') || '',
        'gtm.elementTarget': a.formTarget || Sb(a, 'target') || '',
      };
      c && (d['gtm.triggers'] = c.join(','));
      d['gtm.elementUrl'] =
        (a.attributes && a.attributes.formaction ? a.formAction : '') ||
        a.action ||
        Sb(a, 'href') ||
        a.src ||
        a.code ||
        a.codebase ||
        '';
      return d;
    },
    Gn = function (a) {
      Q.hasOwnProperty('autoEventsSettings') || (Q.autoEventsSettings = {});
      var b = Q.autoEventsSettings;
      b.hasOwnProperty(a) || (b[a] = {});
      return b[a];
    },
    Hn = function (a, b, c) {
      Gn(a)[b] = c;
    },
    In = function (a, b, c, d) {
      var e = Gn(a),
        f = Wa(e, b, d);
      e[b] = c(f);
    },
    Jn = function (a, b, c) {
      var d = Gn(a);
      return Wa(d, b, c);
    };
  var Kn = ['input', 'select', 'textarea'],
    Ln = ['button', 'hidden', 'image', 'reset', 'submit'],
    Mn = function (a) {
      var b = a.tagName.toLowerCase();
      return !Ca(Kn, function (c) {
        return c === b;
      }) ||
        ('input' === b &&
          Ca(Ln, function (c) {
            return c === a.type.toLowerCase();
          }))
        ? !1
        : !0;
    },
    Nn = function (a) {
      return a.form ? (a.form.tagName ? a.form : A.getElementById(a.form)) : Qb(a, ['form'], 100);
    },
    On = function (a, b, c) {
      if (!a.elements) return 0;
      for (var d = b.dataset[c], e = 0, f = 1; e < a.elements.length; e++) {
        var h = a.elements[e];
        if (Mn(h)) {
          if (h.dataset[c] === d) return f;
          f++;
        }
      }
      return 0;
    };
  var Pn = !!m.MutationObserver,
    Qn = void 0,
    Rn = function (a) {
      if (!Qn) {
        var b = function () {
          var c = A.body;
          if (c)
            if (Pn)
              new MutationObserver(function () {
                for (var e = 0; e < Qn.length; e++) F(Qn[e]);
              }).observe(c, { childList: !0, subtree: !0 });
            else {
              var d = !1;
              Lb(c, 'DOMNodeInserted', function () {
                d ||
                  ((d = !0),
                  F(function () {
                    d = !1;
                    for (var e = 0; e < Qn.length; e++) F(Qn[e]);
                  }));
              });
            }
        };
        Qn = [];
        A.body ? b() : F(b);
      }
      Qn.push(a);
    };
  var Sn = function (a, b, c) {
    function d() {
      var h = a();
      f += e ? ((Va() - e) * h.playbackRate) / 1e3 : 0;
      e = Va();
    }
    var e = 0,
      f = 0;
    return {
      createEvent: function (h, k, l) {
        var n = a(),
          p = n.ag,
          q = void 0 !== l ? Math.round(l) : void 0 !== k ? Math.round(n.ag * k) : Math.round(n.bi),
          r = void 0 !== k ? Math.round(100 * k) : 0 >= p ? 0 : Math.round((q / p) * 100),
          u = A.hidden ? !1 : 0.5 <= re(c);
        d();
        var t = void 0;
        void 0 !== b && (t = [b]);
        var v = Fn(c, 'gtm.video', t);
        v['gtm.videoProvider'] = 'youtube';
        v['gtm.videoStatus'] = h;
        v['gtm.videoUrl'] = n.url;
        v['gtm.videoTitle'] = n.title;
        v['gtm.videoDuration'] = Math.round(p);
        v['gtm.videoCurrentTime'] = Math.round(q);
        v['gtm.videoElapsedTime'] = Math.round(f);
        v['gtm.videoPercent'] = r;
        v['gtm.videoVisible'] = u;
        return v;
      },
      Qi: function () {
        e = Va();
      },
      me: function () {
        d();
      },
    };
  };
  var Tn = !1,
    Un = [];
  function Vn() {
    if (!Tn) {
      Tn = !0;
      for (var a = 0; a < Un.length; a++) F(Un[a]);
    }
  }
  var Wn = function (a) {
    Tn ? F(a) : Un.push(a);
  };
  function Xn(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) == c;
  }
  var Yn = new Fa();
  function Zn(a, b, c) {
    var d = c ? 'i' : void 0;
    try {
      var e = String(b) + d,
        f = Yn.get(e);
      f || ((f = new RegExp(b, d)), Yn.set(e, f));
      return f.test(a);
    } catch (h) {
      console.error('hack', h);
      return !1;
    }
  }
  function $n(a, b) {
    function c(h) {
      var k = Ee(h),
        l = Ce(k, 'protocol'),
        n = Ce(k, 'host', !0),
        p = Ce(k, 'port'),
        q = Ce(k, 'path').toLowerCase().replace(/\/$/, '');
      if (void 0 === l || ('http' == l && '80' == p) || ('https' == l && '443' == p))
        (l = 'web'), (p = 'default');
      return [l, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function ao(a) {
    return bo(a) ? 1 : 0;
  }
  function bo(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Aa(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = I(a, {});
        I({ arg1: c[d], any_of: void 0 }, e);
        if (ao(e)) return !0;
      }
      return !1;
    }
    switch (a['function']) {
      case '_cn':
        return 0 <= String(b).indexOf(String(c));
      case '_css':
        var f;
        a: {
          if (b) {
            var h = [
              'matches',
              'webkitMatchesSelector',
              'mozMatchesSelector',
              'msMatchesSelector',
              'oMatchesSelector',
            ];
            try {
              for (var k = 0; k < h.length; k++)
                if (b[h[k]]) {
                  f = b[h[k]](c);
                  break a;
                }
            } catch (n) {
              console.error('hack', n);
            }
          }
          f = !1;
        }
        return f;
      case '_ew':
        return Xn(b, c);
      case '_eq':
        return String(b) == String(c);
      case '_ge':
        return Number(b) >= Number(c);
      case '_gt':
        return Number(b) > Number(c);
      case '_lc':
        var l;
        l = String(b).split(',');
        return 0 <= Ba(l, String(c));
      case '_le':
        return Number(b) <= Number(c);
      case '_lt':
        return Number(b) < Number(c);
      case '_re':
        return Zn(b, c, a.ignore_case);
      case '_sw':
        return 0 == String(b).indexOf(String(c));
      case '_um':
        return $n(b, c);
    }
    return !1;
  }
  Object.freeze({ dl: 1, id: 1 });
  var co = {},
    fo = function (a, b) {
      b = b.toString().split(',');
      for (var c = 0; c < b.length; c++) {
        var d = co[b[c]] || [];
        co[b[c]] = d;
        0 > Ba(d, a) && d.push(a);
      }
    },
    go = function (a) {
      Na(co, function (b, c) {
        var d = Ba(c, a);
        0 <= d && c.splice(d, 1);
      });
    };
  var ho = 'HA GF G UA AW DC'.split(' '),
    io = !1;
  io = !0;
  var jo = !1,
    ko = !1;
  function lo(a, b) {
    var c = { event: a };
    b &&
      ((c.eventModel = I(b)),
      b[L.Ab] && (c.eventCallback = b[L.Ab]),
      b[L.Kc] && (c.eventTimeout = b[L.Kc]));
    return c;
  }
  function mo(a) {
    a.hasOwnProperty('gtm.uniqueEventId') ||
      Object.defineProperty(a, 'gtm.uniqueEventId', { value: Qf() });
    return a['gtm.uniqueEventId'];
  }
  function no() {
    if (!jo && !Q.gtagRegistered) {
      jo = Q.gtagRegistered = !0;
      Q.addTargetToGroup = function (c) {
        fo(c, 'default');
      };
    }
    return jo;
  }
  var oo = {
      config: function (a) {
        var b,
          c = mo(a);
        if (2 > a.length || !g(a[1])) return;
        var d = {};
        if (2 < a.length) {
          if ((void 0 != a[2] && !Zb(a[2])) || 3 < a.length) return;
          d = a[2];
        }
        var e = gi(a[1]);
        if (!e) return;
        go(e.id);
        fo(e.id, d[L.Td] || 'default');
        delete d[L.Td];
        ko || vd(43);
        if (no() && -1 !== Ba(ho, e.prefix)) {
          'G' === e.prefix && (d[L.ac] = !0);
          io && delete d[L.Ab];
          wn(d, e.id);
          return;
        }
        Zf('gtag.targets.' + e.id, void 0);
        Zf('gtag.targets.' + e.id, I(d));
        var f = {};
        f[L.jb] = e.id;
        b = lo(L.Da, f);
        b['gtm.uniqueEventId'] = c;
        return b;
      },
      consent: function (a) {
        function b() {
          no() && I(a[2], { subcommand: a[1] });
        }
        if (3 === a.length) {
          vd(39);
          var c = Qf(),
            d = a[1];
          'default' === d ? (b(), de(a[2])) : 'update' === d && (b(), ee(a[2], c));
        }
      },
      event: function (a) {
        var b = a[1];
        if (!(2 > a.length) && g(b)) {
          var c;
          if (2 < a.length) {
            if ((!Zb(a[2]) && void 0 != a[2]) || 3 < a.length) return;
            c = a[2];
          }
          var d = lo(b, c),
            e = mo(a);
          d['gtm.uniqueEventId'] = e;
          var f;
          var h = c && c[L.jb];
          void 0 === h && ((h = Wf(L.jb, 2)), void 0 === h && (h = 'default'));
          if (g(h) || Aa(h)) {
            for (
              var k = h.toString().replace(/\s+/g, '').split(','), l = [], n = 0;
              n < k.length;
              n++
            )
              if (0 <= k[n].indexOf('-')) l.push(k[n]);
              else {
                var p = co[k[n]];
                p && p.length && (l = l.concat(p));
              }
            f = ii(l);
          } else f = void 0;
          var q = f;
          if (!q) return;
          for (var r = no(), u = [], t = 0; r && t < q.length; t++) {
            var v = q[t];
            if (-1 !== Ba(ho, v.prefix)) {
              var x = I(c);
              'G' === v.prefix && (x[L.ac] = !0);
              io && delete x[L.Ab];
              vn(b, x, v.id);
            }
            u.push(v.id);
          }
          d.eventModel = d.eventModel || {};
          0 < q.length ? (d.eventModel[L.jb] = u.join()) : delete d.eventModel[L.jb];
          ko || vd(43);
          return d;
        }
      },
      get: function (a) {
        vd(53);
        if (4 !== a.length || !g(a[1]) || !g(a[2]) || !ya(a[3])) return;
        var b = gi(a[1]),
          c = String(a[2]),
          d = a[3];
        if (!b) return;
        ko || vd(43);
        if (!no() || -1 === Ba(ho, b.prefix)) return;
        Qf();
        var e = {};
        pk(I(((e[L.Na] = c), (e[L.Va] = d), e)));
        xn(
          c,
          function (f) {
            F(function () {
              return d(f);
            });
          },
          b.id
        );
      },
      js: function (a) {
        if (2 == a.length && a[1].getTime) {
          ko = !0;
          no();
          var b = {};
          return (
            (b.event = 'gtm.js'),
            (b['gtm.start'] = a[1].getTime()),
            (b['gtm.uniqueEventId'] = mo(a)),
            b
          );
        }
      },
      policy: function () {},
      set: function (a) {
        var b;
        2 == a.length && Zb(a[1])
          ? (b = I(a[1]))
          : 3 == a.length &&
            g(a[1]) &&
            ((b = {}), Zb(a[2]) || Aa(a[2]) ? (b[a[1]] = I(a[2])) : (b[a[1]] = a[2]));
        if (b) {
          if ((Qf(), no())) {
            I(b);
            var c = I(b);
            sn().push('set', [c]);
          }
          b._clear = !0;
          return b;
        }
      },
    },
    po = { policy: !0 };
  var qo = function (a, b) {
      var c = a.hide;
      if (c && void 0 !== c[b] && c.end) {
        c[b] = !1;
        var d = !0,
          e;
        for (e in c)
          if (c.hasOwnProperty(e) && !0 === c[e]) {
            d = !1;
            break;
          }
        d && (c.end(), (c.end = null));
      }
    },
    so = function (a) {
      var b = ro(),
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var Jo = function (a) {
    if (Io(a)) return a;
    this.o = a;
  };
  Jo.prototype.ni = function () {
    return this.o;
  };
  var Io = function (a) {
    return !a || 'object' !== Xb(a) || Zb(a) ? !1 : 'getUntrustedUpdateValue' in a;
  };
  Jo.prototype.getUntrustedUpdateValue = Jo.prototype.ni;
  var Ko = [],
    Lo = !1,
    Mo = !1,
    No = !1,
    Oo = function (a) {
      return m['dataLayer'].push(a);
    },
    Po = function (a) {
      var b = Q['dataLayer'],
        c = b ? b.subscribers : 1,
        d = 0,
        e = a;
      return function () {
        ++d === c && (e(), (e = null));
      };
    };
  function Qo(a) {
    var b = a._clear;
    Na(a, function (d, e) {
      '_clear' !== d && (b && Zf(d, void 0), Zf(d, e));
    });
    Lf || (Lf = a['gtm.start']);
    var c = a['gtm.uniqueEventId'];
    if (!a.event) return !1;
    c || ((c = Qf()), (a['gtm.uniqueEventId'] = c), Zf('gtm.uniqueEventId', c));
    return Gk(a);
  }
  function Ro() {
    var a = Ko[0];
    if (null == a || 'object' !== typeof a) return !1;
    if (a.event) return !0;
    if (Oa(a)) {
      var b = a[0];
      if ('config' === b || 'event' === b || 'js' === b) return !0;
    }
    return !1;
  }
  function So() {
    for (var a = !1; !No && 0 < Ko.length; ) {
      if (!Mo && Ro()) {
        var b = {};
        Ko.unshift(((b.event = 'gtm.init'), b));
        Mo = !0;
      }
      if (!Lo && Ro()) {
        var c = {};
        Ko.unshift(((c.event = 'gtm.init_consent'), c));
        Lo = !0;
      }
      No = !0;
      delete Tf.eventModel;
      Vf();
      var d = Ko.shift();
      if (null != d) {
        var e = Io(d);
        if (e) {
          var f = d;
          d = Io(f) ? f.getUntrustedUpdateValue() : void 0;
          for (
            var h = [
                'gtm.allowlist',
                'gtm.blocklist',
                'gtm.whitelist',
                'gtm.blacklist',
                'tagTypeBlacklist',
              ],
              k = 0;
            k < h.length;
            k++
          ) {
            var l = h[k],
              n = Wf(l, 1);
            if (Aa(n) || Zb(n)) n = I(n);
            Uf[l] = n;
          }
        }
        try {
          if (ya(d))
            try {
              d.call(Xf);
            } catch (y) {
              console.error('hack', y);
            }
          else if (Aa(d)) {
            var p = d;
            if (g(p[0])) {
              var q = p[0].split('.'),
                r = q.pop(),
                u = p.slice(1),
                t = Wf(q.join('.'), 2);
              if (void 0 !== t && null !== t)
                try {
                  t[r].apply(t, u);
                } catch (y) {
                  console.error('hack', y);
                }
            }
          } else {
            if (Oa(d)) {
              a: {
                var v = d;
                if (v.length && g(v[0])) {
                  var x = oo[v[0]];
                  if (x && (!e || !po[v[0]])) {
                    d = x(v);
                    break a;
                  }
                }
                d = void 0;
              }
              if (!d) {
                No = !1;
                continue;
              }
            }
            a = Qo(d) || a;
          }
        } finally {
          e && Vf(!0);
        }
      }
      No = !1;
    }
    return !a;
  }
  function To() {
    var b = So();
    try {
      qo(m['dataLayer'], Df.M);
    } catch (c) {
      console.error('hack', c);
    }
    return b;
  }
  var Vo = function () {
      var a = Db('dataLayer', []),
        b = Db('google_tag_manager', {});
      b = b['dataLayer'] = b['dataLayer'] || {};
      Oi(function () {
        b.gtmDom || ((b.gtmDom = !0), a.push({ event: 'gtm.dom' }));
      });
      Wn(function () {
        b.gtmLoad || ((b.gtmLoad = !0), a.push({ event: 'gtm.load' }));
      });
      b.subscribers = (b.subscribers || 0) + 1;
      var c = a.push;
      a.push = function () {
        var e;
        if (0 < Q.SANDBOXED_JS_SEMAPHORE) {
          e = [];
          for (var f = 0; f < arguments.length; f++) e[f] = new Jo(arguments[f]);
        } else e = [].slice.call(arguments, 0);
        var h = c.apply(a, e);
        Ko.push.apply(Ko, e);
        if (300 < this.length) for (vd(4); 300 < this.length; ) this.shift();
        var k = 'boolean' !== typeof h || h;
        return So() && k;
      };
      var d = a.slice(0);
      Ko.push.apply(Ko, d);
      if (Uo()) {
        F(To);
      }
    },
    Uo = function () {
      var a = !0;
      a = !1;
      return a;
    };
  var Wo = {};
  Wo.Vc = new String('undefined');
  var Xo = function (a) {
    this.o = function (b) {
      for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === Wo.Vc ? b : a[d]);
      return c.join('');
    };
  };
  Xo.prototype.toString = function () {
    return this.o('undefined');
  };
  Xo.prototype.valueOf = Xo.prototype.toString;
  Wo.Lh = Xo;
  Wo.he = {};
  Wo.ai = function (a) {
    return new Xo(a);
  };
  var Yo = {};
  Wo.Oi = function (a, b) {
    var c = Qf();
    Yo[c] = [a, b];
    return c;
  };
  Wo.Zf = function (a) {
    var b = a ? 0 : 1;
    return function (c) {
      var d = Yo[c];
      if (d && 'function' === typeof d[b]) d[b]();
      Yo[c] = void 0;
    };
  };
  Wo.ui = function (a) {
    for (var b = !1, c = !1, d = 2; d < a.length; d++)
      (b = b || 8 === a[d]), (c = c || 16 === a[d]);
    return b && c;
  };
  Wo.Ii = function (a) {
    if (a === Wo.Vc) return a;
    var b = Qf();
    Wo.he[b] = a;
    return 'google_tag_manager["' + Df.M + '"].macro(' + b + ')';
  };
  Wo.Ei = function (a, b, c) {
    a instanceof Wo.Lh && ((a = a.o(Wo.Oi(b, c))), (b = wa));
    return { oi: a, onSuccess: b };
  };
  var ip = m.clearTimeout,
    jp = m.setTimeout,
    U = function (a, b, c) {
      if (ji()) {
        b && F(b);
      } else return Fb(a, b, c);
    },
    kp = function () {
      return new Date();
    },
    lp = function () {
      return m.location.href;
    },
    mp = function (a) {
      return Ce(Ee(a), 'fragment');
    },
    np = function (a) {
      return De(Ee(a));
    },
    op = function (a, b) {
      return Wf(a, b || 2);
    },
    pp = function (a, b, c) {
      var d;
      b ? ((a.eventCallback = b), c && (a.eventTimeout = c), (d = Oo(a))) : (d = Oo(a));
      return d;
    },
    qp = function (a, b) {
      m[a] = b;
    },
    W = function (a, b, c) {
      b && (void 0 === m[a] || (c && !m[a])) && (m[a] = b);
      return m[a];
    },
    rp = function (a, b, c) {
      return ng(a, b, void 0 === c ? !0 : !!c);
    },
    sp = function (a, b, c) {
      return 0 === zg(a, b, c);
    },
    tp = function (a, b) {
      if (ji()) {
        b && F(b);
      } else Hb(a, b);
    },
    up = function (a) {
      return !!Jn(a, 'init', !1);
    },
    vp = function (a) {
      Hn(a, 'init', !0);
    },
    wp = function (a) {
      var b = Jf + '?id=' + encodeURIComponent(a) + '&l=dataLayer';
      U(li('https://', 'http://', b));
    },
    xp = function (a, b, c) {
      Xj && ($b(a) || lk(c, b, a));
    };
  var yp = Wo.Ei;
  var Vp = encodeURI,
    X = encodeURIComponent,
    Wp = Kb;
  var Xp = function (a, b) {
    if (!a) return !1;
    var c = Ce(Ee(a), 'host');
    if (!c) return !1;
    for (var d = 0; b && d < b.length; d++) {
      var e = b[d] && b[d].toLowerCase();
      if (e) {
        var f = c.length - e.length;
        0 < f && '.' != e.charAt(0) && (f--, (e = '.' + e));
        if (0 <= f && c.indexOf(e, f) == f) return !0;
      }
    }
    return !1;
  };
  var Yp = function (a, b, c) {
    for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
      a[f] &&
        a[f].hasOwnProperty(b) &&
        a[f].hasOwnProperty(c) &&
        ((d[a[f][b]] = a[f][c]), (e = !0));
    return e ? d : null;
  };
  var gr = {};
  gr[L.Ic] = '';
  gr[L.ca] = '';
  gr[L.Ma] = '';
  gr[L.la] = 'auto';
  gr[L.fb] = '/';
  gr[L.Ha] = 63072e3;
  gr[L.Zb] = 30;
  gr[L.Pc] = 1e4;
  gr[L.Yb] = !0;
  var hr = function (a, b, c, d, e) {
    this.C = a;
    this.K = b;
    this.F = c;
    this.J = d.eventModel;
    this.Sh = d.containerConfig;
    this.s = d;
    this.aa = d.getWithConfig(L.eb) ? 1 : 7;
    this.ce = d.getWithConfig(L.hb) ? 1 : 7;
    this.ab = e;
    this.Gb = this.be = this.Rf = this.O = this.je = this.Pf = this.Ua = !1;
    this.nb = 0;
    this.ee = this.fe = this.Wc = !1;
    this.ke = void 0;
    this.Tc = 0;
    this.Of = this.de = void 0;
    this.Mf = !1;
    this.ae = this.Uc = this.Qf = this.o = void 0;
  };
  ba = hr.prototype;
  ba.Ia = function (a, b) {
    void 0 === this.B(a) && (this.J[a] = b);
  };
  ba.yg = function (a, b) {
    b <= this.aa && ((this.J[L.eb] = a), (this.aa = b));
  };
  ba.zg = function (a, b) {
    b <= this.ce && ((this.J[L.hb] = a), (this.ce = b));
  };
  ba.B = function (a) {
    return void 0 !== this.J[a]
      ? this.J[a]
      : void 0 !== this.s.getWithConfig(a)
      ? this.s.getWithConfig(a)
      : void 0 !== this.ab[a]
      ? this.ab[a]
      : gr[a];
  };
  ba.getRemoteConfig = function (a) {
    return void 0 !== this.s.remoteConfig[a] ? this.s.remoteConfig[a] : this.ab[a];
  };
  ba.od = function (a) {
    var b = this.ab[L.Qd];
    if (b && void 0 !== b[a || this.K]) return b[a || this.K];
  };
  ba.gg = function () {
    var a = this.B(L.ya);
    if ('object' === typeof a) return a;
  };
  ba.hg = function () {
    return !!this.gg();
  };
  ba.abort = function () {
    throw 'ABORT';
  };
  ba.$a = function () {
    return !((!0 !== this.B(L.Ub) && 'true' !== this.B(L.Ub)) || !this.B(L.oa));
  };
  var ir = !1,
    jr = function (a) {
      var b = !1;
      b = a.K === L.zb && Wd() && a.$a();
      return !(!Bb.sendBeacon || a.Wc || a.fe || a.O || a.be || a.Gb || b || ir);
    };
  var nr = function () {
      var a = 0,
        b = 0;
      return {
        start: function () {
          a = Va();
        },
        stop: function () {
          b = this.get();
        },
        get: function () {
          var c = 0;
          kr && lr && mr && (c = Va() - a);
          return c + b;
        },
      };
    },
    rr = function () {
      or += pr();
      qr = nr();
      kr && lr && mr && qr.start();
    },
    qr = void 0,
    or = 0,
    kr = !1,
    lr = !1,
    mr = !1,
    sr = void 0,
    tr = void 0,
    ur = function () {
      if (!qr) {
        kr = A.hasFocus();
        lr = !A.hidden;
        mr = !0;
        var a = function (b, c, d) {
          Lb(b, c, function (e) {
            qr.stop();
            d(e);
            kr && lr && mr && qr.start();
          });
        };
        a(m, 'focus', function () {
          kr = !0;
        });
        a(m, 'blur', function () {
          kr = !1;
        });
        a(m, 'pageshow', function (b) {
          mr = !0;
          b.persisted && vd(56);
          tr && tr();
        });
        a(m, 'pagehide', function () {
          mr = !1;
          sr && sr();
        });
        a(A, 'visibilitychange', function () {
          lr = !A.hidden;
        });
        rr();
        or = 0;
      }
    },
    pr = function () {
      return (qr && qr.get()) || 0;
    };
  var vr = function (a) {
    ta('GA4_EVENT', a);
  };
  var xr = function (a) {
      return !a || wr.test(a) || 0 <= Ba(L.Ch, a);
    },
    yr = function (a) {
      var b = a[L.rf];
      if (b) return b;
      var c = a[L.Db];
      if (g(c)) {
        if ('function' === typeof URL)
          try {
            return new URL(c).pathname;
          } catch (e) {
            console.error('hack', e);
            return;
          }
        var d = Ee(c);
        return d.hostname ? Ce(d, 'path') : void 0;
      }
    },
    zr = function (a, b, c) {
      if (c)
        switch (c.type) {
          case 'event_name':
            return a;
          case 'const':
            return c.const_value;
          case 'event_param':
            var d = c.event_param.param_name,
              e = b[d];
            return e;
        }
    },
    Ar = function (a, b, c) {
      for (var d = c.event_param_ops || [], e = 0; e < d.length; e++) {
        var f = d[e];
        if (f.edit_param) {
          var h = f.edit_param.param_name,
            k = zr(a, b, f.edit_param.param_value),
            l;
          if (k) {
            var n = Number(k);
            l = isNaN(n) ? k : n;
          } else l = k;
          b[h] = l;
        } else f.delete_param && delete b[f.delete_param.param_name];
      }
    },
    Br = function (a, b) {
      var c = b.values || [],
        d = zr(a.K, a.J, c[0]),
        e = zr(a.K, a.J, c[1]),
        f = b.type;
      if ('eqi' === f || 'swi' === f || 'ewi' === f || 'cni' === f)
        (d = 'string' === typeof d ? d.toLowerCase() : d),
          (e = 'string' === typeof e ? e.toLowerCase() : e);
      var h = !1;
      switch (f) {
        case 'eq':
        case 'eqi':
          h = String(d) == String(e);
          break;
        case 'sw':
        case 'swi':
          h = 0 == String(d).indexOf(String(e));
          break;
        case 'ew':
        case 'ewi':
          h = Xn(d, e);
          break;
        case 'cn':
        case 'cni':
          h = 0 <= String(d).indexOf(String(e));
          break;
        case 'lt':
          h = Number(d) < Number(e);
          break;
        case 'le':
          h = Number(d) <= Number(e);
          break;
        case 'gt':
          h = Number(d) > Number(e);
          break;
        case 'ge':
          h = Number(d) >= Number(e);
          break;
        case 're':
        case 'rei':
          h = Zn(d, e, 'rei' === f);
      }
      return !!b.negate !== h;
    },
    Cr = function (a, b) {
      var c = b.event_name_predicate;
      if (c && !Br(a, c)) return !1;
      var d = b.conditions || [];
      if (0 === d.length) return !0;
      for (var e = 0; e < d.length; e++) {
        for (var f = d[e].predicates || [], h = !0, k = 0; k < f.length; k++)
          if (!Br(a, f[k])) {
            h = !1;
            break;
          }
        if (h) return !0;
      }
      return !1;
    },
    wr = /^(_|ga_|google_|gtag\.|firebase_).*$/,
    Dr = !1;
  Dr = !0;
  function Er() {
    return (m.gaGlobal = m.gaGlobal || {});
  }
  var Fr = function () {
      var a = Er();
      a.hid = a.hid || Ea();
      return a.hid;
    },
    Gr = function (a, b) {
      var c = Er();
      if (void 0 == c.vid || (b && !c.from_cookie)) (c.vid = a), (c.from_cookie = b);
    };
  var Jr = function (a, b) {
      var c = !0;
      return c;
    },
    Lr = function (a) {
      var b;
      return b;
    },
    Hr = function (a, b, c) {
      var d = String(c.B(L.la)),
        e = String(c.B(L.fb)),
        f = Number(c.B(L.Ha)),
        h = c.B(L.Tb),
        k = {
          Sa: L.H,
          domain: d,
          path: e,
          expires: f ? new Date(Va() + 1e3 * f) : void 0,
          flags: '' + c.B(L.Ma),
        };
      if (!1 === h && Mr(c) === b) return !0;
      var l = Gg(b, Nr[0], d, e);
      return 1 !== zg(a, l, k);
    },
    Kr = function (a, b) {
      var c = '' + b.B(L.la),
        d = '' + b.B(L.fb),
        e = Fg(a, c, d, Nr, L.H);
      if (!e) {
        var f = String(b.B(L.Ic));
        f && f != a && (e = Fg(f, c, d, Nr, L.H));
      }
      return e;
    },
    Ir = function (a) {
      return a.B(L.ca) + '_ga_ecid';
    },
    Pr = function (a, b) {
      return Hr(Or(b), a, b);
    },
    Mr = function (a) {
      return Kr(Or(a), a);
    },
    Or = function (a) {
      return String(a.B(L.ca)) + '_ga';
    },
    Nr = ['GA1'];
  var Sr = function (a, b) {
      var c = Qr(b),
        d = String(b.B(L.la)),
        e = String(b.B(L.fb)),
        f = Number(b.B(L.Ha)),
        h = Gg(a, Rr[0], d, e),
        k = {
          Sa: L.H,
          domain: d,
          path: e,
          expires: f ? new Date(Va() + 1e3 * f) : void 0,
          flags: String(b.B(L.Ma)),
        };
      return 1 !== zg(c, h, k);
    },
    Tr = function (a) {
      var b = Qr(a),
        c = String(a.B(L.la)),
        d = String(a.B(L.fb));
      return Fg(b, c, d, Rr, L.H);
    },
    Rr = ['GS1'],
    Qr = function (a) {
      return String(a.B(L.ca)) + '_ga_' + a.C.substr(2);
    },
    Ur = function (a) {
      var b;
      var c = a.J[L.Eb],
        d = a.J[L.Qc],
        e = !!a.J[L.Mc];
      if (c && d) {
        var f = [c, d, Pa(a.J[L.Oc]), a.F, a.nb];
        b = f.join('.');
      } else b = void 0;
      return b;
    };
  var Vr = function (a) {
      var b = a.B(L.na),
        c = a.getRemoteConfig(L.na);
      if (c === b) return c;
      var d = I(b);
      c && c[L.P] && (d[L.P] = (d[L.P] || []).concat(c[L.P]));
      return d;
    },
    Wr = function (a, b, c, d) {
      var e = kh(!0);
      if ('1' !== e._up) return {};
      var f = e[b],
        h = e[d],
        k;
      a.o && (k = e[c]);
      return { clientId: f, bg: k, xg: h };
    },
    Xr = function (a, b, c, d) {
      var e = kh(!0),
        f = e[b];
      f && (a.yg(f, 2), Pr(f, a));
      var h = e[c];
      a.o && h && (a.zg(h, 2), Jr(h, a));
      var k = e[d];
      k && Sr(k, a);
      return a.o ? !!(f && h && k) : !(!f || !k);
    },
    Yr = !1,
    Zr = function (a) {
      var b = Vr(a) || {},
        c = Or(a),
        d = Ir(a),
        e = Qr(a);
      sh(b[L.Bb], !!b[L.P]) && Xr(a, c, d, e) && (Yr = !0);
      b[L.P] &&
        ph(
          function () {
            var f = {},
              h = Mr(a);
            h && (f[c] = h);
            if (a.o) {
              var k = Lr(a);
              k && (f[d] = k);
            }
            var l = Tr(a);
            l && (f[e] = l);
            var n = ng('FPLC', void 0, void 0, L.H);
            n.length && (f._fplc = n[0]);
            return f;
          },
          b[L.P],
          b[L.Wb],
          !!b[L.Cb]
        );
    },
    as = function (a) {
      if (!a.B(L.Oa)) return {};
      var b = Or(a),
        c = Ir(a),
        d = Qr(a);
      qh(function () {
        var e;
        if (N('analytics_storage')) e = {};
        else {
          var f = {},
            h = ((f._up = '1'), (f[b] = a.J[L.eb]), (f[d] = Ur(a)), f);
          a.o && (h[c] = a.J[L.hb]);
          e = h;
        }
        return e;
      }, 1);
      if (!N('analytics_storage') && $r()) return Wr(a, b, c, d);
      return {};
    },
    $r = function () {
      var a = Be(m.location, 'host'),
        b = Be(Ee(A.referrer), 'host');
      return a && b
        ? a === b || 0 <= a.indexOf('.' + b) || 0 <= b.indexOf('.' + a)
          ? !0
          : !1
        : !1;
    };
  var bs = function () {
    var a = Va(),
      b = a + 864e5,
      c = 20,
      d = 5e3;
    return function () {
      var e = Va();
      e >= b && ((b = e + 864e5), (d = 5e3));
      if (1 > d) return !1;
      c = Math.min(c + ((e - a) / 1e3) * 5, 20);
      a = e;
      if (1 > c) return !1;
      d--;
      c--;
      return !0;
    };
  };
  var cs = !1;
  cs = !0;
  var ds = '' + Ea(),
    es = !1,
    fs = void 0;
  var gs = function () {
    if (ya(m.__uspapi)) {
      var a = '';
      try {
        m.__uspapi('getUSPData', 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp('^[\\da-zA-Z-]{1,20}$').test(d) && (a = d);
          }
        });
      } catch (b) {
        console.error('hack', b);
      }
      return a;
    }
  };
  var hs = function (a, b) {
      if (b.$a()) {
        var c = gs();
        c && (a.us_privacy = c);
        var d = sl();
        d && (a.gdpr = d);
        var e = ql();
        e && (a.gdpr_consent = e);
      }
    },
    js = function (a, b) {
      if (Wd() && ((a.gcs = fe()), b.Uc && (a.gcu = '1'), b.$a())) {
        Xd() && (a.gcd = 'G1' + be(Ud));
        var c = b.B(L.R);
        a.adr = void 0 !== c && !1 !== c ? '1' : '0';
        b.Uc && (a.gcut = is[b.ae || '']);
      }
    },
    ks = function (a, b, c) {
      void 0 === c && (c = {});
      if ('object' === typeof b) for (var d in b) ks(a + '.' + d, b[d], c);
      else c[a] = b;
      return c;
    },
    ls = function (a) {
      var b = 'https://www.google-analytics.com/g/collect',
        c = Hk(a.B(L.oa), '/g/collect');
      if (c) return c;
      var d = !0;
      (N(L.D) && N(L.H)) || (d = !1);
      var e = !1 !== a.B(L.Ea);
      e = !0;
      a.B(L.Vb) &&
        !a.B(L.Lc) &&
        e &&
        !1 !== a.B(L.Sb) &&
        Km() &&
        d &&
        (b = 'https://analytics.google.com/g/collect');
      return b;
    },
    ms = !1;
  var ns = {},
    is = ((ns[L.D] = '1'), (ns[L.H] = '2'), ns),
    os = {};
  os[L.zh] = 'tid';
  os[L.eb] = 'cid';
  os[L.ib] = 'ul';
  os[L.Rd] = '_fid';
  os[L.yf] = 'tt';
  os[L.Ud] = 'ir';
  var ps = {};
  ps[L.Eb] = 'sid';
  ps[L.Qc] = 'sct';
  ps[L.Oc] = 'seg';
  ps[L.Db] = 'dl';
  ps[L.Wa] = 'dr';
  ps[L.Xd] = 'dt';
  ps[L.da] = 'cu';
  ps[L.Fb] = 'uid';
  var qs = function (a, b, c) {
    function d(y, w) {
      if (void 0 !== w && -1 == L.Ah.indexOf(y)) {
        null === w && (w = '');
        var z;
        if ('_' === y.charAt(0)) {
          e[y] = Vc(w, 300);
        } else
          os[y]
            ? ((z = os[y]), (e[z] = Vc(w, 300)))
            : ps[y]
            ? ((z = ps[y]), (h[z] = Vc(w, 300)))
            : r(y, w) || q(y, w);
      }
    }
    var e = {},
      f = {},
      h = {};
    e.v = '2';
    e.tid = a.C;
    e.gtm = Nk();
    e._p = Fr();
    a.ke && (e.sr = a.ke);
    a.Of && (e._z = a.Of);
    c && (e.em = c);
    a.Gb && (e._gaz = 1);
    js(e, a);
    hs(e, a);
    a.Qf && (e.gtm_up = '1');
    if (ms) {
      var k = db(Cf(a.s, L.ma, 1), '.');
      k && (e.gdid = k);
    }
    f.en = Vc(a.K, 40);
    a.Ua && (f._fv = a.Pf ? 2 : 1);
    a.je && (f._nsi = 1);
    a.O && (f._ss = a.Rf ? 2 : 1);
    a.Wc && (f._c = 1);
    0 < a.Tc && (f._et = a.Tc);
    if (a.ee) {
      var l = a.B(L.X);
      if (Aa(l)) for (var n = 0; n < l.length && 200 > n; n++) f['pr' + (n + 1)] = $c(l[n]);
    }
    a.de && (f._eu = a.de);
    if (ms) {
      var p = db(Cf(a.s, L.ma, 2), '.');
      p && (f.edid = p);
    }
    for (
      var q = function (y, w) {
          y = Vc(y, 40);
          var z = 'ep.' + y,
            B = 'epn.' + y;
          y = za(w) ? B : z;
          var C = za(w) ? z : B;
          f.hasOwnProperty(C) && delete f[C];
          f[y] = Vc(w, 100);
        },
        r = function (y, w) {
          var z = y.split('.');
          if (y === L.ya && 'object' !== typeof w) return q(y, w), !0;
          if (z[0] === L.ya) {
            if ((1 < z.length || 'object' === typeof w) && a.$a()) {
              var B = ks(y, w);
              Na(B, function (C, D) {
                return void q(C, D);
              });
            }
            return !0;
          }
          return !1;
        },
        u = 0;
      u < L.Af.length;
      ++u
    ) {
      var t = L.Af[u];
      d(t, a.B(t));
    }
    a.ee && d(L.da, a.B(L.da));
    Na(a.Sh, d);
    Na(a.J, d);
    var v = a.B(L.Pa) || {};
    (!1 !== a.B(L.Ea) && Jm()) || (v._npa = '1');
    Na(v, function (y, w) {
      if (void 0 !== w && (null === w && (w = ''), b[y] !== w)) {
        if (y !== L.Fb || h.uid) {
          var z = (za(w) ? 'upn.' : 'up.') + Vc(y, 24);
          f[z] = Vc(w, 36);
        } else h.uid = Vc(w, 36);
        b[y] = w;
      }
    });
    var x = !1;
    return hd.call(this, { Ra: e, rb: h, J: f }, ls(a), a.$a(), x) || this;
  };
  pa(qs, hd);
  var rs = function (a, b) {
      return a.replace(/\$\{([^\}]+)\}/g, function (c, d) {
        return b[d] || c;
      });
    },
    ss = function (a) {
      var b = a.search;
      return a.protocol + '//' + a.hostname + a.pathname + (b ? b + '&richsstsse' : '?richsstsse');
    },
    ts = function (a) {
      var b = {},
        c = '',
        d = a.pathname.indexOf('/g/collect');
      0 <= d && (c = a.pathname.substring(0, d));
      b.transport_url = a.protocol + '//' + a.hostname + c;
      return b;
    },
    us = function (a, b) {
      var c = new m.XMLHttpRequest();
      c.withCredentials = !0;
      var d = b ? 'POST' : 'GET',
        e = '',
        f = 0,
        h = Ee(a),
        k = ts(h),
        l = ss(h);
      c.onprogress = function (n) {
        if (200 === c.status) {
          e += c.responseText.substring(f);
          f = n.loaded;
          for (var p = rs(e, k), q = p.indexOf('\n\n'); -1 !== q; ) {
            var r;
            a: {
              var u = ea(p.substring(0, q).split('\n')),
                t = u.next().value,
                v = u.next().value;
              if (t.startsWith('event: message') && v.startsWith('data: '))
                try {
                  r = JSON.parse(v.substring(v.indexOf(':') + 1));
                  break a;
                } catch (w) {
                  console.error('hack', w);
                }
              r = void 0;
            }
            if (r) {
              var x = r.send_pixel || [];
              if (Array.isArray(x)) for (var y = 0; y < x.length; y++) Kb(x[y]);
            }
            p = p.substring(q + 2);
            q = p.indexOf('\n\n');
          }
          e = p;
        }
      };
      c.open(d, l);
      c.send(b);
    };
  var ys = function (a, b, c, d) {
      var e = a + '?' + b;
      vs &&
        (d = !(
          0 === e.indexOf('https://www.google-analytics.com/g/collect') ||
          0 === e.indexOf('https://analytics.google.com/g/collect')
        ));
      ws && d && !ir ? us(e, c) : xs(a, b, c);
    },
    zs = function (a) {
      return a && 0 === a.indexOf('google.') && 'google.com' != a
        ? 'https://www.%/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&'.replace('%', a)
        : void 0;
    },
    ws = !1;
  ws = !0;
  var vs = !1;
  var As = function () {
    this.O = 1;
    this.F = {};
    this.o = new id();
    this.s = -1;
  };
  As.prototype.C = function (a, b) {
    var c = this,
      d;
    a.Mf && (this.F = {});
    try {
      d = new qs(a, this.F, b);
    } catch (l) {
      console.error('hack', l);
      a.abort();
    }
    var e = jr(a);
    (e && this.o.F(d)) || this.flush();
    if (e && this.o.add(d)) {
      if (0 > this.s) {
        var f = m.setTimeout,
          h;
        a.$a() ? (Bs ? ((Bs = !1), (h = Cs)) : (h = Ds)) : (h = 5e3);
        this.s = f.call(
          m,
          function () {
            return c.flush();
          },
          h
        );
      }
    } else {
      var k = kd(d, this.O++);
      ys(d.s, k.Ke, k.body, d.F);
      Es(d, a.be, a.Gb, String(a.B(L.Sd)));
    }
  };
  As.prototype.add = function (a) {
    console.warn('hack', 'add', a);
    a.fe ? this.aa(a) : this.C(a);
  };
  As.prototype.flush = function () {
    if (this.o.events.length) {
      var a = ld(this.o, this.O++);
      ys(this.o.o, a.Ke, a.body, this.o.s);
      this.o = new id();
      0 <= this.s && (m.clearTimeout(this.s), (this.s = -1));
    }
  };
  As.prototype.aa = function (a) {
    var b = this,
      c = a.gg();
    c
      ? pf(c, function (d) {
          b.C(a, d);
        })
      : this.C(a);
  };
  var Es = function (a, b, c, d) {
      function e(k) {
        f.push(k + '=' + encodeURIComponent('' + a.Ra[k]));
      }
      if (b || c) {
        var f = [];
        e('tid');
        e('cid');
        e('gtm');
        f.push('aip=1');
        a.rb.uid && f.push('uid=' + encodeURIComponent('' + a.rb.uid));
        b &&
          (xs('https://stats.g.doubleclick.net/g/collect', 'v=2&' + f.join('&')),
          qk('https://stats.g.doubleclick.net/g/collect?v=2&' + f.join('&')));
        if (c) {
          f.push('z=' + Ea());
          var h = zs(d);
          h && Kb(h + f.join('&'));
        }
      }
    },
    xs = function (a, b, c) {
      console.warn('hack', 'sendBeacon', a, b, c);
      var d = a + '?' + b;
      c ? Bb.sendBeacon && Bb.sendBeacon(d, c) : Rb(d);
    },
    Cs = Ok('', 500),
    Ds = Ok('', 5e3),
    Bs = !0;
  var Fs = window,
    Gs = document,
    Hs = function (a) {
      var b = Fs._gaUserPrefs;
      if ((b && b.ioo && b.ioo()) || (a && !0 === Fs['ga-disable-' + a])) return !0;
      try {
        var c = Fs.external;
        if (c && c._gaUserPrefs && 'oo' == c._gaUserPrefs) return !0;
      } catch (f) {
        console.error('hack', f);
      }
      for (var d = jg('AMP_TOKEN', String(Gs.cookie), !0), e = 0; e < d.length; e++)
        if ('$OPT_OUT' == d[e]) return !0;
      return Gs.getElementById('__gaOptOutExtension') ? !0 : !1;
    };
  var Is = {};
  var Js = function (a, b) {
    var c = L.D;
    N(c) ||
      ge(function () {
        b.Uc = !0;
        b.ae = c;
        a.Sf(b);
      }, c);
  };
  Is.Bh = '';
  var Ks = function (a, b) {
    this.Gb = a;
    this.O = b;
    this.Ua = new As();
    this.s = this.F = this.C = this.o = void 0;
    this.aa = !1;
    this.ab = { Bg: !1, Fg: !1, Xf: !1, Ve: null };
  };
  ba = Ks.prototype;
  ba.Ji = function (a, b, c) {
    var d = this;
    if (c.eventModel[L.ac]) {
      if ('_' === a.charAt(0)) return;
      a !== L.Da && a !== L.La && xr(a) && vd(58);
      Ls(c);
    }
    var e = new hr(this.Gb, a, b, c, this.O),
      f = [L.H],
      h = !1;
    h = e.$a();
    (e.B(L.Vb) || h) && f.push(L.D);
    he(function () {
      d.rg(e);
    }, f);
  };
  ba.rg = function (a) {
    this.s = a;
    try {
      Hs(a.C) && (vd(28), a.abort());
      var b = Is.Bh.replace(/\s+/g, '').split(',');
      0 <= Ba(b, a.K) && (vd(33), a.abort());
      var c = a.od();
      c && c.blacklisted && (vd(34), a.abort());
      var d = A.location.protocol;
      'http:' != d && 'https:' != d && (vd(29), a.abort());
      Bb && 'preview' == Bb.loadPurpose && (vd(30), a.abort());
      var e = Q.grl;
      e || ((e = bs()), (Q.grl = e));
      e() || (vd(35), a.abort());
      a.Tc = pr();
      var k = this.sg,
        l;
      b: {
        if (!a.B(L.Oa) || N(L.H) || 1 === a.aa) break b;
        a.Qf = !0;
      }
      a.K === L.Da ? (a.B(L.Oa) && Qh(['aw', 'dc']), Zr(a), (l = as(a))) : (l = {});
      k.call(this, l);
      a.K !== L.La && ur();
      a.K == L.Da && (a.B(L.Yb) || a.abort(), (a.K = L.zb));
      var n = this.o,
        p = this.C,
        q = this.F,
        r = Tr(a);
      r || (r = q);
      var u = Pa(a.B(L.Zb)),
        t;
      t = Pa(a.B(L.Pc));
      var v;
      a: {
        if (r) {
          var x = r.split('.');
          if (!(5 > x.length || 6 < x.length)) {
            v = {
              sessionId: x[0],
              Re: Number(x[1]),
              ud: !!Number(x[2]),
              Fe: Number(x[3]),
              nb: Number(x[4] || 0),
              uc: '1' === x[5],
            };
            break a;
          }
        }
        v = void 0;
      }
      v && v.nb && (a.nb = Math.max(0, v.nb - Math.max(0, a.F - v.Fe)));
      var y = !1;
      v || ((y = a.Ua = !0), (v = { sessionId: String(a.F), Re: 1, ud: !1, Fe: a.F, uc: !1 }));
      a.F > v.Fe + 60 * u && ((y = !0), (v.sessionId = String(a.F)), v.Re++, (v.ud = !1));
      if (y) (a.O = !0), (a.Tc = 0), rr(), (or = 0);
      else if (or + pr() > t || a.K == L.zb) v.ud = !0;
      a.Ia(L.Eb, v.sessionId);
      a.Ia(L.Qc, v.Re);
      a.Ia(L.Oc, v.ud ? 1 : 0);
      var w = a.B(L.eb),
        z = a.aa;
      w || ((w = Mr(a)), (z = 3));
      w || ((w = n), (z = 4));
      if (!w) {
        var B = N(L.H),
          C = Er();
        w = !C.from_cookie || B ? C.vid : void 0;
        z = 5;
      }
      w ? (w = '' + w) : ((a.Ua = a.je = !0), (w = Cg()), (z = 6));
      a.yg(w, z);
      a: {
      }
      var H = '',
        J = A.location;
      if (J) {
        var K = J.pathname || '';
        '/' != K.charAt(0) && (K = '/' + K);
        H = J.protocol + '//' + J.hostname + K + J.search;
      }
      a.Ia(L.Db, H);
      var M;
      a: {
        var G = Wf('gtm.gtagReferrer.' + a.C);
        M = G ? '' + G : A.referrer;
      }
      var P = M;
      P && a.Ia(L.Wa, P);
      a.Ia(L.Xd, A.title);
      a.Ia(L.ib, (Bb.language || '').toLowerCase());
      var aa = m.screen,
        ca = aa ? aa.width : 0,
        la = aa ? aa.height : 0;
      a.ke = ca + 'x' + la;
      var O = !1 !== a.B(L.Ea);
      O = !0;
      if (O && !1 !== a.B(L.Sb) && Km() && N(L.D)) {
        var V = a.B(L.Vb),
          ka = a.B(L.Lc);
        a.O && (a.be = !!V);
        V && !ka && 0 === a.nb && ((a.nb = 60), (a.Gb = !0));
      }
      Ms(a);
      a.ee = 0 <= L.Cf.indexOf(a.K);
      for (var xa = a.B(L.Vd) || [], Ja = 0; Ja < xa.length; Ja++) {
        var Ga = xa[Ja];
        if (Ga.rule_result) {
          a.Ia(L.yf, Ga.traffic_type);
          vr(3);
          break;
        }
      }
      if (a.B(L.oa)) {
        var Ka = Vr(a) || {},
          Dd = sh(Ka[L.Bb], !!Ka[L.P]) ? kh(!0)._fplc : void 0;
        a.J._fplc = Dd || (0 < ng('FPLC', void 0, void 0, L.H).length ? void 0 : '0');
      }
      if (void 0 === a.B(L.Ud)) {
        var kc = a.B(L.Nc),
          Ed,
          bd;
        a: {
          if (Yr) {
            var cd = Vr(a) || {};
            if (cd && cd[L.P])
              for (
                var Bc = Ce(Ee(a.B(L.Wa)), 'host', !0), dd = cd[L.P], Ib = 0;
                Ib < dd.length;
                Ib++
              )
                if (dd[Ib] instanceof RegExp) {
                  if (dd[Ib].test(Bc)) {
                    bd = !0;
                    break a;
                  }
                } else if (0 <= Bc.indexOf(dd[Ib])) {
                  bd = !0;
                  break a;
                }
          }
          bd = !1;
        }
        var Fd;
        if (!(Fd = bd))
          if (cs) Fd = !1;
          else {
            var cj = Ce(Ee(a.B(L.Wa)), 'host', !0),
              lc;
            var Gd = String(a.B(L.la));
            if ('none' !== Gd)
              if ('auto' !== Gd) lc = Gd;
              else {
                if (!es) {
                  for (var sg = String(a.B(L.fb)), oa = wg(), Z = 0; Z < oa.length; Z++)
                    if ('none' !== oa[Z]) {
                      var La = String(a.B(L.ca)) + '_ga_autodomain';
                      if (0 === zg(La, ds, { Sa: L.H, domain: oa[Z], path: sg })) {
                        zg(La, void 0, { Sa: L.H, domain: oa[Z], path: sg });
                        fs = oa[Z];
                        break;
                      }
                    }
                  es = !0;
                }
                lc = fs;
              }
            else lc = void 0;
            var Cc = lc;
            Fd = Cc ? 0 <= cj.indexOf(Cc) : !1;
          }
        if (!(Ed = Fd)) {
          var Jb;
          if ((Jb = kc))
            a: {
              for (var ib = kc.include_conditions || [], pb = 0; pb < ib.length; pb++)
                if (ib[pb].test(a.B(L.Wa))) {
                  Jb = !0;
                  break a;
                }
              Jb = !1;
            }
          Ed = Jb;
        }
        Ed && (a.Ia(L.Ud, 1), vr(4));
      }
      if (a.K == L.La) {
        var qb = a.B(L.Na);
        a.B(L.Va)(a.B(qb));
        a.abort();
      }
      if (a.J[L.ad]) delete a.J[L.ad];
      else {
        var jb = a.B(L.Ld);
        if (jb) {
          for (var S = jb.edit_rules || [], Dc = 0; Dc < S.length; Dc++)
            a: {
              var Ma = a,
                va = S[Dc];
              if (Cr(Ma, va)) {
                if (va.new_event_name) {
                  var Hd =
                    'string' === typeof va.new_event_name
                      ? String(va.new_event_name)
                      : zr(Ma.K, Ma.J, va.new_event_name);
                  if (xr(Hd)) break a;
                  Ma.K = String(Hd);
                }
                Ar(Ma.K, Ma.J, va);
                if (Dr) {
                  Ma.J[L.ad] = !0;
                  if (sn().enableDeferrableCommandAfterConfig) {
                    var Id = Ma.K,
                      Jd = Ma.J,
                      tg = Ma.C;
                    sn().insert('event', [Jd, Id], tg);
                  } else vn(Ma.K, Ma.J, Ma.C, !0);
                  vr(2);
                  Ma.abort();
                } else vr(2);
              }
            }
          for (var ed = jb.synthesis_rules || [], Kd = 0; Kd < ed.length; Kd++) {
            var Tb = a,
              Ub = ed[Kd];
            if (Cr(Tb, Ub)) {
              var Ec = Ub.new_event_name;
              if (!xr(Ec)) {
                var fd = Ub.merge_source_event_params ? I(Tb.J) : {};
                fd[L.ad] = !0;
                Ar(Ec, fd, Ub);
                if (sn().enableDeferrableCommandAfterConfig) {
                  var rb = Ec,
                    Ra = fd,
                    Ha = Tb.C;
                  sn().insert('event', [Ra, rb], Ha);
                } else vn(Ec, fd, Tb.C, !0);
                vr(1);
              }
            }
          }
        }
      }
      var Da = a.J[L.Yd];
      if (Aa(Da)) for (var ab = 0; ab < Da.length; ab++) vr(Da[ab]);
      var Ld = ua('GA4_EVENT');
      Ld && (a.de = Ld);
      var gd = this.sg,
        Md = this.o,
        eo = this.C,
        dj;
      var ej = Ur(a);
      ej ? (Sr(ej, a) || (vd(25), a.abort()), (dj = ej)) : (dj = void 0);
      var Ts = dj,
        ug;
      var Fc = a.J[L.eb];
      Md && Fc === Md
        ? (ug = Fc)
        : Fc
        ? ((Fc = '' + Fc), Pr(Fc, a) || (vd(31), a.abort()), Gr(Fc, N(L.H)), (ug = Fc))
        : (vd(32), a.abort(), (ug = ''));
      var Us = ug,
        Ge;
      a: {
        Ge = void 0;
      }
      gd.call(this, { clientId: Us, bg: Ge, xg: Ts });
      this.Wi();
      a.$a() && ('page_view' === a.K || a.Wc) && Js(this, a);
      rr();
      var fj = this.ab;
      this.Sf(a);
      a.s.onSuccess();
    } catch (Zs) {
      console.error('hack', Zs);
      a.s.onFailure();
    }
    delete sa.GA4_EVENT;
  };
  ba.Sf = function (a) {
    this.Ua.add(a);
  };
  ba.sg = function (a) {
    var b = a.clientId,
      c = a.bg,
      d = a.xg;
    b && d && ((this.o = b), (this.C = c), (this.F = d));
  };
  ba.flush = function () {
    this.Ua.flush();
  };
  ba.Wi = function () {
    var a = this;
    if (!this.aa) {
      var b = N(L.H);
      Yd([L.H], function () {
        var c = N(L.H);
        if (b ^ c && a.s && a.F && a.o) {
          var d = a.o;
          if (c) {
            var e = Mr(a.s);
            e
              ? ((a.o = e), (a.F = Tr(a.s)), a.s.o && (a.C = Lr(a.s)))
              : (Pr(a.o, a.s), Sr(a.F, a.s), Gr(a.o, !0), a.s.o && a.C && Jr(a.C, a.s));
            a: {
              var f = a.ab,
                h = a.O,
                k = d !== a.o;
            }
          } else (a.F = void 0), (a.o = void 0), (a.C = void 0);
          b = c;
        }
      });
      this.aa = !0;
    }
  };
  var Ms = function (a) {
    var b = function (c) {
      return !!c && c.conversion;
    };
    a.Wc = b(a.od());
    a.Ua && (a.Pf = b(a.od('first_visit')));
    a.O && (a.Rf = b(a.od('session_start')));
  };
  function Ls(a) {
    delete a.eventModel[L.ac];
    Ns(a.eventModel);
  }
  var Ns = function (a) {
    Na(a, function (c) {
      '_' === c.charAt(0) && delete a[c];
    });
    var b = a[L.Pa] || {};
    Na(b, function (c) {
      '_' === c.charAt(0) && delete b[c];
    });
  };
  var Os = function (a) {
      if ('prerender' == A.visibilityState) return !1;
      a();
      return !0;
    },
    Ps = function (a) {
      if (!Os(a)) {
        var b = !1,
          c = function () {
            !b && Os(a) && ((b = !0), Mb(A, 'visibilitychange', c), vd(55));
          };
        Lb(A, 'visibilitychange', c);
        vd(54);
      }
    };
  var Qs = function (a, b, c) {
      vn(b, c, a);
    },
    Rs = function (a, b, c) {
      vn(b, c, a, !0);
    },
    Vs = function (a, b) {
      var c = new Ks(a, b);
      Ps(function () {
        Ss(a, c);
      });
    };
  function Ss(a, b) {
    un(a, function (c, d, e, f) {
      b.Ji(d, e, f);
    }),
      (sr = function () {
        sn().flush();
        1e3 <= pr() && Bb.sendBeacon && Qs(a, L.ff, {});
        ir = !0;
        ir = !0;
        b.flush();
        tr = function () {
          ir = !1;
          ir = !1;
          tr = void 0;
        };
      });
  }
  var Y = { g: {} };
  (Y.g.ehl = ['google']),
    (function () {
      function a(l) {
        return l.target && l.target.location && l.target.location.href
          ? l.target.location.href
          : lp();
      }
      function b(l, n) {
        Lb(l, 'hashchange', function (p) {
          var q = a(p);
          n({ source: 'hashchange', state: null, url: np(q), ba: mp(q) });
        });
      }
      function c(l, n) {
        Lb(l, 'popstate', function (p) {
          var q = a(p);
          n({ source: 'popstate', state: p.state, url: np(q), ba: mp(q) });
        });
      }
      function d(l, n, p) {
        var q = n.history,
          r = q[l];
        if (ya(r))
          try {
            q[l] = function (u, t, v) {
              r.apply(q, [].slice.call(arguments, 0));
              p({ source: l, state: u, url: np(lp()), ba: mp(lp()) });
            };
          } catch (u) {
            console.error('hack', u);
          }
      }
      function e() {
        var l = { source: null, state: W('history').state || null, url: np(lp()), ba: mp(lp()) };
        return function (n, p) {
          var q = l,
            r = {};
          r[q.source] = !0;
          r[n.source] = !0;
          if (!r.popstate || !r.hashchange || q.ba != n.ba) {
            var u = {
              'event': 'gtm.historyChange-v2',
              'gtm.historyChangeSource': n.source,
              'gtm.oldUrlFragment': l.ba,
              'gtm.newUrlFragment': n.ba,
              'gtm.oldHistoryState': l.state,
              'gtm.newHistoryState': n.state,
              'gtm.oldUrl': l.url,
              'gtm.newUrl': n.url,
              'gtm.triggers': p.join(','),
            };
            l = n;
            pp(u);
          }
        };
      }
      function f(l, n) {
        var p = '' + n;
        if (h[p]) h[p].push(l);
        else {
          var q = [l];
          h[p] = q;
          var r = e(),
            u = -1;
          k.push(function (t) {
            0 <= u && ip(u);
            n
              ? (u = jp(function () {
                  r(t, q);
                  u = -1;
                }, n))
              : r(t, q);
          });
        }
      }
      var h = {},
        k = [];
      (function (l) {
        Y.__ehl = l;
        Y.__ehl.h = 'ehl';
        Y.__ehl.m = !0;
        Y.__ehl.priorityOverride = 0;
      })(function (l) {
        var n = W('self'),
          p = l.vtp_uniqueTriggerId || '0',
          q = l.vtp_groupEvents ? Number(l.vtp_groupEventsInterval) : 0;
        0 > q ? (q = 0) : isNaN(q) && (q = 1e3);
        if (up('ehl')) {
          var r = Jn('ehl', 'reg');
          r ? (r(p, q), F(l.vtp_gtmOnSuccess)) : F(l.vtp_gtmOnFailure);
        } else {
          var u = function (t) {
            for (var v = 0; v < k.length; v++) k[v](t);
          };
          b(n, u);
          c(n, u);
          d('pushState', n, u);
          d('replaceState', n, u);
          f(p, q);
          Hn('ehl', 'reg', f);
          vp('ehl');
          F(l.vtp_gtmOnSuccess);
        }
      });
    })();
  (Y.g.sdl = ['google']),
    (function () {
      function a() {
        return !!(
          Object.keys(l('horiz.pix')).length ||
          Object.keys(l('horiz.pct')).length ||
          Object.keys(l('vert.pix')).length ||
          Object.keys(l('vert.pct')).length
        );
      }
      function b(w) {
        for (var z = [], B = w.split(','), C = 0; C < B.length; C++) {
          var D = Number(B[C]);
          if (isNaN(D)) return [];
          p.test(B[C]) || z.push(D);
        }
        return z;
      }
      function c() {
        var w = 0,
          z = 0;
        return function () {
          var B = qe(),
            C = B.height;
          w = Math.max(v.scrollLeft + B.width, w);
          z = Math.max(v.scrollTop + C, z);
          return { di: w, ei: z };
        };
      }
      function d() {
        u = W('self');
        t = u.document;
        v = t.scrollingElement || (t.body && t.body.parentNode);
        y = c();
      }
      function e(w, z, B, C) {
        var D = l(z),
          E = {},
          H;
        for (H in D) {
          E.ub = H;
          if (D.hasOwnProperty(E.ub)) {
            var J = Number(E.ub);
            w < J ||
              (pp({
                'event': 'gtm.scrollDepth',
                'gtm.scrollThreshold': J,
                'gtm.scrollUnits': B.toLowerCase(),
                'gtm.scrollDirection': C,
                'gtm.triggers': D[E.ub].join(','),
              }),
              In(
                'sdl',
                z,
                (function (K) {
                  return function (M) {
                    delete M[K.ub];
                    return M;
                  };
                })(E),
                {}
              ));
          }
          E = { ub: E.ub };
        }
      }
      function f() {
        var w = y(),
          z = w.di,
          B = w.ei,
          C = (z / v.scrollWidth) * 100,
          D = (B / v.scrollHeight) * 100;
        e(z, 'horiz.pix', q.Yc, r.Ef);
        e(C, 'horiz.pct', q.Xc, r.Ef);
        e(B, 'vert.pix', q.Yc, r.Nf);
        e(D, 'vert.pct', q.Xc, r.Nf);
        Hn('sdl', 'pending', !1);
      }
      function h() {
        var w = 250,
          z = !1;
        t.scrollingElement && t.documentElement && u.addEventListener && ((w = 50), (z = !0));
        var B = 0,
          C = !1,
          D = function () {
            C
              ? (B = jp(D, w))
              : ((B = 0),
                f(),
                up('sdl') &&
                  !a() &&
                  (Mb(u, 'scroll', E), Mb(u, 'resize', E), Hn('sdl', 'init', !1)));
            C = !1;
          },
          E = function () {
            z && y();
            B ? (C = !0) : ((B = jp(D, w)), Hn('sdl', 'pending', !0));
          };
        return E;
      }
      function k(w, z, B) {
        if (z) {
          var C = b(String(w));
          In(
            'sdl',
            B,
            function (D) {
              for (var E = 0; E < C.length; E++) {
                var H = String(C[E]);
                D.hasOwnProperty(H) || (D[H] = []);
                D[H].push(z);
              }
              return D;
            },
            {}
          );
        }
      }
      function l(w) {
        return Jn('sdl', w, {});
      }
      function n(w) {
        F(w.vtp_gtmOnSuccess);
        var z = w.vtp_uniqueTriggerId,
          B = w.vtp_horizontalThresholdsPixels,
          C = w.vtp_horizontalThresholdsPercent,
          D = w.vtp_verticalThresholdUnits,
          E = w.vtp_verticalThresholdsPixels,
          H = w.vtp_verticalThresholdsPercent;
        switch (w.vtp_horizontalThresholdUnits) {
          case q.Yc:
            k(B, z, 'horiz.pix');
            break;
          case q.Xc:
            k(C, z, 'horiz.pct');
        }
        switch (D) {
          case q.Yc:
            k(E, z, 'vert.pix');
            break;
          case q.Xc:
            k(H, z, 'vert.pct');
        }
        up('sdl')
          ? Jn('sdl', 'pending') ||
            (x || (d(), (x = !0)),
            F(function () {
              return f();
            }))
          : (d(),
            (x = !0),
            v &&
              (vp('sdl'),
              Hn('sdl', 'pending', !0),
              F(function () {
                f();
                if (a()) {
                  var J = h();
                  Lb(u, 'scroll', J);
                  Lb(u, 'resize', J);
                } else Hn('sdl', 'init', !1);
              })));
      }
      var p = /^\s*$/,
        q = { Xc: 'PERCENT', Yc: 'PIXELS' },
        r = { Nf: 'vertical', Ef: 'horizontal' },
        u,
        t,
        v,
        x = !1,
        y;
      (function (w) {
        Y.__sdl = w;
        Y.__sdl.h = 'sdl';
        Y.__sdl.m = !0;
        Y.__sdl.priorityOverride = 0;
      })(function (w) {
        w.vtp_triggerStartOption
          ? n(w)
          : Wn(function () {
              n(w);
            });
      });
    })();
  (Y.g.c = ['google']),
    (function () {
      (function (a) {
        Y.__c = a;
        Y.__c.h = 'c';
        Y.__c.m = !0;
        Y.__c.priorityOverride = 0;
      })(function (a) {
        xp(a.vtp_value, 'c', a.vtp_gtmEventId);
        return a.vtp_value;
      });
    })();
  (Y.g.e = ['google']),
    (function () {
      (function (a) {
        Y.__e = a;
        Y.__e.h = 'e';
        Y.__e.m = !0;
        Y.__e.priorityOverride = 0;
      })(function (a) {
        var b = String(bg(a.vtp_gtmEventId, 'event'));
        a.vtp_gtmCachedValues && (b = String(a.vtp_gtmCachedValues.event));
        return b;
      });
    })();

  (Y.g.u = ['google']),
    (function () {
      var a = function (b) {
        return {
          toString: function () {
            return b;
          },
        };
      };
      (function (b) {
        Y.__u = b;
        Y.__u.h = 'u';
        Y.__u.m = !0;
        Y.__u.priorityOverride = 0;
      })(function (b) {
        var c;
        c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : op('gtm.url', 1)) || lp();
        var d = b[a('vtp_component')];
        if (!d || 'URL' == d) return np(String(c));
        var e = Ee(String(c)),
          f;
        if ('QUERY' === d)
          a: {
            var h = b[a('vtp_multiQueryKeys').toString()],
              k = b[a('vtp_queryKey').toString()] || '',
              l = b[a('vtp_ignoreEmptyQueryParam').toString()],
              n;
            h
              ? Aa(k)
                ? (n = k)
                : (n = String(k).replace(/\s+/g, '').split(','))
              : (n = [String(k)]);
            for (var p = 0; p < n.length; p++) {
              var q = Ce(e, 'QUERY', void 0, void 0, n[p]);
              if (void 0 != q && (!l || '' !== q)) {
                f = q;
                break a;
              }
            }
            f = void 0;
          }
        else
          f = Ce(
            e,
            d,
            'HOST' == d ? b[a('vtp_stripWww')] : void 0,
            'PATH' == d ? b[a('vtp_defaultPages')] : void 0,
            void 0
          );
        return f;
      });
    })();
  (Y.g.v = ['google']),
    (function () {
      (function (a) {
        Y.__v = a;
        Y.__v.h = 'v';
        Y.__v.m = !0;
        Y.__v.priorityOverride = 0;
      })(function (a) {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = op(b.replace(/\\\./g, '.'), a.vtp_dataLayerVersion || 1),
          d = void 0 !== c ? c : a.vtp_defaultValue;
        xp(d, 'v', a.vtp_gtmEventId);
        return d;
      });
    })();

  (Y.g.ytl = ['google']),
    (function () {
      function a() {
        var t = Math.round(1e9 * Math.random()) + '';
        return A.getElementById(t) ? a() : t;
      }
      function b(t, v) {
        if (!t) return !1;
        for (var x = 0; x < p.length; x++) if (0 <= t.indexOf('//' + p[x] + '/' + v)) return !0;
        return !1;
      }
      function c(t, v) {
        var x = t.getAttribute('src');
        if (b(x, 'embed/')) {
          if (0 < x.indexOf('enablejsapi=1')) return !0;
          if (v) {
            var y = t.setAttribute,
              w;
            var z = -1 !== x.indexOf('?') ? '&' : '?';
            if (-1 < x.indexOf('origin=')) w = x + z + 'enablejsapi=1';
            else {
              if (!r) {
                var B = W('document');
                r = B.location.protocol + '//' + B.location.hostname;
                B.location.port && (r += ':' + B.location.port);
              }
              w = x + z + 'enablejsapi=1&origin=' + encodeURIComponent(r);
            }
            y.call(t, 'src', w);
            return !0;
          }
        }
        return !1;
      }
      function d(t, v) {
        if (
          !t.getAttribute('data-gtm-yt-inspected-' + v.Te) &&
          (t.setAttribute('data-gtm-yt-inspected-' + v.Te, 'true'), c(t, v.eg))
        ) {
          t.id || (t.id = a());
          var x = W('YT'),
            y = x.get(t.id);
          y || (y = new x.Player(t.id));
          var w = f(y, v),
            z = {},
            B;
          for (B in w)
            (z.Qb = B),
              w.hasOwnProperty(z.Qb) &&
                y.addEventListener(
                  z.Qb,
                  (function (C) {
                    return function (D) {
                      return w[C.Qb](D.data);
                    };
                  })(z)
                ),
              (z = { Qb: z.Qb });
        }
      }
      function e(t) {
        F(function () {
          function v() {
            for (var y = x.getElementsByTagName('iframe'), w = y.length, z = 0; z < w; z++)
              d(y[z], t);
          }
          var x = W('document');
          v();
          Rn(v);
        });
      }
      function f(t, v) {
        var x, y;
        function w() {
          M = Sn(
            function () {
              return { url: G, title: P, ag: R, bi: t.getCurrentTime(), playbackRate: aa };
            },
            v.Te,
            t.getIframe()
          );
          R = 0;
          P = G = '';
          aa = 1;
          return z;
        }
        function z(V) {
          switch (V) {
            case q.PLAYING:
              R = Math.round(t.getDuration());
              G = t.getVideoUrl();
              if (t.getVideoData) {
                var ka = t.getVideoData();
                P = ka ? ka.title : '';
              }
              aa = t.getPlaybackRate();
              v.Wh ? pp(M.createEvent('start')) : M.me();
              T = l(v.Li, v.Ki, t.getDuration());
              return B(V);
            default:
              return z;
          }
        }
        function B() {
          ca = t.getCurrentTime();
          la = kp().getTime();
          M.Qi();
          K();
          return C;
        }
        function C(V) {
          var ka;
          switch (V) {
            case q.ENDED:
              return E(V);
            case q.PAUSED:
              ka = 'pause';
            case q.BUFFERING:
              var xa = t.getCurrentTime() - ca;
              ka =
                1 < Math.abs(((kp().getTime() - la) / 1e3) * aa - xa) ? 'seek' : ka || 'buffering';
              t.getCurrentTime() && (v.Vh ? pp(M.createEvent(ka)) : M.me());
              J();
              return D;
            case q.UNSTARTED:
              return w(V);
            default:
              return C;
          }
        }
        function D(V) {
          switch (V) {
            case q.ENDED:
              return E(V);
            case q.PLAYING:
              return B(V);
            case q.UNSTARTED:
              return w(V);
            default:
              return D;
          }
        }
        function E() {
          for (; y; ) {
            var V = x;
            ip(y);
            V();
          }
          v.Uh && pp(M.createEvent('complete', 1));
          return w(q.UNSTARTED);
        }
        function H() {}
        function J() {
          y && (ip(y), (y = 0), (x = H));
        }
        function K() {
          if (T.length && 0 !== aa) {
            var V = -1,
              ka;
            do {
              ka = T[0];
              if (ka.qb > t.getDuration()) return;
              V = (ka.qb - t.getCurrentTime()) / aa;
              if (0 > V && (T.shift(), 0 === T.length)) return;
            } while (0 > V);
            x = function () {
              y = 0;
              x = H;
              0 < T.length &&
                T[0].qb === ka.qb &&
                (T.shift(), pp(M.createEvent('progress', ka.og, ka.vg)));
              K();
            };
            y = jp(x, 1e3 * V);
          }
        }
        var M,
          T = [],
          R,
          G,
          P,
          aa,
          ca,
          la,
          O = w(q.UNSTARTED);
        y = 0;
        x = H;
        return {
          onStateChange: function (V) {
            O = O(V);
          },
          onPlaybackRateChange: function (V) {
            ca = t.getCurrentTime();
            la = kp().getTime();
            M.me();
            aa = V;
            J();
            K();
          },
        };
      }
      function h(t) {
        for (var v = t.split(','), x = v.length, y = [], w = 0; w < x; w++) {
          var z = parseInt(v[w], 10);
          isNaN(z) || 100 < z || 0 > z || y.push(z / 100);
        }
        y.sort(function (B, C) {
          return B - C;
        });
        return y;
      }
      function k(t) {
        for (var v = t.split(','), x = v.length, y = [], w = 0; w < x; w++) {
          var z = parseInt(v[w], 10);
          isNaN(z) || 0 > z || y.push(z);
        }
        y.sort(function (B, C) {
          return B - C;
        });
        return y;
      }
      function l(t, v, x) {
        var y = t.map(function (B) {
          return { qb: B, vg: B, og: void 0 };
        });
        if (!v.length) return y;
        var w = v.map(function (B) {
          return { qb: B * x, vg: void 0, og: B };
        });
        if (!y.length) return w;
        var z = y.concat(w);
        z.sort(function (B, C) {
          return B.qb - C.qb;
        });
        return z;
      }
      function n(t) {
        var v = !!t.vtp_captureStart,
          x = !!t.vtp_captureComplete,
          y = !!t.vtp_capturePause,
          w = h(t.vtp_progressThresholdsPercent + ''),
          z = k(t.vtp_progressThresholdsTimeInSeconds + ''),
          B = !!t.vtp_fixMissingApi;
        if (v || x || y || w.length || z.length) {
          var C = {
              Wh: v,
              Uh: x,
              Vh: y,
              Ki: w,
              Li: z,
              eg: B,
              Te: void 0 === t.vtp_uniqueTriggerId ? '' : t.vtp_uniqueTriggerId,
            },
            D = W('YT'),
            E = function () {
              e(C);
            };
          F(t.vtp_gtmOnSuccess);
          if (D) D.ready && D.ready(E);
          else {
            var H = W('onYouTubeIframeAPIReady');
            qp('onYouTubeIframeAPIReady', function () {
              H && H();
              E();
            });
            F(function () {
              for (
                var J = W('document'), K = J.getElementsByTagName('script'), M = K.length, T = 0;
                T < M;
                T++
              ) {
                var R = K[T].getAttribute('src');
                if (b(R, 'iframe_api') || b(R, 'player_api')) return;
              }
              for (var G = J.getElementsByTagName('iframe'), P = G.length, aa = 0; aa < P; aa++)
                if (!u && c(G[aa], C.eg)) {
                  U('https://www.youtube.com/iframe_api');
                  u = !0;
                  break;
                }
            });
          }
        } else F(t.vtp_gtmOnSuccess);
      }
      var p = ['www.youtube.com', 'www.youtube-nocookie.com'],
        q = { UNSTARTED: -1, ENDED: 0, PLAYING: 1, PAUSED: 2, BUFFERING: 3, CUED: 5 },
        r,
        u = !1;
      (function (t) {
        Y.__ytl = t;
        Y.__ytl.h = 'ytl';
        Y.__ytl.m = !0;
        Y.__ytl.priorityOverride = 0;
      })(function (t) {
        t.vtp_triggerStartOption
          ? n(t)
          : Oi(function () {
              n(t);
            });
      });
    })();

  (Y.g.aev = ['google']),
    (function () {
      function a(u, t, v) {
        var x = u || bg(t, 'gtm');
        if (x) return x[v];
      }
      function b(u, t, v, x, y) {
        y || (y = 'element');
        var w = t + '.' + v,
          z;
        if (p.hasOwnProperty(w)) z = p[w];
        else {
          var B = a(u, t, y);
          if (B && ((z = x(B)), (p[w] = z), q.push(w), 35 < q.length)) {
            var C = q.shift();
            delete p[C];
          }
        }
        return z;
      }
      function c(u, t, v, x) {
        var y = a(u, t, r[v]);
        return void 0 !== y ? y : x;
      }
      function d(u, t) {
        if (!u) return !1;
        var v = e(lp());
        Aa(t) ||
          (t = String(t || '')
            .replace(/\s+/g, '')
            .split(','));
        for (var x = [v], y = 0; y < t.length; y++) {
          var w = t[y];
          if (w.hasOwnProperty('is_regex'))
            if (w.is_regex)
              try {
                w = new RegExp(w.domain);
              } catch (B) {
                console.error('hack', B);
                continue;
              }
            else w = w.domain;
          if (w instanceof RegExp) {
            if (w.test(u)) return !1;
          } else {
            var z = w;
            if (0 != z.length) {
              if (0 <= e(u).indexOf(z)) return !1;
              x.push(e(z));
            }
          }
        }
        return !Xp(u, x);
      }
      function e(u) {
        n.test(u) || (u = 'http://' + u);
        return Ce(Ee(u), 'HOST', !0);
      }
      function f(u, t, v, x) {
        switch (u) {
          case 'SUBMIT_TEXT':
            return b(t, v, 'FORM.' + u, h, 'formSubmitElement') || x;
          case 'LENGTH':
            var y = b(t, v, 'FORM.' + u, k);
            return void 0 === y ? x : y;
          case 'INTERACTED_FIELD_ID':
            return l(t, v, 'id', x);
          case 'INTERACTED_FIELD_NAME':
            return l(t, v, 'name', x);
          case 'INTERACTED_FIELD_TYPE':
            return l(t, v, 'type', x);
          case 'INTERACTED_FIELD_POSITION':
            var w = a(t, v, 'interactedFormFieldPosition');
            return void 0 === w ? x : w;
          case 'INTERACT_SEQUENCE_NUMBER':
            var z = a(t, v, 'interactSequenceNumber');
            return void 0 === z ? x : z;
          default:
            return x;
        }
      }
      function h(u) {
        switch (u.tagName.toLowerCase()) {
          case 'input':
            return Nb(u, 'value');
          case 'button':
            return Ob(u);
          default:
            return null;
        }
      }
      function k(u) {
        if ('form' === u.tagName.toLowerCase() && u.elements) {
          for (var t = 0, v = 0; v < u.elements.length; v++) Mn(u.elements[v]) && t++;
          return t;
        }
      }
      function l(u, t, v, x) {
        var y = a(u, t, 'interactedFormField');
        return (y && Nb(y, v)) || x;
      }
      var n = /^https?:\/\//i,
        p = {},
        q = [],
        r = {
          ATTRIBUTE: 'elementAttribute',
          CLASSES: 'elementClasses',
          ELEMENT: 'element',
          ID: 'elementId',
          HISTORY_CHANGE_SOURCE: 'historyChangeSource',
          HISTORY_NEW_STATE: 'newHistoryState',
          HISTORY_NEW_URL_FRAGMENT: 'newUrlFragment',
          HISTORY_OLD_STATE: 'oldHistoryState',
          HISTORY_OLD_URL_FRAGMENT: 'oldUrlFragment',
          TARGET: 'elementTarget',
        };
      (function (u) {
        Y.__aev = u;
        Y.__aev.h = 'aev';
        Y.__aev.m = !0;
        Y.__aev.priorityOverride = 0;
      })(function (u) {
        var t = u.vtp_gtmEventId,
          v = u.vtp_defaultValue,
          x = u.vtp_varType,
          y;
        u.vtp_gtmCachedValues && (y = u.vtp_gtmCachedValues.gtm);
        switch (x) {
          case 'TAG_NAME':
            var w = a(y, t, 'element');
            return (w && w.tagName) || v;
          case 'TEXT':
            return b(y, t, x, Ob) || v;
          case 'URL':
            var z;
            a: {
              var B = String(a(y, t, 'elementUrl') || v || ''),
                C = Ee(B),
                D = String(u.vtp_component || 'URL');
              switch (D) {
                case 'URL':
                  z = B;
                  break a;
                case 'IS_OUTBOUND':
                  z = d(B, u.vtp_affiliatedDomains);
                  break a;
                default:
                  z = Ce(C, D, u.vtp_stripWww, u.vtp_defaultPages, u.vtp_queryKey);
              }
            }
            return z;
          case 'ATTRIBUTE':
            var E;
            if (void 0 === u.vtp_attribute) E = c(y, t, x, v);
            else {
              var H = u.vtp_attribute,
                J = a(y, t, 'element');
              E = (J && Nb(J, H)) || v || '';
            }
            return E;
          case 'MD':
            var K = u.vtp_mdValue,
              M = b(y, t, 'MD', ep);
            return K && M ? hp(M, K) || v : M || v;
          case 'FORM':
            return f(String(u.vtp_component || 'SUBMIT_TEXT'), y, t, v);
          default:
            var T = c(y, t, x, v);
            xp(T, 'aev', u.vtp_gtmEventId);
            return T;
        }
      });
    })();

  (Y.g.dlm = ['google']),
    (function () {
      (function (a) {
        Y.__dlm = a;
        Y.__dlm.h = 'dlm';
        Y.__dlm.m = !0;
        Y.__dlm.priorityOverride = 0;
      })(function (a) {
        var b = Yp(a.vtp_userInput || [], 'key', 'value') || {};
        a.vtp_synchronousWrite
          ? Na(b, function (c, d) {
              Zf(c, d);
            })
          : pp(b);
        F(a.vtp_gtmOnSuccess);
      });
    })();
  (Y.g.gct = ['google']),
    (function () {
      function a(d) {
        for (var e = [], f = 0; f < d.length; f++)
          try {
            e.push(new RegExp(d[f]));
          } catch (h) {
            console.error('hack', h);
          }
        return e;
      }
      function b(d) {
        return d.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
      }
      function c(d) {
        for (var e = [], f = 0; f < d.length; f++) {
          var h = d[f].matchValue,
            k;
          switch (d[f].matchType) {
            case 'BEGINS_WITH':
              k = '^' + b(h);
              break;
            case 'ENDS_WITH':
              k = b(h) + '$';
              break;
            case 'EQUALS':
              k = '^' + b(h) + '$';
              break;
            case 'REGEX':
              k = h;
              break;
            default:
              k = b(h);
          }
          e.push(k);
        }
        return e;
      }
      (function (d) {
        Y.__gct = d;
        Y.__gct.h = 'gct';
        Y.__gct.m = !0;
        Y.__gct.priorityOverride = 0;
      })(function (d) {
        var e = {};
        0 < d.vtp_sessionDuration && (e[L.Zb] = d.vtp_sessionDuration);
        e[L.Qd] = d.vtp_eventSettings;
        e[L.Ld] = d.vtp_dynamicEventSettings;
        e[L.Vb] = 1 === d.vtp_googleSignals;
        e[L.Sd] = d.vtp_foreignTld;
        e[L.Lc] = 1 === d.vtp_restrictDomain;
        e[L.Vd] = d.vtp_internalTrafficResults;
        var f = L.na,
          h = d.vtp_linker;
        h && h[L.P] && (h[L.P] = a(h[L.P]));
        e[f] = h;
        var k = L.Nc,
          l = d.vtp_referralExclusionDefinition;
        l && l.include_conditions && (l.include_conditions = a(l.include_conditions));
        e[k] = l;
        var n,
          p = d.vtp_trackingId;
        n = sn().getRemoteConfig(p);
        var q = n.referral_exclusion_conditions;
        q &&
          (q.length && 'object' === typeof q[0] && (q = c(q)),
          (e[L.Nc] = { include_conditions: a(q) }));
        var r = n.cross_domain_conditions;
        if (r) {
          r.length && 'object' === typeof r[0] && (r = c(r));
          var u = {};
          e[L.na] = ((u[L.P] = a(r)), (u[L.Cb] = !0), (u[L.Bb] = !0), (u[L.Wb] = 'query'), u);
        }
        Vs(d.vtp_trackingId, e);
        F(d.vtp_gtmOnSuccess);
      });
    })();

  (Y.g.get = ['google']),
    (function () {
      (function (a) {
        Y.__get = a;
        Y.__get.h = 'get';
        Y.__get.m = !0;
        Y.__get.priorityOverride = 0;
      })(function (a) {
        var b = a.vtp_settings;
        (a.vtp_deferrable
          ? Rs
          : Qs)(String(b.streamId), String(a.vtp_eventName), b.eventParameters || {});
        a.vtp_gtmOnSuccess();
      });
    })();

  (Y.g.lcl = []),
    (function () {
      function a() {
        var c = W('document'),
          d = 0,
          e = function (f) {
            var h = f.target;
            if (h && 3 !== f.which && !(f.si || (f.timeStamp && f.timeStamp === d))) {
              d = f.timeStamp;
              h = Qb(h, ['a', 'area'], 100);
              if (!h) return f.returnValue;
              var k = f.defaultPrevented || !1 === f.returnValue,
                l = Jn('lcl', k ? 'nv.mwt' : 'mwt', 0),
                n;
              n = k ? Jn('lcl', 'nv.ids', []) : Jn('lcl', 'ids', []);
              if (n.length) {
                var p = Fn(h, 'gtm.linkClick', n);
                if (b(f, h, c) && !k && l && h.href) {
                  var q = !!Ca(String(Sb(h, 'rel') || '').split(' '), function (t) {
                    return 'noreferrer' === t.toLowerCase();
                  });
                  q && vd(36);
                  var r = W((Sb(h, 'target') || '_self').substring(1)),
                    u = !0;
                  if (
                    pp(
                      p,
                      Po(function () {
                        var t;
                        if ((t = u && r)) {
                          var v;
                          a: if (q) {
                            var x;
                            try {
                              x = new MouseEvent(f.type, { bubbles: !0 });
                            } catch (y) {
                              console.error('hack', y);
                              if (!c.createEvent) {
                                v = !1;
                                break a;
                              }
                              x = c.createEvent('MouseEvents');
                              x.initEvent(f.type, !0, !0);
                            }
                            x.si = !0;
                            f.target.dispatchEvent(x);
                            v = !0;
                          } else v = !1;
                          t = !v;
                        }
                        t && (r.location.href = Sb(h, 'href'));
                      }),
                      l
                    )
                  )
                    u = !1;
                  else return f.preventDefault && f.preventDefault(), (f.returnValue = !1);
                } else pp(p, function () {}, l || 2e3);
                return !0;
              }
            }
          };
        Lb(c, 'click', e, !1);
        Lb(c, 'auxclick', e, !1);
      }
      function b(c, d, e) {
        if (2 === c.which || c.ctrlKey || c.shiftKey || c.altKey || c.metaKey) return !1;
        var f = Sb(d, 'href'),
          h = f.indexOf('#'),
          k = Sb(d, 'target');
        if ((k && '_self' !== k && '_parent' !== k && '_top' !== k) || 0 === h) return !1;
        if (0 < h) {
          var l = np(f),
            n = np(e.location);
          return l !== n;
        }
        return !0;
      }
      (function (c) {
        Y.__lcl = c;
        Y.__lcl.h = 'lcl';
        Y.__lcl.m = !0;
        Y.__lcl.priorityOverride = 0;
      })(function (c) {
        var d = void 0 === c.vtp_waitForTags ? !0 : c.vtp_waitForTags,
          e = void 0 === c.vtp_checkValidation ? !0 : c.vtp_checkValidation,
          f = Number(c.vtp_waitForTagsTimeout);
        if (!f || 0 >= f) f = 2e3;
        var h = c.vtp_uniqueTriggerId || '0';
        if (d) {
          var k = function (n) {
            return Math.max(f, n);
          };
          In('lcl', 'mwt', k, 0);
          e || In('lcl', 'nv.mwt', k, 0);
        }
        var l = function (n) {
          n.push(h);
          return n;
        };
        In('lcl', 'ids', l, []);
        e || In('lcl', 'nv.ids', l, []);
        up('lcl') || (a(), vp('lcl'));
        F(c.vtp_gtmOnSuccess);
      });
    })();

  var Ws = {};
  (Ws.macro = function (a) {
    if (Wo.he.hasOwnProperty(a)) return Wo.he[a];
  }),
    (Ws.onHtmlSuccess = Wo.Zf(!0)),
    (Ws.onHtmlFailure = Wo.Zf(!1));
  Ws.dataLayer = Xf;
  Ws.callback = function (a) {
    Of.hasOwnProperty(a) && ya(Of[a]) && Of[a]();
    delete Of[a];
  };
  Ws.bootstrap = 0;
  Ws._spx = !1;
  function Xs() {
    Q[Df.M] = Ws;
    Ya(Pf, Y.g);
    Lc = Lc || Wo;
    Mc = Uc;
  }
  function Ys() {
    var a = !1;
    a && Xi('INIT');
    Ad().s();
    Q = m.google_tag_manager = m.google_tag_manager || {};
    pl();
    th.enable_gbraid_cookie_write = !0;
    if (Q[Df.M]) {
      var b = Q.zones;
      b && b.unregisterChild(Df.M);
    } else {
      for (var c = data.resource || {}, d = c.macros || [], e = 0; e < d.length; e++) zc.push(d[e]);
      for (var f = c.tags || [], h = 0; h < f.length; h++) Hc.push(f[h]);
      for (var k = c.predicates || [], l = 0; l < k.length; l++) Gc.push(k[l]);
      for (var n = c.rules || [], p = 0; p < n.length; p++) {
        for (var q = n[p], r = {}, u = 0; u < q.length; u++)
          r[q[u][0]] = Array.prototype.slice.call(q[u], 1);
        Ac.push(r);
      }
      Jc = Y;
      Kc = ao;
      Xs();
      Vo();
      Ji = !1;
      Ki = 0;
      if (('interactive' == A.readyState && !A.createEventObject) || 'complete' == A.readyState)
        Mi();
      else {
        Lb(A, 'DOMContentLoaded', Mi);
        Lb(A, 'readystatechange', Mi);
        if (A.createEventObject && A.documentElement.doScroll) {
          var t = !0;
          try {
            t = !m.frameElement;
          } catch (z) {
            console.error('hack', z);
          }
          t && Ni();
        }
        Lb(m, 'load', Mi);
      }
      Tn = !1;
      'complete' === A.readyState ? Vn() : Lb(m, 'load', Vn);
      Xj && m.setInterval(Rj, 864e5);
      Mf = new Date().getTime();
      Ws.bootstrap = Mf;
      (Ws._spx = !0), To();
      if (a) {
        var w = Yi('INIT');
      }
    }
  }
  (function (a) {
    if (!m['__TAGGY_INSTALLED']) {
      var b = !1;
      if (A.referrer) {
        var c = Ee(A.referrer);
        b = 'cct.google' === Be(c, 'host');
      }
      if (!b) {
        var d = ng('googTaggyReferrer');
        b = d.length && d[0].length;
      }
      b && ((m['__TAGGY_INSTALLED'] = !0), Fb('https://cct.google/taggy/agent.js'));
    }
    var f = function () {
        var n = m['google.tagmanager.debugui2.queue'];
        n ||
          ((n = []),
          (m['google.tagmanager.debugui2.queue'] = n),
          Fb('https://www.googletagmanager.com/debug/bootstrap'));
        var p = {
          messageType: 'CONTAINER_STARTING',
          data: { scriptSource: Cb, containerProduct: 'GTM', debug: !1 },
        };
        p.data.resume = function () {
          a();
        };
        p.data.containerProduct = 'OGT';
        Df.Qg && (p.data.initialPublish = !0);
        n.push(p);
      },
      h = 'x' === Ce(m.location, 'query', !1, void 0, 'gtm_debug');
    if (!h && A.referrer) {
      var k = Ee(A.referrer);
      h = 'tagassistant.google.com' === Be(k, 'host');
    }
    if (!h) {
      var l = ng('__TAG_ASSISTANT');
      h = l.length && l[0].length;
    }
    m.__TAG_ASSISTANT_API && (h = !0);
    h && Cb ? f() : a();
  })(Ys);
})();
