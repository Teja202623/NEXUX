# Support


  The Support API allows you to optionally register a custom handler when support requests are made directly through App Bridge. This interaction is triggered when a merchant clicks the get support button at the top of the app.

  > Tip:
  > To register a custom support callback, you must define a [Support link extension](https://shopify.dev/docs/apps/launch/distribution/support-your-customers#custom-support-events) and the link extension must point to a page within your app. This is to ensure consistent behavior when a merchant clicks a support button outside of the app. Without a support link extension, the support callback will be ignored.
  

```js
// Define the callback function
const handler = () => {
  // implement your custom functionality
  openLiveChat();
};

// Register the callback
shopify.support.registerHandler(handler);

```

## Support

The Support API provides a registerHandler method that registers a handler to call when support is requested. It allows you to provide bespoke, in-app support such as opening a live chat widget.

### SupportApi

### registerHandler

value: `(callback: SupportCallback) => Promise<void>`

  - SupportCallback: () => void | Promise<void>

### SupportCallback

#### Returns: void | Promise<void>
() => void | Promise<void>


