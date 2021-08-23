# Partytown 🎉

> A fun place for your 3rd-party scripts to hang out

⚠️ Warning! This is experimental! ⚠️

Even with a fast and higly tuned website following all of the best practices, it's all too common for your performance wins to be erased the moment 3rd-party scripts are added. By 3rd-party scripts we mean code that is not directly under your control, such analytics, ads, trackers, etc., and their inclusion are often a double-edged sword. The [Loading Third-Party JavaScript](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript) doc is a great resource for different techniques to debug and minimize their impact, but for the most part your hands are still tied.

### Web Workers

Partytown runs 3rd-party scripts in a web worker to free up resources for your app on the main thread.

- Relocate resource intensive scripts to into a [web worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)
- Throttle 3rd-party code by using one `requestAnimationFrame()` per DOM operation, reducing jank
- Sandbox and ability to restrict specific browser APIs
- Debug what 3rd-party scripts are calling into
- Web worker DOM implementation within `3kb`
- Main thread performance is, without question, more important than web worker thread performance

> If you're looking to instead run _your_ app within a web worker, then we recommend the [WorkerDom](https://github.com/ampproject/worker-dom) project.

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
- A total of three threads are used: Main Thread, Web Worker, Service Worker
- Service worker network requests
  - Many service worker network requests may show up in the network tab
  - Partytown service worker requests are intercepted by the client, rather than network HTTP requests
  - [Lighthouse scores](https://web.dev/performance-scoring/) are unaffected by the intercepted requests

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

The Partytown library should be added to the bottom of the page and include the [async](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-async) and [defer](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-defer) attributes, which [helps tell the browser this not a critical resource](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript#use_async_or_defer).

```html
<script src="/~partytown/partytown.js" async defer></script>
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
- Contents of `partytown.js` could be inlined the HTML instead in order to reduce an extra HTTP request
- Loads:
  - `partytown-sw.js`: Minified service worker with inlined sandbox and web worker

### `/~partytown/partytown.debug.js`

- Debug version of `/~partytown/partytown.js`
- Additional request for sandbox and web worker
- Not minified
- Includes console logs
- Loads other debug library scripts
- Not meant for production, but useful to inspect what scripts are up to
- Loads:
  - `partytown-sw.debug.js`: Service worker with separate sandbox request
  - `partytown-sandbox.debug.js`: Sandbox with separate web worker request
  - `partytown-ww.debug.js`: Web worker as separate file, not inlined

## Configuring and Debugging

When using the `partytown.debug.js` file there is a minimal set of default debug logs that print in the console. You can also opt-in to list out even more verbose logs that may help to debug scripts. Before the Partytown library script, you can configure the `partytown` global object, such as:

```html
<script>
  partytown = {
    logCalls: true,
    logGetters: true,
    logSetters: true,
    logStackTraces: true,
  };
</script>
<script src="/~partytown/partytown.debug.js" async defer></script>
```

> Note that debug logs and configuration is not available in the `partytown.js` version.

---

## Development

```
npm install
npm run dev
```

Note that during development, the build of `partytown.js` is not minified.

### Local Testing

Tests to be ran on a browser are located in the `tests` directory. These pages can help to manually test out DOM apis and individual services.

```
npm run serve
```

http://localhost:4000/

### E2E Tests

E2E tests use [@playwright/test](https://playwright.dev/docs/intro#writing-assertions), which allows us to test on Chromium, Firefox and WebKit browsers.

```
npm test
```

### Deployed Tests

The same pages found in `tests` are deployed to

https://partytown.vercel.app/
