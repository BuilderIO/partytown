---
title: Getting Started
description: Getting Started
---

Partytown is fairly different from most web development libraries in mainly what’s required for its setup and configuration. At the lowest level, Partytown can work with just vanilla HTML, meaning it doesn’t need to be a part of a build process, doesn’t need a bundler, doesn’t require a specific framework, etc. Because it can integrate with any HTML page, it also makes it much easier to then create wrapper components or plugins for almost any ecosystem, such as Shopify, Wordpress, Nextjs, Gatsby and much more.

What's different from most web development libraries is that Partytown does _not_ get bundled with your existing site's JavaScript. Instead it purposely wants to stay separate from your code so that it can run within a web worker, and allow your code to run on the main thread. If the two were bundled we've already lost the battle.

Below are the install steps:

1. [Install NPM package](/getting-started#user-content-install-npm-package)
1. [Add Partytown type attribute to Third-Party Scripts](/getting-started#user-content-add-partytown-type-attribute-to-third-party-scripts)
1. [Add Partytown snippet to the `<head>`](/getting-started#user-content-add-partytown-snippet-to-the-head)
1. [Copy Partytown library files](/getting-started#user-content-copy-partytown-library-files)

## Install NPM package

```
npm install @builder.io/partytown
```

## Add Partytown type attribute to Third-Party Scripts

Add the `type="text/partytown"` attribute to each individual third-party script to run from a web worker.

```diff
- <script>...</script>
+ <script type="text/partytown">...</script>
```

## Add Partytown snippet to the `<head>`

How the Partytown snippet script is added to the `<head>` is different for every website. While the script could be an external request, we recommend to inline the script instead since it's so small, and it's better for performance. If you're using React, we recommend the `<Partytown/>` [React component](#React).

You can find the `partytown.js` script within `@builder.io/partytown/lib`. See the [distribution](/distribution) docs for more info on the `@builder.io/partytown` package files.

### React

The React integration can be found in the `@builder.io/partytown/react` submodule. The following is an example of including the `<Partytown/>` component in a Nextjs page. Notice the `<Partytown/>` component is in the `<Head>`, and the example analytics script has the `type="text/partytown"` attribute.

```jsx
import Head from 'next/head';
import { Partytown } from '@builder.io/partytown/react';

const Home = () => {
  return (
    <>
      <Head>
        <title>My App</title>
        <Partytown />
        <script src="https://example.com/analytics.js" type="text/partytown"></script>
      </Head>
      <main>...</main>
    </>
  );
};

export default Home;
```

## Copy Partytown library files

The [@builder.io/partytown](https://www.npmjs.com/package/@builder.io/partytown) NPM package provides the static `lib` files that need to be served from your site. Since Partytown is using a service worker, these files must be served from the same origin as your site, and cannot be hosted from a CDN. Each site is different, and how the Partytown `lib` files are hosted depends on individual setup.

The `/~partytown/` directory should serve the static files found within [@builder.io/partytown/lib](https://unpkg.com/browse/@builder.io/partytown/lib/). The quickest way is to copy the `lib` directory into a public `/~partytown` directory within your static server. Another option would be to set up a copy task within the project's bundler, or create a build step.

You can also use the [lib config](/configuration) if your site must host these files from a directory other than the default `/~partytown/`.

### Copy Task Command

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

### Copy Task API

The same code that the `partytown copylib` task uses, is also exposed as an API and can be imported by any NodeJS script. Below is an example of importing the `@builder.io/partytown/utils` API and copying the lib files to the given directory. Both examples of an ESM import or CommonJS require should work:

```js
import { copyLibFiles } from 'builder.io/partytown/utils'; // ESM import
// const { copyLibFiles } = require('builder.io/partytown/utils'); // CommonJS require

async function myBuildTask() {
  await copyLibFiles('path/to/public/~partytown');
}
```

### Webpack

Below is an example of using [Webpack's copy plugin](https://webpack.js.org/plugins/copy-webpack-plugin/) to copy the source `lib` directory found in the [@builder.io/partytown](https://www.npmjs.com/package/@builder.io/partytown) package, to the `public/~partytown/` directory:

```js
const CopyPlugin = require('copy-webpack-plugin');
const partytown = require('@builder.io/partytown/util');

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
