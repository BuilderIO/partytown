---
title: Improving Performance With Web Workers
---

Even with a fast and highly tuned following all of today's best practices, it's all too common for your performance wins to be erased the moment third-party scripts are added. By third-party scripts we mean code that is embedded within your site, but not directly under your control. A few examples include: analytics, metrics, ads, A/B testing, trackers, etc. Their inclusion are often a double-edged sword.

Below is a summary of potential issues, referenced from [Loading Third-Party JavaScript](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript):

- Firing too many network requests to multiple servers. The more requests a site has to make, the longer it can take to load.
- Sending too much JavaScript which keeps the main thread busy. Too much JavaScript can block DOM construction, delaying how quickly pages can render.
- CPU-intensive script parsing and execution can delay user interaction and cause battery drain.
- Third-party scripts that were loaded without care can be a single-point of failure (SPOF).
- Insufficient HTTP caching, forcing resources to be fetched from the network often.
- The use of legacy APIs (e.g `document.write()`), which are known to be harmful to the user experience.
- Excessive DOM elements or expensive CSS selectors.
- Including multiple third-party embeds that can lead to multiple frameworks and libraries being pulled in several times, which exacerbates the performance issues.
- Third-party scripts also often use embed techniques that can block `window.onload`, even if the embed is using async or defer.
