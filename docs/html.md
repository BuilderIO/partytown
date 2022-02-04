---
title: HTML
---

At the lowest level, Partytown is not tied to one specific framework or build tool. Because of this, Partytown can be used in any webpage as long as the HTML is updated, and the [library scripts](/copy-library-files) are hosted from the origin.

While the `partytown.js` file _could_ be an external request, it's recommended to inline the script instead.

```html
<html>
  <head>
    <title>My Site</title>
    <script>
      <!-- inline partytown.js here -->
    </script>
    <script type="text/partytown" src="https://example.com/analytics.js"></script>
  </head>
</html>
```

## Forward Config

The [forward config](/forwarding-events) is an array of strings, with each string representing a variable that should be patched on `window`. Below is a vanilla example of setting up the forwarding for [Google Tag Manager](https://developers.google.com/tag-manager/devguide) and [Facebook Pixel Events](https://www.facebook.com/business/help/952192354843755?id=1205376682832142).

```html
<script>
  partytown = {
    forward: ['dataLayer.push', 'fbq'],
  };
</script>
<script>
  /* Inlined Partytown Snippet */
</script>
```
