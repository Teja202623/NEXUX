# QueryContainer

Establishes a query container for responsive design. Use `s-query-container` to define an element as a containment context, enabling child components or styles to adapt based on the container’s size.

```jsx
<s-query-container>
  <s-box
    padding="@container (inline-size > 500px) large-500, none"
    background="strong"
  >
    Padding is applied when the inline-size > 500px
  </s-box>
</s-query-container>
```

```html
<s-query-container>
  <s-box
    padding="@container (inline-size > 500px) large-500, none"
    background="strong"
  >
    Padding is applied when the inline-size '>' 500px
  </s-box>
</s-query-container>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-query-container>
  <s-box
    padding="@container (inline-size > 500px) large-500, none"
    background="strong"
  >
    Padding is applied when the inline-size > 500px
  </s-box>
</s-query-container>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Properties

Use to define an element as a containment context, enabling child components or styles to adapt based on the container’s size.

### QueryContainer

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


### containerName

value: `string`

The name of the container, which can be used in your container queries to target this container specifically.

We place the container name of `s-default` on every container. Because of this, it is not required to add a `containerName` identifier in your queries. For example, a `@container (inline-size <= 300px) none, auto` query is equivalent to `@container s-default (inline-size <= 300px) none, auto`.

Any value set in `containerName` will be set alongside alongside `s-default`. For example, `containerName="my-container-name"` will result in a value of `s-default my-container-name` set on the `container-name` CSS property of the rendered HTML.

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

Establishes a query container for responsive design. Use `s-query-container` to define an element as a containment context, enabling child components or styles to adapt based on the container’s size.


### Basic usage

Demonstrates the simplest way to use QueryContainer, wrapping content with a named container context.```jsx
<>
<s-box inlineSize="375px">
  <s-query-container id="product-section" containerName="product">
    <s-box padding="@container product (inline-size > 400px) large-500, none" borderWidth="base" borderColor="base" borderRadius="base">
      <s-text>Padding is different depending on the container size</s-text>
    </s-box>
  </s-query-container>
</s-box>

<s-box inlineSize="450px">
  <s-query-container id="product-section" containerName="product">
    <s-box padding="@container product (inline-size > 400px) large-500, none" borderWidth="base" borderColor="base" borderRadius="base">
      <s-text>Padding is different depending on the container size</s-text>
    </s-box>
  </s-query-container>
</s-box>
</>
```

```html
<s-box inlineSize="375px">
  <s-query-container id="product-section" containerName="product">
    <s-box padding="@container product (inline-size > 400px) large-500, none">
      <s-text>Padding is different depending on the container size</s-text>
    </s-box>
  </s-query-container>
</s-box>

<s-box inlineSize="450px">
  <s-query-container id="product-section" containerName="product">
    <s-box padding="@container product (inline-size > 400px) large-500, none">
      <s-text>Padding is different depending on the container size</s-text>
    </s-box>
  </s-query-container>
</s-box>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
<s-box inlineSize="375px">
  <s-query-container id="product-section" containerName="product">
    <s-box padding="@container product (inline-size > 400px) large-500, none" borderWidth="base" borderColor="base" borderRadius="base">
      <s-text>Padding is different depending on the container size</s-text>
    </s-box>
  </s-query-container>
</s-box>

<s-box inlineSize="450px">
  <s-query-container id="product-section" containerName="product">
    <s-box padding="@container product (inline-size > 400px) large-500, none" borderWidth="base" borderColor="base" borderRadius="base">
      <s-text>Padding is different depending on the container size</s-text>
    </s-box>
  </s-query-container>
</s-box>
</>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Slots

### QueryContainerSlots

### children

value: `HTMLElement`

The content of the container.

## Examples

Establishes a query container for responsive design. Use `s-query-container` to define an element as a containment context, enabling child components or styles to adapt based on the container’s size.


### Basic usage

Demonstrates the simplest way to use QueryContainer, wrapping content with a named container context.```jsx
<>
<s-box inlineSize="375px">
  <s-query-container id="product-section" containerName="product">
    <s-box padding="@container product (inline-size > 400px) large-500, none" borderWidth="base" borderColor="base" borderRadius="base">
      <s-text>Padding is different depending on the container size</s-text>
    </s-box>
  </s-query-container>
</s-box>

<s-box inlineSize="450px">
  <s-query-container id="product-section" containerName="product">
    <s-box padding="@container product (inline-size > 400px) large-500, none" borderWidth="base" borderColor="base" borderRadius="base">
      <s-text>Padding is different depending on the container size</s-text>
    </s-box>
  </s-query-container>
</s-box>
</>
```

```html
<s-box inlineSize="375px">
  <s-query-container id="product-section" containerName="product">
    <s-box padding="@container product (inline-size > 400px) large-500, none">
      <s-text>Padding is different depending on the container size</s-text>
    </s-box>
  </s-query-container>
</s-box>

<s-box inlineSize="450px">
  <s-query-container id="product-section" containerName="product">
    <s-box padding="@container product (inline-size > 400px) large-500, none">
      <s-text>Padding is different depending on the container size</s-text>
    </s-box>
  </s-query-container>
</s-box>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
<s-box inlineSize="375px">
  <s-query-container id="product-section" containerName="product">
    <s-box padding="@container product (inline-size > 400px) large-500, none" borderWidth="base" borderColor="base" borderRadius="base">
      <s-text>Padding is different depending on the container size</s-text>
    </s-box>
  </s-query-container>
</s-box>

<s-box inlineSize="450px">
  <s-query-container id="product-section" containerName="product">
    <s-box padding="@container product (inline-size > 400px) large-500, none" borderWidth="base" borderColor="base" borderRadius="base">
      <s-text>Padding is different depending on the container size</s-text>
    </s-box>
  </s-query-container>
</s-box>
</>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Examples

Establishes a query container for responsive design. Use `s-query-container` to define an element as a containment context, enabling child components or styles to adapt based on the container’s size.


### Basic usage

Demonstrates the simplest way to use QueryContainer, wrapping content with a named container context.```jsx
<>
<s-box inlineSize="375px">
  <s-query-container id="product-section" containerName="product">
    <s-box padding="@container product (inline-size > 400px) large-500, none" borderWidth="base" borderColor="base" borderRadius="base">
      <s-text>Padding is different depending on the container size</s-text>
    </s-box>
  </s-query-container>
</s-box>

<s-box inlineSize="450px">
  <s-query-container id="product-section" containerName="product">
    <s-box padding="@container product (inline-size > 400px) large-500, none" borderWidth="base" borderColor="base" borderRadius="base">
      <s-text>Padding is different depending on the container size</s-text>
    </s-box>
  </s-query-container>
</s-box>
</>
```

```html
<s-box inlineSize="375px">
  <s-query-container id="product-section" containerName="product">
    <s-box padding="@container product (inline-size > 400px) large-500, none">
      <s-text>Padding is different depending on the container size</s-text>
    </s-box>
  </s-query-container>
</s-box>

<s-box inlineSize="450px">
  <s-query-container id="product-section" containerName="product">
    <s-box padding="@container product (inline-size > 400px) large-500, none">
      <s-text>Padding is different depending on the container size</s-text>
    </s-box>
  </s-query-container>
</s-box>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
<s-box inlineSize="375px">
  <s-query-container id="product-section" containerName="product">
    <s-box padding="@container product (inline-size > 400px) large-500, none" borderWidth="base" borderColor="base" borderRadius="base">
      <s-text>Padding is different depending on the container size</s-text>
    </s-box>
  </s-query-container>
</s-box>

<s-box inlineSize="450px">
  <s-query-container id="product-section" containerName="product">
    <s-box padding="@container product (inline-size > 400px) large-500, none" borderWidth="base" borderColor="base" borderRadius="base">
      <s-text>Padding is different depending on the container size</s-text>
    </s-box>
  </s-query-container>
</s-box>
</>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

