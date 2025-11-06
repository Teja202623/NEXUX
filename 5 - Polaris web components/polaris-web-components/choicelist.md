# ChoiceList

Present multiple options to users, allowing either single selections with radio buttons or multiple selections with checkboxes.

```jsx
const handleChange = (event) => {
  console.log('Values: ', event.currentTarget.values)
}

return (
  <s-choice-list
    label="Company name"
    name="Company name"
    details="The company name will be displayed on the checkout page."
    onChange={handleChange}
  >
    <s-choice value="hidden">Hidden</s-choice>
    <s-choice value="optional">Optional</s-choice>
    <s-choice value="required">Required</s-choice>
  </s-choice-list>
)
```

```html
<script>
  const handleChange = (event) =>
    console.log('Values: ', event.currentTarget.values);
</script>
<s-choice-list
  label="Company name"
  name="Company name"
  details="The company name will be displayed on the checkout page."
  onChange="handleChange(event)"
>
  <s-choice value="hidden">Hidden</s-choice>
  <s-choice value="optional">Optional</s-choice>
  <s-choice value="required">Required</s-choice>
</s-choice-list>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { const handleChange = (event) => {
  console.log('Values: ', event.currentTarget.values)
}

return (
  <s-choice-list
    label="Company name"
    name="Company name"
    details="The company name will be displayed on the checkout page."
    onChange={handleChange}
  >
    <s-choice value="hidden">Hidden</s-choice>
    <s-choice value="optional">Optional</s-choice>
    <s-choice value="required">Required</s-choice>
  </s-choice-list>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Properties

### ChoiceList

### __@internals$3@6816

value: `ElementInternals`


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


### details

value: `string`

Additional text to provide context or guidance for the field. This text is displayed along with the field and its label to offer more information or instructions to the user.

This will also be exposed to screen reader users.

### disabled

value: `boolean`

Disables the field, disallowing any interaction.

`disabled` on any child choices is ignored when this is true.

### disconnectedCallback

value: `() => void`


### error

value: `string`

Indicate an error to the user. The field will be given a specific stylistic treatment to communicate problems that have to be resolved immediately.

### formResetCallback

value: `() => void`


### label

value: `string`

Content to use as the field label.

### labelAccessibilityVisibility

value: `"visible" | "exclusive"`

Changes the visibility of the component's label.

- `visible`: the label is visible to all users.
- `exclusive`: the label is visually hidden but remains in the accessibility tree.

### multiple

value: `boolean`

Whether multiple choices can be selected.

### name

value: `string`

An identifier for the field that is unique within the nearest containing form.

### queueRender

value: `() => void`

Queue a run of the render function. You shouldn't need to call this manually - it should be handled by changes to

### setAttribute

value: `(name: string, value: string) => void`


### values

value: `string[]`

An array of the `value`s of the selected options.

This is a convenience prop for setting the `selected` prop on child options.

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

Present multiple options to users, allowing either single selections with radio buttons or multiple selections with checkboxes.


### Basic usage

Demonstrates a basic ChoiceList with single selection, showing how to create a group of radio button choices.```jsx
<s-choice-list label="Product visibility" name="visibility">
  <s-choice value="hidden">Hidden</s-choice>
  <s-choice value="optional">Optional</s-choice>
  <s-choice value="required" selected>
    Required
  </s-choice>
</s-choice-list>
```

```html
<s-choice-list label="Product visibility" name="visibility">
  <s-choice value="hidden">Hidden</s-choice>
  <s-choice value="optional">Optional</s-choice>
  <s-choice value="required" selected>Required</s-choice>
</s-choice-list>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-choice-list label="Product visibility" name="visibility">
  <s-choice value="hidden">Hidden</s-choice>
  <s-choice value="optional">Optional</s-choice>
  <s-choice value="required" selected>
    Required
  </s-choice>
</s-choice-list>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates a ChoiceList with multiple selection enabled, allowing users to choose multiple options with additional descriptive details for each choice.```jsx
<s-choice-list label="Checkout options" name="checkout" multiple>
  <s-choice value="shipping" selected>
    Use the shipping address as the billing address by default
    <s-text slot="details">
      Reduces the number of fields required to check out. The billing address
      can still be edited.
    </s-text>
  </s-choice>
  <s-choice value="confirmation">
    Require a confirmation step
    <s-text slot="details">
      Customers must review their order details before purchasing.
    </s-text>
  </s-choice>
</s-choice-list>
```

```html
<s-choice-list label="Checkout options" name="checkout" multiple>
  <s-choice value="shipping" selected>
    Use the shipping address as the billing address by default
    <s-text slot="details">
      Reduces the number of fields required to check out. The billing address
      can still be edited.
    </s-text>
  </s-choice>
  <s-choice value="confirmation">
    Require a confirmation step
    <s-text slot="details">
      Customers must review their order details before purchasing.
    </s-text>
  </s-choice>
</s-choice-list>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-choice-list label="Checkout options" name="checkout" multiple>
  <s-choice value="shipping" selected>
    Use the shipping address as the billing address by default
    <s-text slot="details">
      Reduces the number of fields required to check out. The billing address
      can still be edited.
    </s-text>
  </s-choice>
  <s-choice value="confirmation">
    Require a confirmation step
    <s-text slot="details">
      Customers must review their order details before purchasing.
    </s-text>
  </s-choice>
</s-choice-list>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how to display an error message in a ChoiceList when an invalid selection is made or a validation constraint is not met.```jsx
<s-choice-list
  label="Product visibility"
  error="Please select an option"
>
  <s-choice value="hidden">Hidden</s-choice>
  <s-choice value="optional">Optional</s-choice>
  <s-choice value="required">Required</s-choice>
</s-choice-list>
```

```html
<s-choice-list
  label="Product visibility"
  name="visibility"
  error="Product visibility cannot be hidden at this time"
>
  <s-choice value="hidden">Hidden</s-choice>
  <s-choice value="optional">Optional</s-choice>
  <s-choice value="required" selected>Required</s-choice>
</s-choice-list>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-choice-list
  label="Product visibility"
  error="Please select an option"
>
  <s-choice value="hidden">Hidden</s-choice>
  <s-choice value="optional">Optional</s-choice>
  <s-choice value="required">Required</s-choice>
</s-choice-list>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Showcases a multiple-selection ChoiceList with each option including detailed information.```jsx
<s-choice-list
  label="Available shipping methods"
  name="shipping-methods"
  multiple
>
  <s-choice value="standard" selected>
    Standard shipping
    <s-text slot="details">5-7 business days delivery</s-text>
  </s-choice>
  <s-choice value="express" selected>
    Express shipping
    <s-text slot="details">2-3 business days delivery</s-text>
  </s-choice>
  <s-choice value="overnight">
    Overnight shipping
    <s-text slot="details">Next business day delivery</s-text>
  </s-choice>
</s-choice-list>
```

```html
<s-choice-list
  label="Available shipping methods"
  name="shipping-methods"
  multiple
>
  <s-choice value="standard" selected>
    Standard shipping
    <s-text slot="details">5-7 business days delivery</s-text>
  </s-choice>
  <s-choice value="express" selected>
    Express shipping
    <s-text slot="details">2-3 business days delivery</s-text>
  </s-choice>
  <s-choice value="overnight">
    Overnight shipping
    <s-text slot="details">Next business day delivery</s-text>
  </s-choice>
</s-choice-list>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-choice-list
  label="Available shipping methods"
  name="shipping-methods"
  multiple
>
  <s-choice value="standard" selected>
    Standard shipping
    <s-text slot="details">5-7 business days delivery</s-text>
  </s-choice>
  <s-choice value="express" selected>
    Express shipping
    <s-text slot="details">2-3 business days delivery</s-text>
  </s-choice>
  <s-choice value="overnight">
    Overnight shipping
    <s-text slot="details">Next business day delivery</s-text>
  </s-choice>
</s-choice-list>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```


### Form validation

Interactive example showing required choice validation with dynamic error messages.```jsx
const [error, setError] = useState('Please select at least one option');

return (
  <s-section>
    <s-stack gap="base" justifyContent="start">
      <s-choice-list
        label="Product visibility"
        name="visibility"
        error={error}
        onChange={(e) => {
          setError(e.currentTarget.values.length > 0 ? '' : 'Please select at least one option');
        }}
      >
        <s-choice value="hidden">Hidden</s-choice>
        <s-choice value="optional">Optional</s-choice>
        <s-choice value="required">Required</s-choice>
      </s-choice-list>
    </s-stack>
  </s-section>
)
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; background: #F1F1F1;  padding: 1rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base", inlineSize="300px" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { const [error, setError] = useState('Please select at least one option');

return (
  <s-section>
    <s-stack gap="base" justifyContent="start">
      <s-choice-list
        label="Product visibility"
        name="visibility"
        error={error}
        onChange={(e) => {
          setError(e.currentTarget.values.length > 0 ? '' : 'Please select at least one option');
        }}
      >
        <s-choice value="hidden">Hidden</s-choice>
        <s-choice value="optional">Optional</s-choice>
        <s-choice value="required">Required</s-choice>
      </s-choice-list>
    </s-stack>
  </s-section>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Events

Learn more about [registering events](https://shopify.dev/docs/api/app-home/using-polaris-components#event-handling).

### ChoiceListEvents

### change

value: `CallbackEventListener<typeof tagName> | null`

  - CallbackEventListener: (EventListener & {
      (event: CallbackEvent<T>): void;
    }) | null
  - CallbackEvent: Event & {
  currentTarget: HTMLElementTagNameMap[T];
}

### input

value: `CallbackEventListener<typeof tagName> | null`

  - CallbackEventListener: (EventListener & {
      (event: CallbackEvent<T>): void;
    }) | null
  - CallbackEvent: Event & {
  currentTarget: HTMLElementTagNameMap[T];
}

## Examples

Present multiple options to users, allowing either single selections with radio buttons or multiple selections with checkboxes.


### Basic usage

Demonstrates a basic ChoiceList with single selection, showing how to create a group of radio button choices.```jsx
<s-choice-list label="Product visibility" name="visibility">
  <s-choice value="hidden">Hidden</s-choice>
  <s-choice value="optional">Optional</s-choice>
  <s-choice value="required" selected>
    Required
  </s-choice>
</s-choice-list>
```

```html
<s-choice-list label="Product visibility" name="visibility">
  <s-choice value="hidden">Hidden</s-choice>
  <s-choice value="optional">Optional</s-choice>
  <s-choice value="required" selected>Required</s-choice>
</s-choice-list>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-choice-list label="Product visibility" name="visibility">
  <s-choice value="hidden">Hidden</s-choice>
  <s-choice value="optional">Optional</s-choice>
  <s-choice value="required" selected>
    Required
  </s-choice>
</s-choice-list>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates a ChoiceList with multiple selection enabled, allowing users to choose multiple options with additional descriptive details for each choice.```jsx
<s-choice-list label="Checkout options" name="checkout" multiple>
  <s-choice value="shipping" selected>
    Use the shipping address as the billing address by default
    <s-text slot="details">
      Reduces the number of fields required to check out. The billing address
      can still be edited.
    </s-text>
  </s-choice>
  <s-choice value="confirmation">
    Require a confirmation step
    <s-text slot="details">
      Customers must review their order details before purchasing.
    </s-text>
  </s-choice>
</s-choice-list>
```

```html
<s-choice-list label="Checkout options" name="checkout" multiple>
  <s-choice value="shipping" selected>
    Use the shipping address as the billing address by default
    <s-text slot="details">
      Reduces the number of fields required to check out. The billing address
      can still be edited.
    </s-text>
  </s-choice>
  <s-choice value="confirmation">
    Require a confirmation step
    <s-text slot="details">
      Customers must review their order details before purchasing.
    </s-text>
  </s-choice>
</s-choice-list>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-choice-list label="Checkout options" name="checkout" multiple>
  <s-choice value="shipping" selected>
    Use the shipping address as the billing address by default
    <s-text slot="details">
      Reduces the number of fields required to check out. The billing address
      can still be edited.
    </s-text>
  </s-choice>
  <s-choice value="confirmation">
    Require a confirmation step
    <s-text slot="details">
      Customers must review their order details before purchasing.
    </s-text>
  </s-choice>
</s-choice-list>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how to display an error message in a ChoiceList when an invalid selection is made or a validation constraint is not met.```jsx
<s-choice-list
  label="Product visibility"
  error="Please select an option"
>
  <s-choice value="hidden">Hidden</s-choice>
  <s-choice value="optional">Optional</s-choice>
  <s-choice value="required">Required</s-choice>
</s-choice-list>
```

```html
<s-choice-list
  label="Product visibility"
  name="visibility"
  error="Product visibility cannot be hidden at this time"
>
  <s-choice value="hidden">Hidden</s-choice>
  <s-choice value="optional">Optional</s-choice>
  <s-choice value="required" selected>Required</s-choice>
</s-choice-list>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-choice-list
  label="Product visibility"
  error="Please select an option"
>
  <s-choice value="hidden">Hidden</s-choice>
  <s-choice value="optional">Optional</s-choice>
  <s-choice value="required">Required</s-choice>
</s-choice-list>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Showcases a multiple-selection ChoiceList with each option including detailed information.```jsx
<s-choice-list
  label="Available shipping methods"
  name="shipping-methods"
  multiple
>
  <s-choice value="standard" selected>
    Standard shipping
    <s-text slot="details">5-7 business days delivery</s-text>
  </s-choice>
  <s-choice value="express" selected>
    Express shipping
    <s-text slot="details">2-3 business days delivery</s-text>
  </s-choice>
  <s-choice value="overnight">
    Overnight shipping
    <s-text slot="details">Next business day delivery</s-text>
  </s-choice>
</s-choice-list>
```

```html
<s-choice-list
  label="Available shipping methods"
  name="shipping-methods"
  multiple
>
  <s-choice value="standard" selected>
    Standard shipping
    <s-text slot="details">5-7 business days delivery</s-text>
  </s-choice>
  <s-choice value="express" selected>
    Express shipping
    <s-text slot="details">2-3 business days delivery</s-text>
  </s-choice>
  <s-choice value="overnight">
    Overnight shipping
    <s-text slot="details">Next business day delivery</s-text>
  </s-choice>
</s-choice-list>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-choice-list
  label="Available shipping methods"
  name="shipping-methods"
  multiple
>
  <s-choice value="standard" selected>
    Standard shipping
    <s-text slot="details">5-7 business days delivery</s-text>
  </s-choice>
  <s-choice value="express" selected>
    Express shipping
    <s-text slot="details">2-3 business days delivery</s-text>
  </s-choice>
  <s-choice value="overnight">
    Overnight shipping
    <s-text slot="details">Next business day delivery</s-text>
  </s-choice>
</s-choice-list>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```


### Form validation

Interactive example showing required choice validation with dynamic error messages.```jsx
const [error, setError] = useState('Please select at least one option');

return (
  <s-section>
    <s-stack gap="base" justifyContent="start">
      <s-choice-list
        label="Product visibility"
        name="visibility"
        error={error}
        onChange={(e) => {
          setError(e.currentTarget.values.length > 0 ? '' : 'Please select at least one option');
        }}
      >
        <s-choice value="hidden">Hidden</s-choice>
        <s-choice value="optional">Optional</s-choice>
        <s-choice value="required">Required</s-choice>
      </s-choice-list>
    </s-stack>
  </s-section>
)
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; background: #F1F1F1;  padding: 1rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base", inlineSize="300px" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { const [error, setError] = useState('Please select at least one option');

return (
  <s-section>
    <s-stack gap="base" justifyContent="start">
      <s-choice-list
        label="Product visibility"
        name="visibility"
        error={error}
        onChange={(e) => {
          setError(e.currentTarget.values.length > 0 ? '' : 'Please select at least one option');
        }}
      >
        <s-choice value="hidden">Hidden</s-choice>
        <s-choice value="optional">Optional</s-choice>
        <s-choice value="required">Required</s-choice>
      </s-choice-list>
    </s-stack>
  </s-section>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Choice

Create options that let users select one or multiple items from a list of choices.

### Choice

### accessibilityLabel

value: `string`

A label used for users using assistive technologies like screen readers. When set, any children or `label` supplied will not be announced. This can also be used to display a control without a visual label, while still providing context to users using screen readers.

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


### defaultSelected

value: `boolean`

Whether the control is active by default.

### disabled

value: `boolean`

Disables the control, disallowing any interaction.

### disconnectedCallback

value: `() => void`


### queueRender

value: `() => void`

Queue a run of the render function. You shouldn't need to call this manually - it should be handled by changes to

### selected

value: `boolean`

Whether the control is active.

### setAttribute

value: `(name: string, value: string) => void`


### value

value: `string`

The value used in form data when the control is checked.

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

Present multiple options to users, allowing either single selections with radio buttons or multiple selections with checkboxes.


### Basic usage

Demonstrates a basic ChoiceList with single selection, showing how to create a group of radio button choices.```jsx
<s-choice-list label="Product visibility" name="visibility">
  <s-choice value="hidden">Hidden</s-choice>
  <s-choice value="optional">Optional</s-choice>
  <s-choice value="required" selected>
    Required
  </s-choice>
</s-choice-list>
```

```html
<s-choice-list label="Product visibility" name="visibility">
  <s-choice value="hidden">Hidden</s-choice>
  <s-choice value="optional">Optional</s-choice>
  <s-choice value="required" selected>Required</s-choice>
</s-choice-list>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-choice-list label="Product visibility" name="visibility">
  <s-choice value="hidden">Hidden</s-choice>
  <s-choice value="optional">Optional</s-choice>
  <s-choice value="required" selected>
    Required
  </s-choice>
</s-choice-list>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates a ChoiceList with multiple selection enabled, allowing users to choose multiple options with additional descriptive details for each choice.```jsx
<s-choice-list label="Checkout options" name="checkout" multiple>
  <s-choice value="shipping" selected>
    Use the shipping address as the billing address by default
    <s-text slot="details">
      Reduces the number of fields required to check out. The billing address
      can still be edited.
    </s-text>
  </s-choice>
  <s-choice value="confirmation">
    Require a confirmation step
    <s-text slot="details">
      Customers must review their order details before purchasing.
    </s-text>
  </s-choice>
</s-choice-list>
```

```html
<s-choice-list label="Checkout options" name="checkout" multiple>
  <s-choice value="shipping" selected>
    Use the shipping address as the billing address by default
    <s-text slot="details">
      Reduces the number of fields required to check out. The billing address
      can still be edited.
    </s-text>
  </s-choice>
  <s-choice value="confirmation">
    Require a confirmation step
    <s-text slot="details">
      Customers must review their order details before purchasing.
    </s-text>
  </s-choice>
</s-choice-list>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-choice-list label="Checkout options" name="checkout" multiple>
  <s-choice value="shipping" selected>
    Use the shipping address as the billing address by default
    <s-text slot="details">
      Reduces the number of fields required to check out. The billing address
      can still be edited.
    </s-text>
  </s-choice>
  <s-choice value="confirmation">
    Require a confirmation step
    <s-text slot="details">
      Customers must review their order details before purchasing.
    </s-text>
  </s-choice>
</s-choice-list>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how to display an error message in a ChoiceList when an invalid selection is made or a validation constraint is not met.```jsx
<s-choice-list
  label="Product visibility"
  error="Please select an option"
>
  <s-choice value="hidden">Hidden</s-choice>
  <s-choice value="optional">Optional</s-choice>
  <s-choice value="required">Required</s-choice>
</s-choice-list>
```

```html
<s-choice-list
  label="Product visibility"
  name="visibility"
  error="Product visibility cannot be hidden at this time"
>
  <s-choice value="hidden">Hidden</s-choice>
  <s-choice value="optional">Optional</s-choice>
  <s-choice value="required" selected>Required</s-choice>
</s-choice-list>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-choice-list
  label="Product visibility"
  error="Please select an option"
>
  <s-choice value="hidden">Hidden</s-choice>
  <s-choice value="optional">Optional</s-choice>
  <s-choice value="required">Required</s-choice>
</s-choice-list>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Showcases a multiple-selection ChoiceList with each option including detailed information.```jsx
<s-choice-list
  label="Available shipping methods"
  name="shipping-methods"
  multiple
>
  <s-choice value="standard" selected>
    Standard shipping
    <s-text slot="details">5-7 business days delivery</s-text>
  </s-choice>
  <s-choice value="express" selected>
    Express shipping
    <s-text slot="details">2-3 business days delivery</s-text>
  </s-choice>
  <s-choice value="overnight">
    Overnight shipping
    <s-text slot="details">Next business day delivery</s-text>
  </s-choice>
</s-choice-list>
```

```html
<s-choice-list
  label="Available shipping methods"
  name="shipping-methods"
  multiple
>
  <s-choice value="standard" selected>
    Standard shipping
    <s-text slot="details">5-7 business days delivery</s-text>
  </s-choice>
  <s-choice value="express" selected>
    Express shipping
    <s-text slot="details">2-3 business days delivery</s-text>
  </s-choice>
  <s-choice value="overnight">
    Overnight shipping
    <s-text slot="details">Next business day delivery</s-text>
  </s-choice>
</s-choice-list>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-choice-list
  label="Available shipping methods"
  name="shipping-methods"
  multiple
>
  <s-choice value="standard" selected>
    Standard shipping
    <s-text slot="details">5-7 business days delivery</s-text>
  </s-choice>
  <s-choice value="express" selected>
    Express shipping
    <s-text slot="details">2-3 business days delivery</s-text>
  </s-choice>
  <s-choice value="overnight">
    Overnight shipping
    <s-text slot="details">Next business day delivery</s-text>
  </s-choice>
</s-choice-list>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```


### Form validation

Interactive example showing required choice validation with dynamic error messages.```jsx
const [error, setError] = useState('Please select at least one option');

return (
  <s-section>
    <s-stack gap="base" justifyContent="start">
      <s-choice-list
        label="Product visibility"
        name="visibility"
        error={error}
        onChange={(e) => {
          setError(e.currentTarget.values.length > 0 ? '' : 'Please select at least one option');
        }}
      >
        <s-choice value="hidden">Hidden</s-choice>
        <s-choice value="optional">Optional</s-choice>
        <s-choice value="required">Required</s-choice>
      </s-choice-list>
    </s-stack>
  </s-section>
)
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; background: #F1F1F1;  padding: 1rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base", inlineSize="300px" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { const [error, setError] = useState('Please select at least one option');

return (
  <s-section>
    <s-stack gap="base" justifyContent="start">
      <s-choice-list
        label="Product visibility"
        name="visibility"
        error={error}
        onChange={(e) => {
          setError(e.currentTarget.values.length > 0 ? '' : 'Please select at least one option');
        }}
      >
        <s-choice value="hidden">Hidden</s-choice>
        <s-choice value="optional">Optional</s-choice>
        <s-choice value="required">Required</s-choice>
      </s-choice-list>
    </s-stack>
  </s-section>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Slots

### ChoiceSlots

### children

value: `HTMLElement`

Content to use as the choice label.

The label is produced by extracting and concatenating the text nodes from the provided content; any markup or element structure is ignored.

### details

value: `HTMLElement`

Additional text to provide context or guidance for the input.

This text is displayed along with the input and its label to offer more information or instructions to the user.

## Examples

Present multiple options to users, allowing either single selections with radio buttons or multiple selections with checkboxes.


### Basic usage

Demonstrates a basic ChoiceList with single selection, showing how to create a group of radio button choices.```jsx
<s-choice-list label="Product visibility" name="visibility">
  <s-choice value="hidden">Hidden</s-choice>
  <s-choice value="optional">Optional</s-choice>
  <s-choice value="required" selected>
    Required
  </s-choice>
</s-choice-list>
```

```html
<s-choice-list label="Product visibility" name="visibility">
  <s-choice value="hidden">Hidden</s-choice>
  <s-choice value="optional">Optional</s-choice>
  <s-choice value="required" selected>Required</s-choice>
</s-choice-list>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-choice-list label="Product visibility" name="visibility">
  <s-choice value="hidden">Hidden</s-choice>
  <s-choice value="optional">Optional</s-choice>
  <s-choice value="required" selected>
    Required
  </s-choice>
</s-choice-list>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates a ChoiceList with multiple selection enabled, allowing users to choose multiple options with additional descriptive details for each choice.```jsx
<s-choice-list label="Checkout options" name="checkout" multiple>
  <s-choice value="shipping" selected>
    Use the shipping address as the billing address by default
    <s-text slot="details">
      Reduces the number of fields required to check out. The billing address
      can still be edited.
    </s-text>
  </s-choice>
  <s-choice value="confirmation">
    Require a confirmation step
    <s-text slot="details">
      Customers must review their order details before purchasing.
    </s-text>
  </s-choice>
</s-choice-list>
```

```html
<s-choice-list label="Checkout options" name="checkout" multiple>
  <s-choice value="shipping" selected>
    Use the shipping address as the billing address by default
    <s-text slot="details">
      Reduces the number of fields required to check out. The billing address
      can still be edited.
    </s-text>
  </s-choice>
  <s-choice value="confirmation">
    Require a confirmation step
    <s-text slot="details">
      Customers must review their order details before purchasing.
    </s-text>
  </s-choice>
</s-choice-list>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-choice-list label="Checkout options" name="checkout" multiple>
  <s-choice value="shipping" selected>
    Use the shipping address as the billing address by default
    <s-text slot="details">
      Reduces the number of fields required to check out. The billing address
      can still be edited.
    </s-text>
  </s-choice>
  <s-choice value="confirmation">
    Require a confirmation step
    <s-text slot="details">
      Customers must review their order details before purchasing.
    </s-text>
  </s-choice>
</s-choice-list>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how to display an error message in a ChoiceList when an invalid selection is made or a validation constraint is not met.```jsx
<s-choice-list
  label="Product visibility"
  error="Please select an option"
>
  <s-choice value="hidden">Hidden</s-choice>
  <s-choice value="optional">Optional</s-choice>
  <s-choice value="required">Required</s-choice>
</s-choice-list>
```

```html
<s-choice-list
  label="Product visibility"
  name="visibility"
  error="Product visibility cannot be hidden at this time"
>
  <s-choice value="hidden">Hidden</s-choice>
  <s-choice value="optional">Optional</s-choice>
  <s-choice value="required" selected>Required</s-choice>
</s-choice-list>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-choice-list
  label="Product visibility"
  error="Please select an option"
>
  <s-choice value="hidden">Hidden</s-choice>
  <s-choice value="optional">Optional</s-choice>
  <s-choice value="required">Required</s-choice>
</s-choice-list>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Showcases a multiple-selection ChoiceList with each option including detailed information.```jsx
<s-choice-list
  label="Available shipping methods"
  name="shipping-methods"
  multiple
>
  <s-choice value="standard" selected>
    Standard shipping
    <s-text slot="details">5-7 business days delivery</s-text>
  </s-choice>
  <s-choice value="express" selected>
    Express shipping
    <s-text slot="details">2-3 business days delivery</s-text>
  </s-choice>
  <s-choice value="overnight">
    Overnight shipping
    <s-text slot="details">Next business day delivery</s-text>
  </s-choice>
</s-choice-list>
```

```html
<s-choice-list
  label="Available shipping methods"
  name="shipping-methods"
  multiple
>
  <s-choice value="standard" selected>
    Standard shipping
    <s-text slot="details">5-7 business days delivery</s-text>
  </s-choice>
  <s-choice value="express" selected>
    Express shipping
    <s-text slot="details">2-3 business days delivery</s-text>
  </s-choice>
  <s-choice value="overnight">
    Overnight shipping
    <s-text slot="details">Next business day delivery</s-text>
  </s-choice>
</s-choice-list>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-choice-list
  label="Available shipping methods"
  name="shipping-methods"
  multiple
>
  <s-choice value="standard" selected>
    Standard shipping
    <s-text slot="details">5-7 business days delivery</s-text>
  </s-choice>
  <s-choice value="express" selected>
    Express shipping
    <s-text slot="details">2-3 business days delivery</s-text>
  </s-choice>
  <s-choice value="overnight">
    Overnight shipping
    <s-text slot="details">Next business day delivery</s-text>
  </s-choice>
</s-choice-list>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```


### Form validation

Interactive example showing required choice validation with dynamic error messages.```jsx
const [error, setError] = useState('Please select at least one option');

return (
  <s-section>
    <s-stack gap="base" justifyContent="start">
      <s-choice-list
        label="Product visibility"
        name="visibility"
        error={error}
        onChange={(e) => {
          setError(e.currentTarget.values.length > 0 ? '' : 'Please select at least one option');
        }}
      >
        <s-choice value="hidden">Hidden</s-choice>
        <s-choice value="optional">Optional</s-choice>
        <s-choice value="required">Required</s-choice>
      </s-choice-list>
    </s-stack>
  </s-section>
)
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; background: #F1F1F1;  padding: 1rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base", inlineSize="300px" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { const [error, setError] = useState('Please select at least one option');

return (
  <s-section>
    <s-stack gap="base" justifyContent="start">
      <s-choice-list
        label="Product visibility"
        name="visibility"
        error={error}
        onChange={(e) => {
          setError(e.currentTarget.values.length > 0 ? '' : 'Please select at least one option');
        }}
      >
        <s-choice value="hidden">Hidden</s-choice>
        <s-choice value="optional">Optional</s-choice>
        <s-choice value="required">Required</s-choice>
      </s-choice-list>
    </s-stack>
  </s-section>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Examples

Present multiple options to users, allowing either single selections with radio buttons or multiple selections with checkboxes.


### Basic usage

Demonstrates a basic ChoiceList with single selection, showing how to create a group of radio button choices.```jsx
<s-choice-list label="Product visibility" name="visibility">
  <s-choice value="hidden">Hidden</s-choice>
  <s-choice value="optional">Optional</s-choice>
  <s-choice value="required" selected>
    Required
  </s-choice>
</s-choice-list>
```

```html
<s-choice-list label="Product visibility" name="visibility">
  <s-choice value="hidden">Hidden</s-choice>
  <s-choice value="optional">Optional</s-choice>
  <s-choice value="required" selected>Required</s-choice>
</s-choice-list>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-choice-list label="Product visibility" name="visibility">
  <s-choice value="hidden">Hidden</s-choice>
  <s-choice value="optional">Optional</s-choice>
  <s-choice value="required" selected>
    Required
  </s-choice>
</s-choice-list>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates a ChoiceList with multiple selection enabled, allowing users to choose multiple options with additional descriptive details for each choice.```jsx
<s-choice-list label="Checkout options" name="checkout" multiple>
  <s-choice value="shipping" selected>
    Use the shipping address as the billing address by default
    <s-text slot="details">
      Reduces the number of fields required to check out. The billing address
      can still be edited.
    </s-text>
  </s-choice>
  <s-choice value="confirmation">
    Require a confirmation step
    <s-text slot="details">
      Customers must review their order details before purchasing.
    </s-text>
  </s-choice>
</s-choice-list>
```

```html
<s-choice-list label="Checkout options" name="checkout" multiple>
  <s-choice value="shipping" selected>
    Use the shipping address as the billing address by default
    <s-text slot="details">
      Reduces the number of fields required to check out. The billing address
      can still be edited.
    </s-text>
  </s-choice>
  <s-choice value="confirmation">
    Require a confirmation step
    <s-text slot="details">
      Customers must review their order details before purchasing.
    </s-text>
  </s-choice>
</s-choice-list>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-choice-list label="Checkout options" name="checkout" multiple>
  <s-choice value="shipping" selected>
    Use the shipping address as the billing address by default
    <s-text slot="details">
      Reduces the number of fields required to check out. The billing address
      can still be edited.
    </s-text>
  </s-choice>
  <s-choice value="confirmation">
    Require a confirmation step
    <s-text slot="details">
      Customers must review their order details before purchasing.
    </s-text>
  </s-choice>
</s-choice-list>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how to display an error message in a ChoiceList when an invalid selection is made or a validation constraint is not met.```jsx
<s-choice-list
  label="Product visibility"
  error="Please select an option"
>
  <s-choice value="hidden">Hidden</s-choice>
  <s-choice value="optional">Optional</s-choice>
  <s-choice value="required">Required</s-choice>
</s-choice-list>
```

```html
<s-choice-list
  label="Product visibility"
  name="visibility"
  error="Product visibility cannot be hidden at this time"
>
  <s-choice value="hidden">Hidden</s-choice>
  <s-choice value="optional">Optional</s-choice>
  <s-choice value="required" selected>Required</s-choice>
</s-choice-list>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-choice-list
  label="Product visibility"
  error="Please select an option"
>
  <s-choice value="hidden">Hidden</s-choice>
  <s-choice value="optional">Optional</s-choice>
  <s-choice value="required">Required</s-choice>
</s-choice-list>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Showcases a multiple-selection ChoiceList with each option including detailed information.```jsx
<s-choice-list
  label="Available shipping methods"
  name="shipping-methods"
  multiple
>
  <s-choice value="standard" selected>
    Standard shipping
    <s-text slot="details">5-7 business days delivery</s-text>
  </s-choice>
  <s-choice value="express" selected>
    Express shipping
    <s-text slot="details">2-3 business days delivery</s-text>
  </s-choice>
  <s-choice value="overnight">
    Overnight shipping
    <s-text slot="details">Next business day delivery</s-text>
  </s-choice>
</s-choice-list>
```

```html
<s-choice-list
  label="Available shipping methods"
  name="shipping-methods"
  multiple
>
  <s-choice value="standard" selected>
    Standard shipping
    <s-text slot="details">5-7 business days delivery</s-text>
  </s-choice>
  <s-choice value="express" selected>
    Express shipping
    <s-text slot="details">2-3 business days delivery</s-text>
  </s-choice>
  <s-choice value="overnight">
    Overnight shipping
    <s-text slot="details">Next business day delivery</s-text>
  </s-choice>
</s-choice-list>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-choice-list
  label="Available shipping methods"
  name="shipping-methods"
  multiple
>
  <s-choice value="standard" selected>
    Standard shipping
    <s-text slot="details">5-7 business days delivery</s-text>
  </s-choice>
  <s-choice value="express" selected>
    Express shipping
    <s-text slot="details">2-3 business days delivery</s-text>
  </s-choice>
  <s-choice value="overnight">
    Overnight shipping
    <s-text slot="details">Next business day delivery</s-text>
  </s-choice>
</s-choice-list>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```


### Form validation

Interactive example showing required choice validation with dynamic error messages.```jsx
const [error, setError] = useState('Please select at least one option');

return (
  <s-section>
    <s-stack gap="base" justifyContent="start">
      <s-choice-list
        label="Product visibility"
        name="visibility"
        error={error}
        onChange={(e) => {
          setError(e.currentTarget.values.length > 0 ? '' : 'Please select at least one option');
        }}
      >
        <s-choice value="hidden">Hidden</s-choice>
        <s-choice value="optional">Optional</s-choice>
        <s-choice value="required">Required</s-choice>
      </s-choice-list>
    </s-stack>
  </s-section>
)
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; background: #F1F1F1;  padding: 1rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base", inlineSize="300px" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { const [error, setError] = useState('Please select at least one option');

return (
  <s-section>
    <s-stack gap="base" justifyContent="start">
      <s-choice-list
        label="Product visibility"
        name="visibility"
        error={error}
        onChange={(e) => {
          setError(e.currentTarget.values.length > 0 ? '' : 'Please select at least one option');
        }}
      >
        <s-choice value="hidden">Hidden</s-choice>
        <s-choice value="optional">Optional</s-choice>
        <s-choice value="required">Required</s-choice>
      </s-choice-list>
    </s-stack>
  </s-section>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

