# NumberField

Collect numerical values from users with optimized keyboard settings and built-in validation.

```jsx
<s-number-field
  label="Quantity"
  details="Number of items in stock"
  placeholder="0"
  step={5}
  min={0}
  max={100}
/>

```

```html
<s-number-field
  label="Quantity"
  details="Number of items in stock"
  placeholder="0"
  step="5"
  min="0"
  max="100"
></s-number-field>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-number-field
  label="Quantity"
  details="Number of items in stock"
  placeholder="0"
  step={5}
  min={0}
  max={100}
/>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Properties

### NumberField

### __@internals$4@6764

value: `ElementInternals`


### adoptedCallback

value: `() => void`


### attributeChangedCallback

value: `(name: string) => void`


### autocomplete

value: `"on" | "off" | NumberAutocompleteField | `section-${string} one-time-code` | `section-${string} cc-number` | `section-${string} cc-csc` | "shipping one-time-code" | "shipping cc-number" | "shipping cc-csc" | "billing one-time-code" | "billing cc-number" | "billing cc-csc" | `section-${string} shipping one-time-code` | `section-${string} shipping cc-number` | `section-${string} shipping cc-csc` | `section-${string} billing one-time-code` | `section-${string} billing cc-number` | `section-${string} billing cc-csc``

  - NumberAutocompleteField: 'one-time-code' | 'cc-number' | 'cc-csc'
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

### inputMode

value: `"decimal" | "numeric"`

Sets the virtual keyboard.

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

### prefix

value: `string`

A value to be displayed immediately before the editable portion of the field.

This is useful for displaying an implied part of the value, such as "https://" or "+353".

This cannot be edited by the user, and it isn't included in the value of the field.

It may not be displayed until the user has interacted with the input. For example, an inline label may take the place of the prefix until the user focuses the input.

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


### step

value: `number`

The amount the value can increase or decrease by. This can be an integer or decimal. If a `max` or `min` is specified with `step` when increasing/decreasing the value via the buttons, the final value will always round to the `max` or `min` rather than the closest valid amount.

### suffix

value: `string`

A value to be displayed immediately after the editable portion of the field.

This is useful for displaying an implied part of the value, such as "@shopify.com", or "%".

This cannot be edited by the user, and it isn't included in the value of the field.

It may not be displayed until the user has interacted with the input. For example, an inline label may take the place of the suffix until the user focuses the input.

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

Collect numerical values from users with optimized keyboard settings and built-in validation.


### Basic usage

Demonstrates a simple number field for entering order quantity with a predefined range and step value.```jsx
<s-number-field
  label="Order quantity"
  value="5"
  min={1}
  max={999}
  step={1}
 />
```

```html
<s-number-field
  label="Order quantity"
  value="5"
  min="1"
  max="999"
  step="1"
></s-number-field>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-number-field
  label="Order quantity"
  value="5"
  min={1}
  max={999}
  step={1}
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates a number field for entering product prices with currency prefix and suffix, using decimal input mode.```jsx
<s-number-field
  label="Product price"
  value="29.99"
  prefix="$"
  suffix="CAD"
  inputMode="decimal"
  step={0.01}
  min={0}
 />
```

```html
<s-number-field
  label="Product price"
  value="29.99"
  prefix="$"
  suffix="CAD"
  inputMode="decimal"
  step="0.01"
  min="0"
></s-number-field>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-number-field
  label="Product price"
  value="29.99"
  prefix="\$"
  suffix="CAD"
  inputMode="decimal"
  step={0.01}
  min={0}
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Showcases multiple number fields for different use cases: inventory tracking, percentage discount, and shipping weight, demonstrating various input modes and configurations.```jsx
<s-stack gap="base">
  <s-number-field
    label="Inventory count"
    value="150"
    min={0}
    step={1}
    inputMode="numeric"
    details="Current stock available for sale"
   />

  <s-number-field
    label="Discount percentage"
    value="15"
    suffix="%"
    min={0}
    max={100}
    step={0.1}
    inputMode="decimal"
   />

  <s-number-field
    label="Shipping weight"
    value="2.5"
    suffix="kg"
    min={0.1}
    step={0.1}
    inputMode="decimal"
   />
</s-stack>
```

```html
<s-stack gap="base">
  <s-number-field
    label="Inventory count"
    value="150"
    min="0"
    step="1"
    inputMode="numeric"
    details="Current stock available for sale"
  ></s-number-field>

  <s-number-field
    label="Discount percentage"
    value="15"
    suffix="%"
    min="0"
    max="100"
    step="0.1"
    inputMode="decimal"
  ></s-number-field>

  <s-number-field
    label="Shipping weight"
    value="2.5"
    suffix="kg"
    min="0.1"
    step="0.1"
    inputMode="decimal"
  ></s-number-field>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-number-field
    label="Inventory count"
    value="150"
    min={0}
    step={1}
    inputMode="numeric"
    details="Current stock available for sale"
   />

  <s-number-field
    label="Discount percentage"
    value="15"
    suffix="%"
    min={0}
    max={100}
    step={0.1}
    inputMode="decimal"
   />

  <s-number-field
    label="Shipping weight"
    value="2.5"
    suffix="kg"
    min={0.1}
    step={0.1}
    inputMode="decimal"
   />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Events

Learn more about [registering events](https://shopify.dev/docs/api/app-home/using-polaris-components#event-handling).

### NumberFieldEvents

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

Collect numerical values from users with optimized keyboard settings and built-in validation.


### Basic usage

Demonstrates a simple number field for entering order quantity with a predefined range and step value.```jsx
<s-number-field
  label="Order quantity"
  value="5"
  min={1}
  max={999}
  step={1}
 />
```

```html
<s-number-field
  label="Order quantity"
  value="5"
  min="1"
  max="999"
  step="1"
></s-number-field>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-number-field
  label="Order quantity"
  value="5"
  min={1}
  max={999}
  step={1}
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates a number field for entering product prices with currency prefix and suffix, using decimal input mode.```jsx
<s-number-field
  label="Product price"
  value="29.99"
  prefix="$"
  suffix="CAD"
  inputMode="decimal"
  step={0.01}
  min={0}
 />
```

```html
<s-number-field
  label="Product price"
  value="29.99"
  prefix="$"
  suffix="CAD"
  inputMode="decimal"
  step="0.01"
  min="0"
></s-number-field>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-number-field
  label="Product price"
  value="29.99"
  prefix="\$"
  suffix="CAD"
  inputMode="decimal"
  step={0.01}
  min={0}
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Showcases multiple number fields for different use cases: inventory tracking, percentage discount, and shipping weight, demonstrating various input modes and configurations.```jsx
<s-stack gap="base">
  <s-number-field
    label="Inventory count"
    value="150"
    min={0}
    step={1}
    inputMode="numeric"
    details="Current stock available for sale"
   />

  <s-number-field
    label="Discount percentage"
    value="15"
    suffix="%"
    min={0}
    max={100}
    step={0.1}
    inputMode="decimal"
   />

  <s-number-field
    label="Shipping weight"
    value="2.5"
    suffix="kg"
    min={0.1}
    step={0.1}
    inputMode="decimal"
   />
</s-stack>
```

```html
<s-stack gap="base">
  <s-number-field
    label="Inventory count"
    value="150"
    min="0"
    step="1"
    inputMode="numeric"
    details="Current stock available for sale"
  ></s-number-field>

  <s-number-field
    label="Discount percentage"
    value="15"
    suffix="%"
    min="0"
    max="100"
    step="0.1"
    inputMode="decimal"
  ></s-number-field>

  <s-number-field
    label="Shipping weight"
    value="2.5"
    suffix="kg"
    min="0.1"
    step="0.1"
    inputMode="decimal"
  ></s-number-field>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-number-field
    label="Inventory count"
    value="150"
    min={0}
    step={1}
    inputMode="numeric"
    details="Current stock available for sale"
   />

  <s-number-field
    label="Discount percentage"
    value="15"
    suffix="%"
    min={0}
    max={100}
    step={0.1}
    inputMode="decimal"
   />

  <s-number-field
    label="Shipping weight"
    value="2.5"
    suffix="kg"
    min={0.1}
    step={0.1}
    inputMode="decimal"
   />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Examples

Collect numerical values from users with optimized keyboard settings and built-in validation.


### Basic usage

Demonstrates a simple number field for entering order quantity with a predefined range and step value.```jsx
<s-number-field
  label="Order quantity"
  value="5"
  min={1}
  max={999}
  step={1}
 />
```

```html
<s-number-field
  label="Order quantity"
  value="5"
  min="1"
  max="999"
  step="1"
></s-number-field>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-number-field
  label="Order quantity"
  value="5"
  min={1}
  max={999}
  step={1}
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates a number field for entering product prices with currency prefix and suffix, using decimal input mode.```jsx
<s-number-field
  label="Product price"
  value="29.99"
  prefix="$"
  suffix="CAD"
  inputMode="decimal"
  step={0.01}
  min={0}
 />
```

```html
<s-number-field
  label="Product price"
  value="29.99"
  prefix="$"
  suffix="CAD"
  inputMode="decimal"
  step="0.01"
  min="0"
></s-number-field>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-number-field
  label="Product price"
  value="29.99"
  prefix="\$"
  suffix="CAD"
  inputMode="decimal"
  step={0.01}
  min={0}
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Showcases multiple number fields for different use cases: inventory tracking, percentage discount, and shipping weight, demonstrating various input modes and configurations.```jsx
<s-stack gap="base">
  <s-number-field
    label="Inventory count"
    value="150"
    min={0}
    step={1}
    inputMode="numeric"
    details="Current stock available for sale"
   />

  <s-number-field
    label="Discount percentage"
    value="15"
    suffix="%"
    min={0}
    max={100}
    step={0.1}
    inputMode="decimal"
   />

  <s-number-field
    label="Shipping weight"
    value="2.5"
    suffix="kg"
    min={0.1}
    step={0.1}
    inputMode="decimal"
   />
</s-stack>
```

```html
<s-stack gap="base">
  <s-number-field
    label="Inventory count"
    value="150"
    min="0"
    step="1"
    inputMode="numeric"
    details="Current stock available for sale"
  ></s-number-field>

  <s-number-field
    label="Discount percentage"
    value="15"
    suffix="%"
    min="0"
    max="100"
    step="0.1"
    inputMode="decimal"
  ></s-number-field>

  <s-number-field
    label="Shipping weight"
    value="2.5"
    suffix="kg"
    min="0.1"
    step="0.1"
    inputMode="decimal"
  ></s-number-field>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-number-field
    label="Inventory count"
    value="150"
    min={0}
    step={1}
    inputMode="numeric"
    details="Current stock available for sale"
   />

  <s-number-field
    label="Discount percentage"
    value="15"
    suffix="%"
    min={0}
    max={100}
    step={0.1}
    inputMode="decimal"
   />

  <s-number-field
    label="Shipping weight"
    value="2.5"
    suffix="kg"
    min={0.1}
    step={0.1}
    inputMode="decimal"
   />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

