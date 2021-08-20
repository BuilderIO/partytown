# Partytown 🎉

> A fun place for your 3rd-party scripts to hang out

⚠️ Warning! This is experimental! ⚠️

- Relocates resource intensive scripts to into a [web worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)
- Web worker DOM implementation within `3kb`
- Throttles 3rd-party code by using one `requestAnimationFrame()` per DOM operation, reducing jank
- Debug what 3rd-party scripts are calling into
- Sandbox specific browser APIs
- Main thread performance is, without question, more important than web worker thread performance
- Partytown runs 3rd-party scripts in a web worker to free up resources for your app on the main thread. If you're looking to instead run your app from within a web worker, then we recommend [WorkerDom](https://github.com/ampproject/worker-dom) instead.

### Goals

- Free up main thread resources to be used only for the primary webapp execution
- Reduce layout thrashing coming from 3rd-party scripts
- Isolate 3rd-party scripts within a sandbox ([web worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)) to give better insight as to what the scripts are doing
- Configure which browser APIs specific scripts can, and cannot, execute
- Webapp startup time unchanged when Partytown library is added
- Opt-in only, and does not automatically update existing scripts
- Allow 3rd-party scripts to run exactly how they're coded and without any alterations
- Read and write main thread DOM operations _synchronously_ from within a web worker
- No build-steps or bundling required, but rather update scripts the same as traditional 3rd-party scripts are updated

### Use-Cases

Below are just a few examples of 3rd-party scripts that may be a good candidate to run from within a web worker. The goal is to continue validating various services to ensure Partytown has the correct API proxies, but Partytown itself should not hardcode to any specific services. Help us test!

- [Google Tag Manager (GTM)](https://marketingplatform.google.com/about/tag-manager/)
- [Google Analytics (GA)](https://analytics.google.com/)
- [Mixpanel](https://mixpanel.com/)
- [Hubspot](https://www.hubspot.com/)
- [Segment](https://segment.com/)
- [Amplitude](https://amplitude.com/)

### Trade-offs

- Partytown library scripts must be hosted from the same origin as the HTML document (not a CDN)
- DOM operations within the worker are purposely throttled, slowing down worker execution
- Not ideal for scripts that are required to block the main document (blocking is bad)
- Service worker network requests (even though they're all intercepted, they're not actual external HTTP requests, and do not affect [Lighthouse scores](https://web.dev/performance-scoring/), many service worker network requests may still show up in the network tab)
- A total of three threads are used: Main Thread, Web Worker, Service Worker

### Browser Feature Requirements

- [Web Worker](https://caniuse.com/webworkers)
- [Service Worker](https://caniuse.com/serviceworkers)
- [JavaScript Proxy](https://caniuse.com/proxy)
- [JavaScript Symbol](https://caniuse.com/mdn-javascript_builtins_symbol)

---

## Partytown Library

For each 3rd-party script that should not run in the main thread, but instead party 🎉 in a web worker, its script element should set the `type` attribute to `text/partytown`. This does two things:

1. Prevents the script from executing on the main thread.
2. Provides an attribute selector for the Partytown library.

```html
<script type="text/partytown">
  // 3rd-party analytics scripts
</script>
```

The Partytown library should be added to the bottom of the page and include the [async](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-async) attribute, which tells the browser this not a critical resource.

```html
<script src="/~partytown/partytown.js" async></script>
```

Note that this script _must_ be hosted from the same origin as the HTML page, rather than a CDN. Additionally, the Partytown library should be
hosted from its own dedicated root directory `/~partytown/`. This root directory becomes the [scope](https://developers.google.com/web/ilt/pwa/introduction-to-service-worker#registration_and_scope) for the service worker, and all client-side requests within that path are intercepted by Partytown.

With scripts disabled from executing, the Partytown library can lazily begin loading and executing the scripts from inside a worker.

## Worker Instances

By default all Partytown scripts will load in the same worker. However, each script could be placed in their own named web worker, or separated into groups by giving the script a `data-worker` attribute.

```html
<script data-worker="GTM" type="text/partytown">
  // Google Tag Manager
</script>

<script data-worker="GA" type="text/partytown">
  // Google Analytics
</script>
```

By placing each script in their own worker it may be easier to separate and debug what each script is executing. However, in production it may be preferred to share one worker.

## Distribution

The distribution comes with multiple files:

### `/~partytown/partytown.js`

- The initial script to be loaded on the main thread
- Minified and property renamed
- Console logs removed
- Loads the other minified library scripts
- Contents of this file could be used to inline this script into the HTML instead, in order to reduce an extra HTTP request

### `/~partytown/partytown.debug.js`

- Same purpose as `/~partytown/partytown.js`
- Not minified
- Includes console logs
- Loads other debug library scripts
- Not meant for production, but useful to inspect what scripts are up to

---

## Development

```
npm install
npm run dev
```

Note that during development, the build of `partytown.js` is not minified.

### Integration Tests

Tests to be ran on a browser are located in the `tests`. First start the server, then visit http://localhost:4000/tests/

```
npm run serve
```

http://localhost:4000/tests/

### Unit Tests

```
npm test
```

```
npm run test.watch
npm run test.watch -- /path/to/test.unit.ts
```
