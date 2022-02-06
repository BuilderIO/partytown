---
title: Partytown Scripts
---

## Partytown Script Type

Add the `type="text/partytown"` attribute to each individual third-party script to run from a web worker. Note that each script is opt-in, meaning that the updated `type` attribute should only be added to scripts that should run with Partytown. Partytown will _not_ automatically upgrade any scripts unless this attribute is added.

```diff
- <script>...</script>
+ <script type="text/partytown">...</script>
```

## Why `type="text/partytown"`?

The `type="text/partytown"` attribute does two things:

1. Informs the browser to _not_ process the script.
2. Provides a query selector so Partytown can find all the scripts to run from within the web worker.

By giving the script a [type attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-type) which the browser does not recognize: "The embedded content is treated as a data block which won't be processed by the browser."

## Integrations

Please see the [integration guides](/integrations) for more information on how to setup Partytown.
