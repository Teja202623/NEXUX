# ColorField

Allow users to select a color with a color picker or as a text input.

```jsx
<s-color-field placeholder="Select a color" value="#FF0000" />
```

```html
<s-color-field placeholder="Select a color" value="#FF0000"></s-color-field>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-color-field placeholder="Select a color" value="#FF0000" />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Properties

### ColorField

### __@internals$4@6764

value: `ElementInternals`


### adoptedCallback

value: `() => void`


### alpha

value: `boolean`

Allow user to select an alpha value.

### attributeChangedCallback

value: `(name: string) => void`


### autocomplete

value: `"on" | "off"`

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


### setInternalValue

value: `(value: string, normalize: boolean) => void`


### value

value: `string`

The current value for the field. If omitted, the field will be empty.

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

Allow users to select a color with a color picker or as a text input.


### Basic usage

Standard color input field with hex value.```jsx
<s-stack gap="base">
  <s-color-field label="Brand color" name="brandColor" value="#FF0000" />
</s-stack>
```

```html
<s-stack gap="base">
  <s-color-field label="Brand color" name="color" value="#FF0000"></s-color-field>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-color-field label="Brand color" name="brandColor" value="#FF0000" />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Required color field ensuring essential color values are provided.```jsx
<s-stack gap="base">
  <s-color-field label="Brand color" value="#FF0000" required />
</s-stack>
```

```html
<s-stack gap="base">
  <s-color-field label="Brand color" value="#FF0000" required></s-color-field>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-color-field label="Brand color" value="#FF0000" required />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Color field supporting alpha channel for transparency control.```jsx
<s-stack gap="base">
  <s-color-field
    label="Background color"
    value="rgba(255, 0, 0, 0.5)"
    alpha
   />
</s-stack>
```

```html
<s-stack gap="base">
  <s-color-field
    label="Background color"
    value="rgba(255, 0, 0, 0.5)"
    alpha
  ></s-color-field>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-color-field
    label="Background color"
    value="rgba(255, 0, 0, 0.5)"
    alpha
   />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Color field with validation error for invalid color format inputs.```jsx
<s-stack gap="base">
  <s-color-field
    label="Brand color"
    name="brandColor"
    value="#invalid"
    error="Please enter a valid color format (hex, rgb, or rgba)"
    required
  ></s-color-field>
</s-stack>

```

```html
<s-stack gap="base">
  <s-color-field
    label="Brand color"
    name="brandColor"
    value="#invalid"
    error="Please enter a valid color format (hex, rgb, or rgba)"
    required
  ></s-color-field>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-color-field
    label="Brand color"
    name="brandColor"
    value="#invalid"
    error="Please enter a valid color format (hex, rgb, or rgba)"
    required
  ></s-color-field>
</s-stack>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Color field with contextual details providing additional guidance.```jsx
<s-stack gap="base">
  <s-color-field
    label="Primary color"
    value="#1a73e8"
    details="Main brand color used for buttons and links"
   />
</s-stack>
```

```html
<s-stack gap="base">
  <s-color-field
    label="Primary color"
    value="#1a73e8"
    details="Main brand color used for buttons and links"
  ></s-color-field>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-color-field
    label="Primary color"
    value="#1a73e8"
    details="Main brand color used for buttons and links"
   />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Color field demonstrating how to use a placeholder to guide user input for color selection.```jsx
<s-stack gap="base">
  <s-color-field
    label="Theme color"
    placeholder="Enter a hex color (e.g., #FF0000)"
    value="#000000"
   />
</s-stack>
```

```html
<s-stack gap="base">
  <s-color-field
    label="Theme color"
    placeholder="Enter a hex color (e.g., #FF0000)"
    value="#000000"
  ></s-color-field>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-color-field
    label="Theme color"
    placeholder="Enter a hex color (e.g., #FF0000)"
    value="#000000"
   />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Color field in a read-only mode, preventing user modifications to the color value.```jsx
<s-stack gap="base">
  <s-color-field label="System color" name="color" value="#1a73e8" readOnly />
</s-stack>
```

```html
<s-stack gap="base">
  <s-color-field label="System color" name="color" value="#1a73e8" readOnly></s-color-field>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-color-field label="System color" name="color" value="#1a73e8" readOnly />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

A multi-color field form section demonstrating how ColorField can be used to capture different color settings in a single form.```jsx
<s-stack gap="base">
  <s-section>
    <s-heading>Theme settings</s-heading>
    <s-stack gap="base">
      <s-color-field
        label="Primary brand color"
        name="primaryColor"
        value="#1a73e8"
        defaultValue="#1a73e8"
        details="This color will be used for buttons, links, and brand elements"
        required
       />
      <s-color-field
        label="Secondary color"
        name="secondaryColor"
        value="#34a853"
        details="Used for secondary actions and accents"
       />
      <s-color-field
        label="Background overlay"
        name="overlayColor"
        value="rgba(0, 0, 0, 0.5)"
        alpha
        details="Background color for modal overlays and dropdowns"
       />
    </s-stack>
  </s-section>
</s-stack>
```

```html
<s-stack gap="base">
  <s-section>
    <s-heading>Theme settings</s-heading>
    <s-stack gap="base">
      <s-color-field
        label="Primary brand color"
        name="primaryColor"
        value="#1a73e8"
        defaultValue="#1a73e8"
        details="This color will be used for buttons, links, and brand elements"
        required
      ></s-color-field>
      <s-color-field
        label="Secondary color"
        name="secondaryColor"
        value="#34a853"
        details="Used for secondary actions and accents"
      ></s-color-field>
      <s-color-field
        label="Background overlay"
        name="overlayColor"
        value="rgba(0, 0, 0, 0.5)"
        alpha
        details="Background color for modal overlays and dropdowns"
      ></s-color-field>
    </s-stack>
  </s-section>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-section>
    <s-heading>Theme settings</s-heading>
    <s-stack gap="base">
      <s-color-field
        label="Primary brand color"
        name="primaryColor"
        value="#1a73e8"
        defaultValue="#1a73e8"
        details="This color will be used for buttons, links, and brand elements"
        required
       />
      <s-color-field
        label="Secondary color"
        name="secondaryColor"
        value="#34a853"
        details="Used for secondary actions and accents"
       />
      <s-color-field
        label="Background overlay"
        name="overlayColor"
        value="rgba(0, 0, 0, 0.5)"
        alpha
        details="Background color for modal overlays and dropdowns"
       />
    </s-stack>
  </s-section>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```


### Form validation

Interactive example showing real-time hex color validation with error messages.```jsx
const [color, setColor] = useState('#invalid');
const [error, setError] = useState('Please enter a valid color format');

return (
  <s-section>
    <s-stack gap="base" justifyContent="start">
      <s-text-field label="Theme name" />
      <s-color-field
        label="Brand color"
        name="Color"
        value={color}
        error={error}
        required
        onInput={(e) => {
          setColor(e.currentTarget.value);
          setError(/^#([0-9A-F]{3}){1,2}$/i.test(e.currentTarget.value) ? '' : 'Please enter a valid color format');
        }}
      />
    </s-stack>
  </s-section>
)
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; background: #F1F1F1;  padding: 1rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base", inlineSize="300px" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { const [color, setColor] = useState('#invalid');
const [error, setError] = useState('Please enter a valid color format');

return (
  <s-section>
    <s-stack gap="base" justifyContent="start">
      <s-text-field label="Theme name" />
      <s-color-field
        label="Brand color"
        name="Color"
        value={color}
        error={error}
        required
        onInput={(e) => {
          setColor(e.currentTarget.value);
          setError(/^#([0-9A-F]{3}){1,2}\$/i.test(e.currentTarget.value) ? '' : 'Please enter a valid color format');
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

### ColorFieldEvents

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

Allow users to select a color with a color picker or as a text input.


### Basic usage

Standard color input field with hex value.```jsx
<s-stack gap="base">
  <s-color-field label="Brand color" name="brandColor" value="#FF0000" />
</s-stack>
```

```html
<s-stack gap="base">
  <s-color-field label="Brand color" name="color" value="#FF0000"></s-color-field>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-color-field label="Brand color" name="brandColor" value="#FF0000" />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Required color field ensuring essential color values are provided.```jsx
<s-stack gap="base">
  <s-color-field label="Brand color" value="#FF0000" required />
</s-stack>
```

```html
<s-stack gap="base">
  <s-color-field label="Brand color" value="#FF0000" required></s-color-field>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-color-field label="Brand color" value="#FF0000" required />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Color field supporting alpha channel for transparency control.```jsx
<s-stack gap="base">
  <s-color-field
    label="Background color"
    value="rgba(255, 0, 0, 0.5)"
    alpha
   />
</s-stack>
```

```html
<s-stack gap="base">
  <s-color-field
    label="Background color"
    value="rgba(255, 0, 0, 0.5)"
    alpha
  ></s-color-field>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-color-field
    label="Background color"
    value="rgba(255, 0, 0, 0.5)"
    alpha
   />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Color field with validation error for invalid color format inputs.```jsx
<s-stack gap="base">
  <s-color-field
    label="Brand color"
    name="brandColor"
    value="#invalid"
    error="Please enter a valid color format (hex, rgb, or rgba)"
    required
  ></s-color-field>
</s-stack>

```

```html
<s-stack gap="base">
  <s-color-field
    label="Brand color"
    name="brandColor"
    value="#invalid"
    error="Please enter a valid color format (hex, rgb, or rgba)"
    required
  ></s-color-field>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-color-field
    label="Brand color"
    name="brandColor"
    value="#invalid"
    error="Please enter a valid color format (hex, rgb, or rgba)"
    required
  ></s-color-field>
</s-stack>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Color field with contextual details providing additional guidance.```jsx
<s-stack gap="base">
  <s-color-field
    label="Primary color"
    value="#1a73e8"
    details="Main brand color used for buttons and links"
   />
</s-stack>
```

```html
<s-stack gap="base">
  <s-color-field
    label="Primary color"
    value="#1a73e8"
    details="Main brand color used for buttons and links"
  ></s-color-field>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-color-field
    label="Primary color"
    value="#1a73e8"
    details="Main brand color used for buttons and links"
   />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Color field demonstrating how to use a placeholder to guide user input for color selection.```jsx
<s-stack gap="base">
  <s-color-field
    label="Theme color"
    placeholder="Enter a hex color (e.g., #FF0000)"
    value="#000000"
   />
</s-stack>
```

```html
<s-stack gap="base">
  <s-color-field
    label="Theme color"
    placeholder="Enter a hex color (e.g., #FF0000)"
    value="#000000"
  ></s-color-field>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-color-field
    label="Theme color"
    placeholder="Enter a hex color (e.g., #FF0000)"
    value="#000000"
   />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Color field in a read-only mode, preventing user modifications to the color value.```jsx
<s-stack gap="base">
  <s-color-field label="System color" name="color" value="#1a73e8" readOnly />
</s-stack>
```

```html
<s-stack gap="base">
  <s-color-field label="System color" name="color" value="#1a73e8" readOnly></s-color-field>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-color-field label="System color" name="color" value="#1a73e8" readOnly />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

A multi-color field form section demonstrating how ColorField can be used to capture different color settings in a single form.```jsx
<s-stack gap="base">
  <s-section>
    <s-heading>Theme settings</s-heading>
    <s-stack gap="base">
      <s-color-field
        label="Primary brand color"
        name="primaryColor"
        value="#1a73e8"
        defaultValue="#1a73e8"
        details="This color will be used for buttons, links, and brand elements"
        required
       />
      <s-color-field
        label="Secondary color"
        name="secondaryColor"
        value="#34a853"
        details="Used for secondary actions and accents"
       />
      <s-color-field
        label="Background overlay"
        name="overlayColor"
        value="rgba(0, 0, 0, 0.5)"
        alpha
        details="Background color for modal overlays and dropdowns"
       />
    </s-stack>
  </s-section>
</s-stack>
```

```html
<s-stack gap="base">
  <s-section>
    <s-heading>Theme settings</s-heading>
    <s-stack gap="base">
      <s-color-field
        label="Primary brand color"
        name="primaryColor"
        value="#1a73e8"
        defaultValue="#1a73e8"
        details="This color will be used for buttons, links, and brand elements"
        required
      ></s-color-field>
      <s-color-field
        label="Secondary color"
        name="secondaryColor"
        value="#34a853"
        details="Used for secondary actions and accents"
      ></s-color-field>
      <s-color-field
        label="Background overlay"
        name="overlayColor"
        value="rgba(0, 0, 0, 0.5)"
        alpha
        details="Background color for modal overlays and dropdowns"
      ></s-color-field>
    </s-stack>
  </s-section>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-section>
    <s-heading>Theme settings</s-heading>
    <s-stack gap="base">
      <s-color-field
        label="Primary brand color"
        name="primaryColor"
        value="#1a73e8"
        defaultValue="#1a73e8"
        details="This color will be used for buttons, links, and brand elements"
        required
       />
      <s-color-field
        label="Secondary color"
        name="secondaryColor"
        value="#34a853"
        details="Used for secondary actions and accents"
       />
      <s-color-field
        label="Background overlay"
        name="overlayColor"
        value="rgba(0, 0, 0, 0.5)"
        alpha
        details="Background color for modal overlays and dropdowns"
       />
    </s-stack>
  </s-section>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```


### Form validation

Interactive example showing real-time hex color validation with error messages.```jsx
const [color, setColor] = useState('#invalid');
const [error, setError] = useState('Please enter a valid color format');

return (
  <s-section>
    <s-stack gap="base" justifyContent="start">
      <s-text-field label="Theme name" />
      <s-color-field
        label="Brand color"
        name="Color"
        value={color}
        error={error}
        required
        onInput={(e) => {
          setColor(e.currentTarget.value);
          setError(/^#([0-9A-F]{3}){1,2}$/i.test(e.currentTarget.value) ? '' : 'Please enter a valid color format');
        }}
      />
    </s-stack>
  </s-section>
)
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; background: #F1F1F1;  padding: 1rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base", inlineSize="300px" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { const [color, setColor] = useState('#invalid');
const [error, setError] = useState('Please enter a valid color format');

return (
  <s-section>
    <s-stack gap="base" justifyContent="start">
      <s-text-field label="Theme name" />
      <s-color-field
        label="Brand color"
        name="Color"
        value={color}
        error={error}
        required
        onInput={(e) => {
          setColor(e.currentTarget.value);
          setError(/^#([0-9A-F]{3}){1,2}\$/i.test(e.currentTarget.value) ? '' : 'Please enter a valid color format');
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

Allow users to select a color with a color picker or as a text input.


### Basic usage

Standard color input field with hex value.```jsx
<s-stack gap="base">
  <s-color-field label="Brand color" name="brandColor" value="#FF0000" />
</s-stack>
```

```html
<s-stack gap="base">
  <s-color-field label="Brand color" name="color" value="#FF0000"></s-color-field>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-color-field label="Brand color" name="brandColor" value="#FF0000" />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Required color field ensuring essential color values are provided.```jsx
<s-stack gap="base">
  <s-color-field label="Brand color" value="#FF0000" required />
</s-stack>
```

```html
<s-stack gap="base">
  <s-color-field label="Brand color" value="#FF0000" required></s-color-field>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-color-field label="Brand color" value="#FF0000" required />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Color field supporting alpha channel for transparency control.```jsx
<s-stack gap="base">
  <s-color-field
    label="Background color"
    value="rgba(255, 0, 0, 0.5)"
    alpha
   />
</s-stack>
```

```html
<s-stack gap="base">
  <s-color-field
    label="Background color"
    value="rgba(255, 0, 0, 0.5)"
    alpha
  ></s-color-field>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-color-field
    label="Background color"
    value="rgba(255, 0, 0, 0.5)"
    alpha
   />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Color field with validation error for invalid color format inputs.```jsx
<s-stack gap="base">
  <s-color-field
    label="Brand color"
    name="brandColor"
    value="#invalid"
    error="Please enter a valid color format (hex, rgb, or rgba)"
    required
  ></s-color-field>
</s-stack>

```

```html
<s-stack gap="base">
  <s-color-field
    label="Brand color"
    name="brandColor"
    value="#invalid"
    error="Please enter a valid color format (hex, rgb, or rgba)"
    required
  ></s-color-field>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-color-field
    label="Brand color"
    name="brandColor"
    value="#invalid"
    error="Please enter a valid color format (hex, rgb, or rgba)"
    required
  ></s-color-field>
</s-stack>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Color field with contextual details providing additional guidance.```jsx
<s-stack gap="base">
  <s-color-field
    label="Primary color"
    value="#1a73e8"
    details="Main brand color used for buttons and links"
   />
</s-stack>
```

```html
<s-stack gap="base">
  <s-color-field
    label="Primary color"
    value="#1a73e8"
    details="Main brand color used for buttons and links"
  ></s-color-field>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-color-field
    label="Primary color"
    value="#1a73e8"
    details="Main brand color used for buttons and links"
   />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Color field demonstrating how to use a placeholder to guide user input for color selection.```jsx
<s-stack gap="base">
  <s-color-field
    label="Theme color"
    placeholder="Enter a hex color (e.g., #FF0000)"
    value="#000000"
   />
</s-stack>
```

```html
<s-stack gap="base">
  <s-color-field
    label="Theme color"
    placeholder="Enter a hex color (e.g., #FF0000)"
    value="#000000"
  ></s-color-field>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-color-field
    label="Theme color"
    placeholder="Enter a hex color (e.g., #FF0000)"
    value="#000000"
   />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Color field in a read-only mode, preventing user modifications to the color value.```jsx
<s-stack gap="base">
  <s-color-field label="System color" name="color" value="#1a73e8" readOnly />
</s-stack>
```

```html
<s-stack gap="base">
  <s-color-field label="System color" name="color" value="#1a73e8" readOnly></s-color-field>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-color-field label="System color" name="color" value="#1a73e8" readOnly />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

A multi-color field form section demonstrating how ColorField can be used to capture different color settings in a single form.```jsx
<s-stack gap="base">
  <s-section>
    <s-heading>Theme settings</s-heading>
    <s-stack gap="base">
      <s-color-field
        label="Primary brand color"
        name="primaryColor"
        value="#1a73e8"
        defaultValue="#1a73e8"
        details="This color will be used for buttons, links, and brand elements"
        required
       />
      <s-color-field
        label="Secondary color"
        name="secondaryColor"
        value="#34a853"
        details="Used for secondary actions and accents"
       />
      <s-color-field
        label="Background overlay"
        name="overlayColor"
        value="rgba(0, 0, 0, 0.5)"
        alpha
        details="Background color for modal overlays and dropdowns"
       />
    </s-stack>
  </s-section>
</s-stack>
```

```html
<s-stack gap="base">
  <s-section>
    <s-heading>Theme settings</s-heading>
    <s-stack gap="base">
      <s-color-field
        label="Primary brand color"
        name="primaryColor"
        value="#1a73e8"
        defaultValue="#1a73e8"
        details="This color will be used for buttons, links, and brand elements"
        required
      ></s-color-field>
      <s-color-field
        label="Secondary color"
        name="secondaryColor"
        value="#34a853"
        details="Used for secondary actions and accents"
      ></s-color-field>
      <s-color-field
        label="Background overlay"
        name="overlayColor"
        value="rgba(0, 0, 0, 0.5)"
        alpha
        details="Background color for modal overlays and dropdowns"
      ></s-color-field>
    </s-stack>
  </s-section>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-section>
    <s-heading>Theme settings</s-heading>
    <s-stack gap="base">
      <s-color-field
        label="Primary brand color"
        name="primaryColor"
        value="#1a73e8"
        defaultValue="#1a73e8"
        details="This color will be used for buttons, links, and brand elements"
        required
       />
      <s-color-field
        label="Secondary color"
        name="secondaryColor"
        value="#34a853"
        details="Used for secondary actions and accents"
       />
      <s-color-field
        label="Background overlay"
        name="overlayColor"
        value="rgba(0, 0, 0, 0.5)"
        alpha
        details="Background color for modal overlays and dropdowns"
       />
    </s-stack>
  </s-section>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```


### Form validation

Interactive example showing real-time hex color validation with error messages.```jsx
const [color, setColor] = useState('#invalid');
const [error, setError] = useState('Please enter a valid color format');

return (
  <s-section>
    <s-stack gap="base" justifyContent="start">
      <s-text-field label="Theme name" />
      <s-color-field
        label="Brand color"
        name="Color"
        value={color}
        error={error}
        required
        onInput={(e) => {
          setColor(e.currentTarget.value);
          setError(/^#([0-9A-F]{3}){1,2}$/i.test(e.currentTarget.value) ? '' : 'Please enter a valid color format');
        }}
      />
    </s-stack>
  </s-section>
)
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; background: #F1F1F1;  padding: 1rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base", inlineSize="300px" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { const [color, setColor] = useState('#invalid');
const [error, setError] = useState('Please enter a valid color format');

return (
  <s-section>
    <s-stack gap="base" justifyContent="start">
      <s-text-field label="Theme name" />
      <s-color-field
        label="Brand color"
        name="Color"
        value={color}
        error={error}
        required
        onInput={(e) => {
          setColor(e.currentTarget.value);
          setError(/^#([0-9A-F]{3}){1,2}\$/i.test(e.currentTarget.value) ? '' : 'Please enter a valid color format');
        }}
      />
    </s-stack>
  </s-section>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

