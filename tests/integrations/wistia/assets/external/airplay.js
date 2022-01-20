/*! For license information please see airplay.js.LICENSE.txt */
(() => {
  var __webpack_modules__ = {
      135: (e, t, n) => {
        'use strict';
        n.d(t, { default: () => i });
        n(5);
        function r(e, t) {
          for (var n, r = 0; r < t.length; r++)
            ((n = t[r]).enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        const i = (function () {
          function e(t) {
            (function (e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.video = t),
              (this.unbinds = []),
              (this.reactMounts = {});
          }
          return (
            (t = e),
            (n = [
              {
                key: 'mount',
                value: function (e) {
                  this.rootElem = e;
                },
              },
            ]) && r(t.prototype, n),
            i && r(t, i),
            e
          );
          var t, n, i;
        })();
      },
      136: (e, t, n) => {
        'use strict';
        n.d(t, { default: () => f });
        var r = n(5),
          i = n(6);
        function o(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        }
        function l(e, t) {
          for (var n, r = 0; r < t.length; r++)
            ((n = t[r]).enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        function a(e, t) {
          return (a =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        function u(e) {
          var t = (function () {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = s(e);
            if (t) {
              var i = s(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return c(this, n);
          };
        }
        function c(e, t) {
          return !t || ('object' != typeof t && 'function' != typeof t)
            ? (function (e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e;
              })(e)
            : t;
        }
        function s(e) {
          return (s = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        const f = (function (e) {
          function t() {
            return o(this, t), f.apply(this, arguments);
          }
          !(function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function');
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && a(e, t);
          })(t, e);
          var n,
            c,
            s,
            f = u(t);
          return (
            (n = t),
            (c = [
              {
                key: 'shouldComponentUpdate',
                value: function () {
                  return !1;
                },
              },
              {
                key: 'render',
                value: function () {
                  return (0, r.h)(
                    'svg',
                    (0, i.standardSvgAttrs)(40, 34),
                    (0, r.h)(
                      'g',
                      { stroke: '#fff', fill: 'none' },
                      (0, r.h)('polyline', {
                        'stroke': '#fff',
                        'stroke-width': '2',
                        'points': '14.52 23 9 23 9 10 32 10 32 23 26.48 23',
                      }),
                      (0, r.h)('polygon', { fill: '#fff', points: '20.5 20 25.5 26 15.5 26' })
                    )
                  );
                },
              },
            ]) && l(n.prototype, c),
            s && l(n, s),
            t
          );
        })(r.Component);
      },
      134: (e, t, n) => {
        'use strict';
        var r = n(1),
          i = n(135),
          o = n(136),
          l = n(62),
          a = n(5);
        function u(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        }
        function c(e, t) {
          for (var n, r = 0; r < t.length; r++)
            ((n = t[r]).enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        function s(e, t) {
          return (s =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        function f(e) {
          var t = (function () {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = _(e);
            if (t) {
              var i = _(this).constructor;
              n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return d(this, n);
          };
        }
        function d(e, t) {
          return !t || ('object' != typeof t && 'function' != typeof t) ? p(e) : t;
        }
        function p(e) {
          if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e;
        }
        function _(e) {
          return (_ = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function h(e, t, n) {
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
        var v = (function (e) {
          function t() {
            var e;
            u(this, t);
            for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            return (
              h(p((e = d.call.apply(d, [this].concat(r)))), 'onClickButton', function () {
                e.video.getMediaElement().webkitShowPlaybackTargetPicker();
              }),
              e
            );
          }
          !(function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function');
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && s(e, t);
          })(t, e);
          var n,
            r,
            i,
            d = f(t);
          return (
            (n = t),
            (r = [
              {
                key: 'mountButton',
                value: function (e) {
                  (this.buttonElem = e), this.renderButton();
                },
              },
              {
                key: 'destroy',
                value: function () {
                  (0, l.destroyControl)(this);
                },
              },
              {
                key: 'renderButton',
                value: function () {
                  this.buttonElem &&
                    (this.setButtonLabel('Airplay'),
                    (0, a.render)((0, a.h)(o.default, null), this.buttonElem),
                    (this.reactMounts = [this.buttonElem]));
                },
              },
            ]) && c(n.prototype, r),
            i && c(n, i),
            t
          );
        })(i.default);
        (v.shouldMount = function (e) {
          if (
            r.default.engines &&
            r.default.engines.TwoStrokeVideo &&
            e.getMediaElement() &&
            e._impl.engine instanceof r.default.engines.TwoStrokeVideo
          )
            return !1;
          window.WebKitPlaybackTargetAvailabilityEvent &&
            !e._checkingForAirplay &&
            ((e._checkingForAirplay = !0),
            (e._airplayAvailable = !1),
            e.whenVideoElementInDom().then(function () {
              e._impl.engine.bind('webkitplaybacktargetavailabilitychanged', function (t) {
                e._airplayAvailable = 'available' === t.availability;
              });
            }),
            e.bind('beforereplace', function () {
              delete e._checkingForAirplay, delete e._airplayAvailable;
            }));
          var t = e._airplayAvailable && e.plugin.airplay,
            n =
              null == e._opts.airplayButton
                ? !e._impl.behaviors.ui.isChromeless()
                : e._opts.airplayButton;
          return t && n;
        }),
          (v.handle = 'airplayButton'),
          (v.type = 'control-bar-right'),
          (v.sortValue = 800),
          r.default.defineControl(v);
      },
      63: (e, t, n) => {
        'use strict';
        n.d(t, { getControlDefinitions: () => i });
        var r = n(1);
        null == r.default._controlDefinitions && (r.default._controlDefinitions = {});
        var i = function () {
          return r.default._controlDefinitions || {};
        };
        r.default.defineControl = function (e) {
          null != e.handle
            ? null != r.default._controlDefinitions[e.handle] ||
              ((r.default._controlDefinitions[e.handle] = e),
              r.default.trigger && r.default.trigger('controldefined', e))
            : console.error('Please specify a handle property for control', e);
        };
      },
      62: (e, t, n) => {
        'use strict';
        n.d(t, { destroyControl: () => l });
        n(13), n(12), n(63);
        var r = n(19),
          i = (n(43), n(15)),
          o = n(5),
          l =
            (n(9),
            (0, r.cachedDetect)(),
            function (e) {
              (e._destroyed = !0),
                (function (e) {
                  e.unbinds instanceof Array &&
                    (e.unbinds.map(function (e) {
                      try {
                        'function' == typeof e && e();
                      } catch (e) {
                        setTimeout(function () {
                          throw e;
                        }, 1);
                      }
                    }),
                    (e.unbinds = null));
                })(e),
                a(e),
                c(e),
                s(e);
            }),
          a = function (e) {
            e.rootElem && (0, i.elemRemove)(Array.prototype.slice.call(e.rootElem.childNodes));
          },
          u = function (e) {
            var t = e[0],
              n = e[1];
            t && n && (0, o.render)((0, o.h)('nothing', null), t);
          },
          c = function (e) {
            var t = e.reactMounts;
            if (t)
              if (t instanceof Array) u(t);
              else for (var n in t) t.hasOwnProperty(n) && t[n] && u(t[n]);
          },
          s = function (e) {
            for (var t in e)
              e.hasOwnProperty(t) &&
                ('_' !== (n = t)[0] || '_' !== n[1]) &&
                'mounted' !== t &&
                (e[t] = null);
            var n;
            (e.__prevProps = null), (e._destroyed = !0);
          };
      },
      15: (e, t, n) => {
        'use strict';
        n.d(t, { elemRemove: () => c, elemBind: () => s, elemUnbind: () => f });
        var r,
          i = n(11),
          o = (n(16), n(18), n(19)),
          l = (n(20), n(24), n(25), n(9)),
          a = n(1).default,
          u = (0, o.cachedDetect)(),
          c = function e(t) {
            var n;
            if ((0, i.isArray)(t) || (window.NodeList && t instanceof NodeList))
              for (var r = 0; r < t.length; r++) e(t[r]);
            else
              null != t &&
                (1 === t.nodeType || 3 === t.nodeType) &&
                (n = t.parentNode) &&
                (n.removeChild(t), (t = null));
          },
          s = function (e, t, n) {
            var r = !!(3 < arguments.length && void 0 !== arguments[3]) && arguments[3],
              i = function (r) {
                !(r = r || window.event).pageX &&
                  !r.pageY &&
                  (r.clientX || r.clientY) &&
                  ((r.pageX = r.clientX + _()), (r.pageY = r.clientY + p())),
                  r.preventDefault ||
                    (r.preventDefault = function () {
                      r.returnValue = !1;
                    }),
                  r.stopPropagation ||
                    (r.stopPropagation = function () {
                      r.cancelBubble = !0;
                    }),
                  null == r.which && (r.which = null == r.charCode ? r.keyCode : r.charCode),
                  null == r.which &&
                    null != r.button &&
                    (1 & r.button
                      ? (r.which = 1)
                      : 2 & r.button
                      ? (r.which = 3)
                      : 4 & r.button
                      ? (r.which = 2)
                      : u.browser.msie && 0 === r.button
                      ? (r.which = 1)
                      : (r.which = 0)),
                  r.target || (r.srcElement && (r.target = r.srcElement)),
                  r.target && 3 === r.target.nodeType && (r.target = r.target.parentNode);
                for (var i = arguments.length, o = Array(1 < i ? i - 1 : 0), l = 1; l < i; l++)
                  o[l - 1] = arguments[l];
                var a = n.apply(r.target, [r].concat(o));
                return a === f && f(e, t, n), a;
              };
            a._elemBind = a._elemBind || {};
            var o = d(e, t, n);
            return (
              (a._elemBind[o] = i),
              (i.elem = e),
              (i.event = t),
              u.browser.msie && 9 > u.browser.version
                ? e.attachEvent('on'.concat(t), i)
                : e.addEventListener(t, i, r),
              function () {
                f(e, t, n, r);
              }
            );
          },
          f = function (e, t, n) {
            var r = !!(3 < arguments.length && void 0 !== arguments[3]) && arguments[3];
            if (null != e && null != e._wistiaElemId && null != n && n._wistiaBindId) {
              var i = d(e, t, n),
                o = a._elemBind[i];
              return (
                o &&
                  (u.browser.msie && 9 > u.browser.version
                    ? e.detachEvent('on'.concat(t), o)
                    : e.removeEventListener(t, o, r),
                  (o.elem = null),
                  (o.event = null)),
                delete a._elemBind[i]
              );
            }
          },
          d = function (e, t, n) {
            return (
              (e._wistiaElemId = e._wistiaElemId || (0, l.seqId)('wistia_elem_')),
              (n._wistiaBindId = n._wistiaBindId || (0, l.seqId)('wistia_bind_')),
              ''.concat(e._wistiaElemId, '.').concat(t, '.').concat(n._wistiaBindId)
            );
          },
          p = function (e) {
            var t = document.body,
              n = document.documentElement;
            return null == e
              ? (n && n.scrollTop) || (t && t.scrollTop) || 0
              : (t && (t.scrollTop = e), void (n && (n.scrollTop = e)));
          },
          _ = function (e) {
            var t = document.body,
              n = document.documentElement;
            return null == e
              ? (n && n.scrollLeft) || (t && t.scrollLeft) || 0
              : (t && (t.scrollLeft = e), void (n && (n.scrollLeft = e)));
          };
        [
          'auxclick',
          'click',
          'contextmenu',
          'dblclick',
          'focus',
          'keydown',
          'keypress',
          'keyup',
          'mousedown',
          'mouseup',
          'reset',
          'submit',
          'touchend',
          'touchstart',
        ].forEach(function (e) {
          s(
            document,
            e,
            function (e) {
              (r = e),
                Date.now(),
                setTimeout(function () {
                  r === e && (r = void 0);
                }, 0);
            },
            !u.passiveSupported || { capture: !0, passive: !0 }
          );
        });
      },
      24: (e, t, n) => {
        'use strict';
        var r;
        n.d(t, { elemOffset: () => o });
        var i = function () {
            if (null != r) return r;
            var e = document.createElement('div');
            return (
              (e.style.paddingLeft = e.style.width = '1px'),
              document.body.appendChild(e),
              (r = 2 === e.offsetWidth),
              document.body.removeChild(e),
              r
            );
          },
          o = function (e) {
            var t,
              n,
              r = document.body,
              o = document.defaultView,
              a = document.documentElement,
              u = e.getBoundingClientRect(),
              c = a.clientTop || r.clientTop || 0,
              s = a.clientLeft || r.clientLeft || 0;
            (t =
              o && null != o.pageYOffset
                ? o.pageYOffset
                : i() && a && null != a.scrollTop
                ? a.scrollTop
                : r.scrollTop),
              (n =
                o && null != o.pageXOffset
                  ? o.pageXOffset
                  : i() && a && null != a.scrollLeft
                  ? a.scrollLeft
                  : r.scrollLeft);
            var f = l(e);
            return {
              height: u.height * f,
              top: u.top * f + t - c,
              left: u.left * f + n - s,
              width: u.width * f,
              zoom: f,
            };
          },
          l = function e(t) {
            return t && t !== document.documentElement
              ? e(t.parentElement) * (getComputedStyle(t).zoom || 1)
              : 1;
          };
      },
      25: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          getScriptTags: () => getScriptTags,
          execScriptTags: () => execScriptTags,
          removeScriptTags: () => removeScriptTags,
        });
        var player_lib_script_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26),
          getScriptTags = function (e) {
            return (
              e.match(/<script.*?src[^>]*>\s*<\/script>|<script.*?>[\s\S]+?<\/script>/gi) || []
            );
          },
          scriptTagsToRunScriptsInput = function scriptTagsToRunScriptsInput(scriptTags) {
            if (!scriptTags) return [];
            scriptTags instanceof Array || (scriptTags = getScriptTags(scriptTags));
            for (var hashes = [], i = 0; i < scriptTags.length; i++) {
              var scriptTag = scriptTags[i],
                hash = {},
                matches = scriptTag.match(/<script.*?>/i);
              matches &&
                ((matches = matches[0].match(/src="([^"]+)"/i)),
                matches &&
                  ((hash.src = matches[1]),
                  (hash.async = /async/i.test(scriptTag.replace(hash.src, ''))))),
                matches ||
                  ((matches = scriptTag.match(/<script>([\s\S]+?)<\/script>/i)),
                  matches &&
                    (function () {
                      var src = matches[1];
                      hash.fn = function () {
                        return eval(src);
                      };
                    })()),
                hashes.push(hash);
            }
            return hashes;
          },
          execScriptTags = function (e, t) {
            if (!e) return null;
            var n = scriptTagsToRunScriptsInput(e);
            return (0, player_lib_script_utils__WEBPACK_IMPORTED_MODULE_0__.runScripts)(n).then(t);
          },
          removeScriptTags = function (e) {
            return e.replace(/<script.*?src[^>]*>\s*<\/script>|<script>[\s\S]+?<\/script>/g, '');
          };
      },
      26: (e, t, n) => {
        'use strict';
        n.d(t, { runScripts: () => p });
        var r = n(20),
          i = n(11),
          o = n(13),
          l = n.n(o),
          a = n(27);
        function u(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function c(e) {
          for (var t, n = 1; n < arguments.length; n++)
            (t = null == arguments[n] ? {} : arguments[n]),
              n % 2
                ? u(Object(t), !0).forEach(function (n) {
                    s(e, n, t[n]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                : u(Object(t)).forEach(function (n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                  });
          return e;
        }
        function s(e, t, n) {
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
        var f = function (e) {
            for (
              var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                n = document.getElementsByTagName('script'),
                r = 0;
              r < n.length;
              r++
            ) {
              var i = n[r],
                o = i.getAttribute('src') || '';
              if (t.ignoreQueryParams) {
                var l = o.split('?'),
                  a = l[0];
                o = a;
              }
              if (
                (!t.scriptRegex &&
                  t.ignoreProtocol &&
                  ((o = o.replace(/^https?:/, '')), (e = e.replace(/^https?:/, ''))),
                t.scriptRegex && t.scriptRegex.test(o))
              )
                return i;
              if (t.testStartsWith && 0 === o.indexOf(e)) return i;
              if (o === e) return i;
            }
            return null;
          },
          d = function (e) {
            var t,
              n,
              r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 8e3,
              i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            return (
              null == r && (r = 8e3),
              null == i && (i = {}),
              new (l())(function (o) {
                return (
                  !0 === i.once && (t = f(e)) && (n = !0),
                  i.once && n
                    ? void (
                        (!t.readyState || /loaded|complete/.test(t.readyState)) &&
                        setTimeout(function () {
                          o();
                        }, 1)
                      )
                    : (0, a.default)(e, r)
                        .then(o)
                        .catch(function (e) {
                          o(e),
                            setTimeout(function () {
                              console.error(e);
                            }, 1);
                        })
                );
              })
            );
          },
          p = function () {
            for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
            (e = n[0] instanceof Array ? n[0] : n), (e = _(e));
            var o = [],
              a = [],
              u = [];
            return (
              e.forEach(function (e) {
                var t = c({}, e),
                  n = new (l())(function (e) {
                    t.resolve = e;
                  });
                (t.promise = n), u.push(t.promise), e.async ? o.push(t) : a.push(t);
              }),
              a.reduce(function (e, t) {
                if (t.fn)
                  try {
                    t.fn();
                  } catch (e) {
                    r.wlog.error(e);
                  } finally {
                    t.resolve();
                  }
                else t.src && d(t.src, null, t).then(t.resolve);
                return e.then(t.promise);
              }, l().resolve()),
              setTimeout(function () {
                o.forEach(function (e) {
                  if (e.fn)
                    try {
                      e.fn();
                    } catch (e) {
                      r.wlog.error(e);
                    } finally {
                      e.resolve();
                    }
                  else e.src && d(e.src, null, e).then(e.resolve);
                });
              }, 1),
              l().all(u)
            );
          },
          _ = function (e) {
            for (var t, n = [], r = 0; r < e.length; r++)
              'string' == typeof (t = e[r])
                ? n.push({ src: t, async: !1 })
                : (0, i.isObject)(t)
                ? n.push(t)
                : n.push({ fn: t, async: !1 });
            return n;
          };
      },
      43: (e, t, n) => {
        'use strict';
        n.d(t, { doTimeout: () => l, clearTimeouts: () => a });
        var r = n(1),
          i = n(11),
          o = r.default;
        null == o._timeouts && (o._timeouts = {});
        var l = function (e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1;
            (0, i.isArray)(e) && (e = e.join('.'));
            var r = c(e);
            if ((a(e, r), t)) {
              var l = o._timeouts[r];
              null == l && (l = o._timeouts[r] = {});
              var u = setTimeout(function () {
                delete l[e], t();
              }, n);
              return (l[e] = u), u;
            }
            return o._timeouts[r][e];
          },
          a = function (e) {
            var t,
              n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
            if (
              ((0, i.isArray)(e) && (e = e.join('.')),
              '__global__' === (n = n || c(e)) && (t = o._timeouts[e]))
            )
              for (var r in t) {
                var l = t[r];
                clearTimeout(l), delete t[r];
              }
            if ((t = o._timeouts[n]))
              for (var a in t) {
                var s = t[a];
                a.indexOf &&
                  0 === a.indexOf(e) &&
                  (a.length === e.length || '.' === a.charAt(e.length)) &&
                  (clearTimeout(s), delete t[a]);
              }
            o.blockSweepTimeouts ||
              ((o.blockSweepTimeouts = !0),
              setTimeout(u, 0),
              setTimeout(function () {
                o.blockSweepTimeouts = !1;
              }, 5e3));
          },
          u = function () {
            for (var e in o._timeouts) {
              var t = o._timeouts[e];
              (0, i.isEmpty)(t) && delete o._timeouts[e];
            }
          },
          c = function (e) {
            var t = e.indexOf('.');
            return 0 < t ? e.substring(0, t) : '__global__';
          };
      },
      12: (e, t, n) => {
        'use strict';
        n.d(t, { default: () => i });
        var r = function (e, t) {
          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
          return e;
        };
        const i = function (e) {
          for (var t = arguments.length, n = Array(1 < t ? t - 1 : 0), i = 1; i < t; i++)
            n[i - 1] = arguments[i];
          if (Object.assign) return Object.assign.apply(Object, [e].concat(n));
          for (var o = 0; o < n.length; o++) r(e, n[o]);
          return e;
        };
      },
      23: (e, t, n) => {
        'use strict';
        n.d(t, {
          bind: () => u,
          unbind: () => c,
          trigger: () => f,
          bindNamed: () => _,
          unbindNamed: () => h,
          unbindAllInNamespace: () => v,
        });
        var r = n(1);
        function i(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return o(e);
            })(e) ||
            (function (e) {
              if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
                return Array.from(e);
            })(e) ||
            (function (e, t) {
              if (e) {
                if ('string' == typeof e) return o(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  'Object' === n && e.constructor && (n = e.constructor.name),
                  'Map' === n || 'Set' === n
                    ? Array.from(e)
                    : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? o(e, t)
                    : void 0
                );
              }
            })(e) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              );
            })()
          );
        }
        function o(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var l,
          a = Array.prototype.slice,
          u = function (e, t) {
            var n = this;
            return (
              n._bindings || (n._bindings = {}),
              n._bindings[e] || (n._bindings[e] = []),
              n._bindings[e].push(t),
              function () {
                n.unbind(e, t);
              }
            );
          },
          c = function (e, t) {
            if (!this._bindings) return this;
            if (!this._bindings[e]) return this;
            for (var n, r = [], i = 0; i < this._bindings[e].length; i++)
              (n = this._bindings[e][i]) !== t && r.push(n);
            this._bindings[e] = r;
          },
          s = function (e, t) {
            return this.unbind(e, t), this.bind(e, t), { event: e, fn: t };
          },
          f = function (e) {
            for (var t = arguments.length, n = Array(1 < t ? t - 1 : 0), r = 1; r < t; r++)
              n[r - 1] = arguments[r];
            return (
              this._bindings && null != this._bindings.all && d.apply(this, ['all', e].concat(n)),
              d.apply(this, [e].concat(n))
            );
          },
          d = function (e) {
            if (!this._bindings) return this;
            if (!this._bindings[e]) return this;
            for (
              var t, n, o = a.call(arguments, 1), l = i(this._bindings[e]), u = 0;
              u < l.length;
              u++
            ) {
              n = l[u];
              try {
                var c = n.apply(this, o);
                c === this.unbind && (null == t && (t = []), t.push({ event: e, fn: n }));
              } catch (e) {
                if (this._throwTriggerErrors) throw e;
                r.default.error && r.default.error(e);
              }
            }
            if (t) for (var s, f = 0; f < t.length; f++) (s = t[f]), this.unbind(s.event, s.fn);
            return this;
          },
          p = function (e, t) {
            null == e._namedBindings && (e._namedBindings = {}),
              null == e._namedBindings[t] && (e._namedBindings[t] = {});
          },
          _ = function (e, t, n, r) {
            return (
              this.unbindNamed(e, t),
              (function (e, t, n, r, i) {
                p(e, t), (e._namedBindings[t][n] = { event: r, fn: i });
              })(this, e, t, n, r),
              this.bind(n, r),
              function () {
                this.unbindNamed(e, t);
              }
            );
          },
          h = function (e, t) {
            p(this, e);
            var n = (function (e, t, n) {
              return p(e, t), e._namedBindings[t][n];
            })(this, e, t);
            if (n) {
              var r = n.event,
                i = n.fn;
              this.unbind(r, i);
            }
            var o = this._namedBindings;
            return delete o[e][t], g(o[e]) && delete o[e], this;
          },
          v = function (e) {
            var t = this._namedBindings && this._namedBindings[e];
            if (null == t) return this;
            for (var n in t) t.hasOwnProperty(n) && this.unbindNamed(e, n);
          },
          g = function (e) {
            for (var t in e) if (e.hasOwnProperty(t)) return !1;
            return !0;
          };
        ((l = function () {}.prototype).bind = u),
          (l.unbind = c),
          (l.on = u),
          (l.off = c),
          (l.rebind = s),
          (l.trigger = f),
          (l.bindNamed = _),
          (l.unbindNamed = h),
          (l.unbindAllInNamespace = v);
      },
      19: (e, t, n) => {
        'use strict';
        n.d(t, { cachedDetect: () => H });
        var r,
          i = n(1),
          o = n(2),
          l = navigator.userAgent,
          a = /(webkit)[ /]([^\s]+)/i,
          u = /OPR\/([^\s]+)/i,
          c = /(msie) ([^\s;]+)/i,
          s = /(trident)\/\s*([^;]+)/i,
          f = /(edge)\/(\d+(?:\.\d+)?)/i,
          d = /(mozilla)(?:.*? rv:([^\s)]+))?/i,
          p = /(android) ([^;]+)/i,
          _ = /(iphone)/i,
          h = /(ipad)/i,
          v = /(Windows Phone OS (\d+(?:\.\d+)?))/,
          g = /OS (\d+)_(\d+)/i,
          y = /(playstation 3)/i,
          m = /BlackBerry|BB10/i,
          b = /(firefox)/i,
          w = /Mobile VR/i,
          k = /Version\/([^\s]+)/i,
          O = function () {
            return (P()[1] || 'webkit').toLowerCase();
          },
          T = function () {
            return P()[2];
          },
          P = function () {
            var e;
            return (
              (e = l.match(f)) ||
              (e = l.match(a)) ||
              (e = l.match(u)) ||
              ((e = l.match(c))
                ? (null != document.documentMode && (e[2] = document.documentMode), e)
                : (e = l.match(d)) || [])
            );
          },
          x = function () {
            var e = l.match(p);
            return null != e && { version: e[2] };
          },
          S = function () {
            return _.test(l);
          },
          E = function () {
            return 0 < I() || x();
          },
          A = function () {
            try {
              var e = matchMedia('(hover:hover)');
              if ('not all' !== e.media) return e.matches;
            } catch (e) {}
            return !E();
          },
          j = function () {
            return m.test(l);
          },
          B = function () {
            return (
              !!(
                'MacIntel' === navigator.platform &&
                0 <= navigator.userAgent.indexOf('Mac') &&
                1 < navigator.maxTouchPoints
              ) || h.test(l)
            );
          },
          C = function () {
            return a.test(l) && !/chrome/i.test(l) && !B() && !S();
          },
          L = function () {
            return !(!/Chrome/.test(l) || !/Google Inc/.test(navigator.vendor)) && { version: D() };
          },
          D = function () {
            var e = l.match(/\bChrome\/([^\s]+)/);
            return e && e[1];
          },
          R = function () {
            return u.test(l);
          },
          I = function () {
            var e = l.match(g),
              t = l.match(k);
            return null == e
              ? null != t && t[1] && B()
                ? parseFloat(t[1])
                : 0
              : parseFloat(''.concat(e[1], '.').concat(e[2]));
          },
          N = function () {
            return s.test(l);
          },
          M = function () {
            return f.test(l);
          },
          F = function () {
            return b.test(l);
          },
          q = function () {
            try {
              try {
                var e = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.6');
                try {
                  e.AllowScriptAccess = 'always';
                } catch (e) {
                  return [6, 0, 0];
                }
              } catch (e) {}
              return new ActiveXObject('ShockwaveFlash.ShockwaveFlash')
                .GetVariable('$version')
                .replace(/\D+/g, ',')
                .match(/^,?(.+),?$/)[1]
                .split(',');
            } catch (e) {
              try {
                if (navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin)
                  return (
                    navigator.plugins['Shockwave Flash 2.0'] || navigator.plugins['Shockwave Flash']
                  ).description
                    .replace(/\D+/g, ',')
                    .match(/^,?(.+),?$/)[1]
                    .split(',');
              } catch (e) {}
            }
            return [0, 0, 0];
          },
          U = function () {
            var e = document.createElement('video'),
              t = !1;
            try {
              if (e.canPlayType) {
                ((t = {}).h264 =
                  !!e.canPlayType('video/mp4; codecs="avc1.42E01E"') ||
                  !!e.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')),
                  (t.webm = !!e.canPlayType('video/webm; codecs="vp9, vorbis"')),
                  (t.nativeHls = !!e.canPlayType('application/vnd.apple.mpegURL'));
              }
            } catch (e) {
              t = { ogg: !1, h264: !1, webm: !1, nativeHls: !1 };
            }
            return t;
          },
          W = function () {
            try {
              return 'localStorage' in o.default && null != o.default.localStorage;
            } catch (e) {
              return !1;
            }
          },
          z = ['WebKit', 'Moz', 'O', 'Ms', ''],
          V = function () {
            for (var e = 0; e < z.length; e++) {
              var t = z[e] + 'MutationObserver';
              if (o.default[t]) return t;
            }
            return null;
          },
          G = function () {
            if (null != r) return r;
            try {
              var e = Object.defineProperty({}, 'passive', {
                get: function () {
                  r = !0;
                },
              });
              window.addEventListener('test', null, e);
            } catch (e) {
              r = !1;
            }
            return r;
          },
          H = function () {
            return i.default._detectCache || (i.default._detectCache = X()), i.default._detectCache;
          },
          X = function () {
            var e,
              t,
              n,
              r,
              i,
              a,
              u,
              c,
              s,
              f,
              d,
              p,
              _,
              h,
              g = {
                browser: {
                  version: T(),
                  quirks: 'msie' === O() && 'BackCompat' === document.compatMode,
                  old: 'msie' === O() && ('BackCompat' === document.compatMode || 7 > T()),
                  ltie8: 'msie' === O() && ('BackCompat' === document.compatMode || 8 > T()),
                },
                trident: N(),
                edge: M(),
                firefox: F(),
                gearvr: w.test(l),
                android: x(),
                oldandroid: x() && 4.1 > parseFloat(x().version) && !N(),
                iphone: S(),
                ipad: B(),
                blackberry: j(),
                safari: C(),
                chrome: L(),
                opera: R(),
                winphone: { version: v.test(l)[2] },
                ios: { version: I() },
                windows: /win/i.test(navigator.platform),
                mac: /mac/i.test(navigator.platform),
                linux: /linux/i.test(navigator.platform),
                retina: null != o.default.devicePixelRatio && 1 < o.default.devicePixelRatio,
                hoverIsNatural: A(),
                touchScreen: E(),
                ps3: y.test(l),
                flash:
                  ((h = q()),
                  {
                    version: parseFloat(h[0] + '.' + h[1]),
                    major: parseInt(h[0]),
                    minor: parseInt(h[1]),
                    rev: parseInt(h[2]),
                  }),
                video: U(),
                mediaSource:
                  o.default.MediaSource &&
                  o.default.MediaSource.isTypeSupported(
                    'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                  ),
                nativeHls: (S() || B() || C()) && !N() && U().nativeHls,
                localstorage: W(),
                json: !(!o.default.JSON || 'function' != typeof JSON.parse),
                backgroundSize:
                  ((_ = document.createElement('div')),
                  '' === _.style.backgroundSize ||
                    '' === _.style.webkitBackgroundSize ||
                    '' === _.style.mozBackgroundSize ||
                    '' === _.style.oBackgroundSize),
                fullscreenEnabled:
                  document.fullscreenEnabled ||
                  document.mozFullScreenEnabled ||
                  document.webkitFullscreenEnabled ||
                  document.msFullscreenEnabled,
                vulcanSupport:
                  ((d = /webkit|mozilla|edge/.test(O())),
                  (p = 'msie' === O() && 11 <= T()),
                  !(
                    S() ||
                    B() ||
                    x() ||
                    j() ||
                    (!d && !p) ||
                    !U().h264 ||
                    !Object.defineProperties
                  )),
                mutationObserver: V(),
                callingPlayRequiresEventContext: 0 < I() || x() || C(),
                passiveSupported: G(),
                webp:
                  ((e = L()),
                  (t = F()),
                  (n = M()),
                  (r = R()),
                  (i = e && 32 <= T()),
                  (a = e && 75 <= T() && x()),
                  (u = t && 65 <= T()),
                  (c = t && 67 <= T() && x()),
                  (s = n && 18 <= T()),
                  (f = r && 19 <= T()),
                  i || a || u || c || s || f),
              };
            return (g.browser[O()] = !0), g;
          };
      },
      16: (e, t, n) => {
        'use strict';
        n(17);
      },
      21: (e, t, n) => {
        'use strict';
        n.d(t, { globalTrigger: () => i });
        var r = n(1);
        (0, n(22).makeWbindable)(r.default);
        r.default.bind.bind(r.default),
          r.default.on.bind(r.default),
          r.default.off.bind(r.default),
          r.default.rebind.bind(r.default);
        var i = r.default.trigger.bind(r.default);
        r.default.unbind.bind(r.default);
      },
      11: (e, t, n) => {
        'use strict';
        n.d(t, { merge: () => r, isArray: () => u, isObject: () => s, isEmpty: () => f });
        n(12), Array.prototype.slice;
        var r = function (e) {
            if (0 == (1 >= arguments.length ? 0 : arguments.length - 1)) return e;
            for (var t = 0; t < (1 >= arguments.length ? 0 : arguments.length - 1); t++)
              i(e, 1 > t + 1 || arguments.length <= t + 1 ? void 0 : arguments[t + 1]);
            return e;
          },
          i = function e(t, n) {
            var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : o,
              i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : l;
            if (u(n)) {
              u(t) || (t = []);
              for (var a, c = 0; c < n.length; c++) {
                (a = n[c]), null == t[c] && null != a && (u(a) ? (t[c] = []) : s(a) && (t[c] = {}));
                var f = e(t[c], a, r);
                i(n, c, f) ? delete t[c] : (t[c] = f);
              }
              return r(t);
            }
            if (s(n)) {
              for (var d in n)
                if (n.hasOwnProperty(d) && (t.hasOwnProperty(d) || null == t[d])) {
                  var p = n[d];
                  u(p)
                    ? (!u(t[d]) && (t[d] = []), e(t[d], p, r), (t[d] = r(t[d])))
                    : s(p)
                    ? (!s(t[d]) && (t[d] = {}), e(t[d], p, r), (t[d] = r(t[d])))
                    : null == t
                    ? ((t = {}), !i(n, d, p) && (t[d] = r(p)))
                    : i(n, d, p)
                    ? delete t[d]
                    : (t[d] = r(p));
                }
              return r(t);
            }
            return r(n);
          },
          o = function (e) {
            return e;
          },
          l = function (e, t, n) {
            return null == n;
          },
          a = /^\s*function Array()/,
          u = function (e) {
            return null != e && e.push && a.test(e.constructor);
          },
          c = /^\s*function Object()/,
          s = function (e) {
            return null != e && 'object' == typeof e && c.test(e.constructor);
          },
          f = function (e) {
            if (null == e) return !0;
            if (u(e) && !e.length) return !0;
            if (s(e)) {
              for (var t in e) return !1;
              return !0;
            }
            return !1;
          };
      },
      18: () => {
        'use strict';
      },
      17: (e, t, n) => {
        'use strict';
        n.d(t, { default: () => r });
        const r = function (e, t) {
          var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 50,
            r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 5e3,
            i = 4 < arguments.length ? arguments[4] : void 0,
            o = null,
            l = new Date().getTime(),
            a = function a() {
              return new Date().getTime() - l > r
                ? void ('function' == typeof i && i())
                : void (e() ? t() : (clearTimeout(o), (o = setTimeout(a, n))));
            };
          o = setTimeout(a, 1);
        };
      },
      2: (e, t, n) => {
        'use strict';
        var r;
        n.d(t, { default: () => i });
        try {
          (r = self).self !== r &&
            void 0 !== typeof r.self &&
            'undefined' != typeof window &&
            (r = window);
        } catch (e) {
          r = 'undefined' == typeof globalThis ? window : globalThis;
        }
        const i = r;
      },
      27: (e, t, n) => {
        'use strict';
        n.d(t, { default: () => o });
        var r = n(13),
          i = n.n(r);
        const o = function (e, t) {
          return new (i())(function (n, r) {
            var i;
            null == t && (t = 8e3),
              ((i = document.createElement('script')).src = e),
              (i.async = !0),
              (i.type = 'text/javascript');
            var o = null,
              l = !1,
              a = function () {
                (i.onerror = i.onreadystatechange = i.onload = null),
                  clearTimeout(o),
                  clearTimeout(c),
                  (o = setTimeout(function () {
                    i && i.parentNode && i.parentNode.removeChild(i);
                  }, 500));
              },
              u = function () {
                var e = i.readyState;
                l ||
                  (e && !/loaded|complete/.test(e)) ||
                  ((l = !0),
                  setTimeout(function () {
                    n(), a();
                  }, 1));
              },
              c = setTimeout(function () {
                (l = !0), a(), r('timeout');
              }, t);
            (i.onerror = function () {
              (l = !0), a(), r('error');
            }),
              (i.onreadystatechange = u),
              (i.onload = u),
              (document.body || document.head).appendChild(i);
          });
        };
      },
      9: (e, t, n) => {
        'use strict';
        n.d(t, { seqId: () => i });
        var r = n(1),
          i = function () {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 'wistia_',
              t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : '',
              n = r.default._sequenceVal || 1,
              i = '' + e + n + t;
            return (r.default._sequenceVal = n + 1), i;
          };
      },
      6: (e, t, n) => {
        'use strict';
        function r(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function i(e) {
          for (var t, n = 1; n < arguments.length; n++)
            (t = null == arguments[n] ? {} : arguments[n]),
              n % 2
                ? r(Object(t), !0).forEach(function (n) {
                    o(e, n, t[n]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                : r(Object(t)).forEach(function (n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                  });
          return e;
        }
        function o(e, t, n) {
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
        n.d(t, { standardSvgAttrs: () => l });
        var l = function (e, t) {
          var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
          return {
            'x': '0px',
            'y': '0px',
            'viewBox': '0 0 '.concat(e, ' ').concat(t),
            'enable-background': 'new 0 0 '.concat(e, ' ').concat(t),
            'style': i(
              { fill: '#ffffff', height: '100%', left: 0, strokeWidth: 0, top: 0, width: '100%' },
              n
            ),
            'focusable': 'false',
          };
        };
      },
      22: (e, t, n) => {
        'use strict';
        n.d(t, { makeWbindable: () => o });
        var r = n(1),
          i = n(23);
        r.default.bindable ||
          (r.default.bindable = {
            bind: function (e, t) {
              return this.specialBind && !0 === this.specialBind.apply(this, arguments)
                ? this
                : t
                ? (i.bind.call(this, e, t), this)
                : void (
                    r.default.warn &&
                    r.default.warn(
                      this.constructor.name,
                      'bind',
                      'falsey value passed in as callback:',
                      t
                    )
                  );
            },
            unbind: function (e, t) {
              return (
                (this.specialUnbind && !0 === this.specialUnbind.apply(this, arguments)) ||
                  (t ? i.unbind.call(this, e, t) : this._bindings && (this._bindings[e] = []),
                  this._bindings &&
                    this._bindings[e] &&
                    !this._bindings[e].length &&
                    ((this._bindings[e] = null), delete this._bindings[e])),
                this
              );
            },
            on: function (e, t) {
              var n = this.specialBind && this.specialBind.apply(this, arguments);
              return 'function' == typeof n ? n : i.bind.call(this, e, t);
            },
            off: function (e, t) {
              var n = this.specialUnbind && this.specialUnbind.apply(this, arguments);
              return 'function' == typeof n ? n : i.unbind.call(this, e, t);
            },
            rebind: function (e, t) {
              return this.unbind(e, t), this.bind(e, t), this;
            },
            trigger: function (e) {
              for (var t, n = arguments.length, r = Array(1 < n ? n - 1 : 0), o = 1; o < n; o++)
                r[o - 1] = arguments[o];
              return (t = i.trigger).call.apply(t, [this, e].concat(r)), this;
            },
            bindNamed: function () {
              return i.bindNamed.apply(this, arguments);
            },
            unbindNamed: function () {
              return i.unbindNamed.apply(this, arguments);
            },
            unbindAllInNamespace: function () {
              return i.unbindAllInNamespace.apply(this, arguments);
            },
          });
        var o = function (e) {
          for (var t in r.default.bindable) {
            var n = r.default.bindable[t];
            e[t] || (e[t] = n);
          }
        };
        r.default.bindable;
      },
      20: (e, t, n) => {
        'use strict';
        n.d(t, { wlog: () => y });
        var r = n(1),
          i = n(19),
          o = n(21);
        function l(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return a(e);
            })(e) ||
            (function (e) {
              if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
                return Array.from(e);
            })(e) ||
            (function (e, t) {
              if (e) {
                if ('string' == typeof e) return a(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  'Object' === n && e.constructor && (n = e.constructor.name),
                  'Map' === n || 'Set' === n
                    ? Array.from(e)
                    : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? a(e, t)
                    : void 0
                );
              }
            })(e) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              );
            })()
          );
        }
        function a(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var u = (0, i.cachedDetect)(),
          c = {
            ERROR: 0,
            WARNING: 1,
            NOTICE: 2,
            INFO: 3,
            DEBUG: 4,
            error: 0,
            warning: 1,
            notice: 2,
            info: 3,
            debug: 4,
          },
          s = function () {},
          f = function (e) {
            var t = this;
            null == e && (e = {});
            return (
              (t.error = function () {
                for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                return t.log(0, n);
              }),
              (t.warn = function () {
                for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                return t.log(1, n);
              }),
              (t.notice = function () {
                for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                return t.log(1, n);
              }),
              (t.info = function () {
                for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                return t.log(3, n);
              }),
              (t.debug = function () {
                for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                return t.log(4, n);
              }),
              (t.ctx = e),
              t.ctx.initializedAt || t.reset(),
              t
            );
          },
          d = f.prototype;
        (d.reset = function () {
          (this.ctx.level = 0),
            (this.ctx.grep = null),
            (this.ctx.grepv = null),
            (this.ctx.first1000LogLines = []),
            (this.ctx.last1000LogLines = []),
            (this.ctx.initializedAt = new Date().getTime());
        }),
          (d.setLevel = function (e) {
            var t = this.logFunc(3);
            null == c[e]
              ? t('Unknown log level "'.concat(e, '"'))
              : ((this.ctx.level = c[e]),
                t('Log level set to "'.concat(e, '" (').concat(c[e], ')')));
          }),
          (d.setGrep = function (e) {
            this.ctx.grep = e;
          }),
          (d.setGrepv = function (e) {
            this.ctx.grepv = e;
          }),
          (d.first1000LogLines = function () {
            return this.ctx.first1000LogLines;
          }),
          (d.last1000LogLines = function () {
            return this.ctx.last1000LogLines;
          }),
          (d.matchedGrep = function (e) {
            var t = !1;
            if (this.ctx.grep || this.ctx.grepv) {
              for (var n = [], r = 0; r < e.length; r++)
                try {
                  var i = e[r];
                  n.push(i.toString && i.toString());
                } catch (e) {
                  n.push('');
                }
              var o = n.join(' '),
                l = !this.ctx.grep || o.match(this.ctx.grep),
                a = !this.ctx.grepv || !o.match(this.ctx.grepv);
              t = l && a;
            } else t = !0;
            return t;
          }),
          (d.now = function () {
            return 'undefined' != typeof performance && 'function' == typeof performance.now
              ? performance.now().toFixed(3)
              : Date.now
              ? Date.now() - this.ctx.initializedAt
              : new Date().getTime() - this.ctx.initializedAt;
          }),
          (d.messagesToLogLine = function (e, t, n) {
            var r,
              i = [e, t];
            i = i.concat(n);
            try {
              200 < (r = i.join(' ') || '').length && (r = r.slice(0, 200));
            } catch (e) {
              r = 'could not serialize';
            }
            return r;
          }),
          (d.persistLine = function (e) {
            1e3 > this.ctx.first1000LogLines.length
              ? this.ctx.first1000LogLines.push(e)
              : (1e3 <= this.ctx.last1000LogLines.length && this.ctx.last1000LogLines.shift(),
                this.ctx.last1000LogLines.push(e));
          }),
          (d.log = function (e, t) {
            var n,
              r = e <= this.ctx.level,
              i = e < 4,
              a = (r || i) && this.matchedGrep(t);
            if (
              (0 === e &&
                (0, o.globalTrigger)('problem', { type: 'error-logged', data: { messages: t } }),
              a && (r || i) && (n = this.now()),
              i && a)
            ) {
              var c = this.messagesToLogLine(e, n, t);
              this.persistLine(c);
            }
            if (r && a) {
              var s,
                f = this.logFunc(e);
              1 === t.length && (s = t[0]) instanceof Error
                ? (f(s.message), s.stack && f(s.stack))
                : u.browser.msie && (9 > u.browser.version || u.browser.quirks)
                ? f(t.join(' '))
                : f.apply(void 0, l(t));
            }
          });
        var p = function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            console.error.apply(console, t);
          },
          _ = function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            console.warn.apply(console, t);
          },
          h = function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            console.info.apply(console, t);
          },
          v = function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            console.debug.apply(console, t);
          },
          g = function (e) {
            console.log.apply(console, e);
          };
        (d.logFunc = function (e) {
          return (
            null == e && (e = this.level),
            console
              ? (0 === e ? (t = p) : 1 === e ? (t = _) : 3 === e ? (t = h) : 4 === e && (t = v),
                t || (t = g),
                'function' != typeof t && ((this.noConsoleLog = !0), (t = s)),
                t)
              : s
          );
          var t;
        }),
          (d.maybePrefix = function (e, t) {
            if (e) {
              if ('function' == typeof e)
                try {
                  e = e();
                } catch (t) {
                  e = 'prefix err "'.concat(t.message, '"');
                }
              return e instanceof Array ? e.concat(t) : [e].concat(t);
            }
            return t;
          }),
          (d.getPrefixedFunctions = function (e) {
            var t = this;
            return {
              log: function () {
                for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                return t.log(0, t.maybePrefix(e, r));
              },
              error: function () {
                for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                return t.log(0, t.maybePrefix(e, r));
              },
              warn: function () {
                for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                return t.log(1, t.maybePrefix(e, r));
              },
              notice: function () {
                for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                return t.log(1, t.maybePrefix(e, r));
              },
              info: function () {
                for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                return t.log(3, t.maybePrefix(e, r));
              },
              debug: function () {
                for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                return t.log(4, t.maybePrefix(e, r));
              },
            };
          }),
          r.default && null == r.default.wlogCtx && (r.default.wlogCtx = {});
        var y = new f(r.default.wlogCtx);
      },
      1: (e, t, n) => {
        'use strict';
        n.d(t, { default: () => o });
        var r = n(2);
        null == r.default.Wistia && (r.default.Wistia = {});
        var i = r.default.Wistia;
        null == i._initializers && (i._initializers = {}),
          null == i._destructors && (i._destructors = {}),
          null == i.mixin &&
            (i.mixin = function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            });
        const o = r.default.Wistia;
      },
      5: (e, t, n) => {
        'use strict';
        n.d(t, { render: () => R, h: () => _, Component: () => g });
        var r,
          i,
          o,
          l,
          a,
          u,
          c = {},
          s = [],
          f = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
        function d(e, t) {
          for (var n in t) e[n] = t[n];
          return e;
        }
        function p(e) {
          var t = e.parentNode;
          t && t.removeChild(e);
        }
        function _(e, t, n) {
          var i,
            o,
            l,
            a = {};
          for (l in t) 'key' == l ? (i = t[l]) : 'ref' == l ? (o = t[l]) : (a[l] = t[l]);
          if (
            (2 < arguments.length && (a.children = 3 < arguments.length ? r.call(arguments, 2) : n),
            'function' == typeof e && null != e.defaultProps)
          )
            for (l in e.defaultProps) void 0 === a[l] && (a[l] = e.defaultProps[l]);
          return h(e, a, i, o, null);
        }
        function h(e, t, n, r, l) {
          var a = {
            type: e,
            props: t,
            key: n,
            ref: r,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            __h: null,
            constructor: void 0,
            __v: null == l ? ++o : l,
          };
          return null == l && null != i.vnode && i.vnode(a), a;
        }
        function v(e) {
          return e.children;
        }
        function g(e, t) {
          (this.props = e), (this.context = t);
        }
        function y(e, t) {
          if (null == t) return e.__ ? y(e.__, e.__.__k.indexOf(e) + 1) : null;
          for (var n; t < e.__k.length; t++)
            if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
          return 'function' == typeof e.type ? y(e) : null;
        }
        function m(e) {
          var t, n;
          if (null != (e = e.__) && null != e.__c) {
            for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
              if (null != (n = e.__k[t]) && null != n.__e) {
                e.__e = e.__c.base = n.__e;
                break;
              }
            return m(e);
          }
        }
        function b(e) {
          ((!e.__d && (e.__d = !0) && l.push(e) && !w.__r++) || u !== i.debounceRendering) &&
            ((u = i.debounceRendering) || a)(w);
        }
        function w() {
          for (var e; (w.__r = l.length); )
            (e = l.sort(function (e, t) {
              return e.__v.__b - t.__v.__b;
            })),
              (l = []),
              e.some(function (e) {
                var t, n, r, i, o, l;
                e.__d &&
                  ((o = (i = (t = e).__v).__e),
                  (l = t.__P) &&
                    ((n = []),
                    ((r = d({}, i)).__v = i.__v + 1),
                    A(
                      l,
                      i,
                      r,
                      t.__n,
                      void 0 !== l.ownerSVGElement,
                      null == i.__h ? null : [o],
                      n,
                      null == o ? y(i) : o,
                      i.__h
                    ),
                    j(n, i),
                    i.__e != o && m(i)));
              });
        }
        function k(e, t, n, r, i, o, l, a, u, f) {
          var d,
            p,
            _,
            g,
            m,
            b,
            w,
            k = (r && r.__k) || s,
            P = k.length;
          for (n.__k = [], d = 0; d < t.length; d++)
            if (
              null !=
              (g = n.__k[d] =
                null == (g = t[d]) || 'boolean' == typeof g
                  ? null
                  : 'string' == typeof g || 'number' == typeof g || 'bigint' == typeof g
                  ? h(null, g, null, null, g)
                  : Array.isArray(g)
                  ? h(v, { children: g }, null, null, null)
                  : 0 < g.__b
                  ? h(g.type, g.props, g.key, null, g.__v)
                  : g)
            ) {
              if (
                ((g.__ = n),
                (g.__b = n.__b + 1),
                null === (_ = k[d]) || (_ && g.key == _.key && g.type === _.type))
              )
                k[d] = void 0;
              else
                for (p = 0; p < P; p++) {
                  if ((_ = k[p]) && g.key == _.key && g.type === _.type) {
                    k[p] = void 0;
                    break;
                  }
                  _ = null;
                }
              A(e, g, (_ = _ || c), i, o, l, a, u, f),
                (m = g.__e),
                (p = g.ref) &&
                  _.ref != p &&
                  (w || (w = []), _.ref && w.push(_.ref, null, g), w.push(p, g.__c || m, g)),
                null == m
                  ? u && _.__e == u && u.parentNode != e && (u = y(_))
                  : (null == b && (b = m),
                    'function' == typeof g.type && g.__k === _.__k
                      ? (g.__d = u = O(g, u, e))
                      : (u = T(e, g, _, k, m, u)),
                    'function' == typeof n.type && (n.__d = u));
            }
          for (n.__e = b, d = P; d--; )
            null != k[d] &&
              ('function' == typeof n.type &&
                null != k[d].__e &&
                k[d].__e == n.__d &&
                (n.__d = y(r, d + 1)),
              L(k[d], k[d]));
          if (w) for (d = 0; d < w.length; d++) C(w[d], w[++d], w[++d]);
        }
        function O(e, t, n) {
          for (var r, i = e.__k, o = 0; i && o < i.length; o++)
            (r = i[o]) &&
              ((r.__ = e),
              (t = 'function' == typeof r.type ? O(r, t, n) : T(n, r, r, i, r.__e, t)));
          return t;
        }
        function T(e, t, n, r, i, o) {
          var l, a, u;
          if (void 0 !== t.__d) (l = t.__d), (t.__d = void 0);
          else if (null == n || i != o || null == i.parentNode)
            e: if (null == o || o.parentNode !== e) e.appendChild(i), (l = null);
            else {
              for (a = o, u = 0; (a = a.nextSibling) && u < r.length; u += 2) if (a == i) break e;
              e.insertBefore(i, o), (l = o);
            }
          return void 0 === l ? i.nextSibling : l;
        }
        function P(e, t, n) {
          '-' === t[0]
            ? e.setProperty(t, n)
            : (e[t] = null == n ? '' : 'number' != typeof n || f.test(t) ? n : n + 'px');
        }
        function x(e, t, n, r, i) {
          var o;
          e: if ('style' === t)
            if ('string' == typeof n) e.style.cssText = n;
            else {
              if (('string' == typeof r && (e.style.cssText = r = ''), r))
                for (t in r) (n && t in n) || P(e.style, t, '');
              if (n) for (t in n) (r && n[t] === r[t]) || P(e.style, t, n[t]);
            }
          else if ('o' === t[0] && 'n' === t[1])
            (o = t !== (t = t.replace(/Capture$/, ''))),
              (t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
              e.l || (e.l = {}),
              (e.l[t + o] = n),
              n ? r || e.addEventListener(t, o ? E : S, o) : e.removeEventListener(t, o ? E : S, o);
          else if ('dangerouslySetInnerHTML' !== t) {
            if (i) t = t.replace(/xlink[H:h]/, 'h').replace(/sName$/, 's');
            else if (
              'href' !== t &&
              'list' !== t &&
              'form' !== t &&
              'tabIndex' !== t &&
              'download' !== t &&
              t in e
            )
              try {
                e[t] = null == n ? '' : n;
                break e;
              } catch (e) {}
            'function' == typeof n ||
              (null != n && (!1 !== n || ('a' === t[0] && 'r' === t[1]))
                ? e.setAttribute(t, n)
                : e.removeAttribute(t));
          }
        }
        function S(e) {
          this.l[e.type + !1](i.event ? i.event(e) : e);
        }
        function E(e) {
          this.l[e.type + !0](i.event ? i.event(e) : e);
        }
        function A(e, t, n, r, o, l, a, u, c) {
          var s,
            f,
            p,
            _,
            h,
            y,
            m,
            b,
            w,
            O,
            T,
            P = t.type;
          if (void 0 !== t.constructor) return null;
          null != n.__h && ((c = n.__h), (u = t.__e = n.__e), (t.__h = null), (l = [u])),
            (s = i.__b) && s(t);
          try {
            e: if ('function' == typeof P) {
              if (
                ((b = t.props),
                (w = (s = P.contextType) && r[s.__c]),
                (O = s ? (w ? w.props.value : s.__) : r),
                n.__c
                  ? (m = (f = t.__c = n.__c).__ = f.__E)
                  : ('prototype' in P && P.prototype.render
                      ? (t.__c = f = new P(b, O))
                      : ((t.__c = f = new g(b, O)), (f.constructor = P), (f.render = D)),
                    w && w.sub(f),
                    (f.props = b),
                    f.state || (f.state = {}),
                    (f.context = O),
                    (f.__n = r),
                    (p = f.__d = !0),
                    (f.__h = [])),
                null == f.__s && (f.__s = f.state),
                null != P.getDerivedStateFromProps &&
                  (f.__s == f.state && (f.__s = d({}, f.__s)),
                  d(f.__s, P.getDerivedStateFromProps(b, f.__s))),
                (_ = f.props),
                (h = f.state),
                p)
              )
                null == P.getDerivedStateFromProps &&
                  null != f.componentWillMount &&
                  f.componentWillMount(),
                  null != f.componentDidMount && f.__h.push(f.componentDidMount);
              else {
                if (
                  (null == P.getDerivedStateFromProps &&
                    b !== _ &&
                    null != f.componentWillReceiveProps &&
                    f.componentWillReceiveProps(b, O),
                  (!f.__e &&
                    null != f.shouldComponentUpdate &&
                    !1 === f.shouldComponentUpdate(b, f.__s, O)) ||
                    t.__v === n.__v)
                ) {
                  (f.props = b),
                    (f.state = f.__s),
                    t.__v !== n.__v && (f.__d = !1),
                    (f.__v = t),
                    (t.__e = n.__e),
                    (t.__k = n.__k),
                    t.__k.forEach(function (e) {
                      e && (e.__ = t);
                    }),
                    f.__h.length && a.push(f);
                  break e;
                }
                null != f.componentWillUpdate && f.componentWillUpdate(b, f.__s, O),
                  null != f.componentDidUpdate &&
                    f.__h.push(function () {
                      f.componentDidUpdate(_, h, y);
                    });
              }
              (f.context = O),
                (f.props = b),
                (f.state = f.__s),
                (s = i.__r) && s(t),
                (f.__d = !1),
                (f.__v = t),
                (f.__P = e),
                (s = f.render(f.props, f.state, f.context)),
                (f.state = f.__s),
                null != f.getChildContext && (r = d(d({}, r), f.getChildContext())),
                p || null == f.getSnapshotBeforeUpdate || (y = f.getSnapshotBeforeUpdate(_, h)),
                (T = null != s && s.type === v && null == s.key ? s.props.children : s),
                k(e, Array.isArray(T) ? T : [T], t, n, r, o, l, a, u, c),
                (f.base = t.__e),
                (t.__h = null),
                f.__h.length && a.push(f),
                m && (f.__E = f.__ = null),
                (f.__e = !1);
            } else
              null == l && t.__v === n.__v
                ? ((t.__k = n.__k), (t.__e = n.__e))
                : (t.__e = B(n.__e, t, n, r, o, l, a, c));
            (s = i.diffed) && s(t);
          } catch (e) {
            (t.__v = null),
              (c || null != l) && ((t.__e = u), (t.__h = !!c), (l[l.indexOf(u)] = null)),
              i.__e(e, t, n);
          }
        }
        function j(e, t) {
          i.__c && i.__c(t, e),
            e.some(function (t) {
              try {
                (e = t.__h),
                  (t.__h = []),
                  e.some(function (e) {
                    e.call(t);
                  });
              } catch (e) {
                i.__e(e, t.__v);
              }
            });
        }
        function B(e, t, n, i, o, l, a, u) {
          var s,
            f,
            d,
            _ = n.props,
            h = t.props,
            v = t.type,
            g = 0;
          if (('svg' === v && (o = !0), null != l))
            for (; g < l.length; g++)
              if ((s = l[g]) && (s === e || (v ? s.localName == v : 3 == s.nodeType))) {
                (e = s), (l[g] = null);
                break;
              }
          if (null == e) {
            if (null === v) return document.createTextNode(h);
            (e = o
              ? document.createElementNS('http://www.w3.org/2000/svg', v)
              : document.createElement(v, h.is && h)),
              (l = null),
              (u = !1);
          }
          if (null === v) _ === h || (u && e.data === h) || (e.data = h);
          else {
            if (
              ((l = l && r.call(e.childNodes)),
              (f = (_ = n.props || c).dangerouslySetInnerHTML),
              (d = h.dangerouslySetInnerHTML),
              !u)
            ) {
              if (null != l)
                for (_ = {}, g = 0; g < e.attributes.length; g++)
                  _[e.attributes[g].name] = e.attributes[g].value;
              (d || f) &&
                ((d && ((f && d.__html == f.__html) || d.__html === e.innerHTML)) ||
                  (e.innerHTML = (d && d.__html) || ''));
            }
            if (
              ((function (e, t, n, r, i) {
                var o;
                for (o in n) 'children' === o || 'key' === o || o in t || x(e, o, null, n[o], r);
                for (o in t)
                  (i && 'function' != typeof t[o]) ||
                    'children' === o ||
                    'key' === o ||
                    'value' === o ||
                    'checked' === o ||
                    n[o] === t[o] ||
                    x(e, o, t[o], n[o], r);
              })(e, h, _, o, u),
              d)
            )
              t.__k = [];
            else if (
              ((g = t.props.children),
              k(
                e,
                Array.isArray(g) ? g : [g],
                t,
                n,
                i,
                o && 'foreignObject' !== v,
                l,
                a,
                l ? l[0] : n.__k && y(n, 0),
                u
              ),
              null != l)
            )
              for (g = l.length; g--; ) null != l[g] && p(l[g]);
            u ||
              ('value' in h &&
                void 0 !== (g = h.value) &&
                (g !== e.value || ('progress' === v && !g)) &&
                x(e, 'value', g, _.value, !1),
              'checked' in h &&
                void 0 !== (g = h.checked) &&
                g !== e.checked &&
                x(e, 'checked', g, _.checked, !1));
          }
          return e;
        }
        function C(e, t, n) {
          try {
            'function' == typeof e ? e(t) : (e.current = t);
          } catch (e) {
            i.__e(e, n);
          }
        }
        function L(e, t, n) {
          var r, o;
          if (
            (i.unmount && i.unmount(e),
            (r = e.ref) && ((r.current && r.current !== e.__e) || C(r, null, t)),
            null != (r = e.__c))
          ) {
            if (r.componentWillUnmount)
              try {
                r.componentWillUnmount();
              } catch (e) {
                i.__e(e, t);
              }
            r.base = r.__P = null;
          }
          if ((r = e.__k))
            for (o = 0; o < r.length; o++) r[o] && L(r[o], t, 'function' != typeof e.type);
          n || null == e.__e || p(e.__e), (e.__e = e.__d = void 0);
        }
        function D(e, t, n) {
          return this.constructor(e, n);
        }
        function R(e, t, n) {
          var o, l, a;
          i.__ && i.__(e, t),
            (l = (o = 'function' == typeof n) ? null : (n && n.__k) || t.__k),
            (a = []),
            A(
              t,
              (e = ((!o && n) || t).__k = _(v, null, [e])),
              l || c,
              c,
              void 0 !== t.ownerSVGElement,
              !o && n ? [n] : l ? null : t.firstChild ? r.call(t.childNodes) : null,
              a,
              !o && n ? n : l ? l.__e : t.firstChild,
              o
            ),
            j(a, e);
        }
        (r = s.slice),
          (i = {
            __e: function (e, t) {
              for (var n, r, i; (t = t.__); )
                if ((n = t.__c) && !n.__)
                  try {
                    if (
                      ((r = n.constructor) &&
                        null != r.getDerivedStateFromError &&
                        (n.setState(r.getDerivedStateFromError(e)), (i = n.__d)),
                      null != n.componentDidCatch && (n.componentDidCatch(e), (i = n.__d)),
                      i)
                    )
                      return (n.__E = n);
                  } catch (t) {
                    e = t;
                  }
              throw e;
            },
          }),
          (o = 0),
          (g.prototype.setState = function (e, t) {
            var n;
            (n =
              null != this.__s && this.__s !== this.state
                ? this.__s
                : (this.__s = d({}, this.state))),
              'function' == typeof e && (e = e(d({}, n), this.props)),
              e && d(n, e),
              null != e && this.__v && (t && this.__h.push(t), b(this));
          }),
          (g.prototype.forceUpdate = function (e) {
            this.__v && ((this.__e = !0), e && this.__h.push(e), b(this));
          }),
          (g.prototype.render = v),
          (l = []),
          (a =
            'function' == typeof Promise
              ? Promise.prototype.then.bind(Promise.resolve())
              : setTimeout),
          (w.__r = 0);
      },
      13: (e) => {
        !(function (t, n) {
          function r(e, t) {
            return (typeof t)[0] == e;
          }
          function i(e, n) {
            return (
              ((n = function l(a, u, c, s, f, d) {
                if (((s = l.q), a != r))
                  return i(function (e, t) {
                    s.push({ p: this, r: e, j: t, 1: a, 0: u });
                  });
                if (c && r(t, c) | r('o', c))
                  try {
                    f = c.then;
                  } catch (e) {
                    (u = 0), (c = e);
                  }
                if (r(t, f)) {
                  var p = function (e) {
                    return function (t) {
                      f && ((f = 0), l(r, e, t));
                    };
                  };
                  try {
                    f.call(c, p(1), (u = p(0)));
                  } catch (e) {
                    u(e);
                  }
                } else
                  for (
                    n = function (n, l) {
                      return r(t, (n = u ? n : l))
                        ? i(function (e, t) {
                            o(this, e, t, c, n);
                          })
                        : e;
                    },
                      d = 0;
                    d < s.length;

                  )
                    (f = s[d++]), r(t, (a = f[u])) ? o(f.p, f.r, f.j, c, a) : (u ? f.r : f.j)(c);
              }).q = []),
              e.call(
                (e = {
                  then: function (e, t) {
                    return n(e, t);
                  },
                  catch: function (e) {
                    return n(0, e);
                  },
                }),
                function (e) {
                  n(r, 1, e);
                },
                function (e) {
                  n(r, 0, e);
                }
              ),
              e
            );
          }
          function o(e, n, i, o, l) {
            var a = function () {
              try {
                (o = l(o)),
                  (l = o && r('o', o) | r(t, o) && o.then),
                  r(t, l) ? (o == e ? i(TypeError()) : l.call(o, n, i)) : n(o);
              } catch (e) {
                i(e);
              }
            };
            window.setImmediate ? window.setImmediate(a) : setTimeout(a, 0);
          }
          function l(e) {
            return i(function (t) {
              t(e);
            });
          }
          window.Promise
            ? (e.exports = window.Promise)
            : ((e.exports = i),
              (i.resolve = l),
              (i.reject = function (e) {
                return i(function (t, n) {
                  n(e);
                });
              }),
              (i.all = function (e) {
                return i(function (t, n, r, i) {
                  (i = []),
                    (r = e.length || t(i)),
                    e.map(function (e, o) {
                      l(e).then(function (e) {
                        (i[o] = e), --r || t(i);
                      }, n);
                    });
                });
              }),
              (i.race = function (e) {
                return i(function (t, n) {
                  e.map(function (e) {
                    l(e).then(t, n);
                  });
                });
              }));
        })('f');
      },
    },
    __webpack_module_cache__ = {};
  function __webpack_require__(e) {
    var t = __webpack_module_cache__[e];
    if (void 0 !== t) return t.exports;
    var n = (__webpack_module_cache__[e] = { exports: {} });
    return __webpack_modules__[e](n, n.exports, __webpack_require__), n.exports;
  }
  (__webpack_require__.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return __webpack_require__.d(t, { a: t }), t;
  }),
    (__webpack_require__.d = (e, t) => {
      for (var n in t)
        __webpack_require__.o(t, n) &&
          !__webpack_require__.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (__webpack_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t));
  var __webpack_exports__ = {};
  (() => {
    'use strict';
    var e = __webpack_require__(1),
      t = __webpack_require__(43);
    __webpack_require__(134);
    function n(e, t) {
      for (var n, r = 0; r < t.length; r++)
        ((n = t[r]).enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
    }
    function r(e, t, n) {
      return (r =
        'undefined' != typeof Reflect && Reflect.get
          ? Reflect.get
          : function (e, t, n) {
              var r = (function (e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = a(e)); );
                return e;
              })(e, t);
              if (r) {
                var i = Object.getOwnPropertyDescriptor(r, t);
                return i.get ? i.get.call(n) : i.value;
              }
            })(e, t, n || e);
    }
    function i(e, t) {
      return (i =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function o(e) {
      var t = (function () {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var n,
          r = a(e);
        if (t) {
          var i = a(this).constructor;
          n = Reflect.construct(r, arguments, i);
        } else n = r.apply(this, arguments);
        return l(this, n);
      };
    }
    function l(e, t) {
      return !t || ('object' != typeof t && 'function' != typeof t)
        ? (function (e) {
            if (void 0 === e)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
          })(e)
        : t;
    }
    function a(e) {
      return (a = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var u = (function (e) {
      function l(e, n) {
        var r;
        return (
          (function (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
          })(this, l),
          ((r = f.call(this, e, n)).pluginName = 'airplay'),
          (r.video = e),
          (r.options = n),
          (r._isEnabled = !1 !== n.on),
          (r._origImpl = e._impl),
          (0, t.doTimeout)(
            ''.concat(e.uuid, '.enable_or_disable_airplay_control'),
            function () {
              r._isEnabled ? r.enable() : r.disable();
            },
            1
          ),
          r
        );
      }
      !(function (e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && i(e, t);
      })(l, e);
      var u,
        c,
        s,
        f = o(l);
      return (
        (u = l),
        (c = [
          {
            key: 'enable',
            value: function () {
              this.video.setControlEnabled('airplayButton', !0);
            },
          },
          {
            key: 'disable',
            value: function () {
              this.video.setControlEnabled('airplayButton', !1);
            },
          },
          {
            key: 'remove',
            value: function () {
              this.video._impl === this._origImpl && this.disable(),
                r(a(l.prototype), 'remove', this).call(this);
            },
          },
        ]) && n(u.prototype, c),
        s && n(u, s),
        l
      );
    })(e.default.Plugin.Base);
    e.default.plugin('airplay', function (e, t) {
      return new u(e, t);
    });
  })();
})();
