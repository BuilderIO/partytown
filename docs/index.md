---
title: Introduction
description: Partytown - Run third-party scripts from a web worker
---

Partytown is a lazy-loaded library to help relocate resource intensive scripts into a [web worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API), and off of the [main thread](https://developer.mozilla.org/en-US/docs/Glossary/Main_thread). Its goal is to help speed up sites by dedicating the main thread to your code, and offloading third-party scripts to a web worker.

> Note: Partytown is still in beta and not guaranteed to work in every scenario. Please see our [FAQ](/faq) and [Trade-Off](/trade-offs) sections for more info.

Even with a fast and highly tuned website following all of today's best practices, it's all too common for your performance wins to be erased the moment third-party scripts are added. By third-party scripts we mean code that is embedded within your site, but not directly under your control. A few examples include: analytics, metrics, ads, A/B testing, trackers, etc.

Partytown is maintained by [Builder.io](https://www.builder.io/) and is currently in [Beta](https://www.builder.io/blog/partytown-is-now-in-beta).

- [Partytown, Google Slides Presentation](https://docs.google.com/presentation/d/10aKHUokby6hQydL_xuOtct4CPwAkgay5l0-FqgO8-3g/edit?usp=sharing)
- [Smashing Magazine: How Partytown Eliminates Website Bloat From Third-Party Scripts](https://www.smashingmagazine.com/2022/04/partytown-eliminates-website-bloat-third-party-apps/)

## Goals

We set out to solve this situation, so that apps of all sizes will be able to continue to use third-party scripts without the performance hit. Some of Partytown's goals include:

- Free up main thread resources to be used only for the primary web app execution.
- Sandbox third-party scripts and allow or deny their access to main thread APIs.
- Isolate long-running tasks within the web worker thread.
- Reduce layout thrashing coming from third-party scripts by batching DOM setters/getter into group updates.
- Throttle third-party scripts' access to the main thread.
- Allow third-party scripts to run exactly how they're coded and without any alterations.
- Read and write main thread DOM operations _synchronously_ from within a web worker, allowing scripts running from the web worker to execute as expected.

## Web Workers

Partytown's philosophy is that the main thread should be dedicated to your code, and any scripts that are not required to be in the [critical path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path) should be moved to a [web worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API). Main thread performance is, without question, more important than web worker thread performance. Please see the [test pages](/tests/) for some live demos.

![Without Partytown and With Partytown: Your code and third-party code compete for main thread resources](https://user-images.githubusercontent.com/452425/152363590-89d3b9a5-35c7-4c12-8f3e-c8b5ce4bb267.png)

## Negative Impacts from Third-Party Scripts

Below is a summary of potential issues after add third-party scripts, referenced from [Loading Third-Party JavaScript](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript):

- Firing too many network requests to multiple servers. The more requests a site has to make, the longer it can take to load.
- Sending too much JavaScript which keeps the main thread busy. Too much JavaScript can block DOM construction, delaying how quickly pages can render.
- CPU-intensive script parsing and execution can delay user interaction and cause battery drain.
- Third-party scripts that were loaded without care can be a single-point of failure (SPOF).
- Insufficient HTTP caching, forcing resources to be fetched from the network often.
- The use of legacy APIs (e.g `document.write()`), which are known to be harmful to the user experience.
- Excessive DOM elements or expensive CSS selectors.
- Including multiple third-party embeds that can lead to multiple frameworks and libraries being pulled in several times, which exacerbates the performance issues.
- Third-party scripts also often use embed techniques that can block `window.onload`, even if the embed is using async or defer.

## Use-Cases

While full webapps "can" run from within Partytown, it's actually best intended for code that doesn't need to be in the [critical rendering path](https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path). Most third-party scripts fall into this category, as they're not required for the first-paint. Additionally, the asynchronous nature of most third-party script works well with Partytown, as they can lazily receive user events and post data to their respective services.

Below are just a few examples of third-party scripts that might be a good candidate to run from within a web worker. The goal is to continue validating commonly used services to ensure Partytown has the correct API, but Partytown itself does not hardcode to any specific services. Help us test and contribute to this page in Github when you find good working scripts!

- [Google Tag Manager (GTM)](https://marketingplatform.google.com/about/tag-manager/)
- [Google Analytics (GA)](https://analytics.google.com/)
- [Facebook Pixel](https://www.facebook.com/business/learn/facebook-ads-pixel)
- [Mixpanel](https://mixpanel.com/)
- [Hubspot](https://www.hubspot.com/)
- [Segment](https://segment.com/)
- [Amplitude](https://amplitude.com/)

## "Ready to Party" Plugins / Libraries

We try and keep a list of all the plugins and libraries that we know of that works out-of-the-box in Partytown, but we would love your help as plugin & library authors and contributors to keep this list growing.

We have [some documentation](https://github.com/BuilderIO/partytown/blob/main/DEVELOPER.md#plugin-authors--developers) on how you could create and check-in an integration test that shows how your library / plugin works on Partytown. And if it works, then we would love to have the configuration needed (if any) on our [Common Services page](/common-services)

## Articles

- <a href="https://www.smashingmagazine.com/2022/04/partytown-eliminates-website-bloat-third-party-apps/" target="_blank" rel="noopener">Smashing Magazine: How Partytown Eliminates Website Bloat From Third-Party Scripts</a>
- <a href="https://dev.to/adamdbradley/introducing-partytown-run-third-party-scripts-from-a-web-worker-2cnp" target="_blank" rel="noopener">Introducing Partytown: Run Third-Party Scripts From a Web Worker</a>
- <a href="https://dev.to/adamdbradley/how-partytown-s-sync-communication-works-4244" target="_blank" rel="noopener">How Partytown's Sync Communication Works</a>
- <a href="https://www.builder.io/blog/how-we-cut-99-percent-js-with-qwik-and-partytown" target="_blank" rel="noopener">How we cut 99% of our JavaScript with Qwik + Partytown</a>
- <a href="https://www.builder.io/blog/partytown-is-now-in-beta" target="_blank" rel="noopener">Partytown is now in Beta</a>
- <a href="https://www.patterns.dev/posts/third-party/" target="_blank" rel="noopener">Patterns: Optimize loading third-parties</a>
