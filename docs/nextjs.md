---
title: NextJS
---

The Next.js setup is largely the same as the [React integration guide](/react), except it goes further into how to add to the [NextJS](https://nextjs.org/) framework's `<Head/>` component.

## Install

```bash
npm install @builder.io/partytown
```

## Configure

The `<Partytown/>` component is imported from the `@builder.io/partytown/react` submodule. The [config properties](/configuration) are JSX props.

The following is an example of including the `<Partytown/>` component in a Nextjs page. Notice the `<Partytown/>` component is in the `<Head>`, and the example analytics script has the `type="text/partytown"` attribute.

```jsx
import Head from 'next/head';
import { Partytown } from '@builder.io/partytown/react';

const Home = () => {
  return (
    <>
      <Head>
        <title>My App</title>
        <Partytown debug={true} forward={['dataLayer.push']} />
        <script src="https://example.com/analytics.js" type="text/partytown" />
      </Head>
      <main>...</main>
    </>
  );
};

export default Home;
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
  "build": "npm run partytown && next build",
  "partytown": "partytown copylib public/~partytown"
}
```
