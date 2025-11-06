# App

The App API provides information about the app and the status of its extensions.

> Tip:
> At this time, the App API only supports returning the activations on checkout and customer account UI extensions.

```js
const extensions = await shopify.app.extensions();

```

## Extensions method

The `app.extensions()` method asynchronously retrieves detailed information about the app's checkout and customer account extensions, including which targets they are activated on.

It returns a Promise that resolves to an array of `ExtensionInfo` objects. Each object contains the extension's handle and its activation targets. The array may be empty if the app has no extensions.

### ExtensionInfo

Contains the status information for the app's extension. This includes the extension's handle, and activation targets.

### activations

value: `ExtensionActivation[]`

  - ExtensionActivation: export interface ExtensionActivation {
  /**
   * The target identifier for the extension activation.
   */
  target: string;
}
List of activation records for the extension. Contains information about where the extension is currently activated.

### handle

value: `string`

The unique identifier for the extension.

### ExtensionActivation

Represents an activation record for an extension. Contains information about where an extension is activated.

### target

value: `string`

The target identifier for the extension activation.

