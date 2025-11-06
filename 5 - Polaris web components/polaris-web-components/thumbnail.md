# Thumbnail

Display a small preview image representing content, products, or media.

```jsx
<s-thumbnail
  alt="White sneakers"
  src="https://cdn.shopify.com/static/images/polaris/thumbnail-wc_src.jpg"
 />
```

```html
<s-thumbnail
  alt="White sneakers"
  src="https://cdn.shopify.com/static/images/polaris/thumbnail-wc_src.jpg"
></s-thumbnail>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-thumbnail
  alt="White sneakers"
  src="https://cdn.shopify.com/static/images/polaris/thumbnail-wc_src.jpg"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Properties

### Thumbnail

### adoptedCallback

value: `() => void`


### alt

value: `string`

An alternative text description that describe the image for the reader to understand what it is about. It is extremely useful for both users using assistive technology and sighted users. A well written description provides people with visual impairments the ability to participate in consuming non-text content. When a screen readers encounters an `s-image`, the description is read and announced aloud. If an image fails to load, potentially due to a poor connection, the `alt` is displayed on screen instead. This has the benefit of letting a sighted buyer know an image was meant to load here, but as an alternative, they’re still able to consume the text content. Read [considerations when writing alternative text](https://www.shopify.com/ca/blog/image-alt-text#4) to learn more.

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


### size

value: `"small" | "small-200" | "small-100" | "base" | "large" | "large-100"`

Adjusts the size the product thumbnail image.

### src

value: `string`

The image source (either a remote URL or a local file resource).

When the image is loading or no `src` is provided, a placeholder will be rendered.

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

Display a small preview image representing content, products, or media.


### Basic usage

Demonstrates a basic thumbnail component with a product image, showing the default base size and an alt text for accessibility.```jsx
<s-thumbnail
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  alt="Product preview"
  size="base"
 />
```

```html
<s-thumbnail
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  alt="Product preview"
  size="base"
></s-thumbnail>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-thumbnail
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  alt="Product preview"
  size="base"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows the thumbnail component in an empty state, displaying a placeholder icon when no image source is provided.```jsx
<s-thumbnail alt="No image available" size="base" />
```

```html
<s-thumbnail alt="No image available" size="base"></s-thumbnail>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-thumbnail alt="No image available" size="base" />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates the various size options for the thumbnail component, showcasing small-200, base, and large sizes in a stack layout.```jsx
<s-stack gap="large-100">
  <s-thumbnail
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Small thumbnail"
    size="small-200"
   />
  <s-thumbnail
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Base thumbnail"
    size="base"
   />
  <s-thumbnail
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Large thumbnail"
    size="large"
   />
</s-stack>
```

```html
<s-stack gap="large-100">
  <s-thumbnail
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Small thumbnail"
    size="small-200"
  ></s-thumbnail>
  <s-thumbnail
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Base thumbnail"
    size="base"
  ></s-thumbnail>
  <s-thumbnail
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Large thumbnail"
    size="large"
  ></s-thumbnail>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="large-100">
  <s-thumbnail
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Small thumbnail"
    size="small-200"
   />
  <s-thumbnail
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Base thumbnail"
    size="base"
   />
  <s-thumbnail
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Large thumbnail"
    size="large"
   />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates how event handlers like onload or onerror can be attached to the thumbnail component via JavaScript to handle image loading states.```jsx
const [loading, setLoading] = useState(true)

return (
  <s-stack direction="inline" gap="base" alignItems="center">
    <s-thumbnail
      src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
      alt="Product"
      size="small-200"
      onLoad={() => setLoading(false)}
    />
    <s-paragraph>{loading ? 'Loading...' : 'Image loaded'}</s-paragraph>
 </s-stack>
)
```

```html
  <s-stack direction="inline" gap="base">
    <s-thumbnail
      src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
      alt="Product"
      size="small-200"
      onLoad="setLoading(false)"
    />
    <s-paragraph>Image loaded</s-paragraph>
 </s-stack>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { const [loading, setLoading] = useState(true)

return (
  <s-stack direction="inline" gap="base" alignItems="center">
    <s-thumbnail
      src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
      alt="Product"
      size="small-200"
      onLoad={() => setLoading(false)}
    />
    <s-paragraph>{loading ? 'Loading...' : 'Image loaded'}</s-paragraph>
 </s-stack>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Events

Learn more about [registering events](https://shopify.dev/docs/api/app-home/using-polaris-components#event-handling).

### ThumbnailEvents

### error

value: `OnErrorEventHandler`


### load

value: `CallbackEventListener<typeof tagName> | null`

  - CallbackEventListener: (EventListener & {
      (event: CallbackEvent<T>): void;
    }) | null
  - CallbackEvent: Event & {
  currentTarget: HTMLElementTagNameMap[T];
}

## Examples

Display a small preview image representing content, products, or media.


### Basic usage

Demonstrates a basic thumbnail component with a product image, showing the default base size and an alt text for accessibility.```jsx
<s-thumbnail
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  alt="Product preview"
  size="base"
 />
```

```html
<s-thumbnail
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  alt="Product preview"
  size="base"
></s-thumbnail>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-thumbnail
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  alt="Product preview"
  size="base"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows the thumbnail component in an empty state, displaying a placeholder icon when no image source is provided.```jsx
<s-thumbnail alt="No image available" size="base" />
```

```html
<s-thumbnail alt="No image available" size="base"></s-thumbnail>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-thumbnail alt="No image available" size="base" />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates the various size options for the thumbnail component, showcasing small-200, base, and large sizes in a stack layout.```jsx
<s-stack gap="large-100">
  <s-thumbnail
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Small thumbnail"
    size="small-200"
   />
  <s-thumbnail
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Base thumbnail"
    size="base"
   />
  <s-thumbnail
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Large thumbnail"
    size="large"
   />
</s-stack>
```

```html
<s-stack gap="large-100">
  <s-thumbnail
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Small thumbnail"
    size="small-200"
  ></s-thumbnail>
  <s-thumbnail
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Base thumbnail"
    size="base"
  ></s-thumbnail>
  <s-thumbnail
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Large thumbnail"
    size="large"
  ></s-thumbnail>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="large-100">
  <s-thumbnail
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Small thumbnail"
    size="small-200"
   />
  <s-thumbnail
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Base thumbnail"
    size="base"
   />
  <s-thumbnail
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Large thumbnail"
    size="large"
   />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates how event handlers like onload or onerror can be attached to the thumbnail component via JavaScript to handle image loading states.```jsx
const [loading, setLoading] = useState(true)

return (
  <s-stack direction="inline" gap="base" alignItems="center">
    <s-thumbnail
      src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
      alt="Product"
      size="small-200"
      onLoad={() => setLoading(false)}
    />
    <s-paragraph>{loading ? 'Loading...' : 'Image loaded'}</s-paragraph>
 </s-stack>
)
```

```html
  <s-stack direction="inline" gap="base">
    <s-thumbnail
      src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
      alt="Product"
      size="small-200"
      onLoad="setLoading(false)"
    />
    <s-paragraph>Image loaded</s-paragraph>
 </s-stack>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { const [loading, setLoading] = useState(true)

return (
  <s-stack direction="inline" gap="base" alignItems="center">
    <s-thumbnail
      src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
      alt="Product"
      size="small-200"
      onLoad={() => setLoading(false)}
    />
    <s-paragraph>{loading ? 'Loading...' : 'Image loaded'}</s-paragraph>
 </s-stack>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Examples

Display a small preview image representing content, products, or media.


### Basic usage

Demonstrates a basic thumbnail component with a product image, showing the default base size and an alt text for accessibility.```jsx
<s-thumbnail
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  alt="Product preview"
  size="base"
 />
```

```html
<s-thumbnail
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  alt="Product preview"
  size="base"
></s-thumbnail>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-thumbnail
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  alt="Product preview"
  size="base"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows the thumbnail component in an empty state, displaying a placeholder icon when no image source is provided.```jsx
<s-thumbnail alt="No image available" size="base" />
```

```html
<s-thumbnail alt="No image available" size="base"></s-thumbnail>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-thumbnail alt="No image available" size="base" />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates the various size options for the thumbnail component, showcasing small-200, base, and large sizes in a stack layout.```jsx
<s-stack gap="large-100">
  <s-thumbnail
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Small thumbnail"
    size="small-200"
   />
  <s-thumbnail
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Base thumbnail"
    size="base"
   />
  <s-thumbnail
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Large thumbnail"
    size="large"
   />
</s-stack>
```

```html
<s-stack gap="large-100">
  <s-thumbnail
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Small thumbnail"
    size="small-200"
  ></s-thumbnail>
  <s-thumbnail
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Base thumbnail"
    size="base"
  ></s-thumbnail>
  <s-thumbnail
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Large thumbnail"
    size="large"
  ></s-thumbnail>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="large-100">
  <s-thumbnail
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Small thumbnail"
    size="small-200"
   />
  <s-thumbnail
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Base thumbnail"
    size="base"
   />
  <s-thumbnail
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Large thumbnail"
    size="large"
   />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates how event handlers like onload or onerror can be attached to the thumbnail component via JavaScript to handle image loading states.```jsx
const [loading, setLoading] = useState(true)

return (
  <s-stack direction="inline" gap="base" alignItems="center">
    <s-thumbnail
      src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
      alt="Product"
      size="small-200"
      onLoad={() => setLoading(false)}
    />
    <s-paragraph>{loading ? 'Loading...' : 'Image loaded'}</s-paragraph>
 </s-stack>
)
```

```html
  <s-stack direction="inline" gap="base">
    <s-thumbnail
      src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
      alt="Product"
      size="small-200"
      onLoad="setLoading(false)"
    />
    <s-paragraph>Image loaded</s-paragraph>
 </s-stack>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { const [loading, setLoading] = useState(true)

return (
  <s-stack direction="inline" gap="base" alignItems="center">
    <s-thumbnail
      src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
      alt="Product"
      size="small-200"
      onLoad={() => setLoading(false)}
    />
    <s-paragraph>{loading ? 'Loading...' : 'Image loaded'}</s-paragraph>
 </s-stack>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

