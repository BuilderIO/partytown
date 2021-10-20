!(function (e) {
  function t(t) {
    for (var r, s, c = t[0], a = t[1], u = t[2], l = 0, p = []; l < c.length; l++)
      (s = c[l]), Object.prototype.hasOwnProperty.call(i, s) && i[s] && p.push(i[s][0]), (i[s] = 0);
    for (r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
    for (d && d(t); p.length; ) p.shift()();
    return o.push.apply(o, u || []), n();
  }
  function n() {
    for (var e, t = 0; t < o.length; t++) {
      for (var n = o[t], r = !0, c = 1; c < n.length; c++) {
        var a = n[c];
        0 !== i[a] && (r = !1);
      }
      r && (o.splice(t--, 1), (e = s((s.s = n[0]))));
    }
    return e;
  }
  var r = {},
    i = { 4: 0 },
    o = [];
  function s(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
  }
  (s.e = function (e) {
    var t = [],
      n = i[e];
    if (0 !== n)
      if (n) t.push(n[2]);
      else {
        var r = new Promise(function (t, r) {
          n = i[e] = [t, r];
        });
        t.push((n[2] = r));
        var o,
          c = document.createElement('script');
        (c.charset = 'utf-8'),
          (c.timeout = 120),
          s.nc && c.setAttribute('nonce', s.nc),
          (c.src = (function (e) {
            return (
              s.p +
              '' +
              ({
                0: 'app',
                1: 'banner',
                2: 'bound-events',
                3: 'confetti',
                5: 'install',
                6: 'launcher-discovery',
                7: 'locale-ar-json',
                8: 'locale-bg-json',
                9: 'locale-bs-json',
                10: 'locale-ca-json',
                11: 'locale-cs-json',
                12: 'locale-da-json',
                13: 'locale-de-form-json',
                14: 'locale-de-json',
                15: 'locale-el-json',
                16: 'locale-es-json',
                17: 'locale-et-json',
                18: 'locale-fi-json',
                19: 'locale-fr-json',
                20: 'locale-he-json',
                21: 'locale-hr-json',
                22: 'locale-hu-json',
                23: 'locale-id-json',
                24: 'locale-it-json',
                25: 'locale-ja-json',
                26: 'locale-ko-json',
                27: 'locale-lt-json',
                28: 'locale-lv-json',
                29: 'locale-mn-json',
                30: 'locale-nb-json',
                31: 'locale-nl-json',
                32: 'locale-package-json',
                33: 'locale-pl-json',
                34: 'locale-pt-BR-json',
                35: 'locale-pt-json',
                36: 'locale-ro-json',
                37: 'locale-ru-json',
                38: 'locale-sl-json',
                39: 'locale-sr-json',
                40: 'locale-sv-json',
                41: 'locale-tr-json',
                42: 'locale-vi-json',
                43: 'locale-zh-CN-json',
                44: 'locale-zh-TW-json',
                45: 'message',
                46: 'sentry',
                47: 'survey',
                49: 'vendors~app',
                50: 'vendors~bound-events',
                51: 'vendors~message',
                52: 'vendors~sentry',
              }[e] || e) +
              '-modern.' +
              {
                0: 'd7406c64',
                1: 'bff79b04',
                2: '2e6c3506',
                3: '6bcc61f8',
                5: '3297ef99',
                6: 'e7a51c9a',
                7: '0942e77c',
                8: '71ce7257',
                9: '9f23d1a8',
                10: 'e31d826c',
                11: '91fc9f62',
                12: '050d295b',
                13: 'cf1039e8',
                14: 'cbf35252',
                15: '986b0d87',
                16: '9c2bd058',
                17: 'a07edfe7',
                18: '99bce9e4',
                19: 'c755228f',
                20: 'bb52cf22',
                21: 'd58acd19',
                22: '557089c8',
                23: '5ca30dcf',
                24: 'd9cf4ca5',
                25: '54343d47',
                26: '194850a4',
                27: 'f866a04c',
                28: '62014e8e',
                29: '98b42c5f',
                30: '096e257d',
                31: 'e6512ee2',
                32: '55767eb2',
                33: 'b58ba051',
                34: '654364c2',
                35: '577fa578',
                36: 'ffd97bf2',
                37: '3f04011a',
                38: '97ffa58d',
                39: '76b667f3',
                40: 'c0ff2c9c',
                41: '625732aa',
                42: '5fd60a02',
                43: 'd5c9e83c',
                44: '8df152aa',
                45: '93277791',
                46: '3da336a6',
                47: '45c661b6',
                49: 'c7bfd661',
                50: 'f409b997',
                51: '8cdce0f1',
                52: '2b0dadcf',
              }[e] +
              '.js'
            );
          })(e));
        var a = new Error();
        o = function (t) {
          (c.onerror = c.onload = null), clearTimeout(u);
          var n = i[e];
          if (0 !== n) {
            if (n) {
              var r = t && ('load' === t.type ? 'missing' : t.type),
                o = t && t.target && t.target.src;
              (a.message = 'Loading chunk ' + e + ' failed.\n(' + r + ': ' + o + ')'),
                (a.name = 'ChunkLoadError'),
                (a.type = r),
                (a.request = o),
                n[1](a);
            }
            i[e] = void 0;
          }
        };
        var u = setTimeout(function () {
          o({ type: 'timeout', target: c });
        }, 12e4);
        (c.onerror = c.onload = o), document.head.appendChild(c);
      }
    return Promise.all(t);
  }),
    (s.m = e),
    (s.c = r),
    (s.d = function (e, t, n) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (s.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (s.t = function (e, t) {
      if ((1 & t && (e = s(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (s.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var r in e)
          s.d(
            n,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (s.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return s.d(t, 'a', t), t;
    }),
    (s.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (s.p = 'https://js.intercomcdn.com/'),
    (s.oe = function (e) {
      throw (console.error(e), e);
    });
  var c = (window.webpackJsonp = window.webpackJsonp || []),
    a = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (var u = 0; u < c.length; u++) t(c[u]);
  var d = a;
  o.push([250, 48]), n();
})([
  function (e, t, n) {
    'use strict';
    n.d(t, 'b', function () {
      return r;
    }),
      n.d(t, 'a', function () {
        return i;
      }),
      n.d(t, 'c', function () {
        return o;
      }),
      n.d(t, 'd', function () {
        return s;
      }),
      n.d(t, 'e', function () {
        return c;
      }),
      n.d(t, 'f', function () {
        return a;
      }),
      n.d(t, 'g', function () {
        return u;
      }),
      n.d(t, 'h', function () {
        return d;
      }),
      n.d(t, 'i', function () {
        return l;
      }),
      n.d(t, 'j', function () {
        return p;
      }),
      n.d(t, 'k', function () {
        return f;
      }),
      n.d(t, 'l', function () {
        return b;
      }),
      n.d(t, 'm', function () {
        return h;
      }),
      n.d(t, 'n', function () {
        return g;
      }),
      n.d(t, 'o', function () {
        return m;
      }),
      n.d(t, 'p', function () {
        return v;
      }),
      n.d(t, 'q', function () {
        return O;
      }),
      n.d(t, 'r', function () {
        return _;
      }),
      n.d(t, 's', function () {
        return y;
      }),
      n.d(t, 't', function () {
        return S;
      }),
      n.d(t, 'u', function () {
        return j;
      }),
      n.d(t, 'v', function () {
        return w;
      }),
      n.d(t, 'w', function () {
        return E;
      }),
      n.d(t, 'x', function () {
        return I;
      }),
      n.d(t, 'y', function () {
        return C;
      }),
      n.d(t, 'A', function () {
        return T;
      }),
      n.d(t, 'z', function () {
        return A;
      }),
      n.d(t, 'B', function () {
        return R;
      }),
      n.d(t, 'C', function () {
        return P;
      }),
      n.d(t, 'D', function () {
        return M;
      }),
      n.d(t, 'E', function () {
        return D;
      }),
      n.d(t, 'F', function () {
        return k;
      }),
      n.d(t, 'G', function () {
        return N;
      }),
      n.d(t, 'H', function () {
        return U;
      }),
      n.d(t, 'I', function () {
        return L;
      }),
      n.d(t, 'J', function () {
        return x;
      }),
      n.d(t, 'L', function () {
        return B;
      }),
      n.d(t, 'K', function () {
        return $;
      }),
      n.d(t, 'M', function () {
        return F;
      }),
      n.d(t, 'N', function () {
        return V;
      }),
      n.d(t, 'O', function () {
        return H;
      }),
      n.d(t, 'P', function () {
        return G;
      }),
      n.d(t, 'Q', function () {
        return q;
      }),
      n.d(t, 'R', function () {
        return z;
      }),
      n.d(t, 'S', function () {
        return W;
      }),
      n.d(t, 'T', function () {
        return J;
      }),
      n.d(t, 'U', function () {
        return Y;
      }),
      n.d(t, 'V', function () {
        return Q;
      }),
      n.d(t, 'W', function () {
        return K;
      }),
      n.d(t, 'X', function () {
        return X;
      }),
      n.d(t, 'Y', function () {
        return Z;
      }),
      n.d(t, 'Z', function () {
        return ee;
      }),
      n.d(t, 'ab', function () {
        return te;
      }),
      n.d(t, 'bb', function () {
        return ne;
      }),
      n.d(t, 'cb', function () {
        return re;
      }),
      n.d(t, 'db', function () {
        return ie;
      }),
      n.d(t, 'eb', function () {
        return oe;
      }),
      n.d(t, 'fb', function () {
        return se;
      }),
      n.d(t, 'gb', function () {
        return ce;
      }),
      n.d(t, 'hb', function () {
        return ae;
      }),
      n.d(t, 'ib', function () {
        return ue;
      }),
      n.d(t, 'jb', function () {
        return de;
      }),
      n.d(t, 'kb', function () {
        return le;
      }),
      n.d(t, 'lb', function () {
        return pe;
      }),
      n.d(t, 'mb', function () {
        return fe;
      }),
      n.d(t, 'nb', function () {
        return be;
      }),
      n.d(t, 'ob', function () {
        return he;
      }),
      n.d(t, 'pb', function () {
        return ge;
      }),
      n.d(t, 'qb', function () {
        return me;
      }),
      n.d(t, 'rb', function () {
        return ve;
      }),
      n.d(t, 'sb', function () {
        return Oe;
      }),
      n.d(t, 'wb', function () {
        return _e;
      }),
      n.d(t, 'xb', function () {
        return ye;
      }),
      n.d(t, 'yb', function () {
        return Se;
      }),
      n.d(t, 'tb', function () {
        return je;
      }),
      n.d(t, 'ub', function () {
        return we;
      }),
      n.d(t, 'vb', function () {
        return Ee;
      }),
      n.d(t, 'zb', function () {
        return Ie;
      }),
      n.d(t, 'Ab', function () {
        return Ce;
      }),
      n.d(t, 'Bb', function () {
        return Te;
      }),
      n.d(t, 'Cb', function () {
        return Ae;
      }),
      n.d(t, 'Db', function () {
        return Re;
      }),
      n.d(t, 'Eb', function () {
        return Pe;
      }),
      n.d(t, 'Fb', function () {
        return Me;
      }),
      n.d(t, 'Gb', function () {
        return De;
      }),
      n.d(t, 'Hb', function () {
        return ke;
      }),
      n.d(t, 'Ib', function () {
        return Ne;
      }),
      n.d(t, 'Jb', function () {
        return Ue;
      }),
      n.d(t, 'Kb', function () {
        return Le;
      }),
      n.d(t, 'Lb', function () {
        return xe;
      }),
      n.d(t, 'Mb', function () {
        return Be;
      }),
      n.d(t, 'Nb', function () {
        return $e;
      }),
      n.d(t, 'Ob', function () {
        return Fe;
      }),
      n.d(t, 'Qb', function () {
        return Ve;
      }),
      n.d(t, 'Rb', function () {
        return He;
      }),
      n.d(t, 'Sb', function () {
        return Ge;
      }),
      n.d(t, 'Tb', function () {
        return qe;
      }),
      n.d(t, 'Ub', function () {
        return ze;
      }),
      n.d(t, 'Vb', function () {
        return We;
      }),
      n.d(t, 'Wb', function () {
        return Je;
      }),
      n.d(t, 'Xb', function () {
        return Ye;
      }),
      n.d(t, 'Zb', function () {
        return Qe;
      }),
      n.d(t, 'Yb', function () {
        return Ke;
      }),
      n.d(t, 'Pb', function () {
        return Xe;
      }),
      n.d(t, 'bc', function () {
        return Ze;
      }),
      n.d(t, 'cc', function () {
        return et;
      }),
      n.d(t, 'ac', function () {
        return tt;
      }),
      n.d(t, 'dc', function () {
        return nt;
      }),
      n.d(t, 'fc', function () {
        return rt;
      }),
      n.d(t, 'ec', function () {
        return it;
      }),
      n.d(t, 'gc', function () {
        return ot;
      }),
      n.d(t, 'hc', function () {
        return st;
      }),
      n.d(t, 'ic', function () {
        return ct;
      }),
      n.d(t, 'jc', function () {
        return at;
      }),
      n.d(t, 'kc', function () {
        return ut;
      }),
      n.d(t, 'lc', function () {
        return dt;
      }),
      n.d(t, 'mc', function () {
        return lt;
      }),
      n.d(t, 'nc', function () {
        return pt;
      }),
      n.d(t, 'oc', function () {
        return ft;
      }),
      n.d(t, 'pc', function () {
        return bt;
      }),
      n.d(t, 'qc', function () {
        return ht;
      }),
      n.d(t, 'rc', function () {
        return gt;
      }),
      n.d(t, 'sc', function () {
        return mt;
      }),
      n.d(t, 'tc', function () {
        return vt;
      }),
      n.d(t, 'vc', function () {
        return Ot;
      }),
      n.d(t, 'uc', function () {
        return _t;
      }),
      n.d(t, 'wc', function () {
        return yt;
      }),
      n.d(t, 'xc', function () {
        return St;
      }),
      n.d(t, 'yc', function () {
        return jt;
      }),
      n.d(t, 'zc', function () {
        return wt;
      }),
      n.d(t, 'Ac', function () {
        return Et;
      }),
      n.d(t, 'Cc', function () {
        return It;
      }),
      n.d(t, 'Dc', function () {
        return Ct;
      }),
      n.d(t, 'Bc', function () {
        return Tt;
      }),
      n.d(t, 'Ec', function () {
        return At;
      }),
      n.d(t, 'Fc', function () {
        return Rt;
      }),
      n.d(t, 'Gc', function () {
        return Pt;
      }),
      n.d(t, 'Hc', function () {
        return Mt;
      }),
      n.d(t, 'Ic', function () {
        return Dt;
      }),
      n.d(t, 'Jc', function () {
        return kt;
      }),
      n.d(t, 'Kc', function () {
        return Nt;
      }),
      n.d(t, 'Lc', function () {
        return Ut;
      }),
      n.d(t, 'Mc', function () {
        return Lt;
      }),
      n.d(t, 'Nc', function () {
        return xt;
      }),
      n.d(t, 'Oc', function () {
        return Bt;
      }),
      n.d(t, 'Pc', function () {
        return $t;
      }),
      n.d(t, 'Qc', function () {
        return Ft;
      }),
      n.d(t, 'Rc', function () {
        return Vt;
      }),
      n.d(t, 'Sc', function () {
        return Ht;
      }),
      n.d(t, 'Tc', function () {
        return Gt;
      }),
      n.d(t, 'Vc', function () {
        return qt;
      }),
      n.d(t, 'Uc', function () {
        return zt;
      }),
      n.d(t, 'Wc', function () {
        return Wt;
      }),
      n.d(t, 'Xc', function () {
        return Jt;
      }),
      n.d(t, 'Yc', function () {
        return Yt;
      }),
      n.d(t, 'Zc', function () {
        return Qt;
      }),
      n.d(t, 'ad', function () {
        return Kt;
      }),
      n.d(t, 'bd', function () {
        return Xt;
      }),
      n.d(t, 'cd', function () {
        return Zt;
      }),
      n.d(t, 'dd', function () {
        return en;
      }),
      n.d(t, 'ed', function () {
        return tn;
      }),
      n.d(t, 'fd', function () {
        return nn;
      }),
      n.d(t, 'gd', function () {
        return rn;
      }),
      n.d(t, 'hd', function () {
        return on;
      }),
      n.d(t, 'id', function () {
        return sn;
      }),
      n.d(t, 'jd', function () {
        return cn;
      }),
      n.d(t, 'kd', function () {
        return an;
      }),
      n.d(t, 'ld', function () {
        return un;
      }),
      n.d(t, 'md', function () {
        return dn;
      }),
      n.d(t, 'nd', function () {
        return ln;
      }),
      n.d(t, 'od', function () {
        return pn;
      }),
      n.d(t, 'pd', function () {
        return fn;
      }),
      n.d(t, 'qd', function () {
        return bn;
      }),
      n.d(t, 'rd', function () {
        return hn;
      }),
      n.d(t, 'sd', function () {
        return gn;
      }),
      n.d(t, 'td', function () {
        return mn;
      }),
      n.d(t, 'ud', function () {
        return vn;
      }),
      n.d(t, 'vd', function () {
        return On;
      }),
      n.d(t, 'wd', function () {
        return _n;
      }),
      n.d(t, 'xd', function () {
        return yn;
      }),
      n.d(t, 'yd', function () {
        return Sn;
      }),
      n.d(t, 'zd', function () {
        return jn;
      }),
      n.d(t, 'Ad', function () {
        return wn;
      });
    const r = 'ACTIVATE_TRIGGER_FAILED',
      i = 'ACTIVATE_TRIGGER',
      o = 'ADD_CONVERSATION_RATING_REMARK',
      s = 'ADD_INBOUND_SUGGESTIONS',
      c = 'ADD_TRIGGER',
      a = 'ADMIN_IS_TYPING',
      u = 'ANONYMOUS_SESSION_CHANGED',
      d = 'ARTICLE_GO_BACK',
      l = 'ARTICLE_LOADED',
      p = 'CHANGE_BOUND_EVENT_CREATOR_STAGE',
      f = 'CHANGE_CONVERSATION_RATING_INDEX',
      b = 'CHANGE_VIDEO_MUTED',
      h = 'CLEAR_OPEN_ON_BOOT',
      g = 'CLOSE_ALERT',
      m = 'CLOSE_ARTICLE',
      v = 'CLOSE_BOUND_EVENT_CREATOR',
      O = 'CLOSE_INSTALL_MODE',
      _ = 'CLOSE_LAUNCHER_DISCOVERY_MODE',
      y = 'CLOSE_MESSAGE',
      S = 'CLOSE_MESSENGER',
      j = 'CLOSE_POINTER_MESSAGE',
      w = 'CLOSE_SHEET',
      E = 'COLLECT_EMAIL_FROM_BANNER',
      I = 'COMPLETE_TOUR',
      C = 'COMPOSER_CONTENT_CHANGED',
      T = 'CONVERSATION_READ_ELSEWHERE',
      A = 'CONVERSATIONS_SCROLLED',
      R = 'CREATE_ARTICLE_REACTION_REQUEST',
      P = 'CREATE_BANNER_CUSTOMIZATION_OVERRIDE',
      M = 'CREATE_COMMENT_FAILURE',
      D = 'CREATE_COMMENT_REQUEST',
      k = 'CREATE_COMMENT_SUCCESS',
      N = 'CREATE_CONVERSATION_FAILURE',
      U = 'CREATE_CONVERSATION_REQUEST',
      L = 'CREATE_CONVERSATION_SUCCESS',
      x = 'CREATE_CUSTOMIZATION_OVERRIDE',
      B = 'CREATE_EVENT_FAILED',
      $ = 'CREATE_EVENT',
      F = 'CREATE_OR_UPDATE_USER_FAILURE',
      V = 'CREATE_OR_UPDATE_USER_REQUEST',
      H = 'CREATE_OR_UPDATE_USER_SUCCESS',
      G = 'CREATE_REACTION_FAILURE',
      q = 'CREATE_REACTION_REQUEST',
      z = 'CREATE_REACTION_SUCCESS',
      W = 'DEACTIVATE_TRIGGER',
      J = 'DELIVER_BOT_INTRO',
      Y = 'DESTROY_SESSION',
      Q = 'DISABLE_LAUNCHER_DISCOVERY_MODE',
      K = 'DISMISS_BANNER',
      X = 'DISMISS_NOTIFICATIONS_FAILURE',
      Z = 'DISMISS_NOTIFICATIONS_REQUEST',
      ee = 'DISMISS_NOTIFICATIONS_SUCCESS',
      te = 'DISMISS_POINTER_MESSAGE',
      ne = 'DISMISS_SURVEY',
      re = 'EMAIL_ATTRIBUTE_COLLECTOR_INSERTED',
      ie = 'EXPANSION_TRANSITION_COMPLETE',
      oe = 'FETCH_BANNER_VIEW',
      se = 'FETCH_MESSENGER_SHEET_DATA_FAILURE',
      ce = 'FETCH_MESSENGER_SHEET_DATA_REQUEST',
      ae = 'FETCH_MESSENGER_SHEET_DATA_SUCCESS',
      ue = 'FETCH_TOUR_FAILURE',
      de = 'FETCH_TOUR_REQUEST',
      le = 'FETCH_TOUR_SUCCESS',
      pe = 'FINISH_NAVIGATION',
      fe = 'GET_ARTICLES_SECTIONS_IN_COLLECTION_FAILURE',
      be = 'GET_ARTICLES_SECTIONS_IN_COLLECTION_REQUEST',
      he = 'GET_ARTICLES_SECTIONS_IN_COLLECTION_SUCCESS',
      ge = 'GET_CARD_CONTENT_FAILURE',
      me = 'GET_CARD_CONTENT_REQUEST',
      ve = 'GET_CARD_CONTENT_SUCCESS',
      Oe = 'GET_CARD_VIEW_FAILURE',
      _e = 'GET_CONVERSATION_FAILURE',
      ye = 'GET_CONVERSATION_REQUEST',
      Se = 'GET_CONVERSATION_SUCCESS',
      je = 'GET_CONVERSATIONS_FAILURE',
      we = 'GET_CONVERSATIONS_REQUEST',
      Ee = 'GET_CONVERSATIONS_SUCCESS',
      Ie = 'GET_HOME_SCREEN_CARDS_FAILURE',
      Ce = 'GET_HOME_SCREEN_CARDS_REQUEST',
      Te = 'GET_HOME_SCREEN_CARDS_SUCCESS',
      Ae = 'GET_HOME_SCREEN_CONVERSATIONS_SUCCESS',
      Re = 'GET_UNREAD_CONVERSATIONS_REQUEST',
      Pe = 'GET_UNREAD_CONVERSATIONS_SUCCESS',
      Me = 'HIDE_SEARCH_BROWSE',
      De = 'INPUT_VALUE_CHANGED',
      ke = 'MARK_ACTIVE_TOUR_AS_COMPLETED',
      Ne = 'MARK_CONVERSATION_AS_READ_FAILURE',
      Ue = 'MARK_CONVERSATION_AS_READ_REQUEST',
      Le = 'MARK_CONVERSATION_AS_READ_SUCCESS',
      xe = 'MESSENGER_NAVIGATE_BACK',
      Be = 'MESSENGER_OPEN_REQUEST_FAILED',
      $e = 'MESSENGER_OPEN_REQUEST_SENT',
      Fe = 'MESSENGER_OPEN_REQUEST_SUCCESS',
      Ve = 'OPEN_ARTICLE',
      He = 'OPEN_BORDERLESS_CONVERSATION',
      Ge = 'OPEN_BOUND_EVENT_CREATOR',
      qe = 'OPEN_INSTALL_MODE',
      ze = 'OPEN_LAUNCHER_DISCOVERY_MODE',
      We = 'OPEN_MESSAGE',
      Je = 'OPEN_MESSENGER',
      Ye = 'OPEN_POINTER_MESSAGE',
      Qe = 'OPEN_SHEET_WITH_TOKEN',
      Ke = 'OPEN_SHEET',
      Xe = 'OPENING_MESSENGER_FROM_LAUNCHER_DISCOVERY_MODE',
      Ze = 'PROGRESS_TOUR_REQUEST_FINISHED',
      et = 'PROGRESS_TOUR_REQUEST_STARTED',
      tt = 'PROGRESS_TOUR',
      nt = 'REACT_TO_BANNER',
      rt = 'RECEIVE_ARTICLE_COLLECTIONS',
      it = 'RECEIVE_ARTICLE',
      ot = 'RECEIVE_BANNERS',
      st = 'RECEIVE_SURVEY',
      ct = 'RECEIVE_SURVEY_STEP',
      at = 'RECORD_MESSAGE_SENT',
      ut = 'RECORD_SURVEY_RESPONSE',
      dt = 'REHYDRATE',
      lt = 'REMOVE_INBOUND_SUGGESTIONS',
      pt = 'REMOVE_TRIGGER',
      ft = 'RESET_TOUR',
      bt = 'SAVE_BOUND_EVENT',
      ht = 'SEARCH_ARTICLES_FAILURE',
      gt = 'SEARCH_ARTICLES_REQUEST',
      mt = 'SEARCH_ARTICLES_SUCCESS',
      vt = 'SEARCH_BROWSE_CLOSE_TRANSITION_ENDED',
      Ot = 'SEARCH_BROWSE_GO_BACK_COMPLETE',
      _t = 'SEARCH_BROWSE_GO_BACK',
      yt = 'SEARCH_GIFS_FAILURE',
      St = 'SEARCH_GIFS_REQUEST',
      jt = 'SEARCH_GIFS_SUCCESS',
      wt = 'SELECT_ARTICLE_COLLECTION',
      Et = 'SET_ACCESSIBILITY_THEME',
      It = 'SET_COMPOSER_SUGGESTIONS_DISMISSED',
      Ct = 'SET_COMPOSER_SUGGESTIONS_LOADING',
      Tt = 'SET_COMPOSER_SUGGESTIONS',
      At = 'SET_LIGHTWEIGHT_APP_ACTIVE',
      Rt = 'SET_NEW_CONVERSATION_COMPOSER_STATE',
      Pt = 'SET_PREDICTIVE_ANSWERS',
      Mt = 'SET_PROXY_LOADED_STATUS',
      Dt = 'SET_SHEET_TITLE',
      kt = 'SET_TAB_NAVIGATION',
      Nt = 'SHOW_ALERT',
      Ut = 'SHOW_CONVERSATION',
      Lt = 'SHOW_CONVERSATIONS',
      xt = 'SHOW_EMPTY_SCREEN',
      Bt = 'SHOW_HOME_SCREEN',
      $t = 'SHOW_MESSENGER_TRIGGER_SCREEN',
      Ft = 'SHOW_NEW_CONVERSATION',
      Vt = 'SHOW_SEARCH_BROWSE',
      Ht = 'START_NAVIGATION',
      Gt = 'START_TOUR_PREVIEW',
      qt = 'STOP_TOUR_PREVIEW',
      zt = 'STOP_TOUR',
      Wt = 'SUBMIT_MESSENGER_CARD_ACTION_FAILURE',
      Jt = 'SUBMIT_MESSENGER_CARD_ACTION_REQUEST',
      Yt = 'SUBMIT_MESSENGER_CARD_ACTION_SUCCESS',
      Qt = 'TOGGLE_ARTICLE_EXPANDED_MODE',
      Kt = 'TOGGLE_UPFRONT_EMAIL_COLLECTOR_STATE',
      Xt = 'TOUR_UPDATE_FAILED',
      Zt = 'TRIGGER_TRANSITIONS_FAILURE',
      en = 'TRIGGER_TRANSITIONS_REQUEST',
      tn = 'TRIGGER_TRANSITIONS_SUCCESS',
      nn = 'UPDATE_BOUND_EVENT_DATA',
      rn = 'UPDATE_CONVERSATION_FORM_FAILURE',
      on = 'UPDATE_CONVERSATION_FORM_REQUEST',
      sn = 'UPDATE_CONVERSATION_FORM_SUCCESS',
      cn = 'UPDATE_NOTIFICATION_TYPE_OVERRIDES',
      an = 'UPDATE_PHONE_NUMBER_FAILURE',
      un = 'UPDATE_PHONE_NUMBER_REQUEST',
      dn = 'UPDATE_PHONE_NUMBER_SUCCESS',
      ln = 'UPDATE_PREVIEW_INBOUND_SUGGESTIONS',
      pn = 'UPDATE_SEARCH_BROWSE_QUERY',
      fn = 'UPDATE_SERVER_SIDE_INBOUND_SUGGESTIONS',
      bn = 'UPDATE_UPLOAD_PROGRESS',
      hn = 'UPDATE_USER_SUPPLIED_EMAIL_REQUEST',
      gn = 'UPDATE_USER_SUPPLIED_EMAIL_SUCCESS',
      mn = 'UPFRONT_EMAIL_COLLECTION_SUBMITTED',
      vn = 'USER_CONTENT_SEEN_BY_ADMIN',
      On = 'USER_IS_ABSENT',
      _n = 'USER_IS_INTERACTING',
      yn = 'USER_IS_PRESENT',
      Sn = 'USER_IS_TYPING',
      jn = 'VISITOR_AUTO_MESSAGE_CONDITION_SATISFIED_ERROR',
      wn = 'VISITOR_AUTO_MESSAGE_CONDITION_SATISFIED_SUCCESS';
  },
  ,
  function (e, t, n) {
    'use strict';
    var r = n(13),
      i = n.n(r),
      o = n(22);
    var s = n(59),
      c = n(3),
      a = n(105),
      u = n(60);
    function d(e, t) {
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
    function l(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? d(Object(n), !0).forEach(function (t) {
              p(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : d(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function p(e, t, n) {
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
    n.d(t, 'n', function () {
      return j;
    }),
      n.d(t, 'h', function () {
        return C;
      }),
      n.d(t, 'l', function () {
        return T;
      }),
      n.d(t, 'i', function () {
        return A;
      }),
      n.d(t, 'm', function () {
        return R;
      }),
      n.d(t, 'd', function () {
        return P;
      }),
      n.d(t, 'b', function () {
        return M;
      }),
      n.d(t, 'c', function () {
        return D;
      }),
      n.d(t, 'a', function () {
        return k;
      }),
      n.d(t, 'f', function () {
        return N;
      }),
      n.d(t, 'o', function () {
        return L;
      }),
      n.d(t, 'k', function () {
        return x;
      }),
      n.d(t, 'g', function () {
        return $;
      }),
      n.d(t, 'e', function () {
        return V;
      });
    let f,
      b,
      h = 0,
      g = null,
      m = null;
    const v = [],
      O = {},
      _ = [],
      y = [],
      S = [],
      j = (e) => (m = e);
    function w(e, t) {
      return e.splice(0, Math.min(e.length, t));
    }
    function E(e = !1) {
      if (h >= 5) return;
      const t = w(v, 100);
      if (_.length > 0 || t.length > 0) {
        const n = w(y, 100),
          r = w(S, 100),
          i = w(_, 100);
        e
          ? c.b.createMetricsWithBeacon(f, t, n, r, i)
          : c.b.createMetrics(f, t, n, r, i).catch(() => {
              var e, o, s, c;
              h++,
                (e = t),
                (o = n),
                (s = r),
                (c = i),
                Array.prototype.unshift.apply(v, e),
                Array.prototype.unshift.apply(y, o),
                Array.prototype.unshift.apply(S, s),
                Array.prototype.unshift.apply(_, c);
            });
      }
    }
    function I() {
      clearInterval(g), (g = null), E();
    }
    function C(e, t, n, r, i, o = {}, s = 'm4_metric') {
      if (Object(u.a)(e)) {
        R(A(e, t, n, r, i, o, s));
      }
    }
    function T() {
      return b;
    }
    function A(e, t, n, r, i, s = {}, c = 'm4_metric') {
      if (!Object(u.a)(e)) return {};
      const a = e && e.id ? e.id : null,
        d = l(l({}, s), {}, { version: '0bad3502405f8ca9b69bac9a8ba8bf112214f76d' });
      return {
        id: o.a.generateUUID(),
        name: c,
        created_at: Math.round(Date.now() / 1e3),
        metadata: Object.assign({ user_id: a, action: t, object: n, place: r, context: i }, d),
      };
    }
    function R(e) {
      i()(e) || v.push(e);
    }
    function P(e) {
      Object(a.c)() && y.push({ level: 'info', text: e });
    }
    function M(e) {
      Object(a.c)() && y.length < 30 && y.push({ level: 'error', text: e });
    }
    function D(e, t) {
      U({ name: e, type: 'inc' }, t);
    }
    function k(e, t, n) {
      U({ name: e, type: 'count', value: t }, n);
    }
    function N(e, t, n) {
      U({ name: e, type: 'timing', value: t }, n);
    }
    function U(e, t) {
      S.length > 50 || (t && (e.tags = t), S.push(e));
    }
    function L(e, t) {
      O[e] = { start: t };
    }
    function x(e) {
      O.hasOwnProperty(e) &&
        O[e].hasOwnProperty('start') &&
        ($(e, { duration: Date.now() - O[e].start }), delete O[e]);
    }
    function B(e, t = {}) {
      return {
        id: o.a.generateUUID(),
        name: e,
        createdAt: Date.now(),
        screenWidth: screen.width,
        screenHeight: screen.height,
        additionalMetaData: t,
        sessionId: f && f.sessionId,
      };
    }
    function $(e, t, n = !1) {
      const r = ((e = !1) => (e ? 1 : 20))(Object(s.a)() || Object(a.c)());
      if ((void 0 === b && (b = ((e = 20) => 1 === e || Math.random() < 1 / e)(r)), b || n)) {
        F(B(e, l({ sample_rate: n ? 1 : r }, t)));
      }
    }
    function F(e) {
      _.length < 30 && _.push(e);
    }
    function V(e, t, n, r, i, o) {
      C(m, e, t, n, r, i, o);
    }
    t.j = {
      metrics: v,
      hcMetrics: _,
      logs: y,
      opMetrics: S,
      pushMetric: R,
      startMetricsPolling: function (e, t) {
        return (
          (f = e),
          null === g && (g = setInterval(() => E(), 3e4)),
          t.addEventListener('beforeunload', () => E(!0)),
          I
        );
      },
      buildAndAddMetric: C,
      buildAndAddHcMetric: $,
      buildMetric: A,
      buildHcMetric: B,
      addHcMetric: F,
      addInfoLog: P,
      addErrorLog: M,
      addIncrementOpMetric: D,
      addCountOpMetric: k,
      addTimingOpMetric: N,
      clearMetricsState: function () {
        v.splice(0), y.splice(0), S.splice(0), _.splice(0), _.splice(0);
        for (const e in O) delete O[e];
        h = 0;
      },
      getShouldSample: T,
      startTimingMetric: L,
      endTimingMetric: x,
    };
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'c', function () {
      return S;
    }),
      n.d(t, 'd', function () {
        return C;
      }),
      n.d(t, 'a', function () {
        return D;
      }),
      n.d(t, 'e', function () {
        return je;
      });
    var r = n(98),
      i = n.n(r),
      o = n(71),
      s = n.n(o),
      c = n(13),
      a = n.n(c),
      u = n(217),
      d = n(4),
      l = n(170),
      p = n(29),
      f = n(125),
      b = n(8),
      h = n(163);
    function g(e, t) {
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
    function m(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? g(Object(n), !0).forEach(function (t) {
              v(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : g(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function v(e, t, n) {
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
    function O(e, t) {
      if (null == e) return {};
      var n,
        r,
        i = (function (e, t) {
          if (null == e) return {};
          var n,
            r,
            i = {},
            o = Object.keys(e);
          for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
          return i;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]),
            t.indexOf(n) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
      }
      return i;
    }
    const { assign: _ } = Object,
      y = Object(u.b)();
    function S(e) {
      const t = `${y.api_base}/messenger/web/article_collections`;
      return d.b.post({ url: t, session: e }).then((e) => e.map(N));
    }
    function j(e, t, n, r, i, o = null, s = !1, c = null, a = null, u = !1) {
      const d = { created_at: t, self_serve_suggestions_match: s };
      r && (d.client_assigned_uuid = r),
        i && (d.email = i),
        o && (d.composer_suggestions = JSON.stringify(o.suggestions)),
        c && (d.bot_intro = c),
        a && (d.resolution_bot_behavior_version_id = a),
        u && (d.search_browse = !0);
      const l = e[0];
      if ('paragraph' === l.type)
        (e = e.map((e) => ({ type: e.type, text: Object(f.b)(e.text) }))),
          (d.blocks = JSON.stringify(e));
      else if ('image' === l.type) n && (l.url = n.publicUrl), (d.blocks = JSON.stringify(e));
      else if ('attachmentList' === l.type && n) {
        const t = l.attachments[0];
        (t.id = n.id),
          (t.url = n.publicUrl),
          (t.contentType = n.contentType),
          (d.blocks = JSON.stringify(e));
      }
      return d;
    }
    function w(e, t, n, r) {
      return {
        metrics: JSON.stringify(e),
        logs: JSON.stringify(t),
        op_metrics: JSON.stringify(n),
        hc_metrics: JSON.stringify(r),
      };
    }
    function E(e) {
      return e ? { banner_view_id: e } : {};
    }
    function I(e) {
      return e ? { progress_id: e } : {};
    }
    function C(e, t, n) {
      const r = `${y.api_base}/messenger/web/self_serve_suggestions`,
        i = { query: t, answers_limit: n };
      return d.b.post({ url: r, session: e, params: i });
    }
    function T(e) {
      return { conversations: e.conversations.map(D), pages: R(e.pages) };
    }
    function A(e) {
      return {
        unreadConversationIds: (e.unread_conversation_ids || []).map((e) => e.toString()),
        unreadDismissedConversationIds: (e.unread_dismissed_conversation_ids || []).map((e) =>
          e.toString()
        ),
      };
    }
    function R(e) {
      return { page: e.page, perPage: e.per_page, totalPages: e.total_pages };
    }
    function P(e) {
      if (e.conversation_message.team_author) {
        return (
          0 ===
          (e.conversation_parts
            ? e.conversation_parts.conversation_parts || e.conversation_parts
            : []
          ).filter((e) => e.author.is_admin && !e.author.is_bot).length
        );
      }
      return !1;
    }
    function M(e) {
      return P(e) || !e.last_participating_admin ? void 0 : ne(e.last_participating_admin);
    }
    function D(e) {
      return {
        composerState: k(e.composer_state),
        dismissed: e.dismissed,
        id: e.id,
        intercomLinkSolution: e.intercom_link_solution,
        lastPartCreatedAt: Object(p.c)(e.updated_at),
        lastParticipatingAdmin: M(e),
        participants: e.participants || [],
        parts: [V(e), ...Y(e)],
        preventEndUserReplies: e.prevent_end_user_replies,
        inboundConversationsDisabled: e.inbound_conversations_disabled,
        read: e.read,
        readAt: e.read_at ? Object(p.c)(e.read_at) : void 0,
        replyPlaceholder: e.reply_area_placeholder,
        userParticipated: e.user_participated,
        notificationStatus: e.notification_status,
        currentChannel: e.current_channel,
        analyticsMetadata: {
          customBotId: e.analytics_metadata ? e.analytics_metadata.custom_bot_id : void 0,
        },
        isInbound: e.is_inbound,
        state: e.state,
      };
    }
    function k(e) {
      if (e)
        return {
          visible: e.visible,
          customBotActive: e.custom_bot_active,
          selfServeSuggestionsEnabled: e.self_serve_suggestions_enabled,
        };
    }
    function N(e) {
      return {
        id: e.id,
        name: e.name,
        description: e.description,
        sections: e.sections,
        articleCount: e.article_count,
      };
    }
    function U(e) {
      return {
        articles: e.articles.map((e) => {
          var t, n, r;
          const o = { id: e.id, url: e.url };
          var s, c;
          if (null !== (t = e.highlight) && void 0 !== t && t.title)
            o.title =
              null === (s = e.highlight) || void 0 === s
                ? void 0
                : null === (c = s.title) || void 0 === c
                ? void 0
                : c[0];
          else if (null !== (n = e.highlight) && void 0 !== n && n.summary) {
            var a;
            (o.title = e.title),
              (o.summary =
                i()(null === (a = e.highlight) || void 0 === a ? void 0 : a.summary) || e.summary);
          } else if (null !== (r = e.highlight) && void 0 !== r && r.body) {
            var u;
            (o.title = e.title),
              (o.summary =
                i()(null === (u = e.highlight) || void 0 === u ? void 0 : u.body) || e.summary);
          } else o.title = e.title;
          return o;
        }),
      };
    }
    function L(e = []) {
      return e.map(x);
    }
    function x(e) {
      return { id: e.id, name: e.name, articles: e.articles.map(B) };
    }
    function B(e) {
      return { id: e.id, title: e.title, url: e.url };
    }
    function $(e) {
      return {
        author:
          ((t = e.author),
          { avatar: { square128: t.avatar }, firstName: t.first_name || t.name, name: t.name }),
        blocks: e.blocks,
        contentId: e.content_id,
        description: e.description,
        id: e.id,
        reactionsReply: fe(e.reactions_reply),
        title: e.title,
        updatedAt: e.updated_at,
        url: e.url,
        alexandriaData: e.alexandria_data,
      };
      var t;
    }
    function F(e) {
      return P(e)
        ? {
            admins: (e.conversation_message.team_author.last_active_admins || []).map(ne),
            name: e.conversation_message.team_author.name,
          }
        : void 0;
    }
    function V(e) {
      const t = e.conversation_message;
      return {
        author: H(t.author),
        body: pe(t.blocks || [], t.attachments || []),
        clientId: t.client_assigned_uuid,
        createdAt: Object(p.c)(t.created_at),
        eventData: {},
        form: t.form,
        id: `message-${t.id}`,
        isMessage: !0,
        messageType: ue(t),
        notificationType:
          ((n = t.delivery_option), { badge: 'badge', full: 'full', summary: 'snippet' }[n]),
        partType: 'message',
        pointerSelector: t.pointer_selector,
        reactionsReply: t.reactions_reply ? fe(t.reactions_reply) : void 0,
        replyOptions: t.reply_options || [],
        replyType: t.reply_type,
        seenState: le(t.seen_by_admin),
        sentAt: Object(p.c)(t.sent_at),
        showCreatedAt: t.show_created_at,
        teamAuthor: F(e),
      };
      var n;
    }
    function H(e) {
      return {
        admins: e.authors ? e.authors.map(G) : [],
        avatar: se(e.avatar),
        firstName: q(e.first_name),
        id: e.id,
        initial: e.initial,
        isAdmin: e.is_admin,
        isBot: e.is_bot,
        isSelf: e.is_self,
        type: e.type.toLowerCase(),
      };
    }
    function G(e) {
      return { avatar: se(e.avatar), firstName: q(e.first_name) };
    }
    function q(e) {
      return e || '';
    }
    function z(e = []) {
      return e.map(W);
    }
    function W(e) {
      const t = e.from ? ne(e.from) : null;
      return m(m({}, e), {}, { from: t, reaction_set: (e.reaction_set || []).map(be) });
    }
    function J(e) {
      if (e)
        return {
          id: e.id,
          format: e.format,
          surveyProgressId: e.survey_progress_id,
          steps: [e.steps[0]],
          activeStepId: e.steps[0].id,
          dismissed: !1,
        };
    }
    function Y(e) {
      let t = [];
      return (
        e.conversation_parts &&
          (t = e.conversation_parts.conversation_parts || e.conversation_parts),
        t.filter((e) => 'lightweight_reply_user_response' !== e.part_type).map(Q)
      );
    }
    function Q(e) {
      return {
        author: {
          avatar: se(e.author.avatar),
          firstName: q(e.author.first_name),
          id: e.author.id,
          initial: e.author.initial,
          isAdmin: e.author.is_admin,
          isBot: e.author.is_bot,
          isSelf: e.author.is_self,
          type: e.author.is_admin ? 'admin' : 'user',
        },
        body: pe(e.blocks || [], e.attachments || []),
        clientId: e.client_assigned_uuid,
        conversationRating: he(e),
        createdAt: Object(p.c)(e.created_at),
        eventData: ae(e.event_data, e.part_type),
        form: e.form,
        id: e.id,
        isMessage: !1,
        messageType: ue(e),
        partType: e.part_type,
        replyOptions: e.reply_options || [],
        seenState: le(e.seen_by_admin),
        showCreatedAt: !0,
      };
    }
    function K(e) {
      return { slotType: e.slot_type, messengerCardId: e.messenger_card_id };
    }
    function X(e) {
      return e
        ? (Object(b.e)('Tour received', e),
          {
            id: e.id.toString(),
            activeStepId: e.active_step_id.toString(),
            author: e.author ? H(e.author) : null,
            steps: ((t = e.steps), s()(t, ['order'], ['asc'])).map((e) => {
              return {
                id: (t = e).id.toString(),
                blocks: t.blocks,
                order: t.order,
                progressionBehavior: ((n = t.progression_behavior), Z[n]),
                placement: t.placement,
                pointerSize: t.pointer_size,
                selector: t.selector,
                selectors: t.selectors,
                url: t.url,
                buttonText: t.button_text,
              };
              var t, n;
            }),
            title: e.title,
            url: e.url,
            restartable: e.restartable,
            snoozeable: e.snoozeable,
            endTourAnimation: e.end_tour_animation,
            progressStartUrl: e.start_url,
            progressId: e.progress_id,
            buttonColor: e.button_color,
          })
        : {};
      var t;
    }
    const Z = ['manual', 'click', 'type'];
    function ee(e) {
      const t = e.install_mode;
      if (t) {
        const e = t.active_subscription,
          n = t.user_hash_verified,
          r = t.secure_install_v2,
          i = t.messenger_enabled_for_visitors;
        return {
          activeSubscription: e,
          messengerEnabledForUsers: t.messenger_enabled_for_users,
          messengerEnabledForVisitors: i,
          secureInstallV2: r,
          userHashVerified: n,
        };
      }
    }
    function te(e) {
      const { app: t } = e,
        n = (function (e) {
          return {
            anonymousInboundMessages:
              e.inbound_lead_messaging || e.inbound_lead_messaging_docs_site,
            composerSuggestionsAsQuickReplies: e.composer_suggestions_as_quick_replies,
            googleAnalytics: e.google_analytics,
            hubspotInstalled: e.hubspot_installed,
            inboundMessages: e.inbound_messages,
            launcherDiscoveryMode: e.launcher_discovery_mode,
            marketoEnrichmentInstalled: e.marketo_enrichment_installed,
            outboundMessages: e.outbound_messages,
            singlePageAppRateLimiting: e.single_page_app_rate_limiting,
            crossSiteCookies: e.cross_site_cookies,
            renderNativePickerInMobile: e.render_native_picker_in_mobile,
          };
        })(e.modules.messages.features);
      return {
        activeAdmins: (t.active_admins || []).map(ne),
        alignment: e.modules.customization.alignment,
        backgroundImage: t.messenger_background,
        boundWebEvents: ((r = e.bound_web_events), r ? r.map(ge) : []),
        color: e.modules.messages.colors.base,
        customGoogleAnalyticsTrackerId: e.modules.messages.google_analytics_tracking_id,
        expectedResponseDelayTranslationKey: t.expected_response_delay_translation_key,
        launcherExpectedResponseDelayTranslationKey:
          t.launcher_expected_response_delay_translation_key,
        features: n,
        helpCenterSiteUrl: t.help_center_site_url || void 0,
        horizontalPadding: e.modules.customization.horizontal_padding,
        inboundConversationsDisabled: t.inbound_conversations_disabled || !1,
        accessToTeammateEnabled: t.access_to_teammate_enabled,
        isAudioEnabled: t.audio_enabled || !1,
        isDeveloperWorkspace: t.developer_workspace || !1,
        isErrorReportingDisabled: e.modules.error_reporting && e.modules.error_reporting.disabled,
        isInstantBootEnabled: !0 === e.modules.messages.instant_boot_enabled,
        isIntercomLinkEnabled: t.show_powered_by,
        temporaryExpectationsMessage: t.temporary_expectations_message,
        isLauncherEnabled: !0 === e.modules.messages.use_activator,
        isOverrideSamplingEnabled: e.modules.metrics && e.modules.metrics.enabled,
        logoUrl: t.messenger_logo_url,
        launcherLogoUrl: t.launcher_logo_url,
        name: t.name,
        officeHoursResponse: t.office_hours_response || void 0,
        originCookieDomain: e.origin_cookie_domain,
        realtimeConfig: { endpoints: e.modules.rtm.endpoints },
        secondaryColor: e.modules.messages.colors.secondary,
        selfServeSuggestionsMatch: t.self_serve_suggestions_match || !1,
        smsEnabled: t.sms_notifications_enabled || !1,
        teamGreeting: t.team_greeting,
        teamIntro: t.team_intro,
        upfrontEmailCollectionSetting: t.upfront_email_collection_setting,
        useCacheFor: t.use_cache_for,
        userConversationAttachmentsEnabled: t.user_conversation_attachments_enabled,
        userConversationGifsEnabled: t.user_conversation_gifs_enabled,
        verticalPadding: e.modules.customization.vertical_padding,
      };
      var r;
    }
    function ne(e) {
      return {
        avatar: se(e.avatar),
        calendarUrl: re(e.calendar_url),
        firstName: q(e.first_name),
        initial: e.initial || e.avatar.initials,
        intro: re(e.intro),
        isActive: e.is_active,
        isAdmin: !0,
        isBot: e.is_bot,
        isSelf: !1,
        jobTitle: re(e.job_title),
        lastActiveAt: Object(p.c)(e.last_active_at),
        location: e.location ? ie(e.location) : void 0,
        socialAccounts: (e.social_accounts || []).map(oe),
      };
    }
    function re(e) {
      if (e && 0 !== e.trim().length) return e;
    }
    function ie(e) {
      return {
        cityName: e.city_name,
        countryCode: e.country_code,
        countryName: e.country_name,
        timezoneOffset: e.timezone_offset,
      };
    }
    function oe(e) {
      return {
        imageUrl: e.image_url,
        profileUrl: e.profile_url,
        provider: e.provider,
        username: e.username,
      };
    }
    function se(e) {
      let t;
      return (
        e.square_128
          ? (t = e.square_128)
          : e.image_urls && e.image_urls.square_128 && (t = e.image_urls.square_128),
        t ? { square128: t } : {}
      );
    }
    function ce(e) {
      return e;
    }
    function ae(e, t) {
      return (
        ('participant_added' !== t && 'participant_removed' !== t) ||
          (e.participant.avatar = se(e.participant.avatar)),
        e || {}
      );
    }
    function ue(e) {
      const t = ['chat', 'post', 'note', 'video', 'pointer'][e.message_style];
      return (
        t ||
        ('attribute_collector' === e.part_type
          ? 'attributeCollector'
          : de(e, 'link') ||
            (function (e, t) {
              let n = !0;
              return (
                e.blocks.forEach((e) => {
                  e.type !== t && (n = !1);
                }),
                n && e.blocks.length > 1
              );
            })(e, 'link')
          ? 'link'
          : de(e, 'notificationChannelsCard')
          ? 'notificationChannels'
          : de(e, 'conversationRating')
          ? 'conversationRating'
          : void 0)
      );
    }
    function de(e, t) {
      const n = e.blocks && 1 === e.blocks.length && e.blocks[0];
      return n && n.type === t;
    }
    function le(e) {
      return { unseen: 'not-seen-yet', seen: 'seen' }[e] || 'not-seen-yet';
    }
    function pe(e, t) {
      if (
        (function (e) {
          return 1 === e.length && 'videoReply' === e[0].type;
        })(e)
      )
        return e;
      if (
        (function (e) {
          return 1 === e.length && 'videoFile' === e[0].type;
        })(e)
      )
        return (function (e) {
          return [Object.assign({}, e[0])];
        })(e);
      const n = [];
      return (
        (function (e, t) {
          if (0 === e.length) return t;
          const n = [];
          return (
            e.map((e) => {
              e.attachments.map((e) => n.push(e.url));
            }),
            t.filter((e) => n.indexOf(e.url) < 0)
          );
        })(
          e.filter((e) => 'attachmentList' === e.type),
          t
        ).forEach((e) => {
          !(function (e) {
            return e.content_type.indexOf('image') >= 0;
          })(e)
            ? n.push(
                (function (e) {
                  return {
                    type: 'attachmentList',
                    attachments: [
                      { contentType: e.content_type, name: e.name, size: e.size, url: e.url },
                    ],
                  };
                })(e)
              )
            : n.push(
                (function (e) {
                  return {
                    height: parseInt(e.height, 10),
                    type: 'image',
                    url: e.url,
                    width: parseInt(e.width, 10),
                  };
                })(e)
              );
        }),
        e.concat(n)
      );
    }
    function fe(e) {
      return { reactionIndex: e.reaction_index, reactionSet: (e.reaction_set || []).map(be) };
    }
    function be(e) {
      return { emoji: e.unicode_emoticon, index: e.index };
    }
    function he(e) {
      if ('conversationRating' !== ue(e)) return {};
      const { remark: t } = e.blocks[0];
      return { chosenRating: e.blocks[0].rating_index, remark: t };
    }
    function ge(e) {
      return {
        id: e.id,
        description: e.description,
        name: e.name,
        selector: e.selector,
        sourceUrl: e.source_url,
        trigger: e.trigger,
        urlRegex: e.url_regex,
      };
    }
    function me(e) {
      return {
        cards: e.cards,
        cardsSuccess: e.cards_success,
        conversations: e.conversations.map(D),
        hasMoreConversations: e.has_more_conversations,
        articleCollections: e.article_collections.map(N),
        openInboundConversationIds: e.open_inbound_conversation_ids,
      };
    }
    function ve(e) {
      return e
        ? e.map((e) =>
            m(
              m({}, e),
              {},
              { serialized_object: Oe(e.ruleset_link_object_type, e.serialized_object) }
            )
          )
        : [];
    }
    function Oe(e, t) {
      switch (e) {
        case 'inbound_trigger':
        case 'inbound_custom_bot':
          return _e(t);
        case 'messenger_trigger':
        case 'button_custom_bot':
          return {
            id: (n = t).id,
            event: n.event,
            preAction: n.messenger_pre_action,
            selector: n.selector,
          };
        default:
          return t;
      }
      var n;
    }
    function _e(e) {
      return e
        ? {
            composerDisabled: e.composer_disabled,
            prompt: e.prompt,
            rulesetId: e.ruleset_id,
            suggestions: e.suggestions.map((e) =>
              (function (e) {
                return { preAction: e.pre_action, text: e.text, uuid: e.uuid };
              })(e)
            ),
            updatedAt: e.updated_at,
            priority: e.priority,
          }
        : null;
    }
    function ye(e) {
      return e ? { id: e.id, parts: e.parts, operator: H(e.operator) } : null;
    }
    function Se(e) {
      const t = Object(h.b)(window);
      t && (e.sdk_webview_platform = t);
    }
    function je() {
      return `${y.api_base}/messenger/web/conversations/transcript`;
    }
    t.b = {
      addConversationRatingRemark: function (e, t, n) {
        const r = `${y.api_base}/messenger/web/conversations/${t}/remark`,
          i = { remark: n };
        return d.b.post({ url: r, session: e, params: i }).then(() => {});
      },
      buildBanner: W,
      buildComment: Q,
      buildComposerSuggestions: _e,
      buildBotIntro: ye,
      buildTour: X,
      changeConversationRatingIndex: function (e, t, n) {
        const r = `${y.api_base}/messenger/web/conversations/${t}/rate`,
          i = { rating_index: n };
        return d.b.post({ url: r, session: e, params: i }).then(() => {});
      },
      collectEmailFromBanner: function (e, t, n, r) {
        const i = `${y.api_base}/messenger/web/banners/${t}/collect_email`,
          o = Object.assign({ email: r }, E(n));
        return d.b.post({ url: i, session: e, params: o });
      },
      completeTour: function (e, t, n) {
        const r = `${y.api_base}/messenger/web/tours/${t}/complete`,
          i = I(n);
        return d.b.post({ url: r, session: e, params: i });
      },
      createArticleReaction: function (e, t, n, r = !1, i = null, o = 'help_center', s = null) {
        const c = `${y.api_base}/messenger/web/articles/${t}/react`,
          a = {
            reaction_index: n,
            allow_auto_responses: r,
            article_content_id: i,
            article_channel: o,
            article_source: s,
          };
        return d.b.post({ url: c, session: e, params: a }).then(() => {});
      },
      createComment: function (e, t, n, r, i, o, s) {
        const c = `${y.api_base}/messenger/web/conversations/${t}/reply`,
          a = j(r, i, o, n, s);
        return d.b
          .post({ url: c, session: e, params: a })
          .then((e) => Object.assign({}, Q(e), { clientId: n }));
      },
      createConversation: function (
        e,
        {
          blocks: t,
          createdAt: n,
          upload: r,
          email: i,
          composerSuggestions: o,
          selfServeSuggestionsMatch: s,
          resolutionBotBehaviorVersionId: c,
          botIntro: a,
          currentUrl: u,
          startedFromSearchBrowse: l = !1,
        }
      ) {
        const p = {
          url: `${y.api_base}/messenger/web/messages`,
          session: e,
          params: j(t, n, r, null, i, o, s, a, c, l),
        };
        return u && (p.currentUrl = u), d.b.post(p).then(D);
      },
      createEvent: function (e, t, n) {
        const r = `${y.api_base}/messenger/web/events`,
          i = { event_name: t, metadata: n },
          o = { event_list: JSON.stringify({ data: [i] }) };
        return d.b.post({ url: r, session: e, params: o }).then((e) => {
          if (!a()(e))
            return (function (e) {
              const { banner: t, custom_bot: n, client_matches: r, tour: i } = e[0];
              return {
                banner: t ? W(t) : t,
                customBot: n ? D(n) : n,
                clientsideRulesetConditions: ve(r || []),
                tour: i ? X(i) : i,
              };
            })(e);
        });
      },
      createMetrics: function (e, t, n = [], r = [], i = []) {
        const o = `${y.api_base}/messenger/web/metrics`,
          s = w(t, n, r, i);
        return d.b.post({ url: o, session: e, params: s, shouldSetUserData: !1 });
      },
      createMetricsWithBeacon: function (e, t, n = [], r = [], i = []) {
        const o = w(t, n, r, i);
        return d.b.sendBeacon({
          url: `${y.api_base}/messenger/web/metrics`,
          session: e,
          params: o,
          shouldSetUserData: !1,
        });
      },
      createOrUpdateUser: function (e, t = {}, n, r, i, o, s = !1) {
        (t = _({}, t)), void 0 !== n && (t.anonymous_email = n);
        const c = { source: i, sampling: s };
        void 0 !== r && (c._intercomEncryptedPayload = r);
        const a = `${y.api_base}/messenger/web/ping`;
        return d.b
          .post({ url: a, session: e, params: c, customAttributes: t, internal: o })
          .then((e) => {
            const { errors: t } = e;
            return t
              ? { errors: t }
              : (function (e) {
                  var t;
                  const { user: n } = e;
                  e.active_tour &&
                    Object(b.e)('Tour attempting to resume from ping', e.active_tour);
                  return {
                    id: n.id,
                    activeCompanyId: n.active_company_id || '-1',
                    activeTour: X(e.active_tour),
                    anonymousId: n.anonymous_id,
                    anonymousSession: e.anonymous_session,
                    app: te(e),
                    articleConversationId: JSON.stringify(e.article_conversation_id),
                    banners: z(e.banners),
                    cdasBreachingLimit: e.cdas_breaching_limit || [],
                    clientsideMessageConditions: e.client_messages,
                    clientsideRulesetConditions: ve(e.client_matches),
                    botIntro: ye(e.bot_intro),
                    requiresCookieConsent: n.requires_cookie_consent,
                    resolutionBotBehaviorVersionId: e.resolution_bot_behavior_version_id,
                    countryCode: n.country_code,
                    hasConversations: !1 !== n.has_conversations,
                    homeScreenSlots:
                      (null === (t = n.home_screen_slots) || void 0 === t ? void 0 : t.map(K)) ||
                      [],
                    identityVerificationReady: e.identity_verification_ready,
                    identityVerified: e.identity_verified,
                    installModeConfig: ee(e),
                    lastContactedAt: n.last_contacted_at,
                    locale: n.locale,
                    newConversationComposerState: k(e.composer_state),
                    notificationLinkConversationId: e.notification_link_conversation_id,
                    phoneNumber: n.phone_number,
                    role:
                      ((r = n.role),
                      { contact_role: 'lead', user_role: 'user', visitor_role: 'visitor' }[r]),
                    unreadConversationIds: (e.unread_conversation_ids || []).map((e) =>
                      e.toString()
                    ),
                    unreadDismissedConversationIds: (e.unread_dismissed_conversation_ids || []).map(
                      (e) => e.toString()
                    ),
                    userSuppliedEmail: n.anonymous_email,
                    newSession: n.new_session,
                    searchRequiredBeforeConversation: n.help_center_require_search,
                    survey: J(e.survey),
                    preventMultipleInboundConversation: n.prevent_multiple_inbound_conversation,
                  };
                  var r;
                })(e);
          });
      },
      sendMessengerOpen: function (e, t) {
        const n = {};
        t && (n.initial_view = t);
        const r = `${y.api_base}/messenger/web/open`;
        return d.b.post({ url: r, session: e, params: n }).then((e) => {
          const { errors: t } = e;
          return t
            ? { errors: t }
            : {
                composerSuggestions: _e(e.composer_suggestions),
                clientsideRulesetConditions: ve(e.client_matches),
              };
        });
      },
      createReaction: function (e, t, n) {
        const r = `${y.api_base}/messenger/web/conversations/${t}/react`,
          i = { reaction_index: n };
        return d.b.post({ url: r, session: e, params: i }).then(() => {});
      },
      createUpload: function (e, t, n) {
        return new Promise((r, i) => {
          const o = new FormData();
          o.append('key', e.key),
            o.append('acl', e.acl),
            o.append('Content-Type', e.content_type),
            o.append('AWSAccessKeyId', e.aws_access_key),
            o.append('policy', e.policy),
            o.append('signature', e.signature),
            o.append('success_action_status', e.success_action_status),
            o.append('file', t);
          const s = new XMLHttpRequest();
          s.upload.addEventListener(
            'progress',
            function (e) {
              const { lengthComputable: t, loaded: r, total: i } = e;
              if (!n || !t) return;
              const o = parseInt((r / i) * 100);
              n(o);
            },
            !1
          ),
            s.addEventListener(
              'error',
              function () {
                i();
              },
              !1
            ),
            s.addEventListener(
              'abort',
              function () {
                i();
              },
              !1
            ),
            s.addEventListener(
              'load',
              function (t) {
                201 === t.target.status
                  ? r({ id: e.id, publicUrl: e.public_url, contentType: e.content_type })
                  : i();
              },
              !1
            ),
            s.open('POST', e.upload_destination, !0),
            s.send(o);
        });
      },
      createUploadPolicy: function (e, t, n, r) {
        const i = `${y.api_base}/messenger/web/uploads`,
          o = {
            upload: JSON.stringify({
              original_filename: Object(l.a)(t.name),
              size_in_bytes: t.size,
              content_type: t.type,
              width: n,
              height: r,
            }),
          };
        return d.b.post({ url: i, session: e, params: o }).then(ce);
      },
      disableInstallMode: function (e) {
        const t = `${y.api_base}/messenger/web/install`;
        return d.b.post({ url: t, session: e });
      },
      dismissBanner: function (e, t, n) {
        const r = `${y.api_base}/messenger/web/banners/${t}/dismiss`,
          i = E(n);
        return d.b.post({ url: r, session: e, params: i });
      },
      dismissNotifications: function (e, t) {
        const n = `${y.api_base}/messenger/web/conversations/dismiss`,
          r = { conversation_ids: t };
        return d.b.post({ url: n, session: e, params: r }).then(() => {});
      },
      fetchBannerView: function (e, t) {
        const n = `${y.api_base}/messenger/web/banners/${t}/fetch`;
        return d.b.post({ url: n, session: e }).then((e) => W(e.banner));
      },
      fetchMessengerSheetData: function (e, t, n, r) {
        const i = `${y.api_base}/messenger/web/sheets/open`,
          o = { action_id: n, uri: t, values: JSON.stringify(r) };
        return d.b.post({ url: i, session: e, params: o });
      },
      fetchMessengerSheetDataWithToken: function (e, t, n) {
        const r = `${y.api_base}/messenger/web/messenger_card_view/open_sheet`,
          i = { action_id: t, token: e, values: JSON.stringify(n) };
        return d.b.post({ url: r, params: i });
      },
      fetchTour: function ({ session: e, tourId: t, token: n } = {}) {
        if (!e && !n)
          return (
            Object(b.e)('A session or a token must be supplied when fetching a tour'),
            Promise.reject('missing_session_and_token')
          );
        if (e)
          return (
            Object(b.e)('Attempting to fetch tour with session data.'),
            d.b.post({ url: `${y.api_base}/messenger/web/tours/${t}/fetch`, session: e }).then(X)
          );
        {
          Object(b.e)('Attempting to fetch tour for messenger card in fallback state.');
          const e = { token: n };
          return d.b
            .post({ url: `${y.api_base}/messenger/web/tours/${t}/fetch_with_token`, params: e })
            .then(X);
        }
      },
      fireComposerSuggestion: function (
        e,
        {
          conversationId: t,
          suggestion: n,
          clientId: r,
          botIntro: i,
          resolutionBotBehaviorVersionId: o,
          articleUrl: s = null,
        }
      ) {
        const c = t
            ? `${y.api_base}/messenger/web/conversations/${t}/reply`
            : `${y.api_base}/messenger/web/messages`,
          a = { composer_suggestion: JSON.stringify(n), client_assigned_uuid: r };
        return (
          t && (a.conversation_id = t),
          i && (a.bot_intro = i),
          o && (a.resolution_bot_behavior_version_id = o),
          s && (a.search_browse = !0),
          d.b.post({ url: c, session: e, params: a, currentUrl: s }).then(t ? Q : D)
        );
      },
      fireTrigger: function (e, { triggerId: t, clientAssignedUUID: n }) {
        const r = `${y.api_base}/messenger/web/triggers/${t}/fire`,
          i = { client_assigned_uuid: n };
        return d.b.post({ url: r, session: e, params: i });
      },
      getArticle: function (e, t, n, r = !1) {
        const i = `${y.api_base}/messenger/web/articles/${t}`,
          o = (function (e, t) {
            return { conversation_id: e, browse_mode: t };
          })(n, r);
        return d.b.post({ url: i, session: e, params: o }).then($);
      },
      getArticleByURL: function (e, t) {
        const n = `${y.api_base}/messenger/web/articles/url`,
          r = { url: t };
        return d.b.post({ url: n, session: e, params: r }).then($);
      },
      getArticleReaction: function (e, t, n, r) {
        const i = `${y.api_base}/messenger/web/articles/get_reaction`,
          o = { article_id: t, article_content_id: n };
        d.b
          .post({ url: i, session: e, params: o })
          .then((e) => {
            e ? r(null, e) : r();
          })
          .catch((e) => {
            r(e);
          });
      },
      getArticleSectionsInCollection: function (e, t) {
        const n = `${y.api_base}/messenger/web/article_collections/${t}/articles`;
        return d.b.post({ url: n, session: e }).then(L);
      },
      getCardView: function (e) {
        const t = `${y.api_base}/messenger/web/messenger_card_view/`,
          n = { token: e };
        return d.b.post({ url: t, params: n });
      },
      getConversation: function (e, t, n) {
        const r = `${y.api_base}/messenger/web/conversations/${t}`,
          i = { self_serve_suggestions_match: n };
        return d.b.post({ url: r, session: e, params: i }).then(D);
      },
      getConversationTranscriptURL: je,
      getConversations: function (
        e,
        { source: t, page: n, perPage: r, selfServeSuggestionsMatch: i }
      ) {
        const o = `${y.api_base}/messenger/web/conversations`,
          s = { page: n, per_page: r, source: t, self_serve_suggestions_match: i };
        return d.b.post({ url: o, session: e, params: s }).then(T);
      },
      getHomeScreenCards: function (e, { homeScreenSlots: t, selfServeSuggestionsMatch: n }) {
        const r = `${y.api_base}/messenger/web/home_cards`,
          i = { slot_card_ids: t.map((e) => e.messengerCardId), self_serve_suggestions_match: n };
        return d.b.post({ url: r, session: e, params: i }).then(me);
      },
      getMessengerCanvasContentWithToken: function (e, t) {
        const n = `${y.api_base}/messenger/web/messenger_card_view/live_content`,
          r = { token: e, canvas_id: t };
        return d.b.post({ url: n, params: r }).then((e) => Object.assign(e, { id: t }));
      },
      getMessengerCanvasWithContent: function (e, t, n) {
        const r = `${y.api_base}/messenger/web/messenger_cards/content`,
          i = { canvas_id: t, uri: n };
        return (
          Se(i),
          d.b.post({ url: r, session: e, params: i }).then((e) => Object.assign(e, { id: t }))
        );
      },
      getUnreadConversations: function (e) {
        const t = `${y.api_base}/messenger/web/conversations/unread`;
        return d.b.post({ url: t, session: e }).then(A);
      },
      markConversationAsRead: function (e, t) {
        const n = `${y.api_base}/messenger/web/conversations/${t}/read`;
        return d.b.post({ url: n, session: e }).then(D);
      },
      outboundPreview: function (e, t) {
        const n = `${y.api_base}/messenger/web/custom_bots/${t}/outbound_preview`;
        return d.b.post({ url: n, session: e });
      },
      progressTour: function (e, t, n, r) {
        const i = Object.assign({ step_id: n }, I(r));
        return d.b.sendBeacon({
          url: `${y.api_base}/messenger/web/tours/${t}/progress`,
          session: e,
          params: i,
        });
      },
      quickReply: function (e, t, n, r, i) {
        const o = `${y.api_base}/messenger/web/conversations/${t}/quick_reply`,
          s = (function (e, t, n) {
            return {
              client_assigned_uuid: n,
              conversation_part: JSON.stringify({ id: e, reply_option: t }),
            };
          })(n, r, i);
        return d.b.post({ url: o, session: e, params: s }).then(Q);
      },
      reactToBanner: function (e, t, n, r) {
        const i = `${y.api_base}/messenger/web/banners/${t}/react`,
          o = Object.assign({ reaction: r }, E(n));
        return d.b.post({ url: i, session: e, params: o });
      },
      recordInteractions: function (e, t, n) {
        const r = `${y.api_base}/messenger/web/conversations/${t}/record_interactions`,
          i = { interactions: n };
        return d.b.post({ url: r, session: e, params: i }).then(() => {});
      },
      recordTourFailure: function (e, t, n, r, i, o) {
        const s = `${y.api_base}/messenger/web/tours/${t}/record_failure`,
          c = { failed_selector: r, failure_url: i, tour_step_id: n },
          a = Object.assign(c, I(o));
        return d.b.post({ url: s, session: e, params: a });
      },
      rulesetConditionSatisfied: function (e, t, n, r, i, o, s, c, a) {
        const u = `${y.api_base}/messenger/web/rulesets/${t}/match`,
          l = { user_id: r, company_id: i, ruleset_link_id: n, predicates: JSON.stringify(o) };
        return (
          s && (l.checkpoint_id = s),
          c && (l.notification_record_id = c),
          a && (l.extra_context = JSON.stringify(a)),
          d.b.post({ url: u, session: e, params: l }).then((e) => {
            let { custom_bot: t, composer_suggestions: n, predictive_answers_suggestions: r } = e;
            return m(
              m({}, O(e, ['custom_bot', 'composer_suggestions', 'predictive_answers_suggestions'])),
              {},
              { customBot: t, composerSuggestions: _e(n), answerbotPredictiveContexts: r }
            );
          })
        );
      },
      searchGifs: function (e, t) {
        const n = `${y.api_base}/messenger/web/gifs`,
          r = { query: t };
        return d.b.post({ url: n, session: e, params: r });
      },
      sendBeaconEvent: function (e, t, n) {
        const r = { event_name: t, metadata: n };
        return d.b.sendBeacon({
          url: `${y.api_base}/messenger/web/events`,
          session: e,
          params: { event_list: JSON.stringify({ data: [r] }) },
        });
      },
      snoozeContentObjectInstance: function (e, t, n, r) {
        const i = `${y.api_base}/messenger/web/snooze`,
          o = { object_type: t, object_id: n, instance_id: r };
        return d.b.post({ url: i, session: e, params: o });
      },
      startConversationFromSuggestion: function (
        e,
        {
          suggestionUuid: t,
          clientAssignedUUID: n,
          selfServeSuggestionsMatch: r,
          articleUrl: i = null,
        }
      ) {
        const o = `${y.api_base}/messenger/web/custom_bots/trigger_inbound_conversation`,
          s = { id: t, client_assigned_uuid: n, self_serve_suggestions_match: r };
        return (
          i && (s.search_browse = !0),
          d.b.post({ url: o, session: e, params: s, currentUrl: i }).then(D)
        );
      },
      stopTour: function (e, t, n) {
        const r = `${y.api_base}/messenger/web/tours/${t}/stop`,
          i = I(n);
        return d.b.post({ url: r, session: e, params: i });
      },
      submitSurvey: function (e, t, n, r, i) {
        const o = `${y.api_base}/messenger/web/surveys/${t}/submit`,
          s = { survey_progress_id: n, current_step_id: r, responses: JSON.stringify(i) };
        return d.b.post({ url: o, session: e, params: s });
      },
      dismissSurvey: function (e, t, n) {
        const r = `${y.api_base}/messenger/web/surveys/${t}/dismiss`,
          i = { survey_progress_id: n };
        return d.b.post({ url: r, session: e, params: i });
      },
      resetTour: function (e, t) {
        const n = `${y.api_base}/messenger/web/tours/${t}/reset`;
        return d.b.post({ url: n, session: e });
      },
      searchArticles: function (e, t) {
        const n = `${y.api_base}/messenger/web/articles/search`,
          r = { phrase: t };
        return d.b.post({ url: n, session: e, params: r }).then(U);
      },
      submitMessengerCardAction: function (e, t, n, r) {
        const i = `${y.api_base}/messenger/web/messenger_cards`,
          o = { action_id: n, uri: t, values: JSON.stringify(r) };
        return Se(o), d.b.post({ url: i, session: e, params: o });
      },
      submitMessengerCardActionWithToken: function (e, t, n) {
        const r = `${y.api_base}/messenger/web/messenger_card_view/submit`,
          i = { action_id: t, token: e, values: JSON.stringify(n) };
        return d.b.post({ url: r, params: i });
      },
      submitSheet: function (e, t, n) {
        const r = `${y.api_base}/messenger/web/sheets/submit`,
          i = { uri: t, sheet_values: JSON.stringify(n) };
        return d.b.post({ url: r, session: e, params: i });
      },
      submitSheetWithToken: function (e, t) {
        const n = `${y.api_base}/messenger/web/messenger_card_view/submit_sheet`,
          r = { token: e, sheet_values: JSON.stringify(t) };
        return d.b.post({ url: n, params: r });
      },
      triggerTransitions: function (e, t, n) {
        const r = `${y.api_base}/messenger/web/operator/trigger`,
          i = (function (
            e,
            { type: t, payload: { composerHasContent: n, executionTime: r } = {} }
          ) {
            return {
              type: t,
              payload: JSON.stringify({ composer_has_content: n, execution_time: r }),
              meta: JSON.stringify({ conversation_id: e }),
            };
          })(t, n);
        return d.b.post({ url: r, session: e, params: i }).then(D);
      },
      updateConversationForm: function (e, t, n, r, i, o) {
        const s = o
            ? { identifier: r, value: i, conversation_part_id: n, upfront_email_collection: o }
            : { identifier: r, value: i, conversation_part_id: n },
          c = `${y.api_base}/messenger/web/conversations/${t}/form`,
          a = { form_params: JSON.stringify(s) };
        return d.b.post({ url: c, session: e, params: a }).then(D);
      },
      updatePhoneNumber: function (e, t) {
        const n = `${y.api_base}/apps/${e.appId}/notification_channels/phone_number`,
          r = { phone_number: t };
        return d.b.post({ url: n, session: e, params: r });
      },
      visitorAutoMessageConditionSatisfied: function (e, t) {
        const n = `${y.api_base}/messenger/web/messages/${t.id}/match`,
          r = { predicates: JSON.stringify(t.predicates) };
        return d.b.post({ url: n, session: e, params: r }).then((e) => {
          if (!a()(e)) return D(e);
        });
      },
      generateArticleCard: function (e, t) {
        const n = `${y.api_base}/messenger/web/articles/${t}/card`;
        return d.b.post({ url: n, session: e });
      },
    };
  },
  function (e, t, n) {
    'use strict';
    var r = n(9);
    var i = function (e, t, n, r, i, o) {
      const s = new XMLHttpRequest();
      (s.onerror = () => o()),
        (s.onabort = () => o()),
        (s.onload = () => {
          const { readyState: e, status: t, response: n } = s;
          4 === e && (t >= 200 && t < 300 ? i(n) : o(n));
        }),
        s.open(t, e, !0),
        (s.withCredentials = !0),
        Object.keys(n).forEach((e) => {
          s.setRequestHeader(e, n[e]);
        }),
        s.send(r);
    };
    const o = r.a.hasXhr2Support();
    var s = (e, t, n) =>
      new Promise((r, s) => {
        if (!o) throw new Error('Browser does not support XMLHttpRequest.');
        i(e, 'POST', t, n, r, s);
      });
    function c(e) {
      return Math.floor(4294967296 * (1 + e()))
        .toString(16)
        .substring(1);
    }
    var a = n(94),
      u = n(17);
    n.d(t, 'a', function () {
      return d;
    });
    function d(e, t, n, i, o, s, d, l = !0) {
      var p;
      (i = i || (null === (p = Object(u.d)()) || void 0 === p ? void 0 : p.href)),
        (s = s || Object(u.e)()),
        (i = Object(a.b)(i)),
        (s = Object(a.b)(s)),
        r.a.isNativeMobile() && (i = void 0),
        (o =
          o ||
          (function (e = Math.random) {
            return c(e) + c(e);
          })());
      const {
          appId: f,
          anonymousSession: b,
          sessionId: h,
          hostUserAgent: g,
          activeCompanyId: m,
        } = e,
        v = {
          'app_id': f,
          'v': 3,
          'g': '0bad3502405f8ca9b69bac9a8ba8bf112214f76d',
          's': h,
          'r': s,
          'platform': r.a.isMobileBrowser() ? 'mobile_web' : 'web',
          'Idempotency-Key': o,
          'internal': d ? JSON.stringify(d) : '',
          'page_title': Object(u.b)(),
          'user_active_company_id': m,
        };
      l &&
        (v.user_data = (function (e, t) {
          const { userId: n, email: r, userHash: i, anonymousId: o } = e,
            s = Object.assign({ email: r, user_id: n, user_hash: i, anonymous_id: o }, t);
          return JSON.stringify(s);
        })(e, n));
      const O = Object.assign(v, t);
      return (
        void 0 !== i && (O.referer = i),
        void 0 !== b && (O.anonymous_session = b),
        void 0 !== g && (O.host_user_agent = g),
        O
      );
    }
    function l(e) {
      const t = [];
      return (
        Object.keys(e).forEach((n) => {
          const r = e[n];
          (n = encodeURIComponent(n)),
            Array.isArray(r)
              ? r.forEach((e) => t.push(`${n}[]=${encodeURIComponent(e)}`))
              : t.push(`${n}=${encodeURIComponent(r)}`);
        }),
        t.join('&')
      );
    }
    function p(e) {
      try {
        return JSON.parse(e);
      } catch (t) {
        return e;
      }
    }
    t.b = {
      buildBody: d,
      post: function ({
        url: e,
        session: t = {},
        params: n = {},
        customAttributes: r = null,
        currentUrl: i = null,
        idempotencyKey: o = null,
        referrer: c = null,
        internal: a = null,
        shouldSetUserData: u = !0,
      }) {
        if (!t) return Promise.reject('http_post_session_empty');
        const f = d(t, n, r, i, o, c, a, u);
        return s(e, { 'Content-Type': 'application/x-www-form-urlencoded' }, l(f)).then(p);
      },
      sendBeacon: function ({
        url: e,
        session: t = {},
        params: n = {},
        customAttributes: r = null,
        currentUrl: i = null,
        idempotencyKey: o = null,
        referrer: c = null,
        internal: a = null,
        shouldSetUserData: u = !0,
      }) {
        var f, b, h;
        if (!t) return Promise.reject('http_post_session_empty');
        const g = d(t, n, r, i, o, c, a, u);
        if (
          null !== (f = window) &&
          void 0 !== f &&
          null !== (b = f.parent) &&
          void 0 !== b &&
          null !== (h = b.navigator) &&
          void 0 !== h &&
          h.sendBeacon
        ) {
          const t = { type: 'application/x-www-form-urlencoded' };
          return window.parent.navigator.sendBeacon(e, new Blob([l(g)], t))
            ? Promise.resolve()
            : Promise.reject();
        }
        return s(e, { 'Content-Type': 'application/x-www-form-urlencoded' }, l(g)).then(p);
      },
    };
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return r;
    });
    const r = () => window.INTERCOM_PRIVILEGE_SEPARATION;
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'l', function () {
      return O;
    }),
      n.d(t, 'o', function () {
        return _;
      }),
      n.d(t, 'm', function () {
        return y;
      }),
      n.d(t, 'c', function () {
        return S;
      }),
      n.d(t, 't', function () {
        return j;
      }),
      n.d(t, 'k', function () {
        return w;
      }),
      n.d(t, 'j', function () {
        return E;
      }),
      n.d(t, 'h', function () {
        return I;
      }),
      n.d(t, 'i', function () {
        return C;
      }),
      n.d(t, 'g', function () {
        return T;
      }),
      n.d(t, 'e', function () {
        return A;
      }),
      n.d(t, 'f', function () {
        return R;
      }),
      n.d(t, 'd', function () {
        return P;
      }),
      n.d(t, 'q', function () {
        return M;
      }),
      n.d(t, 'a', function () {
        return N;
      }),
      n.d(t, 'u', function () {
        return U;
      }),
      n.d(t, 'b', function () {
        return L;
      }),
      n.d(t, 's', function () {
        return x;
      }),
      n.d(t, 'n', function () {
        return B;
      }),
      n.d(t, 'r', function () {
        return F;
      }),
      n.d(t, 'p', function () {
        return V;
      });
    var r = n(9),
      i = n(31),
      o = n(7),
      s = n(21),
      c = n(3),
      a = n(4),
      u = n(222),
      d = n(2),
      l = n(19),
      p = n(29),
      f = n(59),
      b = n(171),
      h = n(11),
      g = n(225),
      m = n(47),
      v = n(0);
    function O(e, t, n = !1, r = null) {
      return (i, s) => {
        i(
          (function (e, t = !1) {
            return { type: v.xb, conversationId: e, isUpdating: t };
          })(t, n)
        );
        const { session: c, operator: a, app: u } = s();
        return e
          .getConversation(c, t, u.selfServeSuggestionsMatch)
          .then((t) => {
            if (
              (i(
                (function (e) {
                  return (t, n) => {
                    const r = n(),
                      { newConversation: i } = r,
                      s = Object(h.f)(r);
                    try {
                      Object(o.e)(e).clientId === Object(o.e)(i).clientId &&
                        'conversation' !== s &&
                        (t(C(e, null, null, Date.now(), 'custom_bot')), t(Object(m.a)(e.id, !0)));
                    } catch (e) {}
                  };
                })(t)
              ),
              i(_(e, t, !1, Date.now())),
              a)
            ) {
              const {
                lastComposerEvent: e,
                userCreatedConversationAt: n,
                lastTriggerTransitionTimestamp: r,
              } = a;
              Object(l.j)(t, r), Object(l.i)(t, n, e);
            }
            r && Object(f.a)() && Object(d.g)('newCommentEvent', { duration_ms: Object(p.a)(r) });
          })
          .catch((e) =>
            i(
              (function (e, t) {
                return { type: v.wb, conversationId: e, error: t };
              })(t, e)
            )
          );
      };
    }
    function _(e, t, n, r) {
      return (s) => {
        Object(o.s)(t).forEach((t) => s(Object(i.a)(e, t, !1))),
          s(
            (function (e, t = !1, n) {
              return { type: v.yb, conversation: e, skipNotification: t, createdAt: n };
            })(t, n, r)
          );
      };
    }
    function y(e, t) {
      return (n, r) => {
        n(
          (function (e) {
            return { type: v.Jb, conversationId: e };
          })(t)
        );
        const { session: i } = r();
        return e
          .markConversationAsRead(i, t)
          .then(() =>
            n(
              (function (e) {
                return { type: v.Kb, conversationId: e };
              })(t)
            )
          )
          .catch((e) =>
            n(
              (function (e, t) {
                return { type: v.Ib, conversationId: e, error: t };
              })(t, e)
            )
          );
      };
    }
    function S(e) {
      return { type: v.A, conversationId: e };
    }
    function j(e) {
      return { type: v.ud, conversationId: e };
    }
    function w(e, t, n, r) {
      return (i, o) => {
        i(
          (function (e, t, n) {
            return { type: v.Q, conversationId: e, reactionIndex: t, isFromConversation: !!n };
          })(t, n, r)
        );
        const { session: s } = o();
        return e
          .createReaction(s, t, n)
          .then(() =>
            i(
              (function (e, t) {
                return { type: v.R, conversationId: e, reactionIndex: t };
              })(t, n)
            )
          )
          .catch((e) =>
            i(
              (function (e, t, n) {
                return { type: v.P, conversationId: e, reactionIndex: t, error: n };
              })(t, n, e)
            )
          );
      };
    }
    function E(e, t, n, r = !1, i = !1, o = null, s = null, c = !1, a) {
      return void 0 === t
        ? (function (e, t, n = !1, r, i, o) {
            return (s, c) => {
              const a = c(),
                { session: u, app: d, user: l, newConversation: p } = a,
                { body: f, createdAt: b } = t,
                h = p ? p.botIntroId : null;
              s(I(t, n, o, Date.now())), o && s($());
              let m = null;
              return (
                o || h || (m = Object(g.a)(a)),
                D(e, u, t, (e) => s(k(t, e)))
                  .then((t) => {
                    const n = {
                      blocks: f,
                      createdAt: b,
                      upload: t,
                      email: o,
                      composerSuggestions: m,
                      selfServeSuggestionsMatch: d.selfServeSuggestionsMatch,
                      botIntro: h,
                      resolutionBotBehaviorVersionId: l ? l.resolutionBotBehaviorVersionId : null,
                    };
                    return (
                      p &&
                        p.articleUrl &&
                        ((n.currentUrl = p.articleUrl), (n.startedFromSearchBrowse = !0)),
                      e.createConversation(u, n)
                    );
                  })
                  .then((e) => {
                    s(C(e, r, i, Date.now()));
                  })
                  .catch((e) => s(T(e)))
              );
            };
          })(e, n, r, s, c, a)
        : (function (e, t, n, r = !1, i = !1, o, s, c, a) {
            return (u, d) => {
              const { session: l } = d(),
                { body: p, createdAt: f, clientId: b } = n;
              return (
                u(A(t, n, r, a)),
                a && u($()),
                D(e, l, n, (e) => u(k(n, e, t)))
                  .then((n) => e.createComment(l, t, b, p, f, n, a))
                  .then((e) => {
                    u(R(t, e, i, o, s, c, Date.now()));
                  })
                  .catch((e) => u(P(t, n, e)))
              );
            };
          })(e, t, n, r, i, o, s, c, a);
    }
    function I(e, t, n, r = Date.now()) {
      return { type: v.H, part: e, isRetry: t, timestamp: r, email: n };
    }
    function C(e, t, n, r, i) {
      return {
        type: v.I,
        conversation: e,
        officeHoursResponse: t,
        isAnnotatedImage: n,
        createdAt: r,
        conversationTriggerType: i,
      };
    }
    function T(e) {
      return { type: v.G, reason: e };
    }
    function A(e, t, n, r) {
      return { type: v.E, conversationId: e, part: t, isRetry: n, email: r };
    }
    function R(e, t, n, r, i, o, s, c = !1) {
      return {
        type: v.F,
        conversationId: e,
        part: t,
        isBorderless: n,
        lastParticipatingAdmin: r,
        officeHoursResponse: i,
        isAnnotatedImage: o,
        createdAt: s,
        fromMessengerSuggestedContent: c,
      };
    }
    function P(e, t, n) {
      return { type: v.D, conversationId: e, part: t, reason: n };
    }
    function M(e, t, n) {
      const { id: r } = t;
      return (i) => {
        if (n.selectedReplyOption || n.composerSuggestionItem) {
          let r, o;
          return (
            n.selectedReplyOption
              ? ((r = n.selectedReplyOption.replyOption),
                (o = n.selectedReplyOption.quickReplyPart))
              : (r = n.composerSuggestionItem),
            i(Object(b.a)(e, t, r, !0, o))
          );
        }
        return i(E(e, r, n, !0));
      };
    }
    function D(e, t, n, r) {
      const { file: i, body: o } = n,
        { width: s, height: c } = o[0];
      return i
        ? i.size > 41943040
          ? Promise.reject('file_size')
          : e.createUploadPolicy(t, i, s, c).then((t) => e.createUpload(t, i, r))
        : Promise.resolve();
    }
    function k(e, t, n) {
      return { type: v.qd, conversationId: n, part: e, progress: t };
    }
    function N(e, t, n, r, i = new Date()) {
      return {
        type: v.f,
        conversationId: e,
        adminId: t,
        firstName: n,
        avatarUrl: r,
        lastActiveAt: i,
      };
    }
    function U(e) {
      return { type: v.yd, conversationId: e };
    }
    function L(e, t, n = new Date()) {
      return { type: v.y, conversationId: e, composerContent: t, lastActiveAt: n };
    }
    function x(e, t, n, r, i, o, s, c, a) {
      return (d, l) => {
        const { session: p, user: f } = l();
        return (
          d(
            (function (e, t, n, r, i, o, s) {
              return {
                type: v.hd,
                conversationId: e,
                partId: t,
                identifier: n,
                value: r,
                identifierType: i,
                formType: o,
                isCustomData: s,
              };
            })(t, n, r, i, o, s, c)
          ),
          e
            .updateConversationForm(p, t, n, r, i, a)
            .then((e) => {
              d(
                (function (e, t, n, r) {
                  return { type: v.id, conversation: e, partId: t, identifier: n, createdAt: r };
                })(e, n, r, Date.now())
              ),
                'email' === r && d(Object(u.d)(f, i));
            })
            .catch((e) => {
              d(
                (function (e, t, n, r) {
                  return { type: v.gd, conversationId: e, partId: t, identifier: n, error: r };
                })(t, n, r, e, Date.now())
              );
            })
        );
      };
    }
    function B(e) {
      return (t, n) => {
        const { session: i } = n();
        let o = Object(c.e)();
        Object(r.j)() && (o += `?v=${Math.floor(1e8 * Math.random())}`),
          Object(s.w)(o, Object(a.a)(i, { conversation_id: e }));
      };
    }
    function $() {
      return { type: v.td };
    }
    function F(e) {
      return { type: v.Fc, composerState: e };
    }
    function V(e, t, n) {
      return (r, i) => {
        const { session: o } = i();
        return e.recordInteractions(o, t, n);
      };
    }
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'b', function () {
      return _;
    }),
      n.d(t, 'd', function () {
        return y;
      }),
      n.d(t, 'a', function () {
        return S;
      }),
      n.d(t, 'j', function () {
        return j;
      }),
      n.d(t, 'i', function () {
        return w;
      }),
      n.d(t, 'l', function () {
        return E;
      }),
      n.d(t, 'q', function () {
        return I;
      }),
      n.d(t, 'p', function () {
        return C;
      }),
      n.d(t, 'g', function () {
        return T;
      }),
      n.d(t, 'm', function () {
        return A;
      }),
      n.d(t, 'r', function () {
        return R;
      }),
      n.d(t, 'e', function () {
        return P;
      }),
      n.d(t, 'f', function () {
        return M;
      }),
      n.d(t, 'k', function () {
        return D;
      }),
      n.d(t, 'c', function () {
        return k;
      }),
      n.d(t, 's', function () {
        return U;
      }),
      n.d(t, 'h', function () {
        return L;
      }),
      n.d(t, 't', function () {
        return x;
      }),
      n.d(t, 'o', function () {
        return B;
      }),
      n.d(t, 'n', function () {
        return $;
      });
    var r = n(71),
      i = n.n(r),
      o = n(13),
      s = n.n(o),
      c = n(72),
      a = n.n(c),
      u = n(123),
      d = n.n(u),
      l = n(97),
      p = n.n(l),
      f = n(154),
      b = n.n(f),
      h = n(238),
      g = n.n(h),
      m = n(18),
      v = n(2);
    const { assign: O } = Object,
      _ = (e) => e.parts.filter((e) => e.author.isAdmin)[0],
      y = (e) => Object(m.a)(e.parts.filter((e) => e.author.isAdmin)),
      S = (e) => e.parts.reduce((e, t) => e + (t.author.isAdmin ? 1 : 0), 0),
      j = (e) => 1 === e.parts.length && 'chat' === e.parts[0].messageType,
      w = (e) => e.parts.length > 1 && Object(m.a)(e.parts).author.isAdmin,
      E = (e) => e.author.isBot && 'Operator' === e.author.firstName,
      I = (e, t) => {
        if (!s()(t)) {
          const n = (e) => e.clientId || e.id,
            r = t.parts || [],
            o = a()([...e.parts, ...r], n);
          return i()(o, ['createdAt'], ['asc']);
        }
        return e.parts;
      },
      C = (e, t) => {
        if (!s()(t) && t.composerState) {
          if (t.composerState.version > e.composerState.version) return t.composerState;
          t.composerState.version === e.composerState.version &&
            t.composerState.visible !== e.composerState.visible &&
            Object(v.b)(
              `Different composerState visibibility with same version number for conversation with id=${e.id}`
            );
        }
        return e.composerState;
      },
      T = (e) => {
        if (e && e.parts && 0 !== e.parts.length) return `${e.id}-${Object(m.a)(e.parts).id}`;
      },
      A = (e) => 'partial' === e.fetchState,
      R = (e) => {
        const t = y(e);
        return 1 === e.parts.length ? P(e) : O({}, t, { messageType: M(t) });
      },
      P = (e) => {
        const { lastParticipatingAdmin: t } = e,
          n = t ? t.lastActiveAt : void 0,
          r = t ? t.isActive : void 0;
        return O({}, e.parts[0], { lastActiveAt: n, isActive: r });
      },
      M = (e) => e.messageType || 'adminReply',
      D = (e) =>
        !(
          !e.identifier.startsWith('custom_data.') &&
          !e.identifier.startsWith('company.custom_data.')
        ),
      k = (e, t) => {
        const n = e.attributes.find((e) => e.identifier === t);
        if (n)
          return 'string' === n.type && Array.isArray(n.options)
            ? 'list'
            : 'email' === n.identifier
            ? 'email'
            : 'phone' === n.identifier
            ? 'phone'
            : n.type;
      },
      N = (e) => {
        const t = b()(e.parts, (e) => e.body);
        return p()(t, (e) => 'messengerCard' === e.type);
      },
      U = (e) => b()(N(e), (e) => d()(e, 'type')),
      L = (e, t) => g()(N(e), { uri: t }),
      x = (e) => e.sort((e, t) => t.lastPartCreatedAt - e.lastPartCreatedAt),
      B = (e) =>
        ((e) =>
          e.composerState.visible && !e.inboundConversationsDisabled && !e.preventEndUserReplies)(
          e
        ) && !((e) => 'attribute_collector' === e.parts[0].replyType)(e),
      $ = (e) => e.parts && Object(m.a)(e.parts) && 'pointer' === Object(m.a)(e.parts).messageType;
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'b', function () {
      return p;
    }),
      n.d(t, 'c', function () {
        return f;
      }),
      n.d(t, 'd', function () {
        return findAndValidateInputField;
      }),
      n.d(t, 'e', function () {
        return h;
      }),
      n.d(t, 'a', function () {
        return DelayedNodeVisibilityCheck;
      }),
      n.d(t, 'f', function () {
        return g;
      });
    var r = n(162),
      i = n.n(r),
      o = n(21),
      s = n(25),
      c = n.n(s),
      a = n(12),
      u = n(5),
      d = n(26);
    function l(e, t, n) {
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
    function p(e) {
      const t = JSON.parse(a.b.get('tour_triggered_from_url'));
      if (t) {
        const n = t.indexOf(e.toString());
        -1 !== n && (t.splice(n, 1), a.b.set('tour_triggered_from_url', JSON.stringify(t)));
      }
    }
    function f(e, t) {
      return t.hostname === e.hostname && t.pathname === e.pathname && t.hash === e.hash;
    }
    const b = (e) => e.replace(/[\u200B-\u200D\uFEFF]/g, '');
    class findAndValidateInputField {
      constructor(e, t) {
        l(this, 'elements', void 0),
          l(this, 'callback', void 0),
          l(this, 'destroyed', void 0),
          l(this, 'validateInputs', () => {
            let e = !0;
            this.elements.forEach((t) => {
              'checkbox' !== t.type &&
                'radio' !== t.type &&
                this.elementHasEmptyValue(t) &&
                (e = !1);
            }),
              this.onChange(e);
          }),
          (this.callback = t),
          (this.destroyed = !1),
          (this.elements = []);
        const n = window.parent.document.querySelector(e);
        if (n) {
          const e = n.tagName.toLowerCase(),
            t = 'input' === e || 'textarea' === e || 'select' === e || n.isContentEditable;
          this.elements = t
            ? [n]
            : n.querySelectorAll('input, textarea, select, div[contenteditable]');
        }
      }
      onChange(e) {
        this.destroyed || this.callback(e);
      }
      destroy() {
        (this.destroyed = !0), this.removeListeners();
      }
      elementHasEmptyValue(e) {
        return e instanceof HTMLSelectElement
          ? !b(e.options[e.selectedIndex].value)
          : e.isContentEditable
          ? !b(e.innerText || '')
          : !b(e.value);
      }
      addListeners() {
        this.elements.forEach((e) => {
          'select' === e.tagName.toLowerCase()
            ? e.addEventListener('change', this.validateInputs)
            : e.addEventListener('input', this.validateInputs);
        });
      }
      removeListeners() {
        this.elements.forEach((e) => {
          'select' === e.type
            ? e.removeEventListener('change', this.validateInputs)
            : e.removeEventListener('input', this.validateInputs);
        });
      }
      run() {
        if (!this.elements.length) return this.callback(!0);
        this.validateInputs(), this.addListeners();
      }
    }
    const h = function (...e) {
      c()('tours:debug')(...e);
    };
    class DelayedNodeVisibilityCheck {
      constructor(e, t, n, r) {
        l(this, 'selector', void 0),
          l(this, 'timeoutValue', void 0),
          l(this, 'callback', void 0),
          l(this, 'timeout', void 0),
          l(this, 'waitTimeout', void 0),
          l(this, 'document', void 0),
          l(this, 'observer', void 0),
          Object(u.a)()
            ? Object(d.d)({ selector: e, timeoutValue: t, wait: n }, r)
            : ((this.selector = e),
              (this.timeoutValue = t),
              (this.document = window.parent.document),
              (this.callback = r),
              (this.observer = new MutationObserver(i()(this._check.bind(this), 200))),
              (this.waitTimeout = window.setTimeout(() => {
                this._initObserver(), this._startTimer(), this._check();
              }, n || 0)));
      }
      _initObserver() {
        this.document.body &&
          this.observer.observe(this.document.body, { attributes: !0, childList: !0, subtree: !0 });
      }
      _check() {
        const e = this.document.querySelector(this.selector);
        Object(o.u)(e) ? (this.callback(!0), this.cancel()) : this.callback(!1);
      }
      _startTimer() {
        (this.timeoutValue || 0 === this.timeoutValue) &&
          (this.timeout = window.setTimeout(() => {
            this.callback(!1), this.cancel();
          }, this.timeoutValue));
      }
      cancel() {
        this.observer.disconnect(),
          this.timeout && clearTimeout(this.timeout),
          this.waitTimeout && clearTimeout(this.waitTimeout);
      }
    }
    const g = (e, t) => (e.length <= t ? e : `${e.slice(0, t)}...`);
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'd', function () {
      return c;
    }),
      n.d(t, 'c', function () {
        return a;
      }),
      n.d(t, 'i', function () {
        return u;
      }),
      n.d(t, 'j', function () {
        return d;
      }),
      n.d(t, 'e', function () {
        return l;
      }),
      n.d(t, 'b', function () {
        return p;
      }),
      n.d(t, 'f', function () {
        return f;
      }),
      n.d(t, 'g', function () {
        return b;
      }),
      n.d(t, 'h', function () {
        return h;
      }),
      n.d(t, 'l', function () {
        return g;
      }),
      n.d(t, 'k', function () {
        return m;
      });
    var r = n(5);
    const i = /iphone|ipad|ipod|android|blackberry|opera mini|iemobile/i,
      o = [
        '.intercom-lightweight-app-launcher',
        '.intercom-launcher-frame',
        '#intercom-container',
        '.intercom-messenger',
        '.intercom-notifications',
      ];
    function s(e) {
      try {
        if (!(e in window)) return !1;
        const t = window[e];
        return null !== t && (t.setItem('intercom-test', '0'), t.removeItem('intercom-test'), !0);
      } catch (e) {
        return !1;
      }
    }
    function c() {
      return s('localStorage');
    }
    function a() {
      return !!(window.FileReader && window.File && window.FileList && window.FormData);
    }
    function u() {
      const e = p().userAgent;
      return !!e && null !== e.match(i) && void 0 !== window.parent;
    }
    function d() {
      const e = p().vendor || '',
        t = p().userAgent || '';
      return 0 === e.indexOf('Apple') && /\sSafari\//.test(t);
    }
    function l(e = window) {
      const t = p(),
        n = 'Google Inc.' === t.vendor && !e.chrome;
      return '' === t.languages && (t.webdriver || n);
    }
    function p() {
      return navigator || {};
    }
    function f(e = p().userAgent) {
      return /iPad|iPhone|iPod/.test(e) && !window.MSStream;
    }
    function b() {
      var e;
      return (
        (null ===
          (e = (function () {
            if (f()) {
              const e = p().appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
              return {
                major: parseInt(e[1], 10),
                minor: parseInt(e[2], 10),
                patch: parseInt(e[3] || 0, 10),
              };
            }
            return null;
          })()) || void 0 === e
          ? void 0
          : e.major) >= 15
      );
    }
    function h() {
      const e = p().userAgent,
        t = f(e),
        n = !!e.match(/WebKit/i);
      return t && n && !e.match(/CriOS/i) && b();
    }
    function g() {
      return (
        !Object(r.a)() &&
        o.some((e) => {
          const t = window.parent.document.querySelector(e);
          if (t) {
            const e = window.getComputedStyle(t);
            return null === e || 'none' === e.display;
          }
        })
      );
    }
    const m = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    t.a = {
      hasXhr2Support: function () {
        return 'XMLHttpRequest' in window && 'withCredentials' in new XMLHttpRequest();
      },
      hasLocalStorageSupport: c,
      hasSessionStorageSupport: function () {
        return s('sessionStorage');
      },
      hasFileSupport: a,
      hasAudioSupport: function () {
        const e = document.createElement('audio');
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
          !!Object(r.a)() ||
          o.some((e) => {
            const t = window.parent.document.querySelector(e);
            if (t) {
              const e = t.getBoundingClientRect();
              return e && e.width > 0 && e.height > 0;
            }
          })
        );
      },
      messengerHasDisplayNoneSet: g,
      isMobileBrowser: u,
      isIOSFirefox: function () {
        return !!p().userAgent.match('FxiOS');
      },
      isFirefox: function () {
        return !!p().userAgent.match('Firefox');
      },
      isSafari: d,
      isElectron: function () {
        const e = p().userAgent || '',
          t = (Object(r.a)() ? window : window.parent) || {},
          n = t.process && t.versions && t.versions.electron;
        return /\sElectron\//.test(e) || n;
      },
      isIE: function () {
        const e = p().userAgent || '';
        return e.indexOf('MSIE') > 0 || e.indexOf('Trident') > 0;
      },
      isEdge: function () {
        return (p().userAgent || '').indexOf('Edge') > 0;
      },
      isNativeMobile: function () {
        return p().isNativeMobile;
      },
      isChrome: function () {
        const e = window.chrome,
          t = p().vendor,
          n = p().userAgent.indexOf('OPR') > -1,
          r = p().userAgent.indexOf('Edge') > -1;
        return (
          !!p().userAgent.match('CriOS') ||
          (null != e && 'Google Inc.' === t && !1 === n && !1 === r)
        );
      },
      isIOS: f,
      isIOS15: b,
      isIOS15Safari: h,
      isAndroid: function (e = p().userAgent) {
        return e && e.toLowerCase().indexOf('android') > -1;
      },
    };
  },
  function (e, t, n) {
    'use strict';
    var r = n(11),
      i = n(95),
      o = n(42),
      s = n(74),
      c = n(1),
      a = Object(c.createSelector)(
        (e) => Object(s.a)(e.conversations.byId),
        (e) => e.filter((e) => !e.read && e.dismissed)
      ),
      u = n(55),
      d = n(62),
      l = n(3),
      p = n(6),
      f = n(70),
      b = n(47),
      h = n(2);
    const g = 'delivered',
      m = 'renotifying';
    var v = n(0);
    n.d(t, 'e', function () {
      return _;
    }),
      n.d(t, 'l', function () {
        return y;
      }),
      n.d(t, 'a', function () {
        return j;
      }),
      n.d(t, 'j', function () {
        return w;
      }),
      n.d(t, 'k', function () {
        return E;
      }),
      n.d(t, 'i', function () {
        return I;
      }),
      n.d(t, 'h', function () {
        return A;
      }),
      n.d(t, 'f', function () {
        return P;
      }),
      n.d(t, 'g', function () {
        return M;
      }),
      n.d(t, 'c', function () {
        return k;
      }),
      n.d(t, 'd', function () {
        return x;
      }),
      n.d(t, 'm', function () {
        return B;
      });
    const { assign: O } = Object;
    function _() {
      return (e, t) => {
        const {
          launcherDiscoveryMode: { isLauncherDiscoveryModeOpening: n },
        } = t();
        n
          ? (e(Object(i.d)()),
            setTimeout(() => e(y()), 100),
            setTimeout(() => e(Object(i.a)()), 100))
          : e(y());
      };
    }
    function y() {
      return (e, t) => {
        const {
            conversations: n,
            borderless: { conversationId: r },
          } = t(),
          i = n.byId[r];
        r
          ? (e(M(r)),
            (function (e) {
              return e && -1 !== [g, m].indexOf(e.notificationStatus);
            })(i) && e(Object(p.p)(l.b, r, ['opened'])))
          : e((e, t) => {
              const {
                app: { isMessengerOpen: n },
              } = t();
              e(
                n
                  ? j()
                  : (e) => {
                      e(N()), e(S()), e(Object(f.a)());
                    }
              );
            });
      };
    }
    function S(e = !1) {
      return { type: v.Wb, hideLightweightAppMessenger: e };
    }
    function j(e = !1) {
      return { type: v.t, fromCloseButton: e };
    }
    function w(e = '', t = !1, n = null) {
      return { type: v.Qc, defaultMessage: e, replaceCurrentView: t, articleUrl: n };
    }
    function E(e = !1) {
      return { type: v.Rc, skipOpenAnimation: e };
    }
    function I() {
      return { type: v.Mc };
    }
    function C() {
      return { type: v.Nc };
    }
    function T(e = !1) {
      return { type: v.Pc, replaceCurrentView: e };
    }
    function A() {
      return (e) => {
        e(T(!0)), e(S());
      };
    }
    function R() {
      return { type: v.Oc };
    }
    function P(e) {
      return (t) => {
        t(Object(b.a)(e)), t(S());
      };
    }
    function M(e) {
      return (t) => {
        t(Object(f.a)()), t(P(e)), t(Object(p.l)(l.b, e));
      };
    }
    function D(e) {
      return (t) => {
        t(Object(b.a)(e)), t(Object(p.l)(l.b, e));
      };
    }
    function k(e) {
      return (t) => t(Object(p.l)(l.b, e)).then(() => t(P(e)));
    }
    function N() {
      return (e, t) => {
        const n = t(),
          { app: r, user: i, message: s } = n,
          { features: c, inboundConversationsDisabled: l, viewStack: p, isBooting: b } = r,
          { hasConversations: h, articleConversationId: g } = i,
          m = Object(u.b)(n),
          v = Object(d.k)(n),
          O = Object(o.a)(n),
          _ = a(n),
          y = (function (e, t) {
            return (
              ('user' === e.role && t.inboundMessages) ||
              ('user' !== e.role && t.anonymousInboundMessages)
            );
          })(i, c);
        b ||
          (y
            ? m > 1
              ? (e(R()), U(i, 'homescreen'))
              : s && s.conversationId
              ? (e(D(s.conversationId)), e(Object(f.a)()), U(i, 'conversation-from-auto-message'))
              : 1 === O.length
              ? (e(D(O[0].id)), U(i, 'conversation-from-notification'))
              : 1 === _.length
              ? (e(D(_[0].id)), U(i, 'conversation-from-dismissed'))
              : g
              ? (e(D(g)), U(i, 'conversation-from-article'))
              : p.length ||
                (v || h
                  ? (e(R()), U(i, 'homescreen'))
                  : l
                  ? v
                    ? (e(R()), U(i, 'homescreen'))
                    : (e(C()), U(i, 'empty-screen'))
                  : (e(w()), U(i, 'new-conversation')))
            : (e(C()), U(i, 'empty-screen')));
      };
    }
    function U(e, t = 'homescreen') {
      h.j.buildAndAddMetric(e, t, 'initial-screen', 'messenger', 'from_launcher');
    }
    function L(e, t) {
      const n = t(),
        i = (function (e) {
          return O({}, e, { viewStack: e.viewStack.slice(0, -1) });
        })(n.app);
      Object(r.g)(n) && 'messenger-trigger' === Object(r.e)(i)
        ? e(R())
        : Object(r.g)(n)
        ? e({ type: v.Lb })
        : e(R());
    }
    function x() {
      return L;
    }
    function B() {
      return { type: v.ad };
    }
    t.b = {
      closeMessenger: j,
      getAndOpenConversation: k,
      navigateBack: x,
      onLauncherClick: _,
      openConversation: P,
      openConversationInMessenger: M,
      openConversations: function () {
        return (e) => {
          e(I()), e(S());
        };
      },
      openMessenger: S,
      openNewConversation: function (e) {
        return (t, n) => {
          n().app.inboundConversationsDisabled || t(w(e)), t(S());
        };
      },
      showAndGetConversation: D,
      showConversation: b.a,
      showConversations: I,
      showEmptyScreen: C,
      showMessengerTriggerScreen: T,
      showInitialScreen: N,
      showNewConversation: w,
      showSearchBrowse: E,
      toggleMessenger: y,
      toggleUpfrontEmailCollectorState: B,
      openMessengerLoadingView: A,
    };
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'e', function () {
      return l;
    }),
      n.d(t, 'j', function () {
        return p;
      }),
      n.d(t, 'a', function () {
        return f;
      }),
      n.d(t, 'f', function () {
        return b;
      }),
      n.d(t, 'g', function () {
        return h;
      }),
      n.d(t, 'b', function () {
        return g;
      }),
      n.d(t, 'm', function () {
        return m;
      }),
      n.d(t, 'c', function () {
        return v;
      }),
      n.d(t, 'k', function () {
        return O;
      }),
      n.d(t, 'p', function () {
        return _;
      }),
      n.d(t, 'l', function () {
        return y;
      }),
      n.d(t, 'i', function () {
        return S;
      }),
      n.d(t, 'd', function () {
        return j;
      }),
      n.d(t, 'o', function () {
        return w;
      }),
      n.d(t, 'n', function () {
        return E;
      }),
      n.d(t, 'h', function () {
        return I;
      });
    var r = n(1),
      i = n(43),
      o = n(7),
      s = n(18),
      c = n(82),
      a = n(126);
    const u = ({ viewStack: e }) => e,
      d = Object(r.createSelector)(u, (e) => !!e && e.length > 1),
      l = Object(r.createSelector)(u, (e) => (e && e.length > 0 ? e[e.length - 1] : void 0)),
      p = Object(r.createSelector)(u, (e) => !e || 0 === e.length),
      f = (e) => e.app.accessToTeammateEnabled,
      b = ({ app: e }) => l(e),
      h = ({ app: e }) => d(e),
      g = Object(r.createSelector)(
        (e) => e.app,
        (e) => e.user,
        a.a,
        (e, t, n) =>
          !e.inboundConversationsDisabled &&
          (t.preventMultipleInboundConversation
            ? !n
            : 'user' === t.role
            ? e.features.inboundMessages
            : e.features.anonymousInboundMessages)
      ),
      m = (e) => {
        const { app: t } = e;
        return t.launcherLogoUrl;
      },
      v = Object(r.createSelector)([g, (e) => e.app.helpCenterSiteUrl], (e, t) => !e && !!t),
      O = (e, { currentView: t }) => 'home-screen' !== t && 'empty-screen' !== t,
      _ = (e) => {
        if (!e) return !1;
        const { officeHoursResponse: t } = e.app,
          n = { only_outside_of_office_hours: !!t, always: !0, never: !1 },
          { role: r, userSuppliedEmail: c } = e.user,
          { upfrontEmailCollectionSetting: a, upfrontEmailCollectionSubmitted: u } =
            e.app.upfrontEmailCollection,
          d = e.session && e.session.email,
          l = Object(i.b)(e);
        return (
          (!l || !l.isEmailAttributeCollectorInserted) &&
          !c &&
          -1 !== ['visitor', 'lead'].indexOf(r) &&
          !d &&
          !u &&
          !(function (e) {
            return !!e && Object(o.i)(e) && !Object(s.a)(e.parts).author.isBot;
          })(l) &&
          n[a]
        );
      };
    const y = Object(r.createSelector)(
        (e) => e.app.isIntercomLinkEnabled,
        c.c,
        (e, t) => e && !t
      ),
      S = Object(r.createSelector)(c.g, b, (e, t) => !(!e || 'new-conversation' !== t)),
      j = (e) => e.app.color,
      w = (e) => e.user.searchRequiredBeforeConversation,
      E = Object(r.createSelector)(w, g, f, (e, t, n) => e && t && n),
      I = (e) => e.app.hideLightweightAppMessenger;
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return c;
    }),
      n.d(t, 'b', function () {
        return a;
      });
    var r = n(5),
      i = n(99),
      o = n(9);
    const s = (e) => ({
        get: (t) => {
          try {
            return e.getItem(`intercom.${t}`);
          } catch (e) {}
        },
        set: (t, n) => {
          try {
            return e.setItem(`intercom.${t}`, n || '');
          } catch (e) {}
        },
        remove: (t) => {
          try {
            return e.removeItem(`intercom.${t}`);
          } catch (e) {}
        },
        clear: () => {
          try {
            e.clear();
          } catch (e) {}
        },
      }),
      c = Object(r.a)()
        ? Object(i.b)()
        : o.a.hasLocalStorageSupport()
        ? s(localStorage)
        : { get: () => {}, set: () => {}, remove: () => {}, clear: () => {} },
      a = Object(r.a)()
        ? Object(i.c)()
        : o.a.hasSessionStorageSupport()
        ? s(sessionStorage)
        : { get: () => {}, set: () => {}, remove: () => {}, clear: () => {} };
  },
  ,
  function (e, t, n) {
    'use strict';
    let r = 0;
    t.a = (e, t = {}, n) => {
      const i = { type: e, payload: t };
      if (n) {
        i.callbackId = r++;
        const e = (t) => {
          const { type: r, callbackId: o, payload: s } = t.data;
          'intercom:callback' === r &&
            o === i.callbackId &&
            (window.removeEventListener('message', e), n(s));
        };
        window.addEventListener('message', e);
      }
      window.parent.postMessage(i, '*');
    };
  },
  function (e, t, n) {
    'use strict';
    function r(e) {
      console && console.warn(e);
    }
    function i(e) {
      console && console.error(e);
    }
    n.d(t, 'b', function () {
      return r;
    }),
      n.d(t, 'a', function () {
        return i;
      });
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'k', function () {
      return o;
    }),
      n.d(t, 'c', function () {
        return s;
      }),
      n.d(t, 'i', function () {
        return c;
      }),
      n.d(t, 'g', function () {
        return a;
      }),
      n.d(t, 'a', function () {
        return u;
      }),
      n.d(t, 'j', function () {
        return d;
      }),
      n.d(t, 'd', function () {
        return l;
      }),
      n.d(t, 'e', function () {
        return p;
      }),
      n.d(t, 'f', function () {
        return f;
      }),
      n.d(t, 'l', function () {
        return b;
      }),
      n.d(t, 'o', function () {
        return h;
      }),
      n.d(t, 'n', function () {
        return g;
      }),
      n.d(t, 'b', function () {
        return m;
      }),
      n.d(t, 'm', function () {
        return O;
      }),
      n.d(t, 'h', function () {
        return _;
      });
    var r = n(1);
    const i = (e) => e.tour,
      o =
        (Object(r.createSelector)(i, (e) => e.isFetching),
        Object(r.createSelector)(i, (e) => e.isFetched)),
      s =
        (Object(r.createSelector)(i, (e) => e.fetchingFailed),
        Object(r.createSelector)(i, (e) => e.activeTour)),
      c = Object(r.createSelector)(i, (e) => e.isPreviewing),
      a = Object(r.createSelector)(i, (e) => e.updateFailed),
      u = Object(r.createSelector)(i, (e) => {
        if (e.activeTour) return e.activeTour.author;
      }),
      d = Object(r.createSelector)(i, (e) => !(!e.activeTour || !e.activeTour.isCompleted)),
      l = Object(r.createSelector)(i, (e) => {
        if (e.activeTour) return e.activeTour.steps.length;
      }),
      p = Object(r.createSelector)(i, (e) => {
        const t = e.activeTour;
        if (t) return t.steps.findIndex((e) => e.id === t.activeStepId);
      }),
      f = Object(r.createSelector)(i, (e) => {
        const t = e.activeTour;
        if (!t) return;
        const { steps: n, activeStepId: r } = t;
        return t ? n.find((e) => e.id === r) : void 0;
      }),
      b = Object(r.createSelector)(i, (e) => {
        const t = e.activeTour;
        if (!t) return;
        const { steps: n, activeStepId: r } = t,
          i = n.findIndex((e) => e.id === r);
        return n[i + 1];
      }),
      h = Object(r.createSelector)(i, (e) => e.videoAudioMuted),
      g = Object(r.createSelector)(i, (e) => e.userHasInteractedWithVideo),
      m = Object(r.createSelector)(i, (e) => {
        const t = e.activeTour;
        if (t) return t.endTourAnimation;
      }),
      v = Object(r.createSelector)(p, l, (e, t) => e + 1 === t),
      O = Object(r.createSelector)(m, v, (e, t) => 'confetti' === e && t),
      _ = Object(r.createSelector)(i, (e) => e.isAwaitingProgress);
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'h', function () {
      return l;
    }),
      n.d(t, 'b', function () {
        return p;
      }),
      n.d(t, 'd', function () {
        return f;
      }),
      n.d(t, 'e', function () {
        return b;
      }),
      n.d(t, 'i', function () {
        return h;
      }),
      n.d(t, 'c', function () {
        return g;
      }),
      n.d(t, 'a', function () {
        return m;
      }),
      n.d(t, 'f', function () {
        return v;
      }),
      n.d(t, 'g', function () {
        return O;
      });
    var r,
      i = n(5),
      o = n(26);
    function s(e, t) {
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
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? s(Object(n), !0).forEach(function (t) {
              a(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : s(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function a(e, t, n) {
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
    let u = null === (r = window) || void 0 === r ? void 0 : r.parent,
      d = [];
    const l = (e) => {
        (u = e),
          Object(i.a)() || window.parent.addEventListener('resize', (e) => d.forEach((t) => t(e)));
      },
      p = () => {
        var e, t;
        return Object(i.a)()
          ? u.title
          : null === (e = u) || void 0 === e
          ? void 0
          : null === (t = e.document) || void 0 === t
          ? void 0
          : t.title;
      },
      f = () => {
        var e;
        return Object(i.a)() ? u.location : null === (e = u) || void 0 === e ? void 0 : e.location;
      },
      b = () => {
        var e, t;
        return Object(i.a)()
          ? u.referrer
          : null === (e = u) || void 0 === e
          ? void 0
          : null === (t = e.document) || void 0 === t
          ? void 0
          : t.referrer;
      },
      h = (e) => {
        Object(i.a)() && ((u = c(c({}, u), e)), d.forEach((e) => e(u)));
      },
      g = () => {
        var e, t;
        return {
          innerWidth: null === (e = u) || void 0 === e ? void 0 : e.innerWidth,
          innerHeight: null === (t = u) || void 0 === t ? void 0 : t.innerHeight,
        };
      },
      m = (e) => {
        d.push(e);
      },
      v = (e) => (d = d.filter((t) => t !== e)),
      O = (e) => Object(o.k)(e);
  },
  function (e, t, n) {
    'use strict';
    t.a = (e) => {
      if (e) return e[e.length - 1];
    };
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'f', function () {
      return f;
    }),
      n.d(t, 'd', function () {
        return b;
      }),
      n.d(t, 'e', function () {
        return h;
      }),
      n.d(t, 'h', function () {
        return g;
      }),
      n.d(t, 'm', function () {
        return m;
      }),
      n.d(t, 'a', function () {
        return v;
      }),
      n.d(t, 'l', function () {
        return O;
      }),
      n.d(t, 'c', function () {
        return _;
      }),
      n.d(t, 'j', function () {
        return y;
      }),
      n.d(t, 'i', function () {
        return S;
      }),
      n.d(t, 'k', function () {
        return E;
      }),
      n.d(t, 'b', function () {
        return I;
      }),
      n.d(t, 'g', function () {
        return C;
      });
    var r = n(13),
      i = n.n(r),
      o = n(9),
      s = n(15),
      c = n(2);
    let a = !1,
      u = !1,
      d = !1,
      l = !1,
      p = !1;
    const f = (e) => !!e && !!e[0] && 'attachmentList' === e[0].type,
      b = (e) => {
        if (e) return e.isActive ? 'active' : 'away';
      },
      h = (e) => {
        if (!e || !e.lastActiveAt) return;
        const t = new Date();
        return Math.round((t.getTime() - e.lastActiveAt.getTime()) / 6e4);
      },
      g = (e) => i()(e),
      m = (e) => {
        a = e;
      },
      v = () => a,
      O = (e) => {
        u = e;
      },
      _ = () => u;
    function y(e, t) {
      try {
        const n = w(),
          r = e.parts[e.parts.length - 1].author.isBot;
        if (n || !r || !t) return;
        Object(c.g)('timeToFirstBotResponse', { duration_ms: Date.now() - t }), j(!0);
      } catch (e) {
        Object(s.a)(`Failure while recording trigger transition duration ${e}`);
      }
    }
    function S(e, t, n) {
      try {
        let r = p;
        const i = e.parts[e.parts.length - 1].author.isBot;
        if (r || !i || !t || Math.abs(n - t) > 50) return void (p = !0);
        Object(c.g)('durationFromCreateConversationToOperatorReply', {
          duration_ms: Date.now() - t,
        }),
          (p = !0);
      } catch (e) {
        Object(s.a)(`Failure while recording trigger transition duration ${e}`);
      }
    }
    const j = (e) => {
        l = e;
      },
      w = () => l,
      E = (e) => {
        d = e;
      },
      I = () => d,
      C = (e) => !!e && o.a.messengerIsVisible();
  },
  ,
  function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return i;
    }),
      n.d(t, 'l', function () {
        return o;
      }),
      n.d(t, 'm', function () {
        return s;
      }),
      n.d(t, 'B', function () {
        return c;
      }),
      n.d(t, 's', function () {
        return a;
      }),
      n.d(t, 'f', function () {
        return u;
      }),
      n.d(t, 'r', function () {
        return d;
      }),
      n.d(t, 'z', function () {
        return l;
      }),
      n.d(t, 'e', function () {
        return p;
      }),
      n.d(t, 'A', function () {
        return f;
      }),
      n.d(t, 'b', function () {
        return b;
      }),
      n.d(t, 'x', function () {
        return h;
      }),
      n.d(t, 'c', function () {
        return g;
      }),
      n.d(t, 'y', function () {
        return m;
      }),
      n.d(t, 'd', function () {
        return v;
      }),
      n.d(t, 'j', function () {
        return O;
      }),
      n.d(t, 'o', function () {
        return _;
      }),
      n.d(t, 'h', function () {
        return y;
      }),
      n.d(t, 'g', function () {
        return S;
      }),
      n.d(t, 'q', function () {
        return j;
      }),
      n.d(t, 'n', function () {
        return w;
      }),
      n.d(t, 'w', function () {
        return E;
      }),
      n.d(t, 'v', function () {
        return I;
      }),
      n.d(t, 't', function () {
        return C;
      }),
      n.d(t, 'u', function () {
        return T;
      }),
      n.d(t, 'p', function () {
        return A;
      }),
      n.d(t, 'i', function () {
        return R;
      }),
      n.d(t, 'k', function () {
        return P;
      });
    var r = n(38);
    const i = { TAB: 9, ENTER: 13, ESC: 27, SPACE: 32, BACKSPACE: 8, DELETE: 46 },
      o = (e) => e.scrollHeight - e.clientHeight - e.scrollTop,
      s = (e) => e.scrollTop / (e.scrollHeight - e.clientHeight),
      c = (e, t = 0) => {
        e && (e.scrollTop = t);
      },
      a = (e, t = 0) => {
        const { scrollTop: n, scrollHeight: r, clientHeight: i } = e;
        return r - n - i < t + 1;
      },
      u = (e) => {
        if (!e) return 0;
        const { scrollTop: t, scrollHeight: n, clientHeight: r } = e;
        return n - r - t;
      },
      d = (e) => {
        const { scrollHeight: t, clientHeight: n } = e;
        return t > n;
      },
      l = (e) => {
        const { scrollHeight: t, clientHeight: n } = e;
        e.scrollTop = t - n;
      },
      p = (e) => {
        const { scrollHeight: t, clientHeight: n } = e;
        if (!e.scrollBy) return l(e);
        e.scrollBy({ top: t - n, left: 0, behavior: 'smooth' });
      },
      f = (e, t) => {
        const { bottom: n, top: r, height: i } = e.getBoundingClientRect(),
          { bottom: o, top: s, height: c } = t.getBoundingClientRect();
        if (!(r < s) && !(n > o)) return;
        let a = e.offsetTop;
        for (; e; ) {
          const { position: t } = window.getComputedStyle(e);
          'relative' === t && (a += e.offsetTop - e.scrollTop + e.clientTop), (e = e.offsetParent);
        }
        t.scrollTop = a - Math.trunc(c / 2) + Math.trunc(i / 2);
      },
      b = (e, t) => {
        const n = e.className.split(' ');
        n.some((e) => e === t) || (n.push(t), (e.className = n.join(' ').trim()));
      },
      h = (e, t) => {
        e.className = e.className
          .split(' ')
          .filter((e) => e !== t)
          .join(' ');
      },
      g = (e, t, n, r = !1) => {
        null != e &&
          (e.addEventListener
            ? e.addEventListener(t, n, r)
            : e.attachEvent && e.attachEvent(`on${t}`, n));
      },
      m = (e, t, n) => {
        null != e &&
          (e.removeEventListener
            ? e.removeEventListener(t, n)
            : e.detachEvent && e.detachEvent(`on${t}`, n));
      },
      v = (e) => {
        const t = e.currentTarget,
          { scrollTop: n, scrollHeight: r, clientHeight: i } = t,
          { deltaY: o } = e,
          s = o > 0;
        s && o > r - i - n
          ? (t.scrollTop = r)
          : !s && -o > n
          ? (t.scrollTop = 0)
          : e.stopPropagation();
      },
      O = (e) => {
        if (e && 'selectionStart' in e) return e.selectionStart;
      },
      _ = (e, t, n) => e.slice(0, n) + t + e.slice(n),
      y = (e, t = -1) => {
        e && (e.focus(), 'setSelectionRange' in e && t >= 0 && e.setSelectionRange(t, t));
      };
    function S(e, t, n) {
      const r = e.document || e.ownerDocument;
      return (e) => {
        const i = [];
        Array.from(r.querySelectorAll(t)).forEach((e) => i.push(e));
        let { target: o } = e;
        for (; o && o !== this; ) {
          if (i.indexOf(o) > -1) {
            n.call(o, e);
            break;
          }
          o = o.parentNode;
        }
      };
    }
    const j = (e) =>
        void 0 !== e.hidden
          ? !e.hidden
          : void 0 !== e.mozHidden
          ? !e.mozHidden
          : void 0 !== e.msHidden
          ? !e.msHidden
          : void 0 === e.webkitHidden || !e.webkitHidden,
      w = () => {
        let e;
        return (
          void 0 !== document.hidden
            ? (e = 'visibilitychange')
            : void 0 !== document.mozHidden
            ? (e = 'mozvisibilitychange')
            : void 0 !== document.msHidden
            ? (e = 'msvisibilitychange')
            : void 0 !== document.webkitHidden && (e = 'webkitvisibilitychange'),
          e
        );
      },
      E = (e, t = {}) => {
        const n = document.createElement('form');
        n.setAttribute('target', '_blank'),
          n.setAttribute('method', 'post'),
          n.setAttribute('action', e),
          Object.keys(t).forEach((e) => {
            const r = document.createElement('input');
            (r.type = 'hidden'), (r.name = e), (r.value = t[e]), n.appendChild(r);
          }),
          document.body.appendChild(n),
          n.submit(),
          document.body.removeChild(n);
      },
      I = (e) => (t) => (t.keyCode === i.ENTER || t.keyCode === i.SPACE) && e(t),
      C = (e) =>
        e.keyCode === i.TAB && !(-1 !== ['INPUT', 'TEXTAREA', 'BUTTON'].indexOf(e.target.tagName)),
      T = (e) => {
        if (e) return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
      },
      A = (e) => e.keyCode === i.ESC,
      R = (e) =>
        Array.from(
          e.querySelectorAll(
            'button, [href], input:not([type="file"]):not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'
          )
        ).filter((e) => !e.closest('[aria-hidden="true"]')),
      P = (e) => (Object(r.b)(e) ? 'rtl' : 'ltr');
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'b', function () {
      return r;
    });
    function r() {
      const e = new Date().getTime();
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (t) => {
        const n = (e + 16 * Math.random()) % 16 | 0;
        return ('x' === t ? n : (3 & n) | 8).toString(16);
      });
    }
    t.a = { generateUUID: r };
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'g', function () {
      return r;
    }),
      n.d(t, 'h', function () {
        return i;
      }),
      n.d(t, 'c', function () {
        return o;
      }),
      n.d(t, 'd', function () {
        return s;
      }),
      n.d(t, 'e', function () {
        return c;
      }),
      n.d(t, 'f', function () {
        return a;
      }),
      n.d(t, 'i', function () {
        return u;
      }),
      n.d(t, 'a', function () {
        return d;
      }),
      n.d(t, 'b', function () {
        return l;
      });
    const r = 'search_browse_card',
      i = 'search_browse_card_input',
      o = 'article',
      s = 'collection',
      c = 'input',
      a = 'reaction',
      u = 'search_browse',
      d = 'search_browse',
      l = 'search_browse_article';
  },
  ,
  ,
  function (e, t, n) {
    'use strict';
    var r =
        (e) =>
        ({ data: t }) => {
          const { type: n, payload: r } = t,
            i = e[n];
          i && i(r);
        },
      i = n(14),
      o = () => Object(i.a)('intercom:ready'),
      s = (e, t, n) => Object(i.a)('intercom:create-or-update-frame', { name: e, styles: t }, n),
      c = (e) => Object(i.a)('intercom:destroy-frame', { name: e }),
      a = (e) => Object(i.a)('intercom:write-cookie', { cookie: e }),
      u = (e) => Object(i.a)('intercom:request-animation-frame', {}, e),
      d = (e, t) => Object(i.a)('intercom:open-url', { url: e, openNatively: t }),
      l = (e, t, n) => Object(i.a)('intercom:set-storage-item', { key: e, value: t, type: n }),
      p = (e, t) => Object(i.a)('intercom:remove-storage-item', { key: e, type: t }),
      f = (e) => Object(i.a)('intercom:get-storage', {}, e),
      b = (e, t) => Object(i.a)('intercom:get-dom-element', { selector: e }, t),
      h = (e, t) => Object(i.a)('intercom:delayed-node-visibility-check', e, t);
    let g = 0;
    var m = (e, t = {}, n) => {
      const r = g++,
        i = { type: 'intercom:add-event-listener', event: e, payload: t, listenerId: r },
        o = (e) => {
          const { type: t, listenerId: r, payload: o } = e.data;
          'intercom:event' === t && r === i.listenerId && n(o);
        };
      return (
        window.addEventListener('message', o),
        window.parent.postMessage(i, '*'),
        () => {
          ((e) => {
            window.parent.postMessage(
              { type: 'intercom:remove-event-listener', listenerId: e },
              '*'
            );
          })(r),
            window.removeEventListener('message', o);
        }
      );
    };
    n.d(t, 'b', function () {
      return r;
    }),
      n.d(t, 'i', function () {
        return o;
      }),
      n.d(t, 'c', function () {
        return s;
      }),
      n.d(t, 'e', function () {
        return c;
      }),
      n.d(t, 'm', function () {
        return a;
      }),
      n.d(t, 'l', function () {
        return l;
      }),
      n.d(t, 'j', function () {
        return p;
      }),
      n.d(t, 'g', function () {
        return f;
      }),
      n.d(t, 'k', function () {
        return u;
      }),
      n.d(t, 'h', function () {
        return d;
      }),
      n.d(t, 'f', function () {
        return b;
      }),
      n.d(t, 'd', function () {
        return h;
      }),
      n.d(t, 'a', function () {
        return m;
      });
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'd', function () {
      return r;
    }),
      n.d(t, 'a', function () {
        return i;
      }),
      n.d(t, 'b', function () {
        return o;
      }),
      n.d(t, 'e', function () {
        return s;
      }),
      n.d(t, 'c', function () {
        return c;
      }),
      n.d(t, 'f', function () {
        return a;
      });
    const r = () => 'intercom-id',
      i = (e) => `intercom-id-${e}`,
      o = (e) => `intercom-session-${e}`,
      s = () => '_mkto_trk',
      c = () => 'hubspotutk',
      a = () => '1' === navigator.doNotTrack;
  },
  ,
  function (e, t, n) {
    'use strict';
    function r(e) {
      if (null != e) return new Date(1e3 * e);
    }
    function i(e) {
      return Date.now() - 1e3 * e;
    }
    n.d(t, 'c', function () {
      return r;
    }),
      n.d(t, 'a', function () {
        return i;
      }),
      (t.b = {
        timestampToDate: r,
        now: function () {
          return (function () {
            const e = Date.now;
            return 'function' == typeof e && !('prototype' in e);
          })()
            ? Date.now()
            : new Date().getTime();
        },
        calculateDurationInMs: i,
      });
  },
  function (e, t, n) {
    'use strict';
    var r = n(74),
      i = n(1),
      o = n(7);
    t.a = Object(i.createSelector)(
      [(e) => Object(r.a)(e.conversations.byId), (e) => e.notificationTypeOverrides],
      (e, t) =>
        e
          .filter((e) => !Object(o.m)(e))
          .map((e) =>
            ((e, t) => {
              const n = Object(o.g)(e);
              return Object.assign({}, e, {
                suppress: t.suppress[n] || !1,
                forceSnippet: t.forceSnippet[n] || !1,
              });
            })(e, t)
          )
    );
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return s;
    });
    var r = n(15),
      i = n(48),
      o = n(0);
    const s = (e, t, n) => (o, s) => {
        const { messengerCards: l } = s(),
          p = n && l && l[t.uri],
          f = Object(i.c)(t);
        if (
          (o(a(f)),
          p &&
            c(p.card) &&
            !f.canvas.content &&
            (f.canvas = Object.assign({}, f.canvas, p.card.canvas)),
          f.canvas.content)
        )
          return void o(u(f, f.canvas.content));
        const { session: b } = s();
        return e
          .getMessengerCanvasWithContent(b, f.canvas.id, f.uri)
          .then((e) => {
            o(u(f, e.content));
          })
          .catch((e) => {
            o(d(f)), Object(r.a)(`There was a problem retrieving the live card content: ${e}`);
          });
      },
      c = (e) => !(!e || !e.canvas),
      a = (e) => ({ type: o.qb, card: e }),
      u = (e, t) => ({ type: o.rb, card: e, content: t }),
      d = (e) => ({ type: o.pb, card: e });
  },
  function (e, t, n) {
    'use strict';
    var r = n(13),
      i = n.n(r),
      o = n(49),
      s = n.n(o),
      c = n(16),
      a = n(10),
      u = n(128),
      d = n(56),
      l = n(2),
      p = n(8),
      f = n(3),
      b = n(59);
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
    class tour_progress_CheckIfTourReadyToProgress {
      constructor(e, t) {
        h(this, 'whenReady', void 0),
          h(this, 'state', void 0),
          h(this, 'activeStep', void 0),
          h(this, 'nextStep', void 0),
          (this.state = e),
          (this.whenReady = t),
          (this.activeStep = Object(c.f)(e)),
          (this.nextStep = Object(c.l)(e)),
          this._check();
      }
      _check() {
        return 'click' === this.activeStep.progressionBehavior
          ? (Object(p.e)('Click to progress behavior detected.'),
            this._evaluateProgressionByClick())
          : this.whenReady();
      }
      _evaluateProgressionByClick() {
        let e = 0,
          t = 0;
        this._pageNeedsRedirection()
          ? (Object(p.e)(
              'Step url for the next step is different so the tour will wait 2s for the page to reload'
            ),
            (e = 2e3))
          : Object(p.e)('No page redirection detected.'),
          this._nextStepIsPointer() &&
            (Object(p.e)(
              "The page is going to wait upto 5s for the next step's selector to become visible in page"
            ),
            (t = 5e3)),
          new p.a(this.nextStep.selector, t, e, this.whenReady);
      }
      _pageNeedsRedirection() {
        return this.activeStep.url !== this.nextStep.url;
      }
      _nextStepIsPointer() {
        return !!this.nextStep.selector;
      }
    }
    var g = n(12),
      m = n(9),
      v = n(0);
    n.d(t, 'e', function () {
      return _;
    }),
      n.d(t, 'h', function () {
        return y;
      }),
      n.d(t, 'i', function () {
        return S;
      }),
      n.d(t, 'c', function () {
        return E;
      }),
      n.d(t, 'f', function () {
        return I;
      }),
      n.d(t, 'b', function () {
        return C;
      }),
      n.d(t, 'd', function () {
        return A;
      }),
      n.d(t, 'a', function () {
        return P;
      }),
      n.d(t, 'l', function () {
        return M;
      }),
      n.d(t, 'j', function () {
        return D;
      }),
      n.d(t, 'g', function () {
        return k;
      }),
      n.d(t, 'k', function () {
        return N;
      });
    function O(e) {
      return Object(c.g)(e) || Object(c.i)(e) || Object(c.j)(e);
    }
    function _() {
      return async (e, t) => {
        const n = t(),
          { session: r } = t(),
          { id: i, progressId: o } = Object(c.c)(n),
          s = Object(c.l)(n);
        if (s) {
          if ((Object(p.e)(`Tour with id ${i} is attempting to progress to step ${s}`), !O(n))) {
            e({ type: v.cc });
            try {
              await f.b.progressTour(r, i, s.id, o);
            } catch (t) {
              e({ type: v.bd }), Object(p.e)(`Could not update tour due to e=${t}`);
            }
          }
          Object(c.i)(n) && g.b.set('tour_progress_preview', s.id),
            new tour_progress_CheckIfTourReadyToProgress(n, () => {
              e(
                (function (e, t) {
                  return { type: v.ac, activeStepId: e, progressId: t };
                })(s.id, o)
              ),
                e({ type: v.bc });
            });
        } else
          window.parent && window.parent.postMessage('exit_tour_preview', '*'),
            (function (e) {
              j('intercom:tourComplete', { tourId: e });
            })(i),
            e(
              (function (e) {
                return { type: v.x, progressId: e };
              })(o)
            );
      };
    }
    function y() {
      return async (e, t) => {
        const n = t(),
          { session: r } = t(),
          { id: i, progressStartUrl: o } = Object(c.c)(n);
        if (!Object(c.i)(n)) {
          e({ type: v.oc });
          try {
            var s, a;
            await f.b.resetTour(r, i), Object(p.b)(i);
            const t = window.parent;
            o &&
            !Object(p.c)(
              o,
              null === (s = window) || void 0 === s
                ? void 0
                : null === (a = s.parent) || void 0 === a
                ? void 0
                : a.location
            )
              ? t.__intercomAssignLocation(o)
              : e(k(i));
          } catch (e) {
            Object(p.e)(`Could not reset tour due to exception - ${e}`);
          }
        }
      };
    }
    function S() {
      return async (e, t) => {
        const n = t(),
          { session: r } = t(),
          { id: i, progressId: o } = Object(c.c)(n);
        if (!Object(c.i)(n)) {
          e({ type: 'SNOOZE_TOUR' });
          try {
            const e = u.a.TOUR;
            f.b.snoozeContentObjectInstance(r, e, i, o);
          } catch (e) {
            Object(p.e)(`Could not snooze tour due to exception - ${e}`);
          }
        }
      };
    }
    function j(e, t) {
      if (!Object(b.a)()) return;
      const n = new CustomEvent(e, { detail: t });
      window.parent.document.dispatchEvent(n);
    }
    function w(e) {
      j('intercom:tourError', { tourId: e });
    }
    function E() {
      return (e, t) => {
        const n = t(),
          { id: r, progressId: i } = Object(c.c)(n),
          { session: o } = t();
        Object(p.e)(`Tour with id ${r} marked as complete`),
          O(n) || (e({ type: v.Hb }), f.b.completeTour(o, r, i));
      };
    }
    function I() {
      return (e, t) => {
        const n = t(),
          { id: r, progressId: i } = Object(c.c)(n),
          o = Object(c.f)(n);
        var s, a, u;
        if (!O(n))
          return (
            w(r),
            f.b.recordTourFailure(
              n.session,
              r,
              o.id,
              o.selector,
              null === (s = window) || void 0 === s
                ? void 0
                : null === (a = s.parent) || void 0 === a
                ? void 0
                : null === (u = a.location) || void 0 === u
                ? void 0
                : u.pathname,
              i
            )
          );
      };
    }
    function C() {
      return (e) => {
        var t, n;
        if (Object(m.i)()) return;
        const r = T(
          null === (t = window) || void 0 === t
            ? void 0
            : null === (n = t.parent) || void 0 === n
            ? void 0
            : n.location
        );
        if ((Object(p.e)('Checking if URL has tour attached'), r)) {
          const t = 'tour_triggered_from_url';
          let n = JSON.parse(g.b.get(t));
          (n = n || []),
            n.indexOf(r) > -1
              ? Object(p.e)(`Tour with id ${r} has already been triggered`)
              : (Object(p.e)(`Tour id ${r} attached in the url`),
                e(A(r)),
                n.push(r),
                g.b.set(t, JSON.stringify(n)));
        } else Object(p.e)('No attached tour found in the URL');
      };
    }
    const T = (e) => {
      if (!e) return;
      let t = Object(d.a)(e).product_tour_id;
      if (!t) {
        const n = e.toString();
        if (!n) return;
        const r = n.match(/product_tour_id=(\d+)/i);
        r && (t = r[1]);
      }
      return t;
    };
    function A(e) {
      return async (t, n) => {
        const r = Object(c.c)(n()),
          { session: i } = n();
        if (r)
          Object(p.e)(`Active tour with id ${r.id} already found so tour id ${e} won't be fetched`);
        else {
          Object(p.e)(`Will attempt to fetch tour with id ${e}`);
          try {
            t(M(await f.b.fetchTour({ session: i, tourId: e })));
          } catch (t) {
            e && w(e), Object(p.e)(`Could not fetch or start tour due to e=${t}`);
          }
        }
      };
    }
    function R(e, t) {
      return { type: v.kb, tour: e, isPreviewingTour: t };
    }
    function P(e) {
      return { type: v.l, muted: e };
    }
    function M(e) {
      return (t, n) => {
        const { user: r } = n(),
          o = Object(c.c)(n());
        if (!i()(o))
          return (
            Object(p.e)('There is already an active tour', o),
            void Object(p.e)("The tour won't attempt to start", e)
          );
        const u = (function (e) {
          if (!e.steps) return;
          const { activeStepId: t, steps: n } = e,
            r = n.findIndex((e) => parseInt(e.id, 10) === parseInt(t, 10)),
            i = n.slice(r).find((e) => !s()(e.selector));
          return i ? i.selector : void 0;
        })(e);
        u
          ? (Object(p.e)(
              'Checking if selector of the first active pointer step is visible on the page',
              e
            ),
            new p.a(u, null, 0, (n) => {
              n
                ? (Object(p.e)('Node is visible. Tour is attempting to start', e),
                  t(R(e, !1)),
                  t(Object(a.a)()),
                  Object(l.h)(r, 'received', 'tour', 'messenger', null, { tour_id: e.id }))
                : (Object(p.e)('Node is not visible. Tour will not start', e),
                  (function (e, t) {
                    Object(b.a)() &&
                      (Object(l.c)('tour_failed_css_evaluation', { tour_id: e }),
                      Object(l.b)(`tour_failed_css_evaluation tour_id=${e}`)),
                      Object(l.h)(
                        t,
                        'received_but_failed_css_evaluation',
                        'tour',
                        'messenger',
                        null,
                        { tour_id: e }
                      );
                  })(e.id, r),
                  w(e.id));
            }))
          : (Object(p.e)('Tour is attempting to start', e),
            t(R(e, !1)),
            t(Object(a.a)()),
            Object(l.h)(r, 'received', 'tour', 'messenger', null, { tour_id: e.id }));
      };
    }
    function D(e) {
      return (t) => {
        t(R(e, !0)), t(Object(a.a)());
      };
    }
    function k(e) {
      return async (t, n) => {
        const { session: r } = n();
        try {
          var i, o;
          const n = await f.b.fetchTour({ session: r, tourId: e }),
            s = window.parent,
            c = Object(d.b)(n.url);
          n.url &&
          !Object(p.c)(
            c,
            null === (i = window) || void 0 === i
              ? void 0
              : null === (o = i.parent) || void 0 === o
              ? void 0
              : o.location
          )
            ? s.__intercomAssignLocation(n.url)
            : (t(R(n, !1)), t(Object(a.a)()));
        } catch (t) {
          w(e), Object(p.e)(`Could not fetch or start tour due to e=${t}`);
        }
      };
    }
    function N() {
      return (e, t) => {
        const n = t();
        if (O(n)) e(U(''));
        else {
          const { session: r } = t(),
            { id: i, progressId: o } = Object(c.c)(n);
          e(U(o)), f.b.stopTour(r, i, o);
        }
      };
    }
    function U(e) {
      return { type: v.Uc, progressId: e };
    }
  },
  function (e, t, n) {
    'use strict';
    var r = n(100);
    t.a = {
      read(e, t) {
        t = t || Object(r.a)();
        const n =
            '(?:(?:^|[^]*;)\\s*' +
            encodeURIComponent(e).replace(/[\-\.\+\*]/g, '\\$&') +
            '\\s*\\=\\s*([^;]*).*$)|^.*$',
          i = t.match(new RegExp(n));
        if (null !== i && void 0 !== i[1]) return decodeURIComponent(i[1]);
      },
      write(e, t, n = {}) {
        const { domain: i, path: o, expires: s, secure: c, sameSite: a } = n;
        let u = `${e}=${t}`;
        return (
          i && (u += `; domain=${i}`),
          o && (u += `; path=${o}`),
          s && (u += `; expires=${s.toUTCString()}`),
          a && (u += `; samesite=${a}`),
          c && (u += '; secure'),
          Object(r.c)(u),
          u
        );
      },
      clear(e, t = {}) {
        const { domain: n, path: r } = t,
          i = new Date(0);
        return this.write(e, '', { domain: n, path: r, expires: i });
      },
    };
  },
  ,
  ,
  function (e, t, n) {
    'use strict';
    n.d(t, 'b', function () {
      return s;
    }),
      n.d(t, 'a', function () {
        return c;
      }),
      n.d(t, 'c', function () {
        return a;
      }),
      n.d(t, 'f', function () {
        return u;
      }),
      n.d(t, 'h', function () {
        return d;
      }),
      n.d(t, 'g', function () {
        return l;
      }),
      n.d(t, 'e', function () {
        return p;
      }),
      n.d(t, 'd', function () {
        return f;
      });
    const r = ['https://app.intercom.com', 'https://app.intercom.io'];
    function i(e, t) {
      e.opener && e.opener.postMessage(t, '*');
    }
    function o(e, t = {}) {
      return { boundEventCreator: Object.assign({ type: e }, t) };
    }
    const s = {
        CLICK: {
          key: 'click',
          title: 'Clicks',
          description: 'When people click on a button or link',
        },
        VISIT: { key: 'visit', title: 'Page views', description: 'When people view a page' },
      },
      c = {
        CHOOSE_EVENT_TYPE: 'CHOOSE_EVENT_TYPE',
        CONFIRM_URL: 'CONFIRM_URL',
        SELECT_CLICK_ELEMENT: 'SELECT_CLICK_ELEMENT',
      };
    function a(e, t) {
      e.addEventListener('message', (e) => {
        if (-1 === r.indexOf(e.origin)) return;
        const { boundEventCreator: n } = e.data;
        n && 'open' === n.type && t(n.boundEventCreatorState);
      });
    }
    function u(e) {
      i(e, o('ready'));
    }
    function d(e, t) {
      i(e, o('updateStage', { newStage: t }));
    }
    function l(e, t) {
      i(e, o('updateData', { eventData: t }));
    }
    function p(e, t) {
      i(e, o('newEvent', { newEvent: t }));
    }
    function f(e) {
      i(e, o('closed'));
    }
  },
  ,
  function (e, t, n) {
    'use strict';
    n.d(t, 'c', function () {
      return c;
    }),
      n.d(t, 'd', function () {
        return p;
      }),
      n.d(t, 'a', function () {
        return f;
      }),
      n.d(t, 'e', function () {
        return b;
      }),
      n.d(t, 'b', function () {
        return h;
      });
    var r = n(2),
      i = n(15),
      o = n(121);
    const s = [
        'ar',
        'bg',
        'bs',
        'ca',
        'cs',
        'da',
        'de',
        'de-form',
        'el',
        'en',
        'es',
        'et',
        'fi',
        'fr',
        'he',
        'hr',
        'hu',
        'id',
        'it',
        'ja',
        'ko',
        'lt',
        'lv',
        'mn',
        'nb',
        'nl',
        'pl',
        'pt',
        'pt-BR',
        'ro',
        'ru',
        'sl',
        'sr',
        'sv',
        'tr',
        'vi',
        'zh-CN',
        'zh-TW',
      ],
      c = ['ar', 'he'],
      a = {};
    a.en = n(219);
    let u = a,
      d = 'en';
    const l = (e, t) => e && e.replace(/{([\s\S]+?)}/g, (e, n) => t[n]),
      p = async (e) => {
        if (-1 === s.indexOf(e)) return Object(i.b)(`Unsupported locale: ${e}`);
        if (!a[e]) {
          const t = await Object(o.a)({ promise: () => n(382)(`./${e}.json`) });
          a[e] = t;
        }
        d = e;
      },
      f = () => d,
      b = (e, t) => {
        const n = u[d];
        if (!n) return Object(r.b)(`Unknown locale '${d}'`), '';
        const i = n[e];
        if (!i) return Object(r.b)(`Unknown key '${e}' in locale '${d}'`), l(u.en[e], t) || '';
        try {
          return l(i, t);
        } catch (t) {
          return Object(r.b)(`Interpolation failed for key '${e}' in locale '${d}'`), '';
        }
      },
      h = (e) => -1 !== c.indexOf(e);
  },
  ,
  function (e, t, n) {
    'use strict';
    var r = n(38),
      i = n(73),
      o = n.n(i),
      s = n(125);
    n.d(t, 'g', function () {
      return d;
    }),
      n.d(t, 'f', function () {
        return l;
      }),
      n.d(t, 'd', function () {
        return p;
      }),
      n.d(t, 'e', function () {
        return f;
      }),
      n.d(t, 'c', function () {
        return b;
      }),
      n.d(t, 'a', function () {
        return h;
      }),
      n.d(t, 'b', function () {
        return g;
      });
    const c = ['image', 'attachmentList', 'video', 'videoReply', 'videoFile', 'messengerCard'],
      a = ['image', 'video', 'videoReply', 'videoFile', 'notificationChannelsCard'],
      u = [
        { user: 'sent_an_image', admin: 'sent_you_an_image' },
        { user: 'sent_an_attachment', admin: 'sent_you_an_attachment' },
        { user: 'sent_a_video', admin: 'sent_you_a_video' },
        { user: 'sent_a_video_reply', admin: 'sent_you_a_video_reply' },
        { user: 'sent_a_video', admin: 'sent_you_a_video' },
        { user: 'sent_an_app', admin: 'sent_you_an_app' },
      ],
      d = (e) => e && e.type && 'videoFile' === e.type,
      l = (e) => a.indexOf(e.type) > -1,
      p = (e) => e.text || e.content,
      f = (e) => {
        const t = e[e.length - 1],
          n = t.body,
          i = t.author;
        let o,
          s = t.body.some(l);
        S(n[0]) && (o = O(n));
        const c = v(n),
          a = y(n, i);
        return (
          (o = 0 === c.length && a ? a : c),
          'quick_reply' === t.partType
            ? f(e.slice(0, e.length - 1))
            : ((function (e) {
                return 'attribute_collector' === e.partType;
              })(t) &&
                ((o = Object(r.e)('operator_asked_for_attribute', { attribute: m(t) })), (s = !0)),
              { author: i, summaryText: o, isMetadata: s })
        );
      },
      b = (e) => {
        const t = Object(s.a)(e);
        return j(t).map((e) => ({ type: 'paragraph', text: e }));
      },
      h = (e, t, n) => [
        { type: 'attachmentList', attachments: [{ contentType: t, name: e, size: n }] },
      ],
      g = (e, t, n, r, i) => [
        { type: 'image', url: e, width: t, height: n, attribution: r, title: i },
      ],
      m = (e) => {
        const t = e.form.attributes[0];
        return t.name || t.identifier.toLowerCase().replace('.', ' ');
      },
      v = (e) => {
        const t = e
          .filter((e) => 'button' !== e.type && !S(e))
          .map((e) => _(e))
          .filter((e) => !!e)
          .join(' ');
        return o()(t.replace(/<br>/g, ' '));
      },
      O = (e) => {
        const t = e.filter((e) => S(e))[0];
        if (t && t.title) return o()(t.title);
      },
      _ = (e) => {
        switch (e.type) {
          case 'videoFile':
          case 'messengerCard':
            return '';
          case 'orderedList':
            return e.items.map((e, t) => `${t + 1}. ${e}`).join(', ');
          case 'unorderedList':
            return e.items.join(', ');
          default:
            return e.text || e.content;
        }
      },
      y = (e, t) => {
        const n = ((e) => e.filter((e) => c.indexOf(e.type) > -1)[0])(e);
        if (!n) return;
        const i = c.indexOf(n.type),
          o = u[i];
        return t.isAdmin ? Object(r.e)(o.admin) : Object(r.e)(o.user);
      },
      S = (e) => e && e.type && 'link' === e.type,
      j = (e) => {
        const t = e.split('\n\n');
        for (let e = 0; e < t.length; e++) t[e] = t[e].replace(/\n/g, '<br>');
        return t.filter((e) => e);
      };
  },
  ,
  function (e, t, n) {
    'use strict';
    var r = n(1),
      i = n(7),
      o = n(30),
      s = n(18),
      c = n(104);
    t.a = Object(r.createSelector)(o.a, (e) =>
      e.filter((e) => {
        return (
          !Object(i.m)(e) &&
          !e.read &&
          !e.dismissed &&
          !Object(c.a)(Object(s.a)(e.parts).partType) &&
          !e.suppress &&
          ((t = e), 'snippet' === Object(s.a)(t.parts).notificationType || t.forceSnippet) &&
          !Object(i.n)(e)
        );
        var t;
      })
    );
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'b', function () {
      return i;
    }),
      n.d(t, 'a', function () {
        return o;
      });
    var r = n(1);
    const i = Object(r.createSelector)(
        [(e) => e.app.conversationId, (e) => e.conversations.byId, (e) => e.newConversation],
        (e, t, n) => {
          const r = null === e ? n : t[e];
          if (r) return r.composerState || (r.composerState = n.composerState), r;
        }
      ),
      o = (e) => Object(r.createSelector)([(e) => e.conversations.byId], (t) => t && t[e]);
  },
  ,
  ,
  function (e, t, n) {
    'use strict';
    n.d(t, 'd', function () {
      return c;
    }),
      n.d(t, 'b', function () {
        return l;
      }),
      n.d(t, 'a', function () {
        return b;
      }),
      n.d(t, 'c', function () {
        return h;
      }),
      n.d(t, 'e', function () {
        return g;
      });
    var r = n(31),
      i = n(7),
      o = n(223),
      s = n(0);
    function c(e, t = 'unknown', n = 1, o = 10) {
      return (s, c) => {
        s(a());
        const { session: l, app: p } = c();
        return e
          .getConversations(l, {
            source: t,
            page: n,
            perPage: o,
            selfServeSuggestionsMatch: p.selfServeSuggestionsMatch,
          })
          .then((t) => {
            t.conversations.forEach((t) => {
              Object(i.s)(t).forEach((t) => {
                s(Object(r.a)(e, t));
              });
            }),
              s(g(t)),
              s(u(t));
          })
          .catch(() => {
            s(d());
          });
      };
    }
    function a() {
      return { type: s.ub };
    }
    function u(e) {
      return { type: s.vb, conversations: e };
    }
    function d(e) {
      return { type: s.tb, error: e };
    }
    function l(e, t) {
      return (n, r) => {
        n(p(t));
        const { session: i } = r();
        return e.dismissNotifications(i, t).then(() => n(f(t)));
      };
    }
    function p(e) {
      return { type: s.Y, conversationIds: e };
    }
    function f(e) {
      return { type: s.Z, conversationIds: e };
    }
    function b(e) {
      return { type: s.z, scrollPosition: e };
    }
    function h(e) {
      return { type: s.cb, conversationId: e };
    }
    function g(e) {
      return (t) => {
        const n = e.conversations;
        n &&
          n.forEach((e) => {
            Object(i.n)(e) && e.read && t(Object(o.a)(e.id));
          });
      };
    }
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return i;
    });
    var r = n(0);
    function i(e, t = !1) {
      const n = { type: r.Lc, conversationId: e };
      return t && (n.replaceCurrentView = t), n;
    }
  },
  function (e, t, n) {
    'use strict';
    var r = n(61),
      i = n.n(r),
      o = n(155),
      s = n.n(o),
      c = n(80),
      a = n.n(c),
      u = n(151),
      d = n.n(u),
      l = n(239),
      p = n.n(l);
    const f = (e) => {
      if (!d()(e)) return e;
      const t = {};
      return (
        Object.keys(e).forEach((n) => {
          let r = f(e[n]);
          Array.isArray(r) && (r = r.map((e) => f(e))), (t[p()(n)] = r);
        }),
        t
      );
    };
    var b = n(76),
      h = n.n(b),
      g = n(131),
      m = n.n(g),
      v = n(240),
      O = n.n(v);
    const _ = {
      button: function (e) {
        return e.action.id ? ((e.id = e.action.id), m()(e, 'action.id'), e) : e;
      },
      input: function (e) {
        return e.action && e.action.id ? ((e.id = e.action.id), m()(e, 'action.id'), e) : e;
      },
      list: function (e) {
        const t = e.items.map((e) => {
          if (e.action) {
            if (!e.action.id) return e;
            (e.id = e.action.id), m()(e, 'action.id');
          }
          return e;
        });
        return (e.items = t), e;
      },
    };
    function y(e) {
      return e.components.map((e) =>
        (function (e) {
          const t = O()({}, e);
          return h()(_, e.type, () => {})(t), t;
        })(e)
      );
    }
    var S = n(156);
    function j(e, t) {
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
    n.d(t, 'a', function () {
      return I;
    }),
      n.d(t, 'c', function () {
        return C;
      }),
      n.d(t, 'e', function () {
        return T;
      }),
      n.d(t, 'b', function () {
        return R;
      }),
      n.d(t, 'd', function () {
        return P;
      });
    const E = (e) => (e ? Object(S.a)(e.toString()) : ''),
      I = (e, t) => {
        switch (e.type) {
          case 'button':
            return `button-${E(e.id)}`;
          case 'text':
            return `text-${t}-${E(e.text)}`;
          case 'input':
            return `input-${E(e.id)}`;
          case 'spacer':
            return `spacer-${t}`;
          case 'divider':
            return `divider-${t}`;
          case 'image':
            return `image-${t}-${E(e.url)}`;
          case 'list':
            return `list-${e.items.map((e) => E(e.id)).join('-')}`;
          case 'dropdown':
            return `dropdown-${E(e.id)}`;
          case 'single-select':
            return `single-select-${E(e.id)}`;
          default:
            return `unknown-${t}`;
        }
      },
      C = (e) => (e.state ? { uri: e.uri, canvas: { id: '', content: e.state } } : e),
      T = (e) => {
        const t = (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? j(Object(n), !0).forEach(function (t) {
                  w(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : j(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
          }
          return e;
        })({}, e);
        return (
          i()(t, ['canvas', 'content'], (e) =>
            ((e) => ('0.1' === e.version ? e : { version: '0.1', components: y(e) }))(a()(e))
          ),
          i()(t, ['canvas', 'content', 'components'], (e) => e.map(f))
        );
      },
      A = (e, t, n) => {
        const r = [];
        return (
          e.forEach((e) => {
            'list' === e.type ? r.push(...e.items) : r.push(e);
          }),
          r.find((e) => e[t] && (!n || e[t] === n))
        );
      },
      R = (e, t, n) => !!A(e, t, n),
      P = (e, t, n = !0) => {
        const r = ((e, t) => A(e, 'id', t))(t, e),
          i = M(r, t);
        return i && r && r.type
          ? 'button' === r.type || 'item' === r.type
            ? s()(a()(t), `${i}.loading`, n, a.a)
            : 'input' === r.type || 'dropdown' === r.type || 'single-select' === r.type
            ? s()(a()(t), `${i}.saveState`, n ? 'saving' : 'unsaved', a.a)
            : void 0
          : t;
      },
      M = (e, t) => {
        for (const n in t)
          if (t.hasOwnProperty(n)) {
            if (e === t[n]) return `[${n}]`;
            if (t[n] && 'object' == typeof t[n]) {
              const r = M(e, t[n]);
              if (r) return `[${n}]` + r;
            }
          }
      };
  },
  ,
  function (e, t, n) {
    'use strict';
    n.d(t, 'f', function () {
      return a;
    }),
      n.d(t, 'd', function () {
        return u;
      }),
      n.d(t, 'a', function () {
        return d;
      }),
      n.d(t, 'b', function () {
        return l;
      }),
      n.d(t, 'e', function () {
        return p;
      }),
      n.d(t, 'c', function () {
        return f;
      });
    var r = n(3),
      i = n(127),
      o = n(63),
      s = n(2),
      c = n(0);
    function a(e) {
      return { type: c.gc, banners: e };
    }
    function u(e) {
      return (t, n) => {
        const r = n(),
          { verticalPadding: s } = Object(o.a)(r),
          { customizationOverrides: c = {} } = r,
          { isSetByBanner: a } = c;
        (20 === s || a) && t(Object(i.a)({ verticalPadding: e }));
      };
    }
    function d(e, t, n) {
      return (i, o) => {
        const { session: s } = o();
        i(
          (function (e, t) {
            return { type: c.w, bannerId: e, email: t };
          })(e, n)
        ),
          r.b.collectEmailFromBanner(s, e, t, n);
      };
    }
    function l(e, t) {
      return (n, i) => {
        const { session: o } = i();
        n({ type: c.W }), r.b.dismissBanner(o, e, t);
        const s = [];
        for (const t of i().banners) t.banner_id !== e && s.push(t);
        n(a(s));
      };
    }
    function p(e, t, n) {
      return (i, o) => {
        const { session: s } = o();
        i(
          (function (e, t) {
            return { type: c.dc, bannerId: e, reaction: t };
          })(e, n)
        ),
          r.b.reactToBanner(s, e, t, n);
      };
    }
    function f(e) {
      return async (t, n) => {
        const { session: i } = n();
        try {
          t(
            (function (e) {
              return { type: c.eb, bannerViewId: e };
            })(e)
          );
          const n = [],
            o = await r.b.fetchBannerView(i, e);
          if (!o) return;
          n.push(o), t(a(n));
        } catch (e) {
          Object(s.b)(`Could not fetch banner_view due to e=${e}`);
        }
      };
    }
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'c', function () {
      return d;
    }),
      n.d(t, 'a', function () {
        return l;
      }),
      n.d(t, 'e', function () {
        return p;
      }),
      n.d(t, 'd', function () {
        return f;
      }),
      n.d(t, 'b', function () {
        return b;
      });
    var r = n(25),
      i = n.n(r),
      o = n(6),
      s = n(22),
      c = n(40),
      a = n(0);
    const u = i()('intercom.actions.inbound-triggers');
    function d(e, t, n = !1) {
      return async (r, i) => {
        try {
          const a = i(),
            { app: u, session: d, newConversation: l } = a,
            p = Object(s.b)(),
            f = {
              clientId: p,
              body: Object(c.c)(t.text),
              createdAt: new Date(),
              composerSuggestionItem: t,
            },
            b = l.composerState.visible;
          r(
            (function (e) {
              switch (e.preAction) {
                case 'close-composer':
                  return Object(o.r)({ visible: !1 });
                default:
                  throw `Invalid PRE ACTION type for suggestion=${e.preAction}`;
              }
            })(t)
          ),
            r(Object(o.h)(f, n));
          const h = await e.startConversationFromSuggestion(d, {
            suggestionUuid: t.uuid,
            clientAssignedUUID: p,
            selfServeSuggestionsMatch: u.selfServeSuggestionsMatch,
            articleUrl: l.articleUrl,
          });
          r(Object(o.i)(h, null, null, Date.now(), 'custom_bot')),
            b && r(Object(o.r)({ visible: !0 }));
        } catch (e) {
          r(Object(o.g)(null)), u(`Couldnt start conversation from suggestion due to e=${e}`);
        }
      };
    }
    function l(e) {
      return { type: a.d, composerSuggestions: e };
    }
    function p(e) {
      return { type: a.pd, composerSuggestions: e };
    }
    function f(e) {
      return { type: a.nd, composerSuggestions: e };
    }
    function b(e) {
      return { type: a.mc, rulesetId: e };
    }
  },
  ,
  ,
  ,
  function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return a;
    }),
      n.d(t, 'c', function () {
        return u;
      }),
      n.d(t, 'b', function () {
        return d;
      });
    var r = n(11),
      i = n(74),
      o = n(1),
      s = n(7),
      c = n(68);
    const a = (e, t) =>
        !e.read &&
        'whatsapp' !== e.currentChannel &&
        e.id !== t &&
        (e.dismissed || !Object(s.m)(e)),
      u = Object(o.createSelector)(
        (e) => Object(i.a)(e.conversations.byId),
        (e) => {
          const {
            app: { conversationId: t, isMessengerOpen: n },
            user: { isPresent: i },
          } = e;
          if (n && 'conversation' === Object(r.f)(e)) return t;
          if (!n) {
            const t = Object(c.a)(e);
            if (1 === t.length && i) return t[0].id;
          }
        },
        (e, t) => e.reduce((e, n) => (a(n, t) && e.push(n.id), e), [])
      ),
      d = Object(o.createSelector)(u, (e) => e.length);
  },
  function (e, t, n) {
    'use strict';
    function r(e) {
      const t = document.createElement('a');
      return (
        (t.href = e),
        {
          protocol: t.protocol,
          host: t.host,
          port: t.port,
          pathname: t.pathname,
          hash: t.hash,
          search: t.search,
          hostname: t.hostname,
          origin: t.origin,
        }
      );
    }
    function i(e) {
      const t = r(e).search;
      return t
        ? (/^[?#]/.test(t) ? t.slice(1) : t).split('&').reduce((e, t) => {
            const [n, r] = t.split('=');
            return (e[n] = r ? decodeURIComponent(r.replace(/\+/g, ' ')) : ''), e;
          }, {})
        : {};
    }
    n.d(t, 'b', function () {
      return r;
    }),
      n.d(t, 'a', function () {
        return i;
      });
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'c', function () {
      return S;
    }),
      n.d(t, 'a', function () {
        return j;
      }),
      n.d(t, 'e', function () {
        return w;
      }),
      n.d(t, 'b', function () {
        return E;
      }),
      n.d(t, 'd', function () {
        return I;
      });
    var r,
      i,
      o = n(243),
      s = n.n(o),
      c = n(28),
      a = n.n(c),
      u = n(244),
      d = n.n(u),
      l = n(227),
      p = n.n(l),
      f = n(121),
      b = n(5);
    const h = '1' === window.navigator.doNotTrack,
      g = [
        'address',
        'addresses',
        'email',
        'emailAddress',
        'emailAddresses',
        'phoneNumber',
        'phone',
        'number',
        'name',
        'firstName',
        'lastName',
        'userSuppliedEmail',
        'initial',
        'socialAccounts',
        'text',
        'messengerCards',
        'url',
      ],
      m = [];
    let v, O;
    const _ = (e) =>
        d()(e, (e, t, n) => {
          g.indexOf(n) >= 0
            ? (e[n] = 'removedIdentifyingInfo')
            : a()(t) && !s()(t)
            ? (e[n] = _(t.toJS ? t.toJS() : t))
            : (e[n] = t);
        }),
      y = (e) =>
        h
          ? 'removedIdentifyingInfo'
          : ((e) => {
              const t = p()(e);
              return _(t);
            })(e),
      S = async (e) => {
        const {
          addTag: t,
          addExtra: r,
          logError: i,
          addBreadcrumb: o,
        } = await Object(f.a)({
          promise: () => Promise.all([n.e(52), n.e(46)]).then(n.bind(null, 459)),
        });
        t('app.id', v),
          m.forEach(({ type: e }) => o('redux-action', e)),
          O && O.getState && r('state', y(O.getState())),
          i(e);
      },
      j = (e) => {
        (e.onerror = (e, t, n, r, i) => S(i)), (e.onunhandledrejection = (e) => S(e.reason));
      },
      w = (e) => {
        e && (v = e);
      },
      E = (e) => {
        e && (O = e);
      },
      I = () =>
        function (e) {
          return function (t) {
            return m.push({ type: t.type, timestamp: +new Date() }), e(t);
          };
        };
    !Object(b.a)() &&
      null !== (r = window) &&
      void 0 !== r &&
      null !== (i = r.parent) &&
      void 0 !== i &&
      i.intercomSettings &&
      w(window.parent.intercomSettings.app_id);
  },
  function (e, t, n) {
    'use strict';
    var r = n(13),
      i = n.n(r),
      o = n(95),
      s = n(10),
      c = n(50),
      a = n(229),
      u = n(3),
      d = n(46),
      l = n(6),
      p = n(75),
      f = n(11),
      b = n(0);
    function h(e, t) {
      const { conversationId: n } = e.app;
      return 'conversation' === Object(f.f)(e) && -1 !== t.indexOf(n);
    }
    var g = n(152);
    var m = n(2),
      v = n(29);
    const O = (e) => {
        let t;
        return (...n) => {
          const r = () => e(...n);
          return (t = Promise.resolve(t).then(r, r)), t;
        };
      },
      _ = (e, t, n, r) => {
        let i = 0,
          o = 0;
        return (...s) => {
          const c = v.b.now();
          return (
            c - o >= n && ((i = 0), (o = c)),
            i++,
            i <= t
              ? e(...s)
              : (Object(m.c)(`rate_limiting.${r}`),
                Object(m.g)(`rate_limit_check_${r}`, { rate_limited: !0, rate_limit_count: n }, !0),
                Promise.reject('rate_limited_update'))
          );
        };
      };
    var y = n(8),
      S = n(57),
      j = n(15);
    const w = (e) => {
      if ('rate_limited_update' === e) return null;
      try {
        return e.errors || JSON.parse(e).errors;
      } catch (t) {
        Object(j.a)(e), Object(S.c)(e);
      }
    };
    var E = n(56),
      I = n(32),
      C = n(22),
      T = n(9);
    const A =
        'https://docs.intercom.com/configure-intercom-for-your-product-or-site/staying-secure/enable-identity-verification-on-your-web-product',
      R = {
        IDENTITY_VERIFICATION_READY_WARNING: `Intercom Messenger warning: Identity Verification is set up correctly but not enabled. For details on how to enable it, see ${A}.`,
        IDENTITY_VERIFICATION_FAILURE_WITH_USER_ID_WARNING: `Intercom Messenger warning: Your Identity Verification user_hash is invalid. Check that you are generating the user_hash with your user's user_id and your app's secret key. For more details, see ${A}.`,
        IDENTITY_VERIFICATION_FAILURE_WITH_EMAIL_WARNING: `Intercom Messenger warning: Your Identity Verification user_hash is invalid. Check that you are generating the user_hash with your user's email and your app's secret key. For more details, see ${A}.`,
      };
    var P = n(5),
      M = n(25),
      D = n.n(M);
    n.d(t, 'b', function () {
      return x;
    }),
      n.d(t, 'a', function () {
        return q;
      }),
      n.d(t, 'f', function () {
        return z;
      }),
      n.d(t, 'e', function () {
        return W;
      }),
      n.d(t, 'd', function () {
        return J;
      });
    const k = D()('intercom.actions.user');
    let N, U;
    const L = ((e, t = 6e4) => {
      let n;
      const r = () => {
          n = {};
        },
        i = (...r) => {
          const i = e(...r),
            o = n[i],
            s = Date.now();
          return !((e, n) => void 0 === n || e - n > t)(s, o) || ((n[i] = s), !1);
        };
      return (i.reset = r), r(), i;
    })((e, t, n, r) => {
      const { email: i, userId: o, userHash: s, anonymousId: c } = e;
      return JSON.stringify(
        Object.assign(
          { encryptedPayload: r },
          { url: t, email: i, userId: o, userHash: s, anonymousId: c },
          n
        )
      );
    }, 6e4);
    function x(e, t, n, r, u, f, b, v = !1, O, _ = 'unknown', S, A) {
      return async (R, M) => {
        let D,
          { app: k, session: x } = M();
        if (
          ((!N || (U !== n && k && k.features && k.features.singlePageAppRateLimiting)) && Y(n),
          (x = t || x),
          x.sessionId || (x.sessionId = C.a.generateUUID()),
          R(B(x, n, r, u, f, b, S)),
          !v && L(x, n, r, O))
        )
          return null;
        try {
          D = await N(e, M, r, O, _, S);
        } catch (e) {
          const t = w(e);
          if ('403' === ((e) => e && e[0].code)(t) && A)
            return (
              Object(j.b)(
                'This domain is not allowed for the Intercom Messenger. Add your domain here: https://app.intercom.com/a/apps/_/messenger'
              ),
              A(!0),
              null
            );
          t &&
            t.find((e) => 'App Not Found' === e.message) &&
            Object(j.b)(
              'The App ID in your code snippet is incorrect. Change it to your App ID found in settings to complete installation: http://app.intercom.com/a/apps/_/settings/web'
            ),
            R(F(e, Z(e)));
          const n = ((e) => {
            const t = w(e);
            if (!t) return;
            const n = t.find((e) => e.data);
            if (!n) return;
            const r = n.data;
            return {
              activeSubscription: r.active_subscription,
              userHashVerified: r.user_hash_verified,
              secureInstallV2: r.secure_install_v2,
              messengerEnabledForVisitors: r.messenger_enabled_for_visitors,
              messengerEnabledForUsers: r.messenger_enabled_for_users,
            };
          })(e);
          return n && R(Object(g.c)(n)), null;
        }
        Object(m.n)(D);
        const { errors: V, installModeConfig: H, notificationLinkConversationId: G } = D;
        if ((H && R(Object(g.c)(H)), V)) return null;
        if (
          (X(D, x, H),
          K(D),
          R($(D)),
          D.newConversationComposerState && R(Object(l.r)(D.newConversationComposerState)),
          Object(P.a)() || R(Object(I.b)()),
          R(Object(p.a)({ color: D.app.color, secondaryColor: D.app.secondaryColor })),
          G && R(Object(s.c)(G)),
          D.unreadConversationIds.length > 0)
        ) {
          const t = M();
          h(t, D.unreadConversationIds)
            ? R(Object(l.l)(e, t.app.conversationId))
            : R(Object(d.d)(e, 'createOrUpdateUser'));
        }
        if (
          (!Object(T.i)() && D.app.features.launcherDiscoveryMode && R(Object(o.e)()),
          !Object(P.a)())
        ) {
          var q, z, W;
          const { activeTour: e } = D,
            t =
              null ===
                (q = Object(E.a)(
                  null === (z = window) || void 0 === z
                    ? void 0
                    : null === (W = z.parent) || void 0 === W
                    ? void 0
                    : W.location
                )) || void 0 === q
                ? void 0
                : q.product_tour_id;
          i()(e) ||
            (i()(t)
              ? R(Object(I.l)(e))
              : Object(y.e)(
                  `Tour with id ${e.id} received from ping won't start because there is a tourId in the query params`
                ));
        }
        if (!Object(P.a)()) {
          const { banners: e } = D;
          i()(e) || R(Object(c.f)(e));
        }
        if (!Object(P.a)()) {
          const { survey: e } = D;
          i()(e) || R(Object(a.b)(e));
        }
        return D;
      };
    }
    function B(e, t, n, r, i, o, s) {
      return {
        type: b.N,
        session: e,
        url: t,
        customAttributes: n,
        launcherEnabledOverride: r,
        anonymousSessionDuration: i,
        customizationAttributes: o,
        internal: s,
      };
    }
    function $(e) {
      return { type: b.O, user: e };
    }
    function F(e, t = !1) {
      return { type: b.M, error: e, isIdentityVerificationError: t };
    }
    function V() {
      return { type: b.Nb };
    }
    function H(e) {
      return { type: b.Ob, response: e };
    }
    function G(e) {
      return { type: b.Mb, error: e };
    }
    function q(e) {
      return { type: b.g, anonymousSession: e };
    }
    function z() {
      return { type: b.xd };
    }
    function W() {
      return { type: b.vd };
    }
    function J(e, t, n) {
      return (r, i) => {
        const { session: o } = i();
        if (o)
          return (
            r({ type: b.K, name: t, boundEventMetadata: n }),
            e.sendBeaconEvent(o, t).catch(() => r({ type: b.L }))
          );
      };
    }
    function Y(e) {
      Q(30, 18e5, e);
    }
    function Q(e, t, n) {
      (U = n),
        (N = ((e, t, n, r) => O(_(e, t, n, r)))(
          (e, t, n, r, i, o) => {
            const { session: s } = t();
            return e.createOrUpdateUser(s, n, void 0, r, i, o, Object(m.l)());
          },
          e,
          t,
          'user_update'
        ));
    }
    function K(e) {
      const t = e.cdasBreachingLimit;
      if (!t.length) return;
      const n = 1 === t.length ? 'attribute' : 'attributes',
        r = t.join(', ');
      Object(j.b)(
        `You have reached your CDA limit and we were not able to create or update the following ${n}: ${r}. For more details, see: https://www.intercom.com/help/configure-intercom/customize-intercom-to-be-about-your-users/send-custom-user-attributes-to-intercom`
      );
    }
    function X(e, t, n = {}) {
      const { userHash: r, userId: i, email: o } = t,
        { secureInstallV2: s, secureInstallV3: c } = n;
      if (s || c) {
        if (!i && !o) return;
      } else if (!r) return;
      const a = (function (e, t) {
        if (e.identityVerificationReady) return R.IDENTITY_VERIFICATION_READY_WARNING;
        if (!e.identityVerified && t.userId)
          return R.IDENTITY_VERIFICATION_FAILURE_WITH_USER_ID_WARNING;
        if (!e.identityVerified && !t.userId)
          return R.IDENTITY_VERIFICATION_FAILURE_WITH_EMAIL_WARNING;
        return null;
      })(e, t);
      a && Object(j.b)(a);
    }
    function Z(e) {
      const t = w(e);
      if (!t) return !1;
      let n = !1;
      return (
        t.forEach((e) => {
          -1 !== e.code.indexOf('identity_verification') &&
            ((n = !0),
            Object(j.a)(`Intercom Messenger error: ${e.message} For more details, see ${A}.`));
        }),
        n
      );
    }
    t.c = {
      createOrUpdateUser: x,
      createOrUpdateUserRequest: B,
      createOrUpdateUserSuccess: $,
      createOrUpdateUserFailure: F,
      sendMessengerOpen: function (e) {
        return async (t, n) => {
          const r = n(),
            i = Object(f.f)(r),
            { session: o } = r;
          let s;
          t(V());
          try {
            s = await e.sendMessengerOpen(o, i);
          } catch (e) {
            return k('Request to messenger open failed', e), t(G(e)), null;
          }
          return t(H(s)), s;
        };
      },
      messengerOpenRequestSent: V,
      messengerOpenRequestSuccess: H,
      messengerOpenRequestFailed: G,
      destroySession: function (e = !0) {
        return { type: b.U, clearCookies: e };
      },
      anonymousSessionChanged: q,
      userIsPresent: z,
      userIsAbsent: W,
      createEvent: function (e, t, n) {
        return (r, i) => {
          const { session: o } = i();
          if (o)
            return (
              r({ type: b.K, name: t, metadata: n }),
              e
                .createEvent(o, t, n)
                .then((t) => {
                  const { banner: n, customBot: i } = t;
                  return (
                    Object(P.a)() || (n && r(Object(c.f)([n]))),
                    i && r(Object(l.o)(e, Object(u.a)(i))),
                    t
                  );
                })
                .catch(() => r({ type: b.L }))
            );
        };
      },
      triggerBoundEvent: J,
      setupCreateOrUpdateUserRateLimiting: Q,
      setupDefaultCreateOrUpdateUserRateLimiting: Y,
      isDuplicateCreateOrUpdateUserRequest: L,
      checkCdasBreachingLimit: K,
      checkIdentityVerificationInstall: X,
      checkIdentityVerificationError: Z,
    };
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return i;
    });
    var r = n(5);
    const i = () =>
      !Object(r.a)() &&
      window.parent &&
      window.parent.intercomSettings &&
      'tx2p130c' === window.parent.intercomSettings.app_id;
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'b', function () {
      return i;
    }),
      n.d(t, 'a', function () {
        return o;
      });
    var r = n(33);
    function i(e) {
      return e.requiresCookieConsent || !1;
    }
    function o(e) {
      if (!e) return !0;
      if (!(e.requiresCookieConsent || !1)) return !0;
      const t = r.a.read('gtm_cookie_consent');
      return (
        !!t &&
        (function (e) {
          const {
            advertising: t,
            marketing: n,
            analytics: r,
            performance: i,
          } = Object.fromEntries(e.split('+').map((e) => [e, !0]));
          return { advertising: !!t, analytics: !!r, marketing: !!n, performance: !!i };
        })(t).analytics
      );
    }
  },
  ,
  function (e, t, n) {
    'use strict';
    n.d(t, 'b', function () {
      return u;
    }),
      n.d(t, 'g', function () {
        return d;
      }),
      n.d(t, 'k', function () {
        return l;
      }),
      n.d(t, 'e', function () {
        return p;
      }),
      n.d(t, 'i', function () {
        return h;
      }),
      n.d(t, 'j', function () {
        return v;
      }),
      n.d(t, 'd', function () {
        return m;
      }),
      n.d(t, 'f', function () {
        return b;
      }),
      n.d(t, 'a', function () {
        return g;
      }),
      n.d(t, 'h', function () {
        return O;
      }),
      n.d(t, 'c', function () {
        return c;
      });
    var r = n(1),
      i = n(224),
      o = n(11),
      s = n(30);
    const c = (e) => e.homeScreen,
      a = (e, t) => e.some((e) => e.slotType === t),
      u = Object(r.createSelector)(c, ({ matchedSlots: e = [] } = {}) => a(e, 'help_center')),
      d = Object(r.createSelector)(c, ({ fetchedSlots: e = [] } = {}) => a(e, 'help_center')),
      l = Object(r.createSelector)(
        c,
        ({ matchedSlots: e = [] }) => a(e, 'help_center') || a(e, 'messenger_app')
      ),
      p = Object(r.createSelector)([d, o.o, o.b], (e, t, n) => (!e || !t) && n),
      f = Object(r.createSelector)(
        c,
        ({ fetchedSlots: e = [] }) =>
          0 === e.findIndex((e) => 'new_conversation_card' === e.slotType)
      ),
      b = Object(r.createSelector)([i.a], (e = []) => e.length > 0),
      h = Object(r.createSelector)([b, f], (e, t) => !!e || !t),
      g = Object(r.createSelector)(
        [s.a, (e) => e.homeScreen.hasMoreConversations],
        (e, t) => e.length > 0 || t
      ),
      m = Object(r.createSelector)([b, g], (e, t) => !e && t),
      v = o.n,
      O = Object(r.createSelector)([b, p, g], (e, t, n) => !e && !t && n);
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return c;
    });
    var r = n(1);
    const i = ['left', 'right'],
      o = (e) => Math.max(e || 20, 20),
      s = (e) => (((e) => i.indexOf(e) >= 0)(e) ? e : 'right'),
      c = Object(r.createSelector)(
        (e) => e.app,
        (e) => e.customizationOverrides,
        (e, t = {}) => {
          const {
              alignment: n,
              horizontalPadding: r,
              verticalPadding: i,
              color: c,
              secondaryColor: a,
            } = e,
            {
              alignment: u,
              horizontalPadding: d,
              verticalPadding: l,
              color: p,
              secondaryColor: f,
            } = t;
          return {
            alignment: s(u || n),
            horizontalPadding: o(d || r),
            verticalPadding: o(l || i),
            color: p || c,
            secondaryColor: f || a,
          };
        }
      );
    t.b = c;
  },
  ,
  ,
  ,
  ,
  function (e, t, n) {
    'use strict';
    var r = n(1),
      i = n(30),
      o = n(7);
    const s = Object(r.createSelector)(i.a, (e) =>
      e.filter((e) => {
        return (
          !e.read &&
          'whatsapp' !== e.currentChannel &&
          !e.forceSnippet &&
          ((1 === (t = e).parts.length && 'full' === t.parts[0].notificationType) ||
            Object(o.i)(e)) &&
          'pointer' !== e.messageType &&
          !Object(o.n)(e) &&
          !e.preventEndUserReplies
        );
        var t;
      })
    );
    t.a = Object(r.createSelector)(
      (e) => {
        const {
          conversations: { byId: t },
          message: { conversationId: n },
        } = e;
        return t[n];
      },
      s,
      (e, t) => {
        return (
          (n = t),
          void 0 === (r = e) ||
          ((e, t) => void 0 !== e.find((e) => e.id === t.id))(n, r) ||
          Object(o.n)(r)
            ? n
            : n.concat(r)
        );
        var n, r;
      }
    );
  },
  ,
  function (e, t, n) {
    'use strict';
    n.d(t, 'b', function () {
      return i;
    }),
      n.d(t, 'a', function () {
        return o;
      }),
      n.d(t, 'c', function () {
        return s;
      });
    var r = n(0);
    function i(e, t) {
      return { type: r.Vb, conversationId: e, partId: t };
    }
    function o() {
      return { type: r.s };
    }
    function s(e, t) {
      return { type: r.jc, conversationId: e, partId: t };
    }
  },
  ,
  ,
  ,
  function (e, t, n) {
    'use strict';
    t.a = (e) => Object.keys(e).map((t) => e[t]);
  },
  function (e, t, n) {
    'use strict';
    function r(e) {
      return Math.pow((e + 0.055) / 1.055, 2.4);
    }
    function i(e) {
      const t = e[0] / 255,
        n = e[1] / 255,
        i = e[2] / 255;
      return (
        0.2126 * (t <= 0.03928 ? t * (1 / 12.92) : r(t)) +
        0.7152 * (n <= 0.03928 ? n * (1 / 12.92) : r(n)) +
        0.0722 * (i <= 0.03928 ? i * (1 / 12.92) : r(i))
      );
    }
    function o(e) {
      let t = 255;
      8 === (e = e.replace(/^#/, '')).length &&
        ((t = parseInt(e.slice(6, 8), 16)), (e = e.substring(0, 6))),
        4 === e.length && ((t = parseInt(e.slice(3, 4).repeat(2), 16)), (e = e.substring(0, 3))),
        3 === e.length && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
      const n = parseInt(e, 16);
      return [n >> 16, (n >> 8) & 255, 255 & n, t];
    }
    function s(e, t) {
      return (function (e, t) {
        return (Math.max(e, t) + 0.05) / (Math.min(e, t) + 0.05);
      })(i(e), i(t));
    }
    function c(e, t) {
      return s(o(e), o(t));
    }
    var a = n(96),
      u = n(0);
    n.d(t, 'b', function () {
      return l;
    }),
      n.d(t, 'a', function () {
        return p;
      });
    const d = (e, t, n, r) =>
        (c(t[r], e) >= n ? r : null) || Object.keys(t).find((r) => c(t[r], e) >= n) || r,
      l = (e) => ({ type: u.Jc, tabNavigation: e }),
      p = ({ color: e, secondaryColor: t }) => ({
        type: u.Ac,
        accessibilityTheme: d(e, a.a, 2, 'default'),
        secondaryAccessibilityTheme: d(t, a.a, 2, 'light'),
      });
  },
  ,
  function (e, t, n) {
    'use strict';
    n.d(t, 'c', function () {
      return r;
    }),
      n.d(t, 'd', function () {
        return i;
      }),
      n.d(t, 'e', function () {
        return o;
      }),
      n.d(t, 'a', function () {
        return s;
      }),
      n.d(t, 'h', function () {
        return c;
      }),
      n.d(t, 'g', function () {
        return a;
      }),
      n.d(t, 'b', function () {
        return u;
      }),
      n.d(t, 'f', function () {
        return d;
      }),
      n.d(t, 'i', function () {
        return l;
      });
    const r = 'send-data-to-messenger',
      i = 'send-data-to-sheet',
      o = 'set-iframe-src',
      s = 'close',
      c = 'submit-sheet',
      a = 'start-navigation',
      u = 'finish-navigation',
      d = 'set-title';
    function l(e, t, n) {
      return { intercomSheet: { type: e, payload: t, meta: { proxy: n } } };
    }
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'b', function () {
      return d;
    });
    var r = n(5),
      i = n(12),
      o = n(0);
    function s(e, t) {
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
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? s(Object(n), !0).forEach(function (t) {
              a(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : s(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function a(e, t, n) {
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
    const u = (() => {
      var e, t, n;
      const i = 'composer-suggestions-disabled-at';
      if (Object(r.a)()) return i;
      const o =
        null === (e = window) || void 0 === e
          ? void 0
          : null === (t = e.parent) || void 0 === t
          ? void 0
          : null === (n = t.intercomSettings) || void 0 === n
          ? void 0
          : n.app_id;
      return o ? `${o}-${i}` : i;
    })();
    const d = {
      loading: !1,
      isViewed: !1,
      isDismissed:
        (function () {
          const e = parseInt(i.a.get(u));
          return !!e && Date.now() - e < 2592e6;
        })() || !1,
      suggestions: [],
      prompt: [],
      priority: 0,
    };
    t.a = function (e = d, t) {
      switch (t.type) {
        case o.y:
          return '' === t.composerContent ? c(c({}, e), {}, { isViewed: !1 }) : e;
        case o.Bc: {
          var n;
          const { priority: r } = t,
            i =
              e.isViewed ||
              (null == t
                ? void 0
                : null === (n = t.composerSuggestions) || void 0 === n
                ? void 0
                : n.suggestions.length) > 0;
          return r < e.priority
            ? e
            : t.composerSuggestions
            ? c(c(c({}, e), t.composerSuggestions), {}, { priority: r, loading: !1, isViewed: i })
            : c(c({}, d), {}, { isViewed: e.isViewed, isDismissed: e.isDismissed, priority: r });
        }
        case o.Dc:
          return c(c({}, e), {}, { loading: t.loadingStatus });
        case o.Cc:
          return (r = Date.now()), i.a.set(u, r), c(c({}, e), {}, { isDismissed: !0 });
        default:
          return e;
      }
      var r;
    };
  },
  function (e, t, n) {
    'use strict';
    var r = n(37),
      i = n.n(r),
      o = n(130),
      s = n(10),
      c = n(47),
      a = n(6),
      u = n(11);
    var d = n(22);
    const l = {};
    var p = n(25),
      f = n.n(p),
      b = n(0);
    n.d(t, 'a', function () {
      return O;
    }),
      n.d(t, 'b', function () {
        return _;
      }),
      n.d(t, 'c', function () {
        return y;
      }),
      n.d(t, 'd', function () {
        return S;
      }),
      n.d(t, 'e', function () {
        return j;
      });
    const h = f()('intercom.actions.triggers'),
      g = { 'open-messenger-loading-view': s.h },
      m = {
        'show-conversation': function (e, t) {
          return async (n, r) => {
            if ('conversation' !== Object(u.f)(r()))
              return await n(Object(a.l)(e, t.id)), n(Object(c.a)(t.id, !0));
          };
        },
      },
      v = {};
    function O(e, t) {
      return (n) => {
        n(
          (function (e) {
            return { type: b.e, trigger: e };
          })(e)
        ),
          (function (e, t, n) {
            try {
              const { selector: r, event: o, id: s } = e,
                c = window.parent.document.querySelector(r),
                a = i()(
                  () =>
                    (function (e, t, n) {
                      h(`Handling event (triggerId=${e})`), t(y(e, n));
                    })(s, t, n),
                  3e3,
                  { leading: !0, trailing: !1 }
                ),
                u = () => {
                  h(`${o} event fired from ${r} (triggerId=${s})`), a();
                };
              c.addEventListener(o, u),
                (v[s] = { targetElement: c, boundHandler: u }),
                h(`Attached ${o} event handler to ${r}`);
            } catch (e) {
              h(`Couldnt attach the messenger trigger to the DOM due to e=${e}`);
            }
          })(e, n, t);
      };
    }
    function _(e) {
      return (t, n) => {
        !(function (e, t) {
          try {
            const { selector: n, event: r } = Object(o.c)(e)(t),
              { targetElement: i, boundHandler: s } = v[e];
            i.removeEventListener(r, s), h(`Detached ${r} event handler from ${n}`);
          } catch (e) {
            h(`Couldn't detach the messenger trigger to the DOM due to e=${e}`);
          } finally {
            delete v[e];
          }
        })(e, n()),
          t(
            (function (e) {
              return { type: b.nc, triggerId: e };
            })(e)
          );
      };
    }
    function y(e, t) {
      return async (n, r) => {
        const i = Object(o.c)(e);
        try {
          i(r());
        } catch (t) {
          return void h(`Rejected trigger=${e} as it's no longer present in the store`);
        }
        try {
          await (async function (e) {
            return new Promise((t) => {
              if (l[e]) throw new Error(`Multiple events of type=${e} fired`);
              (l[e] = !0),
                setTimeout(async () => {
                  (l[e] = !1), t();
                }, 0);
            });
          })('messenger-trigger-fire');
        } catch (t) {
          return void h(`Rejected trigger=${e} as multiple triggers were fired in same tick`);
        }
        try {
          const o = r(),
            { session: s } = o,
            c = i(o),
            u = Object(d.b)(),
            l = { clientId: u, createdAt: new Date() };
          n(
            (function (e) {
              return { type: b.a, triggerId: e };
            })(e)
          ),
            n(
              (function (e) {
                return (t) => {
                  const n = g[e.preAction];
                  if ('function' == typeof n) return t(n());
                  throw `Invalid PRE ACTION type for trigger=${e.id}`;
                };
              })(c)
            ),
            n(Object(a.h)(l, !1));
          const p = await t.fireTrigger(s, { triggerId: String(e), clientAssignedUUID: u });
          n(w(t, p)), n({ type: b.S });
        } catch (e) {
          n({ type: b.b }), n(Object(a.g)(null)), h(`Couldnt fire messenger trigger due to e=${e}`);
        }
      };
    }
    function S(e, t) {
      return async (n, r) => {
        const i = r(),
          { session: o } = i,
          s = await e.outboundPreview(o, t);
        n(w(e, s));
      };
    }
    function j(e) {
      return (t, n) => {
        try {
          const r = n();
          t(y(Object(o.a)(r).id, e));
        } catch (e) {
          h('Couldnt retry firing messenger trigger');
        }
      };
    }
    function w(e, t) {
      return (n) => {
        const { action: r, data: i } = t,
          o = m[r];
        if (o) return n(o(e, i));
        throw `Invalid POST ACTION type for trigger_action=${r}`;
      };
    }
  },
  ,
  function (e, t, n) {
    'use strict';
    var r = n(17),
      i = n(5);
    n.d(t, 'a', function () {
      return s;
    }),
      n.d(t, 'c', function () {
        return c;
      }),
      n.d(t, 'b', function () {
        return a;
      }),
      n.d(t, 'd', function () {
        return l;
      });
    const o = [],
      s = (e) => {
        u(e);
        const t = document.createElement('meta');
        (t.id = 'intercom-viewport-meta'),
          (t.name = 'viewport'),
          (t.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'),
          e.document.getElementsByTagName('head')[0].appendChild(t);
      },
      c = (e) => {
        const t = e.document.getElementById('intercom-viewport-meta');
        t && (t.parentNode.removeChild(t), d(e));
      },
      a = () => {
        const e = Object(r.c)();
        return e.innerWidth <= 450 || (e.innerWidth <= 900 && e.innerHeight <= 450);
      },
      u = (e) => {
        [].slice.call(e.document.getElementsByTagName('meta')).forEach((e) => {
          'viewport' === e.name && (o.push(e.cloneNode()), e.parentNode.removeChild(e));
        });
      },
      d = (e) => {
        const t = o.length;
        for (let n = 0; n < t; n++) e.document.getElementsByTagName('head')[0].appendChild(o.pop());
      },
      l = () => {
        if (!Object(i.a)())
          try {
            a() && !window.parent.navigator.standalone && window.parent.scrollTo(0, 0);
          } catch (e) {}
      };
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'c', function () {
      return o;
    }),
      n.d(t, 'g', function () {
        return s;
      }),
      n.d(t, 'e', function () {
        return c;
      }),
      n.d(t, 'h', function () {
        return a;
      }),
      n.d(t, 'i', function () {
        return u;
      }),
      n.d(t, 'f', function () {
        return d;
      }),
      n.d(t, 'a', function () {
        return l;
      }),
      n.d(t, 'd', function () {
        return p;
      }),
      n.d(t, 'b', function () {
        return f;
      });
    var r = n(1);
    const i = (e) => e.browseMode,
      o = Object(r.createSelector)(i, ({ isOpen: e }) => e),
      s = Object(r.createSelector)(i, ({ routedToNewConversation: e }) => e),
      c = (e) => {
        var t;
        return null === (t = e.browseMode) || void 0 === t ? void 0 : t.phrase;
      },
      a = (e) => {
        var t;
        return null === (t = e.browseMode) || void 0 === t ? void 0 : t.searchedPhrase;
      },
      u =
        (Object(r.createSelector)(i, (e) => e.articleHistory || []),
        Object(r.createSelector)(i, (e) => e.skipOpenAnimation)),
      d = Object(r.createSelector)(
        o,
        s,
        u,
        (e) => e.user,
        (e, t, n, r) => ({
          isOpen: e,
          transitioningToNewConversation: t,
          skipOpenAnimation: n,
          user: r,
        })
      ),
      l = Object(r.createSelector)(i, ({ hasViewedAnArticle: e }) => e),
      p = Object(r.createSelector)(
        i,
        ({ phrase: e, hideResultsWithDelay: t, searchResults: n }) => (e || t) && 0 === n.length
      ),
      f = Object(r.createSelector)(i, ({ closeTransitionEnded: e } = {}) => !e);
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return o;
    }),
      n.d(t, 'b', function () {
        return s;
      });
    var r = n(17);
    const i = [
        'password',
        'passwd',
        'secret',
        'api_key',
        'apikey',
        'access_token',
        'auth_token',
        'credentials',
        'mysql_pwd',
        'stripetoken',
      ],
      o = () => {
        var e;
        return null === (e = Object(r.d)()) || void 0 === e ? void 0 : e.host;
      },
      s = (e) =>
        e
          ? (i.forEach((t) => {
              e = c(e, t, '***');
            }),
            e)
          : e,
      c = (e, t, n) => {
        const r = new RegExp('([?&])' + t + '=.*?(&|$)', 'i');
        return e.match(r) ? e.replace(r, '$1' + t + '=' + n + '$2') : e;
      };
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'e', function () {
      return s;
    }),
      n.d(t, 'b', function () {
        return c;
      }),
      n.d(t, 'c', function () {
        return a;
      }),
      n.d(t, 'd', function () {
        return d;
      }),
      n.d(t, 'a', function () {
        return l;
      });
    var r = n(0);
    let i, o;
    function s() {
      return (e, t) => {
        const {
          launcherDiscoveryMode: {
            hasDiscoveredLauncher: n,
            isLauncherDiscoveryModeOpening: i,
            isLauncherDiscoveryModeClosing: o,
          },
        } = t();
        n ||
          i ||
          o ||
          (setTimeout(() => {
            e({ type: r.Ub });
          }, 6e3),
          u(e));
      };
    }
    function c() {
      i && clearTimeout(i), o && clearTimeout(o);
    }
    function a() {
      return (e) => {
        u(e);
      };
    }
    const u = (e) => {
      (i = setTimeout(() => e({ type: r.r }), 9500)), (o = setTimeout(() => e(l()), 10200));
    };
    function d() {
      return { type: r.Pb };
    }
    function l() {
      return { type: r.V };
    }
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return r;
    });
    const r = { default: '#3b99fc', dark: '#38373e', light: '#cdcecd' };
  },
  ,
  ,
  function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return u;
    }),
      n.d(t, 'b', function () {
        return d;
      }),
      n.d(t, 'c', function () {
        return l;
      });
    var r = n(5),
      i = n(9),
      o = n(26);
    let s = {},
      c = {};
    const a = (e, t) => ({
        get: (t) => {
          const n = e[`intercom.${t}`];
          return void 0 === n ? null : n;
        },
        set: (n, r) => {
          Object(o.l)(`intercom.${n}`, r, t), (e[`intercom.${n}`] = r);
        },
        remove: (e) => Object(o.j)(`intercom.${e}`, t),
        clear: () => {},
      }),
      u = () => {
        Object(r.a)() &&
          Object(o.g)((e) => {
            (c = i.a.hasLocalStorageSupport() ? e.sessionStorage : {}),
              (s = i.a.hasLocalStorageSupport() ? e.localStorage : {});
          });
      },
      d = () => a(s, 'localStorage'),
      l = () => a(c, 'sessionStorage');
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return s;
    }),
      n.d(t, 'b', function () {
        return c;
      }),
      n.d(t, 'c', function () {
        return a;
      });
    var r = n(5),
      i = n(26);
    let o = '';
    const s = () => (Object(r.a)() ? o : parent.document.cookie),
      c = (e) => (o = e),
      a = (e) => (Object(r.a)() ? (Object(i.m)(e), c(e)) : (parent.document.cookie = e), e);
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'b', function () {
      return d;
    }),
      n.d(t, 'a', function () {
        return l;
      });
    var r = n(25),
      i = n.n(r),
      o = n(6),
      s = n(22),
      c = n(40),
      a = n(0);
    const u = i()('intercom.actions.predictive-answers');
    function d(e, t, n = !1) {
      return async (r, i) => {
        try {
          const a = void 0,
            u = i(),
            { session: d, newConversation: p, user: f } = u,
            b = Object(s.b)(),
            h = {
              clientId: b,
              body: Object(c.c)(t.text),
              createdAt: new Date(),
              composerSuggestionItem: t,
            };
          r(l(null)), r(Object(o.h)(h, n));
          const g = await e.fireComposerSuggestion(d, {
            conversationId: a,
            suggestion: t,
            clientId: b,
            botIntro: p ? p.botIntroId : null,
            articleUrl: p ? p.articleUrl : null,
            resolutionBotBehaviorVersionId: f ? f.resolutionBotBehaviorVersionId : null,
          });
          r(Object(o.i)(g, null, null, Date.now(), 'predictive_answer'));
        } catch (e) {
          r(Object(o.g)(null)), u(`Couldnt start conversation from suggestion due to e=${e}`);
        }
      };
    }
    function l(e) {
      return { type: a.Gc, predictiveAnswersSuggestions: e };
    }
  },
  function (e, t, n) {
    'use strict';
    var r = n(13),
      i = n.n(r),
      o = n(1),
      s = n(12),
      c = n(220);
    t.a = Object(o.createSelector)(
      [(e) => e.app, (e) => e.user, (e) => e.launcher, c.a],
      (e, t, n, r) =>
        !r &&
        (function (e, t) {
          const {
            inboundMessages: n,
            outboundMessages: r,
            anonymousInboundMessages: i,
          } = e.features;
          return 'user' === t.role ? n || r : i;
        })(e, t) &&
        (function (e) {
          switch (e.launcherEnabledOverride) {
            case 'show':
              return !0;
            case 'hide':
              return !1;
            default:
              return e.isLauncherEnabled;
          }
        })(n) &&
        !(function () {
          const e = s.b.get('intercom-snippet__intersection-mode');
          return (
            !i()(e) &&
            !(-1 !== ['inbound-custom-bot-preview', 'outbound-custom-bot-preview'].indexOf(e))
          );
        })()
    );
  },
  ,
  function (e, t, n) {
    'use strict';
    t.a = (e) =>
      'participant_added' === e ||
      'participant_removed' === e ||
      'article_feedback_requested' === e ||
      'temporary_expectations' === e;
  },
  function (e, t, n) {
    'use strict';
    let r, i;
    n.d(t, 'a', function () {
      return s;
    }),
      n.d(t, 'f', function () {
        return c;
      }),
      n.d(t, 'e', function () {
        return a;
      }),
      n.d(t, 'c', function () {
        return u;
      }),
      n.d(t, 'b', function () {
        return d;
      }),
      n.d(t, 'd', function () {
        return l;
      });
    let o = !1;
    const s = () => r,
      c = (e) => (r = e),
      a = (e) => (i = e),
      u = () => i,
      d = () => !o,
      l = (e) => (o = e);
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    'use strict';
    var r = n(2),
      i = n(5);
    const o = { maxRetries: 3 };
    t.a = ({ promise: e, maxRetries: t } = o) => {
      let n = 0;
      const s = Object(i.a)() ? window.requestAnimationFrame : window.parent.requestAnimationFrame,
        c = (i, o) => {
          e().then(
            (e) => i(e),
            (e) => {
              n < t && s
                ? ((n += 1), window.setTimeout(() => s(() => c(i, o)), 1e3 * n))
                : (Object(r.g)('dynamicImportCdnError', { message: e && e.message }), o(e));
            }
          );
        };
      return new Promise((e, t) => c(e, t));
    };
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'd', function () {
      return o;
    }),
      n.d(t, 'c', function () {
        return s;
      }),
      n.d(t, 'e', function () {
        return c;
      }),
      n.d(t, 'a', function () {
        return a;
      }),
      n.d(t, 'b', function () {
        return u;
      }),
      n.d(t, 'g', function () {
        return d;
      }),
      n.d(t, 'f', function () {
        return l;
      }),
      n.d(t, 'h', function () {
        return f;
      });
    var r = n(1);
    const i = (e) => e.messengerSheet,
      o =
        (Object(r.createSelector)(i, (e) => e.isSheetsDataLoading),
        Object(r.createSelector)(i, (e) => e.isSheetsDataLoaded)),
      s = Object(r.createSelector)(i, (e) => e.isProxyLoaded),
      c = Object(r.createSelector)(i, (e) => e.sheetTitle),
      a = Object(r.createSelector)(i, (e) => e.isNavigating),
      u = Object(r.createSelector)(i, (e) => e.isOpen),
      d = Object(r.createSelector)(i, (e) => e.sourceCard),
      l = Object(r.createSelector)(i, (e) => e.url),
      p = Object(r.createSelector)(i, (e) => e.data),
      f = Object(r.createSelector)(p, (e) => JSON.stringify(e));
  },
  ,
  ,
  function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return i;
    }),
      n.d(t, 'b', function () {
        return o;
      });
    const r = (e) => {
        const t = function (t) {
            return e[t];
          },
          n = '(?:' + Object.keys(e).join('|') + ')',
          r = RegExp(n),
          i = RegExp(n, 'g');
        return function (e) {
          return (e = null == e ? '' : '' + e), r.test(e) ? e.replace(i, t) : e;
        };
      },
      i = r({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '`': '&#x60;',
      }),
      o = r({
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#x27;': "'",
        '&#x60;': '`',
        '&#39;': "'",
      });
  },
  function (e, t, n) {
    'use strict';
    var r = n(1);
    t.a = Object(r.createSelector)(
      (e) => e.openInboundConversationIds,
      (e) => (null == e ? void 0 : e.length) > 0
    );
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'b', function () {
      return i;
    }),
      n.d(t, 'a', function () {
        return o;
      });
    var r = n(0);
    function i(e) {
      return { type: r.J, customizationAttributes: e };
    }
    function o(e) {
      return { type: r.C, customizationAttributes: e };
    }
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return r;
    });
    const r = { TOUR: 0, BANNER_VIEW: 11 };
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return o;
    });
    var r = n(0);
    let i;
    function o(e, t) {
      return (n) => {
        n({ type: r.Kc, payload: { alertType: e, alertPayload: t } }),
          i && clearTimeout(i),
          (i = setTimeout(() => {
            n({ type: r.n });
          }, 5e3));
      };
    }
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'b', function () {
      return c;
    }),
      n.d(t, 'c', function () {
        return a;
      }),
      n.d(t, 'a', function () {
        return u;
      });
    var r = n(1);
    const i = (e) => e.triggers,
      o = Object(r.createSelector)(i, (e) => e.triggers),
      s = Object(r.createSelector)(i, (e) => e.active),
      c = Object(r.createSelector)(i, (e) => e.failed),
      a = (e) =>
        Object(r.createSelector)(o, (t) => {
          const n = t[e];
          if (n) return n;
          throw new Error(`Can't find the messenger trigger of id=${e}`);
        }),
      u = Object(r.createSelector)(o, s, (e, t) => {
        const n = e[t];
        if (n) return n;
        throw new Error('No messenger trigger is active');
      });
  },
  ,
  ,
  function (e, t, n) {
    'use strict';
    var r = n(0);
    function i(e, t) {
      return async (n, i) => {
        const o = i(),
          { session: s } = o;
        let c;
        if (!t.payload || !t.payload.conversationId)
          throw new Error('conversationId needs to be provided as a parameter');
        c = t.payload.conversationId;
        try {
          n({ type: r.dd, payload: { timestamp: Date.now() } }),
            n(
              (function (e) {
                return { type: r.ed, payload: e, conversation: e };
              })(await e.triggerTransitions(s, c, t))
            );
        } catch (e) {
          n(
            ((a = e),
            {
              type: r.cd,
              error: !0,
              payload: new Error(
                (a || 'An error occured when triggering Operator transition.').toString()
              ),
            })
          );
        }
        var a;
      };
    }
    var o = n(3),
      s = n(2),
      c = n(23),
      a = n(82),
      u = n(157);
    function d(e) {
      return { type: r.ec, article: e };
    }
    function l(e, t, n = !1, i = !1, o = null, s = '') {
      return {
        type: r.Qb,
        articleId: e,
        fromBrowseMode: n,
        metricMetadata: t,
        conversationId: o,
        forceTransitionComplete: i,
        hash: s,
      };
    }
    function p(e, t, n = !1) {
      return async (t, r) => {
        const { session: i, app: s } = r(),
          { conversationId: c } = s;
        return t(d(await o.b.getArticle(i, e, c, n)));
      };
    }
    function f(e, t, n = !1, r = !1) {
      return async (i, o) => {
        const { app: s } = o(),
          { conversationId: c } = s;
        await i(p(e, 0, n)), i(l(e, t, n, r, c));
      };
    }
    function b(e) {
      return (t, n) => {
        const { session: r } = n(),
          i = e.split('#')[1] || '';
        return o.b
          .getArticleByURL(r, e)
          .then((e) => {
            t(d(e)), t(l(e.id, null, !0, !0, null, i));
          })
          .catch(() => {
            const t = Object(u.b)().createElement('a');
            (t.target = '_blank'), (t.href = e), t.click();
          });
      };
    }
    function h(e) {
      return (t, n) => {
        const { user: i, article: o } = n(),
          a = e ? 'expanded' : 'collapsed';
        Object(s.h)(i, a, c.c, c.i, 'messenger', {
          article_id: null == o ? void 0 : o.activeArticleId,
        }),
          t({ type: r.Zc, isExpanded: e });
      };
    }
    function g() {
      return { type: r.db };
    }
    function m() {
      return { type: r.h };
    }
    function v(e) {
      return (t, n) => {
        const o = n(),
          u = Object(a.c)(o);
        if ((t({ type: r.o, closedAt: new Date() }), u)) {
          const { user: e, article: t } = o;
          Object(s.h)(e, 'closed', c.c, c.i, 'messenger', {
            article_id: null == t ? void 0 : t.activeArticleId,
          });
        } else {
          const { conversationId: n } = o.app;
          t(i(e, { type: 'closed_article', payload: { conversationId: n } }));
        }
      };
    }
    function O(e, t, n, r) {
      return (i, o) => {
        const { user: a } = o();
        return (
          Object(s.h)(a, 'clicked', c.f, c.i, 'messenger', { reaction_index: n }),
          i(_(e, t, n, r, 'messenger', 'search_browse'))
        );
      };
    }
    function _(e, t, n, i, o = 'help_center', s = null) {
      return (c, a) => {
        c({ type: r.B, articleId: t, reactionIndex: n });
        const { session: u } = a();
        return e.createArticleReaction(u, t, n, !1, i, o, s);
      };
    }
    function y() {
      return { type: r.i };
    }
    n.d(t, 'i', function () {
      return l;
    }),
      n.d(t, 'h', function () {
        return p;
      }),
      n.d(t, 'g', function () {
        return f;
      }),
      n.d(t, 'j', function () {
        return b;
      }),
      n.d(t, 'k', function () {
        return h;
      }),
      n.d(t, 'f', function () {
        return g;
      }),
      n.d(t, 'a', function () {
        return m;
      }),
      n.d(t, 'c', function () {
        return v;
      }),
      n.d(t, 'e', function () {
        return O;
      }),
      n.d(t, 'd', function () {
        return _;
      }),
      n.d(t, 'b', function () {
        return y;
      });
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    'use strict';
    n.d(t, 'c', function () {
      return o;
    }),
      n.d(t, 'a', function () {
        return s;
      }),
      n.d(t, 'b', function () {
        return c;
      });
    var r = n(3),
      i = n(0);
    function o(e) {
      const {
        activeSubscription: t,
        userHashVerified: n,
        secureInstallV2: r,
        messengerEnabledForVisitors: o,
        messengerEnabledForUsers: s,
      } = e;
      return {
        type: i.Tb,
        activeSubscription: t,
        userHashVerified: n,
        secureInstallV2: r,
        messengerEnabledForVisitors: o,
        messengerEnabledForUsers: s,
      };
    }
    function s() {
      return { type: i.q };
    }
    function c() {
      return (e, t) => {
        const { session: n } = t();
        return r.b.disableInstallMode(n).then(() => {
          e(s());
        });
      };
    }
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'c', function () {
      return u;
    }),
      n.d(t, 'a', function () {
        return l;
      }),
      n.d(t, 'b', function () {
        return p;
      });
    var r = n(37),
      i = n.n(r),
      o = n(3),
      s = n(2),
      c = n(23),
      a = n(0);
    function u(e, t = !0) {
      return (n, r) => {
        const { session: i, user: u } = r();
        return (
          Object(s.h)(u, 'submitted', c.e, c.i, 'messenger', { phrase: e }),
          n(
            (function (e, t) {
              return { type: a.rc, phrase: e, immediate: t };
            })(e, t)
          ),
          o.b
            .searchArticles(i, e)
            .then((t) => {
              n(
                (function (e, t) {
                  return { type: a.sc, searchResults: t.articles, phrase: e };
                })(e, t)
              );
            })
            .catch(() => {
              n(
                (function (e) {
                  return { type: a.qc, phrase: e };
                })(e)
              );
            })
        );
      };
    }
    const d = i()((e, t) => e(u(t, !1)), 500, { leading: !1, trailing: !0 });
    function l(e) {
      return (t) => {
        d(t, e);
      };
    }
    function p(e) {
      return (t, n) => {
        const { session: r } = n();
        return (
          t(
            (function (e) {
              return { type: a.nb, collectionId: e };
            })(e)
          ),
          o.b
            .getArticleSectionsInCollection(r, e)
            .then((n) => {
              t(
                (function (e, t) {
                  return { type: a.ob, collectionId: e, articleSections: t };
                })(e, n)
              );
            })
            .catch((n) => {
              t(
                (function (e, t) {
                  return { type: a.mb, collectionId: e, error: t };
                })(e, n)
              );
            })
        );
      };
    }
  },
  ,
  ,
  function (e, t, n) {
    'use strict';
    t.a = (e) => {
      try {
        return window.btoa(unescape(encodeURIComponent(e)));
      } catch (t) {
        return e;
      }
    };
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'f', function () {
      return s;
    }),
      n.d(t, 'd', function () {
        return c;
      }),
      n.d(t, 'e', function () {
        return a;
      }),
      n.d(t, 'a', function () {
        return u;
      }),
      n.d(t, 'c', function () {
        return d;
      }),
      n.d(t, 'b', function () {
        return l;
      }),
      n.d(t, 'g', function () {
        return f;
      }),
      n.d(t, 'h', function () {
        return b;
      });
    var r = n(21),
      i = n(17);
    const o = (e) => {
        var t, n;
        if (
          null !== (t = window) &&
          void 0 !== t &&
          null !== (n = t.parent) &&
          void 0 !== n &&
          n.document
        )
          return window.parent.document.querySelector(e);
      },
      s = () => {
        var e;
        return (null === (e = Object(i.c)()) || void 0 === e ? void 0 : e.innerHeight) || 0;
      },
      c = () => o('[name="intercom-modal-frame"]'),
      a = () => o('[name="intercom-note-frame"]'),
      u = () => o('[name="intercom-borderless-frame"]'),
      d = () => o('[name="intercom-messenger-frame"]'),
      l = () => {
        const e = d();
        if (e) return e.contentDocument;
      },
      p = () => {
        const e = o('[name="intercom-launcher-frame"]');
        if (e) return e.contentDocument;
      },
      f = () => p() && Object(r.i)(p())[0],
      b = () => l() && Object(r.i)(l())[0];
  },
  function (e, t) {
    e.exports = {
      source_map: 'hidden-source-map',
      api_base: 'https://api-iam.intercom.io',
      public_path: 'https://js.intercomcdn.com/',
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
  function (e, t, n) {
    'use strict';
    n.d(t, 'b', function () {
      return r;
    }),
      n.d(t, 'a', function () {
        return i;
      });
    const r = 300,
      i = 'ease-in-out';
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'f', function () {
      return l;
    }),
      n.d(t, 'e', function () {
        return p;
      }),
      n.d(t, 'b', function () {
        return f;
      }),
      n.d(t, 'a', function () {
        return b;
      }),
      n.d(t, 'c', function () {
        return h;
      }),
      n.d(t, 'd', function () {
        return g;
      });
    var r = n(13),
      i = n.n(r),
      o = n(153),
      s = n(2),
      c = n(10),
      a = n(23),
      u = n(3),
      d = n(0);
    function l(e, t) {
      return (n) => {
        '' !== e && n(Object(o.a)(e)), n({ type: d.od, phrase: e, hideResultsWithDelay: t });
      };
    }
    function p(e) {
      return (t, n) => {
        const r = n(),
          { user: c, articleCollections: u } = r;
        Object(s.h)(c, 'clicked', a.d, a.i, 'messenger', { collection_id: e });
        const l = u.find((t) => t.id === e);
        t({ type: d.zc, collectionId: e }),
          i()(null == l ? void 0 : l.sections) && t(Object(o.b)(e));
      };
    }
    function f() {
      return (e, t) => {
        const n = t(),
          { user: r, articleCollections: i } = n;
        Object(s.h)(r, 'clicked', a.h, 'home-screen', 'messenger'),
          e(Object(c.k)()),
          1 === i.length && e(p(i[0].id));
      };
    }
    function b() {
      return (e, t) => {
        const { session: n } = t();
        Object(u.c)(n).then((t) => {
          e(
            (function (e) {
              return { type: d.fc, articleCollections: e };
            })(t)
          );
        });
      };
    }
    function h() {
      return { type: d.uc };
    }
    function g() {
      return { type: d.vc };
    }
  },
  ,
  ,
  function (e, t, n) {
    'use strict';
    function r(e) {
      return void 0 !== e.AndroidHost ? e.AndroidHost : void 0 !== e.iOSHost ? e.iOSHost : void 0;
    }
    function i(e) {
      return void 0 !== e.AndroidHost ? 'android' : void 0 !== e.iOSHost ? 'ios' : void 0;
    }
    n.d(t, 'a', function () {
      return r;
    }),
      n.d(t, 'b', function () {
        return i;
      });
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'c', function () {
      return h;
    }),
      n.d(t, 'd', function () {
        return m;
      }),
      n.d(t, 'a', function () {
        return v;
      }),
      n.d(t, 'b', function () {
        return _;
      });
    var r = n(37),
      i = n.n(r),
      o = n(3),
      s = n(6),
      c = n(22),
      a = n(40),
      u = n(2),
      d = n(43),
      l = n(0);
    let p = 0,
      f = '',
      b = !1;
    function h(e, t) {
      return (n, r) => {
        const i = r(),
          { composerSuggestions: o } = Object(d.b)(i);
        if (!o || !o.isDismissed) return (f = e), g(n, r, t);
      };
    }
    const g = i()(
      function e(t, n, r) {
        const i = ++p,
          s = f,
          c = n(),
          { session: a } = c,
          { composerSuggestions: l } = Object(d.b)(c);
        if (!l || !l.loading)
          return (
            (b = !1),
            t(O(!0, r)),
            Object(o.d)(a, s, 3).then((o) => {
              if ((t(O(!1, r)), t(v(o, r, i)), b && f !== s)) return g.cancel(), void e(t, n, r);
              const c = Object.assign({}, { query: s, conversation_id: r }, o);
              Object(u.e)(
                'received',
                'composer_smart_suggestions',
                'messenger',
                {},
                c,
                'm4_metric'
              );
            })
          );
        b = !0;
      },
      150,
      { leading: !1, trailing: !0 }
    );
    function m(e, t, n, r = !1, i, o) {
      return async (u, d) => {
        const l = d(),
          p = (null == t ? void 0 : t.id) || null,
          { session: f, newConversation: b, user: h } = l,
          g = Object(c.b)(),
          m = new Date();
        if ((u(v(null, p)), p)) {
          const c = {
            conversationId: p,
            clientId: g,
            createdAt: m,
            body: Object(a.c)(n.text),
            composerSuggestionItem: n,
          };
          try {
            u(Object(s.e)(p, c, r)),
              await e.fireComposerSuggestion(f, { conversationId: p, suggestion: n, clientId: g }),
              u(Object(s.f)(p, c, i, t.lastParticipatingAdmin, o, !1, m, !0));
          } catch (e) {
            u(Object(s.d)(p, c, e));
          }
        } else {
          const t = {
            clientId: g,
            body: Object(a.c)(n.text),
            createdAt: m,
            composerSuggestionItem: n,
          };
          try {
            u(Object(s.h)(t, r));
            const i = await e.fireComposerSuggestion(f, {
              conversationId: p,
              suggestion: n,
              clientId: g,
              botIntro: b ? b.botIntroId : null,
              articleUrl: b ? b.articleUrl : null,
              resolutionBotBehaviorVersionId: h ? h.resolutionBotBehaviorVersionId : null,
            });
            u(Object(s.i)(i, null, null, m, 'resolution_bot_auto_suggest'));
          } catch (e) {
            u(Object(s.g)(null));
          }
        }
      };
    }
    function v(e, t, n = ++p) {
      return { type: l.Bc, conversationId: t, composerSuggestions: e, priority: n };
    }
    function O(e, t) {
      return { type: l.Dc, conversationId: t, loadingStatus: e };
    }
    function _(e) {
      return { type: l.Cc, conversationId: e };
    }
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'd', function () {
      return h;
    }),
      n.d(t, 'b', function () {
        return g;
      }),
      n.d(t, 'h', function () {
        return m;
      }),
      n.d(t, 'a', function () {
        return v;
      }),
      n.d(t, 'f', function () {
        return O;
      }),
      n.d(t, 'g', function () {
        return _;
      }),
      n.d(t, 'c', function () {
        return y;
      }),
      n.d(t, 'e', function () {
        return S;
      });
    var r = n(166),
      i = n(31),
      o = n(159),
      s = n(77),
      c = n(226),
      a = n(122),
      u = n(10),
      d = n(11),
      l = n(2),
      p = n(129),
      f = n(70),
      b = n(0);
    function h(e, t) {
      return (n, r) => {
        const { intercomSheet: i } = t.data || {},
          o = r(),
          u = Object(a.g)(o);
        if (!i) return null;
        switch (i.type) {
          case c.b:
            n(y());
            break;
          case s.g:
            n(_());
            break;
          case s.b:
            n(y());
            break;
          case s.a:
            n(v('sheet_api_close'));
            break;
          case s.f:
            if (!i.payload) return;
            n(O(i.payload.title));
            break;
          case s.h:
            if (!u) return null;
            n(_()), n(m(e, i.payload));
        }
      };
    }
    function g(e, t, n, r, i) {
      return (o, s) => {
        const {
          app: { isMessengerOpen: c },
          session: a,
        } = s();
        return (
          c || o(Object(u.l)()),
          o(
            (function (e, t, n) {
              return { type: b.Yb, url: e, cardUri: t, componentId: n };
            })(r, t, n)
          ),
          o(j()),
          o(Object(f.a)()),
          e
            .fetchMessengerSheetData(a, t, n, i)
            .then((e) => {
              o(w(e));
            })
            .catch(() => {
              o(E());
            })
        );
      };
    }
    function m(e, t) {
      return (n, s) => {
        const c = s(),
          { cardUri: u } = Object(a.g)(c),
          { session: d } = c;
        return e
          .submitSheet(d, u, t)
          .then((t) => {
            n(Object(r.b)(t)), n(Object(i.a)(e, t));
          })
          .then(() => new Promise((e) => setTimeout(e, 2 * o.b)))
          .then(() => {
            n(y()), n(v('sheet_api_submit'));
          })
          .catch(() => {
            n(Object(p.a)('MessengerSheetSubmitError', { sheetValues: t }));
          });
      };
    }
    function v(e) {
      return (t, n) => {
        const r = n(),
          i = Object(a.g)(r),
          { cardUri: o } = i,
          { card: s } = r.messengerCards[o];
        if (s) {
          const { url: t } = r.messengerSheet,
            {
              user: n,
              app: { conversationId: i },
            } = r;
          !(function (e, t, n, r, i, o) {
            l.j.buildAndAddMetric(
              e,
              'closed',
              'messenger_sheet',
              'messenger',
              t,
              { url: n, messenger_card_uri: r, messenger_app_id: i, conversation_id: o },
              'm4_metric'
            );
          })(
            n,
            'sheet_api_submit' === e || 'sheet_api_close' === e ? e : Object(d.f)(r),
            t,
            o,
            s.messenger_app_id,
            i
          );
        }
        t({ type: b.v });
      };
    }
    function O(e) {
      return { type: b.Ic, sheetTitle: e };
    }
    function _() {
      return { type: b.Sc };
    }
    function y() {
      return { type: b.lb };
    }
    function S(e = !1) {
      return { type: b.Hc, isLoaded: e };
    }
    const j = () => ({ type: b.gb }),
      w = (e) => ({ type: b.hb, data: e }),
      E = () => ({ type: b.fb });
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return c;
    }),
      n.d(t, 'b', function () {
        return u;
      });
    var r = n(48),
      i = n(31),
      o = n(129),
      s = n(0);
    const c = (e, t, n, r) => (s, c) => {
        const { session: l } = c();
        return (
          s(a(t, n)),
          e
            .submitMessengerCardAction(l, t, n, r)
            .then((t) => {
              s(u(t)), s(Object(i.a)(e, t));
            })
            .catch(() => {
              s(d(t, n)),
                s(
                  Object(o.a)('MessengerCardSubmitError', {
                    cardUri: t,
                    componentId: n,
                    inputValues: r,
                  })
                );
            })
        );
      },
      a = (e, t) => ({ type: s.Xc, cardUri: e, componentId: t }),
      u = (e) => ({ type: s.Yc, card: Object(r.c)(e) }),
      d = (e, t) => ({ type: s.Wc, cardUri: e, componentId: t });
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'b', function () {
      return i;
    }),
      n.d(t, 'c', function () {
        return o;
      });
    var r = n(1);
    t.a = Object(r.createSelector)([(e) => e.survey], (e) => {
      if (e && !e.dismissed) return e;
    });
    const i = Object(r.createSelector)([(e) => e.survey], (e) => {
        if (!e) return [];
        const t = [];
        return (
          e.steps.forEach((e) => {
            e.questions.forEach((e) => {
              t.push({ question_id: e.id, response: e.response });
            });
          }),
          t
        );
      }),
      o = Object(r.createSelector)([(e) => e.survey], (e) => {
        if (!e || e.dismissed) return;
        const { activeStepId: t } = e;
        return e.steps.find((e) => e.id === t);
      });
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'c', function () {
      return o;
    }),
      n.d(t, 'a', function () {
        return s;
      }),
      n.d(t, 'e', function () {
        return c;
      }),
      n.d(t, 'b', function () {
        return a;
      }),
      n.d(t, 'd', function () {
        return u;
      });
    var r = n(36),
      i = n(0);
    function o(e) {
      return { type: i.Sb, stage: e.stage, eventData: e.eventData };
    }
    function s(e, t) {
      return Object(r.h)(e, t), { type: i.j, newStage: t };
    }
    function c(e, t) {
      return Object(r.g)(e, t), { type: i.fd, eventData: t };
    }
    function a(e) {
      return Object(r.d)(e), { type: i.p };
    }
    function u(e, t) {
      return Object(r.e)(e, t), { type: i.pc, eventData: t };
    }
  },
  function (e, t, n) {
    'use strict';
    var r = n(30),
      i = n(7),
      o = n(1);
    const s = Object(o.createSelector)([r.a, (e) => e.dismissedPointers], (e, t) =>
      e.filter((e) => !(e.read && t[e.id]) && Object(i.n)(e))
    );
    t.a = Object(o.createSelector)(
      (e) => {
        const {
          conversations: { byId: t },
          pointerMessage: { conversationId: n },
        } = e;
        return t[n];
      },
      s,
      (e, t) => {
        return (
          (n = t),
          void 0 !== (r = e) &&
          !((e, t) => void 0 !== e.find((e) => e.id === t.id))(n, r) &&
          Object(i.n)(r)
            ? n.concat(r)
            : n
        );
        var n, r;
      }
    );
  },
  function (e, t, n) {
    'use strict';
    var r = n(9);
    const i = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    n.d(t, 'a', function () {
      return o;
    }),
      n.d(t, 'b', function () {
        return s;
      });
    const o = (e) => {
        const t = (e = e || '').match(/[^\x00-\x7F]/);
        if (!e || (r.a.isSafari() && t)) {
          const t = e.split('.');
          (e = `File${new Date().getTime()}`), t.length > 1 && (e += `.${t[t.length - 1]}`);
        }
        return e;
      },
      s = (e, t, n) => {
        if (!e) return;
        let r;
        if (e.split(',')[0].indexOf('base64') >= 0) {
          const t = e.split(',')[1];
          r = window.atob
            ? atob(t)
            : ((e) => {
                if (!e || e.length % 4 != 0)
                  throw new Error('Invalid string. Length must be a multiple of 4');
                let t = 0;
                const n = e.length,
                  r = e.indexOf('=') > 0 ? e.length - e.indexOf('=') : 0,
                  o = new Uint8Array((3 * n) / 4 - r),
                  s = new Array(4);
                for (let n = 0; n < e.length; n += 4)
                  (s[0] = i.indexOf(e[n])),
                    (s[1] = i.indexOf(e[n + 1])),
                    (s[2] = i.indexOf(e[n + 2])),
                    (s[3] = i.indexOf(e[n + 3])),
                    (o[t++] = 255 & ((s[0] << 2) | (s[1] >> 4))),
                    s[2] < 64 &&
                      ((o[t++] = 255 & ((s[1] << 4) | (s[2] >> 2))),
                      s[3] < 64 && (o[t++] = 255 & ((s[2] << 6) | s[3])));
                let c = '';
                for (let e = 0; e < o.length; e++) c += String.fromCharCode(parseInt(o[e]));
                return c;
              })(t);
        } else r = unescape(e.split(',')[1]);
        const o = new Uint8Array(r.length);
        for (let e = 0; e < r.length; e++) o[e] = r.charCodeAt(e);
        const s = new Blob([o], { type: n });
        return (s.lastModifiedDate = new Date()), (s.name = t), s;
      };
  },
  function (e, t, n) {
    'use strict';
    var r = n(164),
      i = n(101),
      o = n(51),
      s = n(6),
      c = n(10),
      a = n(40),
      u = n(22);
    function d(e, t, n, r, i = null, o = !1, d = !1, l, p) {
      return (f, b) => {
        const h = b(),
          { session: g, borderless: m } = h;
        let v;
        v = 'message' === n.partType ? null : n.id;
        const O = (function (e) {
            if (e && e.clientId) return e.clientId;
            return Object(u.b)();
          })(i),
          _ = new Date(),
          y = Object(a.c)(r.text),
          S = {
            conversationId: t,
            clientId: O,
            createdAt: _,
            body: y,
            selectedReplyOption: { replyOption: r, quickReplyPart: n },
          };
        return (
          f(Object(s.e)(t, S, o)),
          (m && m.conversationId) || f(Object(c.f)(t)),
          e
            .quickReply(g, t, v, r, O)
            .then((e) => {
              f(Object(s.f)(t, e, d, l, p, !1, _));
            })
            .catch((e) => {
              f(Object(s.d)(t, S, e));
            })
        );
      };
    }
    var l = n(2);
    function p(e, t, n, s = !1, c, a, u) {
      return 'messenger_suggested_content' === n.type
        ? Object(r.d)(e, t, n, s, a, u)
        : 'quick_reply' === n.type
        ? (c.replyOptions &&
            -1 === c.replyOptions.map((e) => e.uuid).indexOf(n.uuid) &&
            (Object(l.c)('quick_reply_uuid_mismatch'),
            Object(l.g)('quick_reply_uuid_mismatch'),
            Object(l.b)(`quick_reply_uuid_mismatch partId=${c.id} uuid=${n.uuid}`)),
          d(e, t.id, c, n))
        : 'predictive_answer' === n.type
        ? Object(i.b)(e, n, s)
        : Object(o.c)(e, n, s);
    }
    n.d(t, 'a', function () {
      return p;
    });
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    'use strict';
    t.a = function (e) {
      var t;
      e &&
        e.Element &&
        ('function' != typeof (t = e.Element.prototype).matches &&
          (t.matches =
            t.msMatchesSelector ||
            t.mozMatchesSelector ||
            t.webkitMatchesSelector ||
            function (e) {
              const t = this,
                n = (t.document || t.ownerDocument).querySelectorAll(e);
              let r = 0;
              for (; n[r] && n[r] !== t; ) ++r;
              return Boolean(n[r]);
            }),
        'function' != typeof t.closest &&
          (t.closest = function (e) {
            let t = this;
            for (; t && 1 === t.nodeType; ) {
              if (t.matches(e)) return t;
              t = t.parentNode;
            }
            return null;
          }));
    };
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return c;
    }),
      n.d(t, 'b', function () {
        return d;
      }),
      n.d(t, 'c', function () {
        return l;
      });
    var r = n(5);
    function i(e, t) {
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
    function o(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? i(Object(n), !0).forEach(function (t) {
              s(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : i(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
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
    const c = n(158),
      { assign: a } = Object;
    function u() {
      var e;
      if (Object(r.a)()) return;
      const t = window.parent || window;
      return t
        ? (null == t
            ? void 0
            : null === (e = t.intercomSettings) || void 0 === e
            ? void 0
            : e.api_base) ||
            (function (e) {
              const t = e.document.querySelector('meta[name=intercom-js-api-base]');
              return null == t ? void 0 : t.content;
            })(t)
        : void 0;
    }
    function d() {
      const e = a({}, c),
        t = { api_base: u() };
      return t.api_base ? (console.log('Overriding config', t), o(o({}, e), t)) : e;
    }
    function l() {
      return !1;
    }
  },
  ,
  ,
  function (e, t, n) {
    'use strict';
    var r = n(1);
    t.a = Object(r.createSelector)([(e) => e.session], (e) => !(!e || !e.token));
  },
  ,
  function (e, t, n) {
    'use strict';
    n.d(t, 'c', function () {
      return o;
    }),
      n.d(t, 'd', function () {
        return c;
      }),
      n.d(t, 'b', function () {
        return a;
      }),
      n.d(t, 'a', function () {
        return u;
      });
    var r = n(46),
      i = n(0);
    function o(e, t) {
      return (n, i) => {
        const { session: o } = i();
        return (
          n(s(o, t)),
          e.createOrUpdateUser(o, null, t, 'updateUserSuppliedEmail').then((i) => {
            n(c(i, t)),
              i.unreadConversationIds.length > 0 && n(Object(r.d)(e, 'updateUserSuppliedEmail'));
          })
        );
      };
    }
    function s(e, t) {
      return { type: i.rd, session: e, userSuppliedEmail: t };
    }
    function c(e, t) {
      return { type: i.sd, user: e, userSuppliedEmail: t };
    }
    function a(e, t) {
      return (n, r) => {
        const { session: o } = r();
        return (
          n({ type: i.ld }),
          e
            .updatePhoneNumber(o, t)
            .then(() => {
              n(
                (function (e) {
                  return { type: i.md, phoneNumber: e };
                })(t)
              );
            })
            .catch((e) => {
              let t;
              e && (t = JSON.parse(e).message),
                n(
                  (function (e) {
                    return { type: i.kd, message: e };
                  })(t)
                );
            })
        );
      };
    }
    function u() {
      return { type: i.Gb };
    }
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return i;
    });
    var r = n(0);
    const i = (e) => ({ type: r.ab, conversationId: e });
  },
  function (e, t, n) {
    'use strict';
    var r = n(1),
      i = n(237);
    t.a = Object(r.createSelector)(i.a, ({ recentConversations: e }) =>
      e.filter((e) => !e.preventEndUserReplies)
    );
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return a;
    });
    var r = n(98),
      i = n.n(r),
      o = n(71),
      s = n.n(o),
      c = n(1);
    const a = Object(c.createSelector)(
      (e) => e.inboundSuggestions,
      (e) => {
        if (!e) return null;
        if (e.previewSuggestions) return e.previewSuggestions;
        return e.allSuggestions && e.allSuggestions.length > 0
          ? i()(s()(e.allSuggestions, 'priority', 'asc'))
          : null;
      }
    );
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return r;
    }),
      n.d(t, 'b', function () {
        return i;
      });
    const r = 'html-loaded',
      i = 'sheet-loaded';
  },
  ,
  function (e, t, n) {
    var r = {
      './failed.mp3': 412,
      './notification.mp3': 413,
      './operator.mp3': 414,
      './submit.mp3': 415,
    };
    function i(e) {
      var t = o(e);
      return n(t);
    }
    function o(e) {
      if (!n.o(r, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = 'MODULE_NOT_FOUND'), t);
      }
      return r[e];
    }
    (i.keys = function () {
      return Object.keys(r);
    }),
      (i.resolve = o),
      (e.exports = i),
      (i.id = 228);
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'b', function () {
      return s;
    }),
      n.d(t, 'c', function () {
        return c;
      }),
      n.d(t, 'a', function () {
        return u;
      }),
      n.d(t, 'd', function () {
        return d;
      });
    var r = n(3),
      i = n(167),
      o = n(0);
    function s(e) {
      return { type: o.hc, survey: e };
    }
    function c(e, t) {
      return { type: o.kc, questionId: e, response: t };
    }
    function a(e) {
      return { type: o.bb, surveyId: e };
    }
    function u(e, t) {
      return (n, i) => {
        const { session: o } = i();
        r.b.dismissSurvey(o, e, t), n(a(e));
      };
    }
    function d(e, t, n) {
      return async (s, c) => {
        const u = c(),
          d = Object(i.b)(u),
          l = await r.b.submitSurvey(u.session, e, t, n, d),
          { complete: p, next_step: f, survey_id: b } = l;
        b === e &&
          s(
            p && !f
              ? a(e)
              : (function (e, t) {
                  return { type: o.ic, surveyId: e, surveyStep: t };
                })(e, f)
          );
      };
    }
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return i;
    });
    var r = n(12);
    const i = () => !!r.b.get('intercom-snippet__intersection-mode');
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return f;
    }),
      n.d(t, 'b', function () {
        return b;
      });
    var r = n(123),
      i = n.n(r),
      o = n(52),
      s = n.n(o),
      c = n(31),
      a = n(46),
      u = n(3),
      d = n(62),
      l = n(160),
      p = n(0);
    const f = () => (e, t) => {
        const { matchedSlots: n, fetchedSlots: r, isFetched: o, isFetching: c } = t().homeScreen;
        if (c) return;
        const a = !s()(
          n,
          r.map((e) => i()(e, 'uri'))
        );
        return !o || a ? e(b(u.b)) : void 0;
      },
      b = (e) => async (t, n) => {
        t(h());
        const r = n(),
          { session: i, app: o, homeScreen: s } = r;
        Object(d.b)(r) && t(Object(l.a)());
        const u = await e.getHomeScreenCards(i, {
          homeScreenSlots: s.matchedSlots,
          selfServeSuggestionsMatch: o.selfServeSuggestionsMatch,
        });
        if ((t(Object(a.e)(u)), !1 === u.cardsSuccess))
          return t(m(u.conversations)), t(v("Couldn't load apps"));
        const p = u.cards || u;
        return (
          p.forEach((n) => t(Object(c.a)(e, n))),
          t(
            g(
              p.map((e) => ({ uri: e.uri, messengerCardId: e.messenger_card_id })),
              u.conversations,
              u.hasMoreConversations,
              u.openInboundConversationIds
            )
          )
        );
      },
      h = () => ({ type: p.Ab }),
      g = (e, t, n, r) => ({
        type: p.Bb,
        cards: e,
        conversations: t,
        hasMoreConversations: n,
        openInboundConversationIds: r,
      }),
      m = (e) => ({ type: p.Cb, conversations: e }),
      v = (e) => ({ type: p.zb, error: e });
  },
  function (e, t, n) {
    'use strict';
    var r = n(1);
    t.a = Object(r.createSelector)([(e) => e.app], (e) => e.isMessengerOpen);
  },
  function (e, t, n) {
    'use strict';
    var r = n(1);
    t.a = Object(r.createSelector)([(e) => e.accessibility], (e) => e);
  },
  function (e, t, n) {
    'use strict';
    var r = n(1),
      i = n(161),
      o = n.n(i),
      s = n(63);
    t.a = Object(r.createSelector)(s.b, ({ color: e, secondaryColor: t }) => {
      if (!e || !t) return {};
      const {
        gradient_start_color: n,
        gradient_end_color: r,
        button_text_color: i,
      } = o()({ primaryColor: e, secondaryColor: t, darkenAmount: 20 });
      return {
        primaryColor: e,
        secondaryColor: t,
        gradientStartColor: n,
        gradientEndColor: r,
        buttonTextColor: i,
      };
    });
  },
  function (e, t, n) {
    'use strict';
    var r = n(1);
    t.a = Object(r.createSelector)(
      [(e) => e.app],
      (e) => e.isBooted || e.bootFailed || (e.isBooting && e.isInstantBootEnabled)
    );
  },
  function (e, t, n) {
    'use strict';
    var r = n(1);
    t.a = Object(r.createSelector)([(e) => e.user], (e) => (e ? e.locale : void 0));
  },
  function (e, t, n) {
    'use strict';
    var r = n(72),
      i = n.n(r),
      o = n(1),
      s = n(30),
      c = n(7),
      a = n(126),
      u = Object(o.createSelector)(
        (e) => e.user,
        s.a,
        (e) => e.openInboundConversationIds,
        a.a,
        (e, t, n, r) => {
          const i = Object(c.t)(t);
          return r && e.preventMultipleInboundConversation && (null == i ? void 0 : i.length) > 0
            ? i.filter(((o = n), (e) => -1 !== o.indexOf(e.id)))
            : [];
          var o;
        }
      );
    t.a = Object(o.createSelector)(
      s.a,
      (e) => e.newConversation,
      u,
      (e, t, n) => {
        const r = Object(c.t)(e),
          o = i()([...n, ...r.filter(d)], (e) => e.id);
        return (
          t && 1 === t.parts.length && 'saving' === t.parts[0].saveState && o.unshift(t),
          { recentConversations: o }
        );
      }
    );
    function d(e) {
      const t = Date.now() - 2592e5;
      return e.lastPartCreatedAt > t;
    }
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    e.exports = n(251);
  },
  function (e, t, n) {
    'use strict';
    n.r(t);
    n(252);
    var r = n(5);
    void 0 !== window &&
      void 0 !== window.Object &&
      (!Object(r.a)() &&
        window.parent.__INTERCOM_REACT_DEV_TOOLS__ &&
        (window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = window.parent.__REACT_DEVTOOLS_GLOBAL_HOOK__),
      n(420));
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    var r = {
      './ar.json': [421, 7],
      './bg.json': [422, 8],
      './bs.json': [423, 9],
      './ca.json': [424, 10],
      './cs.json': [425, 11],
      './da.json': [426, 12],
      './de-form.json': [427, 13],
      './de.json': [428, 14],
      './el.json': [429, 15],
      './en.json': [219],
      './es.json': [430, 16],
      './et.json': [431, 17],
      './fi.json': [432, 18],
      './fr.json': [433, 19],
      './he.json': [434, 20],
      './hr.json': [435, 21],
      './hu.json': [436, 22],
      './id.json': [437, 23],
      './it.json': [438, 24],
      './ja.json': [439, 25],
      './ko.json': [440, 26],
      './lt.json': [441, 27],
      './lv.json': [442, 28],
      './mn.json': [443, 29],
      './nb.json': [444, 30],
      './nl.json': [445, 31],
      './package.json': [446, 32],
      './pl.json': [447, 33],
      './pt-BR.json': [448, 34],
      './pt.json': [449, 35],
      './ro.json': [450, 36],
      './ru.json': [451, 37],
      './sl.json': [452, 38],
      './sr.json': [453, 39],
      './sv.json': [454, 40],
      './tr.json': [455, 41],
      './vi.json': [456, 42],
      './zh-CN.json': [457, 43],
      './zh-TW.json': [458, 44],
    };
    function i(e) {
      if (!n.o(r, e))
        return Promise.resolve().then(function () {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = 'MODULE_NOT_FOUND'), t);
        });
      var t = r[e],
        i = t[0];
      return Promise.all(t.slice(1).map(n.e)).then(function () {
        return n.t(i, 3);
      });
    }
    (i.keys = function () {
      return Object.keys(r);
    }),
      (i.id = 382),
      (e.exports = i);
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    e.exports = n.p + 'audio/failed.4da3027c.mp3';
  },
  function (e, t, n) {
    e.exports = n.p + 'audio/notification.20576730.mp3';
  },
  function (e, t, n) {
    e.exports = n.p + 'audio/operator.2b750c4a.mp3';
  },
  function (e, t, n) {
    e.exports = n.p + 'audio/submit.3abafccd.mp3';
  },
  ,
  ,
  ,
  ,
  function (e, t, n) {
    'use strict';
    n.r(t);
    var r = n(184),
      i = n(11),
      o = n(81),
      s = n(33),
      c = n(27),
      a = n(102),
      u = n(19),
      d = n(51),
      l = n(127),
      p = n(32),
      f = n(165),
      b = n(3),
      h = n(1);
    const g = (e) => e.operator,
      m = Object(h.createSelector)(g, (e) => e.lastComposerEvent),
      v = Object(h.createSelector)(g, (e) => e.clientsideMessageConditions);
    class Predicate {
      constructor(e) {
        (this.chain = e), (this.matched = !1);
      }
      trigger() {
        this.triggering ||
          ((this.triggering = !0),
          (this.matched = !0),
          this.chain.evaluate(),
          (this.triggering = !1));
      }
      evaluate() {
        return this.matched;
      }
      cancel() {}
    }
    class composite_predicate_CompositePredicate extends Predicate {
      constructor(e, t) {
        super(e), (this.predicates = t);
      }
      cancel() {
        this.predicates.forEach((e) => e.cancel());
      }
    }
    class and_predicate_AndPredicate extends composite_predicate_CompositePredicate {
      evaluate() {
        return this.predicates.every((e) => e.evaluate());
      }
    }
    class duration_predicate_DurationPredicate extends Predicate {
      constructor(e, t) {
        super(e), (this.interval = t), (this.timer = setTimeout(() => this.trigger(), t));
      }
      cancel() {
        clearTimeout(this.timer);
      }
    }
    var O = n(17);
    function _(e, t, n) {
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
    class time_on_page_predicate_TimeOnPagePredicate extends Predicate {
      constructor(e, t) {
        super(e),
          _(this, '_getURL', () => {
            var e;
            return null === (e = Object(O.d)()) || void 0 === e ? void 0 : e.href.toLowerCase();
          }),
          _(this, '_setURL', () => (this.url = this._getURL())),
          (this.interval = t),
          this._setTimeOnPageTimeout();
      }
      _check() {
        this.url !== this._getURL() && this._resetTimeOnPage();
      }
      _resetTimeOnPage() {
        this.cancel(), (this.matched = !1), this._setTimeOnPageTimeout();
      }
      _setTimeOnPageTimeout() {
        (this.timer = setTimeout(() => this.trigger(), this.interval)),
          (this.urlCheckInterval = setInterval(() => this._check(), 100)),
          this._setURL();
      }
      evaluate() {
        return this._check(), this.matched;
      }
      cancel() {
        clearTimeout(this.timer), clearInterval(this.urlCheckInterval);
      }
    }
    class duration_delta_predicate_DurationDeltaPredicate extends Predicate {
      constructor(e, t, n) {
        super(e),
          (this.attribute = n),
          (this.interval = t),
          setTimeout(() => this._createDeltaTimer(), 0);
      }
      _createDeltaTimer() {
        this.timer = setTimeout(() => {
          this._evaluateDeltaPredicate() ? this.trigger() : this._createDeltaTimer();
        }, this._getInterval());
      }
      _getInterval() {
        const e = this.getTimestamp();
        if (!e) return this.interval;
        const t = Date.now() - e;
        return Math.max(100, this.interval - t);
      }
      _evaluateDeltaPredicate() {
        const e = this.getTimestamp();
        return !!e && Date.now() - e > this.interval;
      }
      getTimestamp() {
        return this.chain.getAttribute(this.attribute);
      }
      cancel() {
        clearTimeout(this.timer);
      }
    }
    class periodic_predicate_PeriodicPredicate extends Predicate {
      constructor(e, t, n) {
        super(e),
          (this.missing = n || !1),
          (this.interval = t),
          (this.intervalTimer = setInterval(() => {
            this._check();
          }, t));
      }
      _check() {
        this.check() ? this.trigger() : (this.matched = !1);
      }
      evaluate() {
        return this._check(), this.matched;
      }
      cancel() {
        clearInterval(this.intervalTimer);
      }
    }
    class duration_since_predicate_DurationSincePredicate extends periodic_predicate_PeriodicPredicate {
      constructor(e, t, n, r) {
        super(e, t, r), (this.attribute = n);
      }
      check() {
        const e = this.chain.getAttribute(this.attribute);
        return e ? Date.now() - e >= this.interval : this.missing;
      }
    }
    class equals_predicate_EqualsPredicate extends periodic_predicate_PeriodicPredicate {
      constructor(e, t, n, r, i) {
        super(e, t), (this.attribute = n), (this.value = r), (this.other = i);
      }
      check() {
        return this.other
          ? this.chain.getAttribute(this.other) === this.chain.getAttribute(this.attribute)
          : this.value === this.chain.getAttribute(this.attribute);
      }
    }
    class or_predicate_OrPredicate extends composite_predicate_CompositePredicate {
      evaluate() {
        return this.predicates.some((e) => e.evaluate());
      }
    }
    var y = n(21),
      S = n(26);
    var j = n(5);
    class css_selector_predicate_CssSelectorPredicate extends Predicate {
      constructor(e, t) {
        var n, r, i;
        super(e),
          (i = (e) => {
            if (this.isNodeVisible(e)) {
              if (this.matched) return;
              this.trigger();
            } else this.matched = !1;
          }),
          (r = '_check') in (n = this)
            ? Object.defineProperty(n, r, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[r] = i),
          (this.selector = t);
      }
      evaluate() {
        if (Object(j.a)())
          this.matched ||
            ((e = this.selector),
            (t = (e) => {
              this._check(e);
            }),
            Object(S.f)(
              e,
              (
                (e) => (t) =>
                  e({
                    offsetWidth: t.offsetWidth,
                    offsetHeight: t.offsetHeight,
                    getClientRects: () => t.clientRects,
                  })
              )(t)
            ));
        else {
          const e = window.parent.document.querySelector(this.selector);
          this._check(e);
        }
        var e, t;
        return this.matched;
      }
      isNodeVisible(e) {
        return e && Object(y.u)(e);
      }
    }
    class string_predicate_StringPredicate extends Predicate {
      constructor(e, t, n, r) {
        super(e), (this.targetString = t), (this.comparison = n), (this.candidateString = r);
      }
      evaluate() {
        return (this.matched = this._check()), this.matched;
      }
      _check() {
        switch (this.comparison) {
          case 'eq':
            return this.candidateString === this.targetString;
          case 'ne':
            return this.candidateString !== this.targetString;
          case 'starts_with':
            return this.targetString.startsWith(this.candidateString);
          case 'ends_with':
            return this.targetString.endsWith(this.candidateString);
          case 'contains':
            return -1 !== this.targetString.indexOf(this.candidateString);
          case 'not_contains':
            return !(-1 !== this.targetString.indexOf(this.candidateString));
          case 'known':
            return !!this.targetString && '' !== this.targetString;
          default:
            return !1;
        }
      }
    }
    class url_predicate_UrlPredicate extends string_predicate_StringPredicate {
      constructor(e, t, n) {
        var r, i, o;
        super(e),
          (o = () => {
            var e;
            return null === (e = Object(O.d)()) || void 0 === e ? void 0 : e.href.toLowerCase();
          }),
          (i = '_getURL') in (r = this)
            ? Object.defineProperty(r, i, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (r[i] = o),
          (this.targetString = this._getURL()),
          (this.comparison = t),
          (this.candidateString = null == n ? void 0 : n.toLowerCase()),
          setTimeout(() => this.evaluate(), 0),
          (this.interval = setInterval(() => this.evaluate(), 1e3));
      }
      evaluate() {
        return (
          (this.targetString = this._getURL()),
          this._check() ? this.trigger() : (this.matched = !1),
          this.matched
        );
      }
      _check() {
        switch (this.comparison) {
          case 'regex':
            return new RegExp(this.candidateString).test(this.targetString);
          default:
            return super._check();
        }
      }
      cancel() {
        clearInterval(this.interval);
      }
    }
    class predicate_chain_PredicateChain {
      constructor(e, t) {
        (this.condition = e),
          (this.callback = t),
          (this.root = new and_predicate_AndPredicate(
            this,
            this.processSubpredicates(e.predicates)
          ));
      }
      evaluate() {
        if (!this.evaluating) {
          this.evaluating = !0;
          const e = this.root.evaluate();
          return (
            e && (this.cancel(), setTimeout(() => this.callback(this.condition), 0)),
            (this.evaluating = !1),
            e
          );
        }
      }
      cancel() {
        this.root.cancel();
      }
      setContext(e) {
        this.context = e;
      }
      getAttribute(e) {
        if (this.context) return this.context[e];
      }
      processPredicate(e) {
        var t;
        switch (e.type) {
          case 'or':
            return new or_predicate_OrPredicate(this, this.processSubpredicates(e.predicates));
          case 'and':
            return new and_predicate_AndPredicate(this, this.processSubpredicates(e.predicates));
          case 'eq':
            return new equals_predicate_EqualsPredicate(
              this,
              this.parseInterval(e.interval),
              e.attribute,
              e.value,
              e.other
            );
          case 'string':
            if ('client_attributes.last_visited_url' === e.attribute)
              return new url_predicate_UrlPredicate(this, e.comparison, e.value);
          case 'duration_integer':
            return null !== (t = e.attribute) && void 0 !== t && -1 !== t.indexOf('time_on_page')
              ? new time_on_page_predicate_TimeOnPagePredicate(
                  this,
                  1e3 * this.parseInterval(e.value)
                )
              : new duration_predicate_DurationPredicate(this, 1e3 * this.parseInterval(e.value));
          case 'duration_integer_ms':
            return new duration_predicate_DurationPredicate(this, this.parseInterval(e.value));
          case 'duration_delta':
            return new duration_delta_predicate_DurationDeltaPredicate(
              this,
              this.parseInterval(e.value),
              e.attribute
            );
          case 'duration_since':
            return new duration_since_predicate_DurationSincePredicate(
              this,
              this.parseInterval(e.value),
              e.attribute,
              e.missing
            );
          case 'css_selector':
            return new css_selector_predicate_CssSelectorPredicate(this, e.value);
        }
      }
      parseInterval(e) {
        return parseInt(e, 10);
      }
      processSubpredicates(e) {
        return e ? e.map((e) => this.processPredicate(e)).filter(Boolean) : [];
      }
    }
    class predicates_matcher_PredicatesMatcher {
      constructor(e) {
        (this.callback = e), (this.isStarted = !1), (this.context = {});
      }
      start(e) {
        this.isStarted && this.shutdown(),
          (this.conditions = e),
          this._setupPredicates(e),
          (this.isStarted = !0);
      }
      shutdown() {
        this.predicateChains && this.predicateChains.forEach((e) => e.cancel()),
          (this.isStarted = !1);
      }
      setContext(e) {
        this.predicateChains && this.predicateChains.forEach((t) => t.setContext(e));
      }
      _setupPredicates(e) {
        this.predicateChains = e.map((e) => new predicate_chain_PredicateChain(e, this.callback));
      }
    }
    var w = n(6),
      E = n(31),
      I = n(7),
      C = n(0);
    function T(e) {
      return (t, n) => {
        const { session: r } = n();
        return b.b.visitorAutoMessageConditionSatisfied(r, e).then(
          (e) => {
            e &&
              (Object(I.s)(e).forEach((e) => t(Object(E.a)(b.b, e, !1))),
              t({ type: C.Ad }),
              t(Object(w.o)(b.b, e, !1, Date.now())));
          },
          () => t({ type: C.zd })
        );
      };
    }
    const A = Object(h.createStructuredSelector)({ clientsideMessageConditions: v });
    var R = function (e) {
        const t = new predicates_matcher_PredicatesMatcher((t) => {
          e.dispatch(T(t));
        });
        return () => {
          const { clientsideMessageConditions: n } = A(e.getState()),
            { conditions: r } = t;
          ((e, t) => {
            if (!t) return !1;
            if (!e && t) return !0;
            if (e.length !== t.length) return !0;
            const n = e.map((e) => e.id),
              r = t.map((e) => e.id);
            return !n.every((e) => r.indexOf(e) >= 0);
          })(r, n) && t.start(n);
        };
      },
      P = n(52),
      M = n.n(P),
      D = n(68),
      k = n(42);
    var N = n(18),
      U = n(2),
      L = n(9);
    function x(e) {
      return e.reduce((e, t) => (Object(I.m)(t) ? e : ((e[Object(I.g)(t)] = !0), e)), {});
    }
    function B(e, t) {
      const n =
        Object(k.a)(t).length > 0 &&
        (function (e, t) {
          const { forceSnippet: n } = t.notificationTypeOverrides;
          return e.filter((e) => {
            if (Object(I.m)(e)) return !1;
            const t = `${e.id}-${Object(N.a)(e.parts).id}`;
            return void 0 === n[t];
          });
        })(e, t).length > 0;
      if (Object(L.i)() && void 0 !== e.find((e) => Object(I.i)(e))) return !0;
      const r = new Date();
      return (
        r.setDate(r.getDate() - 2),
        !((t.user ? new Date(t.user.lastContactedAt) : new Date()) < r) && (e.length > 1 || n)
      );
    }
    var $ = function (e) {
        return () => {
          const t = e.getState(),
            n = x(Object(k.a)(t).slice(0, -3)),
            r = Object(D.a)(t),
            i = x(B(r, t) ? r : []);
          var o, s;
          (Object.keys(n).length > 0 || Object.keys(i).length > 0) &&
            (function (e, t, n) {
              const r = ((e) => e.notificationTypeOverrides.suppress)(e),
                i = ((e) => e.notificationTypeOverrides.forceSnippet)(e);
              return !M()(r, t) || !M()(i, n);
            })(t, n, i) &&
            e.dispatch(((o = n), (s = i), { type: C.jd, suppress: o, forceSnippet: s })),
            (function (e, t, n) {
              if (Object.keys(e).length <= 1) return;
              const r = t.filter((e) => !e.dismissed);
              if (1 !== r.length || 'full' !== r[0].parts[0].notificationType) return;
              Object(U.g)('fullMessageSuppressed', {
                messageType: r[0].parts[0].messageType,
                dismissedCount: t.length - r.length,
                isLauncherEnabled: n.isLauncherEnabled,
              });
            })(i, r, t.launcher);
        };
      },
      F = n(69),
      V = n(241),
      H = n.n(V);
    function G(e, t) {
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
    function q(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? G(Object(n), !0).forEach(function (t) {
              z(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : G(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function z(e, t, n) {
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
    const { assign: W } = Object,
      J = {
        isBooting: !1,
        isBooted: !1,
        bootFailed: !1,
        isRehydrated: !1,
        isMessengerOpen: !1,
        isWaitingForOpenContent: !1,
        isErrorReportingDisabled: !1,
        isOverrideSamplingEnabled: !1,
        isIntercomLinkEnabled: !1,
        conversationId: null,
        features: {
          anonymousInboundMessages: !1,
          googleAnalytics: !1,
          inboundMessages: !1,
          outboundMessages: !1,
        },
        boundWebEvents: [],
        isBoundEventCreatorOpen: !1,
        isInstantBootEnabled: !0,
        cookieDomain: void 0,
        viewStack: [],
        userConversationAttachmentsEnabled: !0,
        userConversationGifsEnabled: !0,
        isDeveloperWorkspace: !1,
        upfrontEmailCollection: {
          upfrontEmailCollectionSubmitted: !1,
          upfrontEmailCollectionSetting: 'never',
          upfrontEmailCollectorShowing: !1,
        },
        launcherLogoUrl: void 0,
        customGoogleAnalyticsTrackerId: void 0,
        temporaryExpectationsMessage: void 0,
        hideLightweightAppMessenger: !1,
      };
    function Y(e, t) {
      if (t === Object(i.e)(e)) return W({}, e);
      const n = [].concat(e.viewStack, [t]);
      return W({}, e, { viewStack: n });
    }
    function Q(e) {
      return W({}, e, { viewStack: [] });
    }
    function K(e) {
      return W({}, e, { viewStack: e.viewStack.slice(0, -1) });
    }
    const { assign: X } = Object,
      Z = { isLauncherEnabled: !1, launcherEnabledOverride: 'not-present' };
    const { assign: ee } = Object,
      te = { isPresent: !1 };
    const { assign: ne } = Object;
    function re(e, t) {
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
    function ie(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? re(Object(n), !0).forEach(function (t) {
              oe(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : re(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function oe(e, t, n) {
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
    const se = { id: null, parts: [], operator: null };
    const ce = {};
    const ae = {};
    function ue(e, t) {
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
    function de(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ue(Object(n), !0).forEach(function (t) {
              le(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : ue(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function le(e, t, n) {
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
    const pe = {};
    var fe = n(49),
      be = n.n(fe),
      he = n(12);
    function ge(e, t) {
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
    function me(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ge(Object(n), !0).forEach(function (t) {
              ve(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : ge(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function ve(e, t, n) {
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
    const { assign: Oe } = Object,
      _e = {
        activeArticleId: null,
        isExpanded: !1,
        expansionTransitionComplete: !1,
        isLoaded: !1,
        viewStack: [],
        transitioningBack: !1,
        inSearchBrowse: !1,
        hash: '',
      };
    function ye(e, t) {
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
    function Se(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ye(Object(n), !0).forEach(function (t) {
              je(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : ye(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function je(e, t, n) {
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
    const we = {};
    function Ee(e, t) {
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
    function Ie(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Ee(Object(n), !0).forEach(function (t) {
              Ce(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Ee(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function Ce(e, t, n) {
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
    const Te = [];
    var Ae = n(124),
      Re = n.n(Ae),
      Pe = n(76),
      Me = n.n(Pe);
    var De = function (e, t) {
      switch (t.type) {
        case C.ed:
        case C.I:
        case C.yb:
          return Object.assign({}, e, {
            attributes: e.attributes.map((e) =>
              Object.assign({}, e, {
                saveState: be()(e.value) || '' === e.value ? 'unsaved' : 'saved',
              })
            ),
          });
        case C.hd: {
          const { identifier: n, value: r } = t;
          return Object.assign({}, e, {
            attributes: e.attributes.map((e) =>
              e.identifier === n ? Object.assign({}, e, { value: r, saveState: 'saving' }) : e
            ),
          });
        }
        case C.id:
          return Object.assign({}, e, {
            attributes: e.attributes.map((e) =>
              e.identifier === t.identifier ? Object.assign({}, e, { saveState: 'saved' }) : e
            ),
          });
        case C.gd:
          return Object.assign({}, e, {
            attributes: e.attributes.map((e) =>
              e.identifier === t.identifier ? Object.assign({}, e, { saveState: 'failed' }) : e
            ),
          });
        default:
          return e;
      }
    };
    const { assign: ke } = Object;
    function Ne({
      createdAt: e,
      body: t,
      clientId: n,
      file: r,
      isMessage: i,
      selectedReplyOption: o,
      composerSuggestionItem: s,
    }) {
      return {
        body: t,
        createdAt: e,
        clientId: n,
        isMessage: i,
        file: r,
        selectedReplyOption: o,
        composerSuggestionItem: s,
        partType: i ? 'message' : 'comment',
        eventData: {},
        saveState: 'saving',
        seenState: 'not-seen-yet',
        replyOptions: [],
        author: { isAdmin: !1, isSelf: !0 },
      };
    }
    var Ue = function (e = [], t) {
        switch (t.type) {
          case C.H: {
            const {
              body: n,
              createdAt: r,
              file: i,
              composerSuggestionItem: o,
              clientId: s,
            } = t.part;
            return t.isRetry
              ? e.map((e) => ke({}, e, { saveState: 'saving' }))
              : e.concat(
                  Ne({
                    createdAt: r,
                    body: n,
                    file: i,
                    isMessage: !0,
                    composerSuggestionItem: o,
                    clientId: s,
                  })
                );
          }
          case C.G:
            return e.map((e) => ke({}, e, { saveState: 'failed', saveFailureReason: t.reason }));
          case C.E: {
            const { body: n, createdAt: r, clientId: i, file: o, selectedReplyOption: s } = t.part;
            return t.isRetry
              ? e.map((e) => (i === e.clientId ? ke({}, e, { saveState: 'saving' }) : e))
              : e.concat(
                  Ne({
                    createdAt: r,
                    body: n,
                    clientId: i,
                    file: o,
                    isMessage: !1,
                    selectedReplyOption: s,
                  })
                );
          }
          case C.F:
            return e.map((e) =>
              t.part.clientId === e.clientId ? ke({}, e, t.part, { saveState: 'saved' }) : e
            );
          case C.D:
            return e.map((e) =>
              t.part.clientId === e.clientId
                ? ke({}, e, { saveState: 'failed', saveFailureReason: t.reason })
                : e
            );
          case C.ed:
          case C.yb:
          case C.I:
            return t.conversation.parts.map((e) =>
              e.form
                ? ke({}, e, { form: De(e.form, t), saveState: e.saveState || 'saved' })
                : ke({}, e, { saveState: e.saveState || 'saved' })
            );
          case C.P:
          case C.Q:
            return e.map((e) =>
              e.reactionsReply
                ? ke({}, e, {
                    reactionsReply: {
                      reactionIndex: t.reactionIndex,
                      reactionSet: e.reactionsReply.reactionSet,
                    },
                  })
                : e
            );
          case C.k:
            return e.map((e) =>
              'conversationRating' === e.messageType
                ? ke({}, e, { conversationRating: { chosenRating: t.ratingIndex } })
                : e
            );
          case C.c:
            return e.map((e) =>
              'conversationRating' === e.messageType
                ? ke({}, e, {
                    conversationRating: ke({}, e.conversationRating, {
                      remark: t.remark,
                      submitted: !0,
                    }),
                  })
                : e
            );
          case C.qd:
            return e.map((e) =>
              t.part.clientId === e.clientId
                ? ke({}, e, { body: [ke({}, e.body[0], { progress: t.progress })] })
                : e
            );
          case C.ud:
          case C.f:
            return e.map((e) =>
              'not-seen-yet' === e.seenState ? ke({}, e, { seenState: 'seen' }) : e
            );
          case C.hd:
          case C.id:
          case C.gd:
            return e.map((e) => (e.id === t.partId ? ke({}, e, { form: De(e.form, t) }) : e));
          default:
            return e;
        }
      },
      Le = function (e = {}, t) {
        switch (t.type) {
          case C.f: {
            const { lastActiveAt: e, firstName: n, avatarUrl: r, adminId: i } = t;
            return { id: i, lastActiveAt: e, firstName: n, avatar: { square128: r } };
          }
          default:
            return e;
        }
      },
      xe = n(78);
    function Be(e, t) {
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
    function $e(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Be(Object(n), !0).forEach(function (t) {
              Fe(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Be(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function Fe(e, t, n) {
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
    const { assign: Ve } = Object,
      He = {
        fetchState: 'partial',
        isFetching: !1,
        isUpdating: !1,
        read: !0,
        dismissed: !1,
        preventEndUserReplies: !1,
        parts: [],
        participants: [],
        isEmailAttributeCollectorInserted: !1,
        composerSuggestions: xe.b,
      };
    function Ge(e, t) {
      return void 0 !== e ? e : t;
    }
    var qe = function (e = He, t) {
      switch (t.type) {
        case C.xb: {
          const { conversationId: n, isUpdating: r } = t;
          return Ve({}, e, {
            id: Ge(e.id, n),
            fetchState: Ge(e.fetchState, 'partial'),
            isFetching: !0,
            isUpdating: r,
            read: Ge(e.read, !0),
            dismissed: Ge(e.dismissed, !1),
            preventEndUserReplies: Ge(e.preventEndUserReplies, !1),
            parts: Ge(e.parts, []),
          });
        }
        case C.ed:
        case C.yb: {
          const { conversation: n } = t,
            r = n.parts.some((e) => !e.author.isAdmin);
          return (
            (n.parts = Object(I.q)(n, e)),
            (n.composerState = Object(I.p)(n, e)),
            Ve({}, e, n, {
              fetchState: 'all',
              isFetching: !1,
              isUpdating: !1,
              userParticipated: r,
              parts: Ue(e.parts, t),
            })
          );
        }
        case C.gd:
        case C.id:
        case C.I: {
          const { conversation: n } = t;
          return Ve({}, e, n, {
            fetchState: 'all',
            isFetching: !1,
            isUpdating: !1,
            userParticipated: !0,
            parts: Ue(e.parts, t),
          });
        }
        case C.A:
        case C.Jb:
          return Ve({}, e, { read: !0 });
        case C.Y:
          return Ve({}, e, { dismissed: !0 });
        case C.F:
        case C.E: {
          const { createdAt: n } = t.part;
          return Ve({}, e, { userParticipated: !0, lastPartCreatedAt: n, parts: Ue(e.parts, t) });
        }
        case C.hd:
        case C.Q:
        case C.D:
        case C.qd:
        case C.k:
        case C.c:
        case C.ud:
          return Ve({}, e, { parts: Ue(e.parts, t) });
        case C.f:
          return Ve({}, e, { lastTypingAdmin: Le(e.lastTypingAdmin, t), parts: Ue(e.parts, t) });
        case C.cb:
          return Ve({}, e, { isEmailAttributeCollectorInserted: !0 });
        case C.y:
        case C.Bc:
        case C.Cc:
        case C.Dc:
          return null == t.conversationId
            ? e
            : $e($e({}, e), {}, { composerSuggestions: Object(xe.a)(e.composerSuggestions, t) });
        default:
          return e;
      }
    };
    const { assign: ze } = Object,
      We = { isFetching: !1, pagesFetched: 0, scrollPosition: 0, byId: {} };
    function Je(e = {}, t, n, r) {
      const { fetchState: i } = e;
      return ze({}, e, { id: t, fetchState: i || 'partial', dismissed: n, read: r });
    }
    function Ye(e = {}, t) {
      switch (t.type) {
        case C.O:
        case C.sd: {
          const { unreadConversationIds: n, unreadDismissedConversationIds: r } = t.user,
            i = {};
          return (
            r && r.forEach((t) => (i[t] = Je(e[t], t, !0, !1))),
            n && n.forEach((t) => (i[t] = Je(e[t], t, !1, !1))),
            ze({}, e, i)
          );
        }
        case C.Eb: {
          const { unreadConversationIds: n, unreadDismissedConversationIds: r } =
              t.unreadConversations,
            i = {};
          return (
            r.forEach((t) => (i[t] = Je(e[t], t, !0, !1))),
            n.forEach((t) => (i[t] = Je(e[t], t, !1, !1))),
            ze({}, e, i)
          );
        }
        case C.vb:
        case C.Cb:
        case C.Bb: {
          const n = (t.conversations.conversations || t.conversations).reduce((t, n) => {
            const { id: r } = n;
            return e[r] &&
              'all' === e[r].fetchState &&
              !(function (e, t = {}, n = {}) {
                const r = Me()(t, [e, 'parts']),
                  i = Me()(n, 'parts');
                return Re()(r).id !== Re()(i).id;
              })(r, e, n)
              ? t
              : ((t[r] = (function (e = {}) {
                  return ze({}, e, {
                    fetchState: 'summary',
                    isFetching: !1,
                    isUpdating: !1,
                    parts: e.parts.map((e) => ze({}, e, { saveState: 'saved' })),
                  });
                })(n)),
                t);
          }, {});
          return ze({}, e, n);
        }
        case C.id:
        case C.I:
        case C.yb:
        case C.ed: {
          const { id: n } = t.conversation,
            r = { [n]: qe(e[n], t) };
          return ze({}, e, r);
        }
        case C.hd:
        case C.Q:
        case C.R:
        case C.xb:
        case C.E:
        case C.F:
        case C.D:
        case C.A:
        case C.Jb:
        case C.k:
        case C.gd:
        case C.c:
        case C.Cc:
        case C.Bc:
        case C.Dc: {
          const n = t.conversationId;
          if (null == n) return e;
          const r = { [n]: qe(e[n], t) };
          return ze({}, e, r);
        }
        case C.f:
        case C.ud: {
          const n = t.conversationId;
          if (void 0 === e[n]) return e;
          const r = { [n]: qe(e[n], t) };
          return ze({}, e, r);
        }
        case C.qd: {
          const n = t.conversationId;
          if (void 0 === n) return e;
          const r = { [n]: qe(e[n], t) };
          return ze({}, e, r);
        }
        case C.Y: {
          const n = t.conversationIds.reduce((n, r) => ((n[r] = qe(e[r], t)), n), {});
          return ze({}, e, n);
        }
        case C.cb: {
          const n = t.conversationId;
          if (void 0 === e[n]) return e;
          const r = { [n]: qe(e[n], t) };
          return ze({}, e, r);
        }
        default:
          return e;
      }
    }
    function Qe(e, t) {
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
    function Ke(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Qe(Object(n), !0).forEach(function (t) {
              Xe(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Qe(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function Xe(e, t, n) {
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
    const { assign: Ze } = Object,
      et = {
        isFetching: !1,
        isUpdating: !1,
        fetchState: 'all',
        read: !0,
        intercomLinkSolution: 'live-chat',
        parts: [],
        participants: [],
        composerState: { visible: !0 },
        composerSuggestions: xe.b,
        botIntroId: null,
        articleUrl: null,
      };
    const tt = {};
    const nt = { suppress: {}, forceSnippet: {} };
    const { assign: rt } = Object,
      it = { isSaving: !1, showErrorMessage: !1, errorMessage: null };
    const { assign: ot } = Object,
      st = {
        isInstallModeOpen: !1,
        installModeConfig: {
          activeSubscription: !1,
          userHashVerified: !1,
          secureInstallV2: !1,
          messengerEnabledForVisitors: !0,
          messengerEnabledForUsers: !0,
        },
      };
    const { assign: ct } = Object,
      at = { isFetching: !1, gifs: [], fetchingFailed: !1, searchTerm: null };
    var ut = n(36);
    const dt = {
      eventData: {
        selector: '',
        eventTrigger: ut.b.CLICK.key,
        name: '',
        sourceUrl: '',
        urlRegex: '',
      },
      stage: ut.a.CHOOSE_EVENT_TYPE,
    };
    var lt = n(13),
      pt = n.n(lt);
    const { assign: ft } = Object,
      bt = {
        isLauncherDiscoveryModeEnabled: !1,
        isLauncherDiscoveryModeOpening: !1,
        isLauncherDiscoveryModeClosing: !1,
        hasDiscoveredLauncher: !1,
      };
    function ht(e) {
      const {
        app: { features: t, inboundConversationsDisabled: n, officeHoursResponse: r },
        clientsideMessageConditions: i,
        clientsideRulesetConditions: o,
        role: s,
      } = e;
      return (
        !!t.launcherDiscoveryMode && !n && !(!pt()(i) || !pt()(o)) && !!be()(r) && 'visitor' === s
      );
    }
    var gt = n(61),
      mt = n.n(gt),
      vt = n(24),
      Ot = n.n(vt),
      _t = n(48);
    function yt(e, t) {
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
    function St(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? yt(Object(n), !0).forEach(function (t) {
              jt(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : yt(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function jt(e, t, n) {
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
    const wt = {};
    const Et = {
      isFetching: !1,
      isFetched: !1,
      isFailed: !1,
      matchedSlots: [],
      fetchedSlots: [],
      hasMoreConversations: !1,
    };
    function It(e, t) {
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
    function Ct(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? It(Object(n), !0).forEach(function (t) {
              Tt(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : It(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function Tt(e, t, n) {
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
    const At = {
      isOpen: !1,
      isSheetsDataLoading: !1,
      isSheetsDataLoaded: !1,
      isProxyLoaded: !1,
      isNavigating: !1,
      sourceCard: null,
      data: null,
      url: null,
      sheetTitle: '',
    };
    function Rt(e, t) {
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
    function Pt(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Rt(Object(n), !0).forEach(function (t) {
              Mt(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Rt(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function Mt(e, t, n) {
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
    const Dt = {
      composerHasContent: !1,
      lastComposerEvent: 0,
      lastArticleClosedAt: null,
      conversationIdOfLastViewedArticle: null,
      clientsideMessageConditions: null,
      clientsideRulesetConditions: null,
      lastTriggerTransitionTimestamp: null,
      userCreatedConversationAt: null,
    };
    function kt(e, t) {
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
    function Nt(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? kt(Object(n), !0).forEach(function (t) {
              Ut(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : kt(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function Ut(e, t, n) {
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
    const Lt = { isShown: !1, alertType: void 0, alertPayload: void 0 };
    function xt(e, t) {
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
    function Bt(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? xt(Object(n), !0).forEach(function (t) {
              $t(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : xt(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function $t(e, t, n) {
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
    const Ft = {};
    function Vt(e, t) {
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
    function Ht(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Vt(Object(n), !0).forEach(function (t) {
              Gt(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Vt(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function Gt(e, t, n) {
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
    const qt = {
      tabNavigation: !1,
      accessibilityTheme: 'default',
      secondaryAccessibilityTheme: 'light',
    };
    function zt(e, t) {
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
    function Wt(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? zt(Object(n), !0).forEach(function (t) {
              Jt(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : zt(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function Jt(e, t, n) {
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
    const Yt = {
      isFetching: !1,
      isFetched: !1,
      isPreviewing: !1,
      fetchingFailed: !1,
      activeTour: void 0,
      updateFailed: !1,
      videoAudioMuted: !0,
      userHasInteractedWithVideo: !1,
      endTourAnimation: '',
      isAwaitingProgress: !1,
    };
    function Qt(e, t) {
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
    function Kt(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Qt(Object(n), !0).forEach(function (t) {
              Xt(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Qt(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function Xt(e, t, n) {
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
    const Zt = { triggers: {}, active: null, failed: !1 };
    var en = n(72),
      tn = n.n(en),
      nn = n(97),
      rn = n.n(nn);
    function on(e, t) {
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
    function sn(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? on(Object(n), !0).forEach(function (t) {
              cn(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : on(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function cn(e, t, n) {
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
    const an = {
      allSuggestions: [],
      isDismissed: !1,
      serverSideSuggestions: null,
      previewSuggestions: null,
    };
    const un = [];
    function dn(e, t) {
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
    function ln(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? dn(Object(n), !0).forEach(function (t) {
              pn(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : dn(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function pn(e, t, n) {
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
    const fn = { content: null };
    function bn(e, t) {
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
    function hn(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? bn(Object(n), !0).forEach(function (t) {
              gn(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : bn(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function gn(e, t, n) {
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
    const mn = { composerSuggestions: null };
    function vn(e, t) {
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
    function On(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? vn(Object(n), !0).forEach(function (t) {
              _n(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : vn(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function _n(e, t, n) {
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
    const yn = { isActive: !1 };
    function Sn(e, t) {
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
    function jn(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Sn(Object(n), !0).forEach(function (t) {
              wn(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Sn(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function wn(e, t, n) {
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
    const En = { type: null, metadata: {} };
    function In(e, t) {
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
    function Cn(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? In(Object(n), !0).forEach(function (t) {
              Tn(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : In(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function Tn(e, t, n) {
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
    const An = {
      isOpen: !1,
      isFetching: !0,
      fetchingFailed: !1,
      phrase: '',
      searchResults: [],
      selectedArticleCollectionId: null,
      showArticleCollection: !1,
      showSearchResults: !1,
      hasSearchResults: !1,
      routedToNewConversation: !1,
      immediateSearch: !1,
      hideResultsWithDelay: !1,
      closeTransitionEnded: !0,
      searchedPhrase: '',
      hasViewedAnArticle: !1,
      skipOpenAnimation: !1,
      isViewingArticle: !1,
    };
    const Rn = [];
    function Pn(e, t) {
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
    function Mn(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Pn(Object(n), !0).forEach(function (t) {
              Dn(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Pn(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function Dn(e, t, n) {
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
    var kn = Object(F.combineReducers)({
        app: function (e = J, t) {
          switch (t.type) {
            case C.N: {
              const { cookieDomain: n } = t.customizationAttributes;
              return W({}, e, { bootFailed: !1, isBooting: !e.isBooted, cookieDomain: n });
            }
            case C.O: {
              const {
                  activeAdmins: n,
                  alignment: r,
                  backgroundImage: i,
                  boundWebEvents: o,
                  color: s,
                  customGoogleAnalyticsTrackerId: c,
                  expectedResponseDelay: a,
                  expectedResponseDelayTranslationKey: u,
                  features: d,
                  helpCenterSiteUrl: l,
                  horizontalPadding: p,
                  accessToTeammateEnabled: f,
                  isAudioEnabled: b,
                  isDeveloperWorkspace: h,
                  isErrorReportingDisabled: g,
                  isInstantBootEnabled: m,
                  isIntercomLinkEnabled: v,
                  isOverrideSamplingEnabled: O,
                  lastActiveAt: _,
                  launcherExpectedResponseDelayTranslationKey: y,
                  launcherLogoUrl: S,
                  logoUrl: j,
                  name: w,
                  officeHoursResponse: E,
                  originCookieDomain: I,
                  realtimeConfig: C,
                  secondaryColor: T,
                  selfServeSuggestionsMatch: A,
                  smsEnabled: R,
                  teamGreeting: P,
                  teamIntro: M,
                  temporaryExpectationsMessage: D,
                  upfrontEmailCollectionSetting: k,
                  useCacheFor: N,
                  userConversationAttachmentsEnabled: U,
                  userConversationGifsEnabled: L,
                  verticalPadding: x,
                } = t.user.app,
                B =
                  null != N &&
                  -1 !== N.indexOf('inbound_conversations_disabled') &&
                  (e.isRehydrated || e.isBooted)
                    ? e.inboundConversationsDisabled
                    : t.user.app.inboundConversationsDisabled;
              return W({}, e, {
                activeAdmins: n,
                alignment: r,
                backgroundImage: i,
                bootFailed: !1,
                boundWebEvents: o,
                color: s,
                customGoogleAnalyticsTrackerId: c,
                expectedResponseDelay: a,
                expectedResponseDelayTranslationKey: u,
                features: d,
                helpCenterSiteUrl: l,
                horizontalPadding: p,
                inboundConversationsDisabled: B,
                accessToTeammateEnabled: f,
                isAudioEnabled: b,
                isBooted: !0,
                isBooting: !1,
                isDeveloperWorkspace: h,
                isErrorReportingDisabled: g,
                isInstantBootEnabled: m,
                isIntercomLinkEnabled: v,
                isOverrideSamplingEnabled: O,
                lastActiveAt: _,
                launcherExpectedResponseDelayTranslationKey: y,
                launcherLogoUrl: S,
                logoUrl: j,
                name: w,
                officeHoursResponse: E,
                originCookieDomain: I,
                realtimeConfig: C,
                secondaryColor: T,
                selfServeSuggestionsMatch: A,
                smsEnabled: R,
                teamGreeting: P,
                teamIntro: M,
                temporaryExpectationsMessage: D,
                userConversationAttachmentsEnabled: U,
                userConversationGifsEnabled: L,
                verticalPadding: x,
                upfrontEmailCollection: q(
                  q({}, e.upfrontEmailCollection),
                  {},
                  { upfrontEmailCollectionSetting: k }
                ),
              });
            }
            case C.M:
              return t.isIdentityVerificationError
                ? W({}, e, { bootFailed: !0, isBooting: !1, isBooted: !1 })
                : W({}, e, { bootFailed: e.isBooting });
            case C.Nb:
              return W({}, e, { isWaitingForOpenContent: !0 });
            case C.Ob:
            case C.Mb:
              return W({}, e, { isWaitingForOpenContent: !1 });
            case C.Wb:
              return W({}, e, {
                isMessengerOpen: !0,
                viewStack: Object(i.j)(e) ? ['home-screen'] : e.viewStack,
                hideLightweightAppMessenger: t.hideLightweightAppMessenger,
              });
            case C.t:
              return W({}, e, { isMessengerOpen: !1 });
            case C.Qc:
              return W(Y(t.replaceCurrentView ? K(e) : e, 'new-conversation'), {
                conversationId: null,
              });
            case C.Rc:
              return W(e, { conversationId: null });
            case C.Lc:
              return W(Y(t.replaceCurrentView ? K(e) : e, 'conversation'), {
                conversationId: t.conversationId,
              });
            case C.Mc:
              return t.resetNavigationHistory ? Y(Q(e), 'conversations') : Y(e, 'conversations');
            case C.wb:
              if (e.conversationId === t.conversationId) {
                let t = W(e, { conversationId: null });
                return (
                  'conversation' === t.viewStack.slice(-1)[0] && (t = K(t)),
                  Object(i.j)(t) && (t = W(t, { viewStack: ['home-screen'] })),
                  t
                );
              }
              return e;
            case C.Nc:
              return Y(e, 'empty-screen');
            case C.Pc:
              return Y(t.replaceCurrentView ? K(e) : e, 'messenger-trigger');
            case C.Oc:
              return Y(e, 'home-screen');
            case C.I:
              return 'new-conversation' === Object(i.e)(e)
                ? W({}, Y(K(e), 'conversation'), { conversationId: t.conversation.id })
                : e;
            case C.Rb:
              return W({}, e, { conversationId: t.conversationId });
            case C.lc:
              return W({}, e, t.state.app, {
                features: W({}, e.features, t.state.app.features),
                isRehydrated: !0,
              });
            case C.Sb:
              return W({}, e, { isBoundEventCreatorOpen: !0 });
            case C.Lb:
              return M()(e.viewStack.slice(-2), ['browse-mode', 'conversation'])
                ? Y(Q(e), 'home-screen')
                : K(e);
            case C.ad:
              return W({}, e, {
                upfrontEmailCollection: q(
                  q({}, e.upfrontEmailCollection),
                  {},
                  {
                    upfrontEmailCollectorShowing:
                      !e.upfrontEmailCollection.upfrontEmailCollectorShowing,
                  }
                ),
              });
            case C.td:
              return W({}, e, {
                upfrontEmailCollection: q(
                  q({}, e.upfrontEmailCollection),
                  {},
                  { upfrontEmailCollectionSubmitted: !0 }
                ),
              });
            default:
              return e;
          }
        },
        launcher: function (e = Z, t) {
          switch (t.type) {
            case C.N: {
              const n =
                'not-present' === t.launcherEnabledOverride
                  ? e.launcherEnabledOverride
                  : t.launcherEnabledOverride;
              return X({}, e, { launcherEnabledOverride: n });
            }
            case C.O: {
              const { isLauncherEnabled: n } = t.user.app;
              return X({}, e, { isLauncherEnabled: n });
            }
            case C.M:
              return t.isIdentityVerificationError ? X({}, e, { isLauncherEnabled: !1 }) : e;
            case C.lc:
              return X({}, e, t.state.launcher);
            default:
              return e;
          }
        },
        botIntro: function (e = se, t) {
          switch (t.type) {
            case C.O: {
              const n = t.user.botIntro;
              return n ? ie(ie({}, e), {}, { id: n.id, parts: n.parts, operator: n.operator }) : e;
            }
            default:
              return e;
          }
        },
        user: function (e = te, t) {
          switch (t.type) {
            case C.N: {
              const {
                url: n,
                customAttributes: r,
                anonymousSessionDuration: i,
                activeCompanyId: o,
              } = t;
              return ee({}, e, {
                url: n,
                customAttributes: r,
                anonymousSessionDuration: i,
                activeCompanyId: o,
              });
            }
            case C.O: {
              const {
                  id: n,
                  locale: r,
                  countryCode: i,
                  role: o,
                  name: s,
                  userSuppliedEmail: c,
                  unreadConversationIds: a,
                  unreadDismissedConversationIds: u,
                  notificationLinkConversationId: d,
                  phoneNumber: l,
                  articleConversationId: p,
                  cdasBreachingLimit: f,
                  lastContactedAt: b,
                  requiresCookieConsent: h,
                  resolutionBotBehaviorVersionId: g,
                  searchRequiredBeforeConversation: m,
                  preventMultipleInboundConversation: v,
                } = t.user,
                O = t.user.hasConversations || a.length > 0 || u.length > 0;
              return ee({}, e, {
                id: n,
                locale: r,
                countryCode: i,
                role: o,
                name: s,
                userSuppliedEmail: c,
                hasConversations: O,
                phoneNumber: l,
                articleConversationId: p,
                notificationLinkConversationId: d,
                cdasBreachingLimit: f,
                lastContactedAt: b,
                requiresCookieConsent: h,
                resolutionBotBehaviorVersionId: g,
                searchRequiredBeforeConversation: m,
                preventMultipleInboundConversation: v,
              });
            }
            case C.H:
            case C.Ad:
            case C.yb:
              return ee({}, e, { hasConversations: !0 });
            case C.vb: {
              const { conversations: n } = t.conversations,
                r = void 0 !== n && n.length > 0;
              return ee({}, e, { hasConversations: r });
            }
            case C.sd: {
              const { userSuppliedEmail: n } = t;
              return ee({}, e, { userSuppliedEmail: n });
            }
            case C.md: {
              const { phoneNumber: n } = t;
              return ee({}, e, { phoneNumber: n });
            }
            case C.xd:
              return ee({}, e, { isPresent: !0 });
            case C.vd:
              return ee({}, e, { isPresent: !1 });
            case C.lc:
              return ee({}, e, t.state.user);
            default:
              return e;
          }
        },
        session: function (e = null, t) {
          switch (t.type) {
            case C.N: {
              const {
                appId: n,
                userId: r,
                email: i,
                userHash: o,
                anonymousId: s,
                anonymousSession: c,
                sessionId: a,
              } = t.session;
              return ne({}, e, {
                appId: n,
                userId: r,
                email: i,
                userHash: o,
                anonymousId: s,
                anonymousSession: c,
                sessionId: a,
              });
            }
            case C.O: {
              const {
                anonymousId: n,
                anonymousSession: r,
                activeCompanyId: i,
                newSession: o,
              } = t.user;
              return ne({}, e, {
                anonymousId: n || e.anonymousId,
                anonymousSession: r || e.anonymousSession,
                activeCompanyId: i,
                newSession: o,
              });
            }
            case C.U:
              return null;
            case C.g:
              return ne({}, e, { anonymousSession: t.anonymousSession });
            default:
              return e;
          }
        },
        openOnBoot: function (e = En, t) {
          var n;
          switch (t.type) {
            case C.t:
              return e.metadata.isViewingArticle ? e : En;
            case C.Lb:
            case C.Oc:
            case C.Fb:
            case C.m:
            case C.U:
              return En;
            case C.Lc:
              return { type: 'conversation', metadata: { conversationId: t.conversationId } };
            case C.I:
              return { type: 'conversation', metadata: { conversationId: t.conversation.id } };
            case C.Qc:
              return { type: 'new_conversation', metadata: {} };
            case C.Yb:
              if ('article-link' === t.componentId) {
                const n = jn({}, e);
                return {
                  type: 'article',
                  metadata: {
                    url: t.url,
                    cardUri: t.cardUri,
                    componentId: t.componentId,
                    previousState: n,
                  },
                };
              }
              return e;
            case C.v:
              return null !== (n = e.metadata) && void 0 !== n && n.previousState
                ? jn({}, e.metadata.previousState)
                : jn({}, En);
            case C.Qb: {
              if (!t.fromBrowseMode) return e;
              const { articleIds: n } = e.metadata;
              return {
                type: 'search_browse_article',
                metadata: {
                  articleIds: n
                    ? [...n, t.articleId].filter(Boolean)
                    : [t.articleId].filter(Boolean),
                },
              };
            }
            case C.o:
              return 'search_browse_article' === e.type && e.metadata.articleIds.length > 1
                ? {
                    type: 'search_browse_article',
                    metadata: {
                      articleIds: e.metadata.articleIds.slice(0, e.metadata.articleIds.length - 1),
                    },
                  }
                : En;
            case C.lc:
              return jn(jn({}, e), t.state.openOnBoot);
            default:
              return e;
          }
        },
        operator: (e = Dt, t) => {
          switch (t.type) {
            case C.Qc:
            case C.Lc:
              return Pt(
                Pt({}, e),
                {},
                { lastArticleClosedAt: null, conversationIdOfLastViewedArticle: null }
              );
            case C.y:
              return Pt(
                Pt({}, e),
                {},
                {
                  lastComposerEvent: t.lastActiveAt.getTime(),
                  composerHasContent: '' !== t.composerContent,
                }
              );
            case C.H:
              return Pt(Pt({}, e), {}, { userCreatedConversationAt: t.timestamp });
            case C.Qb:
              return Pt(
                Pt({}, e),
                {},
                { lastArticleClosedAt: null, conversationIdOfLastViewedArticle: t.conversationId }
              );
            case C.o:
              return Pt(Pt({}, e), {}, { lastArticleClosedAt: t.closedAt });
            case C.O:
            case C.sd:
              return Pt(
                Pt({}, e),
                {},
                {
                  clientsideMessageConditions: t.user.clientsideMessageConditions,
                  clientsideRulesetConditions: t.user.clientsideRulesetConditions,
                }
              );
            case C.dd:
              return Pt(Pt({}, e), {}, { lastTriggerTransitionTimestamp: t.payload.timestamp });
            case C.lc:
              return Pt(Pt({}, e), t.state.operator);
            default:
              return e;
          }
        },
        message: function (e = ce, t) {
          switch (t.type) {
            case C.Vb: {
              const { conversationId: e, partId: n } = t;
              return { conversationId: e, partId: n };
            }
            case C.s:
              return ce;
            default:
              return e;
          }
        },
        pointerMessage: function (e = ae, t) {
          switch (t.type) {
            case C.Xb: {
              const { conversationId: e, partId: n } = t;
              return { conversationId: e, partId: n };
            }
            case C.u:
              return ae;
            default:
              return e;
          }
        },
        dismissedPointers: function (e = pe, t) {
          switch (t.type) {
            case C.ab:
              return de(de({}, e), {}, { [t.conversationId]: !0 });
            default:
              return e;
          }
        },
        article: function (e = _e, t) {
          switch (t.type) {
            case C.Qb: {
              if (parseInt(e.activeArticleId) === parseInt(t.articleId)) return e;
              const n = JSON.parse(he.a.get('intercom-article-expanded-mode')),
                r = !!be()(n) || n;
              return {
                activeArticleId: t.articleId,
                inSearchBrowse: t.fromBrowseMode,
                isExpanded: r,
                expansionTransitionComplete: t.forceTransitionComplete || !r,
                viewStack: [...e.viewStack, t.articleId],
                isLoaded: !1,
                hash: t.hash,
              };
            }
            case C.o:
              const { viewStack: n } = e;
              return (
                n.pop(),
                n.length > 0
                  ? me(
                      me({}, e),
                      {},
                      { activeArticleId: n[n.length - 1], isLoaded: !1, transitioningBack: !1 }
                    )
                  : _e
              );
            case C.tc:
            case C.Rc:
              return _e;
            case C.i:
              return me(me({}, e), {}, { isLoaded: !0 });
            case C.Zc:
              return (
                he.a.set('intercom-article-expanded-mode', JSON.stringify(t.isExpanded)),
                Oe({}, e, { isExpanded: t.isExpanded })
              );
            case C.db:
              return me(me({}, e), {}, { expansionTransitionComplete: !0 });
            case C.h:
              return me(me({}, e), {}, { transitioningBack: !0 });
            case C.Wb:
              if (e.activeArticleId) return me(me({}, e), {}, { isLoaded: !1 });
            default:
              return e;
          }
        },
        articles: function (e = we, t) {
          switch (t.type) {
            case C.ec:
              return Se(Se({}, e), {}, { [t.article.id]: t.article });
            case C.B: {
              const { articleId: n, reactionIndex: r } = t;
              if (!e.hasOwnProperty(n)) return e;
              const i = e[n];
              return Se(
                Se({}, e),
                {},
                {
                  [n]: Se(
                    Se({}, i),
                    {},
                    { reactionsReply: Se(Se({}, i.reactionsReply), {}, { reactionIndex: r }) }
                  ),
                }
              );
            }
          }
          return e;
        },
        articleCollections: function (e = Te, t) {
          switch (t.type) {
            case C.fc:
              if (t.articleCollections.length > 0) return t.articleCollections;
            case C.ob:
              const { collectionId: n, articleSections: r } = t;
              return e.map((e) => (e.id === n ? Ie(Ie({}, e), {}, { sections: r }) : e));
          }
          return e;
        },
        conversations: function (e = We, t) {
          switch (t.type) {
            case C.O:
            case C.sd:
            case C.Eb:
              return ze({}, e, { byId: Ye(e.byId, t) });
            case C.ub:
              return ze({}, e, { isFetching: !0 });
            case C.vb: {
              const { page: n, totalPages: r } = t.conversations.pages;
              return ze({}, e, {
                isFetching: !1,
                pagesFetched: n,
                totalPages: r,
                byId: Ye(e.byId, t),
              });
            }
            case C.tb:
              return ze({}, e, { isFetching: !1 });
            case C.hd:
            case C.Q:
            case C.P:
            case C.xb:
            case C.yb:
            case C.E:
            case C.F:
            case C.D:
            case C.A:
            case C.Jb:
            case C.Y:
            case C.I:
            case C.f:
            case C.qd:
            case C.k:
            case C.c:
            case C.id:
            case C.ud:
            case C.gd:
            case C.ed:
            case C.Bb:
            case C.Cb:
            case C.Cc:
            case C.y:
            case C.Bc:
            case C.Dc:
              return ze({}, e, { byId: Ye(e.byId, t) });
            case C.z:
              return ze({}, e, { scrollPosition: t.scrollPosition });
            case C.cb:
              return ze({}, e, { byId: Ye(e.byId, t) });
            default:
              return e;
          }
        },
        newConversation: function (e = et, t) {
          switch (t.type) {
            case C.Qc:
              return Ze({}, e, {
                defaultMessage: t.defaultMessage,
                articleUrl: t.articleUrl || null,
              });
            case C.Lb:
              return Ze({}, e, { articleUrl: null });
            case C.H:
            case C.G:
              return Ze({}, e, { userParticipated: !0, parts: Ue(e.parts, t) });
            case C.Fc:
              return Ze({}, e, { composerState: t.composerState });
            case C.I:
              return Ze({}, et, { composerState: e.composerState });
            case C.qd: {
              const { conversationId: n } = t;
              return void 0 !== n ? e : Ze({}, e, { parts: Ue(e.parts, t) });
            }
            case C.y:
            case C.Bc:
            case C.Cc:
            case C.Dc:
              return Ke(
                Ke({}, e),
                {},
                { composerSuggestions: Object(xe.a)(e.composerSuggestions, t) }
              );
            case C.T:
              return Ke(
                Ke({}, e),
                {},
                {
                  parts: t.botIntro.parts.map((e, n) => ({
                    id: `bot-intro-${n}`,
                    author: t.botIntro.operator,
                    createdAt: t.createdAt,
                    partType: 'bot_intro',
                    body: e,
                    showCreatedAt: !0,
                  })),
                  botIntroId: t.botIntro.id,
                }
              );
            default:
              return e;
          }
        },
        borderless: function (e = tt, t) {
          switch (t.type) {
            case C.Rb:
              return Object.assign({}, e, { conversationId: t.conversationId });
            case C.s:
              return tt;
            default:
              return e;
          }
        },
        notificationChannels: function (e = it, t) {
          switch (t.type) {
            case C.rd:
              return rt({}, e, { isSaving: !0 });
            case C.O:
            case C.sd:
              return rt({}, e, { isSaving: !1 });
            case C.ld:
              return rt({}, e, { isSaving: !0, errorMessage: null, showErrorMessage: !1 });
            case C.md:
              return rt({}, e, { phoneNumber: t.phoneNumber, isSaving: !1 });
            case C.kd:
              return rt({}, e, { errorMessage: t.message, isSaving: !1, showErrorMessage: !0 });
            case C.Gb:
              return rt({}, e, { errorMessage: null, showErrorMessage: !1 });
            default:
              return e;
          }
        },
        notificationTypeOverrides: function (e = nt, t) {
          switch (t.type) {
            case C.jd:
              return Object.assign({}, e, {
                suppress: Object.assign({}, e.suppress, t.suppress),
                forceSnippet: Object.assign({}, e.forceSnippet, t.forceSnippet),
              });
            default:
              return e;
          }
        },
        install: function (e = st, t) {
          switch (t.type) {
            case C.Tb: {
              const {
                activeSubscription: n,
                userHashVerified: r,
                secureInstallV2: i,
                messengerEnabledForVisitors: o,
                messengerEnabledForUsers: s,
              } = t;
              return ot({}, e, {
                isInstallModeOpen: !0,
                installModeConfig: {
                  activeSubscription: n,
                  userHashVerified: r,
                  secureInstallV2: i,
                  messengerEnabledForVisitors: o,
                  messengerEnabledForUsers: s,
                },
              });
            }
            case C.q:
              return ot({}, e, { isInstallModeOpen: !1 });
            default:
              return e;
          }
        },
        gifs: function (e = at, t) {
          switch (t.type) {
            case C.xc: {
              const { searchTerm: n } = t;
              return ct({}, e, { isFetching: !0, fetchingFailed: !1, searchTerm: n });
            }
            case C.yc: {
              const { gifs: n, searchTerm: r } = t;
              return r !== e.searchTerm
                ? e
                : ct({}, e, { isFetching: !1, gifs: n, fetchingFailed: !1, searchTerm: r });
            }
            case C.wc: {
              const { searchTerm: n } = t;
              return n !== e.searchTerm
                ? e
                : ct({}, e, { isFetching: !1, fetchingFailed: !0, searchTerm: n });
            }
            default:
              return e;
          }
        },
        boundEventCreator: function (e = dt, t) {
          switch (t.type) {
            case C.Sb:
              return { stage: t.stage, eventData: Object.assign({}, e.eventData, t.eventData) };
            case C.j:
              return Object.assign({}, e, { stage: t.newStage });
            case C.fd:
              return Object.assign({}, e, {
                eventData: Object.assign({}, e.eventData, t.eventData),
              });
            case C.p:
              return dt;
            default:
              return e;
          }
        },
        launcherDiscoveryMode: (e = bt, t) => {
          const { isLauncherDiscoveryModeEnabled: n } = e;
          switch (t.type) {
            case C.O: {
              const { user: n } = t;
              return ft({}, e, { isLauncherDiscoveryModeEnabled: ht(n) });
            }
            case C.ub:
              return ft({}, e, { isLauncherDiscoveryModeEnabled: !1, hasDiscoveredLauncher: !0 });
            case C.Wb:
              return ft({}, e, { hasDiscoveredLauncher: !0, isLauncherDiscoveryModeEnabled: !1 });
            case C.Ub:
              return ft({}, e, { isLauncherDiscoveryModeOpening: n, hasDiscoveredLauncher: !0 });
            case C.r:
              return ft({}, e, {
                isLauncherDiscoveryModeOpening: !1,
                isLauncherDiscoveryModeClosing: n,
              });
            case C.Qc:
            case C.Pb:
              return ft({}, e, {
                isLauncherDiscoveryModeClosing: !1,
                isLauncherDiscoveryModeOpening: !1,
              });
            case C.V:
              return ft({}, e, {
                isLauncherDiscoveryModeEnabled: !1,
                isLauncherDiscoveryModeClosing: !1,
              });
            case C.lc:
              const { launcherDiscoveryMode: r } = t.state;
              return ft({}, e, r);
            default:
              return e;
          }
        },
        messengerCards: (e = wt, t) => {
          switch (t.type) {
            case C.Wc: {
              const n = t.componentId,
                r = St({}, e);
              return (
                Ot()(r, `${t.cardUri}.isFetching`, !1),
                mt()(r, `${t.cardUri}.card.canvas.content.components`, (e) =>
                  Object(_t.d)(n, e, !1)
                )
              );
            }
            case C.Yc: {
              const n = St({}, e);
              return (
                Ot()(n, `${t.card.uri}.isFetching`, !1),
                Ot()(n, `${t.card.uri}.isFetched`, !0),
                Ot()(n, `${t.card.uri}.partialCard`, t.card)
              );
            }
            case C.Xc: {
              const n = t.componentId,
                r = St({}, e);
              return (
                Ot()(r, `${t.cardUri}.isFetching`, !0),
                mt()(r, `${t.cardUri}.card.canvas.content.components`, (e) =>
                  Object(_t.d)(n, e, !0)
                )
              );
            }
            case C.qb: {
              const n = St({}, e);
              return Ot()(n, `${t.card.uri}.isContentFetching`, !0);
            }
            case C.rb: {
              const n = St({}, e);
              return (
                Ot()(n, `${t.card.uri}.isFetching`, !1),
                Ot()(n, `${t.card.uri}.isFetched`, !0),
                Ot()(n, `${t.card.uri}.isContentFetched`, !0),
                Ot()(n, `${t.card.uri}.isContentError`, !1),
                Ot()(n, `${t.card.uri}.isContentFetching`, !1),
                Ot()(n, `${t.card.uri}.card`, t.card),
                Ot()(n, `${t.card.uri}.card.canvas.content`, t.content),
                mt()(n, `${t.card.uri}.card`, _t.e)
              );
            }
            case C.pb: {
              const n = St({}, e);
              return (
                Ot()(n, `${t.card.uri}.isContentError`, !0),
                Ot()(n, `${t.card.uri}.isContentFetching`, !1),
                Ot()(n, `${t.card.uri}.partialCard`, t.card)
              );
            }
            default:
              return e;
          }
        },
        homeScreen: (e = Et, t) => {
          switch (t.type) {
            case C.O:
              return Object.assign({}, e, { matchedSlots: t.user.homeScreenSlots });
            case C.Ab:
              return Object.assign({}, e, { isFetching: !0, isFetched: !1, isFailed: !1 });
            case C.Bb:
              return Object.assign({}, e, {
                isFetching: !1,
                isFetched: !0,
                isFailed: !1,
                fetchedSlots:
                  ((n = e.matchedSlots),
                  (r = t.cards),
                  n.map((e) => {
                    if ('messenger_app' !== e.slotType) return Object.assign({}, e);
                    const t = r.find((t) => t.messengerCardId === e.messengerCardId);
                    return Object.assign({}, e, { uri: (null == t ? void 0 : t.uri) || null });
                  })),
                hasMoreConversations: t.hasMoreConversations,
              });
            case C.zb:
              return Object.assign({}, e, {
                isFetching: !1,
                isFetched: !1,
                isFailed: !0,
                fetchedSlots: e.matchedSlots.filter((e) => 'new_conversation_card' === e.slotType),
                error: t.error,
              });
            default:
              return e;
          }
          var n, r;
        },
        messengerSheet: (e = At, t) => {
          switch (t.type) {
            case C.Sc:
              return Ct(Ct({}, e), {}, { isNavigating: !0 });
            case C.lb:
              return Ct(Ct({}, e), {}, { isNavigating: !1 });
            case C.Hc:
              return Ct(Ct({}, e), {}, { isProxyLoaded: t.isLoaded });
            case C.Yb:
              return Ct(
                Ct({}, e),
                {},
                {
                  url: t.url,
                  isOpen: !0,
                  sourceCard: { cardUri: t.cardUri, componentId: t.componentId },
                }
              );
            case C.Zb:
              return Ct(
                Ct({}, e),
                {},
                {
                  url: t.url,
                  isOpen: !0,
                  sourceCard: { token: t.token, componentId: t.componentId },
                }
              );
            case C.v:
              return At;
            case C.Ic:
              return Ct(Ct({}, e), {}, { sheetTitle: t.sheetTitle });
            case C.gb:
              return Ct(Ct({}, e), {}, { isSheetsDataLoading: !0 });
            case C.hb:
              return Ct(
                Ct({}, e),
                {},
                { isSheetsDataLoading: !1, isSheetsDataLoaded: !0, data: t.data }
              );
            case C.fb:
              return Ct(Ct({}, e), {}, { isSheetsDataLoading: !1 });
            default:
              return e;
          }
        },
        messengerAlerts: function (e = Lt, t) {
          switch (t.type) {
            case C.Kc:
              return Nt(
                Nt({}, e),
                {},
                {
                  isShown: !0,
                  alertType: t.payload.alertType,
                  alertPayload: t.payload.alertPayload,
                }
              );
            case C.n:
              return Lt;
            default:
              return e;
          }
        },
        customizationOverrides: function (e = Ft, t) {
          switch (t.type) {
            case C.J:
              return Bt(Bt({}, e), t.customizationAttributes);
            case C.C:
              return Bt(Bt(Bt({}, e), t.customizationAttributes), {}, { isSetByBanner: !0 });
            default:
              return e;
          }
        },
        accessibility: function (e = qt, t) {
          switch (t.type) {
            case C.Jc:
              return Ht(Ht({}, e), {}, { tabNavigation: t.tabNavigation });
            case C.Ac:
              return Ht(
                Ht({}, e),
                {},
                {
                  accessibilityTheme: t.accessibilityTheme,
                  secondaryAccessibilityTheme: t.secondaryAccessibilityTheme,
                }
              );
            default:
              return e;
          }
        },
        tour: (e = Yt, t) => {
          switch (t.type) {
            case C.jb:
              return Wt(Wt({}, e), {}, { isFetching: !0, isFetched: !1, fetchingFailed: !1 });
            case C.bd:
              return Wt(Wt({}, e), {}, { updateFailed: !0 });
            case C.kb:
              return Wt(
                Wt({}, e),
                {},
                {
                  isFetching: !1,
                  isFetched: !0,
                  fetchingFailed: !1,
                  isPreviewing: t.isPreviewingTour,
                  activeTour: t.tour,
                }
              );
            case C.ib:
              return Wt(Wt({}, e), {}, { isFetching: !1, isFetched: !1, fetchingFailed: !0 });
            case C.ac:
              return e.activeTour
                ? Wt(
                    Wt({}, e),
                    {},
                    { activeTour: Wt(Wt({}, e.activeTour), {}, { activeStepId: t.activeStepId }) }
                  )
                : Wt({}, e);
            case C.Tc:
              return Wt(Wt({}, e), {}, { isFetched: !0, isPreviewing: !0, activeTour: t.tour });
            case C.Vc:
              return Wt(Wt({}, e), {}, { isFetched: !1, isPreviewing: !1, activeTour: void 0 });
            case C.x:
            case C.oc:
            case C.Uc:
              return Yt;
            case C.Hb:
              return e.activeTour
                ? Wt(
                    Wt({}, e),
                    {},
                    { activeTour: Wt(Wt({}, e.activeTour), {}, { isCompleted: !0 }) }
                  )
                : Wt({}, e);
            case C.l:
              return Wt(
                Wt({}, e),
                {},
                { videoAudioMuted: t.muted, userHasInteractedWithVideo: !0 }
              );
            case C.cc:
              return Wt(Wt({}, e), {}, { isAwaitingProgress: !0 });
            case C.bc:
              return Wt(Wt({}, e), {}, { isAwaitingProgress: !1 });
            default:
              return e;
          }
        },
        triggers: function (e = Zt, t) {
          const n = Kt({}, e.triggers);
          switch (t.type) {
            case C.e:
              return (n[t.trigger.id] = t.trigger), Kt(Kt({}, e), {}, { triggers: n });
            case C.nc:
              return delete n[t.triggerId], Kt(Kt({}, e), {}, { triggers: n });
            case C.a:
              return Kt(Kt({}, e), {}, { active: t.triggerId, failed: !1 });
            case C.S:
              return Kt(Kt({}, e), {}, { active: null });
            case C.b:
              return Kt(Kt({}, e), {}, { failed: !0 });
            default:
              return e;
          }
        },
        inboundSuggestions: function (e = an, t) {
          switch (t.type) {
            case C.d:
              return sn(
                sn({}, e),
                {},
                { allSuggestions: [...e.allSuggestions, t.composerSuggestions] }
              );
            case C.mc:
              return sn(
                sn({}, e),
                {},
                { allSuggestions: rn()(e.allSuggestions, (e) => e.rulesetId !== t.rulesetId) }
              );
            case C.pd: {
              let n = e.allSuggestions;
              return (
                e.serverSideSuggestions &&
                  (n = rn()(
                    n,
                    (t) =>
                      e.serverSideSuggestions && t.rulesetId !== e.serverSideSuggestions.rulesetId
                  )),
                t.composerSuggestions && (n = tn()([...n, t.composerSuggestions], 'rulesetId')),
                sn(
                  sn({}, e),
                  {},
                  { allSuggestions: n, serverSideSuggestions: t.composerSuggestions }
                )
              );
            }
            case C.nd:
              return sn(sn({}, e), {}, { previewSuggestions: t.composerSuggestions });
            default:
              return e;
          }
        },
        banners: function (e = un, t) {
          switch (t.type) {
            case C.gc:
              if (t.banners) return t.banners;
            case C.dc:
              if (t.bannerId && t.reaction)
                return e.map((e) =>
                  e.banner_id === t.bannerId
                    ? Object.assign({}, e, { selected_reaction: t.reaction })
                    : e
                );
          }
          return e;
        },
        composer: (e = fn, t) => {
          switch (t.type) {
            case C.y:
              return ln(ln({}, e), {}, { content: t.composerContent });
            default:
              return e;
          }
        },
        predictiveAnswers: (e = mn, t) => {
          switch (t.type) {
            case C.Gc:
              return hn(hn({}, e), {}, { composerSuggestions: t.predictiveAnswersSuggestions });
            default:
              return e;
          }
        },
        lightweightApp: (e = yn, t) => {
          switch (t.type) {
            case C.Ec:
              return On(On({}, e), {}, { isActive: t.isActive });
            default:
              return e;
          }
        },
        browseMode: function (e = An, t) {
          switch (t.type) {
            case C.Rc:
              return Cn(
                Cn({}, An),
                {},
                {
                  isOpen: !0,
                  closeTransitionEnded: !1,
                  isFetching: e.isFetching,
                  hasViewedAnArticle: e.hasViewedAnArticle,
                  skipOpenAnimation: t.skipOpenAnimation,
                }
              );
            case C.tc:
              return Cn(Cn({}, e), {}, { closeTransitionEnded: !0 });
            case C.uc:
              return !e.showArticleCollection || e.showSearchResults || e.hasSearchResults
                ? Cn(
                    Cn({}, An),
                    {},
                    {
                      closeTransitionEnded: !1,
                      isFetching: e.isFetching,
                      hasViewedAnArticle: e.hasViewedAnArticle,
                    }
                  )
                : Cn(
                    Cn({}, e),
                    {},
                    {
                      phrase: '',
                      searchResults: [],
                      showSearchResults: !1,
                      hasSearchResults: !1,
                      showArticleCollection: !1,
                    }
                  );
            case C.vc:
              return e.showSearchResults || e.hasSearchResults
                ? Cn(Cn({}, e), {}, { closeTransitionEnded: !0 })
                : Cn(Cn({}, e), {}, { selectedArticleCollectionId: null });
            case C.Qc:
              return e.isOpen
                ? Cn(Cn({}, e), {}, { isOpen: !1, routedToNewConversation: !0 })
                : Cn(Cn({}, e), {}, { routedToNewConversation: !1 });
            case C.od: {
              const { phrase: n, hideResultsWithDelay: r } = t,
                i = e.hasSearchResults && 0 === (null == n ? void 0 : n.trim().length);
              return Cn(
                Cn({}, e),
                {},
                {
                  phrase: n,
                  hideResultsWithDelay: r,
                  showSearchResults: !i && e.showSearchResults,
                  hasSearchResults: !i && e.hasSearchResults,
                }
              );
            }
            case C.rc: {
              const n = e.immediateSearch || t.immediate;
              return Cn(Cn({}, e), {}, { immediateSearch: n, isFetchingSearchResults: !0 });
            }
            case C.sc: {
              const { searchResults: n, phrase: r } = t,
                i = Cn(Cn({}, e), {}, { isFetchingSearchResults: !1 });
              return r !== i.phrase
                ? i
                : Cn(
                    Cn({}, i),
                    {},
                    {
                      fetchingFailed: !1,
                      hasSearchResults: !0,
                      showSearchResults: e.immediateSearch,
                      searchResults: n,
                      immediateSearch: !1,
                      searchedPhrase: r,
                    }
                  );
            }
            case C.qc: {
              const { phrase: n } = t,
                r = Cn(Cn({}, e), {}, { isFetchingSearchResults: !1 });
              return n !== r.phrase
                ? r
                : Cn(Cn({}, r), {}, { isFetching: !1, fetchingFailed: !0, immediateSearch: !1 });
            }
            case C.zc:
              return Cn(
                Cn({}, e),
                {},
                { selectedArticleCollectionId: t.collectionId, showArticleCollection: !0 }
              );
            case C.fc:
              return 1 === t.articleCollections.length
                ? Cn(
                    Cn({}, e),
                    {},
                    {
                      selectedArticleCollectionId: t.articleCollections[0].id,
                      showArticleCollection: !0,
                      isFetching: !1,
                    }
                  )
                : Cn(Cn({}, e), {}, { isFetching: !1 });
            case C.nb: {
              const { collectionId: n } = t;
              if (n === e.selectedArticleCollectionId)
                return Cn(Cn({}, e), {}, { isFetching: !0, fetchingFailed: !1 });
              break;
            }
            case C.ob: {
              const { collectionId: n } = t;
              if (n === e.selectedArticleCollectionId)
                return Cn(Cn({}, e), {}, { isFetching: !1, fetchingFailed: !1 });
              break;
            }
            case C.mb: {
              const { collectionId: n } = t;
              if (n === e.selectedArticleCollectionId)
                return Cn(Cn({}, e), {}, { searchResults: [], isFetching: !1, fetchingFailed: !0 });
              break;
            }
            case C.i:
              return Cn(Cn({}, e), {}, { isViewingArticle: !0 });
            case C.o:
              return e.isOpen
                ? Cn(Cn({}, e), {}, { hasViewedAnArticle: !0, isViewingArticle: !1 })
                : e;
            case C.Lb:
              return Cn(
                Cn({}, An),
                {},
                { isFetching: e.isFetching, hasViewedAnArticle: e.hasViewedAnArticle }
              );
            case C.Wb:
              if (e.isViewingArticle) return Cn(Cn({}, e), {}, { skipOpenAnimation: !0 });
              if (!e.skipOpenAnimation) return Cn(Cn({}, An), {}, { isFetching: e.isFetching });
              break;
            case C.t:
              return e.isOpen ? e : Cn(Cn({}, e), {}, { skipOpenAnimation: !1 });
          }
          return e;
        },
        openInboundConversationIds: function (e = Rn, t) {
          switch (t.type) {
            case C.Bb:
              return (null == t ? void 0 : t.openInboundConversationIds) || [];
            case C.I:
            case C.yb:
              const { conversation: n } = t;
              return n.isInbound
                ? 'state_closed' === n.state
                  ? e.filter((e) => e !== n.id)
                  : 'state_open' === n.state && -1 === e.indexOf(n.id)
                  ? [...e, n.id]
                  : e
                : e;
            default:
              return e;
          }
        },
        survey: function (e = null, t) {
          switch (t.type) {
            case C.hc:
              if (t.survey) return t.survey;
            case C.ic:
              return t.surveyId !== e.id
                ? e
                : Mn(
                    Mn({}, e),
                    {},
                    { steps: [...e.steps, t.surveyStep], activeStepId: t.surveyStep.id }
                  );
            case C.kc:
              return Mn(
                Mn({}, e),
                {},
                {
                  steps: e.steps.map((e) =>
                    Mn(
                      Mn({}, e),
                      {},
                      {
                        questions: e.questions.map((e) =>
                          e.id !== t.questionId
                            ? Mn({}, e)
                            : Mn(Mn({}, e), {}, { response: t.response })
                        ),
                      }
                    )
                  ),
                }
              );
            case C.bb:
              if (t.surveyId) return e.id === t.surveyId ? Mn(Mn({}, e), {}, { dismissed: !0 }) : e;
            default:
              return e;
          }
        },
      }),
      Nn = n(242),
      Un = n.n(Nn),
      Ln = n(20),
      xn = n.n(Ln),
      Bn = n(15);
    function $n(e, t) {
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
    function Fn(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? $n(Object(n), !0).forEach(function (t) {
              Vn(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : $n(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function Vn(e, t, n) {
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
    const Hn = (e) => {
        if (
          !(() => {
            var e, t;
            if (Object(j.a)()) return;
            const n =
              null === (e = window) || void 0 === e
                ? void 0
                : null === (t = e.parent) || void 0 === t
                ? void 0
                : t.ga;
            return (
              'function' == typeof n &&
              'function' == typeof (null == n ? void 0 : n.getAll) &&
              (null == n ? void 0 : n.loaded)
            );
          })()
        )
          return;
        const t = window.parent.ga.getAll();
        if (xn()(t) && t.length) {
          if (e) {
            const n = Gn(t, e);
            return (
              n ||
              (window.parent.ga('create', e, 'auto', 'intercomMessenger'),
              Gn(window.parent.ga.getAll(), e))
            );
          }
          return t[0];
        }
      },
      Gn = (e, t) =>
        Un()(e, function (e) {
          try {
            return e.b.data.values[':trackingId'] === t;
          } catch (n) {
            if ('function' == typeof e.get) return t === e.get('trackingId');
          }
        }),
      qn = (e) =>
        Object.entries(e).reduce((e, [t, n]) => {
          if (n) return e ? e + `, ${t}: ${n}` : `${t}: '${n}'`;
        }, null),
      zn = (e, t) => {
        var n;
        const { parts: r } = e,
          i = r[0],
          o = t || (i && i.id),
          s = o && -1 !== o.indexOf('message-'),
          c = {
            isAdmin: i && i.author && r[0] && r[0].author.isAdmin,
            customBotId:
              null === (n = e.analyticsMetadata) || void 0 === n ? void 0 : n.customBotId,
          },
          a = { messageId: o && o.replace('message-', '') };
        return Fn(Fn({}, c), s ? a : {});
      },
      Wn = [
        'OPEN_MESSENGER',
        'CLOSE_MESSENGER',
        'CREATE_CONVERSATION_SUCCESS',
        'CREATE_COMMENT_SUCCESS',
        'UPDATE_USER_SUPPLIED_EMAIL_SUCCESS',
        C.Yc,
        'RECORD_MESSAGE_SENT',
        'MARK_CONVERSATION_AS_READ_REQUEST',
        'UPFRONT_EMAIL_COLLECTION_SUBMITTED',
      ];
    var Jn = (e) => (t) => (n) => {
        const r = e.getState(),
          i = t(n);
        if (-1 === Wn.indexOf(n.type) || !r.app.features.googleAnalytics) return i;
        const o = r.app.customGoogleAnalyticsTrackerId,
          s = Hn(o);
        if (!s)
          return (
            Object(Bn.b)(
              'Intercom - Google Analytics is not installed or configured, have you forgotten to include it?'
            ),
            i
          );
        const c = (
          (e) =>
          ({ name: t, metadata: n = {}, nonInteraction: r = !1 } = {}) => {
            try {
              e.send(
                'event',
                Fn(
                  { eventCategory: 'Intercom Messenger', eventAction: t, eventLabel: qn(n) },
                  r ? { nonInteraction: r } : {}
                )
              );
            } catch (e) {
              Object(Bn.b)('Intercom - Something went wrong sending the Google Analytics event', e);
            }
          }
        )(s);
        switch (n.type) {
          case C.Wb:
            c({ name: 'Opened Messenger' });
            break;
          case C.t:
            c({ name: 'Closed Messenger' });
            break;
          case C.I:
            c({ name: 'Started New Conversation' });
            break;
          case C.F: {
            const e = r.conversations.byId[n.conversationId],
              { customBotId: t, messageId: i, isAdmin: o } = zn(e),
              s = Fn({}, t ? { 'Custom Bot ID': t || i } : { 'Message ID': i });
            c({ name: 'Sent a Reply', metadata: o || t ? s : void 0 });
            break;
          }
          case C.td:
          case C.sd:
            c({ name: 'Provided Email Address' });
            break;
          case C.Yc:
            c({
              name: n.card.completed ? 'Completed App Flow' : 'Interacted with App',
              metadata: {
                'App Name': n.card.app_package_name,
                'Location':
                  ((a = r.app.viewStack),
                  a.length > 0
                    ? { 'home-screen': 'Home', 'conversation': 'Conversation' }[a[a.length - 1]]
                    : 'Conversation'),
              },
            });
            break;
          case C.jc: {
            const e = r.conversations.byId[n.conversationId],
              { customBotId: t, messageId: i } = zn(e, n.partId);
            i &&
              c({
                name: 'Triggered Message',
                metadata: Fn({}, t ? { 'Custom Bot ID': t || i } : { 'Message ID': i }),
                nonInteraction: !0,
              });
            break;
          }
          case C.Jb: {
            if (r.conversations.byId[n.conversationId].read) return;
            const e = r.conversations.byId[n.conversationId],
              { customBotId: t, messageId: i } = zn(e);
            c({
              name: 'Viewed Message',
              metadata: Fn({}, t ? { 'Custom Bot ID': t || i } : { 'Message ID': i }),
              nonInteraction: !0,
            });
            break;
          }
        }
        var a;
        return i;
      },
      Yn = n(29),
      Qn = n(94),
      Kn = n(60);
    function Xn(e, t) {
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
    function Zn(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Xn(Object(n), !0).forEach(function (t) {
              er(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Xn(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function er(e, t, n) {
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
    function tr(e, t) {
      return void 0 !== t && t !== e;
    }
    function nr(e, t, n, r, i, o) {
      e.write(t, n, {
        domain: i,
        path: '/',
        expires: new Date(Yn.b.now() + r),
        sameSite: o ? 'none' : 'lax',
        secure: o,
      });
    }
    function rr(e, t) {
      return (function (e) {
        return null != e;
      })(e)
        ? e
        : t;
    }
    function ir({ domainSetting: e, originCookieDomain: t, meta: n = {} }) {
      if ('none' !== e) {
        if (
          (void 0 !== e &&
            Object(Bn.b)(
              'Intercom Messenger error: cookie_domain attribute supports only `none` option'
            ),
          t)
        )
          return `.${t}`;
        {
          const e = Object(Qn.a)(),
            t = (e || '').split(':')[0];
          return (
            Object(U.g)('missingOriginDomain', Zn(Zn({}, n), {}, { host: t, rawHost: e })),
            'localhost' === t ? '' : t
          );
        }
      }
    }
    var or = n(57),
      sr = n(37),
      cr = n.n(sr),
      ar = n(245),
      ur = n.n(ar),
      dr = n(43),
      lr = n(50),
      pr = n(128);
    const fr = { increment: U.c, count: U.a, timing: U.f },
      br = { info: U.d, error: U.b };
    function hr(e, t, n, r, i) {
      let o;
      try {
        o = new t(e.endpoints, br, fr, n, r, () => {}, i);
      } catch (e) {
        Object(U.b)(e), gr(o);
      }
      return o;
    }
    function gr(e) {
      if (void 0 !== e)
        try {
          e.shutdown();
        } catch (e) {
          Object(U.b)(e);
        }
    }
    function mr(e, t, n, r, i, o, s, c, a, u) {
      if (!Er(t, n, a)) return e;
      if ((gr(e), !Sr(n))) return;
      const d = hr(
        n,
        ur.a,
        () => {
          vr();
        },
        () => {
          Or();
        },
        u
      );
      try {
        d.subscribeToAllTopics(), _r(d, r, i, o, s, c, p.g, lr.c);
      } catch (e) {
        Object(U.b)(e), gr(d);
      }
      return d;
    }
    function vr() {
      return Object(u.c)() || (Object(U.g)('realTimeConnected'), Object(u.l)(!0)), 'connected';
    }
    function Or() {
      return 'disconnected';
    }
    function _r(e, t, n, r, i, o, s, c) {
      const a = cr()((e) => e(), 5e3);
      e.addListener('NewComment', (e) => {
        const {
          deliveryChannel: r,
          conversationId: i,
          createdByUserId: o,
          createdAt: s,
        } = e.eventData;
        if (r && -1 === r.indexOf('web')) return;
        const { user: c } = t.getState(),
          u = () => t.dispatch(n(b.b, i, !0, s));
        o === c.id ? a(u) : u();
      }),
        e.addListener('UserContentSeenByAdmin', (e) => {
          const { conversationId: n } = e.eventData;
          t.dispatch(r(n));
        }),
        e.addListener('ConversationSeen', (e) => {
          const { conversationId: n } = e.eventData;
          t.dispatch(o(n));
        }),
        e.addListener('AdminIsTyping', (e) => {
          const {
            conversationId: n,
            adminId: r,
            adminName: o,
            adminAvatar: s,
            hasDefaultAvatar: c,
          } = e.eventData;
          t.dispatch(i(n, r, o, yr(s, c)));
        }),
        e.addListener('MessengerCardUpdated', (e) => {
          const { cardUri: r } = e.eventData,
            i = Object(dr.b)(t.getState());
          i && Object(I.h)(i, r) && t.dispatch(n(b.b, i.id, !0));
        }),
        e.addListener('ConversationPartUpdated', (e) => {
          const { conversationId: r } = e.eventData;
          Object(dr.b)(t.getState()).id === String(r) && t.dispatch(n(b.b, r, !0));
        }),
        e.addListener('StartTour', (e) => {
          const { tour: n } = e.eventData,
            { user: r } = t.getState();
          Object(U.h)(r, 'received_nexus', 'tour', 'messenger', null, { tour_id: n.id }),
            r.isPresent && t.dispatch(s(n.id));
        }),
        e.addListener('NewContent', (e) => {
          const { entity_id: n, entity_type: r } = e.eventData,
            { user: i } = t.getState();
          Object(U.h)(i, 'received_nexus', 'new_content', 'messenger', null, {
            entity_id: n,
            entity_type: r,
          }),
            r === pr.a.BANNER_VIEW && t.dispatch(c(n));
        });
    }
    const yr = (e, t) => (t || 0 !== e.indexOf('http') ? void 0 : e),
      Sr = (e) => void 0 !== e && Array.isArray(e.endpoints) && e.endpoints.length > 0,
      jr = (e) => Object(N.a)(e.split('/')).split('-')[0],
      wr = (e, t) => jr(e) !== jr(t),
      Er = (e, t, n) =>
        Sr(e) && Sr(t)
          ? n || wr(e.endpoints[0], t.endpoints[0])
          : (!Sr(e) && Sr(t)) || (Sr(e) && !Sr(t));
    const Ir = (e) => {
        const {
            app: {
              color: t,
              secondaryColor: n,
              selfServeSuggestionsMatch: r,
              name: i,
              features: {
                anonymousInboundMessages: o,
                googleAnalytics: s,
                hubspotInstalled: c,
                inboundMessages: a,
                marketoEnrichmentInstalled: u,
                outboundMessages: d,
              },
              launcherLogoUrl: l,
              boundWebEvents: p,
              helpCenterSiteUrl: f,
              inboundConversationsDisabled: b,
              isInstantBootEnabled: h,
              alignment: g,
              horizontalPadding: v,
              verticalPadding: O,
              isDeveloperWorkspace: _,
              upfrontEmailCollectionSetting: y,
              customGoogleAnalyticsTrackerId: S,
            },
            launcher: { isLauncherEnabled: j },
            launcherDiscoveryMode: { hasDiscoveredLauncher: w },
            message: { conversationId: E },
            openOnBoot: { type: I, metadata: C },
            user: { role: T, locale: A, hasConversations: R },
          } = e,
          { conversations: P } = e,
          M = P ? P.byId : {};
        return {
          app: {
            color: t,
            secondaryColor: n,
            selfServeSuggestionsMatch: r,
            name: i,
            features: {
              anonymousInboundMessages: o,
              googleAnalytics: s,
              hubspotInstalled: c,
              inboundMessages: a,
              marketoEnrichmentInstalled: u,
              outboundMessages: d,
            },
            launcherLogoUrl: l,
            boundWebEvents: p,
            helpCenterSiteUrl: f,
            inboundConversationsDisabled: b,
            isInstantBootEnabled: h,
            alignment: g,
            horizontalPadding: v,
            verticalPadding: O,
            isDeveloperWorkspace: _,
            upfrontEmailCollectionSetting: y,
            customGoogleAnalyticsTrackerId: S,
          },
          launcher: { isLauncherEnabled: j },
          launcherDiscoveryMode: { hasDiscoveredLauncher: w },
          user: { role: T, locale: A, hasConversations: R },
          message: { conversationId: E },
          conversations: { byId: Cr(M) },
          openOnBoot: { type: I, metadata: C },
          operator: { lastComposerEvent: m(e) },
        };
      },
      Cr = (e) => {
        const t = Object.keys(e),
          n = {};
        return (
          t.forEach((t) => {
            const { dismissed: r, read: i } = e[t];
            n[t] = { fetchState: 'partial', dismissed: r, read: i };
          }),
          n
        );
      };
    let Tr = void 0,
      Ar = void 0,
      Rr = void 0;
    var Pr =
      ({
        updateRealtimeClient: e,
        shutdownRealtimeClient: t,
        getConversation: n,
        userContentSeenByAdmin: r,
        adminIsTyping: i,
        conversationReadElsewhere: o,
      }) =>
      (s) =>
      (c) =>
      (a) => {
        const u = c(a);
        switch (a.type) {
          case C.O: {
            const t = a.user.app.realtimeConfig,
              c = a.user.id;
            (Tr = e(Tr, Ar, t, s, n, r, i, o, c !== Rr, a.user.role)), (Ar = t), (Rr = c);
            break;
          }
          case C.U:
            t(Tr), (Tr = void 0), (Ar = void 0), (Rr = void 0);
        }
        if (!Tr) return u;
        switch (a.type) {
          case C.Jb:
            Tr.sendEvent('ConversationSeen', { conversationId: a.conversationId });
            break;
          case C.yd:
            Tr.throttleSendEvent('UserIsTyping', { conversationId: a.conversationId }, !0);
            break;
          case C.Yc:
            Tr.sendEvent('MessengerCardUpdated', { cardUri: a.card.uri });
        }
        return u;
      };
    const Mr = (e) => (
        !Object(j.a)() &&
          window.parent &&
          window.parent.intercomSettings &&
          window.parent.intercomSettings.app_id &&
          (e = `${e}-${window.parent.intercomSettings.app_id}`),
        e
      ),
      Dr = (e) => {
        try {
          return JSON.parse(he.a.get(e));
        } catch (e) {
          Object(U.c)('hydrate_read_error');
        }
      },
      kr = (e, t) => {
        try {
          he.a.set(e, JSON.stringify(t));
        } catch (e) {
          Object(U.c)('hydrate_write_error');
        }
      };
    const Nr = (e) => ({ type: C.lc, state: e });
    var Ur =
      (e, t = 'intercom-state') =>
      (n) =>
      (...r) => {
        const i = n(...r);
        if (((t = Mr(t)), !Object(L.d)())) return i;
        const o = Dr(t);
        if (o) {
          const e = i.getState();
          try {
            i.dispatch(Nr(o));
          } catch (n) {
            Object(U.c)('hydrate_error'),
              (function (e) {
                try {
                  he.a.remove(e);
                } catch (e) {
                  Object(U.c)('hydrate_remove_error');
                }
              })(t),
              i.dispatch(Nr(e));
          }
        }
        return (
          i.subscribe(() => {
            kr(t, e(i.getState()));
          }),
          i
        );
      };
    var Lr = () => (e) => (t) => {
        const n = e(t);
        switch (t.type) {
          case C.U:
            Object(L.d)() && t.clearCookies && he.a.remove(Mr('intercom-state'));
        }
        return n;
      },
      xr = {
        play(e) {
          if (!L.a.hasAudioSupport()) return;
          const t = this.load(e);
          if (t) {
            const e = t.play();
            e && e.catch(() => {});
          }
        },
        playFile(e) {
          e && L.a.hasAudioSupport() && this.play(n(228)(`./${e}`));
        },
        load(e) {
          return this.audio[e] || (this.audio[e] = new Audio(e)), this.audio[e];
        },
        playNotification: cr()(
          function (e) {
            this.play(n(228)(`./${e}`));
          },
          3e3,
          { leading: !0, trailing: !1 }
        ),
        audio: {},
      },
      Br = n(104);
    let $r = (() => {
      const e = he.b.get('played-notifications');
      return e ? JSON.parse(e) : {};
    })();
    const Fr = (e, t) => {
        ($r[e] = t), he.b.set('played-notifications', JSON.stringify($r));
      },
      Vr = (e, t) => {
        const n = Object(N.a)(e.parts);
        return (
          !((e, t) => {
            const n = $r[e];
            return n === t || -1 === n;
          })(e.id, n.id) ||
          ((e, t) => {
            const { notificationStatus: n } = e;
            return 'renotifying' === n && t;
          })(e, t)
        );
      },
      Hr = (e, t, n) => {
        let r = !1;
        e.forEach((e) => {
          const n = Object(N.a)(e.parts);
          Vr(e, t) && (r = !0), Fr(e.id, n.id);
        }),
          r && xr.playNotification(n);
      },
      Gr = (e, t) => {
        switch (e) {
          case C.D:
          case C.G:
            return 'failed.mp3';
          case C.E:
          case C.H:
            return 'submit.mp3';
          default:
            return t && t.author.isBot ? 'operator.mp3' : 'notification.mp3';
        }
      };
    var qr = (e) => (t) => (n) => {
        const r = t(n),
          i = e.getState();
        if (i.app.isAudioEnabled && !i.app.isBoundEventCreatorOpen) {
          switch (n.type) {
            case C.E:
            case C.H:
              xr.playFile(Gr(n.type));
              break;
            case C.D:
            case C.G:
              xr.playFile(Gr(n.type));
              break;
            case C.Vb: {
              const e = i.conversations.byId[n.conversationId];
              Hr([e], i.session.newSession, Gr(n.type));
              break;
            }
            case C.yb: {
              const { conversation: e, skipNotification: t } = n;
              if (e.read) return;
              const r = Object(N.a)(e.parts);
              if (!0 === t || Object(Br.a)(r.partType)) return void Fr(e.id, r.id);
              Hr([e], i.session.newSession, Gr(n.type, r));
              break;
            }
            case C.vb: {
              const e = Object(k.a)(i);
              Hr(e, i.session.newSession, Gr(n.type));
              break;
            }
            case C.O: {
              const { unreadDismissedConversationIds: e } = n.user;
              e.forEach((e) => {
                Fr(e, -1);
              });
              break;
            }
          }
          return r;
        }
      },
      zr = n(23);
    const Wr = [],
      Jr = [];
    var Yr =
        ({ getState: e }) =>
        (t) =>
        (n) =>
          (function (e, t) {
            const { user: n, app: r, article: i } = e();
            switch (t.type) {
              case C.Ub:
                return [
                  Object(U.i)(
                    n,
                    'received',
                    'message',
                    'messenger',
                    'from_launcher_discovery_mode'
                  ),
                ];
              case C.F:
                return [
                  Object(U.i)(
                    n,
                    'sent',
                    'reply',
                    t.isBorderless ? 'borderless' : 'messenger',
                    'in_conversation',
                    {
                      conversation_id: t.conversationId,
                      comment_id: t.part.id,
                      is_attachment: Object(u.f)(t.part.body),
                      is_annotated: t.isAnnotatedImage || !1,
                      within_office_hours: Object(u.h)(t.officeHoursResponse),
                      teammate_status: Object(u.d)(t.lastParticipatingAdmin),
                      time_since_last_active_in_minutes: Object(u.e)(t.lastParticipatingAdmin),
                      from_messenger_suggested_content: t.fromMessengerSuggestedContent,
                    }
                  ),
                ];
              case C.I:
                const e =
                    -1 !==
                    ['custom_bot', 'resolution_bot_auto_suggest'].indexOf(
                      t.conversationTriggerType
                    ),
                  o = 'resolution_bot_auto_suggest' === t.conversationTriggerType;
                return [
                  Object(U.i)(n, 'sent', 'message', 'messenger', 'in_new_conversation', {
                    conversation_id: t.conversation.id,
                    is_attachment: Object(u.f)(t.conversation.parts[0].body),
                    is_annotated: t.isAnnotatedImage || !1,
                    within_office_hours: Object(u.h)(t.officeHoursResponse),
                    from_suggestion: e,
                    from_messenger_suggested_content: o,
                    trigger_type: t.conversationTriggerType,
                  }),
                ];
              case C.hd:
                return [
                  Object(U.i)(n, 'sent', 'reply', 'messenger', 'in_conversation', {
                    type: 'automated_lead_qualification',
                    conversation_id: t.conversationId,
                    part_id: t.partId,
                    attribute_identifier: t.identifier,
                    reply: t.value,
                    attribute_type: t.identifierType,
                    form_type: t.formType,
                    attribute_is_custom_data: t.isCustomData,
                  }),
                ];
              case C.Q:
                return [
                  Object(U.i)(
                    n,
                    'sent',
                    'reaction',
                    t.isFromConversation ? 'messenger' : 'in_app',
                    t.isFromConversation ? 'in_conversation' : 'from_full',
                    { conversation_id: t.conversationId }
                  ),
                ];
              case C.Qb:
                const s = Object.assign(
                  { owner: 'educate', article_id: t.articleId, conversation_id: t.conversationId },
                  t.metricMetadata || {},
                  !t.fromBrowseMode && {
                    article_channel: 'messenger',
                    article_source: 'conversation',
                  }
                );
                return [
                  t.fromBrowseMode && Object(U.i)(n, 'clicked', zr.c, zr.i, 'messenger', s),
                  !!t.metricMetadata &&
                    !t.fromBrowseMode &&
                    Object(U.i)(
                      n,
                      'viewed',
                      'article',
                      'in_app',
                      'from_conversation',
                      s,
                      'educate_event'
                    ),
                ].filter(Boolean);
              case C.B:
                const { activeArticle: c } = i,
                  a =
                    c &&
                    c.reactionsReply &&
                    c.reactionsReply.reactionSet[t.reactionIndex] &&
                    c.reactionsReply.reactionSet[t.reactionIndex].emoji;
                return [
                  Object(U.i)(
                    n,
                    'sent',
                    'reaction',
                    'in_app',
                    'on_article',
                    {
                      owner: 'educate',
                      reaction: a,
                      article_id: t.articleId,
                      conversation_id: r.conversationId,
                    },
                    'educate_event'
                  ),
                ];
              case C.K:
                return t.boundEventMetadata
                  ? [
                      Object(U.i)(
                        n,
                        'triggered',
                        'bound_event',
                        'in_app',
                        'from_customer_site',
                        Object.assign(t.boundEventMetadata, { event_name: t.name })
                      ),
                    ]
                  : [];
              default:
                return [];
            }
          })(e, n).forEach((e) => Object(U.m)(e)),
          'DESTROY_SESSION' === n.type && (Wr.splice(0), Jr.splice(0)),
          t(n),
      Qr =
        !Object(j.a)() &&
        !0 === parent.__INTERCOM_REDUX_DEV_TOOLS__ &&
        parent.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
          ? parent.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: !1, traceLimit: 25 })
          : () => (e) => e;
    const Kr = Pr({
        updateRealtimeClient: mr,
        shutdownRealtimeClient: gr,
        getConversation: w.l,
        userContentSeenByAdmin: w.t,
        adminIsTyping: w.a,
        conversationReadElsewhere: w.c,
      }),
      Xr = (function (e) {
        let t, n;
        return (r) => (i) => (o) => {
          const s = r.getState();
          switch (o.type) {
            case C.O: {
              if (!s.session) return;
              const { appId: r } = s.session,
                { anonymousSessionDuration: i } = s.user,
                { anonymousId: a, anonymousSession: u } = o.user,
                { originCookieDomain: d } = o.user.app,
                { crossSiteCookies: l } = o.user.app.features,
                p = ir({
                  domainSetting: s.app.cookieDomain,
                  originCookieDomain: d,
                  meta: { action: o.type, role: o.user && o.user.role },
                });
              if (tr(t, a)) {
                const n = rr(i, Object(Kn.b)(o.user) ? 6048e5 : 2333e7);
                nr(e, Object(c.a)(r), a, n, p, l), (t = a);
              }
              if (tr(n, u)) {
                const t = rr(i, 6048e5);
                nr(e, Object(c.b)(r), u, t, p, l), (n = u);
              }
              break;
            }
            case C.U: {
              const { session: t } = s,
                { originCookieDomain: n } = s.app,
                r = ir({
                  domainSetting: s.app.cookieDomain,
                  originCookieDomain: n,
                  meta: { action: o.type, role: o.user && o.user.role },
                });
              if (t && o.clearCookies) {
                const { appId: n } = t;
                e.clear(Object(c.b)(n), { domain: r, path: '/' }),
                  e.clear(Object(c.a)(n), { domain: r, path: '/' }),
                  e.clear(Object(c.d)(n), { domain: r, path: '/' });
              }
              break;
            }
          }
          return i(o);
        };
      })(s.a),
      Zr = Qr(),
      ei = Ur(Ir);
    var ti = (e) =>
      Object(F.createStore)(
        kn,
        e,
        Object(F.compose)(Object(F.applyMiddleware)(H.a, Yr, qr, Jn, Kr, Xr, Lr, or.d), ei, Zr)
      );
    var ni = n(10),
      ri = n(58),
      ii = n(79),
      oi = n(55);
    const si = 0,
      ci = 12,
      ai = 14;
    var ui = n(246),
      di = n.n(ui),
      li = n(247),
      pi = n.n(li);
    const fi = [
      'app_id',
      'user_id',
      'email',
      'user_hash',
      'session_duration',
      'custom_data',
      'user_data',
      'widget',
      'custom_launcher_selector',
      'hide_default_launcher',
      'alignment',
      'horizontal_padding',
      'vertical_padding',
      'cookie_domain',
      'background_color',
      'action_color',
      'api_base',
    ];
    function bi(e) {
      return !pt()(e);
    }
    function hi(e) {
      return fi.indexOf(e) < 0;
    }
    function gi(e) {
      return Object.keys(e)
        .filter(hi)
        .filter(bi)
        .reduce((t, n) => ((t[n] = e[n]), t), {});
    }
    function mi(e) {
      return Object.keys(e)
        .filter(bi)
        .reduce((t, n) => {
          const r = e[n];
          return (
            (function (e) {
              return null != e;
            })(r) && (t[n] = r),
            t
          );
        }, {});
    }
    function vi(e) {
      return Object.assign(
        (function (e) {
          return e.custom_data ? gi(e.custom_data) : {};
        })(e),
        gi(e)
      );
    }
    function Oi(e) {
      return (
        (function (e) {
          if (!e.user_data) return;
          return mi({
            appId: e.app_id,
            email: e.user_data.email,
            userId: e.user_data.user_id,
            userHash: e.user_data.user_hash,
          });
        })(e) ||
        (function (e) {
          return mi({ appId: e.app_id, email: e.email, userId: e.user_id, userHash: e.user_hash });
        })(e)
      );
    }
    function _i(e) {
      return e &&
        e.widget &&
        !pt()(e.widget.activator) &&
        '#IntercomDefaultWidget' !== e.widget.activator
        ? e.widget.activator
        : null;
    }
    function yi(e) {
      return pt()(e.custom_launcher_selector) ? _i(e) : e.custom_launcher_selector;
    }
    function Si(e) {
      return pi()(e.hide_default_launcher)
        ? e.hide_default_launcher
          ? 'hide'
          : 'show'
        : (function (e) {
            return e.widget && '#IntercomDefaultWidget' === e.widget.activator
              ? 'show'
              : 'not-present';
          })(e);
    }
    function ji(e) {
      return e.session_duration || null;
    }
    function wi(e) {
      const t = {
        alignment: e.alignment,
        horizontalPadding: e.horizontal_padding,
        verticalPadding: e.vertical_padding,
        cookieDomain: e.cookie_domain,
        color: e.action_color,
        secondaryColor: e.background_color,
      };
      return di()(t, (e) => void 0 !== e);
    }
    var Ei = n(22),
      Ii = n(168),
      Ci = n(25),
      Ti = n.n(Ci);
    function Ai(e, t, n) {
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
    const Ri = Ti()('intercom.client-matching.client-match-object.base');
    class base_BaseClientMatchObject {
      constructor(e) {
        Ai(this, '_ruleset', void 0),
          Ai(this, '_predicateChain', void 0),
          (this._ruleset = e),
          (this._predicateChain = new predicate_chain_PredicateChain(e, () => {}));
      }
      getRuleset() {
        return this._ruleset;
      }
      getRulesetId() {
        return this._ruleset.ruleset_id;
      }
      getObjectType() {
        return this._ruleset.ruleset_link_object_type;
      }
      getSerializedObject() {
        return this._ruleset.serialized_object;
      }
      isMatchableInLocation(e) {
        return (
          !this._ruleset.matching_locations || -1 !== this._ruleset.matching_locations.indexOf(e)
        );
      }
      evaluatePredicates() {
        return !(!this.matchOnMobileBrowser() && Object(L.i)()) && this._predicateChain.evaluate();
      }
      canRematch() {
        return 'transient_match' === this.getRuleset().ruleset_match_behavior;
      }
      matchOnMobileBrowser() {
        return !0;
      }
      refreshActiveMatch(e) {
        this.onRefreshActiveMatch(this._ruleset.serialized_object, e);
      }
      async match(e, t) {
        Ri(`.match called [${this.getObjectType()}]`, this.getRuleset());
        const n = e.getState(),
          r = this.getRuleset(),
          i = this.onPreMatch(e);
        let o;
        try {
          const e = b.b
              .rulesetConditionSatisfied(
                n.session,
                r.ruleset_id,
                r.ruleset_link_id,
                r.user_id,
                r.company_id,
                r.predicates,
                r.checkpoint_id,
                r.notification_record_id,
                r.extra_context
              )
              .then((e) => this.selectMatchObject(e)),
            t = this.getSerializedObject();
          o = t ? await Promise.resolve(t) : await e;
        } catch (e) {
          return Object(U.b)(
            `Call to /match failed, unable to complete client match rulesetId=${this.getRulesetId()}`
          );
        }
        this.onMatch(o, e, i, t);
      }
      selectMatchObject(e) {
        return e;
      }
      onPreMatch(e) {}
      onMatch(e, t, n, r) {}
      onRefreshActiveMatch(e, t) {}
      unmatch(e) {
        Ri(`.unmatch called [${this.getObjectType()}]`, this.getRuleset()), this.onUnmatch(e);
      }
      onUnmatch(e) {}
    }
    class banner_BannerClientMatchObject extends base_BaseClientMatchObject {
      selectMatchObject(e) {
        return e.banner;
      }
      onMatch(e, t) {
        if (!e) return;
        const n = b.b.buildBanner(e);
        let { banners: r } = t.getState();
        (r = r.concat(n)), t.dispatch(Object(lr.f)(r));
      }
      canRematch() {
        return !0;
      }
      onUnmatch(e) {
        let { banners: t } = e.getState();
        (t = t.filter((e) => e.ruleset_id !== this.getRuleset().ruleset_id)),
          e.dispatch(Object(lr.f)(t));
      }
    }
    class tour_TourClientMatchObject extends base_BaseClientMatchObject {
      selectMatchObject(e) {
        return e.tour;
      }
      matchOnMobileBrowser() {
        return !1;
      }
      onPreMatch() {
        var e, t, n;
        return j.a
          ? {}
          : {
              currentUrl:
                null === (e = window) || void 0 === e
                  ? void 0
                  : null === (t = e.parent) || void 0 === t
                  ? void 0
                  : null === (n = t.location) || void 0 === n
                  ? void 0
                  : n.pathname,
            };
      }
      onMatch(e, t, n) {
        var r, i, o;
        t.dispatch(Object(p.l)(b.b.buildTour(e))),
          Object(j.a)() ||
            n.currentUrl ===
              (null === (r = window) || void 0 === r
                ? void 0
                : null === (i = r.parent) || void 0 === i
                ? void 0
                : null === (o = i.location) || void 0 === o
                ? void 0
                : o.pathname) ||
            (Object(U.c)('tour_match_url_mismatch'),
            Object(U.b)(`tour_match_url_mismatch rulesetId=${this.getRulesetId()}`));
      }
    }
    class inbound_trigger_InboundTriggerClientMatchObject extends base_BaseClientMatchObject {
      selectMatchObject(e) {
        return e.composerSuggestions;
      }
      onMatch(e, t) {
        t.dispatch(Object(d.a)(e));
      }
      onUnmatch(e) {
        e.dispatch(Object(d.b)(this.getRulesetId()));
      }
    }
    var Pi = n(101);
    class answerbot_predictive_context_AnswerbotPredictiveContextClientMatchObject extends base_BaseClientMatchObject {
      selectMatchObject(e) {
        return e.answerbotPredictiveContexts;
      }
      onMatch(e, t) {
        t.dispatch(Object(Pi.a)(e));
      }
      onUnmatch(e) {
        e.dispatch(Object(Pi.a)(null));
      }
    }
    const Mi = Ti()('intercom.client-match-object.messenger-trigger');
    class messenger_trigger_MessengerTriggerClientMatchObject extends base_BaseClientMatchObject {
      constructor(...e) {
        var t, n, r;
        super(...e),
          (r = void 0),
          (n = '_node') in (t = this)
            ? Object.defineProperty(t, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = r);
      }
      selectMatchObject() {
        return null;
      }
      onMatch(e, t) {
        (this._node = this._findDOMNode(e)), t.dispatch(Object(ii.a)(e, b.b));
      }
      onUnmatch(e) {
        e.dispatch(Object(ii.b)(this.messengerTriggerId()));
      }
      onRefreshActiveMatch(e, t) {
        this._shouldRefreshActiveMatch() &&
          (Mi(`TriggerId=${e.id} (${e.selector}) is missing from the page, re-attaching listener`),
          this.onUnmatch(t),
          this.onMatch(e, t));
      }
      messengerTriggerId() {
        return this.getSerializedObject().id;
      }
      _shouldRefreshActiveMatch() {
        return Boolean(this._node && !this._documentContains(this._node));
      }
      _findDOMNode(e) {
        return window.parent.document.querySelector(e.selector);
      }
      _documentContains(e) {
        return window.parent.document.contains
          ? window.parent.document.contains(e)
          : window.parent.document.body.contains(e);
      }
    }
    class chat_ChatClientMatchObject extends base_BaseClientMatchObject {
      selectMatchObject(e) {
        return e.chat;
      }
      onMatch(e, t) {
        e && t.dispatch(Object(w.o)(b.b, Object(b.a)(e)));
      }
    }
    class custom_bot_CustomBotClientMatchObject extends base_BaseClientMatchObject {
      selectMatchObject(e) {
        return e.customBot;
      }
      onMatch(e, t) {
        e && t.dispatch(Object(w.o)(b.b, Object(b.a)(e)));
      }
    }
    class post_PostClientMatchObject extends base_BaseClientMatchObject {
      selectMatchObject(e) {
        return e.post;
      }
      onMatch(e, t) {
        e && t.dispatch(Object(w.o)(b.b, Object(b.a)(e)));
      }
    }
    class seriesCondition_SeriesConditionClientMatchObject extends base_BaseClientMatchObject {
      selectMatchObject(e) {
        return e.seriesCondition;
      }
      onMatch(e, t, n, r) {
        r.createOrUpdateUser({}, 'apiUpdate', !0);
      }
    }
    function Di(e) {
      switch (e.ruleset_link_object_type) {
        case 'banner':
          return new banner_BannerClientMatchObject(e);
        case 'tour':
          return new tour_TourClientMatchObject(e);
        case 'inbound_trigger':
        case 'inbound_custom_bot':
          return new inbound_trigger_InboundTriggerClientMatchObject(e);
        case 'chat':
          return new chat_ChatClientMatchObject(e);
        case 'custom_bot':
          return new custom_bot_CustomBotClientMatchObject(e);
        case 'post':
          return new post_PostClientMatchObject(e);
        case 'messenger_trigger':
        case 'button_custom_bot':
          return new messenger_trigger_MessengerTriggerClientMatchObject(e);
        case 'answerbot_predictive_context':
          return new answerbot_predictive_context_AnswerbotPredictiveContextClientMatchObject(e);
        case 'series_condition':
          return new seriesCondition_SeriesConditionClientMatchObject(e);
        default:
          return new base_BaseClientMatchObject(e);
      }
    }
    function ki(e, t, n) {
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
    const Ni = Ti()('intercom.client-matching.client-match-runner');
    class client_match_runner_ClientMatchRunner {
      constructor(e, t) {
        ki(this, 'clientMatches', []),
          ki(this, 'activeClientMatchIds', {}),
          ki(this, 'evalLoop', null),
          ki(this, 'store', void 0),
          ki(this, 'session', void 0),
          (this.store = e),
          (this.session = t);
      }
      start() {
        null === this.evalLoop &&
          (Ni('Starting evaluation loop'),
          (this.evalLoop = setInterval(() => this.performClientMatching(), 500)));
      }
      stop() {
        null !== this.evalLoop &&
          (Ni('Stopping evaluation loop'),
          window.clearInterval(this.evalLoop),
          (this.evalLoop = null));
      }
      updateClientMatches(e, t) {
        this._removeMissingMatches(e, t), this._addNewMatches(e), this.performClientMatching();
      }
      performClientMatching() {
        const e = this._evaluateClientMatches();
        this._processResults(e);
      }
      _evaluateClientMatches() {
        const e = { positiveMatches: [], negativeMatches: [] };
        return (
          this.clientMatches.forEach((t) => {
            t.evaluatePredicates() ? e.positiveMatches.push(t) : e.negativeMatches.push(t);
          }),
          e
        );
      }
      _processResults(e) {
        e.negativeMatches.forEach((e) => {
          const t = e.getRulesetId();
          this.activeClientMatchIds[t] &&
            (e.unmatch(this.store),
            delete this.activeClientMatchIds[t],
            e.canRematch() || this._removeClientMatch(e));
        }),
          e.positiveMatches.forEach((e) => {
            const t = e.getRulesetId();
            this.activeClientMatchIds[t]
              ? e.refreshActiveMatch(this.store)
              : (e.match(this.store, this.session), (this.activeClientMatchIds[t] = !0));
          });
      }
      _addNewMatches(e) {
        for (const t of e)
          this.clientMatches.find((e) => e.getRulesetId() === t.ruleset_id) ||
            this.clientMatches.push(Di(t));
        this._evaluateClientMatches();
      }
      _removeMissingMatches(e, t) {
        for (const n of this.clientMatches)
          n.isMatchableInLocation(t) &&
            !e.find((e) => e.ruleset_id === n.getRulesetId()) &&
            (this.activeClientMatchIds[n.getRulesetId()] && n.unmatch(this.store),
            this._removeClientMatch(n));
      }
      _removeClientMatch(e) {
        this.clientMatches.splice(this.clientMatches.indexOf(e), 1);
      }
    }
    var Ui = n(230);
    const Li = (e) => {
        try {
          return e.self !== e.top;
        } catch (e) {
          return !1;
        }
      },
      xi = (e) => {
        try {
          return e.document.body.text.length > 0;
        } catch (e) {
          return !1;
        }
      };
    var Bi = n(231),
      $i = n(133),
      Fi = n(62);
    function Vi(e, t, n) {
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
    const { assign: Hi } = Object;
    function Gi(e, t, n) {
      let r = t(e.getState());
      return () => {
        const i = t(e.getState());
        r !== i && ((r = i), n(i));
      };
    }
    function qi(e) {
      return e.intercomSettings;
    }
    var zi = class session_Session {
        constructor(e, t, n) {
          Vi(
            this,
            'handleCustomLauncherClick',
            (e) => (
              e.preventDefault(),
              this.toggleMessenger(),
              this.addLauncherClickedMetric(),
              _i(qi(this.window)) &&
                (U.j.addIncrementOpMetric('legacyCustomLauncherClick'),
                U.j.buildAndAddHcMetric('legacyCustomLauncherClick')),
              !1
            )
          ),
            Vi(this, 'handleMessengerChange', (e) => {
              (e ? this.messengerOpenCallbacks : this.messengerCloseCallbacks).forEach((e) => e()),
                e && this.sendMessengerOpenRequest(),
                e ||
                  'messenger-trigger' !== Object(i.f)(this.store.getState()) ||
                  this.store.dispatch(ni.b.navigateBack());
            }),
            Vi(this, 'handleUnreadConversationCountChange', (e) => {
              this.unreadConversationCountChangeCallbacks.forEach((t) => t(e));
            }),
            (this.window = e),
            (this.store =
              t ||
              ((e) => {
                const t = ti(e);
                return t.subscribe(R(t)), t.subscribe($(t)), t;
              })()),
            (this.destroyApp = n),
            (this.isReady = !1),
            (this.hasScrapedCookies = !1),
            (this.readyCallbacks = []),
            (this.messengerOpenCallbacks = []),
            (this.messengerCloseCallbacks = []),
            (this.unreadConversationCountChangeCallbacks = []),
            (this.storeSubscribers = []),
            (this.clientMatchRunner = new client_match_runner_ClientMatchRunner(this.store, this)),
            this.startClientMatchRunner(),
            this.createMessengerChangeSubscriber(),
            this.createUnreadConversationCountChangeSubscriber();
        }
        createOrUpdateUser(e = {}, t, n = !1) {
          const r = this.getSettings(e),
            i = this.window.intercomEncryptedPayload;
          const o = this.store.getState().app;
          let { session: a } = this.store.getState();
          const d = Oi(r);
          if (
            ((a = Hi({}, a, d)),
            !(function (e) {
              return e && e.appId;
            })(a))
          )
            return (
              U.j.addIncrementOpMetric('bailed_ping_request_because_of_invalid_session'),
              Promise.resolve()
            );
          const { appId: l } = a;
          (({ appWindow: e, appId: t }) => {
            if (Li(e)) {
              const n = Li(e.parent),
                r = xi(e),
                { referrer: i } = e.document;
              Object(U.d)(`messenger_sandboxed - referrer=${i}`),
                Object(U.c)('messenger_sandboxed', { appId: t, appSandboxed: n, hasBodyText: r });
            }
          })({ appWindow: this.window, appId: l }),
            (a = Hi(
              {},
              a,
              (function (e) {
                const t = {},
                  n = s.a.read(Object(c.a)(e)) || s.a.read(Object(c.d)(e)),
                  r = s.a.read(Object(c.b)(e));
                n && Hi(t, { anonymousId: n });
                r && Hi(t, { anonymousSession: r });
                return t;
              })(l)
            ));
          const p = vi(r),
            f = {};
          if (Object(c.f)()) (f.marketo_tracking_cookie = null), (f.hubspot_tracking_cookie = null);
          else {
            if (o.features.marketoEnrichmentInstalled) {
              this.hasScrapedCookies = !0;
              const e = s.a.read(Object(c.e)());
              e && (f.marketo_tracking_cookie = e);
            }
            if (o.features.hubspotInstalled) {
              this.hasScrapedCookies = !0;
              const e = s.a.read(Object(c.c)());
              e && (f.hubspot_tracking_cookie = e);
            }
          }
          const h = yi(r);
          h && this.enableCustomLauncher(h),
            (this.stopMetricsPolling = U.j.startMetricsPolling(a, this.window)),
            Object(u.a)() || (U.j.buildAndAddHcMetric('apiBoot'), Object(u.m)(!0));
          const g = this.window.document.URL,
            m = wi(r);
          return (
            (function (e, t) {
              Object(ut.c)(e, (e) => t.dispatch(Object(Ii.c)(e))), Object(ut.f)(e);
            })(this.window, this.store),
            this.store
              .dispatch(
                ri.c.createOrUpdateUser(b.b, a, g, p, Si(r), ji(r), m, n, i, t, f, this.destroyApp)
              )
              .then((e) => e && this.handleUserCreateOrUpdate(e, r))
          );
        }
        sendMessengerOpenRequest() {
          this.whenReady(() =>
            this.store
              .dispatch(ri.c.sendMessengerOpen(b.b))
              .then((e) => e && this.handleMessengerOpen(e))
          );
        }
        handleMessengerOpen(e) {
          const { clientsideRulesetConditions: t, composerSuggestions: n } = e;
          this.store.dispatch(Object(d.e)(n)), this.clientMatchRunner.updateClientMatches(t, ai);
        }
        createCustomizationOverride(e) {
          const t = wi(this.getSettings(e));
          return this.store.dispatch(Object(l.b)(t));
        }
        destroy(e = !0) {
          this.store.dispatch(ri.c.destroySession(e)),
            this.stopMetricsPolling && this.stopMetricsPolling(),
            this.disableCustomLauncher(),
            this.removeStoreSubscribers(),
            this.stopClientMatchRunner(),
            ri.c.setupDefaultCreateOrUpdateUserRateLimiting(),
            ri.c.isDuplicateCreateOrUpdateUserRequest.reset();
        }
        openMessenger() {
          this.whenReady(() => {
            const { borderless: e } = this.store.getState();
            e.conversationId
              ? this.store.dispatch(ni.b.openConversationInMessenger(e.conversationId))
              : (this.store.dispatch(ni.b.showInitialScreen()),
                this.store.dispatch(ni.b.openMessenger()));
          });
        }
        openOnBoot() {
          const { getState: e, dispatch: t } = this.store,
            n = e().openOnBoot;
          if (!Object(o.b)() && n)
            switch (n.type) {
              case 'conversation':
                const e = n.metadata.conversationId;
                e && t(ni.b.openConversationInMessenger(e));
                break;
              case 'new_conversation':
                t(ni.b.openMessenger()), t(ni.b.showNewConversation());
                break;
              case 'article':
                if ('article-link' === n.metadata.componentId && n.metadata.url) {
                  var r, i;
                  const e =
                    null === (r = n.metadata) || void 0 === r
                      ? void 0
                      : null === (i = r.previousState) || void 0 === i
                      ? void 0
                      : i.metadata;
                  if (e) {
                    const n = e.conversationId;
                    n && t(ni.b.openConversationInMessenger(n));
                  }
                  t(
                    Object(f.b)(b.b, n.metadata.cardUri, n.metadata.componentId, n.metadata.url, {})
                  );
                }
            }
        }
        openOnBootAfterUserLoaded() {
          const { getState: e } = this.store,
            t = e().openOnBoot;
          if (!Object(o.b)() && t)
            switch (t.type) {
              case 'search_browse_article':
                return this.openIntoSearchBrowseArticle(t);
            }
        }
        async openIntoSearchBrowseArticle(e) {
          const { dispatch: t, getState: n } = this.store,
            { articleIds: r } = e.metadata,
            i = r.pop();
          Object(Fi.b)(n())
            ? (await t(Object(Bi.b)(b.b)),
              t(ni.b.showSearchBrowse(!0)),
              t(Object($i.i)(i, null, !0, !0)),
              t(ni.b.openMessenger(!0)),
              t(Object($i.h)(i, null, !0)))
            : t({ type: C.m });
        }
        async showConversation(e) {
          this.whenReady(async () => {
            this.store.dispatch(ni.b.getAndOpenConversation(e));
          });
        }
        closeMessenger() {
          this.whenReady(() => {
            this.store.dispatch(ni.b.closeMessenger());
          });
        }
        toggleMessenger() {
          this.whenReady(() => {
            this.store.dispatch(ni.b.toggleMessenger());
          });
        }
        showConversations() {
          this.whenReady(() => {
            this.store.dispatch(ni.b.openConversations());
          });
        }
        showNewConversation(e) {
          this.whenReady(() => {
            this.store.dispatch(ni.b.openNewConversation(e));
          });
        }
        startTour(e) {
          this.whenReady(() => {
            this.store.dispatch(Object(p.d)(e));
          });
        }
        createEvent(e, t) {
          this.whenReady(() => {
            this.store.dispatch(ri.c.createEvent(b.b, e, t)).then((e) => {
              if (!e) return;
              const { clientsideRulesetConditions: t, tour: n } = e;
              t && t.length > 0
                ? this.clientMatchRunner.updateClientMatches(t, ci)
                : n && this.store.dispatch(Object(p.l)(n));
            });
          });
        }
        createArticleReaction(e, t, n) {
          this.whenReady(() => {
            const {
                session: r,
                app: { isMessengerOpen: o },
              } = this.store.getState(),
              s = !('conversation' === Object(i.f)(this.store.getState()) && o);
            b.b.createArticleReaction(r, e, t, s, n);
          });
        }
        previewInboundCustomBot(e) {
          this.whenReady(() => {
            (e = b.b.buildComposerSuggestions(e)), this.store.dispatch(Object(d.d)(e));
          });
        }
        previewOutboundCustomBot(e) {
          this.store.dispatch(Object(ii.d)(b.b, e));
        }
        createMetric(e, t) {
          this.whenReady(() => {
            const { session: n, user: r } = this.store.getState();
            t = Hi(
              { anonymous_id: n.anonymousId, end_user_id: r.id, user_id: r.id, user_role: r.role },
              t
            );
            const i = n.appId,
              o = [
                {
                  name: e.toString(),
                  id: Ei.a.generateUUID(),
                  app_id_code: i,
                  created_at: Math.round(Date.now() / 1e3),
                  metadata: t,
                },
              ];
            Object(Kn.a)(r) && b.b.createMetrics(n, o);
          });
        }
        trigger(e) {
          this.store.dispatch(Object(ii.c)(e, b.b));
        }
        getSettings(e) {
          return Hi({}, qi(this.window), e);
        }
        getArticleReaction(e, t, n) {
          this.whenReady(() => {
            const { session: r } = this.store.getState();
            b.b.getArticleReaction(r, e, t, n);
          });
        }
        enterTourPreviewMode(e) {
          this.whenReady(() => {
            this.store.dispatch(Object(p.j)(b.b.buildTour(e), !0));
          });
        }
        exitTourPreviewMode() {
          this.whenReady(() => {
            this.store.dispatch(Object(p.k)());
          });
        }
        getVisitorId() {
          const { session: e } = this.store.getState();
          if (!e) return;
          const { appId: t } = e;
          return s.a.read(Object(c.a)(t)) || s.a.read(Object(c.d)(t));
        }
        onMessengerOpen(e) {
          this.messengerOpenCallbacks.push(e);
        }
        onMessengerClose(e) {
          this.messengerCloseCallbacks.push(e);
        }
        onUnreadConversationCountChange(e) {
          const t = this.store.getState(),
            n = Object(oi.b)(t);
          this.unreadConversationCountChangeCallbacks.push(e), e(n);
        }
        enableCustomLauncher(e) {
          if (Object(j.a)()) return;
          this.disableCustomLauncher();
          const t = this.window.document.getElementsByTagName('body')[0];
          (this.customLauncherClickHandler = Object(y.g)(t, e, this.handleCustomLauncherClick)),
            Object(y.c)(t, 'click', this.customLauncherClickHandler);
        }
        disableCustomLauncher() {
          if (!this.customLauncherClickHandler) return;
          const e = this.window.document.getElementsByTagName('body')[0];
          Object(y.y)(e, 'click', this.customLauncherClickHandler),
            (this.customLauncherClickHandler = null);
        }
        whenReady(e) {
          if (this.isReady) return setTimeout(e, 1);
          this.readyCallbacks.push(e);
        }
        executeReadyCallbacks() {
          const { readyCallbacks: e } = this;
          for (; e.length; ) e.shift()();
          this.readyCallbacks = [];
        }
        addLauncherClickedMetric() {
          this.whenReady(() => {
            const {
                user: e,
                app: { isMessengerOpen: t },
              } = this.store.getState(),
              n = { is_messenger_open: t, is_custom_launcher: !0 };
            U.j.buildAndAddMetric(e, 'clicked', 'launcher', 'in_app', '', n);
          });
        }
        handleUserCreateOrUpdate(e, t) {
          if (
            (this.shouldSendTrackingCookies() && this.createOrUpdateUser(t, 'apiUpdate'),
            e.clientsideRulesetConditions &&
              this.clientMatchRunner.updateClientMatches(e.clientsideRulesetConditions, si),
            this.isReady)
          )
            return e;
          if (
            (this.executeReadyCallbacks(),
            (this.isReady = !0),
            Object(Ui.a)() && this.window.parent.postMessage('messenger_session_ready', '*'),
            !Object(u.b)())
          ) {
            const e = this.store.getState(),
              t = Object(a.a)(e),
              n = Object(L.l)();
            U.j.buildAndAddHcMetric('createOrUpdateUser', {
              messengerIsVisible: Object(u.g)(t),
              isLauncherEnabled: t,
              hasDisplayNoneSet: n,
            }),
              Object(u.k)(!0);
          }
          return this.openOnBootAfterUserLoaded(), e;
        }
        shouldSendTrackingCookies() {
          const e = this.store.getState().app;
          return (
            !this.hasScrapedCookies &&
            (e.features.hubspotInstalled || e.features.marketoEnrichmentInstalled)
          );
        }
        startClientMatchRunner() {
          this.clientMatchRunner.start();
        }
        stopClientMatchRunner() {
          this.clientMatchRunner.stop();
        }
        createMessengerChangeSubscriber() {
          this.addStoreSubscriber(
            Gi(this.store, (e) => e.app.isMessengerOpen, this.handleMessengerChange)
          );
        }
        createUnreadConversationCountChangeSubscriber() {
          this.addStoreSubscriber(Gi(this.store, oi.b, this.handleUnreadConversationCountChange));
        }
        addStoreSubscriber(e) {
          this.storeSubscribers.push(this.store.subscribe(e));
        }
        removeStoreSubscribers() {
          this.storeSubscribers.forEach((e) => !!e && e());
        }
      },
      Wi = n(248),
      Ji = n.n(Wi),
      Yi = n(232),
      Qi = n(63),
      Ki = n(233),
      Xi = n(234),
      Zi = n(96);
    const eo = ({ isLauncherEnabled: e, customization: { verticalPadding: t } }) =>
      e ? t + 60 + 20 : t;
    var to = (e) =>
        `\n  @keyframes intercom-lightweight-app-launcher {\n    from {\n      opacity: 0;\n      transform: scale(0.5);\n    }\n    to {\n      opacity: 1;\n      transform: scale(1);\n    }\n  }\n\n  @keyframes intercom-lightweight-app-gradient {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n\n  @keyframes intercom-lightweight-app-messenger {\n    from {\n      opacity: 0;\n      transform: translateY(20px);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n\n  .intercom-lightweight-app {\n    position: fixed;\n    z-index: 2147483001;\n    width: 0;\n    height: 0;\n    font-family: intercom-font, "Helvetica Neue", "Apple Color Emoji", Helvetica, Arial, sans-serif;\n  }\n\n  .intercom-lightweight-app-gradient {\n    position: fixed;\n    z-index: 2147483002;\n    width: 500px;\n    height: 500px;\n    bottom: 0;\n    ${
          e.customization.alignment
        }: 0;\n    pointer-events: none;\n    background: radial-gradient(\n      ellipse at bottom ${
          e.customization.alignment
        },\n      rgba(29, 39, 54, 0.16) 0%,\n      rgba(29, 39, 54, 0) 72%);\n    animation: intercom-lightweight-app-gradient 200ms ease-out;\n  }\n\n  .intercom-lightweight-app-launcher {\n    position: fixed;\n    z-index: 2147483003;\n    bottom: ${(({
          isMobile: e,
          customization: t,
        }) => (e ? 20 : t.verticalPadding))(e)}px;\n    ${e.customization.alignment}: ${(({
          isMobile: e,
          customization: t,
        }) => (e ? 20 : t.horizontalPadding))(
          e
        )}px;\n    width: 60px;\n    height: 60px;\n    border-radius: 50%;\n    background: ${
          e.colors.primaryColor
        };\n    cursor: pointer;\n    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.06), 0 2px 32px 0 rgba(0, 0, 0, 0.16);\n    animation: intercom-lightweight-app-launcher 250ms ease;\n  }\n\n  .intercom-lightweight-app-launcher:focus {\n    outline: none;\n    ${
          e.accessibility.tabNavigation
            ? `box-shadow: inset 0 0 0 5px ${(({ accessibility: e }) => Zi.a[e.accessibilityTheme])(
                e
              )};`
            : ''
        }\n  }\n\n  .intercom-lightweight-app-launcher-icon {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 60px;\n    height: 60px;\n    transition: transform 100ms linear, opacity 80ms linear;\n  }\n\n  .intercom-lightweight-app-launcher-icon-open {\n    ${
          e.isMessengerOpen && !e.hideLightweightAppMessenger
            ? '\n        opacity: 0;\n        transform: rotate(30deg) scale(0);\n      '
            : '\n        opacity: 1;\n        transform: rotate(0deg) scale(1);\n      '
        }\n  }\n\n  .intercom-lightweight-app-launcher-icon-open svg {\n    width: 28px;\n    height: 32px;\n  }\n\n  .intercom-lightweight-app-launcher-icon-open svg path {\n    fill: ${
          e.colors.buttonTextColor
        };\n  }\n\n  .intercom-lightweight-app-launcher-icon-self-serve {\n    ${
          e.isMessengerOpen && !e.hideLightweightAppMessenger
            ? '\n        opacity: 0;\n        transform: rotate(30deg) scale(0);\n      '
            : '\n        opacity: 1;\n        transform: rotate(0deg) scale(1);\n      '
        }\n  }\n\n  .intercom-lightweight-app-launcher-icon-self-serve svg {\n    height: 56px;\n  }\n\n  .intercom-lightweight-app-launcher-icon-self-serve svg path {\n    fill: ${
          e.colors.buttonTextColor
        };\n  }\n\n  .intercom-lightweight-app-launcher-custom-icon-open {\n    max-height: 36px;\n    max-width: 36px;\n    ${
          e.isMessengerOpen && !e.hideLightweightAppMessenger
            ? '\n        opacity: 0;\n        transform: rotate(30deg) scale(0);\n      '
            : '\n        opacity: 1;\n        transform: rotate(0deg) scale(1);\n      '
        }\n  }\n\n  .intercom-lightweight-app-launcher-icon-minimize {\n    ${
          e.isMessengerOpen && !e.hideLightweightAppMessenger
            ? '\n        opacity: 1;\n        transform: rotate(0deg) scale(1);\n      '
            : '\n        opacity: 0;\n        transform: rotate(-60deg) scale(0);\n      '
        }\n  }\n\n  .intercom-lightweight-app-launcher-icon-minimize svg {\n    width: 16px;\n  }\n\n  .intercom-lightweight-app-launcher-icon-minimize svg path {\n    fill: ${
          e.colors.buttonTextColor
        };\n  }\n\n  .intercom-lightweight-app-messenger {\n    position: fixed;\n    z-index: 2147483003;\n    overflow: hidden;\n    background-color: white;\n    animation: intercom-lightweight-app-messenger 250ms ease-out;\n    ${
          e.isMobile
            ? '\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n      '
            : `\n        width: 376px;\n        height: calc(100% - ${
                20 + eo(e)
              }px);\n        max-height: 704px;\n        min-height: 250px;\n        ${
                e.customization.alignment
              }: ${e.customization.horizontalPadding}px;\n        bottom: ${eo(
                e
              )}px;\n        box-shadow: 0 5px 40px rgba(0,0,0,0.16);\n        border-radius: 8px;\n      `
        }\n  }\n\n  .intercom-lightweight-app-messenger-header {\n    height: 75px;\n    background: linear-gradient(\n      135deg,\n      ${
          e.colors.gradientStartColor
        } 0%,\n      ${
          e.colors.gradientEndColor
        } 100%\n    );\n  }\n\n  @media print {\n    .intercom-lightweight-app {\n      display: none;\n    }\n  }\n`,
      no = n(38);
    const ro = (e, t) => {
        const { onLauncherClick: n, launcherLogoUrl: r, allowSelfServeIcon: i } = t,
          o = so(t),
          s = e.document.createElement('div');
        s.addEventListener('click', n, !0),
          s.addEventListener('keydown', o, !0),
          s.setAttribute('class', 'intercom-lightweight-app-launcher intercom-launcher'),
          s.setAttribute('role', 'button'),
          s.setAttribute('tabindex', '0'),
          s.setAttribute('aria-label', Object(no.e)('open_intercom_messenger')),
          s.setAttribute('aria-live', 'polite');
        const c = e.document.createElement('div');
        if (
          (c.setAttribute(
            'class',
            'intercom-lightweight-app-launcher-icon intercom-lightweight-app-launcher-icon-open'
          ),
          r)
        ) {
          const t = e.document.createElement('img');
          t.setAttribute('src', r),
            t.setAttribute('alt', ''),
            t.setAttribute('class', 'intercom-lightweight-app-launcher-custom-icon-open'),
            c.appendChild(t);
        } else
          i
            ? (c.setAttribute(
                'class',
                'intercom-lightweight-app-launcher-icon intercom-lightweight-app-launcher-icon-self-serve'
              ),
              (c.innerHTML =
                '<svg aria-hidden="true" viewBox="1 1 60 60"><path d="M27.765 42.244c-8.614 0-15.622-7.008-15.622-15.622S19.151 11 27.765 11s15.622 7.008 15.622 15.622-7.007 15.622-15.622 15.622zm0-28.398c-7.045 0-12.775 5.73-12.775 12.775s5.73 12.775 12.775 12.775 12.775-5.73 12.775-12.775-5.73-12.775-12.775-12.775z"/><path d="M34.869 39.146l4.014-3.738 9.286 9.114a3.164 3.164 0 01-.07 4.562l-.071.066a3.163 3.163 0 01-4.561-.257l-8.598-9.747zM27.77 34.173c-2.882 0-5.412-.876-7.656-2.526a1.002 1.002 0 01-.35-.81c.008-.461.445-.969 1.02-.959.284.005.493.153.713.308 1.837 1.302 3.832 1.971 6.275 1.971 1.875 0 4.492-.476 6.314-2.118a.98.98 0 01.638-.261.92.92 0 01.686.241c.222.209.33.527.336.735a1.02 1.02 0 01-.318.775c-1.333 1.237-4.262 2.644-7.658 2.644z"/></svg>\n'))
            : (c.innerHTML =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 32"><path d="M28 32s-4.714-1.855-8.527-3.34H3.437C1.54 28.66 0 27.026 0 25.013V3.644C0 1.633 1.54 0 3.437 0h21.125c1.898 0 3.437 1.632 3.437 3.645v18.404H28V32zm-4.139-11.982a.88.88 0 00-1.292-.105c-.03.026-3.015 2.681-8.57 2.681-5.486 0-8.517-2.636-8.571-2.684a.88.88 0 00-1.29.107 1.01 1.01 0 00-.219.708.992.992 0 00.318.664c.142.128 3.537 3.15 9.762 3.15 6.226 0 9.621-3.022 9.763-3.15a.992.992 0 00.317-.664 1.01 1.01 0 00-.218-.707z"/></svg>');
        s.appendChild(c);
        const a = e.document.createElement('div');
        return (
          a.setAttribute(
            'class',
            'intercom-lightweight-app-launcher-icon intercom-lightweight-app-launcher-icon-minimize'
          ),
          (a.innerHTML =
            '<svg viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M.116 4.884l1.768-1.768L8 9.232l6.116-6.116 1.768 1.768L8 12.768.116 4.884z"/></svg>'),
          s.appendChild(a),
          s
        );
      },
      io = (e, t, n, r, i, o) => (s) => {
        if (
          ((o.textContent = to(s)),
          t.locale !== s.locale && Object(no.d)(s.locale),
          !t.isAppActive && s.isAppActive
            ? e.document.body.appendChild(n)
            : t.isAppActive && !s.isAppActive && e.document.body.removeChild(n),
          !t.isLauncherEnabled && s.isLauncherEnabled)
        ) {
          const t = ro(e, s);
          n.appendChild(t);
        } else if (t.isLauncherEnabled && !s.isLauncherEnabled) {
          const t = ((e) => e.document.querySelector('.intercom-lightweight-app-launcher'))(e);
          t && n.contains(t) && n.removeChild(t);
        }
        t.isMessengerOpen || !s.isMessengerOpen || s.hideLightweightAppMessenger
          ? t.isMessengerOpen && !s.isMessengerOpen && (n.removeChild(r), n.removeChild(i))
          : (n.appendChild(r), n.appendChild(i)),
          (t = s);
      },
      oo = (e, t) => () => {
        const { body: n } = e.document;
        t && n.contains(t) && n.removeChild(t);
      },
      so =
        ({ onLauncherKeypress: e }) =>
        ({ keyCode: t }) => {
          (t !== y.a.ENTER && t !== y.a.SPACE) || e();
        },
      co =
        ({ onTabKeyDown: e }) =>
        ({ keyCode: t }) => {
          t === y.a.TAB && e();
        },
      ao =
        ({ onClick: e }) =>
        () => {
          e();
        };
    var uo = (e, t) => {
        const { isAppActive: n, isLauncherEnabled: r, isMessengerOpen: i, locale: o } = t;
        void 0 !== o && Object(no.d)(o);
        const s = co(t),
          c = ao(t);
        e.document.addEventListener('keydown', s, !0), e.document.addEventListener('click', c, !1);
        const a = e.document.createElement('div');
        if (
          (a.setAttribute('class', 'intercom-lightweight-app'),
          n && e.document.body.appendChild(a),
          r)
        ) {
          const n = ro(e, t);
          a.appendChild(n);
        }
        const u = e.document.createElement('div');
        u.setAttribute('class', 'intercom-lightweight-app-messenger intercom-messenger'),
          u.setAttribute('aria-live', 'polite');
        const d = e.document.createElement('div');
        d.setAttribute('class', 'intercom-lightweight-app-messenger-header'), u.appendChild(d);
        const l = e.document.createElement('div');
        l.setAttribute('class', 'intercom-lightweight-app-gradient'),
          i && (a.appendChild(u), a.appendChild(l));
        const p = e.document.createElement('style');
        p.setAttribute('id', 'intercom-lightweight-app-style'), p.setAttribute('type', 'text/css');
        const f = e.document.createTextNode(to(t));
        return (
          p.appendChild(f),
          a.appendChild(p),
          { updateLightweightApp: io(e, t, a, u, l, f), removeLightweightApp: oo(e, a) }
        );
      },
      lo = n(235),
      po = n(236);
    const fo = (e) => ({ type: C.Ec, isActive: e });
    var bo = n(75);
    function ho(e, t) {
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
    function go(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ho(Object(n), !0).forEach(function (t) {
              mo(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : ho(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function mo(e, t, n) {
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
    const vo = Object(h.createStructuredSelector)({
        isAppActive: lo.a,
        isLauncherEnabled: a.a,
        isMessengerOpen: Yi.a,
        customization: Qi.b,
        accessibility: Ki.a,
        colors: Xi.a,
        launcherLogoUrl: i.m,
        allowSelfServeIcon: i.c,
        locale: po.a,
        hideLightweightAppMessenger: i.h,
      }),
      Oo = (e) => {
        Object(U.e)('clicked', 'launcher', 'in_app', '', {
          is_messenger_open: !1,
          is_custom_launcher: !1,
          is_borderless_open: !1,
        }),
          e.dispatch(Object(ni.l)());
      };
    var _o = (e, t) => {
        const n = ((e, t) => ({
            isMobile: Object(o.b)(),
            onLauncherClick: () => {
              t.dispatch(Object(bo.b)(!1)), Oo(t);
            },
            onLauncherKeypress: () => {
              Oo(t);
            },
            onClick: () => {
              t.dispatch(Object(bo.b)(!1));
            },
            onTabKeyDown: () => {
              t.dispatch(Object(bo.b)(!0));
            },
          }))(0, t),
          r = vo(t.getState()),
          i = go(go({}, r), n),
          { updateLightweightApp: s, removeLightweightApp: c } = uo(e, i);
        t.dispatch(fo(!0));
        const a = t.subscribe(() => {
          const e = vo(t.getState());
          if (e === r) return;
          const i = go(go({}, e), n);
          s(i);
        });
        return () => {
          a(), c(e), t.dispatch(fo(!1));
        };
      },
      yo = n(169);
    const So = Object(h.createSelector)([(e) => e.app.isMessengerOpen], (e) => e),
      jo = Object(h.createSelector)([D.a], (e) => e.length > 0),
      wo = Object(h.createSelector)([k.a], (e) => e.length > 0),
      Eo = Object(h.createSelector)([yo.a], (e) => e.length > 0),
      Io = Object(h.createSelector)([(e) => e.install.isInstallModeOpen], (e) => e),
      Co = Object(h.createSelector)([(e) => e.banners], (e) => e.length > 0),
      To = Object(h.createSelector)([oi.b], (e) => e > 0),
      Ao = Object(h.createSelector)(
        [(e) => e.launcherDiscoveryMode.isLauncherDiscoveryModeOpening],
        (e) => e
      ),
      Ro = Object(h.createSelector)([(e) => e.tour.activeTour], (e) => null != e),
      Po = Object(h.createSelector)([(e) => e.survey], (e) => !!e);
    var Mo = Object(h.createSelector)(
      [So, jo, wo, Eo, Io, Co, To, Ao, Ro, Po],
      (e, t, n, r, i, o, s, c, a, u) => Boolean(e || t || n || r || i || o || s || c || a || u)
    );
    const Do = (e) =>
        new Promise((t) => {
          const n = e.subscribe(() => {
            Mo(e.getState()) && (n(), t());
          });
        }),
      ko = async (e = 3) => {
        try {
          const t = Date.now(),
            r = await Ji()(
              async () => await Promise.all([n.e(49), n.e(0)]).then(n.bind(null, 875)),
              { retries: e }
            ),
            i = Date.now();
          return Object(U.f)('load_app_bundle_duration', i - t), r.default;
        } catch (e) {
          throw (Object(U.c)('load_app_bundle_failed'), e);
        }
      },
      No = async (e) => {
        try {
          const n = e.getState(),
            { launcherLogoUrl: r } = n.app;
          if (!r) return;
          await ((t = r),
          new Promise((e, n) => {
            const r = new Image();
            r.addEventListener('load', () => e(r)),
              r.addEventListener('error', () => n(r)),
              (r.src = t);
          }));
        } catch (e) {
          Object(U.c)('load_launcher_image_failed');
        }
        var t;
      };
    var Uo = async (e, t) => {
      await No(t);
      const n = _o(e, t);
      let r,
        i = !0;
      return (
        Promise.race([
          new Promise((e) => {
            Object(j.a)() && e();
          }),
          Do(t),
        ]).then(async () => {
          if (!i) return;
          const [, o] = await Promise.all([
            ((s = 250),
            new Promise((e) => {
              setTimeout(e, s);
            })),
            ko(),
          ]);
          var s;
          (r = await o(e, t)), n();
        }),
        () => {
          i && (r ? r() : n(), (i = !1));
        }
      );
    };
    var Lo = class app_App {
      constructor(e) {
        var t, n, r;
        (r = (e) => {
          this.session.destroy(e),
            (this.session = new zi(this.window)),
            this.renderApp && this.renderApp.then((e) => e()),
            (this.renderApp = void 0);
        }),
          (n = 'destroySession') in (t = this)
            ? Object.defineProperty(t, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = r),
          (this.window = e),
          (this.session = new zi(this.window, null, this.destroySession));
      }
      createOrUpdateUser(e, t) {
        const n = this.session.createOrUpdateUser(e, t);
        return this.renderApp || (this.renderApp = Uo(this.window, this.session.store)), n;
      }
      openOnBoot() {
        this.session.openOnBoot();
      }
      createCustomizationOverride(e) {
        return this.session.createCustomizationOverride(e);
      }
      openMessenger() {
        this.session.openMessenger();
      }
      openMessengerFromAPI() {
        this.session.openMessenger();
        const { user: e } = this.session.store.getState();
        Object(U.h)(e, 'opened', 'messenger', 'in_app', 'from_api');
      }
      closeMessenger() {
        this.session.closeMessenger();
      }
      closeMessengerFromAPI() {
        this.session.closeMessenger();
        const { user: e } = this.session.store.getState();
        Object(U.h)(e, 'closed', 'messenger', 'messenger', 'from_api');
      }
      showConversations() {
        this.session.showConversations();
      }
      showNewConversation(e) {
        this.session.showNewConversation(e);
      }
      showConversation(e) {
        this.session.showConversation(e);
      }
      startTour(e) {
        const t = parseInt(e, 10);
        if (isNaN(t))
          return void Object(Bn.a)('Invalid tourId passed to startTour. tourId must be a number');
        this.session.startTour(t);
        const { user: n } = this.session.store.getState();
        Object(U.h)(n, 'requested', 'messenger', 'tour', 'from_api', { tour_id: t });
      }
      createEvent(e, t) {
        this.session.createEvent(e, t);
      }
      onMessengerOpen(e) {
        this.session.onMessengerOpen(e);
      }
      onMessengerClose(e) {
        this.session.onMessengerClose(e);
      }
      onUnreadConversationCountChange(e) {
        this.session.onUnreadConversationCountChange(e);
      }
      getArticleReaction(e, t, n) {
        this.session.getArticleReaction(e, t, n);
      }
      createArticleReaction(e, t, n) {
        this.session.createArticleReaction(e, t, n);
      }
      previewInboundCustomBot(e) {
        this.session.previewInboundCustomBot(e);
      }
      previewOutboundCustomBot(e) {
        this.session.previewOutboundCustomBot(e);
      }
      createMetric(e, t) {
        this.session.createMetric(e, t);
      }
      getVisitorId() {
        return this.session.getVisitorId();
      }
      enterTourPreviewMode(e) {
        return this.session.enterTourPreviewMode(e);
      }
      exitTourPreviewMode() {
        return this.session.exitTourPreviewMode();
      }
      trigger(e) {
        if (this.session.isReady) return this.session.trigger(e);
        Object(Bn.a)('Intercom is not ready. Aborting MessengerTrigger request');
      }
    };
    function xo(e) {
      return (...t) => {
        const n = {
            'boot'(t) {
              e.createCustomizationOverride(t), e.createOrUpdateUser(t, 'apiBoot'), e.openOnBoot();
            },
            'update'(t) {
              e.createCustomizationOverride(t), e.createOrUpdateUser(t, 'apiUpdate');
            },
            'shutdown'(t = !0) {
              e.destroySession(t);
            },
            'show'() {
              e.openMessengerFromAPI();
            },
            'showMessages'() {
              e.showConversations();
            },
            'showNewMessage'(t) {
              e.showNewConversation(t);
            },
            'startTour'(t) {
              e.startTour(t);
            },
            'hide'() {
              e.closeMessengerFromAPI();
            },
            'trackEvent'(t, n) {
              e.createEvent(t, n);
            },
            'onShow'(t) {
              e.onMessengerOpen(t);
            },
            'onHide'(t) {
              e.onMessengerClose(t);
            },
            'onUnreadCountChange'(t) {
              e.onUnreadConversationCountChange(t);
            },
            'trigger'(t) {
              e.trigger(t);
            },
            'getVisitorId': () => e.getVisitorId(),
            'version': () => '0bad3502405f8ca9b69bac9a8ba8bf112214f76d',
            'private:getArticleReaction': (t, n, r) => {
              e.getArticleReaction(t, n, r);
            },
            'private:createMetric': (t, n) => {
              e.createMetric(t, n);
            },
            'private:createArticleReaction': (t, n, r) => {
              e.createArticleReaction(t, n, r);
            },
            'private:enterTourPreviewMode': (t) => {
              e.enterTourPreviewMode(t);
            },
            'private:exitTourPreviewMode': () => {
              e.exitTourPreviewMode();
            },
            'private:previewInboundCustomBot': (t) => {
              e.previewInboundCustomBot(t);
            },
            'private:previewOutboundCustomBot': (t) => {
              e.previewOutboundCustomBot(t);
            },
            'private:showConversation': (t) => {
              e.showConversation(t);
            },
          },
          r = t[0];
        if (r && n[r]) return n[r](...t.slice(1));
      };
    }
    function Bo(e, t) {
      (t.Intercom = e), (t.Intercom.booted = !0);
    }
    function $o(e) {
      const t = (function (e) {
        return e.Intercom;
      })(e);
      return (t && t.q) || [];
    }
    function Fo(e) {
      return $o(e).some((e) => 'boot' === e[0] || 'shutdown' === e[0]);
    }
    function Vo(e, t) {
      const n = $o(t);
      for (; n.length; ) e(...n.shift());
    }
    var Ho = n(73),
      Go = n.n(Ho);
    const qo = n(158);
    var zo = n(14),
      Wo = n(100),
      Jo = n(99),
      Yo = n(56);
    if (Object(j.a)()) {
      const e = JSON.parse(Object(Yo.a)(window.location.href).window);
      Object(O.h)(e), Object(Jo.a)();
    } else Object(O.h)(window.parent);
    Object(r.a)(window),
      (function (e) {
        if (void 0 !== e)
          try {
            const t = new e.CustomEvent('test', { cancelable: !0 });
            if ((t.preventDefault(), !0 !== t.defaultPrevented))
              throw new Error('Could not prevent default');
          } catch (t) {
            const n = function (e, t) {
              ((t = t || {}).bubbles = !!t.bubbles), (t.cancelable = !!t.cancelable);
              const n = document.createEvent('CustomEvent');
              n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail);
              const r = n.preventDefault;
              return (
                (n.preventDefault = function () {
                  r.call(this);
                  try {
                    Object.defineProperty(this, 'defaultPrevented', {
                      get: function () {
                        return !0;
                      },
                    });
                  } catch (e) {
                    this.defaultPrevented = !0;
                  }
                }),
                n
              );
            };
            (n.prototype = e.Event.prototype), (e.CustomEvent = n);
          }
      })(window),
      Object(j.a)() ||
        (window.requestAnimationFrame =
          window.parent.requestAnimationFrame || window.requestAnimationFrame),
      Object(j.a)();
    const Qo = Object(j.a)() ? window : parent;
    Object(or.a)(window);
    const Ko = new Lo(Qo);
    Object(or.b)(Ko.session.store);
    const Xo = xo(Ko),
      Zo = Fo(Qo);
    Vo(Xo, Qo),
      Bo(Xo, Qo),
      Zo || Xo('boot'),
      new (class intersection_Intersection {
        constructor(e) {
          var t, n, r;
          (r = [
            'http://intercom.test',
            'http://app.intercom.test',
            'https://app.intercom.com',
            'https://app.intercom.io',
            'https://app.eu.intercom.com',
            'https://intercomrades.intercom.io',
            'https://intercomrades.intercom.com',
            'https://intercomrades.eu.intercom.com',
          ]),
            (n = 'intercomDomains') in (t = this)
              ? Object.defineProperty(t, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[n] = r),
            (this.window = e),
            this.setupIntersection();
        }
        setupIntersection() {
          this.openerExists() &&
            (this.modeExists()
              ? this.injectIntersection()
              : (this.setupMessageListener(),
                this.sendMessageToOpener({ type: 'intercom-snippet__ready' })));
        }
        sendMessageToOpener(e) {
          this.window.opener.postMessage(e, '*');
        }
        openerExists() {
          return !!this.window.opener;
        }
        modeExists() {
          return !!he.b.get('intercom-snippet__intersection-mode');
        }
        setupMessageListener() {
          this.window.addEventListener('message', this.bootIntersection.bind(this));
        }
        getMode() {
          return he.b.get('intercom-snippet__intersection-mode');
        }
        getAppId() {
          return he.b.get('intercom-snippet__intersection-app-id');
        }
        bootIntersection(e) {
          -1 !== this.intercomDomains.indexOf(e.origin) &&
            'intercom-snippet__boot-intersection' === e.data.type &&
            (this.removeMessageListener(),
            this.saveOpenerOrigin(e.origin),
            this.injectIntersection(e.data.mode, e.data.appId));
        }
        removeMessageListener() {
          this.window.removeEventListener('message', this.bootIntersection.bind(this));
        }
        saveOpenerOrigin(e) {
          he.b.set('intercom-snippet__intersection-opener-origin', e);
        }
        injectIntersection(e, t) {
          this.window.document.getElementById('intersection-container') ||
            (this.injectIntersectionFrame(), this.injectEmberApp(e, t));
        }
        injectIntersectionFrame() {
          const e = this.window.document.createElement('div'),
            t = this.window.document.createElement('iframe');
          (e.id = 'intersection-container'),
            (t.id = 'intersection-frame'),
            (t.frameBorder = 0),
            e.appendChild(t),
            this.window.document.body.insertAdjacentElement('beforeend', e);
        }
        createScriptTag(e) {
          const t = document.createElement('script');
          return (t.type = 'text/javascript'), (t.charset = 'utf-8'), (t.src = e), t;
        }
        injectFrameTemplate(e, t = this.getMode(), n = this.getAppId()) {
          const r = Go()(t),
            i = Go()(n);
          e.open(),
            e.write(
              `\n    <!doctype html>\n      <head>\n        <title>Intersection </title>\n        <meta name="intersection-mode" content=${r}>\n        <meta name="intersection-appId" content=${i}>\n      </head>\n      <body></body>\n    </html>\n    `
            ),
            e.close();
        }
        injectIntersectionScripts(e) {
          const t = this.createScriptTag(qo.intersection_js),
            n = this.createScriptTag(qo.intersection_styles);
          e.contentWindow.document.head.appendChild(t),
            e.contentWindow.document.head.appendChild(n);
        }
        injectEmberApp(e, t) {
          const n = this.window.document.getElementById('intersection-frame');
          this.injectFrameTemplate(n.contentDocument, e, t), this.injectIntersectionScripts(n);
        }
      })(Qo),
      Object(j.a)() &&
        (window.addEventListener(
          'message',
          Object(S.b)({
            'intercom:boot': ({ settings: e }) => {
              Ko.createOrUpdateUser(e);
            },
            'intercom:window-resize': ({ updates: e }) => {
              Object(O.i)(e);
            },
            'intercom:api-call': ({ args: e }) => {
              Xo(...e);
            },
            'intercom:ready-for-boot': ({ cookie: e }) => {
              Object(Wo.b)(e), Object(S.i)();
            },
          })
        ),
        Object(zo.a)('intercom:prepare-for-boot'));
  },
]);
