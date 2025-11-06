# Menu

Use Menu to display a list of actions that can be performed on a resource.

```jsx
<>
  <s-button commandFor="customer-menu">Edit customer</s-button>

  <s-menu id="customer-menu" accessibilityLabel="Customer actions">
    <s-button icon="merge">Merge customer</s-button>
    <s-button icon="incoming">Request customer data</s-button>
    <s-button icon="delete" tone="critical">
      Delete customer
    </s-button>
  </s-menu>
</>
```

```html
<s-button commandFor="customer-menu">Edit customer</s-button>

<s-menu id="customer-menu" accessibilityLabel="Customer actions">
  <s-button icon="merge">Merge customer</s-button>
  <s-button icon="incoming">Request customer data</s-button>
  <s-button icon="delete" tone="critical">Delete customer</s-button>
</s-menu>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 300px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
  <s-button commandFor="customer-menu">Edit customer</s-button>

  <s-menu id="customer-menu" accessibilityLabel="Customer actions">
    <s-button icon="merge">Merge customer</s-button>
    <s-button icon="incoming">Request customer data</s-button>
    <s-button icon="delete" tone="critical">
      Delete customer
    </s-button>
  </s-menu>
</>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Properties

### Menu

### __@overlayActivator@7141

value: `HTMLElement`


### __@overlayHidden@7140

value: `boolean`


### __@overlayHideFrameId@7142

value: `number`


### accessibilityLabel

value: `string`

A label that describes the purpose or contents of the element. When set, it will be announced using assistive technologies and provide additional context.

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

Use Menu to display a list of actions that can be performed on a resource.


### Basic usage

Demonstrates a simple menu with basic action buttons and shows how to link it to a trigger button.```jsx
<>
  <s-button commandFor="product-menu">Product actions</s-button>

  <s-menu id="product-menu" accessibilityLabel="Product actions">
    <s-button icon="edit">Edit product</s-button>
    <s-button icon="duplicate">Duplicate product</s-button>
    <s-button icon="archive">Archive product</s-button>
  </s-menu>
</>
```

```html
<s-button commandFor="product-menu">Product actions</s-button>

<s-menu id="product-menu" accessibilityLabel="Product actions">
  <s-button icon="edit">Edit product</s-button>
  <s-button icon="duplicate">Duplicate product</s-button>
  <s-button icon="archive">Archive product</s-button>
</s-menu>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 300px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
  <s-button commandFor="product-menu">Product actions</s-button>

  <s-menu id="product-menu" accessibilityLabel="Product actions">
    <s-button icon="edit">Edit product</s-button>
    <s-button icon="duplicate">Duplicate product</s-button>
    <s-button icon="archive">Archive product</s-button>
  </s-menu>
</>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates a menu with icons for each action, providing visual context for different menu items and showing how to use the caret-down icon on the trigger button.```jsx
<>
  <s-button icon="caret-down" commandFor="actions-menu">
    More actions
  </s-button>

  <s-menu id="actions-menu" accessibilityLabel="Product actions menu">
    <s-button icon="edit">Edit product</s-button>
    <s-button icon="duplicate">Duplicate product</s-button>
    <s-button icon="archive">Archive product</s-button>
    <s-button icon="delete" tone="critical">
      Delete product
    </s-button>
  </s-menu>
</>
```

```html
<s-button icon="caret-down" commandFor="actions-menu">More actions</s-button>

<s-menu id="actions-menu" accessibilityLabel="Product actions menu">
  <s-button icon="edit">Edit product</s-button>
  <s-button icon="duplicate">Duplicate product</s-button>
  <s-button icon="archive">Archive product</s-button>
  <s-button icon="delete" tone="critical">Delete product</s-button>
</s-menu>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 300px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
  <s-button icon="caret-down" commandFor="actions-menu">
    More actions
  </s-button>

  <s-menu id="actions-menu" accessibilityLabel="Product actions menu">
    <s-button icon="edit">Edit product</s-button>
    <s-button icon="duplicate">Duplicate product</s-button>
    <s-button icon="archive">Archive product</s-button>
    <s-button icon="delete" tone="critical">
      Delete product
    </s-button>
  </s-menu>
</>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how to organize menu items into logical sections with headings, helping to group related actions and improve menu readability.```jsx
<>
  <s-button commandFor="organized-menu">Bulk actions</s-button>

  <s-menu id="organized-menu" accessibilityLabel="Organized menu">
    <s-section heading="Product actions">
      <s-button icon="edit">Edit selected</s-button>
      <s-button icon="duplicate">Duplicate selected</s-button>
      <s-button icon="archive">Archive selected</s-button>
    </s-section>
    <s-section heading="Export options">
      <s-button icon="export">Export as CSV</s-button>
      <s-button icon="print">Print barcodes</s-button>
    </s-section>
  </s-menu>
</>
```

```html
<s-button commandFor="organized-menu">Bulk actions</s-button>

<s-menu id="organized-menu" accessibilityLabel="Organized menu">
  <s-section heading="Product actions">
    <s-button icon="edit">Edit selected</s-button>
    <s-button icon="duplicate">Duplicate selected</s-button>
    <s-button icon="archive">Archive selected</s-button>
  </s-section>
  <s-section heading="Export options">
    <s-button icon="export">Export as CSV</s-button>
    <s-button icon="print">Print barcodes</s-button>
  </s-section>
</s-menu>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 400px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
  <s-button commandFor="organized-menu">Bulk actions</s-button>

  <s-menu id="organized-menu" accessibilityLabel="Organized menu">
    <s-section heading="Product actions">
      <s-button icon="edit">Edit selected</s-button>
      <s-button icon="duplicate">Duplicate selected</s-button>
      <s-button icon="archive">Archive selected</s-button>
    </s-section>
    <s-section heading="Export options">
      <s-button icon="export">Export as CSV</s-button>
      <s-button icon="print">Print barcodes</s-button>
    </s-section>
  </s-menu>
</>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates a menu with a mix of link-based buttons, standard buttons, and a disabled button, showcasing the menu's flexibility in handling different interaction states.```jsx
<>
  <s-button commandFor="mixed-menu">Options</s-button>

  <s-menu id="mixed-menu" accessibilityLabel="Mixed menu options">
    <s-button href="javascript:void(0)" target="_blank">
      View product page
    </s-button>
    <s-button disabled>Unavailable action</s-button>
    <s-button download="sales-report.csv" href="/reports/sales-report.csv">
      Download report
    </s-button>
  </s-menu>
</>
```

```html
<s-button commandFor="mixed-menu">Options</s-button>

<s-menu id="mixed-menu" accessibilityLabel="Mixed menu options">
  <s-button href="javascript:void(0)" target="_blank">
    View product page
  </s-button>
  <s-button disabled>Unavailable action</s-button>
  <s-button download href="javascript:void(0)">Download report</s-button>
</s-menu>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 300px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
  <s-button commandFor="mixed-menu">Options</s-button>

  <s-menu id="mixed-menu" accessibilityLabel="Mixed menu options">
    <s-button href="javascript:void(0)" target="_blank">
      View product page
    </s-button>
    <s-button disabled>Unavailable action</s-button>
    <s-button download="sales-report.csv" href="/reports/sales-report.csv">
      Download report
    </s-button>
  </s-menu>
</>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Presents a comprehensive menu showing how to create sections with different action groups and include a critical action at the menu's root level.```jsx
<>
  <s-button commandFor="customer-menu">Edit customer</s-button>

  <s-menu id="customer-menu" accessibilityLabel="Customer actions">
    <s-section heading="Customer management">
      <s-button icon="edit">Edit customer</s-button>
      <s-button icon="email">Send email</s-button>
      <s-button icon="order">View orders</s-button>
    </s-section>
    <s-section heading="Account actions">
      <s-button icon="reset">Reset password</s-button>
      <s-button icon="lock">Disable account</s-button>
    </s-section>
    <s-button tone="critical" icon="delete">
      Delete customer
    </s-button>
  </s-menu>
</>
```

```html
<s-button commandFor="customer-menu">Edit customer</s-button>

<s-menu id="customer-menu" accessibilityLabel="Customer actions">
  <s-section heading="Customer management">
    <s-button icon="edit">Edit customer</s-button>
    <s-button icon="email">Send email</s-button>
    <s-button icon="order">View orders</s-button>
  </s-section>
  <s-section heading="Account actions">
    <s-button icon="reset">Reset password</s-button>
    <s-button icon="lock">Disable account</s-button>
  </s-section>
  <s-button tone="critical" icon="delete">Delete customer</s-button>
</s-menu>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 300px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
  <s-button commandFor="customer-menu">Edit customer</s-button>

  <s-menu id="customer-menu" accessibilityLabel="Customer actions">
    <s-section heading="Customer management">
      <s-button icon="edit">Edit customer</s-button>
      <s-button icon="email">Send email</s-button>
      <s-button icon="order">View orders</s-button>
    </s-section>
    <s-section heading="Account actions">
      <s-button icon="reset">Reset password</s-button>
      <s-button icon="lock">Disable account</s-button>
    </s-section>
    <s-button tone="critical" icon="delete">
      Delete customer
    </s-button>
  </s-menu>
</>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates a complex menu with nested sections, demonstrating how to organize multiple related actions with icons.```jsx
<>
  <s-button icon="settings" commandFor="admin-settings">
    Settings
  </s-button>

  <s-menu id="admin-settings" accessibilityLabel="Settings menu">
    <s-section heading="Account">
      <s-button icon="profile">Profile settings</s-button>
      <s-button icon="lock">Security</s-button>
      <s-button>Billing information</s-button>
    </s-section>
    <s-section heading="Store">
      <s-button icon="store">Store settings</s-button>
      <s-button>Payment providers</s-button>
      <s-button icon="delivery">Shipping rates</s-button>
    </s-section>
    <s-button href="javascript:void(0)" icon="person-exit">Sign out</s-button>
  </s-menu>
</>
```

```html
<s-button icon="settings" commandFor="admin-settings">Settings</s-button>

<s-menu id="admin-settings" accessibilityLabel="Settings menu">
  <s-section heading="Account">
    <s-button icon="profile">Profile settings</s-button>
    <s-button icon="lock">Security</s-button>
    <s-button>Billing information</s-button>
  </s-section>
  <s-section heading="Store">
    <s-button icon="store">Store settings</s-button>
    <s-button>Payment providers</s-button>
    <s-button icon="delivery">Shipping rates</s-button>
  </s-section>
  <s-button href="javascript:void(0)" icon="person-exit">Sign out</s-button>
</s-menu>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 350px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
  <s-button icon="settings" commandFor="admin-settings">
    Settings
  </s-button>

  <s-menu id="admin-settings" accessibilityLabel="Settings menu">
    <s-section heading="Account">
      <s-button icon="profile">Profile settings</s-button>
      <s-button icon="lock">Security</s-button>
      <s-button>Billing information</s-button>
    </s-section>
    <s-section heading="Store">
      <s-button icon="store">Store settings</s-button>
      <s-button>Payment providers</s-button>
      <s-button icon="delivery">Shipping rates</s-button>
    </s-section>
    <s-button href="javascript:void(0)" icon="person-exit">Sign out</s-button>
  </s-menu>
</>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Slots

### MenuSlots

### children

value: `HTMLElement`

The Menu items.

Only accepts `Button` and `Section` components.

## Examples

Use Menu to display a list of actions that can be performed on a resource.


### Basic usage

Demonstrates a simple menu with basic action buttons and shows how to link it to a trigger button.```jsx
<>
  <s-button commandFor="product-menu">Product actions</s-button>

  <s-menu id="product-menu" accessibilityLabel="Product actions">
    <s-button icon="edit">Edit product</s-button>
    <s-button icon="duplicate">Duplicate product</s-button>
    <s-button icon="archive">Archive product</s-button>
  </s-menu>
</>
```

```html
<s-button commandFor="product-menu">Product actions</s-button>

<s-menu id="product-menu" accessibilityLabel="Product actions">
  <s-button icon="edit">Edit product</s-button>
  <s-button icon="duplicate">Duplicate product</s-button>
  <s-button icon="archive">Archive product</s-button>
</s-menu>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 300px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
  <s-button commandFor="product-menu">Product actions</s-button>

  <s-menu id="product-menu" accessibilityLabel="Product actions">
    <s-button icon="edit">Edit product</s-button>
    <s-button icon="duplicate">Duplicate product</s-button>
    <s-button icon="archive">Archive product</s-button>
  </s-menu>
</>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates a menu with icons for each action, providing visual context for different menu items and showing how to use the caret-down icon on the trigger button.```jsx
<>
  <s-button icon="caret-down" commandFor="actions-menu">
    More actions
  </s-button>

  <s-menu id="actions-menu" accessibilityLabel="Product actions menu">
    <s-button icon="edit">Edit product</s-button>
    <s-button icon="duplicate">Duplicate product</s-button>
    <s-button icon="archive">Archive product</s-button>
    <s-button icon="delete" tone="critical">
      Delete product
    </s-button>
  </s-menu>
</>
```

```html
<s-button icon="caret-down" commandFor="actions-menu">More actions</s-button>

<s-menu id="actions-menu" accessibilityLabel="Product actions menu">
  <s-button icon="edit">Edit product</s-button>
  <s-button icon="duplicate">Duplicate product</s-button>
  <s-button icon="archive">Archive product</s-button>
  <s-button icon="delete" tone="critical">Delete product</s-button>
</s-menu>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 300px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
  <s-button icon="caret-down" commandFor="actions-menu">
    More actions
  </s-button>

  <s-menu id="actions-menu" accessibilityLabel="Product actions menu">
    <s-button icon="edit">Edit product</s-button>
    <s-button icon="duplicate">Duplicate product</s-button>
    <s-button icon="archive">Archive product</s-button>
    <s-button icon="delete" tone="critical">
      Delete product
    </s-button>
  </s-menu>
</>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how to organize menu items into logical sections with headings, helping to group related actions and improve menu readability.```jsx
<>
  <s-button commandFor="organized-menu">Bulk actions</s-button>

  <s-menu id="organized-menu" accessibilityLabel="Organized menu">
    <s-section heading="Product actions">
      <s-button icon="edit">Edit selected</s-button>
      <s-button icon="duplicate">Duplicate selected</s-button>
      <s-button icon="archive">Archive selected</s-button>
    </s-section>
    <s-section heading="Export options">
      <s-button icon="export">Export as CSV</s-button>
      <s-button icon="print">Print barcodes</s-button>
    </s-section>
  </s-menu>
</>
```

```html
<s-button commandFor="organized-menu">Bulk actions</s-button>

<s-menu id="organized-menu" accessibilityLabel="Organized menu">
  <s-section heading="Product actions">
    <s-button icon="edit">Edit selected</s-button>
    <s-button icon="duplicate">Duplicate selected</s-button>
    <s-button icon="archive">Archive selected</s-button>
  </s-section>
  <s-section heading="Export options">
    <s-button icon="export">Export as CSV</s-button>
    <s-button icon="print">Print barcodes</s-button>
  </s-section>
</s-menu>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 400px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
  <s-button commandFor="organized-menu">Bulk actions</s-button>

  <s-menu id="organized-menu" accessibilityLabel="Organized menu">
    <s-section heading="Product actions">
      <s-button icon="edit">Edit selected</s-button>
      <s-button icon="duplicate">Duplicate selected</s-button>
      <s-button icon="archive">Archive selected</s-button>
    </s-section>
    <s-section heading="Export options">
      <s-button icon="export">Export as CSV</s-button>
      <s-button icon="print">Print barcodes</s-button>
    </s-section>
  </s-menu>
</>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates a menu with a mix of link-based buttons, standard buttons, and a disabled button, showcasing the menu's flexibility in handling different interaction states.```jsx
<>
  <s-button commandFor="mixed-menu">Options</s-button>

  <s-menu id="mixed-menu" accessibilityLabel="Mixed menu options">
    <s-button href="javascript:void(0)" target="_blank">
      View product page
    </s-button>
    <s-button disabled>Unavailable action</s-button>
    <s-button download="sales-report.csv" href="/reports/sales-report.csv">
      Download report
    </s-button>
  </s-menu>
</>
```

```html
<s-button commandFor="mixed-menu">Options</s-button>

<s-menu id="mixed-menu" accessibilityLabel="Mixed menu options">
  <s-button href="javascript:void(0)" target="_blank">
    View product page
  </s-button>
  <s-button disabled>Unavailable action</s-button>
  <s-button download href="javascript:void(0)">Download report</s-button>
</s-menu>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 300px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
  <s-button commandFor="mixed-menu">Options</s-button>

  <s-menu id="mixed-menu" accessibilityLabel="Mixed menu options">
    <s-button href="javascript:void(0)" target="_blank">
      View product page
    </s-button>
    <s-button disabled>Unavailable action</s-button>
    <s-button download="sales-report.csv" href="/reports/sales-report.csv">
      Download report
    </s-button>
  </s-menu>
</>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Presents a comprehensive menu showing how to create sections with different action groups and include a critical action at the menu's root level.```jsx
<>
  <s-button commandFor="customer-menu">Edit customer</s-button>

  <s-menu id="customer-menu" accessibilityLabel="Customer actions">
    <s-section heading="Customer management">
      <s-button icon="edit">Edit customer</s-button>
      <s-button icon="email">Send email</s-button>
      <s-button icon="order">View orders</s-button>
    </s-section>
    <s-section heading="Account actions">
      <s-button icon="reset">Reset password</s-button>
      <s-button icon="lock">Disable account</s-button>
    </s-section>
    <s-button tone="critical" icon="delete">
      Delete customer
    </s-button>
  </s-menu>
</>
```

```html
<s-button commandFor="customer-menu">Edit customer</s-button>

<s-menu id="customer-menu" accessibilityLabel="Customer actions">
  <s-section heading="Customer management">
    <s-button icon="edit">Edit customer</s-button>
    <s-button icon="email">Send email</s-button>
    <s-button icon="order">View orders</s-button>
  </s-section>
  <s-section heading="Account actions">
    <s-button icon="reset">Reset password</s-button>
    <s-button icon="lock">Disable account</s-button>
  </s-section>
  <s-button tone="critical" icon="delete">Delete customer</s-button>
</s-menu>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 300px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
  <s-button commandFor="customer-menu">Edit customer</s-button>

  <s-menu id="customer-menu" accessibilityLabel="Customer actions">
    <s-section heading="Customer management">
      <s-button icon="edit">Edit customer</s-button>
      <s-button icon="email">Send email</s-button>
      <s-button icon="order">View orders</s-button>
    </s-section>
    <s-section heading="Account actions">
      <s-button icon="reset">Reset password</s-button>
      <s-button icon="lock">Disable account</s-button>
    </s-section>
    <s-button tone="critical" icon="delete">
      Delete customer
    </s-button>
  </s-menu>
</>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates a complex menu with nested sections, demonstrating how to organize multiple related actions with icons.```jsx
<>
  <s-button icon="settings" commandFor="admin-settings">
    Settings
  </s-button>

  <s-menu id="admin-settings" accessibilityLabel="Settings menu">
    <s-section heading="Account">
      <s-button icon="profile">Profile settings</s-button>
      <s-button icon="lock">Security</s-button>
      <s-button>Billing information</s-button>
    </s-section>
    <s-section heading="Store">
      <s-button icon="store">Store settings</s-button>
      <s-button>Payment providers</s-button>
      <s-button icon="delivery">Shipping rates</s-button>
    </s-section>
    <s-button href="javascript:void(0)" icon="person-exit">Sign out</s-button>
  </s-menu>
</>
```

```html
<s-button icon="settings" commandFor="admin-settings">Settings</s-button>

<s-menu id="admin-settings" accessibilityLabel="Settings menu">
  <s-section heading="Account">
    <s-button icon="profile">Profile settings</s-button>
    <s-button icon="lock">Security</s-button>
    <s-button>Billing information</s-button>
  </s-section>
  <s-section heading="Store">
    <s-button icon="store">Store settings</s-button>
    <s-button>Payment providers</s-button>
    <s-button icon="delivery">Shipping rates</s-button>
  </s-section>
  <s-button href="javascript:void(0)" icon="person-exit">Sign out</s-button>
</s-menu>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 350px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
  <s-button icon="settings" commandFor="admin-settings">
    Settings
  </s-button>

  <s-menu id="admin-settings" accessibilityLabel="Settings menu">
    <s-section heading="Account">
      <s-button icon="profile">Profile settings</s-button>
      <s-button icon="lock">Security</s-button>
      <s-button>Billing information</s-button>
    </s-section>
    <s-section heading="Store">
      <s-button icon="store">Store settings</s-button>
      <s-button>Payment providers</s-button>
      <s-button icon="delivery">Shipping rates</s-button>
    </s-section>
    <s-button href="javascript:void(0)" icon="person-exit">Sign out</s-button>
  </s-menu>
</>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Examples

Use Menu to display a list of actions that can be performed on a resource.


### Basic usage

Demonstrates a simple menu with basic action buttons and shows how to link it to a trigger button.```jsx
<>
  <s-button commandFor="product-menu">Product actions</s-button>

  <s-menu id="product-menu" accessibilityLabel="Product actions">
    <s-button icon="edit">Edit product</s-button>
    <s-button icon="duplicate">Duplicate product</s-button>
    <s-button icon="archive">Archive product</s-button>
  </s-menu>
</>
```

```html
<s-button commandFor="product-menu">Product actions</s-button>

<s-menu id="product-menu" accessibilityLabel="Product actions">
  <s-button icon="edit">Edit product</s-button>
  <s-button icon="duplicate">Duplicate product</s-button>
  <s-button icon="archive">Archive product</s-button>
</s-menu>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 300px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
  <s-button commandFor="product-menu">Product actions</s-button>

  <s-menu id="product-menu" accessibilityLabel="Product actions">
    <s-button icon="edit">Edit product</s-button>
    <s-button icon="duplicate">Duplicate product</s-button>
    <s-button icon="archive">Archive product</s-button>
  </s-menu>
</>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates a menu with icons for each action, providing visual context for different menu items and showing how to use the caret-down icon on the trigger button.```jsx
<>
  <s-button icon="caret-down" commandFor="actions-menu">
    More actions
  </s-button>

  <s-menu id="actions-menu" accessibilityLabel="Product actions menu">
    <s-button icon="edit">Edit product</s-button>
    <s-button icon="duplicate">Duplicate product</s-button>
    <s-button icon="archive">Archive product</s-button>
    <s-button icon="delete" tone="critical">
      Delete product
    </s-button>
  </s-menu>
</>
```

```html
<s-button icon="caret-down" commandFor="actions-menu">More actions</s-button>

<s-menu id="actions-menu" accessibilityLabel="Product actions menu">
  <s-button icon="edit">Edit product</s-button>
  <s-button icon="duplicate">Duplicate product</s-button>
  <s-button icon="archive">Archive product</s-button>
  <s-button icon="delete" tone="critical">Delete product</s-button>
</s-menu>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 300px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
  <s-button icon="caret-down" commandFor="actions-menu">
    More actions
  </s-button>

  <s-menu id="actions-menu" accessibilityLabel="Product actions menu">
    <s-button icon="edit">Edit product</s-button>
    <s-button icon="duplicate">Duplicate product</s-button>
    <s-button icon="archive">Archive product</s-button>
    <s-button icon="delete" tone="critical">
      Delete product
    </s-button>
  </s-menu>
</>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how to organize menu items into logical sections with headings, helping to group related actions and improve menu readability.```jsx
<>
  <s-button commandFor="organized-menu">Bulk actions</s-button>

  <s-menu id="organized-menu" accessibilityLabel="Organized menu">
    <s-section heading="Product actions">
      <s-button icon="edit">Edit selected</s-button>
      <s-button icon="duplicate">Duplicate selected</s-button>
      <s-button icon="archive">Archive selected</s-button>
    </s-section>
    <s-section heading="Export options">
      <s-button icon="export">Export as CSV</s-button>
      <s-button icon="print">Print barcodes</s-button>
    </s-section>
  </s-menu>
</>
```

```html
<s-button commandFor="organized-menu">Bulk actions</s-button>

<s-menu id="organized-menu" accessibilityLabel="Organized menu">
  <s-section heading="Product actions">
    <s-button icon="edit">Edit selected</s-button>
    <s-button icon="duplicate">Duplicate selected</s-button>
    <s-button icon="archive">Archive selected</s-button>
  </s-section>
  <s-section heading="Export options">
    <s-button icon="export">Export as CSV</s-button>
    <s-button icon="print">Print barcodes</s-button>
  </s-section>
</s-menu>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 400px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
  <s-button commandFor="organized-menu">Bulk actions</s-button>

  <s-menu id="organized-menu" accessibilityLabel="Organized menu">
    <s-section heading="Product actions">
      <s-button icon="edit">Edit selected</s-button>
      <s-button icon="duplicate">Duplicate selected</s-button>
      <s-button icon="archive">Archive selected</s-button>
    </s-section>
    <s-section heading="Export options">
      <s-button icon="export">Export as CSV</s-button>
      <s-button icon="print">Print barcodes</s-button>
    </s-section>
  </s-menu>
</>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates a menu with a mix of link-based buttons, standard buttons, and a disabled button, showcasing the menu's flexibility in handling different interaction states.```jsx
<>
  <s-button commandFor="mixed-menu">Options</s-button>

  <s-menu id="mixed-menu" accessibilityLabel="Mixed menu options">
    <s-button href="javascript:void(0)" target="_blank">
      View product page
    </s-button>
    <s-button disabled>Unavailable action</s-button>
    <s-button download="sales-report.csv" href="/reports/sales-report.csv">
      Download report
    </s-button>
  </s-menu>
</>
```

```html
<s-button commandFor="mixed-menu">Options</s-button>

<s-menu id="mixed-menu" accessibilityLabel="Mixed menu options">
  <s-button href="javascript:void(0)" target="_blank">
    View product page
  </s-button>
  <s-button disabled>Unavailable action</s-button>
  <s-button download href="javascript:void(0)">Download report</s-button>
</s-menu>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 300px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
  <s-button commandFor="mixed-menu">Options</s-button>

  <s-menu id="mixed-menu" accessibilityLabel="Mixed menu options">
    <s-button href="javascript:void(0)" target="_blank">
      View product page
    </s-button>
    <s-button disabled>Unavailable action</s-button>
    <s-button download="sales-report.csv" href="/reports/sales-report.csv">
      Download report
    </s-button>
  </s-menu>
</>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Presents a comprehensive menu showing how to create sections with different action groups and include a critical action at the menu's root level.```jsx
<>
  <s-button commandFor="customer-menu">Edit customer</s-button>

  <s-menu id="customer-menu" accessibilityLabel="Customer actions">
    <s-section heading="Customer management">
      <s-button icon="edit">Edit customer</s-button>
      <s-button icon="email">Send email</s-button>
      <s-button icon="order">View orders</s-button>
    </s-section>
    <s-section heading="Account actions">
      <s-button icon="reset">Reset password</s-button>
      <s-button icon="lock">Disable account</s-button>
    </s-section>
    <s-button tone="critical" icon="delete">
      Delete customer
    </s-button>
  </s-menu>
</>
```

```html
<s-button commandFor="customer-menu">Edit customer</s-button>

<s-menu id="customer-menu" accessibilityLabel="Customer actions">
  <s-section heading="Customer management">
    <s-button icon="edit">Edit customer</s-button>
    <s-button icon="email">Send email</s-button>
    <s-button icon="order">View orders</s-button>
  </s-section>
  <s-section heading="Account actions">
    <s-button icon="reset">Reset password</s-button>
    <s-button icon="lock">Disable account</s-button>
  </s-section>
  <s-button tone="critical" icon="delete">Delete customer</s-button>
</s-menu>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 300px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
  <s-button commandFor="customer-menu">Edit customer</s-button>

  <s-menu id="customer-menu" accessibilityLabel="Customer actions">
    <s-section heading="Customer management">
      <s-button icon="edit">Edit customer</s-button>
      <s-button icon="email">Send email</s-button>
      <s-button icon="order">View orders</s-button>
    </s-section>
    <s-section heading="Account actions">
      <s-button icon="reset">Reset password</s-button>
      <s-button icon="lock">Disable account</s-button>
    </s-section>
    <s-button tone="critical" icon="delete">
      Delete customer
    </s-button>
  </s-menu>
</>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates a complex menu with nested sections, demonstrating how to organize multiple related actions with icons.```jsx
<>
  <s-button icon="settings" commandFor="admin-settings">
    Settings
  </s-button>

  <s-menu id="admin-settings" accessibilityLabel="Settings menu">
    <s-section heading="Account">
      <s-button icon="profile">Profile settings</s-button>
      <s-button icon="lock">Security</s-button>
      <s-button>Billing information</s-button>
    </s-section>
    <s-section heading="Store">
      <s-button icon="store">Store settings</s-button>
      <s-button>Payment providers</s-button>
      <s-button icon="delivery">Shipping rates</s-button>
    </s-section>
    <s-button href="javascript:void(0)" icon="person-exit">Sign out</s-button>
  </s-menu>
</>
```

```html
<s-button icon="settings" commandFor="admin-settings">Settings</s-button>

<s-menu id="admin-settings" accessibilityLabel="Settings menu">
  <s-section heading="Account">
    <s-button icon="profile">Profile settings</s-button>
    <s-button icon="lock">Security</s-button>
    <s-button>Billing information</s-button>
  </s-section>
  <s-section heading="Store">
    <s-button icon="store">Store settings</s-button>
    <s-button>Payment providers</s-button>
    <s-button icon="delivery">Shipping rates</s-button>
  </s-section>
  <s-button href="javascript:void(0)" icon="person-exit">Sign out</s-button>
</s-menu>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 350px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
  <s-button icon="settings" commandFor="admin-settings">
    Settings
  </s-button>

  <s-menu id="admin-settings" accessibilityLabel="Settings menu">
    <s-section heading="Account">
      <s-button icon="profile">Profile settings</s-button>
      <s-button icon="lock">Security</s-button>
      <s-button>Billing information</s-button>
    </s-section>
    <s-section heading="Store">
      <s-button icon="store">Store settings</s-button>
      <s-button>Payment providers</s-button>
      <s-button icon="delivery">Shipping rates</s-button>
    </s-section>
    <s-button href="javascript:void(0)" icon="person-exit">Sign out</s-button>
  </s-menu>
</>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

