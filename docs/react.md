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

## React Forward Prop

Example of setting the [forward](/forwarding-events) config with the Partytown component.

```jsx
<Partytown forward={['dataLayer.push', 'fbq']} />
```
