# Partytown 🎉

<img width="838" alt="Partytown github fit 2x" src="https://user-images.githubusercontent.com/452425/134568488-f36f4640-9ada-4a78-a969-2b8315cf7f47.png">

- [Introducing Partytown: Run Third-Party Scripts From a Web Worker](https://dev.to/adamdbradley/introducing-partytown-run-third-party-scripts-from-a-web-worker-2cnp)
- [How Partytown's Sync Communication Works](https://dev.to/adamdbradley/how-partytown-s-sync-communication-works-4244)

> A fun location for your third-party scripts to hang out

⚠️ Warning! This is experimental! ⚠️

Partytown is a lazy-loaded library to help relocate resource intensive scripts into a [web worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API), and off of the [main thread](https://developer.mozilla.org/en-US/docs/Glossary/Main_thread). Its goal is to help speed up sites by dedicating the main thread to your code, and offloading third-party scripts to a web worker.

- [Information](#information)
  - [Negative Impacts From Third-Party Scripts](#negative-impacts-from-Third-Party-Scripts)
  - [Goals](#goals)
  - [Web Workers](#web-workers)
  - [Browser Window And DOM Access](#browser-window-and-dom-access)
  - [Sandboxing](#sandboxing)
  - [Trade-Offs](#trade-offs)
  - [Use-Cases](#use-cases)
  - [How Does It Work?](#how-does-it-work)
  - [Browser Features And Fallback](#browser-features-and-fallback)
- [Usage](#usage)
  - [React](#react)
  - [Integrations](#integrations)
  - [Vanilla](#vanilla)
  - [Copy Task](#copy-tasks)
  - [Config](#config)
  - [Distribution](#distribution)
- [Development](https://github.com/BuilderIO/partytown/blob/main/DEVELOPER.md#local-development)
  - [Installation](https://github.com/BuilderIO/partytown/blob/main/DEVELOPER.md#installation)
  - [Submitting Issues](https://github.com/BuilderIO/partytown/blob/main/DEVELOPER.md#submitting-issues-and-writing-tests)
  - [Manual Testing](https://github.com/BuilderIO/partytown/blob/main/DEVELOPER.md#manual-testing)
  - [E2E Testing](https://github.com/BuilderIO/partytown/blob/main/DEVELOPER.md#e2e-testing)
  - [Deployed Tests](https://github.com/BuilderIO/partytown/blob/main/DEVELOPER.md#deployed-tests)
- [Community](#community)
- [Related Projects](#related-projects)

---

## Information

### Negative Impacts From Third-Party Scripts

Even with a fast and highly tuned site and/or app following all of the best practices, it's all too common for your performance wins to be erased the moment third-party scripts are added. By third-party scripts we mean code that is embedded within your site, but not directly under your control. A few examples include: analytics, metrics, ads, A/B testing, trackers, etc. Their inclusion are often a double-edged sword.

Below is a summary of potential issues, referenced from [Loading Third-Party JavaScript](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript):

- Firing too many network requests to multiple servers. The more requests a site has to make, the longer it can take to load.
- Sending too much JavaScript which keeps the main thread busy. Too much JavaScript can block DOM construction, delaying how quickly pages can render.
- CPU-intensive script parsing and execution can delay user interaction and cause battery drain.
- Third-party scripts that were loaded without care can be a single-point of failure (SPOF).
- Insufficient HTTP caching, forcing resources to be fetched from the network often.
- The use of legacy APIs (e.g `document.write()`), which are known to be harmful to the user experience.
- Excessive DOM elements or expensive CSS selectors.
- Including multiple third-party embeds that can lead to multiple frameworks and libraries being pulled in several times, which exacerbates the performance issues.
- Third-party scripts also often use embed techniques that can block `window.onload`, even if the embed is using async or defer.

### Goals

We set out to solve this situation, so that apps of all sizes will be able to continue to use third-party scripts without the performance hit. Some of Partytown's goals include:

- Free up main thread resources to be used only for the primary web app execution.
- Sandbox third-party scripts and allow or deny their access main thread APIs.
- Isolate long-running tasks within the web worker thread.
- Reduce layout thrashing coming from third-party scripts.
- Throttle third-party scripts' access to the main thread.
- Allow third-party scripts to run exactly how they're coded and without any alterations.
- Read and write main thread DOM operations _synchronously_ from within a web worker, allowing scripts running from the web worker to execute as expected.
- No build-steps or bundling required, but rather update scripts the same way as traditional third-party scripts are updated.

### Web Workers

Partytown's philosophy is that the main thread should be dedicated to your code, and any scripts that are not required to be in the [critical path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path) should be moved to a web worker. Main thread performance is, without question, more important than web worker thread performance. See the [example page](https://partytown.builder.io/example/) and [test pages](https://partytown.builder.io/) for some live demos.

> If you're looking to run _your_ app within a web worker, we recommend the [WorkerDom](https://github.com/ampproject/worker-dom) project.

### Browser Window And DOM Access

Traditionally, communicating between the main thread and worker thread _must_ be [asynchronous](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Concepts). Meaning that for the two threads to communicate, they cannot use blocking calls.

Party town is different. It allows code executed from the web worker to access DOM _synchronously_. The benefit from this is that third-party scripts can continue to work exactly how they're coded.

For example, the code below works as expected within a web worker:

```javascript
const rect = element.getBoundingClientRect();
console.log(rect.x, rect.y);
```

First thing you'll notice is that there's no async/await, promise or callback. Instead, the call to `getBoundingClientRect()` is blocking, and the returned `rect` value contains the expected `x` and `y` properties.

Additionally, data passed between the main thread and web worker must be [serializable](https://en.wikipedia.org/wiki/Serialization). Partytown automatically handles the serializing and deserializing of data passed between threads.

### Sandboxing

Third-party scripts are often a black-box with large amounts of code. What's buried within the obfuscated code is difficult to tell. It's minified for good reason, but regardless it becomes very difficult to understand what third-party scripts are executing on _your_ site and _your_ user's devices.

Partytown on the other hand, is able to isolate and sandbox third-party scripts within a web worker, and allow, or deny, access to main thread APIs. This includes cookies, localStorage, or the entire document. Because the code is executed within the worker, and their access to the main thread _must_ go through the proxy, Partytown is able to give developers control over what the scripts that can execute.

Essentially, Partytown lets you:

- Isolate third-party scripts within a sandbox ([web worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)).
- Configure which browser APIs specific scripts can, and cannot, execute.
- Option to log API calls and passed in arguments in order to give better insight as to what the scripts are doing.

#### Partytown Debug Logs

With debug and logging enabled, below is an example of the Partytown logs showing all calls, getters and setters:

![Partytown Console Logs](https://user-images.githubusercontent.com/452425/131688576-e207cb15-7ce5-4009-a358-3e3093d51957.png)

## Trade-Offs

Nothing is without trade-offs. Using Partytown to orchestrate third-party scripts vs adding them to your pages has the following considerations to keep in mind:

- Partytown library scripts must be hosted from the same origin as the HTML document (not a CDN).
- DOM operations within the worker are purposely throttled, slowing down execution compared to the same code running on the main thread. (We also see this as a feature.)
- A total of three threads are used: Main Thread, Web Worker, Service Worker (in the future we may explore [Atomics](#what-about-atomics) which would bring it down to two).
- Not ideal for scripts that are required to block the main document (blocking is bad).
- `event.preventDefault()` will have no effect, similar to [passive event listeners](https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md).
- Trade-offs with intercepted network requests:
  - Many service worker network requests may show up in the network tab.
  - Partytown service worker requests are intercepted by the client, and transfer `0 bytes` over the network.
  - [Lighthouse scores](https://web.dev/performance-scoring/) are unaffected by the intercepted requests (any work on thread other than `main` has no impact on Lighthouse).

## Use-Cases

Below are just a few examples of third-party scripts that might be a good candidate to run from within a web worker. The goal is to continue validating commonly used services to ensure Partytown has the correct API proxies, but Partytown itself should not hardcode to any specific services. Help us test!

- [Google Tag Manager (GTM)](https://marketingplatform.google.com/about/tag-manager/)
- [Google Analytics (GA)](https://analytics.google.com/)
- [Mixpanel](https://mixpanel.com/)
- [Hubspot](https://www.hubspot.com/)
- [Segment](https://segment.com/)
- [Amplitude](https://amplitude.com/)

### How Does It Work?

[How Partytown's Sync Communication Works](https://dev.to/adamdbradley/how-partytown-s-sync-communication-works-4244)

Partytown relies on [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API), [Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API), [JavaScript Proxies](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy), and a communication layer between them all.

1. Scripts are disabled from running on the main thread by using the `type="text/partytown"` attribute on the `<script/>` tag.
1. Service worker creates an `onfetch` handler to intercept specific requests.
1. Web worker is given the scripts to execute within the worker thread.
1. Web worker creates JavaScript Proxies to replicate and forward calls to the main thread APIs (such as DOM operations).
1. Any call to the JS proxy uses [_synchronous_ XHR](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests#example_http_synchronous_request) requests.
1. Service worker intercepts requests, then is able to asynchronously communicate with the main thread.
1. When the service worker receives the results from the main thread, it responds to the web worker's request.
1. From the point of view of code executing on the web worker, everything was synchronous, and each call to the document was blocking.

#### What About Atomics?

Partytown will use [Atomics](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics) when they're enabled by the browser.

To enable Atomics communication, the browser's [crossOriginIsolated](https://developer.mozilla.org/en-US/docs/Web/API/crossOriginIsolated) boolean must be `true`. More details can be found at [Making your website "cross-origin isolated" using COOP and COEP](https://web.dev/coop-coep/).

More research needs to be done to better document and understand how to best enable Atomics. If you're interested in helping, please ping us in the [Partytown Discord](https://discord.gg/hbuEtxdEZ3). ⚛️

### Browser Features And Fallback

- [Web Worker](https://caniuse.com/webworkers)
- [Service Worker](https://caniuse.com/serviceworkers)
- [JavaScript Proxy](https://caniuse.com/proxy)
- [JavaScript Symbol](https://caniuse.com/mdn-javascript_builtins_symbol)

If the browser does not support any of the features above, then it'll fallback to run third-party scripts the traditional way.

## Usage

### React

A React `<Partytown/>` component is provided within [@builder.io/partytown/react](https://www.npmjs.com/package/@builder.io/partytown). The component is simply a wrapper to the [vanilla HTML](#vanilla) example below, and similarly should be added within the document's `<head>`. Below is an example of the React `<Partytown/>` component used within a [Next.js Document](https://nextjs.org/docs/advanced-features/custom-document).

```jsx
import { Partytown } from '@builder.io/partytown/react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <Partytown />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
```

The `<Partytown/>` component also has all of the [configuration properties](#config), such as:

```jsx
<Partytown debug={true} />
```

### Integrations

Partytown provides some of the most common analytics as React components, just for added simplicity and convenience.

- `<GoogleTagManager/>`

Below is an example of adding Partytown's Google Tag Manager React component to a [Next.js Document](https://nextjs.org/docs/advanced-features/custom-document):

```jsx
import { Partytown, GoogleTagManager, GoogleTagManagerNoScript } from '@builder.io/partytown/react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <GoogleTagManager containerId={'GTM-XXXXX'} />
          <Partytown />
        </Head>
        <body>
          <GoogleTagManagerNoScript containerId={'GTM-XXXXX'} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
```

### Vanilla

The React components are simply wrappers for convenience, but Partytown itself can be used from any framework, or no framework at all by just updating HTML.

Each third-party script that shouldn't run in the main thread, but instead party 🎉 in a web worker, should set the `type` attribute of its opening script tag to `text/partytown`. This does two things:

1. Prevents the script from executing on the main thread.
2. Provides an attribute selector for the Partytown library.

```html
<script type="text/partytown">
  // Third-party analytics scripts
</script>
```

To load Partytown with just HTML, the library script below should be added within the `<head>` of page. The snippet will patch any global variables needed so other library scripts, such as Google Tag Manager's [Data Layer](https://developers.google.com/tag-manager/devguide), continues to work. However, the actual Partytown library, and any of the third-party scripts, are not downloaded or executed until after the document has loaded.

Note that both the web worker script and the service worker script _must_ be hosted from the same origin as the HTML page, rather than a CDN. Additionally, the service worker must be hosted from a directory that ensures all HTML pages are within the [scope](https://developers.google.com/web/ilt/pwa/introduction-to-service-worker#registration_and_scope) for the service worker, so that all client-side requests from those pages are intercepted by Partytown. All other scripts can be hosted on any origin.

With scripts disabled from executing, the Partytown library can lazily begin loading and executing the scripts from inside a worker.

To set the [config](#config), add a `<script>` with a `partytown={};` global before the Partytown library script, such as:

```html
<script>
  partytown = {...};
</script>
```

### Copy Tasks

An additional requirement is that the `/~partytown/` directory should serve the static files found within [@builder.io/partytown/lib](https://unpkg.com/browse/@builder.io/partytown/lib/). The quickest way is to copy the `lib` directory into a public `/~partytown` directory within your static server. Another option would be to set up a copy task within the project's bundler, or create a build step.

Below is an example of using [Webpack's copy plugin](https://webpack.js.org/plugins/copy-webpack-plugin/) to copy the source `lib` directory found in the [@builder.io/partytown](https://www.npmjs.com/package/@builder.io/partytown) package, to the `public/~partytown/` directory:

```js
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.join(__dirname, 'node_modules', '@builder.io', 'partytown', 'lib'),
          to: path.join(__dirname, 'public', '~partytown'),
        },
      ],
    }),
  ],
};
```

Additionally, the Partytown `lib` config can be used to change where the library files can be found on the server.

### Config

| Config Property         | Description                                                                            |
| ----------------------- | -------------------------------------------------------------------------------------- |
| `debug`                 | When set to `true`, Partytown scripts are not inlined and not minified.                |
| `forward`               | An array of strings. See [Forwarding Events](#forwarding-events).                      |
| `lib`                   | Path where the Partytown library can be found on the server. Default is `/~partytown/` |
| `logCalls`              | Log method calls (debug mode required)                                                 |
| `logGetters`            | Log getter calls (debug mode required)                                                 |
| `logSetters`            | Log setter calls (debug mode required)                                                 |
| `logImageRequests`      | Log Image() src requests (debug mode required)                                         |
| `logScriptExecution`    | Log script executions (debug mode required)                                            |
| `logSendBeaconRequests` | Log navigator.sendBeacon() requests (debug mode required)                              |
| `logStackTraces`        | Log stack traces (debug mode required)                                                 |

#### Forwarding Events and Triggers

Many third-party scripts provide a global variable which user code calls in order to send data to the service. For example, Google Tag Manager uses a [Data Layer](https://developers.google.com/tag-manager/devguide) array, and by pushing data to the array, the data is then sent on to GTM. Because we're moving third-party scripts to a web worker, the main thread needs to know which variables to patch first, and when Partytown loads, it can then forward the event data on to the service.

The `forward` property is an array of arrays, with each array representing a variable that should be patched on the global. Below is a vanilla example of setting up the forwarding for Google Tag Manager, Hubspot and Intercom. Notice `dataLayer` and `_hsq` arrays have a `1` at the end. This is used to signify that `dataLayer` is an array, where as `Intercom` should be set as a function.

<!-- prettier-ignore -->
```html
<script>
  partytown = {
    forward: [['dataLayer', 1], ['_hsq', 1], ['Intercom']]
  };
</script>
```

React Forward Property:

```jsx
<Partytown forward={(['dataLayer', 1], ['_hsq', 1], ['Intercom'])} />
```

> Note that the React integration components will already add the forward configs to the Partytown library.

### Distribution

The distribution comes with multiple files:

- `/~partytown/partytown.js`

  - The initial script to be loaded on the main thread.
  - Minified and property renamed.
  - Console logs removed.
  - Contents of `partytown.js` could be inlined in the HTML instead to reduce an extra HTTP request.
  - Loads:
    - `partytown-sw.js`: Minified service worker with inlined sandbox and web worker.

- `/~partytown/debug/partytown.js`

  - Debug version of `/~partytown/partytown.js`.
  - Additional request for sandbox and web worker.
  - Not minified.
  - Includes console logs.
  - Loads other debug library scripts.
  - Not meant for production, but useful to inspect what scripts are up to.
  - Loads:
    - `debug/partytown-sw.js`: Service worker with separate sandbox request.
    - `debug/partytown-sandbox.js`: Sandbox with separate web worker request.
    - `debug/partytown-ww.js`: Web worker as separate file, not inlined.

- `/~partytown/partytown-snippet.js`

  - The same snippet code which should be copy and pasted into the head.
  - Provided for reference only.

---

## Community

- [Partytown Discord](https://discord.gg/hbuEtxdEZ3)
- [@QwikDev](https://twitter.com/QwikDev)
- [@builderio](https://twitter.com/builderio)
- [Development](https://github.com/BuilderIO/partytown/blob/main/DEVELOPER.md#local-development)

## Related Projects

- [Qwik](https://github.com/BuilderIO/qwik): An open-source framework designed for best possible time to interactive, by focusing on resumability of server-side-rendering of HTML, and fine-grained lazy-loading of code.
- [Mitosis](https://github.com/BuilderIO/mitosis): Write components once, run everywhere. Compiles to Vue, React, Solid, Angular, Svelte, and more.
- [Builder](https://github.com/BuilderIO): Drag and drop page builder and CMS for React, Vue, Angular, and more.
