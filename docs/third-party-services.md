---
title: Third-Party Services
description: Third-Party Services
---

Partytown is built with the goal that any third-party script can be ran from within it. At the lowest level, any script can add the `type="text/partytown"` attribute to have it executed from a web worker.

That said, below are some examples of commonly used services and helpers provided by Partytown's npm package.

## Facebook Pixel

#### React Facebook Pixel

```jsx
import { FacebookPixel } from '@builder.io/partytown/react';

export function MyCmp() {
  return <FacebookPixel pixelId={'MY-PIXEL-ID'} />;
}
```

## Google Tag Manager

#### React Google Tag Manager

```jsx
import { GoogleTagManager } from '@builder.io/partytown/react';

export function MyCmp() {
  return <GoogleTagManager containerId={'GTM-XXXXXX'} />;
}
```
