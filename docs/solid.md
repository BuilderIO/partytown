---
title: Solid
---

To setup Partytown in an Solid project take the following steps.

## Installation

Use your favorite package manager to install `@builder.io/partytown` dependency and
copy the Partytown files to the local filesystem using the Vite plugin.
Adopting [this strategy](https://partytown.builder.io/copy-library-files#vite) from the Partytown + Vite docs:

```js
// vite.config.js
...
import { join } from 'path';
import { partytownVite } from '@builder.io/partytown/utils';

export default defineConfig({
  plugins: [
    ...
    partytownVite({
      dest: join(__dirname, 'dist', '~partytown'),
    }),
  ],
  ...
});
```

## Script Setup

The snippet below shows you how to setup Partytown scripts in your `index.html` file. The first script tag takes the Partytown [configuration](/configuration). The second script tag references the Partytown JS file and the third file takes the third-party scripts to be loaded on the web-worker.

```html
<head>
  <!-- Partytown config properties -->
  <script>
    partytown = {
      ...
    };
  </script>

  <!-- Inlined Partytown Snippet -->
  <script src="/~partytown/debug/partytown.js"></script>
  <script type="text/partytown">
    console.log("New Partytown script.");
    console.log("Third-Party script goes here!");
  </script>
</head>
```
