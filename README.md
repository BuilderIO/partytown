# Partytown 🎉

<img width="838" alt="Partytown github fit 2x" src="https://user-images.githubusercontent.com/452425/134568488-f36f4640-9ada-4a78-a969-2b8315cf7f47.png">

- [Introducing Partytown: Run Third-Party Scripts From a Web Worker](https://dev.to/adamdbradley/introducing-partytown-run-third-party-scripts-from-a-web-worker-2cnp)
- [How Partytown's Sync Communication Works](https://dev.to/adamdbradley/how-partytown-s-sync-communication-works-4244)
- [How we cut 99% of our JavaScript with Qwik + Partytown](https://www.builder.io/blog/how-we-cut-99-percent-js-with-qwik-and-partytown)
- [Partytown is now in Beta](https://www.builder.io/blog/partytown-is-now-in-beta)

> A fun location for your third-party scripts to hang out

Partytown is a lazy-loaded library to help relocate resource intensive scripts into a [web worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API), and off of the [main thread](https://developer.mozilla.org/en-US/docs/Glossary/Main_thread). Its goal is to help speed up sites by dedicating the main thread to your code, and offloading third-party scripts to a web worker.

[Getting Started](https://github.com/BuilderIO/partytown/wiki/Getting-Started)

---

### Negative Impacts From Third-Party Scripts

Even with a fast and highly tuned site following all of today's best practices, it's all too common for your performance wins to be erased the moment third-party scripts are added. By third-party scripts we mean code that is embedded within your site, but not directly under your control. A few examples include: analytics, metrics, ads, A/B testing, trackers, etc. Their inclusion are often a double-edged sword.

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

## Web Workers

Partytown's philosophy is that the main thread should be dedicated to your code, and any scripts that are not required to be in the [critical path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path) should be moved to a web worker. Main thread performance is, without question, more important than web worker thread performance. See the [example page](https://partytown.builder.io/example/) and [test pages](https://partytown.builder.io/) for some live demos.

![FI6hOG3XEAwuh95](https://user-images.githubusercontent.com/452425/149344822-53154491-fd70-47ad-8c92-3ff5e4ccb4ec.jpeg)

> If you're looking to run _your_ app within a web worker, we recommend the [WorkerDom](https://github.com/ampproject/worker-dom) project.

## Docs

- [Introduction](https://github.com/BuilderIO/partytown/wiki)
  - [Third-Party Scripts](https://github.com/BuilderIO/partytown/wiki#negative-impacts-from-third-party-scripts)
  - [Goals](https://github.com/BuilderIO/partytown/wiki#goals)
  - [Web Workers](https://github.com/BuilderIO/partytown/wiki#web-workers)
  - [Trade-Offs](https://github.com/BuilderIO/partytown/wiki#trade-offs)
  - [Use-Cases](https://github.com/BuilderIO/partytown/wiki#use-cases)
- [How Does It Work?](https://github.com/BuilderIO/partytown/wiki/How-Does-It-Work%3F)
- [Getting Started](https://github.com/BuilderIO/partytown/wiki/Getting-Started)
  - [React](https://github.com/BuilderIO/partytown/wiki/Installation#react)
  - [Webpack](https://github.com/BuilderIO/partytown/wiki/Installation#webpack)
- [Configuration](https://github.com/BuilderIO/partytown/wiki/Configuration)
- [Forwarding Events and Triggers](https://github.com/BuilderIO/partytown/wiki/Forwarding-Events-and-Triggers)
- [Sandboxing](https://github.com/BuilderIO/partytown/wiki/Sandboxing)
- [Proxying Requests](https://github.com/BuilderIO/partytown/wiki/Proxying-Requests)
- [Integrating Services](https://github.com/BuilderIO/partytown/wiki/Integrating-Services)
- [Debugging](https://github.com/BuilderIO/partytown/wiki/Debugging)
- [Enabling Atomics](https://github.com/BuilderIO/partytown/wiki/Enabling-Atomics)
- [Distribution](https://github.com/BuilderIO/partytown/wiki/Distribution)
- [Browser Support](https://github.com/BuilderIO/partytown/wiki/Browser-Support)

## Community

- [Partytown Discord](https://discord.gg/hbuEtxdEZ3)
- [@QwikDev](https://twitter.com/QwikDev)
- [@builderio](https://twitter.com/builderio)
- [Local Development](https://github.com/BuilderIO/partytown/blob/main/DEVELOPER.md#local-development)

## Related Projects

- [Qwik](https://github.com/BuilderIO/qwik): An open-source framework designed for best possible time to interactive, by focusing on resumability of server-side-rendering of HTML, and fine-grained lazy-loading of code.
- [Mitosis](https://github.com/BuilderIO/mitosis): Write components once, run everywhere. Compiles to Vue, React, Solid, Angular, Svelte, and more.
- [Builder](https://github.com/BuilderIO): Drag and drop page builder and CMS for React, Vue, Angular, and more.

---

Made with ❤️ by [Builder.io](https://github.com/BuilderIO/)
