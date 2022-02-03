---
title: Script Updates
description: Script Updates
---

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
