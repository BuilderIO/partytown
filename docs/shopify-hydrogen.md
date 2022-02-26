---
title: Shopify Hydrogen
---

The [Shopify Hydrogen](https://hydrogen.shopify.dev/) setup is largely the same as the [React integration guide](/react), except it goes further into how to add to the framework's app root component.

## Install

```bash
npm install @builder.io/partytown
```

## Configure

The `<Partytown/>` component is imported from the `@builder.io/partytown/react` submodule. The [config properties](/configuration) are JSX props.

The following is an example of including the `<Partytown/>` component in a root [Shopify component](https://shopify.dev/). Notice the `<Partytown/>` component before the `<DefaultSeo/>` component.

```jsx
import { DefaultRoutes } from '@shopify/hydrogen';
import { Suspense } from 'react';

import DefaultSeo from './components/DefaultSeo.server';
import NotFound from './components/NotFound.server';
import AppClient from './App.client';
import LoadingFallback from './components/LoadingFallback';
import { Partytown } from '@builder.io/partytown/react';

export default function App({ log, pages, ...serverState }) {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <AppClient helmetContext={serverState.helmetContext}>
        <Partytown debug={true} forward={['dataLayer.push']} />
        <DefaultSeo />
        <DefaultRoutes pages={pages} serverState={serverState} log={log} fallback={<NotFound />} />
      </AppClient>
    </Suspense>
  );
}
```

The example above is setting the [forward](/forwarding-events) config for [Google Tag Manager](/google-tag-manager).

## Partytown Script

Add the `type="text/partytown"` [prop](/partytown-scripts) for each script that should run from a web worker. The example below is using the React specific way of inlining a script with [dangerouslySetInnerHTML](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml).

```jsx
<Partytown debug={true} forward={['dataLayer.push']} />
<script
  type="text/partytown"
  dangerouslySetInnerHTML={{
    __html: '// inlined third-party script',
  }}
/>
```

## Copy Library Files

Copy library files to `public/~partytown`. How the files are copied or served from your site is up to each site's setup. A `partytown copylib` CLI [copy task](/copy-library-files) has been provided for convenience which helps copy the Partytown library files to the public directory. Below is an example of creating a "partytown" NPM script which could run before the build:

```json
  "scripts": {
    "dev": "npm run partytown && vite",
    "build": "npm run partytown && yarn build:client && yarn build:server && yarn build:worker",
    "build:client": "vite build --outDir dist/client --manifest",
    "build:server": "vite build --outDir dist/server --ssr src/entry-server.jsx",
    "build:worker": "cross-env WORKER=true vite build --outDir dist/worker --ssr worker.js",
    "partytown": "partytown copylib public/~partytown"
  }
```
