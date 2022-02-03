---
title: Atomics
---

Partytown will use [Atomics](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics) when they're enabled by the browser. Some of the advantages include:

- 10x faster communication between threads compared to the service-worker requests
- 5% smaller build file compared to the service-worker build
- No `proxytown` requests in the network tab
- Less http requests to initialize the Partytown library
- Partytown service-worker and iframe is no longer used

It's important to note that [not all browsers support Atomics](#browser-atomics-support), and the server hosting the site must be configured with the correct response headers. If neither of those are true, then Partytown will fallback to using the service-worker communication layer instead.

## Document Response Headers

To enable Atomics communication, the browser's [crossOriginIsolated](https://developer.mozilla.org/en-US/docs/Web/API/crossOriginIsolated) readonly property should be `true`. The `crossOriginIsolated` property is only set to true, by the browser, when the document includes these http response headers:

```
Cross-Origin-Embedder-Policy: credentialless
Cross-Origin-Opener-Policy: same-origin
```

- [Cross-Origin-Embedder-Policy (COEP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy) response header prevents a document from loading any cross-origin resources that don't explicitly grant the document permission. At the time of writing, "credentialless" is not a supported value in Safari, so Safari will fallback to using the Service Worker communication.
- [Cross-Origin-Opener-Policy (COOP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy) response header allows you to ensure a top-level document does not share a browsing context group with cross-origin documents.

## Setting Cross-Origin Attribute

An alternative to setting `Cross-Origin-Embedder-Policy: credentialless`, is to instead use `Cross-Origin-Embedder-Policy: require-corp`. The biggest thing to highlight is that the `require-corp` does not allow images, scripts, videos, etc. to be loaded from another origin. For example, when this header is set, any scripts or images to a CDN will no longer work.

However, the [crossorigin](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin) attribute can be used on individual elements, such as `<audio>`, `<img>`, `<link>`, `<script>`, and `<video>`, which allows these requests to go through and not be blocked.

Below is an example of setting the `crossorigin` attribute on an image:

```html
<img src="https://c.tenor.com/8wBCqZH60U8AAAAC/computer-cat.gif" crossorigin />
```

## Browser Atomics Support

[Can I Use: Atomics](https://caniuse.com/mdn-javascript_builtins_atomics)

- Desktop:
  - Chrome 68+ (Jul 2018)
  - Edge 79+ (Jan 2020)
  - Firefox 78+ (June 2020)
  - Safari 15.2+ (Dec 2021)
- Mobile:
  - Safari 15.2+ (Dec 2021)

## Additional Resources

- [Making your website "cross-origin isolated" using COOP and COEP](https://web.dev/coop-coep/)
- [Cross-Origin-Embedder-Policy: credentialless](https://wicg.github.io/credentiallessness/)
- [COEP: credentialless. Isolation w/o Opt-In?](https://github.com/WICG/credentiallessness)
- [Understanding "same-site" and "same-origin"](https://web.dev/same-site-same-origin/)
