---
title: Distribution
---

Partytown is distributed from [@builder.io/partytown](https://www.npmjs.com/package/@builder.io/partytown) using NPM. Within the distribution there are a few directories and submodules, each with their own purpose.

```bash
@builder.io/partytown/
├── integration/
├── lib/
├── react/
├── services/
└── utils/
```

## `@builder.io/partytown/lib`

The `lib` directory contains the static files that should be hosted from the same [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin) as the website. Hosting from the same origin is a requirement of the [service worker scope](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/scope). The `lib` static files are minified and meant for production use.

```bash
@builder.io/partytown/lib/
├── partytown-atomics.js
├── partytown-media.js
├── partytown-sw.js
└── partytown.js
```

The `partyown.js` file must be in the `<head>` before all other third-party scripts, and should _not_ have the `async` or `defer` attributes. Because the script must be executed immediately, and since it's such a small file, it's always preferred to inline the `partytown.js` script content, rather than it being an additional http request.

### `lib/debug/`

The `lib/debug` directory has the same purpose as the `lib`, but instead will console log more information and the files themselves are not minified. Additionally, you'll notice there are more debug files than the production lib files, and that's because the production lib files inline many scripts. For example, the web worker script is inlined, rather than being a separate request.

The `lib/debug` files are not meant to be used in production. See the [Partytown Configuration](/configuration) docs on how to enable debug mode.

```bash
@builder.io/partytown/lib/debug/
├── partytown-atomics.js
├── partytown-media.js
├── partytown-sandbox-sw.js
├── partytown-sw.js
├── partytown-ww-atomics.js
├── partytown-ww-sw.js
└── partytown.js
```

## `@builder.io/partytown/integration`

The `integration` submodule provides functions that can be used for integrations.

| Export             | Description                                                                                                                             |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| partytownSnippet() | Function that returns the Partytown snippet as a string which can be used as the innerHTML of the inlined Partytown script in the head. |
| SCRIPT_TYPE        | The value for the script type attribute: `text/partytown`                                                                               |

```js
import { partytownSnippet } from '@builder.io/partytown/integration';

const snippetText = partytownSnippet();
```

## `@builder.io/partytown/react`

The `react` submodule is where you'll find the React specific components, which is just a wrapper around the `partytown.js` snippet code. Please see the [React](/react) docs for more information.

```js
import { Partytown } from '@builder.io/partytown/react';

export function Head() {
  return (
    <>
      <Partytown />
    </>
  );
}
```

## `@builder.io/partytown/services`

The `services` submodule provides some of the commonly used [forward events](/forwarding-events), such as Google Tag Manager or Facebook Pixel. Please see the [Common Services](/common-services) docs for more informaiton.

## `@builder.io/partytown/utils`

The `utils` submodule provides some convenience utilities, such as the the [Copy Task CLI and API](/copy-library-files).

| Export                | Description                                      |
| --------------------- | ------------------------------------------------ |
| copyLibFiles(destDir) | Async copy the `lib` directory to the `destDir`. |
| libDirPath()          | Returns an absolute path to the `lib` directory. |
| partytownRollup()     | [Rollup plugin](/copy-library-files#rollup).     |
| partytownVite()       | [Vite plugin](/copy-library-files#vite).         |
