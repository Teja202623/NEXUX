# Popover

Popovers are used to display content in an overlay that can be triggered by a button.

```jsx
<>
  <s-button commandFor="product-options-popover">Product options</s-button>

  <s-popover id="product-options-popover">
    <s-stack direction="block">
      <s-button variant="tertiary">Import</s-button>
      <s-button variant="tertiary">Export</s-button>
    </s-stack>
  </s-popover>
</>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 300px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
  <s-button commandFor="product-options-popover">Product options</s-button>

  <s-popover id="product-options-popover">
    <s-stack direction="block">
      <s-button variant="tertiary">Import</s-button>
      <s-button variant="tertiary">Export</s-button>
    </s-stack>
  </s-popover>
</>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

```html
<s-button commandFor="product-options-popover">Product options</s-button>

<s-popover id="product-options-popover">
  <s-stack direction="block">
    <s-button variant="tertiary">Import</s-button>
    <s-button variant="tertiary">Export</s-button>
  </s-stack>
</s-popover>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 300px}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><div id="wrapper-element"><s-button commandFor="product-options-popover">Product options</s-button>

<s-popover id="product-options-popover">
  <s-stack direction="block">
    <s-button variant="tertiary">Import</s-button>
    <s-button variant="tertiary">Export</s-button>
  </s-stack>
</s-popover>
</div></body></html>
```

## Properties

### Popover

### __@overlayActivator@7141

value: `HTMLElement`


### __@overlayHidden@7140

value: `boolean`


### __@overlayHideFrameId@7142

value: `number`


### adoptedCallback

value: `() => void`


### attributeChangedCallback

value: `(name: string) => void`


### blockSize

value: `SizeUnitsOrAuto`

  - SizeUnitsOrAuto: SizeUnits | 'auto'
  - SizeUnits: `${number}px` | `${number}%` | `0`
Adjust the block size.

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


### inlineSize

value: `SizeUnitsOrAuto`

  - SizeUnitsOrAuto: SizeUnits | 'auto'
  - SizeUnits: `${number}px` | `${number}%` | `0`
Adjust the inline size.

### maxBlockSize

value: `SizeUnitsOrNone`

  - SizeUnits: `${number}px` | `${number}%` | `0`
  - SizeUnitsOrNone: SizeUnits | 'none'
Adjust the maximum block size.

### maxInlineSize

value: `SizeUnitsOrNone`

  - SizeUnits: `${number}px` | `${number}%` | `0`
  - SizeUnitsOrNone: SizeUnits | 'none'
Adjust the maximum inline size.

### minBlockSize

value: `SizeUnits`

  - SizeUnits: `${number}px` | `${number}%` | `0`
Adjust the minimum block size.

### minInlineSize

value: `SizeUnits`

  - SizeUnits: `${number}px` | `${number}%` | `0`
Adjust the minimum inline size.

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

Popovers are used to display content in an overlay that can be triggered by a button.


### Basic usage

Popover displaying admin notifications such as new orders, inventory alerts, and payment confirmations, demonstrating how popovers can show informational content without cluttering the main interface.```jsx
<>
  <s-button commandFor="notifications-popover" icon="notification">
    Notifications
  </s-button>

  <s-popover id="notifications-popover">
    <s-box padding="base">
      <s-stack gap="small-200">
        <s-stack gap="small">
          <s-heading>New order received</s-heading>
          <s-paragraph color="subdued">Order #1234 was placed 5 minutes ago</s-paragraph>
        </s-stack>

        <s-divider />

        <s-stack gap="small">
          <s-heading>Low inventory alert</s-heading>
          <s-paragraph color="subdued">3 products are running low on stock</s-paragraph>
        </s-stack>

        <s-divider />

        <s-stack gap="small">
          <s-heading>Payment processed</s-heading>
          <s-paragraph color="subdued">$250.00 payment confirmed for order #1230</s-paragraph>
        </s-stack>
      </s-stack>
    </s-box>
  </s-popover>
</>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 350px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
  <s-button commandFor="notifications-popover" icon="notification">
    Notifications
  </s-button>

  <s-popover id="notifications-popover">
    <s-box padding="base">
      <s-stack gap="small-200">
        <s-stack gap="small">
          <s-heading>New order received</s-heading>
          <s-paragraph color="subdued">Order #1234 was placed 5 minutes ago</s-paragraph>
        </s-stack>

        <s-divider />

        <s-stack gap="small">
          <s-heading>Low inventory alert</s-heading>
          <s-paragraph color="subdued">3 products are running low on stock</s-paragraph>
        </s-stack>

        <s-divider />

        <s-stack gap="small">
          <s-heading>Payment processed</s-heading>
          <s-paragraph color="subdued">\$250.00 payment confirmed for order #1230</s-paragraph>
        </s-stack>
      </s-stack>
    </s-box>
  </s-popover>
</>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

```html
<s-button commandFor="notifications-popover" icon="notification">
  Notifications
</s-button>

<s-popover id="notifications-popover">
  <s-box padding="base">
    <s-stack gap="small-200">
      <s-stack gap="small">
        <s-heading>New order received</s-heading>
        <s-paragraph color="subdued">
          Order #1234 was placed 5 minutes ago
        </s-paragraph>
      </s-stack>

      <s-divider />

      <s-stack gap="small">
        <s-heading>Low inventory alert</s-heading>
        <s-paragraph color="subdued">
          3 products are running low on stock
        </s-paragraph>
      </s-stack>

      <s-divider />

      <s-stack gap="small">
        <s-heading>Payment processed</s-heading>
        <s-paragraph color="subdued">
          $250.00 payment confirmed for order #1230
        </s-paragraph>
      </s-stack>
    </s-stack>
  </s-box>
</s-popover>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 350px}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><div id="wrapper-element"><s-button commandFor="notifications-popover" icon="notification">
  Notifications
</s-button>

<s-popover id="notifications-popover">
  <s-box padding="base">
    <s-stack gap="small-200">
      <s-stack gap="small">
        <s-heading>New order received</s-heading>
        <s-paragraph color="subdued">
          Order #1234 was placed 5 minutes ago
        </s-paragraph>
      </s-stack>

      <s-divider />

      <s-stack gap="small">
        <s-heading>Low inventory alert</s-heading>
        <s-paragraph color="subdued">
          3 products are running low on stock
        </s-paragraph>
      </s-stack>

      <s-divider />

      <s-stack gap="small">
        <s-heading>Payment processed</s-heading>
        <s-paragraph color="subdued">
          $250.00 payment confirmed for order #1230
        </s-paragraph>
      </s-stack>
    </s-stack>
  </s-box>
</s-popover>
</div></body></html>
```

Popover containing a choice list and action button demonstrating how popovers can be used for settings and configuration interfaces.```jsx
<>
  <s-button commandFor="table-settings-popover" icon="settings">
    Columns
  </s-button>

  <s-popover id="table-settings-popover">
    <s-box padding="base">
      <s-stack gap="small-200">
        <s-stack gap="small">
          <s-heading>Choose columns to display</s-heading>
          <s-choice-list label="Select columns to display">
            <s-choice value="sku" selected>
              Sku
            </s-choice>
            <s-choice value="inventory" selected>
              Inventory
            </s-choice>
            <s-choice value="price" selected>
              Price
            </s-choice>
            <s-choice value="vendor">Vendor</s-choice>
            <s-choice value="type">Product type</s-choice>
          </s-choice-list>
        </s-stack>
        <s-button variant="primary">Apply changes</s-button>
      </s-stack>
    </s-box>
  </s-popover>
</>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 400px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
  <s-button commandFor="table-settings-popover" icon="settings">
    Columns
  </s-button>

  <s-popover id="table-settings-popover">
    <s-box padding="base">
      <s-stack gap="small-200">
        <s-stack gap="small">
          <s-heading>Choose columns to display</s-heading>
          <s-choice-list label="Select columns to display">
            <s-choice value="sku" selected>
              Sku
            </s-choice>
            <s-choice value="inventory" selected>
              Inventory
            </s-choice>
            <s-choice value="price" selected>
              Price
            </s-choice>
            <s-choice value="vendor">Vendor</s-choice>
            <s-choice value="type">Product type</s-choice>
          </s-choice-list>
        </s-stack>
        <s-button variant="primary">Apply changes</s-button>
      </s-stack>
    </s-box>
  </s-popover>
</>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

```html
<s-button commandFor="table-settings-popover" disclosure="true" icon="settings">
  Columns
</s-button>

<s-popover id="table-settings-popover">
  <s-box padding="base">
    <s-stack gap="small-200">
      <s-stack gap="small">
        <s-heading>Choose columns to display</s-heading>
        <s-choice-list label="Select columns to display">
          <s-choice value="sku" selected>Sku</s-choice>
          <s-choice value="inventory" selected>Inventory</s-choice>
          <s-choice value="price" selected>Price</s-choice>
          <s-choice value="vendor">Vendor</s-choice>
          <s-choice value="type">Product type</s-choice>
        </s-choice-list>
      </s-stack>
      <s-button variant="primary">Apply changes</s-button>
    </s-stack>
  </s-box>
</s-popover>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 400px}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><div id="wrapper-element"><s-button commandFor="table-settings-popover" disclosure="true" icon="settings">
  Columns
</s-button>

<s-popover id="table-settings-popover">
  <s-box padding="base">
    <s-stack gap="small-200">
      <s-stack gap="small">
        <s-heading>Choose columns to display</s-heading>
        <s-choice-list label="Select columns to display">
          <s-choice value="sku" selected>Sku</s-choice>
          <s-choice value="inventory" selected>Inventory</s-choice>
          <s-choice value="price" selected>Price</s-choice>
          <s-choice value="vendor">Vendor</s-choice>
          <s-choice value="type">Product type</s-choice>
        </s-choice-list>
      </s-stack>
      <s-button variant="primary">Apply changes</s-button>
    </s-stack>
  </s-box>
</s-popover>
</div></body></html>
```

Popover displaying detailed inventory information using Box padding instead of Section, demonstrating an alternative layout approach for data-focused content.```jsx
<>
  <s-button commandFor="stock-popover" icon="info">
    Stock details
  </s-button>

  <s-popover id="stock-popover">
    <s-box padding="base">
      <s-stack gap="small">
        <s-stack gap="small-200">
          <s-stack direction="inline" justifyContent="space-between">
            <s-text color="subdued">Available</s-text>
            <s-text>127 units</s-text>
          </s-stack>

          <s-stack direction="inline" justifyContent="space-between">
            <s-text color="subdued">Reserved</s-text>
            <s-text>15 units</s-text>
          </s-stack>

          <s-stack direction="inline" justifyContent="space-between">
            <s-text color="subdued">In transit</s-text>
            <s-text>50 units</s-text>
          </s-stack>
        </s-stack>

        <s-divider />

        <s-stack direction="inline" justifyContent="space-between">
          <s-text>Total stock</s-text>
          <s-text>192 units</s-text>
        </s-stack>

        <s-button variant="secondary">View full inventory report</s-button>
      </s-stack>
    </s-box>
  </s-popover>
</>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 350px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
  <s-button commandFor="stock-popover" icon="info">
    Stock details
  </s-button>

  <s-popover id="stock-popover">
    <s-box padding="base">
      <s-stack gap="small">
        <s-stack gap="small-200">
          <s-stack direction="inline" justifyContent="space-between">
            <s-text color="subdued">Available</s-text>
            <s-text>127 units</s-text>
          </s-stack>

          <s-stack direction="inline" justifyContent="space-between">
            <s-text color="subdued">Reserved</s-text>
            <s-text>15 units</s-text>
          </s-stack>

          <s-stack direction="inline" justifyContent="space-between">
            <s-text color="subdued">In transit</s-text>
            <s-text>50 units</s-text>
          </s-stack>
        </s-stack>

        <s-divider />

        <s-stack direction="inline" justifyContent="space-between">
          <s-text>Total stock</s-text>
          <s-text>192 units</s-text>
        </s-stack>

        <s-button variant="secondary">View full inventory report</s-button>
      </s-stack>
    </s-box>
  </s-popover>
</>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

```html
<s-button commandFor="stock-popover" icon="info">
  Stock details
</s-button>

<s-popover id="stock-popover">
  <s-box padding="base">
    <s-stack gap="small">
      <s-stack gap="small-200">
        <s-stack direction="inline" justifyContent="space-between">
          <s-text color="subdued">Available</s-text>
          <s-text>127 units</s-text>
        </s-stack>

        <s-stack direction="inline" justifyContent="space-between">
          <s-text color="subdued">Reserved</s-text>
          <s-text>15 units</s-text>
        </s-stack>

        <s-stack direction="inline" justifyContent="space-between">
          <s-text color="subdued">In transit</s-text>
          <s-text>50 units</s-text>
        </s-stack>
      </s-stack>

      <s-divider />

      <s-stack direction="inline" justifyContent="space-between">
        <s-text>Total stock</s-text>
        <s-text>192 units</s-text>
      </s-stack>

      <s-button variant="secondary">View full inventory report</s-button>
    </s-stack>
  </s-box>
</s-popover>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 350px}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><div id="wrapper-element"><s-button commandFor="stock-popover" icon="info">
  Stock details
</s-button>

<s-popover id="stock-popover">
  <s-box padding="base">
    <s-stack gap="small">
      <s-stack gap="small-200">
        <s-stack direction="inline" justifyContent="space-between">
          <s-text color="subdued">Available</s-text>
          <s-text>127 units</s-text>
        </s-stack>

        <s-stack direction="inline" justifyContent="space-between">
          <s-text color="subdued">Reserved</s-text>
          <s-text>15 units</s-text>
        </s-stack>

        <s-stack direction="inline" justifyContent="space-between">
          <s-text color="subdued">In transit</s-text>
          <s-text>50 units</s-text>
        </s-stack>
      </s-stack>

      <s-divider />

      <s-stack direction="inline" justifyContent="space-between">
        <s-text>Total stock</s-text>
        <s-text>192 units</s-text>
      </s-stack>

      <s-button variant="secondary">View full inventory report</s-button>
    </s-stack>
  </s-box>
</s-popover>
</div></body></html>
```

## Events

Learn more about [registering events](https://shopify.dev/docs/api/app-home/using-polaris-components#event-handling).

### PopoverEvents

### afterhide

value: `CallbackEventListener<TTagName> | null`

  - CallbackEventListener: (EventListener & {
      (event: CallbackEvent<T>): void;
    }) | null
  - CallbackEvent: Event & {
  currentTarget: HTMLElementTagNameMap[T];
}

### aftershow

value: `CallbackEventListener<TTagName> | null`

  - CallbackEventListener: (EventListener & {
      (event: CallbackEvent<T>): void;
    }) | null
  - CallbackEvent: Event & {
  currentTarget: HTMLElementTagNameMap[T];
}

### aftertoggle

value: `CallbackEventListener<TTagName> | null`

  - CallbackEventListener: (EventListener & {
      (event: CallbackEvent<T>): void;
    }) | null
  - CallbackEvent: Event & {
  currentTarget: HTMLElementTagNameMap[T];
}

### hide

value: `CallbackEventListener<TTagName> | null`

  - CallbackEventListener: (EventListener & {
      (event: CallbackEvent<T>): void;
    }) | null
  - CallbackEvent: Event & {
  currentTarget: HTMLElementTagNameMap[T];
}

### show

value: `CallbackEventListener<TTagName> | null`

  - CallbackEventListener: (EventListener & {
      (event: CallbackEvent<T>): void;
    }) | null
  - CallbackEvent: Event & {
  currentTarget: HTMLElementTagNameMap[T];
}

### toggle

value: `CallbackEventListener<TTagName> | null`

  - CallbackEventListener: (EventListener & {
      (event: CallbackEvent<T>): void;
    }) | null
  - CallbackEvent: Event & {
  currentTarget: HTMLElementTagNameMap[T];
}

## Examples

Popovers are used to display content in an overlay that can be triggered by a button.


### Basic usage

Popover displaying admin notifications such as new orders, inventory alerts, and payment confirmations, demonstrating how popovers can show informational content without cluttering the main interface.```jsx
<>
  <s-button commandFor="notifications-popover" icon="notification">
    Notifications
  </s-button>

  <s-popover id="notifications-popover">
    <s-box padding="base">
      <s-stack gap="small-200">
        <s-stack gap="small">
          <s-heading>New order received</s-heading>
          <s-paragraph color="subdued">Order #1234 was placed 5 minutes ago</s-paragraph>
        </s-stack>

        <s-divider />

        <s-stack gap="small">
          <s-heading>Low inventory alert</s-heading>
          <s-paragraph color="subdued">3 products are running low on stock</s-paragraph>
        </s-stack>

        <s-divider />

        <s-stack gap="small">
          <s-heading>Payment processed</s-heading>
          <s-paragraph color="subdued">$250.00 payment confirmed for order #1230</s-paragraph>
        </s-stack>
      </s-stack>
    </s-box>
  </s-popover>
</>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 350px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
  <s-button commandFor="notifications-popover" icon="notification">
    Notifications
  </s-button>

  <s-popover id="notifications-popover">
    <s-box padding="base">
      <s-stack gap="small-200">
        <s-stack gap="small">
          <s-heading>New order received</s-heading>
          <s-paragraph color="subdued">Order #1234 was placed 5 minutes ago</s-paragraph>
        </s-stack>

        <s-divider />

        <s-stack gap="small">
          <s-heading>Low inventory alert</s-heading>
          <s-paragraph color="subdued">3 products are running low on stock</s-paragraph>
        </s-stack>

        <s-divider />

        <s-stack gap="small">
          <s-heading>Payment processed</s-heading>
          <s-paragraph color="subdued">\$250.00 payment confirmed for order #1230</s-paragraph>
        </s-stack>
      </s-stack>
    </s-box>
  </s-popover>
</>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

```html
<s-button commandFor="notifications-popover" icon="notification">
  Notifications
</s-button>

<s-popover id="notifications-popover">
  <s-box padding="base">
    <s-stack gap="small-200">
      <s-stack gap="small">
        <s-heading>New order received</s-heading>
        <s-paragraph color="subdued">
          Order #1234 was placed 5 minutes ago
        </s-paragraph>
      </s-stack>

      <s-divider />

      <s-stack gap="small">
        <s-heading>Low inventory alert</s-heading>
        <s-paragraph color="subdued">
          3 products are running low on stock
        </s-paragraph>
      </s-stack>

      <s-divider />

      <s-stack gap="small">
        <s-heading>Payment processed</s-heading>
        <s-paragraph color="subdued">
          $250.00 payment confirmed for order #1230
        </s-paragraph>
      </s-stack>
    </s-stack>
  </s-box>
</s-popover>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 350px}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><div id="wrapper-element"><s-button commandFor="notifications-popover" icon="notification">
  Notifications
</s-button>

<s-popover id="notifications-popover">
  <s-box padding="base">
    <s-stack gap="small-200">
      <s-stack gap="small">
        <s-heading>New order received</s-heading>
        <s-paragraph color="subdued">
          Order #1234 was placed 5 minutes ago
        </s-paragraph>
      </s-stack>

      <s-divider />

      <s-stack gap="small">
        <s-heading>Low inventory alert</s-heading>
        <s-paragraph color="subdued">
          3 products are running low on stock
        </s-paragraph>
      </s-stack>

      <s-divider />

      <s-stack gap="small">
        <s-heading>Payment processed</s-heading>
        <s-paragraph color="subdued">
          $250.00 payment confirmed for order #1230
        </s-paragraph>
      </s-stack>
    </s-stack>
  </s-box>
</s-popover>
</div></body></html>
```

Popover containing a choice list and action button demonstrating how popovers can be used for settings and configuration interfaces.```jsx
<>
  <s-button commandFor="table-settings-popover" icon="settings">
    Columns
  </s-button>

  <s-popover id="table-settings-popover">
    <s-box padding="base">
      <s-stack gap="small-200">
        <s-stack gap="small">
          <s-heading>Choose columns to display</s-heading>
          <s-choice-list label="Select columns to display">
            <s-choice value="sku" selected>
              Sku
            </s-choice>
            <s-choice value="inventory" selected>
              Inventory
            </s-choice>
            <s-choice value="price" selected>
              Price
            </s-choice>
            <s-choice value="vendor">Vendor</s-choice>
            <s-choice value="type">Product type</s-choice>
          </s-choice-list>
        </s-stack>
        <s-button variant="primary">Apply changes</s-button>
      </s-stack>
    </s-box>
  </s-popover>
</>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 400px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
  <s-button commandFor="table-settings-popover" icon="settings">
    Columns
  </s-button>

  <s-popover id="table-settings-popover">
    <s-box padding="base">
      <s-stack gap="small-200">
        <s-stack gap="small">
          <s-heading>Choose columns to display</s-heading>
          <s-choice-list label="Select columns to display">
            <s-choice value="sku" selected>
              Sku
            </s-choice>
            <s-choice value="inventory" selected>
              Inventory
            </s-choice>
            <s-choice value="price" selected>
              Price
            </s-choice>
            <s-choice value="vendor">Vendor</s-choice>
            <s-choice value="type">Product type</s-choice>
          </s-choice-list>
        </s-stack>
        <s-button variant="primary">Apply changes</s-button>
      </s-stack>
    </s-box>
  </s-popover>
</>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

```html
<s-button commandFor="table-settings-popover" disclosure="true" icon="settings">
  Columns
</s-button>

<s-popover id="table-settings-popover">
  <s-box padding="base">
    <s-stack gap="small-200">
      <s-stack gap="small">
        <s-heading>Choose columns to display</s-heading>
        <s-choice-list label="Select columns to display">
          <s-choice value="sku" selected>Sku</s-choice>
          <s-choice value="inventory" selected>Inventory</s-choice>
          <s-choice value="price" selected>Price</s-choice>
          <s-choice value="vendor">Vendor</s-choice>
          <s-choice value="type">Product type</s-choice>
        </s-choice-list>
      </s-stack>
      <s-button variant="primary">Apply changes</s-button>
    </s-stack>
  </s-box>
</s-popover>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 400px}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><div id="wrapper-element"><s-button commandFor="table-settings-popover" disclosure="true" icon="settings">
  Columns
</s-button>

<s-popover id="table-settings-popover">
  <s-box padding="base">
    <s-stack gap="small-200">
      <s-stack gap="small">
        <s-heading>Choose columns to display</s-heading>
        <s-choice-list label="Select columns to display">
          <s-choice value="sku" selected>Sku</s-choice>
          <s-choice value="inventory" selected>Inventory</s-choice>
          <s-choice value="price" selected>Price</s-choice>
          <s-choice value="vendor">Vendor</s-choice>
          <s-choice value="type">Product type</s-choice>
        </s-choice-list>
      </s-stack>
      <s-button variant="primary">Apply changes</s-button>
    </s-stack>
  </s-box>
</s-popover>
</div></body></html>
```

Popover displaying detailed inventory information using Box padding instead of Section, demonstrating an alternative layout approach for data-focused content.```jsx
<>
  <s-button commandFor="stock-popover" icon="info">
    Stock details
  </s-button>

  <s-popover id="stock-popover">
    <s-box padding="base">
      <s-stack gap="small">
        <s-stack gap="small-200">
          <s-stack direction="inline" justifyContent="space-between">
            <s-text color="subdued">Available</s-text>
            <s-text>127 units</s-text>
          </s-stack>

          <s-stack direction="inline" justifyContent="space-between">
            <s-text color="subdued">Reserved</s-text>
            <s-text>15 units</s-text>
          </s-stack>

          <s-stack direction="inline" justifyContent="space-between">
            <s-text color="subdued">In transit</s-text>
            <s-text>50 units</s-text>
          </s-stack>
        </s-stack>

        <s-divider />

        <s-stack direction="inline" justifyContent="space-between">
          <s-text>Total stock</s-text>
          <s-text>192 units</s-text>
        </s-stack>

        <s-button variant="secondary">View full inventory report</s-button>
      </s-stack>
    </s-box>
  </s-popover>
</>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 350px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
  <s-button commandFor="stock-popover" icon="info">
    Stock details
  </s-button>

  <s-popover id="stock-popover">
    <s-box padding="base">
      <s-stack gap="small">
        <s-stack gap="small-200">
          <s-stack direction="inline" justifyContent="space-between">
            <s-text color="subdued">Available</s-text>
            <s-text>127 units</s-text>
          </s-stack>

          <s-stack direction="inline" justifyContent="space-between">
            <s-text color="subdued">Reserved</s-text>
            <s-text>15 units</s-text>
          </s-stack>

          <s-stack direction="inline" justifyContent="space-between">
            <s-text color="subdued">In transit</s-text>
            <s-text>50 units</s-text>
          </s-stack>
        </s-stack>

        <s-divider />

        <s-stack direction="inline" justifyContent="space-between">
          <s-text>Total stock</s-text>
          <s-text>192 units</s-text>
        </s-stack>

        <s-button variant="secondary">View full inventory report</s-button>
      </s-stack>
    </s-box>
  </s-popover>
</>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

```html
<s-button commandFor="stock-popover" icon="info">
  Stock details
</s-button>

<s-popover id="stock-popover">
  <s-box padding="base">
    <s-stack gap="small">
      <s-stack gap="small-200">
        <s-stack direction="inline" justifyContent="space-between">
          <s-text color="subdued">Available</s-text>
          <s-text>127 units</s-text>
        </s-stack>

        <s-stack direction="inline" justifyContent="space-between">
          <s-text color="subdued">Reserved</s-text>
          <s-text>15 units</s-text>
        </s-stack>

        <s-stack direction="inline" justifyContent="space-between">
          <s-text color="subdued">In transit</s-text>
          <s-text>50 units</s-text>
        </s-stack>
      </s-stack>

      <s-divider />

      <s-stack direction="inline" justifyContent="space-between">
        <s-text>Total stock</s-text>
        <s-text>192 units</s-text>
      </s-stack>

      <s-button variant="secondary">View full inventory report</s-button>
    </s-stack>
  </s-box>
</s-popover>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 350px}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><div id="wrapper-element"><s-button commandFor="stock-popover" icon="info">
  Stock details
</s-button>

<s-popover id="stock-popover">
  <s-box padding="base">
    <s-stack gap="small">
      <s-stack gap="small-200">
        <s-stack direction="inline" justifyContent="space-between">
          <s-text color="subdued">Available</s-text>
          <s-text>127 units</s-text>
        </s-stack>

        <s-stack direction="inline" justifyContent="space-between">
          <s-text color="subdued">Reserved</s-text>
          <s-text>15 units</s-text>
        </s-stack>

        <s-stack direction="inline" justifyContent="space-between">
          <s-text color="subdued">In transit</s-text>
          <s-text>50 units</s-text>
        </s-stack>
      </s-stack>

      <s-divider />

      <s-stack direction="inline" justifyContent="space-between">
        <s-text>Total stock</s-text>
        <s-text>192 units</s-text>
      </s-stack>

      <s-button variant="secondary">View full inventory report</s-button>
    </s-stack>
  </s-box>
</s-popover>
</div></body></html>
```

## Slots

### PopoverSlots

### children

value: `HTMLElement`

The content of the Popover.

## Examples

Popovers are used to display content in an overlay that can be triggered by a button.


### Basic usage

Popover displaying admin notifications such as new orders, inventory alerts, and payment confirmations, demonstrating how popovers can show informational content without cluttering the main interface.```jsx
<>
  <s-button commandFor="notifications-popover" icon="notification">
    Notifications
  </s-button>

  <s-popover id="notifications-popover">
    <s-box padding="base">
      <s-stack gap="small-200">
        <s-stack gap="small">
          <s-heading>New order received</s-heading>
          <s-paragraph color="subdued">Order #1234 was placed 5 minutes ago</s-paragraph>
        </s-stack>

        <s-divider />

        <s-stack gap="small">
          <s-heading>Low inventory alert</s-heading>
          <s-paragraph color="subdued">3 products are running low on stock</s-paragraph>
        </s-stack>

        <s-divider />

        <s-stack gap="small">
          <s-heading>Payment processed</s-heading>
          <s-paragraph color="subdued">$250.00 payment confirmed for order #1230</s-paragraph>
        </s-stack>
      </s-stack>
    </s-box>
  </s-popover>
</>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 350px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
  <s-button commandFor="notifications-popover" icon="notification">
    Notifications
  </s-button>

  <s-popover id="notifications-popover">
    <s-box padding="base">
      <s-stack gap="small-200">
        <s-stack gap="small">
          <s-heading>New order received</s-heading>
          <s-paragraph color="subdued">Order #1234 was placed 5 minutes ago</s-paragraph>
        </s-stack>

        <s-divider />

        <s-stack gap="small">
          <s-heading>Low inventory alert</s-heading>
          <s-paragraph color="subdued">3 products are running low on stock</s-paragraph>
        </s-stack>

        <s-divider />

        <s-stack gap="small">
          <s-heading>Payment processed</s-heading>
          <s-paragraph color="subdued">\$250.00 payment confirmed for order #1230</s-paragraph>
        </s-stack>
      </s-stack>
    </s-box>
  </s-popover>
</>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

```html
<s-button commandFor="notifications-popover" icon="notification">
  Notifications
</s-button>

<s-popover id="notifications-popover">
  <s-box padding="base">
    <s-stack gap="small-200">
      <s-stack gap="small">
        <s-heading>New order received</s-heading>
        <s-paragraph color="subdued">
          Order #1234 was placed 5 minutes ago
        </s-paragraph>
      </s-stack>

      <s-divider />

      <s-stack gap="small">
        <s-heading>Low inventory alert</s-heading>
        <s-paragraph color="subdued">
          3 products are running low on stock
        </s-paragraph>
      </s-stack>

      <s-divider />

      <s-stack gap="small">
        <s-heading>Payment processed</s-heading>
        <s-paragraph color="subdued">
          $250.00 payment confirmed for order #1230
        </s-paragraph>
      </s-stack>
    </s-stack>
  </s-box>
</s-popover>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 350px}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><div id="wrapper-element"><s-button commandFor="notifications-popover" icon="notification">
  Notifications
</s-button>

<s-popover id="notifications-popover">
  <s-box padding="base">
    <s-stack gap="small-200">
      <s-stack gap="small">
        <s-heading>New order received</s-heading>
        <s-paragraph color="subdued">
          Order #1234 was placed 5 minutes ago
        </s-paragraph>
      </s-stack>

      <s-divider />

      <s-stack gap="small">
        <s-heading>Low inventory alert</s-heading>
        <s-paragraph color="subdued">
          3 products are running low on stock
        </s-paragraph>
      </s-stack>

      <s-divider />

      <s-stack gap="small">
        <s-heading>Payment processed</s-heading>
        <s-paragraph color="subdued">
          $250.00 payment confirmed for order #1230
        </s-paragraph>
      </s-stack>
    </s-stack>
  </s-box>
</s-popover>
</div></body></html>
```

Popover containing a choice list and action button demonstrating how popovers can be used for settings and configuration interfaces.```jsx
<>
  <s-button commandFor="table-settings-popover" icon="settings">
    Columns
  </s-button>

  <s-popover id="table-settings-popover">
    <s-box padding="base">
      <s-stack gap="small-200">
        <s-stack gap="small">
          <s-heading>Choose columns to display</s-heading>
          <s-choice-list label="Select columns to display">
            <s-choice value="sku" selected>
              Sku
            </s-choice>
            <s-choice value="inventory" selected>
              Inventory
            </s-choice>
            <s-choice value="price" selected>
              Price
            </s-choice>
            <s-choice value="vendor">Vendor</s-choice>
            <s-choice value="type">Product type</s-choice>
          </s-choice-list>
        </s-stack>
        <s-button variant="primary">Apply changes</s-button>
      </s-stack>
    </s-box>
  </s-popover>
</>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 400px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
  <s-button commandFor="table-settings-popover" icon="settings">
    Columns
  </s-button>

  <s-popover id="table-settings-popover">
    <s-box padding="base">
      <s-stack gap="small-200">
        <s-stack gap="small">
          <s-heading>Choose columns to display</s-heading>
          <s-choice-list label="Select columns to display">
            <s-choice value="sku" selected>
              Sku
            </s-choice>
            <s-choice value="inventory" selected>
              Inventory
            </s-choice>
            <s-choice value="price" selected>
              Price
            </s-choice>
            <s-choice value="vendor">Vendor</s-choice>
            <s-choice value="type">Product type</s-choice>
          </s-choice-list>
        </s-stack>
        <s-button variant="primary">Apply changes</s-button>
      </s-stack>
    </s-box>
  </s-popover>
</>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

```html
<s-button commandFor="table-settings-popover" disclosure="true" icon="settings">
  Columns
</s-button>

<s-popover id="table-settings-popover">
  <s-box padding="base">
    <s-stack gap="small-200">
      <s-stack gap="small">
        <s-heading>Choose columns to display</s-heading>
        <s-choice-list label="Select columns to display">
          <s-choice value="sku" selected>Sku</s-choice>
          <s-choice value="inventory" selected>Inventory</s-choice>
          <s-choice value="price" selected>Price</s-choice>
          <s-choice value="vendor">Vendor</s-choice>
          <s-choice value="type">Product type</s-choice>
        </s-choice-list>
      </s-stack>
      <s-button variant="primary">Apply changes</s-button>
    </s-stack>
  </s-box>
</s-popover>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 400px}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><div id="wrapper-element"><s-button commandFor="table-settings-popover" disclosure="true" icon="settings">
  Columns
</s-button>

<s-popover id="table-settings-popover">
  <s-box padding="base">
    <s-stack gap="small-200">
      <s-stack gap="small">
        <s-heading>Choose columns to display</s-heading>
        <s-choice-list label="Select columns to display">
          <s-choice value="sku" selected>Sku</s-choice>
          <s-choice value="inventory" selected>Inventory</s-choice>
          <s-choice value="price" selected>Price</s-choice>
          <s-choice value="vendor">Vendor</s-choice>
          <s-choice value="type">Product type</s-choice>
        </s-choice-list>
      </s-stack>
      <s-button variant="primary">Apply changes</s-button>
    </s-stack>
  </s-box>
</s-popover>
</div></body></html>
```

Popover displaying detailed inventory information using Box padding instead of Section, demonstrating an alternative layout approach for data-focused content.```jsx
<>
  <s-button commandFor="stock-popover" icon="info">
    Stock details
  </s-button>

  <s-popover id="stock-popover">
    <s-box padding="base">
      <s-stack gap="small">
        <s-stack gap="small-200">
          <s-stack direction="inline" justifyContent="space-between">
            <s-text color="subdued">Available</s-text>
            <s-text>127 units</s-text>
          </s-stack>

          <s-stack direction="inline" justifyContent="space-between">
            <s-text color="subdued">Reserved</s-text>
            <s-text>15 units</s-text>
          </s-stack>

          <s-stack direction="inline" justifyContent="space-between">
            <s-text color="subdued">In transit</s-text>
            <s-text>50 units</s-text>
          </s-stack>
        </s-stack>

        <s-divider />

        <s-stack direction="inline" justifyContent="space-between">
          <s-text>Total stock</s-text>
          <s-text>192 units</s-text>
        </s-stack>

        <s-button variant="secondary">View full inventory report</s-button>
      </s-stack>
    </s-box>
  </s-popover>
</>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 350px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
  <s-button commandFor="stock-popover" icon="info">
    Stock details
  </s-button>

  <s-popover id="stock-popover">
    <s-box padding="base">
      <s-stack gap="small">
        <s-stack gap="small-200">
          <s-stack direction="inline" justifyContent="space-between">
            <s-text color="subdued">Available</s-text>
            <s-text>127 units</s-text>
          </s-stack>

          <s-stack direction="inline" justifyContent="space-between">
            <s-text color="subdued">Reserved</s-text>
            <s-text>15 units</s-text>
          </s-stack>

          <s-stack direction="inline" justifyContent="space-between">
            <s-text color="subdued">In transit</s-text>
            <s-text>50 units</s-text>
          </s-stack>
        </s-stack>

        <s-divider />

        <s-stack direction="inline" justifyContent="space-between">
          <s-text>Total stock</s-text>
          <s-text>192 units</s-text>
        </s-stack>

        <s-button variant="secondary">View full inventory report</s-button>
      </s-stack>
    </s-box>
  </s-popover>
</>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

```html
<s-button commandFor="stock-popover" icon="info">
  Stock details
</s-button>

<s-popover id="stock-popover">
  <s-box padding="base">
    <s-stack gap="small">
      <s-stack gap="small-200">
        <s-stack direction="inline" justifyContent="space-between">
          <s-text color="subdued">Available</s-text>
          <s-text>127 units</s-text>
        </s-stack>

        <s-stack direction="inline" justifyContent="space-between">
          <s-text color="subdued">Reserved</s-text>
          <s-text>15 units</s-text>
        </s-stack>

        <s-stack direction="inline" justifyContent="space-between">
          <s-text color="subdued">In transit</s-text>
          <s-text>50 units</s-text>
        </s-stack>
      </s-stack>

      <s-divider />

      <s-stack direction="inline" justifyContent="space-between">
        <s-text>Total stock</s-text>
        <s-text>192 units</s-text>
      </s-stack>

      <s-button variant="secondary">View full inventory report</s-button>
    </s-stack>
  </s-box>
</s-popover>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 350px}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><div id="wrapper-element"><s-button commandFor="stock-popover" icon="info">
  Stock details
</s-button>

<s-popover id="stock-popover">
  <s-box padding="base">
    <s-stack gap="small">
      <s-stack gap="small-200">
        <s-stack direction="inline" justifyContent="space-between">
          <s-text color="subdued">Available</s-text>
          <s-text>127 units</s-text>
        </s-stack>

        <s-stack direction="inline" justifyContent="space-between">
          <s-text color="subdued">Reserved</s-text>
          <s-text>15 units</s-text>
        </s-stack>

        <s-stack direction="inline" justifyContent="space-between">
          <s-text color="subdued">In transit</s-text>
          <s-text>50 units</s-text>
        </s-stack>
      </s-stack>

      <s-divider />

      <s-stack direction="inline" justifyContent="space-between">
        <s-text>Total stock</s-text>
        <s-text>192 units</s-text>
      </s-stack>

      <s-button variant="secondary">View full inventory report</s-button>
    </s-stack>
  </s-box>
</s-popover>
</div></body></html>
```

## Examples

Popovers are used to display content in an overlay that can be triggered by a button.


### Basic usage

Popover displaying admin notifications such as new orders, inventory alerts, and payment confirmations, demonstrating how popovers can show informational content without cluttering the main interface.```jsx
<>
  <s-button commandFor="notifications-popover" icon="notification">
    Notifications
  </s-button>

  <s-popover id="notifications-popover">
    <s-box padding="base">
      <s-stack gap="small-200">
        <s-stack gap="small">
          <s-heading>New order received</s-heading>
          <s-paragraph color="subdued">Order #1234 was placed 5 minutes ago</s-paragraph>
        </s-stack>

        <s-divider />

        <s-stack gap="small">
          <s-heading>Low inventory alert</s-heading>
          <s-paragraph color="subdued">3 products are running low on stock</s-paragraph>
        </s-stack>

        <s-divider />

        <s-stack gap="small">
          <s-heading>Payment processed</s-heading>
          <s-paragraph color="subdued">$250.00 payment confirmed for order #1230</s-paragraph>
        </s-stack>
      </s-stack>
    </s-box>
  </s-popover>
</>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 350px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
  <s-button commandFor="notifications-popover" icon="notification">
    Notifications
  </s-button>

  <s-popover id="notifications-popover">
    <s-box padding="base">
      <s-stack gap="small-200">
        <s-stack gap="small">
          <s-heading>New order received</s-heading>
          <s-paragraph color="subdued">Order #1234 was placed 5 minutes ago</s-paragraph>
        </s-stack>

        <s-divider />

        <s-stack gap="small">
          <s-heading>Low inventory alert</s-heading>
          <s-paragraph color="subdued">3 products are running low on stock</s-paragraph>
        </s-stack>

        <s-divider />

        <s-stack gap="small">
          <s-heading>Payment processed</s-heading>
          <s-paragraph color="subdued">\$250.00 payment confirmed for order #1230</s-paragraph>
        </s-stack>
      </s-stack>
    </s-box>
  </s-popover>
</>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

```html
<s-button commandFor="notifications-popover" icon="notification">
  Notifications
</s-button>

<s-popover id="notifications-popover">
  <s-box padding="base">
    <s-stack gap="small-200">
      <s-stack gap="small">
        <s-heading>New order received</s-heading>
        <s-paragraph color="subdued">
          Order #1234 was placed 5 minutes ago
        </s-paragraph>
      </s-stack>

      <s-divider />

      <s-stack gap="small">
        <s-heading>Low inventory alert</s-heading>
        <s-paragraph color="subdued">
          3 products are running low on stock
        </s-paragraph>
      </s-stack>

      <s-divider />

      <s-stack gap="small">
        <s-heading>Payment processed</s-heading>
        <s-paragraph color="subdued">
          $250.00 payment confirmed for order #1230
        </s-paragraph>
      </s-stack>
    </s-stack>
  </s-box>
</s-popover>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 350px}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><div id="wrapper-element"><s-button commandFor="notifications-popover" icon="notification">
  Notifications
</s-button>

<s-popover id="notifications-popover">
  <s-box padding="base">
    <s-stack gap="small-200">
      <s-stack gap="small">
        <s-heading>New order received</s-heading>
        <s-paragraph color="subdued">
          Order #1234 was placed 5 minutes ago
        </s-paragraph>
      </s-stack>

      <s-divider />

      <s-stack gap="small">
        <s-heading>Low inventory alert</s-heading>
        <s-paragraph color="subdued">
          3 products are running low on stock
        </s-paragraph>
      </s-stack>

      <s-divider />

      <s-stack gap="small">
        <s-heading>Payment processed</s-heading>
        <s-paragraph color="subdued">
          $250.00 payment confirmed for order #1230
        </s-paragraph>
      </s-stack>
    </s-stack>
  </s-box>
</s-popover>
</div></body></html>
```

Popover containing a choice list and action button demonstrating how popovers can be used for settings and configuration interfaces.```jsx
<>
  <s-button commandFor="table-settings-popover" icon="settings">
    Columns
  </s-button>

  <s-popover id="table-settings-popover">
    <s-box padding="base">
      <s-stack gap="small-200">
        <s-stack gap="small">
          <s-heading>Choose columns to display</s-heading>
          <s-choice-list label="Select columns to display">
            <s-choice value="sku" selected>
              Sku
            </s-choice>
            <s-choice value="inventory" selected>
              Inventory
            </s-choice>
            <s-choice value="price" selected>
              Price
            </s-choice>
            <s-choice value="vendor">Vendor</s-choice>
            <s-choice value="type">Product type</s-choice>
          </s-choice-list>
        </s-stack>
        <s-button variant="primary">Apply changes</s-button>
      </s-stack>
    </s-box>
  </s-popover>
</>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 400px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
  <s-button commandFor="table-settings-popover" icon="settings">
    Columns
  </s-button>

  <s-popover id="table-settings-popover">
    <s-box padding="base">
      <s-stack gap="small-200">
        <s-stack gap="small">
          <s-heading>Choose columns to display</s-heading>
          <s-choice-list label="Select columns to display">
            <s-choice value="sku" selected>
              Sku
            </s-choice>
            <s-choice value="inventory" selected>
              Inventory
            </s-choice>
            <s-choice value="price" selected>
              Price
            </s-choice>
            <s-choice value="vendor">Vendor</s-choice>
            <s-choice value="type">Product type</s-choice>
          </s-choice-list>
        </s-stack>
        <s-button variant="primary">Apply changes</s-button>
      </s-stack>
    </s-box>
  </s-popover>
</>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

```html
<s-button commandFor="table-settings-popover" disclosure="true" icon="settings">
  Columns
</s-button>

<s-popover id="table-settings-popover">
  <s-box padding="base">
    <s-stack gap="small-200">
      <s-stack gap="small">
        <s-heading>Choose columns to display</s-heading>
        <s-choice-list label="Select columns to display">
          <s-choice value="sku" selected>Sku</s-choice>
          <s-choice value="inventory" selected>Inventory</s-choice>
          <s-choice value="price" selected>Price</s-choice>
          <s-choice value="vendor">Vendor</s-choice>
          <s-choice value="type">Product type</s-choice>
        </s-choice-list>
      </s-stack>
      <s-button variant="primary">Apply changes</s-button>
    </s-stack>
  </s-box>
</s-popover>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 400px}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><div id="wrapper-element"><s-button commandFor="table-settings-popover" disclosure="true" icon="settings">
  Columns
</s-button>

<s-popover id="table-settings-popover">
  <s-box padding="base">
    <s-stack gap="small-200">
      <s-stack gap="small">
        <s-heading>Choose columns to display</s-heading>
        <s-choice-list label="Select columns to display">
          <s-choice value="sku" selected>Sku</s-choice>
          <s-choice value="inventory" selected>Inventory</s-choice>
          <s-choice value="price" selected>Price</s-choice>
          <s-choice value="vendor">Vendor</s-choice>
          <s-choice value="type">Product type</s-choice>
        </s-choice-list>
      </s-stack>
      <s-button variant="primary">Apply changes</s-button>
    </s-stack>
  </s-box>
</s-popover>
</div></body></html>
```

Popover displaying detailed inventory information using Box padding instead of Section, demonstrating an alternative layout approach for data-focused content.```jsx
<>
  <s-button commandFor="stock-popover" icon="info">
    Stock details
  </s-button>

  <s-popover id="stock-popover">
    <s-box padding="base">
      <s-stack gap="small">
        <s-stack gap="small-200">
          <s-stack direction="inline" justifyContent="space-between">
            <s-text color="subdued">Available</s-text>
            <s-text>127 units</s-text>
          </s-stack>

          <s-stack direction="inline" justifyContent="space-between">
            <s-text color="subdued">Reserved</s-text>
            <s-text>15 units</s-text>
          </s-stack>

          <s-stack direction="inline" justifyContent="space-between">
            <s-text color="subdued">In transit</s-text>
            <s-text>50 units</s-text>
          </s-stack>
        </s-stack>

        <s-divider />

        <s-stack direction="inline" justifyContent="space-between">
          <s-text>Total stock</s-text>
          <s-text>192 units</s-text>
        </s-stack>

        <s-button variant="secondary">View full inventory report</s-button>
      </s-stack>
    </s-box>
  </s-popover>
</>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 350px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
  <s-button commandFor="stock-popover" icon="info">
    Stock details
  </s-button>

  <s-popover id="stock-popover">
    <s-box padding="base">
      <s-stack gap="small">
        <s-stack gap="small-200">
          <s-stack direction="inline" justifyContent="space-between">
            <s-text color="subdued">Available</s-text>
            <s-text>127 units</s-text>
          </s-stack>

          <s-stack direction="inline" justifyContent="space-between">
            <s-text color="subdued">Reserved</s-text>
            <s-text>15 units</s-text>
          </s-stack>

          <s-stack direction="inline" justifyContent="space-between">
            <s-text color="subdued">In transit</s-text>
            <s-text>50 units</s-text>
          </s-stack>
        </s-stack>

        <s-divider />

        <s-stack direction="inline" justifyContent="space-between">
          <s-text>Total stock</s-text>
          <s-text>192 units</s-text>
        </s-stack>

        <s-button variant="secondary">View full inventory report</s-button>
      </s-stack>
    </s-box>
  </s-popover>
</>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

```html
<s-button commandFor="stock-popover" icon="info">
  Stock details
</s-button>

<s-popover id="stock-popover">
  <s-box padding="base">
    <s-stack gap="small">
      <s-stack gap="small-200">
        <s-stack direction="inline" justifyContent="space-between">
          <s-text color="subdued">Available</s-text>
          <s-text>127 units</s-text>
        </s-stack>

        <s-stack direction="inline" justifyContent="space-between">
          <s-text color="subdued">Reserved</s-text>
          <s-text>15 units</s-text>
        </s-stack>

        <s-stack direction="inline" justifyContent="space-between">
          <s-text color="subdued">In transit</s-text>
          <s-text>50 units</s-text>
        </s-stack>
      </s-stack>

      <s-divider />

      <s-stack direction="inline" justifyContent="space-between">
        <s-text>Total stock</s-text>
        <s-text>192 units</s-text>
      </s-stack>

      <s-button variant="secondary">View full inventory report</s-button>
    </s-stack>
  </s-box>
</s-popover>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 350px}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><div id="wrapper-element"><s-button commandFor="stock-popover" icon="info">
  Stock details
</s-button>

<s-popover id="stock-popover">
  <s-box padding="base">
    <s-stack gap="small">
      <s-stack gap="small-200">
        <s-stack direction="inline" justifyContent="space-between">
          <s-text color="subdued">Available</s-text>
          <s-text>127 units</s-text>
        </s-stack>

        <s-stack direction="inline" justifyContent="space-between">
          <s-text color="subdued">Reserved</s-text>
          <s-text>15 units</s-text>
        </s-stack>

        <s-stack direction="inline" justifyContent="space-between">
          <s-text color="subdued">In transit</s-text>
          <s-text>50 units</s-text>
        </s-stack>
      </s-stack>

      <s-divider />

      <s-stack direction="inline" justifyContent="space-between">
        <s-text>Total stock</s-text>
        <s-text>192 units</s-text>
      </s-stack>

      <s-button variant="secondary">View full inventory report</s-button>
    </s-stack>
  </s-box>
</s-popover>
</div></body></html>
```

