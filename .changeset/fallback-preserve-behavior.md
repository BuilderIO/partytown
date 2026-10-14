---
'@qwik.dev/partytown': patch
---

fix: the main thread fallback keeps objects that have a property forwarded with `preserveBehavior`, e.g. `dataLayer` for `dataLayer.push`, so data pushed before the fallback isn't lost.
