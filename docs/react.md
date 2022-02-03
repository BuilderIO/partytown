---
title: React
---

The `@builder.io/partytown/react` submodule is where you'll find the React specific components.

```jsx
import { Partytown } from '@builder.io/partytown/react';

export function Head() {
  return (
    <>
      <Partytown />
      <script type="text/partytown" src="https://example.com/analytics.js" />
    </>
  );
}
```
