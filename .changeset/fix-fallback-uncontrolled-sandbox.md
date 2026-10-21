---
'@qwik.dev/partytown': patch
---

fix: fall back to the main thread right away when the service worker doesn't answer, instead of losing the scripts — previously, when the sandbox or the web worker wasn't controlled by the service worker (e.g. iOS Safari), every proxytown request reached the server, every script failed, and Partytown still reported itself initialized, so the main thread fallback never ran
