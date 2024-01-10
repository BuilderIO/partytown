---
title: SvelteKit
---

SvelteKit uses Vite to build, so we can use `partytownVite`.

1. Copy the Partytown files to the local filesystem using the Vite plugin
2. Add the Partytown script to `src/routes/+layout.svelte`
3. Then add 3rd party scripts
4. Optional: reverse-proxying scripts

## 1. Copy the Partytown files to the local filesystem using the Vite plugin

Adopting [this strategy](https://partytown.builder.io/copy-library-files#vite) from the Partytown + Vite docs:

```js
// vite.config.js

import { join } from 'path'
import { sveltekit } from '@sveltejs/kit/vite'
import { partytownVite } from '@builder.io/partytown/utils'

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    sveltekit(),
    partytownVite()
  ]
}

export default config
```

## 2. Add the Partytown script to `src/routes/+layout.svelte`

Adapting from [the HTML integration guide](https://partytown.builder.io/html)

```svelte
// src/routes/+layout.svelte

<script>
  import { partytownSnippet } from '@builder.io/partytown/integration'
</script>

<svelte:head>
  {@html '<script>' + partytownSnippet() + '</script>'}
</svelte:head>
```

## 3. Then add 3rd party scripts

This is where we use partytown to add those scripts (note `type="text/partytown"` below). This example shows Google Tag Manager. Putting it together with the previous changes, our `+layout.svelte` looks like:

```svelte
// src/routes/+layout.svelte

<script>
	import { partytownSnippet } from '@builder.io/partytown/integration'
</script>

<slot />

<svelte:head>
	<script>
		// Forward the necessary functions to the web worker layer
		partytown = {
			forward: ['dataLayer.push']
		};
	</script>

	{@html '<script>' + partytownSnippet() + '</script>'}

	<script type="text/partytown" src="https://www.googletagmanager.com/gtag/js?id=G-ZX7H2KPXNZ"></script>
	<script type="text/partytown">
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', 'G-ZX7H2KPXNZ');
	</script>
</svelte:head>
```

## 4. Optional: reverse-proxying scripts 

This will only be necessary depending on which scripts you are using. The implementation will vary depending on hosting platform. See [Partytown's recommended guides](https://partytown.builder.io/proxying-requests#reverse-proxy).


Acknowledgements: credit belongs to monogram.io for [an earlier version of this guide](https://monogram.io/blog/add-partytown-to-svelte).
