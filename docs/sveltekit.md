---
title: SvelteKit
---

SvelteKit does not offer any built in integrations, so we will add Partytown manually.

1. Add the Partytown script to `src/routes/+layout.svelte`
2. Copy the Partytown files to the local filesystem using the Vite plugin
3. Optional: reverse-proxying scripts
4. Optional: `svelte-preprocess` configuration
5. Then adding 3rd party scripts
   
## 1. Add the Partytown script to `src/routes/+layout.svelte`

Adapting from [the HTML integration guide](https://partytown.builder.io/html)

```svelte
// src/routes/+layout.svelte

<script>
  import { partytownSnippet } from '@builder.io/partytown/integration'
</script>

<svelte:head>
  <!-- Config options -->
  <script>
    // Forward the necessary functions to the web worker layer
    partytown = {
      forward: ['dataLayer.push']
    }
  </script>

  {@html '<script>' + partytownSnippet() + '</script>'}
</svelte:head>
```

## 2. Copy the Partytown files to the local filesystem

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
    partytownVite({
      dest: join(process.cwd(), '.svelte-kit/output/client/~partytown')
    })
  ]
}

export default config
```

## 3. Optional: reverse-proxying scripts 

This will only be necessary depending on which scripts you are using. The implementation will vary depending on hosting platform. See [Partytown's recommended guides](https://partytown.builder.io/proxying-requests#reverse-proxy).

## 4. Optional: `svelte-preprocess` configuration

Most users will be using `vitePreprocess` and will not need to update their `svelte.config.js` file. However, if you're are using `svelte-preprocess`, you will need to set the `preserve` option:
```js
// svelte.config.js

const config = {
  preprocess: preprocess({
    preserve: ['partytown']
  })
  ...
}
```

## 5. Then adding 3rd party scripts

This is where we FINALLY use partytown to add those scripts (note `type="text/partytown"` below). This example shows Google Tag Manager. Putting it together with the previous changes, our `+layout.svelte` looks like:

```svelte
// src/routes/+layout.svelte

<script>
	import { partytownSnippet } from '@builder.io/partytown/integration'
</script>

<slot />

<svelte:head>
	<script>
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

Acknowledgements: credit belongs to monogram.io for [an earlier version of this guide](https://monogram.io/blog/add-partytown-to-svelte).
