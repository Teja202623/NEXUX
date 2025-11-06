# MoneyField

Collect monetary values from users with built-in currency formatting and validation.

```jsx
<s-money-field
  label="Regional Price"
  placeholder="99.99"
  details="Recommended price for the European market"
 />
```

```html
<s-money-field
  label="Regional Price"
  placeholder="99.99"
  details="Recommended price for the European market"
></s-money-field>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-money-field
  label="Regional Price"
  placeholder="99.99"
  details="Recommended price for the European market"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Properties

### MoneyField

### __@internals$4@6764

value: `ElementInternals`


### adoptedCallback

value: `() => void`


### attributeChangedCallback

value: `(name: string) => void`


### autocomplete

value: `string`

A hint as to the intended content of the field.

When set to `on` (the default), this property indicates that the field should support autofill, but you do not have any more semantic information on the intended contents.

When set to `off`, you are indicating that this field contains sensitive information, or contents that are never saved, like one-time codes.

Alternatively, you can provide value which describes the specific data you would like to be entered into this field during autofill.

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


### defaultValue

value: `string`

The default value for the field.

### details

value: `string`

Additional text to provide context or guidance for the field. This text is displayed along with the field and its label to offer more information or instructions to the user.

This will also be exposed to screen reader users.

### disabled

value: `boolean`

Disables the field, disallowing any interaction.

### disconnectedCallback

value: `() => void`


### error

value: `string`

Indicate an error to the user. The field will be given a specific stylistic treatment to communicate problems that have to be resolved immediately.

### formResetCallback

value: `() => void`


### getAttribute

value: `(qualifiedName: string) => string`

Global keyboard event handlers for things like key bindings typically ignore keystrokes originating from within input elements. Unfortunately, these never account for a Custom Element being the input element.

To fix this, we spoof getAttribute & hasAttribute to make a PreactFieldElement appear as a contentEditable "input" when it contains a focused input element.

### hasAttribute

value: `(qualifiedName: string) => boolean`


### id

value: `string`

A unique identifier for the element.

### isContentEditable

value: `boolean`

Checks if the shadow tree contains a focused input (input, textarea, select, <x contentEditable>). Note: this does _not_ return true for focussed non-field form elements like buttons.

### label

value: `string`

Content to use as the field label.

### labelAccessibilityVisibility

value: `"visible" | "exclusive"`

Changes the visibility of the component's label.

- `visible`: the label is visible to all users.
- `exclusive`: the label is visually hidden but remains in the accessibility tree.

### max

value: `number`

The highest decimal or integer to be accepted for the field. When used with `step` the value will round down to the max number.

Note: a user will still be able to use the keyboard to input a number higher than the max. It is up to the developer to add appropriate validation.

### min

value: `number`

The lowest decimal or integer to be accepted for the field. When used with `step` the value will round up to the min number.

Note: a user will still be able to use the keyboard to input a number lower than the min. It is up to the developer to add appropriate validation.

### name

value: `string`

An identifier for the field that is unique within the nearest containing form.

### placeholder

value: `string`

A short hint that describes the expected value of the field.

### queueRender

value: `() => void`

Queue a run of the render function. You shouldn't need to call this manually - it should be handled by changes to

### readOnly

value: `boolean`

The field cannot be edited by the user. It is focusable will be announced by screen readers.

### required

value: `boolean`

Whether the field needs a value. This requirement adds semantic value to the field, but it will not cause an error to appear automatically. If you want to present an error when this field is empty, you can do so with the `error` property.

### setAttribute

value: `(name: string, value: string) => void`


### value

value: `string`


The current value for the field. If omitted, the field will be empty.

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

Collect monetary values from users with built-in currency formatting and validation.


### Basic usage

Demonstrates a simple money field with a label, initial value, and numeric constraints.```jsx
<s-money-field
  label="Price"
  value="19.99"
  min={0}
  max={1000}
 />
```

```html
<s-money-field
  label="Price"
  value="19.99"
  min="0"
  max="1000"
></s-money-field>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-money-field
  label="Price"
  value="19.99"
  min={0}
  max={1000}
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Showcases a money field with explicit minimum and maximum value limits, and a detailed description for user guidance.```jsx
<s-money-field
  label="Discount amount"
  value="5.00"
  min={0}
  max={100}
  details="Enter discount amount between $0 and $100"
/>
```

```html
<s-money-field
  label="Discount amount"
  value="5.00"
  min="0"
  max="100"
  details="Enter discount amount between $0 and $100"
></s-money-field>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-money-field
  label="Discount amount"
  value="5.00"
  min={0}
  max={100}
  details="Enter discount amount between \$0 and \$100"
/>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates a money field demonstrating basic error handling and validation.```jsx
<s-money-field
  label="Product cost"
  value="29.99"
  min={0.01}
  error="Product cost is required"
 />
```

```html
<s-money-field
  label="Product cost"
  value="29.99"
  min="0.01"
  error="Product cost is required"
></s-money-field>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-money-field
  label="Product cost"
  value="29.99"
  min={0.01}
  error="Product cost is required"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Displays multiple money fields in a vertical stack, showing how to integrate multiple currency inputs in a form with varied details and constraints.```jsx
<s-stack direction="block" gap="base">
  <s-money-field
    label="Price"
    value="0.00"
    min={0.01}
    max={99999.99}
    details="Customers will see this price"
   />

  <s-money-field
    label="Compare at price"
    value=""
    min={0}
    max={99999.99}
    details="Show customers the original price when on sale"
   />

  <s-money-field
    label="Cost per item"
    value=""
    min={0}
    max={99999.99}
    details="Customers won't see this"
   />
</s-stack>
```

```html
<s-stack direction="block" gap="base">
  <s-money-field
    label="Price"
    value="0.00"
    min="0.01"
    max="99999.99"
    details="Customers will see this price"
  ></s-money-field>

  <s-money-field
    label="Compare at price"
    value=""
    min="0"
    max="99999.99"
    details="Show customers the original price when on sale"
  ></s-money-field>

  <s-money-field
    label="Cost per item"
    value=""
    min="0"
    max="99999.99"
    details="Customers won't see this"
  ></s-money-field>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="block" gap="base">
  <s-money-field
    label="Price"
    value="0.00"
    min={0.01}
    max={99999.99}
    details="Customers will see this price"
   />

  <s-money-field
    label="Compare at price"
    value=""
    min={0}
    max={99999.99}
    details="Show customers the original price when on sale"
   />

  <s-money-field
    label="Cost per item"
    value=""
    min={0}
    max={99999.99}
    details="Customers won't see this"
   />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```


### Form validation

Interactive example showing real-time validation with min/max limits and dynamic error messages.```jsx
const [amount, setAmount] = useState('150');
const [error, setError] = useState('Value must be no more than $100');

return (
  <s-section>
    <s-stack gap="base" justifyContent="start">
      <s-text-field label="Product name" />
      <s-money-field
        label="Discount amount"
        value={amount}
        min={0}
        max={100}
        details="Enter discount amount between $0 and $100"
        error={error}
        onInput={(e) => {
          setAmount(e.currentTarget.value);
          const val = parseFloat(e.currentTarget.value);
          setError(val > e.currentTarget.max ? 'Value must be no more than $100' : val < e.currentTarget.min ? 'Value must be at least $0' : '');
        }}
      />
    </s-stack>
  </s-section>
)
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; background: #F1F1F1;  padding: 1rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base", inlineSize="300px" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { const [amount, setAmount] = useState('150');
const [error, setError] = useState('Value must be no more than \$100');

return (
  <s-section>
    <s-stack gap="base" justifyContent="start">
      <s-text-field label="Product name" />
      <s-money-field
        label="Discount amount"
        value={amount}
        min={0}
        max={100}
        details="Enter discount amount between \$0 and \$100"
        error={error}
        onInput={(e) => {
          setAmount(e.currentTarget.value);
          const val = parseFloat(e.currentTarget.value);
          setError(val > e.currentTarget.max ? 'Value must be no more than \$100' : val < e.currentTarget.min ? 'Value must be at least \$0' : '');
        }}
      />
    </s-stack>
  </s-section>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Events

Learn more about [registering events](https://shopify.dev/docs/api/app-home/using-polaris-components#event-handling).

### MoneyFieldEvents

### blur

value: `CallbackEventListener<'input'>`

  - CallbackEventListener: (EventListener & {
      (event: CallbackEvent<T>): void;
    }) | null
  - CallbackEvent: Event & {
  currentTarget: HTMLElementTagNameMap[T];
}

### change

value: `CallbackEventListener<'input'>`

  - CallbackEventListener: (EventListener & {
      (event: CallbackEvent<T>): void;
    }) | null
  - CallbackEvent: Event & {
  currentTarget: HTMLElementTagNameMap[T];
}

### focus

value: `CallbackEventListener<'input'>`

  - CallbackEventListener: (EventListener & {
      (event: CallbackEvent<T>): void;
    }) | null
  - CallbackEvent: Event & {
  currentTarget: HTMLElementTagNameMap[T];
}

### input

value: `CallbackEventListener<'input'>`

  - CallbackEventListener: (EventListener & {
      (event: CallbackEvent<T>): void;
    }) | null
  - CallbackEvent: Event & {
  currentTarget: HTMLElementTagNameMap[T];
}

## Examples

Collect monetary values from users with built-in currency formatting and validation.


### Basic usage

Demonstrates a simple money field with a label, initial value, and numeric constraints.```jsx
<s-money-field
  label="Price"
  value="19.99"
  min={0}
  max={1000}
 />
```

```html
<s-money-field
  label="Price"
  value="19.99"
  min="0"
  max="1000"
></s-money-field>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-money-field
  label="Price"
  value="19.99"
  min={0}
  max={1000}
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Showcases a money field with explicit minimum and maximum value limits, and a detailed description for user guidance.```jsx
<s-money-field
  label="Discount amount"
  value="5.00"
  min={0}
  max={100}
  details="Enter discount amount between $0 and $100"
/>
```

```html
<s-money-field
  label="Discount amount"
  value="5.00"
  min="0"
  max="100"
  details="Enter discount amount between $0 and $100"
></s-money-field>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-money-field
  label="Discount amount"
  value="5.00"
  min={0}
  max={100}
  details="Enter discount amount between \$0 and \$100"
/>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates a money field demonstrating basic error handling and validation.```jsx
<s-money-field
  label="Product cost"
  value="29.99"
  min={0.01}
  error="Product cost is required"
 />
```

```html
<s-money-field
  label="Product cost"
  value="29.99"
  min="0.01"
  error="Product cost is required"
></s-money-field>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-money-field
  label="Product cost"
  value="29.99"
  min={0.01}
  error="Product cost is required"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Displays multiple money fields in a vertical stack, showing how to integrate multiple currency inputs in a form with varied details and constraints.```jsx
<s-stack direction="block" gap="base">
  <s-money-field
    label="Price"
    value="0.00"
    min={0.01}
    max={99999.99}
    details="Customers will see this price"
   />

  <s-money-field
    label="Compare at price"
    value=""
    min={0}
    max={99999.99}
    details="Show customers the original price when on sale"
   />

  <s-money-field
    label="Cost per item"
    value=""
    min={0}
    max={99999.99}
    details="Customers won't see this"
   />
</s-stack>
```

```html
<s-stack direction="block" gap="base">
  <s-money-field
    label="Price"
    value="0.00"
    min="0.01"
    max="99999.99"
    details="Customers will see this price"
  ></s-money-field>

  <s-money-field
    label="Compare at price"
    value=""
    min="0"
    max="99999.99"
    details="Show customers the original price when on sale"
  ></s-money-field>

  <s-money-field
    label="Cost per item"
    value=""
    min="0"
    max="99999.99"
    details="Customers won't see this"
  ></s-money-field>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="block" gap="base">
  <s-money-field
    label="Price"
    value="0.00"
    min={0.01}
    max={99999.99}
    details="Customers will see this price"
   />

  <s-money-field
    label="Compare at price"
    value=""
    min={0}
    max={99999.99}
    details="Show customers the original price when on sale"
   />

  <s-money-field
    label="Cost per item"
    value=""
    min={0}
    max={99999.99}
    details="Customers won't see this"
   />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```


### Form validation

Interactive example showing real-time validation with min/max limits and dynamic error messages.```jsx
const [amount, setAmount] = useState('150');
const [error, setError] = useState('Value must be no more than $100');

return (
  <s-section>
    <s-stack gap="base" justifyContent="start">
      <s-text-field label="Product name" />
      <s-money-field
        label="Discount amount"
        value={amount}
        min={0}
        max={100}
        details="Enter discount amount between $0 and $100"
        error={error}
        onInput={(e) => {
          setAmount(e.currentTarget.value);
          const val = parseFloat(e.currentTarget.value);
          setError(val > e.currentTarget.max ? 'Value must be no more than $100' : val < e.currentTarget.min ? 'Value must be at least $0' : '');
        }}
      />
    </s-stack>
  </s-section>
)
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; background: #F1F1F1;  padding: 1rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base", inlineSize="300px" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { const [amount, setAmount] = useState('150');
const [error, setError] = useState('Value must be no more than \$100');

return (
  <s-section>
    <s-stack gap="base" justifyContent="start">
      <s-text-field label="Product name" />
      <s-money-field
        label="Discount amount"
        value={amount}
        min={0}
        max={100}
        details="Enter discount amount between \$0 and \$100"
        error={error}
        onInput={(e) => {
          setAmount(e.currentTarget.value);
          const val = parseFloat(e.currentTarget.value);
          setError(val > e.currentTarget.max ? 'Value must be no more than \$100' : val < e.currentTarget.min ? 'Value must be at least \$0' : '');
        }}
      />
    </s-stack>
  </s-section>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Examples

Collect monetary values from users with built-in currency formatting and validation.


### Basic usage

Demonstrates a simple money field with a label, initial value, and numeric constraints.```jsx
<s-money-field
  label="Price"
  value="19.99"
  min={0}
  max={1000}
 />
```

```html
<s-money-field
  label="Price"
  value="19.99"
  min="0"
  max="1000"
></s-money-field>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-money-field
  label="Price"
  value="19.99"
  min={0}
  max={1000}
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Showcases a money field with explicit minimum and maximum value limits, and a detailed description for user guidance.```jsx
<s-money-field
  label="Discount amount"
  value="5.00"
  min={0}
  max={100}
  details="Enter discount amount between $0 and $100"
/>
```

```html
<s-money-field
  label="Discount amount"
  value="5.00"
  min="0"
  max="100"
  details="Enter discount amount between $0 and $100"
></s-money-field>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-money-field
  label="Discount amount"
  value="5.00"
  min={0}
  max={100}
  details="Enter discount amount between \$0 and \$100"
/>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates a money field demonstrating basic error handling and validation.```jsx
<s-money-field
  label="Product cost"
  value="29.99"
  min={0.01}
  error="Product cost is required"
 />
```

```html
<s-money-field
  label="Product cost"
  value="29.99"
  min="0.01"
  error="Product cost is required"
></s-money-field>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-money-field
  label="Product cost"
  value="29.99"
  min={0.01}
  error="Product cost is required"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Displays multiple money fields in a vertical stack, showing how to integrate multiple currency inputs in a form with varied details and constraints.```jsx
<s-stack direction="block" gap="base">
  <s-money-field
    label="Price"
    value="0.00"
    min={0.01}
    max={99999.99}
    details="Customers will see this price"
   />

  <s-money-field
    label="Compare at price"
    value=""
    min={0}
    max={99999.99}
    details="Show customers the original price when on sale"
   />

  <s-money-field
    label="Cost per item"
    value=""
    min={0}
    max={99999.99}
    details="Customers won't see this"
   />
</s-stack>
```

```html
<s-stack direction="block" gap="base">
  <s-money-field
    label="Price"
    value="0.00"
    min="0.01"
    max="99999.99"
    details="Customers will see this price"
  ></s-money-field>

  <s-money-field
    label="Compare at price"
    value=""
    min="0"
    max="99999.99"
    details="Show customers the original price when on sale"
  ></s-money-field>

  <s-money-field
    label="Cost per item"
    value=""
    min="0"
    max="99999.99"
    details="Customers won't see this"
  ></s-money-field>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="block" gap="base">
  <s-money-field
    label="Price"
    value="0.00"
    min={0.01}
    max={99999.99}
    details="Customers will see this price"
   />

  <s-money-field
    label="Compare at price"
    value=""
    min={0}
    max={99999.99}
    details="Show customers the original price when on sale"
   />

  <s-money-field
    label="Cost per item"
    value=""
    min={0}
    max={99999.99}
    details="Customers won't see this"
   />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```


### Form validation

Interactive example showing real-time validation with min/max limits and dynamic error messages.```jsx
const [amount, setAmount] = useState('150');
const [error, setError] = useState('Value must be no more than $100');

return (
  <s-section>
    <s-stack gap="base" justifyContent="start">
      <s-text-field label="Product name" />
      <s-money-field
        label="Discount amount"
        value={amount}
        min={0}
        max={100}
        details="Enter discount amount between $0 and $100"
        error={error}
        onInput={(e) => {
          setAmount(e.currentTarget.value);
          const val = parseFloat(e.currentTarget.value);
          setError(val > e.currentTarget.max ? 'Value must be no more than $100' : val < e.currentTarget.min ? 'Value must be at least $0' : '');
        }}
      />
    </s-stack>
  </s-section>
)
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; background: #F1F1F1;  padding: 1rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base", inlineSize="300px" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { const [amount, setAmount] = useState('150');
const [error, setError] = useState('Value must be no more than \$100');

return (
  <s-section>
    <s-stack gap="base" justifyContent="start">
      <s-text-field label="Product name" />
      <s-money-field
        label="Discount amount"
        value={amount}
        min={0}
        max={100}
        details="Enter discount amount between \$0 and \$100"
        error={error}
        onInput={(e) => {
          setAmount(e.currentTarget.value);
          const val = parseFloat(e.currentTarget.value);
          setError(val > e.currentTarget.max ? 'Value must be no more than \$100' : val < e.currentTarget.min ? 'Value must be at least \$0' : '');
        }}
      />
    </s-stack>
  </s-section>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

