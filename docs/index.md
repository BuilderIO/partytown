---
title: Introduction
description: Partytown - Run third-party scripts from a web worker
---

Partytown is a lazy-loaded library to help relocate resource intensive scripts into a [web worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API), and off of the [main thread](https://developer.mozilla.org/en-US/docs/Glossary/Main_thread). Its goal is to help speed up sites by dedicating the main thread to your code, and offloading third-party scripts to a web worker.

## Goals

We set out to solve this situation, so that apps of all sizes will be able to continue to use third-party scripts without the performance hit. Some of Partytown's goals include:

- Free up main thread resources to be used only for the primary web app execution.
- Sandbox third-party scripts and allow or deny their access main thread APIs.
- Isolate long-running tasks within the web worker thread.
- Reduce layout thrashing coming from third-party scripts by batching DOM setters/getter into group updates.
- Throttle third-party scripts' access to the main thread.
- Allow third-party scripts to run exactly how they're coded and without any alterations.
- Read and write main thread DOM operations _synchronously_ from within a web worker, allowing scripts running from the web worker to execute as expected.

## Web Workers

Partytown's philosophy is that the main thread should be dedicated to your code, and any scripts that are not required to be in the [critical path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path) should be moved to a web worker. Main thread performance is, without question, more important than web worker thread performance. See the [test pages](/tests/) for some live demos.

![Without Partytown and With Partytown: Your code and third-party code compete for main thread resources](https://user-images.githubusercontent.com/452425/152363590-89d3b9a5-35c7-4c12-8f3e-c8b5ce4bb267.png)

## Use-Cases

While full webapps "could" run from within Partytown, it's actually best intended for code that doesn't need to be in the [critical rendering path](https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path). Most third-party scripts fall into this category, as they're not required for the first-paint. Additionally, the asynchronous natural of most third-party script works well with Partytown, as they can lazily receive updates and post data to their respective services.

Below are just a few examples of third-party scripts that might be a good candidate to run from within a web worker. The goal is to continue validating commonly used services to ensure Partytown has the correct API, but Partytown itself does not hardcode to any specific services. Help us test!

- [Google Tag Manager (GTM)](https://marketingplatform.google.com/about/tag-manager/)
- [Google Analytics (GA)](https://analytics.google.com/)
- [Mixpanel](https://mixpanel.com/)
- [Hubspot](https://www.hubspot.com/)
- [Segment](https://segment.com/)
- [Amplitude](https://amplitude.com/)

## Articles

- <a href="https://dev.to/adamdbradley/introducing-partytown-run-third-party-scripts-from-a-web-worker-2cnp" target="_blank" rel="noopener">Introducing Partytown: Run Third-Party Scripts From a Web Worker</a>
- <a href="https://dev.to/adamdbradley/how-partytown-s-sync-communication-works-4244" target="_blank" rel="noopener">How Partytown's Sync Communication Works</a>
- <a href="https://www.builder.io/blog/how-we-cut-99-percent-js-with-qwik-and-partytown" target="_blank" rel="noopener">How we cut 99% of our JavaScript with Qwik + Partytown</a>
- <a href="https://www.builder.io/blog/partytown-beta-release" target="_blank" rel="noopener">Partytown is now in Beta</a>
