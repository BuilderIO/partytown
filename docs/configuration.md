---
title: Configuration
---

Partytown does not require a config for it to work, however a config can be set to change the defaults. At the lowest level, it's configured by setting the `window.partytown = {...}` object before the Partytown snippet script. However, higher-level integrations, such as the `<Partytown/>` component found in `@builder.io/partytown/react`, should provide utilities to make setting the config easier

| Config       | Description                                                                                                                                                                                                               |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `debug`      | When `true`, Partytown scripts are not inlined and not minified. See the [Debugging](/debugging) docs on how to enable more logging.                                                                                      |
| `forward`    | An array of strings representing function calls on the main thread to forward to the web worker. See [Forwarding Events and Triggers](/forwarding-events) for more info.                                                  |
| `lib`        | Path where the Partytown library can be found your server. Note that the path must both start and end with a `/` character, and the files must be hosted from the same origin as the webpage. Default is `/~partytown/`   |
| `loadScriptsOnMainThread` | An array of strings or regular expressions (RegExp) used to filter out which script are executed via Partytown and the main thread. An example is as follows: `loadScriptsOnMainThread: ["https://test.com/analytics.js", "inline-script-id", /regex-matched-script\.js/]`.|
| `resolveUrl` | Hook that is called to resolve URLs which can be used to modify URLs. The hook uses the API: `resolveUrl(url: URL, location: URL, method: string)`. See the [Proxying Requests](/proxying-requests) for more information. |
| `nonce` | The nonce property may be set on script elements created by Partytown. This should be set only when dealing with content security policies and when the use of `unsafe-inline` is disabled (using `nonce-*` instead). |

## Vanilla Config

What we mean by "vanilla config", is that the Partytown config can be set without any higher-level integration. Below is an example of setting the `debug` config. Notice that the config script tag is _before_ the Partytown snippet script. Additionally, the config or snippet scripts should _NOT_ contain the `type="text/partytown"` attribute (this small amount of JavaScript we need to run on the main thread to initialize everything).

```html
<html>
  <head>
    <title>Vanilla Config Example</title>
    <script>
      partytown = {
        debug: true,
      };
    </script>
    <script>
      /* Inlined Partytown Snippet */
    </script>
  </head>
  <body>
    ...
  </body>
</html>
```

Please see the [integration guides](/integrations) for more information.
