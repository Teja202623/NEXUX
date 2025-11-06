# ClickableChip

Interactive button used to categorize or highlight content attributes. They are often displayed near the content they classify, enhancing discoverability by allowing users to identify items with similar properties.

```jsx
<s-clickable-chip>Clickable chip</s-clickable-chip>
```

```html
<s-clickable-chip>Clickable chip</s-clickable-chip>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-clickable-chip>Clickable chip</s-clickable-chip>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Properties

### ClickableChip

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

### command

value: `'--auto' | '--show' | '--hide' | '--toggle'`

Sets the action the [command](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#command) should take when this clickable is activated.

See the documentation of particular components for the actions they support.

- `--auto`: a default action for the target component.
- `--show`: shows the target component.
- `--hide`: hides the target component.
- `--toggle`: toggles the target component.

### commandFor

value: `string`

Sets the element the [commandFor](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#commandfor) should act on when this clickable is activated.

### connectedCallback

value: `() => void`


### disabled

value: `boolean`

Disables the chip, disallowing any interaction.

### disconnectedCallback

value: `() => void`


### hidden

value: `boolean`

Determines whether the chip is hidden.

If this property is being set on each framework render (as in 'controlled' usage), and the chip is `removable`, ensure you update app state for this property when the `remove` event fires.

If the chip is not `removable`, it can still be hidden by setting this property.

### href

value: `string`

The URL to link to.

- If set, it will navigate to the location specified by `href` after executing the `click` event.
- If a `commandFor` is set, the `command` will be executed instead of the navigation.

### interestFor

value: `string`

Sets the element the [interestFor](https://open-ui.org/components/interest-invokers.explainer/#the-pitch-in-code) should act on when this clickable is activated.

### queueRender

value: `() => void`

Queue a run of the render function. You shouldn't need to call this manually - it should be handled by changes to

### removable

value: `boolean`

Whether the chip is removable.

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

Interactive button used to categorize or highlight content attributes. They are often displayed near the content they classify, enhancing discoverability by allowing users to identify items with similar properties.


### Basic usage

Demonstrates a simple clickable chip with a base color and interactive functionality.```jsx
<s-stack direction="inline" gap="base">
  <s-clickable-chip color="base" accessibilityLabel="Filter by active products">
    Active
  </s-clickable-chip>
  <s-clickable-chip
    color="subdued"
    accessibilityLabel="Filter by draft products"
  >
    Draft
  </s-clickable-chip>
  <s-clickable-chip
    color="strong"
    accessibilityLabel="Filter by archived products"
  >
    Archived
  </s-clickable-chip>
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-clickable-chip color="base" accessibilityLabel="Filter by active products">
    Active
  </s-clickable-chip>
  <s-clickable-chip
    color="subdued"
    accessibilityLabel="Filter by draft products"
  >
    Draft
  </s-clickable-chip>
  <s-clickable-chip
    color="strong"
    accessibilityLabel="Filter by archived products"
  >
    Archived
  </s-clickable-chip>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-clickable-chip color="base" accessibilityLabel="Filter by active products">
    Active
  </s-clickable-chip>
  <s-clickable-chip
    color="subdued"
    accessibilityLabel="Filter by draft products"
  >
    Draft
  </s-clickable-chip>
  <s-clickable-chip
    color="strong"
    accessibilityLabel="Filter by archived products"
  >
    Archived
  </s-clickable-chip>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Showcases a strong-colored clickable chip with a check circle icon and a removable state.```jsx
<s-clickable-chip
  color="strong"
  accessibilityLabel="Remove status filter"
  removable
>
  <s-icon slot="graphic" type="check-circle" />
  In progress
</s-clickable-chip>
```

```html
<s-clickable-chip
  color="strong"
  accessibilityLabel="Remove status filter"
  removable
>
  <s-icon slot="graphic" type="check-circle"></s-icon>
  In progress
</s-clickable-chip>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-clickable-chip
  color="strong"
  accessibilityLabel="Remove status filter"
  removable
>
  <s-icon slot="graphic" type="check-circle" />
  In progress
</s-clickable-chip>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates a subdued clickable chip configured as a link with a product icon.```jsx
<s-clickable-chip
  color="subdued"
  href="javascript:void(0)"
  accessibilityLabel="View T-shirt product"
>
  <s-icon slot="graphic" type="product" />
  T-shirt
</s-clickable-chip>
```

```html
<s-clickable-chip
  color="subdued"
  href="javascript:void(0)"
  accessibilityLabel="View T-shirt product"
>
  <s-icon slot="graphic" type="product"></s-icon>
  T-shirt
</s-clickable-chip>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-clickable-chip
  color="subdued"
  href="javascript:void(0)"
  accessibilityLabel="View T-shirt product"
>
  <s-icon slot="graphic" type="product" />
  T-shirt
</s-clickable-chip>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates a clickable chip in a disabled state, preventing interaction while displaying an inactive status.```jsx
<s-clickable-chip
  color="base"
  disabled
  accessibilityLabel="Status filter (disabled)"
>
  Inactive
</s-clickable-chip>
```

```html
<s-clickable-chip
  color="base"
  disabled
  accessibilityLabel="Status filter (disabled)"
>
  Inactive
</s-clickable-chip>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-clickable-chip
  color="base"
  disabled
  accessibilityLabel="Status filter (disabled)"
>
  Inactive
</s-clickable-chip>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates how multiple clickable chips with different colors, icons, and states can be arranged using an inline stack for consistent layout and spacing.```jsx
<s-stack direction="inline" gap="base">
  <s-clickable-chip accessibilityLabel="Filter by status">
    Active
  </s-clickable-chip>
  <s-clickable-chip
    color="strong"
    accessibilityLabel="Remove status filter"
    removable
  >
    <s-icon slot="graphic" type="check-circle" />
    In progress
  </s-clickable-chip>
  <s-clickable-chip color="subdued" accessibilityLabel="Filter by category">
    <s-icon slot="graphic" type="filter" />
    Category
  </s-clickable-chip>
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-clickable-chip accessibilityLabel="Filter by status">
    Active
  </s-clickable-chip>
  <s-clickable-chip
    color="strong"
    accessibilityLabel="Remove status filter"
    removable
  >
    <s-icon slot="graphic" type="check-circle"></s-icon>
    In progress
  </s-clickable-chip>
  <s-clickable-chip color="subdued" accessibilityLabel="Filter by category">
    <s-icon slot="graphic" type="filter"></s-icon>
    Category
  </s-clickable-chip>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-clickable-chip accessibilityLabel="Filter by status">
    Active
  </s-clickable-chip>
  <s-clickable-chip
    color="strong"
    accessibilityLabel="Remove status filter"
    removable
  >
    <s-icon slot="graphic" type="check-circle" />
    In progress
  </s-clickable-chip>
  <s-clickable-chip color="subdued" accessibilityLabel="Filter by category">
    <s-icon slot="graphic" type="filter" />
    Category
  </s-clickable-chip>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Events

Learn more about [registering events](https://shopify.dev/docs/api/app-home/using-polaris-components#event-handling).

### ClickableChipEvents

### afterhide

value: `CallbackEventListener<typeof tagName> | null`

  - CallbackEventListener: (EventListener & {
      (event: CallbackEvent<T>): void;
    }) | null
  - CallbackEvent: Event & {
  currentTarget: HTMLElementTagNameMap[T];
}

### click

value: `CallbackEventListener<typeof tagName> | null`

  - CallbackEventListener: (EventListener & {
      (event: CallbackEvent<T>): void;
    }) | null
  - CallbackEvent: Event & {
  currentTarget: HTMLElementTagNameMap[T];
}

### remove

value: `CallbackEventListener<typeof tagName> | null`

  - CallbackEventListener: (EventListener & {
      (event: CallbackEvent<T>): void;
    }) | null
  - CallbackEvent: Event & {
  currentTarget: HTMLElementTagNameMap[T];
}

## Examples

Interactive button used to categorize or highlight content attributes. They are often displayed near the content they classify, enhancing discoverability by allowing users to identify items with similar properties.


### Basic usage

Demonstrates a simple clickable chip with a base color and interactive functionality.```jsx
<s-stack direction="inline" gap="base">
  <s-clickable-chip color="base" accessibilityLabel="Filter by active products">
    Active
  </s-clickable-chip>
  <s-clickable-chip
    color="subdued"
    accessibilityLabel="Filter by draft products"
  >
    Draft
  </s-clickable-chip>
  <s-clickable-chip
    color="strong"
    accessibilityLabel="Filter by archived products"
  >
    Archived
  </s-clickable-chip>
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-clickable-chip color="base" accessibilityLabel="Filter by active products">
    Active
  </s-clickable-chip>
  <s-clickable-chip
    color="subdued"
    accessibilityLabel="Filter by draft products"
  >
    Draft
  </s-clickable-chip>
  <s-clickable-chip
    color="strong"
    accessibilityLabel="Filter by archived products"
  >
    Archived
  </s-clickable-chip>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-clickable-chip color="base" accessibilityLabel="Filter by active products">
    Active
  </s-clickable-chip>
  <s-clickable-chip
    color="subdued"
    accessibilityLabel="Filter by draft products"
  >
    Draft
  </s-clickable-chip>
  <s-clickable-chip
    color="strong"
    accessibilityLabel="Filter by archived products"
  >
    Archived
  </s-clickable-chip>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Showcases a strong-colored clickable chip with a check circle icon and a removable state.```jsx
<s-clickable-chip
  color="strong"
  accessibilityLabel="Remove status filter"
  removable
>
  <s-icon slot="graphic" type="check-circle" />
  In progress
</s-clickable-chip>
```

```html
<s-clickable-chip
  color="strong"
  accessibilityLabel="Remove status filter"
  removable
>
  <s-icon slot="graphic" type="check-circle"></s-icon>
  In progress
</s-clickable-chip>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-clickable-chip
  color="strong"
  accessibilityLabel="Remove status filter"
  removable
>
  <s-icon slot="graphic" type="check-circle" />
  In progress
</s-clickable-chip>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates a subdued clickable chip configured as a link with a product icon.```jsx
<s-clickable-chip
  color="subdued"
  href="javascript:void(0)"
  accessibilityLabel="View T-shirt product"
>
  <s-icon slot="graphic" type="product" />
  T-shirt
</s-clickable-chip>
```

```html
<s-clickable-chip
  color="subdued"
  href="javascript:void(0)"
  accessibilityLabel="View T-shirt product"
>
  <s-icon slot="graphic" type="product"></s-icon>
  T-shirt
</s-clickable-chip>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-clickable-chip
  color="subdued"
  href="javascript:void(0)"
  accessibilityLabel="View T-shirt product"
>
  <s-icon slot="graphic" type="product" />
  T-shirt
</s-clickable-chip>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates a clickable chip in a disabled state, preventing interaction while displaying an inactive status.```jsx
<s-clickable-chip
  color="base"
  disabled
  accessibilityLabel="Status filter (disabled)"
>
  Inactive
</s-clickable-chip>
```

```html
<s-clickable-chip
  color="base"
  disabled
  accessibilityLabel="Status filter (disabled)"
>
  Inactive
</s-clickable-chip>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-clickable-chip
  color="base"
  disabled
  accessibilityLabel="Status filter (disabled)"
>
  Inactive
</s-clickable-chip>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates how multiple clickable chips with different colors, icons, and states can be arranged using an inline stack for consistent layout and spacing.```jsx
<s-stack direction="inline" gap="base">
  <s-clickable-chip accessibilityLabel="Filter by status">
    Active
  </s-clickable-chip>
  <s-clickable-chip
    color="strong"
    accessibilityLabel="Remove status filter"
    removable
  >
    <s-icon slot="graphic" type="check-circle" />
    In progress
  </s-clickable-chip>
  <s-clickable-chip color="subdued" accessibilityLabel="Filter by category">
    <s-icon slot="graphic" type="filter" />
    Category
  </s-clickable-chip>
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-clickable-chip accessibilityLabel="Filter by status">
    Active
  </s-clickable-chip>
  <s-clickable-chip
    color="strong"
    accessibilityLabel="Remove status filter"
    removable
  >
    <s-icon slot="graphic" type="check-circle"></s-icon>
    In progress
  </s-clickable-chip>
  <s-clickable-chip color="subdued" accessibilityLabel="Filter by category">
    <s-icon slot="graphic" type="filter"></s-icon>
    Category
  </s-clickable-chip>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-clickable-chip accessibilityLabel="Filter by status">
    Active
  </s-clickable-chip>
  <s-clickable-chip
    color="strong"
    accessibilityLabel="Remove status filter"
    removable
  >
    <s-icon slot="graphic" type="check-circle" />
    In progress
  </s-clickable-chip>
  <s-clickable-chip color="subdued" accessibilityLabel="Filter by category">
    <s-icon slot="graphic" type="filter" />
    Category
  </s-clickable-chip>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Slots

### ClickableChipSlots

### children

value: `HTMLElement`

The content of the clickable chip.

### graphic

value: `HTMLElement`

The graphic to display in the clickable chip.

Only accepts `Icon` components.

## Examples

Interactive button used to categorize or highlight content attributes. They are often displayed near the content they classify, enhancing discoverability by allowing users to identify items with similar properties.


### Basic usage

Demonstrates a simple clickable chip with a base color and interactive functionality.```jsx
<s-stack direction="inline" gap="base">
  <s-clickable-chip color="base" accessibilityLabel="Filter by active products">
    Active
  </s-clickable-chip>
  <s-clickable-chip
    color="subdued"
    accessibilityLabel="Filter by draft products"
  >
    Draft
  </s-clickable-chip>
  <s-clickable-chip
    color="strong"
    accessibilityLabel="Filter by archived products"
  >
    Archived
  </s-clickable-chip>
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-clickable-chip color="base" accessibilityLabel="Filter by active products">
    Active
  </s-clickable-chip>
  <s-clickable-chip
    color="subdued"
    accessibilityLabel="Filter by draft products"
  >
    Draft
  </s-clickable-chip>
  <s-clickable-chip
    color="strong"
    accessibilityLabel="Filter by archived products"
  >
    Archived
  </s-clickable-chip>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-clickable-chip color="base" accessibilityLabel="Filter by active products">
    Active
  </s-clickable-chip>
  <s-clickable-chip
    color="subdued"
    accessibilityLabel="Filter by draft products"
  >
    Draft
  </s-clickable-chip>
  <s-clickable-chip
    color="strong"
    accessibilityLabel="Filter by archived products"
  >
    Archived
  </s-clickable-chip>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Showcases a strong-colored clickable chip with a check circle icon and a removable state.```jsx
<s-clickable-chip
  color="strong"
  accessibilityLabel="Remove status filter"
  removable
>
  <s-icon slot="graphic" type="check-circle" />
  In progress
</s-clickable-chip>
```

```html
<s-clickable-chip
  color="strong"
  accessibilityLabel="Remove status filter"
  removable
>
  <s-icon slot="graphic" type="check-circle"></s-icon>
  In progress
</s-clickable-chip>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-clickable-chip
  color="strong"
  accessibilityLabel="Remove status filter"
  removable
>
  <s-icon slot="graphic" type="check-circle" />
  In progress
</s-clickable-chip>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates a subdued clickable chip configured as a link with a product icon.```jsx
<s-clickable-chip
  color="subdued"
  href="javascript:void(0)"
  accessibilityLabel="View T-shirt product"
>
  <s-icon slot="graphic" type="product" />
  T-shirt
</s-clickable-chip>
```

```html
<s-clickable-chip
  color="subdued"
  href="javascript:void(0)"
  accessibilityLabel="View T-shirt product"
>
  <s-icon slot="graphic" type="product"></s-icon>
  T-shirt
</s-clickable-chip>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-clickable-chip
  color="subdued"
  href="javascript:void(0)"
  accessibilityLabel="View T-shirt product"
>
  <s-icon slot="graphic" type="product" />
  T-shirt
</s-clickable-chip>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates a clickable chip in a disabled state, preventing interaction while displaying an inactive status.```jsx
<s-clickable-chip
  color="base"
  disabled
  accessibilityLabel="Status filter (disabled)"
>
  Inactive
</s-clickable-chip>
```

```html
<s-clickable-chip
  color="base"
  disabled
  accessibilityLabel="Status filter (disabled)"
>
  Inactive
</s-clickable-chip>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-clickable-chip
  color="base"
  disabled
  accessibilityLabel="Status filter (disabled)"
>
  Inactive
</s-clickable-chip>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates how multiple clickable chips with different colors, icons, and states can be arranged using an inline stack for consistent layout and spacing.```jsx
<s-stack direction="inline" gap="base">
  <s-clickable-chip accessibilityLabel="Filter by status">
    Active
  </s-clickable-chip>
  <s-clickable-chip
    color="strong"
    accessibilityLabel="Remove status filter"
    removable
  >
    <s-icon slot="graphic" type="check-circle" />
    In progress
  </s-clickable-chip>
  <s-clickable-chip color="subdued" accessibilityLabel="Filter by category">
    <s-icon slot="graphic" type="filter" />
    Category
  </s-clickable-chip>
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-clickable-chip accessibilityLabel="Filter by status">
    Active
  </s-clickable-chip>
  <s-clickable-chip
    color="strong"
    accessibilityLabel="Remove status filter"
    removable
  >
    <s-icon slot="graphic" type="check-circle"></s-icon>
    In progress
  </s-clickable-chip>
  <s-clickable-chip color="subdued" accessibilityLabel="Filter by category">
    <s-icon slot="graphic" type="filter"></s-icon>
    Category
  </s-clickable-chip>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-clickable-chip accessibilityLabel="Filter by status">
    Active
  </s-clickable-chip>
  <s-clickable-chip
    color="strong"
    accessibilityLabel="Remove status filter"
    removable
  >
    <s-icon slot="graphic" type="check-circle" />
    In progress
  </s-clickable-chip>
  <s-clickable-chip color="subdued" accessibilityLabel="Filter by category">
    <s-icon slot="graphic" type="filter" />
    Category
  </s-clickable-chip>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Examples

Interactive button used to categorize or highlight content attributes. They are often displayed near the content they classify, enhancing discoverability by allowing users to identify items with similar properties.


### Basic usage

Demonstrates a simple clickable chip with a base color and interactive functionality.```jsx
<s-stack direction="inline" gap="base">
  <s-clickable-chip color="base" accessibilityLabel="Filter by active products">
    Active
  </s-clickable-chip>
  <s-clickable-chip
    color="subdued"
    accessibilityLabel="Filter by draft products"
  >
    Draft
  </s-clickable-chip>
  <s-clickable-chip
    color="strong"
    accessibilityLabel="Filter by archived products"
  >
    Archived
  </s-clickable-chip>
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-clickable-chip color="base" accessibilityLabel="Filter by active products">
    Active
  </s-clickable-chip>
  <s-clickable-chip
    color="subdued"
    accessibilityLabel="Filter by draft products"
  >
    Draft
  </s-clickable-chip>
  <s-clickable-chip
    color="strong"
    accessibilityLabel="Filter by archived products"
  >
    Archived
  </s-clickable-chip>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-clickable-chip color="base" accessibilityLabel="Filter by active products">
    Active
  </s-clickable-chip>
  <s-clickable-chip
    color="subdued"
    accessibilityLabel="Filter by draft products"
  >
    Draft
  </s-clickable-chip>
  <s-clickable-chip
    color="strong"
    accessibilityLabel="Filter by archived products"
  >
    Archived
  </s-clickable-chip>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Showcases a strong-colored clickable chip with a check circle icon and a removable state.```jsx
<s-clickable-chip
  color="strong"
  accessibilityLabel="Remove status filter"
  removable
>
  <s-icon slot="graphic" type="check-circle" />
  In progress
</s-clickable-chip>
```

```html
<s-clickable-chip
  color="strong"
  accessibilityLabel="Remove status filter"
  removable
>
  <s-icon slot="graphic" type="check-circle"></s-icon>
  In progress
</s-clickable-chip>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-clickable-chip
  color="strong"
  accessibilityLabel="Remove status filter"
  removable
>
  <s-icon slot="graphic" type="check-circle" />
  In progress
</s-clickable-chip>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates a subdued clickable chip configured as a link with a product icon.```jsx
<s-clickable-chip
  color="subdued"
  href="javascript:void(0)"
  accessibilityLabel="View T-shirt product"
>
  <s-icon slot="graphic" type="product" />
  T-shirt
</s-clickable-chip>
```

```html
<s-clickable-chip
  color="subdued"
  href="javascript:void(0)"
  accessibilityLabel="View T-shirt product"
>
  <s-icon slot="graphic" type="product"></s-icon>
  T-shirt
</s-clickable-chip>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-clickable-chip
  color="subdued"
  href="javascript:void(0)"
  accessibilityLabel="View T-shirt product"
>
  <s-icon slot="graphic" type="product" />
  T-shirt
</s-clickable-chip>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates a clickable chip in a disabled state, preventing interaction while displaying an inactive status.```jsx
<s-clickable-chip
  color="base"
  disabled
  accessibilityLabel="Status filter (disabled)"
>
  Inactive
</s-clickable-chip>
```

```html
<s-clickable-chip
  color="base"
  disabled
  accessibilityLabel="Status filter (disabled)"
>
  Inactive
</s-clickable-chip>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-clickable-chip
  color="base"
  disabled
  accessibilityLabel="Status filter (disabled)"
>
  Inactive
</s-clickable-chip>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates how multiple clickable chips with different colors, icons, and states can be arranged using an inline stack for consistent layout and spacing.```jsx
<s-stack direction="inline" gap="base">
  <s-clickable-chip accessibilityLabel="Filter by status">
    Active
  </s-clickable-chip>
  <s-clickable-chip
    color="strong"
    accessibilityLabel="Remove status filter"
    removable
  >
    <s-icon slot="graphic" type="check-circle" />
    In progress
  </s-clickable-chip>
  <s-clickable-chip color="subdued" accessibilityLabel="Filter by category">
    <s-icon slot="graphic" type="filter" />
    Category
  </s-clickable-chip>
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-clickable-chip accessibilityLabel="Filter by status">
    Active
  </s-clickable-chip>
  <s-clickable-chip
    color="strong"
    accessibilityLabel="Remove status filter"
    removable
  >
    <s-icon slot="graphic" type="check-circle"></s-icon>
    In progress
  </s-clickable-chip>
  <s-clickable-chip color="subdued" accessibilityLabel="Filter by category">
    <s-icon slot="graphic" type="filter"></s-icon>
    Category
  </s-clickable-chip>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-clickable-chip accessibilityLabel="Filter by status">
    Active
  </s-clickable-chip>
  <s-clickable-chip
    color="strong"
    accessibilityLabel="Remove status filter"
    removable
  >
    <s-icon slot="graphic" type="check-circle" />
    In progress
  </s-clickable-chip>
  <s-clickable-chip color="subdued" accessibilityLabel="Filter by category">
    <s-icon slot="graphic" type="filter" />
    Category
  </s-clickable-chip>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

