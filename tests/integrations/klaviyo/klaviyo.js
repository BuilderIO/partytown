!(function () {
  var e = 'PFUMgw',
    n = window.klaviyoModulesObject;
  if (n) {
    var a = n,
      o = a.companyId,
      r = a.serverSideRendered;
    if (o != e || !r)
      return void console.warn(
        'Already loaded for account '.concat(o, '. Skipping account ').concat(e, '.')
      );
  }
  (window._learnq = window._learnq || []),
    (window.__klKey = window.__klKey || e),
    n ||
      (window._learnq.push(['account', e]),
      (n = {
        companyId: e,
        loadTime: new Date(),
        loadedModules: {},
        loadedCss: {},
        serverSideRendered: !0,
        assetSource: '',
      }),
      Object.defineProperty(window, 'klaviyoModulesObject', { value: n, enumerable: !1 }));
  var t = {},
    s = document,
    d = s.head;
  function c(e) {
    if (!t[e]) {
      var n = s.createElement('script');
      (n.type = 'text/javascript'),
        (n.async = !0),
        (n.src = e),
        (n.crossOrigin = 'anonymous'),
        d.appendChild(n),
        (t[e] = !0);
    }
  }
  var i,
    l,
    u,
    p = JSON.parse(
      'noModule' in s.createElement('script') ||
        (function () {
          try {
            return new Function('import("")'), !0;
          } catch (e) {
            return !1;
          }
        })()
        ? '{\u0022static\u0022: {\u0022js\u0022: [\u0022 https://static\u002Dtracking.klaviyo.com/onsite/js/fender_analytics.51f95a5e38c9309b9386.js?cb\u003D1\u0022, \u0022 https://static\u002Dtracking.klaviyo.com/onsite/js/static.444020cd426b0bea12c1.js?cb\u003D1\u0022, \u0022https://static.klaviyo.com/onsite/js/runtime.6ad802899484f1c1cb12.js?cb\u003D1\u0022, \u0022https://static.klaviyo.com/onsite/js/sharedUtils.6250be8046fe84d75185.js?cb\u003D1\u0022]}, \u0022signup_forms\u0022: {\u0022js\u0022: [\u0022https://static.klaviyo.com/onsite/js/runtime.6ad802899484f1c1cb12.js?cb\u003D1\u0022, \u0022https://static.klaviyo.com/onsite/js/sharedUtils.6250be8046fe84d75185.js?cb\u003D1\u0022, \u0022 https://static.klaviyo.com/onsite/js/vendors~signup_forms.f7066e273a66876a4dee.js?cb\u003D1\u0022, \u0022 https://static.klaviyo.com/onsite/js/signup_forms.c2c4ecbc8d929579d042.js?cb\u003D1\u0022]}}'
        : '{\u0022static\u0022: {\u0022js\u0022: [\u0022 https://static\u002Dtracking.klaviyo.com/onsite/js/fender_analytics.f87a8e48f47c53d934e5.js?cb\u003D1\u0022, \u0022 https://static\u002Dtracking.klaviyo.com/onsite/js/static.8d7d6582bc9b7fc900ce.js?cb\u003D1\u0022, \u0022https://static.klaviyo.com/onsite/js/runtime.b2160dc63600b46e45c5.js?cb\u003D1\u0022, \u0022https://static.klaviyo.com/onsite/js/sharedUtils.cfa82fa4dbedd1ec1ad1.js?cb\u003D1\u0022]}, \u0022signup_forms\u0022: {\u0022js\u0022: [\u0022https://static.klaviyo.com/onsite/js/runtime.b2160dc63600b46e45c5.js?cb\u003D1\u0022, \u0022https://static.klaviyo.com/onsite/js/sharedUtils.cfa82fa4dbedd1ec1ad1.js?cb\u003D1\u0022, \u0022 https://static.klaviyo.com/onsite/js/vendors~signup_forms.df42188f9d78934c4fa2.js?cb\u003D1\u0022, \u0022 https://static.klaviyo.com/onsite/js/signup_forms.526f5c1d3fa5e2ace0ac.js?cb\u003D1\u0022]}}'
    ),
    w = n,
    v = w.loadedCss,
    y = w.loadedModules;
  for (i in p)
    if (p.hasOwnProperty(i)) {
      var f = p[i];
      f.js.forEach(function (e) {
        y[e] || (c(e), (y[e] = new Date().toISOString()));
      });
      var m = f.css;
      m &&
        !v[m] &&
        ((l = m),
        (u = void 0),
        ((u = s.createElement('link')).rel = 'stylesheet'),
        (u.href = l),
        d.appendChild(u),
        (v[m] = new Date().toISOString()));
    }
})();
