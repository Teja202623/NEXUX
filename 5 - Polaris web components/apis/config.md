# Config

The `config` API stores the initial configuration information for your app and lets you synchronously retrieve it.

```js
shopify.config.shop;
// => 'your-shop-name.myshopify.com'

```

## Config

The `config` API is available on the `shopify` global. It stores the initial configuration information for your app and shop.

### AppBridgeConfig

### apiKey

value: `string`

The client ID provided for your application in the Partner Dashboard.

This needs to be provided by the app developer.

### appOrigins

value: `string[]`

An allowlist of origins that your app can send authenticated fetch requests to.

This is useful if your app needs to make authenticated requests to a different domain that you control.

### debug

value: `DebugOptions`

  - DebugOptions: interface DebugOptions {
  /**
   * Enables or disables the logging of web performance metrics (Web Vitals) in the browser's console.
   *
   * When set to `true`, the app will log Core Web Vitals (such as LCP, INP, and CLS) and other relevant performance metrics to help developers understand the real-world performance of their app. This can be useful for debugging performance issues during development or in a staging environment.
   *
   * This field is optional and defaults to `false`, meaning that web vitals logging is disabled by default to avoid performance overhead and unnecessary console output in production environments.
   * @defaultValue false
   */
  webVitals?: boolean;
}
Configuration options for enabling debug features within the app. Includes options for monitoring performance metrics, such as web vitals.

Recommended for use during development and debugging to aid in identifying and resolving performance issues.

Generally not recommended for long-term use in production environments.

### disabledFeatures

value: `string[]`

The features to disable in your app.

This allows app developers to opt-out of features such as `fetch`.

### experimentalFeatures

value: `string[]`

The experimental features to enable in your app.

This allows app developers to opt-in to experiement features.

### host

value: `string`

The base64-encoded host of the shop that's embedding your app.

This does not need to be provided by the app developer.

### locale

value: `string`

The locale of the shop that's embedding your app.

This does not need to be provided by the app developer.

### shop

value: `string`

The shop origin of the shop that's embedding your app.

This does not need to be provided by the app developer.

### DebugOptions

### webVitals

value: `boolean`

Enables or disables the logging of web performance metrics (Web Vitals) in the browser's console.

When set to `true`, the app will log Core Web Vitals (such as LCP, INP, and CLS) and other relevant performance metrics to help developers understand the real-world performance of their app. This can be useful for debugging performance issues during development or in a staging environment.

This field is optional and defaults to `false`, meaning that web vitals logging is disabled by default to avoid performance overhead and unnecessary console output in production environments.

## Examples

The `config` API stores the initial configuration information for your app and lets you synchronously retrieve it.


### Retrieving config values

Retrieving the shop origin```js
shopify.config.shop;
// => 'your-shop-name.myshopify.com'

```

Retrieving the host```js
shopify.config.host;

```

Retrieving the locale```js
shopify.config.locale;

```

Retrieving the apiKey```js
shopify.config.apiKey;

```

Retrieving the disabledFeatures```js
shopify.config.disabledFeatures;

```

Retrieving the appOrigins```js
shopify.config.appOrigins;

```

Configuration for debugging apps.```js
shopify.config.debug;
// => { webVitals: false }

```


### Setting config values

Setting the apiKey```html
<head>
  <meta name="shopify-api-key" content="%SHOPIFY_API_KEY%" />

  <script src="https://cdn.shopify.com/shopifycloud/app-bridge.js" />
</head>

```

Setting the disabledFeatures```html
<head>
  <meta name="shopify-disabled-features" content="fetch" />

  <meta name="shopify-api-key" content="%SHOPIFY_API_KEY%" />
  <script src="https://cdn.shopify.com/shopifycloud/app-bridge.js" />
</head>

```

```html
<head>
  <meta name="shopify-disabled-features" content="fetch, auto-redirect" />

  <meta name="shopify-api-key" content="%SHOPIFY_API_KEY%" />
  <script src="https://cdn.shopify.com/shopifycloud/app-bridge.js" />
</head>

```

Setting the appOrigins```html
<head>
  <meta name="shopify-app-origins" content="https://example.com" />

  <meta name="shopify-api-key" content="%SHOPIFY_API_KEY%" />
  <script src="https://cdn.shopify.com/shopifycloud/app-bridge.js" />
</head>

```

```html
<head>
  <meta
    name="shopify-app-origins"
    content="https://example.com,https://example.net"
  />

  <meta name="shopify-api-key" content="%SHOPIFY_API_KEY%" />
  <script src="https://cdn.shopify.com/shopifycloud/app-bridge.js" />
</head>

```

Enabling Debug Features for Performance Monitoring```html
<head>
  <meta name="shopify-debug" content="web-vitals" />

  <meta name="shopify-api-key" content="%SHOPIFY_API_KEY%" />
  <script src="https://cdn.shopify.com/shopifycloud/app-bridge.js" />
</head>

```

## Examples

The `config` API stores the initial configuration information for your app and lets you synchronously retrieve it.


### Retrieving config values

Retrieving the shop origin```js
shopify.config.shop;
// => 'your-shop-name.myshopify.com'

```

Retrieving the host```js
shopify.config.host;

```

Retrieving the locale```js
shopify.config.locale;

```

Retrieving the apiKey```js
shopify.config.apiKey;

```

Retrieving the disabledFeatures```js
shopify.config.disabledFeatures;

```

Retrieving the appOrigins```js
shopify.config.appOrigins;

```

Configuration for debugging apps.```js
shopify.config.debug;
// => { webVitals: false }

```


### Setting config values

Setting the apiKey```html
<head>
  <meta name="shopify-api-key" content="%SHOPIFY_API_KEY%" />

  <script src="https://cdn.shopify.com/shopifycloud/app-bridge.js" />
</head>

```

Setting the disabledFeatures```html
<head>
  <meta name="shopify-disabled-features" content="fetch" />

  <meta name="shopify-api-key" content="%SHOPIFY_API_KEY%" />
  <script src="https://cdn.shopify.com/shopifycloud/app-bridge.js" />
</head>

```

```html
<head>
  <meta name="shopify-disabled-features" content="fetch, auto-redirect" />

  <meta name="shopify-api-key" content="%SHOPIFY_API_KEY%" />
  <script src="https://cdn.shopify.com/shopifycloud/app-bridge.js" />
</head>

```

Setting the appOrigins```html
<head>
  <meta name="shopify-app-origins" content="https://example.com" />

  <meta name="shopify-api-key" content="%SHOPIFY_API_KEY%" />
  <script src="https://cdn.shopify.com/shopifycloud/app-bridge.js" />
</head>

```

```html
<head>
  <meta
    name="shopify-app-origins"
    content="https://example.com,https://example.net"
  />

  <meta name="shopify-api-key" content="%SHOPIFY_API_KEY%" />
  <script src="https://cdn.shopify.com/shopifycloud/app-bridge.js" />
</head>

```

Enabling Debug Features for Performance Monitoring```html
<head>
  <meta name="shopify-debug" content="web-vitals" />

  <meta name="shopify-api-key" content="%SHOPIFY_API_KEY%" />
  <script src="https://cdn.shopify.com/shopifycloud/app-bridge.js" />
</head>

```

