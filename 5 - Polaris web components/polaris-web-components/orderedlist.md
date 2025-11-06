# OrderedList

Displays a numbered list of related items in a specific sequence. Use to present step-by-step instructions, ranked items, or procedures where order matters.

```jsx
<s-ordered-list>
  <s-list-item>Red shirt</s-list-item>
  <s-list-item>Green shirt</s-list-item>
  <s-list-item>Blue shirt</s-list-item>
</s-ordered-list>
```

```html
<s-ordered-list>
  <s-list-item>Red shirt</s-list-item>
  <s-list-item>Green shirt</s-list-item>
  <s-list-item>Blue shirt</s-list-item>
</s-ordered-list>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-ordered-list>
  <s-list-item>Red shirt</s-list-item>
  <s-list-item>Green shirt</s-list-item>
  <s-list-item>Blue shirt</s-list-item>
</s-ordered-list>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Slots

### OrderedListSlots

### children

value: `HTMLElement`

The items of the OrderedList.

Only ListItems are accepted.

## Examples

Displays a numbered list of related items in a specific sequence. Use to present step-by-step instructions, ranked items, or procedures where order matters.


### Basic usage

Demonstrates a simple ordered list with three sequential steps.```jsx
<s-ordered-list>
  <s-list-item>Add products to your catalog</s-list-item>
  <s-list-item>Set up payment methods</s-list-item>
  <s-list-item>Configure shipping zones</s-list-item>
</s-ordered-list>

```

```html
<s-ordered-list>
  <s-list-item>Add products to your catalog</s-list-item>
  <s-list-item>Set up payment methods</s-list-item>
  <s-list-item>Configure shipping zones</s-list-item>
</s-ordered-list>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-ordered-list>
  <s-list-item>Add products to your catalog</s-list-item>
  <s-list-item>Set up payment methods</s-list-item>
  <s-list-item>Configure shipping zones</s-list-item>
</s-ordered-list>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows an ordered list with multiple steps in a workflow process.```jsx
<s-ordered-list>
  <s-list-item>Review order details and customer information</s-list-item>
  <s-list-item>Verify payment and billing address</s-list-item>
  <s-list-item>Check inventory availability for all items</s-list-item>
  <s-list-item>Generate fulfillment labels and packing slip</s-list-item>
  <s-list-item>Package items and update tracking information</s-list-item>
  <s-list-item>Send shipment confirmation to customer</s-list-item>
</s-ordered-list>

```

```html
<s-ordered-list>
  <s-list-item>Review order details and customer information</s-list-item>
  <s-list-item>Verify payment and billing address</s-list-item>
  <s-list-item>Check inventory availability for all items</s-list-item>
  <s-list-item>Generate fulfillment labels and packing slip</s-list-item>
  <s-list-item>Package items and update tracking information</s-list-item>
  <s-list-item>Send shipment confirmation to customer</s-list-item>
</s-ordered-list>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-ordered-list>
  <s-list-item>Review order details and customer information</s-list-item>
  <s-list-item>Verify payment and billing address</s-list-item>
  <s-list-item>Check inventory availability for all items</s-list-item>
  <s-list-item>Generate fulfillment labels and packing slip</s-list-item>
  <s-list-item>Package items and update tracking information</s-list-item>
  <s-list-item>Send shipment confirmation to customer</s-list-item>
</s-ordered-list>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates a nested ordered list with sub-steps within main steps.```jsx
<s-ordered-list>
  <s-list-item>
    Create product listing with title and description
    <s-ordered-list>
      <s-list-item>Add high-quality product images</s-list-item>
      <s-list-item>Set SEO title and meta description</s-list-item>
    </s-ordered-list>
  </s-list-item>
  <s-list-item>Configure pricing and inventory tracking</s-list-item>
  <s-list-item>Set up product variants (size, color, material)</s-list-item>
  <s-list-item>Enable inventory tracking and set stock levels</s-list-item>
  <s-list-item>Review and publish product to storefront</s-list-item>
</s-ordered-list>

```

```html
<s-ordered-list>
  <s-list-item>
    Create product listing with title and description
    <s-ordered-list>
      <s-list-item>Add high-quality product images</s-list-item>
      <s-list-item>Set SEO title and meta description</s-list-item>
    </s-ordered-list>
  </s-list-item>
  <s-list-item>Configure pricing and inventory tracking</s-list-item>
  <s-list-item>Set up product variants (size, color, material)</s-list-item>
  <s-list-item>Enable inventory tracking and set stock levels</s-list-item>
  <s-list-item>Review and publish product to storefront</s-list-item>
</s-ordered-list>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-ordered-list>
  <s-list-item>
    Create product listing with title and description
    <s-ordered-list>
      <s-list-item>Add high-quality product images</s-list-item>
      <s-list-item>Set SEO title and meta description</s-list-item>
    </s-ordered-list>
  </s-list-item>
  <s-list-item>Configure pricing and inventory tracking</s-list-item>
  <s-list-item>Set up product variants (size, color, material)</s-list-item>
  <s-list-item>Enable inventory tracking and set stock levels</s-list-item>
  <s-list-item>Review and publish product to storefront</s-list-item>
</s-ordered-list>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Displays a complex nested list with multiple levels of sub-steps.```jsx
<s-ordered-list>
  <s-list-item>
    Process payment
    <s-ordered-list>
      <s-list-item>Verify card details</s-list-item>
      <s-list-item>Apply discount codes</s-list-item>
      <s-list-item>Calculate taxes</s-list-item>
    </s-ordered-list>
  </s-list-item>
  <s-list-item>
    Prepare shipment
    <s-ordered-list>
      <s-list-item>Print shipping label</s-list-item>
      <s-list-item>Pack items securely</s-list-item>
    </s-ordered-list>
  </s-list-item>
  <s-list-item>Update customer with tracking info</s-list-item>
</s-ordered-list>

```

```html
<s-ordered-list>
  <s-list-item>
    Process payment
    <s-ordered-list>
      <s-list-item>Verify card details</s-list-item>
      <s-list-item>Apply discount codes</s-list-item>
      <s-list-item>Calculate taxes</s-list-item>
    </s-ordered-list>
  </s-list-item>
  <s-list-item>
    Prepare shipment
    <s-ordered-list>
      <s-list-item>Print shipping label</s-list-item>
      <s-list-item>Pack items securely</s-list-item>
    </s-ordered-list>
  </s-list-item>
  <s-list-item>Update customer with tracking info</s-list-item>
</s-ordered-list>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-ordered-list>
  <s-list-item>
    Process payment
    <s-ordered-list>
      <s-list-item>Verify card details</s-list-item>
      <s-list-item>Apply discount codes</s-list-item>
      <s-list-item>Calculate taxes</s-list-item>
    </s-ordered-list>
  </s-list-item>
  <s-list-item>
    Prepare shipment
    <s-ordered-list>
      <s-list-item>Print shipping label</s-list-item>
      <s-list-item>Pack items securely</s-list-item>
    </s-ordered-list>
  </s-list-item>
  <s-list-item>Update customer with tracking info</s-list-item>
</s-ordered-list>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## ListItem

Represents a single item within an unordered or ordered list. Use only as a child of `s-unordered-list` or `s-ordered-list` components.

### ListItem

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


### queueRender

value: `() => void`

Queue a run of the render function. You shouldn't need to call this manually - it should be handled by changes to

### setAttribute

value: `(name: string, value: string) => void`


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

Displays a numbered list of related items in a specific sequence. Use to present step-by-step instructions, ranked items, or procedures where order matters.


### Basic usage

Demonstrates a simple ordered list with three sequential steps.```jsx
<s-ordered-list>
  <s-list-item>Add products to your catalog</s-list-item>
  <s-list-item>Set up payment methods</s-list-item>
  <s-list-item>Configure shipping zones</s-list-item>
</s-ordered-list>

```

```html
<s-ordered-list>
  <s-list-item>Add products to your catalog</s-list-item>
  <s-list-item>Set up payment methods</s-list-item>
  <s-list-item>Configure shipping zones</s-list-item>
</s-ordered-list>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-ordered-list>
  <s-list-item>Add products to your catalog</s-list-item>
  <s-list-item>Set up payment methods</s-list-item>
  <s-list-item>Configure shipping zones</s-list-item>
</s-ordered-list>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows an ordered list with multiple steps in a workflow process.```jsx
<s-ordered-list>
  <s-list-item>Review order details and customer information</s-list-item>
  <s-list-item>Verify payment and billing address</s-list-item>
  <s-list-item>Check inventory availability for all items</s-list-item>
  <s-list-item>Generate fulfillment labels and packing slip</s-list-item>
  <s-list-item>Package items and update tracking information</s-list-item>
  <s-list-item>Send shipment confirmation to customer</s-list-item>
</s-ordered-list>

```

```html
<s-ordered-list>
  <s-list-item>Review order details and customer information</s-list-item>
  <s-list-item>Verify payment and billing address</s-list-item>
  <s-list-item>Check inventory availability for all items</s-list-item>
  <s-list-item>Generate fulfillment labels and packing slip</s-list-item>
  <s-list-item>Package items and update tracking information</s-list-item>
  <s-list-item>Send shipment confirmation to customer</s-list-item>
</s-ordered-list>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-ordered-list>
  <s-list-item>Review order details and customer information</s-list-item>
  <s-list-item>Verify payment and billing address</s-list-item>
  <s-list-item>Check inventory availability for all items</s-list-item>
  <s-list-item>Generate fulfillment labels and packing slip</s-list-item>
  <s-list-item>Package items and update tracking information</s-list-item>
  <s-list-item>Send shipment confirmation to customer</s-list-item>
</s-ordered-list>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates a nested ordered list with sub-steps within main steps.```jsx
<s-ordered-list>
  <s-list-item>
    Create product listing with title and description
    <s-ordered-list>
      <s-list-item>Add high-quality product images</s-list-item>
      <s-list-item>Set SEO title and meta description</s-list-item>
    </s-ordered-list>
  </s-list-item>
  <s-list-item>Configure pricing and inventory tracking</s-list-item>
  <s-list-item>Set up product variants (size, color, material)</s-list-item>
  <s-list-item>Enable inventory tracking and set stock levels</s-list-item>
  <s-list-item>Review and publish product to storefront</s-list-item>
</s-ordered-list>

```

```html
<s-ordered-list>
  <s-list-item>
    Create product listing with title and description
    <s-ordered-list>
      <s-list-item>Add high-quality product images</s-list-item>
      <s-list-item>Set SEO title and meta description</s-list-item>
    </s-ordered-list>
  </s-list-item>
  <s-list-item>Configure pricing and inventory tracking</s-list-item>
  <s-list-item>Set up product variants (size, color, material)</s-list-item>
  <s-list-item>Enable inventory tracking and set stock levels</s-list-item>
  <s-list-item>Review and publish product to storefront</s-list-item>
</s-ordered-list>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-ordered-list>
  <s-list-item>
    Create product listing with title and description
    <s-ordered-list>
      <s-list-item>Add high-quality product images</s-list-item>
      <s-list-item>Set SEO title and meta description</s-list-item>
    </s-ordered-list>
  </s-list-item>
  <s-list-item>Configure pricing and inventory tracking</s-list-item>
  <s-list-item>Set up product variants (size, color, material)</s-list-item>
  <s-list-item>Enable inventory tracking and set stock levels</s-list-item>
  <s-list-item>Review and publish product to storefront</s-list-item>
</s-ordered-list>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Displays a complex nested list with multiple levels of sub-steps.```jsx
<s-ordered-list>
  <s-list-item>
    Process payment
    <s-ordered-list>
      <s-list-item>Verify card details</s-list-item>
      <s-list-item>Apply discount codes</s-list-item>
      <s-list-item>Calculate taxes</s-list-item>
    </s-ordered-list>
  </s-list-item>
  <s-list-item>
    Prepare shipment
    <s-ordered-list>
      <s-list-item>Print shipping label</s-list-item>
      <s-list-item>Pack items securely</s-list-item>
    </s-ordered-list>
  </s-list-item>
  <s-list-item>Update customer with tracking info</s-list-item>
</s-ordered-list>

```

```html
<s-ordered-list>
  <s-list-item>
    Process payment
    <s-ordered-list>
      <s-list-item>Verify card details</s-list-item>
      <s-list-item>Apply discount codes</s-list-item>
      <s-list-item>Calculate taxes</s-list-item>
    </s-ordered-list>
  </s-list-item>
  <s-list-item>
    Prepare shipment
    <s-ordered-list>
      <s-list-item>Print shipping label</s-list-item>
      <s-list-item>Pack items securely</s-list-item>
    </s-ordered-list>
  </s-list-item>
  <s-list-item>Update customer with tracking info</s-list-item>
</s-ordered-list>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-ordered-list>
  <s-list-item>
    Process payment
    <s-ordered-list>
      <s-list-item>Verify card details</s-list-item>
      <s-list-item>Apply discount codes</s-list-item>
      <s-list-item>Calculate taxes</s-list-item>
    </s-ordered-list>
  </s-list-item>
  <s-list-item>
    Prepare shipment
    <s-ordered-list>
      <s-list-item>Print shipping label</s-list-item>
      <s-list-item>Pack items securely</s-list-item>
    </s-ordered-list>
  </s-list-item>
  <s-list-item>Update customer with tracking info</s-list-item>
</s-ordered-list>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Slots

### ListItemSlots

### children

value: `HTMLElement`

The content of the ListItem.

## Examples

Displays a numbered list of related items in a specific sequence. Use to present step-by-step instructions, ranked items, or procedures where order matters.


### Basic usage

Demonstrates a simple ordered list with three sequential steps.```jsx
<s-ordered-list>
  <s-list-item>Add products to your catalog</s-list-item>
  <s-list-item>Set up payment methods</s-list-item>
  <s-list-item>Configure shipping zones</s-list-item>
</s-ordered-list>

```

```html
<s-ordered-list>
  <s-list-item>Add products to your catalog</s-list-item>
  <s-list-item>Set up payment methods</s-list-item>
  <s-list-item>Configure shipping zones</s-list-item>
</s-ordered-list>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-ordered-list>
  <s-list-item>Add products to your catalog</s-list-item>
  <s-list-item>Set up payment methods</s-list-item>
  <s-list-item>Configure shipping zones</s-list-item>
</s-ordered-list>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows an ordered list with multiple steps in a workflow process.```jsx
<s-ordered-list>
  <s-list-item>Review order details and customer information</s-list-item>
  <s-list-item>Verify payment and billing address</s-list-item>
  <s-list-item>Check inventory availability for all items</s-list-item>
  <s-list-item>Generate fulfillment labels and packing slip</s-list-item>
  <s-list-item>Package items and update tracking information</s-list-item>
  <s-list-item>Send shipment confirmation to customer</s-list-item>
</s-ordered-list>

```

```html
<s-ordered-list>
  <s-list-item>Review order details and customer information</s-list-item>
  <s-list-item>Verify payment and billing address</s-list-item>
  <s-list-item>Check inventory availability for all items</s-list-item>
  <s-list-item>Generate fulfillment labels and packing slip</s-list-item>
  <s-list-item>Package items and update tracking information</s-list-item>
  <s-list-item>Send shipment confirmation to customer</s-list-item>
</s-ordered-list>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-ordered-list>
  <s-list-item>Review order details and customer information</s-list-item>
  <s-list-item>Verify payment and billing address</s-list-item>
  <s-list-item>Check inventory availability for all items</s-list-item>
  <s-list-item>Generate fulfillment labels and packing slip</s-list-item>
  <s-list-item>Package items and update tracking information</s-list-item>
  <s-list-item>Send shipment confirmation to customer</s-list-item>
</s-ordered-list>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates a nested ordered list with sub-steps within main steps.```jsx
<s-ordered-list>
  <s-list-item>
    Create product listing with title and description
    <s-ordered-list>
      <s-list-item>Add high-quality product images</s-list-item>
      <s-list-item>Set SEO title and meta description</s-list-item>
    </s-ordered-list>
  </s-list-item>
  <s-list-item>Configure pricing and inventory tracking</s-list-item>
  <s-list-item>Set up product variants (size, color, material)</s-list-item>
  <s-list-item>Enable inventory tracking and set stock levels</s-list-item>
  <s-list-item>Review and publish product to storefront</s-list-item>
</s-ordered-list>

```

```html
<s-ordered-list>
  <s-list-item>
    Create product listing with title and description
    <s-ordered-list>
      <s-list-item>Add high-quality product images</s-list-item>
      <s-list-item>Set SEO title and meta description</s-list-item>
    </s-ordered-list>
  </s-list-item>
  <s-list-item>Configure pricing and inventory tracking</s-list-item>
  <s-list-item>Set up product variants (size, color, material)</s-list-item>
  <s-list-item>Enable inventory tracking and set stock levels</s-list-item>
  <s-list-item>Review and publish product to storefront</s-list-item>
</s-ordered-list>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-ordered-list>
  <s-list-item>
    Create product listing with title and description
    <s-ordered-list>
      <s-list-item>Add high-quality product images</s-list-item>
      <s-list-item>Set SEO title and meta description</s-list-item>
    </s-ordered-list>
  </s-list-item>
  <s-list-item>Configure pricing and inventory tracking</s-list-item>
  <s-list-item>Set up product variants (size, color, material)</s-list-item>
  <s-list-item>Enable inventory tracking and set stock levels</s-list-item>
  <s-list-item>Review and publish product to storefront</s-list-item>
</s-ordered-list>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Displays a complex nested list with multiple levels of sub-steps.```jsx
<s-ordered-list>
  <s-list-item>
    Process payment
    <s-ordered-list>
      <s-list-item>Verify card details</s-list-item>
      <s-list-item>Apply discount codes</s-list-item>
      <s-list-item>Calculate taxes</s-list-item>
    </s-ordered-list>
  </s-list-item>
  <s-list-item>
    Prepare shipment
    <s-ordered-list>
      <s-list-item>Print shipping label</s-list-item>
      <s-list-item>Pack items securely</s-list-item>
    </s-ordered-list>
  </s-list-item>
  <s-list-item>Update customer with tracking info</s-list-item>
</s-ordered-list>

```

```html
<s-ordered-list>
  <s-list-item>
    Process payment
    <s-ordered-list>
      <s-list-item>Verify card details</s-list-item>
      <s-list-item>Apply discount codes</s-list-item>
      <s-list-item>Calculate taxes</s-list-item>
    </s-ordered-list>
  </s-list-item>
  <s-list-item>
    Prepare shipment
    <s-ordered-list>
      <s-list-item>Print shipping label</s-list-item>
      <s-list-item>Pack items securely</s-list-item>
    </s-ordered-list>
  </s-list-item>
  <s-list-item>Update customer with tracking info</s-list-item>
</s-ordered-list>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-ordered-list>
  <s-list-item>
    Process payment
    <s-ordered-list>
      <s-list-item>Verify card details</s-list-item>
      <s-list-item>Apply discount codes</s-list-item>
      <s-list-item>Calculate taxes</s-list-item>
    </s-ordered-list>
  </s-list-item>
  <s-list-item>
    Prepare shipment
    <s-ordered-list>
      <s-list-item>Print shipping label</s-list-item>
      <s-list-item>Pack items securely</s-list-item>
    </s-ordered-list>
  </s-list-item>
  <s-list-item>Update customer with tracking info</s-list-item>
</s-ordered-list>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Examples

Displays a numbered list of related items in a specific sequence. Use to present step-by-step instructions, ranked items, or procedures where order matters.


### Basic usage

Demonstrates a simple ordered list with three sequential steps.```jsx
<s-ordered-list>
  <s-list-item>Add products to your catalog</s-list-item>
  <s-list-item>Set up payment methods</s-list-item>
  <s-list-item>Configure shipping zones</s-list-item>
</s-ordered-list>

```

```html
<s-ordered-list>
  <s-list-item>Add products to your catalog</s-list-item>
  <s-list-item>Set up payment methods</s-list-item>
  <s-list-item>Configure shipping zones</s-list-item>
</s-ordered-list>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-ordered-list>
  <s-list-item>Add products to your catalog</s-list-item>
  <s-list-item>Set up payment methods</s-list-item>
  <s-list-item>Configure shipping zones</s-list-item>
</s-ordered-list>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows an ordered list with multiple steps in a workflow process.```jsx
<s-ordered-list>
  <s-list-item>Review order details and customer information</s-list-item>
  <s-list-item>Verify payment and billing address</s-list-item>
  <s-list-item>Check inventory availability for all items</s-list-item>
  <s-list-item>Generate fulfillment labels and packing slip</s-list-item>
  <s-list-item>Package items and update tracking information</s-list-item>
  <s-list-item>Send shipment confirmation to customer</s-list-item>
</s-ordered-list>

```

```html
<s-ordered-list>
  <s-list-item>Review order details and customer information</s-list-item>
  <s-list-item>Verify payment and billing address</s-list-item>
  <s-list-item>Check inventory availability for all items</s-list-item>
  <s-list-item>Generate fulfillment labels and packing slip</s-list-item>
  <s-list-item>Package items and update tracking information</s-list-item>
  <s-list-item>Send shipment confirmation to customer</s-list-item>
</s-ordered-list>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-ordered-list>
  <s-list-item>Review order details and customer information</s-list-item>
  <s-list-item>Verify payment and billing address</s-list-item>
  <s-list-item>Check inventory availability for all items</s-list-item>
  <s-list-item>Generate fulfillment labels and packing slip</s-list-item>
  <s-list-item>Package items and update tracking information</s-list-item>
  <s-list-item>Send shipment confirmation to customer</s-list-item>
</s-ordered-list>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates a nested ordered list with sub-steps within main steps.```jsx
<s-ordered-list>
  <s-list-item>
    Create product listing with title and description
    <s-ordered-list>
      <s-list-item>Add high-quality product images</s-list-item>
      <s-list-item>Set SEO title and meta description</s-list-item>
    </s-ordered-list>
  </s-list-item>
  <s-list-item>Configure pricing and inventory tracking</s-list-item>
  <s-list-item>Set up product variants (size, color, material)</s-list-item>
  <s-list-item>Enable inventory tracking and set stock levels</s-list-item>
  <s-list-item>Review and publish product to storefront</s-list-item>
</s-ordered-list>

```

```html
<s-ordered-list>
  <s-list-item>
    Create product listing with title and description
    <s-ordered-list>
      <s-list-item>Add high-quality product images</s-list-item>
      <s-list-item>Set SEO title and meta description</s-list-item>
    </s-ordered-list>
  </s-list-item>
  <s-list-item>Configure pricing and inventory tracking</s-list-item>
  <s-list-item>Set up product variants (size, color, material)</s-list-item>
  <s-list-item>Enable inventory tracking and set stock levels</s-list-item>
  <s-list-item>Review and publish product to storefront</s-list-item>
</s-ordered-list>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-ordered-list>
  <s-list-item>
    Create product listing with title and description
    <s-ordered-list>
      <s-list-item>Add high-quality product images</s-list-item>
      <s-list-item>Set SEO title and meta description</s-list-item>
    </s-ordered-list>
  </s-list-item>
  <s-list-item>Configure pricing and inventory tracking</s-list-item>
  <s-list-item>Set up product variants (size, color, material)</s-list-item>
  <s-list-item>Enable inventory tracking and set stock levels</s-list-item>
  <s-list-item>Review and publish product to storefront</s-list-item>
</s-ordered-list>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Displays a complex nested list with multiple levels of sub-steps.```jsx
<s-ordered-list>
  <s-list-item>
    Process payment
    <s-ordered-list>
      <s-list-item>Verify card details</s-list-item>
      <s-list-item>Apply discount codes</s-list-item>
      <s-list-item>Calculate taxes</s-list-item>
    </s-ordered-list>
  </s-list-item>
  <s-list-item>
    Prepare shipment
    <s-ordered-list>
      <s-list-item>Print shipping label</s-list-item>
      <s-list-item>Pack items securely</s-list-item>
    </s-ordered-list>
  </s-list-item>
  <s-list-item>Update customer with tracking info</s-list-item>
</s-ordered-list>

```

```html
<s-ordered-list>
  <s-list-item>
    Process payment
    <s-ordered-list>
      <s-list-item>Verify card details</s-list-item>
      <s-list-item>Apply discount codes</s-list-item>
      <s-list-item>Calculate taxes</s-list-item>
    </s-ordered-list>
  </s-list-item>
  <s-list-item>
    Prepare shipment
    <s-ordered-list>
      <s-list-item>Print shipping label</s-list-item>
      <s-list-item>Pack items securely</s-list-item>
    </s-ordered-list>
  </s-list-item>
  <s-list-item>Update customer with tracking info</s-list-item>
</s-ordered-list>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-ordered-list>
  <s-list-item>
    Process payment
    <s-ordered-list>
      <s-list-item>Verify card details</s-list-item>
      <s-list-item>Apply discount codes</s-list-item>
      <s-list-item>Calculate taxes</s-list-item>
    </s-ordered-list>
  </s-list-item>
  <s-list-item>
    Prepare shipment
    <s-ordered-list>
      <s-list-item>Print shipping label</s-list-item>
      <s-list-item>Pack items securely</s-list-item>
    </s-ordered-list>
  </s-list-item>
  <s-list-item>Update customer with tracking info</s-list-item>
</s-ordered-list>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

