---
title: Copy Library Files
---

The [@builder.io/partytown](https://www.npmjs.com/package/@builder.io/partytown) NPM package provides the static `lib` files that need to be served from your site. Since Partytown is using a service worker, these files must be served from the same origin as your site, and cannot be hosted from a CDN. Each site is different, and how the Partytown `lib` files are hosted depends on individual setup.

The `/~partytown/` directory should serve the static files found within [@builder.io/partytown/lib](/distribution). The quickest way is to copy the `lib` directory into a public `/~partytown` directory within your static server. Another option would be to set up a copy task within the project's bundler, or create a build step.

You can also use the [lib config](/configuration) if your site must host these files from a directory other than the default `/~partytown/`. Please see the [integration guides](/integrations) for more info on copying library files.

## Copy Task Command

For convenience, the Partytown CLI provides a `copylib` task. The last argument should be the directory where the Partytown lib files should be copied too. In the example below, the lib files are copying to the directory `public/~partytown`, relative to the current working directory:

```bash
partytown copylib public/~partytown
```

This command can be used before a build script. Below is an example of copying the Partytown lib files before a Nextjs build command, using npm scripts:

```json
{
  "scripts": {
    "build": "npm run partytown && next build",
    "partytown": "partytown copylib public/~partytown"
  }
}
```

## Copy Task API

The same code that the `partytown copylib` CLI task uses, is also exposed as an API and can be imported by any NodeJS script. Below is an example of importing the `@builder.io/partytown/utils` API and copying the lib files to the given directory. Both examples of an ESM import or CommonJS require should work.

```js
import { copyLibFiles } from '@builder.io/partytown/utils'; // ESM
// const { copyLibFiles } = require('@builder.io/partytown/utils'); // CommonJS

async function myBuildTask() {
  await copyLibFiles('path/to/public/~partytown');
}
```

## Rollup

> Available as of Partytown 0.3.6

Import the `partytownRollup` plugin from `@builder.io/partytown/utils` into your `rollup.config.js` config file. Next, add `partytownRollup(opts)` to the `plugins` [option](https://rollupjs.org/guide/en/#using-plugins).

The Rollup plugin will copy Partytown `lib` directory to the given destination, which must be an absolute file path. The copying will happen at the time of the `writeBundle()` hook.

Below is an example of using a [Rollup config](https://rollupjs.org/guide/en/#using-plugins) to copy the Partytown `lib` to a `dist` build directory:

```js
// rollup.config.js
import path from 'path';
import { partytownRollup } from '@builder.io/partytown/utils';

export default {
  plugins: [
    partytownRollup({
      dest: path.join(__dirname, 'dist', '~partytown'),
    }),
  ],
};
```

## Vite

> Available as of Partytown 0.3.6

Import the `partytownVite` plugin from `@builder.io/partytown/utils` into your `vite.config.js` config file. Next, add `partytownVite(opts)` to the `plugins` [option](https://vitejs.dev/config/#plugins).

The Vite plugin will copy Partytown `lib` directory to the given destination, which must be an absolute file path. The copying will happen at the time of the `writeBundle()` hook. When in dev mode, the Partytown lib files will be served using the Vite Dev Server.

Below is an example of using a [Vite config](https://vitejs.dev/config/) to copy the Partytown `lib` to a `dist` build directory:

```js
// vite.config.js
import path from 'path';
import { partytownVite } from '@builder.io/partytown/utils';

export default ({ command }) => ({
  build: {
    plugins: [
      partytownVite({
        dest: path.join(__dirname, 'dist', '~partytown'),
      }),
    ],
  },
});
```

## Webpack

Below is an example of using [Webpack's copy plugin](https://webpack.js.org/plugins/copy-webpack-plugin/) to copy the source `lib` directory found in the [@builder.io/partytown](https://www.npmjs.com/package/@builder.io/partytown) package, to the `public/~partytown/` directory:

```js
// webpack.config.js
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const partytown = require('@builder.io/partytown/utils');

module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: partytown.libDirPath(),
          to: path.join(__dirname, 'public', '~partytown'),
        },
      ],
    }),
  ],
};
```
## Laravel Mix

Below is an example of using [Mix's copy()](https://laravel-mix.com/docs/6.0/copying-files/) to copy the source `lib` directory found in the [@builder.io/partytown](https://www.npmjs.com/package/@builder.io/partytown) package, to the `public/~partytown/` directory:

```js
// webpack.mix.js
const mix = require('laravel-mix');
const partytown = require('@builder.io/partytown/utils');

mix.copy(partytown.libDirPath(), 'public/~partytown');
```
