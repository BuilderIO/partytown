---
'@qwik.dev/partytown': patch
---

fix: avoid Lighthouse "FencedFrame" deprecated API warning by skipping `HTMLFencedFrameElement` during element interface introspection, so no `<fencedframe>` is created in the sandbox
