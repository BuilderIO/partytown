/**
 * HubSpot Analytics Tracking Code Build Number 1.398
 * Copyright 2021 HubSpot, Inc.  http://www.hubspot.com
 */
var _hsq = _hsq || [];
var _paq = _paq || [];
_hsq.push(['setPortalId', 20632911]);
_hsq.push(['trackPageView']);
_hsq.push(['setLegacy', false]);
_hsq.push(['addCookieDomain', '.hubspotpagebuilder.com']);
_hsq.push(['addCookieDomain', '.hubspot.com']);
_hsq.push(['addCookieDomain', '.hsforms.com']);
_hsq.push(['addCookieDomain', '.builder.io']);
_hsq.push(['embedHubSpotScript', './scripts-20632911.js', 'hs-script-loader']);
_hsq.push(['setTrackingDomain', 'track.hubspot.com']);
/** _anon_wrapper_ **/ (function () {
  var hstc;
  (hstc = hstc || {}).JS_VERSION = 1.1;
  hstc.ANALYTICS_HOST = 'track.hubspot.com';
  (hstc = hstc || {}).Math = {
    uuid: function () {
      if (window.navigator.userAgent.indexOf('googleweblight') > -1)
        return hstc.Math._mathRandomUuid();
      var t = window.crypto || window.msCrypto;
      return void 0 !== t && void 0 !== t.getRandomValues && void 0 !== window.Uint16Array
        ? hstc.Math._cryptoUuid()
        : hstc.Math._mathRandomUuid();
    },
    _mathRandomUuid: function () {
      var t = new Date().getTime();
      return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (e) {
        var i = (t + 16 * Math.random()) % 16 | 0;
        t = Math.floor(t / 16);
        return ('x' === e ? i : (3 & i) | 8).toString(16);
      });
    },
    _cryptoUuid: function () {
      var t = window.crypto || window.msCrypto,
        e = new Uint16Array(8);
      t.getRandomValues(e);
      var i = function (t) {
        for (var e = t.toString(16); e.length < 4; ) e = '0' + e;
        return e;
      };
      return i(e[0]) + i(e[1]) + i(e[2]) + i(e[3]) + i(e[4]) + i(e[5]) + i(e[6]) + i(e[7]);
    },
  };
  Math.uuid =
    Math.uuid ||
    function () {
      hstc.utils.logError(new Error('Attempt to use Math.uuid()'));
      return hstc.Math.uuid();
    };
  (hstc = hstc || {}).debug = !1;
  hstc.log = function () {
    try {
      var t = new hstc.cookies.Cookie(),
        e = 'hs_dbg',
        i = document.location.hash.indexOf('#hsdbg') > -1;
      if (hstc.debug || i || '1' === t.get(e)) {
        var n = window.console;
        n && 'function' == typeof n.log && n.log.apply(n, arguments);
        t.set(e, 1);
      }
    } catch (t) {}
  };
  (hstc = hstc || {}).global = {};
  hstc.global.Context = function (t, e, i, n, r, s, o) {
    this.doc = t || document;
    this.nav = e || navigator;
    this.scr = i || screen;
    this.win = n || window;
    this.loc = r || this.win.location;
    this.top = s || top;
    this.parent = o || parent;
  };
  hstc.global.Context.prototype.getDocument = function () {
    return this.doc;
  };
  hstc.global.Context.prototype.getNavigator = function () {
    return this.nav;
  };
  hstc.global.Context.prototype.getScreen = function () {
    return this.scr;
  };
  hstc.global.Context.prototype.getWindow = function () {
    return this.win;
  };
  hstc.global.Context.prototype.getLocation = function () {
    return this.loc;
  };
  hstc.global.Context.prototype.getHostName = function () {
    try {
      return this.loc.hostname;
    } catch (t) {
      return this.doc.domain;
    }
  };
  hstc.global.Context.prototype.getPathName = function () {
    return this.loc.pathname;
  };
  hstc.global.Context.prototype.getTop = function () {
    return this.top;
  };
  hstc.global.Context.prototype.getParent = function () {
    return this.parent;
  };
  hstc.global.Context.prototype.getReferrer = function () {
    var t = '';
    try {
      t = this.top.document.referrer;
    } catch (e) {
      if (parent)
        try {
          t = this.parent.document.referrer;
        } catch (e) {
          t = '';
        }
    }
    '' === t && (t = this.doc.referrer);
    return t;
  };
  hstc.global.Context.prototype.getCharacterSet = function () {
    return this.doc.characterSet ? this.doc.characterSet : this.doc.charset ? this.doc.charset : '';
  };
  hstc.global.Context.prototype.getLanguage = function () {
    return this.nav.language
      ? this.nav.language
      : this.nav.browserLanguage
      ? this.nav.browserLanguage
      : '';
  };
  hstc.global.Context.prototype.getOrigin = function () {
    return this.loc.origin
      ? this.loc.origin
      : this.loc.protocol + '//' + this.getHostName() + (this.loc.port ? ':' + this.loc.port : '');
  };
  hstc.global.Context.prototype.getCurrentHref = function (t) {
    return t ? this.getOrigin().toLowerCase() + t : this.loc.href.toLowerCase();
  };
  (hstc = hstc || {}).utils = {};
  hstc.utils.tostr = Object.prototype.toString;
  hstc.utils.getNextWeekStart = function (t) {
    var e = t || new Date(),
      i = e.getDay(),
      n = e.getDate() + (0 == i ? 7 : 7 - i);
    return hstc.utils.clearTimePart(new Date(e.setDate(n)));
  };
  hstc.utils.getNextMonthStart = function (t) {
    for (var e = t || new Date(), i = e.getMonth(); i == e.getMonth(); ) {
      0;
      e.setDate(e.getDate() + 1);
    }
    return hstc.utils.clearTimePart(e);
  };
  hstc.utils.clearTimePart = function (t) {
    t.setHours(0);
    t.setMinutes(0);
    t.setSeconds(0);
    t.setMilliseconds(0);
    return t;
  };
  hstc.utils.truncateString = function (t, e) {
    return t ? (t.length > e ? t.substr(0, e) : t) : '';
  };
  hstc.utils.search2dArray = function (t, e, i, n) {
    for (var r = 0; r < t.length; r++) {
      var s = t[r];
      if (s && hstc.utils.isArray(s) && -1 !== hstc.utils.inArray(s[e - 1], i)) {
        n(s, r);
        t.splice(r--, 1);
      }
    }
  };
  hstc.utils.removeSingleCallValueFromHsq = function (t, e) {
    for (var i = 0; i < t.length; i++) {
      var n = t[i];
      if (n && hstc.utils.isArray(n) && n[0] === e) {
        t.splice(i--, 1);
        return 2 == n.length ? n[1] : null;
      }
    }
  };
  hstc.utils.removeDomain = function (t) {
    return '/' + t.split('//')[1].split('/').slice(1).join('/');
  };
  hstc.utils.removeItem = function (t, e, i) {
    var n = t.slice((i || e) + 1 || this.length);
    this.length = e < 0 ? t.length + e : e;
    return t.push.apply(t, n);
  };
  hstc.utils.isArray = function (t) {
    return '[object Array]' === hstc.utils.tostr.call(t);
  };
  hstc.utils.inArray = function (t, e) {
    for (var i = 0, n = e.length; i < n; i++) if (e[i] === t) return i;
    return -1;
  };
  hstc.utils.extend = function () {
    var t,
      e = arguments[0] || {},
      i = 1,
      n = arguments.length,
      r = !1;
    if ('boolean' == typeof e) {
      r = e;
      e = arguments[1] || {};
      i = 2;
    }
    'object' == typeof e || hstc.utils.isFunction(e) || (e = {});
    if (n == i) {
      e = this;
      --i;
    }
    for (; i < n; i++)
      if (null != (t = arguments[i]))
        for (var s in t) {
          var o = e[s],
            c = t[s];
          e !== c &&
            (r && c && 'object' == typeof c && !c.nodeType
              ? (e[s] = hstc.utils.extend(r, o || (null !== c.length ? [] : {}), c))
              : void 0 !== c && (e[s] = c));
        }
    return e;
  };
  hstc.utils.each = function (t, e) {
    var i,
      n = 0,
      r = t.length;
    if (void 0 === r) {
      for (i in t) if (!1 === e.call(t[i], i, t[i])) break;
    } else for (var s = t[0]; n < r && !1 !== e.call(s, n, s); s = t[++n]);
    return t;
  };
  hstc.utils.isDefined = function (t) {
    return void 0 !== t;
  };
  hstc.utils.addEventListener = function (t, e, i, n) {
    if (t.addEventListener) {
      t.addEventListener(e, i, n);
      return !0;
    }
    if (t.attachEvent) return t.attachEvent('on' + e, i);
    t['on' + e] = i;
  };
  hstc.utils.removeEventListener = function (t, e, i, n) {
    if (t.removeEventListener) {
      t.removeEventListener(e, i, n);
      return !0;
    }
    if (t.detachEvent) return t.detachEvent('on' + e, i);
    t.removeAttribute('on' + e);
  };
  hstc.utils.preventDefault = function (t) {
    t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
  };
  hstc.utils.loadImage = function (t, e, i) {
    var n = new Date(),
      r = new Image(1, 1);
    expireDateTime = n.getTime() + e;
    r.onload = function () {
      i && i();
    };
    r.src = t;
  };
  hstc.utils.isEmpty = function (t) {
    return void 0 == t || '-' == t || '' == t;
  };
  hstc.utils.isEmptyObject = function (t) {
    for (var e in t) return !1;
    return !0;
  };
  hstc.utils.safeString = function (t) {
    return hstc.utils.isEmpty(t) ? '' : t;
  };
  hstc.utils.makeLowerCase = function (t) {
    return hstc.utils.safeString(t).toLowerCase();
  };
  hstc.utils.encodeParam = function (t, e) {
    var i = encodeURIComponent;
    return i instanceof Function ? (e ? encodeURI(t) : i(t)) : escape(t);
  };
  hstc.utils.decodeParam = function (t, e) {
    var i,
      n = decodeURIComponent;
    t = t.split('+').join(' ');
    if (n instanceof Function)
      try {
        i = e ? decodeURI(t) : n(t);
      } catch (e) {
        i = unescape(t);
      }
    else i = unescape(t);
    return i;
  };
  hstc.utils.isFunction = function (t) {
    return '[object Function]' === hstc.utils.tostr.call(t);
  };
  hstc.utils.utcnow = function () {
    return new Date().getTime();
  };
  hstc.utils.hashString = function (t) {
    for (var e = 0, i = t.length - 1; i >= 0; i--) {
      var n = t.charCodeAt(i);
      e = 0 !== (n = 266338304 & (e = ((e << 6) & 268435455) + n + (n << 14))) ? e ^ (n >> 21) : e;
    }
    return e;
  };
  hstc.utils.extractDomain = function (t) {
    var e = t.split('.');
    e.length > 2 && (e = e.slice(1));
    return '.' + e.join('.');
  };
  hstc.utils.createElement = function (t) {
    var e = document.createDocumentFragment(),
      i = document.createElement('div');
    i.innerHTML = t;
    for (; i.firstChild; ) e.appendChild(i.firstChild);
    return e;
  };
  sanitizeKey = function (t) {
    return t && ['__proto__', 'constructor', 'prototype'].indexOf(t.toLowerCase()) > -1
      ? t.toUpperCase()
      : t;
  };
  hstc.utils.deparam = function (t, e) {
    var i = {},
      n = { true: !0, false: !1, null: null };
    t = hstc.utils.trim(hstc.utils.safeString(t));
    (hstc.utils.startsWith(t, '?') || hstc.utils.startsWith(t, '#')) && (t = t.slice(1));
    hstc.utils.each(t.split('+').join(' ').split('&'), function (t, r) {
      var s,
        o = r.split('='),
        c = hstc.utils.decodeParam(o[0]),
        a = i,
        h = 0,
        u = c.split(']['),
        l = u.length - 1;
      if (/\[/.test(u[0]) && /\]$/.test(u[l])) {
        u[l] = u[l].replace(/\]$/, '');
        l = (u = u.shift().split('[').concat(u)).length - 1;
      } else l = 0;
      if (2 === o.length) {
        s = hstc.utils.decodeParam(o[1]);
        e && (s = s && !isNaN(s) ? +s : 'undefined' === s ? void 0 : void 0 !== n[s] ? n[s] : s);
        if (l)
          for (; h <= l; h++) {
            c = '' === u[h] ? a.length : u[h];
            a = a[(c = sanitizeKey(c))] =
              h < l ? a[c] || (u[h + 1] && isNaN(u[h + 1]) ? {} : []) : s;
          }
        else {
          c = sanitizeKey(c);
          hstc.utils.isArray(i[c])
            ? i[c].push(s)
            : void 0 !== i[c]
            ? (i[c] = [i[c], s])
            : (i[c] = s);
        }
      } else c && (i[c] = e ? void 0 : '');
    });
    return i;
  };
  hstc.utils.param = function (t, e) {
    var i = [];
    e = e || '&';
    function n(t, e) {
      i[i.length] = hstc.utils.encodeParam(t) + '=' + hstc.utils.encodeParam(e);
    }
    for (var r in t)
      hstc.utils.isArray(t[r])
        ? hstc.utils.each(t[r], function () {
            n(r, this);
          })
        : n(r, hstc.utils.isFunction(t[r]) ? t[r]() : t[r]);
    return i.join(e).replace(/%20/g, '+');
  };
  hstc.utils.updateQueryStringParameter = function (t, e, i) {
    var n = new RegExp('([?|&])' + e + '=.*?(&|#|$)(.*)', 'gi');
    if (n.test(t))
      return i
        ? t.replace(n, '$1' + e + '=' + i + '$2$3')
        : t.replace(n, '$1$3').replace(/(&|\?)$/, '');
    if (i) {
      var r = t.indexOf('#'),
        s = t.indexOf('?'),
        o = -1 !== s && (-1 === r || s < r) ? '&' : '?',
        c = t.split('#');
      t = c[0] + o + e + '=' + i;
      c[1] && (t += '#' + c[1]);
      return t;
    }
    return t;
  };
  hstc.utils.trim = function (t) {
    return (t || '').replace(/^\s+|\s+$/g, '');
  };
  hstc.utils.startsWith = function (t, e) {
    return null != e && t.substr(0, e.length) == e;
  };
  hstc.utils.endsWith = function (t, e) {
    var i = t.length - e.length;
    return i >= 0 && t.lastIndexOf(e) === i;
  };
  hstc.utils.mergeObject = function (t, e) {
    t = t || {};
    if (!e) return e;
    for (var i in e) t[i] = e[i];
    return t;
  };
  hstc.utils.hasClass = function (t, e) {
    if (t && t.className) return hstc.utils.inArray(e, t.className.split(' ')) > -1;
  };
  hstc.utils.stripNumericBrackets = function (t) {
    return (t || '').replace(/(^.+?)\[(.+?)\]/, '$1_$2');
  };
  hstc.utils.parseCurrency = function (t, e) {
    if ('number' == typeof t) return t;
    var i = t.match(/([^\d]*)([\d\.,]+)([^\d\.,]*)/);
    if (i) {
      var n,
        r = i[2],
        s = r.split('.'),
        o = r.split(',');
      n =
        s.length > 2 ||
        (2 == s.length && s[1].length > 2 && (0 === o.length || s[0].length < o[0].length)) ||
        (2 == o.length && 2 == o[1].length)
          ? o
          : s;
      var c = (decimalPart = 0);
      if (n.length > 1) {
        decimalPart = n.pop();
        c = n.join('');
      } else c = n.join('');
      c = c.replace(/[\.,]/g, '');
      var a = parseInt(c);
      decimalPart && (a += parseFloat(decimalPart) / Math.pow(10, decimalPart.length));
      return a;
    }
    return null;
  };
  hstc.utils.logError = function (t, e) {
    e = e || '';
    var i = {
      w: hstc.utils.utcnow(),
      m: t.message || t.toString ? t.toString() : '-',
      j: hstc.JS_VERSION,
    };
    t.name && (i.n = t.name);
    t.fileName && (i.f = t.fileName);
    t.lineNumber && (i.l = t.lineNumber);
    try {
      i.x = t.stack || t.stacktrace || '';
    } catch (t) {}
    hstc.log('Encountered a JS error');
    hstc.log(i);
    var n = 'https://' + (e || hstc.ANALYTICS_HOST) + '/__pto.gif?';
    hstc.utils.loadImage(n + hstc.utils.param(i));
  };
  hstc.utils.objectsAreEqual = function (t, e) {
    return eq(t, e, []);
  };
  hstc.utils.eq = function (t, e, i) {
    if (t === e) return 0 !== t || 1 / t == 1 / e;
    if (null == t || null == e) return t === e;
    t._chain && (t = t._wrapped);
    e._chain && (e = e._wrapped);
    if (t.isEqual && _.isFunction(t.isEqual)) return t.isEqual(e);
    if (e.isEqual && _.isFunction(e.isEqual)) return e.isEqual(t);
    var n = toString.call(t);
    if (n != toString.call(e)) return !1;
    switch (n) {
      case '[object String]':
        return t == String(e);
      case '[object Number]':
        return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;
      case '[object Date]':
      case '[object Boolean]':
        return +t == +e;
      case '[object RegExp]':
        return (
          t.source == e.source &&
          t.global == e.global &&
          t.multiline == e.multiline &&
          t.ignoreCase == e.ignoreCase
        );
    }
    if ('object' != typeof t || 'object' != typeof e) return !1;
    for (var r = i.length; r--; ) if (i[r] == t) return !0;
    i.push(t);
    var s = 0,
      o = !0;
    if ('[object Array]' == n) {
      if ((o = (s = t.length) == e.length))
        for (; s-- && (o = s in t == s in e && eq(t[s], e[s], i)); );
    } else {
      if ('constructor' in t != 'constructor' in e || t.constructor != e.constructor) return !1;
      for (var c in t)
        if (_.has(t, c)) {
          s++;
          if (!(o = _.has(e, c) && eq(t[c], e[c], i))) break;
        }
      if (o) {
        for (c in e) if (_.has(e, c) && !s--) break;
        o = !s;
      }
    }
    i.pop();
    return o;
  };
  (hstc = hstc || {}).cookies = {};
  hstc.cookies.Cookie = function (t) {
    this.context = t || new hstc.global.Context();
    this.currentDomain = null;
    this.domains = [];
    this.secureCookie = !1;
  };
  hstc.cookies.Cookie.prototype.addDomain = function (t) {
    hstc.utils.endsWith('.' + this.context.getHostName(), t) &&
      (!this.currentDomain || t.length < this.currentDomain.length) &&
      (this.currentDomain = t);
    this.domains.push(t);
  };
  hstc.cookies.Cookie.prototype.getDomains = function () {
    return this.domains;
  };
  hstc.cookies.Cookie.prototype.set = function (t, e, i) {
    var n,
      r,
      s = !1;
    (i = i || {}).minsToExpire
      ? (n = new Date()).setTime(n.getTime() + 1e3 * i.minsToExpire * 60)
      : i.daysToExpire
      ? (n = new Date()).setTime(n.getTime() + 1e3 * i.daysToExpire * 60 * 60 * 24)
      : i.expiryDate && i.expiryDate.toGMTString
      ? (n = i.expiryDate)
      : i.expiryDate && (n = new Date(i.expiryDate));
    if (void 0 !== n) {
      r = n.toGMTString();
      s = !0;
    }
    this._set(t, i.alreadyEncoded ? e : hstc.utils.encodeParam(e, !0), {
      expires: s ? ';expires=' + r : '',
      expiresTime: s ? n : null,
      path: ';path=' + (i.path ? i.path : '/'),
      domain: !this.cookiesToSubdomain && this.currentDomain ? ';domain=' + this.currentDomain : '',
      secure: this.secureCookie || i.secure ? ';secure' : '',
      sameSite: ';SameSite=Lax',
    });
  };
  hstc.cookies.Cookie.prototype._set = function (t, e, i) {
    var n = i.expires + i.path + i.domain + i.sameSite + i.secure;
    this._writeCookie(t + '=' + e + n);
    var r = this.get(t);
    if ((!r || r != e) && '' != i.domain && (!i.expiresTime || i.expiresTime - new Date() > 0)) {
      n = i.expires + i.path + i.sameSite + i.secure;
      this._writeCookie(t + '=' + e + n);
    }
  };
  hstc.cookies.Cookie.prototype._writeCookie = function (t) {
    this.context.getDocument().cookie = t;
  };
  hstc.cookies.Cookie.prototype.get = function (t) {
    var e = new RegExp('(^|;)[ ]*' + t + '=([^;]*)').exec(this.context.getDocument().cookie);
    return e ? hstc.utils.decodeParam(e[2], !0) : '';
  };
  hstc.cookies.Cookie.prototype.has = function () {
    return (
      hstc.utils.isDefined(this.context.getNavigator().cookieEnabled) ||
      ('cookie' in this.context.getDocument() && this.context.getDocument().cookie.length > 0)
    );
  };
  hstc.cookies.Cookie.prototype.remove = function (t) {
    this.set(t, '', { expiryDate: 'Thu, 01-Jan-1970 00:00:01 GMT' });
  };
  hstc.cookies.Cookie.prototype.setCookiesToSubdomain = function (t) {
    this.cookiesToSubdomain = t;
  };
  hstc.cookies.Cookie.prototype.setSecureCookie = function () {
    this.secureCookie = !0;
  };
  (hstc = hstc || {}).identities = {};
  hstc.identities.Identity = function (t) {
    this.raw = t;
  };
  hstc.identities.Identity.prototype.get = function () {
    return this.raw;
  };
  hstc.identities.Identity.prototype.equals = function (t) {
    return hstc.utils.objectsAreEqual(this, t);
  };
  hstc.identities.Identity.prototype.merge = function (t) {
    this.raw = hstc.utils.mergeObject(this.raw, t);
  };
  (hstc = hstc || {}).browser = function (t) {
    var e = (t = t || new hstc.global.Context()).getNavigator(),
      i = e.userAgent.toLowerCase(),
      n = {
        init: function () {
          this.browser = this.searchString(this.dataBrowser) || '';
          this.version = this.searchVersion(e.userAgent) || this.searchVersion(e.appVersion) || '';
          this.OS = this.searchString(this.dataOS) || '';
        },
        searchString: function (t) {
          for (var e = 0; e < t.length; e++) {
            var i = t[e].string,
              n = t[e].prop;
            this.versionSearchString = t[e].versionSearch || t[e].identity;
            if (i) {
              if (-1 !== i.indexOf(t[e].subString)) return t[e].identity;
              if (n) return t[e].identity;
            }
          }
        },
        searchVersion: function (t) {
          var e = t.indexOf(this.versionSearchString);
          if (-1 !== e) return parseFloat(t.substring(e + this.versionSearchString.length + 1));
        },
        dataBrowser: [
          { string: e.userAgent, subString: 'Chrome', identity: 'Chrome' },
          {
            string: e.userAgent,
            subString: 'OmniWeb',
            versionSearch: 'OmniWeb/',
            identity: 'OmniWeb',
          },
          { string: e.vendor, subString: 'Apple', identity: 'Safari', versionSearch: 'Version' },
          { prop: window.opera, identity: 'Opera' },
          { string: e.vendor, subString: 'iCab', identity: 'iCab' },
          { string: e.vendor, subString: 'KDE', identity: 'Konqueror' },
          { string: e.userAgent, subString: 'Firefox', identity: 'Firefox' },
          { string: e.vendor, subString: 'Camino', identity: 'Camino' },
          { string: e.userAgent, subString: 'Netscape', identity: 'Netscape' },
          { string: e.userAgent, subString: 'MSIE', identity: 'Explorer', versionSearch: 'MSIE' },
          { string: e.userAgent, subString: 'Gecko', identity: 'Mozilla', versionSearch: 'rv' },
          {
            string: e.userAgent,
            subString: 'Mozilla',
            identity: 'Netscape',
            versionSearch: 'Mozilla',
          },
        ],
        dataOS: [
          { string: e.platform, subString: 'Win', identity: 'Windows' },
          { string: e.platform, subString: 'Mac', identity: 'Mac' },
          { string: e.userAgent, subString: 'iPhone', identity: 'iPhone/iPod' },
          { string: e.platform, subString: 'Linux', identity: 'Linux' },
        ],
      };
    n.init();
    this.version = (i.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, '0'])[1];
    this.os = n.OS;
    this.brand = n.browser;
    this.webkit = /webkit/.test(i);
    this.opera = /opera/.test(i);
    this.msie = /msie/.test(i) && !/opera/.test(i);
    this.mozilla = /mozilla/.test(i) && !/(compatible|webkit)/.test(i);
  };
  (hstc = hstc || {}).tracking = hstc.tracking || {};
  hstc.tracking.Tracker = function (t, e) {
    this.context = t || new hstc.global.Context();
    this.cookie = e || new hstc.cookies.Cookie(this.context);
    this.now = hstc.utils.utcnow();
    this.session = null;
    this.utk = null;
    this.managedCookies = !1;
    this.trackingEnabled = !0;
    this.limitTrackingToCookieDomains = !1;
    this.crossDomainLinkingEnabled = !1;
    this.hasResetVisitor = !1;
    this.privacyConsent = null;
    this.privacySettings = null;
    this.clickSelectors = [];
    this.userTokenListeners = [];
    this.cookieListeners = [];
    this.pageIdListeners = [];
    this.contentMetadataListeners = [];
    this.contentTypeListeners = [];
    this.trackingDomain = null;
  };
  hstc.tracking.Tracker.DO_NOT_TRACK = '__hs_do_not_track';
  hstc.tracking.Tracker.DO_NOT_TRACK_EXPIRATION = 390;
  hstc.tracking.Tracker.prototype._initialize = function () {
    this._handlePrivacyPolicy();
    this._handleMigrations();
    this._setRelCanonicalUrl();
  };
  hstc.tracking.Tracker.prototype._getHspQueue = function () {
    return (this.context.getWindow()._hsp = this.context.getWindow()._hsp || []);
  };
  hstc.tracking.Tracker.prototype.setTrackingDomain = function (t) {
    this.trackingDomain = t;
  };
  hstc.tracking.Tracker.prototype.setPortalId = function (t) {
    this.portalId = t;
    this._manageCookies();
  };
  hstc.tracking.Tracker.prototype.setCanonicalUrl = function (t) {
    this.canonicalUrl = t;
  };
  hstc.tracking.Tracker.prototype.setPath = function (t) {
    '' == t && (t = '/');
    this.referrerPath = this.path;
    this.path = t;
    this.refreshPageHandlers();
  };
  hstc.tracking.Tracker.prototype.refreshPageHandlers = function () {
    for (var t = 0; t < this.clickSelectors.length; t++)
      this._resetClickHandler(this.clickSelectors[t]);
  };
  hstc.tracking.Tracker.prototype.setContentType = function (t) {
    this.contentType = t;
    for (var e = 0; e < this.contentTypeListeners.length; e++)
      this.contentTypeListeners[e](this.contentType);
  };
  hstc.tracking.Tracker.prototype.setPageId = function (t) {
    this.pageId = t;
    for (var e = 0; e < this.pageIdListeners.length; e++) this.pageIdListeners[e](this.pageId);
  };
  hstc.tracking.Tracker.prototype.setContentMetadata = function (t) {
    this.contentMetadata = t;
    for (var e = 0; e < this.contentMetadataListeners.length; e++)
      this.contentMetadataListeners[e](this.contentMetadata);
  };
  hstc.tracking.Tracker.prototype.setTargetedContentMetadata = function (t) {
    this.targetedContentMetadata = t;
  };
  hstc.tracking.Tracker.prototype.setDebugMode = function (t) {
    hstc.debug = t;
  };
  hstc.tracking.Tracker.prototype.setCookiesToSubdomain = function (t) {
    this.cookie.setCookiesToSubdomain(t);
  };
  hstc.tracking.Tracker.prototype.setLimitTrackingToCookieDomains = function (t) {
    this.limitTrackingToCookieDomains = t;
  };
  hstc.tracking.Tracker.prototype.setTrackingEnabled = function (t) {
    this.trackingEnabled = !!t;
  };
  hstc.tracking.Tracker.prototype.addUserTokenListener = function (t) {
    this.utk && this.utk.visitor && t(this.utk.visitor);
    this.userTokenListeners.push(t);
  };
  hstc.tracking.Tracker.prototype.addCookieListener = function (t) {
    var e = null,
      i = null;
    this.utk && this.utk.visitor && (e = this.utk.get());
    this.session && (i = this.session.get());
    (e || i) && t(e, i, this._getFingerprint());
    this.cookieListeners.push(t);
  };
  hstc.tracking.Tracker.prototype.addIdentityListener =
    hstc.tracking.Tracker.prototype.addCookieListener;
  hstc.tracking.Tracker.prototype.addPageIdListener = function (t) {
    this.pageId && t(this.pageId);
    this.pageIdListeners.push(t);
  };
  hstc.tracking.Tracker.prototype.addContentMetadataListener = function (t) {
    this.contentMetadata && t(this.contentMetadata);
    this.contentMetadataListeners.push(t);
  };
  hstc.tracking.Tracker.prototype.addContentTypeListener = function (t) {
    this.contentType && t(this.contentType);
    this.contentTypeListeners.push(t);
  };
  hstc.tracking.Tracker.prototype.addPrivacyConsentListener = function (t) {
    this._enqueuePrivacyCall('addPrivacyConsentListener', t);
  };
  hstc.tracking.Tracker.prototype.addCookieDomain = function (t) {
    this.cookie.addDomain(t);
  };
  hstc.tracking.Tracker.prototype.enableSecureCookie = function () {
    this.cookie.setSecureCookie();
  };
  hstc.tracking.Tracker.prototype.enableAutomaticLinker = function () {
    var t = this;
    t.crossDomainLinkingEnabled = !0;
    t._manageCookies();
    if (this.cookie.getDomains() && !(this.cookie.getDomains().length <= 0)) {
      var e = [];
      hstc.utils.each(this.cookie.getDomains(), function (i, n) {
        if (!t.cookie.currentDomain || t.cookie.currentDomain !== n) {
          var r = n.replace(/\./g, '\\.');
          r = 0 === r.indexOf('\\.') ? r.replace(/^\\\./, '(^|\\.)') : '^' + r;
          e.push(r);
        }
      });
      var i = new RegExp('(' + e.join('|') + ')$');
      t._enqueueConsentListener(function () {
        t._iterateLinks(function (e) {
          return e.hostname && e.hostname !== t.context.getHostName() && e.hostname.match(i);
        });
      });
    }
  };
  hstc.tracking.Tracker.prototype.handleSearchLink = function (t) {
    var e = this;
    e._enqueueConsentListener(function () {
      e.handleLink(t, null, !0);
    });
  };
  hstc.tracking.Tracker.prototype.handleSearchLinks = function () {
    var t = this;
    t._manageCookies();
    var e = new RegExp('(/_hcms/analytics/search/conversion|/_hcms/analytics/search/request)');
    t._enqueueConsentListener(function () {
      t._iterateLinks(function (t) {
        return t.href.match(e);
      });
    });
  };
  hstc.tracking.Tracker.prototype._iterateLinks = function (t) {
    var e = this;
    hstc.utils.each(hstc.find('a'), function (i, n) {
      if (e.utk && e.utk.visitor)
        try {
          if (t(n))
            try {
              n.href = e.handleLink(n.href, n.target, !0);
            } catch (t) {
              n &&
                n.href &&
                hstc.utils.logError(
                  'Unable to modify link to ' + n.href,
                  e._determineTrackingDomain()
                );
            }
        } catch (t) {
          hstc.log("Can't modify link.");
        }
    });
  };
  hstc.tracking.Tracker.prototype.handleLink = function (t, e, i) {
    var n = t,
      r = this._getFingerprint();
    if (null !== r) {
      n = hstc.utils.updateQueryStringParameter(n, '__hstc', this.utk.get());
      n = hstc.utils.updateQueryStringParameter(n, '__hssc', this.session.get());
      n = hstc.utils.updateQueryStringParameter(n, '__hsfp', r);
    }
    if (i) return n;
    this.context.getWindow().open(n, e || '_self');
  };
  hstc.tracking.Tracker.prototype.identify = function (t, e) {
    e || this._manageCookies();
    this.identity ? this.identity.merge(t) : (this.identity = new hstc.identities.Identity(t));
  };
  hstc.tracking.Tracker.prototype.trackPageView = function () {
    this._manageCookies();
    var t = { k: 1 };
    this._loadImage(t);
  };
  hstc.tracking.Tracker.prototype.trackConversion = function (t, e) {
    this._manageCookies();
    if ('string' == typeof t || 'number' == typeof t) {
      t = { id: hstc.utils.safeString(t) };
      hstc.utils.isDefined(e) && (t = hstc.utils.mergeObject(t, e));
    }
    hstc.utils.isFunction(t.value) && (t.value = t.value(hstc));
    var i = hstc.utils.mergeObject(t, {
      k: 3,
      n: hstc.utils.safeString(t.id),
      m: hstc.utils.safeString(t.value),
    });
    this._loadImage(i);
  };
  hstc.tracking.Tracker.prototype.trackEvent = hstc.tracking.Tracker.prototype.trackConversion;
  hstc.tracking.Tracker.prototype.trackClick = function (t, e, i) {
    var n = this,
      r = {
        selector: t,
        eventId: e,
        opts: (i = i || {}),
        handler: function () {
          try {
            hstc.utils.isDefined(n.portalId) && hstc.utils.startsWith(e, 'pe' + n.portalId + '_')
              ? n.trackCustomBehavioralEvent({ name: e })
              : n.trackEvent(e, i);
          } catch (t) {
            hstc.utils.logError(t, n._determineTrackingDomain());
          }
        },
      };
    this.clickSelectors.push(r);
    this._resetClickHandler(r);
  };
  hstc.tracking.Tracker.prototype._resetClickHandler = function (t) {
    var e = 'data-hs-event-' + hstc.utils.hashString(t.eventId),
      i = !t.opts.url || this.urlMatches(t.opts.url);
    try {
      hstc.utils.each(hstc.find(t.selector), function (n, r) {
        var s = '1' == r.getAttribute(e);
        if (s && !i) {
          hstc.utils.removeEventListener(r, 'mousedown', t.handler);
          r.removeAttribute(e);
        } else if (!s && i) {
          hstc.utils.addEventListener(r, 'mousedown', t.handler);
          r.setAttribute(e, '1');
        }
      });
    } catch (e) {
      hstc.log(
        'Bad selector for ' + this.portalId + ': ' + t.selector + ', for event ' + t.eventId
      );
    }
  };
  hstc.tracking.Tracker.prototype.trackFormView = function (t, e, i) {
    this._trackFormActivity(15, t, e, i);
  };
  hstc.tracking.Tracker.prototype.trackFormInstall = function (t, e, i) {
    this._trackFormActivity(16, t, e, i);
  };
  hstc.tracking.Tracker.prototype.trackFormVisible = function (t, e, i) {
    this._trackFormActivity(17, t, e, i);
  };
  hstc.tracking.Tracker.prototype.trackFormInteraction = function (t, e, i) {
    this._trackFormActivity(18, t, e, i);
  };
  hstc.tracking.Tracker.prototype.trackFormCompletion = function (t, e, i) {
    this._trackFormActivity(19, t, e, i);
  };
  hstc.tracking.Tracker.prototype._trackFormActivity = function (t, e, i, n) {
    if ('object' == typeof i) {
      n = i;
      i = '';
    }
    n = n || {};
    var r = { k: t, fi: hstc.utils.safeString(e) };
    hstc.utils.isEmpty(i) || (r.fci = i);
    (hstc.utils.isEmpty(n.formVariantId) && hstc.utils.isEmpty(n.fvi)) ||
      (r.fvi = n.formVariantId || n.fvi);
    (hstc.utils.isEmpty(n.leadFlowId) && hstc.utils.isEmpty(n.lfi)) ||
      (r.lfi = n.leadFlowId || n.lfi);
    (hstc.utils.isEmpty(n.formType) && 0 !== n.formType) || (r.ft = n.formType);
    this._loadImage(r);
  };
  hstc.tracking.Tracker.prototype.trackFeedbackView = function (t) {
    t = t || {};
    var e = {
      k: 26,
      st: hstc.utils.safeString(t.surveyType),
      si: hstc.utils.safeString(t.surveyId),
    };
    this._loadImage(e);
  };
  hstc.tracking.Tracker.prototype.trackCtaView = function (t, e) {
    var i = {
      k: 12,
      aij: '["' + hstc.utils.safeString(t) + '","' + hstc.utils.safeString(e) + '"]',
      rfc: 8,
    };
    this._loadImage(i);
  };
  hstc.tracking.Tracker.prototype.doNotTrack = function (t) {
    t && t.track
      ? this.cookie.remove(hstc.tracking.Tracker.DO_NOT_TRACK)
      : this.cookie.set(hstc.tracking.Tracker.DO_NOT_TRACK, 'yes', {
          daysToExpire: hstc.tracking.Tracker.DO_NOT_TRACK_EXPIRATION,
        });
  };
  hstc.tracking.Tracker.prototype.urlMatches = function (t, e) {
    e || (e = this.context.getCurrentHref(this.path));
    if (e == (t = t.toLowerCase())) return !0;
    if (-1 === t.indexOf('?')) {
      var i = e.indexOf('?');
      -1 !== i && (e = e.substring(0, i));
    }
    if (-1 == t.indexOf('*'))
      return (
        (t = t.replace(/\/$/, '')) == (e = e.replace(/\/$/, '')) ||
        (0 === t.indexOf('/') && hstc.utils.removeDomain(e) == t)
      );
    if (t == e) return !0;
    if (0 === t.length) return !1;
    var n = new RegExp('[.+?|()\\[\\]{}\\\\]', 'g');
    regex = t.replace(n, '\\$&').replace(new RegExp('\\*', 'g'), '(.*?)');
    regex = /\/$/.test(regex) ? '^' + regex + '$' : '^' + regex + '/?$';
    regex = new RegExp(regex, 'i');
    if (regex.test(e)) return !0;
    if (0 === t.indexOf('/')) {
      e = '/' + e.split('//')[1].split('/').splice(1).join('/');
      return regex.test(e);
    }
    return !1;
  };
  hstc.tracking.Tracker.prototype.resetVisitorIdentity = function () {
    this.hasResetVisitor = !0;
    this.utk = hstc.tracking.Utk.regenerate(this.cookie);
    this.session = hstc.tracking.Session.regenerate(this.cookie);
    this.identity = null;
    this._manageCookies(this.utk, this.session, !0);
  };
  hstc.tracking.Tracker.prototype.resetVisitor = function () {
    this.resetVisitorIdentity();
    this.crossDomainLinkingEnabled && this.enableAutomaticLinker();
    this.handleSearchLinks();
  };
  hstc.tracking.Tracker.prototype._manageCookies = function (t, e, i) {
    var n = this;
    if (!this.managedCookies || i) {
      var r = hstc.tracking.Utk.parse(this.cookie),
        s = hstc.tracking.Session.parse(this.cookie);
      if (!this.hasResetVisitor) {
        this._extractIdentitiesFromQueryString(r, s);
        this._extractUtkOverride(r);
      }
      this.utk || (this.utk = t || r);
      this.session || (this.session = e || s);
      this.session.isNew() && !i
        ? this.utk.isNew() || this.utk.rotate(this.session.start)
        : i || this.session.increment();
      this.context.getWindow().__hsUserToken ||
        (this.context.getWindow().__hsUserToken = this.utk.visitor);
      this._enqueueConsentListener(function () {
        n.utk.save(n.privacySettings, n.privacyConsent);
        n.session.save();
      });
      for (var o = 0; o < this.userTokenListeners.length; o++)
        this.userTokenListeners[o](this.utk.visitor);
      for (var c = 0; c < this.cookieListeners.length; c++)
        this.cookieListeners[c](this.utk.get(), this.session.get(), this._getFingerprint());
      this.managedCookies = !0;
    }
  };
  hstc.tracking.Tracker.prototype._extractIdentitiesFromQueryString = function (t, e) {
    var i = this._getUrlParams();
    i.__hs_email && this.identify({ email: hstc.utils.decodeParam(i.__hs_email) }, !0);
    if (0 !== this.cookie.getDomains().length) {
      var n = this;
      if (i.__hsfp) {
        var r = parseInt(hstc.utils.safeString(i.__hsfp), 10),
          s = this._getFingerprint();
        if (null === s || s != r) return;
        if (i.__hstc) {
          var o = hstc.tracking.Utk.parse(this.cookie, hstc.utils.safeString(i.__hstc));
          hstc.utils.each(this.cookie.getDomains(), function (e, i) {
            if (hstc.utils.hashString(i) == o.domain) {
              if (n.utk && n.utk.visitor !== o.visitor) n.identify({ visitor: o.visitor }, !0);
              else if (t.recovered) {
                if (t.visitor !== o.visitor) {
                  n.utk = t;
                  n.identify({ visitor: o.visitor }, !0);
                }
              } else {
                n.utk = o;
                n.utk.resetDomain();
              }
              return !1;
            }
          });
        }
        if (i.__hssc) {
          var c = hstc.tracking.Session.parse(this.cookie, hstc.utils.safeString(i.__hssc));
          hstc.utils.each(this.cookie.getDomains(), function (t, i) {
            if (hstc.utils.hashString(i) == c.domain) {
              if (e.recovered) n.session = e.merge(c);
              else {
                n.session = c;
                n.session.resetDomain();
                n.session.recovered = !0;
              }
              return !1;
            }
          });
        }
      }
    }
  };
  hstc.tracking.Tracker.prototype._extractUtkOverride = function (t) {
    var e = this.context.getWindow().__hsUserToken;
    if (e) {
      var i = this.utk && this.utk.visitor == e,
        n = t.visitor == e,
        r = this.identity && !!this.identity.get().visitor;
      i ||
        n ||
        r ||
        (this.utk || t.recovered
          ? this.identify({ visitor: e }, !0)
          : (this.utk = hstc.tracking.Utk.parse(this.cookie, e, !0)));
    }
  };
  hstc.tracking.Tracker.prototype._loadImage = function (t, e) {
    if (!this.limitTrackingToCookieDomains || this.cookie.currentDomain) {
      if (!this._hasDoNotTrack() && this.trackingEnabled) {
        hstc.log('Sending Request');
        t && hstc.log(t);
        e = e || this._generateURL(t);
        hstc.log(e);
        hstc.utils.loadImage(e, 0);
      }
    } else
      try {
        hstc.log('Invalid domain for portal ' + this.portalId + ': ' + this.context.getHostName());
      } catch (t) {}
  };
  hstc.tracking.Tracker.prototype._generateURL = function (t) {
    var e = 'https://' + this._determineTrackingDomain() + '/__ptq.gif',
      i = hstc.utils.extend(
        t,
        this._getClientInfo(),
        this._getPageInfo(),
        this._getUserInfo(),
        this._getPrivacyInfo()
      );
    return e + '?' + hstc.utils.param(i);
  };
  hstc.tracking.Tracker.prototype._determineTrackingDomain = function () {
    return this.trackingDomain ? this.trackingDomain : hstc.ANALYTICS_HOST;
  };
  hstc.tracking.Tracker.prototype._getUserInfo = function () {
    var t = {};
    t.cts = hstc.utils.utcnow();
    this.identity && (t.i = hstc.utils.param(this.identity.get()));
    this.hasResetVisitor && (t.rv = 1);
    if (this.utk) {
      t.vi = this.utk.visitor;
      t.nc = this.utk.isNew();
    }
    var e = this.cookie.get(hstc.tracking.Utk.COOKIE);
    hstc.utils.isEmpty(e) || (t.u = e);
    var i = this.cookie.get(hstc.tracking.Session.COOKIE);
    hstc.utils.isEmpty(i) || (t.b = i);
    (this.privacyConsent && this.privacyConsent.allowed) || (t.ce = !1);
    return t;
  };
  hstc.tracking.Tracker.prototype._getPageInfo = function () {
    var t = {};
    t.v = hstc.JS_VERSION;
    t.a = this.portalId;
    hstc.utils.isEmpty(this.pageId) || (t.pi = this.pageId);
    hstc.utils.isEmpty(this.contentType) || (t.ct = this.contentType);
    hstc.utils.isEmpty(this.canonicalUrl) || (t.ccu = this.canonicalUrl);
    hstc.utils.isEmpty(this.path) || (t.po = this.path);
    hstc.utils.isEmpty(this.referrerPath) || (t.rpo = this.referrerPath);
    hstc.utils.isEmpty(this.canonicalUrl) &&
      !hstc.utils.isEmpty(this.relCanonicalUrl) &&
      (t.rcu = this.relCanonicalUrl);
    if (!hstc.utils.isEmpty(this.contentMetadata)) {
      var e = this.contentMetadata;
      hstc.utils.isEmpty(e.contentPageId) || (t.cpi = e.contentPageId);
      hstc.utils.isEmpty(e.contentGroupId) || (t.cgi = e.contentGroupId);
      hstc.utils.isEmpty(e.contentFolderId) || (t.cfi = e.contentFolderId);
      hstc.utils.isEmpty(e.legacyPageId) || (t.lpi = e.legacyPageId);
      hstc.utils.isEmpty(e.abTestId) || (t.abi = e.abTestId);
      hstc.utils.isEmpty(e.languageVariantId) || (t.lvi = e.languageVariantId);
      hstc.utils.isEmpty(e.languageCode) || (t.lvc = e.languageCode);
      if (
        !hstc.utils.isEmpty(e.mabData) &&
        !hstc.utils.isEmpty(e.mabData.correlationId) &&
        !hstc.utils.isEmpty(e.mabData.experimentId)
      ) {
        t.mabci = e.mabData.correlationId;
        t.mabei = e.mabData.experimentId;
      }
    }
    if (hstc.utils.isArray(this.targetedContentMetadata) && this.targetedContentMetadata.length) {
      for (var i = [], n = Math.min(this.targetedContentMetadata.length, 5), r = 0; r < n; r++) {
        var s = this.targetedContentMetadata[r];
        3 === s.length && i.push(s[0] + '-' + s[1] + '-' + s[2]);
      }
      i.length && (t.tc = i);
    }
    var o = this.context.getReferrer();
    hstc.utils.isEmpty(o) || (t.r = o);
    var c = this.context.getLocation().href;
    hstc.utils.isEmpty(c) || (t.pu = c);
    var a = this.context.getDocument().title;
    hstc.utils.isEmpty(a) || (t.t = a);
    return t;
  };
  hstc.tracking.Tracker.prototype._getClientInfo = function () {
    var t = {},
      e = this.context.getScreen();
    if (e) {
      t.sd = e.width + 'x' + e.height;
      t.cd = e.colorDepth + '-bit';
    }
    var i = this.context.getCharacterSet();
    hstc.utils.isEmpty(i) || (t.cs = i);
    var n = this.context.getNavigator(),
      r = n.language ? n.language : n.browserLanguage ? n.browserLanguage : '';
    hstc.utils.isEmpty(r) || (t.ln = hstc.utils.makeLowerCase(r));
    if (!this._hasDoNotTrack()) {
      var s = this._getFingerprint();
      null !== s && (t.bfp = s);
    }
    return t;
  };
  hstc.tracking.Tracker.prototype._getPrivacyInfo = function () {
    var t = {};
    this.privacySettings &&
      ('OPT_IN' == this.privacySettings.mode && this.privacySettings.hideDecline
        ? (t.pt = 0)
        : 'OPT_IN' == this.privacySettings.mode
        ? (t.pt = 1)
        : 'NO_COOKIES' == this.privacySettings.mode
        ? (t.pt = 2)
        : 'COOKIES_BY_CATEGORY' == this.privacySettings.mode && (t.pt = 3));
    (this.privacyConsent && this.privacyConsent.allowed) || (t.ce = !1);
    t.cc = 0;
    this.privacyConsent &&
      this.privacyConsent.categories &&
      (t.cc =
        (this.privacyConsent.categories.necessary ? 1 : 0) +
        (this.privacyConsent.categories.analytics ? 2 : 0) +
        (this.privacyConsent.categories.advertisement ? 4 : 0) +
        (this.privacyConsent.categories.functionality ? 8 : 0));
    return t;
  };
  hstc.tracking.Tracker.prototype._hasDoNotTrack = function () {
    try {
      if (
        this.cookie.get(hstc.tracking.Tracker.DO_NOT_TRACK) &&
        'yes' == this.cookie.get(hstc.tracking.Tracker.DO_NOT_TRACK)
      )
        return !0;
    } catch (t) {}
    return !1;
  };
  hstc.tracking.Tracker.prototype.showTargetedElements = function () {
    hstc.utils.each(this.clickSelectors, function (t, e) {
      hstc.utils.each(hstc.find(e), function (t, e) {
        e._hs_oldStyle = e.style.border;
        e.style.border = 'dotted 2px red';
      });
    });
  };
  hstc.tracking.Tracker.prototype.hideTargetedElements = function () {
    var t = function (t, e) {
      hstc.utils.each(hstc.find(e), function (t, e) {
        hstc.utils.isDefined(e._hs_oldStyle) && (e.style.border = e._hs_oldStyle);
      });
    };
    hstc.utils.each(this.clickSelectors, t);
  };
  hstc.tracking.Tracker.prototype._handlePrivacyPolicy = function () {
    var t = this;
    this._enqueuePrivacyCall('addPrivacyConsentListener', function (e) {
      var i = e && (e.allowed || (e.categories && e.categories.analytics)),
        n = i !== (e && e.previousCategories && e.previousCategories.analytics),
        r = e && e.categories;
      t.privacyConsent = { allowed: i, categories: r };
      if (n && !1 === i) {
        t.utk && t.utk.removeCookies();
        t.session && t.session.removeCookies();
        t.resetVisitorIdentity();
      }
    });
    this._enqueuePrivacyCall('addPrivacySettingsListener', function (e) {
      t.privacySettings = e;
    });
  };
  hstc.tracking.Tracker.prototype._enqueueConsentListener = function (t) {
    this._enqueuePrivacyCall('addPrivacyConsentListener', function (e) {
      var i = e && (e.allowed || (e.categories && e.categories.analytics));
      i !== (e && e.previousCategories && e.previousCategories.analytics) && i && t();
    });
  };
  hstc.tracking.Tracker.prototype._enqueuePrivacyCall = function (t, e) {
    var i = this._getHspQueue();
    e ? i.push([t, e]) : i.push([t]);
  };
  hstc.tracking.Tracker.prototype._handleMigrations = function () {
    var t = this.cookie.get(hstc.tracking.Utk.LEGACY_COOKIE) || window.hubspotutk,
      e = this.cookie.get(hstc.tracking.Utk.COOKIE);
    if (!hstc.utils.isEmpty(t) && /[0123456789abcdef]{32}/.test(t) && hstc.utils.isEmpty(e)) {
      var i = hstc.tracking.Utk.parse(this.cookie, t);
      this._manageCookies(i);
    }
    hstc.utils.isEmpty(this.cookie.get('hsfirstvisit')) || this.cookie.remove('hsfirstvisit');
  };
  hstc.tracking.Tracker.prototype._setRelCanonicalUrl = function () {
    for (var t = document.getElementsByTagName('link'), e = 0; e < t.length; e++)
      if ('canonical' === t[e].rel) {
        this.relCanonicalUrl = t[e].href;
        return;
      }
  };
  hstc.tracking.Tracker.prototype._getFingerprint = function () {
    try {
      return new hstc.Fingerprint().get();
    } catch (t) {
      hstc.utils.logError(t, me._determineTrackingDomain());
      return null;
    }
  };
  hstc.tracking.Tracker.prototype._getUrlParams = function () {
    var t,
      e,
      i = this.context.getLocation();
    try {
      t = i.search;
      e = i.hash;
    } catch (i) {
      t = window.location.search;
      e = window.location.hash;
    }
    return hstc.utils.deparam(t || e);
  };
  hstc.tracking.Tracker.prototype.embedHubSpotScript = function (t, i) {
    if (!document.getElementById(i) && this.trackingEnabled) {
      var n = document.createElement('script');
      n.src = t;
      n.type = 'text/javascript';
      n.id = i;
      e = document.getElementsByTagName('script')[0];
      e.parentNode.insertBefore(n, e);
    }
  };
  hstc.tracking.Tracker.prototype.revokeCookieConsent = function () {
    this._enqueuePrivacyCall('revokeCookieConsent');
  };
  hstc.tracking.Tracker.prototype.trackApproveCookieConsent = function () {
    this._loadImage({ k: 28 });
  };
  hstc.tracking.Tracker.prototype.trackDeclineCookieConsent = function () {
    this._loadImage({ k: 29 });
  };
  hstc.tracking.Tracker.prototype.trackRevokeCookieConsent = function () {
    this._loadImage({ k: 30 });
  };
  hstc.tracking.Tracker.prototype._safeCallListener = function (t, e) {
    try {
      t(e);
    } catch (t) {
      hstc.utils.logError(t, me._determineTrackingDomain());
    }
  };
  hstc.tracking.Utk = function (t, e, i, n, r, s, o, c, a) {
    this.context = t ? t.context : new hstc.global.Context();
    this.cookie = t || new hstc.cookies.Cookie(this.context);
    this.rawDomain =
      this.cookie.currentDomain || hstc.utils.extractDomain(this.context.getHostName());
    this.domain = e && !c ? e : hstc.utils.hashString(this.rawDomain);
    this.visitor = i ? i.toLowerCase() : hstc.Math.uuid();
    this.initial = n || hstc.utils.utcnow();
    this.previous = r || hstc.utils.utcnow();
    this.current = s || hstc.utils.utcnow();
    this.session = o || 1;
    this.recovered = c;
    this.returningVisitor = a;
  };
  hstc.tracking.Utk.COOKIE = '__hstc';
  hstc.tracking.Utk.LEGACY_COOKIE = 'hubspotutk';
  hstc.tracking.Utk.EXPIRATION = 390;
  hstc.tracking.Utk.EXPIRATION_START = 15444e8;
  hstc.tracking.Utk.parse = function (t, e, i) {
    var n = t ? t.context : new hstc.global.Context();
    t = t || new hstc.cookies.Cookie(n);
    var r = !e;
    e = e || t.get(hstc.tracking.Utk.COOKIE);
    try {
      var s = e.split('.');
      if (6 == s.length && s[1].length > 0) {
        s[5] = parseInt(s[5], 10);
        return new hstc.tracking.Utk(t, s[0], s[1], s[2], s[3], s[4], s[5], r, !0);
      }
      if (1 == s.length && s[0].length > 0)
        return new hstc.tracking.Utk(t, null, s[0], null, null, null, null, !i, !1);
    } catch (t) {}
    return hstc.tracking.Utk.regenerate(t);
  };
  hstc.tracking.Utk.regenerate = function (t) {
    return new hstc.tracking.Utk(t);
  };
  hstc.tracking.Utk.prototype.isNew = function () {
    return !this.returningVisitor;
  };
  hstc.tracking.Utk.prototype.rotate = function (t) {
    this.previous = this.current || t;
    this.current = t;
    this.session += 1;
  };
  hstc.tracking.Utk.prototype.get = function () {
    return [
      this.domain,
      this.visitor,
      this.initial,
      this.previous,
      this.current,
      this.session,
    ].join('.');
  };
  hstc.tracking.Utk.prototype.save = function (t, e) {
    var i =
        t &&
        1 == t.active &&
        ('OPT_IN' == t.mode || 'COOKIES_BY_CATEGORY' == t.mode) &&
        0 == t.hideDecline,
      n = e && 1 == e.allowed;
    if (!this.isNew() && i) {
      if (n) {
        var r =
          hstc.tracking.Utk.EXPIRATION - Math.floor((hstc.utils.utcnow() - this.initial) / 864e5);
        this.cookie.set(hstc.tracking.Utk.COOKIE, this.get(), { daysToExpire: r });
        this.cookie.set(hstc.tracking.Utk.LEGACY_COOKIE, this.visitor, { daysToExpire: r });
      }
    } else {
      this.cookie.set(hstc.tracking.Utk.COOKIE, this.get(), {
        daysToExpire: hstc.tracking.Utk.EXPIRATION,
      });
      this.cookie.set(hstc.tracking.Utk.LEGACY_COOKIE, this.visitor, {
        daysToExpire: hstc.tracking.Utk.EXPIRATION,
      });
    }
  };
  hstc.tracking.Utk.prototype.removeCookies = function (t) {
    this.cookie.remove(hstc.tracking.Utk.COOKIE);
    this.cookie.remove(hstc.tracking.Utk.LEGACY_COOKIE);
  };
  hstc.tracking.Utk.prototype.resetDomain = function () {
    this.domain = hstc.utils.hashString(this.rawDomain);
  };
  hstc.tracking.Session = function (t, e, i, n, r) {
    this.context = t ? t.context : new hstc.global.Context();
    this.cookie = t || new hstc.cookies.Cookie(this.context);
    this.rawDomain =
      this.cookie.currentDomain || hstc.utils.extractDomain(this.context.getHostName());
    this.domain = e && !r ? e : hstc.utils.hashString(this.rawDomain);
    this.viewCount = i || 1;
    this.start = n || hstc.utils.utcnow();
    this.recovered = r;
  };
  hstc.tracking.Session.COOKIE = '__hssc';
  hstc.tracking.Session.RESTART_COOKIE = '__hssrc';
  hstc.tracking.Session.prototype.isNew = function () {
    return !0 !== this.recovered;
  };
  hstc.tracking.Session.parse = function (t, e) {
    var i = t ? t.context : new hstc.global.Context();
    t = t || new hstc.cookies.Cookie(i);
    var n = !e;
    if (e || '1' === t.get(hstc.tracking.Session.RESTART_COOKIE)) {
      e = e || t.get(hstc.tracking.Session.COOKIE);
      try {
        var r = e.split('.');
        if (3 == r.length) return new hstc.tracking.Session(t, r[0], r[1], r[2], n);
      } catch (t) {}
    }
    return hstc.tracking.Session.regenerate(t);
  };
  hstc.tracking.Session.regenerate = function (t) {
    return new hstc.tracking.Session(t);
  };
  hstc.tracking.Session.prototype.increment = function () {
    try {
      this.viewCount = parseInt(this.viewCount || 1, 10) + 1;
    } catch (t) {
      this.viewCount = 1;
    }
  };
  hstc.tracking.Session.prototype.get = function () {
    return [this.domain, this.viewCount, this.start].join('.');
  };
  hstc.tracking.Session.prototype.save = function () {
    this.cookie.set(hstc.tracking.Session.RESTART_COOKIE, '1');
    this.cookie.set(hstc.tracking.Session.COOKIE, this.get(), { minsToExpire: 30 });
  };
  hstc.tracking.Session.prototype.removeCookies = function () {
    this.cookie.remove(hstc.tracking.Session.RESTART_COOKIE);
    this.cookie.remove(hstc.tracking.Session.COOKIE);
  };
  hstc.tracking.Session.prototype.merge = function (t) {
    t.start && t.start < this.start && (this.start = t.start);
    t.viewCount && (this.viewCount += t.viewCount);
    return this;
  };
  hstc.tracking.Session.prototype.resetDomain = function () {
    this.domain = hstc.utils.hashString(this.rawDomain);
  };
  hstc.tracking.Tracker.prototype.trackCustomBehavioralEvent = function (t) {
    if (t) {
      this._manageCookies();
      var e = {};
      hstc.utils.isDefined(t.name) && (e.n = hstc.utils.safeString(t.name));
      if (hstc.utils.isDefined(t.properties))
        for (var i in t.properties)
          if (hstc.utils.isDefined(i)) {
            e['_' + i] = hstc.utils.safeString(t.properties[i]);
          }
      var n = this._determineTrackingDomain(),
        r = hstc.utils.extend(
          e,
          this._getClientInfo(),
          this._getPageInfo(),
          this._getUserInfo(),
          this._getPrivacyInfo()
        ),
        s = 'https://' + n + '/__ptbe.gif?' + hstc.utils.param(r);
      this._loadImage(e, s);
    }
  };
  (hstc = hstc || {}).tracking = hstc.tracking || {};
  hstc.tracking.Runner = function (t, e) {
    this.context = t || new hstc.global.Context();
    this.cookie = e || new hstc.cookies.Cookie(this.context);
    this.tracker = new hstc.tracking.Tracker(this.context, this.cookie);
  };
  hstc.tracking.Runner.hsqParam = '_hsq';
  hstc.tracking.Runner.ranParam = '_hstc_ran';
  hstc.tracking.Runner.priorityFunctions = [
    'setPortalId',
    'setCanonicalUrl',
    'setPath',
    'setContentType',
    'setContentMetadata',
    'setPageId',
    'setTargetedContentMetadata',
    'identify',
    'setDebugMode',
    'setLimitTrackingToCookieDomains',
    'setTrackingEnabled',
  ];
  hstc.tracking.Runner.prototype.run = function () {
    var t = this.context.getWindow();
    if (!t[hstc.tracking.Runner.ranParam]) {
      t[hstc.tracking.Runner.ranParam] = !0;
      var e = this.tracker;
      this.setUpHsq(i);
      this.processHsq(i);
    }
    function i(t) {
      try {
        if ('function' == typeof t) t(e, hstc);
        else if (t && hstc.utils.isArray(t) && e[t[0]]) return e[t[0]].apply(e, t.slice(1));
      } catch (t) {
        hstc.utils.logError(t);
      }
    }
  };
  hstc.tracking.Runner.prototype.setUpHsq = function (t) {
    var e = this.context.getWindow(),
      i = (e[hstc.tracking.Runner.hsqParam] = e[hstc.tracking.Runner.hsqParam] || []);
    hstc.utils.isArray(i) || (i = e[hstc.tracking.Runner.hsqParam] = []);
    i.push = t;
  };
  hstc.tracking.Runner.prototype.processHsq = function (t) {
    var e = this.context.getWindow()[hstc.tracking.Runner.hsqParam];
    hstc.utils.search2dArray(
      e,
      1,
      ['setTrackingDomain', 'setCookiesToSubdomain', 'addCookieDomain', 'enableSecureCookie'],
      t
    );
    this.tracker._initialize();
    hstc.utils.search2dArray(e, 1, hstc.tracking.Runner.priorityFunctions, t);
    for (; e.length; ) t(e.shift());
  };
  !(function (t) {
    var e,
      i,
      n,
      r,
      s,
      o,
      c,
      a,
      h,
      u,
      l,
      g,
      p,
      f,
      d,
      k,
      m,
      y = 'sizzle' + -new Date(),
      v = t.document,
      C = 0,
      T = 0,
      w = rt(),
      x = rt(),
      _ = rt(),
      S = !1,
      b = function (t, e) {
        if (t === e) {
          S = !0;
          return 0;
        }
        return 0;
      },
      E = 'undefined',
      I = 1 << 31,
      D = {}.hasOwnProperty,
      L = [],
      N = L.pop,
      A = L.push,
      O = L.push,
      P = L.slice,
      R =
        L.indexOf ||
        function (t) {
          for (var e = 0, i = this.length; e < i; e++) if (this[e] === t) return e;
          return -1;
        },
      U =
        'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
      M = '[\\x20\\t\\r\\n\\f]',
      q = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+',
      F = q.replace('w', 'w#'),
      j =
        '\\[' +
        M +
        '*(' +
        q +
        ')' +
        M +
        '*(?:([*^$|!~]?=)' +
        M +
        '*(?:([\'"])((?:\\\\.|[^\\\\])*?)\\3|(' +
        F +
        ')|)|)' +
        M +
        '*\\]',
      H =
        ':(' +
        q +
        ')(?:\\((([\'"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|' +
        j.replace(3, 8) +
        ')*)|.*)\\)|)',
      B = new RegExp('^' + M + '+|((?:^|[^\\\\])(?:\\\\.)*)' + M + '+$', 'g'),
      K = new RegExp('^' + M + '*,' + M + '*'),
      $ = new RegExp('^' + M + '*([>+~]|' + M + ')' + M + '*'),
      V = new RegExp(M + '*[+~]'),
      W = new RegExp('=' + M + '*([^\\]\'"]*)' + M + '*\\]', 'g'),
      G = new RegExp(H),
      z = new RegExp('^' + F + '$'),
      Y = {
        ID: new RegExp('^#(' + q + ')'),
        CLASS: new RegExp('^\\.(' + q + ')'),
        TAG: new RegExp('^(' + q.replace('w', 'w*') + ')'),
        ATTR: new RegExp('^' + j),
        PSEUDO: new RegExp('^' + H),
        CHILD: new RegExp(
          '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
            M +
            '*(even|odd|(([+-]|)(\\d*)n|)' +
            M +
            '*(?:([+-]|)' +
            M +
            '*(\\d+)|))' +
            M +
            '*\\)|)',
          'i'
        ),
        bool: new RegExp('^(?:' + U + ')$', 'i'),
        needsContext: new RegExp(
          '^' +
            M +
            '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
            M +
            '*((?:-\\d)?\\d*)' +
            M +
            '*\\)|)(?=[^-]|$)',
          'i'
        ),
      },
      X = /^[^{]+\{\s*\[native \w/,
      Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      J = /^(?:input|select|textarea|button)$/i,
      Z = /^h\d$/i,
      tt = /'|\\/g,
      et = new RegExp('\\\\([\\da-f]{1,6}' + M + '?|(' + M + ')|.)', 'ig'),
      it = function (t, e, i) {
        var n = '0x' + e - 65536;
        return n != n || i
          ? e
          : n < 0
          ? String.fromCharCode(n + 65536)
          : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320);
      };
    try {
      O.apply((L = P.call(v.childNodes)), v.childNodes);
      L[v.childNodes.length].nodeType;
    } catch (t) {
      O = {
        apply: L.length
          ? function (t, e) {
              A.apply(t, P.call(e));
            }
          : function (t, e) {
              for (var i = t.length, n = 0; (t[i++] = e[n++]); );
              t.length = i - 1;
            },
      };
    }
    function nt(t, e, n, r) {
      var s, o, c, a, h, g, d, k, C, T;
      (e ? e.ownerDocument || e : v) !== l && u(e);
      e = e || l;
      n = n || [];
      if (!t || 'string' != typeof t) return n;
      if (1 !== (a = e.nodeType) && 9 !== a) return [];
      if (p && !r) {
        if ((s = Q.exec(t)))
          if ((c = s[1])) {
            if (9 === a) {
              if (!(o = e.getElementById(c)) || !o.parentNode) return n;
              if (o.id === c) {
                n.push(o);
                return n;
              }
            } else if (
              e.ownerDocument &&
              (o = e.ownerDocument.getElementById(c)) &&
              m(e, o) &&
              o.id === c
            ) {
              n.push(o);
              return n;
            }
          } else {
            if (s[2]) {
              O.apply(n, e.getElementsByTagName(t));
              return n;
            }
            if ((c = s[3]) && i.getElementsByClassName && e.getElementsByClassName) {
              O.apply(n, e.getElementsByClassName(c));
              return n;
            }
          }
        if (i.qsa && (!f || !f.test(t))) {
          k = d = y;
          C = e;
          T = 9 === a && t;
          if (1 === a && 'object' !== e.nodeName.toLowerCase()) {
            g = pt(t);
            (d = e.getAttribute('id')) ? (k = d.replace(tt, '\\$&')) : e.setAttribute('id', k);
            k = "[id='" + k + "'] ";
            h = g.length;
            for (; h--; ) g[h] = k + ft(g[h]);
            C = (V.test(t) && e.parentNode) || e;
            T = g.join(',');
          }
          if (T)
            try {
              O.apply(n, C.querySelectorAll(T));
              return n;
            } catch (t) {
            } finally {
              d || e.removeAttribute('id');
            }
        }
      }
      return wt(t.replace(B, '$1'), e, n, r);
    }
    function rt() {
      var t = [];
      function e(i, n) {
        t.push((i += ' ')) > r.cacheLength && delete e[t.shift()];
        return (e[i] = n);
      }
      return e;
    }
    function st(t) {
      t[y] = !0;
      return t;
    }
    function ot(t) {
      var e = l.createElement('div');
      try {
        return !!t(e);
      } catch (t) {
        return !1;
      } finally {
        var parentNode = e.parentNode;
        if (parentNode) {
          parentNode.removeChild(e);
        }

        e = null;
      }
    }
    function ct(t, e) {
      for (var i = t.split('|'), n = t.length; n--; ) r.attrHandle[i[n]] = e;
    }
    function at(t, e) {
      var i = e && t,
        n =
          i &&
          1 === t.nodeType &&
          1 === e.nodeType &&
          (~e.sourceIndex || I) - (~t.sourceIndex || I);
      if (n) return n;
      if (i) for (; (i = i.nextSibling); ) if (i === e) return -1;
      return t ? 1 : -1;
    }
    function ht(t) {
      return function (e) {
        return 'input' === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function ut(t) {
      return function (e) {
        var i = e.nodeName.toLowerCase();
        return ('input' === i || 'button' === i) && e.type === t;
      };
    }
    function lt(t) {
      return st(function (e) {
        e = +e;
        return st(function (i, n) {
          for (var r, s = t([], i.length, e), o = s.length; o--; )
            i[(r = s[o])] && (i[r] = !(n[r] = i[r]));
        });
      });
    }
    o = nt.isXML = function (t) {
      var e = t && (t.ownerDocument || t).documentElement;
      return !!e && 'HTML' !== e.nodeName;
    };
    i = nt.support = {};
    u = nt.setDocument = function (t) {
      var e = t ? t.ownerDocument || t : v,
        n = e.defaultView;
      if (e === l || 9 !== e.nodeType || !e.documentElement) return l;
      l = e;
      g = e.documentElement;
      p = !o(e);
      n &&
        n.attachEvent &&
        n !== n.top &&
        n.attachEvent('onbeforeunload', function () {
          u();
        });
      i.attributes = ot(function (t) {
        t.className = 'i';
        return !t.getAttribute('className');
      });
      i.getElementsByTagName = ot(function (t) {
        t.appendChild(e.createComment(''));
        return !t.getElementsByTagName('*').length;
      });
      i.getElementsByClassName = ot(function (t) {
        t.innerHTML = "<div class='a'></div><div class='a i'></div>";
        t.firstChild.className = 'i';
        return 2 === t.getElementsByClassName('i').length;
      });
      i.getById = ot(function (t) {
        g.appendChild(t).id = y;
        return !e.getElementsByName || !e.getElementsByName(y).length;
      });
      if (i.getById) {
        r.find.ID = function (t, e) {
          if (typeof e.getElementById !== E && p) {
            var i = e.getElementById(t);
            return i && i.parentNode ? [i] : [];
          }
        };
        r.filter.ID = function (t) {
          var e = t.replace(et, it);
          return function (t) {
            return t.getAttribute('id') === e;
          };
        };
      } else {
        delete r.find.ID;
        r.filter.ID = function (t) {
          var e = t.replace(et, it);
          return function (t) {
            var i = typeof t.getAttributeNode !== E && t.getAttributeNode('id');
            return i && i.value === e;
          };
        };
      }
      r.find.TAG = i.getElementsByTagName
        ? function (t, e) {
            if (typeof e.getElementsByTagName !== E) return e.getElementsByTagName(t);
          }
        : function (t, e) {
            var i,
              n = [],
              r = 0,
              s = e.getElementsByTagName(t);
            if ('*' === t) {
              for (; (i = s[r++]); ) 1 === i.nodeType && n.push(i);
              return n;
            }
            return s;
          };
      r.find.CLASS =
        i.getElementsByClassName &&
        function (t, e) {
          if (typeof e.getElementsByClassName !== E && p) return e.getElementsByClassName(t);
        };
      d = [];
      f = [];
      if ((i.qsa = X.test(e.querySelectorAll))) {
        ot(function (t) {
          t.innerHTML = "<select><option selected=''></option></select>";
          t.querySelectorAll('[selected]').length || f.push('\\[' + M + '*(?:value|' + U + ')');
          t.querySelectorAll(':checked').length || f.push(':checked');
        });
        ot(function (t) {
          var i = e.createElement('input');
          i.setAttribute('type', 'hidden');
          t.appendChild(i).setAttribute('t', '');
          t.querySelectorAll("[t^='']").length && f.push('[*^$]=' + M + '*(?:\'\'|"")');
          t.querySelectorAll(':enabled').length || f.push(':enabled', ':disabled');
          t.querySelectorAll('*,:x');
          f.push(',.*:');
        });
      }
      (i.matchesSelector = X.test(
        (k =
          g.webkitMatchesSelector ||
          g.mozMatchesSelector ||
          g.oMatchesSelector ||
          g.msMatchesSelector)
      )) &&
        ot(function (t) {
          i.disconnectedMatch = k.call(t, 'div');
          k.call(t, "[s!='']:x");
          d.push('!=', H);
        });
      f = f.length && new RegExp(f.join('|'));
      d = d.length && new RegExp(d.join('|'));
      m =
        X.test(g.contains) || g.compareDocumentPosition
          ? function (t, e) {
              var i = 9 === t.nodeType ? t.documentElement : t,
                n = e && e.parentNode;
              return (
                t === n ||
                !(
                  !n ||
                  1 !== n.nodeType ||
                  !(i.contains
                    ? i.contains(n)
                    : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n))
                )
              );
            }
          : function (t, e) {
              if (e) for (; (e = e.parentNode); ) if (e === t) return !0;
              return !1;
            };
      b = g.compareDocumentPosition
        ? function (t, n) {
            if (t === n) {
              S = !0;
              return 0;
            }
            var r =
              n.compareDocumentPosition &&
              t.compareDocumentPosition &&
              t.compareDocumentPosition(n);
            return r
              ? 1 & r || (!i.sortDetached && n.compareDocumentPosition(t) === r)
                ? t === e || m(v, t)
                  ? -1
                  : n === e || m(v, n)
                  ? 1
                  : h
                  ? R.call(h, t) - R.call(h, n)
                  : 0
                : 4 & r
                ? -1
                : 1
              : t.compareDocumentPosition
              ? -1
              : 1;
          }
        : function (t, i) {
            var n,
              r = 0,
              s = t.parentNode,
              o = i.parentNode,
              c = [t],
              a = [i];
            if (t === i) {
              S = !0;
              return 0;
            }
            if (!s || !o)
              return t === e
                ? -1
                : i === e
                ? 1
                : s
                ? -1
                : o
                ? 1
                : h
                ? R.call(h, t) - R.call(h, i)
                : 0;
            if (s === o) return at(t, i);
            n = t;
            for (; (n = n.parentNode); ) c.unshift(n);
            n = i;
            for (; (n = n.parentNode); ) a.unshift(n);
            for (; c[r] === a[r]; ) r++;
            return r ? at(c[r], a[r]) : c[r] === v ? -1 : a[r] === v ? 1 : 0;
          };
      return e;
    };
    nt.matches = function (t, e) {
      return nt(t, null, null, e);
    };
    nt.matchesSelector = function (t, e) {
      (t.ownerDocument || t) !== l && u(t);
      e = e.replace(W, "='$1']");
      if (i.matchesSelector && p && (!d || !d.test(e)) && (!f || !f.test(e)))
        try {
          var n = k.call(t, e);
          if (n || i.disconnectedMatch || (t.document && 11 !== t.document.nodeType)) return n;
        } catch (t) {}
      return nt(e, l, null, [t]).length > 0;
    };
    nt.contains = function (t, e) {
      (t.ownerDocument || t) !== l && u(t);
      return m(t, e);
    };
    nt.attr = function (t, e) {
      (t.ownerDocument || t) !== l && u(t);
      var n = r.attrHandle[e.toLowerCase()],
        s = n && D.call(r.attrHandle, e.toLowerCase()) ? n(t, e, !p) : void 0;
      return void 0 === s
        ? i.attributes || !p
          ? t.getAttribute(e)
          : (s = t.getAttributeNode(e)) && s.specified
          ? s.value
          : null
        : s;
    };
    nt.error = function (t) {
      throw new Error('Syntax error, unrecognized expression: ' + t);
    };
    nt.uniqueSort = function (t) {
      var e,
        n = [],
        r = 0,
        s = 0;
      S = !i.detectDuplicates;
      h = !i.sortStable && t.slice(0);
      t.sort(b);
      if (S) {
        for (; (e = t[s++]); ) e === t[s] && (r = n.push(s));
        for (; r--; ) t.splice(n[r], 1);
      }
      return t;
    };
    s = nt.getText = function (t) {
      var e,
        i = '',
        n = 0,
        r = t.nodeType;
      if (r) {
        if (1 === r || 9 === r || 11 === r) {
          if ('string' == typeof t.textContent) return t.textContent;
          for (t = t.firstChild; t; t = t.nextSibling) i += s(t);
        } else if (3 === r || 4 === r) return t.nodeValue;
      } else for (; (e = t[n]); n++) i += s(e);
      return i;
    };
    (r = nt.selectors =
      {
        cacheLength: 50,
        createPseudo: st,
        match: Y,
        attrHandle: {},
        find: {},
        relative: {
          '>': { dir: 'parentNode', first: !0 },
          ' ': { dir: 'parentNode' },
          '+': { dir: 'previousSibling', first: !0 },
          '~': { dir: 'previousSibling' },
        },
        preFilter: {
          ATTR: function (t) {
            t[1] = t[1].replace(et, it);
            t[3] = (t[4] || t[5] || '').replace(et, it);
            '~=' === t[2] && (t[3] = ' ' + t[3] + ' ');
            return t.slice(0, 4);
          },
          CHILD: function (t) {
            t[1] = t[1].toLowerCase();
            if ('nth' === t[1].slice(0, 3)) {
              t[3] || nt.error(t[0]);
              t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ('even' === t[3] || 'odd' === t[3]));
              t[5] = +(t[7] + t[8] || 'odd' === t[3]);
            } else t[3] && nt.error(t[0]);
            return t;
          },
          PSEUDO: function (t) {
            var e,
              i = !t[5] && t[2];
            if (Y.CHILD.test(t[0])) return null;
            if (t[3] && void 0 !== t[4]) t[2] = t[4];
            else if (
              i &&
              G.test(i) &&
              (e = pt(i, !0)) &&
              (e = i.indexOf(')', i.length - e) - i.length)
            ) {
              t[0] = t[0].slice(0, e);
              t[2] = i.slice(0, e);
            }
            return t.slice(0, 3);
          },
        },
        filter: {
          TAG: function (t) {
            var e = t.replace(et, it).toLowerCase();
            return '*' === t
              ? function () {
                  return !0;
                }
              : function (t) {
                  return t.nodeName && t.nodeName.toLowerCase() === e;
                };
          },
          CLASS: function (t) {
            var e = w[t + ' '];
            return (
              e ||
              ((e = new RegExp('(^|' + M + ')' + t + '(' + M + '|$)')) &&
                w(t, function (t) {
                  return e.test(
                    ('string' == typeof t.className && t.className) ||
                      (typeof t.getAttribute !== E && t.getAttribute('class')) ||
                      ''
                  );
                }))
            );
          },
          ATTR: function (t, e, i) {
            return function (n) {
              var r = nt.attr(n, t);
              if (null == r) return '!=' === e;
              if (!e) return !0;
              r += '';
              return '=' === e
                ? r === i
                : '!=' === e
                ? r !== i
                : '^=' === e
                ? i && 0 === r.indexOf(i)
                : '*=' === e
                ? i && r.indexOf(i) > -1
                : '$=' === e
                ? i && r.slice(-i.length) === i
                : '~=' === e
                ? (' ' + r + ' ').indexOf(i) > -1
                : '|=' === e && (r === i || r.slice(0, i.length + 1) === i + '-');
            };
          },
          CHILD: function (t, e, i, n, r) {
            var s = 'nth' !== t.slice(0, 3),
              o = 'last' !== t.slice(-4),
              c = 'of-type' === e;
            return 1 === n && 0 === r
              ? function (t) {
                  return !!t.parentNode;
                }
              : function (e, i, a) {
                  var h,
                    u,
                    l,
                    g,
                    p,
                    f,
                    d = s !== o ? 'nextSibling' : 'previousSibling',
                    k = e.parentNode,
                    m = c && e.nodeName.toLowerCase(),
                    v = !a && !c;
                  if (k) {
                    if (s) {
                      for (; d; ) {
                        l = e;
                        for (; (l = l[d]); )
                          if (c ? l.nodeName.toLowerCase() === m : 1 === l.nodeType) return !1;
                        f = d = 'only' === t && !f && 'nextSibling';
                      }
                      return !0;
                    }
                    f = [o ? k.firstChild : k.lastChild];
                    if (o && v) {
                      p = (h = (u = k[y] || (k[y] = {}))[t] || [])[0] === C && h[1];
                      g = h[0] === C && h[2];
                      l = p && k.childNodes[p];
                      for (; (l = (++p && l && l[d]) || (g = p = 0) || f.pop()); )
                        if (1 === l.nodeType && ++g && l === e) {
                          u[t] = [C, p, g];
                          break;
                        }
                    } else if (v && (h = (e[y] || (e[y] = {}))[t]) && h[0] === C) g = h[1];
                    else
                      for (; (l = (++p && l && l[d]) || (g = p = 0) || f.pop()); )
                        if ((c ? l.nodeName.toLowerCase() === m : 1 === l.nodeType) && ++g) {
                          v && ((l[y] || (l[y] = {}))[t] = [C, g]);
                          if (l === e) break;
                        }
                    return (g -= r) === n || (g % n == 0 && g / n >= 0);
                  }
                };
          },
          PSEUDO: function (t, e) {
            var i,
              n =
                r.pseudos[t] ||
                r.setFilters[t.toLowerCase()] ||
                nt.error('unsupported pseudo: ' + t);
            if (n[y]) return n(e);
            if (n.length > 1) {
              i = [t, t, '', e];
              return r.setFilters.hasOwnProperty(t.toLowerCase())
                ? st(function (t, i) {
                    for (var r, s = n(t, e), o = s.length; o--; )
                      t[(r = R.call(t, s[o]))] = !(i[r] = s[o]);
                  })
                : function (t) {
                    return n(t, 0, i);
                  };
            }
            return n;
          },
        },
        pseudos: {
          not: st(function (t) {
            var e = [],
              i = [],
              n = c(t.replace(B, '$1'));
            return n[y]
              ? st(function (t, e, i, r) {
                  for (var s, o = n(t, null, r, []), c = t.length; c--; )
                    (s = o[c]) && (t[c] = !(e[c] = s));
                })
              : function (t, r, s) {
                  e[0] = t;
                  n(e, null, s, i);
                  return !i.pop();
                };
          }),
          has: st(function (t) {
            return function (e) {
              return nt(t, e).length > 0;
            };
          }),
          contains: st(function (t) {
            return function (e) {
              return (e.textContent || e.innerText || s(e)).indexOf(t) > -1;
            };
          }),
          lang: st(function (t) {
            z.test(t || '') || nt.error('unsupported lang: ' + t);
            t = t.replace(et, it).toLowerCase();
            return function (e) {
              var i;
              do {
                if ((i = p ? e.lang : e.getAttribute('xml:lang') || e.getAttribute('lang')))
                  return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + '-');
              } while ((e = e.parentNode) && 1 === e.nodeType);
              return !1;
            };
          }),
          target: function (e) {
            var i = t.location && t.location.hash;
            return i && i.slice(1) === e.id;
          },
          root: function (t) {
            return t === g;
          },
          focus: function (t) {
            return (
              t === l.activeElement &&
              (!l.hasFocus || l.hasFocus()) &&
              !!(t.type || t.href || ~t.tabIndex)
            );
          },
          enabled: function (t) {
            return !1 === t.disabled;
          },
          disabled: function (t) {
            return !0 === t.disabled;
          },
          checked: function (t) {
            var e = t.nodeName.toLowerCase();
            return ('input' === e && !!t.checked) || ('option' === e && !!t.selected);
          },
          selected: function (t) {
            t.parentNode && t.parentNode.selectedIndex;
            return !0 === t.selected;
          },
          empty: function (t) {
            for (t = t.firstChild; t; t = t.nextSibling)
              if (t.nodeName > '@' || 3 === t.nodeType || 4 === t.nodeType) return !1;
            return !0;
          },
          parent: function (t) {
            return !r.pseudos.empty(t);
          },
          header: function (t) {
            return Z.test(t.nodeName);
          },
          input: function (t) {
            return J.test(t.nodeName);
          },
          button: function (t) {
            var e = t.nodeName.toLowerCase();
            return ('input' === e && 'button' === t.type) || 'button' === e;
          },
          text: function (t) {
            var e;
            return (
              'input' === t.nodeName.toLowerCase() &&
              'text' === t.type &&
              (null == (e = t.getAttribute('type')) || e.toLowerCase() === t.type)
            );
          },
          first: lt(function () {
            return [0];
          }),
          last: lt(function (t, e) {
            return [e - 1];
          }),
          eq: lt(function (t, e, i) {
            return [i < 0 ? i + e : i];
          }),
          even: lt(function (t, e) {
            for (var i = 0; i < e; i += 2) t.push(i);
            return t;
          }),
          odd: lt(function (t, e) {
            for (var i = 1; i < e; i += 2) t.push(i);
            return t;
          }),
          lt: lt(function (t, e, i) {
            for (var n = i < 0 ? i + e : i; --n >= 0; ) t.push(n);
            return t;
          }),
          gt: lt(function (t, e, i) {
            for (var n = i < 0 ? i + e : i; ++n < e; ) t.push(n);
            return t;
          }),
        },
      }).pseudos.nth = r.pseudos.eq;
    for (e in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) r.pseudos[e] = ht(e);
    for (e in { submit: !0, reset: !0 }) r.pseudos[e] = ut(e);
    function gt() {}
    gt.prototype = r.filters = r.pseudos;
    r.setFilters = new gt();
    function pt(t, e) {
      var i,
        n,
        s,
        o,
        c,
        a,
        h,
        u = x[t + ' '];
      if (u) return e ? 0 : u.slice(0);
      c = t;
      a = [];
      h = r.preFilter;
      for (; c; ) {
        if (!i || (n = K.exec(c))) {
          n && (c = c.slice(n[0].length) || c);
          a.push((s = []));
        }
        i = !1;
        if ((n = $.exec(c))) {
          i = n.shift();
          s.push({ value: i, type: n[0].replace(B, ' ') });
          c = c.slice(i.length);
        }
        for (o in r.filter)
          if ((n = Y[o].exec(c)) && (!h[o] || (n = h[o](n)))) {
            i = n.shift();
            s.push({ value: i, type: o, matches: n });
            c = c.slice(i.length);
          }
        if (!i) break;
      }
      return e ? c.length : c ? nt.error(t) : x(t, a).slice(0);
    }
    function ft(t) {
      for (var e = 0, i = t.length, n = ''; e < i; e++) n += t[e].value;
      return n;
    }
    function dt(t, e, i) {
      var r = e.dir,
        s = i && 'parentNode' === r,
        o = T++;
      return e.first
        ? function (e, i, n) {
            for (; (e = e[r]); ) if (1 === e.nodeType || s) return t(e, i, n);
          }
        : function (e, i, c) {
            var a,
              h,
              u,
              l = C + ' ' + o;
            if (c) {
              for (; (e = e[r]); ) if ((1 === e.nodeType || s) && t(e, i, c)) return !0;
            } else
              for (; (e = e[r]); )
                if (1 === e.nodeType || s)
                  if ((h = (u = e[y] || (e[y] = {}))[r]) && h[0] === l) {
                    if (!0 === (a = h[1]) || a === n) return !0 === a;
                  } else {
                    (h = u[r] = [l])[1] = t(e, i, c) || n;
                    if (!0 === h[1]) return !0;
                  }
          };
    }
    function kt(t) {
      return t.length > 1
        ? function (e, i, n) {
            for (var r = t.length; r--; ) if (!t[r](e, i, n)) return !1;
            return !0;
          }
        : t[0];
    }
    function mt(t, e, i, n, r) {
      for (var s, o = [], c = 0, a = t.length, h = null != e; c < a; c++)
        if ((s = t[c]) && (!i || i(s, n, r))) {
          o.push(s);
          h && e.push(c);
        }
      return o;
    }
    function yt(t, e, i, n, r, s) {
      n && !n[y] && (n = yt(n));
      r && !r[y] && (r = yt(r, s));
      return st(function (s, o, c, a) {
        var h,
          u,
          l,
          g = [],
          p = [],
          f = o.length,
          d = s || Tt(e || '*', c.nodeType ? [c] : c, []),
          k = !t || (!s && e) ? d : mt(d, g, t, c, a),
          m = i ? (r || (s ? t : f || n) ? [] : o) : k;
        i && i(k, m, c, a);
        if (n) {
          h = mt(m, p);
          n(h, [], c, a);
          u = h.length;
          for (; u--; ) (l = h[u]) && (m[p[u]] = !(k[p[u]] = l));
        }
        if (s) {
          if (r || t) {
            if (r) {
              h = [];
              u = m.length;
              for (; u--; ) (l = m[u]) && h.push((k[u] = l));
              r(null, (m = []), h, a);
            }
            u = m.length;
            for (; u--; ) (l = m[u]) && (h = r ? R.call(s, l) : g[u]) > -1 && (s[h] = !(o[h] = l));
          }
        } else {
          m = mt(m === o ? m.splice(f, m.length) : m);
          r ? r(null, o, m, a) : O.apply(o, m);
        }
      });
    }
    function vt(t) {
      for (
        var e,
          i,
          n,
          s = t.length,
          o = r.relative[t[0].type],
          c = o || r.relative[' '],
          h = o ? 1 : 0,
          u = dt(
            function (t) {
              return t === e;
            },
            c,
            !0
          ),
          l = dt(
            function (t) {
              return R.call(e, t) > -1;
            },
            c,
            !0
          ),
          g = [
            function (t, i, n) {
              return (!o && (n || i !== a)) || ((e = i).nodeType ? u(t, i, n) : l(t, i, n));
            },
          ];
        h < s;
        h++
      )
        if ((i = r.relative[t[h].type])) g = [dt(kt(g), i)];
        else {
          if ((i = r.filter[t[h].type].apply(null, t[h].matches))[y]) {
            n = ++h;
            for (; n < s && !r.relative[t[n].type]; n++);
            return yt(
              h > 1 && kt(g),
              h > 1 &&
                ft(t.slice(0, h - 1).concat({ value: ' ' === t[h - 2].type ? '*' : '' })).replace(
                  B,
                  '$1'
                ),
              i,
              h < n && vt(t.slice(h, n)),
              n < s && vt((t = t.slice(n))),
              n < s && ft(t)
            );
          }
          g.push(i);
        }
      return kt(g);
    }
    function Ct(t, e) {
      var i = 0,
        s = e.length > 0,
        o = t.length > 0,
        c = function (c, h, u, g, p) {
          var f,
            d,
            k,
            m = [],
            y = 0,
            v = '0',
            T = c && [],
            w = null != p,
            x = a,
            _ = c || (o && r.find.TAG('*', (p && h.parentNode) || h)),
            S = (C += null == x ? 1 : Math.random() || 0.1),
            b = _.length;
          if (w) {
            a = h !== l && h;
            n = i;
          }
          for (; v !== b && null != (f = _[v]); v++) {
            if (o && f) {
              d = 0;
              for (; (k = t[d++]); )
                if (k(f, h, u)) {
                  g.push(f);
                  break;
                }
              if (w) {
                C = S;
                n = ++i;
              }
            }
            if (s) {
              (f = !k && f) && y--;
              c && T.push(f);
            }
          }
          y += v;
          if (s && v !== y) {
            d = 0;
            for (; (k = e[d++]); ) k(T, m, h, u);
            if (c) {
              if (y > 0) for (; v--; ) T[v] || m[v] || (m[v] = N.call(g));
              m = mt(m);
            }
            O.apply(g, m);
            w && !c && m.length > 0 && y + e.length > 1 && nt.uniqueSort(g);
          }
          if (w) {
            C = S;
            a = x;
          }
          return T;
        };
      return s ? st(c) : c;
    }
    c = nt.compile = function (t, e) {
      var i,
        n = [],
        r = [],
        s = _[t + ' '];
      if (!s) {
        e || (e = pt(t));
        i = e.length;
        for (; i--; ) (s = vt(e[i]))[y] ? n.push(s) : r.push(s);
        s = _(t, Ct(r, n));
      }
      return s;
    };
    function Tt(t, e, i) {
      for (var n = 0, r = e.length; n < r; n++) nt(t, e[n], i);
      return i;
    }
    function wt(t, e, n, s) {
      var o,
        a,
        h,
        u,
        l,
        g = pt(t);
      if (!s && 1 === g.length) {
        if (
          (a = g[0] = g[0].slice(0)).length > 2 &&
          'ID' === (h = a[0]).type &&
          i.getById &&
          9 === e.nodeType &&
          p &&
          r.relative[a[1].type]
        ) {
          if (!(e = (r.find.ID(h.matches[0].replace(et, it), e) || [])[0])) return n;
          t = t.slice(a.shift().value.length);
        }
        o = Y.needsContext.test(t) ? 0 : a.length;
        for (; o--; ) {
          h = a[o];
          if (r.relative[(u = h.type)]) break;
          if (
            (l = r.find[u]) &&
            (s = l(h.matches[0].replace(et, it), (V.test(a[0].type) && e.parentNode) || e))
          ) {
            a.splice(o, 1);
            if (!(t = s.length && ft(a))) {
              O.apply(n, s);
              return n;
            }
            break;
          }
        }
      }
      c(t, g)(s, e, !p, n, V.test(t));
      return n;
    }
    i.sortStable = y.split('').sort(b).join('') === y;
    i.detectDuplicates = S;
    u();
    i.sortDetached = ot(function (t) {
      return 1 & t.compareDocumentPosition(l.createElement('div'));
    });
    ot(function (t) {
      t.innerHTML = "<a href='#'></a>";
      return '#' === t.firstChild.getAttribute('href');
    }) ||
      ct('type|href|height|width', function (t, e, i) {
        if (!i) return t.getAttribute(e, 'type' === e.toLowerCase() ? 1 : 2);
      });
    (i.attributes &&
      ot(function (t) {
        t.innerHTML = '<input/>';
        t.firstChild.setAttribute('value', '');
        return '' === t.firstChild.getAttribute('value');
      })) ||
      ct('value', function (t, e, i) {
        if (!i && 'input' === t.nodeName.toLowerCase()) return t.defaultValue;
      });
    ot(function (t) {
      return null == t.getAttribute('disabled');
    }) ||
      ct(U, function (t, e, i) {
        var n;
        if (!i)
          return !0 === t[e]
            ? e.toLowerCase()
            : (n = t.getAttributeNode(e)) && n.specified
            ? n.value
            : null;
      });
    function xt(t) {
      if (!t) return null;
      var e = /\[\w+(\*|\$|\||~|!|\^)?=(.+)]/,
        i = e.test(t);
      if (i && (i = e.exec(t)) && 3 == i.length) {
        var n = /".+"/;
        if (!/'.+'/.test(i[2]) && !n.test(i[2])) return t.replace('=' + i[2], "='" + i[2] + "'");
      }
    }
    hstc.find = function () {
      try {
        return nt.apply(null, arguments);
      } catch (e) {
        var t = xt(arguments[0]);
        if (t) {
          arguments[0] = t;
          return nt.apply(null, arguments);
        }
        throw e;
      }
    };
    hstc.expr = nt.selectors;
    hstc.expr[':'] = hstc.expr.filters;
    hstc.unique = nt.uniqueSort;
    hstc.text = nt.getText;
    hstc.isXMLDoc = nt.isXML;
    hstc.contains = nt.contains;
  })(window);
  !(function (t, e, i) {
    hstc['Fingerprint'] = i();
  })(0, 0, function () {
    'use strict';
    var t = function (t) {
      var e, i;
      e = Array.prototype.forEach;
      i = Array.prototype.map;
      this.each = function (t, i, n) {
        if (null !== t)
          if (e && t.forEach === e) t.forEach(i, n);
          else if (t.length === +t.length) {
            for (var r = 0, s = t.length; r < s; r++) if (i.call(n, t[r], r, t) === {}) return;
          } else for (var o in t) if (t.hasOwnProperty(o) && i.call(n, t[o], o, t) === {}) return;
      };
      this.map = function (t, e, n) {
        var r = [];
        if (null == t) return r;
        if (i && t.map === i) return t.map(e, n);
        this.each(t, function (t, i, s) {
          r[r.length] = e.call(n, t, i, s);
        });
        return r;
      };
      if ('object' == typeof t) {
        this.hasher = t.hasher;
        this.screen_resolution = t.screen_resolution;
        this.screen_orientation = t.screen_orientation;
      } else 'function' == typeof t && (this.hasher = t);
    };
    t.prototype = {
      get: function () {
        var t = [];
        t.push(navigator.userAgent);
        t.push(navigator.language);
        t.push(screen.colorDepth);
        if (this.screen_resolution) {
          var e = this.getScreenResolution();
          void 0 !== e && t.push(e.join('x'));
        }
        t.push(new Date().getTimezoneOffset());
        t.push(this.hasSessionStorage());
        t.push(this.hasLocalStorage());
        t.push(!!window.indexedDB);
        document && document.body ? t.push(typeof document.body.addBehavior) : t.push('undefined');
        t.push(typeof window.openDatabase);
        t.push(navigator.cpuClass);
        t.push(navigator.platform);
        t.push(navigator.doNotTrack);
        return this.hasher
          ? this.hasher(t.join('###'), 31)
          : this.murmurhash3_32_gc(t.join('###'), 31);
      },
      murmurhash3_32_gc: function (t, e) {
        var i, n, r, s, o, c, a, h;
        i = 3 & t.length;
        n = t.length - i;
        r = e;
        o = 3432918353;
        c = 461845907;
        h = 0;
        for (; h < n; ) {
          a =
            (255 & t.charCodeAt(h)) |
            ((255 & t.charCodeAt(++h)) << 8) |
            ((255 & t.charCodeAt(++h)) << 16) |
            ((255 & t.charCodeAt(++h)) << 24);
          ++h;
          r =
            27492 +
            (65535 &
              (s =
                (5 *
                  (65535 &
                    (r =
                      ((r ^= a =
                        ((65535 &
                          (a =
                            ((a =
                              ((65535 & a) * o + ((((a >>> 16) * o) & 65535) << 16)) &
                              4294967295) <<
                              15) |
                            (a >>> 17))) *
                          c +
                          ((((a >>> 16) * c) & 65535) << 16)) &
                        4294967295) <<
                        13) |
                      (r >>> 19))) +
                  (((5 * (r >>> 16)) & 65535) << 16)) &
                4294967295)) +
            (((58964 + (s >>> 16)) & 65535) << 16);
        }
        a = 0;
        switch (i) {
          case 3:
            a ^= (255 & t.charCodeAt(h + 2)) << 16;
          case 2:
            a ^= (255 & t.charCodeAt(h + 1)) << 8;
          case 1:
            r ^= a =
              ((65535 &
                (a =
                  ((a =
                    ((65535 & (a ^= 255 & t.charCodeAt(h))) * o +
                      ((((a >>> 16) * o) & 65535) << 16)) &
                    4294967295) <<
                    15) |
                  (a >>> 17))) *
                c +
                ((((a >>> 16) * c) & 65535) << 16)) &
              4294967295;
        }
        r ^= t.length;
        r =
          (2246822507 * (65535 & (r ^= r >>> 16)) + (((2246822507 * (r >>> 16)) & 65535) << 16)) &
          4294967295;
        r =
          (3266489909 * (65535 & (r ^= r >>> 13)) + (((3266489909 * (r >>> 16)) & 65535) << 16)) &
          4294967295;
        return (r ^= r >>> 16) >>> 0;
      },
      hasLocalStorage: function () {
        try {
          return !!window.localStorage;
        } catch (t) {
          return !0;
        }
      },
      hasSessionStorage: function () {
        try {
          return !!window.sessionStorage;
        } catch (t) {
          return !0;
        }
      },
      getScreenResolution: function () {
        return this.screen_orientation
          ? screen.height > screen.width
            ? [screen.height, screen.width]
            : [screen.width, screen.height]
          : [screen.height, screen.width];
      },
    };
    return t;
  });
  function loadHstc(t, e) {
    console.warn('loadHstc', 1);
    function i() {
      new hstc.tracking.Runner(t).run();
    }
    var n = t.getDocument();
    console.warn('loadHstc', 2, n, 'n.readyState', n.readyState);
    !n.readyState || 'complete' == n.readyState || (n.addEventListener && 'loaded' == n.readyState)
      ? i()
      : hstc.utils.addEventListener(e, 'load', i, !0);
  }
  !(function (t, e) {
    console.warn('go', t, e);
    try {
      var i = t.getWindow();
      if (!i[e]) {
        loadHstc(t, i);
        i[e] = !0;
      }
    } catch (t) {
      hstc.utils.logError(t);
    }
  })(new hstc.global.Context(), '_hstc_loaded');
})(); /** _anon_wrapper_ **/
