# DropZone

Lets users upload files through drag-and-drop functionality into a designated area on a page, or by activating a button.

```jsx
<s-drop-zone
  label="Upload"
  accessibilityLabel="Upload image of type jpg, png, or gif"
  accept=".jpg,.png,.gif"
  multiple
  onInput={(event) => console.log('onInput', event.currentTarget?.value)}
  onChange={(event) => console.log('onChange', event.currentTarget?.value)}
  onDropRejected={(event) => console.log('onDropRejected', event.currentTarget?.value)}
 />
```

```html
<s-drop-zone
  label="Upload"
  accessibilityLabel="Upload image of type jpg, png, or gif"
  accept=".jpg,.png,.gif"
  multiple
  onInput="console.log('onInput', event.currentTarget?.value)"
  onChange="console.log('onChange', event.currentTarget?.value)"
  onDropRejected="console.log('onDropRejected', event.currentTarget?.value)"
></s-drop-zone>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-drop-zone
  label="Upload"
  accessibilityLabel="Upload image of type jpg, png, or gif"
  accept=".jpg,.png,.gif"
  multiple
  onInput={(event) => console.log('onInput', event.currentTarget?.value)}
  onChange={(event) => console.log('onChange', event.currentTarget?.value)}
  onDropRejected={(event) => console.log('onDropRejected', event.currentTarget?.value)}
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Properties

### DropZone

### __@getFileInput@7002

value: `() => HTMLInputElement`


### __@internals@7001

value: `ElementInternals`


### __@setFiles@7000

value: `(files: File[]) => void`


### accept

value: `string`

A string representing the types of files that are accepted by the drop zone. This string is a comma-separated list of unique file type specifiers which can be one of the following:
- A file extension starting with a period (".") character (e.g. .jpg, .pdf, .doc)
- A valid MIME type string with no extensions

If omitted, all file types are accepted.

### accessibilityLabel

value: `string`

A label that describes the purpose or contents of the item. When set, it will be announced to buyers using assistive technologies and will provide them with more context.

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


### disabled

value: `boolean`

Disables the field, disallowing any interaction.

### disconnectedCallback

value: `() => void`


### error

value: `string`

Indicate an error to the user. The field will be given a specific stylistic treatment to communicate problems that have to be resolved immediately.

### files

value: `File[]`

An array of File objects representing the files currently selected by the user.

This property is read-only and cannot be directly modified. To clear the selected files, set the `value` prop to an empty string or null.

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

Whether multiple files can be selected or dropped at once.

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

This sets the input value for a file type, which cannot be set programatically, so it can only be reset.

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

Lets users upload files through drag-and-drop functionality into a designated area on a page, or by activating a button.


### Basic usage

Demonstrates a basic drop zone that allows multiple file uploads with a simple label.```jsx
<s-drop-zone label="Drop files to upload" multiple />
```

```html
<s-drop-zone label="Drop files to upload" multiple></s-drop-zone>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-drop-zone label="Drop files to upload" multiple></s-drop-zone>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-drop-zone label="Drop files to upload" multiple />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows a drop zone configured specifically for uploading multiple image files.```jsx
<s-drop-zone accept="image/*" label="Upload images" multiple />
```

```html
<s-drop-zone accept="image/*" label="Upload images" multiple></s-drop-zone>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-drop-zone accept="image/*" label="Upload images" multiple></s-drop-zone>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-drop-zone accept="image/*" label="Upload images" multiple />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates a drop zone when the file upload is required.```jsx
<s-drop-zone name="file" required label="Upload file" />
```

```html
<s-drop-zone name="file" required label="Upload file"></s-drop-zone>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-drop-zone name="file" required label="Upload file"></s-drop-zone>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-drop-zone name="file" required label="Upload file" />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Displays a drop zone in a disabled state, preventing file uploads.```jsx
<s-drop-zone label="Upload not available" disabled />
```

```html
<s-drop-zone label="Upload not available" disabled></s-drop-zone>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-drop-zone label="Upload not available" disabled></s-drop-zone>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-drop-zone label="Upload not available" disabled />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates restricting file uploads to specific document types like PDF and DOC.```jsx
<s-drop-zone
  accept=".pdf,.doc,.docx"
  label="Upload documents"
  multiple
 />
```

```html
<s-drop-zone
  accept=".pdf,.doc,.docx"
  label="Upload documents"
  multiple
></s-drop-zone>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-drop-zone
  accept=".pdf,.doc,.docx"
  label="Upload documents"
  multiple
></s-drop-zone>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-drop-zone
  accept=".pdf,.doc,.docx"
  label="Upload documents"
  multiple
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows a drop zone with an error message, useful for indicating file upload validation issues.```jsx
<s-drop-zone
  label="Upload file"
  error="File size must be less than 5mb"
 />
```

```html
<s-drop-zone
  label="Upload file"
  error="File size must be less than 5mb"
></s-drop-zone>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-drop-zone
  label="Upload file"
  error="File size must be less than 5mb"
></s-drop-zone>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-drop-zone
  label="Upload file"
  error="File size must be less than 5mb"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates advanced accessibility configuration for the drop zone, including custom accessibility labels.```jsx
<s-drop-zone
  label="Upload files"
  accessibilityLabel="Upload files using drag and drop or file selector"
  labelAccessibilityVisibility="exclusive"
  multiple
 />
```

```html
<s-drop-zone
  label="Upload files"
  accessibilityLabel="Upload files using drag and drop or file selector"
  labelAccessibilityVisibility="exclusive"
  multiple
></s-drop-zone>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-drop-zone
  label="Upload files"
  accessibilityLabel="Upload files using drag and drop or file selector"
  labelAccessibilityVisibility="exclusive"
  multiple
></s-drop-zone>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-drop-zone
  label="Upload files"
  accessibilityLabel="Upload files using drag and drop or file selector"
  labelAccessibilityVisibility="exclusive"
  multiple
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Events

Learn more about [registering events](https://shopify.dev/docs/api/app-home/using-polaris-components#event-handling).

### DropZoneEvents

### change

value: `CallbackEventListener<typeof tagName>`

  - CallbackEventListener: (EventListener & {
      (event: CallbackEvent<T>): void;
    }) | null
  - CallbackEvent: Event & {
  currentTarget: HTMLElementTagNameMap[T];
}

### droprejected

value: `CallbackEventListener<typeof tagName>`

  - CallbackEventListener: (EventListener & {
      (event: CallbackEvent<T>): void;
    }) | null
  - CallbackEvent: Event & {
  currentTarget: HTMLElementTagNameMap[T];
}

### input

value: `CallbackEventListener<typeof tagName>`

  - CallbackEventListener: (EventListener & {
      (event: CallbackEvent<T>): void;
    }) | null
  - CallbackEvent: Event & {
  currentTarget: HTMLElementTagNameMap[T];
}

## Examples

Lets users upload files through drag-and-drop functionality into a designated area on a page, or by activating a button.


### Basic usage

Demonstrates a basic drop zone that allows multiple file uploads with a simple label.```jsx
<s-drop-zone label="Drop files to upload" multiple />
```

```html
<s-drop-zone label="Drop files to upload" multiple></s-drop-zone>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-drop-zone label="Drop files to upload" multiple></s-drop-zone>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-drop-zone label="Drop files to upload" multiple />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows a drop zone configured specifically for uploading multiple image files.```jsx
<s-drop-zone accept="image/*" label="Upload images" multiple />
```

```html
<s-drop-zone accept="image/*" label="Upload images" multiple></s-drop-zone>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-drop-zone accept="image/*" label="Upload images" multiple></s-drop-zone>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-drop-zone accept="image/*" label="Upload images" multiple />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates a drop zone when the file upload is required.```jsx
<s-drop-zone name="file" required label="Upload file" />
```

```html
<s-drop-zone name="file" required label="Upload file"></s-drop-zone>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-drop-zone name="file" required label="Upload file"></s-drop-zone>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-drop-zone name="file" required label="Upload file" />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Displays a drop zone in a disabled state, preventing file uploads.```jsx
<s-drop-zone label="Upload not available" disabled />
```

```html
<s-drop-zone label="Upload not available" disabled></s-drop-zone>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-drop-zone label="Upload not available" disabled></s-drop-zone>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-drop-zone label="Upload not available" disabled />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates restricting file uploads to specific document types like PDF and DOC.```jsx
<s-drop-zone
  accept=".pdf,.doc,.docx"
  label="Upload documents"
  multiple
 />
```

```html
<s-drop-zone
  accept=".pdf,.doc,.docx"
  label="Upload documents"
  multiple
></s-drop-zone>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-drop-zone
  accept=".pdf,.doc,.docx"
  label="Upload documents"
  multiple
></s-drop-zone>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-drop-zone
  accept=".pdf,.doc,.docx"
  label="Upload documents"
  multiple
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows a drop zone with an error message, useful for indicating file upload validation issues.```jsx
<s-drop-zone
  label="Upload file"
  error="File size must be less than 5mb"
 />
```

```html
<s-drop-zone
  label="Upload file"
  error="File size must be less than 5mb"
></s-drop-zone>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-drop-zone
  label="Upload file"
  error="File size must be less than 5mb"
></s-drop-zone>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-drop-zone
  label="Upload file"
  error="File size must be less than 5mb"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates advanced accessibility configuration for the drop zone, including custom accessibility labels.```jsx
<s-drop-zone
  label="Upload files"
  accessibilityLabel="Upload files using drag and drop or file selector"
  labelAccessibilityVisibility="exclusive"
  multiple
 />
```

```html
<s-drop-zone
  label="Upload files"
  accessibilityLabel="Upload files using drag and drop or file selector"
  labelAccessibilityVisibility="exclusive"
  multiple
></s-drop-zone>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-drop-zone
  label="Upload files"
  accessibilityLabel="Upload files using drag and drop or file selector"
  labelAccessibilityVisibility="exclusive"
  multiple
></s-drop-zone>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-drop-zone
  label="Upload files"
  accessibilityLabel="Upload files using drag and drop or file selector"
  labelAccessibilityVisibility="exclusive"
  multiple
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Slots

### DropZoneSlots

### children

value: `HTMLElement`

Content to include inside the DropZone container

## Examples

Lets users upload files through drag-and-drop functionality into a designated area on a page, or by activating a button.


### Basic usage

Demonstrates a basic drop zone that allows multiple file uploads with a simple label.```jsx
<s-drop-zone label="Drop files to upload" multiple />
```

```html
<s-drop-zone label="Drop files to upload" multiple></s-drop-zone>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-drop-zone label="Drop files to upload" multiple></s-drop-zone>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-drop-zone label="Drop files to upload" multiple />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows a drop zone configured specifically for uploading multiple image files.```jsx
<s-drop-zone accept="image/*" label="Upload images" multiple />
```

```html
<s-drop-zone accept="image/*" label="Upload images" multiple></s-drop-zone>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-drop-zone accept="image/*" label="Upload images" multiple></s-drop-zone>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-drop-zone accept="image/*" label="Upload images" multiple />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates a drop zone when the file upload is required.```jsx
<s-drop-zone name="file" required label="Upload file" />
```

```html
<s-drop-zone name="file" required label="Upload file"></s-drop-zone>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-drop-zone name="file" required label="Upload file"></s-drop-zone>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-drop-zone name="file" required label="Upload file" />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Displays a drop zone in a disabled state, preventing file uploads.```jsx
<s-drop-zone label="Upload not available" disabled />
```

```html
<s-drop-zone label="Upload not available" disabled></s-drop-zone>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-drop-zone label="Upload not available" disabled></s-drop-zone>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-drop-zone label="Upload not available" disabled />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates restricting file uploads to specific document types like PDF and DOC.```jsx
<s-drop-zone
  accept=".pdf,.doc,.docx"
  label="Upload documents"
  multiple
 />
```

```html
<s-drop-zone
  accept=".pdf,.doc,.docx"
  label="Upload documents"
  multiple
></s-drop-zone>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-drop-zone
  accept=".pdf,.doc,.docx"
  label="Upload documents"
  multiple
></s-drop-zone>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-drop-zone
  accept=".pdf,.doc,.docx"
  label="Upload documents"
  multiple
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows a drop zone with an error message, useful for indicating file upload validation issues.```jsx
<s-drop-zone
  label="Upload file"
  error="File size must be less than 5mb"
 />
```

```html
<s-drop-zone
  label="Upload file"
  error="File size must be less than 5mb"
></s-drop-zone>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-drop-zone
  label="Upload file"
  error="File size must be less than 5mb"
></s-drop-zone>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-drop-zone
  label="Upload file"
  error="File size must be less than 5mb"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates advanced accessibility configuration for the drop zone, including custom accessibility labels.```jsx
<s-drop-zone
  label="Upload files"
  accessibilityLabel="Upload files using drag and drop or file selector"
  labelAccessibilityVisibility="exclusive"
  multiple
 />
```

```html
<s-drop-zone
  label="Upload files"
  accessibilityLabel="Upload files using drag and drop or file selector"
  labelAccessibilityVisibility="exclusive"
  multiple
></s-drop-zone>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-drop-zone
  label="Upload files"
  accessibilityLabel="Upload files using drag and drop or file selector"
  labelAccessibilityVisibility="exclusive"
  multiple
></s-drop-zone>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-drop-zone
  label="Upload files"
  accessibilityLabel="Upload files using drag and drop or file selector"
  labelAccessibilityVisibility="exclusive"
  multiple
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Examples

Lets users upload files through drag-and-drop functionality into a designated area on a page, or by activating a button.


### Basic usage

Demonstrates a basic drop zone that allows multiple file uploads with a simple label.```jsx
<s-drop-zone label="Drop files to upload" multiple />
```

```html
<s-drop-zone label="Drop files to upload" multiple></s-drop-zone>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-drop-zone label="Drop files to upload" multiple></s-drop-zone>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-drop-zone label="Drop files to upload" multiple />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows a drop zone configured specifically for uploading multiple image files.```jsx
<s-drop-zone accept="image/*" label="Upload images" multiple />
```

```html
<s-drop-zone accept="image/*" label="Upload images" multiple></s-drop-zone>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-drop-zone accept="image/*" label="Upload images" multiple></s-drop-zone>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-drop-zone accept="image/*" label="Upload images" multiple />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates a drop zone when the file upload is required.```jsx
<s-drop-zone name="file" required label="Upload file" />
```

```html
<s-drop-zone name="file" required label="Upload file"></s-drop-zone>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-drop-zone name="file" required label="Upload file"></s-drop-zone>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-drop-zone name="file" required label="Upload file" />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Displays a drop zone in a disabled state, preventing file uploads.```jsx
<s-drop-zone label="Upload not available" disabled />
```

```html
<s-drop-zone label="Upload not available" disabled></s-drop-zone>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-drop-zone label="Upload not available" disabled></s-drop-zone>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-drop-zone label="Upload not available" disabled />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates restricting file uploads to specific document types like PDF and DOC.```jsx
<s-drop-zone
  accept=".pdf,.doc,.docx"
  label="Upload documents"
  multiple
 />
```

```html
<s-drop-zone
  accept=".pdf,.doc,.docx"
  label="Upload documents"
  multiple
></s-drop-zone>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-drop-zone
  accept=".pdf,.doc,.docx"
  label="Upload documents"
  multiple
></s-drop-zone>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-drop-zone
  accept=".pdf,.doc,.docx"
  label="Upload documents"
  multiple
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows a drop zone with an error message, useful for indicating file upload validation issues.```jsx
<s-drop-zone
  label="Upload file"
  error="File size must be less than 5mb"
 />
```

```html
<s-drop-zone
  label="Upload file"
  error="File size must be less than 5mb"
></s-drop-zone>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-drop-zone
  label="Upload file"
  error="File size must be less than 5mb"
></s-drop-zone>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-drop-zone
  label="Upload file"
  error="File size must be less than 5mb"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates advanced accessibility configuration for the drop zone, including custom accessibility labels.```jsx
<s-drop-zone
  label="Upload files"
  accessibilityLabel="Upload files using drag and drop or file selector"
  labelAccessibilityVisibility="exclusive"
  multiple
 />
```

```html
<s-drop-zone
  label="Upload files"
  accessibilityLabel="Upload files using drag and drop or file selector"
  labelAccessibilityVisibility="exclusive"
  multiple
></s-drop-zone>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-drop-zone
  label="Upload files"
  accessibilityLabel="Upload files using drag and drop or file selector"
  labelAccessibilityVisibility="exclusive"
  multiple
></s-drop-zone>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; padding: 0;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-drop-zone
  label="Upload files"
  accessibilityLabel="Upload files using drag and drop or file selector"
  labelAccessibilityVisibility="exclusive"
  multiple
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

