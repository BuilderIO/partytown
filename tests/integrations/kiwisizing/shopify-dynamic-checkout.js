!(function () {
  var t = function (t) {
      var n = { exports: {} };
      return t.call(n.exports, n, n.exports), n.exports;
    },
    d = function (t) {
      return t && t.__esModule ? t : { default: t };
    },
    v = t(function (t) {
      var n = {}.toString;
      t.exports = function (t) {
        return n.call(t).slice(8, -1);
      };
    }),
    T = t(function (t) {
      var n = (t.exports =
        'undefined' != typeof window && window.Math == Math
          ? window
          : 'undefined' != typeof self && self.Math == Math
          ? self
          : Function('return this')());
      'number' == typeof __g && (__g = n);
    }),
    o = t(function (t) {
      var n = '__core-js_shared__',
        e = T[n] || (T[n] = {});
      t.exports = function (t) {
        return e[t] || (e[t] = {});
      };
    }),
    l = t(function (t) {
      var n = 0,
        e = Math.random();
      t.exports = function (t) {
        return 'Symbol('.concat(t === undefined ? '' : t, ')_', (++n + e).toString(36));
      };
    }),
    j = t(function (t) {
      var n = o('wks'),
        e = T.Symbol,
        r = 'function' == typeof e;
      (t.exports = function (t) {
        return n[t] || (n[t] = (r && e[t]) || (r ? e : l)('Symbol.' + t));
      }).store = n;
    }),
    F = t(function (t) {
      var o = j('toStringTag'),
        i =
          'Arguments' ==
          v(
            (function () {
              return arguments;
            })()
          ),
        u = function (t, n) {
          try {
            return t[n];
          } catch (e) {}
        };
      t.exports = function (t) {
        var n, e, r;
        return t === undefined
          ? 'Undefined'
          : null === t
          ? 'Null'
          : 'string' == typeof (e = u((n = Object(t)), o))
          ? e
          : i
          ? v(n)
          : 'Object' == (r = v(n)) && 'function' == typeof n.callee
          ? 'Arguments'
          : r;
      };
    }),
    k = t(function (t) {
      t.exports = function (t) {
        return 'object' == typeof t ? null !== t : 'function' == typeof t;
      };
    }),
    h = t(function (t) {
      t.exports = function (t) {
        if (!k(t)) throw TypeError(t + ' is not an object!');
        return t;
      };
    }),
    m = t(function (t) {
      t.exports = function (t) {
        try {
          return !!t();
        } catch (n) {
          return !0;
        }
      };
    }),
    p = t(function (t) {
      t.exports = !m(function () {
        return (
          7 !=
          Object.defineProperty({}, 'a', {
            get: function () {
              return 7;
            },
          }).a
        );
      });
    }),
    b = t(function (t) {
      var n = T.document,
        e = k(n) && k(n.createElement);
      t.exports = function (t) {
        return e ? n.createElement(t) : {};
      };
    }),
    u = t(function (t) {
      t.exports =
        !p &&
        !m(function () {
          return (
            7 !=
            Object.defineProperty(b('div'), 'a', {
              get: function () {
                return 7;
              },
            }).a
          );
        });
    }),
    c = t(function (t) {
      t.exports = function (t, n) {
        if (!k(t)) return t;
        var e, r;
        if (n && 'function' == typeof (e = t.toString) && !k((r = e.call(t)))) return r;
        if ('function' == typeof (e = t.valueOf) && !k((r = e.call(t)))) return r;
        if (!n && 'function' == typeof (e = t.toString) && !k((r = e.call(t)))) return r;
        throw TypeError("Can't convert object to primitive value");
      };
    }),
    y = t(function (t, n) {
      var o = Object.defineProperty;
      n.f = p
        ? Object.defineProperty
        : function i(t, n, e) {
            if ((h(t), (n = c(n, !0)), h(e), u))
              try {
                return o(t, n, e);
              } catch (r) {}
            if ('get' in e || 'set' in e) throw TypeError('Accessors not supported!');
            return 'value' in e && (t[n] = e.value), t;
          };
    }),
    i = t(function (t) {
      t.exports = function (t, n) {
        return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: n };
      };
    }),
    E = t(function (t) {
      t.exports = p
        ? function (t, n, e) {
            return y.f(t, n, i(1, e));
          }
        : function (t, n, e) {
            return (t[n] = e), t;
          };
    }),
    O = t(function (t) {
      var e = {}.hasOwnProperty;
      t.exports = function (t, n) {
        return e.call(t, n);
      };
    }),
    B = t(function (t) {
      var n = (t.exports = { version: '2.5.1' });
      'number' == typeof __e && (__e = n);
    }),
    L = t(function (t) {
      var i = l('src'),
        n = 'toString',
        e = Function[n],
        u = ('' + e).split(n);
      (B.inspectSource = function (t) {
        return e.call(t);
      }),
        (t.exports = function (t, n, e, r) {
          var o = 'function' == typeof e;
          o && (O(e, 'name') || E(e, 'name', n)),
            t[n] !== e &&
              (o && (O(e, i) || E(e, i, t[n] ? '' + t[n] : u.join(String(n)))),
              t === T
                ? (t[n] = e)
                : r
                ? t[n]
                  ? (t[n] = e)
                  : E(t, n, e)
                : (delete t[n], E(t, n, e)));
        })(Function.prototype, n, function r() {
          return ('function' == typeof this && this[i]) || e.call(this);
        });
    }),
    s =
      (t(function () {
        'use strict';
        var t = {};
        (t[j('toStringTag')] = 'z'),
          t + '' != '[object z]' &&
            L(
              Object.prototype,
              'toString',
              function n() {
                return '[object ' + F(this) + ']';
              },
              !0
            );
      }),
      t(function (t) {
        var n = Math.ceil,
          e = Math.floor;
        t.exports = function (t) {
          return isNaN((t = +t)) ? 0 : (0 < t ? e : n)(t);
        };
      })),
    f = t(function (t) {
      t.exports = function (t) {
        if (t == undefined) throw TypeError("Can't call method on  " + t);
        return t;
      };
    }),
    n = t(function (t) {
      t.exports = function (c) {
        return function (t, n) {
          var e,
            r,
            o = String(f(t)),
            i = s(n),
            u = o.length;
          return i < 0 || u <= i
            ? c
              ? ''
              : undefined
            : (e = o.charCodeAt(i)) < 55296 ||
              56319 < e ||
              i + 1 === u ||
              (r = o.charCodeAt(i + 1)) < 56320 ||
              57343 < r
            ? c
              ? o.charAt(i)
              : e
            : c
            ? o.slice(i, i + 2)
            : r - 56320 + ((e - 55296) << 10) + 65536;
        };
      };
    }),
    M = t(function (t) {
      t.exports = !1;
    }),
    C = t(function (t) {
      t.exports = function (t) {
        if ('function' != typeof t) throw TypeError(t + ' is not a function!');
        return t;
      };
    }),
    I = t(function (t) {
      t.exports = function (r, o, t) {
        if ((C(r), o === undefined)) return r;
        switch (t) {
          case 1:
            return function (t) {
              return r.call(o, t);
            };
          case 2:
            return function (t, n) {
              return r.call(o, t, n);
            };
          case 3:
            return function (t, n, e) {
              return r.call(o, t, n, e);
            };
        }
        return function () {
          return r.apply(o, arguments);
        };
      };
    }),
    R = t(function (t) {
      var y = 'prototype',
        v = function (t, n, e) {
          var r,
            o,
            i,
            u,
            c = t & v.F,
            s = t & v.G,
            f = t & v.S,
            a = t & v.P,
            l = t & v.B,
            d = s ? T : f ? T[n] || (T[n] = {}) : (T[n] || {})[y],
            p = s ? B : B[n] || (B[n] = {}),
            h = p[y] || (p[y] = {});
          for (r in (s && (e = n), e))
            (i = ((o = !c && d && d[r] !== undefined) ? d : e)[r]),
              (u = l && o ? I(i, T) : a && 'function' == typeof i ? I(Function.call, i) : i),
              d && L(d, r, i, t & v.U),
              p[r] != i && E(p, r, u),
              a && h[r] != i && (h[r] = i);
        };
      (T.core = B),
        (v.F = 1),
        (v.G = 2),
        (v.S = 4),
        (v.P = 8),
        (v.B = 16),
        (v.W = 32),
        (v.U = 64),
        (v.R = 128),
        (t.exports = v);
    }),
    D = t(function (t) {
      t.exports = {};
    }),
    _ = t(function (t) {
      t.exports = Object('z').propertyIsEnumerable(0)
        ? Object
        : function (t) {
            return 'String' == v(t) ? t.split('') : Object(t);
          };
    }),
    a = t(function (t) {
      t.exports = function (t) {
        return _(f(t));
      };
    }),
    w = t(function (t) {
      var n = Math.min;
      t.exports = function (t) {
        return 0 < t ? n(s(t), 9007199254740991) : 0;
      };
    }),
    x = t(function (t) {
      var e = Math.max,
        r = Math.min;
      t.exports = function (t, n) {
        return (t = s(t)) < 0 ? e(t + n, 0) : r(t, n);
      };
    }),
    g = t(function (t) {
      t.exports = function (c) {
        return function (t, n, e) {
          var r,
            o = a(t),
            i = w(o.length),
            u = x(e, i);
          if (c && n != n) {
            for (; u < i; ) if ((r = o[u++]) != r) return !0;
          } else for (; u < i; u++) if ((c || u in o) && o[u] === n) return c || u || 0;
          return !c && -1;
        };
      };
    }),
    A = t(function (t) {
      var n = o('keys');
      t.exports = function (t) {
        return n[t] || (n[t] = l(t));
      };
    }),
    e = t(function (t) {
      var u = g(!1),
        c = A('IE_PROTO');
      t.exports = function (t, n) {
        var e,
          r = a(t),
          o = 0,
          i = [];
        for (e in r) e != c && O(r, e) && i.push(e);
        for (; n.length > o; ) O(r, (e = n[o++])) && (~u(i, e) || i.push(e));
        return i;
      };
    }),
    S = t(function (t) {
      t.exports =
        'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
          ','
        );
    }),
    P = t(function (t) {
      t.exports =
        Object.keys ||
        function n(t) {
          return e(t, S);
        };
    }),
    U = t(function (t) {
      t.exports = p
        ? Object.defineProperties
        : function u(t, n) {
            h(t);
            for (var e, r = P(n), o = r.length, i = 0; i < o; ) y.f(t, (e = r[i++]), n[e]);
            return t;
          };
    }),
    N = t(function (t) {
      var n = T.document;
      t.exports = n && n.documentElement;
    }),
    G = t(function (t) {
      var r = A('IE_PROTO'),
        o = function () {},
        i = 'prototype',
        u = function () {
          var t,
            n = b('iframe'),
            e = S.length,
            r = '<',
            o = '>';
          for (
            n.style.display = 'none',
              N.appendChild(n),
              n.src = 'javascript:',
              (t = n.contentWindow.document).open(),
              t.write(r + 'script' + o + 'document.F=Object' + r + '/script' + o),
              t.close(),
              u = t.F;
            e--;

          )
            delete u[i][S[e]];
          return u();
        };
      t.exports =
        Object.create ||
        function c(t, n) {
          var e;
          return (
            null !== t ? ((o[i] = h(t)), (e = new o()), (o[i] = null), (e[r] = t)) : (e = u()),
            n === undefined ? e : U(e, n)
          );
        };
    }),
    H = t(function (t) {
      var r = y.f,
        o = j('toStringTag');
      t.exports = function (t, n, e) {
        t && !O((t = e ? t : t.prototype), o) && r(t, o, { configurable: !0, value: n });
      };
    }),
    q = t(function (t) {
      'use strict';
      var r = {};
      E(r, j('iterator'), function () {
        return this;
      }),
        (t.exports = function (t, n, e) {
          (t.prototype = G(r, { next: i(1, e) })), H(t, n + ' Iterator');
        });
    }),
    z = t(function (t) {
      t.exports = function (t) {
        return Object(f(t));
      };
    }),
    V = t(function (t) {
      var n = A('IE_PROTO'),
        e = Object.prototype;
      t.exports =
        Object.getPrototypeOf ||
        function (t) {
          return (
            (t = z(t)),
            O(t, n)
              ? t[n]
              : 'function' == typeof t.constructor && t instanceof t.constructor
              ? t.constructor.prototype
              : t instanceof Object
              ? e
              : null
          );
        };
    }),
    W = t(function (t) {
      'use strict';
      var w = j('iterator'),
        x = !([].keys && 'next' in [].keys()),
        g = '@@iterator',
        A = 'keys',
        S = 'values',
        P = function () {
          return this;
        };
      t.exports = function (t, n, o, e, r, i, u) {
        q(o, n, e);
        var c,
          s,
          f,
          a = function (t) {
            if (!x && t in h) return h[t];
            switch (t) {
              case A:
                return function n() {
                  return new o(this, t);
                };
              case S:
                return function e() {
                  return new o(this, t);
                };
            }
            return function r() {
              return new o(this, t);
            };
          },
          l = n + ' Iterator',
          d = r == S,
          p = !1,
          h = t.prototype,
          y = h[w] || h[g] || (r && h[r]),
          v = y || a(r),
          m = r ? (d ? a('entries') : v) : undefined,
          b = ('Array' == n && h.entries) || y;
        if (
          (b &&
            (f = V(b.call(new t()))) !== Object.prototype &&
            f.next &&
            (H(f, l, !0), M || O(f, w) || E(f, w, P)),
          d &&
            y &&
            y.name !== S &&
            ((p = !0),
            (v = function _() {
              return y.call(this);
            })),
          (M && !u) || (!x && !p && h[w]) || E(h, w, v),
          (D[n] = v),
          (D[l] = P),
          r)
        )
          if (((c = { values: d ? v : a(S), keys: i ? v : a(A), entries: m }), u))
            for (s in c) s in h || L(h, s, c[s]);
          else R(R.P + R.F * (x || p), n, c);
        return c;
      };
    }),
    K =
      (t(function () {
        'use strict';
        var r = n(!0);
        W(
          String,
          'String',
          function (t) {
            (this._t = String(t)), (this._i = 0);
          },
          function () {
            var t,
              n = this._t,
              e = this._i;
            return e >= n.length
              ? { value: undefined, done: !0 }
              : ((t = r(n, e)), (this._i += t.length), { value: t, done: !1 });
          }
        );
      }),
      t(function (t) {
        var n = j('unscopables'),
          e = Array.prototype;
        e[n] == undefined && E(e, n, {}),
          (t.exports = function (t) {
            e[n][t] = !0;
          });
      })),
    r = t(function (t) {
      t.exports = function (t, n) {
        return { value: n, done: !!t };
      };
    }),
    J = t(function (t) {
      'use strict';
      (t.exports = W(
        Array,
        'Array',
        function (t, n) {
          (this._t = a(t)), (this._i = 0), (this._k = n);
        },
        function () {
          var t = this._t,
            n = this._k,
            e = this._i++;
          return !t || e >= t.length
            ? ((this._t = undefined), r(1))
            : r(0, 'keys' == n ? e : 'values' == n ? t[e] : [e, t[e]]);
        },
        'values'
      )),
        (D.Arguments = D.Array),
        K('keys'),
        K('values'),
        K('entries');
    }),
    X =
      (t(function () {
        for (
          var t = j('iterator'),
            n = j('toStringTag'),
            e = D.Array,
            r = {
              CSSRuleList: !0,
              CSSStyleDeclaration: !1,
              CSSValueList: !1,
              ClientRectList: !1,
              DOMRectList: !1,
              DOMStringList: !1,
              DOMTokenList: !0,
              DataTransferItemList: !1,
              FileList: !1,
              HTMLAllCollection: !1,
              HTMLCollection: !1,
              HTMLFormElement: !1,
              HTMLSelectElement: !1,
              MediaList: !0,
              MimeTypeArray: !1,
              NamedNodeMap: !1,
              NodeList: !0,
              PaintRequestList: !1,
              Plugin: !1,
              PluginArray: !1,
              SVGLengthList: !1,
              SVGNumberList: !1,
              SVGPathSegList: !1,
              SVGPointList: !1,
              SVGStringList: !1,
              SVGTransformList: !1,
              SourceBufferList: !1,
              StyleSheetList: !0,
              TextTrackCueList: !1,
              TextTrackList: !1,
              TouchList: !1,
            },
            o = P(r),
            i = 0;
          i < o.length;
          i++
        ) {
          var u,
            c = o[i],
            s = r[c],
            f = T[c],
            a = f && f.prototype;
          if (a && (a[t] || E(a, t, e), a[n] || E(a, n, c), (D[c] = e), s))
            for (u in J) a[u] || L(a, u, J[u], !0);
        }
      }),
      t(function (t) {
        t.exports = function (t, n, e, r) {
          if (!(t instanceof n) || (r !== undefined && r in t))
            throw TypeError(e + ': incorrect invocation!');
          return t;
        };
      })),
    Y = t(function (t) {
      t.exports = function (t, n, e, r) {
        try {
          return r ? n(h(e)[0], e[1]) : n(e);
        } catch (i) {
          var o = t['return'];
          throw (o !== undefined && h(o.call(t)), i);
        }
      };
    }),
    $ = t(function (t) {
      var n = j('iterator'),
        e = Array.prototype;
      t.exports = function (t) {
        return t !== undefined && (D.Array === t || e[n] === t);
      };
    }),
    Q = t(function (t) {
      var n = j('iterator');
      t.exports = B.getIteratorMethod = function (t) {
        if (t != undefined) return t[n] || t['@@iterator'] || D[F(t)];
      };
    }),
    Z = t(function (t, n) {
      var d = {},
        p = {};
      ((n = t.exports =
        function (t, n, e, r, o) {
          var i,
            u,
            c,
            s,
            f = o
              ? function () {
                  return t;
                }
              : Q(t),
            a = I(e, r, n ? 2 : 1),
            l = 0;
          if ('function' != typeof f) throw TypeError(t + ' is not iterable!');
          if ($(f)) {
            for (i = w(t.length); l < i; l++)
              if ((s = n ? a(h((u = t[l]))[0], u[1]) : a(t[l])) === d || s === p) return s;
          } else
            for (c = f.call(t); !(u = c.next()).done; )
              if ((s = Y(c, a, u.value, n)) === d || s === p) return s;
        }).BREAK = d),
        (n.RETURN = p);
    }),
    tt = t(function (t) {
      var o = j('species');
      t.exports = function (t, n) {
        var e,
          r = h(t).constructor;
        return r === undefined || (e = h(r)[o]) == undefined ? n : C(e);
      };
    }),
    nt = t(function (t) {
      t.exports = function (t, n, e) {
        var r = e === undefined;
        switch (n.length) {
          case 0:
            return r ? t() : t.call(e);
          case 1:
            return r ? t(n[0]) : t.call(e, n[0]);
          case 2:
            return r ? t(n[0], n[1]) : t.call(e, n[0], n[1]);
          case 3:
            return r ? t(n[0], n[1], n[2]) : t.call(e, n[0], n[1], n[2]);
          case 4:
            return r ? t(n[0], n[1], n[2], n[3]) : t.call(e, n[0], n[1], n[2], n[3]);
        }
        return t.apply(e, n);
      };
    }),
    et = t(function (t) {
      var r,
        n,
        e,
        o = T.process,
        i = T.setImmediate,
        u = T.clearImmediate,
        c = T.MessageChannel,
        s = T.Dispatch,
        f = 0,
        a = {},
        l = 'onreadystatechange',
        d = function () {
          var t = +this;
          if (a.hasOwnProperty(t)) {
            var n = a[t];
            delete a[t], n();
          }
        },
        p = function (t) {
          d.call(t.data);
        };
      (i && u) ||
        ((i = function h(t) {
          for (var n = [], e = 1; arguments.length > e; ) n.push(arguments[e++]);
          return (
            (a[++f] = function () {
              nt('function' == typeof t ? t : Function(t), n);
            }),
            r(f),
            f
          );
        }),
        (u = function y(t) {
          delete a[t];
        }),
        'process' == v(o)
          ? (r = function (t) {
              o.nextTick(I(d, t, 1));
            })
          : s && s.now
          ? (r = function (t) {
              s.now(I(d, t, 1));
            })
          : c
          ? ((e = (n = new c()).port2), (n.port1.onmessage = p), (r = I(e.postMessage, e, 1)))
          : T.addEventListener && 'function' == typeof postMessage && !T.importScripts
          ? ((r = function (t) {
              T.postMessage(t + '', '*');
            }),
            T.addEventListener('message', p, !1))
          : (r =
              l in b('script')
                ? function (t) {
                    N.appendChild(b('script'))[l] = function () {
                      N.removeChild(this), d.call(t);
                    };
                  }
                : function (t) {
                    setTimeout(I(d, t, 1), 0);
                  })),
        (t.exports = { set: i, clear: u });
    }),
    rt = t(function (t) {
      var c = et.set,
        s = T.MutationObserver || T.WebKitMutationObserver,
        f = T.process,
        a = T.Promise,
        l = 'process' == v(f);
      t.exports = function () {
        var r,
          o,
          i,
          t = function () {
            var t, n;
            for (l && (t = f.domain) && t.exit(); r; ) {
              (n = r.fn), (r = r.next);
              try {
                n();
              } catch (e) {
                throw (r ? i() : (o = undefined), e);
              }
            }
            (o = undefined), t && t.enter();
          };
        if (l)
          i = function () {
            f.nextTick(t);
          };
        else if (s) {
          var n = !0,
            e = document.createTextNode('');
          new s(t).observe(e, { characterData: !0 }),
            (i = function () {
              e.data = n = !n;
            });
        } else if (a && a.resolve) {
          var u = a.resolve();
          i = function () {
            u.then(t);
          };
        } else
          i = function () {
            c.call(T, t);
          };
        return function (t) {
          var n = { fn: t, next: undefined };
          o && (o.next = n), r || ((r = n), i()), (o = n);
        };
      };
    }),
    ot = t(function (t) {
      'use strict';
      function n(t) {
        var e, r;
        (this.promise = new t(function (t, n) {
          if (e !== undefined || r !== undefined) throw TypeError('Bad Promise constructor');
          (e = t), (r = n);
        })),
          (this.resolve = C(e)),
          (this.reject = C(r));
      }
      t.exports.f = function (t) {
        return new n(t);
      };
    }),
    it = t(function (t) {
      t.exports = function (t) {
        try {
          return { e: !1, v: t() };
        } catch (n) {
          return { e: !0, v: n };
        }
      };
    }),
    ut = t(function (t) {
      t.exports = function (t, n) {
        if ((h(t), k(n) && n.constructor === t)) return n;
        var e = ot.f(t);
        return (0, e.resolve)(n), e.promise;
      };
    }),
    ct = t(function (t) {
      t.exports = function (t, n, e) {
        for (var r in n) L(t, r, n[r], e);
        return t;
      };
    }),
    st = t(function (t) {
      'use strict';
      var e = j('species');
      t.exports = function (t) {
        var n = T[t];
        p &&
          n &&
          !n[e] &&
          y.f(n, e, {
            configurable: !0,
            get: function () {
              return this;
            },
          });
      };
    }),
    ft = t(function (t) {
      var i = j('iterator'),
        u = !1;
      try {
        var n = [7][i]();
        (n['return'] = function () {
          u = !0;
        }),
          Array.from(n, function () {
            throw 2;
          });
      } catch (c) {}
      t.exports = function (t, n) {
        if (!n && !u) return !1;
        var e = !1;
        try {
          var r = [7],
            o = r[i]();
          (o.next = function () {
            return { done: (e = !0) };
          }),
            (r[i] = function () {
              return o;
            }),
            t(r);
        } catch (c) {}
        return e;
      };
    }),
    at =
      (t(function () {
        'use strict';
        var e,
          n,
          r,
          o,
          t = et.set,
          i = rt(),
          u = 'Promise',
          l = T.TypeError,
          c = T.process,
          s = T[u],
          f = 'process' == F(c),
          a = function () {},
          d = (n = ot.f),
          p = !!(function () {
            try {
              var t = s.resolve(1),
                n = ((t.constructor = {})[j('species')] = function (t) {
                  t(a, a);
                });
              return (f || 'function' == typeof PromiseRejectionEvent) && t.then(a) instanceof n;
            } catch (e) {}
          })(),
          h = function (t) {
            var n;
            return !(!k(t) || 'function' != typeof (n = t.then)) && n;
          },
          y = function (a, e) {
            if (!a._n) {
              a._n = !0;
              var r = a._c;
              i(function () {
                for (
                  var s = a._v,
                    f = 1 == a._s,
                    t = 0,
                    n = function (t) {
                      var n,
                        e,
                        r = f ? t.ok : t.fail,
                        o = t.resolve,
                        i = t.reject,
                        u = t.domain;
                      try {
                        r
                          ? (f || (2 == a._h && b(a), (a._h = 1)),
                            !0 === r ? (n = s) : (u && u.enter(), (n = r(s)), u && u.exit()),
                            n === t.promise
                              ? i(l('Promise-chain cycle'))
                              : (e = h(n))
                              ? e.call(n, o, i)
                              : o(n))
                          : i(s);
                      } catch (c) {
                        i(c);
                      }
                    };
                  r.length > t;

                )
                  n(r[t++]);
                (a._c = []), (a._n = !1), e && !a._h && v(a);
              });
            }
          },
          v = function (i) {
            t.call(T, function () {
              var t,
                n,
                e,
                r = i._v,
                o = m(i);
              if (
                (o &&
                  ((t = it(function () {
                    f
                      ? c.emit('unhandledRejection', r, i)
                      : (n = T.onunhandledrejection)
                      ? n({ promise: i, reason: r })
                      : (e = T.console) && e.error && e.error('Unhandled promise rejection', r);
                  })),
                  (i._h = f || m(i) ? 2 : 1)),
                (i._a = undefined),
                o && t.e)
              )
                throw t.v;
            });
          },
          m = function (t) {
            if (1 == t._h) return !1;
            for (var n, e = t._a || t._c, r = 0; e.length > r; )
              if ((n = e[r++]).fail || !m(n.promise)) return !1;
            return !0;
          },
          b = function (n) {
            t.call(T, function () {
              var t;
              f
                ? c.emit('rejectionHandled', n)
                : (t = T.onrejectionhandled) && t({ promise: n, reason: n._v });
            });
          },
          _ = function (t) {
            var n = this;
            n._d ||
              ((n._d = !0),
              ((n = n._w || n)._v = t),
              (n._s = 2),
              n._a || (n._a = n._c.slice()),
              y(n, !0));
          },
          w = function (e) {
            var r,
              o = this;
            if (!o._d) {
              (o._d = !0), (o = o._w || o);
              try {
                if (o === e) throw l("Promise can't be resolved itself");
                (r = h(e))
                  ? i(function () {
                      var t = { _w: o, _d: !1 };
                      try {
                        r.call(e, I(w, t, 1), I(_, t, 1));
                      } catch (n) {
                        _.call(t, n);
                      }
                    })
                  : ((o._v = e), (o._s = 1), y(o, !1));
              } catch (t) {
                _.call({ _w: o, _d: !1 }, t);
              }
            }
          };
        p ||
          ((s = function x(t) {
            X(this, s, u, '_h'), C(t), e.call(this);
            try {
              t(I(w, this, 1), I(_, this, 1));
            } catch (n) {
              _.call(this, n);
            }
          }),
          ((e = function g() {
            (this._c = []),
              (this._a = undefined),
              (this._s = 0),
              (this._d = !1),
              (this._v = undefined),
              (this._h = 0),
              (this._n = !1);
          }).prototype = ct(s.prototype, {
            then: function A(t, n) {
              var e = d(tt(this, s));
              return (
                (e.ok = 'function' != typeof t || t),
                (e.fail = 'function' == typeof n && n),
                (e.domain = f ? c.domain : undefined),
                this._c.push(e),
                this._a && this._a.push(e),
                this._s && y(this, !1),
                e.promise
              );
            },
            catch: function (t) {
              return this.then(undefined, t);
            },
          })),
          (r = function () {
            var t = new e();
            (this.promise = t), (this.resolve = I(w, t, 1)), (this.reject = I(_, t, 1));
          }),
          (ot.f = d =
            function (t) {
              return t === s || t === o ? new r(t) : n(t);
            })),
          R(R.G + R.W + R.F * !p, { Promise: s }),
          H(s, u),
          st(u),
          (o = B[u]),
          R(R.S + R.F * !p, u, {
            reject: function S(t) {
              var n = d(this);
              return (0, n.reject)(t), n.promise;
            },
          }),
          R(R.S + R.F * (M || !p), u, {
            resolve: function P(t) {
              return ut(M && this === o ? s : this, t);
            },
          }),
          R(
            R.S +
              R.F *
                !(
                  p &&
                  ft(function (t) {
                    s.all(t)['catch'](a);
                  })
                ),
            u,
            {
              all: function E(t) {
                var u = this,
                  n = d(u),
                  c = n.resolve,
                  s = n.reject,
                  e = it(function () {
                    var r = [],
                      o = 0,
                      i = 1;
                    Z(t, !1, function (t) {
                      var n = o++,
                        e = !1;
                      r.push(undefined),
                        i++,
                        u.resolve(t).then(function (t) {
                          e || ((e = !0), (r[n] = t), --i || c(r));
                        }, s);
                    }),
                      --i || c(r);
                  });
                return e.e && s(e.v), n.promise;
              },
              race: function O(t) {
                var n = this,
                  e = d(n),
                  r = e.reject,
                  o = it(function () {
                    Z(t, !1, function (t) {
                      n.resolve(t).then(e.resolve, r);
                    });
                  });
                return o.e && r(o.v), e.promise;
              },
            }
          );
      }),
      t(function (t) {
        t.exports = B.Promise;
      }),
      t(function (t) {
        t.exports =
          Array.isArray ||
          function n(t) {
            return 'Array' == v(t);
          };
      })),
    lt =
      (t(function () {
        R(R.S, 'Array', { isArray: at });
      }),
      t(function (t) {
        'use strict';
        t.exports = function (t, n, e) {
          n in t ? y.f(t, n, i(0, e)) : (t[n] = e);
        };
      })),
    dt =
      (t(function () {
        'use strict';
        R(
          R.S +
            R.F *
              !ft(function (t) {
                Array.from(t);
              }),
          'Array',
          {
            from: function h(t, n, e) {
              var r,
                o,
                i,
                u,
                c = z(t),
                s = 'function' == typeof this ? this : Array,
                f = arguments.length,
                a = 1 < f ? n : undefined,
                l = a !== undefined,
                d = 0,
                p = Q(c);
              if (
                (l && (a = I(a, 2 < f ? e : undefined, 2)), p == undefined || (s == Array && $(p)))
              )
                for (o = new s((r = w(c.length))); d < r; d++) lt(o, d, l ? a(c[d], d) : c[d]);
              else
                for (u = p.call(c), o = new s(); !(i = u.next()).done; d++)
                  lt(o, d, l ? Y(u, a, [i.value, d], !0) : i.value);
              return (o.length = d), o;
            },
          }
        );
      }),
      t(function () {
        'use strict';
        R(
          R.S +
            R.F *
              m(function () {
                function t() {}
                return !(Array.of.call(t) instanceof t);
              }),
          'Array',
          {
            of: function r() {
              for (
                var t = 0,
                  n = arguments.length,
                  e = new ('function' == typeof this ? this : Array)(n);
                t < n;

              )
                lt(e, t, arguments[t++]);
              return (e.length = n), e;
            },
          }
        );
      }),
      t(function (t) {
        'use strict';
        t.exports = function (t, n) {
          return (
            !!t &&
            m(function () {
              n ? t.call(null, function () {}, 1) : t.call(null);
            })
          );
        };
      })),
    pt =
      (t(function () {
        'use strict';
        var n = [].join;
        R(R.P + R.F * (_ != Object || !dt(n)), 'Array', {
          join: function e(t) {
            return n.call(a(this), t === undefined ? ',' : t);
          },
        });
      }),
      t(function () {
        'use strict';
        var f = [].slice;
        R(
          R.P +
            R.F *
              m(function () {
                N && f.call(N);
              }),
          'Array',
          {
            slice: function a(t, n) {
              var e = w(this.length),
                r = v(this);
              if (((n = n === undefined ? e : n), 'Array' == r)) return f.call(this, t, n);
              for (var o = x(t, e), i = x(n, e), u = w(i - o), c = Array(u), s = 0; s < u; s++)
                c[s] = 'String' == r ? this.charAt(o + s) : this[o + s];
              return c;
            },
          }
        );
      }),
      t(function () {
        'use strict';
        var n = [].sort,
          t = [1, 2, 3];
        R(
          R.P +
            R.F *
              (m(function () {
                t.sort(undefined);
              }) ||
                !m(function () {
                  t.sort(null);
                }) ||
                !dt(n)),
          'Array',
          {
            sort: function e(t) {
              return t === undefined ? n.call(z(this)) : n.call(z(this), C(t));
            },
          }
        );
      }),
      t(function (t) {
        var e = j('species');
        t.exports = function (t) {
          var n;
          return (
            at(t) &&
              ('function' != typeof (n = t.constructor) ||
                (n !== Array && !at(n.prototype)) ||
                (n = undefined),
              k(n) && null === (n = n[e]) && (n = undefined)),
            n === undefined ? Array : n
          );
        };
      })),
    ht = t(function (t) {
      t.exports = function (t, n) {
        return new (pt(t))(n);
      };
    }),
    yt = t(function (t) {
      t.exports = function (l, t) {
        var d = 1 == l,
          p = 2 == l,
          h = 3 == l,
          y = 4 == l,
          v = 6 == l,
          m = 5 == l || v,
          b = t || ht;
        return function (t, n, e) {
          for (
            var r,
              o,
              i = z(t),
              u = _(i),
              c = I(n, e, 3),
              s = w(u.length),
              f = 0,
              a = d ? b(t, s) : p ? b(t, 0) : undefined;
            f < s;
            f++
          )
            if ((m || f in u) && ((o = c((r = u[f]), f, i)), l))
              if (d) a[f] = o;
              else if (o)
                switch (l) {
                  case 3:
                    return !0;
                  case 5:
                    return r;
                  case 6:
                    return f;
                  case 2:
                    a.push(r);
                }
              else if (y) return !1;
          return v ? -1 : h || y ? y : a;
        };
      };
    }),
    vt =
      (t(function () {
        'use strict';
        var e = yt(0);
        var t = dt([].forEach, !0);
        R(R.P + R.F * !t, 'Array', {
          forEach: function r(t, n) {
            return e(this, t, n);
          },
        });
      }),
      t(function () {
        'use strict';
        var e = yt(1);
        R(R.P + R.F * !dt([].map, !0), 'Array', {
          map: function r(t, n) {
            return e(this, t, n);
          },
        });
      }),
      t(function () {
        'use strict';
        var e = yt(2);
        R(R.P + R.F * !dt([].filter, !0), 'Array', {
          filter: function r(t, n) {
            return e(this, t, n);
          },
        });
      }),
      t(function () {
        'use strict';
        var e = yt(3);
        R(R.P + R.F * !dt([].some, !0), 'Array', {
          some: function r(t, n) {
            return e(this, t, n);
          },
        });
      }),
      t(function () {
        'use strict';
        var e = yt(4);
        R(R.P + R.F * !dt([].every, !0), 'Array', {
          every: function r(t, n) {
            return e(this, t, n);
          },
        });
      }),
      t(function (t) {
        t.exports = function (t, n, e, r, o) {
          C(n);
          var i = z(t),
            u = _(i),
            c = w(i.length),
            s = o ? c - 1 : 0,
            f = o ? -1 : 1;
          if (e < 2)
            for (;;) {
              if (s in u) {
                (r = u[s]), (s += f);
                break;
              }
              if (((s += f), o ? s < 0 : c <= s))
                throw TypeError('Reduce of empty array with no initial value');
            }
          for (; o ? 0 <= s : s < c; s += f) s in u && (r = n(r, u[s], s, i));
          return r;
        };
      })),
    mt =
      (t(function () {
        'use strict';
        R(R.P + R.F * !dt([].reduce, !0), 'Array', {
          reduce: function e(t, n) {
            return vt(this, t, arguments.length, n, !1);
          },
        });
      }),
      t(function () {
        'use strict';
        R(R.P + R.F * !dt([].reduceRight, !0), 'Array', {
          reduceRight: function e(t, n) {
            return vt(this, t, arguments.length, n, !0);
          },
        });
      }),
      t(function () {
        'use strict';
        var e = g(!1),
          r = [].indexOf,
          o = !!r && 1 / [1].indexOf(1, -0) < 0;
        R(R.P + R.F * (o || !dt(r)), 'Array', {
          indexOf: function i(t, n) {
            return o ? r.apply(this, arguments) || 0 : e(this, t, n);
          },
        });
      }),
      t(function () {
        'use strict';
        var i = [].lastIndexOf,
          u = !!i && 1 / [1].lastIndexOf(1, -0) < 0;
        R(R.P + R.F * (u || !dt(i)), 'Array', {
          lastIndexOf: function c(t, n) {
            if (u) return i.apply(this, arguments) || 0;
            var e = a(this),
              r = w(e.length),
              o = r - 1;
            for (1 < arguments.length && (o = Math.min(o, s(n))), o < 0 && (o = r + o); 0 <= o; o--)
              if (o in e && e[o] === t) return o || 0;
            return -1;
          },
        });
      }),
      t(function (t) {
        'use strict';
        t.exports =
          [].copyWithin ||
          function a(t, n, e) {
            var r = z(this),
              o = w(r.length),
              i = x(t, o),
              u = x(n, o),
              c = 2 < arguments.length ? e : undefined,
              s = Math.min((c === undefined ? o : x(c, o)) - u, o - i),
              f = 1;
            for (u < i && i < u + s && ((f = -1), (u += s - 1), (i += s - 1)); 0 < s--; )
              u in r ? (r[i] = r[u]) : delete r[i], (i += f), (u += f);
            return r;
          };
      })),
    bt =
      (t(function () {
        R(R.P, 'Array', { copyWithin: mt }), K('copyWithin');
      }),
      t(function (t) {
        'use strict';
        t.exports = function f(t, n, e) {
          for (
            var r = z(this),
              o = w(r.length),
              i = arguments.length,
              u = x(1 < i ? n : undefined, o),
              c = 2 < i ? e : undefined,
              s = c === undefined ? o : x(c, o);
            u < s;

          )
            r[u++] = t;
          return r;
        };
      })),
    _t =
      (t(function () {
        R(R.P, 'Array', { fill: bt }), K('fill');
      }),
      t(function () {
        'use strict';
        var e = yt(5),
          t = 'find',
          n = !0;
        t in [] &&
          Array(1)[t](function () {
            n = !1;
          }),
          R(R.P + R.F * n, 'Array', {
            find: function r(t, n) {
              return e(this, t, 1 < arguments.length ? n : undefined);
            },
          }),
          K(t);
      }),
      t(function () {
        'use strict';
        var e = yt(6),
          t = 'findIndex',
          n = !0;
        t in [] &&
          Array(1)[t](function () {
            n = !1;
          }),
          R(R.P + R.F * n, 'Array', {
            findIndex: function r(t, n) {
              return e(this, t, 1 < arguments.length ? n : undefined);
            },
          }),
          K(t);
      }),
      t(function () {
        st('Array');
      }),
      t(function (t) {
        t.exports = B.Array;
      }),
      t(function (t) {
        var e = l('meta'),
          n = y.f,
          r = 0,
          o =
            Object.isExtensible ||
            function () {
              return !0;
            },
          i = !m(function () {
            return o(Object.preventExtensions({}));
          }),
          u = function (t) {
            n(t, e, { value: { i: 'O' + ++r, w: {} } });
          },
          c = function (t, n) {
            if (!k(t)) return 'symbol' == typeof t ? t : ('string' == typeof t ? 'S' : 'P') + t;
            if (!O(t, e)) {
              if (!o(t)) return 'F';
              if (!n) return 'E';
              u(t);
            }
            return t[e].i;
          },
          s = function (t, n) {
            if (!O(t, e)) {
              if (!o(t)) return !0;
              if (!n) return !1;
              u(t);
            }
            return t[e].w;
          },
          f = function (t) {
            return i && a.NEED && o(t) && !O(t, e) && u(t), t;
          },
          a = (t.exports = { KEY: e, NEED: !1, fastKey: c, getWeak: s, onFreeze: f });
      })),
    wt = t(function (t) {
      t.exports = function (t, n) {
        if (!k(t) || t._t !== n) throw TypeError('Incompatible receiver, ' + n + ' required!');
        return t;
      };
    }),
    xt = t(function (t) {
      'use strict';
      var s = y.f,
        u = _t.fastKey,
        f = p ? '_s' : 'size',
        a = function (t, n) {
          var e,
            r = u(n);
          if ('F' !== r) return t._i[r];
          for (e = t._f; e; e = e.n) if (e.k == n) return e;
        };
      t.exports = {
        getConstructor: function (t, i, e, r) {
          var o = t(function (t, n) {
            X(t, o, i, '_i'),
              (t._t = i),
              (t._i = G(null)),
              (t._f = undefined),
              (t._l = undefined),
              (t[f] = 0),
              n != undefined && Z(n, e, t[r], t);
          });
          return (
            ct(o.prototype, {
              clear: function u() {
                for (var t = wt(this, i), n = t._i, e = t._f; e; e = e.n)
                  (e.r = !0), e.p && (e.p = e.p.n = undefined), delete n[e.i];
                (t._f = t._l = undefined), (t[f] = 0);
              },
              delete: function (t) {
                var n = wt(this, i),
                  e = a(n, t);
                if (e) {
                  var r = e.n,
                    o = e.p;
                  delete n._i[e.i],
                    (e.r = !0),
                    o && (o.n = r),
                    r && (r.p = o),
                    n._f == e && (n._f = r),
                    n._l == e && (n._l = o),
                    n[f]--;
                }
                return !!e;
              },
              forEach: function c(t, n) {
                wt(this, i);
                for (
                  var e, r = I(t, 1 < arguments.length ? n : undefined, 3);
                  (e = e ? e.n : this._f);

                )
                  for (r(e.v, e.k, this); e && e.r; ) e = e.p;
              },
              has: function n(t) {
                return !!a(wt(this, i), t);
              },
            }),
            p &&
              s(o.prototype, 'size', {
                get: function () {
                  return wt(this, i)[f];
                },
              }),
            o
          );
        },
        def: function (t, n, e) {
          var r,
            o,
            i = a(t, n);
          return (
            i
              ? (i.v = e)
              : ((t._l = i = { i: (o = u(n, !0)), k: n, v: e, p: (r = t._l), n: undefined, r: !1 }),
                t._f || (t._f = i),
                r && (r.n = i),
                t[f]++,
                'F' !== o && (t._i[o] = i)),
            t
          );
        },
        getEntry: a,
        setStrong: function (t, e, n) {
          W(
            t,
            e,
            function (t, n) {
              (this._t = wt(t, e)), (this._k = n), (this._l = undefined);
            },
            function () {
              for (var t = this, n = t._k, e = t._l; e && e.r; ) e = e.p;
              return t._t && (t._l = e = e ? e.n : t._t._f)
                ? r(0, 'keys' == n ? e.k : 'values' == n ? e.v : [e.k, e.v])
                : ((t._t = undefined), r(1));
            },
            n ? 'entries' : 'values',
            !n,
            !0
          ),
            st(e);
        },
      };
    }),
    gt = t(function (t, n) {
      n.f = {}.propertyIsEnumerable;
    }),
    At = t(function (t, n) {
      var r = Object.getOwnPropertyDescriptor;
      n.f = p
        ? r
        : function o(t, n) {
            if (((t = a(t)), (n = c(n, !0)), u))
              try {
                return r(t, n);
              } catch (e) {}
            if (O(t, n)) return i(!gt.f.call(t, n), t[n]);
          };
    }),
    St = t(function (t) {
      var i = function (t, n) {
        if ((h(t), !k(n) && null !== n)) throw TypeError(n + ": can't set as prototype!");
      };
      t.exports = {
        set:
          Object.setPrototypeOf ||
          ('__proto__' in {}
            ? (function (t, e, r) {
                try {
                  (r = I(Function.call, At.f(Object.prototype, '__proto__').set, 2))(t, []),
                    (e = !(t instanceof Array));
                } catch (n) {
                  e = !0;
                }
                return function o(t, n) {
                  return i(t, n), e ? (t.__proto__ = n) : r(t, n), t;
                };
              })({}, !1)
            : undefined),
        check: i,
      };
    }),
    Pt = t(function (t) {
      var i = St.set;
      t.exports = function (t, n, e) {
        var r,
          o = n.constructor;
        return (
          o !== e &&
            'function' == typeof o &&
            (r = o.prototype) !== e.prototype &&
            k(r) &&
            i &&
            i(t, r),
          t
        );
      };
    }),
    Et = t(function (t) {
      'use strict';
      t.exports = function (r, t, n, e, o, u) {
        var i = T[r],
          c = i,
          s = o ? 'set' : 'add',
          f = c && c.prototype,
          a = {},
          l = function (t) {
            var e = f[t];
            L(
              f,
              t,
              'delete' == t
                ? function (t) {
                    return !(u && !k(t)) && e.call(this, 0 === t ? 0 : t);
                  }
                : 'has' == t
                ? function n(t) {
                    return !(u && !k(t)) && e.call(this, 0 === t ? 0 : t);
                  }
                : 'get' == t
                ? function r(t) {
                    return u && !k(t) ? undefined : e.call(this, 0 === t ? 0 : t);
                  }
                : 'add' == t
                ? function o(t) {
                    return e.call(this, 0 === t ? 0 : t), this;
                  }
                : function i(t, n) {
                    return e.call(this, 0 === t ? 0 : t, n), this;
                  }
            );
          };
        if (
          'function' == typeof c &&
          (u ||
            (f.forEach &&
              !m(function () {
                new c().entries().next();
              })))
        ) {
          var d = new c(),
            p = d[s](u ? {} : -0, 1) != d,
            h = m(function () {
              d.has(1);
            }),
            y = ft(function (t) {
              new c(t);
            }),
            v =
              !u &&
              m(function () {
                for (var t = new c(), n = 5; n--; ) t[s](n, n);
                return !t.has(-0);
              });
          y ||
            (((c = t(function (t, n) {
              X(t, c, r);
              var e = Pt(new i(), t, c);
              return n != undefined && Z(n, o, e[s], e), e;
            })).prototype = f).constructor = c),
            (h || v) && (l('delete'), l('has'), o && l('get')),
            (v || p) && l(s),
            u && f.clear && delete f.clear;
        } else (c = e.getConstructor(t, r, o, s)), ct(c.prototype, n), (_t.NEED = !0);
        return H(c, r), (a[r] = c), R(R.G + R.W + R.F * (c != i), a), u || e.setStrong(c, r, o), c;
      };
    });
  t(function (t) {
    'use strict';
    var n = 'Set';
    t.exports = Et(
      n,
      function (n) {
        return function e(t) {
          return n(this, 0 < arguments.length ? t : undefined);
        };
      },
      {
        add: function e(t) {
          return xt.def(wt(this, n), (t = 0 === t ? 0 : t), t);
        },
      },
      xt
    );
  }),
    t(function (t) {
      t.exports = B.Set;
    });
  !(function (t) {
    'use strict';
    function r(t) {
      if (('string' != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t)))
        throw new TypeError('Invalid character in header field name');
      return t.toLowerCase();
    }
    function o(t) {
      return 'string' != typeof t && (t = String(t)), t;
    }
    function i(n) {
      var t = {
        next: function () {
          var t = n.shift();
          return { done: t === undefined, value: t };
        },
      };
      return (
        m.iterable &&
          (t[Symbol.iterator] = function () {
            return t;
          }),
        t
      );
    }
    function u(n) {
      (this.map = {}),
        n instanceof u
          ? n.forEach(function (t, n) {
              this.append(n, t);
            }, this)
          : Array.isArray(n)
          ? n.forEach(function (t) {
              this.append(t[0], t[1]);
            }, this)
          : n &&
            Object.getOwnPropertyNames(n).forEach(function (t) {
              this.append(t, n[t]);
            }, this);
    }
    function n(t) {
      if (t.bodyUsed) return Promise.reject(new TypeError('Already read'));
      t.bodyUsed = !0;
    }
    function c(e) {
      return new Promise(function (t, n) {
        (e.onload = function () {
          t(e.result);
        }),
          (e.onerror = function () {
            n(e.error);
          });
      });
    }
    function e(t) {
      var n = new FileReader(),
        e = c(n);
      return n.readAsArrayBuffer(t), e;
    }
    function s(t) {
      var n = new FileReader(),
        e = c(n);
      return n.readAsText(t), e;
    }
    function f(t) {
      for (var n = new Uint8Array(t), e = new Array(n.length), r = 0; r < n.length; r++)
        e[r] = String.fromCharCode(n[r]);
      return e.join('');
    }
    function a(t) {
      if (t.slice) return t.slice(0);
      var n = new Uint8Array(t.byteLength);
      return n.set(new Uint8Array(t)), n.buffer;
    }
    function l() {
      return (
        (this.bodyUsed = !1),
        (this._initBody = function (t) {
          if ((this._bodyInit = t))
            if ('string' == typeof t) this._bodyText = t;
            else if (m.blob && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;
            else if (m.formData && FormData.prototype.isPrototypeOf(t)) this._bodyFormData = t;
            else if (m.searchParams && URLSearchParams.prototype.isPrototypeOf(t))
              this._bodyText = t.toString();
            else if (m.arrayBuffer && m.blob && _(t))
              (this._bodyArrayBuffer = a(t.buffer)),
                (this._bodyInit = new Blob([this._bodyArrayBuffer]));
            else {
              if (!m.arrayBuffer || (!ArrayBuffer.prototype.isPrototypeOf(t) && !w(t)))
                throw new Error('unsupported BodyInit type');
              this._bodyArrayBuffer = a(t);
            }
          else this._bodyText = '';
          this.headers.get('content-type') ||
            ('string' == typeof t
              ? this.headers.set('content-type', 'text/plain;charset=UTF-8')
              : this._bodyBlob && this._bodyBlob.type
              ? this.headers.set('content-type', this._bodyBlob.type)
              : m.searchParams &&
                URLSearchParams.prototype.isPrototypeOf(t) &&
                this.headers.set(
                  'content-type',
                  'application/x-www-form-urlencoded;charset=UTF-8'
                ));
        }),
        m.blob &&
          ((this.blob = function () {
            var t = n(this);
            if (t) return t;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData) throw new Error('could not read FormData body as blob');
            return Promise.resolve(new Blob([this._bodyText]));
          }),
          (this.arrayBuffer = function () {
            return this._bodyArrayBuffer
              ? n(this) || Promise.resolve(this._bodyArrayBuffer)
              : this.blob().then(e);
          })),
        (this.text = function () {
          var t = n(this);
          if (t) return t;
          if (this._bodyBlob) return s(this._bodyBlob);
          if (this._bodyArrayBuffer) return Promise.resolve(f(this._bodyArrayBuffer));
          if (this._bodyFormData) throw new Error('could not read FormData body as text');
          return Promise.resolve(this._bodyText);
        }),
        m.formData &&
          (this.formData = function () {
            return this.text().then(h);
          }),
        (this.json = function () {
          return this.text().then(JSON.parse);
        }),
        this
      );
    }
    function d(t) {
      var n = t.toUpperCase();
      return -1 < x.indexOf(n) ? n : t;
    }
    function p(t, n) {
      var e = (n = n || {}).body;
      if (t instanceof p) {
        if (t.bodyUsed) throw new TypeError('Already read');
        (this.url = t.url),
          (this.credentials = t.credentials),
          n.headers || (this.headers = new u(t.headers)),
          (this.method = t.method),
          (this.mode = t.mode),
          e || null == t._bodyInit || ((e = t._bodyInit), (t.bodyUsed = !0));
      } else this.url = String(t);
      if (
        ((this.credentials = n.credentials || this.credentials || 'omit'),
        (!n.headers && this.headers) || (this.headers = new u(n.headers)),
        (this.method = d(n.method || this.method || 'GET')),
        (this.mode = n.mode || this.mode || null),
        (this.referrer = null),
        ('GET' === this.method || 'HEAD' === this.method) && e)
      )
        throw new TypeError('Body not allowed for GET or HEAD requests');
      this._initBody(e);
    }
    function h(t) {
      var o = new FormData();
      return (
        t
          .trim()
          .split('&')
          .forEach(function (t) {
            if (t) {
              var n = t.split('='),
                e = n.shift().replace(/\+/g, ' '),
                r = n.join('=').replace(/\+/g, ' ');
              o.append(decodeURIComponent(e), decodeURIComponent(r));
            }
          }),
        o
      );
    }
    function y(t) {
      var o = new u();
      return (
        t
          .replace(/\r?\n[\t ]+/g, ' ')
          .split(/\r?\n/)
          .forEach(function (t) {
            var n = t.split(':'),
              e = n.shift().trim();
            if (e) {
              var r = n.join(':').trim();
              o.append(e, r);
            }
          }),
        o
      );
    }
    function v(t, n) {
      n || (n = {}),
        (this.type = 'default'),
        (this.status = n.status === undefined ? 200 : n.status),
        (this.ok = 200 <= this.status && this.status < 300),
        (this.statusText = 'statusText' in n ? n.statusText : 'OK'),
        (this.headers = new u(n.headers)),
        (this.url = n.url || ''),
        this._initBody(t);
    }
    if (!t.fetch) {
      var m = {
        searchParams: 'URLSearchParams' in t,
        iterable: 'Symbol' in t && 'iterator' in Symbol,
        blob:
          'FileReader' in t &&
          'Blob' in t &&
          (function () {
            try {
              return new Blob(), !0;
            } catch (t) {
              return !1;
            }
          })(),
        formData: 'FormData' in t,
        arrayBuffer: 'ArrayBuffer' in t,
      };
      if (m.arrayBuffer)
        var b = [
            '[object Int8Array]',
            '[object Uint8Array]',
            '[object Uint8ClampedArray]',
            '[object Int16Array]',
            '[object Uint16Array]',
            '[object Int32Array]',
            '[object Uint32Array]',
            '[object Float32Array]',
            '[object Float64Array]',
          ],
          _ = function (t) {
            return t && DataView.prototype.isPrototypeOf(t);
          },
          w =
            ArrayBuffer.isView ||
            function (t) {
              return t && -1 < b.indexOf(Object.prototype.toString.call(t));
            };
      (u.prototype.append = function (t, n) {
        (t = r(t)), (n = o(n));
        var e = this.map[t];
        this.map[t] = e ? e + ',' + n : n;
      }),
        (u.prototype['delete'] = function (t) {
          delete this.map[r(t)];
        }),
        (u.prototype.get = function (t) {
          return (t = r(t)), this.has(t) ? this.map[t] : null;
        }),
        (u.prototype.has = function (t) {
          return this.map.hasOwnProperty(r(t));
        }),
        (u.prototype.set = function (t, n) {
          this.map[r(t)] = o(n);
        }),
        (u.prototype.forEach = function (t, n) {
          for (var e in this.map) this.map.hasOwnProperty(e) && t.call(n, this.map[e], e, this);
        }),
        (u.prototype.keys = function () {
          var e = [];
          return (
            this.forEach(function (t, n) {
              e.push(n);
            }),
            i(e)
          );
        }),
        (u.prototype.values = function () {
          var n = [];
          return (
            this.forEach(function (t) {
              n.push(t);
            }),
            i(n)
          );
        }),
        (u.prototype.entries = function () {
          var e = [];
          return (
            this.forEach(function (t, n) {
              e.push([n, t]);
            }),
            i(e)
          );
        }),
        m.iterable && (u.prototype[Symbol.iterator] = u.prototype.entries);
      var x = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
      (p.prototype.clone = function () {
        return new p(this, { body: this._bodyInit });
      }),
        l.call(p.prototype),
        l.call(v.prototype),
        (v.prototype.clone = function () {
          return new v(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new u(this.headers),
            url: this.url,
          });
        }),
        (v.error = function () {
          var t = new v(null, { status: 0, statusText: '' });
          return (t.type = 'error'), t;
        });
      var g = [301, 302, 303, 307, 308];
      (v.redirect = function (t, n) {
        if (-1 === g.indexOf(n)) throw new RangeError('Invalid status code');
        return new v(null, { status: n, headers: { location: t } });
      }),
        (t.Headers = u),
        (t.Request = p),
        (t.Response = v),
        (t.fetch = function (o, i) {
          return new Promise(function (e, t) {
            var n = new p(o, i),
              r = new XMLHttpRequest();
            (r.onload = function () {
              var t = {
                status: r.status,
                statusText: r.statusText,
                headers: y(r.getAllResponseHeaders() || ''),
              };
              t.url = 'responseURL' in r ? r.responseURL : t.headers.get('X-Request-URL');
              var n = 'response' in r ? r.response : r.responseText;
              e(new v(n, t));
            }),
              (r.onerror = function () {
                t(new TypeError('Network request failed'));
              }),
              (r.ontimeout = function () {
                t(new TypeError('Network request failed'));
              }),
              r.open(n.method, n.url, !0),
              'include' === n.credentials
                ? (r.withCredentials = !0)
                : 'omit' === n.credentials && (r.withCredentials = !1),
              'responseType' in r && m.blob && (r.responseType = 'blob'),
              n.headers.forEach(function (t, n) {
                r.setRequestHeader(n, t);
              }),
              r.send('undefined' == typeof n._bodyInit ? null : n._bodyInit);
          });
        }),
        (t.fetch.polyfill = !0);
    }
  })('undefined' != typeof self ? self : this);
  var Ot = t(function (t, n) {
      'use strict';
      Object.defineProperty(n, '__esModule', { value: !0 });
      var e = {
        track: function r() {
          var t;
          'undefined' != typeof ShopifyAnalytics &&
            ShopifyAnalytics.lib &&
            (t = ShopifyAnalytics.lib).track.apply(t, arguments);
        },
      };
      n['default'] = e;
    }),
    Tt = t(function (t, n) {
      'use strict';
      function e(t) {
        o(), r(t, 'smart-payment-buttons');
      }
      function r(t, n) {
        var e = 'shopify-features__' + n,
          r = e + '--disabled',
          o = e + '--enabled',
          i = t.className.split(/\s+/);
        t.className = i
          .filter(function (t) {
            return Boolean(t);
          })
          .filter(function (t) {
            return t !== r;
          })
          .filter(function (t) {
            return t !== o;
          })
          .concat([o])
          .join(' ');
      }
      function o() {
        var t = 'shopify-dynamic-checkout';
        if (null === document.getElementById(t)) {
          var n = document.createElement('style');
          (n.id = t), (n.innerHTML = i), document.head.appendChild(n);
        }
      }
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n['default'] = e),
        (n.toggleFeatureCssClasses = r),
        (n.appendDynamicCheckoutProductCss = o);
      var i =
        '\n.shopify-payment-button__button--hidden {\n  visibility: hidden;\n}\n\n.shopify-payment-button__button {\n  border-radius: 4px;\n  border: none;\n  box-shadow: 0 0 0 0 transparent;\n  color: white;\n  cursor: pointer;\n  display: block;\n  font-size: 1em;\n  font-weight: 500;\n  line-height: 1;\n  text-align: center;\n  width: 100%;\n  transition: background 0.2s ease-in-out;\n}\n\n.shopify-payment-button__button[disabled] {\n  opacity: 0.6;\n  cursor: default;\n}\n\n.shopify-payment-button__button--unbranded {\n  background-color: #1990c6;\n  padding: 1em 2em;\n}\n\n.shopify-payment-button__button--unbranded:hover:not([disabled]) {\n  background-color: #136f99;\n}\n\n.shopify-payment-button__more-options {\n  background: transparent;\n  border: 0 none;\n  cursor: pointer;\n  display: block;\n  font-size: 1em;\n  margin-top: 1em;\n  text-align: center;\n  width: 100%;\n}\n\n.shopify-payment-button__more-options:hover:not([disabled]) {\n  text-decoration: underline;\n}\n\n.shopify-payment-button__more-options[disabled] {\n  opacity: 0.6;\n  cursor: default;\n}\n\n.shopify-payment-button__button--branded {\n  display: flex;\n  flex-direction: column;\n  min-height: 44px;\n  position: relative;\n  z-index: 1;\n}\n\n.shopify-payment-button__button--branded .shopify-cleanslate {\n  flex: 1 !important;\n  display: flex !important;\n  flex-direction: column !important;\n}\n';
    }),
    jt = t(function (t, n) {
      'use strict';
      function e(n, e) {
        return r().then(function (t) {
          t ? o(n, e) : u(n, e);
        });
      }
      function r() {
        function r() {
          return document.querySelector('[data-shopify=payment-button]');
        }
        return new Promise(function (e) {
          r()
            ? e(!0)
            : window.Shopify.designMode
            ? new MutationObserver(function (t, n) {
                r() && (e(!0), n.disconnect());
              }).observe(document.body, { childList: !0, subtree: !0 })
            : e(!1);
        });
      }
      function o(t, n) {
        (0, a['default'])(t);
        var e = i(t, n);
        return c('[SPB] Script appended'), e;
      }
      function i(t, n) {
        var e = t.parentNode,
          r = e.createElement('script');
        return (
          (r.src = n.smart_payment_buttons_url),
          (r.dataset.sourceAttribute = 'shopify.dynamic_checkout.product.init'),
          e.head.appendChild(r),
          r
        );
      }
      function u(n, e) {
        'undefined' == typeof window.Shopify.PaymentButton &&
          (window.Shopify.PaymentButton = {
            init: function r() {
              var t = o(n, e);
              (t.onload = function () {
                s();
              }),
                (t.onerror = function () {
                  console.error('Error loading Dynamic Checkout bundle');
                }),
                (window.Shopify.PaymentButton.init = function () {});
            },
          });
      }
      function c(t) {
        l && performance.mark(t);
      }
      function s() {
        var t = 'polyfilled_dynamic_checkout',
          n = window.Shopify && window.Shopify.theme && window.Shopify.theme.name,
          e = window.location.href;
        f['default'].track(t, { theme: n, url: e });
      }
      Object.defineProperty(n, '__esModule', { value: !0 }), (n['default'] = e);
      var f = d(Ot),
        a = d(Tt),
        l = 'undefined' != typeof performance && 'function' == typeof performance.mark;
    }),
    Ft = t(function (t, n) {
      'use strict';
      function e(t, n) {
        return r().then(function () {
          o(t, n);
        });
      }
      function r() {
        function r() {
          return document.getElementById('dynamic-checkout-cart');
        }
        return new Promise(function (e) {
          r()
            ? ((window.Shopify.CartType = 'cart_page'), e())
            : new MutationObserver(function (t, n) {
                r() && ((window.Shopify.CartType = 'cart_ajax'), e(), n.disconnect());
              }).observe(document.body, { childList: !0, subtree: !0 });
        });
      }
      function o(t, n) {
        var e = t.parentNode,
          r = e.createElement('script');
        return (
          (r.src = n.dynamic_checkout_cart_url),
          (r.dataset.sourceAttribute = 'shopify.dynamic_checkout.cart.init'),
          e.head.appendChild(r),
          r
        );
      }
      Object.defineProperty(n, '__esModule', { value: !0 }), (n['default'] = e);
    }),
    kt = t(function (t, n) {
      'use strict';
      function e(t) {
        var n = r(t);
        n && ((0, o['default'])(t, n), (0, i['default'])(t, n));
      }
      function r(t) {
        try {
          return JSON.parse(t.querySelector(u).textContent);
        } catch (n) {
          return null;
        }
      }
      Object.defineProperty(n, '__esModule', { value: !0 }), (n['default'] = e);
      var o = d(jt),
        i = d(Ft),
        u = '#shopify-features';
    });
  t(function () {
    'use strict';
    (0, d(kt)['default'])(document.documentElement);
  });
})('undefined' != typeof global ? global : 'undefined' != typeof window && window);
