---
title: HTML
---

At the lowest level, Partytown is not tied to one specific framework or build tool. Because of this, Partytown can be used in any webpage as long as the HTML is updated, and the [library scripts](/copy-library-files) are hosted from the origin.

While the `partytown.js` file _could_ be an external request, it's recommended to inline the script instead. How the Partytown snippet is inlined into the page depends on each site's setup and an [integration](/integrations) may already exist for your framework.

```html
<head>
  <script>
    /* Inlined Partytown Snippet */
  </script>
  <script type="text/partytown" src="https://example.com/analytics.js"></script>
</head>
```

One option to load the snippet is from the `partytownSnippet()` function, exported from the [@builder.io/partytown/integration](/distribution#builderiopartytownintegration) submodule.

```js
import { partytownSnippet } from '@builder.io/partytown/integration';

const snippetText = partytownSnippet();
```

## Configure

The [configuration](/configuration) should be added to `window` using the `partytown` global object.

Below is an HTML example of setting up the [forwarding](/forwarding-events) for [Google Tag Manager](/google-tag-manager). Note that the config is before the inlined partytown script.

```html
<head>
  <script>
    partytown = {
      forward: ['dataLayer.push'],
    };
  </script>
  <script>
    /* Inlined Partytown Snippet */
  </script>
</head>
```

## Partytown Script

Add the `type="text/partytown"` [attribute](/partytown-scripts) for each script that should run from a web worker.

```html
<script type="text/partytown">
  /* Inlined Third-Party Script */
</script>
```

## Copy Library Files

How the files are copied or served from your site is up to each site's setup. A `partytown copylib` CLI [copy task](/copy-library-files) has been provided for convenience which helps copy the Partytown library files to the public directory.
