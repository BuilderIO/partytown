// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  renderers: [
    // Enable the Preact renderer to support Preact JSX components.
    '@astrojs/renderer-preact',
  ],
  buildOptions: {
    site: 'https://partytown.builder.io',
  },
});
