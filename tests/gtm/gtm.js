// Pretty Printed https://www.googletagmanager.com/gtm.js

// Copyright 2012 Google Inc. All rights reserved.
(function () {
  var data = {
    resource: {
      version: '1',

      macros: [
        {
          function: '__u',
          vtp_component: 'URL',
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: '__u',
          vtp_component: 'HOST',
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: '__u',
          vtp_component: 'PATH',
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: '__f',
          vtp_component: 'URL',
        },
        {
          function: '__e',
        },
      ],
      tags: [],
      predicates: [],
      rules: [],
    },
    runtime: [],
  };

  /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
  var ca,
    da = function (a) {
      var b = 0;
      return function () {
        return b < a.length
          ? {
              done: !1,
              value: a[b++],
            }
          : {
              done: !0,
            };
      };
    },
    ea = function (a) {
      var b = 'undefined' != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      return b
        ? b.call(a)
        : {
            next: da(a),
          };
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
      var ja = {
          a: !0,
        },
        ka = {};
      try {
        ka.__proto__ = ja;
        ia = ka.a;
        break a;
      } catch (a) {}
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
  var la = ha,
    ma = function (a, b) {
      a.prototype = fa(b.prototype);
      a.prototype.constructor = a;
      if (la) la(a, b);
      else
        for (var c in b)
          if ('prototype' != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.oj = b.prototype;
    },
    oa = this || self,
    qa = function (a) {
      return a;
    };
  var ra = {},
    sa = function (a, b) {
      ra[a] = ra[a] || [];
      ra[a][b] = !0;
    },
    ta = function (a) {
      for (var b = [], c = ra[a] || [], d = 0; d < c.length; d++)
        c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
      for (var e = 0; e < b.length; e++)
        b[e] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'.charAt(b[e] || 0);
      return b.join('');
    };
  var ua = function () {},
    wa = function (a) {
      return 'function' == typeof a;
    },
    g = function (a) {
      return 'string' == typeof a;
    },
    xa = function (a) {
      return 'number' == typeof a && !isNaN(a);
    },
    ya = function (a) {
      var b = '[object Array]' == Object.prototype.toString.call(Object(a));
      Array.isArray ? Array.isArray(a) !== b && sa('TAGGING', 4) : sa('TAGGING', 5);
      return b;
    },
    za = function (a, b) {
      if (Array.prototype.indexOf) {
        var c = a.indexOf(b);
        return 'number' == typeof c ? c : -1;
      }
      for (var d = 0; d < a.length; d++) if (a[d] === b) return d;
      return -1;
    },
    Aa = function (a, b) {
      if (a && ya(a)) for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    Ba = function (a, b) {
      if (!xa(a) || !xa(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    Fa = function (a, b) {
      for (var c = new Ea(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    Ia = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    La = function (a) {
      return (
        !!a &&
        ('[object Arguments]' == Object.prototype.toString.call(a) ||
          Object.prototype.hasOwnProperty.call(a, 'callee'))
      );
    },
    Ma = function (a) {
      return Math.round(Number(a)) || 0;
    },
    Na = function (a) {
      return 'false' == String(a).toLowerCase() ? !1 : !!a;
    },
    Oa = function (a) {
      var b = [];
      if (ya(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    Qa = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, '') : '';
    },
    Ra = function () {
      return new Date(Date.now());
    },
    Sa = function () {
      return Ra().getTime();
    },
    Ea = function () {
      this.prefix = 'gtm.';
      this.values = {};
    };
  Ea.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  Ea.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var Ta = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Ua = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c();
          } catch (d) {}
        }
      };
    },
    Va = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Wa = function (a) {
      for (var b in a) if (a.hasOwnProperty(b)) return !0;
      return !1;
    },
    Xa = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    Ya = function (a, b) {
      for (var c = {}, d = c, e = a.split('.'), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    $a = /^\w{1,9}$/,
    ab = function (a, b) {
      b = b || ',';
      var c = [];
      Ia(a, function (d, e) {
        $a.test(d) && e && c.push(d);
      });
      return c.join(b);
    };
  var bb,
    cb = function () {
      if (void 0 === bb) {
        var a = null,
          b = oa.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy('goog#html', {
              createHTML: qa,
              createScript: qa,
              createScriptURL: qa,
            });
          } catch (c) {
            oa.console && oa.console.error(c.message);
          }
          bb = a;
        } else bb = a;
      }
      return bb;
    };
  var eb = function (a, b) {
    this.o = b === db ? a : '';
  };
  eb.prototype.toString = function () {
    return this.o + '';
  };
  var db = {};
  var ib = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  var jb;
  a: {
    var kb = oa.navigator;
    if (kb) {
      var lb = kb.userAgent;
      if (lb) {
        jb = lb;
        break a;
      }
    }
    jb = '';
  }
  var pb = function (a) {
    return -1 != jb.indexOf(a);
  };
  var qb = {},
    rb = function (a, b, c) {
      this.o = c === qb ? a : '';
    };
  rb.prototype.toString = function () {
    return this.o.toString();
  };
  var sb = function (a) {
      return a instanceof rb && a.constructor === rb ? a.o : 'type_error:SafeHtml';
    },
    tb = function (a) {
      var b = cb(),
        c = b ? b.createHTML(a) : a;
      return new rb(c, null, qb);
    },
    ub = new rb((oa.trustedTypes && oa.trustedTypes.emptyHTML) || '', 0, qb);
  var vb = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    wb = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  var xb = (function (a) {
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
      a.innerHTML = sb(ub);
      return !c.parentElement;
    }),
    yb = function (a, b) {
      if (xb()) for (; a.lastChild; ) a.removeChild(a.lastChild);
      a.innerHTML = sb(b);
    };
  var m = window,
    A = document,
    zb = navigator,
    Ab = A.currentScript && A.currentScript.src,
    Bb = function (a, b) {
      var c = m[a];
      m[a] = void 0 === c ? b : c;
      return m[a];
    },
    Cb = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in
                {
                  loaded: 1,
                  complete: 1,
                } && ((a.onreadystatechange = null), b());
            }));
    },
    Db = function (a, b, c) {
      var d = A.createElement('script');
      d.type = 'text/javascript';
      d.async = !0;
      var e,
        f = cb(),
        h = f ? f.createScriptURL(a) : a;
      e = new eb(h, db);
      d.src = e instanceof eb && e.constructor === eb ? e.o : 'type_error:TrustedResourceUrl';
      var k,
        l,
        n = ((d.ownerDocument && d.ownerDocument.defaultView) || window).document,
        p = null === (l = n.querySelector) || void 0 === l ? void 0 : l.call(n, 'script[nonce]');
      (k = p ? p.nonce || p.getAttribute('nonce') || '' : '') && d.setAttribute('nonce', k);
      Cb(d, b);
      c && (d.onerror = c);
      var q = A.getElementsByTagName('script')[0] || A.body || A.head;
      q.parentNode.insertBefore(d, q);
      return d;
    },
    Eb = function () {
      if (Ab) {
        var a = Ab.toLowerCase();
        if (0 === a.indexOf('https://')) return 2;
        if (0 === a.indexOf('http://')) return 3;
      }
      return 1;
    },
    Fb = function (a, b) {
      var c = A.createElement('iframe');
      c.height = '0';
      c.width = '0';
      c.style.display = 'none';
      c.style.visibility = 'hidden';
      var d = (A.body && A.body.lastChild) || A.body || A.head;
      d.parentNode.insertBefore(c, d);
      Cb(c, b);
      void 0 !== a && (c.src = a);
      return c;
    },
    Ib = function (a, b, c) {
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
    Jb = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent('on' + b, c);
    },
    Kb = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent('on' + b, c);
    },
    G = function (a) {
      m.setTimeout(a, 0);
    },
    Lb = function (a, b) {
      return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null;
    },
    Mb = function (a) {
      var b = a.innerText || a.textContent || '';
      b && ' ' != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ''));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, ' '));
      return b;
    },
    Nb = function (a) {
      var b = A.createElement('div'),
        c = tb('A<div>' + a + '</div>');
      yb(b, c);
      b = b.lastChild;
      for (var d = []; b.firstChild; ) d.push(b.removeChild(b.firstChild));
      return d;
    },
    Ob = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, h = 0; f && h <= c; h++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    Pb = function (a) {
      (zb.sendBeacon && zb.sendBeacon(a)) || Ib(a);
    },
    Qb = function (a, b) {
      var c = a[b];
      c && 'string' === typeof c.animVal && (c = c.animVal);
      return c;
    },
    Rb = function (a) {
      var b = A.featurePolicy;
      return b && wa(b.features) ? -1 !== b.features().indexOf(a) : !1;
    };
  /*
     jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var Ub = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Vb = function (a) {
      if (null == a) return String(a);
      var b = Ub.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : 'object';
    },
    Wb = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    Xb = function (a) {
      if (!a || 'object' != Vb(a) || a.nodeType || a == a.window) return !1;
      try {
        if (a.constructor && !Wb(a, 'constructor') && !Wb(a.constructor.prototype, 'isPrototypeOf'))
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || Wb(a, b);
    },
    H = function (a, b) {
      var c = b || ('array' == Vb(a) ? [] : {}),
        d;
      for (d in a)
        if (Wb(a, d)) {
          var e = a[d];
          'array' == Vb(e)
            ? ('array' != Vb(c[d]) && (c[d] = []), (c[d] = H(e, c[d])))
            : Xb(e)
            ? (Xb(c[d]) || (c[d] = {}), (c[d] = H(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  var Yb = function (a) {
    if (void 0 === a || ya(a) || Xb(a)) return !0;
    switch (typeof a) {
      case 'boolean':
      case 'number':
      case 'string':
      case 'function':
        return !0;
    }
    return !1;
  };
  var Zb = (function () {
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
      We: a('convert_case_to'),
      Xe: a('convert_false_to'),
      Ye: a('convert_null_to'),
      Ze: a('convert_true_to'),
      $e: a('convert_undefined_to'),
      Yi: a('debug_mode_metadata'),
      lb: a('function'),
      Ch: a('instance_name'),
      Eh: a('live_only'),
      Fh: a('malware_disabled'),
      Gh: a('metadata'),
      aj: a('original_activity_id'),
      bj: a('original_vendor_template_id'),
      Ih: a('once_per_event'),
      Cf: a('once_per_load'),
      dj: a('priority_override'),
      ej: a('respected_consent_types'),
      Gf: a('setup_tags'),
      Hf: a('tag_id'),
      If: a('teardown_tags'),
    };
  })();
  var wc;
  var xc = [],
    yc = [],
    Ec = [],
    Fc = [],
    Gc = [],
    Hc = {},
    Ic,
    Jc,
    Kc,
    Lc = function (a, b) {
      var c = a['function'];
      if (!c) throw Error('Error: No function name given for function call.');
      var d = Hc[c],
        e = {},
        f;
      for (f in a)
        if (a.hasOwnProperty(f))
          if (0 === f.indexOf('vtp_'))
            d && b && b.Tf && b.Tf(a[f]), (e[void 0 !== d ? f : f.substr(4)] = a[f]);
          else if (f === Zb.Pg.toString() && a[f]) {
          }
      d && b && b.Sf && (e.vtp_gtmCachedValues = b.Sf);
      return void 0 !== d ? d(e) : wc(c, e, b);
    },
    Nc = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = Mc(a[e], b, c));
      return d;
    },
    Mc = function (a, b, c) {
      if (ya(a)) {
        var d;
        switch (a[0]) {
          case 'function_id':
            return a[1];
          case 'list':
            d = [];
            for (var e = 1; e < a.length; e++) d.push(Mc(a[e], b, c));
            return d;
          case 'macro':
            var f = a[1];
            if (c[f]) return;
            var h = xc[f];
            if (!h || b.Be(h)) return;
            c[f] = !0;
            try {
              var k = Nc(h, b, c);
              k.vtp_gtmEventId = b.id;
              d = Lc(k, b);
              Kc && (d = Kc.Xh(d, k));
            } catch (y) {
              b.lg && b.lg(y, Number(f)), (d = !1);
            }
            c[f] = !1;
            return d;
          case 'map':
            d = {};
            for (var l = 1; l < a.length; l += 2) d[Mc(a[l], b, c)] = Mc(a[l + 1], b, c);
            return d;
          case 'template':
            d = [];
            for (var n = !1, p = 1; p < a.length; p++) {
              var q = Mc(a[p], b, c);
              Jc && (n = n || q === Jc.Vc);
              d.push(q);
            }
            return Jc && n ? Jc.$h(d) : d.join('');
          case 'escape':
            d = Mc(a[1], b, c);
            if (Jc && ya(a[1]) && 'macro' === a[1][0] && Jc.si(a)) return Jc.Hi(d);
            d = String(d);
            for (var r = 2; r < a.length; r++) $b[a[r]] && (d = $b[a[r]](d));
            return d;
          case 'tag':
            var u = a[1];
            if (!Fc[u]) throw Error('Unable to resolve tag reference ' + u + '.');
            return (d = {
              bg: a[2],
              index: u,
            });
          case 'zb':
            var t = {
              arg0: a[2],
              arg1: a[3],
              ignore_case: a[5],
            };
            t['function'] = a[1];
            var v = Oc(t, b, c),
              w = !!a[4];
            return w || 2 !== v ? w !== (1 === v) : null;
          default:
            throw Error('Attempting to expand unknown Value type: ' + a[0] + '.');
        }
      }
      return a;
    },
    Oc = function (a, b, c) {
      try {
        return Ic(Nc(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    };
  var Rc = function (a) {
      function b(r) {
        for (var u = 0; u < r.length; u++) d[r[u]] = !0;
      }
      for (var c = [], d = [], e = Pc(a), f = 0; f < yc.length; f++) {
        var h = yc[f],
          k = Qc(h, e);
        if (k) {
          for (var l = h.add || [], n = 0; n < l.length; n++) c[l[n]] = !0;
          b(h.block || []);
        } else null === k && b(h.block || []);
      }
      for (var p = [], q = 0; q < Fc.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    Qc = function (a, b) {
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
    Pc = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = Oc(Ec[c], a));
        return b[c];
      };
    };
  var Sc = {
    Xh: function (a, b) {
      b[Zb.We] && 'string' === typeof a && (a = 1 == b[Zb.We] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(Zb.Ye) && null === a && (a = b[Zb.Ye]);
      b.hasOwnProperty(Zb.$e) && void 0 === a && (a = b[Zb.$e]);
      b.hasOwnProperty(Zb.Ze) && !0 === a && (a = b[Zb.Ze]);
      b.hasOwnProperty(Zb.Xe) && !1 === a && (a = b[Zb.Xe]);
      return a;
    },
  };
  var K = {
    ac: '_ee',
    ad: '_syn_or_mod',
    fj: '_uei',
    Vd: '_eu',
    cj: '_pci',
    Ab: 'event_callback',
    Kc: 'event_timeout',
    Ca: 'gtag.config',
    Ka: 'gtag.get',
    wa: 'purchase',
    yb: 'refund',
    cb: 'begin_checkout',
    vb: 'add_to_cart',
    wb: 'remove_from_cart',
    Yg: 'view_cart',
    bf: 'add_to_wishlist',
    Ja: 'view_item',
    Rb: 'view_promotion',
    Gc: 'select_promotion',
    zd: 'select_item',
    xb: 'view_item_list',
    af: 'add_payment_info',
    Xg: 'add_shipping_info',
    Na: 'value_key',
    Va: 'value_callback',
    Da: 'allow_ad_personalization_signals',
    Xb: 'restricted_data_processing',
    Sb: 'allow_google_signals',
    Ga: 'cookie_expires',
    Tb: 'cookie_update',
    Zb: 'session_duration',
    Pc: 'session_engaged_time',
    Pa: 'user_properties',
    na: 'transport_url',
    R: 'ads_data_redaction',
    xa: 'user_data',
    Ub: 'first_party_collection',
    D: 'ad_storage',
    H: 'analytics_storage',
    Ue: 'region',
    Ve: 'wait_for_update',
    Fa: 'conversion_linker',
    Ea: 'conversion_cookie_prefix',
    fa: 'value',
    da: 'currency',
    wf: 'trip_type',
    X: 'items',
    pf: 'passengers',
    Bd: 'allow_custom_scripts',
    Eb: 'session_id',
    uf: 'quantity',
    kb: 'transaction_id',
    ib: 'language',
    Jc: 'country',
    Hc: 'allow_enhanced_conversions',
    Gd: 'aw_merchant_id',
    Ed: 'aw_feed_country',
    Fd: 'aw_feed_language',
    Dd: 'discount',
    Ma: 'developer_id',
    Rc: 'delivery_postal_code',
    Md: 'estimated_delivery_date',
    Kd: 'shipping',
    Td: 'new_customer',
    Hd: 'customer_lifetime_value',
    Ld: 'enhanced_conversions',
    zb: 'page_view',
    ma: 'linker',
    P: 'domains',
    Cb: 'decorate_forms',
    lf: 'enhanced_conversions_automatic_settings',
    hh: 'auto_detection_enabled',
  };
  K.zf = [K.wa, K.yb, K.cb, K.vb, K.wb, K.Yg, K.bf, K.Ja, K.Rb, K.Gc, K.xb, K.zd, K.af, K.Xg];
  K.yf = [K.Da, K.Sb, K.Tb];
  K.Af = [K.Ga, K.Kc, K.Zb, K.Pc];
  var td = function (a) {
    sa('GTM', a);
  };
  var ud = function (a, b) {
    this.o = a;
    this.defaultValue = void 0 === b ? !1 : b;
  };
  var vd = new ud(1936, !0),
    wd = new ud(1933);
  var yd = function () {
    var a = xd;
    if (a.ze && a.hasOwnProperty('ze')) return a.ze;
    var b = new a();
    return (a.ze = b);
  };
  var xd = function () {
      var a = {};
      this.o = function (b, c) {
        return null != a[b] ? a[b] : c;
      };
      this.s = function () {
        a[wd.o] = !0;
      };
    },
    zd = function (a) {
      return yd().o(a.o, a.defaultValue);
    };
  var Ad = [];

  function Bd() {
    var a = Bb('google_tag_data', {});
    a.ics ||
      (a.ics = {
        entries: {},
        set: Ld,
        update: Md,
        addListener: Nd,
        notifyListeners: Od,
        active: !1,
        usedDefault: !1,
      });
    return a.ics;
  }

  function Ld(a, b, c, d, e, f) {
    var h = Bd();
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
          r = {
            region: p,
            initial: 'granted' === b,
            update: l.update,
            quiet: q,
          };
        if ('' !== d || !1 !== l.initial) k[a] = r;
        q &&
          m.setTimeout(function () {
            k[a] === r && r.quiet && ((r.quiet = !1), Pd(a), Od(), sa('TAGGING', 2));
          }, f);
      }
    }
  }

  function Md(a, b) {
    var c = Bd();
    c.active = !0;
    if (void 0 != b) {
      var d = Qd(a),
        e = c.entries,
        f = (e[a] = e[a] || {});
      f.update = 'granted' === b;
      var h = Qd(a);
      f.quiet ? ((f.quiet = !1), Pd(a)) : h !== d && Pd(a);
    }
  }

  function Nd(a, b) {
    Ad.push({
      ne: a,
      hi: b,
    });
  }

  function Pd(a) {
    for (var b = 0; b < Ad.length; ++b) {
      var c = Ad[b];
      ya(c.ne) && -1 !== c.ne.indexOf(a) && (c.pg = !0);
    }
  }

  function Od(a) {
    for (var b = 0; b < Ad.length; ++b) {
      var c = Ad[b];
      if (c.pg) {
        c.pg = !1;
        try {
          c.hi({
            Wh: a,
          });
        } catch (d) {}
      }
    }
  }
  var Qd = function (a) {
      var b = Bd().entries[a] || {};
      return void 0 !== b.update ? b.update : b.initial;
    },
    Rd = function (a) {
      return (Bd().entries[a] || {}).initial;
    },
    Sd = function (a) {
      return !(Bd().entries[a] || {}).quiet;
    },
    Td = function () {
      return zd(wd) ? Bd().active : !1;
    },
    Ud = function () {
      return Bd().usedDefault;
    },
    Vd = function (a, b) {
      Bd().addListener(a, b);
    },
    Wd = function (a) {
      Bd().notifyListeners(a);
    },
    Xd = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!Sd(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        Vd(b, function (e) {
          d || c() || ((d = !0), a(e));
        });
      } else a({});
    },
    Yd = function (a, b) {
      function c() {
        for (var f = [], h = 0; h < d.length; h++) {
          var k = d[h];
          !1 === Qd(k) || e[k] || (f.push(k), (e[k] = !0));
        }
        return f;
      }
      var d = g(b) ? [b] : b,
        e = {};
      c().length !== d.length &&
        Vd(d, function (f) {
          var h = c();
          0 < h.length && ((f.ne = h), a(f));
        });
    };

  function Zd(a) {
    for (var b = [], c = 0; c < $d.length; c++) {
      var d = a($d[c]);
      b[c] = !0 === d ? '1' : !1 === d ? '0' : '-';
    }
    return b.join('');
  }
  var $d = [K.D, K.H],
    ae = function (a) {
      var b = a[K.Ue];
      b && td(40);
      var c = a[K.Ve];
      c && td(41);
      for (
        var d = ya(b) ? b : [b],
          e = {
            Nb: 0,
          };
        e.Nb < d.length;
        e = {
          Nb: e.Nb,
        },
          ++e.Nb
      )
        Ia(
          a,
          (function (f) {
            return function (h, k) {
              if (h !== K.Ue && h !== K.Ve) {
                var l = d[f.Nb];
                Bd().set(h, k, l, 'US', 'US-WI', c);
              }
            };
          })(e)
        );
    },
    be = function (a, b) {
      Ia(a, function (c, d) {
        Bd().update(c, d);
      });
      Wd(b);
    },
    M = function (a) {
      var b = Qd(a);
      return void 0 != b ? b : !0;
    },
    ce = function () {
      return 'G1' + Zd(Qd);
    },
    de = function (a, b) {
      Yd(a, b);
    },
    ee = function (a, b) {
      Xd(a, b);
    };
  var ge = function (a) {
      return fe ? A.querySelectorAll(a) : null;
    },
    he = function (a, b) {
      if (!fe) return null;
      if (Element.prototype.closest)
        try {
          return a.closest(b);
        } catch (e) {
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
          break;
        }
        d = d.parentElement || d.parentNode;
      } while (null !== d && 1 === d.nodeType);
      return null;
    },
    ie = !1;
  if (A.querySelectorAll)
    try {
      var je = A.querySelectorAll(':root');
      je && 1 == je.length && je[0] == A.documentElement && (ie = !0);
    } catch (a) {}
  var fe = ie;
  var ke,
    le = !1;
  var me = function (a) {
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
  var ve = /:[0-9]+$/,
    we = function (a, b, c) {
      for (var d = a.split('&'), e = 0; e < d.length; e++) {
        var f = d[e].split('=');
        if (decodeURIComponent(f[0]).replace(/\+/g, ' ') === b) {
          var h = f.slice(1).join('=');
          return c ? h : decodeURIComponent(h).replace(/\+/g, ' ');
        }
      }
    },
    ze = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ('protocol' === b || 'port' === b) a.protocol = xe(a.protocol) || xe(m.location.protocol);
      'port' === b
        ? (a.port = String(
            Number(a.hostname ? a.port : m.location.port) ||
              ('http' == a.protocol ? 80 : 'https' == a.protocol ? 443 : '')
          ))
        : 'host' === b &&
          (a.hostname = (a.hostname || m.location.hostname).replace(ve, '').toLowerCase());
      return ye(a, b, c, d, e);
    },
    ye = function (a, b, c, d, e) {
      var f,
        h = xe(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case 'url_no_fragment':
          f = Ae(a);
          break;
        case 'protocol':
          f = h;
          break;
        case 'host':
          f = a.hostname.replace(ve, '').toLowerCase();
          if (c) {
            var k = /^www\d*\./.exec(f);
            k && k[0] && (f = f.substr(k[0].length));
          }
          break;
        case 'port':
          f = String(Number(a.port) || ('http' == h ? 80 : 'https' == h ? 443 : ''));
          break;
        case 'path':
          a.pathname || a.hostname || sa('TAGGING', 1);
          f = '/' == a.pathname.substr(0, 1) ? a.pathname : '/' + a.pathname;
          var l = f.split('/');
          0 <= za(d || [], l[l.length - 1]) && (l[l.length - 1] = '');
          f = l.join('/');
          break;
        case 'query':
          f = a.search.replace('?', '');
          e && (f = we(f, e, void 0));
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
    xe = function (a) {
      return a ? a.replace(':', '').toLowerCase() : '';
    },
    Ae = function (a) {
      var b = '';
      if (a && a.href) {
        var c = a.href.indexOf('#');
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    Be = function (a) {
      var b = A.createElement('a');
      a && (b.href = a);
      var c = b.pathname;
      '/' !== c[0] && (a || sa('TAGGING', 1), (c = '/' + c));
      var d = b.hostname.replace(ve, '');
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
    Ce = function (a) {
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
        e = Be(a),
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
  var De = {},
    Ee = !0,
    Ie = !1;
  De.Mg = 'true';
  var Je = function (a) {
    if ('false' === De.Mg || !Ee) return !1;
    if (Ie) return !0;
    var b,
      c = 'AW-' + a;
    if (!le) {
      le = !0;
      ke = ke || {};
    }
    b = ke[c];
    return !!b && !!b.preAutoPii;
  };
  var Ke = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),
    Le = new RegExp(/@(gmail|googlemail)\./i),
    Me = new RegExp(/support|noreply/i),
    Ne = 'SCRIPT STYLE IMG SVG PATH BR'.split(' '),
    Oe = ['BR'],
    Pe = {};

  function Qe(a) {
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
          d = Qe(a.parentElement) + '>:nth-child(' + e + ')';
        } else d = '';
        c = d;
      }
      b = c;
    }
    return b;
  }

  function Re(a, b) {
    if (1 >= a.length) return a;
    var c = a.filter(b);
    return 0 == c.length ? a : c;
  }

  function Se(a) {
    if (0 == a.length) return null;
    var b;
    b = Re(a, function (c) {
      return !Me.test(c.va);
    });
    b = Re(b, function (c) {
      return 'INPUT' === c.element.tagName.toUpperCase();
    });
    b = Re(b, function (c) {
      return !me(c.element);
    });
    return b[0];
  }
  var Te = function (a) {
      a = a || {
        xe: !0,
        ye: !0,
      };
      a.Za = a.Za || {
        email: !0,
        phone: !0,
        Qf: !0,
      };
      var b,
        c = a,
        d = !!c.xe + '.' + !!c.ye;
      c && c.jd && c.jd.length && (d += '.' + c.jd.join('.'));
      c && c.Za && (d += '.' + c.Za.email + '.' + c.Za.phone + '.' + c.Za.Qf);
      b = d;
      var e = Pe[b];
      if (e && 200 > Sa() - e.timestamp) return e.result;
      var f;
      var h = [],
        k = A.body;
      if (k) {
        for (var l = k.querySelectorAll('*'), n = 0; n < l.length && 1e4 > n; n++) {
          var p = l[n];
          if (!(0 <= Ne.indexOf(p.tagName.toUpperCase()))) {
            for (var q = !1, r = 0; r < p.childElementCount && 1e4 > r; r++)
              if (!(0 <= Oe.indexOf(p.children[r].tagName.toUpperCase()))) {
                q = !0;
                break;
              }
            q || h.push(p);
          }
        }
        f = {
          elements: h,
          status: 1e4 < l.length ? '2' : '1',
        };
      } else
        f = {
          elements: h,
          status: '4',
        };
      var u = f,
        t = u.status,
        v;
      if (a.Za && a.Za.email) {
        for (var w = u.elements, y = [], x = 0; x < w.length; x++) {
          var z = w[x],
            B = z.textContent;
          z.value && (B = z.value);
          if (B) {
            var C = B.match(Ke);
            if (C) {
              var E = C[0],
                F;
              if (m.location) {
                var D = ye(m.location, 'host', !0);
                F = 0 <= E.toLowerCase().indexOf(D);
              } else F = !1;
              F ||
                y.push({
                  element: z,
                  va: E,
                });
            }
          }
        }
        var N;
        var I = a && a.jd;
        if (I && 0 !== I.length) {
          for (var L = [], Q = 0; Q < y.length; Q++) {
            for (var S = !0, J = 0; J < I.length; J++) {
              var P = I[J];
              if (P && he(y[Q].element, P)) {
                S = !1;
                break;
              }
            }
            S && L.push(y[Q]);
          }
          N = L;
        } else N = y;
        v = Se(N);
        10 < y.length && (t = '3');
      }
      var Y = [];
      if (v) {
        var O = v.element,
          W = {
            va: v.va,
            tagName: O.tagName,
            type: 1,
          };
        a.xe && (W.querySelector = Qe(O));
        a.ye && (W.isVisible = !me(O));
        Y.push(W);
      }
      var V = {
        elements: Y,
        status: t,
      };
      Pe[b] = {
        timestamp: Sa(),
        result: V,
      };
      return V;
    },
    Ue = function (a) {
      return a.tagName + ':' + a.isVisible + ':' + a.va.length + ':' + Le.test(a.va);
    };
  var Ve = function (a) {
      return /^e\d+$/.test(a) || /^[0-9A-Za-z_-]{43}$/.test(a);
    },
    We = function (a) {
      return void 0 === a || null === a ? '' : g(a) ? Qa(String(a)) : 'e0';
    },
    Ye = function (a) {
      return a.replace(Xe, '');
    },
    $e = function (a) {
      return Ze(a.replace(/\s/g, ''));
    },
    Ze = function (a) {
      return Qa(a.replace(af, '').toLowerCase());
    },
    cf = function (a) {
      a = a.replace(/[\s-()/.]/g, '');
      '+' !== a.charAt(0) && (a = '+' + a);
      return bf.test(a) ? a : 'e0';
    },
    ef = function (a) {
      var b = a.toLowerCase().split('@');
      if (2 == b.length) {
        var c = b[0];
        /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ''));
        c = c + '@' + b[1];
        if (df.test(c)) return c;
      }
      return 'e0';
    },
    hf = function (a, b, c) {
      window.Promise || c([], []);
      Promise.all(
        a.map(function (d) {
          return d.value && ff(d.name)
            ? gf(d.value).then(function (e) {
                d.value = e;
              })
            : Promise.resolve();
        })
      )
        .then(function () {
          c(a, b);
        })
        .catch(function () {
          c([], []);
        });
    },
    gf = function (a) {
      if ('' === a || 'e0' === a) return Promise.resolve(a);
      if (m.crypto && m.crypto.subtle)
        try {
          var b = jf(a);
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
            .catch(function () {
              return 'e2';
            });
        } catch (c) {
          return Promise.resolve('e2');
        }
      else return Promise.resolve('e1');
    },
    jf = function (a) {
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
    af = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
    df = /^\S+@\S+\.\S+$/,
    bf = /^\+\d{11,15}$/,
    Xe = /[.~]/g,
    kf = {},
    lf =
      ((kf.email = 'em'),
      (kf.phone_number = 'pn'),
      (kf.first_name = 'fn'),
      (kf.last_name = 'ln'),
      (kf.street = 'sa'),
      (kf.city = 'ct'),
      (kf.region = 'rg'),
      (kf.country = 'co'),
      (kf.postal_code = 'pc'),
      (kf.error_code = 'ec'),
      kf),
    mf = function (a, b, c) {
      function d(t, v, w) {
        var y = t[v];
        ya(y) || (y = [y]);
        for (var x = 0; x < y.length; ++x) {
          var z = We(y[x]);
          '' !== z &&
            h.push({
              name: v,
              value: w(z),
              index: void 0,
            });
        }
      }

      function e(t, v, w, y) {
        var x = We(t[v]);
        '' !== x &&
          h.push({
            name: v,
            value: w(x),
            index: y,
          });
      }

      function f(t) {
        return function (v) {
          td(64);
          return t(v);
        };
      }
      var h = [],
        k = [];
      if ('https:' === m.location.protocol) {
        var l = function (t, v) {
          var w = t[v];
          ya(w) || (w = [w]);
          for (var y = 0; y < w.length; ++y) {
            var x = We(w[y]);
            if ('' !== x) return x;
          }
          return null;
        };
        d(a, 'email', ef);
        var n = l(a, 'email');
        if (n) for (var p = 0; p < b.length; p++) k.push(b[p].va.toLowerCase() === n.toLowerCase());
        d(a, 'phone_number', cf);
        d(a, 'first_name', f($e));
        d(a, 'last_name', f($e));
        var q = a.home_address || {};
        d(q, 'street', f(Ze));
        d(q, 'city', f(Ze));
        d(q, 'postal_code', f(Ye));
        d(q, 'region', f(Ze));
        d(q, 'country', f(Ye));
        var r = a.address || {};
        ya(r) || (r = [r]);
        for (var u = 0; u < r.length; u++)
          e(r[u], 'first_name', $e, u),
            e(r[u], 'last_name', $e, u),
            e(r[u], 'street', Ze, u),
            e(r[u], 'city', Ze, u),
            e(r[u], 'postal_code', Ye, u),
            e(r[u], 'region', Ze, u),
            e(r[u], 'country', Ye, u);
        hf(h, k, c);
      } else
        h.push({
          name: 'error_code',
          value: 'e3',
          index: void 0,
        }),
          c(h, k);
    },
    nf = function (a, b) {
      mf(a, [], function (c, d) {
        for (var e = ['tv.1'], f = 0; f < c.length; ++f) {
          var h = c[f].name,
            k = c[f].value,
            l = c[f].index,
            n = lf[h];
          n && k && (!ff(h) || Ve(k)) && (void 0 !== l && (n += l), e.push(n + '.' + k));
        }
        b(encodeURIComponent(e.join('~')), d);
      });
    },
    of = function (a, b) {
      if (m.Promise)
        try {
          return new Promise(function (c) {
            mf(a, b, function (d, e) {
              for (var f = ['tv.1'], h = 0; h < d.length; ++h) {
                var k = d[h].name,
                  l = d[h].value,
                  n = d[h].index,
                  p = lf[k];
                p && l && (!ff(k) || Ve(l)) && (void 0 !== n && (p += n), f.push(p + '.' + l));
              }
              c({
                vc: encodeURIComponent(f.join('~')),
                ic: e,
              });
            });
          });
        } catch (c) {}
    },
    ff = function (a) {
      return -1 !== ['email', 'phone_number', 'first_name', 'last_name', 'street'].indexOf(a);
    };
  var pf = function () {
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
    qf = function (a) {
      var b = new pf();
      b.eventModel = a;
      return b;
    },
    rf = function (a, b) {
      a.targetConfig = b;
      return a;
    },
    sf = function (a, b) {
      a.containerConfig = b;
      return a;
    },
    tf = function (a, b) {
      a.remoteConfig = b;
      return a;
    },
    uf = function (a, b) {
      a.globalConfig = b;
      return a;
    },
    vf = function (a, b) {
      a.onSuccess = b;
      return a;
    },
    wf = function (a, b) {
      a.setContainerTypeLoaded = b;
      return a;
    },
    xf = function (a, b) {
      a.getContainerTypeLoaded = b;
      return a;
    },
    yf = function (a, b) {
      a.onFailure = b;
      return a;
    };
  pf.prototype.getWithConfig = function (a) {
    if (void 0 !== this.eventModel[a]) return this.eventModel[a];
    if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
    if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
    if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a];
    if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
  };
  var zf = function (a) {
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
    Af = function (a, b, c) {
      function d(h) {
        Xb(h) &&
          Ia(h, function (k, l) {
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
  var Bf = {},
    Cf = null,
    Df = Math.random();
  Bf.M = 'GTM-NM2VXCP';
  Bf.$c = '891';
  Bf.$i = '';
  Bf.Rg =
    'ChEI8MfIiAYQ5cTs1Nr02NCiARIkACs1EPLcgKYL09NV+n1Q6bhCTsKIbATXxm5Ndj9dBPG4mrUjGgI0gQ\x3d\x3d';
  var Ef = {
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
    Ff = {
      __paused: !0,
      __tg: !0,
    },
    Gf;
  for (Gf in Ef) Ef.hasOwnProperty(Gf) && (Ff[Gf] = !0);
  var Hf = 'www.googletagmanager.com/gtm.js';
  var If = Hf,
    Jf = Na(''),
    Kf = null,
    Lf = null,
    Mf = 'https://www.googletagmanager.com/a?id=' + Bf.M + '&cv=1',
    Nf = {},
    Of = {},
    Pf = function () {
      var a = Cf.sequence || 1;
      Cf.sequence = a + 1;
      return a;
    };
  Bf.Qg = 'true';
  var Qf = {},
    Rf = new Ea(),
    Sf = {},
    Tf = {},
    Wf = {
      name: 'dataLayer',
      set: function (a, b) {
        H(Ya(a, b), Sf);
        Uf();
      },
      get: function (a) {
        return Vf(a, 2);
      },
      reset: function () {
        Rf = new Ea();
        Sf = {};
        Uf();
      },
    },
    Vf = function (a, b) {
      return 2 != b ? Rf.get(a) : Xf(a);
    },
    Xf = function (a) {
      var b,
        c = a.split('.');
      b = b || [];
      for (var d = Sf, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== za(b, d)) return;
      }
      return d;
    },
    Yf = function (a, b) {
      Tf.hasOwnProperty(a) || (Rf.set(a, b), H(Ya(a, b), Sf), Uf());
    },
    Uf = function (a) {
      Ia(Tf, function (b, c) {
        Rf.set(b, c);
        H(Ya(b, void 0), Sf);
        H(Ya(b, c), Sf);
        a && delete Tf[b];
      });
    },
    $f = function (a, b, c) {
      Qf[a] = Qf[a] || {};
      Qf[a][b] = Zf(b, c);
    },
    Zf = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? Xf(a) : Rf.get(a);
      'array' === Vb(d) || 'object' === Vb(d) ? (c = H(d)) : (c = d);
      return c;
    },
    ag = function (a, b) {
      if (Qf[a]) return Qf[a][b];
    },
    bg = function (a, b) {
      Qf[a] && delete Qf[a][b];
    };
  var cg = function (a, b, c) {
      if (c) {
        var d = c.selector_type,
          e = String(c.value),
          f;
        if ('js_variable' === d) {
          e = e.replace(/\["?'?/g, '.').replace(/"?'?\]/g, '');
          for (var h = e.split(','), k = 0; k < h.length; k++) {
            var l = h[k].trim();
            if (l) {
              if (0 === l.indexOf('dataLayer.')) f = Vf(l.substring(10));
              else {
                var n = l.split('.');
                f = m[n.shift()];
                for (var p = 0; p < n.length; p++) f = f && f[n[p]];
              }
              if (void 0 !== f) break;
            }
          }
        } else if ('css_selector' === d && fe) {
          var q = ge(e);
          q && 0 < q.length && (f = Mb(q[0]) || Qa(q[0].value));
        }
        f && (a[b] = f);
      }
    },
    dg = function (a) {
      if (a) {
        var b = {};
        cg(b, 'email', a.email);
        cg(b, 'phone_number', a.phone);
        b.address = [];
        for (var c = a.name_and_address || [], d = 0; d < c.length; d++) {
          var e = {};
          cg(e, 'first_name', c[d].first_name);
          cg(e, 'last_name', c[d].last_name);
          cg(e, 'street', c[d].street);
          cg(e, 'city', c[d].city);
          cg(e, 'region', c[d].region);
          cg(e, 'country', c[d].country);
          cg(e, 'postal_code', c[d].postal_code);
          b.address.push(e);
        }
        return b;
      }
    },
    eg = function (a) {
      if (a)
        switch (a.mode) {
          case 'selectors':
            return dg(a.selectors);
          case 'auto_detect':
            var b;
            var c = a.auto_detect;
            if (c) {
              var d = Te({
                  xe: !1,
                  ye: !1,
                  jd: c.exclude_element_selectors,
                  Za: {
                    email: !!c.email,
                    phone: !!c.phone,
                    Qf: !!c.address,
                  },
                }).elements,
                e = {};
              if (0 < d.length)
                for (var f = 0; f < d.length; f++) {
                  var h = d[f];
                  if (1 === h.type) {
                    e.email = h.va;
                    break;
                  }
                }
              b = e;
            } else b = void 0;
            return b;
        }
    },
    fg = function (a) {
      switch (a.enhanced_conversions_mode) {
        case 'manual':
          var b = a.enhanced_conversions_manual_var;
          return void 0 !== b ? b : m.enhanced_conversion_data;
        case 'automatic':
          return dg(a[K.lf]);
      }
    };
  var gg = {},
    hg = function (a, b) {
      if (m._gtmexpgrp && m._gtmexpgrp.hasOwnProperty(a)) return m._gtmexpgrp[a];
      void 0 === gg[a] && (gg[a] = Math.floor(Math.random() * b));
      return gg[a];
    };

  function ig(a, b, c) {
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

  function jg(a) {
    return 'null' !== a.origin;
  }
  var mg = function (a, b, c, d) {
      return kg(d) ? ig(a, String(b || lg()), c) : [];
    },
    tg = function (a, b, c, d, e) {
      if (kg(e)) {
        var f = ng(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = og(
            f,
            function (h) {
              return h.hd;
            },
            b
          );
          if (1 === f.length) return f[0].id;
          f = og(
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

  function ug(a, b, c, d) {
    var e = lg(),
      f = window;
    jg(f) && (f.document.cookie = a);
    var h = lg();
    return e != h || (void 0 != c && 0 <= mg(b, h, !1, d).indexOf(c));
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
      if (!kg(c.Sa)) return 2;
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
      f = d(f, 'max-age', c.lj);
      f = d(f, 'samesite', c.mj);
      c.nj && (f = e(f, 'secure'));
      var l = c.domain;
      if ('auto' === l) {
        for (var n = wg(), p = 0; p < n.length; ++p) {
          var q = 'none' !== n[p] ? n[p] : void 0,
            r = d(f, 'domain', q);
          r = e(r, c.flags);
          if (!xg(q, c.path) && ug(r, a, b, c.Sa)) return 0;
        }
        return 1;
      }
      l && 'none' !== l && (f = d(f, 'domain', l));
      f = e(f, c.flags);
      return xg(l, c.path) ? 1 : ug(f, a, b, c.Sa) ? 0 : 1;
    },
    zg = function (a, b, c) {
      null == c.path && (c.path = '/');
      c.domain || (c.domain = 'auto');
      return yg(a, b, c);
    };

  function og(a, b, c) {
    for (var d = [], e = [], f, h = 0; h < a.length; h++) {
      var k = a[h],
        l = b(k);
      l === c ? d.push(k) : void 0 === f || l < f ? ((e = [k]), (f = l)) : l === f && e.push(k);
    }
    return 0 < d.length ? d : e;
  }

  function ng(a, b, c) {
    for (var d = [], e = mg(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var h = e[f].split('.'),
        k = h.shift();
      if (!b || -1 !== b.indexOf(k)) {
        var l = h.shift();
        l &&
          ((l = l.split('-')),
          d.push({
            id: h.join('.'),
            hd: 1 * l[0] || 1,
            wc: 1 * l[1] || 1,
          }));
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
    lg = function () {
      return jg(window) ? window.document.cookie : '';
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
    kg = function (a) {
      if (!zd(wd) || !a || !Td()) return !0;
      if (!Sd(a)) return !1;
      var b = Qd(a);
      return null == b ? !0 : !!b;
    };
  var Cg = function () {
      return [Math.round(2147483647 * Math.random()), Math.round(Sa() / 1e3)].join('.');
    },
    Fg = function (a, b, c, d, e) {
      var f = Dg(b);
      return tg(a, f, Eg(c), d, e);
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
    0 !== e && (d = new Date((b || Sa()) + 1e3 * (e || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: d,
    };
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
          var f = Bb('google_tag_data', {});
          f._gcl_au ? sa('GTM', 57) : (f._gcl_au = e);
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
      f &&
        b.push({
          Pe: f[1],
          value: f[2],
          timestamp: Number(f[2].split('.')[1]) || 0,
        });
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
        d[c[e].Pe] || (d[c[e].Pe] = []);
        var h = {
          version: f[0],
          timestamp: 1e3 * Number(f[1]),
          qa: f[2],
        };
        b && 3 < f.length && (h.labels = f.slice(3));
        d[c[e].Pe].push(h);
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
        Jb(A, 'mousedown', d);
        Jb(A, 'keyup', d);
        Jb(A, 'submit', e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    $g = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e,
      };
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
          r === b && Va(e, h.callback());
        }
      }
      return e;
    },
    Yg = function () {
      var a = Bb('google_tag_data', {}),
        b = a.gl;
      (b && b.decorators) ||
        ((b = {
          decorators: [],
        }),
        (a.gl = b));
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
                w = ((r & 3) << 4) | (u >> 4),
                y = ((u & 15) << 2) | (t >> 6),
                x = t & 63;
              q || ((x = 64), p || (y = 64));
              l.push(Rg[v], Rg[w], Rg[y], Rg[x]);
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
        var b = Be(m.location.href),
          c = b.search.replace('?', ''),
          d = we(c, '_gl', !0) || '';
        a.query = ih(d) || {};
        var e = ze(b, 'fragment').match(fh('_gl'));
        a.fragment = ih((e && e[3]) || '') || {};
      };
    },
    kh = function (a) {
      var b = jh(),
        c = Yg();
      c.data ||
        ((c.data = {
          query: {},
          fragment: {},
        }),
        b(c.data));
      var d = {},
        e = c.data;
      e && (Va(d, e.query), a && Va(d, e.fragment));
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
      } catch (t) {}
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
      var w = p.charAt(p.length - 1);
      p && '&' !== w && (p += '&');
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
    if (Wa(d)) {
      var h = hh(d);
      c ? nh('_gl', h, a) : oh('_gl', h, a, !1);
    }
    if (!c && Wa(e)) {
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
      ib.test(e) && (c.href = e);
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
        ib.test(n) && (c.action = n);
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
      } catch (h) {}
    },
    Xg = function (a) {
      try {
        if (a.action) {
          var b = ze(Be(a.action), 'host');
          mh(a, b);
        }
      } catch (c) {}
    },
    ph = function (a, b, c, d) {
      Zg();
      $g(a, b, 'fragment' === c ? 2 : 1, !!d, !1);
    },
    qh = function (a, b) {
      Zg();
      $g(a, [ye(m.location, 'host', !0)], b, !0, !0);
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
    wh = {
      aw: '_aw',
      dc: '_dc',
      gf: '_gf',
      ha: '_ha',
      gp: '_gp',
      gb: '_gb',
    },
    xh = function () {
      if (!zd(wd) || !Td()) return !0;
      var a = Qd('ad_storage');
      return null == a ? !0 : !!a;
    },
    yh = function (a, b) {
      Sd('ad_storage')
        ? xh()
          ? a()
          : Yd(a, 'ad_storage')
        : b
        ? sa('TAGGING', 3)
        : Xd(
            function () {
              yh(a, !0);
            },
            ['ad_storage']
          );
    },
    Ah = function (a) {
      return zh(a).map(function (b) {
        return b.qa;
      });
    },
    zh = function (a) {
      var b = [];
      if (!jg(m) || !A.cookie) return b;
      var c = mg(a, A.cookie, void 0, 'ad_storage');
      if (!c || 0 == c.length) return b;
      for (
        var d = {}, e = 0;
        e < c.length;
        d = {
          Dc: d.Dc,
        },
          e++
      ) {
        var f = Bh(c[e]);
        if (null != f) {
          var h = f,
            k = h.version;
          d.Dc = h.qa;
          var l = h.timestamp,
            n = h.labels,
            p = Aa(
              b,
              (function (q) {
                return function (r) {
                  return r.qa === q.Dc;
                };
              })(d)
            );
          p
            ? ((p.timestamp = Math.max(p.timestamp, l)), (p.labels = Ch(p.labels, n || [])))
            : b.push({
                version: k,
                qa: d.Dc,
                timestamp: l,
                labels: n,
              });
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
      var a = Be(m.location.href),
        b = ze(a, 'query', !1, void 0, 'gclid'),
        c = ze(a, 'query', !1, void 0, 'gclsrc'),
        d = ze(a, 'query', !1, void 0, 'wbraid'),
        e = ze(a, 'query', !1, void 0, 'dclid');
      if (!b || !c || !d) {
        var f = a.hash.replace('#', '');
        b = b || we(f, 'gclid', void 0);
        c = c || we(f, 'gclsrc', void 0);
        d = d || we(f, 'wbraid', void 0);
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
    function f(w, y) {
      var x = Jh(w, h);
      x && (zg(x, y, k), (l = !0));
    }
    c = c || {};
    e = e || [];
    var h = Eh(c.prefix);
    d = d || Sa();
    var k = Hg(c, d, !0);
    k.Sa = 'ad_storage';
    var l = !1,
      n = Math.round(d / 1e3),
      p = function (w) {
        var y = ['GCL', n, w];
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
          t[v].qa === q && t[v].labels && 0 < t[v].labels.length && (u = !0);
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
              var l = Math.min(Kh(k), Sa()),
                n;
              b: {
                var p = l;
                if (jg(m))
                  for (var q = mg(h, A.cookie, void 0, 'ad_storage'), r = 0; r < q.length; ++r)
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
      : {
          version: b[0],
          qa: b[2],
          timestamp: 1e3 * (Number(b[1]) || 0),
          labels: b.slice(3),
        };
  }

  function Mh(a) {
    return 3 > a.length || ('GCL' !== a[0] && '1' !== a[0]) || !/^\d+$/.test(a[1]) || !vh.test(a[2])
      ? []
      : a;
  }
  var Nh = function (a, b, c, d, e) {
      if (ya(b) && jg(m)) {
        var f = Eh(e),
          h = function () {
            for (var k = {}, l = 0; l < a.length; ++l) {
              var n = Jh(a[l], f);
              if (n) {
                var p = mg(n, A.cookie, void 0, 'ad_storage');
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
        return vh.test(b.qa);
      });
    },
    Oh = function (a, b) {
      if (jg(m)) {
        for (var c = Eh(b.prefix), d = {}, e = 0; e < a.length; e++)
          wh[a[e]] && (d[a[e]] = wh[a[e]]);
        yh(function () {
          Ia(d, function (f, h) {
            var k = mg(c + h, A.cookie, void 0, 'ad_storage');
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
    if (Td()) {
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
    Sd(K.D)
      ? M(K.D)
        ? a()
        : Yd(a, K.D)
      : b
      ? td(42)
      : ee(
          function () {
            Uh(a, !0);
          },
          [K.D]
        );
  }

  function Vh(a) {
    var b = Be(m.location.href),
      c = ze(b, 'host', !1);
    if (c && c.match(Th)) {
      var d = ze(b, 'path').split(a + '=');
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
      var f = !M(K.D) && c,
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
    Ia(a, function (c, d) {
      d = Dh(d);
      for (var e = [], f = 0; f < d.length; f++) e.push(d[f].qa);
      e.length && b.push(c + ':' + e.join(','));
    });
    return b.join(';');
  }
  var $h = function (a) {
      var b = Vh('gac');
      return b ? (!M(K.D) && a ? '0' : decodeURIComponent(b)) : Zh(xh() ? Pg() : {});
    },
    ai = function (a) {
      var b = Vh('gacgb');
      return b ? (!M(K.D) && a ? '0' : decodeURIComponent(b)) : Zh(xh() ? Pg('_gac_gb', !0) : {});
    },
    bi = function (a, b) {
      var c = Gh(),
        d = [],
        e = c.gclid,
        f = c.dclid,
        h = c.gclsrc || 'aw';
      !e ||
        ('aw.ds' !== h && 'aw' !== h && 'ds' !== h) ||
        d.push({
          qa: e,
          se: h,
        });
      f &&
        d.push({
          qa: f,
          se: 'ds',
        });
      Uh(function () {
        Ng(b);
        var k = Jg[Kg(b.prefix)],
          l = !1;
        if (k && 0 < d.length)
          for (var n = (Cf.joined_auid = Cf.joined_auid || {}), p = 0; p < d.length; p++) {
            var q = d[p],
              r = q.qa,
              u = q.se,
              t = (b.prefix || '_gcl') + '.' + u + '.' + r;
            if (!n[t]) {
              var v = 'https://adservice.google.com/pagead/regclk';
              v =
                'gb' === u
                  ? v + '?gbraid=' + r + '&auid=' + k
                  : v + '?gclid=' + r + '&auid=' + k + '&gclsrc=' + u;
              Pb(v);
              l = n[t] = !0;
            }
          }
        null == a && (a = l);
        var w = !0;
        w = !1;
        if (w && a && k) {
          var y = Kg(b.prefix),
            x = Jg[y];
          x && Mg(y, x, b);
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
  var di = /[A-Z]+/,
    ei = /\s/,
    fi = function (a) {
      if (g(a) && ((a = Qa(a)), !ei.test(a))) {
        var b = a.indexOf('-');
        if (!(0 > b)) {
          var c = a.substring(0, b);
          if (di.test(c)) {
            for (var d = a.substring(b + 1).split('/'), e = 0; e < d.length; e++) if (!d[e]) return;
            return {
              id: a,
              prefix: c,
              containerId: c + '-' + d[0],
              N: d,
            };
          }
        }
      }
    },
    hi = function (a) {
      for (var b = {}, c = 0; c < a.length; ++c) {
        var d = fi(a[c]);
        d && (b[d.id] = d);
      }
      gi(b);
      var e = [];
      Ia(b, function (f, h) {
        e.push(h);
      });
      return e;
    };

  function gi(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        'AW' === d.prefix && d.N[1] && b.push(d.containerId);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var ii = function () {
    var a = !1;
    return a;
  };
  var ki = function (a, b, c, d) {
      return (2 === ji() || d || 'http:' != m.location.protocol ? a : b) + c;
    },
    ji = function () {
      var a = Eb(),
        b;
      if (1 === a)
        a: {
          var c = If;
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
  var wi = function (a, b) {
    var c = a ? fg(a) : m.enhanced_conversion_data,
      d = (a || {}).enhanced_conversions_mode;
    if (m.Promise)
      try {
        return c
          ? of(c, b).then(function (e) {
              e.ke = d;
              return e;
            })
          : Promise.resolve({
              vc: '',
              ic: [],
              ke: d,
            });
      } catch (e) {}
  };
  var xi = function (a) {
      if (M(K.D)) return a;
      a = a.replace(/&url=([^&#]+)/, function (b, c) {
        var d = Ce(decodeURIComponent(c));
        return '&url=' + encodeURIComponent(d);
      });
      a = a.replace(/&ref=([^&#]+)/, function (b, c) {
        var d = Ce(decodeURIComponent(c));
        return '&ref=' + encodeURIComponent(d);
      });
      return a;
    },
    yi = function () {
      var a;
      if (!(a = Jf)) {
        var b;
        if (!0 === m._gtmdgs) b = !0;
        else {
          var c = (zb && zb.userAgent) || '';
          b =
            0 > c.indexOf('Safari') ||
            /Chrome|Coast|Opera|Edg|Silk|Android/.test(c) ||
            11 > ((/Version\/([\d]+)/.exec(c) || [])[1] || '')
              ? !1
              : !0;
        }
        a = !b;
      }
      if (a) return -1;
      var d = Ma('1');
      return hg(1, 100) < d ? hg(2, 2) : -1;
    },
    zi = function (a) {
      var b;
      if (!a || !a.length) return;
      for (var c = [], d = 0; d < a.length; ++d) {
        var e = a[d];
        e && e.estimated_delivery_date ? c.push('' + e.estimated_delivery_date) : c.push('');
      }
      b = c.join(',');
      return b;
    };
  var Ai = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
    Bi = {
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
    Ci = {
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
    Di =
      'google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes'.split(
        ' '
      );
  var Ei = function () {
      var a = !1;
      return a;
    },
    Gi = function (a) {
      var b = Vf('gtm.allowlist') || Vf('gtm.whitelist');
      b && td(9);
      Ei() && (b = 'google gtagfl lcl zone oid op'.split(' '));
      var c = b && Xa(Oa(b), Bi),
        d = Vf('gtm.blocklist') || Vf('gtm.blacklist');
      d || ((d = Vf('tagTypeBlacklist')) && td(3));
      d ? td(8) : (d = []);
      Fi() && ((d = Oa(d)), d.push('nonGooglePixels', 'nonGoogleScripts', 'sandboxedScripts'));
      0 <= za(Oa(d), 'google') && td(2);
      var e = d && Xa(Oa(d), Ci),
        f = {};
      return function (h) {
        var k = h && h[Zb.lb];
        if (!k || 'string' != typeof k) return !0;
        k = k.replace(/^_*/, '');
        if (void 0 !== f[k]) return f[k];
        var l = Of[k] || [],
          n = a(k, l);
        if (b) {
          var p;
          if ((p = n))
            a: {
              if (0 > za(c, k))
                if (l && 0 < l.length)
                  for (var q = 0; q < l.length; q++) {
                    if (0 > za(c, l[q])) {
                      td(11);
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
          var u = 0 <= za(e, k);
          if (u) r = u;
          else {
            var t = Fa(e, l || []);
            t && td(10);
            r = t;
          }
        }
        var v = !n || r;
        v ||
          !(0 <= za(l, 'sandboxedScripts')) ||
          (c && -1 !== za(c, 'sandboxedScripts')) ||
          (v = Fa(e, Di));
        return (f[k] = v);
      };
    },
    Fi = function () {
      return Ai.test(m.location && m.location.hostname);
    };
  var Hi = {
      active: !0,
      isAllowed: function () {
        return !0;
      },
    },
    Ii = function (a) {
      var b = Cf.zones;
      return b ? b.checkState(Bf.M, a) : Hi;
    },
    Ji = function (a) {
      var b = Cf.zones;
      !b && a && (b = Cf.zones = a());
      return b;
    };
  var Ki = function () {},
    Li = function () {};
  var Mi = !1,
    Ni = 0,
    Oi = [];

  function Pi(a) {
    if (!Mi) {
      var b = A.createEventObject,
        c = 'complete' == A.readyState,
        d = 'interactive' == A.readyState;
      if (!a || 'readystatechange' != a.type || c || (!b && d)) {
        Mi = !0;
        for (var e = 0; e < Oi.length; e++) G(Oi[e]);
      }
      Oi.push = function () {
        for (var f = 0; f < arguments.length; f++) G(arguments[f]);
        return 0;
      };
    }
  }

  function Qi() {
    if (!Mi && 140 > Ni) {
      Ni++;
      try {
        A.documentElement.doScroll('left'), Pi();
      } catch (a) {
        m.setTimeout(Qi, 50);
      }
    }
  }
  var Ri = function (a) {
    Mi ? a() : Oi.push(a);
  };
  var Ti = function (a, b) {
      this.o = !1;
      this.F = [];
      this.O = {
        tags: [],
      };
      this.aa = !1;
      this.s = this.C = 0;
      Si(this, a, b);
    },
    Ui = function (a, b, c, d) {
      if (Ff.hasOwnProperty(b) || '__zone' === b) return -1;
      var e = {};
      Xb(d) && (e = H(d, e));
      e.id = c;
      e.status = 'timeout';
      return a.O.tags.push(e) - 1;
    },
    Vi = function (a, b, c, d) {
      var e = a.O.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    Wi = function (a) {
      if (!a.o) {
        for (var b = a.F, c = 0; c < b.length; c++) b[c]();
        a.o = !0;
        a.F.length = 0;
      }
    },
    Si = function (a, b, c) {
      wa(b) && Xi(a, b);
      c &&
        m.setTimeout(function () {
          return Wi(a);
        }, Number(c));
    },
    Xi = function (a, b) {
      var c = Ua(function () {
        return G(function () {
          b(Bf.M, a.O);
        });
      });
      a.o ? c() : a.F.push(c);
    },
    Yi = function (a) {
      a.C++;
      return Ua(function () {
        a.s++;
        a.aa && a.s >= a.C && Wi(a);
      });
    };
  var Zi = function () {
      function a(d) {
        return !xa(d) || 0 > d ? 0 : d;
      }
      if (!Cf._li && m.performance && m.performance.timing) {
        var b = m.performance.timing.navigationStart,
          c = xa(Wf.get('gtm.start')) ? Wf.get('gtm.start') : 0;
        Cf._li = {
          cst: a(c - b),
          cbt: a(Lf - b),
        };
      }
    },
    dj = function (a) {
      m.performance && m.performance.mark(Bf.M + '_' + a + '_start');
    },
    ej = function (a) {
      if (m.performance) {
        var b = Bf.M + '_' + a + '_start',
          c = Bf.M + '_' + a + '_duration';
        m.performance.measure(c, b);
        var d = m.performance.getEntriesByName(c)[0];
        m.performance.clearMarks(b);
        m.performance.clearMeasures(c);
        var e = Cf._p || {};
        void 0 === e[a] && ((e[a] = d.duration), (Cf._p = e));
        return d.duration;
      }
    },
    fj = function () {
      if (m.performance && m.performance.now) {
        var a = Cf._p || {};
        a.PAGEVIEW = m.performance.now();
        Cf._p = a;
      }
    };
  var gj = {},
    hj = function () {
      return m.GoogleAnalyticsObject && m[m.GoogleAnalyticsObject];
    },
    ij = !1;
  var nj = function (a) {},
    mj = function () {
      return m.GoogleAnalyticsObject || 'ga';
    },
    oj = function (a, b) {
      return function () {
        var c = hj(),
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
  var vj = function (a) {},
    zj = function (a) {},
    Aj = function () {
      return (
        '&tc=' +
        Fc.filter(function (a) {
          return a;
        }).length
      );
    },
    Dj = function () {
      2022 <= Bj().length && Cj();
    },
    Ej = function (a) {
      return 0 === a.indexOf('gtm.') ? encodeURIComponent(a) : '*';
    },
    Gj = function () {
      Fj || (Fj = m.setTimeout(Cj, 500));
    },
    Cj = function () {
      Fj && (m.clearTimeout(Fj), (Fj = void 0));
      void 0 === Hj ||
        (Ij[Hj] && !Jj && !Kj) ||
        (Lj[Hj] || Mj.ui() || 0 >= Nj--
          ? (td(1), (Lj[Hj] = !0))
          : (Mj.Mi(), Ib(Bj(!0)), (Ij[Hj] = !0), (Oj = Pj = Qj = Kj = Jj = '')));
    },
    Bj = function (a) {
      var b = Hj;
      if (void 0 === b) return '';
      var c = ta('GTM'),
        d = ta('TAGGING');
      return [
        Rj,
        Ij[b] ? '' : '&es=1',
        Sj[b],
        vj(b),
        c ? '&u=' + c : '',
        d ? '&ut=' + d : '',
        Aj(),
        Jj,
        Kj,
        Qj,
        Pj,
        zj(a),
        Oj,
        '&z=0',
      ].join('');
    },
    Uj = function () {
      Rj = Tj();
    },
    Tj = function () {
      return [Mf, '&v=3&t=t', '&pid=' + Ba(), '&rv=' + Bf.$c].join('');
    },
    yj = ['L', 'S', 'Y'],
    uj = ['S', 'E'],
    Vj = {
      sampleRate: '0.005000',
      Jg: '',
      Ig: Number('5'),
    },
    Wj =
      0 <= A.location.search.indexOf('?gtm_latency=') ||
      0 <= A.location.search.indexOf('&gtm_latency='),
    Xj;
  if (!(Xj = Wj)) {
    var Yj = Math.random(),
      Zj = Vj.sampleRate;
    Xj = Yj < Zj;
  }
  var ak = Xj,
    bk = {
      label: Bf.M + ' Container',
      children: [
        {
          label: 'Initialization',
          children: [],
        },
      ],
    },
    Rj = Tj(),
    Ij = {},
    Jj = '',
    Kj = '',
    Oj = '',
    Pj = '',
    xj = {},
    wj = !1,
    tj = {},
    ck = {},
    Qj = '',
    Hj = void 0,
    Sj = {},
    Lj = {},
    Fj = void 0,
    dk = 5;
  0 < Vj.Ig && (dk = Vj.Ig);
  var Mj = (function (a, b) {
      for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
      return {
        ui: function () {
          return c < a ? !1 : Sa() - d[c % a] < b;
        },
        Mi: function () {
          var f = c++ % a;
          d[f] = Sa();
        },
      };
    })(dk, 1e3),
    Nj = 1e3,
    fk = function (a, b) {
      if (ak && !Lj[a] && Hj !== a) {
        Cj();
        Hj = a;
        Oj = Jj = '';
        Sj[a] = '&e=' + Ej(b) + '&eid=' + a;
        Gj();
      }
    },
    gk = function (a, b, c, d) {
      if (ak && b) {
        var e,
          f = String(b[Zb.lb] || '').replace(/_/g, '');
        0 === f.indexOf('cvt') && (f = 'cvt');
        e = f;
        var h = c + e;
        if (!Lj[a]) {
          a !== Hj && (Cj(), (Hj = a));
          Jj = Jj ? Jj + '.' + h : '&tr=' + h;
          var k = b['function'];
          if (!k) throw Error('Error: No function name given for function call.');
          var l = (Hc[k] ? '1' : '2') + e;
          Oj = Oj ? Oj + '.' + l : '&ti=' + l;
          Gj();
          Dj();
        }
      }
    };
  var nk = function (a, b, c) {
      if (ak && !Lj[a]) {
        a !== Hj && (Cj(), (Hj = a));
        var d = c + b;
        Kj = Kj ? Kj + '.' + d : '&epr=' + d;
        Gj();
        Dj();
      }
    },
    ok = function (a, b, c) {};

  function pk(a, b, c, d) {
    var e = Fc[a],
      f = qk(a, b, c, d);
    if (!f) return null;
    var h = Mc(e[Zb.Gf], c, []);
    if (h && h.length) {
      var k = h[0];
      f = pk(
        k.index,
        {
          onSuccess: f,
          onFailure: 1 === k.bg ? b.terminate : f,
          terminate: b.terminate,
        },
        c,
        d
      );
    }
    return f;
  }

  function qk(a, b, c, d) {
    function e() {
      if (f[Zb.Fh]) k();
      else {
        var w = Nc(f, c, []);
        var y = w[Zb.Og];
        if (null != y)
          for (var x = 0; x < y.length; x++)
            if (!M(y[x])) {
              k();
              return;
            }
        var z = Ui(c.mb, String(f[Zb.lb]), Number(f[Zb.Hf]), w[Zb.Gh]),
          B = !1;
        w.vtp_gtmOnSuccess = function () {
          if (!B) {
            B = !0;
            var F = Sa() - E;
            gk(c.id, Fc[a], '5', F);
            Vi(c.mb, z, 'success', F);
            h();
          }
        };
        w.vtp_gtmOnFailure = function () {
          if (!B) {
            B = !0;
            var F = Sa() - E;
            gk(c.id, Fc[a], '6', F);
            Vi(c.mb, z, 'failure', F);
            k();
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId = c.id;
        gk(c.id, f, '1');
        var C = function () {
          var F = Sa() - E;
          gk(c.id, f, '7', F);
          Vi(c.mb, z, 'exception', F);
          B || ((B = !0), k());
        };
        var E = Sa();
        try {
          Lc(w, c);
        } catch (F) {
          C(F);
        }
      }
    }
    var f = Fc[a],
      h = b.onSuccess,
      k = b.onFailure,
      l = b.terminate;
    if (c.Be(f)) return null;
    var n = Mc(f[Zb.If], c, []);
    if (n && n.length) {
      var p = n[0],
        q = pk(
          p.index,
          {
            onSuccess: h,
            onFailure: k,
            terminate: l,
          },
          c,
          d
        );
      if (!q) return null;
      h = q;
      k = 2 === p.bg ? l : q;
    }
    if (f[Zb.Cf] || f[Zb.Ih]) {
      var r = f[Zb.Cf] ? Gc : c.Ti,
        u = h,
        t = k;
      if (!r[a]) {
        e = Ua(e);
        var v = rk(a, r, e);
        h = v.onSuccess;
        k = v.onFailure;
      }
      return function () {
        r[a](u, t);
      };
    }
    return e;
  }

  function rk(a, b, c) {
    var d = [],
      e = [];
    b[a] = sk(d, e, c);
    return {
      onSuccess: function () {
        b[a] = tk;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = uk;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }

  function sk(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }

  function tk(a) {
    a();
  }

  function uk(a, b) {
    b();
  }
  var xk = function (a, b) {
    for (var c = [], d = 0; d < Fc.length; d++)
      if (a[d]) {
        var e = Fc[d];
        var f = Yi(b.mb);
        try {
          var h = pk(
            d,
            {
              onSuccess: f,
              onFailure: f,
              terminate: f,
            },
            b,
            d
          );
          if (h) {
            var k = c,
              l = k.push,
              n = d,
              p = e['function'];
            if (!p) throw 'Error: No function name given for function call.';
            var q = Hc[p];
            l.call(k, {
              Cg: n,
              qg: q ? q.priorityOverride || 0 : 0,
              gi: h,
            });
          } else vk(d, b), f();
        } catch (t) {
          f();
        }
      }
    var r = b.mb;
    r.aa = !0;
    r.s >= r.C && Wi(r);
    c.sort(wk);
    for (var u = 0; u < c.length; u++) c[u].gi();
    return 0 < c.length;
  };

  function wk(a, b) {
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

  function vk(a, b) {
    if (!ak) return;
    var c = function (d) {
      var e = b.Be(Fc[d]) ? '3' : '4',
        f = Mc(Fc[d][Zb.Gf], b, []);
      f && f.length && c(f[0].index);
      gk(b.id, Fc[d], e);
      var h = Mc(Fc[d][Zb.If], b, []);
      h && h.length && c(h[0].index);
    };
    c(a);
  }
  var yk = !1,
    Ek = function (a) {
      var b = Sa(),
        c = a['gtm.uniqueEventId'],
        d = a.event;
      if ('gtm.js' === d) {
        if (yk) return !1;
        yk = !0;
      }
      var h = Ii(c),
        k = !1;
      if (!h.active) {
        if ('gtm.js' !== d) return !1;
        k = !0;
        h = Ii(Number.MAX_SAFE_INTEGER);
      }
      fk(c, d);
      var l = a.eventCallback,
        n = a.eventTimeout,
        p = l;
      var q = {
        id: c,
        name: d,
        Be: Gi(h.isAllowed),
        Ti: [],
        lg: function () {
          td(6);
        },
        Tf: zk(c),
        mb: new Ti(p, n),
      };
      q.Sf = Ak();
      Bk(c, q.mb);
      var r = Rc(q);
      k && (r = Ck(r));
      var u = xk(r, q);
      ('gtm.js' !== d && 'gtm.sync' !== d) || nj(Bf.M);
      switch (d) {
        case 'gtm.init':
          u && td(20);
      }
      return Dk(r, u);
    };

  function zk(a) {
    return function (b) {
      ak && (Yb(b) || ok(a, 'input', b));
    };
  }

  function Bk(a, b) {
    $f(a, 'event', 1);
    $f(a, 'ecommerce', 1);
    $f(a, 'gtm');
    $f(a, 'eventModel');
  }

  function Ak() {
    var a = {};
    a.event = Zf('event', 1);
    a.ecommerce = Zf('ecommerce', 1);
    a.gtm = Zf('gtm');
    a.eventModel = Zf('eventModel');
    return a;
  }

  function Ck(a) {
    for (var b = [], c = 0; c < a.length; c++) a[c] && Ef[String(Fc[c][Zb.lb])] && (b[c] = !0);
    return b;
  }

  function Dk(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++) if (a[c] && Fc[c] && !Ff[String(Fc[c][Zb.lb])]) return !0;
    return !1;
  }

  function Fk(a, b) {
    if (a) {
      var c = '' + a;
      0 !== c.indexOf('http://') && 0 !== c.indexOf('https://') && (c = 'https://' + c);
      '/' === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return Be('' + c + b).href;
    }
  }

  function Gk(a, b) {
    return Hk() ? Fk(a, b) : void 0;
  }

  function Hk() {
    var a = !1;
    return a;
  }
  var Ik;
  if (3 === Bf.$c.length) Ik = 'g';
  else {
    var Jk = 'G';
    Ik = Jk;
  }
  var Kk = {
      '': 'n',
      'UA': 'u',
      'AW': 'a',
      'DC': 'd',
      'G': 'e',
      'GF': 'f',
      'HA': 'h',
      'GTM': Ik,
      'OPT': 'o',
    },
    Lk = function (a) {
      var b = Bf.M.split('-'),
        c = b[0].toUpperCase(),
        d = Kk[c] || 'i',
        e = a && 'GTM' === c ? b[1] : 'OPT' === c ? b[1] : '',
        f;
      if (3 === Bf.$c.length) {
        var h = 'w';
        f = '2' + h;
      } else f = '';
      return f + d + Bf.$c + e;
    };

  function Mk(a, b) {
    if ('' === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var Nk = function (a, b) {
    a.addEventListener && a.addEventListener.call(a, 'message', b, !1);
  };
  var Ok = function () {
    return pb('iPhone') && !pb('iPod') && !pb('iPad');
  };
  pb('Opera');
  pb('Trident') || pb('MSIE');
  pb('Edge');
  !pb('Gecko') ||
    (-1 != jb.toLowerCase().indexOf('webkit') && !pb('Edge')) ||
    pb('Trident') ||
    pb('MSIE') ||
    pb('Edge');
  -1 != jb.toLowerCase().indexOf('webkit') && !pb('Edge') && pb('Mobile');
  pb('Macintosh');
  pb('Windows');
  pb('Linux') || pb('CrOS');
  var Pk = oa.navigator || null;
  Pk && (Pk.appVersion || '').indexOf('X11');
  pb('Android');
  Ok();
  pb('iPad');
  pb('iPod');
  Ok() || pb('iPad') || pb('iPod');
  jb.toLowerCase().indexOf('kaios');
  var Qk = function (a, b) {
      for (var c = a, d = 0; 50 > d; ++d) {
        var e;
        try {
          e = !(!c.frames || !c.frames[b]);
        } catch (k) {
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
          } catch (k) {}
          f = null;
        }
        if (!(c = f)) break;
      }
      return null;
    },
    Rk = function (a) {
      var b = A;
      b = void 0 === b ? window.document : b;
      if (!a || !b.head) return null;
      var c = document.createElement('meta');
      b.head.appendChild(c);
      c.httpEquiv = 'origin-trial';
      c.content = a;
      return c;
    };
  var Sk = function () {};
  var Tk = function (a) {
      void 0 !== a.addtlConsent && 'string' !== typeof a.addtlConsent && (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies && 'boolean' !== typeof a.gdprApplies && (a.gdprApplies = void 0);
      return (void 0 !== a.tcString && 'string' !== typeof a.tcString) ||
        (void 0 !== a.listenerId && 'number' !== typeof a.listenerId)
        ? 2
        : a.cmpStatus && 'error' !== a.cmpStatus
        ? 0
        : 3;
    },
    Uk = function (a, b) {
      this.s = a;
      this.o = null;
      this.F = {};
      this.aa = 0;
      this.O = void 0 === b ? 500 : b;
      this.C = null;
    };
  ma(Uk, Sk);
  var Wk = function (a) {
    return 'function' === typeof a.s.__tcfapi || null != Vk(a);
  };
  Uk.prototype.addEventListener = function (a) {
    var b = {},
      c = wb(function () {
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
          (b.internalErrorState = Tk(b)),
          (h && 0 === b.internalErrorState) ||
            ((b.tcString = 'tcunavailable'), h || (b.internalErrorState = 3)))
        : ((b.tcString = 'tcunavailable'), (b.internalErrorState = 3));
      a(b);
    };
    try {
      Xk(this, 'addEventListener', e);
    } catch (f) {
      (b.tcString = 'tcunavailable'),
        (b.internalErrorState = 3),
        d && (clearTimeout(d), (d = 0)),
        c();
    }
  };
  Uk.prototype.removeEventListener = function (a) {
    a && a.listenerId && Xk(this, 'removeEventListener', null, a.listenerId);
  };
  var Zk = function (a, b, c) {
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
          var n = Yk(a.vendor.consents, void 0 === d ? '755' : d);
          l =
            n &&
            '1' === b &&
            a.purposeOneTreatment &&
            ('DE' === a.publisherCC || (zd(vd) && 'CH' === a.publisherCC))
              ? !0
              : n && Yk(a.purpose.consents, b);
        } else l = !0;
      else
        l =
          1 === k
            ? a.purpose && a.vendor
              ? Yk(a.purpose.legitimateInterests, b) &&
                Yk(a.vendor.legitimateInterests, void 0 === d ? '755' : d)
              : !0
            : !0;
      return l;
    },
    Yk = function (a, b) {
      return !(!a || !a[b]);
    },
    Xk = function (a, b, c, d) {
      c || (c = function () {});
      if ('function' === typeof a.s.__tcfapi) {
        var e = a.s.__tcfapi;
        e(b, 2, c, d);
      } else if (Vk(a)) {
        $k(a);
        var f = ++a.aa;
        a.F[f] = c;
        if (a.o) {
          var h = {};
          a.o.postMessage(
            ((h.__tcfapiCall = {
              command: b,
              version: 2,
              callId: f,
              parameter: d,
            }),
            h),
            '*'
          );
        }
      } else c({}, !1);
    },
    Vk = function (a) {
      if (a.o) return a.o;
      a.o = Qk(a.s, '__tcfapiLocator');
      return a.o;
    },
    $k = function (a) {
      a.C ||
        ((a.C = function (b) {
          try {
            var c;
            c = ('string' === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
            a.F[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        Nk(a.s, a.C));
    };
  var al = !0;
  al = !1;
  var bl = {
      1: 0,
      3: 0,
      4: 0,
      7: 3,
      9: 3,
      10: 3,
    },
    cl = Mk('', 550),
    dl = Mk('', 500);

  function el() {
    var a = Cf.tcf || {};
    return (Cf.tcf = a);
  }
  var fl = function (a, b) {
      this.C = a;
      this.o = b;
      this.s = Sa();
    },
    gl = function (a) {},
    hl = function (a) {},
    nl = function () {
      var a = el(),
        b = new Uk(m, al ? 3e3 : -1),
        c = new fl(b, a);
      if (
        (il() ? !0 === m.gtag_enable_tcf_support : !1 !== m.gtag_enable_tcf_support) &&
        !a.active &&
        ('function' === typeof m.__tcfapi || Wk(b))
      ) {
        a.active = !0;
        a.yc = {};
        jl();
        var d = null;
        al
          ? (d = m.setTimeout(function () {
              kl(a);
              ll(a);
              d = null;
            }, dl))
          : (a.tcString = 'tcunavailable');
        try {
          b.addEventListener(function (e) {
            d && (clearTimeout(d), (d = null));
            if (0 !== e.internalErrorState) kl(a), ll(a), gl(c);
            else {
              var f;
              a.gdprApplies = e.gdprApplies;
              if (!1 === e.gdprApplies) (f = ml()), b.removeEventListener(e);
              else if (
                'tcloaded' === e.eventStatus ||
                'useractioncomplete' === e.eventStatus ||
                'cmpuishown' === e.eventStatus
              ) {
                var h = {},
                  k;
                for (k in bl)
                  if (bl.hasOwnProperty(k))
                    if ('1' === k) {
                      var l,
                        n = e,
                        p = !0;
                      p = void 0 === p ? !1 : p;
                      var q;
                      var r = n;
                      !1 === r.gdprApplies
                        ? (q = !0)
                        : (void 0 === r.internalErrorState && (r.internalErrorState = Tk(r)),
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
                          : Zk(n, '1', 0)
                        : !1;
                      h['1'] = l;
                    } else h[k] = Zk(e, k, bl[k]);
                f = h;
              }
              f && ((a.tcString = e.tcString || 'tcempty'), (a.yc = f), ll(a), gl(c));
            }
          }),
            hl(c);
        } catch (e) {
          d && (clearTimeout(d), (d = null)), kl(a), ll(a);
        }
      }
    };

  function kl(a) {
    a.type = 'e';
    a.tcString = 'tcunavailable';
    al && (a.yc = ml());
  }

  function jl() {
    var a = {},
      b = ((a.ad_storage = 'denied'), (a.wait_for_update = cl), a);
    ae(b);
  }
  var il = function () {
    var a = !1;
    a = !0;
    return a;
  };

  function ml() {
    var a = {},
      b;
    for (b in bl) bl.hasOwnProperty(b) && (a[b] = !0);
    return a;
  }

  function ll(a) {
    var b = {},
      c = ((b.ad_storage = a.yc['1'] ? 'granted' : 'denied'), b);
    ol();
    be(c, 0);
  }
  var pl = function () {
      var a = el();
      if (a.active && void 0 !== a.loadTime) return Number(a.loadTime);
    },
    ol = function () {
      var a = el();
      return a.active ? a.tcString || '' : '';
    },
    ql = function () {
      var a = el();
      return a.active && void 0 !== a.gdprApplies ? (a.gdprApplies ? '1' : '0') : '';
    },
    rl = function (a) {
      if (!bl.hasOwnProperty(String(a))) return !0;
      var b = el();
      return b.active && b.yc ? !!b.yc[String(a)] : !0;
    };
  var sl = !1;
  var tl = !1;

  function ul(a) {
    var b = String(m.location).split(/[?#]/)[0],
      c = Bf.Rg || m._CONSENT_MODE_SALT,
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

  function vl(a) {
    function b(t) {
      var v;
      Cf.reported_gclid || (Cf.reported_gclid = {});
      v = Cf.reported_gclid;
      var w;
      w =
        !h || (Td() && !M(K.D))
          ? l + (t ? 'gcu' : 'gcs')
          : l + '.' + (f.prefix || '_gcl') + (t ? 'gcu' : 'gcs');
      if (!v[w]) {
        v[w] = !0;
        var y = [],
          x = {},
          z = function (I, L) {
            L && (y.push(I + '=' + encodeURIComponent(L)), (x[I] = !0));
          },
          B = 'https://www.google.com';
        if (Td()) {
          var C = M(K.D);
          z('gcs', ce());
          t && z('gcu', '1');
          Ud() && z('gcd', 'G1' + Zd(Rd));
          Cf.dedupe_gclid || (Cf.dedupe_gclid = '' + Cg());
          z('rnd', Cf.dedupe_gclid);
          if ((!l || (n && 'aw.ds' !== n)) && M(K.D)) {
            var E = Ah('_gcl_aw');
            z('gclaw', E.join('.'));
          }
          z('url', String(m.location).split(/[?#]/)[0]);
          z('dclid', wl(d, p));
          var F = !1;
          F = !0;
          C || (!d && !F) || (B = 'https://pagead2.googlesyndication.com');
        }
        z('gdpr_consent', ol()), z('gdpr', ql());
        '1' === kh(!1)._up && z('gtm_up', '1');
        z('gclid', wl(d, l));
        z('gclsrc', n);
        if (
          !(x.gclid || x.dclid || x.gclaw) &&
          (z('gbraid', wl(d, q)), !x.gbraid && Td() && M(K.D))
        ) {
          var D = Ah('_gcl_gb');
          z('gclgb', D.join('.'));
        }
        z('gtm', Lk(!e));
        h && M(K.D) && (Ng(f || {}), z('auid', Jg[Kg(f.prefix)] || ''));
        sl || (a.gd && z('did', a.gd)), tl && (a.Kb && z('gdid', a.Kb), a.Jb && z('edid', a.Jb));
        var N = B + '/pagead/landing?' + y.join('&');
        Pb(N);
      }
    }
    var c = !!a.me,
      d = !!a.ra,
      e = a.U,
      f = void 0 === a.ed ? {} : a.ed,
      h = void 0 === a.nd ? !0 : a.nd,
      k = Gh(),
      l = k.gclid || '',
      n = k.gclsrc,
      p = k.dclid || '',
      q = k.gbraid || '',
      r = !c && ((!l || (n && 'aw.ds' !== n) ? !1 : !0) || q),
      u = Td();
    if (r || u)
      u
        ? ee(
            function () {
              b();
              M(K.D) ||
                de(function (t) {
                  return b(!0, t.Wh);
                }, K.D);
            },
            [K.D]
          )
        : b();
  }

  function wl(a, b) {
    var c = a && !M(K.D);
    return b && c ? '0' : b;
  }
  var xl = function () {
      this.o = {};
    },
    yl = function (a, b, c) {
      null != c && (a.o[b] = c);
    },
    zl = function (a) {
      return Object.keys(a.o)
        .map(function (b) {
          return encodeURIComponent(b) + '=' + encodeURIComponent(a.o[b]);
        })
        .join('&');
    },
    Bl = function (a, b, c, d) {};
  var Dl = !1,
    El = Number('200');

  function Fl() {
    if (!m.Promise) return !1;
    wa(A.interestCohort) ||
      Dl ||
      ((Dl = !0),
      Rk(
        'A489+ZNTpP/HCOD+k3I13nobRVH7eyh5fz5LGhYvQlNf9WauHk/0awCtXOEoWTIK9JN8bgzgn2SfPdaFXe5O9QkAAACKeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9'
      ));
    return wa(A.interestCohort);
  }

  function Gl() {
    var a = Cf.floc;
    if (a) {
      var b = a.ts,
        c = a.floc;
      if (b && c && 1e3 > Sa() - b) return Promise.resolve(c);
    }
    var d = void 0;
    try {
      d = Promise.race([
        A.interestCohort().then(function (e) {
          Cf.floc = {
            ts: Sa(),
            floc: e,
          };
          return e;
        }),
        new Promise(function (e) {
          m.setTimeout(function () {
            return e();
          }, El);
        }),
      ]).catch(function () {});
    } catch (e) {
      return;
    }
    return d;
  }
  var Hl = ['aw', 'dc', 'gb'];

  function Il(a, b, c, d) {
    var e = a.Hg,
      f = a.callback,
      h = a.mg;
    if ('function' === typeof f)
      if (e === K.Ad && void 0 === h) {
        var k = d(b.prefix, c);
        0 === k.length ? f(void 0) : 1 === k.length ? f(k[0]) : f(k);
      } else e === K.gh ? (Ng(b, !1), f(Jg[Kg(b.prefix)])) : f(h);
  }

  function Jl(a, b) {
    var c = a.Vf,
      d = a.kg,
      e = a.Eg;
    if (a.Ib) {
      var f = void 0 === c ? !0 : !!c;
      sh(d[K.Bb], !!d[K.P]) && Lh(Hl, b);
      Ih(b);
      Oh(Hl, b);
      bi(f, b);
    }
    d[K.P] && Nh(Hl, d[K.P], d[K.Wb], !!d[K.Cb], b.prefix);
    e && Qh(['aw', 'dc', 'gb']);
  }
  var Hm = function () {
      var a = !0;
      (rl(7) && rl(9) && rl(10)) || (a = !1);
      var b = !0;
      b = !1;
      b && !Gm() && (a = !1);
      return a;
    },
    Gm = function () {
      var a = !0;
      (rl(3) && rl(4)) || (a = !1);
      return a;
    };
  var nn = !1;
  var on = !1;
  on = !0;

  function pn() {
    var a = Cf;
    return (a.gcq = a.gcq || new qn());
  }
  var rn = function (a, b, c) {
      pn().register(a, b, c);
    },
    sn = function (a, b, c, d) {
      pn().push('event', [b, a], c, d);
    },
    tn = function (a, b) {
      pn().push('config', [a], b);
    },
    un = function (a, b, c, d) {
      pn().push('get', [a, b], c, d);
    },
    vn = {},
    wn = function () {
      this.status = 1;
      this.containerConfig = {};
      this.targetConfig = {};
      this.remoteConfig = {};
      this.s = {};
      this.C = null;
      this.o = !1;
    },
    xn = function (a, b, c, d, e) {
      this.type = a;
      this.C = b;
      this.U = c || '';
      this.o = d;
      this.s = e;
    },
    qn = function () {
      this.s = {};
      this.C = {};
      this.o = [];
      this.F = {
        AW: !1,
        UA: !1,
      };
      this.enableDeferrableCommandAfterConfig = nn;
    },
    yn = function (a, b) {
      var c = fi(b);
      return (a.s[c.containerId] = a.s[c.containerId] || new wn());
    },
    zn = function (a, b, c) {
      if (b) {
        var d = fi(b);
        if (d && 1 === yn(a, b).status) {
          yn(a, b).status = 2;
          var e = {};
          ak &&
            (e.timeoutId = m.setTimeout(function () {
              td(38);
              Gj();
            }, 3e3));
          a.push('require', [e], d.containerId);
          vn[d.containerId] = Sa();
          if (ii()) {
          } else {
            var h = '/gtag/js?id=' + encodeURIComponent(d.containerId) + '&l=dataLayer&cx=c',
              k =
                ('http:' != m.location.protocol ? 'https:' : 'http:') +
                ('//www.googletagmanager.com' + h),
              l = Gk(c, h) || k;
            Db(l);
          }
        }
      }
    },
    An = function (a, b, c, d) {
      if (d.U) {
        var e = yn(a, d.U),
          f = e.C;
        if (f) {
          var h = H(c),
            k = H(e.targetConfig[d.U]),
            l = H(e.containerConfig),
            n = H(e.remoteConfig),
            p = H(a.C),
            q = Vf('gtm.uniqueEventId'),
            r = fi(d.U).prefix,
            u = Ua(function () {
              var v = h[K.Ab];
              v && G(v);
            }),
            t = xf(
              wf(
                yf(
                  vf(uf(tf(sf(rf(qf(h), k), l), n), p), function () {
                    nk(q, r, '2');
                    on && u();
                  }),
                  function () {
                    nk(q, r, '3');
                    on && u();
                  }
                ),
                function (v, w) {
                  a.F[v] = w;
                }
              ),
              function (v) {
                return a.F[v];
              }
            );
          try {
            nk(q, r, '1');
            f(d.U, b, d.C, t);
          } catch (v) {
            nk(q, r, '4');
          }
        }
      }
    };
  qn.prototype.register = function (a, b, c) {
    var d = yn(this, a);
    if (3 !== d.status) {
      d.C = b;
      d.status = 3;
      if (c) {
        H(d.remoteConfig, c);
        d.remoteConfig = c;
      }
      var e = fi(a),
        f = vn[e.containerId];
      if (void 0 !== f) {
        var h = Cf[e.containerId].bootstrap,
          k = e.prefix.toUpperCase();
        Cf[e.containerId]._spx && (k = k.toLowerCase());
        var l = Vf('gtm.uniqueEventId'),
          n = k,
          p = Sa() - h;
        if (ak && !Lj[l]) {
          l !== Hj && (Cj(), (Hj = l));
          var q = n + '.' + Math.floor(h - f) + '.' + Math.floor(p);
          Pj = Pj ? Pj + ',' + q : '&cl=' + q;
        }
        delete vn[e.containerId];
      }
      this.flush();
    }
  };
  qn.prototype.push = function (a, b, c, d) {
    var e = Math.floor(Sa() / 1e3);
    zn(this, c, b[0][K.na] || this.C[K.na]);
    nn && c && yn(this, c).o && (d = !1);
    this.o.push(new xn(a, e, c, b, d));
    d || this.flush();
  };
  qn.prototype.insert = function (a, b, c) {
    var d = Math.floor(Sa() / 1e3);
    0 < this.o.length
      ? this.o.splice(1, 0, new xn(a, d, c, b, !1))
      : this.o.push(new xn(a, d, c, b, !1));
  };
  qn.prototype.flush = function (a) {
    for (var b = this, c = [], d = !1, e = {}; this.o.length; ) {
      var f = this.o[0];
      if (f.s)
        nn
          ? !f.U || yn(this, f.U).o
            ? ((f.s = !1), this.o.push(f))
            : c.push(f)
          : ((f.s = !1), this.o.push(f)),
          this.o.shift();
      else {
        switch (f.type) {
          case 'require':
            if (3 !== yn(this, f.U).status && !a) {
              nn && this.o.push.apply(this.o, c);
              return;
            }
            ak && m.clearTimeout(f.o[0].timeoutId);
            break;
          case 'set':
            Ia(f.o[0], function (r, u) {
              H(Ya(r, u), b.C);
            });
            break;
          case 'config':
            e.Ia = {};
            Ia(
              f.o[0],
              (function (r) {
                return function (u, t) {
                  H(Ya(u, t), r.Ia);
                };
              })(e)
            );
            var h = !!e.Ia[K.Sc];
            delete e.Ia[K.Sc];
            var k = yn(this, f.U),
              l = fi(f.U),
              n = l.containerId === l.id;
            h || (n ? (k.containerConfig = {}) : (k.targetConfig[f.U] = {}));
            (k.o && h) || An(this, K.Ca, e.Ia, f);
            k.o = !0;
            delete e.Ia[K.ac];
            n ? H(e.Ia, k.containerConfig) : H(e.Ia, k.targetConfig[f.U]);
            nn && (d = !0);
            break;
          case 'event':
            e.Cc = {};
            Ia(
              f.o[0],
              (function (r) {
                return function (u, t) {
                  H(Ya(u, t), r.Cc);
                };
              })(e)
            );
            An(this, f.o[1], e.Cc, f);
            break;
          case 'get':
            var p = {},
              q = ((p[K.Na] = f.o[0]), (p[K.Va] = f.o[1]), p);
            An(this, K.Ka, q, f);
        }
        this.o.shift();
        Bn(this, f);
      }
      e = {
        Ia: e.Ia,
        Cc: e.Cc,
      };
    }
    nn && (this.o.push.apply(this.o, c), d && this.flush());
  };
  var Bn = function (a, b) {
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
  qn.prototype.getRemoteConfig = function (a) {
    return yn(this, a).remoteConfig;
  };
  qn.prototype.getCommandListeners = function (a) {
    return yn(this, a).s;
  };
  var Cn = function (a, b, c) {
      var d = {
        'event': b,
        'gtm.element': a,
        'gtm.elementClasses': Qb(a, 'className'),
        'gtm.elementId': a['for'] || Lb(a, 'id') || '',
        'gtm.elementTarget': a.formTarget || Qb(a, 'target') || '',
      };
      c && (d['gtm.triggers'] = c.join(','));
      d['gtm.elementUrl'] =
        (a.attributes && a.attributes.formaction ? a.formAction : '') ||
        a.action ||
        Qb(a, 'href') ||
        a.src ||
        a.code ||
        a.codebase ||
        '';
      return d;
    },
    Dn = function (a) {
      Cf.hasOwnProperty('autoEventsSettings') || (Cf.autoEventsSettings = {});
      var b = Cf.autoEventsSettings;
      b.hasOwnProperty(a) || (b[a] = {});
      return b[a];
    },
    En = function (a, b, c) {
      Dn(a)[b] = c;
    },
    Fn = function (a, b, c, d) {
      var e = Dn(a),
        f = Ta(e, b, d);
      e[b] = c(f);
    },
    Gn = function (a, b, c) {
      var d = Dn(a);
      return Ta(d, b, c);
    };
  var Hn = ['input', 'select', 'textarea'],
    In = ['button', 'hidden', 'image', 'reset', 'submit'],
    Jn = function (a) {
      var b = a.tagName.toLowerCase();
      return !Aa(Hn, function (c) {
        return c === b;
      }) ||
        ('input' === b &&
          Aa(In, function (c) {
            return c === a.type.toLowerCase();
          }))
        ? !1
        : !0;
    },
    Kn = function (a) {
      return a.form ? (a.form.tagName ? a.form : A.getElementById(a.form)) : Ob(a, ['form'], 100);
    },
    Ln = function (a, b, c) {
      if (!a.elements) return 0;
      for (var d = b.dataset[c], e = 0, f = 1; e < a.elements.length; e++) {
        var h = a.elements[e];
        if (Jn(h)) {
          if (h.dataset[c] === d) return f;
          f++;
        }
      }
      return 0;
    };
  var Mn = !!m.MutationObserver,
    Nn = void 0,
    On = function (a) {
      if (!Nn) {
        var b = function () {
          var c = A.body;
          if (c)
            if (Mn)
              new MutationObserver(function () {
                for (var e = 0; e < Nn.length; e++) G(Nn[e]);
              }).observe(c, {
                childList: !0,
                subtree: !0,
              });
            else {
              var d = !1;
              Jb(c, 'DOMNodeInserted', function () {
                d ||
                  ((d = !0),
                  G(function () {
                    d = !1;
                    for (var e = 0; e < Nn.length; e++) G(Nn[e]);
                  }));
              });
            }
        };
        Nn = [];
        A.body ? b() : G(b);
      }
      Nn.push(a);
    };
  var Qn = !1,
    Rn = [];

  function Sn() {
    if (!Qn) {
      Qn = !0;
      for (var a = 0; a < Rn.length; a++) G(Rn[a]);
    }
  }
  var Tn = function (a) {
    Qn ? G(a) : Rn.push(a);
  };

  function Un(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) == c;
  }
  var Vn = new Ea();

  function Wn(a, b, c) {
    var d = c ? 'i' : void 0;
    try {
      var e = String(b) + d,
        f = Vn.get(e);
      f || ((f = new RegExp(b, d)), Vn.set(e, f));
      return f.test(a);
    } catch (h) {
      return !1;
    }
  }

  function Xn(a, b) {
    function c(h) {
      var k = Be(h),
        l = ze(k, 'protocol'),
        n = ze(k, 'host', !0),
        p = ze(k, 'port'),
        q = ze(k, 'path').toLowerCase().replace(/\/$/, '');
      if (void 0 === l || ('http' == l && '80' == p) || ('https' == l && '443' == p))
        (l = 'web'), (p = 'default');
      return [l, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }

  function Yn(a) {
    return $n(a) ? 1 : 0;
  }

  function $n(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && ya(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = H(a, {});
        H(
          {
            arg1: c[d],
            any_of: void 0,
          },
          e
        );
        if (Yn(e)) return !0;
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
            } catch (n) {}
          }
          f = !1;
        }
        return f;
      case '_ew':
        return Un(b, c);
      case '_eq':
        return String(b) == String(c);
      case '_ge':
        return Number(b) >= Number(c);
      case '_gt':
        return Number(b) > Number(c);
      case '_lc':
        var l;
        l = String(b).split(',');
        return 0 <= za(l, String(c));
      case '_le':
        return Number(b) <= Number(c);
      case '_lt':
        return Number(b) < Number(c);
      case '_re':
        return Wn(b, c, a.ignore_case);
      case '_sw':
        return 0 == String(b).indexOf(String(c));
      case '_um':
        return Xn(b, c);
    }
    return !1;
  }
  Object.freeze({
    dl: 1,
    id: 1,
  });
  var ao = {},
    bo = function (a, b) {
      b = b.toString().split(',');
      for (var c = 0; c < b.length; c++) (ao[b[c]] = ao[b[c]] || []), ao[b[c]].push(a);
    },
    co = function (a) {
      Ia(ao, function (b, c) {
        var d = za(c, a);
        0 <= d && c.splice(d, 1);
      });
    };
  var eo = 'HA GF G UA AW DC'.split(' '),
    fo = !1;
  fo = !0;
  var go = !1,
    ho = !1;

  function io(a, b) {
    var c = {
      event: a,
    };
    b &&
      ((c.eventModel = H(b)),
      b[K.Ab] && (c.eventCallback = b[K.Ab]),
      b[K.Kc] && (c.eventTimeout = b[K.Kc]));
    return c;
  }

  function jo(a) {
    a.hasOwnProperty('gtm.uniqueEventId') ||
      Object.defineProperty(a, 'gtm.uniqueEventId', {
        value: Pf(),
      });
    return a['gtm.uniqueEventId'];
  }

  function ko() {
    return go;
  }
  var lo = {
      config: function (a) {
        var b,
          c = jo(a);
        return b;
      },
      consent: function (a) {
        function b() {
          ko() &&
            H(a[2], {
              subcommand: a[1],
            });
        }
        if (3 === a.length) {
          td(39);
          var c = Pf(),
            d = a[1];
          'default' === d ? (b(), ae(a[2])) : 'update' === d && (b(), be(a[2], c));
        }
      },
      event: function (a) {
        var b = a[1];
        if (!(2 > a.length) && g(b)) {
          var c;
          if (2 < a.length) {
            if ((!Xb(a[2]) && void 0 != a[2]) || 3 < a.length) return;
            c = a[2];
          }
          var d = io(b, c),
            e = jo(a);
          d['gtm.uniqueEventId'] = e;
          return d;
        }
      },
      get: function (a) {},
      js: function (a) {
        if (2 == a.length && a[1].getTime) {
          ho = !0;
          ko();
          var b = {};
          return (
            (b.event = 'gtm.js'),
            (b['gtm.start'] = a[1].getTime()),
            (b['gtm.uniqueEventId'] = jo(a)),
            b
          );
        }
      },
      policy: function () {},
      set: function (a) {
        var b;
        2 == a.length && Xb(a[1])
          ? (b = H(a[1]))
          : 3 == a.length &&
            g(a[1]) &&
            ((b = {}), Xb(a[2]) || ya(a[2]) ? (b[a[1]] = H(a[2])) : (b[a[1]] = a[2]));
        if (b) {
          b._clear = !0;
          return b;
        }
      },
    },
    mo = {
      policy: !0,
    };
  var no = function (a, b) {
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
    po = function (a) {
      var b = oo(),
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var Go = function (a) {
    if (Fo(a)) return a;
    this.o = a;
  };
  Go.prototype.mi = function () {
    return this.o;
  };
  var Fo = function (a) {
    return !a || 'object' !== Vb(a) || Xb(a) ? !1 : 'getUntrustedUpdateValue' in a;
  };
  Go.prototype.getUntrustedUpdateValue = Go.prototype.mi;
  var Ho = [],
    Io = !1,
    Jo = !1,
    Ko = !1,
    Lo = function (a) {
      return m['dataLayer'].push(a);
    },
    Mo = function (a) {
      var b = Cf['dataLayer'],
        c = b ? b.subscribers : 1,
        d = 0,
        e = a;
      return function () {
        ++d === c && (e(), (e = null));
      };
    };

  function No(a) {
    var b = a._clear;
    Ia(a, function (d, e) {
      '_clear' !== d && (b && Yf(d, void 0), Yf(d, e));
    });
    Kf || (Kf = a['gtm.start']);
    var c = a['gtm.uniqueEventId'];
    if (!a.event) return !1;
    c || ((c = Pf()), (a['gtm.uniqueEventId'] = c), Yf('gtm.uniqueEventId', c));
    return Ek(a);
  }

  function Oo() {
    var a = Ho[0];
    if (null == a || 'object' !== typeof a) return !1;
    if (a.event) return !0;
    if (La(a)) {
      var b = a[0];
      if ('config' === b || 'event' === b || 'js' === b) return !0;
    }
    return !1;
  }

  function Po() {
    for (var a = !1; !Ko && 0 < Ho.length; ) {
      if (!Jo && Oo()) {
        var b = {};
        Ho.unshift(((b.event = 'gtm.init'), b));
        Jo = !0;
      }
      if (!Io && Oo()) {
        var c = {};
        Ho.unshift(((c.event = 'gtm.init_consent'), c));
        Io = !0;
      }
      Ko = !0;
      delete Sf.eventModel;
      Uf();
      var d = Ho.shift();
      if (null != d) {
        var e = Fo(d);
        if (e) {
          var f = d;
          d = Fo(f) ? f.getUntrustedUpdateValue() : void 0;
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
              n = Vf(l, 1);
            if (ya(n) || Xb(n)) n = H(n);
            Tf[l] = n;
          }
        }
        try {
          if (wa(d))
            try {
              d.call(Wf);
            } catch (y) {}
          else if (ya(d)) {
            var p = d;
            if (g(p[0])) {
              var q = p[0].split('.'),
                r = q.pop(),
                u = p.slice(1),
                t = Vf(q.join('.'), 2);
              if (void 0 !== t && null !== t)
                try {
                  t[r].apply(t, u);
                } catch (y) {}
            }
          } else {
            if (La(d)) {
              a: {
                var v = d;
                if (v.length && g(v[0])) {
                  var w = lo[v[0]];
                  if (w && (!e || !mo[v[0]])) {
                    d = w(v);
                    break a;
                  }
                }
                d = void 0;
              }
              if (!d) {
                Ko = !1;
                continue;
              }
            }
            a = No(d) || a;
          }
        } finally {
          e && Uf(!0);
        }
      }
      Ko = !1;
    }
    return !a;
  }

  function Qo() {
    var b = Po();
    try {
      no(m['dataLayer'], Bf.M);
    } catch (c) {}
    return b;
  }
  var So = function () {
      var a = Bb('dataLayer', []),
        b = Bb('google_tag_manager', {});
      b = b['dataLayer'] = b['dataLayer'] || {};
      Ri(function () {
        b.gtmDom ||
          ((b.gtmDom = !0),
          a.push({
            event: 'gtm.dom',
          }));
      });
      Tn(function () {
        b.gtmLoad ||
          ((b.gtmLoad = !0),
          a.push({
            event: 'gtm.load',
          }));
      });
      b.subscribers = (b.subscribers || 0) + 1;
      var c = a.push;
      a.push = function () {
        var e;
        if (0 < Cf.SANDBOXED_JS_SEMAPHORE) {
          e = [];
          for (var f = 0; f < arguments.length; f++) e[f] = new Go(arguments[f]);
        } else e = [].slice.call(arguments, 0);
        var h = c.apply(a, e);
        Ho.push.apply(Ho, e);
        if (300 < this.length) for (td(4); 300 < this.length; ) this.shift();
        var k = 'boolean' !== typeof h || h;
        return Po() && k;
      };
      var d = a.slice(0);
      Ho.push.apply(Ho, d);
      if (Ro()) {
        G(Qo);
      }
    },
    Ro = function () {
      var a = !0;
      return a;
    };
  var To = {};
  To.Vc = new String('undefined');
  var Uo = function (a) {
    this.o = function (b) {
      for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === To.Vc ? b : a[d]);
      return c.join('');
    };
  };
  Uo.prototype.toString = function () {
    return this.o('undefined');
  };
  Uo.prototype.valueOf = Uo.prototype.toString;
  To.Kh = Uo;
  To.de = {};
  To.$h = function (a) {
    return new Uo(a);
  };
  var Vo = {};
  To.Ni = function (a, b) {
    var c = Pf();
    Vo[c] = [a, b];
    return c;
  };
  To.Wf = function (a) {
    var b = a ? 0 : 1;
    return function (c) {
      var d = Vo[c];
      if (d && 'function' === typeof d[b]) d[b]();
      Vo[c] = void 0;
    };
  };
  To.si = function (a) {
    for (var b = !1, c = !1, d = 2; d < a.length; d++)
      (b = b || 8 === a[d]), (c = c || 16 === a[d]);
    return b && c;
  };
  To.Hi = function (a) {
    if (a === To.Vc) return a;
    var b = Pf();
    To.de[b] = a;
    return 'google_tag_manager["' + Bf.M + '"].macro(' + b + ')';
  };
  To.Di = function (a, b, c) {
    a instanceof To.Kh && ((a = a.o(To.Ni(b, c))), (b = ua));
    return {
      ni: a,
      onSuccess: b,
    };
  };
  var fp = m.clearTimeout,
    gp = m.setTimeout,
    R = function (a, b, c) {
      if (ii()) {
        b && G(b);
      } else return Db(a, b, c);
    },
    hp = function () {
      return new Date();
    },
    ip = function () {
      return m.location.href;
    },
    jp = function (a) {
      return ze(Be(a), 'fragment');
    },
    kp = function (a) {
      return Ae(Be(a));
    },
    lp = function (a, b) {
      return Vf(a, b || 2);
    },
    mp = function (a, b, c) {
      var d;
      b ? ((a.eventCallback = b), c && (a.eventTimeout = c), (d = Lo(a))) : (d = Lo(a));
      return d;
    },
    np = function (a, b) {
      m[a] = b;
    },
    U = function (a, b, c) {
      b && (void 0 === m[a] || (c && !m[a])) && (m[a] = b);
      return m[a];
    },
    op = function (a, b, c) {
      return mg(a, b, void 0 === c ? !0 : !!c);
    },
    pp = function (a, b, c) {
      return 0 === zg(a, b, c);
    },
    qp = function (a, b) {
      if (ii()) {
        b && G(b);
      } else Fb(a, b);
    },
    rp = function (a) {
      return !!Gn(a, 'init', !1);
    },
    sp = function (a) {
      En(a, 'init', !0);
    },
    tp = function (a) {
      var b = If + '?id=' + encodeURIComponent(a) + '&l=dataLayer';
      R(ki('https://', 'http://', b));
    },
    up = function (a, b, c) {
      ak && (Yb(a) || ok(c, b, a));
    };
  var vp = To.Di;
  var Sp = encodeURI,
    X = encodeURIComponent,
    Tp = Ib;
  var Up = function (a, b) {
    if (!a) return !1;
    var c = ze(Be(a), 'host');
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
  var Vp = function (a, b, c) {
    for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
      a[f] &&
        a[f].hasOwnProperty(b) &&
        a[f].hasOwnProperty(c) &&
        ((d[a[f][b]] = a[f][c]), (e = !0));
    return e ? d : null;
  };

  function Br() {
    return (m.gaGlobal = m.gaGlobal || {});
  }
  var Cr = function () {
      var a = Br();
      a.hid = a.hid || Ba();
      return a.hid;
    },
    Dr = function (a, b) {
      var c = Br();
      if (void 0 == c.vid || (b && !c.from_cookie)) (c.vid = a), (c.from_cookie = b);
    };
  var ds = function () {
    if (wa(m.__uspapi)) {
      var a = '';
      try {
        m.__uspapi('getUSPData', 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && /^[\da-zA-Z-]{1,20}$/.test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };
  var ys = window,
    zs = document,
    As = function (a) {
      var b = ys._gaUserPrefs;
      if ((b && b.ioo && b.ioo()) || (a && !0 === ys['ga-disable-' + a])) return !0;
      try {
        var c = ys.external;
        if (c && c._gaUserPrefs && 'oo' == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (var d = ig('AMP_TOKEN', String(zs.cookie), !0), e = 0; e < d.length; e++)
        if ('$OPT_OUT' == d[e]) return !0;
      return zs.getElementById('__gaOptOutExtension') ? !0 : !1;
    };
  var Bs = {};

  function Es(a) {
    delete a.eventModel[K.ac];
    Gs(a.eventModel);
  }
  var Gs = function (a) {
    Ia(a, function (c) {
      '_' === c.charAt(0) && delete a[c];
    });
    var b = a[K.Pa] || {};
    Ia(b, function (c) {
      '_' === c.charAt(0) && delete b[c];
    });
  };
  var Js = function (a, b, c) {
      sn(b, c, a);
    },
    Ks = function (a, b, c) {
      sn(b, c, a, !0);
    },
    Os = function (a, b) {};

  function Ls(a, b) {}
  var Z = {
    g: {},
  };

  (Z.g.e = ['google']),
    (function () {
      (function (a) {
        Z.__e = a;
        Z.__e.h = 'e';
        Z.__e.m = !0;
        Z.__e.priorityOverride = 0;
      })(function (a) {
        var b = String(ag(a.vtp_gtmEventId, 'event'));
        a.vtp_gtmCachedValues && (b = String(a.vtp_gtmCachedValues.event));
        return b;
      });
    })();
  (Z.g.f = ['google']),
    (function () {
      (function (a) {
        Z.__f = a;
        Z.__f.h = 'f';
        Z.__f.m = !0;
        Z.__f.priorityOverride = 0;
      })(function (a) {
        var b = lp('gtm.referrer', 1) || A.referrer;
        return b
          ? a.vtp_component && 'URL' != a.vtp_component
            ? ze(Be(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey)
            : kp(String(b))
          : String(b);
      });
    })();

  (Z.g.u = ['google']),
    (function () {
      var a = function (b) {
        return {
          toString: function () {
            return b;
          },
        };
      };
      (function (b) {
        Z.__u = b;
        Z.__u.h = 'u';
        Z.__u.m = !0;
        Z.__u.priorityOverride = 0;
      })(function (b) {
        var c;
        c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : lp('gtm.url', 1)) || ip();
        var d = b[a('vtp_component')];
        if (!d || 'URL' == d) return kp(String(c));
        var e = Be(String(c)),
          f;
        if ('QUERY' === d)
          a: {
            var h = b[a('vtp_multiQueryKeys').toString()],
              k = b[a('vtp_queryKey').toString()] || '',
              l = b[a('vtp_ignoreEmptyQueryParam').toString()],
              n;
            h
              ? ya(k)
                ? (n = k)
                : (n = String(k).replace(/\s+/g, '').split(','))
              : (n = [String(k)]);
            for (var p = 0; p < n.length; p++) {
              var q = ze(e, 'QUERY', void 0, void 0, n[p]);
              if (void 0 != q && (!l || '' !== q)) {
                f = q;
                break a;
              }
            }
            f = void 0;
          }
        else
          f = ze(
            e,
            d,
            'HOST' == d ? b[a('vtp_stripWww')] : void 0,
            'PATH' == d ? b[a('vtp_defaultPages')] : void 0,
            void 0
          );
        return f;
      });
    })();

  var Ps = {};
  (Ps.macro = function (a) {
    if (To.de.hasOwnProperty(a)) return To.de[a];
  }),
    (Ps.onHtmlSuccess = To.Wf(!0)),
    (Ps.onHtmlFailure = To.Wf(!1));
  Ps.dataLayer = Wf;
  Ps.callback = function (a) {
    Nf.hasOwnProperty(a) && wa(Nf[a]) && Nf[a]();
    delete Nf[a];
  };
  Ps.bootstrap = 0;
  Ps._spx = !1;

  function Qs() {
    Cf[Bf.M] = Ps;
    Va(Of, Z.g);
    Jc = Jc || To;
    Kc = Sc;
  }

  function Rs() {
    var a = !1;
    a && dj('INIT');
    yd().s();
    Cf = m.google_tag_manager = m.google_tag_manager || {};
    nl();
    th.enable_gbraid_cookie_write = !0;
    if (Cf[Bf.M]) {
      var b = Cf.zones;
      b && b.unregisterChild(Bf.M);
    } else {
      for (var c = data.resource || {}, d = c.macros || [], e = 0; e < d.length; e++) xc.push(d[e]);
      for (var f = c.tags || [], h = 0; h < f.length; h++) Fc.push(f[h]);
      for (var k = c.predicates || [], l = 0; l < k.length; l++) Ec.push(k[l]);
      for (var n = c.rules || [], p = 0; p < n.length; p++) {
        for (var q = n[p], r = {}, u = 0; u < q.length; u++)
          r[q[u][0]] = Array.prototype.slice.call(q[u], 1);
        yc.push(r);
      }
      Hc = Z;
      Ic = Yn;
      Qs();
      So();
      Mi = !1;
      Ni = 0;
      if (('interactive' == A.readyState && !A.createEventObject) || 'complete' == A.readyState)
        Pi();
      else {
        Jb(A, 'DOMContentLoaded', Pi);
        Jb(A, 'readystatechange', Pi);
        if (A.createEventObject && A.documentElement.doScroll) {
          var t = !0;
          try {
            t = !m.frameElement;
          } catch (z) {}
          t && Qi();
        }
        Jb(m, 'load', Pi);
      }
      Qn = !1;
      'complete' === A.readyState ? Sn() : Jb(m, 'load', Sn);
      ak && m.setInterval(Uj, 864e5);
      Lf = new Date().getTime();
      if (a) {
        var x = ej('INIT');
      }
    }
  }
  (function (a) {
    if (!m['__TAGGY_INSTALLED']) {
      var b = !1;
      if (A.referrer) {
        var c = Be(A.referrer);
        b = 'cct.google' === ye(c, 'host');
      }
      if (!b) {
        var d = mg('googTaggyReferrer');
        b = d.length && d[0].length;
      }
      b && ((m['__TAGGY_INSTALLED'] = !0), Db('https://cct.google/taggy/agent.js'));
    }
    var f = function () {
        var n = m['google.tagmanager.debugui2.queue'];
        n ||
          ((n = []),
          (m['google.tagmanager.debugui2.queue'] = n),
          Db('https://www.googletagmanager.com/debug/bootstrap'));
        var p = {
          messageType: 'CONTAINER_STARTING',
          data: {
            scriptSource: Ab,
            containerProduct: 'GTM',
            debug: !1,
          },
        };
        p.data.resume = function () {
          a();
        };
        Bf.Qg && (p.data.initialPublish = !0);
        n.push(p);
      },
      h = 'x' === ze(m.location, 'query', !1, void 0, 'gtm_debug');
    if (!h && A.referrer) {
      var k = Be(A.referrer);
      h = 'tagassistant.google.com' === ye(k, 'host');
    }
    if (!h) {
      var l = mg('__TAG_ASSISTANT');
      h = l.length && l[0].length;
    }
    m.__TAG_ASSISTANT_API && (h = !0);
    h && Ab ? f() : a();
  })(Rs);
})();
