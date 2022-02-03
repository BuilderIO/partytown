---
title: Getting Started
---

Partytown is fairly different from most web development libraries in mainly what’s required for its setup and configuration. At the lowest level, Partytown can work with just vanilla HTML, meaning it doesn’t need to be a part of a build process, doesn’t need a bundler, doesn’t require a specific framework, etc. Because it can integrate with any HTML page, it also makes it much easier to then create wrapper components or plugins for almost any ecosystem, such as Shopify, Wordpress, Nextjs, Gatsby and much more.

What's different from most web development libraries is that Partytown does _not_ get bundled with your existing site's JavaScript. Instead it purposely wants to stay separate from your code so that it can run within a web worker, and allow your code to run on the main thread. If the two were bundled we've already lost the battle.

## Install NPM package

```
npm install @builder.io/partytown
```

## Next Steps

1. [Copy Partytown library files](/copy-library-files)
1. [Add Partytown type attribute to Third-Party Scripts](/partytown-scripts)
1. [Add Partytown snippet to the `<head>`](/integrations)
