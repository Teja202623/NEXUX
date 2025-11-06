# Banner

Highlights important information or required actions prominently within the interface. Use to communicate statuses, provide feedback, or draw attention to critical updates.

```jsx
<s-banner heading="Order archived" tone="info" dismissible>
  This order was archived on March 7, 2017 at 3:12pm EDT.
</s-banner>
```

```html
<s-banner heading="Order archived" tone="info" dismissible>
  This order was archived on March 7, 2017 at 3:12pm EDT.
</s-banner>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-banner heading="Order archived" tone="info" dismissible>
  This order was archived on March 7, 2017 at 3:12pm EDT.
</s-banner>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Properties

### Banner

### adoptedCallback

value: `() => void`


### attributeChangedCallback

value: `(name: string) => void`


### click

value: `({ sourceEvent }?: ClickOptions) => void`

  - ClickOptions: export interface ClickOptions {
  /**
   * The event you want to influence the synthetic click.
   */
  sourceEvent?: ActivationEventEsque;
}
Like the standard `element.click()`, but you can influence the behavior with a `sourceEvent`.

For example, if the `sourceEvent` was a middle click, or has particular keys held down, components will attempt to produce the desired behavior on links, such as opening the page in the background tab.

### connectedCallback

value: `() => void`


### disconnectedCallback

value: `() => void`


### dismissible

value: `boolean`

Determines whether the close button of the banner is present.

When the close button is pressed, the `dismiss` event will fire, then `hidden` will be true, any animation will complete, and the `afterhide` event will fire.

### heading

value: `string`

The title of the banner.

### hidden

value: `boolean`

Determines whether the banner is hidden.

If this property is being set on each framework render (as in 'controlled' usage), and the banner is `dismissible`, ensure you update app state for this property when the `dismiss` event fires.

If the banner is not `dismissible`, it can still be hidden by setting this property.

### queueRender

value: `() => void`

Queue a run of the render function. You shouldn't need to call this manually - it should be handled by changes to

### setAttribute

value: `(name: string, value: string) => void`


### tone

value: `"info" | "success" | "warning" | "critical" | "auto"`

Sets the tone of the Banner, based on the intention of the information being conveyed.

The banner is a live region and the type of status will be dictated by the Tone selected.

- `critical` creates an [assertive live region](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role) that is announced by screen readers immediately.
- `neutral`, `info`, `success`, `warning` and `caution` creates an [informative live region](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/status_role) that is announced by screen readers after the current message.

### ClickOptions

### sourceEvent

value: `ActivationEventEsque`

  - ActivationEventEsque: export interface ActivationEventEsque {
  shiftKey: boolean;
  metaKey: boolean;
  ctrlKey: boolean;
  button: number;
}
The event you want to influence the synthetic click.

### ActivationEventEsque

### button

value: `number`


### ctrlKey

value: `boolean`


### metaKey

value: `boolean`


### shiftKey

value: `boolean`


## Examples

Highlights important information or required actions prominently within the interface. Use to communicate statuses, provide feedback, or draw attention to critical updates.


### Basic usage

Demonstrates a simple informational banner used to communicate status updates or completed actions, providing clear and concise feedback to the user.```jsx
<s-banner heading="Order archived">
  This order was archived on March 7, 2017 at 3:12pm EDT.
</s-banner>
```

```html
<s-banner heading="Order archived">
  This order was archived on March 7, 2017 at 3:12pm EDT.
</s-banner>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-banner heading="Order archived">
  This order was archived on March 7, 2017 at 3:12pm EDT.
</s-banner>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates a warning banner that highlights a potential issue and provides actionable buttons to help users resolve the problem quickly and effectively.```jsx
<s-banner heading="127 products missing shipping weights" tone="warning">
  Products without weights may show inaccurate shipping rates, leading to
  checkout abandonment.
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/products?filter=missing-weights"
  >
    Review products
  </s-button>
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="javascript:void(0)"
  >
    Setup guide
  </s-button>
</s-banner>
```

```html
<s-banner heading="127 products missing shipping weights" tone="warning">
  Products without weights may show inaccurate shipping rates, leading to
  checkout abandonment.
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/products?filter=missing-weights"
  >
    Review products
  </s-button>
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="javascript:void(0)"
  >
    Setup guide
  </s-button>
</s-banner>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-banner heading="127 products missing shipping weights" tone="warning">
  Products without weights may show inaccurate shipping rates, leading to
  checkout abandonment.
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/products?filter=missing-weights"
  >
    Review products
  </s-button>
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="javascript:void(0)"
  >
    Setup guide
  </s-button>
</s-banner>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates an urgent banner design that signals a critical issue requiring immediate action, with clear and prominent secondary action buttons to guide users.```jsx
<s-banner heading="Order #1024 flagged for fraud review" tone="critical">
  This order shows multiple risk indicators and cannot be auto-fulfilled. Review
  required within 24 hours to prevent automatic cancellation.
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/orders/1024/risk"
  >
    Review order details
  </s-button>
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/settings/payments/fraud"
  >
    Adjust fraud settings
  </s-button>
</s-banner>
```

```html
<s-banner heading="Order #1024 flagged for fraud review" tone="critical">
  This order shows multiple risk indicators and cannot be auto-fulfilled. Review
  required within 24 hours to prevent automatic cancellation.
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/orders/1024/risk"
  >
    Review order details
  </s-button>
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/settings/payments/fraud"
  >
    Adjust fraud settings
  </s-button>
</s-banner>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-banner heading="Order #1024 flagged for fraud review" tone="critical">
  This order shows multiple risk indicators and cannot be auto-fulfilled. Review
  required within 24 hours to prevent automatic cancellation.
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/orders/1024/risk"
  >
    Review order details
  </s-button>
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/settings/payments/fraud"
  >
    Adjust fraud settings
  </s-button>
</s-banner>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Success confirmation with dismiss option for completed operations.```jsx
<s-banner heading="Products imported" tone="success" dismissible={true}>
  Successfully imported 50 products to your store.
</s-banner>
```

```html
<s-banner heading="Products imported" tone="success" dismissible="true">
  Successfully imported 50 products to your store.
</s-banner>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-banner heading="Products imported" tone="success" dismissible={true}>
  Successfully imported 50 products to your store.
</s-banner>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Informational banner highlighting app updates with clear benefits and actions.```jsx
<s-banner heading="Point of Sale v2.4 available" tone="info" dismissible>
  New version includes faster checkout processing and inventory sync
  improvements.
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/apps/pos/changelog"
  >
    View changes
  </s-button>
  <s-button slot="secondary-actions" variant="secondary">
    Install update
  </s-button>
</s-banner>
```

```html
<s-banner heading="Point of Sale v2.4 available" tone="info" dismissible>
  New version includes faster checkout processing and inventory sync
  improvements.
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/apps/pos/changelog"
  >
    View changes
  </s-button>
  <s-button slot="secondary-actions" variant="secondary">
    Install update
  </s-button>
</s-banner>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-banner heading="Point of Sale v2.4 available" tone="info" dismissible>
  New version includes faster checkout processing and inventory sync
  improvements.
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/apps/pos/changelog"
  >
    View changes
  </s-button>
  <s-button slot="secondary-actions" variant="secondary">
    Install update
  </s-button>
</s-banner>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Events

Learn more about [registering events](https://shopify.dev/docs/api/app-home/using-polaris-components#event-handling).

### BannerEvents

### afterhide

value: `CallbackEventListener<typeof tagName> | null`

  - CallbackEventListener: (EventListener & {
      (event: CallbackEvent<T>): void;
    }) | null
  - CallbackEvent: Event & {
  currentTarget: HTMLElementTagNameMap[T];
}

### dismiss

value: `CallbackEventListener<typeof tagName> | null`

  - CallbackEventListener: (EventListener & {
      (event: CallbackEvent<T>): void;
    }) | null
  - CallbackEvent: Event & {
  currentTarget: HTMLElementTagNameMap[T];
}

## Examples

Highlights important information or required actions prominently within the interface. Use to communicate statuses, provide feedback, or draw attention to critical updates.


### Basic usage

Demonstrates a simple informational banner used to communicate status updates or completed actions, providing clear and concise feedback to the user.```jsx
<s-banner heading="Order archived">
  This order was archived on March 7, 2017 at 3:12pm EDT.
</s-banner>
```

```html
<s-banner heading="Order archived">
  This order was archived on March 7, 2017 at 3:12pm EDT.
</s-banner>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-banner heading="Order archived">
  This order was archived on March 7, 2017 at 3:12pm EDT.
</s-banner>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates a warning banner that highlights a potential issue and provides actionable buttons to help users resolve the problem quickly and effectively.```jsx
<s-banner heading="127 products missing shipping weights" tone="warning">
  Products without weights may show inaccurate shipping rates, leading to
  checkout abandonment.
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/products?filter=missing-weights"
  >
    Review products
  </s-button>
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="javascript:void(0)"
  >
    Setup guide
  </s-button>
</s-banner>
```

```html
<s-banner heading="127 products missing shipping weights" tone="warning">
  Products without weights may show inaccurate shipping rates, leading to
  checkout abandonment.
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/products?filter=missing-weights"
  >
    Review products
  </s-button>
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="javascript:void(0)"
  >
    Setup guide
  </s-button>
</s-banner>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-banner heading="127 products missing shipping weights" tone="warning">
  Products without weights may show inaccurate shipping rates, leading to
  checkout abandonment.
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/products?filter=missing-weights"
  >
    Review products
  </s-button>
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="javascript:void(0)"
  >
    Setup guide
  </s-button>
</s-banner>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates an urgent banner design that signals a critical issue requiring immediate action, with clear and prominent secondary action buttons to guide users.```jsx
<s-banner heading="Order #1024 flagged for fraud review" tone="critical">
  This order shows multiple risk indicators and cannot be auto-fulfilled. Review
  required within 24 hours to prevent automatic cancellation.
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/orders/1024/risk"
  >
    Review order details
  </s-button>
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/settings/payments/fraud"
  >
    Adjust fraud settings
  </s-button>
</s-banner>
```

```html
<s-banner heading="Order #1024 flagged for fraud review" tone="critical">
  This order shows multiple risk indicators and cannot be auto-fulfilled. Review
  required within 24 hours to prevent automatic cancellation.
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/orders/1024/risk"
  >
    Review order details
  </s-button>
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/settings/payments/fraud"
  >
    Adjust fraud settings
  </s-button>
</s-banner>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-banner heading="Order #1024 flagged for fraud review" tone="critical">
  This order shows multiple risk indicators and cannot be auto-fulfilled. Review
  required within 24 hours to prevent automatic cancellation.
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/orders/1024/risk"
  >
    Review order details
  </s-button>
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/settings/payments/fraud"
  >
    Adjust fraud settings
  </s-button>
</s-banner>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Success confirmation with dismiss option for completed operations.```jsx
<s-banner heading="Products imported" tone="success" dismissible={true}>
  Successfully imported 50 products to your store.
</s-banner>
```

```html
<s-banner heading="Products imported" tone="success" dismissible="true">
  Successfully imported 50 products to your store.
</s-banner>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-banner heading="Products imported" tone="success" dismissible={true}>
  Successfully imported 50 products to your store.
</s-banner>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Informational banner highlighting app updates with clear benefits and actions.```jsx
<s-banner heading="Point of Sale v2.4 available" tone="info" dismissible>
  New version includes faster checkout processing and inventory sync
  improvements.
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/apps/pos/changelog"
  >
    View changes
  </s-button>
  <s-button slot="secondary-actions" variant="secondary">
    Install update
  </s-button>
</s-banner>
```

```html
<s-banner heading="Point of Sale v2.4 available" tone="info" dismissible>
  New version includes faster checkout processing and inventory sync
  improvements.
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/apps/pos/changelog"
  >
    View changes
  </s-button>
  <s-button slot="secondary-actions" variant="secondary">
    Install update
  </s-button>
</s-banner>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-banner heading="Point of Sale v2.4 available" tone="info" dismissible>
  New version includes faster checkout processing and inventory sync
  improvements.
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/apps/pos/changelog"
  >
    View changes
  </s-button>
  <s-button slot="secondary-actions" variant="secondary">
    Install update
  </s-button>
</s-banner>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Slots

### BannerSlots

### children

value: `HTMLElement`

The content of the Banner.

### secondary-actions

value: `HTMLElement`

The secondary actions to display at the bottom of the Banner.

Only Buttons with the `variant` of "secondary" or "auto" are permitted. A maximum of two `s-button` components are allowed.

## Examples

Highlights important information or required actions prominently within the interface. Use to communicate statuses, provide feedback, or draw attention to critical updates.


### Basic usage

Demonstrates a simple informational banner used to communicate status updates or completed actions, providing clear and concise feedback to the user.```jsx
<s-banner heading="Order archived">
  This order was archived on March 7, 2017 at 3:12pm EDT.
</s-banner>
```

```html
<s-banner heading="Order archived">
  This order was archived on March 7, 2017 at 3:12pm EDT.
</s-banner>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-banner heading="Order archived">
  This order was archived on March 7, 2017 at 3:12pm EDT.
</s-banner>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates a warning banner that highlights a potential issue and provides actionable buttons to help users resolve the problem quickly and effectively.```jsx
<s-banner heading="127 products missing shipping weights" tone="warning">
  Products without weights may show inaccurate shipping rates, leading to
  checkout abandonment.
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/products?filter=missing-weights"
  >
    Review products
  </s-button>
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="javascript:void(0)"
  >
    Setup guide
  </s-button>
</s-banner>
```

```html
<s-banner heading="127 products missing shipping weights" tone="warning">
  Products without weights may show inaccurate shipping rates, leading to
  checkout abandonment.
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/products?filter=missing-weights"
  >
    Review products
  </s-button>
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="javascript:void(0)"
  >
    Setup guide
  </s-button>
</s-banner>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-banner heading="127 products missing shipping weights" tone="warning">
  Products without weights may show inaccurate shipping rates, leading to
  checkout abandonment.
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/products?filter=missing-weights"
  >
    Review products
  </s-button>
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="javascript:void(0)"
  >
    Setup guide
  </s-button>
</s-banner>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates an urgent banner design that signals a critical issue requiring immediate action, with clear and prominent secondary action buttons to guide users.```jsx
<s-banner heading="Order #1024 flagged for fraud review" tone="critical">
  This order shows multiple risk indicators and cannot be auto-fulfilled. Review
  required within 24 hours to prevent automatic cancellation.
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/orders/1024/risk"
  >
    Review order details
  </s-button>
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/settings/payments/fraud"
  >
    Adjust fraud settings
  </s-button>
</s-banner>
```

```html
<s-banner heading="Order #1024 flagged for fraud review" tone="critical">
  This order shows multiple risk indicators and cannot be auto-fulfilled. Review
  required within 24 hours to prevent automatic cancellation.
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/orders/1024/risk"
  >
    Review order details
  </s-button>
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/settings/payments/fraud"
  >
    Adjust fraud settings
  </s-button>
</s-banner>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-banner heading="Order #1024 flagged for fraud review" tone="critical">
  This order shows multiple risk indicators and cannot be auto-fulfilled. Review
  required within 24 hours to prevent automatic cancellation.
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/orders/1024/risk"
  >
    Review order details
  </s-button>
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/settings/payments/fraud"
  >
    Adjust fraud settings
  </s-button>
</s-banner>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Success confirmation with dismiss option for completed operations.```jsx
<s-banner heading="Products imported" tone="success" dismissible={true}>
  Successfully imported 50 products to your store.
</s-banner>
```

```html
<s-banner heading="Products imported" tone="success" dismissible="true">
  Successfully imported 50 products to your store.
</s-banner>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-banner heading="Products imported" tone="success" dismissible={true}>
  Successfully imported 50 products to your store.
</s-banner>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Informational banner highlighting app updates with clear benefits and actions.```jsx
<s-banner heading="Point of Sale v2.4 available" tone="info" dismissible>
  New version includes faster checkout processing and inventory sync
  improvements.
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/apps/pos/changelog"
  >
    View changes
  </s-button>
  <s-button slot="secondary-actions" variant="secondary">
    Install update
  </s-button>
</s-banner>
```

```html
<s-banner heading="Point of Sale v2.4 available" tone="info" dismissible>
  New version includes faster checkout processing and inventory sync
  improvements.
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/apps/pos/changelog"
  >
    View changes
  </s-button>
  <s-button slot="secondary-actions" variant="secondary">
    Install update
  </s-button>
</s-banner>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-banner heading="Point of Sale v2.4 available" tone="info" dismissible>
  New version includes faster checkout processing and inventory sync
  improvements.
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/apps/pos/changelog"
  >
    View changes
  </s-button>
  <s-button slot="secondary-actions" variant="secondary">
    Install update
  </s-button>
</s-banner>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Examples

Highlights important information or required actions prominently within the interface. Use to communicate statuses, provide feedback, or draw attention to critical updates.


### Basic usage

Demonstrates a simple informational banner used to communicate status updates or completed actions, providing clear and concise feedback to the user.```jsx
<s-banner heading="Order archived">
  This order was archived on March 7, 2017 at 3:12pm EDT.
</s-banner>
```

```html
<s-banner heading="Order archived">
  This order was archived on March 7, 2017 at 3:12pm EDT.
</s-banner>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-banner heading="Order archived">
  This order was archived on March 7, 2017 at 3:12pm EDT.
</s-banner>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates a warning banner that highlights a potential issue and provides actionable buttons to help users resolve the problem quickly and effectively.```jsx
<s-banner heading="127 products missing shipping weights" tone="warning">
  Products without weights may show inaccurate shipping rates, leading to
  checkout abandonment.
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/products?filter=missing-weights"
  >
    Review products
  </s-button>
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="javascript:void(0)"
  >
    Setup guide
  </s-button>
</s-banner>
```

```html
<s-banner heading="127 products missing shipping weights" tone="warning">
  Products without weights may show inaccurate shipping rates, leading to
  checkout abandonment.
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/products?filter=missing-weights"
  >
    Review products
  </s-button>
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="javascript:void(0)"
  >
    Setup guide
  </s-button>
</s-banner>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-banner heading="127 products missing shipping weights" tone="warning">
  Products without weights may show inaccurate shipping rates, leading to
  checkout abandonment.
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/products?filter=missing-weights"
  >
    Review products
  </s-button>
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="javascript:void(0)"
  >
    Setup guide
  </s-button>
</s-banner>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates an urgent banner design that signals a critical issue requiring immediate action, with clear and prominent secondary action buttons to guide users.```jsx
<s-banner heading="Order #1024 flagged for fraud review" tone="critical">
  This order shows multiple risk indicators and cannot be auto-fulfilled. Review
  required within 24 hours to prevent automatic cancellation.
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/orders/1024/risk"
  >
    Review order details
  </s-button>
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/settings/payments/fraud"
  >
    Adjust fraud settings
  </s-button>
</s-banner>
```

```html
<s-banner heading="Order #1024 flagged for fraud review" tone="critical">
  This order shows multiple risk indicators and cannot be auto-fulfilled. Review
  required within 24 hours to prevent automatic cancellation.
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/orders/1024/risk"
  >
    Review order details
  </s-button>
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/settings/payments/fraud"
  >
    Adjust fraud settings
  </s-button>
</s-banner>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-banner heading="Order #1024 flagged for fraud review" tone="critical">
  This order shows multiple risk indicators and cannot be auto-fulfilled. Review
  required within 24 hours to prevent automatic cancellation.
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/orders/1024/risk"
  >
    Review order details
  </s-button>
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/settings/payments/fraud"
  >
    Adjust fraud settings
  </s-button>
</s-banner>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Success confirmation with dismiss option for completed operations.```jsx
<s-banner heading="Products imported" tone="success" dismissible={true}>
  Successfully imported 50 products to your store.
</s-banner>
```

```html
<s-banner heading="Products imported" tone="success" dismissible="true">
  Successfully imported 50 products to your store.
</s-banner>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-banner heading="Products imported" tone="success" dismissible={true}>
  Successfully imported 50 products to your store.
</s-banner>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Informational banner highlighting app updates with clear benefits and actions.```jsx
<s-banner heading="Point of Sale v2.4 available" tone="info" dismissible>
  New version includes faster checkout processing and inventory sync
  improvements.
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/apps/pos/changelog"
  >
    View changes
  </s-button>
  <s-button slot="secondary-actions" variant="secondary">
    Install update
  </s-button>
</s-banner>
```

```html
<s-banner heading="Point of Sale v2.4 available" tone="info" dismissible>
  New version includes faster checkout processing and inventory sync
  improvements.
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/apps/pos/changelog"
  >
    View changes
  </s-button>
  <s-button slot="secondary-actions" variant="secondary">
    Install update
  </s-button>
</s-banner>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-banner heading="Point of Sale v2.4 available" tone="info" dismissible>
  New version includes faster checkout processing and inventory sync
  improvements.
  <s-button
    slot="secondary-actions"
    variant="secondary"
    href="/admin/apps/pos/changelog"
  >
    View changes
  </s-button>
  <s-button slot="secondary-actions" variant="secondary">
    Install update
  </s-button>
</s-banner>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

