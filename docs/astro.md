---
title: Astro
---

The easiest way to add Partytown to a [Astro](https://astro.build/) site is adding the snippet to a `<script>` in the `<head>` using the `partytownSnippet(config)` function.

1. Install `@builder.io/partytown`

```bash
npm install @builder.io/partytown
```

2. Import the `@builder.io/partytown/integration` submodule into the header of the `.astro` file, and create the snippet HTML with the `partytownSnippet(config)` function.

```tsx
---
import { partytownSnippet } from '@builder.io/partytown/integration';
const partytownSnippetHtml = partytownSnippet({
  debug: true
});
---
```

3. Add the scripts to the body of the same `.astro` file. (Note that the `set:html` attribute is current available in `astro@next`.)

```html
<!-- Partytown Script -->
<script set:html="{partytownSnippetHtml}"></script>

<!-- Example third-partyt script -->
<script type="text/partytown">
  // inlined third-party script
</script>
```
