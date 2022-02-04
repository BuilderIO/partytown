---
title: Common Services
---

Partytown is built with the goal that any third-party script can be ran from within it. At the lowest level, any script can add the `type="text/partytown"` attribute to have it executed from a web worker.

Below is a list of commonly used [forward configs](/forwarding-events) and [proxied domains](/proxying-requests).

| Service                                                                                                                    | Forward Config                                                                | Proxy Domain                                        |
| -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | --------------------------------------------------- |
| [Adobe Launch](https://experienceleague.adobe.com/docs/experience-platform/tags/client-side/satellite-object.html?lang=en) | "\_satellite.track"                                                           |                                                     |
| [Facebook (Meta) Pixel](/facebook-pixel)                                                                                   | "fbq"                                                                         | "connect.facebook.net"                              |
| [Freshpaint](https://documentation.freshpaint.io/)                                                                         | "freshpaint.addPageviewProperties", "freshpaint.identify", "freshpaint.track" |                                                     |
| [Google Tag Manager](/google-tag-manager)                                                                                  | "dataLayer.push"                                                              |                                                     |
| [Hubspot Tracking](https://developers.hubspot.com/docs/api/events/tracking-code)                                           | "\_hsq.push"                                                                  |                                                     |
| [Intercom](https://developers.intercom.com/installing-intercom/docs/intercom-javascript)                                   | "Intercom"                                                                    |                                                     |
| [Klaviyo](https://developers.klaviyo.com/en/docs/javascript-api)                                                           | "\_learnq.push"                                                               | "static.klaviyo.com", "static-tracking.klaviyo.com" |
| [TikTok Pixel](https://ads.tiktok.com/marketing_api/docs?rid=959icq5stjr&id=1701890973258754)                              | "ttq.track", "ttq.page", "ttq.load"                                           |                                                     |

If you would like to add to this list, please [edit this doc](https://github.com/BuilderIO/partytown/edit/main/docs/common-services.md).
