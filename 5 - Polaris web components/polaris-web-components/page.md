# Page

 Use `s-page` as the main container for placing content in your app. Page comes with preset layouts and automatically adds spacing between elements.

```jsx
<s-page heading="Products">
  <s-section>
    <s-text>Hello World</s-text>
  </s-section>
</s-page>
```

```html
<s-page heading="Products">
  <s-section>
    <s-text>Hello World</s-text>
  </s-section>
</s-page>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-page heading="Products">
  <s-section>
    <s-text>Hello World</s-text>
  </s-section>
</s-page>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Properties

Use as the outer wrapper of a page

### Page

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


### heading

value: `string`

The main page heading

### inlineSize

value: `"small" | "base" | "large"`

The inline size of the page
- `base` corresponds to a set default inline size
- `large` full width with whitespace

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

 Use `s-page` as the main container for placing content in your app. Page comes with preset layouts and automatically adds spacing between elements.


### Basic usage

Shows a page with a clear heading and descriptive text, illustrating how to use the page component with a title.```jsx
<s-page heading="Product catalog" inlineSize="base">
  <s-section>
    <s-text>Manage your product catalog and inventory.</s-text>
  </s-section>
</s-page>
```

```html
<s-page heading="Product catalog" inline-size="base">
  <s-section>
    <s-text>Manage your product catalog and inventory.</s-text>
  </s-section>
</s-page>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-page heading="Product catalog" inlineSize="base">
  <s-section>
    <s-text>Manage your product catalog and inventory.</s-text>
  </s-section>
</s-page>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates a page with a small inline size, ideal for focused, compact content like settings or forms with minimal information.```jsx
<s-page heading="Store settings" inlineSize="small">
  <s-section>
    <s-stack gap="base">
      <s-text>Configure your basic store preferences.</s-text>
      <s-text-field label="Store name" />
      <s-button variant="primary">Save</s-button>
    </s-stack>
  </s-section>
</s-page>
```

```html
<s-page heading="Store settings" inline-size="small">
  <s-section>
    <s-stack gap="base">
      <s-text>Configure your basic store preferences.</s-text>
      <s-text-field label="Store name"></s-text-field>
      <s-button variant="primary">Save</s-button>
    </s-stack>
  </s-section>
</s-page>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0; min-height: 400px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-page heading="Store settings" inlineSize="small">
  <s-section>
    <s-stack gap="base">
      <s-text>Configure your basic store preferences.</s-text>
      <s-text-field label="Store name" />
      <s-button variant="primary">Save</s-button>
    </s-stack>
  </s-section>
</s-page>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates a page with a large inline size, perfect for displaying broader content like analytics or dashboards with multiple information sections.```jsx
<s-page heading="Store analytics" inlineSize="large">
  <s-section>
    <s-stack gap="base">
      <s-text>Monitor your store performance across all channels.</s-text>
      <s-grid>
        <s-grid-item>
          <s-box
            padding="base"
            background="base"
            borderWidth="base"
            borderColor="base"
            borderRadius="base"
          >
            <s-heading>Sales</s-heading>
            <s-text type="strong">$12,456</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box
            padding="base"
            background="base"
            borderWidth="base"
            borderColor="base"
            borderRadius="base"
          >
            <s-heading>Orders</s-heading>
            <s-text type="strong">145</s-text>
          </s-box>
        </s-grid-item>
      </s-grid>
    </s-stack>
  </s-section>
</s-page>
```

```html
<s-page heading="Store analytics" inline-size="large">
  <s-section>
    <s-stack gap="base">
      <s-text>Monitor your store performance across all channels.</s-text>
      <s-grid>
        <s-grid-item>
          <s-box
            padding="base"
            background="base"
            borderWidth="base"
            borderColor="base"
            borderRadius="base"
          >
            <s-heading>Sales</s-heading>
            <s-text type="strong">$12,456</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box
            padding="base"
            background="base"
            borderWidth="base"
            borderColor="base"
            borderRadius="base"
          >
            <s-heading>Orders</s-heading>
            <s-text type="strong">145</s-text>
          </s-box>
        </s-grid-item>
      </s-grid>
    </s-stack>
  </s-section>
</s-page>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0; min-height: 400px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-page heading="Store analytics" inlineSize="large">
  <s-section>
    <s-stack gap="base">
      <s-text>Monitor your store performance across all channels.</s-text>
      <s-grid>
        <s-grid-item>
          <s-box
            padding="base"
            background="base"
            borderWidth="base"
            borderColor="base"
            borderRadius="base"
          >
            <s-heading>Sales</s-heading>
            <s-text type="strong">\$12,456</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box
            padding="base"
            background="base"
            borderWidth="base"
            borderColor="base"
            borderRadius="base"
          >
            <s-heading>Orders</s-heading>
            <s-text type="strong">145</s-text>
          </s-box>
        </s-grid-item>
      </s-grid>
    </s-stack>
  </s-section>
</s-page>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Slots

### PageSlots

### aside

value: `HTMLElement`

The content to display in the aside section of the page.

This slot is only rendered when `inlineSize` is "base".

### breadcrumb-actions

value: `HTMLElement`

Navigations back actions for the page.

Only accepts `Link` components.

### children

value: `HTMLElement`

The content of the Page.

### primary-action

value: `HTMLElement`

The primary action for the page.

Only accepts a single `Button` component with a `variant` of `primary`.

### secondary-actions

value: `HTMLElement`

Secondary actions for the page.

Only accepts `ButtonGroup` and `Button` components with a `variant` of `secondary` or `auto`.

## Examples

 Use `s-page` as the main container for placing content in your app. Page comes with preset layouts and automatically adds spacing between elements.


### Basic usage

Shows a page with a clear heading and descriptive text, illustrating how to use the page component with a title.```jsx
<s-page heading="Product catalog" inlineSize="base">
  <s-section>
    <s-text>Manage your product catalog and inventory.</s-text>
  </s-section>
</s-page>
```

```html
<s-page heading="Product catalog" inline-size="base">
  <s-section>
    <s-text>Manage your product catalog and inventory.</s-text>
  </s-section>
</s-page>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-page heading="Product catalog" inlineSize="base">
  <s-section>
    <s-text>Manage your product catalog and inventory.</s-text>
  </s-section>
</s-page>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates a page with a small inline size, ideal for focused, compact content like settings or forms with minimal information.```jsx
<s-page heading="Store settings" inlineSize="small">
  <s-section>
    <s-stack gap="base">
      <s-text>Configure your basic store preferences.</s-text>
      <s-text-field label="Store name" />
      <s-button variant="primary">Save</s-button>
    </s-stack>
  </s-section>
</s-page>
```

```html
<s-page heading="Store settings" inline-size="small">
  <s-section>
    <s-stack gap="base">
      <s-text>Configure your basic store preferences.</s-text>
      <s-text-field label="Store name"></s-text-field>
      <s-button variant="primary">Save</s-button>
    </s-stack>
  </s-section>
</s-page>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0; min-height: 400px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-page heading="Store settings" inlineSize="small">
  <s-section>
    <s-stack gap="base">
      <s-text>Configure your basic store preferences.</s-text>
      <s-text-field label="Store name" />
      <s-button variant="primary">Save</s-button>
    </s-stack>
  </s-section>
</s-page>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates a page with a large inline size, perfect for displaying broader content like analytics or dashboards with multiple information sections.```jsx
<s-page heading="Store analytics" inlineSize="large">
  <s-section>
    <s-stack gap="base">
      <s-text>Monitor your store performance across all channels.</s-text>
      <s-grid>
        <s-grid-item>
          <s-box
            padding="base"
            background="base"
            borderWidth="base"
            borderColor="base"
            borderRadius="base"
          >
            <s-heading>Sales</s-heading>
            <s-text type="strong">$12,456</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box
            padding="base"
            background="base"
            borderWidth="base"
            borderColor="base"
            borderRadius="base"
          >
            <s-heading>Orders</s-heading>
            <s-text type="strong">145</s-text>
          </s-box>
        </s-grid-item>
      </s-grid>
    </s-stack>
  </s-section>
</s-page>
```

```html
<s-page heading="Store analytics" inline-size="large">
  <s-section>
    <s-stack gap="base">
      <s-text>Monitor your store performance across all channels.</s-text>
      <s-grid>
        <s-grid-item>
          <s-box
            padding="base"
            background="base"
            borderWidth="base"
            borderColor="base"
            borderRadius="base"
          >
            <s-heading>Sales</s-heading>
            <s-text type="strong">$12,456</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box
            padding="base"
            background="base"
            borderWidth="base"
            borderColor="base"
            borderRadius="base"
          >
            <s-heading>Orders</s-heading>
            <s-text type="strong">145</s-text>
          </s-box>
        </s-grid-item>
      </s-grid>
    </s-stack>
  </s-section>
</s-page>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0; min-height: 400px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-page heading="Store analytics" inlineSize="large">
  <s-section>
    <s-stack gap="base">
      <s-text>Monitor your store performance across all channels.</s-text>
      <s-grid>
        <s-grid-item>
          <s-box
            padding="base"
            background="base"
            borderWidth="base"
            borderColor="base"
            borderRadius="base"
          >
            <s-heading>Sales</s-heading>
            <s-text type="strong">\$12,456</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box
            padding="base"
            background="base"
            borderWidth="base"
            borderColor="base"
            borderRadius="base"
          >
            <s-heading>Orders</s-heading>
            <s-text type="strong">145</s-text>
          </s-box>
        </s-grid-item>
      </s-grid>
    </s-stack>
  </s-section>
</s-page>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Examples

 Use `s-page` as the main container for placing content in your app. Page comes with preset layouts and automatically adds spacing between elements.


### Basic usage

Shows a page with a clear heading and descriptive text, illustrating how to use the page component with a title.```jsx
<s-page heading="Product catalog" inlineSize="base">
  <s-section>
    <s-text>Manage your product catalog and inventory.</s-text>
  </s-section>
</s-page>
```

```html
<s-page heading="Product catalog" inline-size="base">
  <s-section>
    <s-text>Manage your product catalog and inventory.</s-text>
  </s-section>
</s-page>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-page heading="Product catalog" inlineSize="base">
  <s-section>
    <s-text>Manage your product catalog and inventory.</s-text>
  </s-section>
</s-page>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates a page with a small inline size, ideal for focused, compact content like settings or forms with minimal information.```jsx
<s-page heading="Store settings" inlineSize="small">
  <s-section>
    <s-stack gap="base">
      <s-text>Configure your basic store preferences.</s-text>
      <s-text-field label="Store name" />
      <s-button variant="primary">Save</s-button>
    </s-stack>
  </s-section>
</s-page>
```

```html
<s-page heading="Store settings" inline-size="small">
  <s-section>
    <s-stack gap="base">
      <s-text>Configure your basic store preferences.</s-text>
      <s-text-field label="Store name"></s-text-field>
      <s-button variant="primary">Save</s-button>
    </s-stack>
  </s-section>
</s-page>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0; min-height: 400px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-page heading="Store settings" inlineSize="small">
  <s-section>
    <s-stack gap="base">
      <s-text>Configure your basic store preferences.</s-text>
      <s-text-field label="Store name" />
      <s-button variant="primary">Save</s-button>
    </s-stack>
  </s-section>
</s-page>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates a page with a large inline size, perfect for displaying broader content like analytics or dashboards with multiple information sections.```jsx
<s-page heading="Store analytics" inlineSize="large">
  <s-section>
    <s-stack gap="base">
      <s-text>Monitor your store performance across all channels.</s-text>
      <s-grid>
        <s-grid-item>
          <s-box
            padding="base"
            background="base"
            borderWidth="base"
            borderColor="base"
            borderRadius="base"
          >
            <s-heading>Sales</s-heading>
            <s-text type="strong">$12,456</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box
            padding="base"
            background="base"
            borderWidth="base"
            borderColor="base"
            borderRadius="base"
          >
            <s-heading>Orders</s-heading>
            <s-text type="strong">145</s-text>
          </s-box>
        </s-grid-item>
      </s-grid>
    </s-stack>
  </s-section>
</s-page>
```

```html
<s-page heading="Store analytics" inline-size="large">
  <s-section>
    <s-stack gap="base">
      <s-text>Monitor your store performance across all channels.</s-text>
      <s-grid>
        <s-grid-item>
          <s-box
            padding="base"
            background="base"
            borderWidth="base"
            borderColor="base"
            borderRadius="base"
          >
            <s-heading>Sales</s-heading>
            <s-text type="strong">$12,456</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box
            padding="base"
            background="base"
            borderWidth="base"
            borderColor="base"
            borderRadius="base"
          >
            <s-heading>Orders</s-heading>
            <s-text type="strong">145</s-text>
          </s-box>
        </s-grid-item>
      </s-grid>
    </s-stack>
  </s-section>
</s-page>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0; min-height: 400px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-page heading="Store analytics" inlineSize="large">
  <s-section>
    <s-stack gap="base">
      <s-text>Monitor your store performance across all channels.</s-text>
      <s-grid>
        <s-grid-item>
          <s-box
            padding="base"
            background="base"
            borderWidth="base"
            borderColor="base"
            borderRadius="base"
          >
            <s-heading>Sales</s-heading>
            <s-text type="strong">\$12,456</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box
            padding="base"
            background="base"
            borderWidth="base"
            borderColor="base"
            borderRadius="base"
          >
            <s-heading>Orders</s-heading>
            <s-text type="strong">145</s-text>
          </s-box>
        </s-grid-item>
      </s-grid>
    </s-stack>
  </s-section>
</s-page>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

