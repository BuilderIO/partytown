---
title: Debugging
description: Debugging
---

With `debug` mode and logging enabled, below is an example of the Partytown logs showing all calls, getters and setters:

![Partytown Debug Console Logs](https://user-images.githubusercontent.com/452425/131688576-e207cb15-7ce5-4009-a358-3e3093d51957.png)

The [debug config](/configuration) must be `true` in order to see more verbose logging messages. The config table below lists all of the possible log configurations.

| Log Config Property     | Description                         |
| ----------------------- | ----------------------------------- |
| `logCalls`              | Log method calls                    |
| `logGetters`            | Log getter calls                    |
| `logSetters`            | Log setter calls                    |
| `logImageRequests`      | Log Image() src requests            |
| `logScriptExecution`    | Log script executions               |
| `logSendBeaconRequests` | Log navigator.sendBeacon() requests |
| `logStackTraces`        | Log stack traces                    |

Example enabling debugging and logging all setters:

```html
<html>
  <head>
    <title>Log Getters</title>
    <script>
      partytown = {
        debug: true,
        logGetters: true,
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

Please see the [debug file docs](/distribution#libdebug) more information about the distribution.
