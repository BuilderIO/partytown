---
title: Forwarding Events And Triggers
description: Forwarding Events And Triggers
---

Many third-party scripts add a global variable to `window` which user code calls in order to send data to the service. For example, Google Tag Manager uses a [Data Layer](https://developers.google.com/tag-manager/devguide) array, and by pushing data to the array, the data is then sent on to GTM Servers. Because we're moving third-party scripts to a web worker, the main thread needs to know which variables to patch on `window`, and when these services are called, the data is correctly forwarded to the web worker. This includes queuing any events that may have happened before Partytown has even finished initializing.

For example, Google Tag Manager adds the `dataLayer` array to `window`, and Facebook Pixel adds the `fbq` function. Below is some quick pseudo code of what they're doing:

```js
// Google Tag Manager
window.dataLayer = [];

// Facebook Events
window.fbq = function(){...};
```

Because GTM and Facebook Pixel objects are added immediately in the `<head>` by each service, then anywhere within the webpage, your code and their code, can safely call `dataLayer.push(...)` or `fbq(...)`.

However, since GTM and Facebook Pixel were actually loaded in the web worker, then we need to forward these calls. The `forward` config is used to set which `window` variables should be patched and forwarded on.

## Forward Config

The `forward` property is an array of strings, with each string representing a variable that should be patched on `window`. Below is a vanilla example of setting up the forwarding for [Google Tag Manager](https://developers.google.com/tag-manager/devguide) and [Facebook Pixel Events](https://www.facebook.com/business/help/952192354843755?id=1205376682832142).

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

Notice the forward configs are just strings, not actual objects. We're using strings here so we can easily serialize what service variable was called, along with the function argument values. When the web worker receives the information, it then knows how to correctly apply the call and arguments that were fired from the main thread.

### React Forward Property

Above is a low-level configuration, however, the `<Partytown/>` component found in `@builder.io/partytown/react` provides the `forward` property.

```jsx
<Partytown forward={['dataLayer.push', 'fbq']} />
```

Note that the React integration components, such as `<GoogleTagManager/>` and `<FacebookPixel/>`, will already add the forward configs to the Partytown library.

## Common Services

Partytown already comes with a few components for commonly used Services. Please see [Integrating Services](https://github.com/BuilderIO/partytown/wiki/Integrating-Services) before manually configuring the `forward` property.

| Service                                                                                                                    | Forward Config                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [Adobe Launch](https://experienceleague.adobe.com/docs/experience-platform/tags/client-side/satellite-object.html?lang=en) | `"_satellite.track"`                                                          |
| [Facebook Pixel](https://www.facebook.com/business/help/952192354843755?id=1205376682832142)                               | `"fbq"`                                                                       |
| [Freshpaint](https://documentation.freshpaint.io/)                                                                         | `"freshpaint.addPageviewProperties","freshpaint.identify","freshpaint.track"` |
| [Google Tag Manager](https://developers.google.com/tag-manager/quickstart)                                                 | `"dataLayer.push"`                                                            |
| [Hubspot Tracking](https://developers.hubspot.com/docs/api/events/tracking-code)                                           | `"_hsq.push"`                                                                 |
| [Intercom](https://developers.intercom.com/installing-intercom/docs/intercom-javascript)                                   | `"Intercom"`                                                                  |
| [Klaviyo](https://developers.klaviyo.com/en/docs/javascript-api)                                                           | `"_learnq.push"`                                                              |
| [TikTok Pixel](https://ads.tiktok.com/marketing_api/docs?rid=959icq5stjr&id=1701890973258754)                              | `"ttq.track","ttq.page","ttq.load"`                                           |
