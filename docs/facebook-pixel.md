---
title: Facebook Pixel
---

## Add the Pixel Script

- [Meta (Facebook) Pixel](https://www.facebook.com/business/learn/facebook-ads-pixel)
- [How to Set Up and Install a Meta Pixel](https://www.facebook.com/business/help/952192354843755?id=1205376682832142)

## Partytown Script

Set the script element's `type` attribute to `text/partytown`. For example:

```html
<script type="text/partytown">
  // insert pixel script here
</script>
```

## Proxy Requests

The `connect.facebook.net` response does not provide the correct CORS header, and a reverse proxy should be used. Below is an example of setting the `resolveUrl` config to proxy the `connect.facebook.net` requests. Please see [Proxying Requests](/proxying-requests) for more information.

```js
// https://partytown.builder.io/configuration
{
  resolveUrl={function(url) {
    var proxyDomains = [
      'connect.facebook.net'
    ];
    if (proxyDomains.includes(url.hostname)) {
      const proxyUrl = new URL('https://my-reverse-proxy.com/')
      proxyUrl.searchParams.append('url', url)
      return proxyUrl
    }
  }
}
```

## Forward Events
