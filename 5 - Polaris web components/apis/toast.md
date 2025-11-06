# Toast

The Toast API displays a non-disruptive message that appears at the bottom of the interface to provide quick and short feedback on the outcome of an action. This API is modeled after the [Web Notification API](https://developer.mozilla.org/en-US/docs/Web/API/Notification).

```js
shopify.toast.show('Message sent');

```

## show method

The `Toast.show` method displays a Toast notification in the Shopify admin. It accepts a variety of options to customize the behavior.

### ToastShow

#### Returns: string

#### Params:

- message: string
- opts: ToastOptions
(message: string, opts?: ToastOptions) => string


### ToastOptions

### action

value: `string`

Content of an action button.

### duration

value: `number`

The length of time in milliseconds the toast message should persist.

### isError

value: `boolean`

Display an error-styled toast.

### onAction

value: `() => void`

Callback fired when the action button is clicked.

### onDismiss

value: `() => void`

Callback fired when the dismiss icon is clicked

## Examples

The Toast API displays a non-disruptive message that appears at the bottom of the interface to provide quick and short feedback on the outcome of an action. This API is modeled after the [Web Notification API](https://developer.mozilla.org/en-US/docs/Web/API/Notification).


Toast with duration

```js
shopify.toast.show('Product saved', {
  duration: 5000,
});

```


Toast with action

```js
shopify.toast.show('Product saved', {
  action: 'Undo',
  onAction: () => {}, // Undo logic
});

```


Toast with dismiss callback

```js
shopify.toast.show('Product saved', {
  onDismiss: () => {}, // Dismiss logic
});

```

## hide method

The `Toast.hide` method hides a Toast notification. This is not required to be called as the Toast notification will automatically hide after the `duration` has elapsed.

### ToastHide

#### Returns: void

#### Params:

- id: string
(id: string) => void


## Examples

The Toast API displays a non-disruptive message that appears at the bottom of the interface to provide quick and short feedback on the outcome of an action. This API is modeled after the [Web Notification API](https://developer.mozilla.org/en-US/docs/Web/API/Notification).


Toast with duration

```js
shopify.toast.show('Product saved', {
  duration: 5000,
});

```


Toast with action

```js
shopify.toast.show('Product saved', {
  action: 'Undo',
  onAction: () => {}, // Undo logic
});

```


Toast with dismiss callback

```js
shopify.toast.show('Product saved', {
  onDismiss: () => {}, // Dismiss logic
});

```

## Examples

The Toast API displays a non-disruptive message that appears at the bottom of the interface to provide quick and short feedback on the outcome of an action. This API is modeled after the [Web Notification API](https://developer.mozilla.org/en-US/docs/Web/API/Notification).


Toast with duration

```js
shopify.toast.show('Product saved', {
  duration: 5000,
});

```


Toast with action

```js
shopify.toast.show('Product saved', {
  action: 'Undo',
  onAction: () => {}, // Undo logic
});

```


Toast with dismiss callback

```js
shopify.toast.show('Product saved', {
  onDismiss: () => {}, // Dismiss logic
});

```

