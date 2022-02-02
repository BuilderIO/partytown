---
title: Distribution
description: Distribution
---

Partytown is distributed from [@builder.io/partytown](https://www.npmjs.com/package/@builder.io/partytown) using NPM. Within the distribution there are a few directories, each with their own purpose.

```bash
@builder.io/partytown/
├── integration/
├── lib/
├── react/
└── utils/
```

## `lib/`

The `lib` directory contains the static files that should be hosted from the same [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin) as the website. Hosting from the same origin is a requirement of the [service worker scope](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/scope). The `lib` static files are minified and meant for production use.

```bash
@builder.io/partytown/lib/
├── partytown-sandbox-atomics.html
├── partytown-sw.js
└── partytown.js
```

The `partyown.js` file must be in the `<head>` before all other third-party scripts, and should _not_ have the `async` or `defer` attributes. Because the script must be executed immediately, and since it's such a small file, it's always preferred to inline the `partytown.js` script content, rather than it being an additional http request.

## `lib/debug/`

The `lib/debug` directory has the same purpose as the `lib`, but instead will console log more information and files themselves are not minified. Additionally, you'll notice there are more debug files than the production lib files, and that's because the lib files inline many scripts. For example, the web worker script is inlined, rather than being a separate request.

The `lib/debug` files are not meant to be used in production. See the [Partytown Configuration](/configuration) docs on how to enable debug mode.

```bash
@builder.io/partytown/lib/debug/
├── partytown-sandbox-atomics.html
├── partytown-sandbox-atomics.js
├── partytown-sandbox-sw.js
├── partytown-sw.js
├── partytown-ww-atomics.js
├── partytown-ww-sw.js
└── partytown.js
```
