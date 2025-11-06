# Switch

Give users a clear way to toggle options on or off.

```jsx
<s-switch
  label="Enable feature"
  details="Ensure all criteria are met before enabling"
 />
```

```html
<s-switch
  label="Enable feature"
  details="Ensure all criteria are met before enabling"
></s-switch>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-switch
  label="Enable feature"
  details="Ensure all criteria are met before enabling"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Properties

### Switch

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

### label

value: `string`

Visual content to use as the control label.

### labelAccessibilityVisibility

value: `"visible" | "exclusive"`

Changes the visibility of the component's label.

- `visible`: the label is visible to all users.
- `exclusive`: the label is visually hidden but remains in the accessibility tree.

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

Give users a clear way to toggle options on or off.


### Basic usage

Standard toggle switch for enabling or disabling merchant preferences. This example demonstrates a simple switch with a label, allowing users to toggle a single setting on or off.```jsx
<s-switch id="basic-switch" label="Enable notifications" />
```

```html
<s-switch id="basic-switch" label="Enable notifications"></s-switch>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-switch id="basic-switch" label="Enable notifications" />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Locked switch with explanatory text for unavailable premium features. This example shows a switch that is visually disabled and cannot be interacted with, typically used to indicate a feature is not currently available.```jsx
<s-switch
  id="disabled-switch"
  label="Feature locked (Premium plan required)"
  checked={true}
  disabled={true}
 />
```

```html
<s-switch
  id="disabled-switch"
  label="Feature locked (Premium plan required)"
  checked="true"
  disabled="true"
></s-switch>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-switch
  id="disabled-switch"
  label="Feature locked (Premium plan required)"
  checked={true}
  disabled={true}
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Multiple switches within a form for notification preferences submission. This example illustrates how switches can be used together in a form to allow users to configure multiple related settings simultaneously.```jsx
<form>
  <s-switch
    id="email-notifications"
    label="Email notifications"
    name="emailNotifications"
    value="enabled"
   />
  <s-switch
    id="sms-notifications"
    label="SMS notifications"
    name="smsNotifications"
    value="enabled"
   />
</form>
```

```html
<form>
  <s-switch
    id="email-notifications"
    label="Email notifications"
    name="emailNotifications"
    value="enabled"
  ></s-switch>
  <s-switch
    id="sms-notifications"
    label="SMS notifications"
    name="smsNotifications"
    value="enabled"
  ></s-switch>
</form>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<form>
  <s-switch
    id="email-notifications"
    label="Email notifications"
    name="emailNotifications"
    value="enabled"
   />
  <s-switch
    id="sms-notifications"
    label="SMS notifications"
    name="smsNotifications"
    value="enabled"
   />
</form>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Switch with visually hidden label that remains accessible to screen readers. This example demonstrates how to create a switch with a label that is only perceivable by assistive technologies, maintaining accessibility while minimizing visual clutter.```jsx
<s-switch
  id="hidden-label-switch"
  labelAccessibilityVisibility="exclusive"
  label="Toggle feature"
  checked={true}
 />
```

```html
<s-switch
  id="hidden-label-switch"
  labelAccessibilityVisibility="exclusive"
  label="Toggle feature"
  checked="true"
></s-switch>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-switch
  id="hidden-label-switch"
  labelAccessibilityVisibility="exclusive"
  label="Toggle feature"
  checked={true}
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Required switch with validation error and contextual details for user guidance. This example shows a switch that requires user interaction, provides additional context through details, and displays an error message when validation fails.```jsx
<s-switch
  id="terms-switch"
  label="Agree to terms and conditions"
  details="You must agree to continue with the purchase"
  error="Agreement is required"
  name="termsAgreement"
  required={true}
  value="agreed"
 />
```

```html
<s-switch
  id="terms-switch"
  label="Agree to terms and conditions"
  details="You must agree to continue with the purchase"
  error="Agreement is required"
  name="termsAgreement"
  required="true"
  value="agreed"
></s-switch>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-switch
  id="terms-switch"
  label="Agree to terms and conditions"
  details="You must agree to continue with the purchase"
  error="Agreement is required"
  name="termsAgreement"
  required={true}
  value="agreed"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Switch with enhanced accessibility description for screen reader users. This example illustrates how to provide a more descriptive accessibility label that provides additional context beyond the visible label.```jsx
<s-switch
  id="event-switch"
  label="Feature toggle"
  accessibilityLabel="Toggle feature on or off"
 />
```

```html
<s-switch
  id="event-switch"
  label="Feature toggle"
  accessibilityLabel="Toggle feature on or off"
></s-switch>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-switch
  id="event-switch"
  label="Feature toggle"
  accessibilityLabel="Toggle feature on or off"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Group of related switches arranged in a vertical stack for settings configuration. This example demonstrates how to use the Stack component to create a clean, organized layout for multiple related switch settings.```jsx
<s-stack gap="small-200">
  <s-switch id="notifications-setting" label="Push notifications" />
  <s-switch id="autosave-setting" label="Auto-save drafts" />
  <s-switch
    id="analytics-setting"
    label="Usage analytics"
    checked={true}
   />
</s-stack>
```

```html
<s-stack gap="base">
  <s-switch id="notifications-setting" label="Push notifications"></s-switch>
  <s-switch id="autosave-setting" label="Auto-save drafts"></s-switch>
  <s-switch
    id="analytics-setting"
    label="Usage analytics"
    checked="true"
  ></s-switch>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="small-200">
  <s-switch id="notifications-setting" label="Push notifications" />
  <s-switch id="autosave-setting" label="Auto-save drafts" />
  <s-switch
    id="analytics-setting"
    label="Usage analytics"
    checked={true}
   />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Events

Learn more about [registering events](https://shopify.dev/docs/api/app-home/using-polaris-components#event-handling).

### SwitchEvents

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

Give users a clear way to toggle options on or off.


### Basic usage

Standard toggle switch for enabling or disabling merchant preferences. This example demonstrates a simple switch with a label, allowing users to toggle a single setting on or off.```jsx
<s-switch id="basic-switch" label="Enable notifications" />
```

```html
<s-switch id="basic-switch" label="Enable notifications"></s-switch>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-switch id="basic-switch" label="Enable notifications" />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Locked switch with explanatory text for unavailable premium features. This example shows a switch that is visually disabled and cannot be interacted with, typically used to indicate a feature is not currently available.```jsx
<s-switch
  id="disabled-switch"
  label="Feature locked (Premium plan required)"
  checked={true}
  disabled={true}
 />
```

```html
<s-switch
  id="disabled-switch"
  label="Feature locked (Premium plan required)"
  checked="true"
  disabled="true"
></s-switch>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-switch
  id="disabled-switch"
  label="Feature locked (Premium plan required)"
  checked={true}
  disabled={true}
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Multiple switches within a form for notification preferences submission. This example illustrates how switches can be used together in a form to allow users to configure multiple related settings simultaneously.```jsx
<form>
  <s-switch
    id="email-notifications"
    label="Email notifications"
    name="emailNotifications"
    value="enabled"
   />
  <s-switch
    id="sms-notifications"
    label="SMS notifications"
    name="smsNotifications"
    value="enabled"
   />
</form>
```

```html
<form>
  <s-switch
    id="email-notifications"
    label="Email notifications"
    name="emailNotifications"
    value="enabled"
  ></s-switch>
  <s-switch
    id="sms-notifications"
    label="SMS notifications"
    name="smsNotifications"
    value="enabled"
  ></s-switch>
</form>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<form>
  <s-switch
    id="email-notifications"
    label="Email notifications"
    name="emailNotifications"
    value="enabled"
   />
  <s-switch
    id="sms-notifications"
    label="SMS notifications"
    name="smsNotifications"
    value="enabled"
   />
</form>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Switch with visually hidden label that remains accessible to screen readers. This example demonstrates how to create a switch with a label that is only perceivable by assistive technologies, maintaining accessibility while minimizing visual clutter.```jsx
<s-switch
  id="hidden-label-switch"
  labelAccessibilityVisibility="exclusive"
  label="Toggle feature"
  checked={true}
 />
```

```html
<s-switch
  id="hidden-label-switch"
  labelAccessibilityVisibility="exclusive"
  label="Toggle feature"
  checked="true"
></s-switch>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-switch
  id="hidden-label-switch"
  labelAccessibilityVisibility="exclusive"
  label="Toggle feature"
  checked={true}
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Required switch with validation error and contextual details for user guidance. This example shows a switch that requires user interaction, provides additional context through details, and displays an error message when validation fails.```jsx
<s-switch
  id="terms-switch"
  label="Agree to terms and conditions"
  details="You must agree to continue with the purchase"
  error="Agreement is required"
  name="termsAgreement"
  required={true}
  value="agreed"
 />
```

```html
<s-switch
  id="terms-switch"
  label="Agree to terms and conditions"
  details="You must agree to continue with the purchase"
  error="Agreement is required"
  name="termsAgreement"
  required="true"
  value="agreed"
></s-switch>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-switch
  id="terms-switch"
  label="Agree to terms and conditions"
  details="You must agree to continue with the purchase"
  error="Agreement is required"
  name="termsAgreement"
  required={true}
  value="agreed"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Switch with enhanced accessibility description for screen reader users. This example illustrates how to provide a more descriptive accessibility label that provides additional context beyond the visible label.```jsx
<s-switch
  id="event-switch"
  label="Feature toggle"
  accessibilityLabel="Toggle feature on or off"
 />
```

```html
<s-switch
  id="event-switch"
  label="Feature toggle"
  accessibilityLabel="Toggle feature on or off"
></s-switch>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-switch
  id="event-switch"
  label="Feature toggle"
  accessibilityLabel="Toggle feature on or off"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Group of related switches arranged in a vertical stack for settings configuration. This example demonstrates how to use the Stack component to create a clean, organized layout for multiple related switch settings.```jsx
<s-stack gap="small-200">
  <s-switch id="notifications-setting" label="Push notifications" />
  <s-switch id="autosave-setting" label="Auto-save drafts" />
  <s-switch
    id="analytics-setting"
    label="Usage analytics"
    checked={true}
   />
</s-stack>
```

```html
<s-stack gap="base">
  <s-switch id="notifications-setting" label="Push notifications"></s-switch>
  <s-switch id="autosave-setting" label="Auto-save drafts"></s-switch>
  <s-switch
    id="analytics-setting"
    label="Usage analytics"
    checked="true"
  ></s-switch>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="small-200">
  <s-switch id="notifications-setting" label="Push notifications" />
  <s-switch id="autosave-setting" label="Auto-save drafts" />
  <s-switch
    id="analytics-setting"
    label="Usage analytics"
    checked={true}
   />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Examples

Give users a clear way to toggle options on or off.


### Basic usage

Standard toggle switch for enabling or disabling merchant preferences. This example demonstrates a simple switch with a label, allowing users to toggle a single setting on or off.```jsx
<s-switch id="basic-switch" label="Enable notifications" />
```

```html
<s-switch id="basic-switch" label="Enable notifications"></s-switch>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-switch id="basic-switch" label="Enable notifications" />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Locked switch with explanatory text for unavailable premium features. This example shows a switch that is visually disabled and cannot be interacted with, typically used to indicate a feature is not currently available.```jsx
<s-switch
  id="disabled-switch"
  label="Feature locked (Premium plan required)"
  checked={true}
  disabled={true}
 />
```

```html
<s-switch
  id="disabled-switch"
  label="Feature locked (Premium plan required)"
  checked="true"
  disabled="true"
></s-switch>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-switch
  id="disabled-switch"
  label="Feature locked (Premium plan required)"
  checked={true}
  disabled={true}
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Multiple switches within a form for notification preferences submission. This example illustrates how switches can be used together in a form to allow users to configure multiple related settings simultaneously.```jsx
<form>
  <s-switch
    id="email-notifications"
    label="Email notifications"
    name="emailNotifications"
    value="enabled"
   />
  <s-switch
    id="sms-notifications"
    label="SMS notifications"
    name="smsNotifications"
    value="enabled"
   />
</form>
```

```html
<form>
  <s-switch
    id="email-notifications"
    label="Email notifications"
    name="emailNotifications"
    value="enabled"
  ></s-switch>
  <s-switch
    id="sms-notifications"
    label="SMS notifications"
    name="smsNotifications"
    value="enabled"
  ></s-switch>
</form>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<form>
  <s-switch
    id="email-notifications"
    label="Email notifications"
    name="emailNotifications"
    value="enabled"
   />
  <s-switch
    id="sms-notifications"
    label="SMS notifications"
    name="smsNotifications"
    value="enabled"
   />
</form>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Switch with visually hidden label that remains accessible to screen readers. This example demonstrates how to create a switch with a label that is only perceivable by assistive technologies, maintaining accessibility while minimizing visual clutter.```jsx
<s-switch
  id="hidden-label-switch"
  labelAccessibilityVisibility="exclusive"
  label="Toggle feature"
  checked={true}
 />
```

```html
<s-switch
  id="hidden-label-switch"
  labelAccessibilityVisibility="exclusive"
  label="Toggle feature"
  checked="true"
></s-switch>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-switch
  id="hidden-label-switch"
  labelAccessibilityVisibility="exclusive"
  label="Toggle feature"
  checked={true}
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Required switch with validation error and contextual details for user guidance. This example shows a switch that requires user interaction, provides additional context through details, and displays an error message when validation fails.```jsx
<s-switch
  id="terms-switch"
  label="Agree to terms and conditions"
  details="You must agree to continue with the purchase"
  error="Agreement is required"
  name="termsAgreement"
  required={true}
  value="agreed"
 />
```

```html
<s-switch
  id="terms-switch"
  label="Agree to terms and conditions"
  details="You must agree to continue with the purchase"
  error="Agreement is required"
  name="termsAgreement"
  required="true"
  value="agreed"
></s-switch>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-switch
  id="terms-switch"
  label="Agree to terms and conditions"
  details="You must agree to continue with the purchase"
  error="Agreement is required"
  name="termsAgreement"
  required={true}
  value="agreed"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Switch with enhanced accessibility description for screen reader users. This example illustrates how to provide a more descriptive accessibility label that provides additional context beyond the visible label.```jsx
<s-switch
  id="event-switch"
  label="Feature toggle"
  accessibilityLabel="Toggle feature on or off"
 />
```

```html
<s-switch
  id="event-switch"
  label="Feature toggle"
  accessibilityLabel="Toggle feature on or off"
></s-switch>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-switch
  id="event-switch"
  label="Feature toggle"
  accessibilityLabel="Toggle feature on or off"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Group of related switches arranged in a vertical stack for settings configuration. This example demonstrates how to use the Stack component to create a clean, organized layout for multiple related switch settings.```jsx
<s-stack gap="small-200">
  <s-switch id="notifications-setting" label="Push notifications" />
  <s-switch id="autosave-setting" label="Auto-save drafts" />
  <s-switch
    id="analytics-setting"
    label="Usage analytics"
    checked={true}
   />
</s-stack>
```

```html
<s-stack gap="base">
  <s-switch id="notifications-setting" label="Push notifications"></s-switch>
  <s-switch id="autosave-setting" label="Auto-save drafts"></s-switch>
  <s-switch
    id="analytics-setting"
    label="Usage analytics"
    checked="true"
  ></s-switch>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="small-200">
  <s-switch id="notifications-setting" label="Push notifications" />
  <s-switch id="autosave-setting" label="Auto-save drafts" />
  <s-switch
    id="analytics-setting"
    label="Usage analytics"
    checked={true}
   />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

