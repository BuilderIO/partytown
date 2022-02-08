---
title: Astro
---

The easiest way to add Partytown to an [Astro](https://astro.build/) site is adding the snippet to a `<script>` in the `<head>` using the `partytownSnippet(config)` function.

## Install

```bash
npm install @builder.io/partytown
```

## Configure

Import the `@builder.io/partytown/integration` submodule into the header of the `.astro` file, and create the snippet HTML with the `partytownSnippet(config)` function. The optional Partytown [configuration](/configuration) is the first argument.

```tsx
---
import { partytownSnippet } from '@builder.io/partytown/integration';
const partytownSnippetHtml = partytownSnippet({
  debug: true,
  forward: ['dataLayer.push']
});
---
```

## Partytown Script

Add the scripts to the body of the same `.astro` file. (Note that the `set:html` attribute is current available in `astro@next`.)

Add the `type="text/partytown"` [attribute](/partytown-scripts) for each script that should run from a web worker.

```jsx
<script set:html={partytownSnippetHtml}></script>

<script type="text/partytown">
  /* Inlined Third-Party Script */
</script>
```

## Copy Library Files

Copy library files to `public/~partytown`. How the files are copied or served from your site is up each site's setup. A `partytown copylib` CLI [copy task](/copy-library-files) has been provided for convenience which helps copy the Partytown library files to the public directory. Below is an example of creating a "partytown" NPM script which runs before the `astro build` command:

```json
"scripts": {
  "build": "npm run partytown && astro build",
  "partytown": "partytown copylib public/~partytown"
}
```
