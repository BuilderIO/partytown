/******/ (() => {
  // webpackBootstrap
  /******/ 'use strict';
  /******/ var __webpack_modules__ = [
    ,
    /* 0 */ /* 1 */
    /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
    /* 2 */
    /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
    ,
    ,
    /* 3 */ /* 4 */ /* 5 */
    /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ render: () => /* binding */ S,
        /* harmony export */ hydrate: () => /* binding */ q,
        /* harmony export */ createElement: () => /* binding */ v,
        /* harmony export */ h: () => /* binding */ v,
        /* harmony export */ Fragment: () => /* binding */ d,
        /* harmony export */ createRef: () => /* binding */ p,
        /* harmony export */ isValidElement: () => /* binding */ i,
        /* harmony export */ Component: () => /* binding */ _,
        /* harmony export */ cloneElement: () => /* binding */ B,
        /* harmony export */ createContext: () => /* binding */ D,
        /* harmony export */ toChildArray: () => /* binding */ A,
        /* harmony export */ options: () => /* binding */ l,
        /* harmony export */
      });
      /*** IMPORTS FROM imports-loader ***/ var n,
        l,
        u,
        i,
        t,
        r,
        o,
        f,
        define = void 0,
        e = {},
        c = [],
        s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      function a(n, l) {
        for (var u in l) n[u] = l[u];
        return n;
      }
      function h(n) {
        var l = n.parentNode;
        l && l.removeChild(n);
      }
      function v(l, u, i) {
        var t,
          r,
          o,
          f = {};
        for (o in u) 'key' == o ? (t = u[o]) : 'ref' == o ? (r = u[o]) : (f[o] = u[o]);
        if (
          (2 < arguments.length && (f.children = 3 < arguments.length ? n.call(arguments, 2) : i),
          'function' == typeof l && null != l.defaultProps)
        )
          for (o in l.defaultProps) void 0 === f[o] && (f[o] = l.defaultProps[o]);
        return y(l, f, t, r, null);
      }
      function y(n, i, t, r, o) {
        var f = {
          type: n,
          props: i,
          key: t,
          ref: r,
          __k: null,
          __: null,
          __b: 0,
          __e: null,
          __d: void 0,
          __c: null,
          __h: null,
          constructor: void 0,
          __v: null == o ? ++u : o,
        };
        return null == o && null != l.vnode && l.vnode(f), f;
      }
      function p() {
        return { current: null };
      }
      function d(n) {
        return n.children;
      }
      function _(n, l) {
        (this.props = n), (this.context = l);
      }
      function k(n, l) {
        if (null == l) return n.__ ? k(n.__, n.__.__k.indexOf(n) + 1) : null;
        for (var u; l < n.__k.length; l++)
          if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
        return 'function' == typeof n.type ? k(n) : null;
      }
      function b(n) {
        var l, u;
        if (null != (n = n.__) && null != n.__c) {
          for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++)
            if (null != (u = n.__k[l]) && null != u.__e) {
              n.__e = n.__c.base = u.__e;
              break;
            }
          return b(n);
        }
      }
      function m(n) {
        ((!n.__d && (n.__d = !0) && t.push(n) && !g.__r++) || o !== l.debounceRendering) &&
          ((o = l.debounceRendering) || r)(g);
      }
      function g() {
        for (var n; (g.__r = t.length); )
          (n = t.sort(function (n, l) {
            return n.__v.__b - l.__v.__b;
          })),
            (t = []),
            n.some(function (n) {
              var l, u, i, t, r, o;
              n.__d &&
                ((r = (t = (l = n).__v).__e),
                (o = l.__P) &&
                  ((u = []),
                  ((i = a({}, t)).__v = t.__v + 1),
                  j(
                    o,
                    t,
                    i,
                    l.__n,
                    void 0 !== o.ownerSVGElement,
                    null == t.__h ? null : [r],
                    u,
                    null == r ? k(t) : r,
                    t.__h
                  ),
                  z(u, t),
                  t.__e != r && b(t)));
            });
      }
      function w(n, l, u, i, t, r, o, f, s, a) {
        var h,
          v,
          p,
          _,
          b,
          m,
          g,
          w = (i && i.__k) || c,
          A = w.length;
        for (u.__k = [], h = 0; h < l.length; h++)
          if (
            null !=
            (_ = u.__k[h] =
              null == (_ = l[h]) || 'boolean' == typeof _
                ? null
                : 'string' == typeof _ || 'number' == typeof _ || 'bigint' == typeof _
                ? y(null, _, null, null, _)
                : Array.isArray(_)
                ? y(d, { children: _ }, null, null, null)
                : 0 < _.__b
                ? y(_.type, _.props, _.key, null, _.__v)
                : _)
          ) {
            if (
              ((_.__ = u),
              (_.__b = u.__b + 1),
              null === (p = w[h]) || (p && _.key == p.key && _.type === p.type))
            )
              w[h] = void 0;
            else
              for (v = 0; v < A; v++) {
                if ((p = w[v]) && _.key == p.key && _.type === p.type) {
                  w[v] = void 0;
                  break;
                }
                p = null;
              }
            j(n, _, (p = p || e), t, r, o, f, s, a),
              (b = _.__e),
              (v = _.ref) &&
                p.ref != v &&
                (g || (g = []), p.ref && g.push(p.ref, null, _), g.push(v, _.__c || b, _)),
              null == b
                ? s && p.__e == s && s.parentNode != n && (s = k(p))
                : (null == m && (m = b),
                  'function' == typeof _.type && _.__k === p.__k
                    ? (_.__d = s = x(_, s, n))
                    : (s = P(n, _, p, w, b, s)),
                  'function' == typeof u.type && (u.__d = s));
          }
        for (u.__e = m, h = A; h--; )
          null != w[h] &&
            ('function' == typeof u.type &&
              null != w[h].__e &&
              w[h].__e == u.__d &&
              (u.__d = k(i, h + 1)),
            N(w[h], w[h]));
        if (g) for (h = 0; h < g.length; h++) M(g[h], g[++h], g[++h]);
      }
      function x(n, l, u) {
        for (var i, t = n.__k, r = 0; t && r < t.length; r++)
          (i = t[r]) &&
            ((i.__ = n), (l = 'function' == typeof i.type ? x(i, l, u) : P(u, i, i, t, i.__e, l)));
        return l;
      }
      function A(n, l) {
        return (
          (l = l || []),
          null == n ||
            'boolean' == typeof n ||
            (Array.isArray(n)
              ? n.some(function (n) {
                  A(n, l);
                })
              : l.push(n)),
          l
        );
      }
      function P(n, l, u, i, t, r) {
        var o, f, e;
        if (void 0 !== l.__d) (o = l.__d), (l.__d = void 0);
        else if (null == u || t != r || null == t.parentNode)
          n: if (null == r || r.parentNode !== n) n.appendChild(t), (o = null);
          else {
            for (f = r, e = 0; (f = f.nextSibling) && e < i.length; e += 2) if (f == t) break n;
            n.insertBefore(t, r), (o = r);
          }
        return void 0 === o ? t.nextSibling : o;
      }
      function C(n, l, u, i, t) {
        var r;
        for (r in u) 'children' === r || 'key' === r || r in l || H(n, r, null, u[r], i);
        for (r in l)
          (t && 'function' != typeof l[r]) ||
            'children' === r ||
            'key' === r ||
            'value' === r ||
            'checked' === r ||
            u[r] === l[r] ||
            H(n, r, l[r], u[r], i);
      }
      function $(n, l, u) {
        '-' === l[0]
          ? n.setProperty(l, u)
          : (n[l] = null == u ? '' : 'number' != typeof u || s.test(l) ? u : u + 'px');
      }
      function H(n, l, u, i, t) {
        var r;
        n: if ('style' === l) {
          if ('string' == typeof u) n.style.cssText = u;
          else {
            if (('string' == typeof i && (n.style.cssText = i = ''), i))
              for (l in i) (u && l in u) || $(n.style, l, '');
            if (u) for (l in u) (i && u[l] === i[l]) || $(n.style, l, u[l]);
          }
        } else if ('o' === l[0] && 'n' === l[1])
          (r = l !== (l = l.replace(/Capture$/, ''))),
            (l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2)),
            n.l || (n.l = {}),
            (n.l[l + r] = u),
            u ? i || n.addEventListener(l, r ? T : I, r) : n.removeEventListener(l, r ? T : I, r);
        else if ('dangerouslySetInnerHTML' !== l) {
          if (t) l = l.replace(/xlink[H:h]/, 'h').replace(/sName$/, 's');
          else if (
            'href' !== l &&
            'list' !== l &&
            'form' !== l &&
            'tabIndex' !== l &&
            'download' !== l &&
            l in n
          )
            try {
              n[l] = null == u ? '' : u;
              break n;
            } catch (n) {}
          'function' == typeof u ||
            (null != u && (!1 !== u || ('a' === l[0] && 'r' === l[1]))
              ? n.setAttribute(l, u)
              : n.removeAttribute(l));
        }
      }
      function I(n) {
        this.l[n.type + !1](l.event ? l.event(n) : n);
      }
      function T(n) {
        this.l[n.type + !0](l.event ? l.event(n) : n);
      }
      function j(n, u, i, t, r, o, f, e, c) {
        var s,
          h,
          v,
          y,
          p,
          k,
          b,
          m,
          g,
          x,
          A,
          P = u.type;
        if (void 0 !== u.constructor) return null;
        null != i.__h && ((c = i.__h), (e = u.__e = i.__e), (u.__h = null), (o = [e])),
          (s = l.__b) && s(u);
        try {
          n: if ('function' == typeof P) {
            if (
              ((m = u.props),
              (g = (s = P.contextType) && t[s.__c]),
              (x = s ? (g ? g.props.value : s.__) : t),
              i.__c
                ? (b = (h = u.__c = i.__c).__ = h.__E)
                : ('prototype' in P && P.prototype.render
                    ? (u.__c = h = new P(m, x))
                    : ((u.__c = h = new _(m, x)), (h.constructor = P), (h.render = O)),
                  g && g.sub(h),
                  (h.props = m),
                  h.state || (h.state = {}),
                  (h.context = x),
                  (h.__n = t),
                  (v = h.__d = !0),
                  (h.__h = [])),
              null == h.__s && (h.__s = h.state),
              null != P.getDerivedStateFromProps &&
                (h.__s == h.state && (h.__s = a({}, h.__s)),
                a(h.__s, P.getDerivedStateFromProps(m, h.__s))),
              (y = h.props),
              (p = h.state),
              v)
            )
              null == P.getDerivedStateFromProps &&
                null != h.componentWillMount &&
                h.componentWillMount(),
                null != h.componentDidMount && h.__h.push(h.componentDidMount);
            else {
              if (
                (null == P.getDerivedStateFromProps &&
                  m !== y &&
                  null != h.componentWillReceiveProps &&
                  h.componentWillReceiveProps(m, x),
                (!h.__e &&
                  null != h.shouldComponentUpdate &&
                  !1 === h.shouldComponentUpdate(m, h.__s, x)) ||
                  u.__v === i.__v)
              ) {
                (h.props = m),
                  (h.state = h.__s),
                  u.__v !== i.__v && (h.__d = !1),
                  (h.__v = u),
                  (u.__e = i.__e),
                  (u.__k = i.__k),
                  u.__k.forEach(function (n) {
                    n && (n.__ = u);
                  }),
                  h.__h.length && f.push(h);
                break n;
              }
              null != h.componentWillUpdate && h.componentWillUpdate(m, h.__s, x),
                null != h.componentDidUpdate &&
                  h.__h.push(function () {
                    h.componentDidUpdate(y, p, k);
                  });
            }
            (h.context = x),
              (h.props = m),
              (h.state = h.__s),
              (s = l.__r) && s(u),
              (h.__d = !1),
              (h.__v = u),
              (h.__P = n),
              (s = h.render(h.props, h.state, h.context)),
              (h.state = h.__s),
              null != h.getChildContext && (t = a(a({}, t), h.getChildContext())),
              v || null == h.getSnapshotBeforeUpdate || (k = h.getSnapshotBeforeUpdate(y, p)),
              (A = null != s && s.type === d && null == s.key ? s.props.children : s),
              w(n, Array.isArray(A) ? A : [A], u, i, t, r, o, f, e, c),
              (h.base = u.__e),
              (u.__h = null),
              h.__h.length && f.push(h),
              b && (h.__E = h.__ = null),
              (h.__e = !1);
          } else
            null == o && u.__v === i.__v
              ? ((u.__k = i.__k), (u.__e = i.__e))
              : (u.__e = L(i.__e, u, i, t, r, o, f, c));
          (s = l.diffed) && s(u);
        } catch (n) {
          (u.__v = null),
            (c || null != o) && ((u.__e = e), (u.__h = !!c), (o[o.indexOf(e)] = null)),
            l.__e(n, u, i);
        }
      }
      function z(n, u) {
        l.__c && l.__c(u, n),
          n.some(function (u) {
            try {
              (n = u.__h),
                (u.__h = []),
                n.some(function (n) {
                  n.call(u);
                });
            } catch (n) {
              l.__e(n, u.__v);
            }
          });
      }
      function L(l, u, i, t, r, o, f, c) {
        var s,
          a,
          v,
          y = i.props,
          p = u.props,
          d = u.type,
          _ = 0;
        if (('svg' === d && (r = !0), null != o))
          for (; _ < o.length; _++)
            if ((s = o[_]) && (s === l || (d ? s.localName == d : 3 == s.nodeType))) {
              (l = s), (o[_] = null);
              break;
            }
        if (null == l) {
          if (null === d) return document.createTextNode(p);
          (l = r
            ? document.createElementNS('http://www.w3.org/2000/svg', d)
            : document.createElement(d, p.is && p)),
            (o = null),
            (c = !1);
        }
        if (null === d) y === p || (c && l.data === p) || (l.data = p);
        else {
          if (
            ((o = o && n.call(l.childNodes)),
            (a = (y = i.props || e).dangerouslySetInnerHTML),
            (v = p.dangerouslySetInnerHTML),
            !c)
          ) {
            if (null != o)
              for (y = {}, _ = 0; _ < l.attributes.length; _++)
                y[l.attributes[_].name] = l.attributes[_].value;
            (v || a) &&
              ((v && ((a && v.__html == a.__html) || v.__html === l.innerHTML)) ||
                (l.innerHTML = (v && v.__html) || ''));
          }
          if ((C(l, p, y, r, c), v)) u.__k = [];
          else if (
            ((_ = u.props.children),
            w(
              l,
              Array.isArray(_) ? _ : [_],
              u,
              i,
              t,
              r && 'foreignObject' !== d,
              o,
              f,
              o ? o[0] : i.__k && k(i, 0),
              c
            ),
            null != o)
          )
            for (_ = o.length; _--; ) null != o[_] && h(o[_]);
          c ||
            ('value' in p &&
              void 0 !== (_ = p.value) &&
              (_ !== l.value || ('progress' === d && !_)) &&
              H(l, 'value', _, y.value, !1),
            'checked' in p &&
              void 0 !== (_ = p.checked) &&
              _ !== l.checked &&
              H(l, 'checked', _, y.checked, !1));
        }
        return l;
      }
      function M(n, u, i) {
        try {
          'function' == typeof n ? n(u) : (n.current = u);
        } catch (n) {
          l.__e(n, i);
        }
      }
      function N(n, u, i) {
        var t, r;
        if (
          (l.unmount && l.unmount(n),
          (t = n.ref) && ((t.current && t.current !== n.__e) || M(t, null, u)),
          null != (t = n.__c))
        ) {
          if (t.componentWillUnmount)
            try {
              t.componentWillUnmount();
            } catch (n) {
              l.__e(n, u);
            }
          t.base = t.__P = null;
        }
        if ((t = n.__k))
          for (r = 0; r < t.length; r++) t[r] && N(t[r], u, 'function' != typeof n.type);
        i || null == n.__e || h(n.__e), (n.__e = n.__d = void 0);
      }
      function O(n, l, u) {
        return this.constructor(n, u);
      }
      function S(u, i, t) {
        var r, o, f;
        l.__ && l.__(u, i),
          (o = (r = 'function' == typeof t) ? null : (t && t.__k) || i.__k),
          (f = []),
          j(
            i,
            (u = ((!r && t) || i).__k = v(d, null, [u])),
            o || e,
            e,
            void 0 !== i.ownerSVGElement,
            !r && t ? [t] : o ? null : i.firstChild ? n.call(i.childNodes) : null,
            f,
            !r && t ? t : o ? o.__e : i.firstChild,
            r
          ),
          z(f, u);
      }
      function q(n, l) {
        S(n, l, q);
      }
      function B(l, u, i) {
        var t,
          r,
          o,
          f = a({}, l.props);
        for (o in u) 'key' == o ? (t = u[o]) : 'ref' == o ? (r = u[o]) : (f[o] = u[o]);
        return (
          2 < arguments.length && (f.children = 3 < arguments.length ? n.call(arguments, 2) : i),
          y(l.type, f, t || l.key, r || l.ref, null)
        );
      }
      function D(n, l) {
        var u = {
          __c: (l = '__cC' + f++),
          __: n,
          Consumer: function Consumer(n, l) {
            return n.children(l);
          },
          Provider: function Provider(n) {
            var u, i;
            return (
              this.getChildContext ||
                ((u = []),
                ((i = {})[l] = this),
                (this.getChildContext = function () {
                  return i;
                }),
                (this.shouldComponentUpdate = function (n) {
                  this.props.value !== n.value && u.some(m);
                }),
                (this.sub = function (n) {
                  u.push(n);
                  var l = n.componentWillUnmount;
                  n.componentWillUnmount = function () {
                    u.splice(u.indexOf(n), 1), l && l.call(n);
                  };
                })),
              n.children
            );
          },
        };
        return (u.Provider.__ = u.Consumer.contextType = u);
      }
      (n = c.slice),
        (l = {
          __e: function __e(n, l) {
            for (var u, i, t; (l = l.__); )
              if ((u = l.__c) && !u.__)
                try {
                  if (
                    ((i = u.constructor) &&
                      null != i.getDerivedStateFromError &&
                      (u.setState(i.getDerivedStateFromError(n)), (t = u.__d)),
                    null != u.componentDidCatch && (u.componentDidCatch(n), (t = u.__d)),
                    t)
                  )
                    return (u.__E = u);
                } catch (l) {
                  n = l;
                }
            throw n;
          },
        }),
        (u = 0),
        (i = function i(n) {
          return null != n && void 0 === n.constructor;
        }),
        (_.prototype.setState = function (n, l) {
          var u;
          (u =
            null != this.__s && this.__s !== this.state
              ? this.__s
              : (this.__s = a({}, this.state))),
            'function' == typeof n && (n = n(a({}, u), this.props)),
            n && a(u, n),
            null != n && this.__v && (l && this.__h.push(l), m(this));
        }),
        (_.prototype.forceUpdate = function (n) {
          this.__v && ((this.__e = !0), n && this.__h.push(n), m(this));
        }),
        (_.prototype.render = d),
        (t = []),
        (r =
          'function' == typeof Promise
            ? Promise.prototype.then.bind(Promise.resolve())
            : setTimeout),
        (g.__r = 0),
        (f = 0);

      /***/
    },
    ,
    /* 6 */ /* 7 */
    /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ interBoldItalicFontFamily: () =>
          /* binding */ interBoldItalicFontFamily,
        /* harmony export */ interFontFamily: () => /* binding */ interFontFamily,
        /* harmony export */ interSemiBoldFontFamily: () => /* binding */ interSemiBoldFontFamily,
        /* harmony export */ interNumbersSemiBold: () => /* binding */ interNumbersSemiBold,
        /* harmony export */
      });
      var interBoldItalicFontFamily = 'WistiaPlayerInterBoldItalic, Helvetica, Sans-Serif';
      var interFontFamily = 'WistiaPlayerInter, Helvetica, Sans-Serif';
      var interSemiBoldFontFamily = 'WistiaPlayerInterSemiBold, Helvetica, Sans-Serif';
      var interNumbersSemiBold = 'WistiaPlayerInterNumbersSemiBold, Helvetica, Sans-Serif';

      /***/
    },
    /******/
  ];
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
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    });
    /* harmony import */ var wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(1);
    /* harmony import */ var player_lib_interFontFamily__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(7);
    /* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor))
        throw new TypeError('Cannot call a class as a function');
    }
    function _defineProperties(target, props) {
      for (var descriptor, i = 0; i < props.length; i++)
        (descriptor = props[i]),
          (descriptor.enumerable = descriptor.enumerable || !1),
          (descriptor.configurable = !0),
          'value' in descriptor && (descriptor.writable = !0),
          Object.defineProperty(target, descriptor.key, descriptor);
    }
    function _createClass(Constructor, protoProps, staticProps) {
      return (
        protoProps && _defineProperties(Constructor.prototype, protoProps),
        staticProps && _defineProperties(Constructor, staticProps),
        Constructor
      );
    }
    function _inherits(subClass, superClass) {
      if ('function' != typeof superClass && null !== superClass)
        throw new TypeError('Super expression must either be null or a function');
      (subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: { value: subClass, writable: !0, configurable: !0 },
      })),
        superClass && _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      return (
        (_setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          }),
        _setPrototypeOf(o, p)
      );
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var result,
          Super = _getPrototypeOf(Derived);
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self, call) {
      return call && ('object' == typeof call || 'function' == typeof call)
        ? call
        : _assertThisInitialized(self);
    }
    function _assertThisInitialized(self) {
      if (void 0 === self)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return self;
    }
    function _isNativeReflectConstruct() {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }
    function _getPrototypeOf(o) {
      return (
        (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            }),
        _getPrototypeOf(o)
      );
    }
    function _defineProperty(obj, key, value) {
      return (
        key in obj
          ? Object.defineProperty(obj, key, {
              value: value,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (obj[key] = value),
        obj
      );
    }
    var _W$lib = wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.lib('utilities/duration'),
      flexibleDuration = _W$lib.flexibleDuration,
      FRAMES_PER_ROW = 10,
      SCALE_DOWN_RATIO = 0.234,
      Storyboard = /*#__PURE__*/ (function (_Component) {
        function Storyboard(props) {
          var _this;
          return (
            _classCallCheck(this, Storyboard),
            (_this = _super.call(this, props)),
            _defineProperty(_assertThisInitialized(_this), 'onLoadHandler', function () {
              clearTimeout(_this.showStoryBoardTimeout), _this.setState({ showStoryBoard: !0 });
            }),
            (_this.storyboard = props.storyboardAsset),
            (_this.showStoryBoardTimeout = void 0),
            (_this.state = { showStoryBoard: !1, didOneRender: !1 }),
            _this
          );
        }
        _inherits(Storyboard, _Component);
        var _super = _createSuper(Storyboard);
        return (
          _createClass(Storyboard, [
            {
              key: 'componentWillReceiveProps',
              value: function componentWillReceiveProps(nextProps) {
                nextProps.storyboardAsset && (this.storyboard = nextProps.storyboardAsset);
              },
            },
            {
              key: 'componentDidMount',
              value: function componentDidMount() {
                var _this2 = this;
                this.showStoryBoardTimeout = setTimeout(function () {
                  _this2.setState({ showStoryBoard: !0 });
                }, 1e3);
              },
            },
            {
              key: 'componentDidUpdate',
              value: function componentDidUpdate() {
                var _this3 = this;
                this.state.showStoryBoard &&
                  !this.state.didOneRender &&
                  setTimeout(function () {
                    _this3.setState({ didOneRender: !0 });
                  }, 0);
              },
            },
            {
              key: 'render',
              value: function render() {
                var currentTime = flexibleDuration(
                  Math.round(this.props.hoverPercent * this.props.duration)
                );
                return (
                  this.state.showStoryBoard &&
                  (0, preact__WEBPACK_IMPORTED_MODULE_2__.h)(
                    'div',
                    { class: 'w-storyboard-anchor', style: this.anchorStyle() },
                    (0, preact__WEBPACK_IMPORTED_MODULE_2__.h)(
                      'div',
                      { class: 'w-storyboard', style: this.storyboardStyle() },
                      (0, preact__WEBPACK_IMPORTED_MODULE_2__.h)('img', {
                        onLoad: this.onLoadHandler,
                        src: this.storyboard.url,
                        style: this.imgStyle(),
                        class: 'w-css-reset-max-width-none-important',
                      }),
                      (0, preact__WEBPACK_IMPORTED_MODULE_2__.h)(
                        'div',
                        { class: 'w-storyboard-time', style: this.timeStyle() },
                        (0, preact__WEBPACK_IMPORTED_MODULE_2__.h)(
                          'span',
                          { style: this.timeBgStyle() },
                          currentTime
                        )
                      )
                    )
                  )
                );
              },
            },
            {
              key: 'anchorStyle',
              value: function anchorStyle() {
                return { height: 0, left: 0, position: 'absolute', top: 0, width: '100%' };
              },
            },
            {
              key: 'isVertical',
              value: function isVertical() {
                return 1 > this.frameAspect();
              },
            },
            {
              key: 'frameAspect',
              value: function frameAspect() {
                var metadata = this.storyboard.metadata;
                return metadata.frame_width / metadata.frame_height;
              },
            },
            {
              key: 'height',
              value: function height() {
                if (this.isVertical()) return 640 * SCALE_DOWN_RATIO * this.props.scale;
                var heightAt640Width = 640 / this.frameAspect();
                return heightAt640Width * SCALE_DOWN_RATIO * this.props.scale;
              },
            },
            {
              key: 'width',
              value: function width() {
                if (this.isVertical()) {
                  var widthAt640Height = 640 * this.frameAspect();
                  return widthAt640Height * SCALE_DOWN_RATIO * this.props.scale;
                }
                return 640 * SCALE_DOWN_RATIO * this.props.scale;
              },
            },
            {
              key: 'storyboardStyle',
              value: function storyboardStyle() {
                var props = this.props,
                  hasChapters = props.hasChapters,
                  scale = props.scale,
                  left = props.hoverPercent * props.width - this.width() / 2;
                (left = Math.max(-props.left, left)),
                  (left = Math.min(props.videoWidth - this.width(), left));
                var chapterTitleHeight = hasChapters ? 24 * scale : 0;
                return {
                  bottom: ''.concat(chapterTitleHeight, 'px'),
                  display: '',
                  height: ''.concat(this.height(), 'px'),
                  left: ''.concat(left, 'px'),
                  opacity: props.isHovering && this.state.didOneRender ? 1 : 0,
                  overflow: 'hidden',
                  pointerEvents: 'none',
                  position: 'absolute',
                  transition: 'opacity 150ms, transform cubic-bezier(0, 0.8, 0, 1) 1000ms',
                  transform:
                    props.isHovering && this.state.didOneRender ? 'scale(1.001)' : 'scale(0.83)',
                  transformOrigin: 'center bottom',
                  width: ''.concat(this.width(), 'px'),
                };
              },
            },
            {
              key: 'imgStyle',
              value: function imgStyle() {
                var asset = this.storyboard,
                  hoverTime = this.props.hoverPercent * this.props.duration,
                  uncutHoverPercent =
                    this.props.getTimeBeforeCuts(hoverTime) / this.props.getDurationBeforeCuts(),
                  frameIndex = Math.floor(uncutHoverPercent * asset.metadata.frame_count),
                  frameWidth = asset.metadata.frame_width,
                  frameHeight = asset.metadata.frame_height,
                  imgScaling = this.width() / frameWidth,
                  row = Math.floor(frameIndex / FRAMES_PER_ROW),
                  col = frameIndex % FRAMES_PER_ROW,
                  left = -1 * col * frameWidth * imgScaling,
                  top = -1 * row * frameHeight * imgScaling;
                return {
                  height: ''.concat(this.storyboard.height * imgScaling, 'px'),
                  left: ''.concat(left, 'px'),
                  position: 'absolute',
                  top: ''.concat(top, 'px'),
                  verticalAlign: 'top',
                  width: ''.concat(this.storyboard.width * imgScaling, 'px'),
                };
              },
            },
            {
              key: 'timeBgStyle',
              value: function timeBgStyle() {
                var scale = Math.min(1, this.props.scale);
                return {
                  background: 'rgba(0,0,0,.7)',
                  borderRadius: ''.concat(3 * scale, 'px'),
                  display: 'inline-block',
                  lineHeight: '1em',
                  padding: ''.concat(6 * scale, 'px'),
                };
              },
            },
            {
              key: 'timeStyle',
              value: function timeStyle() {
                var scale = Math.min(1, this.props.scale);
                return {
                  bottom: '0.5em',
                  color: '#fff',
                  display: 'inline-block',
                  fontFamily:
                    player_lib_interFontFamily__WEBPACK_IMPORTED_MODULE_1__.interNumbersSemiBold,
                  fontSize: ''.concat(13 * scale, 'px'),
                  left: 0,
                  lineHeight: ''.concat(34 * scale, 'px'),
                  position: 'absolute',
                  textAlign: 'center',
                  width: '100%',
                };
              },
            },
            {
              key: 'stubStyle',
              value: function stubStyle() {
                return { height: '100%', width: '100%' };
              },
            },
          ]),
          Storyboard
        );
      })(preact__WEBPACK_IMPORTED_MODULE_2__.Component);
    wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.define(
      'vulcanV2Player/video/ui_components/Storyboard.js',
      Storyboard
    );
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Storyboard;
  })();

  /******/
})();
