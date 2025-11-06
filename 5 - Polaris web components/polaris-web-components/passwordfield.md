# PasswordField

Securely collect sensitive information from users.

```jsx
<s-password-field
  label="Password"
  placeholder="Enter your password"
  details="Must be at least 8 characters long"
  minLength={8}
 />
```

```html
<s-password-field
  label="Password"
  placeholder="Enter your password"
  details="Must be at least 8 characters long"
  minLength="8"
></s-password-field>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-password-field
  label="Password"
  placeholder="Enter your password"
  details="Must be at least 8 characters long"
  minLength={8}
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Properties

### PasswordField

### __@internals$4@6764

value: `ElementInternals`


### adoptedCallback

value: `() => void`


### attributeChangedCallback

value: `(name: string) => void`


### autocomplete

value: `"on" | "off" | PasswordAutocompleteField | `section-${string} current-password` | `section-${string} new-password` | "shipping current-password" | "shipping new-password" | "billing current-password" | "billing new-password" | `section-${string} shipping current-password` | `section-${string} shipping new-password` | `section-${string} billing current-password` | `section-${string} billing new-password``

  - PasswordAutocompleteField: 'current-password' | 'new-password'
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

### maxLength

value: `number`

Specifies the maximum number of characters allowed.

### minLength

value: `number`

Specifies the min number of characters allowed.

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

Securely collect sensitive information from users.


### Basic usage

Demonstrates a basic password field with a label, name, and required validation. Sets a minimum length of 8 characters and configures autocomplete for a new password.```jsx
<s-password-field
  label="Password"
  name="password"
  required
  minLength={8}
  autocomplete="new-password"
/>

```

```html
<s-password-field
  label="Password"
  name="password"
  required
  minLength="8"
  autocomplete="new-password"
></s-password-field>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-password-field
  label="Password"
  name="password"
  required
  minLength={8}
  autocomplete="new-password"
/>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows a password field in an error state, displaying a custom error message when the password does not meet the minimum length requirement.```jsx
<s-password-field
  label="Password"
  name="password"
  error="Password must be at least 8 characters"
  minLength={8}
  autocomplete="new-password"
 />
```

```html
<s-password-field
  label="Password"
  name="password"
  error="Password must be at least 8 characters"
  minLength="8"
  autocomplete="new-password"
></s-password-field>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-password-field
  label="Password"
  name="password"
  error="Password must be at least 8 characters"
  minLength={8}
  autocomplete="new-password"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates a password field with additional details providing guidance about password creation requirements.```jsx
<s-password-field
  label="Create password"
  name="new-password"
  details="Password must be at least 8 characters and include uppercase, lowercase, and numbers"
  minLength={8}
  autocomplete="new-password"
 />
```

```html
<s-password-field
  label="Create password"
  name="new-password"
  details="Password must be at least 8 characters and include uppercase, lowercase, and numbers"
  minLength="8"
  autocomplete="new-password"
></s-password-field>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-password-field
  label="Create password"
  name="new-password"
  details="Password must be at least 8 characters and include uppercase, lowercase, and numbers"
  minLength={8}
  autocomplete="new-password"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how the password field can be integrated into a form alongside other input fields, such as an email field, to create a complete login or registration form.```jsx
<s-stack gap="base">
  <s-email-field
    label="Email"
    name="email"
    autocomplete="email"
    required
   />
  <s-password-field
    label="Password"
    name="password"
    autocomplete="current-password"
    required
   />
</s-stack>
```

```html
<s-stack gap="base">
  <s-email-field
    label="Email"
    name="email"
    autocomplete="username"
    required
  ></s-email-field>
  <s-password-field
    label="Password"
    name="password"
    autocomplete="current-password"
    required
  ></s-password-field>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-email-field
    label="Email"
    name="email"
    autocomplete="email"
    required
   />
  <s-password-field
    label="Password"
    name="password"
    autocomplete="current-password"
    required
   />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates a password field with dynamic password strength validation, showing real-time feedback on password complexity requirements.```jsx
<s-stack gap="large-100">
  <s-password-field
    label="Create password"
    name="password"
    value="example-password"
    autocomplete="new-password"
    required
   />
  <s-stack gap="small-200">
    <s-text tone="success">✓ At least 8 characters</s-text>
    <s-text color="subdued">○ Contains uppercase letter</s-text>
    <s-text color="subdued">○ Contains lowercase letter</s-text>
    <s-text color="subdued">○ Contains number</s-text>
  </s-stack>
</s-stack>
```

```html
<s-stack gap="large-100">
  <s-password-field
    label="Create password"
    name="password"
    value="example-password"
    autocomplete="new-password"
    required
  ></s-password-field>
  <s-stack gap="small-200">
    <s-text tone="success">✓ At least 8 characters</s-text>
    <s-text color="subdued">○ Contains uppercase letter</s-text>
    <s-text color="subdued">○ Contains lowercase letter</s-text>
    <s-text color="subdued">○ Contains number</s-text>
  </s-stack>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="large-100">
  <s-password-field
    label="Create password"
    name="password"
    value="example-password"
    autocomplete="new-password"
    required
   />
  <s-stack gap="small-200">
    <s-text tone="success">✓ At least 8 characters</s-text>
    <s-text color="subdued">○ Contains uppercase letter</s-text>
    <s-text color="subdued">○ Contains lowercase letter</s-text>
    <s-text color="subdued">○ Contains number</s-text>
  </s-stack>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Events

Learn more about [registering events](https://shopify.dev/docs/api/app-home/using-polaris-components#event-handling).

### PasswordFieldEvents

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

Securely collect sensitive information from users.


### Basic usage

Demonstrates a basic password field with a label, name, and required validation. Sets a minimum length of 8 characters and configures autocomplete for a new password.```jsx
<s-password-field
  label="Password"
  name="password"
  required
  minLength={8}
  autocomplete="new-password"
/>

```

```html
<s-password-field
  label="Password"
  name="password"
  required
  minLength="8"
  autocomplete="new-password"
></s-password-field>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-password-field
  label="Password"
  name="password"
  required
  minLength={8}
  autocomplete="new-password"
/>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows a password field in an error state, displaying a custom error message when the password does not meet the minimum length requirement.```jsx
<s-password-field
  label="Password"
  name="password"
  error="Password must be at least 8 characters"
  minLength={8}
  autocomplete="new-password"
 />
```

```html
<s-password-field
  label="Password"
  name="password"
  error="Password must be at least 8 characters"
  minLength="8"
  autocomplete="new-password"
></s-password-field>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-password-field
  label="Password"
  name="password"
  error="Password must be at least 8 characters"
  minLength={8}
  autocomplete="new-password"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates a password field with additional details providing guidance about password creation requirements.```jsx
<s-password-field
  label="Create password"
  name="new-password"
  details="Password must be at least 8 characters and include uppercase, lowercase, and numbers"
  minLength={8}
  autocomplete="new-password"
 />
```

```html
<s-password-field
  label="Create password"
  name="new-password"
  details="Password must be at least 8 characters and include uppercase, lowercase, and numbers"
  minLength="8"
  autocomplete="new-password"
></s-password-field>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-password-field
  label="Create password"
  name="new-password"
  details="Password must be at least 8 characters and include uppercase, lowercase, and numbers"
  minLength={8}
  autocomplete="new-password"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how the password field can be integrated into a form alongside other input fields, such as an email field, to create a complete login or registration form.```jsx
<s-stack gap="base">
  <s-email-field
    label="Email"
    name="email"
    autocomplete="email"
    required
   />
  <s-password-field
    label="Password"
    name="password"
    autocomplete="current-password"
    required
   />
</s-stack>
```

```html
<s-stack gap="base">
  <s-email-field
    label="Email"
    name="email"
    autocomplete="username"
    required
  ></s-email-field>
  <s-password-field
    label="Password"
    name="password"
    autocomplete="current-password"
    required
  ></s-password-field>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-email-field
    label="Email"
    name="email"
    autocomplete="email"
    required
   />
  <s-password-field
    label="Password"
    name="password"
    autocomplete="current-password"
    required
   />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates a password field with dynamic password strength validation, showing real-time feedback on password complexity requirements.```jsx
<s-stack gap="large-100">
  <s-password-field
    label="Create password"
    name="password"
    value="example-password"
    autocomplete="new-password"
    required
   />
  <s-stack gap="small-200">
    <s-text tone="success">✓ At least 8 characters</s-text>
    <s-text color="subdued">○ Contains uppercase letter</s-text>
    <s-text color="subdued">○ Contains lowercase letter</s-text>
    <s-text color="subdued">○ Contains number</s-text>
  </s-stack>
</s-stack>
```

```html
<s-stack gap="large-100">
  <s-password-field
    label="Create password"
    name="password"
    value="example-password"
    autocomplete="new-password"
    required
  ></s-password-field>
  <s-stack gap="small-200">
    <s-text tone="success">✓ At least 8 characters</s-text>
    <s-text color="subdued">○ Contains uppercase letter</s-text>
    <s-text color="subdued">○ Contains lowercase letter</s-text>
    <s-text color="subdued">○ Contains number</s-text>
  </s-stack>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="large-100">
  <s-password-field
    label="Create password"
    name="password"
    value="example-password"
    autocomplete="new-password"
    required
   />
  <s-stack gap="small-200">
    <s-text tone="success">✓ At least 8 characters</s-text>
    <s-text color="subdued">○ Contains uppercase letter</s-text>
    <s-text color="subdued">○ Contains lowercase letter</s-text>
    <s-text color="subdued">○ Contains number</s-text>
  </s-stack>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Examples

Securely collect sensitive information from users.


### Basic usage

Demonstrates a basic password field with a label, name, and required validation. Sets a minimum length of 8 characters and configures autocomplete for a new password.```jsx
<s-password-field
  label="Password"
  name="password"
  required
  minLength={8}
  autocomplete="new-password"
/>

```

```html
<s-password-field
  label="Password"
  name="password"
  required
  minLength="8"
  autocomplete="new-password"
></s-password-field>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-password-field
  label="Password"
  name="password"
  required
  minLength={8}
  autocomplete="new-password"
/>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows a password field in an error state, displaying a custom error message when the password does not meet the minimum length requirement.```jsx
<s-password-field
  label="Password"
  name="password"
  error="Password must be at least 8 characters"
  minLength={8}
  autocomplete="new-password"
 />
```

```html
<s-password-field
  label="Password"
  name="password"
  error="Password must be at least 8 characters"
  minLength="8"
  autocomplete="new-password"
></s-password-field>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-password-field
  label="Password"
  name="password"
  error="Password must be at least 8 characters"
  minLength={8}
  autocomplete="new-password"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates a password field with additional details providing guidance about password creation requirements.```jsx
<s-password-field
  label="Create password"
  name="new-password"
  details="Password must be at least 8 characters and include uppercase, lowercase, and numbers"
  minLength={8}
  autocomplete="new-password"
 />
```

```html
<s-password-field
  label="Create password"
  name="new-password"
  details="Password must be at least 8 characters and include uppercase, lowercase, and numbers"
  minLength="8"
  autocomplete="new-password"
></s-password-field>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-password-field
  label="Create password"
  name="new-password"
  details="Password must be at least 8 characters and include uppercase, lowercase, and numbers"
  minLength={8}
  autocomplete="new-password"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how the password field can be integrated into a form alongside other input fields, such as an email field, to create a complete login or registration form.```jsx
<s-stack gap="base">
  <s-email-field
    label="Email"
    name="email"
    autocomplete="email"
    required
   />
  <s-password-field
    label="Password"
    name="password"
    autocomplete="current-password"
    required
   />
</s-stack>
```

```html
<s-stack gap="base">
  <s-email-field
    label="Email"
    name="email"
    autocomplete="username"
    required
  ></s-email-field>
  <s-password-field
    label="Password"
    name="password"
    autocomplete="current-password"
    required
  ></s-password-field>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-email-field
    label="Email"
    name="email"
    autocomplete="email"
    required
   />
  <s-password-field
    label="Password"
    name="password"
    autocomplete="current-password"
    required
   />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates a password field with dynamic password strength validation, showing real-time feedback on password complexity requirements.```jsx
<s-stack gap="large-100">
  <s-password-field
    label="Create password"
    name="password"
    value="example-password"
    autocomplete="new-password"
    required
   />
  <s-stack gap="small-200">
    <s-text tone="success">✓ At least 8 characters</s-text>
    <s-text color="subdued">○ Contains uppercase letter</s-text>
    <s-text color="subdued">○ Contains lowercase letter</s-text>
    <s-text color="subdued">○ Contains number</s-text>
  </s-stack>
</s-stack>
```

```html
<s-stack gap="large-100">
  <s-password-field
    label="Create password"
    name="password"
    value="example-password"
    autocomplete="new-password"
    required
  ></s-password-field>
  <s-stack gap="small-200">
    <s-text tone="success">✓ At least 8 characters</s-text>
    <s-text color="subdued">○ Contains uppercase letter</s-text>
    <s-text color="subdued">○ Contains lowercase letter</s-text>
    <s-text color="subdued">○ Contains number</s-text>
  </s-stack>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="large-100">
  <s-password-field
    label="Create password"
    name="password"
    value="example-password"
    autocomplete="new-password"
    required
   />
  <s-stack gap="small-200">
    <s-text tone="success">✓ At least 8 characters</s-text>
    <s-text color="subdued">○ Contains uppercase letter</s-text>
    <s-text color="subdued">○ Contains lowercase letter</s-text>
    <s-text color="subdued">○ Contains number</s-text>
  </s-stack>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

