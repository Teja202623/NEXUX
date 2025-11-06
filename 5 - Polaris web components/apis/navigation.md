# Navigation

The Navigation API allows you navigate within and outside of your app using the [HTML anchor element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a). It also allows you to modify the top-level browser URL with or without navigating. It does this through the [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API) and the [Navigation API](https://developer.mozilla.org/en-US/docs/Web/API/Navigation_API).

```html
<a href="shopify://admin/products" target="_top">Products page</a>

```

## Examples

The Navigation API allows you navigate within and outside of your app using the [HTML anchor element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a). It also allows you to modify the top-level browser URL with or without navigating. It does this through the [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API) and the [Navigation API](https://developer.mozilla.org/en-US/docs/Web/API/Navigation_API).


### Navigating to routes within your app

Navigating to relative path within your app```html
<a href="/settings">Settings</a>

```

```js
open('/settings', '_self');

```


### Navigating to external URL's

Navigating to external URL in same window```html
<a href="https://example.com">Settings</a>

```

```js
open('https://example.com', '_top');

```

Navigating to external URL in new window```html
<a href="https://example.com" target="_blank">Settings</a>

```

```js
open('https://example.com', '_blank');

```


### Navigating to pages in the Shopify admin

Navigating to /products page```html
<a href="shopify://admin/products" target="_top">Products page</a>

```

```js
open('shopify://admin/products', '_top');

```

Navigating to /products page with specific resource```html
<a href="shopify://admin/products/123" target="_top">Products page</a>

```

```js
open('shopify://admin/products/123', '_top');

```

Navigating to /customers page```html
<a href="shopify://admin/customers" target="_top">Customers page</a>

```

```js
open('shopify://admin/customers', '_top');

```

Navigating to /orders page```html
<a href="shopify://admin/orders" target="_top">Orders page</a>

```

```js
open('shopify://admin/orders', '_top');

```


### Updating the browser URL without navigating

Using the [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)```js
history.pushState(null, '', '/settings');

```

```js
history.replaceState(null, '', '/settings');

```

Using the [Navigation API](https://developer.mozilla.org/en-US/docs/Web/API/Navigation_API)```js
navigation.navigate('/settings', {
  history: 'push',
});

```

```js
navigation.navigate('/settings', {
  history: 'replace',
});

```

