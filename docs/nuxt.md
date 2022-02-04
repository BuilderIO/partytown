---
title: Nuxt
---

There is a first-class [Nuxt integration for partytown](https://github.com/nuxt-community/partytown-module).

1. Add `@nuxtjs/partytown` dependency to your project

   ```bash
   yarn add @nuxtjs/partytown # or npm install @nuxtjs/partytown
   ```

2. Add `@nuxtjs/partytown` to the `modules` section of `nuxt.config.ts`

   ```js
   import { defineNuxtConfig } from 'nuxt3';

   export default defineNuxtConfig({
     modules: ['@nuxtjs/partytown'],
     partytown: {
       /* any partytown-specific configuration */
     },
   });
   ```

3. Add `type: 'text/partytown'` attribute to any scripts you want to be handled by partytown.

   ```vue
   <template>
     <div>
       <Script type="text/partytown" src="https://example.com/analytics.js" />
     </div>
   </template>
   ```
