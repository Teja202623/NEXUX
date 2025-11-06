# Tooltip

Displays helpful information in a small overlay when users hover or focus on an element. Use to provide additional context without cluttering the interface.

```jsx
<>
  <s-tooltip id="bold-tooltip">Bold</s-tooltip>
  <s-button interestFor="bold-tooltip" accessibilityLabel="Bold">
    B
  </s-button>
</>
```

```html
<s-tooltip id="bold-tooltip">Bold</s-tooltip>
<s-button interestFor="bold-tooltip" accessibilityLabel="Bold">B</s-button>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: flex; justify-content: center; align-items: center; gap: 0.5rem; min-height: 200px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
  <s-tooltip id="bold-tooltip">Bold</s-tooltip>
  <s-button interestFor="bold-tooltip" accessibilityLabel="Bold">
    B
  </s-button>
</>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Slots

### TooltipSlots

### children

value: `HTMLElement`

The content of the Tooltip.

Only accepts `Text`, `Paragraph` components, and raw `textContent`.

## Examples

Displays helpful information in a small overlay when users hover or focus on an element. Use to provide additional context without cluttering the interface.


### Basic usage

Demonstrates a simple tooltip that provides additional context for a text element when hovered or focused.```jsx
<>
  <s-tooltip id="shipping-status-tooltip">
    <s-text>This order has shipping labels.</s-text>
  </s-tooltip>
  <s-text interestFor="shipping-status-tooltip">Shipping status</s-text>
</>
```

```html
<s-tooltip id="shipping-status-tooltip">
  <s-text>This order has shipping labels.</s-text>
</s-tooltip>
<s-text interestFor="shipping-status-tooltip">Shipping status</s-text>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: flex; justify-content: center; align-items: center; gap: 0.5rem; min-height: 200px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
  <s-tooltip id="shipping-status-tooltip">
    <s-text>This order has shipping labels.</s-text>
  </s-tooltip>
  <s-text interestFor="shipping-status-tooltip">Shipping status</s-text>
</>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how to add a tooltip to an icon button, providing a clear explanation of the button's action when hovered.```jsx
<>
  <s-tooltip id="delete-button-tooltip">
    <s-text>Delete item permanently</s-text>
  </s-tooltip>
  <s-button interestFor="delete-button-tooltip">
    <s-icon tone="neutral" type="info" />
  </s-button>
</>
```

```html
<s-tooltip id="delete-button-tooltip">
  <s-text>Delete item permanently</s-text>
</s-tooltip>
<s-button interestFor="delete-button-tooltip">
  <s-icon tone="neutral" type="info"></s-icon>
</s-button>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: flex; justify-content: center; align-items: center; gap: 0.5rem; min-height: 200px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
  <s-tooltip id="delete-button-tooltip">
    <s-text>Delete item permanently</s-text>
  </s-tooltip>
  <s-button interestFor="delete-button-tooltip">
    <s-icon tone="neutral" type="info" />
  </s-button>
</>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Slots

### TooltipSlots

### children

value: `HTMLElement`

The content of the Tooltip.

Only accepts `Text`, `Paragraph` components, and raw `textContent`.

## Examples

Displays helpful information in a small overlay when users hover or focus on an element. Use to provide additional context without cluttering the interface.


### Basic usage

Demonstrates a simple tooltip that provides additional context for a text element when hovered or focused.```jsx
<>
  <s-tooltip id="shipping-status-tooltip">
    <s-text>This order has shipping labels.</s-text>
  </s-tooltip>
  <s-text interestFor="shipping-status-tooltip">Shipping status</s-text>
</>
```

```html
<s-tooltip id="shipping-status-tooltip">
  <s-text>This order has shipping labels.</s-text>
</s-tooltip>
<s-text interestFor="shipping-status-tooltip">Shipping status</s-text>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: flex; justify-content: center; align-items: center; gap: 0.5rem; min-height: 200px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
  <s-tooltip id="shipping-status-tooltip">
    <s-text>This order has shipping labels.</s-text>
  </s-tooltip>
  <s-text interestFor="shipping-status-tooltip">Shipping status</s-text>
</>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how to add a tooltip to an icon button, providing a clear explanation of the button's action when hovered.```jsx
<>
  <s-tooltip id="delete-button-tooltip">
    <s-text>Delete item permanently</s-text>
  </s-tooltip>
  <s-button interestFor="delete-button-tooltip">
    <s-icon tone="neutral" type="info" />
  </s-button>
</>
```

```html
<s-tooltip id="delete-button-tooltip">
  <s-text>Delete item permanently</s-text>
</s-tooltip>
<s-button interestFor="delete-button-tooltip">
  <s-icon tone="neutral" type="info"></s-icon>
</s-button>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: flex; justify-content: center; align-items: center; gap: 0.5rem; min-height: 200px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
  <s-tooltip id="delete-button-tooltip">
    <s-text>Delete item permanently</s-text>
  </s-tooltip>
  <s-button interestFor="delete-button-tooltip">
    <s-icon tone="neutral" type="info" />
  </s-button>
</>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Examples

Displays helpful information in a small overlay when users hover or focus on an element. Use to provide additional context without cluttering the interface.


### Basic usage

Demonstrates a simple tooltip that provides additional context for a text element when hovered or focused.```jsx
<>
  <s-tooltip id="shipping-status-tooltip">
    <s-text>This order has shipping labels.</s-text>
  </s-tooltip>
  <s-text interestFor="shipping-status-tooltip">Shipping status</s-text>
</>
```

```html
<s-tooltip id="shipping-status-tooltip">
  <s-text>This order has shipping labels.</s-text>
</s-tooltip>
<s-text interestFor="shipping-status-tooltip">Shipping status</s-text>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: flex; justify-content: center; align-items: center; gap: 0.5rem; min-height: 200px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
  <s-tooltip id="shipping-status-tooltip">
    <s-text>This order has shipping labels.</s-text>
  </s-tooltip>
  <s-text interestFor="shipping-status-tooltip">Shipping status</s-text>
</>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how to add a tooltip to an icon button, providing a clear explanation of the button's action when hovered.```jsx
<>
  <s-tooltip id="delete-button-tooltip">
    <s-text>Delete item permanently</s-text>
  </s-tooltip>
  <s-button interestFor="delete-button-tooltip">
    <s-icon tone="neutral" type="info" />
  </s-button>
</>
```

```html
<s-tooltip id="delete-button-tooltip">
  <s-text>Delete item permanently</s-text>
</s-tooltip>
<s-button interestFor="delete-button-tooltip">
  <s-icon tone="neutral" type="info"></s-icon>
</s-button>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: flex; justify-content: center; align-items: center; gap: 0.5rem; min-height: 200px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
  <s-tooltip id="delete-button-tooltip">
    <s-text>Delete item permanently</s-text>
  </s-tooltip>
  <s-button interestFor="delete-button-tooltip">
    <s-icon tone="neutral" type="info" />
  </s-button>
</>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

