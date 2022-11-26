---
title: SvelteKit
---

SvelteKit does not offer any built in integrations, so we will add Partytown manually. Credit belongs to [monogram.io](https://monogram.io/blog/add-partytown-to-svelte) for this guide.

1. Add the Partytown script to `src/routes/__layout.svelte`
2. Copy the Partytown files to the local filesystem using the Vite plugin
3. Reverse-Proxying scripts 
4. Then adding 3rd party scripts.

## 1. Add the Partytown script to `src/routes/__layout.svelte`

```svelte
// src/routes/__layout.svelte

<script>
  import { onMount } from 'svelte'
  import { partytownSnippet } from '@builder.io/partytown/integration'

  // Add the Partytown script to the DOM head
  let scriptEl
  onMount(
    () => {
      if (scriptEl) {
        scriptEl.textContent = partytownSnippet()
      }
    }
  )
</script>

<svelte:head>
  <!-- Config options -->
  <script>
    // Forward the necessary functions to the web worker layer
    partytown = {
      forward: ['dataLayer.push']
    }
  </script>

  <!-- `partytownSnippet` is inserted here -->
  <script bind:this={scriptEl}></script>
</svelte:head>
```

## 2. Copy the Partytown files to the local filesystem using the Vite plugin

```svelte
// vite.config.js

import { join } from 'path'
import { sveltekit } from '@sveltejs/kit/vite'
import { partytownVite } from '@builder.io/partytown/utils'

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    sveltekit(),
    partytownVite({
      // `dest` specifies where files are copied to in production
      dest: join(process.cwd(), 'static', '~partytown')
    })
  ]
}

export default config
```

## 3. Reverse-Proxying scripts 

```svelte
// src/routes/__layout.svelte

<script>
  partytown = {
    forward: ['dataLayer.push'],
    resolveUrl: (url) => {
      const siteUrl = 'https://monogram.io/proxytown'

      if (url.hostname === 'www.googletagmanager.com') {
        const proxyUrl = new URL(`${siteUrl}/gtm`)

        const gtmId = new URL(url).searchParams.get('id')
        gtmId && proxyUrl.searchParams.append('id', gtmId)

        return proxyUrl
      } else if (url.hostname === 'www.google-analytics.com') {
        const proxyUrl = new URL(`${siteUrl}/ga`)

        return proxyUrl
      }

      return url
    }
  }
</script>
```

## 4. Then adding 3rd party scripts.

```js
// svelte.config.js

const config = {
  preprocess: [
    preprocess({
      preserve: ['partytown']
    })
  ],
  ...
}
```

and

```svelte
// src/routes/__layout.svelte

<svelte:head>
  <script>
    // Config options
    partytown = {
      forward: ['dataLayer.push'],
      resolveUrl: (url) => {
        const siteUrl = 'https://example.com/proxytown'

        if (url.hostname === 'www.googletagmanager.com') {
          const proxyUrl = new URL(`${siteUrl}/gtm`)

          const gtmId = new URL(url).searchParams.get('id')
          gtmId && proxyUrl.searchParams.append('id', gtmId)

          return proxyUrl
        } else if (
          url.hostname === 'www.google-analytics.com'
        ) {
          const proxyUrl = new URL(`${siteUrl}/ga`)

          return proxyUrl
        }

        return url
      }
    }
  </script>
  <!-- Insert `partytownSnippet` here -->
  <script bind:this={scriptEl}></script>

  <!-- GTM script + config -->
  <script
    type="text/partytown"
    src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID-HERE"></script>
  <script type="text/partytown">
    window.dataLayer = window.dataLayer || []

    function gtag() {
      dataLayer.push(arguments)
    }

    gtag('js', new Date())
    gtag('config', 'YOUR-ID-HERE', {
      page_path: window.location.pathname
    })
  </script>
</svelte:head>
```
