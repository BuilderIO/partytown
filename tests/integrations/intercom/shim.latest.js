!(function (e) {
  var t = {};
  function n(o) {
    if (t[o]) return t[o].exports;
    var r = (t[o] = { i: o, l: !1, exports: {} });
    return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, o) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
    }),
    (n.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (
        (n.r(o),
        Object.defineProperty(o, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var r in e)
          n.d(
            o,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return o;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = 'https://js.intercomcdn.com/'),
    n((n.s = 933));
})({
  12: function (e, t, n) {
    'use strict';
    n.d(t, 'd', function () {
      return a;
    }),
      n.d(t, 'c', function () {
        return u;
      }),
      n.d(t, 'g', function () {
        return s;
      }),
      n.d(t, 'h', function () {
        return d;
      }),
      n.d(t, 'e', function () {
        return l;
      }),
      n.d(t, 'b', function () {
        return m;
      }),
      n.d(t, 'f', function () {
        return f;
      }),
      n.d(t, 'j', function () {
        return p;
      }),
      n.d(t, 'i', function () {
        return w;
      });
    var o = n(7),
      r = /iphone|ipad|ipod|android|blackberry|opera mini|iemobile/i,
      i = [
        '.intercom-lightweight-app-launcher',
        '.intercom-launcher-frame',
        '#intercom-container',
        '.intercom-messenger',
        '.intercom-notifications',
      ];
    function c(e) {
      try {
        if (!(e in window)) return !1;
        var t = window[e];
        return null !== t && (t.setItem('intercom-test', '0'), t.removeItem('intercom-test'), !0);
      } catch (e) {
        return !1;
      }
    }
    function a() {
      return c('localStorage');
    }
    function u() {
      return !!(window.FileReader && window.File && window.FileList && window.FormData);
    }
    function s() {
      var e = m().userAgent;
      return !!e && null !== e.match(r) && void 0 !== window.parent;
    }
    function d() {
      var e = m().vendor || '',
        t = m().userAgent || '';
      return 0 === e.indexOf('Apple') && /\sSafari\//.test(t);
    }
    function l(e) {
      void 0 === e && (e = window);
      var t = m(),
        n = 'Google Inc.' === t.vendor && !e.chrome;
      return '' === t.languages && (t.webdriver || n);
    }
    function m() {
      return navigator || {};
    }
    function f(e) {
      return void 0 === e && (e = m().userAgent), /iPad|iPhone|iPod/.test(e) && !window.MSStream;
    }
    function p() {
      return (
        !Object(o.a)() &&
        i.some(function (e) {
          var t = window.parent.document.querySelector(e);
          if (t) {
            var n = window.getComputedStyle(t);
            return null === n || 'none' === n.display;
          }
        })
      );
    }
    var w = function () {
      return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    };
    t.a = {
      hasXhr2Support: function () {
        return 'XMLHttpRequest' in window && 'withCredentials' in new XMLHttpRequest();
      },
      hasLocalStorageSupport: a,
      hasSessionStorageSupport: function () {
        return c('sessionStorage');
      },
      hasFileSupport: u,
      hasAudioSupport: function () {
        var e = document.createElement('audio');
        return !!e.canPlayType && !!e.canPlayType('audio/mpeg;').replace(/^no$/, '');
      },
      hasVisibilitySupport: function () {
        return (
          void 0 !== document.hidden ||
          void 0 !== document.mozHidden ||
          void 0 !== document.msHidden ||
          void 0 !== document.webkitHidden
        );
      },
      messengerIsVisible: function () {
        return (
          !!Object(o.a)() ||
          i.some(function (e) {
            var t = window.parent.document.querySelector(e);
            if (t) {
              var n = t.getBoundingClientRect();
              return n && n.width > 0 && n.height > 0;
            }
          })
        );
      },
      messengerHasDisplayNoneSet: p,
      isMobileBrowser: s,
      isIOSFirefox: function () {
        return !!m().userAgent.match('FxiOS');
      },
      isFirefox: function () {
        return !!m().userAgent.match('Firefox');
      },
      isSafari: d,
      isElectron: function () {
        var e = m().userAgent || '',
          t = (Object(o.a)() ? window : window.parent) || {},
          n = t.process && t.versions && t.versions.electron;
        return /\sElectron\//.test(e) || n;
      },
      isIE: function () {
        var e = m().userAgent || '';
        return e.indexOf('MSIE') > 0 || e.indexOf('Trident') > 0;
      },
      isEdge: function () {
        return (m().userAgent || '').indexOf('Edge') > 0;
      },
      isNativeMobile: function () {
        return m().isNativeMobile;
      },
      isChrome: function () {
        var e = window.chrome,
          t = m().vendor,
          n = m().userAgent.indexOf('OPR') > -1,
          o = m().userAgent.indexOf('Edge') > -1;
        return (
          !!m().userAgent.match('CriOS') ||
          (null != e && 'Google Inc.' === t && !1 === n && !1 === o)
        );
      },
      isIOS: f,
      isAndroid: function (e) {
        return void 0 === e && (e = m().userAgent), e && e.toLowerCase().indexOf('android') > -1;
      },
    };
  },
  187: function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return a;
    }),
      n.d(t, 'b', function () {
        return d;
      }),
      n.d(t, 'c', function () {
        return l;
      });
    var o = n(7);
    function r(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, o);
      }
      return n;
    }
    function i(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? r(Object(n), !0).forEach(function (t) {
              c(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : r(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function c(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var a = n(197),
      u = Object.assign;
    function s() {
      var e;
      if (!Object(o.a)()) {
        var t = window.parent || window;
        if (t)
          return (
            (null == t
              ? void 0
              : null === (e = t.intercomSettings) || void 0 === e
              ? void 0
              : e.api_base) ||
            (function (e) {
              var t = e.document.querySelector('meta[name=intercom-js-api-base]');
              return null == t ? void 0 : t.content;
            })(t)
          );
      }
    }
    function d() {
      var e = u({}, a),
        t = { api_base: s() };
      return t.api_base ? (console.log('Overriding config', t), i(i({}, e), t)) : e;
    }
    function l() {
      return !1;
    }
  },
  197: function (e, t) {
    e.exports = {
      source_map: 'hidden-source-map',
      api_base: 'https://api-iam.intercom.io',
      public_path: '/integrations/intercom/',
      sheets_proxy_path: 'https://intercom-sheets.com/sheets_proxy',
      sentry_proxy_path: 'https://www.intercom-reporting.com/sentry/index.html',
      install_mode_base: 'https://app.intercom.com',
      sentry_dsn: 'https://f305de69cac64a84a494556d5303dc2d@app.getsentry.com/24287',
      intersection_js: 'https://js.intercomcdn.com/intersection/assets/app.js',
      intersection_styles: 'https://js.intercomcdn.com/intersection/assets/styles.js',
      article_search_messenger_app_id: 27,
      mode: 'production',
      priv_sep_html_path: 'https://www.intercom-reporting.com',
    };
  },
  258: function (e, t, n) {
    'use strict';
    n.d(t, 'b', function () {
      return r;
    }),
      n.d(t, 'a', function () {
        return i;
      });
    var o = n(12),
      r = function (e, t, n) {
        void 0 === n && (n = 'en'),
          o.a.isFirefox() && (e.contentDocument.open(), e.contentDocument.close()),
          (function (e, t, n) {
            void 0 === n && (n = 'en'),
              (e.documentElement.innerHTML = t),
              e.documentElement.setAttribute('lang', n);
          })(e.contentDocument, t, n);
      },
      i = function (e) {
        var t = document.createElement('script');
        return (t.type = 'text/javascript'), (t.charset = 'utf-8'), (t.src = e), t;
      };
  },
  7: function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return o;
    });
    var o = function () {
      return window.INTERCOM_PRIVILEGE_SEPARATION;
    };
  },
  933: function (e, t, n) {
    e.exports = n(954);
  },
  954: function (e, t, n) {
    'use strict';
    n.r(t);
    var o = [
        'position: absolute !important;',
        'opacity: 0 !important;',
        'width: 1px !important;',
        'height: 1px !important;',
        'top: 0 !important;',
        'left: 0 !important;',
        'border: none !important;',
        'display: block !important;',
        'pointer-events: none !important;',
      ].join(' '),
      r = function (e) {
        var t = e.document.createElement('iframe');
        return t.setAttribute('style', o), t;
      },
      i = n(197),
      c = [],
      a = 0,
      u = function (e) {
        for (; 2 > c.length; ) c.push(s(e));
      },
      s = function (e) {
        return (function (e, t) {
          var n = r(e);
          (n.src = i.priv_sep_html_path + '/component.html'),
            (n.name = 'intercom-component-' + t),
            (n.loaded = !1);
          return (
            n.addEventListener('load', function e() {
              (n.loaded = !0), n.removeEventListener('load', e);
            }),
            e.document.body.appendChild(n),
            n
          );
        })(e, a++);
      },
      d = function (e, t, n, o) {
        !(function (e, t) {
          var n = c.shift();
          n || (n = s(e));
          var o = function e() {
            n.removeEventListener('load', e), t(n);
          };
          n.loaded ? setTimeout(o, 0) : n.addEventListener('load', o), u(e);
        })(e, function (e) {
          (e.dataset.name = t), (e.style.cssText = n), o(e);
        });
      },
      l = function (e, t, n, o) {
        var r = e.document.querySelector('iframe[data-name="' + t + '"]');
        r
          ? (function (e, t, n) {
              (e.style.cssText = t),
                setTimeout(function () {
                  return n(e);
                }, 0);
            })(r, n, o)
          : d(e, t, n, o);
      },
      m = function (e) {
        var t,
          n = !1,
          o =
            (function (e) {
              return e.Intercom && e.Intercom.q;
            })(e) || [],
          r = function (e) {
            if (((n = e[0]), -1 !== ['boot', 'update', 'shutdown', 'show', 'hide'].indexOf(n))) {
              var n,
                o = { type: 'intercom:api-call', payload: { args: Array.from(e) } };
              t.postMessage(o, '*');
            } else console.warn('Intercom – API call not supported with Privilege Separation:', e);
          },
          i = function (e) {
            'intercom:ready' === e.data.type &&
              ((n = !0),
              (t = e.source),
              (function () {
                for (; o.length; ) r(o.pop());
              })());
          };
        return (
          e.addEventListener('message', i),
          (e.Intercom = function () {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            n ? r(t) : o.push(t);
          }),
          function () {
            e.removeEventListener('message', i), delete e.Intercom, (n = !1);
          }
        );
      };
    function f(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, o);
      }
      return n;
    }
    function p(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? f(Object(n), !0).forEach(function (t) {
              w(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : f(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function w(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var v = function (e) {
        var t, n;
        return {
          location: null == e ? void 0 : e.location,
          referrer:
            null == e ? void 0 : null === (t = e.document) || void 0 === t ? void 0 : t.referrer,
          title: null == e ? void 0 : null === (n = e.document) || void 0 === n ? void 0 : n.title,
        };
      },
      h = function (e) {
        return { innerHeight: e.innerHeight, innerWidth: e.innerWidth };
      },
      b = function (e) {
        var t = {};
        return (
          Object.keys(e).forEach(function (n) {
            n.indexOf('intercom') > -1 && (t[n] = e[n]);
          }),
          t
        );
      };
    var g = function (e, t, n) {
        !(function (e) {
          if (null == e) throw new TypeError('Cannot destructure undefined');
        })(t),
          window.requestAnimationFrame(function (t) {
            e.postMessage({ type: 'intercom:callback', payload: t, callbackId: n }, '*');
          });
      },
      y = function (e) {
        return {
          rect:
            ((t = e.getBoundingClientRect()),
            {
              x: t.x,
              y: t.y,
              height: t.height,
              width: t.width,
              right: t.right,
              top: t.top + window.pageYOffset,
              left: t.left + window.pageXOffset,
            }),
          clippingRect: {
            x: 0,
            y: 0,
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
          },
        };
        var t;
      },
      O = function (e, t) {
        var n = e.selector,
          o = function () {
            var e = document.querySelector(n);
            e && t({ element: y(e) });
          };
        window.addEventListener('resize', o);
        var r = document.querySelector(n);
        return (
          r &&
            (function e(t, n) {
              var o = t.parentElement;
              o &&
                (o.addEventListener('scroll', n),
                o === window.document.body ? window.addEventListener('scroll', n) : e(o, n));
            })(r, o),
          o(),
          function () {
            var e = document.querySelector(n);
            window.removeEventListener('resize', o),
              (function e(t, n) {
                var o = t.parentElement;
                o &&
                  (o.removeEventListener('scroll', n),
                  o === window.document.body ? window.removeEventListener('scroll', n) : e(o, n));
              })(e, o);
          }
        );
      },
      S = {},
      j = function (e) {
        try {
          var t = null,
            n = window.document.querySelector(e);
          return (
            n &&
              (t = {
                offsetWidth: n.offsetWidth,
                offsetHeight: n.offsetHeight,
                clientRects: { length: n.getClientRects().length },
              }),
            t
          );
        } catch (e) {
          return null;
        }
      };
    function E(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var k = (function () {
        function e(e, t, n, o) {
          var r = this;
          E(this, 'selector', void 0),
            E(this, 'timeoutValue', void 0),
            E(this, 'callback', void 0),
            E(this, 'timeout', void 0),
            E(this, 'waitTimeout', void 0),
            E(this, 'document', void 0),
            E(this, 'observer', void 0),
            (this.selector = e),
            (this.timeoutValue = t),
            (this.callback = o),
            (this.observer = new MutationObserver(this._check.bind(this))),
            (this.document = window.document),
            (this.waitTimeout = window.setTimeout(function () {
              r._initObserver(), r._startTimer(), r._check();
            }, n || 0));
        }
        var t = e.prototype;
        return (
          (t._initObserver = function () {
            this.observer.observe(this.document.body, {
              attributes: !0,
              childList: !0,
              subtree: !0,
            });
          }),
          (t._nodeIsVisible = function (e) {
            if (e) return !!(e.offsetWidth || e.offsetHeight || e.getClientRects.length);
          }),
          (t._check = function () {
            var e = j(this.selector);
            this._nodeIsVisible(e) && (this.callback(!0), this.cancel());
          }),
          (t._startTimer = function () {
            var e = this;
            (this.timeoutValue || 0 === this.timeoutValue) &&
              (this.timeout = window.setTimeout(function () {
                e.callback(!1), e.cancel();
              }, this.timeoutValue));
          }),
          (t.cancel = function () {
            this.observer.disconnect(),
              this.timeout && clearTimeout(this.timeout),
              this.waitTimeout && clearTimeout(this.waitTimeout);
          }),
          e
        );
      })(),
      I = n(187),
      _ = [
        /^https:\/\/www\.intercom\.com\/legal\/terms-and-policies/,
        /demo.dev.dynatracelabs.com\/#monitors/,
      ],
      x = Object(I.c)() ? [].concat(_, [/intercom-privilege-separation-enabled/]) : [].concat(_),
      A = function (e) {
        return (
          !0 === e.INTERCOM_PRIVILEGE_SEPARATION ||
          x.some(function (t) {
            return t.test(e.location.href);
          })
        );
      },
      P = ['https://js.intercomcdn.com', 'https://www.intercom-reporting.com'],
      L = ['http://intercom-js.test'],
      M = ['intercom:get-dom-element'],
      T = function (e) {
        var t,
          n,
          o,
          r = e.source,
          i = e.data,
          c = e.origin,
          a = [].concat(P);
        if (
          (Object(I.c)() && (a = [].concat(L)), -1 !== a.indexOf(c)) &&
          (A(window) || -1 !== M.indexOf(i.type))
        )
          switch (i.type) {
            case 'intercom:ready':
              !(function (e) {
                var t = window.intercomSettings;
                if (t) {
                  var n = window.location.href,
                    o = document.cookie;
                  e.postMessage(
                    { type: 'intercom:boot', payload: { settings: t, url: n, cookie: o } },
                    '*'
                  );
                }
              })(r, i.payload),
                window.addEventListener(
                  'resize',
                  (function (e) {
                    return function () {
                      e.postMessage(
                        { type: 'intercom:window-resize', payload: { updates: h(window) } },
                        '*'
                      );
                    };
                  })(r)
                );
              break;
            case 'intercom:create-or-update-frame':
              !(function (e, t, n) {
                var o = t.name,
                  r = t.styles;
                l(window, o, r, function (t) {
                  e.postMessage(
                    { type: 'intercom:callback', payload: { frameName: t.name }, callbackId: n },
                    '*'
                  );
                });
              })(r, i.payload, i.callbackId);
              break;
            case 'intercom:destroy-frame':
              (t = i.payload),
                (n = t.name),
                (o = document.querySelector('iframe[data-name="' + n + '"]')) && o.remove();
              break;
            case 'intercom:write-cookie':
              !(function (e, t) {
                var n = t.cookie;
                window.document.cookie = n;
              })(0, i.payload, i.callbackId);
              break;
            case 'intercom:set-storage-item':
              !(function (e, t) {
                var n = t.type,
                  o = t.key,
                  r = t.value,
                  i = 'localStorage' === n ? window.localStorage : window.sessionStorage;
                try {
                  i.setItem(o, r);
                } catch (e) {}
              })(0, i.payload);
              break;
            case 'intercom:remove-storage-item':
              !(function (e, t) {
                var n = t.type,
                  o = t.key,
                  r = 'localStorage' === n ? window.localStorage : window.sessionStorage;
                try {
                  r.removeItem(o);
                } catch (e) {}
              })(0, i.payload);
              break;
            case 'intercom:get-storage':
              !(function (e, t, n) {
                e.postMessage(
                  {
                    type: 'intercom:callback',
                    payload: {
                      localStorage: b(window.localStorage),
                      sessionStorage: b(window.sessionStorage),
                    },
                    callbackId: n,
                  },
                  '*'
                );
              })(r, i.payload, i.callbackId);
              break;
            case 'intercom:request-animation-frame':
              g(r, i.payload, i.callbackId);
              break;
            case 'intercom:open-url':
              !(function (e, t) {
                var n = t.url;
                if (t.openNatively) window.open(n);
                else {
                  var o = window.open();
                  if (!o) return;
                  (o.opener = null), (o.location = n);
                }
              })(0, i.payload);
              break;
            case 'intercom:prepare-for-boot':
              !(function (e) {
                e.postMessage(
                  { type: 'intercom:ready-for-boot', payload: { cookie: window.document.cookie } },
                  '*'
                );
              })(r, i.payload);
              break;
            case 'intercom:add-event-listener':
              !(function (e, t) {
                var n = t.event,
                  o = t.listenerId,
                  r = t.payload,
                  i = (function (e, t) {
                    return function (n) {
                      e.postMessage({ type: 'intercom:event', payload: n, listenerId: t }, '*');
                    };
                  })(e, o);
                switch (n) {
                  case 'reference-element-change':
                    S[o] = { removeEventListener: O(r, i), source: e };
                }
              })(r, i);
              break;
            case 'intercom:remove-event-listener':
              !(function (e, t) {
                var n = t.listenerId,
                  o = S[n];
                o && (0, o.removeEventListener)();
              })(0, i);
              break;
            case 'intercom:get-dom-element':
              !(function (e, t, n) {
                var o = j(t.selector);
                e.postMessage({ type: 'intercom:callback', payload: o, callbackId: n }, '*');
              })(r, i.payload, i.callbackId);
              break;
            case 'intercom:delayed-node-visibility-check':
              !(function (e, t, n) {
                new k(t.selector, t.timeoutValue, t.wait, function (t) {
                  e.postMessage({ type: 'intercom:callback', payload: t, callbackId: n }, '*');
                });
              })(r, i.payload, i.callbackId);
          }
      },
      C = n(197),
      q = function (e) {
        e.addEventListener('message', T);
      },
      R = function () {
        var e = (function (e) {
          return p(p({}, v(e)), h(e));
        })(window);
        return 'window=' + encodeURIComponent(JSON.stringify(e)) + '&localStorage=';
      },
      D = function (e) {
        if (
          !(function (e) {
            return !!e.document.querySelector('iframe[name="intercom-messenger"]');
          })(e)
        ) {
          m(e);
          var t = r(e);
          (t.name = 'intercom-messenger'),
            (t.src = C.priv_sep_html_path + '/frame.html?' + R()),
            e.document.body.appendChild(t),
            q(e),
            u(e);
        }
      },
      H = ['turbo:visit', 'turbolinks:visit', 'page:before-change'],
      N = ['turbo:before-cache', 'turbolinks:before-cache'],
      V = ['turbo:load', 'turbolinks:load', 'page:change'];
    var F = n(258),
      z = n(197).public_path;
    var W = z + 'frame.de73e9af.js',
      B = z + 'vendor.0373bc32.js',
      G = z + 'frame-modern.123a8fdf.js',
      X = z + 'vendor-modern.913bfe6d.js',
      J = /bot|googlebot|crawler|spider|robot|crawling|facebookexternalhit/i,
      U = function () {
        return window.Intercom && window.Intercom.booted;
      },
      Y = function () {
        var e,
          t = !!(e = navigator.userAgent.match(/Chrom(?:e|ium)\/([0-9\.]+)/)) && e[1];
        return (
          !!t &&
          t.split('.').map(function (e) {
            return parseInt(e);
          })
        );
      },
      $ = function () {
        var e = document.querySelector('meta[name="referrer"]'),
          t = e ? '<meta name="referrer" content="' + e.content + '">' : '',
          n = document.createElement('iframe');
        (n.id = 'intercom-frame'),
          n.setAttribute(
            'style',
            'position: absolute !important; opacity: 0 !important; width: 1px !important; height: 1px !important; top: 0 !important; left: 0 !important; border: none !important; display: block !important; z-index: -1 !important; pointer-events: none;'
          ),
          n.setAttribute('aria-hidden', 'true'),
          n.setAttribute('tabIndex', '-1'),
          n.setAttribute('title', 'Intercom'),
          document.body.appendChild(n),
          Object(F.b)(
            n,
            '<!doctype html>\n    <html lang="en">\n      <head>\n        ' +
              t +
              '\n      </head>\n      <body>\n      </body>\n    </html>'
          );

        var o,
          r = !!(o = Y()) && o[0] >= 81,
          i = Object(F.a)(r ? G : W),
          c = Object(F.a)(r ? X : B);
        return (
          n.contentDocument.head.appendChild(i),
          n.contentDocument.head.appendChild(c),
          (window.__intercomAssignLocation = function (e) {
            window.location.assign(e);
          }),
          n
        );
      },
      K = function () {
        var e = document.getElementById('intercom-frame');
        e && e.parentNode && e.parentNode.removeChild(e), delete window.__intercomAssignLocation;
      },
      Q = function () {
        if (!window.Intercom) {
          var e = function e() {
            for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
            e.q.push(n);
          };
          (e.q = []), (window.Intercom = e);
        }
      },
      Z = function () {
        U() || (Q(), $(), (window.Intercom.booted = !0));
      };
    A(window)
      ? D(window)
      : ('attachEvent' in window && !window.addEventListener) ||
        (navigator &&
          navigator.userAgent &&
          /MSIE 9\.0/.test(navigator.userAgent) &&
          window.addEventListener &&
          !window.atob) ||
        ('onpropertychange' in document &&
          window.matchMedia &&
          /MSIE 10\.0/.test(navigator.userAgent)) ||
        (navigator && navigator.userAgent && J.test(navigator.userAgent)) ||
        window.isIntercomMessengerSheet ||
        U() ||
        (Z(),
        (function (e, t, n) {
          V.forEach(function (t) {
            document.addEventListener(t, e);
          }),
            N.forEach(function (e) {
              document.addEventListener(e, t);
            }),
            H.forEach(function (e) {
              document.addEventListener(e, n);
            });
        })(Z, K, function () {
          window.Intercom('shutdown', !1), delete window.Intercom, K(), Q();
        }),
        q(window));
  },
});
