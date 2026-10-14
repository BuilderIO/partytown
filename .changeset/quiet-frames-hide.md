---
'@qwik.dev/partytown': patch
---

Fix Lighthouse "FencedFrame" deprecated API warning by skipping `HTMLFencedFrameElement` during element interface introspection, so no `<fencedframe>` is created in the sandbox
