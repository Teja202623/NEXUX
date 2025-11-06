# UnorderedList

Displays a bulleted list of related items. Use to present collections of items or options where the sequence isn’t critical.

```jsx
<s-unordered-list>
  <s-list-item>Red shirt</s-list-item>
  <s-list-item>Green shirt</s-list-item>
  <s-list-item>Blue shirt</s-list-item>
</s-unordered-list>
```

```html
<s-unordered-list>
  <s-list-item>Red shirt</s-list-item>
  <s-list-item>Green shirt</s-list-item>
  <s-list-item>Blue shirt</s-list-item>
</s-unordered-list>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-unordered-list>
  <s-list-item>Red shirt</s-list-item>
  <s-list-item>Green shirt</s-list-item>
  <s-list-item>Blue shirt</s-list-item>
</s-unordered-list>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Slots

### UnorderedListSlots

### children

value: `HTMLElement`

The items of the UnorderedList.

Only ListItems are accepted.

## Examples

Displays a bulleted list of related items. Use to present collections of items or options where the sequence isn’t critical.


### Basic usage

A standard unordered list with nested items demonstrating hierarchical content structure.```jsx
<s-stack gap="base">
  <s-box borderWidth="small-100" borderRadius="base" padding="base">
    <s-unordered-list>
      <s-list-item>Configure payment settings</s-list-item>
      <s-list-item>
        Set up shipping options
        <s-unordered-list>
          <s-list-item>Domestic shipping rates</s-list-item>
          <s-list-item>International shipping zones</s-list-item>
        </s-unordered-list>
      </s-list-item>
      <s-list-item>Add product descriptions</s-list-item>
    </s-unordered-list>
  </s-box>

  <s-box borderWidth="small-100" borderRadius="base" padding="base">
    <s-unordered-list>
      <s-list-item>Enable online payments</s-list-item>
      <s-list-item>Set up shipping rates</s-list-item>
      <s-list-item>Configure tax settings</s-list-item>
      <s-list-item>Add product descriptions</s-list-item>
    </s-unordered-list>
  </s-box>
</s-stack>
```

```html
<s-stack gap="base">
  <s-box borderWidth="small-100" borderRadius="base" padding="base">
    <s-unordered-list>
      <s-list-item>Configure payment settings</s-list-item>
      <s-list-item>
        Set up shipping options
        <s-unordered-list>
          <s-list-item>Domestic shipping rates</s-list-item>
          <s-list-item>International shipping zones</s-list-item>
        </s-unordered-list>
      </s-list-item>
      <s-list-item>Add product descriptions</s-list-item>
    </s-unordered-list>
  </s-box>

  <s-box borderWidth="small-100" borderRadius="base" padding="base">
    <s-unordered-list>
      <s-list-item>Enable online payments</s-list-item>
      <s-list-item>Set up shipping rates</s-list-item>
      <s-list-item>Configure tax settings</s-list-item>
      <s-list-item>Add product descriptions</s-list-item>
    </s-unordered-list>
  </s-box>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-box borderWidth="small-100" borderRadius="base" padding="base">
    <s-unordered-list>
      <s-list-item>Configure payment settings</s-list-item>
      <s-list-item>
        Set up shipping options
        <s-unordered-list>
          <s-list-item>Domestic shipping rates</s-list-item>
          <s-list-item>International shipping zones</s-list-item>
        </s-unordered-list>
      </s-list-item>
      <s-list-item>Add product descriptions</s-list-item>
    </s-unordered-list>
  </s-box>

  <s-box borderWidth="small-100" borderRadius="base" padding="base">
    <s-unordered-list>
      <s-list-item>Enable online payments</s-list-item>
      <s-list-item>Set up shipping rates</s-list-item>
      <s-list-item>Configure tax settings</s-list-item>
      <s-list-item>Add product descriptions</s-list-item>
    </s-unordered-list>
  </s-box>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## ListItem

Represents a single item within an unordered or ordered list. Use only as a child of `s-unordered-list` or `s-ordered-list` components.

### ListItem

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


## Examples

Displays a bulleted list of related items. Use to present collections of items or options where the sequence isn’t critical.


### Basic usage

A standard unordered list with nested items demonstrating hierarchical content structure.```jsx
<s-stack gap="base">
  <s-box borderWidth="small-100" borderRadius="base" padding="base">
    <s-unordered-list>
      <s-list-item>Configure payment settings</s-list-item>
      <s-list-item>
        Set up shipping options
        <s-unordered-list>
          <s-list-item>Domestic shipping rates</s-list-item>
          <s-list-item>International shipping zones</s-list-item>
        </s-unordered-list>
      </s-list-item>
      <s-list-item>Add product descriptions</s-list-item>
    </s-unordered-list>
  </s-box>

  <s-box borderWidth="small-100" borderRadius="base" padding="base">
    <s-unordered-list>
      <s-list-item>Enable online payments</s-list-item>
      <s-list-item>Set up shipping rates</s-list-item>
      <s-list-item>Configure tax settings</s-list-item>
      <s-list-item>Add product descriptions</s-list-item>
    </s-unordered-list>
  </s-box>
</s-stack>
```

```html
<s-stack gap="base">
  <s-box borderWidth="small-100" borderRadius="base" padding="base">
    <s-unordered-list>
      <s-list-item>Configure payment settings</s-list-item>
      <s-list-item>
        Set up shipping options
        <s-unordered-list>
          <s-list-item>Domestic shipping rates</s-list-item>
          <s-list-item>International shipping zones</s-list-item>
        </s-unordered-list>
      </s-list-item>
      <s-list-item>Add product descriptions</s-list-item>
    </s-unordered-list>
  </s-box>

  <s-box borderWidth="small-100" borderRadius="base" padding="base">
    <s-unordered-list>
      <s-list-item>Enable online payments</s-list-item>
      <s-list-item>Set up shipping rates</s-list-item>
      <s-list-item>Configure tax settings</s-list-item>
      <s-list-item>Add product descriptions</s-list-item>
    </s-unordered-list>
  </s-box>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-box borderWidth="small-100" borderRadius="base" padding="base">
    <s-unordered-list>
      <s-list-item>Configure payment settings</s-list-item>
      <s-list-item>
        Set up shipping options
        <s-unordered-list>
          <s-list-item>Domestic shipping rates</s-list-item>
          <s-list-item>International shipping zones</s-list-item>
        </s-unordered-list>
      </s-list-item>
      <s-list-item>Add product descriptions</s-list-item>
    </s-unordered-list>
  </s-box>

  <s-box borderWidth="small-100" borderRadius="base" padding="base">
    <s-unordered-list>
      <s-list-item>Enable online payments</s-list-item>
      <s-list-item>Set up shipping rates</s-list-item>
      <s-list-item>Configure tax settings</s-list-item>
      <s-list-item>Add product descriptions</s-list-item>
    </s-unordered-list>
  </s-box>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Slots

### ListItemSlots

### children

value: `HTMLElement`

The content of the ListItem.

## Examples

Displays a bulleted list of related items. Use to present collections of items or options where the sequence isn’t critical.


### Basic usage

A standard unordered list with nested items demonstrating hierarchical content structure.```jsx
<s-stack gap="base">
  <s-box borderWidth="small-100" borderRadius="base" padding="base">
    <s-unordered-list>
      <s-list-item>Configure payment settings</s-list-item>
      <s-list-item>
        Set up shipping options
        <s-unordered-list>
          <s-list-item>Domestic shipping rates</s-list-item>
          <s-list-item>International shipping zones</s-list-item>
        </s-unordered-list>
      </s-list-item>
      <s-list-item>Add product descriptions</s-list-item>
    </s-unordered-list>
  </s-box>

  <s-box borderWidth="small-100" borderRadius="base" padding="base">
    <s-unordered-list>
      <s-list-item>Enable online payments</s-list-item>
      <s-list-item>Set up shipping rates</s-list-item>
      <s-list-item>Configure tax settings</s-list-item>
      <s-list-item>Add product descriptions</s-list-item>
    </s-unordered-list>
  </s-box>
</s-stack>
```

```html
<s-stack gap="base">
  <s-box borderWidth="small-100" borderRadius="base" padding="base">
    <s-unordered-list>
      <s-list-item>Configure payment settings</s-list-item>
      <s-list-item>
        Set up shipping options
        <s-unordered-list>
          <s-list-item>Domestic shipping rates</s-list-item>
          <s-list-item>International shipping zones</s-list-item>
        </s-unordered-list>
      </s-list-item>
      <s-list-item>Add product descriptions</s-list-item>
    </s-unordered-list>
  </s-box>

  <s-box borderWidth="small-100" borderRadius="base" padding="base">
    <s-unordered-list>
      <s-list-item>Enable online payments</s-list-item>
      <s-list-item>Set up shipping rates</s-list-item>
      <s-list-item>Configure tax settings</s-list-item>
      <s-list-item>Add product descriptions</s-list-item>
    </s-unordered-list>
  </s-box>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-box borderWidth="small-100" borderRadius="base" padding="base">
    <s-unordered-list>
      <s-list-item>Configure payment settings</s-list-item>
      <s-list-item>
        Set up shipping options
        <s-unordered-list>
          <s-list-item>Domestic shipping rates</s-list-item>
          <s-list-item>International shipping zones</s-list-item>
        </s-unordered-list>
      </s-list-item>
      <s-list-item>Add product descriptions</s-list-item>
    </s-unordered-list>
  </s-box>

  <s-box borderWidth="small-100" borderRadius="base" padding="base">
    <s-unordered-list>
      <s-list-item>Enable online payments</s-list-item>
      <s-list-item>Set up shipping rates</s-list-item>
      <s-list-item>Configure tax settings</s-list-item>
      <s-list-item>Add product descriptions</s-list-item>
    </s-unordered-list>
  </s-box>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Examples

Displays a bulleted list of related items. Use to present collections of items or options where the sequence isn’t critical.


### Basic usage

A standard unordered list with nested items demonstrating hierarchical content structure.```jsx
<s-stack gap="base">
  <s-box borderWidth="small-100" borderRadius="base" padding="base">
    <s-unordered-list>
      <s-list-item>Configure payment settings</s-list-item>
      <s-list-item>
        Set up shipping options
        <s-unordered-list>
          <s-list-item>Domestic shipping rates</s-list-item>
          <s-list-item>International shipping zones</s-list-item>
        </s-unordered-list>
      </s-list-item>
      <s-list-item>Add product descriptions</s-list-item>
    </s-unordered-list>
  </s-box>

  <s-box borderWidth="small-100" borderRadius="base" padding="base">
    <s-unordered-list>
      <s-list-item>Enable online payments</s-list-item>
      <s-list-item>Set up shipping rates</s-list-item>
      <s-list-item>Configure tax settings</s-list-item>
      <s-list-item>Add product descriptions</s-list-item>
    </s-unordered-list>
  </s-box>
</s-stack>
```

```html
<s-stack gap="base">
  <s-box borderWidth="small-100" borderRadius="base" padding="base">
    <s-unordered-list>
      <s-list-item>Configure payment settings</s-list-item>
      <s-list-item>
        Set up shipping options
        <s-unordered-list>
          <s-list-item>Domestic shipping rates</s-list-item>
          <s-list-item>International shipping zones</s-list-item>
        </s-unordered-list>
      </s-list-item>
      <s-list-item>Add product descriptions</s-list-item>
    </s-unordered-list>
  </s-box>

  <s-box borderWidth="small-100" borderRadius="base" padding="base">
    <s-unordered-list>
      <s-list-item>Enable online payments</s-list-item>
      <s-list-item>Set up shipping rates</s-list-item>
      <s-list-item>Configure tax settings</s-list-item>
      <s-list-item>Add product descriptions</s-list-item>
    </s-unordered-list>
  </s-box>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-box borderWidth="small-100" borderRadius="base" padding="base">
    <s-unordered-list>
      <s-list-item>Configure payment settings</s-list-item>
      <s-list-item>
        Set up shipping options
        <s-unordered-list>
          <s-list-item>Domestic shipping rates</s-list-item>
          <s-list-item>International shipping zones</s-list-item>
        </s-unordered-list>
      </s-list-item>
      <s-list-item>Add product descriptions</s-list-item>
    </s-unordered-list>
  </s-box>

  <s-box borderWidth="small-100" borderRadius="base" padding="base">
    <s-unordered-list>
      <s-list-item>Enable online payments</s-list-item>
      <s-list-item>Set up shipping rates</s-list-item>
      <s-list-item>Configure tax settings</s-list-item>
      <s-list-item>Add product descriptions</s-list-item>
    </s-unordered-list>
  </s-box>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

