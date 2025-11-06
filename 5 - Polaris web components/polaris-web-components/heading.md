# Heading

Renders hierarchical titles to communicate the structure and organization of page content. Heading levels adjust automatically based on nesting within parent Section components, ensuring a meaningful and accessible page outline.

```jsx
<s-heading>Online store dashboard</s-heading>
```

```html
<s-heading>Online store dashboard</s-heading>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-heading>Online store dashboard</s-heading>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Properties

### Heading

### accessibilityRole

value: `"none" | "presentation" | "heading"`

Sets the semantic meaning of the component’s content. When set, the role will be used by assistive technologies to help users navigate the page.

- `heading`: defines the element as a heading to a page or section.
- `presentation`: the heading level will be stripped, and will prevent the element’s implicit ARIA semantics from being exposed to the accessibility tree.
- `none`: a synonym for the `presentation` role.

### accessibilityVisibility

value: `"visible" | "hidden" | "exclusive"`

Changes the visibility of the element.

- `visible`: the element is visible to all users.
- `hidden`: the element is removed from the accessibility tree but remains visible.
- `exclusive`: the element is visually hidden but remains in the accessibility tree.

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


### lineClamp

value: `number`

Truncates the text content to the specified number of lines.

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

Renders hierarchical titles to communicate the structure and organization of page content. Heading levels adjust automatically based on nesting within parent Section components, ensuring a meaningful and accessible page outline.


### Basic usage

Standard heading for section titles and page content organization that creates a simple, clean title for a content section.```jsx
<s-heading>Product details</s-heading>
```

```html
<s-heading>Product details</s-heading>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-heading>Product details</s-heading>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Truncated heading that limits text to a specified number of lines, using ellipsis to indicate additional content for long product names or constrained layouts.```jsx
<s-box inlineSize="200px">
  <s-heading lineClamp={2}>
    Premium organic cotton t-shirt with sustainable manufacturing practices
  </s-heading>
</s-box>
```

```html
<s-box inlineSize="200px">
  <s-heading lineClamp="2">
    Premium organic cotton t-shirt with sustainable manufacturing practices
  </s-heading>
</s-box>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-box inlineSize="200px">
  <s-heading lineClamp={2}>
    Premium organic cotton t-shirt with sustainable manufacturing practices
  </s-heading>
</s-box>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Heading configured with custom ARIA roles and visibility settings to meet specific accessibility requirements or design constraints.```jsx
<s-heading accessibilityRole="presentation" accessibilityVisibility="hidden">
  Sale badge
</s-heading>
```

```html
<s-heading accessibilityRole="presentation" accessibilityVisibility="hidden">
  Sale badge
</s-heading>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-heading accessibilityRole="presentation" accessibilityVisibility="hidden">
  Sale badge
</s-heading>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates nested heading structure that automatically adjusts heading levels (h2, h3, h4) based on the current section depth, ensuring proper semantic document structure.```jsx
<s-section>
  <s-heading>Order information</s-heading>
  {/* Renders as h2 */}
  <s-section>
    <s-heading>Shipping details</s-heading>
    {/* Renders as h3 */}
    <s-section>
      <s-heading>Tracking updates</s-heading>
      {/* Renders as h4 */}
    </s-section>
  </s-section>
</s-section>
```

```html
<s-section>
  <s-heading>Order information</s-heading>
  <!-- Renders as h2 -->
  <s-section>
    <s-heading>Shipping details</s-heading>
    <!-- Renders as h3 -->
    <s-section>
      <s-heading>Tracking updates</s-heading>
      <!-- Renders as h4 -->
    </s-section>
  </s-section>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section>
  <s-heading>Order information</s-heading>
  {/* Renders as h2 */}
  <s-section>
    <s-heading>Shipping details</s-heading>
    {/* Renders as h3 */}
    <s-section>
      <s-heading>Tracking updates</s-heading>
      {/* Renders as h4 */}
    </s-section>
  </s-section>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Slots

### HeadingSlots

### children

value: `HTMLElement`

The content of the Heading.

## Examples

Renders hierarchical titles to communicate the structure and organization of page content. Heading levels adjust automatically based on nesting within parent Section components, ensuring a meaningful and accessible page outline.


### Basic usage

Standard heading for section titles and page content organization that creates a simple, clean title for a content section.```jsx
<s-heading>Product details</s-heading>
```

```html
<s-heading>Product details</s-heading>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-heading>Product details</s-heading>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Truncated heading that limits text to a specified number of lines, using ellipsis to indicate additional content for long product names or constrained layouts.```jsx
<s-box inlineSize="200px">
  <s-heading lineClamp={2}>
    Premium organic cotton t-shirt with sustainable manufacturing practices
  </s-heading>
</s-box>
```

```html
<s-box inlineSize="200px">
  <s-heading lineClamp="2">
    Premium organic cotton t-shirt with sustainable manufacturing practices
  </s-heading>
</s-box>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-box inlineSize="200px">
  <s-heading lineClamp={2}>
    Premium organic cotton t-shirt with sustainable manufacturing practices
  </s-heading>
</s-box>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Heading configured with custom ARIA roles and visibility settings to meet specific accessibility requirements or design constraints.```jsx
<s-heading accessibilityRole="presentation" accessibilityVisibility="hidden">
  Sale badge
</s-heading>
```

```html
<s-heading accessibilityRole="presentation" accessibilityVisibility="hidden">
  Sale badge
</s-heading>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-heading accessibilityRole="presentation" accessibilityVisibility="hidden">
  Sale badge
</s-heading>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates nested heading structure that automatically adjusts heading levels (h2, h3, h4) based on the current section depth, ensuring proper semantic document structure.```jsx
<s-section>
  <s-heading>Order information</s-heading>
  {/* Renders as h2 */}
  <s-section>
    <s-heading>Shipping details</s-heading>
    {/* Renders as h3 */}
    <s-section>
      <s-heading>Tracking updates</s-heading>
      {/* Renders as h4 */}
    </s-section>
  </s-section>
</s-section>
```

```html
<s-section>
  <s-heading>Order information</s-heading>
  <!-- Renders as h2 -->
  <s-section>
    <s-heading>Shipping details</s-heading>
    <!-- Renders as h3 -->
    <s-section>
      <s-heading>Tracking updates</s-heading>
      <!-- Renders as h4 -->
    </s-section>
  </s-section>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section>
  <s-heading>Order information</s-heading>
  {/* Renders as h2 */}
  <s-section>
    <s-heading>Shipping details</s-heading>
    {/* Renders as h3 */}
    <s-section>
      <s-heading>Tracking updates</s-heading>
      {/* Renders as h4 */}
    </s-section>
  </s-section>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Examples

Renders hierarchical titles to communicate the structure and organization of page content. Heading levels adjust automatically based on nesting within parent Section components, ensuring a meaningful and accessible page outline.


### Basic usage

Standard heading for section titles and page content organization that creates a simple, clean title for a content section.```jsx
<s-heading>Product details</s-heading>
```

```html
<s-heading>Product details</s-heading>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-heading>Product details</s-heading>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Truncated heading that limits text to a specified number of lines, using ellipsis to indicate additional content for long product names or constrained layouts.```jsx
<s-box inlineSize="200px">
  <s-heading lineClamp={2}>
    Premium organic cotton t-shirt with sustainable manufacturing practices
  </s-heading>
</s-box>
```

```html
<s-box inlineSize="200px">
  <s-heading lineClamp="2">
    Premium organic cotton t-shirt with sustainable manufacturing practices
  </s-heading>
</s-box>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-box inlineSize="200px">
  <s-heading lineClamp={2}>
    Premium organic cotton t-shirt with sustainable manufacturing practices
  </s-heading>
</s-box>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Heading configured with custom ARIA roles and visibility settings to meet specific accessibility requirements or design constraints.```jsx
<s-heading accessibilityRole="presentation" accessibilityVisibility="hidden">
  Sale badge
</s-heading>
```

```html
<s-heading accessibilityRole="presentation" accessibilityVisibility="hidden">
  Sale badge
</s-heading>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-heading accessibilityRole="presentation" accessibilityVisibility="hidden">
  Sale badge
</s-heading>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates nested heading structure that automatically adjusts heading levels (h2, h3, h4) based on the current section depth, ensuring proper semantic document structure.```jsx
<s-section>
  <s-heading>Order information</s-heading>
  {/* Renders as h2 */}
  <s-section>
    <s-heading>Shipping details</s-heading>
    {/* Renders as h3 */}
    <s-section>
      <s-heading>Tracking updates</s-heading>
      {/* Renders as h4 */}
    </s-section>
  </s-section>
</s-section>
```

```html
<s-section>
  <s-heading>Order information</s-heading>
  <!-- Renders as h2 -->
  <s-section>
    <s-heading>Shipping details</s-heading>
    <!-- Renders as h3 -->
    <s-section>
      <s-heading>Tracking updates</s-heading>
      <!-- Renders as h4 -->
    </s-section>
  </s-section>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section>
  <s-heading>Order information</s-heading>
  {/* Renders as h2 */}
  <s-section>
    <s-heading>Shipping details</s-heading>
    {/* Renders as h3 */}
    <s-section>
      <s-heading>Tracking updates</s-heading>
      {/* Renders as h4 */}
    </s-section>
  </s-section>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

