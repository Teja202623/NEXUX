## App

The App API provides information about the app and the status of its extensions.

> Tip:
> At this time, the App API only supports returning the activations on checkout and customer account UI extensions.
[View App](https://shopify.dev/docs/api/app-home/apis/app)

## Config

The `config` API stores the initial configuration information for your app and lets you synchronously retrieve it.
[View Config](https://shopify.dev/docs/api/app-home/apis/config)

## Environment

The Environment API provides utilities for information regarding the environment an App Home is running on.
[View Environment](https://shopify.dev/docs/api/app-home/apis/environment)

## Resource Fetching

The `fetch` API allows you to send a fetch request that is authenticated with an [OpenID Connect ID Token](https://shopify.dev/docs/api/app-bridge-library/apis/id-token) from Shopify in the `Authorization` header. This is authenticated for your application domain and subdomains. See the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) documentation for more details.

 App Bridge injects automatic authorization into the global `fetch` function. While this is transparent and should not interfere with existing fetch code, this injection can be disabled using the [`disabledFeatures`](https://shopify.dev/docs/api/app-bridge-library/apis/config#setting-config-values-disabledfeatures) configuration option. You will need to enable [Direct API access](https://shopify.dev/docs/apps/build/cli-for-apps/app-configuration#admin) for your app to use this feature.
[View Resource Fetching](https://shopify.dev/docs/api/app-home/apis/resource-fetching)

## ID Token

The ID token API asynchronously retrieves an [OpenID Connect ID Token](https://openid.net/specs/openid-connect-core-1_0.html#IDToken%5C) from Shopify that can be used to ensure that requests came from a Shopify authenticated user. See the [ID Token documentation](https://shopify.dev/docs/apps/auth/oauth/session-tokens) from more information.
[View ID Token](https://shopify.dev/docs/api/app-home/apis/id-token)

## Intents

The Intents API provides a way to invoke existing admin workflows for creating, editing, and managing Shopify resources.
[View Intents](https://shopify.dev/docs/api/app-home/apis/intents)

## Loading

The Loading API indicates to users that a page is loading or an upload is processing.
[View Loading](https://shopify.dev/docs/api/app-home/apis/loading)

## Modal API

The Modal API allows you to display an overlay that prevents interaction with the rest of the app until dismissed.
[View Modal API](https://shopify.dev/docs/api/app-home/apis/modal-api)

## Navigation

The Navigation API allows you navigate within and outside of your app using the [HTML anchor element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a). It also allows you to modify the top-level browser URL with or without navigating. It does this through the [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API) and the [Navigation API](https://developer.mozilla.org/en-US/docs/Web/API/Navigation_API).
[View Navigation](https://shopify.dev/docs/api/app-home/apis/navigation)

## Picker

The Picker API provides a search-based interface to help users find and select one or more resources that you provide, such as product reviews, email templates, or subscription options, and then returns the selected resource `id`s to your app.

> Tip:
> If you are picking products, product variants, or collections, you should use the [Resource Picker](resource-picker) API instead.

[View Picker](https://shopify.dev/docs/api/app-home/apis/picker)

## POS


  The POS API provides the ability to retrieve POS user, device, and location data, while also interacting with the cart and closing the app.

  > Tip:
  > It is recommended to use POS UI extensions for your development needs as they provide a faster, more robust, and easier to use solution for merchants using apps on POS. To learn more about the benefits and implementation details, refer to [POS UI Extensions](https://shopify.dev/docs/apps/pos/ui-extensions).
  
[View POS](https://shopify.dev/docs/api/app-home/apis/pos)

## Print

The Print API allows you to print the content from your App Home on Shopify Mobile and Shopify POS devices.

 For more information, see the [Window `print()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/print) documentation.
[View Print](https://shopify.dev/docs/api/app-home/apis/print)

## useAppBridge

The `useAppBridge` hook returns the `shopify` global variable to use App Bridge APIs such as `toast` and `resourcePicker`.
[View useAppBridge](https://shopify.dev/docs/api/app-home/apis/useappbridge)

## Resource Picker

The Resource Picker API provides a search-based interface to help users find and select one or more products, collections, or product variants, and then returns the selected resources to your app. Both the app and the user must have the necessary permissions to access the resources selected.

> Tip:
> If you are picking app resources such as product reviews, email templates, or subscription options, you should use the [Picker](picker) API instead.
[View Resource Picker](https://shopify.dev/docs/api/app-home/apis/resource-picker)

## Reviews


  The Reviews API allows you to request an app review modal overlaid on your embedded app in the Shopify admin. You control when to request a modal, but it will only be displayed to the merchant if [certain conditions](#rate-limits-restrictions) are met.
  
[View Reviews](https://shopify.dev/docs/api/app-home/apis/reviews)

## Save Bar

The Save Bar API is used to indicate that a form on the current page has unsaved information. It can be used in 2 ways:

1. It is automatically configured when you provide the `data-save-bar` attribute to a [`form` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) and will display the save bar when there are unsaved changes. The [`submit`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event) event fires when the form is submitted or when the Save button is pressed. The [`reset`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset_event) event fires when the form is reset or when the Discard button is pressed, which discards all unsaved changes in the form.
2. It can be controlled declaratively through the `ui-save-bar` element. For more information, refer to the [`ui-save-bar` component](https://shopify.dev/docs/api/app-bridge-library/web-components/ui-save-bar).
[View Save Bar](https://shopify.dev/docs/api/app-home/apis/save-bar)

## Scanner

The Scanner API allows you to use the mobile device's camera to scan barcodes.
[View Scanner](https://shopify.dev/docs/api/app-home/apis/scanner)

## Scopes

The Scopes API provides the ability to dynamically manage your access scopes within an embedded context.

  > Tip:
  > To learn more about declaring and requesting access scopes, as well as required vs. optional scopes, refer to [manage access scopes](https://shopify.dev/docs/apps/build/authentication-authorization/app-installation/manage-access-scopes).  
[View Scopes](https://shopify.dev/docs/api/app-home/apis/scopes)

## Share

The Share API allows you to invoke the "share sheet" to share content from your App Home on an iOS or Android device.

 For more information, see the [`navigator.share()`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share) documentation. When using the `navigator.share()` method in an App Home, the `files` value within the `data` parameter is not supported.
[View Share](https://shopify.dev/docs/api/app-home/apis/share)

## Support


  The Support API allows you to optionally register a custom handler when support requests are made directly through App Bridge. This interaction is triggered when a merchant clicks the get support button at the top of the app.

  > Tip:
  > To register a custom support callback, you must define a [Support link extension](https://shopify.dev/docs/apps/launch/distribution/support-your-customers#custom-support-events) and the link extension must point to a page within your app. This is to ensure consistent behavior when a merchant clicks a support button outside of the app. Without a support link extension, the support callback will be ignored.
  
[View Support](https://shopify.dev/docs/api/app-home/apis/support)

## Toast

The Toast API displays a non-disruptive message that appears at the bottom of the interface to provide quick and short feedback on the outcome of an action. This API is modeled after the [Web Notification API](https://developer.mozilla.org/en-US/docs/Web/API/Notification).
[View Toast](https://shopify.dev/docs/api/app-home/apis/toast)

## User

The User API lets you asynchronously retrieve information about the currently logged-in user.

The API returns a `Promise`, which contains user information, and the payload varies based on whether the user is logged into the Shopify admin or Shopify POS.
[View User](https://shopify.dev/docs/api/app-home/apis/user)

## Web Vitals

The Web Vitals API allows you to access performance metrics for your app directly through App Bridge.
[View Web Vitals](https://shopify.dev/docs/api/app-home/apis/web-vitals)

