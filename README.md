# Partytown 🎉

<img width="838" alt="Partytown github fit 2x" src="https://user-images.githubusercontent.com/452425/134568488-f36f4640-9ada-4a78-a969-2b8315cf7f47.png">

- [Introducing Partytown: Run Third-Party Scripts From a Web Worker](https://dev.to/adamdbradley/introducing-partytown-run-third-party-scripts-from-a-web-worker-2cnp)
- [How Partytown's Sync Communication Works](https://dev.to/adamdbradley/how-partytown-s-sync-communication-works-4244)
- [How we cut 99% of our JavaScript with Qwik + Partytown](https://www.builder.io/blog/how-we-cut-99-percent-js-with-qwik-and-partytown)
- [Partytown is now in Beta](https://www.builder.io/blog/partytown-is-now-in-beta)

> A fun location for your third-party scripts to hang out

Partytown is a lazy-loaded library to help relocate resource intensive scripts into a [web worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API), and off of the [main thread](https://developer.mozilla.org/en-US/docs/Glossary/Main_thread). Its goal is to help speed up sites by dedicating the main thread to your code, and offloading third-party scripts to a web worker.

The philosophy is that the main thread should be dedicated to your code, and any scripts that are not required to be in the [critical path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path) should be moved to a web worker. Main thread performance is, without question, more important than web worker thread performance. See the [test pages](https://partytown.builder.io/) for some live demos.

[Getting Started](https://github.com/BuilderIO/partytown/wiki/Getting-Started)

![Without Partytown and With Partytown: Your code and third-party code compete for main thread resources](https://user-images.githubusercontent.com/452425/149344822-53154491-fd70-47ad-8c92-3ff5e4ccb4ec.jpeg)

## Docs

- [Introduction](https://github.com/BuilderIO/partytown/wiki)
  - [Third-Party Scripts](https://github.com/BuilderIO/partytown/wiki#negative-impacts-from-third-party-scripts)
  - [Goals](https://github.com/BuilderIO/partytown/wiki#goals)
  - [Web Workers](https://github.com/BuilderIO/partytown/wiki#web-workers)
  - [Trade-Offs](https://github.com/BuilderIO/partytown/wiki#trade-offs)
  - [Use-Cases](https://github.com/BuilderIO/partytown/wiki#use-cases)
- [How Does It Work?](https://github.com/BuilderIO/partytown/wiki/How-Does-It-Work%3F)
- [Getting Started](https://github.com/BuilderIO/partytown/wiki/Getting-Started)
  - [React](https://github.com/BuilderIO/partytown/wiki/Getting-Started#react)
  - [Webpack](https://github.com/BuilderIO/partytown/wiki/Getting-Started#webpack)
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
