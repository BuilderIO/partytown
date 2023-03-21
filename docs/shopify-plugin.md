---
title: Using Partytown with Shopify
---

Shopify helps you create your e-commerce site, however, as you add more features, you're adding more JavaScript, and more JavaScript impacts your site speed. Since even milliseconds influence customer engagement, the faster you can make your site, the better.

If you're using Shopify with Builder, you can use Partytown to reap the benefits of apps, libraries, and plugins without sacrificing site speed.

With the Partytown Shopify plugin, all the coding is done for you and configuration is minimal within the Builder UI.

To get the most out of this document, make sure you have a Shopify store with [Builder.io: Storefront Builder](https://apps.shopify.com/builder-2) installed.


## How the Partytown plugin works

The Partytown plugin uses a friendly user interface to automate code tasks that include:

* Setting up Partytown code to be served from the domain of your Shopify hosted site through the Builder Shopify app.
* Injecting the necessary JavaScript code into your Shopify theme to identify, intercept, and load necessary third-party scripts through Partytown.
* Setting up and using Builder’s proxy service for any third-party libraries that need to make proxy URL calls.
* Providing a UI to configure, change and update your Partytown configuration and install it on various themes.

By using the Partytown plugin, you bypass doing this process manually and complete setup in moments.

## Installing the Partytown plugin

1. Go to **Integrations**.
1. In the Partytown tile, click the **Settings** button. Note that you must be on a hosted Shopify space to access the Partytown integration tile.
1. Select the theme, version of Partytown, and any apps in the dropdown that you'd like to use.
1. Click the **Install** button.

The following gif shows how to install the Partytown plugin on a hosted Shopify space:

![Video showing how to install Partytown for Shopify in the Builder UI.](/install-partytown-shopify.gif)

To make changes to the configuration, follow this same process with the addition of your changes and click the Reinstall button.

## Testing Partytown with your setup

When you install the Partytown plugin, you might want to test to assess site improvements in a controlled way. For this reason, Enable Partytown for regular users is by default toggled to the off position when you install Partytown.

With this setting off, regular users get your website without Partytown, but you can load Partytown by sending the query param of `?partytown=default`.

When you're ready to roll out Partytown for all of your users, toggle this switch to the on position and click the Reinstall button.

![Image showing where to find the Enable Partytown switch and the Reinstall button.](/reinstall-partytown.png)

## Adding more apps, plugins, or libraries

To move any other app, plugin, or library to Shopify:

1. Go to **Integrations**.
1. Click the **Settings** button on the Partytown tile.
1. Expand **Developer Settings**.
1. Click the **Add App Config For Partytown** button.
1. Add additional app configurations by filling out the fields, which are:
* **Name:** Name the configuration whatever you like. The name can differ from the actual name that you might use in code. We recommend something you find easy to remember.
* **App Script URL:** Provide the URL from which the plugin or library loads. Builder uses this URL to intercept and move the library's code to Partytown.
* **Hostnames to proxy:** URLs that the library might make requests to once loaded, and need to be proxied through Builder’s service. For more information, see Proxying Requests in the Partytown documentation.
* **Events and triggers:** Add events and triggers, which are data that the library stores on the `window` object that Partytown needs to reference.
6. Click the **Install** button.

The following gif shows where to find the Add App Config settings.

![Video showing how to get to the Add App Config settings.](/open-dev-settings.gif)


## Moving other scripts to Partytown

For any script, plugin, or library that you manually add to your Shopify theme, you can move it to Partytown by changing the script tag from `<script type=”text/javascript”>` to:

```html
<script type=”text/partytown”>
```

**Tip:** Moving other scripts to Partytown might require additional configuration. For more info, see Forwarding Events and Triggers and Proxying Requests.