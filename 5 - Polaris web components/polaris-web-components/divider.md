# Divider

Create clear visual separation between elements in your user interface.

```jsx
<s-divider />
```

```html
<s-divider></s-divider>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div style="width: 100%;" id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-divider />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Properties

### Divider

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

### color

value: `"base" | "strong"`

Modify the color to be more or less intense.

### connectedCallback

value: `() => void`


### direction

value: `"inline" | "block"`

Specify the direction of the divider. This uses [logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values).

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

Create clear visual separation between elements in your user interface.


### Basic usage

Demonstrates the default divider with standard base color and inline direction.```jsx
<s-divider />

```

```html
<s-divider></s-divider>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div style="width: 100%;" id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-divider />
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows a divider with a strong color variant for increased visual emphasis.```jsx
<s-divider color="strong" />

```

```html
<s-divider color="strong"></s-divider>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div style="width: 100%;" id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-divider color="strong" />
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates using a block-direction divider within an inline stack to create vertical separation between items.```jsx
<s-stack direction="inline" gap="base">
  <s-text>Item 1</s-text>
  <s-divider direction="block" />
  <s-text>Item 2</s-text>
</s-stack>

```

```html
<s-stack direction="inline" gap="base">
  <s-text>Item 1</s-text>
  <s-divider direction="block"></s-divider>
  <s-text>Item 2</s-text>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-text>Item 1</s-text>
  <s-divider direction="block" />
  <s-text>Item 2</s-text>
</s-stack>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Uses a divider to visually group and separate different sections of a form, improving readability and user comprehension.```jsx
<s-stack gap="base">
  <s-text-field label="Store name" />
  <s-text-field label="Description" />
  <s-divider />
  <s-text-field label="Email address" />
  <s-text-field label="Phone number" />
</s-stack>

```

```html
<s-stack gap="base">
  <s-text-field label="Store name"></s-text-field>
  <s-text-field label="Description"></s-text-field>
  <s-divider></s-divider>
  <s-text-field label="Email address"></s-text-field>
  <s-text-field label="Phone number"></s-text-field>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-text-field label="Store name" />
  <s-text-field label="Description" />
  <s-divider />
  <s-text-field label="Email address" />
  <s-text-field label="Phone number" />
</s-stack>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates using a divider to logically separate basic and advanced settings in a configuration panel.```jsx
<s-box padding="base">
  <s-stack gap="base">
    <s-switch label="Email notifications" />
    <s-switch label="Auto-save" />
    <s-divider />
    <s-switch label="Advanced settings" />
    <s-switch label="Developer tools" />
  </s-stack>
</s-box>

```

```html
<s-box padding="base">
  <s-stack gap="base">
    <s-switch label="Email notifications"></s-switch>
    <s-switch label="Auto-save"></s-switch>
    <s-divider></s-divider>
    <s-switch label="Advanced settings"></s-switch>
    <s-switch label="Developer tools"></s-switch>
  </s-stack>
</s-box>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-box padding="base">
  <s-stack gap="base">
    <s-switch label="Email notifications" />
    <s-switch label="Auto-save" />
    <s-divider />
    <s-switch label="Advanced settings" />
    <s-switch label="Developer tools" />
  </s-stack>
</s-box>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how dividers can be used to create clean, segmented sections within a section, improving information hierarchy.```jsx
<s-box padding="large-400" background="base">
  <s-stack gap="base">
    <s-heading>Order summary</s-heading>
    <s-text>3 items</s-text>
    <s-divider />
    <s-heading>Shipping address</s-heading>
    <s-text>123 Main Street, Toronto ON</s-text>
    <s-divider />
    <s-heading>Payment method</s-heading>
    <s-text>•••• 4242</s-text>
  </s-stack>
</s-box>

```

```html
<s-box padding="large-400" background="base">
  <s-stack gap="base">
    <s-heading>Order summary</s-heading>
    <s-text>3 items</s-text>
    <s-divider></s-divider>
    <s-heading>Shipping address</s-heading>
    <s-text>123 Main Street, Toronto ON</s-text>
    <s-divider></s-divider>
    <s-heading>Payment method</s-heading>
    <s-text>•••• 4242</s-text>
  </s-stack>
</s-box>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-box padding="large-400" background="base">
  <s-stack gap="base">
    <s-heading>Order summary</s-heading>
    <s-text>3 items</s-text>
    <s-divider />
    <s-heading>Shipping address</s-heading>
    <s-text>123 Main Street, Toronto ON</s-text>
    <s-divider />
    <s-heading>Payment method</s-heading>
    <s-text>•••• 4242</s-text>
  </s-stack>
</s-box>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates using dividers to create clear, visually distinct sections for different metrics or content blocks.```jsx
<s-stack gap="base">
  <s-box padding="base">
    <s-text>150 orders</s-text>
  </s-box>
  <s-divider />
  <s-box padding="base">
    <s-text>$2,400 revenue</s-text>
  </s-box>
  <s-divider />
  <s-box padding="base">
    <s-text>89 customers</s-text>
  </s-box>
</s-stack>

```

```html
<s-stack gap="base">
  <s-box padding="base">
    <s-text>150 orders</s-text>
  </s-box>
  <s-divider></s-divider>
  <s-box padding="base">
    <s-text>$2,400 revenue</s-text>
  </s-box>
  <s-divider></s-divider>
  <s-box padding="base">
    <s-text>89 customers</s-text>
  </s-box>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-box padding="base">
    <s-text>150 orders</s-text>
  </s-box>
  <s-divider />
  <s-box padding="base">
    <s-text>\$2,400 revenue</s-text>
  </s-box>
  <s-divider />
  <s-box padding="base">
    <s-text>89 customers</s-text>
  </s-box>
</s-stack>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Examples

Create clear visual separation between elements in your user interface.


### Basic usage

Demonstrates the default divider with standard base color and inline direction.```jsx
<s-divider />

```

```html
<s-divider></s-divider>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div style="width: 100%;" id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-divider />
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows a divider with a strong color variant for increased visual emphasis.```jsx
<s-divider color="strong" />

```

```html
<s-divider color="strong"></s-divider>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div style="width: 100%;" id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-divider color="strong" />
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates using a block-direction divider within an inline stack to create vertical separation between items.```jsx
<s-stack direction="inline" gap="base">
  <s-text>Item 1</s-text>
  <s-divider direction="block" />
  <s-text>Item 2</s-text>
</s-stack>

```

```html
<s-stack direction="inline" gap="base">
  <s-text>Item 1</s-text>
  <s-divider direction="block"></s-divider>
  <s-text>Item 2</s-text>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-text>Item 1</s-text>
  <s-divider direction="block" />
  <s-text>Item 2</s-text>
</s-stack>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Uses a divider to visually group and separate different sections of a form, improving readability and user comprehension.```jsx
<s-stack gap="base">
  <s-text-field label="Store name" />
  <s-text-field label="Description" />
  <s-divider />
  <s-text-field label="Email address" />
  <s-text-field label="Phone number" />
</s-stack>

```

```html
<s-stack gap="base">
  <s-text-field label="Store name"></s-text-field>
  <s-text-field label="Description"></s-text-field>
  <s-divider></s-divider>
  <s-text-field label="Email address"></s-text-field>
  <s-text-field label="Phone number"></s-text-field>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-text-field label="Store name" />
  <s-text-field label="Description" />
  <s-divider />
  <s-text-field label="Email address" />
  <s-text-field label="Phone number" />
</s-stack>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates using a divider to logically separate basic and advanced settings in a configuration panel.```jsx
<s-box padding="base">
  <s-stack gap="base">
    <s-switch label="Email notifications" />
    <s-switch label="Auto-save" />
    <s-divider />
    <s-switch label="Advanced settings" />
    <s-switch label="Developer tools" />
  </s-stack>
</s-box>

```

```html
<s-box padding="base">
  <s-stack gap="base">
    <s-switch label="Email notifications"></s-switch>
    <s-switch label="Auto-save"></s-switch>
    <s-divider></s-divider>
    <s-switch label="Advanced settings"></s-switch>
    <s-switch label="Developer tools"></s-switch>
  </s-stack>
</s-box>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-box padding="base">
  <s-stack gap="base">
    <s-switch label="Email notifications" />
    <s-switch label="Auto-save" />
    <s-divider />
    <s-switch label="Advanced settings" />
    <s-switch label="Developer tools" />
  </s-stack>
</s-box>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how dividers can be used to create clean, segmented sections within a section, improving information hierarchy.```jsx
<s-box padding="large-400" background="base">
  <s-stack gap="base">
    <s-heading>Order summary</s-heading>
    <s-text>3 items</s-text>
    <s-divider />
    <s-heading>Shipping address</s-heading>
    <s-text>123 Main Street, Toronto ON</s-text>
    <s-divider />
    <s-heading>Payment method</s-heading>
    <s-text>•••• 4242</s-text>
  </s-stack>
</s-box>

```

```html
<s-box padding="large-400" background="base">
  <s-stack gap="base">
    <s-heading>Order summary</s-heading>
    <s-text>3 items</s-text>
    <s-divider></s-divider>
    <s-heading>Shipping address</s-heading>
    <s-text>123 Main Street, Toronto ON</s-text>
    <s-divider></s-divider>
    <s-heading>Payment method</s-heading>
    <s-text>•••• 4242</s-text>
  </s-stack>
</s-box>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-box padding="large-400" background="base">
  <s-stack gap="base">
    <s-heading>Order summary</s-heading>
    <s-text>3 items</s-text>
    <s-divider />
    <s-heading>Shipping address</s-heading>
    <s-text>123 Main Street, Toronto ON</s-text>
    <s-divider />
    <s-heading>Payment method</s-heading>
    <s-text>•••• 4242</s-text>
  </s-stack>
</s-box>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates using dividers to create clear, visually distinct sections for different metrics or content blocks.```jsx
<s-stack gap="base">
  <s-box padding="base">
    <s-text>150 orders</s-text>
  </s-box>
  <s-divider />
  <s-box padding="base">
    <s-text>$2,400 revenue</s-text>
  </s-box>
  <s-divider />
  <s-box padding="base">
    <s-text>89 customers</s-text>
  </s-box>
</s-stack>

```

```html
<s-stack gap="base">
  <s-box padding="base">
    <s-text>150 orders</s-text>
  </s-box>
  <s-divider></s-divider>
  <s-box padding="base">
    <s-text>$2,400 revenue</s-text>
  </s-box>
  <s-divider></s-divider>
  <s-box padding="base">
    <s-text>89 customers</s-text>
  </s-box>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-box padding="base">
    <s-text>150 orders</s-text>
  </s-box>
  <s-divider />
  <s-box padding="base">
    <s-text>\$2,400 revenue</s-text>
  </s-box>
  <s-divider />
  <s-box padding="base">
    <s-text>89 customers</s-text>
  </s-box>
</s-stack>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

