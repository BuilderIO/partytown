/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ 2: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* global globalThis */ var root;
      try {
        (root = self),
          root.self !== root &&
            typeof root.self !== void 0 &&
            'undefined' != typeof window &&
            (root = window);
      } catch (err) {
        root = 'undefined' == typeof globalThis ? window : globalThis;
      }
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = root;

      /***/
    },

    /***/ 1: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var utilities_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
      null == utilities_root__WEBPACK_IMPORTED_MODULE_0__.default.Wistia &&
        (utilities_root__WEBPACK_IMPORTED_MODULE_0__.default.Wistia = {});
      var W = utilities_root__WEBPACK_IMPORTED_MODULE_0__.default.Wistia;
      null == W._initializers && (W._initializers = {}),
        null == W._destructors && (W._destructors = {}),
        null == W.mixin &&
          (W.mixin = function (klass, obj) {
            for (var k in obj) obj.hasOwnProperty(k) && (klass[k] = obj[k]);
          });
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        utilities_root__WEBPACK_IMPORTED_MODULE_0__.default.Wistia;

      /***/
    },

    /***/ 648: /***/ (module) => {
      /**
       * mux-embed
       * @version 2.4.5
       * @copyright 2018 Mux, Inc
       */ (function () {
        var define = !1;
        !(function (e, t) {
          true ? (module.exports = t()) : 0;
        })(this, function () {
          return (function (e) {
            function t(a) {
              if (i[a]) return i[a].exports;
              var r = (i[a] = { i: a, l: !1, exports: {} });
              return e[a].call(r.exports, r, r.exports, t), (r.l = !0), r.exports;
            }
            var i = {};
            return (
              (t.m = e),
              (t.c = i),
              (t.d = function (e, i, a) {
                t.o(e, i) ||
                  Object.defineProperty(e, i, { configurable: !1, enumerable: !0, get: a });
              }),
              (t.n = function (e) {
                var i =
                  e && e.__esModule
                    ? function () {
                        return e.default;
                      }
                    : function () {
                        return e;
                      };
                return t.d(i, 'a', i), i;
              }),
              (t.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
              }),
              (t.p = ''),
              t((t.s = 16))
            );
          })([
            function (e, t) {
              function i(e, t, i) {
                switch (i.length) {
                  case 0:
                    return e.call(t);
                  case 1:
                    return e.call(t, i[0]);
                  case 2:
                    return e.call(t, i[0], i[1]);
                  case 3:
                    return e.call(t, i[0], i[1], i[2]);
                }
                return e.apply(t, i);
              }
              function a(e, t) {
                for (var i = -1, a = Array(e); ++i < e; ) a[i] = t(i);
                return a;
              }
              function r(e, t) {
                var i = j(e) || h(e) ? a(e.length, String) : [],
                  r = i.length,
                  n = !!r;
                for (var o in e)
                  (!t && !k.call(e, o)) || (n && ('length' == o || l(o, r))) || i.push(o);
                return i;
              }
              function n(e, t, i) {
                var a = e[t];
                (k.call(e, t) && f(a, i) && (void 0 !== i || t in e)) || (e[t] = i);
              }
              function o(e) {
                if (!c(e)) return A(e);
                var t = [];
                for (var i in Object(e)) k.call(e, i) && 'constructor' != i && t.push(i);
                return t;
              }
              function s(e, t) {
                return (
                  (t = M(void 0 === t ? e.length - 1 : t, 0)),
                  function () {
                    for (var a = arguments, r = -1, n = M(a.length - t, 0), o = Array(n); ++r < n; )
                      o[r] = a[t + r];
                    r = -1;
                    for (var s = Array(t + 1); ++r < t; ) s[r] = a[r];
                    return (s[t] = o), i(e, this, s);
                  }
                );
              }
              function u(e, t, i, a) {
                i || (i = {});
                for (var r = -1, o = t.length; ++r < o; ) {
                  var s = t[r],
                    u = a ? a(i[s], e[s], s, i, e) : void 0;
                  n(i, s, void 0 === u ? e[s] : u);
                }
                return i;
              }
              function l(e, t) {
                return (
                  !!(t = null == t ? w : t) &&
                  ('number' == typeof e || T.test(e)) &&
                  -1 < e &&
                  0 == e % 1 &&
                  e < t
                );
              }
              function d(e, t, i) {
                if (!y(i)) return !1;
                var a = typeof t;
                return (
                  !('number' == a ? !(p(i) && l(t, i.length)) : !('string' == a && t in i)) &&
                  f(i[t], e)
                );
              }
              function c(e) {
                var t = e && e.constructor;
                return e === (('function' == typeof t && t.prototype) || O);
              }
              function f(e, t) {
                return e === t || (e !== e && t !== t);
              }
              function h(e) {
                return _(e) && k.call(e, 'callee') && (!D.call(e, 'callee') || P.call(e) == x);
              }
              function p(e) {
                return null != e && m(e.length) && !v(e);
              }
              function _(e) {
                return b(e) && p(e);
              }
              function v(e) {
                var t = y(e) ? P.call(e) : '';
                return t == S || t == E;
              }
              function m(e) {
                return 'number' == typeof e && -1 < e && 0 == e % 1 && e <= w;
              }
              function y(e) {
                var t = typeof e;
                return !!e && ('object' == t || 'function' == t);
              }
              function b(e) {
                return !!e && 'object' == typeof e;
              }
              function g(e) {
                return p(e) ? r(e) : o(e);
              }
              var w = 9007199254740991,
                x = '[object Arguments]',
                S = '[object Function]',
                E = '[object GeneratorFunction]',
                T = /^(?:0|[1-9]\d*)$/,
                O = Object.prototype,
                k = O.hasOwnProperty,
                P = O.toString,
                D = O.propertyIsEnumerable,
                A = (function (e, t) {
                  return function (i) {
                    return e(t(i));
                  };
                })(Object.keys, Object),
                M = Math.max,
                R = !D.call({ valueOf: 1 }, 'valueOf'),
                j = Array.isArray,
                L = (function (e) {
                  return s(function (t, i) {
                    var a = -1,
                      r = i.length,
                      n = 1 < r ? i[r - 1] : void 0,
                      o = 2 < r ? i[2] : void 0;
                    for (
                      n = 3 < e.length && 'function' == typeof n ? (r--, n) : void 0,
                        o && d(i[0], i[1], o) && ((n = 3 > r ? void 0 : n), (r = 1)),
                        t = Object(t);
                      ++a < r;

                    ) {
                      var s = i[a];
                      s && e(t, s, a, n);
                    }
                    return t;
                  });
                })(function (e, t) {
                  if (R || c(t) || p(t)) return void u(t, g(t), e);
                  for (var i in t) k.call(t, i) && n(e, i, t[i]);
                });
              e.exports = L;
            },
            function (e, t, i) {
              'use strict';
              function a(e, t, i) {
                (i = void 0 === i ? 1 : i), (e[t] = e[t] || 0), (e[t] += i);
              }
              Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = a);
            },
            function (e, t, i) {
              (function (t) {
                var i;
                (i =
                  'undefined' == typeof window
                    ? void 0 === t
                      ? 'undefined' == typeof self
                        ? {}
                        : self
                      : t
                    : window),
                  (e.exports = i);
              }.call(t, i(4)));
            },
            function (e, t, i) {
              'use strict';
              Object.defineProperty(t, '__esModule', { value: !0 });
              var a = i(18),
                r = (function (e) {
                  return e && e.__esModule ? e : { default: e };
                })(a),
                n = r.default.methodFactory;
              (r.default.methodFactory = function (e, t, i) {
                var a = n(e, t, i);
                return function () {
                  for (var e = ['[mux]'], t = 0; t < arguments.length; t++) e.push(arguments[t]);
                  a.apply(void 0, e);
                };
              }),
                r.default.setLevel(r.default.getLevel()),
                (t.default = r.default);
            },
            function (e, t) {
              var i;
              i = (function () {
                return this;
              })();
              try {
                i = i || Function('return this')() || (0, eval)('this');
              } catch (e) {
                'object' == typeof window && (i = window);
              }
              e.exports = i;
            },
            function (e, t, i) {
              'use strict';
              Object.defineProperty(t, '__esModule', { value: !0 });
              var a = function a() {
                  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (e) {
                    var t = 0 | (16 * Math.random());
                    return ('x' === e ? t : 8 | (3 & t)).toString(16);
                  });
                },
                r = function r() {
                  return ('000000' + ((Math.random() * Math.pow(36, 6)) << 0).toString(36)).slice(
                    -6
                  );
                };
              (t.generateUUID = a), (t.generateShortID = r);
            },
            function (e, t, i) {
              (function (t) {
                var a,
                  r = void 0 === t ? ('undefined' == typeof window ? {} : window) : t,
                  n = i(20);
                'undefined' == typeof document
                  ? (a = r['__GLOBAL_DOCUMENT_CACHE@4']) || (a = r['__GLOBAL_DOCUMENT_CACHE@4'] = n)
                  : (a = document),
                  (e.exports = a);
              }.call(t, i(4)));
            },
            function (e, t, i) {
              'use strict';
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.findMediaElement = t.getMuxPlayerId = void 0);
              var a = i(5),
                r = function r(e) {
                  return e && void 0 !== e.nodeName
                    ? (e.muxId || (e.muxId = e.id || (0, a.generateShortID)()), e.muxId)
                    : e;
                },
                n = function n(e) {
                  var t;
                  return (
                    e && void 0 !== e.nodeName
                      ? ((t = e), (e = r(t)))
                      : (t = document.querySelector(e)),
                    [t, e, t && t.nodeName ? t.nodeName.toLowerCase() : '']
                  );
                };
              (t.getMuxPlayerId = r), (t.findMediaElement = n);
            },
            function (e, t, i) {
              'use strict';
              function a() {
                return (
                  '1' ===
                  (n.default.doNotTrack ||
                    n.default.navigator.doNotTrack ||
                    n.default.navigator.msDoNotTrack)
                );
              }
              Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = a);
              var r = i(2),
                n = (function (e) {
                  return e && e.__esModule ? e : { default: e };
                })(r);
            },
            function (e, t, i) {
              'use strict';
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.extractHostnameAndDomain = void 0);
              var a = i(6),
                r = (function (e) {
                  return e && e.__esModule ? e : { default: e };
                })(a),
                n = function n(e) {
                  var t = r.default.createElement('a');
                  t.href = e;
                  var n,
                    i = t.hostname,
                    a = i.match(/[^\.]+\.[^\.]+$/);
                  return a && a.length && (n = a[0]), [i, n];
                };
              t.extractHostnameAndDomain = n;
            },
            function (e, t) {
              e.exports = function (e) {
                return (
                  e.webpackPolyfill ||
                    ((e.deprecate = function () {}),
                    (e.paths = []),
                    e.children || (e.children = []),
                    Object.defineProperty(e, 'loaded', {
                      enumerable: !0,
                      get: function get() {
                        return e.l;
                      },
                    }),
                    Object.defineProperty(e, 'id', {
                      enumerable: !0,
                      get: function get() {
                        return e.i;
                      },
                    }),
                    (e.webpackPolyfill = 1)),
                  e
                );
              };
            },
            function (e, t, i) {
              'use strict';
              function a(e) {
                (e = e || ''), (e = e.match(/[^\r\n]+/g) || []);
                for (var a, t = {}, i = 0; i < e.length; i++)
                  (a = e[i].split(/\s*:\s*(.+)/)), 3 === a.length && (t[a[0]] = a[1]);
                return t;
              }
              Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = a);
            },
            function (e, t, i) {
              'use strict';
              var a = i(40),
                r = i(41),
                n = i(14);
              e.exports = { formats: n, parse: r, stringify: a };
            },
            function (e, t, i) {
              'use strict';
              var a = Object.prototype.hasOwnProperty,
                r = (function () {
                  for (var e = [], t = 0; 256 > t; ++t)
                    e.push('%' + ((16 > t ? '0' : '') + t.toString(16)).toUpperCase());
                  return e;
                })(),
                n = function n(e) {
                  for (var t, i; e.length; )
                    if (((i = e.pop()), (t = i.obj[i.prop]), Array.isArray(t))) {
                      for (var a = [], r = 0; r < t.length; ++r) void 0 !== t[r] && a.push(t[r]);
                      i.obj[i.prop] = a;
                    }
                  return t;
                };
              (t.arrayToObject = function (e, t) {
                for (
                  var i = t && t.plainObjects ? Object.create(null) : {}, a = 0;
                  a < e.length;
                  ++a
                )
                  void 0 !== e[a] && (i[a] = e[a]);
                return i;
              }),
                (t.merge = function (e, i, r) {
                  if (!i) return e;
                  if ('object' != typeof i) {
                    if (Array.isArray(e)) e.push(i);
                    else {
                      if ('object' != typeof e) return [e, i];
                      (r.plainObjects || r.allowPrototypes || !a.call(Object.prototype, i)) &&
                        (e[i] = !0);
                    }
                    return e;
                  }
                  if ('object' != typeof e) return [e].concat(i);
                  var n = e;
                  return (
                    Array.isArray(e) && !Array.isArray(i) && (n = t.arrayToObject(e, r)),
                    Array.isArray(e) && Array.isArray(i)
                      ? (i.forEach(function (i, n) {
                          a.call(e, n)
                            ? e[n] && 'object' == typeof e[n]
                              ? (e[n] = t.merge(e[n], i, r))
                              : e.push(i)
                            : (e[n] = i);
                        }),
                        e)
                      : Object.keys(i).reduce(function (e, n) {
                          var o = i[n];
                          return (e[n] = a.call(e, n) ? t.merge(e[n], o, r) : o), e;
                        }, n)
                  );
                }),
                (t.assign = function (e, t) {
                  return Object.keys(t).reduce(function (e, i) {
                    return (e[i] = t[i]), e;
                  }, e);
                }),
                (t.decode = function (e) {
                  try {
                    return decodeURIComponent(e.replace(/\+/g, ' '));
                  } catch (t) {
                    return e;
                  }
                }),
                (t.encode = function (e) {
                  if (0 === e.length) return e;
                  for (
                    var n, t = 'string' == typeof e ? e : e + '', i = '', a = 0;
                    a < t.length;
                    ++a
                  )
                    (n = t.charCodeAt(a)),
                      45 === n ||
                      46 === n ||
                      95 === n ||
                      126 === n ||
                      (48 <= n && 57 >= n) ||
                      (65 <= n && 90 >= n) ||
                      (97 <= n && 122 >= n)
                        ? (i += t.charAt(a))
                        : 128 > n
                        ? (i += r[n])
                        : 2048 > n
                        ? (i += r[192 | (n >> 6)] + r[128 | (63 & n)])
                        : 55296 > n || 57344 <= n
                        ? (i += r[224 | (n >> 12)] + r[128 | (63 & (n >> 6))] + r[128 | (63 & n)])
                        : ((a += 1),
                          (n = 65536 + (((1023 & n) << 10) | (1023 & t.charCodeAt(a)))),
                          (i +=
                            r[240 | (n >> 18)] +
                            r[128 | (63 & (n >> 12))] +
                            r[128 | (63 & (n >> 6))] +
                            r[128 | (63 & n)]));
                  return i;
                }),
                (t.compact = function (e) {
                  for (var t = [{ obj: { o: e }, prop: 'o' }], i = [], a = 0; a < t.length; ++a)
                    for (
                      var r = t[a], o = r.obj[r.prop], s = Object.keys(o), u = 0;
                      u < s.length;
                      ++u
                    ) {
                      var l = s[u],
                        d = o[l];
                      'object' == typeof d &&
                        null !== d &&
                        -1 === i.indexOf(d) &&
                        (t.push({ obj: o, prop: l }), i.push(d));
                    }
                  return n(t);
                }),
                (t.isRegExp = function (e) {
                  return '[object RegExp]' === Object.prototype.toString.call(e);
                }),
                (t.isBuffer = function (e) {
                  return (
                    null !== e &&
                    void 0 !== e &&
                    !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
                  );
                });
            },
            function (e, t, i) {
              'use strict';
              var a = String.prototype.replace,
                r = /%20/g;
              e.exports = {
                default: 'RFC3986',
                formatters: {
                  RFC1738: function RFC1738(e) {
                    return a.call(e, r, '+');
                  },
                  RFC3986: function RFC3986(e) {
                    return e;
                  },
                },
                RFC1738: 'RFC1738',
                RFC3986: 'RFC3986',
              };
            },
            function (e, t, i) {
              'use strict';
              function a(e) {
                return e && e.__esModule ? e : { default: e };
              }
              function r(e) {
                var t = {};
                for (var i in e) e.hasOwnProperty(i) && (t[e[i]] = i);
                return t;
              }
              function n(e) {
                var t = {},
                  i = {};
                return (
                  Object.keys(e).forEach(function (a) {
                    var r = !1;
                    if (e.hasOwnProperty(a) && void 0 !== e[a]) {
                      var n = a.split('_'),
                        o = n[0],
                        u = c[o];
                      u ||
                        (s.default.info('Data key word `' + n[0] + '` not expected in ' + a),
                        (u = o + '_')),
                        n.splice(1).forEach(function (e) {
                          'url' === e && (r = !0),
                            h[e]
                              ? (u += h[e])
                              : (s.default.info('Data key word `' + e + '` not expected in ' + a),
                                (u += '_' + e + '_'));
                        }),
                        r ? (i[u] = e[a]) : (t[u] = e[a]);
                    }
                  }),
                  (0, l.default)(t, i)
                );
              }
              Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = n);
              var o = i(3),
                s = a(o),
                u = i(0),
                l = a(u),
                d = {
                  a: 'env',
                  b: 'beacon',
                  d: 'ad',
                  e: 'event',
                  f: 'experiment',
                  m: 'mux',
                  n: 'response',
                  p: 'player',
                  q: 'request',
                  r: 'retry',
                  s: 'session',
                  t: 'timestamp',
                  u: 'viewer',
                  v: 'video',
                  w: 'page',
                  x: 'view',
                  y: 'sub',
                },
                c = r(d),
                f = {
                  ad: 'ad',
                  ag: 'aggregate',
                  ap: 'api',
                  al: 'application',
                  ar: 'architecture',
                  as: 'asset',
                  au: 'autoplay',
                  av: 'average',
                  bi: 'bitrate',
                  br: 'break',
                  bw: 'browser',
                  by: 'bytes',
                  ca: 'cached',
                  cb: 'cancel',
                  cd: 'code',
                  cg: 'category',
                  cn: 'config',
                  co: 'count',
                  ce: 'counter',
                  cp: 'complete',
                  ct: 'content',
                  cu: 'current',
                  dg: 'downscaling',
                  dm: 'domain',
                  dn: 'cdn',
                  do: 'downscale',
                  du: 'duration',
                  dv: 'device',
                  ec: 'encoding',
                  en: 'end',
                  eg: 'engine',
                  em: 'embed',
                  er: 'error',
                  es: 'errorcode',
                  et: 'errortext',
                  ee: 'event',
                  ev: 'events',
                  ex: 'expires',
                  fi: 'first',
                  fm: 'family',
                  ft: 'format',
                  fq: 'frequency',
                  fr: 'frame',
                  fs: 'fullscreen',
                  he: 'headers',
                  ho: 'host',
                  hn: 'hostname',
                  ht: 'height',
                  id: 'id',
                  ii: 'init',
                  in: 'instance',
                  ip: 'ip',
                  is: 'is',
                  ke: 'key',
                  la: 'language',
                  lb: 'labeled',
                  le: 'level',
                  li: 'live',
                  ld: 'loaded',
                  lo: 'load',
                  ls: 'lists',
                  lt: 'latency',
                  ma: 'max',
                  md: 'media',
                  me: 'message',
                  mi: 'mime',
                  ml: 'midroll',
                  mm: 'min',
                  mn: 'manufacturer',
                  mx: 'mux',
                  nm: 'name',
                  no: 'number',
                  on: 'on',
                  os: 'os',
                  pa: 'paused',
                  pb: 'playback',
                  pd: 'producer',
                  pe: 'percentage',
                  pf: 'played',
                  ph: 'playhead',
                  pi: 'plugin',
                  pl: 'preroll',
                  po: 'poster',
                  pr: 'preload',
                  py: 'property',
                  ra: 'rate',
                  rd: 'requested',
                  re: 'rebuffer',
                  rf: 'rendition',
                  ro: 'ratio',
                  rp: 'response',
                  rq: 'request',
                  rs: 'requests',
                  sa: 'sample',
                  se: 'session',
                  sk: 'seek',
                  sm: 'stream',
                  so: 'source',
                  sq: 'sequence',
                  sr: 'series',
                  st: 'start',
                  su: 'startup',
                  sv: 'server',
                  sw: 'software',
                  ta: 'tag',
                  tc: 'tech',
                  te: 'text',
                  th: 'throughput',
                  ti: 'time',
                  tl: 'total',
                  to: 'to',
                  tt: 'title',
                  ty: 'type',
                  ug: 'upscaling',
                  up: 'upscale',
                  ur: 'url',
                  us: 'user',
                  va: 'variant',
                  vd: 'viewed',
                  vi: 'video',
                  ve: 'version',
                  vw: 'view',
                  vr: 'viewer',
                  wd: 'width',
                  wa: 'watch',
                  wt: 'waiting',
                },
                h = r(f);
            },
            function (e, t, i) {
              'use strict';
              e.exports = i(17).default;
            },
            function (e, t, i) {
              'use strict';
              function a(e) {
                return e && e.__esModule ? e : { default: e };
              }
              Object.defineProperty(t, '__esModule', { value: !0 });
              var r = (function () {
                  function e(e, t) {
                    var n,
                      i = [],
                      a = !0,
                      r = !1;
                    try {
                      for (
                        var o, s = e[Symbol.iterator]();
                        !(a = (o = s.next()).done) && (i.push(o.value), !t || i.length !== t);
                        a = !0
                      );
                    } catch (e) {
                      (r = !0), (n = e);
                    } finally {
                      try {
                        !a && s.return && s.return();
                      } finally {
                        if (r) throw n;
                      }
                    }
                    return i;
                  }
                  return function (t, i) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return e(t, i);
                    throw new TypeError('Invalid attempt to destructure non-iterable instance');
                  };
                })(),
                n = i(2),
                o = a(n),
                s = i(7),
                u = i(3),
                l = a(u),
                d = i(8),
                c = a(d),
                f = i(19),
                h = a(f),
                p = i(48),
                _ = a(p),
                v = i(49),
                m = a(v),
                y = {},
                b = function e(t) {
                  var i = arguments;
                  'string' == typeof t
                    ? e.hasOwnProperty(t)
                      ? o.default.setTimeout(function () {
                          (i = Array.prototype.splice.call(i, 1)), e[t].apply(null, i);
                        }, 0)
                      : l.default.warn('`' + t + '` is an unknown task')
                    : 'function' == typeof t
                    ? o.default.setTimeout(function () {
                        t(e);
                      }, 0)
                    : l.default.warn('`' + t + '` is invalid.');
                };
              (b.loaded = Date.now()),
                (b.VERSION = '2.4.5'),
                (b.API_VERSION = '2.0'),
                (b.PLAYER_TRACKED = !1),
                (b.monitor = function (e, t) {
                  return (0, _.default)(b, e, t);
                }),
                (b.destroyMonitor = function (e) {
                  var t = (0, s.findMediaElement)(e),
                    i = r(t, 1),
                    a = i[0];
                  a && a.mux && 'function' == typeof a.mux.destroy
                    ? a.mux.destroy()
                    : l.default.error(
                        'A video element monitor for `' +
                          e +
                          '` has not been initialized via `mux.monitor`.'
                      );
                }),
                (b.addHLSJS = function (e, t) {
                  var i = (0, s.getMuxPlayerId)(e);
                  y[i]
                    ? y[i].addHLSJS(t)
                    : l.default.error('A monitor for `' + i + '` has not been initialized.');
                }),
                (b.addDashJS = function (e, t) {
                  var i = (0, s.getMuxPlayerId)(e);
                  y[i]
                    ? y[i].addDashJS(t)
                    : l.default.error('A monitor for `' + i + '` has not been initialized.');
                }),
                (b.removeHLSJS = function (e) {
                  var t = (0, s.getMuxPlayerId)(e);
                  y[t]
                    ? y[t].removeHLSJS()
                    : l.default.error('A monitor for `' + t + '` has not been initialized.');
                }),
                (b.removeDashJS = function (e, t) {
                  var i = (0, s.getMuxPlayerId)(e);
                  y[i]
                    ? y[i].removeDashJS(t)
                    : l.default.error('A monitor for `' + i + '` has not been initialized.');
                }),
                (b.init = function (e, t) {
                  var i = (0, s.getMuxPlayerId)(e);
                  y[i] = new h.default(b, i, t);
                }),
                (b.emit = function (e, t, i) {
                  var a = (0, s.getMuxPlayerId)(e);
                  y[a]
                    ? (y[a].emit(t, i), 'destroy' === t && delete y[a])
                    : l.default.error('A monitor for `' + a + '` has not been initialized.');
                }),
                (0, c.default)() &&
                  l.default.info(
                    "The browser's Do Not Track flag is enabled - Mux beaconing is disabled."
                  ),
                o.default.addEventListener(
                  'unload',
                  function () {
                    b.WINDOW_UNLOADING = !0;
                  },
                  !1
                ),
                (b.checkDoNotTrack = c.default),
                (b.log = l.default),
                (b.utils = m.default),
                (t.default = b);
            },
            function (e, t, i) {
              var a, r;
              !(function (n, o) {
                'use strict';
                (a = o),
                  void 0 !== (r = 'function' == typeof a ? a.call(t, i, t, e) : a) &&
                    (e.exports = r);
              })(0, function () {
                'use strict';
                function e(e, t) {
                  var i = e[t];
                  if ('function' == typeof i.bind) return i.bind(e);
                  try {
                    return Function.prototype.bind.call(i, e);
                  } catch (t) {
                    return function () {
                      return Function.prototype.apply.apply(i, [e, arguments]);
                    };
                  }
                }
                function t(t) {
                  return (
                    'debug' === t && (t = 'log'),
                    typeof console !== s &&
                      (void 0 === console[t]
                        ? void 0 === console.log
                          ? o
                          : e(console, 'log')
                        : e(console, t))
                  );
                }
                function i(e, t) {
                  for (var a, i = 0; i < u.length; i++)
                    (a = u[i]), (this[a] = i < e ? o : this.methodFactory(a, e, t));
                  this.log = this.debug;
                }
                function a(e, t, a) {
                  return function () {
                    typeof console !== s && (i.call(this, t, a), this[e].apply(this, arguments));
                  };
                }
                function r(e, i, r) {
                  return t(e) || a.apply(this, arguments);
                }
                function n(e, t, a) {
                  function n(e) {
                    var t = (u[e] || 'silent').toUpperCase();
                    if (typeof window !== s) {
                      try {
                        return void (window.localStorage[c] = t);
                      } catch (e) {}
                      try {
                        window.document.cookie = encodeURIComponent(c) + '=' + t + ';';
                      } catch (e) {}
                    }
                  }
                  function o() {
                    var e;
                    if (typeof window !== s) {
                      try {
                        e = window.localStorage[c];
                      } catch (e) {}
                      if (typeof e === s)
                        try {
                          var t = window.document.cookie,
                            i = t.indexOf(encodeURIComponent(c) + '=');
                          i && (e = /^([^;]+)/.exec(t.slice(i))[1]);
                        } catch (e) {}
                      return void 0 === d.levels[e] && (e = void 0), e;
                    }
                  }
                  var l,
                    d = this,
                    c = 'loglevel';
                  e && (c += ':' + e),
                    (d.levels = { TRACE: 0, DEBUG: 1, INFO: 2, WARN: 3, ERROR: 4, SILENT: 5 }),
                    (d.methodFactory = a || r),
                    (d.getLevel = function () {
                      return l;
                    }),
                    (d.setLevel = function (t, a) {
                      if (
                        ('string' == typeof t &&
                          void 0 !== d.levels[t.toUpperCase()] &&
                          (t = d.levels[t.toUpperCase()]),
                        !('number' == typeof t && 0 <= t && t <= d.levels.SILENT))
                      )
                        throw 'log.setLevel() called with invalid level: ' + t;
                      return ((l = t),
                      !1 !== a && n(t),
                      i.call(d, t, e),
                      typeof console === s && t < d.levels.SILENT)
                        ? 'No console available for logging'
                        : void 0;
                    }),
                    (d.setDefaultLevel = function (e) {
                      o() || d.setLevel(e, !1);
                    }),
                    (d.enableAll = function (e) {
                      d.setLevel(d.levels.TRACE, e);
                    }),
                    (d.disableAll = function (e) {
                      d.setLevel(d.levels.SILENT, e);
                    });
                  var f = o();
                  null == f && (f = null == t ? 'WARN' : t), d.setLevel(f, !1);
                }
                var o = function o() {},
                  s = 'undefined',
                  u = ['trace', 'debug', 'info', 'warn', 'error'],
                  l = new n(),
                  d = {};
                l.getLogger = function (e) {
                  if ('string' != typeof e || '' === e)
                    throw new TypeError('You must supply a name when creating a logger.');
                  var t = d[e];
                  return t || (t = d[e] = new n(e, l.getLevel(), l.methodFactory)), t;
                };
                var c = 'undefined' == typeof window ? void 0 : window.log;
                return (
                  (l.noConflict = function () {
                    return 'undefined' != typeof window && window.log === l && (window.log = c), l;
                  }),
                  l
                );
              });
            },
            function (e, t, i) {
              'use strict';
              function a(e) {
                return e && e.__esModule ? e : { default: e };
              }
              Object.defineProperty(t, '__esModule', { value: !0 });
              var r = (function () {
                  function e(e, t) {
                    var n,
                      i = [],
                      a = !0,
                      r = !1;
                    try {
                      for (
                        var o, s = e[Symbol.iterator]();
                        !(a = (o = s.next()).done) && (i.push(o.value), !t || i.length !== t);
                        a = !0
                      );
                    } catch (e) {
                      (r = !0), (n = e);
                    } finally {
                      try {
                        !a && s.return && s.return();
                      } finally {
                        if (r) throw n;
                      }
                    }
                    return i;
                  }
                  return function (t, i) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return e(t, i);
                    throw new TypeError('Invalid attempt to destructure non-iterable instance');
                  };
                })(),
                n = i(3),
                o = a(n),
                s = i(0),
                u = a(s),
                l = i(5),
                d = i(9),
                c = i(2),
                f = a(c),
                h = i(1),
                p = a(h),
                _ = i(21),
                v = a(_),
                m = i(23),
                y = i(24),
                b = i(25),
                g = a(b),
                w = i(26),
                x = a(w),
                S = i(27),
                E = a(S),
                T = i(28),
                O = a(T),
                k = i(29),
                P = a(k),
                D = i(30),
                A = a(D),
                M = i(31),
                R = a(M),
                j = i(32),
                L = a(j),
                I = i(33),
                q = a(I),
                C = i(34),
                N = a(C),
                B = i(35),
                F = a(B),
                H = i(36),
                G = a(H),
                U = i(37),
                W = a(U),
                V = i(38),
                J = a(V),
                $ = i(47),
                Q = a($),
                z = [
                  'viewstart',
                  'ended',
                  'loadstart',
                  'pause',
                  'play',
                  'playing',
                  'ratechange',
                  'waiting',
                  'adplay',
                  'adpause',
                  'adended',
                  'aderror',
                  'adplaying',
                  'adrequest',
                  'adresponse',
                  'adbreakstart',
                  'adbreakend',
                  'rebufferstart',
                  'rebufferend',
                  'seeked',
                  'error',
                  'hb',
                  'requestcompleted',
                  'requestfailed',
                  'requestcanceled',
                ],
                X = function X(e, t, i) {
                  var a = this;
                  (this.DOM_CONTENT_LOADED_EVENT_END =
                    f.default.performance && f.default.performance.timing.domContentLoadedEventEnd),
                    (this.NAVIGATION_START =
                      f.default.performance && f.default.performance.timing.navigationStart);
                  var r = {
                    debug: !1,
                    minimumRebufferDuration: 250,
                    sustainedRebufferThreshold: 1e3,
                    playbackHeartbeatTime: 25,
                    sampleRate: 1,
                    beaconDomain: 'litix.io',
                  };
                  (this.mux = e),
                    (this.id = t),
                    (i = (0, u.default)(r, i)),
                    (i.data = i.data || {}),
                    i.data.property_key &&
                      ((i.data.env_key = i.data.property_key), delete i.data.property_key),
                    o.default.setLevel(i.debug ? 'debug' : 'warn'),
                    (this.getPlayheadTime = i.getPlayheadTime),
                    (this.getStateData = i.getStateData || function () {}),
                    (this.getAdData = i.getAdData || function () {}),
                    (this.minimumRebufferDuration = i.minimumRebufferDuration),
                    (this.sustainedRebufferThreshold = i.sustainedRebufferThreshold),
                    (this.playbackHeartbeatTime = i.playbackHeartbeatTime),
                    (this.playbackEventDispatcher = new J.default(
                      e,
                      i.data.env_key,
                      i.beaconDomain,
                      i.sampleRate,
                      i.disableCookies
                    )),
                    (this.data = {
                      player_instance_id: (0, l.generateShortID)(),
                      mux_sample_rate: i.sampleRate,
                      beacon_domain: i.beaconDomain,
                    }),
                    (this.data.view_sequence_number = 1),
                    (this.data.player_sequence_number = 1),
                    (this.oldEmit = this.emit),
                    (this.emit = function (e, t) {
                      (t = (0, u.default)({ viewer_time: Date.now() }, t)), this.oldEmit(e, t);
                    }),
                    this.on('viewinit', function (e, t) {
                      this._resetVideoData(),
                        this._resetViewData(),
                        this._resetErrorData(),
                        this._updateStateData(),
                        (0, u.default)(this.data, t),
                        this._initializeViewData();
                      var i = function () {
                        void 0 === this.data.view_start &&
                          ((this.data.view_start = Date.now()), this.emit('viewstart'));
                      }.bind(this);
                      this.one('play', i), this.one('adbreakstart', i);
                    }),
                    this.on('videochange', function (e, t) {
                      this.emit('viewend'), this.send('viewend'), this.emit('viewinit', t);
                    }),
                    this.on('destroy', this.destroy);
                  var n = this.destroy.bind(this);
                  f.default.addEventListener('unload', n, !1),
                    this.on('destroy', function () {
                      f.default.removeEventListener('unload', n);
                    }),
                    this.on('playerready', function (e, t) {
                      (0, u.default)(this.data, t);
                    }),
                    z.forEach(function (e) {
                      a.on(e, function (t, i) {
                        0 !== e.indexOf('ad') && this._updateStateData(),
                          (0, u.default)(this.data, i),
                          this._sanitizeData();
                      }),
                        a.on('after' + e, function () {
                          this.send(e);
                        });
                    }),
                    this.on('viewend', function (e, t) {
                      (0, u.default)(a.data, t);
                    });
                  var s = function s(e) {
                    var t = Date.now();
                    this.data.player_init_time &&
                      (this.data.player_startup_time = t - this.data.player_init_time),
                      !this.mux.PLAYER_TRACKED &&
                        this.NAVIGATION_START &&
                        ((this.mux.PLAYER_TRACKED = !0),
                        (this.data.player_init_time || this.DOM_CONTENT_LOADED_EVENT_END) &&
                          (this.data.page_load_time =
                            Math.min(
                              this.data.player_init_time || 1 / 0,
                              this.DOM_CONTENT_LOADED_EVENT_END || 1 / 0
                            ) - this.NAVIGATION_START)),
                      this.send('playerready'),
                      delete this.data.player_startup_time,
                      delete this.data.page_load_time;
                  };
                  this.one('playerready', s),
                    E.default.apply(this),
                    W.default.apply(this),
                    N.default.apply(this),
                    A.default.apply(this),
                    x.default.apply(this),
                    q.default.apply(this),
                    O.default.apply(this),
                    P.default.apply(this),
                    F.default.apply(this),
                    R.default.apply(this),
                    L.default.apply(this),
                    G.default.apply(this),
                    Q.default.apply(this),
                    i.hlsjs && this.addHLSJS(i),
                    i.dashjs && this.addDashJS(i),
                    this.emit('viewinit', i.data);
                };
              (0, u.default)(X.prototype, g.default.prototype),
                (0, u.default)(X.prototype, A.default.prototype),
                (0, u.default)(X.prototype, N.default.prototype),
                (0, u.default)(X.prototype, x.default.prototype),
                (0, u.default)(X.prototype, O.default.prototype),
                (0, u.default)(X.prototype, P.default.prototype),
                (0, u.default)(X.prototype, F.default.prototype),
                (0, u.default)(X.prototype, R.default.prototype),
                (0, u.default)(X.prototype, L.default.prototype),
                (X.prototype.destroy = function () {
                  this._destroyed ||
                    ((this._destroyed = !0),
                    void 0 !== this.data.view_start && (this.emit('viewend'), this.send('viewend')),
                    this.playbackEventDispatcher.destroy(),
                    this.removeHLSJS(),
                    this.removeDashJS(),
                    f.default.clearTimeout(this._heartBeatTimeout));
                }),
                (X.prototype.send = function (e) {
                  var t = (0, u.default)({}, this.data);
                  if (
                    (1 === t.player_error_code &&
                      (delete t.player_error_code, delete t.player_error_message),
                    t.player_source_duration === 1 / 0 || t.video_source_duration === 1 / 0
                      ? (t.video_source_is_live = !0)
                      : (0 < t.player_source_duration || 0 < t.video_source_duration) &&
                        (t.video_source_is_live = !1),
                    (t.video_source_url = t.video_source_url || t.player_source_url),
                    t.video_source_url)
                  ) {
                    var i = (0, d.extractHostnameAndDomain)(t.video_source_url),
                      a = r(i, 2),
                      n = a[0],
                      o = a[1];
                    (t.video_source_domain = o), (t.video_source_hostname = n);
                  }
                  delete t.ad_request_id,
                    this.playbackEventDispatcher.send(e, t),
                    this.data.view_sequence_number++,
                    this.data.player_sequence_number++,
                    this._restartHeartBeat();
                }),
                (X.prototype._updateStateData = function () {
                  (0, u.default)(this.data, this.getStateData()),
                    this.getPlayheadTime &&
                      (this.data.player_playhead_time = this.getPlayheadTime()),
                    this._sanitizeData();
                }),
                (X.prototype._sanitizeData = function () {
                  var e = this;
                  [
                    'player_width',
                    'player_height',
                    'video_source_width',
                    'video_source_height',
                    'player_playhead_time',
                  ].forEach(function (t) {
                    var i = parseInt(e.data[t], 10);
                    e.data[t] = isNaN(i) ? void 0 : i;
                  });
                }),
                (X.prototype._resetVideoData = function (e, t) {
                  var i = this;
                  Object.keys(this.data).forEach(function (e) {
                    0 === e.indexOf('video_') && delete i.data[e];
                  });
                }),
                (X.prototype._resetViewData = function () {
                  var e = this;
                  Object.keys(this.data).forEach(function (t) {
                    0 === t.indexOf('view_') && delete e.data[t];
                  }),
                    (this.data.view_sequence_number = 1);
                }),
                (X.prototype._resetErrorData = function (e, t) {
                  delete this.data.player_error_code, delete this.data.player_error_message;
                }),
                (X.prototype._initializeViewData = function () {
                  var e = this,
                    t = (this.data.view_id = (0, l.generateUUID)());
                  this.data.video_id ||
                    (this.data.video_id = (0, v.default)(this.data.player_source_url));
                  var i = function i() {
                    t === e.data.view_id && (0, p.default)(e.data, 'player_view_count', 1);
                  };
                  this.data.player_is_paused ? this.one('play', i) : i();
                }),
                (X.prototype._restartHeartBeat = function () {
                  var e = this;
                  f.default.clearTimeout(this._heartBeatTimeout),
                    this.viewErrored ||
                      (this._heartBeatTimeout = f.default.setTimeout(function () {
                        e.data.player_is_paused || e.emit('hb');
                      }, 1e4));
                }),
                (X.prototype.addHLSJS = function (e) {
                  return e.hlsjs
                    ? this.hlsjs
                      ? void this.mux.log.warn(
                          'An instance of HLS.js is already being monitored for this player.'
                        )
                      : ((this.hlsjs = e.hlsjs),
                        void (0, m.monitorHLSJS)(
                          this.mux,
                          this.id,
                          e.hlsjs,
                          {},
                          e.Hls || f.default.Hls
                        ))
                    : void this.mux.log.warn(
                        'You must pass a valid hlsjs instance in order to track it.'
                      );
                }),
                (X.prototype.removeHLSJS = function () {
                  this.hlsjs &&
                    ((0, m.stopMonitoringHLSJS)(this.id, this.hlsjs), (this.hlsjs = void 0));
                }),
                (X.prototype.addDashJS = function (e) {
                  return e.dashjs
                    ? this.dashjs
                      ? void this.mux.log.warn(
                          'An instance of Dash.js is already being monitored for this player.'
                        )
                      : ((this.dashjs = e.dashjs),
                        void (0, y.monitorDashJS)(this.mux, this.id, e.dashjs))
                    : void this.mux.log.warn(
                        'You must pass a valid dashjs instance in order to track it.'
                      );
                }),
                (X.prototype.removeDashJS = function () {
                  this.dashjs &&
                    ((0, y.stopMonitoringDashJS)(this.id, this.dashjs), (this.dashjs = void 0));
                }),
                (t.default = X);
            },
            function (e, t) {},
            function (e, t, i) {
              'use strict';
              function a(e) {
                return e && e.__esModule ? e : { default: e };
              }
              function r(e) {
                var t = o.default.createElement('a');
                t.href = e;
                var i = t.pathname.replace(/\.[^\/.]+$/, '');
                return u.default.encode(t.host + i).split('=')[0];
              }
              Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = r);
              var n = i(6),
                o = a(n),
                s = i(22),
                u = a(s);
            },
            function (e, t, i) {
              (function (e, a) {
                var r;
                !(function (n) {
                  var o = 'object' == typeof t && t,
                    s = ('object' == typeof e && e && e.exports, 'object' == typeof a && a),
                    u = function u(e) {
                      this.message = e;
                    };
                  (u.prototype = new Error()), (u.prototype.name = 'InvalidCharacterError');
                  var l = function l(e) {
                      throw new u(e);
                    },
                    d = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
                    c = /[\t\n\f\r ]/g,
                    f = function f(e) {
                      e = (e + '').replace(c, '');
                      var t = e.length;
                      0 == t % 4 && ((e = e.replace(/==?$/, '')), (t = e.length)),
                        (1 == t % 4 || /[^+a-zA-Z0-9\/]/.test(e)) &&
                          l(
                            'Invalid character: the string to be decoded is not correctly encoded.'
                          );
                      for (var i, a, r = 0, n = '', o = -1; ++o < t; )
                        (a =
                          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.indexOf(
                            e.charAt(o)
                          )),
                          (i = r % 4 ? 64 * i + a : a),
                          r++ % 4 && (n += String.fromCharCode(255 & (i >> (6 & (-2 * r)))));
                      return n;
                    },
                    h = function h(e) {
                      (e = e + ''),
                        /[^\0-\xFF]/.test(e) &&
                          l(
                            'The string to be encoded contains characters outside of the Latin1 range.'
                          );
                      for (
                        var t, i, a, r, n = e.length % 3, o = '', s = -1, u = e.length - n;
                        ++s < u;

                      )
                        (t = e.charCodeAt(s) << 16),
                          (i = e.charCodeAt(++s) << 8),
                          (a = e.charCodeAt(++s)),
                          (r = t + i + a),
                          (o +=
                            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.charAt(
                              63 & (r >> 18)
                            ) +
                            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.charAt(
                              63 & (r >> 12)
                            ) +
                            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.charAt(
                              63 & (r >> 6)
                            ) +
                            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.charAt(
                              63 & r
                            ));
                      return (
                        2 == n
                          ? ((t = e.charCodeAt(s) << 8),
                            (i = e.charCodeAt(++s)),
                            (r = t + i),
                            (o +=
                              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.charAt(
                                r >> 10
                              ) +
                              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.charAt(
                                63 & (r >> 4)
                              ) +
                              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.charAt(
                                63 & (r << 2)
                              ) +
                              '='))
                          : 1 == n &&
                            ((r = e.charCodeAt(s)),
                            (o +=
                              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.charAt(
                                r >> 2
                              ) +
                              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.charAt(
                                63 & (r << 4)
                              ) +
                              '==')),
                        o
                      );
                    },
                    p = { encode: h, decode: f, version: '0.1.0' };
                  void 0 !==
                    (r = function () {
                      return p;
                    }.call(t, i, t, e)) && (e.exports = r);
                })();
              }.call(t, i(10)(e), i(4)));
            },
            function (e, t, i) {
              'use strict';
              function a(e) {
                return e && e.__esModule ? e : { default: e };
              }
              function r(e, t, i) {
                function a(a, r) {
                  try {
                    var n,
                      v,
                      m,
                      y,
                      b,
                      g,
                      w,
                      x,
                      S,
                      E,
                      T,
                      O,
                      k,
                      D,
                      P = null;
                    if (
                      (a !== o.Events.FRAG_BUFFERED &&
                      r.networkDetails &&
                      r.networkDetails.getAllResponseHeaders
                        ? ((h = r.networkDetails.getAllResponseHeaders()),
                          (S = r.networkDetails.responseURL),
                          (O = S.match(
                            /^(https?:)\/\/(([^:\/?#]*)(?::([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/
                          )),
                          (k = O && O[3]))
                        : a === o.Events.FRAG_BUFFERED &&
                          ((h = p[r.frag.loadIdx][0]),
                          (k = p[r.frag.loadIdx][1]),
                          delete p[r.frag.loadIdx]),
                      a === o.Events.FRAG_LOADED)
                    )
                      return void (p[r.frag.loadIdx] = [h, k]);
                    (d = i.currentLevel),
                      (w = i.levels),
                      a === o.Events.MANIFEST_LOADED || a === o.Events.LEVEL_LOADED
                        ? ((E = 'manifest'), (b = 0), (T = -1))
                        : ((E = 'media'), (b = r.frag.duration), (T = r.frag.startPTS)),
                      0 <= d &&
                        ((x = w[d]),
                        (c = void 0 === x.width ? 0 : x.width),
                        (f = void 0 === x.height ? 0 : x.height)),
                      a === o.Events.MANIFEST_LOADED &&
                        ((P = {}),
                        w.forEach(function (e, t) {
                          (P[t] = {}),
                            (P[t].width = void 0 === e.width ? 0 : e.width),
                            (P[t].height = void 0 === e.height ? 0 : e.height),
                            (P[t].bitrate = e.bitrate),
                            (P[t].attrs = e.attrs);
                        }),
                        (_.media = P)),
                      (g = s.default.performance.timing.navigationStart),
                      (y = r.stats.total),
                      (n = g + r.stats.trequest),
                      (v = g + r.stats.tfirst),
                      (m = g + r.stats.tload),
                      (D = {
                        request_event_type: a,
                        request_start: n,
                        request_response_start: v,
                        request_response_end: m,
                        request_bytes_loaded: y,
                        request_type: E,
                        request_response_headers: (0, l.default)(h),
                        request_hostname: k,
                      }),
                      ('audio' !== E && 'video' !== E && 'media' !== E) ||
                        (D.request_media_duration = b),
                      -1 !== d && (D.request_current_level = d),
                      -1 !== T && (D.request_media_start_time = T),
                      ('video' !== E && 'media' !== E) ||
                        ((D.request_video_width = c), (D.request_video_height = f)),
                      null !== P && (D.request_rendition_lists = _),
                      e.emit(t, 'requestcompleted', D);
                  } catch (e) {
                    u.warn('hlsjs-monitor.js onHLSRequestLoaded() Exception', e);
                  }
                }
                function r(i, a) {
                  var r = a.details;
                  if (
                    r === o.ErrorDetails.MANIFEST_LOAD_ERROR ||
                    r === o.ErrorDetails.MANIFEST_LOAD_TIMEOUT ||
                    r === o.ErrorDetails.FRAG_LOAD_ERROR ||
                    r === o.ErrorDetails.FRAG_LOAD_TIMEOUT ||
                    r === o.ErrorDetails.LEVEL_LOAD_ERROR ||
                    r === o.ErrorDetails.LEVEL_LOAD_TIMEOUT
                  )
                    try {
                      var n,
                        s,
                        l = '',
                        d = 0,
                        c = '';
                      r === o.ErrorDetails.MANIFEST_LOAD_ERROR
                        ? ((d = a.response.code), (c = a.response.text), (l = a.context.url))
                        : r === o.ErrorDetails.MANIFEST_LOAD_TIMEOUT
                        ? (l = a.context.url)
                        : r === o.ErrorDetails.LEVEL_LOAD_ERROR
                        ? ((d = a.response.code), (c = a.response.text), (l = a.context.url))
                        : r === o.ErrorDetails.LEVEL_LOAD_TIMEOUT
                        ? (l = a.context.url)
                        : r === o.ErrorDetails.FRAG_LOAD_ERROR
                        ? ((d = a.response.code), (c = a.response.text), (l = a.frag.url))
                        : r === o.ErrorDetails.FRAG_LOAD_TIMEOUT
                        ? (l = a.frag.url)
                        : void 0;
                      (n = l.match(
                        /^(https?:)\/\/(([^:\/?#]*)(?::([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/
                      )),
                        (s = n && n[3]),
                        e.emit(t, 'requestfailed', {
                          request_error: r,
                          request_url: l,
                          request_hostname: s,
                          request_type: 'media',
                          request_error_code: d,
                          request_error_text: c,
                        });
                    } catch (e) {
                      u.warn('hlsjs-monitor.js onHLSRequestError() Exception', e);
                    }
                }
                function n(i, a) {
                  try {
                    var r,
                      n,
                      o = a.frag._url;
                    (r = o.match(
                      /^(https?:)\/\/(([^:\/?#]*)(?::([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/
                    )),
                      (n = r && r[3]),
                      e.emit(t, 'requestcanceled', {
                        request_cancel: i,
                        request_url: o,
                        request_hostname: n,
                        request_type: 'media',
                      });
                  } catch (e) {
                    u.warn('hlsjs-monitor.js onHLSRequestCancel() Exception', e);
                  }
                }
                var o =
                    (3 < arguments.length && void 0 !== arguments[3] && arguments[3], arguments[4]),
                  u = e.log;
                if (!s.default.performance || !s.default.performance.timing)
                  return void u.warn(
                    'window.performance.timing not supported. Not tracking HLS.js.'
                  );
                var d = -1,
                  c = 0,
                  f = 0,
                  h = '',
                  p = {},
                  _ = { video: {}, audio: {}, media: {} };
                (i._muxPluginData = i._muxPluginData || {}),
                  (i._muxPluginData[t] = {}),
                  i.on(o.Events.FRAG_LOADED, a),
                  i.on(o.Events.FRAG_BUFFERED, a),
                  i.on(o.Events.MANIFEST_LOADED, a),
                  i.on(o.Events.LEVEL_LOADED, a),
                  i.on(o.Events.ERROR, r),
                  i.on(o.Events.FRAG_LOAD_EMERGENCY_ABORTED, n),
                  (i._muxPluginData[t].stopMonitoring = function () {
                    i.off(o.Events.FRAG_LOADED, a),
                      i.off(o.Events.FRAG_BUFFERED, a),
                      i.off(o.Events.MANIFEST_LOADED, a),
                      i.off(o.Events.LEVEL_LOADED, a),
                      i.off(o.Events.ERROR, r),
                      i.off(o.Events.FRAG_LOAD_EMERGENCY_ABORTED, n);
                  });
              }
              function n(e, t) {
                t &&
                  t._muxPluginData &&
                  t._muxPluginData[e] &&
                  t._muxPluginData[e].stopMonitoring();
              }
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.stopMonitoringHLSJS = t.monitorHLSJS = void 0);
              var o = i(2),
                s = a(o),
                u = i(11),
                l = a(u);
              (t.monitorHLSJS = r), (t.stopMonitoringHLSJS = n);
            },
            function (e, t, i) {
              'use strict';
              function a(e) {
                return e && e.__esModule ? e : { default: e };
              }
              function r(e, t, i) {
                function a(a) {
                  try {
                    var r,
                      s,
                      v,
                      m,
                      y,
                      b,
                      g,
                      w,
                      x,
                      S,
                      E,
                      T,
                      O,
                      k,
                      P,
                      D,
                      A,
                      M,
                      R,
                      j,
                      L = null;
                    (j = a.type),
                      'manifestLoaded' === j
                        ? ((L = {}), (R = ''), (D = NaN))
                        : ((L = a.chunk.mediaInfo.bitrateList),
                          (R = a.chunk.mediaInfo.type),
                          (D = a.chunk.start)),
                      (o = 'video' === R ? i.getQualityFor('video') : i.getQualityFor('audio')),
                      'manifestLoaded' === j ||
                        (_ && p) ||
                        ((f = {}),
                        L.forEach(function (e, t) {
                          (f[t] = {}),
                            (f[t].width = void 0 === e.width ? 0 : e.width),
                            (f[t].height = void 0 === e.height ? 0 : e.height),
                            (f[t].bitrate = e.bandwidth),
                            (f[t].attrs = {});
                        }),
                        'video' === R ? ((h.video = f), (_ = !0)) : ((h.audio = f), (p = !0))),
                      'initFragmentLoaded' === j
                        ? 'video' === R
                          ? ((P = 'video_init'), (k = L[o]))
                          : 'audio' === R
                          ? ((P = 'audio_init'), (k = L[0]))
                          : ((P = 'media'), (k = L[o]))
                        : 'mediaFragmentLoaded' === j
                        ? 'video' === R
                          ? ((P = 'video'), (k = L[o]))
                          : 'audio' === R
                          ? ((P = 'audio'), (k = L[0]))
                          : ((P = 'media'), (k = L[o]))
                        : 'manifestLoaded' === j && ((P = 'manifest'), (k = {})),
                      (u = k.width),
                      (d = k.height),
                      (c = k.bandwidth),
                      'manifestLoaded' === j
                        ? ((g = a.data.url), (m = 0), (r = 0), (s = 0), (v = 0), (w = 0), (T = ''))
                        : ((y = a.fragmentModel.getRequests({ state: 'executed' })),
                          (b = y[y.length - 1]),
                          (g = b.url),
                          (x = b.mediaType),
                          (m = b.bytesLoaded),
                          (r = new Date(b.requestStartDate).getTime()),
                          (s = new Date(b.firstByteDate).getTime()),
                          (v = new Date(b.requestEndDate).getTime()),
                          (w = Number.isNaN(b.duration) ? 0 : b.duration),
                          (S = i.getMetricsFor(x).HttpList),
                          (E = S[S.length - 1]),
                          (T = E._responseHeaders)),
                      (M = g.match(
                        /^(https?:)\/\/(([^:\/?#]*)(?::([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/
                      )),
                      (A = M && M[3]),
                      ('manifestLoaded' !== j && 'initFragmentLoaded' !== j) || (m = -1),
                      (O = {
                        request_event_type: j,
                        request_start: r,
                        request_response_start: s,
                        request_response_end: v,
                        request_bytes_loaded: m,
                        request_type: P,
                        request_response_headers: (0, l.default)(T),
                        request_hostname: A,
                      }),
                      ('audio' !== P && 'video' !== P && 'media' !== P) ||
                        (O.request_media_duration = w),
                      isNaN(D) || (O.request_media_start_time = D),
                      void 0 !== c && (O.request_labeled_bitrate = c),
                      -1 !== o && (O.request_current_level = o),
                      ('video' !== P && 'media' !== P) ||
                        ((O.request_video_width = u), (O.request_video_height = d)),
                      null !== f && (O.request_rendition_lists = h),
                      e.emit(t, 'requestcompleted', O);
                  } catch (e) {
                    n.warn('dashjs-monitor.js onDASHRequestLoaded() Exception: ', e);
                  }
                }
                function r(i) {
                  var a = s.default.event;
                  try {
                    var r,
                      o,
                      u = i.error + '_' + i.event.id + '_' + i.event.request.type,
                      l = i.event.url,
                      d = i.event.request.mediaType,
                      c = a.currentTarget.status,
                      f = a.currentTarget.statusText;
                    (r = l.match(
                      /^(https?:)\/\/(([^:\/?#]*)(?::([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/
                    )),
                      (o = r && r[3]),
                      e.emit(t, 'requestfailed', {
                        request_error: u,
                        request_url: l,
                        request_hostname: o,
                        request_type: d,
                        request_error_code: c,
                        request_error_text: f,
                      });
                  } catch (e) {
                    n.warn('dashjs-monitor.js onDASHRequestError() Exception: ', e);
                  }
                }
                var n = (3 < arguments.length && void 0 !== arguments[3] && arguments[3], e.log);
                if (!i || !i.on)
                  return void n.warn('Invalid dash.js player reference. Monitoring blocked.');
                var o = -1,
                  u = 0,
                  d = 0,
                  c = 0,
                  f = null,
                  h = { video: {}, audio: {}, media: {} },
                  p = !1,
                  _ = !1;
                (i._muxPluginData = i._muxPluginData || {}),
                  (i._muxPluginData[t] = {}),
                  i.on('mediaFragmentLoaded', a),
                  i.on('initFragmentLoaded', a),
                  i.on('manifestLoaded', a),
                  i.on('error', r),
                  (i._muxPluginData[t].stopMonitoring = function () {
                    i.off('mediaFragmentLoaded', a),
                      i.off('initFragmentLoaded', a),
                      i.off('manifestLoaded', a),
                      i.off('error', r);
                  });
              }
              function n(e, t) {
                t &&
                  t._muxPluginData &&
                  t._muxPluginData[e] &&
                  t._muxPluginData[e].stopMonitoring();
              }
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.stopMonitoringDashJS = t.monitorDashJS = void 0);
              var o = i(2),
                s = a(o),
                u = i(11),
                l = a(u);
              (t.monitorDashJS = r), (t.stopMonitoringDashJS = n);
            },
            function (e, t, i) {
              'use strict';
              Object.defineProperty(t, '__esModule', { value: !0 });
              var a = function a() {},
                r = 0;
              (a.prototype.on = function (e, t, i) {
                return (
                  (t._eventEmitterGuid = t._eventEmitterGuid || ++r),
                  (this._listeners = this._listeners || {}),
                  (this._listeners[e] = this._listeners[e] || []),
                  i && (t = t.bind(i)),
                  this._listeners[e].push(t),
                  t
                );
              }),
                (a.prototype.off = function (e, t) {
                  var i = this._listeners && this._listeners[e];
                  i &&
                    i.forEach(function (e, a) {
                      e._eventEmitterGuid === t._eventEmitterGuid && i.splice(a, 1);
                    });
                }),
                (a.prototype.one = function (e, t, i) {
                  var a = this;
                  t._eventEmitterGuid = t._eventEmitterGuid || ++r;
                  var n = function r() {
                    a.off(e, r), t.apply(i || this, arguments);
                  };
                  (n._eventEmitterGuid = t._eventEmitterGuid), this.on(e, n);
                }),
                (a.prototype.emit = function (e, t) {
                  var i = this;
                  if (this._listeners) {
                    t = t || {};
                    var a = this._listeners['before*'] || [],
                      r = this._listeners[e] || [],
                      n = this._listeners['after' + e] || [],
                      o = function o(t, a) {
                        (t = t.slice()),
                          t.forEach(function (t) {
                            t.call(i, { type: e }, a);
                          });
                      };
                    o(a, t), o(r, t), o(n, t);
                  }
                }),
                (t.default = a);
            },
            function (e, t, i) {
              'use strict';
              Object.defineProperty(t, '__esModule', { value: !0 });
              var a = i(2),
                r = (function (e) {
                  return e && e.__esModule ? e : { default: e };
                })(a),
                n = function n() {
                  (this._playbackHeartbeatInterval = null),
                    (this._playheadShouldBeProgressing = !1),
                    this.on('playing', function () {
                      this._playheadShouldBeProgressing = !0;
                    }),
                    this.on('play', this._startPlaybackHeartbeatInterval),
                    this.on('adbreakstart', this._startPlaybackHeartbeatInterval),
                    this.on('adplay', this._startPlaybackHeartbeatInterval),
                    this.on('seeking', this._startPlaybackHeartbeatInterval),
                    this.on('devicewake', this._startPlaybackHeartbeatInterval),
                    this.on('pause', this._stopPlaybackHeartbeatInterval),
                    this.on('ended', this._stopPlaybackHeartbeatInterval),
                    this.on('viewend', this._stopPlaybackHeartbeatInterval),
                    this.on('error', this._stopPlaybackHeartbeatInterval),
                    this.on('adpause', this._stopPlaybackHeartbeatInterval),
                    this.on('adbreakend', this._stopPlaybackHeartbeatInterval),
                    this.on('seeked', function () {
                      this.data.player_is_paused && this._stopPlaybackHeartbeatInterval();
                    }),
                    this.on('timeupdate', function () {
                      null !== this._playbackHeartbeatInterval && this.emit('playbackheartbeat');
                    }),
                    this.on('devicesleep', function (e, t) {
                      null !== this._playbackHeartbeatInterval &&
                        (r.default.clearInterval(this._playbackHeartbeatInterval),
                        this.emit('playbackheartbeatend', { viewer_time: t.viewer_time }),
                        (this._playbackHeartbeatInterval = null));
                    });
                };
              (n.prototype._startPlaybackHeartbeatInterval = function () {
                var e = this;
                null === this._playbackHeartbeatInterval &&
                  (this.emit('playbackheartbeat'),
                  (this._playbackHeartbeatInterval = r.default.setInterval(function () {
                    e.emit('playbackheartbeat');
                  }, this.playbackHeartbeatTime)));
              }),
                (n.prototype._stopPlaybackHeartbeatInterval = function () {
                  (this._playheadShouldBeProgressing = !1),
                    null !== this._playbackHeartbeatInterval &&
                      (r.default.clearInterval(this._playbackHeartbeatInterval),
                      this.emit('playbackheartbeatend'),
                      (this._playbackHeartbeatInterval = null));
                }),
                (t.default = n);
            },
            function (e, t, i) {
              'use strict';
              function a() {
                var e = this;
                this.on('viewinit', function () {
                  e.viewErrored = !1;
                }),
                  this.on('error', function () {
                    e.viewErrored = !0;
                  });
              }
              Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = a);
            },
            function (e, t, i) {
              'use strict';
              Object.defineProperty(t, '__esModule', { value: !0 });
              var a = i(1),
                r = (function (e) {
                  return e && e.__esModule ? e : { default: e };
                })(a),
                n = function n() {
                  (this._watchTimeTrackerLastCheckedTime = null),
                    this.on('playbackheartbeat', this._updateWatchTime),
                    this.on('playbackheartbeatend', this._clearWatchTimeState);
                };
              (n.prototype._updateWatchTime = function (e, t) {
                var i = t.viewer_time;
                null === this._watchTimeTrackerLastCheckedTime &&
                  (this._watchTimeTrackerLastCheckedTime = i),
                  (0, r.default)(
                    this.data,
                    'view_watch_time',
                    i - this._watchTimeTrackerLastCheckedTime
                  ),
                  (this._watchTimeTrackerLastCheckedTime = i);
              }),
                (n.prototype._clearWatchTimeState = function (e, t) {
                  this._updateWatchTime(e, t), (this._watchTimeTrackerLastCheckedTime = null);
                }),
                (t.default = n);
            },
            function (e, t, i) {
              'use strict';
              Object.defineProperty(t, '__esModule', { value: !0 });
              var a = i(1),
                r = (function (e) {
                  return e && e.__esModule ? e : { default: e };
                })(a),
                n = function n() {
                  (this._playbackTimeTrackerLastPlayheadPosition = -1),
                    this.on('playbackheartbeat', this._updatePlaybackTime),
                    this.on('playbackheartbeatend', this._clearPlaybackTimeState),
                    this.on('seeking', this._clearPlaybackTimeState);
                };
              (n.prototype._updatePlaybackTime = function () {
                var e = this.data.player_playhead_time;
                if (
                  0 <= this._playbackTimeTrackerLastPlayheadPosition &&
                  e > this._playbackTimeTrackerLastPlayheadPosition
                ) {
                  var t = e - this._playbackTimeTrackerLastPlayheadPosition;
                  1e3 >= t && (0, r.default)(this.data, 'view_content_playback_time', t);
                }
                this._playbackTimeTrackerLastPlayheadPosition = e;
              }),
                (n.prototype._clearPlaybackTimeState = function () {
                  this._updatePlaybackTime(), (this._playbackTimeTrackerLastPlayheadPosition = -1);
                }),
                (t.default = n);
            },
            function (e, t, i) {
              'use strict';
              Object.defineProperty(t, '__esModule', { value: !0 });
              var a = function a() {
                this.on('playbackheartbeat', this._updatePlayheadTime),
                  this.on('playbackheartbeatend', this._updatePlayheadTime),
                  this.on('timeupdate', this._updatePlayheadTime),
                  this.on('destroy', function () {
                    this.off('timeupdate', this._updatePlayheadTime);
                  });
              };
              (a.prototype._updatePlayheadTime = function (e, t) {
                if (t.player_playhead_time) this.data.player_playhead_time = t.player_playhead_time;
                else if (this.getPlayheadTime) {
                  var i = this.getPlayheadTime();
                  void 0 !== i && (this.data.player_playhead_time = i);
                }
              }),
                (t.default = a);
            },
            function (e, t, i) {
              'use strict';
              Object.defineProperty(t, '__esModule', { value: !0 });
              var a = i(1),
                r = (function (e) {
                  return e && e.__esModule ? e : { default: e };
                })(a),
                n = function n() {
                  (this._lastCheckedTime = null),
                    (this._lastPlayheadTime = null),
                    (this._lastPlayheadTimeUpdatedTime = null),
                    this.on('playbackheartbeat', this._checkIfRebuffering),
                    this.on('playbackheartbeatend', this._cleanupRebufferTracker),
                    this.on('seeking', function () {
                      this._cleanupRebufferTracker(null, { viewer_time: Date.now() });
                    });
                };
              (n.prototype._checkIfRebuffering = function (e, t) {
                if (this.isSeeking || this.isAdBreak || !this._playheadShouldBeProgressing)
                  return void this._cleanupRebufferTracker(e, t);
                if (null === this._lastCheckedTime)
                  return (
                    this._prepareRebufferTrackerState(t.viewer_time),
                    void this._updateRebufferMetrics()
                  );
                if (this._lastPlayheadTime !== this.data.player_playhead_time)
                  return void this._cleanupRebufferTracker(e, t, !0);
                var i = t.viewer_time - this._lastPlayheadTimeUpdatedTime;
                i >= this.sustainedRebufferThreshold &&
                  (this._rebuffering
                    ? this._updateRebufferMetrics(t.viewer_time - this._lastCheckedTime)
                    : ((this._rebuffering = !0),
                      (0, r.default)(this.data, 'view_rebuffer_count', 1),
                      this._updateRebufferMetrics(i),
                      this.emit('rebufferstart'))),
                  (this._lastCheckedTime = t.viewer_time);
              }),
                (n.prototype._clearRebufferTrackerState = function () {
                  (this._lastCheckedTime = null),
                    (this._lastPlayheadTime = null),
                    (this._lastPlayheadTimeUpdatedTime = null);
                }),
                (n.prototype._prepareRebufferTrackerState = function (e) {
                  (this._lastCheckedTime = e),
                    (this._lastPlayheadTime = this.data.player_playhead_time),
                    (this._lastPlayheadTimeUpdatedTime = e);
                }),
                (n.prototype._cleanupRebufferTracker = function (e, t) {
                  var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                  if (this._rebuffering)
                    (this._rebuffering = !1),
                      this._updateRebufferMetrics(t.viewer_time - this._lastCheckedTime),
                      this.emit('rebufferend', { viewer_time: t.viewer_time });
                  else {
                    if (null === this._lastCheckedTime) return void this._updateRebufferMetrics();
                    var a = this.data.player_playhead_time - this._lastPlayheadTime,
                      n = t.viewer_time - this._lastPlayheadTimeUpdatedTime;
                    0 < a && n - a > this.minimumRebufferDuration
                      ? ((0, r.default)(this.data, 'view_rebuffer_count', 1),
                        this._updateRebufferMetrics(n - a),
                        this.emit('rebufferstart', {
                          viewer_time: this._lastPlayheadTimeUpdatedTime,
                        }),
                        this.emit('rebufferend', {
                          viewer_time: this._lastPlayheadTimeUpdatedTime + n - a,
                        }))
                      : this._updateRebufferMetrics();
                  }
                  i
                    ? this._prepareRebufferTrackerState(t.viewer_time)
                    : this._clearRebufferTrackerState();
                }),
                (n.prototype._updateRebufferMetrics = function (e) {
                  0 < e && (0, r.default)(this.data, 'view_rebuffer_duration', e),
                    0 <= this.data.view_watch_time &&
                      0 < this.data.view_rebuffer_count &&
                      ((this.data.view_rebuffer_frequency =
                        this.data.view_rebuffer_count / this.data.view_watch_time),
                      (this.data.view_rebuffer_percentage =
                        this.data.view_rebuffer_duration / this.data.view_watch_time));
                }),
                (t.default = n);
            },
            function (e, t, i) {
              'use strict';
              Object.defineProperty(t, '__esModule', { value: !0 });
              var a = function a() {
                this.on('viewinit', function () {
                  var e = this.data,
                    t = e.view_id,
                    i = function i(e, _i) {
                      var a = _i.viewer_time;
                      'playing' === e.type && void 0 === this.data.view_time_to_first_frame
                        ? this.calculateTimeToFirstFrame(a || Date.now(), t)
                        : 'adplaying' !== e.type ||
                          (void 0 !== this.data.view_time_to_first_frame &&
                            !this.inPrerollPosition()) ||
                          this.calculateTimeToFirstFrame(a || Date.now(), t);
                    };
                  this.one('playing', i),
                    this.one('adplaying', i),
                    this.one('viewend', function () {
                      this.off('playing', i), this.off('adplaying', i);
                    });
                });
              };
              (a.prototype.calculateTimeToFirstFrame = function (e, t) {
                t === this.data.view_id &&
                  (this._updateWatchTime(null, { viewer_time: e }),
                  (this.data.view_time_to_first_frame = this.data.view_watch_time),
                  (this.data.player_autoplay_on || this.data.video_is_autoplay) &&
                    this.NAVIGATION_START &&
                    (this.data.view_aggregate_startup_time =
                      this.data.view_start + this.data.view_watch_time - this.NAVIGATION_START));
              }),
                (t.default = a);
            },
            function (e, t, i) {
              'use strict';
              function a() {
                var e = this;
                this.on('viewinit', function () {
                  this._lastPlayheadPosition = -1;
                });
                var t = ['pause', 'rebufferstart', 'seeking', 'error', 'adbreakstart', 'hb'],
                  i = ['playing', 'hb'];
                t.forEach(function (t) {
                  e.on(t, function () {
                    if (
                      0 <= this._lastPlayheadPosition &&
                      0 <= this.data.player_playhead_time &&
                      0 <= this._lastPlayerWidth &&
                      0 < this._lastSourceWidth &&
                      0 <= this._lastPlayerHeight &&
                      0 < this._lastSourceHeight
                    ) {
                      var e = this.data.player_playhead_time - this._lastPlayheadPosition;
                      if (0 > e) return void (this._lastPlayheadPosition = -1);
                      var t = Math.min(
                          this._lastPlayerWidth / this._lastSourceWidth,
                          this._lastPlayerHeight / this._lastSourceHeight
                        ),
                        i = Math.max(0, t - 1),
                        a = Math.max(0, 1 - t);
                      (this.data.view_max_upscale_percentage = Math.max(
                        this.data.view_max_upscale_percentage || 0,
                        i
                      )),
                        (this.data.view_max_downscale_percentage = Math.max(
                          this.data.view_max_downscale_percentage || 0,
                          a
                        )),
                        (0, n.default)(this.data, 'view_total_content_playback_time', e),
                        (0, n.default)(this.data, 'view_total_upscaling', i * e),
                        (0, n.default)(this.data, 'view_total_downscaling', a * e);
                    }
                    this._lastPlayheadPosition = -1;
                  });
                }),
                  i.forEach(function (t) {
                    e.on(t, function () {
                      (this._lastPlayheadPosition = this.data.player_playhead_time),
                        (this._lastPlayerWidth = this.data.player_width),
                        (this._lastPlayerHeight = this.data.player_height),
                        (this._lastSourceWidth = this.data.video_source_width),
                        (this._lastSourceHeight = this.data.video_source_height);
                    });
                  });
              }
              Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = a);
              var r = i(1),
                n = (function (e) {
                  return e && e.__esModule ? e : { default: e };
                })(r);
            },
            function (e, t, i) {
              'use strict';
              function a(e) {
                return e && e.__esModule ? e : { default: e };
              }
              function r() {
                (this.isSeeking = !1),
                  this.on('seeking', function (e, t) {
                    (0, u.default)(this.data, t),
                      (this._lastSeekingTime = Date.now()),
                      !1 === this.isSeeking && ((this.isSeeking = !0), this.send('seeking'));
                  }),
                  this.on('seeked', function () {
                    this.isSeeking = !1;
                    var e = this._lastSeekingTime || Date.now(),
                      t = Date.now() - e;
                    (0, o.default)(this.data, 'view_seek_count', 1),
                      (0, o.default)(this.data, 'view_seek_duration', t);
                    var i = this.data.view_max_seek_time || 0;
                    this.data.view_max_seek_time = Math.max(i, t);
                  }),
                  this.on('viewend', function () {
                    this.isSeeking = !1;
                  });
              }
              Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = r);
              var n = i(1),
                o = a(n),
                s = i(0),
                u = a(s);
            },
            function (e, t, i) {
              'use strict';
              function a(e) {
                return e && e.__esModule ? e : { default: e };
              }
              Object.defineProperty(t, '__esModule', { value: !0 });
              var r = (function () {
                  function e(e, t) {
                    var n,
                      i = [],
                      a = !0,
                      r = !1;
                    try {
                      for (
                        var o, s = e[Symbol.iterator]();
                        !(a = (o = s.next()).done) && (i.push(o.value), !t || i.length !== t);
                        a = !0
                      );
                    } catch (e) {
                      (r = !0), (n = e);
                    } finally {
                      try {
                        !a && s.return && s.return();
                      } finally {
                        if (r) throw n;
                      }
                    }
                    return i;
                  }
                  return function (t, i) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return e(t, i);
                    throw new TypeError('Invalid attempt to destructure non-iterable instance');
                  };
                })(),
                n = i(1),
                o = a(n),
                s = i(9),
                u = i(0),
                l = a(u),
                d = function d(e, t) {
                  e.push(t),
                    e.sort(function (e, t) {
                      return e.viewer_time - t.viewer_time;
                    });
                },
                c = [
                  'adbreakstart',
                  'adrequest',
                  'adresponse',
                  'adplay',
                  'adplaying',
                  'adpause',
                  'adended',
                  'adbreakend',
                  'aderror',
                ],
                f = function f() {
                  var e = this;
                  this.on('viewinit', function () {
                    (this.isAdBreak = !1),
                      (this._currentAdRequestNumber = 0),
                      (this._currentAdResponseNumber = 0),
                      (this._adRequests = []),
                      (this._adResponses = []),
                      (this._adHasPlayed = !1),
                      (this._wouldBeNewAdPlay = !0),
                      (this._prerollPlayTime = void 0);
                  }),
                    c.forEach(function (t) {
                      return e.on(t, e._updateAdData);
                    });
                  var t = function t() {
                    e.isAdBreak = !1;
                  };
                  this.on('adbreakstart', function () {
                    this.isAdBreak = !0;
                  }),
                    this.on('play', t),
                    this.on('playing', t),
                    this.on('viewend', t),
                    this.on('adrequest', function (e, t) {
                      (t = (0, l.default)(
                        { ad_request_id: 'generatedAdRequestId' + this._currentAdRequestNumber++ },
                        t
                      )),
                        d(this._adRequests, t),
                        (0, o.default)(this.data, 'view_ad_request_count'),
                        this.inPrerollPosition() &&
                          ((this.data.view_preroll_requested = !0),
                          this._adHasPlayed ||
                            (0, o.default)(this.data, 'view_preroll_request_count'));
                    }),
                    this.on('adresponse', function (e, t) {
                      (t = (0, l.default)(
                        { ad_request_id: 'generatedAdRequestId' + this._currentAdResponseNumber++ },
                        t
                      )),
                        d(this._adResponses, t);
                      var i = this.findAdRequest(t.ad_request_id);
                      i &&
                        (0, o.default)(
                          this.data,
                          'view_ad_request_time',
                          Math.max(0, t.viewer_time - i.viewer_time)
                        );
                    }),
                    this.on('adplay', function (e, t) {
                      (this._adHasPlayed = !0),
                        this._wouldBeNewAdPlay &&
                          ((this._wouldBeNewAdPlay = !1),
                          (0, o.default)(this.data, 'view_ad_played_count')),
                        this.inPrerollPosition() &&
                          !this.data.view_preroll_played &&
                          ((this.data.view_preroll_played = !0),
                          0 < this._adRequests.length &&
                            (this.data.view_preroll_request_time = Math.max(
                              0,
                              t.viewer_time - this._adRequests[0].viewer_time
                            )),
                          this.data.view_start &&
                            (this.data.view_startup_preroll_request_time = Math.max(
                              0,
                              t.viewer_time - this.data.view_start
                            )),
                          (this._prerollPlayTime = t.viewer_time));
                    }),
                    this.on('adplaying', function (e, t) {
                      this.inPrerollPosition() &&
                        void 0 === this.data.view_preroll_load_time &&
                        void 0 !== this._prerollPlayTime &&
                        ((this.data.view_preroll_load_time = t.viewer_time - this._prerollPlayTime),
                        (this.data.view_startup_preroll_load_time =
                          t.viewer_time - this._prerollPlayTime));
                    }),
                    this.on('adended', function () {
                      this._wouldBeNewAdPlay = !0;
                    }),
                    this.on('aderror', function () {
                      this._wouldBeNewAdPlay = !0;
                    });
                };
              (f.prototype.inPrerollPosition = function () {
                return (
                  void 0 === this.data.view_content_playback_time ||
                  1e3 >= this.data.view_content_playback_time
                );
              }),
                (f.prototype.findAdRequest = function (e) {
                  for (var t = 0; t < this._adRequests.length; t++)
                    if (this._adRequests[t].ad_request_id === e) return this._adRequests[t];
                }),
                (f.prototype._updateAdData = function (e, t) {
                  if (this.inPrerollPosition()) {
                    if (!this.data.view_preroll_ad_tag_hostname && t.ad_tag_url) {
                      var i = (0, s.extractHostnameAndDomain)(t.ad_tag_url),
                        a = r(i, 2),
                        n = a[0],
                        o = a[1];
                      (this.data.view_preroll_ad_tag_domain = o),
                        (this.data.view_preroll_ad_tag_hostname = n);
                    }
                    if (!this.data.view_preroll_ad_asset_hostname && t.ad_asset_url) {
                      var u = (0, s.extractHostnameAndDomain)(t.ad_asset_url),
                        l = r(u, 2),
                        d = l[0],
                        c = l[1];
                      (this.data.view_preroll_ad_asset_domain = c),
                        (this.data.view_preroll_ad_asset_hostname = d);
                    }
                  }
                }),
                (t.default = f);
            },
            function (e, t, i) {
              'use strict';
              function a() {
                var t,
                  i,
                  e = this,
                  a = function a() {
                    (0, n.default)(e.data, 'view_waiting_rebuffer_count', 1),
                      (t = Date.now()),
                      (i = window.setInterval(function () {
                        if (t) {
                          var i = Date.now();
                          (0, n.default)(e.data, 'view_waiting_rebuffer_duration', i - t), (t = i);
                        }
                      }, 250));
                  },
                  r = function r() {
                    t &&
                      ((0, n.default)(e.data, 'view_waiting_rebuffer_duration', Date.now() - t),
                      (t = !1),
                      window.clearInterval(i));
                  },
                  o = !1,
                  s = function s() {
                    o = !0;
                  },
                  u = function u() {
                    (o = !1), r();
                  };
                this.on('waiting', function () {
                  o && a();
                }),
                  this.on('playing', function () {
                    r(), s();
                  }),
                  this.on('pause', u),
                  this.on('seeking', u);
              }
              Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = a);
              var r = i(1),
                n = (function (e) {
                  return e && e.__esModule ? e : { default: e };
                })(r);
            },
            function (e, t, i) {
              'use strict';
              function a() {
                var e = this;
                this.one('playbackheartbeat', o),
                  this.on('playbackheartbeatend', function () {
                    e.off('before*', s), e.one('playbackheartbeat', o);
                  });
              }
              Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = a);
              var r = i(0),
                n = (function (e) {
                  return e && e.__esModule ? e : { default: e };
                })(r),
                o = function o() {
                  (this.lastWallClockTime = Date.now()), this.on('before*', s);
                },
                s = function s(e) {
                  var t = Date.now(),
                    i = this.lastWallClockTime;
                  (this.lastWallClockTime = t),
                    3e4 < t - i &&
                      (this.emit('devicesleep', { viewer_time: i }),
                      (0, n.default)(this.data, { viewer_time: i }),
                      this.send('devicesleep'),
                      this.emit('devicewake', { viewer_time: t }),
                      (0, n.default)(this.data, { viewer_time: t }),
                      this.send('devicewake'));
                };
            },
            function (e, t, i) {
              'use strict';
              function a(e) {
                return e && e.__esModule ? e : { default: e };
              }
              Object.defineProperty(t, '__esModule', { value: !0 });
              var r =
                  'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                      }
                    : function (e) {
                        return e &&
                          'function' == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? 'symbol'
                          : typeof e;
                      },
                n = i(39),
                o = i(3),
                s = a(o),
                u = i(43),
                l = a(u),
                d = i(8),
                c = a(d),
                f = i(15),
                h = a(f),
                p = i(44),
                _ = a(p),
                v = i(46),
                m = a(v),
                y = i(0),
                b = a(y),
                g = [
                  'env_key',
                  'view_id',
                  'view_sequence_number',
                  'player_sequence_number',
                  'beacon_domain',
                  'player_playhead_time',
                  'viewer_time',
                  'mux_api_version',
                  'event',
                  'video_id',
                ],
                w = ['viewstart', 'error', 'ended', 'viewend'],
                x = function x(e, t, i, a) {
                  var r = 4 < arguments.length && void 0 !== arguments[4] && arguments[4];
                  (this.mux = e),
                    (this.envKey = t),
                    (this.eventQueue = new _.default((0, l.default)(t, i))),
                    (this.previousBeaconData = null),
                    (this.lastEventTime = null),
                    (this.sampleRate = a),
                    (this.disableCookies = r),
                    (this.pageLevelData = {
                      mux_api_version: this.mux.API_VERSION,
                      mux_embed_version: this.mux.VERSION,
                      page_url: window.location.href,
                      viewer_application_name: m.default.name,
                      viewer_application_version: m.default.version,
                      viewer_application_engine: m.default.layout,
                      viewer_device_name: m.default.product,
                      viewer_device_category: '',
                      viewer_device_manufacturer: m.default.manufacturer,
                      viewer_os_family: m.default.os && m.default.os.family,
                      viewer_os_architecture: m.default.os && m.default.os.architecture,
                      viewer_os_version: m.default.os && m.default.os.version,
                    }),
                    (this.viewerData = this.disableCookies ? {} : (0, n.getAndUpdateViewerData)());
                };
              (x.prototype.send = function (e, t) {
                if (e) {
                  if ((0, c.default)())
                    return s.default.info(
                      'Not sending `' + e + '` because Do Not Track is enabled in your browser'
                    );
                  if (!t || 'object' !== (void 0 === t ? 'undefined' : r(t)))
                    return s.default.error(
                      'A data object was expected in send() but was not provided'
                    );
                  var i = this.disableCookies ? {} : (0, n.getAndUpdateSessionData)(),
                    a = {};
                  (0, b.default)(a, this.pageLevelData),
                    (0, b.default)(a, t),
                    (0, b.default)(a, i),
                    (0, b.default)(a, this.viewerData),
                    (a.event = e),
                    (a.env_key = this.envKey),
                    a.user_id && ((a.viewer_user_id = a.user_id), delete a.user_id);
                  var o = a.mux_sample_number >= this.sampleRate,
                    u = this._deduplicateBeaconData(e, a),
                    l = (0, h.default)(u);
                  if (((this.lastEventTime = Date.now()), o))
                    return s.default.info(
                      'Not sending event due to sample rate restriction',
                      e,
                      a,
                      l
                    );
                  if (!this.envKey)
                    return s.default.info(
                      'Not sending event due to missing environment key',
                      e,
                      a,
                      l
                    );
                  if (!this.rateLimited)
                    if (
                      (s.default.info('Sending event', e, a, l),
                      (this.rateLimited = !this.eventQueue.queueEvent(e, l)),
                      this.mux.WINDOW_UNLOADING && 'viewend' === e)
                    )
                      this.eventQueue.destroy(!0);
                    else if ((0 <= w.indexOf(e) && this.eventQueue.flushEvents(), this.rateLimited))
                      return (
                        (a.event = 'eventrateexceeded'),
                        (l = (0, h.default)(a)),
                        this.eventQueue.queueEvent(a.event, l),
                        s.default.error('Beaconing disabled due to rate limit.')
                      );
                }
              }),
                (x.prototype.destroy = function () {
                  this.eventQueue.destroy(!1);
                });
              var S = function S(e, t, i, a) {
                return (
                  e &&
                  0 === t.indexOf('request_') &&
                  ('request_response_headers' === t ||
                    'object' !== (void 0 === i ? 'undefined' : r(i)) ||
                    'object' !== (void 0 === a ? 'undefined' : r(a)) ||
                    Object.keys(i || {}).length !== Object.keys(a || {}).length)
                );
              };
              (x.prototype._deduplicateBeaconData = function (e, t) {
                var i = this,
                  a = {},
                  r = t.view_id;
                if (
                  !r ||
                  'viewstart' === e ||
                  'viewend' === e ||
                  !this.previousBeaconData ||
                  6e5 <= Date.now() - this.lastEventTime
                )
                  (a = (0, b.default)({}, t)),
                    r && (this.previousBeaconData = a),
                    r && 'viewend' === e && (this.previousBeaconData = null);
                else {
                  var n = 0 === e.indexOf('request');
                  Object.keys(t).forEach(function (e) {
                    var r = t[e];
                    (r !== i.previousBeaconData[e] ||
                      -1 < g.indexOf(e) ||
                      S(n, e, r, i.previousBeaconData[e])) &&
                      ((a[e] = r), (i.previousBeaconData[e] = r));
                  });
                }
                return a;
              }),
                (t.default = x);
            },
            function (e, t, i) {
              'use strict';
              function a(e) {
                return e && e.__esModule ? e : { default: e };
              }
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.getAndUpdateSessionData = t.getAndUpdateViewerData = void 0);
              var r = i(12),
                n = a(r),
                o = i(42),
                s = a(o),
                u = i(5),
                l = function l() {
                  var e;
                  try {
                    e = n.default.parse(s.default.get('muxData') || '');
                  } catch (t) {
                    e = {};
                  }
                  return e;
                },
                d = function d(e) {
                  s.default.set('muxData', n.default.stringify(e), { expires: 7300 });
                },
                c = function c() {
                  var e = l();
                  return (
                    (e.mux_viewer_id = e.mux_viewer_id || (0, u.generateUUID)()),
                    (e.msn = e.msn || Math.random()),
                    d(e),
                    { mux_viewer_id: e.mux_viewer_id, mux_sample_number: e.msn }
                  );
                },
                f = function f() {
                  var e = l(),
                    t = Date.now();
                  return (
                    e.session_start && ((e.sst = e.session_start), delete e.session_start),
                    e.session_id && ((e.sid = e.session_id), delete e.session_id),
                    e.session_expires && ((e.sex = e.session_expires), delete e.session_expires),
                    (!e.sex || e.sex < t) && ((e.sid = (0, u.generateUUID)()), (e.sst = t)),
                    (e.sex = t + 15e5),
                    d(e),
                    { session_id: e.sid, session_start: e.sst, session_expires: e.sex }
                  );
                };
              (t.getAndUpdateViewerData = c), (t.getAndUpdateSessionData = f);
            },
            function (e, t, i) {
              'use strict';
              var a = i(13),
                r = i(14),
                n = {
                  brackets: function brackets(e) {
                    return e + '[]';
                  },
                  indices: function indices(e, t) {
                    return e + '[' + t + ']';
                  },
                  repeat: function repeat(e) {
                    return e;
                  },
                },
                o = Date.prototype.toISOString,
                s = {
                  delimiter: '&',
                  encode: !0,
                  encoder: a.encode,
                  encodeValuesOnly: !1,
                  serializeDate: function serializeDate(e) {
                    return o.call(e);
                  },
                  skipNulls: !1,
                  strictNullHandling: !1,
                },
                u = function e(t, i, r, n, o, u, l, d, c, f, h, p) {
                  var _ = t;
                  if ('function' == typeof l) _ = l(i, _);
                  else if (_ instanceof Date) _ = f(_);
                  else if (null === _) {
                    if (n) return u && !p ? u(i, s.encoder) : i;
                    _ = '';
                  }
                  if (
                    'string' == typeof _ ||
                    'number' == typeof _ ||
                    'boolean' == typeof _ ||
                    a.isBuffer(_)
                  )
                    return u
                      ? [h(p ? i : u(i, s.encoder)) + '=' + h(u(_, s.encoder))]
                      : [h(i) + '=' + h(_ + '')];
                  var v = [];
                  if (void 0 === _) return v;
                  var m;
                  if (Array.isArray(l)) m = l;
                  else {
                    var y = Object.keys(_);
                    m = d ? y.sort(d) : y;
                  }
                  for (var g, b = 0; b < m.length; ++b)
                    (g = m[b]),
                      (o && null === _[g]) ||
                        (v = Array.isArray(_)
                          ? v.concat(e(_[g], r(i, g), r, n, o, u, l, d, c, f, h, p))
                          : v.concat(
                              e(
                                _[g],
                                i + (c ? '.' + g : '[' + g + ']'),
                                r,
                                n,
                                o,
                                u,
                                l,
                                d,
                                c,
                                f,
                                h,
                                p
                              )
                            ));
                  return v;
                };
              e.exports = function (e, t) {
                var i = e,
                  o = t ? a.assign({}, t) : {};
                if (null !== o.encoder && void 0 !== o.encoder && 'function' != typeof o.encoder)
                  throw new TypeError('Encoder has to be a function.');
                var l = void 0 === o.delimiter ? s.delimiter : o.delimiter,
                  d =
                    'boolean' == typeof o.strictNullHandling
                      ? o.strictNullHandling
                      : s.strictNullHandling,
                  c = 'boolean' == typeof o.skipNulls ? o.skipNulls : s.skipNulls,
                  f = 'boolean' == typeof o.encode ? o.encode : s.encode,
                  h = 'function' == typeof o.encoder ? o.encoder : s.encoder,
                  p = 'function' == typeof o.sort ? o.sort : null,
                  _ = void 0 !== o.allowDots && o.allowDots,
                  v = 'function' == typeof o.serializeDate ? o.serializeDate : s.serializeDate,
                  m =
                    'boolean' == typeof o.encodeValuesOnly
                      ? o.encodeValuesOnly
                      : s.encodeValuesOnly;
                if (void 0 === o.format) o.format = r.default;
                else if (!Object.prototype.hasOwnProperty.call(r.formatters, o.format))
                  throw new TypeError('Unknown format option provided.');
                var y,
                  b,
                  g = r.formatters[o.format];
                'function' == typeof o.filter
                  ? ((b = o.filter), (i = b('', i)))
                  : Array.isArray(o.filter) && ((b = o.filter), (y = b));
                var w = [];
                if ('object' != typeof i || null === i) return '';
                var x;
                x =
                  o.arrayFormat in n
                    ? o.arrayFormat
                    : 'indices' in o
                    ? o.indices
                      ? 'indices'
                      : 'repeat'
                    : 'indices';
                var S = n[x];
                y || (y = Object.keys(i)), p && y.sort(p);
                for (var T, E = 0; E < y.length; ++E)
                  (T = y[E]),
                    (c && null === i[T]) ||
                      (w = w.concat(u(i[T], T, S, d, c, f ? h : null, b, p, _, v, g, m)));
                var O = w.join(l),
                  k = !0 === o.addQueryPrefix ? '?' : '';
                return 0 < O.length ? k + O : '';
              };
            },
            function (e, t, i) {
              'use strict';
              var a = i(13),
                r = Object.prototype.hasOwnProperty,
                n = {
                  allowDots: !1,
                  allowPrototypes: !1,
                  arrayLimit: 20,
                  decoder: a.decode,
                  delimiter: '&',
                  depth: 5,
                  parameterLimit: 1e3,
                  plainObjects: !1,
                  strictNullHandling: !1,
                },
                o = function o(e, t) {
                  for (
                    var i = {},
                      a = t.ignoreQueryPrefix ? e.replace(/^\?/, '') : e,
                      o = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit,
                      s = a.split(t.delimiter, o),
                      u = 0;
                    u < s.length;
                    ++u
                  ) {
                    var l,
                      d,
                      c = s[u],
                      f = c.indexOf(']='),
                      h = -1 === f ? c.indexOf('=') : f + 1;
                    -1 === h
                      ? ((l = t.decoder(c, n.decoder)), (d = t.strictNullHandling ? null : ''))
                      : ((l = t.decoder(c.slice(0, h), n.decoder)),
                        (d = t.decoder(c.slice(h + 1), n.decoder))),
                      (i[l] = r.call(i, l) ? [].concat(i[l]).concat(d) : d);
                  }
                  return i;
                },
                s = function s(e, t, i) {
                  for (var a = t, r = e.length - 1; 0 <= r; --r) {
                    var n,
                      o = e[r];
                    if ('[]' === o) (n = []), (n = n.concat(a));
                    else {
                      n = i.plainObjects ? Object.create(null) : {};
                      var s =
                          '[' === o.charAt(0) && ']' === o.charAt(o.length - 1)
                            ? o.slice(1, -1)
                            : o,
                        u = parseInt(s, 10);
                      !isNaN(u) &&
                      o !== s &&
                      u + '' === s &&
                      0 <= u &&
                      i.parseArrays &&
                      u <= i.arrayLimit
                        ? ((n = []), (n[u] = a))
                        : (n[s] = a);
                    }
                    a = n;
                  }
                  return a;
                },
                u = function u(e, t, i) {
                  if (e) {
                    var a = i.allowDots ? e.replace(/\.([^.[]+)/g, '[$1]') : e,
                      n = /(\[[^[\]]*])/,
                      o = /(\[[^[\]]*])/g,
                      u = n.exec(a),
                      l = u ? a.slice(0, u.index) : a,
                      d = [];
                    if (l) {
                      if (!i.plainObjects && r.call(Object.prototype, l) && !i.allowPrototypes)
                        return;
                      d.push(l);
                    }
                    for (var c = 0; null !== (u = o.exec(a)) && c < i.depth; ) {
                      if (
                        ((c += 1),
                        !i.plainObjects &&
                          r.call(Object.prototype, u[1].slice(1, -1)) &&
                          !i.allowPrototypes)
                      )
                        return;
                      d.push(u[1]);
                    }
                    return u && d.push('[' + a.slice(u.index) + ']'), s(d, t, i);
                  }
                };
              e.exports = function (e, t) {
                var i = t ? a.assign({}, t) : {};
                if (null !== i.decoder && void 0 !== i.decoder && 'function' != typeof i.decoder)
                  throw new TypeError('Decoder has to be a function.');
                if (
                  ((i.ignoreQueryPrefix = !0 === i.ignoreQueryPrefix),
                  (i.delimiter =
                    'string' == typeof i.delimiter || a.isRegExp(i.delimiter)
                      ? i.delimiter
                      : n.delimiter),
                  (i.depth = 'number' == typeof i.depth ? i.depth : n.depth),
                  (i.arrayLimit = 'number' == typeof i.arrayLimit ? i.arrayLimit : n.arrayLimit),
                  (i.parseArrays = !1 !== i.parseArrays),
                  (i.decoder = 'function' == typeof i.decoder ? i.decoder : n.decoder),
                  (i.allowDots = 'boolean' == typeof i.allowDots ? i.allowDots : n.allowDots),
                  (i.plainObjects =
                    'boolean' == typeof i.plainObjects ? i.plainObjects : n.plainObjects),
                  (i.allowPrototypes =
                    'boolean' == typeof i.allowPrototypes ? i.allowPrototypes : n.allowPrototypes),
                  (i.parameterLimit =
                    'number' == typeof i.parameterLimit ? i.parameterLimit : n.parameterLimit),
                  (i.strictNullHandling =
                    'boolean' == typeof i.strictNullHandling
                      ? i.strictNullHandling
                      : n.strictNullHandling),
                  '' === e || null === e || void 0 === e)
                )
                  return i.plainObjects ? Object.create(null) : {};
                for (
                  var r = 'string' == typeof e ? o(e, i) : e,
                    s = i.plainObjects ? Object.create(null) : {},
                    l = Object.keys(r),
                    d = 0;
                  d < l.length;
                  ++d
                ) {
                  var c = l[d],
                    f = u(c, r[c], i);
                  s = a.merge(s, f, i);
                }
                return a.compact(s);
              };
            },
            function (e, t, i) {
              'use strict';
              var a,
                r,
                n =
                  'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                      }
                    : function (e) {
                        return e &&
                          'function' == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? 'symbol'
                          : typeof e;
                      };
              !(function (o) {
                var s = !1;
                if (
                  ((a = o),
                  void 0 !== (r = 'function' == typeof a ? a.call(t, i, t, e) : a) &&
                    (e.exports = r),
                  (s = !0),
                  'object' === n(t) && ((e.exports = o()), (s = !0)),
                  !s)
                ) {
                  var u = window.Cookies,
                    l = (window.Cookies = o());
                  l.noConflict = function () {
                    return (window.Cookies = u), l;
                  };
                }
              })(function () {
                function e(i) {
                  function a(e, r, n) {
                    var o;
                    if ('undefined' != typeof document) {
                      if (1 < arguments.length) {
                        if (((n = t({ path: '/' }, a.defaults, n)), 'number' == typeof n.expires)) {
                          var s = new Date();
                          s.setMilliseconds(s.getMilliseconds() + 864e5 * n.expires),
                            (n.expires = s);
                        }
                        try {
                          (o = JSON.stringify(r)), /^[\{\[]/.test(o) && (r = o);
                        } catch (e) {}
                        return (
                          (r = i.write
                            ? i.write(r, e)
                            : encodeURIComponent(r + '').replace(
                                /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                                decodeURIComponent
                              )),
                          (e = encodeURIComponent(e + '')),
                          (e = e.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)),
                          (e = e.replace(/[\(\)]/g, escape)),
                          (document.cookie = [
                            e,
                            '=',
                            r,
                            n.expires ? '; expires=' + n.expires.toUTCString() : '',
                            n.path ? '; path=' + n.path : '',
                            n.domain ? '; domain=' + n.domain : '',
                            n.secure ? '; secure' : '',
                          ].join(''))
                        );
                      }
                      e || (o = {});
                      for (
                        var u = document.cookie ? document.cookie.split('; ') : [],
                          l = /(%[0-9A-Z]{2})+/g,
                          d = 0;
                        d < u.length;
                        d++
                      ) {
                        var c = u[d].split('='),
                          f = c.slice(1).join('=');
                        '"' === f.charAt(0) && (f = f.slice(1, -1));
                        try {
                          var h = c[0].replace(l, decodeURIComponent);
                          if (
                            ((f = i.read
                              ? i.read(f, h)
                              : i(f, h) || f.replace(l, decodeURIComponent)),
                            this.json)
                          )
                            try {
                              f = JSON.parse(f);
                            } catch (e) {}
                          if (e === h) {
                            o = f;
                            break;
                          }
                          e || (o[h] = f);
                        } catch (e) {}
                      }
                      return o;
                    }
                  }
                  return (
                    (a.set = a),
                    (a.get = function (e) {
                      return a.call(a, e);
                    }),
                    (a.getJSON = function () {
                      return a.apply({ json: !0 }, [].slice.call(arguments));
                    }),
                    (a.defaults = {}),
                    (a.remove = function (e, i) {
                      a(e, '', t(i, { expires: -1 }));
                    }),
                    (a.withConverter = e),
                    a
                  );
                }
                var t = function t() {
                  for (var i, e = 0, t = {}; e < arguments.length; e++)
                    for (var a in ((i = arguments[e]), i)) t[a] = i[a];
                  return t;
                };
                return e(function () {});
              });
            },
            function (e, t, i) {
              'use strict';
              function a(e, t) {
                return (
                  (e = e || ''),
                  (t = t || 'litix.io'),
                  e.match(/^[a-z0-9]+$/) ? 'https://' + e + '.' + t : 'https://img.litix.io/a.gif'
                );
              }
              Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = a);
            },
            function (e, t, i) {
              'use strict';
              function a(e) {
                return e && e.__esModule ? e : { default: e };
              }
              Object.defineProperty(t, '__esModule', { value: !0 });
              var r = i(2),
                n = a(r),
                o = i(3),
                s = a(o),
                u = i(45),
                l = a(u),
                d = i(0),
                c = a(d),
                f = i(15),
                h = a(f),
                p =
                  !!n.default.XMLHttpRequest && 'withCredentials' in new n.default.XMLHttpRequest(),
                _ = { maxBeaconSize: 300, maxQueueLength: 3600, baseTimeBetweenBeacons: 5e3 },
                v = function v(e, t) {
                  (this._beaconUrl = e || 'https://img.litix.io'),
                    (this._eventQueue = []),
                    (this._postInFlight = !1),
                    (this._failureCount = 0),
                    (this._sendTimeout = !1),
                    (this._options = (0, c.default)({}, _, t));
                };
              (v.prototype.queueEvent = function (e, t) {
                var i = (0, c.default)({}, t);
                return p
                  ? (this._eventQueue.length <= this._options.maxQueueLength ||
                      'eventrateexceeded' === e) &&
                      (this._eventQueue.push(i),
                      this._sendTimeout || this._startBeaconSending(),
                      this._eventQueue.length <= this._options.maxQueueLength)
                  : (l.default.send(this._beaconUrl, i), !0);
              }),
                (v.prototype.flushEvents = function () {
                  p &&
                    (this._eventQueue.length && this._sendBeaconQueue(),
                    this._startBeaconSending());
                }),
                (v.prototype.destroy = function () {
                  var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                  (this.destroyed = !0),
                    e ? this._clearBeaconQueue() : this.flushEvents(),
                    n.default.clearTimeout(this._sendTimeout);
                }),
                (v.prototype._clearBeaconQueue = function () {
                  var e = n.default.navigator,
                    t =
                      this._eventQueue.length > this._options.maxBeaconSize
                        ? this._eventQueue.length - this._options.maxBeaconSize
                        : 0,
                    i = this._eventQueue.slice(t);
                  if (
                    (0 < t &&
                      (0, c.default)(
                        i[i.length - 1],
                        (0, h.default)({ mux_view_message: 'event queue truncated' })
                      ),
                    e.sendBeacon)
                  )
                    e.sendBeacon(this._beaconUrl, JSON.stringify({ events: i }));
                  else if (n.default.XMLHttpRequest) {
                    var a = new n.default.XMLHttpRequest();
                    a.open('POST', this._beaconUrl),
                      a.setRequestHeader('Content-Type', 'application/json'),
                      a.send(JSON.stringify({ events: i }));
                  } else l.default.send(this._beaconUrl, i[i.length - 1]);
                }),
                (v.prototype._sendBeaconQueue = function () {
                  var e = this;
                  if (n.default.XMLHttpRequest && !this._postInFlight) {
                    var t = new n.default.XMLHttpRequest(),
                      i = this._eventQueue.slice(0, this._options.maxBeaconSize);
                    (this._eventQueue = this._eventQueue.slice(this._options.maxBeaconSize)),
                      (this._postInFlight = !0),
                      (t.onreadystatechange = function () {
                        4 === t.readyState &&
                          (200 === t.status
                            ? (e._failureCount = 0)
                            : ((e._eventQueue = i.concat(e._eventQueue)),
                              (e._failureCount += 1),
                              s.default.info('Error sending beacon: ' + t.status),
                              s.default.info(t.responseText)),
                          (e._postInFlight = !1));
                      }),
                      t.open('POST', this._beaconUrl),
                      t.setRequestHeader('Content-Type', 'application/json'),
                      t.send(JSON.stringify({ events: i }));
                  }
                }),
                (v.prototype._getNextBeaconTime = function () {
                  if (!this._failureCount) return this._options.baseTimeBetweenBeacons;
                  var e = Math.pow(2, this._failureCount - 1);
                  return (1 + (e *= Math.random())) * this._options.baseTimeBetweenBeacons;
                }),
                (v.prototype._startBeaconSending = function () {
                  var e = this;
                  n.default.clearTimeout(this._sendTimeout),
                    this.destroyed ||
                      (this._sendTimeout = n.default.setTimeout(function () {
                        e._eventQueue.length && e._sendBeaconQueue(), e._startBeaconSending();
                      }, this._getNextBeaconTime()));
                }),
                (t.default = v);
            },
            function (e, t, i) {
              'use strict';
              function a(e) {
                return e && e.__esModule ? e : { default: e };
              }
              Object.defineProperty(t, '__esModule', { value: !0 });
              var r = i(12),
                n = a(r),
                o = i(2),
                s = a(o),
                u = {};
              (u.send = function (e, t) {
                function i() {
                  a.src = o + (r ? '&rc=' + r : '');
                }
                var a = new Image(),
                  r = 0,
                  o = e + '?' + n.default.stringify(t);
                return (
                  a.addEventListener('error', function () {
                    3 < r ||
                      s.default.setTimeout(function () {
                        r++, i();
                      }, 5e3 * r);
                  }),
                  i(),
                  a
                );
              }),
                (t.default = u);
            },
            function (e, t, i) {
              (function (e, a) {
                var r;
                (function () {
                  'use strict';
                  function n(e) {
                    return (e = e + ''), e.charAt(0).toUpperCase() + e.slice(1);
                  }
                  function o(e, t, i) {
                    var a = {
                      '10.0': '10',
                      '6.4': '10 Technical Preview',
                      '6.3': '8.1',
                      '6.2': '8',
                      '6.1': 'Server 2008 R2 / 7',
                      '6.0': 'Server 2008 / Vista',
                      '5.2': 'Server 2003 / XP 64-bit',
                      '5.1': 'XP',
                      '5.01': '2000 SP1',
                      '5.0': '2000',
                      '4.0': 'NT',
                      '4.90': 'ME',
                    };
                    return (
                      t &&
                        i &&
                        /^Win/i.test(e) &&
                        !/^Windows Phone /i.test(e) &&
                        (a = a[/[\d.]+$/.exec(e)]) &&
                        (e = 'Windows ' + a),
                      (e = e + ''),
                      t && i && (e = e.replace(RegExp(t, 'i'), i)),
                      (e = u(
                        e
                          .replace(/ ce$/i, ' CE')
                          .replace(/\bhpw/i, 'web')
                          .replace(/\bMacintosh\b/, 'Mac OS')
                          .replace(/_PowerPC\b/i, ' OS')
                          .replace(/\b(OS X) [^ \d]+/i, '$1')
                          .replace(/\bMac (OS X)\b/, '$1')
                          .replace(/\/(\d)/, ' $1')
                          .replace(/_/g, '.')
                          .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, '')
                          .replace(/\bx86\.64\b/gi, 'x86_64')
                          .replace(/\b(Windows Phone) OS\b/, '$1')
                          .replace(/\b(Chrome OS \w+) [\d.]+\b/, '$1')
                          .split(' on ')[0]
                      ))
                    );
                  }
                  function s(e, t) {
                    var i = -1,
                      a = e ? e.length : 0;
                    if ('number' == typeof a && -1 < a && a <= x) for (; ++i < a; ) t(e[i], i, e);
                    else l(e, t);
                  }
                  function u(e) {
                    return (e = p(e)), /^(?:webOS|i(?:OS|P))/.test(e) ? e : n(e);
                  }
                  function l(e, t) {
                    for (var i in e) O.call(e, i) && t(e[i], i, e);
                  }
                  function d(e) {
                    return null == e ? n(e) : k.call(e).slice(8, -1);
                  }
                  function c(e, t) {
                    var i = null == e ? 'number' : typeof e[t];
                    return (
                      !/^(?:boolean|number|string|undefined)$/.test(i) && ('object' != i || e[t])
                    );
                  }
                  function f(e) {
                    return (e + '').replace(/([ -])(?!$)/g, '$1?');
                  }
                  function h(e, t) {
                    var i = null;
                    return (
                      s(e, function (a, r) {
                        i = t(i, a, r, e);
                      }),
                      i
                    );
                  }
                  function p(e) {
                    return (e + '').replace(/^ +| +$/g, '');
                  }
                  function _(e) {
                    function t(t) {
                      return h(t, function (t, i) {
                        var a = i.pattern || f(i);
                        return (
                          !t &&
                            (t =
                              RegExp('\\b' + a + ' *\\d+[.\\w_]*', 'i').exec(e) ||
                              RegExp('\\b' + a + ' *\\w+-[\\w]*', 'i').exec(e) ||
                              RegExp(
                                '\\b' + a + '(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)',
                                'i'
                              ).exec(e)) &&
                            ((t = (
                              (i.label && !RegExp(a, 'i').test(i.label) ? i.label : t) + ''
                            ).split('/'))[1] &&
                              !/[\d.]+/.test(t[0]) &&
                              (t[0] += ' ' + t[1]),
                            (i = i.label || i),
                            (t = u(
                              t[0]
                                .replace(RegExp(a, 'i'), i)
                                .replace(RegExp('; *(?:' + i + '[_-])?', 'i'), ' ')
                                .replace(RegExp('(' + i + ')[-_.]?(\\w)', 'i'), '$1 $2')
                            ))),
                          t
                        );
                      });
                    }
                    function i() {
                      return this.description || '';
                    }
                    var a = m,
                      r = e && 'object' == typeof e && 'String' != d(e);
                    r && ((a = e), (e = null));
                    var n = a.navigator || {},
                      s = n.userAgent || '';
                    e || (e = s);
                    var v,
                      b,
                      g = r || E == y,
                      w = r
                        ? !!n.likeChrome
                        : /\bChrome\b/.test(e) && !/internal|\n/i.test(k.toString()),
                      x = r ? 'Object' : 'ScriptBridgingProxyObject',
                      T = r ? 'Object' : 'Environment',
                      O = r && a.java ? 'JavaPackage' : d(a.java),
                      P = r ? 'Object' : 'RuntimeObject',
                      D = /\bJava/.test(O) && a.java,
                      A = D && d(a.environment) == T,
                      M = D ? 'a' : '\u03B1',
                      R = D ? 'b' : '\u03B2',
                      j = a.document || {},
                      L = a.operamini || a.opera,
                      I = S.test((I = r && L ? L['[[Class]]'] : d(L))) ? I : (L = null),
                      q = e,
                      C = [],
                      N = null,
                      B = e == s,
                      F = B && L && 'function' == typeof L.version && L.version(),
                      H = (function (t) {
                        return h(t, function (t, i) {
                          return (
                            t ||
                            (RegExp('\\b' + (i.pattern || f(i)) + '\\b', 'i').exec(e) &&
                              (i.label || i))
                          );
                        });
                      })([
                        { label: 'EdgeHTML', pattern: 'Edge' },
                        'Trident',
                        { label: 'WebKit', pattern: 'AppleWebKit' },
                        'iCab',
                        'Presto',
                        'NetFront',
                        'Tasman',
                        'KHTML',
                        'Gecko',
                      ]),
                      G = (function (t) {
                        return h(t, function (t, i) {
                          return (
                            t ||
                            (RegExp('\\b' + (i.pattern || f(i)) + '\\b', 'i').exec(e) &&
                              (i.label || i))
                          );
                        });
                      })([
                        'Adobe AIR',
                        'Arora',
                        'Avant Browser',
                        'Breach',
                        'Camino',
                        'Electron',
                        'Epiphany',
                        'Fennec',
                        'Flock',
                        'Galeon',
                        'GreenBrowser',
                        'iCab',
                        'Iceweasel',
                        'K-Meleon',
                        'Konqueror',
                        'Lunascape',
                        'Maxthon',
                        { label: 'Microsoft Edge', pattern: 'Edge' },
                        'Midori',
                        'Nook Browser',
                        'PaleMoon',
                        'PhantomJS',
                        'Raven',
                        'Rekonq',
                        'RockMelt',
                        { label: 'Samsung Internet', pattern: 'SamsungBrowser' },
                        'SeaMonkey',
                        { label: 'Silk', pattern: '(?:Cloud9|Silk-Accelerated)' },
                        'Sleipnir',
                        'SlimBrowser',
                        { label: 'SRWare Iron', pattern: 'Iron' },
                        'Sunrise',
                        'Swiftfox',
                        'Waterfox',
                        'WebPositive',
                        'Opera Mini',
                        { label: 'Opera Mini', pattern: 'OPiOS' },
                        'Opera',
                        { label: 'Opera', pattern: 'OPR' },
                        'Chrome',
                        { label: 'Chrome Mobile', pattern: '(?:CriOS|CrMo)' },
                        { label: 'Firefox', pattern: '(?:Firefox|Minefield)' },
                        { label: 'Firefox for iOS', pattern: 'FxiOS' },
                        { label: 'IE', pattern: 'IEMobile' },
                        { label: 'IE', pattern: 'MSIE' },
                        'Safari',
                      ]),
                      U = t([
                        { label: 'BlackBerry', pattern: 'BB10' },
                        'BlackBerry',
                        { label: 'Galaxy S', pattern: 'GT-I9000' },
                        { label: 'Galaxy S2', pattern: 'GT-I9100' },
                        { label: 'Galaxy S3', pattern: 'GT-I9300' },
                        { label: 'Galaxy S4', pattern: 'GT-I9500' },
                        { label: 'Galaxy S5', pattern: 'SM-G900' },
                        { label: 'Galaxy S6', pattern: 'SM-G920' },
                        { label: 'Galaxy S6 Edge', pattern: 'SM-G925' },
                        { label: 'Galaxy S7', pattern: 'SM-G930' },
                        { label: 'Galaxy S7 Edge', pattern: 'SM-G935' },
                        'Google TV',
                        'Lumia',
                        'iPad',
                        'iPod',
                        'iPhone',
                        'Kindle',
                        { label: 'Kindle Fire', pattern: '(?:Cloud9|Silk-Accelerated)' },
                        'Nexus',
                        'Nook',
                        'PlayBook',
                        'PlayStation Vita',
                        'PlayStation',
                        'TouchPad',
                        'Transformer',
                        { label: 'Wii U', pattern: 'WiiU' },
                        'Wii',
                        'Xbox One',
                        { label: 'Xbox 360', pattern: 'Xbox' },
                        'Xoom',
                      ]),
                      W = (function (t) {
                        return h(t, function (t, i, a) {
                          return (
                            t ||
                            ((i[U] ||
                              i[/^[a-z]+(?: +[a-z]+\b)*/i.exec(U)] ||
                              RegExp('\\b' + f(a) + '(?:\\b|\\w*\\d)', 'i').exec(e)) &&
                              a)
                          );
                        });
                      })({
                        'Apple': { iPad: 1, iPhone: 1, iPod: 1 },
                        'Archos': {},
                        'Amazon': { 'Kindle': 1, 'Kindle Fire': 1 },
                        'Asus': { Transformer: 1 },
                        'Barnes & Noble': { Nook: 1 },
                        'BlackBerry': { PlayBook: 1 },
                        'Google': { 'Google TV': 1, 'Nexus': 1 },
                        'HP': { TouchPad: 1 },
                        'HTC': {},
                        'LG': {},
                        'Microsoft': { 'Xbox': 1, 'Xbox One': 1 },
                        'Motorola': { Xoom: 1 },
                        'Nintendo': { 'Wii U': 1, 'Wii': 1 },
                        'Nokia': { Lumia: 1 },
                        'Samsung': {
                          'Galaxy S': 1,
                          'Galaxy S2': 1,
                          'Galaxy S3': 1,
                          'Galaxy S4': 1,
                        },
                        'Sony': { 'PlayStation': 1, 'PlayStation Vita': 1 },
                      }),
                      V = (function (t) {
                        return h(t, function (t, i) {
                          var a = i.pattern || f(i);
                          return (
                            !t &&
                              (t = RegExp('\\b' + a + '(?:/[\\d.]+|[ \\w.]*)', 'i').exec(e)) &&
                              (t = o(t, a, i.label || i)),
                            t
                          );
                        });
                      })([
                        'Windows Phone',
                        'Android',
                        'CentOS',
                        { label: 'Chrome OS', pattern: 'CrOS' },
                        'Debian',
                        'Fedora',
                        'FreeBSD',
                        'Gentoo',
                        'Haiku',
                        'Kubuntu',
                        'Linux Mint',
                        'OpenBSD',
                        'Red Hat',
                        'SuSE',
                        'Ubuntu',
                        'Xubuntu',
                        'Cygwin',
                        'Symbian OS',
                        'hpwOS',
                        'webOS ',
                        'webOS',
                        'Tablet OS',
                        'Tizen',
                        'Linux',
                        'Mac OS X',
                        'Macintosh',
                        'Mac',
                        'Windows 98;',
                        'Windows ',
                      ]);
                    if (
                      (H && (H = [H]),
                      W && !U && (U = t([W])),
                      (v = /\bGoogle TV\b/.exec(U)) && (U = v[0]),
                      /\bSimulator\b/i.test(e) && (U = (U ? U + ' ' : '') + 'Simulator'),
                      'Opera Mini' == G &&
                        /\bOPiOS\b/.test(e) &&
                        C.push('running in Turbo/Uncompressed mode'),
                      'IE' == G && /\blike iPhone OS\b/.test(e)
                        ? ((v = _(e.replace(/like iPhone OS/, ''))),
                          (W = v.manufacturer),
                          (U = v.product))
                        : /^iP/.test(U)
                        ? (G || (G = 'Safari'),
                          (V =
                            'iOS' +
                            ((v = / OS ([\d_]+)/i.exec(e)) ? ' ' + v[1].replace(/_/g, '.') : '')))
                        : 'Konqueror' != G || /buntu/i.test(V)
                        ? (W &&
                            'Google' != W &&
                            ((/Chrome/.test(G) && !/\bMobile Safari\b/i.test(e)) ||
                              /\bVita\b/.test(U))) ||
                          (/\bAndroid\b/.test(V) && /^Chrome/.test(G) && /\bVersion\//i.test(e))
                          ? ((G = 'Android Browser'), (V = /\bAndroid\b/.test(V) ? V : 'Android'))
                          : 'Silk' == G
                          ? (/\bMobi/i.test(e) || ((V = 'Android'), C.unshift('desktop mode')),
                            /Accelerated *= *true/i.test(e) && C.unshift('accelerated'))
                          : 'PaleMoon' == G && (v = /\bFirefox\/([\d.]+)\b/.exec(e))
                          ? C.push('identifying as Firefox ' + v[1])
                          : 'Firefox' == G && (v = /\b(Mobile|Tablet|TV)\b/i.exec(e))
                          ? (V || (V = 'Firefox OS'), U || (U = v[1]))
                          : !G ||
                            (v = !/\bMinefield\b/i.test(e) && /\b(?:Firefox|Safari)\b/.exec(G))
                          ? (G &&
                              !U &&
                              /[\/,]|^[^(]+?\)/.test(e.slice(e.indexOf(v + '/') + 8)) &&
                              (G = null),
                            (v = U || W || V) &&
                              (U || W || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(V)) &&
                              (G =
                                /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(V) ? V : v) +
                                ' Browser'))
                          : 'Electron' == G &&
                            (v = (/\bChrome\/([\d.]+)\b/.exec(e) || 0)[1]) &&
                            C.push('Chromium ' + v)
                        : (V = 'Kubuntu'),
                      F ||
                        (F = (function (t) {
                          return h(t, function (t, i) {
                            return (
                              t ||
                              (RegExp(
                                i + '(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)',
                                'i'
                              ).exec(e) || 0)[1] ||
                              null
                            );
                          });
                        })([
                          '(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))',
                          'Version',
                          f(G),
                          '(?:Firefox|Minefield|NetFront)',
                        ])),
                      (v =
                        ('iCab' == H && 3 < parseFloat(F) && 'WebKit') ||
                        (/\bOpera\b/.test(G) && (/\bOPR\b/.test(e) ? 'Blink' : 'Presto')) ||
                        (/\b(?:Midori|Nook|Safari)\b/i.test(e) &&
                          !/^(?:Trident|EdgeHTML)$/.test(H) &&
                          'WebKit') ||
                        (!H && /\bMSIE\b/i.test(e) && ('Mac OS' == V ? 'Tasman' : 'Trident')) ||
                        ('WebKit' == H && /\bPlayStation\b(?! Vita\b)/i.test(G) && 'NetFront')) &&
                        (H = [v]),
                      'IE' == G && (v = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(e) || 0)[1])
                        ? ((G += ' Mobile'),
                          (V = 'Windows Phone ' + (/\+$/.test(v) ? v : v + '.x')),
                          C.unshift('desktop mode'))
                        : /\bWPDesktop\b/i.test(e)
                        ? ((G = 'IE Mobile'),
                          (V = 'Windows Phone 8.x'),
                          C.unshift('desktop mode'),
                          F || (F = (/\brv:([\d.]+)/.exec(e) || 0)[1]))
                        : 'IE' != G &&
                          'Trident' == H &&
                          (v = /\brv:([\d.]+)/.exec(e)) &&
                          (G && C.push('identifying as ' + G + (F ? ' ' + F : '')),
                          (G = 'IE'),
                          (F = v[1])),
                      B)
                    ) {
                      if (!c(a, 'global'))
                        d((v = a.runtime)) == x
                          ? ((G = 'Adobe AIR'), (V = v.flash.system.Capabilities.os))
                          : d((v = a.phantom)) == P
                          ? ((G = 'PhantomJS'),
                            (F =
                              (v = v.version || null) && v.major + '.' + v.minor + '.' + v.patch))
                          : 'number' == typeof j.documentMode && (v = /\bTrident\/(\d+)/i.exec(e))
                          ? ((F = [F, j.documentMode]),
                            (v = +v[1] + 4) != F[1] &&
                              (C.push('IE ' + F[1] + ' mode'), H && (H[1] = ''), (F[1] = v)),
                            (F = 'IE' == G ? F[1].toFixed(1) + '' : F[0]))
                          : 'number' == typeof j.documentMode &&
                            /^(?:Chrome|Firefox)\b/.test(G) &&
                            (C.push('masking as ' + G + ' ' + F),
                            (G = 'IE'),
                            (F = '11.0'),
                            (H = ['Trident']),
                            (V = 'Windows'));
                      else if (
                        (D &&
                          ((v = D.lang.System),
                          (q = v.getProperty('os.arch')),
                          (V = V || v.getProperty('os.name') + ' ' + v.getProperty('os.version'))),
                        g && c(a, 'system') && (v = [a.system])[0])
                      ) {
                        V || (V = v[0].os || null);
                        try {
                          (v[1] = a.require('ringo/engine').version),
                            (F = v[1].join('.')),
                            (G = 'RingoJS');
                        } catch (e) {
                          v[0].global.system == a.system && (G = 'Narwhal');
                        }
                      } else
                        'object' == typeof a.process && !a.process.browser && (v = a.process)
                          ? 'object' == typeof v.versions
                            ? 'string' == typeof v.versions.electron
                              ? (C.push('Node ' + v.versions.node),
                                (G = 'Electron'),
                                (F = v.versions.electron))
                              : 'string' == typeof v.versions.nw &&
                                (C.push('Chromium ' + F, 'Node ' + v.versions.node),
                                (G = 'NW.js'),
                                (F = v.versions.nw))
                            : ((G = 'Node.js'),
                              (q = v.arch),
                              (V = v.platform),
                              (F = /[\d.]+/.exec(v.version)),
                              (F = F ? F[0] : 'unknown'))
                          : A && (G = 'Rhino');
                      V = V && u(V);
                    }
                    if (
                      (F &&
                        (v =
                          /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(F) ||
                          /(?:alpha|beta)(?: ?\d)?/i.exec(e + ';' + (B && n.appMinorVersion)) ||
                          (/\bMinefield\b/i.test(e) && 'a')) &&
                        ((N = /b/i.test(v) ? 'beta' : 'alpha'),
                        (F =
                          F.replace(RegExp(v + '\\+?$'), '') +
                          ('beta' == N ? R : M) +
                          (/\d+\+?/.exec(v) || ''))),
                      'Fennec' == G || ('Firefox' == G && /\b(?:Android|Firefox OS)\b/.test(V)))
                    )
                      G = 'Firefox Mobile';
                    else if ('Maxthon' == G && F) F = F.replace(/\.[\d.]+/, '.x');
                    else if (/\bXbox\b/i.test(U))
                      'Xbox 360' == U && (V = null),
                        'Xbox 360' == U && /\bIEMobile\b/.test(e) && C.unshift('mobile mode');
                    else if (
                      (/^(?:Chrome|IE|Opera)$/.test(G) || (G && !U && !/Browser|Mobi/.test(G))) &&
                      ('Windows CE' == V || /Mobi/i.test(e))
                    )
                      G += ' Mobile';
                    else if ('IE' == G && B)
                      try {
                        null === a.external && C.unshift('platform preview');
                      } catch (e) {
                        C.unshift('embedded');
                      }
                    else
                      (/\bBlackBerry\b/.test(U) || /\bBB10\b/.test(e)) &&
                      (v =
                        (RegExp(U.replace(/ +/g, ' *') + '/([.\\d]+)', 'i').exec(e) || 0)[1] || F)
                        ? ((v = [v, /BB10/.test(e)]),
                          (V =
                            (v[1] ? ((U = null), (W = 'BlackBerry')) : 'Device Software') +
                            ' ' +
                            v[0]),
                          (F = null))
                        : this != l &&
                          'Wii' != U &&
                          ((B && L) ||
                            (/Opera/.test(G) && /\b(?:MSIE|Firefox)\b/i.test(e)) ||
                            ('Firefox' == G && /\bOS X (?:\d+\.){2,}/.test(V)) ||
                            ('IE' == G &&
                              ((V && !/^Win/.test(V) && 5.5 < F) ||
                                (/\bWindows XP\b/.test(V) && 8 < F) ||
                                (8 == F && !/\bTrident\b/.test(e))))) &&
                          !S.test((v = _.call(l, e.replace(S, '') + ';'))) &&
                          v.name &&
                          ((v = 'ing as ' + v.name + ((v = v.version) ? ' ' + v : '')),
                          S.test(G)
                            ? (/\bIE\b/.test(v) && 'Mac OS' == V && (V = null),
                              (v = 'identify' + v))
                            : ((v = 'mask' + v),
                              (G = I ? u(I.replace(/([a-z])([A-Z])/g, '$1 $2')) : 'Opera'),
                              /\bIE\b/.test(v) && (V = null),
                              B || (F = null)),
                          (H = ['Presto']),
                          C.push(v));
                    (v = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(e) || 0)[1]) &&
                      ((v = [parseFloat(v.replace(/\.(\d)$/, '.0$1')), v]),
                      'Safari' == G && '+' == v[1].slice(-1)
                        ? ((G = 'WebKit Nightly'), (N = 'alpha'), (F = v[1].slice(0, -1)))
                        : (F != v[1] && F != (v[2] = (/\bSafari\/([\d.]+\+?)/i.exec(e) || 0)[1])) ||
                          (F = null),
                      (v[1] = (/\bChrome\/([\d.]+)/i.exec(e) || 0)[1]),
                      537.36 == v[0] &&
                        537.36 == v[2] &&
                        28 <= parseFloat(v[1]) &&
                        'WebKit' == H &&
                        (H = ['Blink']),
                      B && (w || v[1])
                        ? (H && (H[1] = 'like Chrome'),
                          (v =
                            v[1] ||
                            ((v = v[0]),
                            530 > v
                              ? 1
                              : 532 > v
                              ? 2
                              : 532.05 > v
                              ? 3
                              : 533 > v
                              ? 4
                              : 534.03 > v
                              ? 5
                              : 534.07 > v
                              ? 6
                              : 534.1 > v
                              ? 7
                              : 534.13 > v
                              ? 8
                              : 534.16 > v
                              ? 9
                              : 534.24 > v
                              ? 10
                              : 534.3 > v
                              ? 11
                              : 535.01 > v
                              ? 12
                              : 535.02 > v
                              ? '13+'
                              : 535.07 > v
                              ? 15
                              : 535.11 > v
                              ? 16
                              : 535.19 > v
                              ? 17
                              : 536.05 > v
                              ? 18
                              : 536.1 > v
                              ? 19
                              : 537.01 > v
                              ? 20
                              : 537.11 > v
                              ? '21+'
                              : 537.13 > v
                              ? 23
                              : 537.18 > v
                              ? 24
                              : 537.24 > v
                              ? 25
                              : 537.36 > v
                              ? 26
                              : 'Blink' == H
                              ? '28'
                              : '27')))
                        : (H && (H[1] = 'like Safari'),
                          (v = v[0]),
                          (v =
                            400 > v
                              ? 1
                              : 500 > v
                              ? 2
                              : 526 > v
                              ? 3
                              : 533 > v
                              ? 4
                              : 534 > v
                              ? '4+'
                              : 535 > v
                              ? 5
                              : 537 > v
                              ? 6
                              : 538 > v
                              ? 7
                              : 601 > v
                              ? 8
                              : '8')),
                      H &&
                        (H[1] +=
                          ' ' + (v += 'number' == typeof v ? '.x' : /[.+]/.test(v) ? '' : '+')),
                      'Safari' == G && (!F || 45 < parseInt(F)) && (F = v)),
                      'Opera' == G && (v = /\bzbov|zvav$/.exec(V))
                        ? ((G += ' '),
                          C.unshift('desktop mode'),
                          'zvav' == v ? ((G += 'Mini'), (F = null)) : (G += 'Mobile'),
                          (V = V.replace(RegExp(' *' + v + '$'), '')))
                        : 'Safari' == G &&
                          /\bChrome\b/.exec(H && H[1]) &&
                          (C.unshift('desktop mode'),
                          (G = 'Chrome Mobile'),
                          (F = null),
                          /\bOS X\b/.test(V) ? ((W = 'Apple'), (V = 'iOS 4.3+')) : (V = null)),
                      F &&
                        0 == F.indexOf((v = /[\d.]+$/.exec(V))) &&
                        -1 < e.indexOf('/' + v + '-') &&
                        (V = p(V.replace(v, ''))),
                      H &&
                        !/\b(?:Avant|Nook)\b/.test(G) &&
                        (/Browser|Lunascape|Maxthon/.test(G) ||
                          ('Safari' != G && /^iOS/.test(V) && /\bSafari\b/.test(H[1])) ||
                          (/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(
                            G
                          ) &&
                            H[1])) &&
                        (v = H[H.length - 1]) &&
                        C.push(v),
                      C.length && (C = ['(' + C.join('; ') + ')']),
                      W && U && 0 > U.indexOf(W) && C.push('on ' + W),
                      U && C.push((/^on /.test(C[C.length - 1]) ? '' : 'on ') + U),
                      V &&
                        ((v = / ([\d.+]+)$/.exec(V)),
                        (b = v && '/' == V.charAt(V.length - v[0].length - 1)),
                        (V = {
                          architecture: 32,
                          family: v && !b ? V.replace(v[0], '') : V,
                          version: v ? v[1] : null,
                          toString: function toString() {
                            var e = this.version;
                            return (
                              this.family +
                              (e && !b ? ' ' + e : '') +
                              (64 == this.architecture ? ' 64-bit' : '')
                            );
                          },
                        })),
                      (v = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(q)) && !/\bi686\b/i.test(q)
                        ? (V &&
                            ((V.architecture = 64),
                            (V.family = V.family.replace(RegExp(' *' + v), ''))),
                          G &&
                            (/\bWOW64\b/i.test(e) ||
                              (B &&
                                /\w(?:86|32)$/.test(n.cpuClass || n.platform) &&
                                !/\bWin64; x64\b/i.test(e))) &&
                            C.unshift('32-bit'))
                        : V &&
                          /^OS X/.test(V.family) &&
                          'Chrome' == G &&
                          39 <= parseFloat(F) &&
                          (V.architecture = 64),
                      e || (e = null);
                    var J = {};
                    return (
                      (J.description = e),
                      (J.layout = H && H[0]),
                      (J.manufacturer = W),
                      (J.name = G),
                      (J.prerelease = N),
                      (J.product = U),
                      (J.ua = e),
                      (J.version = G && F),
                      (J.os = V || {
                        architecture: null,
                        family: null,
                        version: null,
                        toString: function toString() {
                          return 'null';
                        },
                      }),
                      (J.parse = _),
                      (J.toString = i),
                      J.version && C.unshift(F),
                      J.name && C.unshift(G),
                      V &&
                        G &&
                        (V != (V + '').split(' ')[0] || (V != G.split(' ')[0] && !U)) &&
                        C.push(U ? '(' + V + ')' : 'on ' + V),
                      C.length && (J.description = C.join(' ')),
                      J
                    );
                  }
                  var v = { function: !0, object: !0 },
                    m = (v[typeof window] && window) || this,
                    y = m,
                    b = v[typeof t] && t,
                    g = v[typeof e] && e && !e.nodeType && e,
                    w = b && g && 'object' == typeof a && a;
                  w && (w.global === w || w.window === w || w.self === w) && (m = w);
                  var x = Math.pow(2, 53) - 1,
                    S = /\bOpera/,
                    E = this,
                    T = Object.prototype,
                    O = T.hasOwnProperty,
                    k = T.toString,
                    P = _();
                  (m.platform = P),
                    void 0 !==
                      (r = function () {
                        return P;
                      }.call(t, i, t, e)) && (e.exports = r);
                }.call(this));
              }.call(t, i(10)(e), i(4)));
            },
            function (e, t, i) {
              'use strict';
              function a() {
                function e(e, t) {
                  o++;
                  var i = t.request_start,
                    u = t.request_response_start,
                    l = t.request_response_end,
                    d = t.request_bytes_loaded,
                    c = u - i,
                    f = l - u;
                  if (0 < c && 0 < f && 0 < d) {
                    var h = 8e3 * (d / f);
                    s++,
                      (a += c),
                      (r += d),
                      (n += f),
                      (this.data.view_min_request_throughput = Math.min(
                        this.data.view_min_request_throughput || 1 / 0,
                        h
                      )),
                      (this.data.view_average_request_throughput = 8e3 * (r / n)),
                      (this.data.view_max_request_latency = Math.max(
                        this.data.view_max_request_latency || 0,
                        c
                      )),
                      (this.data.view_average_request_latency = a / s);
                  }
                }
                function t(e, t) {
                  o++, u++;
                }
                function i(e, t) {
                  o++, l++;
                }
                var a = 0,
                  r = 0,
                  n = 0,
                  o = 0,
                  s = 0,
                  u = 0,
                  l = 0;
                this.on('requestcompleted', e),
                  this.on('requestfailed', t),
                  this.on('requestcanceled', i);
              }
              Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = a);
            },
            function (e, t, i) {
              'use strict';
              function a(e, t, i) {
                var a = (0, s.findMediaElement)(t),
                  n = r(a, 3),
                  d = n[0],
                  c = n[1],
                  f = n[2],
                  h = e.log,
                  p = e.utils.getComputedStyle,
                  _ = e.utils.secondsToMs;
                return d
                  ? 'video' !== f && 'audio' !== f
                    ? h.error('The element of `' + c + '` was not a media element.')
                    : ((i = i || {}),
                      (i.data = (0, o.default)(
                        {
                          player_software: 'HTML5 Video Element',
                          player_software_version: 'No Versions',
                          player_mux_plugin_name: 'VideoElementMonitor',
                          player_mux_plugin_version: '2.4.5',
                        },
                        i.data
                      )),
                      (i.getPlayheadTime = function () {
                        return _(d.currentTime);
                      }),
                      (i.getStateData = function () {
                        return {
                          player_is_paused: d.paused,
                          player_playhead_time: _(d.currentTime),
                          player_width: parseInt(p(d, 'width')),
                          player_height: parseInt(p(d, 'height')),
                          player_autoplay_on: d.autoplay,
                          player_preload_on: d.preload,
                          video_poster_url: d.poster,
                          video_source_url: d.currentSrc,
                          video_source_duration: _(d.duration),
                          video_source_height: d.videoHeight,
                          video_source_width: d.videoWidth,
                        };
                      }),
                      (d.mux = d.mux || {}),
                      (d.mux.destroy = function () {
                        Object.keys(d.mux.listeners).forEach(function (e) {
                          d.removeEventListener(e, d.mux.listeners[e], !1);
                        }),
                          delete d.mux.listeners,
                          e.emit(c, 'destroy');
                      }),
                      (d.mux.swapElement = function (t) {
                        var i = (0, s.findMediaElement)(t),
                          a = r(i, 3),
                          n = a[0],
                          u = a[1],
                          l = a[2];
                        return n
                          ? 'video' !== l && 'audio' !== l
                            ? e.log.error('The element of `' + u + '` was not a media element.')
                            : ((n.muxId = d.muxId),
                              delete d.muxId,
                              (n.mux = n.mux || {}),
                              (n.mux.listeners = (0, o.default)({}, d.mux.listeners)),
                              delete d.mux.listeners,
                              Object.keys(n.mux.listeners).forEach(function (e) {
                                d.removeEventListener(e, n.mux.listeners[e], !1),
                                  n.addEventListener(e, n.mux.listeners[e], !1);
                              }),
                              (n.mux.swapElement = d.mux.swapElement),
                              (n.mux.destroy = d.mux.destroy),
                              delete d.mux,
                              void (d = n))
                          : e.log.error(
                              'No element was found with the `' + u + '` query selector.'
                            );
                      }),
                      (d.mux.addHLSJS = function (t) {
                        e.addHLSJS(c, t);
                      }),
                      (d.mux.addDashJS = function (t) {
                        e.addDashJS(c, t);
                      }),
                      (d.mux.removeHLSJS = function () {
                        e.removeHLSJS(c);
                      }),
                      (d.mux.removeDashJS = function () {
                        e.removeDashJS(c);
                      }),
                      e.init(c, i),
                      e.emit(c, 'playerready'),
                      d.paused || (e.emit(c, 'play'), 2 < d.readyState && e.emit(c, 'playing')),
                      (d.mux.listeners = {}),
                      void u.forEach(function (t) {
                        (d.mux.listeners[t] = function () {
                          var i = {};
                          'error' === t &&
                            ((i.player_error_code = d.error && d.error.code),
                            (i.player_error_message = d.error && l[d.error.code])),
                            e.emit(c, t, i);
                        }),
                          d.addEventListener(t, d.mux.listeners[t], !1);
                      }))
                  : h.error('No element was found with the `' + c + '` query selector.');
              }
              Object.defineProperty(t, '__esModule', { value: !0 });
              var r = (function () {
                function e(e, t) {
                  var n,
                    i = [],
                    a = !0,
                    r = !1;
                  try {
                    for (
                      var o, s = e[Symbol.iterator]();
                      !(a = (o = s.next()).done) && (i.push(o.value), !t || i.length !== t);
                      a = !0
                    );
                  } catch (e) {
                    (r = !0), (n = e);
                  } finally {
                    try {
                      !a && s.return && s.return();
                    } finally {
                      if (r) throw n;
                    }
                  }
                  return i;
                }
                return function (t, i) {
                  if (Array.isArray(t)) return t;
                  if (Symbol.iterator in Object(t)) return e(t, i);
                  throw new TypeError('Invalid attempt to destructure non-iterable instance');
                };
              })();
              t.default = a;
              var n = i(0),
                o = (function (e) {
                  return e && e.__esModule ? e : { default: e };
                })(n),
                s = i(7),
                u = [
                  'loadstart',
                  'pause',
                  'play',
                  'playing',
                  'seeking',
                  'seeked',
                  'timeupdate',
                  'ratechange',
                  'stalled',
                  'waiting',
                  'error',
                  'ended',
                ],
                l = {
                  1: 'MEDIA_ERR_ABORTED',
                  2: 'MEDIA_ERR_NETWORK',
                  3: 'MEDIA_ERR_DECODE',
                  4: 'MEDIA_ERR_SRC_NOT_SUPPORTED',
                };
            },
            function (e, t, i) {
              'use strict';
              function a(e) {
                return e && e.__esModule ? e : { default: e };
              }
              Object.defineProperty(t, '__esModule', { value: !0 });
              var r = i(50),
                n = a(r),
                o = i(1),
                s = a(o),
                u = i(51),
                l = a(u),
                d = i(52),
                c = a(d),
                f = i(0),
                h = a(f),
                p = {};
              (p.safeCall = n.default),
                (p.safeIncrement = s.default),
                (p.getComputedStyle = l.default),
                (p.secondsToMs = c.default),
                (p.assign = h.default),
                (t.default = p);
            },
            function (e, t, i) {
              'use strict';
              function a(e, t, i, a) {
                var r = a;
                if (e && 'function' == typeof e[t])
                  try {
                    r = e[t].apply(e, i);
                  } catch (e) {
                    n.default.info('safeCall error', e);
                  }
                return r;
              }
              Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = a);
              var r = i(3),
                n = (function (e) {
                  return e && e.__esModule ? e : { default: e };
                })(r);
            },
            function (e, t, i) {
              'use strict';
              function a(e, t) {
                if (n.default.defaultView && n.default.defaultView.getComputedStyle)
                  return n.default.defaultView.getComputedStyle(e, null).getPropertyValue(t);
              }
              Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = a);
              var r = i(6),
                n = (function (e) {
                  return e && e.__esModule ? e : { default: e };
                })(r);
            },
            function (e, t, i) {
              'use strict';
              function a(e) {
                return Math.floor(1e3 * e);
              }
              Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = a);
            },
          ]);
        });
      })();

      /***/
    },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule ? /******/ () => module['default'] : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be in strict mode.
  (() => {
    'use strict';
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    });
    /* harmony import */ var wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(1);
    /* harmony import */ var mux_embed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(648);
    /* harmony import */ var mux_embed__WEBPACK_IMPORTED_MODULE_1___default =
      /*#__PURE__*/ __webpack_require__.n(mux_embed__WEBPACK_IMPORTED_MODULE_1__);
    var secondsToMs = mux_embed__WEBPACK_IMPORTED_MODULE_1___default().utils.secondsToMs,
      _W$lib = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('utilities/obj'),
      assign = _W$lib.assign,
      _W$lib2 = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('player/lib/elem'),
      elemBind = _W$lib2.elemBind,
      Assets = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('player/lib/assets'),
      _W$lib3 = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('utilities/url'),
      Url = _W$lib3.Url,
      Judy = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('player/lib/judy'),
      ERROR_MESSAGES = {
        1: 'MEDIA_ERR_ABORTED',
        2: 'MEDIA_ERR_NETWORK',
        3: 'MEDIA_ERR_DECODE',
        4: 'MEDIA_ERR_SRC_NOT_SUPPORTED',
      },
      init = function init(video) {
        var videoEl,
          options = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
          killBindings = function killBindings() {
            video.mux.unbinds &&
              (video.mux.unbinds.map(function (u) {
                return u();
              }),
              (video.mux.unbinds = []));
          },
          playerID = video.uuid;
        (video.mux = { unbinds: [] }),
          (video.mux.emit = function (eventType, data) {
            mux_embed__WEBPACK_IMPORTED_MODULE_1___default().emit(playerID, eventType, data);
          }),
          (video.mux.destroy = function () {
            (video.mux._destroyed = !0), killBindings(), video.mux.emit('destroy');
          });
        var playerType = video.playerType;
        if (
          (video.popover && (playerType = 'popover_'.concat(playerType)),
          /vulcan/.test(video.playerType))
        ) {
          var bestEngine = Judy.bestUsableEngine(video.judyCtx(), video._mediaData, video._opts);
          'engines/hls_video.js' === bestEngine && (playerType = ''.concat(playerType, '_hlsjs')),
            'engines/native_hls_video.js' === bestEngine &&
              (playerType = ''.concat(playerType, '_nativehls')),
            'engines/simple_audio.js' === bestEngine &&
              (playerType = ''.concat(playerType, '_simple_audio'));
        }
        'html5' === video.playerType &&
          video._impl._currentAsset &&
          'm3u8' == video._impl._currentAsset.ext &&
          (playerType = ''.concat(playerType, '_nativehls'));
        var parsedUrl,
          firstAsset = Assets.one(video._mediaData.assets, {
            type: /video/i,
            status: Assets.READY,
          });
        parsedUrl = firstAsset ? new Url(firstAsset.url) : new Url('/no-ready-assets');
        var contentType = '';
        video._impl._currentAsset &&
          ('mp4' === video._impl._currentAsset.ext
            ? (contentType = 'video/mp4')
            : 'm3u8' === video._impl._currentAsset.ext && (contentType = 'application/x-mpegURL')),
          (options.minimumRebufferDuration = 250),
          (options.disableCookies = !0),
          (options.data = assign(
            {
              player_software_name: video.playerType,
              player_software_version: '0.0.1',
              player_mux_plugin_name: 'wistia-mux',
              player_mux_plugin_version: '0.0.1',
              property_key: 'fg8vvsvnieiv3ej16jby',
              page_type: video._opts._inIframe ? 'iframe' : '',
              viewer_user_id: video.visitorKey(),
              player_name: playerType,
              player_version: '',
              player_init_time: video._initTime,
              video_id: video.hashedId(),
              video_title: ''.concat(video.hashedId(), ' - ').concat(video.name()),
              video_producer: '',
              video_content_type: contentType,
              video_language_code: '',
              video_variant_name: '',
              video_variant_id: '',
              video_duration: secondsToMs(video.duration()),
              video_is_live: !1,
              video_encoding_variant: '',
              video_cdn: parsedUrl.host,
              video_series: video._opts.channel,
              sub_property_id: video._mediaData.accountKey.match(/\d+/)[0],
            },
            options.data
          )),
          (options.getPlayheadTime = function () {
            return secondsToMs(video.time());
          }),
          (options.getStateData = function () {
            return {
              // Required properties - these must be provided every time this is called
              // You _should_ only provide these values if they are defined (i.e. not 'undefined')
              player_is_paused: !videoEl || videoEl.paused,
              player_width: video.videoWidth(),
              player_height: video.videoHeight(),
              video_source_height: videoEl ? videoEl.videoHeight : video.videoHeight(),
              video_source_width: videoEl ? videoEl.videoWidth : video.videoWidth(), // Preferred properties - these should be provided in this callback if possible
              // If any are missing, that is okay, but this will be a lack of data for the customer at a later time
              player_is_fullscreen: video.inFullscreen(),
              player_autoplay_on: !!video._opts.autoPlay,
              player_preload_on: videoEl ? 'none' !== videoEl.getAttribute('preload') : void 0,
              video_source_url: videoEl && videoEl.src,
              video_source_mime_type: videoEl && videoEl.getAttribute('type'),
              video_source_duration: secondsToMs(video.duration()), // Optional properties - if you have them, send them, but if not, no big deal
              video_poster_url: video.stillUrl(),
              player_language_code: video.playerLanguage(),
            };
          });
        var handleEvent = function handleEvent(eventType) {
            'pause' === eventType
              ? video.mux.emit('pause')
              : 'playcalled' === eventType
              ? video.mux.emit('play')
              : 'playrejected' === eventType
              ? video.mux.emit('pause')
              : 'play' === eventType
              ? video.mux.emit('playing')
              : 'el-seeking' === eventType
              ? video.mux.emit('seeking')
              : 'el-seeked' === eventType
              ? video.mux.emit('seeked')
              : 'el-timeupdate' === eventType
              ? video.mux.emit('timeupdate')
              : 'el-error' === eventType
              ? emitErrorFromEvent(1 >= arguments.length ? void 0 : arguments[1])
              : 'end' === eventType
              ? video.mux.emit('ended')
              : 'beforeremove' === eventType
              ? (video.mux.emit('destroy'), killBindings())
              : 'beforereplace' === eventType
              ? (video.mux.emit('destroy'), killBindings())
              : void 0;
          },
          emitErrorFromEvent = function emitErrorFromEvent(e) {
            var error = e; // Chrome v60
            e.path && e.path[0] && (error = e.path[0].error),
              e.originalTarget && (error = error.originalTarget.error),
              video.mux.emit('error', {
                player_error_code: error && error.code,
                player_error_message: error && ERROR_MESSAGES[error.code],
              });
          };
        video.whenVideoElementInDom().then(function (el) {
          (videoEl = el),
            mux_embed__WEBPACK_IMPORTED_MODULE_1___default().init(playerID, options),
            video.mux.unbinds.push(video.on('all', handleEvent)),
            (video.mux.unbinds = video.mux.unbinds.concat(
              ['timeupdate', 'seeking', 'seeked', 'error'].map(function (eventType) {
                return elemBind(videoEl, eventType, function (event) {
                  handleEvent('el-' + eventType, event);
                });
              })
            )),
            video.embedded(function () {
              setTimeout(function () {
                if (
                  !video.mux._destroyed &&
                  (video.mux.emit('playerready', { viewer_time: video._embeddedTime }),
                  video.ready() && videoEl && !videoEl.paused)
                ) {
                  var lastPlayInfo = video.lastPlayInfo() || {}; // if wistia-mux has loaded after the player started playing, we
                  // can usually assume that it was from autoplay--if we don't have
                  // lastPlayInfo(), let's say the play was issued on ready().
                  video.mux.emit('play', {
                    viewer_time: lastPlayInfo.issuedAt || video._readyTime,
                  }),
                    lastPlayInfo.resolvedAt &&
                      video.mux.emit('playing', { viewer_time: lastPlayInfo.resolvedAt });
                }
              }, 1);
            });
        });
      };
    wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.define('wistia-mux.js', init);
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = init;
  })();

  /******/
})();
