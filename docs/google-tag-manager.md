---
title: Google Tag Manager
---

## Add the Google Tag Manager Script

- [Install Google Tag Manager for web pages](https://developers.google.com/tag-platform/tag-manager/web)

## Partytown Script

Set the script element's `type` attribute to `text/partytown`. For example:

```html
<script type="text/partytown">
  /* Insert GTM Script Here */
</script>
```

## Google Analtyics 4 (GA4)

When using Google Analytics, it's recommended to use [Google Analytics 4](https://support.google.com/analytics/answer/10089681?hl=en). Not only is GA4 Google's official recommendation, but it's also because the GA4 responses come with the correct CORS headers. Simply put, if you ensure you're using GA4, you will not have to [proxy](/proxying-requests) the requests to `www.google-analytics.com`.

## Forward Events

Google Tag Manager uses the [dataLayer](https://developers.google.com/tag-platform/tag-manager/web/datalayer) array to send events. In order for Partytown to forward the calls to `window.dataLayer.push({..})`, the forward config should add `"dataLayer.push"`. Please see [forwarding events and triggers](/forwarding-events) for more information.

## Example Config

```json
{
  "forward": ["dataLayer.push"]
}
```

Please see the [integration docs](/integrations) for framework specific configuration.
