# Environment

The Environment API provides utilities for information regarding the environment an App Home is running on.

```js
shopify.environment;
// => { mobile: false, embedded: true, pos: false }

```

## Environment

The `environment` API is available on the `shopify` global. It contains information about the current environment an App Home is running on.

### _EnvironmentApi

### embedded

value: `boolean`

Whether the app is embedded in the Shopify admin.

### mobile

value: `boolean`

Whether the app is running on Shopify Mobile.

### pos

value: `boolean`

Whether the app is running on Shopify POS.

