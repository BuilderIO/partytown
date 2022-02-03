---
title: Proxying Requests
---

Often third-party scripts are added to the page by appending a script tag, such as:

```javascript
var script = document.createElement('script');
script.url = 'http://some-third-party-script.com/tracking.js';
document.head.appendChild(script);
```

When the `<script>` element is appended to the `<head>` using this traditional approach, the script's HTTP response _does not_ require [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) headers.

However, because Partytown requests the scripts within a web worker using [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), then the script's response _requires_ the correct CORS headers.

Many third-party scripts already provide the correct CORS headers, but not all do. For services that do not add the correct headers, then a [reverse proxy](#Reverse-Proxy) to another domain must be used in order to provide the CORS headers.

#### CORS Response Header

```
Access-Control-Allow-Origin: *
```

## Configuring URL Proxies

When executed from within Partytown, every URL is resolved by Partytown, which also gives users the ability to inspect and modify any and every URL being resolved. The `resolveUrl()` config can be used to check for a specific URL, and optionally return the proxied URL instead. For example, in the code below we're checking if the URL to be resolved is for Google Analytics, and if so, return a different URL that points to a [reverse proxy](#Reverse-Proxy).

### React `<Partytown/>` Config Example

```jsx
<Partytown
  resolveUrl={(url) => {
    if (url.hostname === 'www.google-analytics.com') {
      var proxyUrl = new URL('https://my-reverse-proxy.com/');
      proxyUrl.searchParams.append('url', url);
      return proxyUrl;
    }
  }}
/>
```

### Vanilla Config Example

```javascript
partytown = {
  resolveUrl: function (url) {
    if (url.hostname === 'www.google-analytics.com') {
      var proxyUrl = new URL('https://my-reverse-proxy.com/');
      proxyUrl.searchParams.append('url', url);
      return proxyUrl;
    }
    return url;
  },
};
```

## Reverse Proxy

Below are a few examples of [reverse proxies](https://en.wikipedia.org/wiki/Reverse_proxy) that could be used.

- [Apache](https://httpd.apache.org/docs/2.4/howto/reverse_proxy.html)
- [Cloudflare](https://www.cloudflare.com/learning/cdn/glossary/reverse-proxy/)
- [Netlify: Proxy to another service](https://docs.netlify.com/routing/redirects/rewrites-proxies/#proxy-to-another-service)
- [NGINX](https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/)
- [Vercel: Rewrites](https://vercel.com/docs/cli#project-configuration/rewrites)
