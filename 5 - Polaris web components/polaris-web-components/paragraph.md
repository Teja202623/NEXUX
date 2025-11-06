# Paragraph

Displays a block of text and can contain inline elements such as buttons, links, or emphasized text. Use to present standalone blocks of content as opposed to inline text.

```jsx
<s-paragraph>
  Shopify POS is the easiest way to sell your products in person. Available for
  iPad, iPhone, and Android.
</s-paragraph>
```

```html
<s-paragraph>
  Shopify POS is the easiest way to sell your products in person. Available for
  iPad, iPhone, and Android.
</s-paragraph>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-paragraph>
  Shopify POS is the easiest way to sell your products in person. Available for
  iPad, iPhone, and Android.
</s-paragraph>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Properties

### Paragraph

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

### color

value: `"base" | "subdued"`

Modify the color to be more or less intense.

### connectedCallback

value: `() => void`


### dir

value: `"" | "auto" | "ltr" | "rtl"`

Indicates the directionality of the element’s text.

- `ltr`: languages written from left to right (e.g. English)
- `rtl`: languages written from right to left (e.g. Arabic)
- `auto`: the user agent determines the direction based on the content
- `''`: direction is inherited from parent elements (equivalent to not setting the attribute)

### disconnectedCallback

value: `() => void`


### fontVariantNumeric

value: `"auto" | "normal" | "tabular-nums"`

Set the numeric properties of the font.

### lineClamp

value: `number`

Truncates the text content to the specified number of lines.

### queueRender

value: `() => void`

Queue a run of the render function. You shouldn't need to call this manually - it should be handled by changes to

### setAttribute

value: `(name: string, value: string) => void`


### tone

value: `"info" | "success" | "warning" | "critical" | "auto" | "neutral" | "caution"`

Sets the tone of the component, based on the intention of the information being conveyed.

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

Displays a block of text and can contain inline elements such as buttons, links, or emphasized text. Use to present standalone blocks of content as opposed to inline text.


### Basic usage

Demonstrates a simple paragraph with default styling, showing how to use the paragraph component for standard text content.```jsx
<s-paragraph>
  Track inventory across all your retail locations in real-time.
</s-paragraph>
```

```html
<s-paragraph>
  Track inventory across all your retail locations in real-time.
</s-paragraph>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-paragraph>
  Track inventory across all your retail locations in real-time.
</s-paragraph>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates how to apply different tones and color variations to convey different types of information, such as informational and success messages.```jsx
<s-section>
  <s-paragraph tone="info" color="base">
    Your order will be processed within 2-3 business days.
  </s-paragraph>

  <s-paragraph tone="success" color="subdued">
    Payment successfully processed.
  </s-paragraph>
</s-section>
```

```html
<s-section>
  <s-paragraph tone="info" color="base">
    Your order will be processed within 2-3 business days.
  </s-paragraph>

  <s-paragraph tone="success" color="subdued">
    Payment successfully processed.
  </s-paragraph>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section>
  <s-paragraph tone="info" color="base">
    Your order will be processed within 2-3 business days.
  </s-paragraph>

  <s-paragraph tone="success" color="subdued">
    Payment successfully processed.
  </s-paragraph>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how to limit the number of lines displayed using the lineClamp prop, which truncates long text with an ellipsis after the specified number of lines.```jsx
<s-box inlineSize="300px">
  <s-paragraph lineClamp={1}>
    Premium organic cotton t-shirt featuring sustainable manufacturing
    processes, ethically sourced materials, and carbon-neutral shipping.
    Available in multiple colors and sizes with customization options for your
    brand.
  </s-paragraph>
</s-box>
```

```html
<s-box inlineSize="300px">
  <s-paragraph lineClamp="1">
    Premium organic cotton t-shirt featuring sustainable manufacturing
    processes, ethically sourced materials, and carbon-neutral shipping.
    Available in multiple colors and sizes with customization options for your
    brand.
  </s-paragraph>
</s-box>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-box inlineSize="300px">
  <s-paragraph lineClamp={1}>
    Premium organic cotton t-shirt featuring sustainable manufacturing
    processes, ethically sourced materials, and carbon-neutral shipping.
    Available in multiple colors and sizes with customization options for your
    brand.
  </s-paragraph>
</s-box>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates the use of tabular numbers with fontVariantNumeric, ensuring consistent alignment and readability for numerical data.```jsx
<s-paragraph fontVariantNumeric="tabular-nums">
  Orders: 1,234 Revenue: $45,678.90 Customers: 890
</s-paragraph>
```

```html
<s-paragraph fontVariantNumeric="tabular-nums">
  Orders: 1,234 Revenue: $45,678.90 Customers: 890
</s-paragraph>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-paragraph fontVariantNumeric="tabular-nums">
  Orders: 1,234 Revenue: \$45,678.90 Customers: 890
</s-paragraph>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates right-to-left (RTL) text rendering, showing how the paragraph component supports internationalization and different text directions.```jsx
<s-paragraph dir="rtl">
  محتوى النص باللغة العربية
</s-paragraph>
```

```html
<s-paragraph dir="rtl">
  محتوى النص باللغة العربية
</s-paragraph>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-paragraph dir="rtl">
  محتوى النص باللغة العربية
</s-paragraph>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how to use the accessibilityVisibility prop to create text that is exclusively available to screen readers, improving accessibility for assistive technologies.```jsx
<s-paragraph accessibilityVisibility="exclusive">
  Table sorted by date, newest first.
</s-paragraph>
```

```html
<s-paragraph accessibilityVisibility="exclusive">
  Table sorted by date, newest first.
</s-paragraph>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-paragraph accessibilityVisibility="exclusive">
  Table sorted by date, newest first.
</s-paragraph>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Showcases various tone and color combinations for different administrative messages, illustrating how paragraph can communicate different types of information in a user interface.```jsx
<s-section>
  <s-paragraph tone="success" color="base">
    Payment successfully processed and order confirmed.
  </s-paragraph>

  <s-paragraph tone="warning" color="base">
    Inventory levels are running low for this product.
  </s-paragraph>

  <s-paragraph tone="critical" color="base">
    This order requires immediate attention due to shipping delays.
  </s-paragraph>

  <s-paragraph tone="info" color="base">
    Customer requested gift wrapping for this order.
  </s-paragraph>

  <s-paragraph tone="caution" color="base">
    Review shipping address before processing.
  </s-paragraph>
</s-section>
```

```html
<s-section>
  <s-paragraph tone="success" color="base">
    Payment successfully processed and order confirmed.
  </s-paragraph>

  <s-paragraph tone="warning" color="base">
    Inventory levels are running low for this product.
  </s-paragraph>

  <s-paragraph tone="critical" color="base">
    This order requires immediate attention due to shipping delays.
  </s-paragraph>

  <s-paragraph tone="info" color="base">
    Customer requested gift wrapping for this order.
  </s-paragraph>

  <s-paragraph tone="caution" color="base">
    Review shipping address before processing.
  </s-paragraph>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section>
  <s-paragraph tone="success" color="base">
    Payment successfully processed and order confirmed.
  </s-paragraph>

  <s-paragraph tone="warning" color="base">
    Inventory levels are running low for this product.
  </s-paragraph>

  <s-paragraph tone="critical" color="base">
    This order requires immediate attention due to shipping delays.
  </s-paragraph>

  <s-paragraph tone="info" color="base">
    Customer requested gift wrapping for this order.
  </s-paragraph>

  <s-paragraph tone="caution" color="base">
    Review shipping address before processing.
  </s-paragraph>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Slots

### ParagraphSlots

### children

value: `HTMLElement`

The content of the Paragraph.

## Examples

Displays a block of text and can contain inline elements such as buttons, links, or emphasized text. Use to present standalone blocks of content as opposed to inline text.


### Basic usage

Demonstrates a simple paragraph with default styling, showing how to use the paragraph component for standard text content.```jsx
<s-paragraph>
  Track inventory across all your retail locations in real-time.
</s-paragraph>
```

```html
<s-paragraph>
  Track inventory across all your retail locations in real-time.
</s-paragraph>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-paragraph>
  Track inventory across all your retail locations in real-time.
</s-paragraph>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates how to apply different tones and color variations to convey different types of information, such as informational and success messages.```jsx
<s-section>
  <s-paragraph tone="info" color="base">
    Your order will be processed within 2-3 business days.
  </s-paragraph>

  <s-paragraph tone="success" color="subdued">
    Payment successfully processed.
  </s-paragraph>
</s-section>
```

```html
<s-section>
  <s-paragraph tone="info" color="base">
    Your order will be processed within 2-3 business days.
  </s-paragraph>

  <s-paragraph tone="success" color="subdued">
    Payment successfully processed.
  </s-paragraph>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section>
  <s-paragraph tone="info" color="base">
    Your order will be processed within 2-3 business days.
  </s-paragraph>

  <s-paragraph tone="success" color="subdued">
    Payment successfully processed.
  </s-paragraph>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how to limit the number of lines displayed using the lineClamp prop, which truncates long text with an ellipsis after the specified number of lines.```jsx
<s-box inlineSize="300px">
  <s-paragraph lineClamp={1}>
    Premium organic cotton t-shirt featuring sustainable manufacturing
    processes, ethically sourced materials, and carbon-neutral shipping.
    Available in multiple colors and sizes with customization options for your
    brand.
  </s-paragraph>
</s-box>
```

```html
<s-box inlineSize="300px">
  <s-paragraph lineClamp="1">
    Premium organic cotton t-shirt featuring sustainable manufacturing
    processes, ethically sourced materials, and carbon-neutral shipping.
    Available in multiple colors and sizes with customization options for your
    brand.
  </s-paragraph>
</s-box>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-box inlineSize="300px">
  <s-paragraph lineClamp={1}>
    Premium organic cotton t-shirt featuring sustainable manufacturing
    processes, ethically sourced materials, and carbon-neutral shipping.
    Available in multiple colors and sizes with customization options for your
    brand.
  </s-paragraph>
</s-box>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates the use of tabular numbers with fontVariantNumeric, ensuring consistent alignment and readability for numerical data.```jsx
<s-paragraph fontVariantNumeric="tabular-nums">
  Orders: 1,234 Revenue: $45,678.90 Customers: 890
</s-paragraph>
```

```html
<s-paragraph fontVariantNumeric="tabular-nums">
  Orders: 1,234 Revenue: $45,678.90 Customers: 890
</s-paragraph>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-paragraph fontVariantNumeric="tabular-nums">
  Orders: 1,234 Revenue: \$45,678.90 Customers: 890
</s-paragraph>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates right-to-left (RTL) text rendering, showing how the paragraph component supports internationalization and different text directions.```jsx
<s-paragraph dir="rtl">
  محتوى النص باللغة العربية
</s-paragraph>
```

```html
<s-paragraph dir="rtl">
  محتوى النص باللغة العربية
</s-paragraph>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-paragraph dir="rtl">
  محتوى النص باللغة العربية
</s-paragraph>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how to use the accessibilityVisibility prop to create text that is exclusively available to screen readers, improving accessibility for assistive technologies.```jsx
<s-paragraph accessibilityVisibility="exclusive">
  Table sorted by date, newest first.
</s-paragraph>
```

```html
<s-paragraph accessibilityVisibility="exclusive">
  Table sorted by date, newest first.
</s-paragraph>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-paragraph accessibilityVisibility="exclusive">
  Table sorted by date, newest first.
</s-paragraph>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Showcases various tone and color combinations for different administrative messages, illustrating how paragraph can communicate different types of information in a user interface.```jsx
<s-section>
  <s-paragraph tone="success" color="base">
    Payment successfully processed and order confirmed.
  </s-paragraph>

  <s-paragraph tone="warning" color="base">
    Inventory levels are running low for this product.
  </s-paragraph>

  <s-paragraph tone="critical" color="base">
    This order requires immediate attention due to shipping delays.
  </s-paragraph>

  <s-paragraph tone="info" color="base">
    Customer requested gift wrapping for this order.
  </s-paragraph>

  <s-paragraph tone="caution" color="base">
    Review shipping address before processing.
  </s-paragraph>
</s-section>
```

```html
<s-section>
  <s-paragraph tone="success" color="base">
    Payment successfully processed and order confirmed.
  </s-paragraph>

  <s-paragraph tone="warning" color="base">
    Inventory levels are running low for this product.
  </s-paragraph>

  <s-paragraph tone="critical" color="base">
    This order requires immediate attention due to shipping delays.
  </s-paragraph>

  <s-paragraph tone="info" color="base">
    Customer requested gift wrapping for this order.
  </s-paragraph>

  <s-paragraph tone="caution" color="base">
    Review shipping address before processing.
  </s-paragraph>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section>
  <s-paragraph tone="success" color="base">
    Payment successfully processed and order confirmed.
  </s-paragraph>

  <s-paragraph tone="warning" color="base">
    Inventory levels are running low for this product.
  </s-paragraph>

  <s-paragraph tone="critical" color="base">
    This order requires immediate attention due to shipping delays.
  </s-paragraph>

  <s-paragraph tone="info" color="base">
    Customer requested gift wrapping for this order.
  </s-paragraph>

  <s-paragraph tone="caution" color="base">
    Review shipping address before processing.
  </s-paragraph>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Examples

Displays a block of text and can contain inline elements such as buttons, links, or emphasized text. Use to present standalone blocks of content as opposed to inline text.


### Basic usage

Demonstrates a simple paragraph with default styling, showing how to use the paragraph component for standard text content.```jsx
<s-paragraph>
  Track inventory across all your retail locations in real-time.
</s-paragraph>
```

```html
<s-paragraph>
  Track inventory across all your retail locations in real-time.
</s-paragraph>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-paragraph>
  Track inventory across all your retail locations in real-time.
</s-paragraph>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates how to apply different tones and color variations to convey different types of information, such as informational and success messages.```jsx
<s-section>
  <s-paragraph tone="info" color="base">
    Your order will be processed within 2-3 business days.
  </s-paragraph>

  <s-paragraph tone="success" color="subdued">
    Payment successfully processed.
  </s-paragraph>
</s-section>
```

```html
<s-section>
  <s-paragraph tone="info" color="base">
    Your order will be processed within 2-3 business days.
  </s-paragraph>

  <s-paragraph tone="success" color="subdued">
    Payment successfully processed.
  </s-paragraph>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section>
  <s-paragraph tone="info" color="base">
    Your order will be processed within 2-3 business days.
  </s-paragraph>

  <s-paragraph tone="success" color="subdued">
    Payment successfully processed.
  </s-paragraph>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how to limit the number of lines displayed using the lineClamp prop, which truncates long text with an ellipsis after the specified number of lines.```jsx
<s-box inlineSize="300px">
  <s-paragraph lineClamp={1}>
    Premium organic cotton t-shirt featuring sustainable manufacturing
    processes, ethically sourced materials, and carbon-neutral shipping.
    Available in multiple colors and sizes with customization options for your
    brand.
  </s-paragraph>
</s-box>
```

```html
<s-box inlineSize="300px">
  <s-paragraph lineClamp="1">
    Premium organic cotton t-shirt featuring sustainable manufacturing
    processes, ethically sourced materials, and carbon-neutral shipping.
    Available in multiple colors and sizes with customization options for your
    brand.
  </s-paragraph>
</s-box>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-box inlineSize="300px">
  <s-paragraph lineClamp={1}>
    Premium organic cotton t-shirt featuring sustainable manufacturing
    processes, ethically sourced materials, and carbon-neutral shipping.
    Available in multiple colors and sizes with customization options for your
    brand.
  </s-paragraph>
</s-box>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates the use of tabular numbers with fontVariantNumeric, ensuring consistent alignment and readability for numerical data.```jsx
<s-paragraph fontVariantNumeric="tabular-nums">
  Orders: 1,234 Revenue: $45,678.90 Customers: 890
</s-paragraph>
```

```html
<s-paragraph fontVariantNumeric="tabular-nums">
  Orders: 1,234 Revenue: $45,678.90 Customers: 890
</s-paragraph>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-paragraph fontVariantNumeric="tabular-nums">
  Orders: 1,234 Revenue: \$45,678.90 Customers: 890
</s-paragraph>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates right-to-left (RTL) text rendering, showing how the paragraph component supports internationalization and different text directions.```jsx
<s-paragraph dir="rtl">
  محتوى النص باللغة العربية
</s-paragraph>
```

```html
<s-paragraph dir="rtl">
  محتوى النص باللغة العربية
</s-paragraph>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-paragraph dir="rtl">
  محتوى النص باللغة العربية
</s-paragraph>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how to use the accessibilityVisibility prop to create text that is exclusively available to screen readers, improving accessibility for assistive technologies.```jsx
<s-paragraph accessibilityVisibility="exclusive">
  Table sorted by date, newest first.
</s-paragraph>
```

```html
<s-paragraph accessibilityVisibility="exclusive">
  Table sorted by date, newest first.
</s-paragraph>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-paragraph accessibilityVisibility="exclusive">
  Table sorted by date, newest first.
</s-paragraph>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Showcases various tone and color combinations for different administrative messages, illustrating how paragraph can communicate different types of information in a user interface.```jsx
<s-section>
  <s-paragraph tone="success" color="base">
    Payment successfully processed and order confirmed.
  </s-paragraph>

  <s-paragraph tone="warning" color="base">
    Inventory levels are running low for this product.
  </s-paragraph>

  <s-paragraph tone="critical" color="base">
    This order requires immediate attention due to shipping delays.
  </s-paragraph>

  <s-paragraph tone="info" color="base">
    Customer requested gift wrapping for this order.
  </s-paragraph>

  <s-paragraph tone="caution" color="base">
    Review shipping address before processing.
  </s-paragraph>
</s-section>
```

```html
<s-section>
  <s-paragraph tone="success" color="base">
    Payment successfully processed and order confirmed.
  </s-paragraph>

  <s-paragraph tone="warning" color="base">
    Inventory levels are running low for this product.
  </s-paragraph>

  <s-paragraph tone="critical" color="base">
    This order requires immediate attention due to shipping delays.
  </s-paragraph>

  <s-paragraph tone="info" color="base">
    Customer requested gift wrapping for this order.
  </s-paragraph>

  <s-paragraph tone="caution" color="base">
    Review shipping address before processing.
  </s-paragraph>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section>
  <s-paragraph tone="success" color="base">
    Payment successfully processed and order confirmed.
  </s-paragraph>

  <s-paragraph tone="warning" color="base">
    Inventory levels are running low for this product.
  </s-paragraph>

  <s-paragraph tone="critical" color="base">
    This order requires immediate attention due to shipping delays.
  </s-paragraph>

  <s-paragraph tone="info" color="base">
    Customer requested gift wrapping for this order.
  </s-paragraph>

  <s-paragraph tone="caution" color="base">
    Review shipping address before processing.
  </s-paragraph>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

