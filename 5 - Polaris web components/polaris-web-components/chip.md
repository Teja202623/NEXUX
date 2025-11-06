# Chip

Represents a set of user-supplied keywords that help label, organize, and categorize objects. Used to categorize or highlight content attributes. They are often displayed near the content they classify, enhancing discoverability by allowing users to identify items with similar properties.

```jsx
<s-chip>Chip</s-chip>
```

```html
<s-chip>Chip</s-chip>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-chip>Chip</s-chip>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Properties

### Chip

### accessibilityLabel

value: `string`

A label that describes the purpose or contents of the Chip. It will be read to users using assistive technologies such as screen readers.

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

value: `ColorKeyword`

  - ColorKeyword: 'subdued' | 'base' | 'strong'
Modify the color to be more or less intense.

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

Represents a set of user-supplied keywords that help label, organize, and categorize objects. Used to categorize or highlight content attributes. They are often displayed near the content they classify, enhancing discoverability by allowing users to identify items with similar properties.


### Basic usage

Simple chip displaying product status without an icon.```jsx
<s-chip color="base" accessibilityLabel="Product status indicator">
  Active
</s-chip>
```

```html
<s-chip color="base" accessibilityLabel="Product status indicator">
  Active
</s-chip>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-chip color="base" accessibilityLabel="Product status indicator">
  Active
</s-chip>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Chip enhanced with an icon to provide visual context for the category.```jsx
<s-chip color="strong" accessibilityLabel="Product category">
  <s-icon slot="graphic" type="catalog-product" size="small" />
  Electronics
</s-chip>
```

```html
<s-chip color="strong" accessibilityLabel="Product category">
  <s-icon slot="graphic" type="catalog-product" size="small"></s-icon>
  Electronics
</s-chip>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-chip color="strong" accessibilityLabel="Product category">
  <s-icon slot="graphic" type="catalog-product" size="small" />
  Electronics
</s-chip>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates all three color variants for different levels of visual emphasis.```jsx
<s-stack direction="inline" gap="base">
  <s-chip color="subdued" accessibilityLabel="Secondary information">
    Draft
  </s-chip>
  <s-chip color="base" accessibilityLabel="Standard information">
    Published
  </s-chip>
  <s-chip color="strong" accessibilityLabel="Important status">
    <s-icon slot="graphic" type="check" size="small" />
    Verified
  </s-chip>
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-chip color="subdued" accessibilityLabel="Secondary information">
    Draft
  </s-chip>
  <s-chip color="base" accessibilityLabel="Standard information">
    Published
  </s-chip>
  <s-chip color="strong" accessibilityLabel="Important status">
    <s-icon slot="graphic" type="check" size="small"></s-icon>
    Verified
  </s-chip>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-chip color="subdued" accessibilityLabel="Secondary information">
    Draft
  </s-chip>
  <s-chip color="base" accessibilityLabel="Standard information">
    Published
  </s-chip>
  <s-chip color="strong" accessibilityLabel="Important status">
    <s-icon slot="graphic" type="check" size="small" />
    Verified
  </s-chip>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Common status indicators demonstrating chips in real-world product management scenarios.```jsx
<s-stack direction="inline" gap="base">
  <s-chip color="base" accessibilityLabel="Product status">
    Active
  </s-chip>
  <s-chip color="subdued" accessibilityLabel="Product status">
    Draft
  </s-chip>
  <s-chip color="strong" accessibilityLabel="Product status">
    <s-icon slot="graphic" type="check" size="small" />
    Published
  </s-chip>
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-chip color="base" accessibilityLabel="Product status">Active</s-chip>
  <s-chip color="subdued" accessibilityLabel="Product status">Draft</s-chip>
  <s-chip color="strong" accessibilityLabel="Product status">
    <s-icon slot="graphic" type="check" size="small"></s-icon>
    Published
  </s-chip>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-chip color="base" accessibilityLabel="Product status">
    Active
  </s-chip>
  <s-chip color="subdued" accessibilityLabel="Product status">
    Draft
  </s-chip>
  <s-chip color="strong" accessibilityLabel="Product status">
    <s-icon slot="graphic" type="check" size="small" />
    Published
  </s-chip>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates automatic text truncation for long content within a constrained width.```jsx
<s-box maxInlineSize="200px">
  <s-stack gap="base">
    <s-chip color="base" accessibilityLabel="Long product name">
      This is a very long product name that will be truncated with ellipsis when
      it exceeds the container width
    </s-chip>
    <s-chip color="strong" accessibilityLabel="Long category name">
      <s-icon slot="graphic" type="catalog-product" size="small" />
      Electronics and computer accessories category with extended description
    </s-chip>
  </s-stack>
</s-box>
```

```html
<s-box maxInlineSize="200px">
  <s-stack gap="base">
    <s-chip color="base" accessibilityLabel="Long product name">
      This is a very long product name that will be truncated with ellipsis when
      it exceeds the container width
    </s-chip>
    <s-chip color="strong" accessibilityLabel="Long category name">
      <s-icon slot="graphic" type="catalog-product" size="small"></s-icon>
      Electronics and computer accessories category with extended description
    </s-chip>
  </s-stack>
</s-box>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-box maxInlineSize="200px">
  <s-stack gap="base">
    <s-chip color="base" accessibilityLabel="Long product name">
      This is a very long product name that will be truncated with ellipsis when
      it exceeds the container width
    </s-chip>
    <s-chip color="strong" accessibilityLabel="Long category name">
      <s-icon slot="graphic" type="catalog-product" size="small" />
      Electronics and computer accessories category with extended description
    </s-chip>
  </s-stack>
</s-box>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Slots

### ChipSlots

### children

value: `HTMLElement`

The content of the Chip.

### graphic

value: `HTMLElement`

The graphic to display in the chip.

Only accepts `Icon` components.

## Examples

Represents a set of user-supplied keywords that help label, organize, and categorize objects. Used to categorize or highlight content attributes. They are often displayed near the content they classify, enhancing discoverability by allowing users to identify items with similar properties.


### Basic usage

Simple chip displaying product status without an icon.```jsx
<s-chip color="base" accessibilityLabel="Product status indicator">
  Active
</s-chip>
```

```html
<s-chip color="base" accessibilityLabel="Product status indicator">
  Active
</s-chip>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-chip color="base" accessibilityLabel="Product status indicator">
  Active
</s-chip>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Chip enhanced with an icon to provide visual context for the category.```jsx
<s-chip color="strong" accessibilityLabel="Product category">
  <s-icon slot="graphic" type="catalog-product" size="small" />
  Electronics
</s-chip>
```

```html
<s-chip color="strong" accessibilityLabel="Product category">
  <s-icon slot="graphic" type="catalog-product" size="small"></s-icon>
  Electronics
</s-chip>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-chip color="strong" accessibilityLabel="Product category">
  <s-icon slot="graphic" type="catalog-product" size="small" />
  Electronics
</s-chip>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates all three color variants for different levels of visual emphasis.```jsx
<s-stack direction="inline" gap="base">
  <s-chip color="subdued" accessibilityLabel="Secondary information">
    Draft
  </s-chip>
  <s-chip color="base" accessibilityLabel="Standard information">
    Published
  </s-chip>
  <s-chip color="strong" accessibilityLabel="Important status">
    <s-icon slot="graphic" type="check" size="small" />
    Verified
  </s-chip>
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-chip color="subdued" accessibilityLabel="Secondary information">
    Draft
  </s-chip>
  <s-chip color="base" accessibilityLabel="Standard information">
    Published
  </s-chip>
  <s-chip color="strong" accessibilityLabel="Important status">
    <s-icon slot="graphic" type="check" size="small"></s-icon>
    Verified
  </s-chip>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-chip color="subdued" accessibilityLabel="Secondary information">
    Draft
  </s-chip>
  <s-chip color="base" accessibilityLabel="Standard information">
    Published
  </s-chip>
  <s-chip color="strong" accessibilityLabel="Important status">
    <s-icon slot="graphic" type="check" size="small" />
    Verified
  </s-chip>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Common status indicators demonstrating chips in real-world product management scenarios.```jsx
<s-stack direction="inline" gap="base">
  <s-chip color="base" accessibilityLabel="Product status">
    Active
  </s-chip>
  <s-chip color="subdued" accessibilityLabel="Product status">
    Draft
  </s-chip>
  <s-chip color="strong" accessibilityLabel="Product status">
    <s-icon slot="graphic" type="check" size="small" />
    Published
  </s-chip>
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-chip color="base" accessibilityLabel="Product status">Active</s-chip>
  <s-chip color="subdued" accessibilityLabel="Product status">Draft</s-chip>
  <s-chip color="strong" accessibilityLabel="Product status">
    <s-icon slot="graphic" type="check" size="small"></s-icon>
    Published
  </s-chip>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-chip color="base" accessibilityLabel="Product status">
    Active
  </s-chip>
  <s-chip color="subdued" accessibilityLabel="Product status">
    Draft
  </s-chip>
  <s-chip color="strong" accessibilityLabel="Product status">
    <s-icon slot="graphic" type="check" size="small" />
    Published
  </s-chip>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates automatic text truncation for long content within a constrained width.```jsx
<s-box maxInlineSize="200px">
  <s-stack gap="base">
    <s-chip color="base" accessibilityLabel="Long product name">
      This is a very long product name that will be truncated with ellipsis when
      it exceeds the container width
    </s-chip>
    <s-chip color="strong" accessibilityLabel="Long category name">
      <s-icon slot="graphic" type="catalog-product" size="small" />
      Electronics and computer accessories category with extended description
    </s-chip>
  </s-stack>
</s-box>
```

```html
<s-box maxInlineSize="200px">
  <s-stack gap="base">
    <s-chip color="base" accessibilityLabel="Long product name">
      This is a very long product name that will be truncated with ellipsis when
      it exceeds the container width
    </s-chip>
    <s-chip color="strong" accessibilityLabel="Long category name">
      <s-icon slot="graphic" type="catalog-product" size="small"></s-icon>
      Electronics and computer accessories category with extended description
    </s-chip>
  </s-stack>
</s-box>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-box maxInlineSize="200px">
  <s-stack gap="base">
    <s-chip color="base" accessibilityLabel="Long product name">
      This is a very long product name that will be truncated with ellipsis when
      it exceeds the container width
    </s-chip>
    <s-chip color="strong" accessibilityLabel="Long category name">
      <s-icon slot="graphic" type="catalog-product" size="small" />
      Electronics and computer accessories category with extended description
    </s-chip>
  </s-stack>
</s-box>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Examples

Represents a set of user-supplied keywords that help label, organize, and categorize objects. Used to categorize or highlight content attributes. They are often displayed near the content they classify, enhancing discoverability by allowing users to identify items with similar properties.


### Basic usage

Simple chip displaying product status without an icon.```jsx
<s-chip color="base" accessibilityLabel="Product status indicator">
  Active
</s-chip>
```

```html
<s-chip color="base" accessibilityLabel="Product status indicator">
  Active
</s-chip>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-chip color="base" accessibilityLabel="Product status indicator">
  Active
</s-chip>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Chip enhanced with an icon to provide visual context for the category.```jsx
<s-chip color="strong" accessibilityLabel="Product category">
  <s-icon slot="graphic" type="catalog-product" size="small" />
  Electronics
</s-chip>
```

```html
<s-chip color="strong" accessibilityLabel="Product category">
  <s-icon slot="graphic" type="catalog-product" size="small"></s-icon>
  Electronics
</s-chip>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-chip color="strong" accessibilityLabel="Product category">
  <s-icon slot="graphic" type="catalog-product" size="small" />
  Electronics
</s-chip>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates all three color variants for different levels of visual emphasis.```jsx
<s-stack direction="inline" gap="base">
  <s-chip color="subdued" accessibilityLabel="Secondary information">
    Draft
  </s-chip>
  <s-chip color="base" accessibilityLabel="Standard information">
    Published
  </s-chip>
  <s-chip color="strong" accessibilityLabel="Important status">
    <s-icon slot="graphic" type="check" size="small" />
    Verified
  </s-chip>
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-chip color="subdued" accessibilityLabel="Secondary information">
    Draft
  </s-chip>
  <s-chip color="base" accessibilityLabel="Standard information">
    Published
  </s-chip>
  <s-chip color="strong" accessibilityLabel="Important status">
    <s-icon slot="graphic" type="check" size="small"></s-icon>
    Verified
  </s-chip>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-chip color="subdued" accessibilityLabel="Secondary information">
    Draft
  </s-chip>
  <s-chip color="base" accessibilityLabel="Standard information">
    Published
  </s-chip>
  <s-chip color="strong" accessibilityLabel="Important status">
    <s-icon slot="graphic" type="check" size="small" />
    Verified
  </s-chip>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Common status indicators demonstrating chips in real-world product management scenarios.```jsx
<s-stack direction="inline" gap="base">
  <s-chip color="base" accessibilityLabel="Product status">
    Active
  </s-chip>
  <s-chip color="subdued" accessibilityLabel="Product status">
    Draft
  </s-chip>
  <s-chip color="strong" accessibilityLabel="Product status">
    <s-icon slot="graphic" type="check" size="small" />
    Published
  </s-chip>
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-chip color="base" accessibilityLabel="Product status">Active</s-chip>
  <s-chip color="subdued" accessibilityLabel="Product status">Draft</s-chip>
  <s-chip color="strong" accessibilityLabel="Product status">
    <s-icon slot="graphic" type="check" size="small"></s-icon>
    Published
  </s-chip>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-chip color="base" accessibilityLabel="Product status">
    Active
  </s-chip>
  <s-chip color="subdued" accessibilityLabel="Product status">
    Draft
  </s-chip>
  <s-chip color="strong" accessibilityLabel="Product status">
    <s-icon slot="graphic" type="check" size="small" />
    Published
  </s-chip>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates automatic text truncation for long content within a constrained width.```jsx
<s-box maxInlineSize="200px">
  <s-stack gap="base">
    <s-chip color="base" accessibilityLabel="Long product name">
      This is a very long product name that will be truncated with ellipsis when
      it exceeds the container width
    </s-chip>
    <s-chip color="strong" accessibilityLabel="Long category name">
      <s-icon slot="graphic" type="catalog-product" size="small" />
      Electronics and computer accessories category with extended description
    </s-chip>
  </s-stack>
</s-box>
```

```html
<s-box maxInlineSize="200px">
  <s-stack gap="base">
    <s-chip color="base" accessibilityLabel="Long product name">
      This is a very long product name that will be truncated with ellipsis when
      it exceeds the container width
    </s-chip>
    <s-chip color="strong" accessibilityLabel="Long category name">
      <s-icon slot="graphic" type="catalog-product" size="small"></s-icon>
      Electronics and computer accessories category with extended description
    </s-chip>
  </s-stack>
</s-box>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-box maxInlineSize="200px">
  <s-stack gap="base">
    <s-chip color="base" accessibilityLabel="Long product name">
      This is a very long product name that will be truncated with ellipsis when
      it exceeds the container width
    </s-chip>
    <s-chip color="strong" accessibilityLabel="Long category name">
      <s-icon slot="graphic" type="catalog-product" size="small" />
      Electronics and computer accessories category with extended description
    </s-chip>
  </s-stack>
</s-box>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

