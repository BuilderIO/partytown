---
title: Astro
---

There is a first-class [Astro integration for partytown](https://github.com/withastro/astro/tree/main/packages/integrations/partytown).

## Automatic Setup

Use the `astro add` command to automatically configure your project and install necessary dependencies.

```bash
yarn astro add partytown # or npx astro add partytown
```

Skip down to [Partytown Script](#partytown-script) for usage instructions.

## Install

> Below are the instructions if you are not using the [Automatic Setup](#automatic-setup).

Add `@astrojs/partytown` dependency to your project.

```bash
yarn add @astrojs/partytown # or npm install @astrojs/partytown
```

## Manual Configuration

> Below are the instructions if you are not using the [Automatic Setup](#automatic-setup).

Add `@astrojs/partytown` to the `integrations` section of `astro.config.mjs`.

```js
import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown';

export default defineConfig({
  integrations: [partytown()],
});
```

## Partytown Script

Add `type: 'text/partytown'` [attribute](/partytown-scripts) to any scripts you want to be handled by partytown.

```html
<script type="text/partytown" src="https://example.com/analytics.js"></script>
```

Note that the [Astro Partytown](https://github.com/withastro/astro/tree/main/packages/integrations/partytown) integration already handles copying the library files to the correct location.
