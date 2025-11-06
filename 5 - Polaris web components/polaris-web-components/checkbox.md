# Checkbox

Give users a clear way to make selections, such as agreeing to terms or choosing multiple items from a list.

```jsx
<s-checkbox
  label="Require a confirmation step"
  details="Ensure all criteria are met before proceeding"
 />
```

```html
<s-checkbox
  label="Require a confirmation step"
  details="Ensure all criteria are met before proceeding"
></s-checkbox>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-checkbox
  label="Require a confirmation step"
  details="Ensure all criteria are met before proceeding"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Properties

### Checkbox

### __@internals$4@6764

value: `ElementInternals`


### accessibilityLabel

value: `string`

A label used for users using assistive technologies like screen readers. When set, any children or `label` supplied will not be announced. This can also be used to display a control without a visual label, while still providing context to users using screen readers.

### adoptedCallback

value: `() => void`


### attributeChangedCallback

value: `(name: string) => void`


### checked

value: `boolean`

Whether the control is active.

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


### defaultChecked

value: `boolean`

Whether the control is active by default.

### defaultIndeterminate

value: `boolean`


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


### id

value: `string`

A unique identifier for the element.

### indeterminate

value: `boolean`


### label

value: `string`

Visual content to use as the control label.

### name

value: `string`

An identifier for the field that is unique within the nearest containing form.

### queueRender

value: `() => void`

Queue a run of the render function. You shouldn't need to call this manually - it should be handled by changes to

### required

value: `boolean`

Whether the field needs a value. This requirement adds semantic value to the field, but it will not cause an error to appear automatically. If you want to present an error when this field is empty, you can do so with the `error` property.

### setAttribute

value: `(name: string, value: string) => void`


### value

value: `string`

The value used in form data when the checkbox is checked.

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

Give users a clear way to make selections, such as agreeing to terms or choosing multiple items from a list.


### Basic usage

Checkbox in indeterminate state, commonly used for "select all" functionality when some items are selected.```jsx
const [selectedItems, setSelectedItems] = useState([]);
const items = ['Item 1', 'Item 2', 'Item 3'];

const toggleItem = (value, checked) => setSelectedItems(checked ? [...selectedItems, value] : selectedItems.filter(item => item !== value));
const toggleAll = (checked) => setSelectedItems(checked ? items : []);
const isSelected = (item) => selectedItems.includes(item);

return (
  <s-stack gap="small">
    <s-checkbox
      label="Select all items"
      indeterminate={selectedItems.length !== 0 && selectedItems.length !== items.length}
      checked={selectedItems.length === items.length}
      onChange={e => toggleAll(e.currentTarget.checked)}
    />
    <s-divider />
    {items.map(i => (
      <s-checkbox key={i} label={i} checked={isSelected(i)} onChange={e => toggleItem(i, e.currentTarget.checked)} />
    ))}
  </s-stack>
);
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { const [selectedItems, setSelectedItems] = useState([]);
const items = ['Item 1', 'Item 2', 'Item 3'];

const toggleItem = (value, checked) => setSelectedItems(checked ? [...selectedItems, value] : selectedItems.filter(item => item !== value));
const toggleAll = (checked) => setSelectedItems(checked ? items : []);
const isSelected = (item) => selectedItems.includes(item);

return (
  <s-stack gap="small">
    <s-checkbox
      label="Select all items"
      indeterminate={selectedItems.length !== 0 && selectedItems.length !== items.length}
      checked={selectedItems.length === items.length}
      onChange={e => toggleAll(e.currentTarget.checked)}
    />
    <s-divider />
    {items.map(i => (
      <s-checkbox key={i} label={i} checked={isSelected(i)} onChange={e => toggleItem(i, e.currentTarget.checked)} />
    ))}
  </s-stack>
); };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Checkbox with validation error message for required form fields.```jsx
<s-checkbox
  label="I agree to the terms"
  error="You must accept the terms to continue"
/>

```

```html
<s-checkbox
  label="I agree to the terms"
  error="You must accept the terms to continue"
></s-checkbox>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-checkbox
  label="I agree to the terms"
  error="You must accept the terms to continue"
/>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Checkbox with descriptive details text to provide additional context about the option.```jsx
<s-checkbox
  label="Send order notifications"
  details="You'll receive emails when orders are placed, fulfilled, or cancelled"
 />
```

```html
<s-checkbox
  label="Send order notifications"
  details="You'll receive emails when orders are placed, fulfilled, or cancelled"
></s-checkbox>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-checkbox
  label="Send order notifications"
  details="You'll receive emails when orders are placed, fulfilled, or cancelled"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Checkbox in disabled state with explanatory details about why it's unavailable.```jsx
<s-checkbox
  label="Advanced settings"
  disabled
  details="Contact your administrator to enable advanced settings"
 />
```

```html
<s-checkbox
  label="Advanced settings"
  disabled
  details="Contact your administrator to enable advanced settings"
></s-checkbox>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-checkbox
  label="Advanced settings"
  disabled
  details="Contact your administrator to enable advanced settings"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Multiple checkboxes for different configuration options with helpful details.```jsx
<s-stack gap="base">
  <s-checkbox label="Show only published products" checked />
  <s-checkbox
    label="Enable inventory tracking"
    details="Track inventory levels and receive low stock alerts"
    checked
   />
  <s-checkbox
    label="View customer data"
    details="Allow staff to access customer contact information and order history"
   />
</s-stack>
```

```html
<s-stack gap="base">
  <s-checkbox label="Show only published products" checked></s-checkbox>
  <s-checkbox
    label="Enable inventory tracking"
    details="Track inventory levels and receive low stock alerts"
    checked
  ></s-checkbox>
  <s-checkbox
    label="View customer data"
    details="Allow staff to access customer contact information and order history"
  ></s-checkbox>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-checkbox label="Show only published products" checked />
  <s-checkbox
    label="Enable inventory tracking"
    details="Track inventory levels and receive low stock alerts"
    checked
   />
  <s-checkbox
    label="View customer data"
    details="Allow staff to access customer contact information and order history"
   />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```


### Form validation

Interactive example showing required checkbox validation with dynamic error messages.```jsx
const [checked, setChecked] = useState(false);
const errorMessage = 'You must accept the terms to continue';
const [error, setError] = useState(errorMessage);

return (
  <s-section>
    <s-stack gap="base" justifyContent="start">
      <s-text-field label="Name" />
      <s-checkbox
        label="I agree to the terms"
        checked={checked}
        error={error}
        onChange={(e) => {
          setChecked(e.currentTarget.checked);
          setError(e.currentTarget.checked ? '' : errorMessage);
        }}
      />
    </s-stack>
  </s-section>
)
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; background: #F1F1F1;  padding: 1rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base", inlineSize="300px" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { const [checked, setChecked] = useState(false);
const errorMessage = 'You must accept the terms to continue';
const [error, setError] = useState(errorMessage);

return (
  <s-section>
    <s-stack gap="base" justifyContent="start">
      <s-text-field label="Name" />
      <s-checkbox
        label="I agree to the terms"
        checked={checked}
        error={error}
        onChange={(e) => {
          setChecked(e.currentTarget.checked);
          setError(e.currentTarget.checked ? '' : errorMessage);
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

### CheckboxEvents

### change

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

Give users a clear way to make selections, such as agreeing to terms or choosing multiple items from a list.


### Basic usage

Checkbox in indeterminate state, commonly used for "select all" functionality when some items are selected.```jsx
const [selectedItems, setSelectedItems] = useState([]);
const items = ['Item 1', 'Item 2', 'Item 3'];

const toggleItem = (value, checked) => setSelectedItems(checked ? [...selectedItems, value] : selectedItems.filter(item => item !== value));
const toggleAll = (checked) => setSelectedItems(checked ? items : []);
const isSelected = (item) => selectedItems.includes(item);

return (
  <s-stack gap="small">
    <s-checkbox
      label="Select all items"
      indeterminate={selectedItems.length !== 0 && selectedItems.length !== items.length}
      checked={selectedItems.length === items.length}
      onChange={e => toggleAll(e.currentTarget.checked)}
    />
    <s-divider />
    {items.map(i => (
      <s-checkbox key={i} label={i} checked={isSelected(i)} onChange={e => toggleItem(i, e.currentTarget.checked)} />
    ))}
  </s-stack>
);
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { const [selectedItems, setSelectedItems] = useState([]);
const items = ['Item 1', 'Item 2', 'Item 3'];

const toggleItem = (value, checked) => setSelectedItems(checked ? [...selectedItems, value] : selectedItems.filter(item => item !== value));
const toggleAll = (checked) => setSelectedItems(checked ? items : []);
const isSelected = (item) => selectedItems.includes(item);

return (
  <s-stack gap="small">
    <s-checkbox
      label="Select all items"
      indeterminate={selectedItems.length !== 0 && selectedItems.length !== items.length}
      checked={selectedItems.length === items.length}
      onChange={e => toggleAll(e.currentTarget.checked)}
    />
    <s-divider />
    {items.map(i => (
      <s-checkbox key={i} label={i} checked={isSelected(i)} onChange={e => toggleItem(i, e.currentTarget.checked)} />
    ))}
  </s-stack>
); };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Checkbox with validation error message for required form fields.```jsx
<s-checkbox
  label="I agree to the terms"
  error="You must accept the terms to continue"
/>

```

```html
<s-checkbox
  label="I agree to the terms"
  error="You must accept the terms to continue"
></s-checkbox>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-checkbox
  label="I agree to the terms"
  error="You must accept the terms to continue"
/>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Checkbox with descriptive details text to provide additional context about the option.```jsx
<s-checkbox
  label="Send order notifications"
  details="You'll receive emails when orders are placed, fulfilled, or cancelled"
 />
```

```html
<s-checkbox
  label="Send order notifications"
  details="You'll receive emails when orders are placed, fulfilled, or cancelled"
></s-checkbox>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-checkbox
  label="Send order notifications"
  details="You'll receive emails when orders are placed, fulfilled, or cancelled"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Checkbox in disabled state with explanatory details about why it's unavailable.```jsx
<s-checkbox
  label="Advanced settings"
  disabled
  details="Contact your administrator to enable advanced settings"
 />
```

```html
<s-checkbox
  label="Advanced settings"
  disabled
  details="Contact your administrator to enable advanced settings"
></s-checkbox>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-checkbox
  label="Advanced settings"
  disabled
  details="Contact your administrator to enable advanced settings"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Multiple checkboxes for different configuration options with helpful details.```jsx
<s-stack gap="base">
  <s-checkbox label="Show only published products" checked />
  <s-checkbox
    label="Enable inventory tracking"
    details="Track inventory levels and receive low stock alerts"
    checked
   />
  <s-checkbox
    label="View customer data"
    details="Allow staff to access customer contact information and order history"
   />
</s-stack>
```

```html
<s-stack gap="base">
  <s-checkbox label="Show only published products" checked></s-checkbox>
  <s-checkbox
    label="Enable inventory tracking"
    details="Track inventory levels and receive low stock alerts"
    checked
  ></s-checkbox>
  <s-checkbox
    label="View customer data"
    details="Allow staff to access customer contact information and order history"
  ></s-checkbox>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-checkbox label="Show only published products" checked />
  <s-checkbox
    label="Enable inventory tracking"
    details="Track inventory levels and receive low stock alerts"
    checked
   />
  <s-checkbox
    label="View customer data"
    details="Allow staff to access customer contact information and order history"
   />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```


### Form validation

Interactive example showing required checkbox validation with dynamic error messages.```jsx
const [checked, setChecked] = useState(false);
const errorMessage = 'You must accept the terms to continue';
const [error, setError] = useState(errorMessage);

return (
  <s-section>
    <s-stack gap="base" justifyContent="start">
      <s-text-field label="Name" />
      <s-checkbox
        label="I agree to the terms"
        checked={checked}
        error={error}
        onChange={(e) => {
          setChecked(e.currentTarget.checked);
          setError(e.currentTarget.checked ? '' : errorMessage);
        }}
      />
    </s-stack>
  </s-section>
)
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; background: #F1F1F1;  padding: 1rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base", inlineSize="300px" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { const [checked, setChecked] = useState(false);
const errorMessage = 'You must accept the terms to continue';
const [error, setError] = useState(errorMessage);

return (
  <s-section>
    <s-stack gap="base" justifyContent="start">
      <s-text-field label="Name" />
      <s-checkbox
        label="I agree to the terms"
        checked={checked}
        error={error}
        onChange={(e) => {
          setChecked(e.currentTarget.checked);
          setError(e.currentTarget.checked ? '' : errorMessage);
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

Give users a clear way to make selections, such as agreeing to terms or choosing multiple items from a list.


### Basic usage

Checkbox in indeterminate state, commonly used for "select all" functionality when some items are selected.```jsx
const [selectedItems, setSelectedItems] = useState([]);
const items = ['Item 1', 'Item 2', 'Item 3'];

const toggleItem = (value, checked) => setSelectedItems(checked ? [...selectedItems, value] : selectedItems.filter(item => item !== value));
const toggleAll = (checked) => setSelectedItems(checked ? items : []);
const isSelected = (item) => selectedItems.includes(item);

return (
  <s-stack gap="small">
    <s-checkbox
      label="Select all items"
      indeterminate={selectedItems.length !== 0 && selectedItems.length !== items.length}
      checked={selectedItems.length === items.length}
      onChange={e => toggleAll(e.currentTarget.checked)}
    />
    <s-divider />
    {items.map(i => (
      <s-checkbox key={i} label={i} checked={isSelected(i)} onChange={e => toggleItem(i, e.currentTarget.checked)} />
    ))}
  </s-stack>
);
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { const [selectedItems, setSelectedItems] = useState([]);
const items = ['Item 1', 'Item 2', 'Item 3'];

const toggleItem = (value, checked) => setSelectedItems(checked ? [...selectedItems, value] : selectedItems.filter(item => item !== value));
const toggleAll = (checked) => setSelectedItems(checked ? items : []);
const isSelected = (item) => selectedItems.includes(item);

return (
  <s-stack gap="small">
    <s-checkbox
      label="Select all items"
      indeterminate={selectedItems.length !== 0 && selectedItems.length !== items.length}
      checked={selectedItems.length === items.length}
      onChange={e => toggleAll(e.currentTarget.checked)}
    />
    <s-divider />
    {items.map(i => (
      <s-checkbox key={i} label={i} checked={isSelected(i)} onChange={e => toggleItem(i, e.currentTarget.checked)} />
    ))}
  </s-stack>
); };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Checkbox with validation error message for required form fields.```jsx
<s-checkbox
  label="I agree to the terms"
  error="You must accept the terms to continue"
/>

```

```html
<s-checkbox
  label="I agree to the terms"
  error="You must accept the terms to continue"
></s-checkbox>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-checkbox
  label="I agree to the terms"
  error="You must accept the terms to continue"
/>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Checkbox with descriptive details text to provide additional context about the option.```jsx
<s-checkbox
  label="Send order notifications"
  details="You'll receive emails when orders are placed, fulfilled, or cancelled"
 />
```

```html
<s-checkbox
  label="Send order notifications"
  details="You'll receive emails when orders are placed, fulfilled, or cancelled"
></s-checkbox>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-checkbox
  label="Send order notifications"
  details="You'll receive emails when orders are placed, fulfilled, or cancelled"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Checkbox in disabled state with explanatory details about why it's unavailable.```jsx
<s-checkbox
  label="Advanced settings"
  disabled
  details="Contact your administrator to enable advanced settings"
 />
```

```html
<s-checkbox
  label="Advanced settings"
  disabled
  details="Contact your administrator to enable advanced settings"
></s-checkbox>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-checkbox
  label="Advanced settings"
  disabled
  details="Contact your administrator to enable advanced settings"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Multiple checkboxes for different configuration options with helpful details.```jsx
<s-stack gap="base">
  <s-checkbox label="Show only published products" checked />
  <s-checkbox
    label="Enable inventory tracking"
    details="Track inventory levels and receive low stock alerts"
    checked
   />
  <s-checkbox
    label="View customer data"
    details="Allow staff to access customer contact information and order history"
   />
</s-stack>
```

```html
<s-stack gap="base">
  <s-checkbox label="Show only published products" checked></s-checkbox>
  <s-checkbox
    label="Enable inventory tracking"
    details="Track inventory levels and receive low stock alerts"
    checked
  ></s-checkbox>
  <s-checkbox
    label="View customer data"
    details="Allow staff to access customer contact information and order history"
  ></s-checkbox>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-checkbox label="Show only published products" checked />
  <s-checkbox
    label="Enable inventory tracking"
    details="Track inventory levels and receive low stock alerts"
    checked
   />
  <s-checkbox
    label="View customer data"
    details="Allow staff to access customer contact information and order history"
   />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```


### Form validation

Interactive example showing required checkbox validation with dynamic error messages.```jsx
const [checked, setChecked] = useState(false);
const errorMessage = 'You must accept the terms to continue';
const [error, setError] = useState(errorMessage);

return (
  <s-section>
    <s-stack gap="base" justifyContent="start">
      <s-text-field label="Name" />
      <s-checkbox
        label="I agree to the terms"
        checked={checked}
        error={error}
        onChange={(e) => {
          setChecked(e.currentTarget.checked);
          setError(e.currentTarget.checked ? '' : errorMessage);
        }}
      />
    </s-stack>
  </s-section>
)
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; background: #F1F1F1;  padding: 1rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base", inlineSize="300px" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { const [checked, setChecked] = useState(false);
const errorMessage = 'You must accept the terms to continue';
const [error, setError] = useState(errorMessage);

return (
  <s-section>
    <s-stack gap="base" justifyContent="start">
      <s-text-field label="Name" />
      <s-checkbox
        label="I agree to the terms"
        checked={checked}
        error={error}
        onChange={(e) => {
          setChecked(e.currentTarget.checked);
          setError(e.currentTarget.checked ? '' : errorMessage);
        }}
      />
    </s-stack>
  </s-section>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

