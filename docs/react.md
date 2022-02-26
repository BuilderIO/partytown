---
title: React
---

The Partytown NPM package already comes with a React component, which is a thin wrapper to the Partytown snippet. This React component should be usable from most React/Preact projects.

## Install

```bash
npm install @builder.io/partytown
```

## Configure

The `<Partytown/>` component is imported from the `@builder.io/partytown/react` submodule. The [config properties](/configuration) are JSX props.

Below is an example of setting the `debug` config to `true`, and [forward](/forwarding-events) config for [Google Tag Manager](/google-tag-manager).

```jsx
import { Partytown } from '@builder.io/partytown/react';

export function Head() {
  return (
    <>
      <Partytown debug={true} forward={['dataLayer.push']} />
    </>
  );
}
```

## Partytown Script

Add the `type="text/partytown"` [prop](/partytown-scripts) for each script that should run from a web worker. The example below is using the React specific way of inlining a script with [dangerouslySetInnerHTML](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml).

```jsx
<script
  type="text/partytown"
  dangerouslySetInnerHTML={{
    __html: '/* Inlined Third-Party Script */',
  }}
/>
```

## Copy Library Files

Copy library files to `public/~partytown`. How the files are copied or served from your site is up to each site's setup. A `partytown copylib` CLI [copy task](/copy-library-files) has been provided for convenience which helps copy the Partytown library files to the public directory. Below is an example of creating a "partytown" NPM script which could run before the build:

```json
"scripts": {
  "partytown": "partytown copylib public/~partytown"
}
```
