---
title: Nuxt
---

There is a first-class [Nuxt integration for partytown](https://github.com/nuxt-community/partytown-module).

## Install

Add `@nuxtjs/partytown` dependency to your project.

```bash
yarn add --dev @nuxtjs/partytown # or npm install --save-dev @nuxtjs/partytown
```

## Configure

Add `@nuxtjs/partytown` to the `modules` section of `nuxt.config.ts`. Use the `partytown` property for the [configuration](/configuration).

```js
import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  modules: ['@nuxtjs/partytown'],
  partytown: {
    /* any partytown-specific configuration */
  },
});
```

## Partytown Script

Add `type: 'text/partytown'` [attribute](/partytown-scripts) to any scripts you want to be handled by partytown.

```html
<template>
  <div>
    <Script type="text/partytown" src="https://example.com/analytics.js" />
  </div>
</template>
```

Note that the [Nuxt Partytown](https://github.com/nuxt-community/partytown-module) module already handles copying the library files to the correct location.
