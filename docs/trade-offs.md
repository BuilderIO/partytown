---
title: Trade-Offs
description: Trade-Offs
---

Nothing is without trade-offs. Using Partytown to orchestrate third-party scripts vs adding them to your pages has the following considerations to keep in mind:

- Partytown library must be hosted from the same origin as the HTML document (it can however, execute third-party scripts from another origin, such as a CDN).
- DOM operations within the worker are purposely throttled, slowing down execution compared to the same code running on the main thread. (We also see this as a feature.)
- A total of three threads are used: Main Thread, Web Worker, Service Worker (in the future we may explore [Atomics](#what-about-atomics) which would bring it down to two).
- Not ideal for scripts that are required to block the main document (blocking is bad).
- `event.preventDefault()` will have no effect, similar to [passive event listeners](https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md).
- Trade-offs with intercepted network requests:
  - Many service worker network requests may show up in the network tab.
  - Partytown service worker requests are intercepted by the client, and transfer `0 bytes` over the network.
  - [Lighthouse scores](https://web.dev/performance-scoring/) are unaffected by the intercepted requests (any work on thread other than `main` has no impact on Lighthouse).
