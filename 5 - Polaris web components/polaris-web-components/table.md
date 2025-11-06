# Table

Display data clearly in rows and columns, helping users view, analyze, and compare information. Automatically renders as a list on small screens and a table on large ones.

```jsx
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header>Name</s-table-header>
      <s-table-header>Email</s-table-header>
      <s-table-header format="numeric">Orders placed</s-table-header>
      <s-table-header>Phone</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>John Smith</s-table-cell>
        <s-table-cell>john@example.com</s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>123-456-7890</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Jane Johnson</s-table-cell>
        <s-table-cell>jane@example.com</s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>234-567-8901</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Brandon Williams</s-table-cell>
        <s-table-cell>brandon@example.com</s-table-cell>
        <s-table-cell>42</s-table-cell>
        <s-table-cell>345-678-9012</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```html
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header>Name</s-table-header>
      <s-table-header>Email</s-table-header>
      <s-table-header format="numeric">Orders placed</s-table-header>
      <s-table-header>Phone</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>John Smith</s-table-cell>
        <s-table-cell>john@example.com</s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>123-456-7890</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Jane Johnson</s-table-cell>
        <s-table-cell>jane@example.com</s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>234-567-8901</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Brandon Williams</s-table-cell>
        <s-table-cell>brandon@example.com</s-table-cell>
        <s-table-cell>42</s-table-cell>
        <s-table-cell>345-678-9012</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; background: #F1F1F1} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-section padding="none" id="wrapper-element"></s-section><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header>Name</s-table-header>
      <s-table-header>Email</s-table-header>
      <s-table-header format="numeric">Orders placed</s-table-header>
      <s-table-header>Phone</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>John Smith</s-table-cell>
        <s-table-cell>john@example.com</s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>123-456-7890</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Jane Johnson</s-table-cell>
        <s-table-cell>jane@example.com</s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>234-567-8901</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Brandon Williams</s-table-cell>
        <s-table-cell>brandon@example.com</s-table-cell>
        <s-table-cell>42</s-table-cell>
        <s-table-cell>345-678-9012</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Properties

### Table

### __@actualTableVariantSymbol@7485

value: `AddedContext<ActualTableVariant>`

  - Table: declare class Table extends PreactCustomElement implements TableProps {
  accessor variant: TableProps['variant'];
  accessor loading: TableProps['loading'];
  accessor paginate: TableProps['paginate'];
  accessor hasPreviousPage: TableProps['hasPreviousPage'];
  accessor hasNextPage: TableProps['hasNextPage'];
  /**
   * @private
   * The actual table variant, which is either 'table' or 'list'.
   */
  [actualTableVariantSymbol]: AddedContext<ActualTableVariant>;
  /** @private */
  [tableHeadersSharedDataSymbol]: AddedContext<
    {
      listSlot: TableHeaderProps['listSlot'];
      textContent: string;
      format: HeaderFormat;
    }[]
  >;

  constructor();
}
  - AddedContext: declare class AddedContext<T> extends EventTarget {
  constructor(defaultValue: T);
  get value(): T;
  set value(value: T);
}
  - ActualTableVariant: 'table' | 'list'

### __@tableHeadersSharedDataSymbol@7486

value: `AddedContext<{ listSlot: ListSlotType; textContent: string; format: HeaderFormat; }[]>`

  - AddedContext: declare class AddedContext<T> extends EventTarget {
  constructor(defaultValue: T);
  get value(): T;
  set value(value: T);
}
  - ListSlotType: 'primary' | 'secondary' | 'kicker' | 'inline' | 'labeled'
  - HeaderFormat: 'base' | 'numeric' | 'currency'

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


### hasNextPage

value: `boolean`

Whether there's an additional page of data.

### hasPreviousPage

value: `boolean`

Whether there's a previous page of data.

### loading

value: `boolean`

Whether the table is in a loading state, such as initial page load or loading the next page in a paginated table. When true, the table could be in an inert state, which prevents user interaction.

### paginate

value: `boolean`

Whether to use pagination controls.

### queueRender

value: `() => void`

Queue a run of the render function. You shouldn't need to call this manually - it should be handled by changes to

### setAttribute

value: `(name: string, value: string) => void`


### variant

value: `"auto" | "list"`

Sets the layout of the Table.

- `list`: The Table is always displayed as a list.
- `table`: The Table is always displayed as a table.
- `auto`: The Table is displayed as a table on wide devices and as a list on narrow devices.

### AddedContext

### addEventListener

value: `(type: string, callback: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions) => void`

The **`addEventListener()`** method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

### dispatchEvent

value: `(event: Event) => boolean`

The **`dispatchEvent()`** method of the EventTarget sends an Event to the object, (synchronously) invoking the affected event listeners in the appropriate order.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/dispatchEvent)

### removeEventListener

value: `(type: string, callback: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions) => void`

The **`removeEventListener()`** method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

### value

value: `T`


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


## Related

- [Index table](https://shopify.dev/docs/api/app-home/patterns/compositions/index-table)

## Examples

Display data clearly in rows and columns, helping users view, analyze, and compare information. Automatically renders as a list on small screens and a table on large ones.


### Basic usage

Tables expand to full width by default.```jsx
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>\$24.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>\$19.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>\$34.99</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Add pagination controls for navigating large datasets.```jsx
<s-section padding="none">
  <s-table paginate hasPreviousPage hasNextPage>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="secondary" format="numeric">Sales</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Product 1</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>250</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 2</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>180</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 3</s-table-cell>
        <s-table-cell>Paused</s-table-cell>
        <s-table-cell>95</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table paginate hasPreviousPage hasNextPage>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="secondary" format="numeric">Sales</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Product 1</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>250</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 2</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>180</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 3</s-table-cell>
        <s-table-cell>Paused</s-table-cell>
        <s-table-cell>95</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table paginate hasPreviousPage hasNextPage>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="secondary" format="numeric">Sales</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Product 1</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>250</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 2</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>180</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 3</s-table-cell>
        <s-table-cell>Paused</s-table-cell>
        <s-table-cell>95</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Display a loading state while fetching data.```jsx
<s-section padding="none">
  <s-table loading>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```html
<s-section padding="none">
  <s-table loading>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table loading>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Display multiple columns in a full-width table.```jsx
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="kicker">SKU</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Inventory</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Price</s-table-header>
      <s-table-header listSlot="labeled">Last updated</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>WB-001</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
        <s-table-cell>2 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>TS-002</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
        <s-table-cell>1 day ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>CB-003</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
        <s-table-cell>3 days ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>NB-004</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
        <s-table-cell>$12.99</s-table-cell>
        <s-table-cell>5 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Stainless steel straws</s-table-cell>
        <s-table-cell>SS-005</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>89</s-table-cell>
        <s-table-cell>$9.99</s-table-cell>
        <s-table-cell>1 hour ago</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="kicker">SKU</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Inventory</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Price</s-table-header>
      <s-table-header listSlot="labeled">Last updated</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>WB-001</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
        <s-table-cell>2 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>TS-002</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
        <s-table-cell>1 day ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>CB-003</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
        <s-table-cell>3 days ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>NB-004</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
        <s-table-cell>$12.99</s-table-cell>
        <s-table-cell>5 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Stainless steel straws</s-table-cell>
        <s-table-cell>SS-005</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>89</s-table-cell>
        <s-table-cell>$9.99</s-table-cell>
        <s-table-cell>1 hour ago</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0; min-height: 400px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="kicker">SKU</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Inventory</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Price</s-table-header>
      <s-table-header listSlot="labeled">Last updated</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>WB-001</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>\$24.99</s-table-cell>
        <s-table-cell>2 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>TS-002</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>\$19.99</s-table-cell>
        <s-table-cell>1 day ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>CB-003</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>\$34.99</s-table-cell>
        <s-table-cell>3 days ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>NB-004</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
        <s-table-cell>\$12.99</s-table-cell>
        <s-table-cell>5 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Stainless steel straws</s-table-cell>
        <s-table-cell>SS-005</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>89</s-table-cell>
        <s-table-cell>\$9.99</s-table-cell>
        <s-table-cell>1 hour ago</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Display data using the list variant with specialized slot types. List is the default variant on mobile devices.```jsx
<s-section padding="none">  
  <s-table variant="list">
    <s-table-header-row>
      <s-table-header listSlot="kicker">ID</s-table-header>
      <s-table-header listSlot="primary">Customer</s-table-header>
      <s-table-header listSlot="secondary">Email</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Orders</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Total spent</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>#1001</s-table-cell>
        <s-table-cell>Sarah Johnson</s-table-cell>
        <s-table-cell>sarah@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>$1,245.50</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1002</s-table-cell>
        <s-table-cell>Mike Chen</s-table-cell>
        <s-table-cell>mike@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="neutral">Inactive</s-badge>
        </s-table-cell>
        <s-table-cell>7</s-table-cell>
        <s-table-cell>$432.75</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1003</s-table-cell>
        <s-table-cell>Emma Davis</s-table-cell>
        <s-table-cell>emma@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$892.25</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table variant="list">
    <s-table-header-row>
      <s-table-header listSlot="kicker">ID</s-table-header>
      <s-table-header listSlot="primary">Customer</s-table-header>
      <s-table-header listSlot="secondary">Email</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">
        Orders
      </s-table-header>
      <s-table-header listSlot="labeled" format="currency">
        Total spent
      </s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>#1001</s-table-cell>
        <s-table-cell>Sarah Johnson</s-table-cell>
        <s-table-cell>sarah@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>$1,245.50</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1002</s-table-cell>
        <s-table-cell>Mike Chen</s-table-cell>
        <s-table-cell>mike@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="neutral">Inactive</s-badge>
        </s-table-cell>
        <s-table-cell>7</s-table-cell>
        <s-table-cell>$432.75</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1003</s-table-cell>
        <s-table-cell>Emma Davis</s-table-cell>
        <s-table-cell>emma@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$892.25</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">  
  <s-table variant="list">
    <s-table-header-row>
      <s-table-header listSlot="kicker">ID</s-table-header>
      <s-table-header listSlot="primary">Customer</s-table-header>
      <s-table-header listSlot="secondary">Email</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Orders</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Total spent</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>#1001</s-table-cell>
        <s-table-cell>Sarah Johnson</s-table-cell>
        <s-table-cell>sarah@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>\$1,245.50</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1002</s-table-cell>
        <s-table-cell>Mike Chen</s-table-cell>
        <s-table-cell>mike@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="neutral">Inactive</s-badge>
        </s-table-cell>
        <s-table-cell>7</s-table-cell>
        <s-table-cell>\$432.75</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1003</s-table-cell>
        <s-table-cell>Emma Davis</s-table-cell>
        <s-table-cell>emma@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>\$892.25</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Slots

### TableSlots

### children

value: `HTMLElement`

The content of the Table.

### filters

value: `HTMLElement`

Additional filters to display in the table. For example, the `s-search-field` component can be used to filter the table data.

## Related

- [Index table](https://shopify.dev/docs/api/app-home/patterns/compositions/index-table)

## Examples

Display data clearly in rows and columns, helping users view, analyze, and compare information. Automatically renders as a list on small screens and a table on large ones.


### Basic usage

Tables expand to full width by default.```jsx
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>\$24.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>\$19.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>\$34.99</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Add pagination controls for navigating large datasets.```jsx
<s-section padding="none">
  <s-table paginate hasPreviousPage hasNextPage>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="secondary" format="numeric">Sales</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Product 1</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>250</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 2</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>180</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 3</s-table-cell>
        <s-table-cell>Paused</s-table-cell>
        <s-table-cell>95</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table paginate hasPreviousPage hasNextPage>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="secondary" format="numeric">Sales</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Product 1</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>250</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 2</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>180</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 3</s-table-cell>
        <s-table-cell>Paused</s-table-cell>
        <s-table-cell>95</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table paginate hasPreviousPage hasNextPage>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="secondary" format="numeric">Sales</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Product 1</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>250</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 2</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>180</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 3</s-table-cell>
        <s-table-cell>Paused</s-table-cell>
        <s-table-cell>95</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Display a loading state while fetching data.```jsx
<s-section padding="none">
  <s-table loading>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```html
<s-section padding="none">
  <s-table loading>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table loading>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Display multiple columns in a full-width table.```jsx
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="kicker">SKU</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Inventory</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Price</s-table-header>
      <s-table-header listSlot="labeled">Last updated</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>WB-001</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
        <s-table-cell>2 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>TS-002</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
        <s-table-cell>1 day ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>CB-003</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
        <s-table-cell>3 days ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>NB-004</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
        <s-table-cell>$12.99</s-table-cell>
        <s-table-cell>5 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Stainless steel straws</s-table-cell>
        <s-table-cell>SS-005</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>89</s-table-cell>
        <s-table-cell>$9.99</s-table-cell>
        <s-table-cell>1 hour ago</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="kicker">SKU</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Inventory</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Price</s-table-header>
      <s-table-header listSlot="labeled">Last updated</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>WB-001</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
        <s-table-cell>2 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>TS-002</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
        <s-table-cell>1 day ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>CB-003</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
        <s-table-cell>3 days ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>NB-004</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
        <s-table-cell>$12.99</s-table-cell>
        <s-table-cell>5 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Stainless steel straws</s-table-cell>
        <s-table-cell>SS-005</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>89</s-table-cell>
        <s-table-cell>$9.99</s-table-cell>
        <s-table-cell>1 hour ago</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0; min-height: 400px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="kicker">SKU</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Inventory</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Price</s-table-header>
      <s-table-header listSlot="labeled">Last updated</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>WB-001</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>\$24.99</s-table-cell>
        <s-table-cell>2 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>TS-002</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>\$19.99</s-table-cell>
        <s-table-cell>1 day ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>CB-003</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>\$34.99</s-table-cell>
        <s-table-cell>3 days ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>NB-004</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
        <s-table-cell>\$12.99</s-table-cell>
        <s-table-cell>5 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Stainless steel straws</s-table-cell>
        <s-table-cell>SS-005</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>89</s-table-cell>
        <s-table-cell>\$9.99</s-table-cell>
        <s-table-cell>1 hour ago</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Display data using the list variant with specialized slot types. List is the default variant on mobile devices.```jsx
<s-section padding="none">  
  <s-table variant="list">
    <s-table-header-row>
      <s-table-header listSlot="kicker">ID</s-table-header>
      <s-table-header listSlot="primary">Customer</s-table-header>
      <s-table-header listSlot="secondary">Email</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Orders</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Total spent</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>#1001</s-table-cell>
        <s-table-cell>Sarah Johnson</s-table-cell>
        <s-table-cell>sarah@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>$1,245.50</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1002</s-table-cell>
        <s-table-cell>Mike Chen</s-table-cell>
        <s-table-cell>mike@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="neutral">Inactive</s-badge>
        </s-table-cell>
        <s-table-cell>7</s-table-cell>
        <s-table-cell>$432.75</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1003</s-table-cell>
        <s-table-cell>Emma Davis</s-table-cell>
        <s-table-cell>emma@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$892.25</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table variant="list">
    <s-table-header-row>
      <s-table-header listSlot="kicker">ID</s-table-header>
      <s-table-header listSlot="primary">Customer</s-table-header>
      <s-table-header listSlot="secondary">Email</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">
        Orders
      </s-table-header>
      <s-table-header listSlot="labeled" format="currency">
        Total spent
      </s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>#1001</s-table-cell>
        <s-table-cell>Sarah Johnson</s-table-cell>
        <s-table-cell>sarah@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>$1,245.50</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1002</s-table-cell>
        <s-table-cell>Mike Chen</s-table-cell>
        <s-table-cell>mike@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="neutral">Inactive</s-badge>
        </s-table-cell>
        <s-table-cell>7</s-table-cell>
        <s-table-cell>$432.75</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1003</s-table-cell>
        <s-table-cell>Emma Davis</s-table-cell>
        <s-table-cell>emma@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$892.25</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">  
  <s-table variant="list">
    <s-table-header-row>
      <s-table-header listSlot="kicker">ID</s-table-header>
      <s-table-header listSlot="primary">Customer</s-table-header>
      <s-table-header listSlot="secondary">Email</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Orders</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Total spent</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>#1001</s-table-cell>
        <s-table-cell>Sarah Johnson</s-table-cell>
        <s-table-cell>sarah@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>\$1,245.50</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1002</s-table-cell>
        <s-table-cell>Mike Chen</s-table-cell>
        <s-table-cell>mike@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="neutral">Inactive</s-badge>
        </s-table-cell>
        <s-table-cell>7</s-table-cell>
        <s-table-cell>\$432.75</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1003</s-table-cell>
        <s-table-cell>Emma Davis</s-table-cell>
        <s-table-cell>emma@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>\$892.25</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Events

Learn more about [registering events](https://shopify.dev/docs/api/app-home/using-polaris-components#event-handling).

### TableEvents

### nextpage

value: `CallbackEventListener<typeof tagName> | null`

  - CallbackEventListener: (EventListener & {
      (event: CallbackEvent<T>): void;
    }) | null
  - CallbackEvent: Event & {
  currentTarget: HTMLElementTagNameMap[T];
}

### previouspage

value: `CallbackEventListener<typeof tagName> | null`

  - CallbackEventListener: (EventListener & {
      (event: CallbackEvent<T>): void;
    }) | null
  - CallbackEvent: Event & {
  currentTarget: HTMLElementTagNameMap[T];
}

## Related

- [Index table](https://shopify.dev/docs/api/app-home/patterns/compositions/index-table)

## Examples

Display data clearly in rows and columns, helping users view, analyze, and compare information. Automatically renders as a list on small screens and a table on large ones.


### Basic usage

Tables expand to full width by default.```jsx
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>\$24.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>\$19.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>\$34.99</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Add pagination controls for navigating large datasets.```jsx
<s-section padding="none">
  <s-table paginate hasPreviousPage hasNextPage>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="secondary" format="numeric">Sales</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Product 1</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>250</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 2</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>180</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 3</s-table-cell>
        <s-table-cell>Paused</s-table-cell>
        <s-table-cell>95</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table paginate hasPreviousPage hasNextPage>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="secondary" format="numeric">Sales</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Product 1</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>250</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 2</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>180</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 3</s-table-cell>
        <s-table-cell>Paused</s-table-cell>
        <s-table-cell>95</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table paginate hasPreviousPage hasNextPage>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="secondary" format="numeric">Sales</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Product 1</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>250</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 2</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>180</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 3</s-table-cell>
        <s-table-cell>Paused</s-table-cell>
        <s-table-cell>95</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Display a loading state while fetching data.```jsx
<s-section padding="none">
  <s-table loading>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```html
<s-section padding="none">
  <s-table loading>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table loading>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Display multiple columns in a full-width table.```jsx
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="kicker">SKU</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Inventory</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Price</s-table-header>
      <s-table-header listSlot="labeled">Last updated</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>WB-001</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
        <s-table-cell>2 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>TS-002</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
        <s-table-cell>1 day ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>CB-003</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
        <s-table-cell>3 days ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>NB-004</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
        <s-table-cell>$12.99</s-table-cell>
        <s-table-cell>5 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Stainless steel straws</s-table-cell>
        <s-table-cell>SS-005</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>89</s-table-cell>
        <s-table-cell>$9.99</s-table-cell>
        <s-table-cell>1 hour ago</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="kicker">SKU</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Inventory</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Price</s-table-header>
      <s-table-header listSlot="labeled">Last updated</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>WB-001</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
        <s-table-cell>2 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>TS-002</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
        <s-table-cell>1 day ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>CB-003</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
        <s-table-cell>3 days ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>NB-004</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
        <s-table-cell>$12.99</s-table-cell>
        <s-table-cell>5 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Stainless steel straws</s-table-cell>
        <s-table-cell>SS-005</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>89</s-table-cell>
        <s-table-cell>$9.99</s-table-cell>
        <s-table-cell>1 hour ago</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0; min-height: 400px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="kicker">SKU</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Inventory</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Price</s-table-header>
      <s-table-header listSlot="labeled">Last updated</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>WB-001</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>\$24.99</s-table-cell>
        <s-table-cell>2 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>TS-002</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>\$19.99</s-table-cell>
        <s-table-cell>1 day ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>CB-003</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>\$34.99</s-table-cell>
        <s-table-cell>3 days ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>NB-004</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
        <s-table-cell>\$12.99</s-table-cell>
        <s-table-cell>5 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Stainless steel straws</s-table-cell>
        <s-table-cell>SS-005</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>89</s-table-cell>
        <s-table-cell>\$9.99</s-table-cell>
        <s-table-cell>1 hour ago</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Display data using the list variant with specialized slot types. List is the default variant on mobile devices.```jsx
<s-section padding="none">  
  <s-table variant="list">
    <s-table-header-row>
      <s-table-header listSlot="kicker">ID</s-table-header>
      <s-table-header listSlot="primary">Customer</s-table-header>
      <s-table-header listSlot="secondary">Email</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Orders</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Total spent</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>#1001</s-table-cell>
        <s-table-cell>Sarah Johnson</s-table-cell>
        <s-table-cell>sarah@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>$1,245.50</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1002</s-table-cell>
        <s-table-cell>Mike Chen</s-table-cell>
        <s-table-cell>mike@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="neutral">Inactive</s-badge>
        </s-table-cell>
        <s-table-cell>7</s-table-cell>
        <s-table-cell>$432.75</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1003</s-table-cell>
        <s-table-cell>Emma Davis</s-table-cell>
        <s-table-cell>emma@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$892.25</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table variant="list">
    <s-table-header-row>
      <s-table-header listSlot="kicker">ID</s-table-header>
      <s-table-header listSlot="primary">Customer</s-table-header>
      <s-table-header listSlot="secondary">Email</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">
        Orders
      </s-table-header>
      <s-table-header listSlot="labeled" format="currency">
        Total spent
      </s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>#1001</s-table-cell>
        <s-table-cell>Sarah Johnson</s-table-cell>
        <s-table-cell>sarah@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>$1,245.50</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1002</s-table-cell>
        <s-table-cell>Mike Chen</s-table-cell>
        <s-table-cell>mike@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="neutral">Inactive</s-badge>
        </s-table-cell>
        <s-table-cell>7</s-table-cell>
        <s-table-cell>$432.75</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1003</s-table-cell>
        <s-table-cell>Emma Davis</s-table-cell>
        <s-table-cell>emma@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$892.25</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">  
  <s-table variant="list">
    <s-table-header-row>
      <s-table-header listSlot="kicker">ID</s-table-header>
      <s-table-header listSlot="primary">Customer</s-table-header>
      <s-table-header listSlot="secondary">Email</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Orders</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Total spent</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>#1001</s-table-cell>
        <s-table-cell>Sarah Johnson</s-table-cell>
        <s-table-cell>sarah@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>\$1,245.50</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1002</s-table-cell>
        <s-table-cell>Mike Chen</s-table-cell>
        <s-table-cell>mike@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="neutral">Inactive</s-badge>
        </s-table-cell>
        <s-table-cell>7</s-table-cell>
        <s-table-cell>\$432.75</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1003</s-table-cell>
        <s-table-cell>Emma Davis</s-table-cell>
        <s-table-cell>emma@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>\$892.25</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## TableBody

Define the main content area of a table, containing rows and cells that display data.

### TableBody

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


## Related

- [Index table](https://shopify.dev/docs/api/app-home/patterns/compositions/index-table)

## Examples

Display data clearly in rows and columns, helping users view, analyze, and compare information. Automatically renders as a list on small screens and a table on large ones.


### Basic usage

Tables expand to full width by default.```jsx
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>\$24.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>\$19.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>\$34.99</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Add pagination controls for navigating large datasets.```jsx
<s-section padding="none">
  <s-table paginate hasPreviousPage hasNextPage>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="secondary" format="numeric">Sales</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Product 1</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>250</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 2</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>180</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 3</s-table-cell>
        <s-table-cell>Paused</s-table-cell>
        <s-table-cell>95</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table paginate hasPreviousPage hasNextPage>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="secondary" format="numeric">Sales</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Product 1</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>250</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 2</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>180</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 3</s-table-cell>
        <s-table-cell>Paused</s-table-cell>
        <s-table-cell>95</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table paginate hasPreviousPage hasNextPage>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="secondary" format="numeric">Sales</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Product 1</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>250</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 2</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>180</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 3</s-table-cell>
        <s-table-cell>Paused</s-table-cell>
        <s-table-cell>95</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Display a loading state while fetching data.```jsx
<s-section padding="none">
  <s-table loading>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```html
<s-section padding="none">
  <s-table loading>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table loading>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Display multiple columns in a full-width table.```jsx
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="kicker">SKU</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Inventory</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Price</s-table-header>
      <s-table-header listSlot="labeled">Last updated</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>WB-001</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
        <s-table-cell>2 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>TS-002</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
        <s-table-cell>1 day ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>CB-003</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
        <s-table-cell>3 days ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>NB-004</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
        <s-table-cell>$12.99</s-table-cell>
        <s-table-cell>5 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Stainless steel straws</s-table-cell>
        <s-table-cell>SS-005</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>89</s-table-cell>
        <s-table-cell>$9.99</s-table-cell>
        <s-table-cell>1 hour ago</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="kicker">SKU</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Inventory</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Price</s-table-header>
      <s-table-header listSlot="labeled">Last updated</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>WB-001</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
        <s-table-cell>2 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>TS-002</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
        <s-table-cell>1 day ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>CB-003</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
        <s-table-cell>3 days ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>NB-004</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
        <s-table-cell>$12.99</s-table-cell>
        <s-table-cell>5 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Stainless steel straws</s-table-cell>
        <s-table-cell>SS-005</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>89</s-table-cell>
        <s-table-cell>$9.99</s-table-cell>
        <s-table-cell>1 hour ago</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0; min-height: 400px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="kicker">SKU</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Inventory</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Price</s-table-header>
      <s-table-header listSlot="labeled">Last updated</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>WB-001</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>\$24.99</s-table-cell>
        <s-table-cell>2 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>TS-002</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>\$19.99</s-table-cell>
        <s-table-cell>1 day ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>CB-003</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>\$34.99</s-table-cell>
        <s-table-cell>3 days ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>NB-004</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
        <s-table-cell>\$12.99</s-table-cell>
        <s-table-cell>5 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Stainless steel straws</s-table-cell>
        <s-table-cell>SS-005</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>89</s-table-cell>
        <s-table-cell>\$9.99</s-table-cell>
        <s-table-cell>1 hour ago</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Display data using the list variant with specialized slot types. List is the default variant on mobile devices.```jsx
<s-section padding="none">  
  <s-table variant="list">
    <s-table-header-row>
      <s-table-header listSlot="kicker">ID</s-table-header>
      <s-table-header listSlot="primary">Customer</s-table-header>
      <s-table-header listSlot="secondary">Email</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Orders</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Total spent</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>#1001</s-table-cell>
        <s-table-cell>Sarah Johnson</s-table-cell>
        <s-table-cell>sarah@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>$1,245.50</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1002</s-table-cell>
        <s-table-cell>Mike Chen</s-table-cell>
        <s-table-cell>mike@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="neutral">Inactive</s-badge>
        </s-table-cell>
        <s-table-cell>7</s-table-cell>
        <s-table-cell>$432.75</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1003</s-table-cell>
        <s-table-cell>Emma Davis</s-table-cell>
        <s-table-cell>emma@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$892.25</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table variant="list">
    <s-table-header-row>
      <s-table-header listSlot="kicker">ID</s-table-header>
      <s-table-header listSlot="primary">Customer</s-table-header>
      <s-table-header listSlot="secondary">Email</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">
        Orders
      </s-table-header>
      <s-table-header listSlot="labeled" format="currency">
        Total spent
      </s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>#1001</s-table-cell>
        <s-table-cell>Sarah Johnson</s-table-cell>
        <s-table-cell>sarah@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>$1,245.50</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1002</s-table-cell>
        <s-table-cell>Mike Chen</s-table-cell>
        <s-table-cell>mike@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="neutral">Inactive</s-badge>
        </s-table-cell>
        <s-table-cell>7</s-table-cell>
        <s-table-cell>$432.75</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1003</s-table-cell>
        <s-table-cell>Emma Davis</s-table-cell>
        <s-table-cell>emma@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$892.25</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">  
  <s-table variant="list">
    <s-table-header-row>
      <s-table-header listSlot="kicker">ID</s-table-header>
      <s-table-header listSlot="primary">Customer</s-table-header>
      <s-table-header listSlot="secondary">Email</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Orders</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Total spent</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>#1001</s-table-cell>
        <s-table-cell>Sarah Johnson</s-table-cell>
        <s-table-cell>sarah@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>\$1,245.50</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1002</s-table-cell>
        <s-table-cell>Mike Chen</s-table-cell>
        <s-table-cell>mike@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="neutral">Inactive</s-badge>
        </s-table-cell>
        <s-table-cell>7</s-table-cell>
        <s-table-cell>\$432.75</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1003</s-table-cell>
        <s-table-cell>Emma Davis</s-table-cell>
        <s-table-cell>emma@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>\$892.25</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Slots

### TableBodySlots

### children

value: `HTMLElement`

The body of the table. May not have any semantic meaning in the Table's `list` variant.

## Related

- [Index table](https://shopify.dev/docs/api/app-home/patterns/compositions/index-table)

## Examples

Display data clearly in rows and columns, helping users view, analyze, and compare information. Automatically renders as a list on small screens and a table on large ones.


### Basic usage

Tables expand to full width by default.```jsx
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>\$24.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>\$19.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>\$34.99</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Add pagination controls for navigating large datasets.```jsx
<s-section padding="none">
  <s-table paginate hasPreviousPage hasNextPage>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="secondary" format="numeric">Sales</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Product 1</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>250</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 2</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>180</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 3</s-table-cell>
        <s-table-cell>Paused</s-table-cell>
        <s-table-cell>95</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table paginate hasPreviousPage hasNextPage>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="secondary" format="numeric">Sales</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Product 1</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>250</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 2</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>180</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 3</s-table-cell>
        <s-table-cell>Paused</s-table-cell>
        <s-table-cell>95</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table paginate hasPreviousPage hasNextPage>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="secondary" format="numeric">Sales</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Product 1</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>250</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 2</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>180</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 3</s-table-cell>
        <s-table-cell>Paused</s-table-cell>
        <s-table-cell>95</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Display a loading state while fetching data.```jsx
<s-section padding="none">
  <s-table loading>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```html
<s-section padding="none">
  <s-table loading>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table loading>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Display multiple columns in a full-width table.```jsx
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="kicker">SKU</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Inventory</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Price</s-table-header>
      <s-table-header listSlot="labeled">Last updated</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>WB-001</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
        <s-table-cell>2 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>TS-002</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
        <s-table-cell>1 day ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>CB-003</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
        <s-table-cell>3 days ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>NB-004</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
        <s-table-cell>$12.99</s-table-cell>
        <s-table-cell>5 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Stainless steel straws</s-table-cell>
        <s-table-cell>SS-005</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>89</s-table-cell>
        <s-table-cell>$9.99</s-table-cell>
        <s-table-cell>1 hour ago</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="kicker">SKU</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Inventory</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Price</s-table-header>
      <s-table-header listSlot="labeled">Last updated</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>WB-001</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
        <s-table-cell>2 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>TS-002</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
        <s-table-cell>1 day ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>CB-003</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
        <s-table-cell>3 days ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>NB-004</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
        <s-table-cell>$12.99</s-table-cell>
        <s-table-cell>5 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Stainless steel straws</s-table-cell>
        <s-table-cell>SS-005</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>89</s-table-cell>
        <s-table-cell>$9.99</s-table-cell>
        <s-table-cell>1 hour ago</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0; min-height: 400px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="kicker">SKU</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Inventory</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Price</s-table-header>
      <s-table-header listSlot="labeled">Last updated</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>WB-001</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>\$24.99</s-table-cell>
        <s-table-cell>2 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>TS-002</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>\$19.99</s-table-cell>
        <s-table-cell>1 day ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>CB-003</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>\$34.99</s-table-cell>
        <s-table-cell>3 days ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>NB-004</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
        <s-table-cell>\$12.99</s-table-cell>
        <s-table-cell>5 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Stainless steel straws</s-table-cell>
        <s-table-cell>SS-005</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>89</s-table-cell>
        <s-table-cell>\$9.99</s-table-cell>
        <s-table-cell>1 hour ago</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Display data using the list variant with specialized slot types. List is the default variant on mobile devices.```jsx
<s-section padding="none">  
  <s-table variant="list">
    <s-table-header-row>
      <s-table-header listSlot="kicker">ID</s-table-header>
      <s-table-header listSlot="primary">Customer</s-table-header>
      <s-table-header listSlot="secondary">Email</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Orders</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Total spent</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>#1001</s-table-cell>
        <s-table-cell>Sarah Johnson</s-table-cell>
        <s-table-cell>sarah@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>$1,245.50</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1002</s-table-cell>
        <s-table-cell>Mike Chen</s-table-cell>
        <s-table-cell>mike@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="neutral">Inactive</s-badge>
        </s-table-cell>
        <s-table-cell>7</s-table-cell>
        <s-table-cell>$432.75</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1003</s-table-cell>
        <s-table-cell>Emma Davis</s-table-cell>
        <s-table-cell>emma@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$892.25</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table variant="list">
    <s-table-header-row>
      <s-table-header listSlot="kicker">ID</s-table-header>
      <s-table-header listSlot="primary">Customer</s-table-header>
      <s-table-header listSlot="secondary">Email</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">
        Orders
      </s-table-header>
      <s-table-header listSlot="labeled" format="currency">
        Total spent
      </s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>#1001</s-table-cell>
        <s-table-cell>Sarah Johnson</s-table-cell>
        <s-table-cell>sarah@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>$1,245.50</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1002</s-table-cell>
        <s-table-cell>Mike Chen</s-table-cell>
        <s-table-cell>mike@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="neutral">Inactive</s-badge>
        </s-table-cell>
        <s-table-cell>7</s-table-cell>
        <s-table-cell>$432.75</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1003</s-table-cell>
        <s-table-cell>Emma Davis</s-table-cell>
        <s-table-cell>emma@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$892.25</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">  
  <s-table variant="list">
    <s-table-header-row>
      <s-table-header listSlot="kicker">ID</s-table-header>
      <s-table-header listSlot="primary">Customer</s-table-header>
      <s-table-header listSlot="secondary">Email</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Orders</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Total spent</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>#1001</s-table-cell>
        <s-table-cell>Sarah Johnson</s-table-cell>
        <s-table-cell>sarah@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>\$1,245.50</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1002</s-table-cell>
        <s-table-cell>Mike Chen</s-table-cell>
        <s-table-cell>mike@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="neutral">Inactive</s-badge>
        </s-table-cell>
        <s-table-cell>7</s-table-cell>
        <s-table-cell>\$432.75</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1003</s-table-cell>
        <s-table-cell>Emma Davis</s-table-cell>
        <s-table-cell>emma@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>\$892.25</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## TableCell

Display data within a cell in a table row.

### TableCell

### __@headerFormatSymbol@7508

value: `HeaderFormat`

  - HeaderFormat: 'base' | 'numeric' | 'currency'

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


## Related

- [Index table](https://shopify.dev/docs/api/app-home/patterns/compositions/index-table)

## Examples

Display data clearly in rows and columns, helping users view, analyze, and compare information. Automatically renders as a list on small screens and a table on large ones.


### Basic usage

Tables expand to full width by default.```jsx
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>\$24.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>\$19.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>\$34.99</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Add pagination controls for navigating large datasets.```jsx
<s-section padding="none">
  <s-table paginate hasPreviousPage hasNextPage>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="secondary" format="numeric">Sales</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Product 1</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>250</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 2</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>180</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 3</s-table-cell>
        <s-table-cell>Paused</s-table-cell>
        <s-table-cell>95</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table paginate hasPreviousPage hasNextPage>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="secondary" format="numeric">Sales</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Product 1</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>250</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 2</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>180</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 3</s-table-cell>
        <s-table-cell>Paused</s-table-cell>
        <s-table-cell>95</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table paginate hasPreviousPage hasNextPage>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="secondary" format="numeric">Sales</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Product 1</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>250</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 2</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>180</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 3</s-table-cell>
        <s-table-cell>Paused</s-table-cell>
        <s-table-cell>95</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Display a loading state while fetching data.```jsx
<s-section padding="none">
  <s-table loading>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```html
<s-section padding="none">
  <s-table loading>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table loading>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Display multiple columns in a full-width table.```jsx
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="kicker">SKU</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Inventory</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Price</s-table-header>
      <s-table-header listSlot="labeled">Last updated</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>WB-001</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
        <s-table-cell>2 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>TS-002</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
        <s-table-cell>1 day ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>CB-003</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
        <s-table-cell>3 days ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>NB-004</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
        <s-table-cell>$12.99</s-table-cell>
        <s-table-cell>5 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Stainless steel straws</s-table-cell>
        <s-table-cell>SS-005</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>89</s-table-cell>
        <s-table-cell>$9.99</s-table-cell>
        <s-table-cell>1 hour ago</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="kicker">SKU</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Inventory</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Price</s-table-header>
      <s-table-header listSlot="labeled">Last updated</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>WB-001</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
        <s-table-cell>2 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>TS-002</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
        <s-table-cell>1 day ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>CB-003</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
        <s-table-cell>3 days ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>NB-004</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
        <s-table-cell>$12.99</s-table-cell>
        <s-table-cell>5 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Stainless steel straws</s-table-cell>
        <s-table-cell>SS-005</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>89</s-table-cell>
        <s-table-cell>$9.99</s-table-cell>
        <s-table-cell>1 hour ago</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0; min-height: 400px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="kicker">SKU</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Inventory</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Price</s-table-header>
      <s-table-header listSlot="labeled">Last updated</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>WB-001</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>\$24.99</s-table-cell>
        <s-table-cell>2 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>TS-002</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>\$19.99</s-table-cell>
        <s-table-cell>1 day ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>CB-003</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>\$34.99</s-table-cell>
        <s-table-cell>3 days ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>NB-004</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
        <s-table-cell>\$12.99</s-table-cell>
        <s-table-cell>5 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Stainless steel straws</s-table-cell>
        <s-table-cell>SS-005</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>89</s-table-cell>
        <s-table-cell>\$9.99</s-table-cell>
        <s-table-cell>1 hour ago</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Display data using the list variant with specialized slot types. List is the default variant on mobile devices.```jsx
<s-section padding="none">  
  <s-table variant="list">
    <s-table-header-row>
      <s-table-header listSlot="kicker">ID</s-table-header>
      <s-table-header listSlot="primary">Customer</s-table-header>
      <s-table-header listSlot="secondary">Email</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Orders</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Total spent</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>#1001</s-table-cell>
        <s-table-cell>Sarah Johnson</s-table-cell>
        <s-table-cell>sarah@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>$1,245.50</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1002</s-table-cell>
        <s-table-cell>Mike Chen</s-table-cell>
        <s-table-cell>mike@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="neutral">Inactive</s-badge>
        </s-table-cell>
        <s-table-cell>7</s-table-cell>
        <s-table-cell>$432.75</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1003</s-table-cell>
        <s-table-cell>Emma Davis</s-table-cell>
        <s-table-cell>emma@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$892.25</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table variant="list">
    <s-table-header-row>
      <s-table-header listSlot="kicker">ID</s-table-header>
      <s-table-header listSlot="primary">Customer</s-table-header>
      <s-table-header listSlot="secondary">Email</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">
        Orders
      </s-table-header>
      <s-table-header listSlot="labeled" format="currency">
        Total spent
      </s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>#1001</s-table-cell>
        <s-table-cell>Sarah Johnson</s-table-cell>
        <s-table-cell>sarah@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>$1,245.50</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1002</s-table-cell>
        <s-table-cell>Mike Chen</s-table-cell>
        <s-table-cell>mike@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="neutral">Inactive</s-badge>
        </s-table-cell>
        <s-table-cell>7</s-table-cell>
        <s-table-cell>$432.75</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1003</s-table-cell>
        <s-table-cell>Emma Davis</s-table-cell>
        <s-table-cell>emma@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$892.25</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">  
  <s-table variant="list">
    <s-table-header-row>
      <s-table-header listSlot="kicker">ID</s-table-header>
      <s-table-header listSlot="primary">Customer</s-table-header>
      <s-table-header listSlot="secondary">Email</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Orders</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Total spent</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>#1001</s-table-cell>
        <s-table-cell>Sarah Johnson</s-table-cell>
        <s-table-cell>sarah@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>\$1,245.50</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1002</s-table-cell>
        <s-table-cell>Mike Chen</s-table-cell>
        <s-table-cell>mike@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="neutral">Inactive</s-badge>
        </s-table-cell>
        <s-table-cell>7</s-table-cell>
        <s-table-cell>\$432.75</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1003</s-table-cell>
        <s-table-cell>Emma Davis</s-table-cell>
        <s-table-cell>emma@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>\$892.25</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Slots

### TableCellSlots

### children

value: `HTMLElement`

The content of the table cell.

## Related

- [Index table](https://shopify.dev/docs/api/app-home/patterns/compositions/index-table)

## Examples

Display data clearly in rows and columns, helping users view, analyze, and compare information. Automatically renders as a list on small screens and a table on large ones.


### Basic usage

Tables expand to full width by default.```jsx
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>\$24.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>\$19.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>\$34.99</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Add pagination controls for navigating large datasets.```jsx
<s-section padding="none">
  <s-table paginate hasPreviousPage hasNextPage>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="secondary" format="numeric">Sales</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Product 1</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>250</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 2</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>180</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 3</s-table-cell>
        <s-table-cell>Paused</s-table-cell>
        <s-table-cell>95</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table paginate hasPreviousPage hasNextPage>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="secondary" format="numeric">Sales</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Product 1</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>250</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 2</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>180</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 3</s-table-cell>
        <s-table-cell>Paused</s-table-cell>
        <s-table-cell>95</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table paginate hasPreviousPage hasNextPage>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="secondary" format="numeric">Sales</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Product 1</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>250</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 2</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>180</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 3</s-table-cell>
        <s-table-cell>Paused</s-table-cell>
        <s-table-cell>95</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Display a loading state while fetching data.```jsx
<s-section padding="none">
  <s-table loading>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```html
<s-section padding="none">
  <s-table loading>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table loading>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Display multiple columns in a full-width table.```jsx
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="kicker">SKU</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Inventory</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Price</s-table-header>
      <s-table-header listSlot="labeled">Last updated</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>WB-001</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
        <s-table-cell>2 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>TS-002</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
        <s-table-cell>1 day ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>CB-003</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
        <s-table-cell>3 days ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>NB-004</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
        <s-table-cell>$12.99</s-table-cell>
        <s-table-cell>5 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Stainless steel straws</s-table-cell>
        <s-table-cell>SS-005</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>89</s-table-cell>
        <s-table-cell>$9.99</s-table-cell>
        <s-table-cell>1 hour ago</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="kicker">SKU</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Inventory</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Price</s-table-header>
      <s-table-header listSlot="labeled">Last updated</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>WB-001</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
        <s-table-cell>2 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>TS-002</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
        <s-table-cell>1 day ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>CB-003</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
        <s-table-cell>3 days ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>NB-004</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
        <s-table-cell>$12.99</s-table-cell>
        <s-table-cell>5 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Stainless steel straws</s-table-cell>
        <s-table-cell>SS-005</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>89</s-table-cell>
        <s-table-cell>$9.99</s-table-cell>
        <s-table-cell>1 hour ago</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0; min-height: 400px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="kicker">SKU</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Inventory</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Price</s-table-header>
      <s-table-header listSlot="labeled">Last updated</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>WB-001</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>\$24.99</s-table-cell>
        <s-table-cell>2 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>TS-002</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>\$19.99</s-table-cell>
        <s-table-cell>1 day ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>CB-003</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>\$34.99</s-table-cell>
        <s-table-cell>3 days ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>NB-004</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
        <s-table-cell>\$12.99</s-table-cell>
        <s-table-cell>5 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Stainless steel straws</s-table-cell>
        <s-table-cell>SS-005</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>89</s-table-cell>
        <s-table-cell>\$9.99</s-table-cell>
        <s-table-cell>1 hour ago</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Display data using the list variant with specialized slot types. List is the default variant on mobile devices.```jsx
<s-section padding="none">  
  <s-table variant="list">
    <s-table-header-row>
      <s-table-header listSlot="kicker">ID</s-table-header>
      <s-table-header listSlot="primary">Customer</s-table-header>
      <s-table-header listSlot="secondary">Email</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Orders</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Total spent</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>#1001</s-table-cell>
        <s-table-cell>Sarah Johnson</s-table-cell>
        <s-table-cell>sarah@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>$1,245.50</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1002</s-table-cell>
        <s-table-cell>Mike Chen</s-table-cell>
        <s-table-cell>mike@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="neutral">Inactive</s-badge>
        </s-table-cell>
        <s-table-cell>7</s-table-cell>
        <s-table-cell>$432.75</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1003</s-table-cell>
        <s-table-cell>Emma Davis</s-table-cell>
        <s-table-cell>emma@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$892.25</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table variant="list">
    <s-table-header-row>
      <s-table-header listSlot="kicker">ID</s-table-header>
      <s-table-header listSlot="primary">Customer</s-table-header>
      <s-table-header listSlot="secondary">Email</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">
        Orders
      </s-table-header>
      <s-table-header listSlot="labeled" format="currency">
        Total spent
      </s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>#1001</s-table-cell>
        <s-table-cell>Sarah Johnson</s-table-cell>
        <s-table-cell>sarah@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>$1,245.50</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1002</s-table-cell>
        <s-table-cell>Mike Chen</s-table-cell>
        <s-table-cell>mike@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="neutral">Inactive</s-badge>
        </s-table-cell>
        <s-table-cell>7</s-table-cell>
        <s-table-cell>$432.75</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1003</s-table-cell>
        <s-table-cell>Emma Davis</s-table-cell>
        <s-table-cell>emma@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$892.25</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">  
  <s-table variant="list">
    <s-table-header-row>
      <s-table-header listSlot="kicker">ID</s-table-header>
      <s-table-header listSlot="primary">Customer</s-table-header>
      <s-table-header listSlot="secondary">Email</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Orders</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Total spent</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>#1001</s-table-cell>
        <s-table-cell>Sarah Johnson</s-table-cell>
        <s-table-cell>sarah@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>\$1,245.50</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1002</s-table-cell>
        <s-table-cell>Mike Chen</s-table-cell>
        <s-table-cell>mike@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="neutral">Inactive</s-badge>
        </s-table-cell>
        <s-table-cell>7</s-table-cell>
        <s-table-cell>\$432.75</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1003</s-table-cell>
        <s-table-cell>Emma Davis</s-table-cell>
        <s-table-cell>emma@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>\$892.25</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## TableHeader

Display column names at the top of a table.

### TableHeader

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


### format

value: `HeaderFormat`

  - HeaderFormat: 'base' | 'numeric' | 'currency'
The format of the column. Will automatically apply styling and alignment to cell content based on the value.

- `base`: The base format for columns.
- `currency`: Formats the column as currency.
- `numeric`: Formats the column as a number.

### listSlot

value: `ListSlotType`

  - ListSlotType: 'primary' | 'secondary' | 'kicker' | 'inline' | 'labeled'
Content designation for the table's `list` variant.

- `primary`: The most important content. Only one column can have this designation.
- `secondary`: The secondary content. Only one column can have this designation.
- `kicker`: Content that is displayed before primary and secondary content, but with less visual prominence. Only one column can have this designation.
- `inline`: Content that is displayed inline.
- `labeled`: Each column with this designation displays as a heading-content pair.

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


## Related

- [Index table](https://shopify.dev/docs/api/app-home/patterns/compositions/index-table)

## Examples

Display data clearly in rows and columns, helping users view, analyze, and compare information. Automatically renders as a list on small screens and a table on large ones.


### Basic usage

Tables expand to full width by default.```jsx
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>\$24.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>\$19.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>\$34.99</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Add pagination controls for navigating large datasets.```jsx
<s-section padding="none">
  <s-table paginate hasPreviousPage hasNextPage>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="secondary" format="numeric">Sales</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Product 1</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>250</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 2</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>180</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 3</s-table-cell>
        <s-table-cell>Paused</s-table-cell>
        <s-table-cell>95</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table paginate hasPreviousPage hasNextPage>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="secondary" format="numeric">Sales</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Product 1</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>250</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 2</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>180</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 3</s-table-cell>
        <s-table-cell>Paused</s-table-cell>
        <s-table-cell>95</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table paginate hasPreviousPage hasNextPage>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="secondary" format="numeric">Sales</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Product 1</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>250</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 2</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>180</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 3</s-table-cell>
        <s-table-cell>Paused</s-table-cell>
        <s-table-cell>95</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Display a loading state while fetching data.```jsx
<s-section padding="none">
  <s-table loading>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```html
<s-section padding="none">
  <s-table loading>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table loading>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Display multiple columns in a full-width table.```jsx
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="kicker">SKU</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Inventory</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Price</s-table-header>
      <s-table-header listSlot="labeled">Last updated</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>WB-001</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
        <s-table-cell>2 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>TS-002</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
        <s-table-cell>1 day ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>CB-003</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
        <s-table-cell>3 days ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>NB-004</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
        <s-table-cell>$12.99</s-table-cell>
        <s-table-cell>5 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Stainless steel straws</s-table-cell>
        <s-table-cell>SS-005</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>89</s-table-cell>
        <s-table-cell>$9.99</s-table-cell>
        <s-table-cell>1 hour ago</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="kicker">SKU</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Inventory</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Price</s-table-header>
      <s-table-header listSlot="labeled">Last updated</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>WB-001</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
        <s-table-cell>2 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>TS-002</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
        <s-table-cell>1 day ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>CB-003</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
        <s-table-cell>3 days ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>NB-004</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
        <s-table-cell>$12.99</s-table-cell>
        <s-table-cell>5 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Stainless steel straws</s-table-cell>
        <s-table-cell>SS-005</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>89</s-table-cell>
        <s-table-cell>$9.99</s-table-cell>
        <s-table-cell>1 hour ago</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0; min-height: 400px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="kicker">SKU</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Inventory</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Price</s-table-header>
      <s-table-header listSlot="labeled">Last updated</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>WB-001</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>\$24.99</s-table-cell>
        <s-table-cell>2 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>TS-002</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>\$19.99</s-table-cell>
        <s-table-cell>1 day ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>CB-003</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>\$34.99</s-table-cell>
        <s-table-cell>3 days ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>NB-004</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
        <s-table-cell>\$12.99</s-table-cell>
        <s-table-cell>5 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Stainless steel straws</s-table-cell>
        <s-table-cell>SS-005</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>89</s-table-cell>
        <s-table-cell>\$9.99</s-table-cell>
        <s-table-cell>1 hour ago</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Display data using the list variant with specialized slot types. List is the default variant on mobile devices.```jsx
<s-section padding="none">  
  <s-table variant="list">
    <s-table-header-row>
      <s-table-header listSlot="kicker">ID</s-table-header>
      <s-table-header listSlot="primary">Customer</s-table-header>
      <s-table-header listSlot="secondary">Email</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Orders</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Total spent</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>#1001</s-table-cell>
        <s-table-cell>Sarah Johnson</s-table-cell>
        <s-table-cell>sarah@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>$1,245.50</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1002</s-table-cell>
        <s-table-cell>Mike Chen</s-table-cell>
        <s-table-cell>mike@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="neutral">Inactive</s-badge>
        </s-table-cell>
        <s-table-cell>7</s-table-cell>
        <s-table-cell>$432.75</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1003</s-table-cell>
        <s-table-cell>Emma Davis</s-table-cell>
        <s-table-cell>emma@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$892.25</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table variant="list">
    <s-table-header-row>
      <s-table-header listSlot="kicker">ID</s-table-header>
      <s-table-header listSlot="primary">Customer</s-table-header>
      <s-table-header listSlot="secondary">Email</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">
        Orders
      </s-table-header>
      <s-table-header listSlot="labeled" format="currency">
        Total spent
      </s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>#1001</s-table-cell>
        <s-table-cell>Sarah Johnson</s-table-cell>
        <s-table-cell>sarah@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>$1,245.50</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1002</s-table-cell>
        <s-table-cell>Mike Chen</s-table-cell>
        <s-table-cell>mike@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="neutral">Inactive</s-badge>
        </s-table-cell>
        <s-table-cell>7</s-table-cell>
        <s-table-cell>$432.75</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1003</s-table-cell>
        <s-table-cell>Emma Davis</s-table-cell>
        <s-table-cell>emma@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$892.25</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">  
  <s-table variant="list">
    <s-table-header-row>
      <s-table-header listSlot="kicker">ID</s-table-header>
      <s-table-header listSlot="primary">Customer</s-table-header>
      <s-table-header listSlot="secondary">Email</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Orders</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Total spent</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>#1001</s-table-cell>
        <s-table-cell>Sarah Johnson</s-table-cell>
        <s-table-cell>sarah@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>\$1,245.50</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1002</s-table-cell>
        <s-table-cell>Mike Chen</s-table-cell>
        <s-table-cell>mike@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="neutral">Inactive</s-badge>
        </s-table-cell>
        <s-table-cell>7</s-table-cell>
        <s-table-cell>\$432.75</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1003</s-table-cell>
        <s-table-cell>Emma Davis</s-table-cell>
        <s-table-cell>emma@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>\$892.25</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Slots

### TableHeaderSlots

### children

value: `HTMLElement`

The heading of the column in the `table` variant, and the label of its data in `list` variant.

## Related

- [Index table](https://shopify.dev/docs/api/app-home/patterns/compositions/index-table)

## Examples

Display data clearly in rows and columns, helping users view, analyze, and compare information. Automatically renders as a list on small screens and a table on large ones.


### Basic usage

Tables expand to full width by default.```jsx
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>\$24.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>\$19.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>\$34.99</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Add pagination controls for navigating large datasets.```jsx
<s-section padding="none">
  <s-table paginate hasPreviousPage hasNextPage>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="secondary" format="numeric">Sales</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Product 1</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>250</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 2</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>180</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 3</s-table-cell>
        <s-table-cell>Paused</s-table-cell>
        <s-table-cell>95</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table paginate hasPreviousPage hasNextPage>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="secondary" format="numeric">Sales</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Product 1</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>250</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 2</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>180</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 3</s-table-cell>
        <s-table-cell>Paused</s-table-cell>
        <s-table-cell>95</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table paginate hasPreviousPage hasNextPage>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="secondary" format="numeric">Sales</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Product 1</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>250</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 2</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>180</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 3</s-table-cell>
        <s-table-cell>Paused</s-table-cell>
        <s-table-cell>95</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Display a loading state while fetching data.```jsx
<s-section padding="none">
  <s-table loading>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```html
<s-section padding="none">
  <s-table loading>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table loading>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Display multiple columns in a full-width table.```jsx
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="kicker">SKU</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Inventory</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Price</s-table-header>
      <s-table-header listSlot="labeled">Last updated</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>WB-001</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
        <s-table-cell>2 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>TS-002</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
        <s-table-cell>1 day ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>CB-003</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
        <s-table-cell>3 days ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>NB-004</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
        <s-table-cell>$12.99</s-table-cell>
        <s-table-cell>5 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Stainless steel straws</s-table-cell>
        <s-table-cell>SS-005</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>89</s-table-cell>
        <s-table-cell>$9.99</s-table-cell>
        <s-table-cell>1 hour ago</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="kicker">SKU</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Inventory</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Price</s-table-header>
      <s-table-header listSlot="labeled">Last updated</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>WB-001</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
        <s-table-cell>2 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>TS-002</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
        <s-table-cell>1 day ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>CB-003</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
        <s-table-cell>3 days ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>NB-004</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
        <s-table-cell>$12.99</s-table-cell>
        <s-table-cell>5 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Stainless steel straws</s-table-cell>
        <s-table-cell>SS-005</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>89</s-table-cell>
        <s-table-cell>$9.99</s-table-cell>
        <s-table-cell>1 hour ago</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0; min-height: 400px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="kicker">SKU</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Inventory</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Price</s-table-header>
      <s-table-header listSlot="labeled">Last updated</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>WB-001</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>\$24.99</s-table-cell>
        <s-table-cell>2 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>TS-002</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>\$19.99</s-table-cell>
        <s-table-cell>1 day ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>CB-003</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>\$34.99</s-table-cell>
        <s-table-cell>3 days ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>NB-004</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
        <s-table-cell>\$12.99</s-table-cell>
        <s-table-cell>5 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Stainless steel straws</s-table-cell>
        <s-table-cell>SS-005</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>89</s-table-cell>
        <s-table-cell>\$9.99</s-table-cell>
        <s-table-cell>1 hour ago</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Display data using the list variant with specialized slot types. List is the default variant on mobile devices.```jsx
<s-section padding="none">  
  <s-table variant="list">
    <s-table-header-row>
      <s-table-header listSlot="kicker">ID</s-table-header>
      <s-table-header listSlot="primary">Customer</s-table-header>
      <s-table-header listSlot="secondary">Email</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Orders</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Total spent</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>#1001</s-table-cell>
        <s-table-cell>Sarah Johnson</s-table-cell>
        <s-table-cell>sarah@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>$1,245.50</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1002</s-table-cell>
        <s-table-cell>Mike Chen</s-table-cell>
        <s-table-cell>mike@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="neutral">Inactive</s-badge>
        </s-table-cell>
        <s-table-cell>7</s-table-cell>
        <s-table-cell>$432.75</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1003</s-table-cell>
        <s-table-cell>Emma Davis</s-table-cell>
        <s-table-cell>emma@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$892.25</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table variant="list">
    <s-table-header-row>
      <s-table-header listSlot="kicker">ID</s-table-header>
      <s-table-header listSlot="primary">Customer</s-table-header>
      <s-table-header listSlot="secondary">Email</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">
        Orders
      </s-table-header>
      <s-table-header listSlot="labeled" format="currency">
        Total spent
      </s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>#1001</s-table-cell>
        <s-table-cell>Sarah Johnson</s-table-cell>
        <s-table-cell>sarah@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>$1,245.50</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1002</s-table-cell>
        <s-table-cell>Mike Chen</s-table-cell>
        <s-table-cell>mike@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="neutral">Inactive</s-badge>
        </s-table-cell>
        <s-table-cell>7</s-table-cell>
        <s-table-cell>$432.75</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1003</s-table-cell>
        <s-table-cell>Emma Davis</s-table-cell>
        <s-table-cell>emma@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$892.25</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">  
  <s-table variant="list">
    <s-table-header-row>
      <s-table-header listSlot="kicker">ID</s-table-header>
      <s-table-header listSlot="primary">Customer</s-table-header>
      <s-table-header listSlot="secondary">Email</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Orders</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Total spent</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>#1001</s-table-cell>
        <s-table-cell>Sarah Johnson</s-table-cell>
        <s-table-cell>sarah@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>\$1,245.50</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1002</s-table-cell>
        <s-table-cell>Mike Chen</s-table-cell>
        <s-table-cell>mike@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="neutral">Inactive</s-badge>
        </s-table-cell>
        <s-table-cell>7</s-table-cell>
        <s-table-cell>\$432.75</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1003</s-table-cell>
        <s-table-cell>Emma Davis</s-table-cell>
        <s-table-cell>emma@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>\$892.25</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## TableHeaderRow

Define a header row in a table, displaying column names and enabling sorting.

### TableHeaderRow

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


## Related

- [Index table](https://shopify.dev/docs/api/app-home/patterns/compositions/index-table)

## Examples

Display data clearly in rows and columns, helping users view, analyze, and compare information. Automatically renders as a list on small screens and a table on large ones.


### Basic usage

Tables expand to full width by default.```jsx
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>\$24.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>\$19.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>\$34.99</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Add pagination controls for navigating large datasets.```jsx
<s-section padding="none">
  <s-table paginate hasPreviousPage hasNextPage>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="secondary" format="numeric">Sales</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Product 1</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>250</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 2</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>180</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 3</s-table-cell>
        <s-table-cell>Paused</s-table-cell>
        <s-table-cell>95</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table paginate hasPreviousPage hasNextPage>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="secondary" format="numeric">Sales</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Product 1</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>250</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 2</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>180</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 3</s-table-cell>
        <s-table-cell>Paused</s-table-cell>
        <s-table-cell>95</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table paginate hasPreviousPage hasNextPage>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="secondary" format="numeric">Sales</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Product 1</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>250</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 2</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>180</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 3</s-table-cell>
        <s-table-cell>Paused</s-table-cell>
        <s-table-cell>95</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Display a loading state while fetching data.```jsx
<s-section padding="none">
  <s-table loading>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```html
<s-section padding="none">
  <s-table loading>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table loading>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Display multiple columns in a full-width table.```jsx
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="kicker">SKU</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Inventory</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Price</s-table-header>
      <s-table-header listSlot="labeled">Last updated</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>WB-001</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
        <s-table-cell>2 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>TS-002</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
        <s-table-cell>1 day ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>CB-003</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
        <s-table-cell>3 days ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>NB-004</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
        <s-table-cell>$12.99</s-table-cell>
        <s-table-cell>5 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Stainless steel straws</s-table-cell>
        <s-table-cell>SS-005</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>89</s-table-cell>
        <s-table-cell>$9.99</s-table-cell>
        <s-table-cell>1 hour ago</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="kicker">SKU</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Inventory</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Price</s-table-header>
      <s-table-header listSlot="labeled">Last updated</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>WB-001</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
        <s-table-cell>2 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>TS-002</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
        <s-table-cell>1 day ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>CB-003</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
        <s-table-cell>3 days ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>NB-004</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
        <s-table-cell>$12.99</s-table-cell>
        <s-table-cell>5 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Stainless steel straws</s-table-cell>
        <s-table-cell>SS-005</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>89</s-table-cell>
        <s-table-cell>$9.99</s-table-cell>
        <s-table-cell>1 hour ago</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0; min-height: 400px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="kicker">SKU</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Inventory</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Price</s-table-header>
      <s-table-header listSlot="labeled">Last updated</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>WB-001</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>\$24.99</s-table-cell>
        <s-table-cell>2 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>TS-002</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>\$19.99</s-table-cell>
        <s-table-cell>1 day ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>CB-003</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>\$34.99</s-table-cell>
        <s-table-cell>3 days ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>NB-004</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
        <s-table-cell>\$12.99</s-table-cell>
        <s-table-cell>5 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Stainless steel straws</s-table-cell>
        <s-table-cell>SS-005</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>89</s-table-cell>
        <s-table-cell>\$9.99</s-table-cell>
        <s-table-cell>1 hour ago</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Display data using the list variant with specialized slot types. List is the default variant on mobile devices.```jsx
<s-section padding="none">  
  <s-table variant="list">
    <s-table-header-row>
      <s-table-header listSlot="kicker">ID</s-table-header>
      <s-table-header listSlot="primary">Customer</s-table-header>
      <s-table-header listSlot="secondary">Email</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Orders</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Total spent</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>#1001</s-table-cell>
        <s-table-cell>Sarah Johnson</s-table-cell>
        <s-table-cell>sarah@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>$1,245.50</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1002</s-table-cell>
        <s-table-cell>Mike Chen</s-table-cell>
        <s-table-cell>mike@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="neutral">Inactive</s-badge>
        </s-table-cell>
        <s-table-cell>7</s-table-cell>
        <s-table-cell>$432.75</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1003</s-table-cell>
        <s-table-cell>Emma Davis</s-table-cell>
        <s-table-cell>emma@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$892.25</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table variant="list">
    <s-table-header-row>
      <s-table-header listSlot="kicker">ID</s-table-header>
      <s-table-header listSlot="primary">Customer</s-table-header>
      <s-table-header listSlot="secondary">Email</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">
        Orders
      </s-table-header>
      <s-table-header listSlot="labeled" format="currency">
        Total spent
      </s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>#1001</s-table-cell>
        <s-table-cell>Sarah Johnson</s-table-cell>
        <s-table-cell>sarah@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>$1,245.50</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1002</s-table-cell>
        <s-table-cell>Mike Chen</s-table-cell>
        <s-table-cell>mike@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="neutral">Inactive</s-badge>
        </s-table-cell>
        <s-table-cell>7</s-table-cell>
        <s-table-cell>$432.75</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1003</s-table-cell>
        <s-table-cell>Emma Davis</s-table-cell>
        <s-table-cell>emma@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$892.25</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">  
  <s-table variant="list">
    <s-table-header-row>
      <s-table-header listSlot="kicker">ID</s-table-header>
      <s-table-header listSlot="primary">Customer</s-table-header>
      <s-table-header listSlot="secondary">Email</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Orders</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Total spent</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>#1001</s-table-cell>
        <s-table-cell>Sarah Johnson</s-table-cell>
        <s-table-cell>sarah@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>\$1,245.50</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1002</s-table-cell>
        <s-table-cell>Mike Chen</s-table-cell>
        <s-table-cell>mike@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="neutral">Inactive</s-badge>
        </s-table-cell>
        <s-table-cell>7</s-table-cell>
        <s-table-cell>\$432.75</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1003</s-table-cell>
        <s-table-cell>Emma Davis</s-table-cell>
        <s-table-cell>emma@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>\$892.25</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Slots

### TableHeaderRowSlots

### children

value: `HTMLElement`

Contents of the table heading row; children should be `TableHeading` components.

## Related

- [Index table](https://shopify.dev/docs/api/app-home/patterns/compositions/index-table)

## Examples

Display data clearly in rows and columns, helping users view, analyze, and compare information. Automatically renders as a list on small screens and a table on large ones.


### Basic usage

Tables expand to full width by default.```jsx
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>\$24.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>\$19.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>\$34.99</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Add pagination controls for navigating large datasets.```jsx
<s-section padding="none">
  <s-table paginate hasPreviousPage hasNextPage>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="secondary" format="numeric">Sales</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Product 1</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>250</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 2</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>180</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 3</s-table-cell>
        <s-table-cell>Paused</s-table-cell>
        <s-table-cell>95</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table paginate hasPreviousPage hasNextPage>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="secondary" format="numeric">Sales</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Product 1</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>250</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 2</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>180</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 3</s-table-cell>
        <s-table-cell>Paused</s-table-cell>
        <s-table-cell>95</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table paginate hasPreviousPage hasNextPage>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="secondary" format="numeric">Sales</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Product 1</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>250</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 2</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>180</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 3</s-table-cell>
        <s-table-cell>Paused</s-table-cell>
        <s-table-cell>95</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Display a loading state while fetching data.```jsx
<s-section padding="none">
  <s-table loading>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```html
<s-section padding="none">
  <s-table loading>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table loading>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Display multiple columns in a full-width table.```jsx
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="kicker">SKU</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Inventory</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Price</s-table-header>
      <s-table-header listSlot="labeled">Last updated</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>WB-001</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
        <s-table-cell>2 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>TS-002</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
        <s-table-cell>1 day ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>CB-003</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
        <s-table-cell>3 days ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>NB-004</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
        <s-table-cell>$12.99</s-table-cell>
        <s-table-cell>5 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Stainless steel straws</s-table-cell>
        <s-table-cell>SS-005</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>89</s-table-cell>
        <s-table-cell>$9.99</s-table-cell>
        <s-table-cell>1 hour ago</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="kicker">SKU</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Inventory</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Price</s-table-header>
      <s-table-header listSlot="labeled">Last updated</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>WB-001</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
        <s-table-cell>2 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>TS-002</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
        <s-table-cell>1 day ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>CB-003</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
        <s-table-cell>3 days ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>NB-004</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
        <s-table-cell>$12.99</s-table-cell>
        <s-table-cell>5 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Stainless steel straws</s-table-cell>
        <s-table-cell>SS-005</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>89</s-table-cell>
        <s-table-cell>$9.99</s-table-cell>
        <s-table-cell>1 hour ago</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0; min-height: 400px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="kicker">SKU</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Inventory</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Price</s-table-header>
      <s-table-header listSlot="labeled">Last updated</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>WB-001</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>\$24.99</s-table-cell>
        <s-table-cell>2 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>TS-002</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>\$19.99</s-table-cell>
        <s-table-cell>1 day ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>CB-003</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>\$34.99</s-table-cell>
        <s-table-cell>3 days ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>NB-004</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
        <s-table-cell>\$12.99</s-table-cell>
        <s-table-cell>5 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Stainless steel straws</s-table-cell>
        <s-table-cell>SS-005</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>89</s-table-cell>
        <s-table-cell>\$9.99</s-table-cell>
        <s-table-cell>1 hour ago</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Display data using the list variant with specialized slot types. List is the default variant on mobile devices.```jsx
<s-section padding="none">  
  <s-table variant="list">
    <s-table-header-row>
      <s-table-header listSlot="kicker">ID</s-table-header>
      <s-table-header listSlot="primary">Customer</s-table-header>
      <s-table-header listSlot="secondary">Email</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Orders</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Total spent</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>#1001</s-table-cell>
        <s-table-cell>Sarah Johnson</s-table-cell>
        <s-table-cell>sarah@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>$1,245.50</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1002</s-table-cell>
        <s-table-cell>Mike Chen</s-table-cell>
        <s-table-cell>mike@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="neutral">Inactive</s-badge>
        </s-table-cell>
        <s-table-cell>7</s-table-cell>
        <s-table-cell>$432.75</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1003</s-table-cell>
        <s-table-cell>Emma Davis</s-table-cell>
        <s-table-cell>emma@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$892.25</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table variant="list">
    <s-table-header-row>
      <s-table-header listSlot="kicker">ID</s-table-header>
      <s-table-header listSlot="primary">Customer</s-table-header>
      <s-table-header listSlot="secondary">Email</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">
        Orders
      </s-table-header>
      <s-table-header listSlot="labeled" format="currency">
        Total spent
      </s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>#1001</s-table-cell>
        <s-table-cell>Sarah Johnson</s-table-cell>
        <s-table-cell>sarah@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>$1,245.50</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1002</s-table-cell>
        <s-table-cell>Mike Chen</s-table-cell>
        <s-table-cell>mike@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="neutral">Inactive</s-badge>
        </s-table-cell>
        <s-table-cell>7</s-table-cell>
        <s-table-cell>$432.75</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1003</s-table-cell>
        <s-table-cell>Emma Davis</s-table-cell>
        <s-table-cell>emma@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$892.25</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">  
  <s-table variant="list">
    <s-table-header-row>
      <s-table-header listSlot="kicker">ID</s-table-header>
      <s-table-header listSlot="primary">Customer</s-table-header>
      <s-table-header listSlot="secondary">Email</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Orders</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Total spent</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>#1001</s-table-cell>
        <s-table-cell>Sarah Johnson</s-table-cell>
        <s-table-cell>sarah@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>\$1,245.50</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1002</s-table-cell>
        <s-table-cell>Mike Chen</s-table-cell>
        <s-table-cell>mike@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="neutral">Inactive</s-badge>
        </s-table-cell>
        <s-table-cell>7</s-table-cell>
        <s-table-cell>\$432.75</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1003</s-table-cell>
        <s-table-cell>Emma Davis</s-table-cell>
        <s-table-cell>emma@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>\$892.25</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## TableRow

Display a row of data within the body of a table.

### TableRow

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

### clickDelegate

value: `string`

The ID of an interactive element (e.g. `s-link`) in the row that will be the target of the click when the row is clicked. This is the primary action for the row; it should not be used for secondary actions.

This is a click-only affordance, and does not introduce any keyboard or screen reader affordances. Which is why the target element must be in the table; so that keyboard and screen reader users can interact with it normally.

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


## Related

- [Index table](https://shopify.dev/docs/api/app-home/patterns/compositions/index-table)

## Examples

Display data clearly in rows and columns, helping users view, analyze, and compare information. Automatically renders as a list on small screens and a table on large ones.


### Basic usage

Tables expand to full width by default.```jsx
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>\$24.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>\$19.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>\$34.99</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Add pagination controls for navigating large datasets.```jsx
<s-section padding="none">
  <s-table paginate hasPreviousPage hasNextPage>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="secondary" format="numeric">Sales</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Product 1</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>250</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 2</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>180</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 3</s-table-cell>
        <s-table-cell>Paused</s-table-cell>
        <s-table-cell>95</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table paginate hasPreviousPage hasNextPage>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="secondary" format="numeric">Sales</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Product 1</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>250</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 2</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>180</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 3</s-table-cell>
        <s-table-cell>Paused</s-table-cell>
        <s-table-cell>95</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table paginate hasPreviousPage hasNextPage>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="secondary" format="numeric">Sales</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Product 1</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>250</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 2</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>180</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 3</s-table-cell>
        <s-table-cell>Paused</s-table-cell>
        <s-table-cell>95</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Display a loading state while fetching data.```jsx
<s-section padding="none">
  <s-table loading>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```html
<s-section padding="none">
  <s-table loading>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table loading>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Display multiple columns in a full-width table.```jsx
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="kicker">SKU</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Inventory</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Price</s-table-header>
      <s-table-header listSlot="labeled">Last updated</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>WB-001</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
        <s-table-cell>2 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>TS-002</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
        <s-table-cell>1 day ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>CB-003</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
        <s-table-cell>3 days ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>NB-004</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
        <s-table-cell>$12.99</s-table-cell>
        <s-table-cell>5 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Stainless steel straws</s-table-cell>
        <s-table-cell>SS-005</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>89</s-table-cell>
        <s-table-cell>$9.99</s-table-cell>
        <s-table-cell>1 hour ago</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="kicker">SKU</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Inventory</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Price</s-table-header>
      <s-table-header listSlot="labeled">Last updated</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>WB-001</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
        <s-table-cell>2 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>TS-002</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
        <s-table-cell>1 day ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>CB-003</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
        <s-table-cell>3 days ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>NB-004</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
        <s-table-cell>$12.99</s-table-cell>
        <s-table-cell>5 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Stainless steel straws</s-table-cell>
        <s-table-cell>SS-005</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>89</s-table-cell>
        <s-table-cell>$9.99</s-table-cell>
        <s-table-cell>1 hour ago</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0; min-height: 400px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="kicker">SKU</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Inventory</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Price</s-table-header>
      <s-table-header listSlot="labeled">Last updated</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>WB-001</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>\$24.99</s-table-cell>
        <s-table-cell>2 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>TS-002</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>\$19.99</s-table-cell>
        <s-table-cell>1 day ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>CB-003</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>\$34.99</s-table-cell>
        <s-table-cell>3 days ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>NB-004</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
        <s-table-cell>\$12.99</s-table-cell>
        <s-table-cell>5 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Stainless steel straws</s-table-cell>
        <s-table-cell>SS-005</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>89</s-table-cell>
        <s-table-cell>\$9.99</s-table-cell>
        <s-table-cell>1 hour ago</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Display data using the list variant with specialized slot types. List is the default variant on mobile devices.```jsx
<s-section padding="none">  
  <s-table variant="list">
    <s-table-header-row>
      <s-table-header listSlot="kicker">ID</s-table-header>
      <s-table-header listSlot="primary">Customer</s-table-header>
      <s-table-header listSlot="secondary">Email</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Orders</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Total spent</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>#1001</s-table-cell>
        <s-table-cell>Sarah Johnson</s-table-cell>
        <s-table-cell>sarah@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>$1,245.50</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1002</s-table-cell>
        <s-table-cell>Mike Chen</s-table-cell>
        <s-table-cell>mike@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="neutral">Inactive</s-badge>
        </s-table-cell>
        <s-table-cell>7</s-table-cell>
        <s-table-cell>$432.75</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1003</s-table-cell>
        <s-table-cell>Emma Davis</s-table-cell>
        <s-table-cell>emma@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$892.25</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table variant="list">
    <s-table-header-row>
      <s-table-header listSlot="kicker">ID</s-table-header>
      <s-table-header listSlot="primary">Customer</s-table-header>
      <s-table-header listSlot="secondary">Email</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">
        Orders
      </s-table-header>
      <s-table-header listSlot="labeled" format="currency">
        Total spent
      </s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>#1001</s-table-cell>
        <s-table-cell>Sarah Johnson</s-table-cell>
        <s-table-cell>sarah@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>$1,245.50</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1002</s-table-cell>
        <s-table-cell>Mike Chen</s-table-cell>
        <s-table-cell>mike@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="neutral">Inactive</s-badge>
        </s-table-cell>
        <s-table-cell>7</s-table-cell>
        <s-table-cell>$432.75</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1003</s-table-cell>
        <s-table-cell>Emma Davis</s-table-cell>
        <s-table-cell>emma@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$892.25</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">  
  <s-table variant="list">
    <s-table-header-row>
      <s-table-header listSlot="kicker">ID</s-table-header>
      <s-table-header listSlot="primary">Customer</s-table-header>
      <s-table-header listSlot="secondary">Email</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Orders</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Total spent</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>#1001</s-table-cell>
        <s-table-cell>Sarah Johnson</s-table-cell>
        <s-table-cell>sarah@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>\$1,245.50</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1002</s-table-cell>
        <s-table-cell>Mike Chen</s-table-cell>
        <s-table-cell>mike@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="neutral">Inactive</s-badge>
        </s-table-cell>
        <s-table-cell>7</s-table-cell>
        <s-table-cell>\$432.75</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1003</s-table-cell>
        <s-table-cell>Emma Davis</s-table-cell>
        <s-table-cell>emma@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>\$892.25</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Slots

### TableRowSlots

### children

value: `HTMLElement`

The content of a TableRow, which should be `TableCell` components.

## Related

- [Index table](https://shopify.dev/docs/api/app-home/patterns/compositions/index-table)

## Examples

Display data clearly in rows and columns, helping users view, analyze, and compare information. Automatically renders as a list on small screens and a table on large ones.


### Basic usage

Tables expand to full width by default.```jsx
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>\$24.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>\$19.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>\$34.99</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Add pagination controls for navigating large datasets.```jsx
<s-section padding="none">
  <s-table paginate hasPreviousPage hasNextPage>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="secondary" format="numeric">Sales</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Product 1</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>250</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 2</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>180</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 3</s-table-cell>
        <s-table-cell>Paused</s-table-cell>
        <s-table-cell>95</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table paginate hasPreviousPage hasNextPage>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="secondary" format="numeric">Sales</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Product 1</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>250</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 2</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>180</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 3</s-table-cell>
        <s-table-cell>Paused</s-table-cell>
        <s-table-cell>95</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table paginate hasPreviousPage hasNextPage>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="secondary" format="numeric">Sales</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Product 1</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>250</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 2</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>180</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 3</s-table-cell>
        <s-table-cell>Paused</s-table-cell>
        <s-table-cell>95</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Display a loading state while fetching data.```jsx
<s-section padding="none">
  <s-table loading>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```html
<s-section padding="none">
  <s-table loading>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table loading>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Display multiple columns in a full-width table.```jsx
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="kicker">SKU</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Inventory</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Price</s-table-header>
      <s-table-header listSlot="labeled">Last updated</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>WB-001</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
        <s-table-cell>2 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>TS-002</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
        <s-table-cell>1 day ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>CB-003</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
        <s-table-cell>3 days ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>NB-004</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
        <s-table-cell>$12.99</s-table-cell>
        <s-table-cell>5 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Stainless steel straws</s-table-cell>
        <s-table-cell>SS-005</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>89</s-table-cell>
        <s-table-cell>$9.99</s-table-cell>
        <s-table-cell>1 hour ago</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="kicker">SKU</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Inventory</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Price</s-table-header>
      <s-table-header listSlot="labeled">Last updated</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>WB-001</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
        <s-table-cell>2 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>TS-002</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
        <s-table-cell>1 day ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>CB-003</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
        <s-table-cell>3 days ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>NB-004</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
        <s-table-cell>$12.99</s-table-cell>
        <s-table-cell>5 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Stainless steel straws</s-table-cell>
        <s-table-cell>SS-005</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>89</s-table-cell>
        <s-table-cell>$9.99</s-table-cell>
        <s-table-cell>1 hour ago</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0; min-height: 400px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="kicker">SKU</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Inventory</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Price</s-table-header>
      <s-table-header listSlot="labeled">Last updated</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>WB-001</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>\$24.99</s-table-cell>
        <s-table-cell>2 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>TS-002</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>\$19.99</s-table-cell>
        <s-table-cell>1 day ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>CB-003</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>\$34.99</s-table-cell>
        <s-table-cell>3 days ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>NB-004</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
        <s-table-cell>\$12.99</s-table-cell>
        <s-table-cell>5 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Stainless steel straws</s-table-cell>
        <s-table-cell>SS-005</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>89</s-table-cell>
        <s-table-cell>\$9.99</s-table-cell>
        <s-table-cell>1 hour ago</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Display data using the list variant with specialized slot types. List is the default variant on mobile devices.```jsx
<s-section padding="none">  
  <s-table variant="list">
    <s-table-header-row>
      <s-table-header listSlot="kicker">ID</s-table-header>
      <s-table-header listSlot="primary">Customer</s-table-header>
      <s-table-header listSlot="secondary">Email</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Orders</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Total spent</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>#1001</s-table-cell>
        <s-table-cell>Sarah Johnson</s-table-cell>
        <s-table-cell>sarah@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>$1,245.50</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1002</s-table-cell>
        <s-table-cell>Mike Chen</s-table-cell>
        <s-table-cell>mike@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="neutral">Inactive</s-badge>
        </s-table-cell>
        <s-table-cell>7</s-table-cell>
        <s-table-cell>$432.75</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1003</s-table-cell>
        <s-table-cell>Emma Davis</s-table-cell>
        <s-table-cell>emma@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$892.25</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table variant="list">
    <s-table-header-row>
      <s-table-header listSlot="kicker">ID</s-table-header>
      <s-table-header listSlot="primary">Customer</s-table-header>
      <s-table-header listSlot="secondary">Email</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">
        Orders
      </s-table-header>
      <s-table-header listSlot="labeled" format="currency">
        Total spent
      </s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>#1001</s-table-cell>
        <s-table-cell>Sarah Johnson</s-table-cell>
        <s-table-cell>sarah@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>$1,245.50</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1002</s-table-cell>
        <s-table-cell>Mike Chen</s-table-cell>
        <s-table-cell>mike@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="neutral">Inactive</s-badge>
        </s-table-cell>
        <s-table-cell>7</s-table-cell>
        <s-table-cell>$432.75</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1003</s-table-cell>
        <s-table-cell>Emma Davis</s-table-cell>
        <s-table-cell>emma@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$892.25</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">  
  <s-table variant="list">
    <s-table-header-row>
      <s-table-header listSlot="kicker">ID</s-table-header>
      <s-table-header listSlot="primary">Customer</s-table-header>
      <s-table-header listSlot="secondary">Email</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Orders</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Total spent</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>#1001</s-table-cell>
        <s-table-cell>Sarah Johnson</s-table-cell>
        <s-table-cell>sarah@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>\$1,245.50</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1002</s-table-cell>
        <s-table-cell>Mike Chen</s-table-cell>
        <s-table-cell>mike@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="neutral">Inactive</s-badge>
        </s-table-cell>
        <s-table-cell>7</s-table-cell>
        <s-table-cell>\$432.75</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1003</s-table-cell>
        <s-table-cell>Emma Davis</s-table-cell>
        <s-table-cell>emma@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>\$892.25</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Examples

Display data clearly in rows and columns, helping users view, analyze, and compare information. Automatically renders as a list on small screens and a table on large ones.


### Basic usage

Tables expand to full width by default.```jsx
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>\$24.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>\$19.99</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>\$34.99</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Add pagination controls for navigating large datasets.```jsx
<s-section padding="none">
  <s-table paginate hasPreviousPage hasNextPage>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="secondary" format="numeric">Sales</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Product 1</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>250</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 2</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>180</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 3</s-table-cell>
        <s-table-cell>Paused</s-table-cell>
        <s-table-cell>95</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table paginate hasPreviousPage hasNextPage>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="secondary" format="numeric">Sales</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Product 1</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>250</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 2</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>180</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 3</s-table-cell>
        <s-table-cell>Paused</s-table-cell>
        <s-table-cell>95</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table paginate hasPreviousPage hasNextPage>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="secondary" format="numeric">Sales</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Product 1</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>250</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 2</s-table-cell>
        <s-table-cell>Active</s-table-cell>
        <s-table-cell>180</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Product 3</s-table-cell>
        <s-table-cell>Paused</s-table-cell>
        <s-table-cell>95</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Display a loading state while fetching data.```jsx
<s-section padding="none">
  <s-table loading>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```html
<s-section padding="none">
  <s-table loading>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table loading>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled">Inventory</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Display multiple columns in a full-width table.```jsx
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="kicker">SKU</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Inventory</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Price</s-table-header>
      <s-table-header listSlot="labeled">Last updated</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>WB-001</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
        <s-table-cell>2 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>TS-002</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
        <s-table-cell>1 day ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>CB-003</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
        <s-table-cell>3 days ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>NB-004</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
        <s-table-cell>$12.99</s-table-cell>
        <s-table-cell>5 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Stainless steel straws</s-table-cell>
        <s-table-cell>SS-005</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>89</s-table-cell>
        <s-table-cell>$9.99</s-table-cell>
        <s-table-cell>1 hour ago</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="kicker">SKU</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Inventory</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Price</s-table-header>
      <s-table-header listSlot="labeled">Last updated</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>WB-001</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>$24.99</s-table-cell>
        <s-table-cell>2 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>TS-002</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$19.99</s-table-cell>
        <s-table-cell>1 day ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>CB-003</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>$34.99</s-table-cell>
        <s-table-cell>3 days ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>NB-004</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
        <s-table-cell>$12.99</s-table-cell>
        <s-table-cell>5 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Stainless steel straws</s-table-cell>
        <s-table-cell>SS-005</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>89</s-table-cell>
        <s-table-cell>$9.99</s-table-cell>
        <s-table-cell>1 hour ago</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0; min-height: 400px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="kicker">SKU</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Inventory</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Price</s-table-header>
      <s-table-header listSlot="labeled">Last updated</s-table-header>
    </s-table-header-row>

    <s-table-body>
      <s-table-row>
        <s-table-cell>Water bottle</s-table-cell>
        <s-table-cell>WB-001</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>128</s-table-cell>
        <s-table-cell>\$24.99</s-table-cell>
        <s-table-cell>2 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>T-shirt</s-table-cell>
        <s-table-cell>TS-002</s-table-cell>
        <s-table-cell>
          <s-badge tone="warning">Low stock</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>\$19.99</s-table-cell>
        <s-table-cell>1 day ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Cutting board</s-table-cell>
        <s-table-cell>CB-003</s-table-cell>
        <s-table-cell>
          <s-badge tone="critical">Out of stock</s-badge>
        </s-table-cell>
        <s-table-cell>0</s-table-cell>
        <s-table-cell>\$34.99</s-table-cell>
        <s-table-cell>3 days ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Notebook set</s-table-cell>
        <s-table-cell>NB-004</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>245</s-table-cell>
        <s-table-cell>\$12.99</s-table-cell>
        <s-table-cell>5 hours ago</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>Stainless steel straws</s-table-cell>
        <s-table-cell>SS-005</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>89</s-table-cell>
        <s-table-cell>\$9.99</s-table-cell>
        <s-table-cell>1 hour ago</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Display data using the list variant with specialized slot types. List is the default variant on mobile devices.```jsx
<s-section padding="none">  
  <s-table variant="list">
    <s-table-header-row>
      <s-table-header listSlot="kicker">ID</s-table-header>
      <s-table-header listSlot="primary">Customer</s-table-header>
      <s-table-header listSlot="secondary">Email</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Orders</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Total spent</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>#1001</s-table-cell>
        <s-table-cell>Sarah Johnson</s-table-cell>
        <s-table-cell>sarah@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>$1,245.50</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1002</s-table-cell>
        <s-table-cell>Mike Chen</s-table-cell>
        <s-table-cell>mike@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="neutral">Inactive</s-badge>
        </s-table-cell>
        <s-table-cell>7</s-table-cell>
        <s-table-cell>$432.75</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1003</s-table-cell>
        <s-table-cell>Emma Davis</s-table-cell>
        <s-table-cell>emma@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$892.25</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table variant="list">
    <s-table-header-row>
      <s-table-header listSlot="kicker">ID</s-table-header>
      <s-table-header listSlot="primary">Customer</s-table-header>
      <s-table-header listSlot="secondary">Email</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">
        Orders
      </s-table-header>
      <s-table-header listSlot="labeled" format="currency">
        Total spent
      </s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>#1001</s-table-cell>
        <s-table-cell>Sarah Johnson</s-table-cell>
        <s-table-cell>sarah@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>$1,245.50</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1002</s-table-cell>
        <s-table-cell>Mike Chen</s-table-cell>
        <s-table-cell>mike@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="neutral">Inactive</s-badge>
        </s-table-cell>
        <s-table-cell>7</s-table-cell>
        <s-table-cell>$432.75</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1003</s-table-cell>
        <s-table-cell>Emma Davis</s-table-cell>
        <s-table-cell>emma@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>$892.25</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">  
  <s-table variant="list">
    <s-table-header-row>
      <s-table-header listSlot="kicker">ID</s-table-header>
      <s-table-header listSlot="primary">Customer</s-table-header>
      <s-table-header listSlot="secondary">Email</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
      <s-table-header listSlot="labeled" format="numeric">Orders</s-table-header>
      <s-table-header listSlot="labeled" format="currency">Total spent</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>#1001</s-table-cell>
        <s-table-cell>Sarah Johnson</s-table-cell>
        <s-table-cell>sarah@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>23</s-table-cell>
        <s-table-cell>\$1,245.50</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1002</s-table-cell>
        <s-table-cell>Mike Chen</s-table-cell>
        <s-table-cell>mike@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="neutral">Inactive</s-badge>
        </s-table-cell>
        <s-table-cell>7</s-table-cell>
        <s-table-cell>\$432.75</s-table-cell>
      </s-table-row>
      <s-table-row>
        <s-table-cell>#1003</s-table-cell>
        <s-table-cell>Emma Davis</s-table-cell>
        <s-table-cell>emma@example.com</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
        <s-table-cell>15</s-table-cell>
        <s-table-cell>\$892.25</s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

