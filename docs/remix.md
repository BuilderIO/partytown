---
title: Remix
---

The Remix setup is largely the same as the [React integration guide](/react), except it goes further into how to add to the [Remix](https://remix.run/) framework's app root component.

## Install

```bash
npm install @builder.io/partytown
```

## Configure

The `<Partytown/>` component is imported from the `@builder.io/partytown/react` submodule. The [config properties](/configuration) are JSX props.

The following is an example of including the `<Partytown/>` component in the app's root component. Notice the `<Partytown/>` component is in the `<head>` and before the `<Meta/>` component. The example below is setting the [forward](/forwarding-events) config for [Google Tag Manager](/google-tag-manager).

```jsx
import { Partytown } from '@builder.io/partytown/react';
import { Links, Meta, Outlet } from 'remix';

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Partytown debug={true} forward={['dataLayer.push']} />
        <Meta />
        <Links />
      </head>
      <body>...</body>
    </html>
  );
}
```

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
  "build": "npm run partytown && cross-env NODE_ENV=production remix build",
  "partytown": "partytown copylib public/~partytown"
}
```
