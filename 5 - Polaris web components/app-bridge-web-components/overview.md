## App Nav

The `s-app-nav` component creates a navigation menu for your app. On desktop web browsers, the navigation menu appears as part of the app nav, on the left of the screen. On Shopify mobile, the navigation menu appears in a dropdown from the TitleBar. This is modeled after the [HTML nav element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav). Note that nested navigation items are not supported.
[View App Nav](https://shopify.dev/docs/api/app-home/app-bridge-web-components/app-nav)

## App Window

The `s-app-window` component displays a fullscreen modal window. It allows you to open up a page in your app specified by the `src` property. You can use this when you have larger or complex workflows that you want to display. The app window covers the entirety of the screen. The top bar of the app window is controlled by the admin and allows the user to exit if needed.
[View App Window](https://shopify.dev/docs/api/app-home/app-bridge-web-components/app-window)

## Forms

Enable automatic save bar integration for HTML forms by adding the `data-save-bar` attribute to your form element. When form data changes, a save bar automatically appears, prompting users to save or discard their changes.

Alternatively, use the global `shopify.saveBar` API for programmatic control over the save bar behavior. Programmatic control of the save bar is available as `shopify.saveBar.show()`, `shopify.saveBar.hide()`, and `shopify.saveBar.toggle()`.

**Note:** The save bar functionality requires the full App Bridge UI library to be loaded via a [script tag](https://shopify.dev/docs/api/app-home/using-polaris-components).
[View Forms](https://shopify.dev/docs/api/app-home/app-bridge-web-components/forms)

## Title bar

The admin title bar is a critical part of the Shopify Admin experience. It provides a way to display the current page title and actions for the user to take. This guide will show you how to work with the admin title bar using the App Bridge UI library.
[View Title bar](https://shopify.dev/docs/api/app-home/app-bridge-web-components/title-bar)

