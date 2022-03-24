---
title: Gatsby
---

The Gatsby setup is largely the same as the [React integration guide](/react), except it goes further into how to use the [Gatsby](https://gatsbyjs.com/) framework's `setHeadComponents` function, which is used to inject scripts and other common tags for websites.

For additional information, please see [How to Add Google Analytics gtag to Gatsby Using Partytown](https://www.gatsbyjs.com/blog/how-to-add-google-analytics-gtag-to-gatsby-using-partytown/). 

## Install

```bash
npm install @builder.io/partytown
```

## Configure

The `<Partytown/>` component is imported from the `@builder.io/partytown/react` submodule. The [config properties](/configuration) are JSX props.

The following is an example of including the `<Partytown/>` component in `gatsby-ssr.js`. Notice the `<Partytown/>` component is in `setHeadComponents`, and the example analytics script has the `type="text/partytown"` attribute.

```jsx
import React from 'react';
import { Partytown } from '@builder.io/partytown/react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <Partytown key="partytown" debug={true} forward={['dataLayer.push']} />,
    <script key="analytics" src="https://example.com/analytics.js" type="text/partytown" />
  ]);
  
  // For GTM, we will need to add this noscript tag to the body of the HTML
  setPreBodyComponents([
    <noscript
      key="gtm"
      dangerouslySetInnerHTML={{
        __html: `
                  <iframe src="https://www.googletagmanager.com/ns.html?id=xxx-xxxxxxx" height="0" width="0"
                      style="display:none;visibility:hidden"></iframe>
                `,
      }}
    />
  ]);
};
```

## Partytown Script

Add the `type="text/partytown"` [prop](/partytown-scripts) for each script that should run from a web worker. The example below is using the React specific way of inlining a script with [dangerouslySetInnerHTML](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml).

```jsx
<script
  type="text/partytown"
  dangerouslySetInnerHTML={{
    __html: '/* Inlined Third-Party Script */'
  }}
/>
```

## Copy Library Files

Copy library files to `static/~partytown`. How the files are copied or served from your site is up to each site's setup. A `partytown copylib` CLI [copy task](/copy-library-files) has been provided for convenience which helps copy the Partytown library files to the correct directory. Below is an example of using Gatsby's `onPreBuild` extension point. This can be added to `gatsby-node.js`.

```jsx
const path = require("path");
const { copyLibFiles } = require('@builder.io/partytown/utils');

exports.onPreBuild = async () => {
  await copyLibFiles(path.join(__dirname, "static", "~partytown"));
};
```

It's worth noting `onPreBuild` is only called during the build process. If you need to use `copyLibFiles` while in development you can use [onPreBootstrap](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#onPreBootstrap) which is called when running both `gatsby build` or `gatsby develop`.
