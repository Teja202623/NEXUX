# ButtonGroup

Displays multiple buttons in a layout.

```jsx
<s-button-group>
  <s-button slot="primary-action">Save</s-button>
  <s-button slot="secondary-actions">Cancel</s-button>
</s-button-group>
```

```html
<s-button-group>
  <s-button slot="primary-action">Save</s-button>
  <s-button slot="secondary-actions">Cancel</s-button>
</s-button-group>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: flex; justify-content: center; align-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-button-group>
  <s-button slot="primary-action">Save</s-button>
  <s-button slot="secondary-actions">Cancel</s-button>
</s-button-group>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Properties

### ButtonGroup

### accessibilityLabel

value: `string`

Label for the button group that describes the content of the group for screen reader users to understand what's included.

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


### gap

value: `"base" | "none"`

The gap between elements.

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

Displays multiple buttons in a layout.


### Basic usage

Standard button group with cancel and primary action for form workflows.```jsx
<s-button-group>
  <s-button slot="secondary-actions">Cancel</s-button>
  <s-button slot="primary-action" variant="primary">
    Save
  </s-button>
</s-button-group>
```

```html
<s-button-group>
  <s-button slot="secondary-actions">Cancel</s-button>
  <s-button slot="primary-action" variant="primary">Save</s-button>
</s-button-group>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-button-group>
  <s-button slot="secondary-actions">Cancel</s-button>
  <s-button slot="primary-action" variant="primary">
    Save
  </s-button>
</s-button-group>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Action buttons for selected items with destructive option.```jsx
<s-button-group>
  <s-button slot="secondary-actions">Archive</s-button>
  <s-button slot="secondary-actions">Export</s-button>
  <s-button slot="secondary-actions" tone="critical">
    Delete
  </s-button>
</s-button-group>
```

```html
<s-button-group>
  <s-button slot="secondary-actions">Archive</s-button>
  <s-button slot="secondary-actions">Export</s-button>
  <s-button slot="secondary-actions" tone="critical">Delete</s-button>
</s-button-group>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-button-group>
  <s-button slot="secondary-actions">Archive</s-button>
  <s-button slot="secondary-actions">Export</s-button>
  <s-button slot="secondary-actions" tone="critical">
    Delete
  </s-button>
</s-button-group>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Typical form completion actions with clear visual hierarchy.```jsx
<s-button-group>
  <s-button slot="secondary-actions">Cancel</s-button>
  <s-button slot="primary-action" variant="primary">
    Save product
  </s-button>
</s-button-group>
```

```html
<s-button-group>
  <s-button slot="secondary-actions">Cancel</s-button>
  <s-button slot="primary-action" variant="primary">Save product</s-button>
</s-button-group>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-button-group>
  <s-button slot="secondary-actions">Cancel</s-button>
  <s-button slot="primary-action" variant="primary">
    Save product
  </s-button>
</s-button-group>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Icon-labeled buttons for common actions.```jsx
<s-button-group>
  <s-button slot="secondary-actions" icon="duplicate">
    Duplicate
  </s-button>
  <s-button slot="secondary-actions" icon="archive">
    Archive
  </s-button>
  <s-button slot="secondary-actions" icon="delete" tone="critical">
    Delete
  </s-button>
</s-button-group>
```

```html
<s-button-group>
  <s-button slot="secondary-actions" icon="duplicate">Duplicate</s-button>
  <s-button slot="secondary-actions" icon="archive">Archive</s-button>
  <s-button slot="secondary-actions" icon="delete" tone="critical">
    Delete
  </s-button>
</s-button-group>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-button-group>
  <s-button slot="secondary-actions" icon="duplicate">
    Duplicate
  </s-button>
  <s-button slot="secondary-actions" icon="archive">
    Archive
  </s-button>
  <s-button slot="secondary-actions" icon="delete" tone="critical">
    Delete
  </s-button>
</s-button-group>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Tightly grouped buttons for view switching and filter options.```jsx
<s-button-group gap="none">
  <s-button slot="secondary-actions">Day</s-button>
  <s-button slot="secondary-actions">Week</s-button>
  <s-button slot="secondary-actions">Month</s-button>
</s-button-group>
```

```html
<s-button-group gap="none">
  <s-button slot="secondary-actions">Day</s-button>
  <s-button slot="secondary-actions">Week</s-button>
  <s-button slot="secondary-actions">Month</s-button>
</s-button-group>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-button-group gap="none">
  <s-button slot="secondary-actions">Day</s-button>
  <s-button slot="secondary-actions">Week</s-button>
  <s-button slot="secondary-actions">Month</s-button>
</s-button-group>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Confirmation dialog style with cancel option and destructive action.```jsx
<s-button-group>
  <s-button slot="secondary-actions">Cancel</s-button>
  <s-button slot="secondary-actions" tone="critical">
    Delete product
  </s-button>
</s-button-group>
```

```html
<s-button-group>
  <s-button slot="secondary-actions">Cancel</s-button>
  <s-button slot="secondary-actions" tone="critical">Delete product</s-button>
</s-button-group>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-button-group>
  <s-button slot="secondary-actions">Cancel</s-button>
  <s-button slot="secondary-actions" tone="critical">
    Delete product
  </s-button>
</s-button-group>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Slots

### ButtonGroupSlots

### children

value: `HTMLElement`

The content of the ButtonGroup.

### primary-action

value: `HTMLElement`

The primary action button for the group. Accepts a single Button element with a `variant` of `primary`. Cannot be used when gap="none".

### secondary-actions

value: `HTMLElement`

Secondary action buttons for the group. Accepts Button elements with a `variant` of `secondary` or `auto`.

## Examples

Displays multiple buttons in a layout.


### Basic usage

Standard button group with cancel and primary action for form workflows.```jsx
<s-button-group>
  <s-button slot="secondary-actions">Cancel</s-button>
  <s-button slot="primary-action" variant="primary">
    Save
  </s-button>
</s-button-group>
```

```html
<s-button-group>
  <s-button slot="secondary-actions">Cancel</s-button>
  <s-button slot="primary-action" variant="primary">Save</s-button>
</s-button-group>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-button-group>
  <s-button slot="secondary-actions">Cancel</s-button>
  <s-button slot="primary-action" variant="primary">
    Save
  </s-button>
</s-button-group>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Action buttons for selected items with destructive option.```jsx
<s-button-group>
  <s-button slot="secondary-actions">Archive</s-button>
  <s-button slot="secondary-actions">Export</s-button>
  <s-button slot="secondary-actions" tone="critical">
    Delete
  </s-button>
</s-button-group>
```

```html
<s-button-group>
  <s-button slot="secondary-actions">Archive</s-button>
  <s-button slot="secondary-actions">Export</s-button>
  <s-button slot="secondary-actions" tone="critical">Delete</s-button>
</s-button-group>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-button-group>
  <s-button slot="secondary-actions">Archive</s-button>
  <s-button slot="secondary-actions">Export</s-button>
  <s-button slot="secondary-actions" tone="critical">
    Delete
  </s-button>
</s-button-group>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Typical form completion actions with clear visual hierarchy.```jsx
<s-button-group>
  <s-button slot="secondary-actions">Cancel</s-button>
  <s-button slot="primary-action" variant="primary">
    Save product
  </s-button>
</s-button-group>
```

```html
<s-button-group>
  <s-button slot="secondary-actions">Cancel</s-button>
  <s-button slot="primary-action" variant="primary">Save product</s-button>
</s-button-group>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-button-group>
  <s-button slot="secondary-actions">Cancel</s-button>
  <s-button slot="primary-action" variant="primary">
    Save product
  </s-button>
</s-button-group>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Icon-labeled buttons for common actions.```jsx
<s-button-group>
  <s-button slot="secondary-actions" icon="duplicate">
    Duplicate
  </s-button>
  <s-button slot="secondary-actions" icon="archive">
    Archive
  </s-button>
  <s-button slot="secondary-actions" icon="delete" tone="critical">
    Delete
  </s-button>
</s-button-group>
```

```html
<s-button-group>
  <s-button slot="secondary-actions" icon="duplicate">Duplicate</s-button>
  <s-button slot="secondary-actions" icon="archive">Archive</s-button>
  <s-button slot="secondary-actions" icon="delete" tone="critical">
    Delete
  </s-button>
</s-button-group>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-button-group>
  <s-button slot="secondary-actions" icon="duplicate">
    Duplicate
  </s-button>
  <s-button slot="secondary-actions" icon="archive">
    Archive
  </s-button>
  <s-button slot="secondary-actions" icon="delete" tone="critical">
    Delete
  </s-button>
</s-button-group>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Tightly grouped buttons for view switching and filter options.```jsx
<s-button-group gap="none">
  <s-button slot="secondary-actions">Day</s-button>
  <s-button slot="secondary-actions">Week</s-button>
  <s-button slot="secondary-actions">Month</s-button>
</s-button-group>
```

```html
<s-button-group gap="none">
  <s-button slot="secondary-actions">Day</s-button>
  <s-button slot="secondary-actions">Week</s-button>
  <s-button slot="secondary-actions">Month</s-button>
</s-button-group>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-button-group gap="none">
  <s-button slot="secondary-actions">Day</s-button>
  <s-button slot="secondary-actions">Week</s-button>
  <s-button slot="secondary-actions">Month</s-button>
</s-button-group>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Confirmation dialog style with cancel option and destructive action.```jsx
<s-button-group>
  <s-button slot="secondary-actions">Cancel</s-button>
  <s-button slot="secondary-actions" tone="critical">
    Delete product
  </s-button>
</s-button-group>
```

```html
<s-button-group>
  <s-button slot="secondary-actions">Cancel</s-button>
  <s-button slot="secondary-actions" tone="critical">Delete product</s-button>
</s-button-group>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-button-group>
  <s-button slot="secondary-actions">Cancel</s-button>
  <s-button slot="secondary-actions" tone="critical">
    Delete product
  </s-button>
</s-button-group>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Examples

Displays multiple buttons in a layout.


### Basic usage

Standard button group with cancel and primary action for form workflows.```jsx
<s-button-group>
  <s-button slot="secondary-actions">Cancel</s-button>
  <s-button slot="primary-action" variant="primary">
    Save
  </s-button>
</s-button-group>
```

```html
<s-button-group>
  <s-button slot="secondary-actions">Cancel</s-button>
  <s-button slot="primary-action" variant="primary">Save</s-button>
</s-button-group>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-button-group>
  <s-button slot="secondary-actions">Cancel</s-button>
  <s-button slot="primary-action" variant="primary">
    Save
  </s-button>
</s-button-group>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Action buttons for selected items with destructive option.```jsx
<s-button-group>
  <s-button slot="secondary-actions">Archive</s-button>
  <s-button slot="secondary-actions">Export</s-button>
  <s-button slot="secondary-actions" tone="critical">
    Delete
  </s-button>
</s-button-group>
```

```html
<s-button-group>
  <s-button slot="secondary-actions">Archive</s-button>
  <s-button slot="secondary-actions">Export</s-button>
  <s-button slot="secondary-actions" tone="critical">Delete</s-button>
</s-button-group>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-button-group>
  <s-button slot="secondary-actions">Archive</s-button>
  <s-button slot="secondary-actions">Export</s-button>
  <s-button slot="secondary-actions" tone="critical">
    Delete
  </s-button>
</s-button-group>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Typical form completion actions with clear visual hierarchy.```jsx
<s-button-group>
  <s-button slot="secondary-actions">Cancel</s-button>
  <s-button slot="primary-action" variant="primary">
    Save product
  </s-button>
</s-button-group>
```

```html
<s-button-group>
  <s-button slot="secondary-actions">Cancel</s-button>
  <s-button slot="primary-action" variant="primary">Save product</s-button>
</s-button-group>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-button-group>
  <s-button slot="secondary-actions">Cancel</s-button>
  <s-button slot="primary-action" variant="primary">
    Save product
  </s-button>
</s-button-group>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Icon-labeled buttons for common actions.```jsx
<s-button-group>
  <s-button slot="secondary-actions" icon="duplicate">
    Duplicate
  </s-button>
  <s-button slot="secondary-actions" icon="archive">
    Archive
  </s-button>
  <s-button slot="secondary-actions" icon="delete" tone="critical">
    Delete
  </s-button>
</s-button-group>
```

```html
<s-button-group>
  <s-button slot="secondary-actions" icon="duplicate">Duplicate</s-button>
  <s-button slot="secondary-actions" icon="archive">Archive</s-button>
  <s-button slot="secondary-actions" icon="delete" tone="critical">
    Delete
  </s-button>
</s-button-group>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-button-group>
  <s-button slot="secondary-actions" icon="duplicate">
    Duplicate
  </s-button>
  <s-button slot="secondary-actions" icon="archive">
    Archive
  </s-button>
  <s-button slot="secondary-actions" icon="delete" tone="critical">
    Delete
  </s-button>
</s-button-group>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Tightly grouped buttons for view switching and filter options.```jsx
<s-button-group gap="none">
  <s-button slot="secondary-actions">Day</s-button>
  <s-button slot="secondary-actions">Week</s-button>
  <s-button slot="secondary-actions">Month</s-button>
</s-button-group>
```

```html
<s-button-group gap="none">
  <s-button slot="secondary-actions">Day</s-button>
  <s-button slot="secondary-actions">Week</s-button>
  <s-button slot="secondary-actions">Month</s-button>
</s-button-group>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-button-group gap="none">
  <s-button slot="secondary-actions">Day</s-button>
  <s-button slot="secondary-actions">Week</s-button>
  <s-button slot="secondary-actions">Month</s-button>
</s-button-group>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Confirmation dialog style with cancel option and destructive action.```jsx
<s-button-group>
  <s-button slot="secondary-actions">Cancel</s-button>
  <s-button slot="secondary-actions" tone="critical">
    Delete product
  </s-button>
</s-button-group>
```

```html
<s-button-group>
  <s-button slot="secondary-actions">Cancel</s-button>
  <s-button slot="secondary-actions" tone="critical">Delete product</s-button>
</s-button-group>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-button-group>
  <s-button slot="secondary-actions">Cancel</s-button>
  <s-button slot="secondary-actions" tone="critical">
    Delete product
  </s-button>
</s-button-group>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

