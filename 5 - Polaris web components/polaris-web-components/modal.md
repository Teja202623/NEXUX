# Modal

Displays content in an overlay. Use to create a distraction-free experience such as a confirmation dialog or a settings panel.

```jsx
<>
  <s-button commandFor="modal">Open</s-button>

  <s-modal id="modal" heading="Details">
    <s-paragraph>Displaying more details here.</s-paragraph>

    <s-button slot="secondary-actions" commandFor="modal" command="--hide">
      Close
    </s-button>
    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="modal"
      command="--hide"
    >
      Save
    </s-button>
  </s-modal>
</>
```

```html
<s-button commandFor="modal">Open</s-button>

<s-modal id="modal" heading="Details">
  <s-paragraph>Displaying more details here.</s-paragraph>

  <s-button slot="secondary-actions" commandFor="modal" command="--hide">
    Close
  </s-button>
  <s-button
    slot="primary-action"
    variant="primary"
    commandFor="modal"
    command="--hide"
  >
    Save
  </s-button>
</s-modal>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; min-height: 300px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
  <s-button commandFor="modal">Open</s-button>

  <s-modal id="modal" heading="Details">
    <s-paragraph>Displaying more details here.</s-paragraph>

    <s-button slot="secondary-actions" commandFor="modal" command="--hide">
      Close
    </s-button>
    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="modal"
      command="--hide"
    >
      Save
    </s-button>
  </s-modal>
</>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Properties

### Modal

### __@abortController@7194

value: `AbortController`


### __@childrenRerenderObserver@7196

value: `MutationObserver`


### __@dialog@7188

value: `HTMLDialogElement`


### __@dismiss@7189

value: `() => void`


### __@focusedElement@7190

value: `HTMLElement`


### __@hasOpenChildModal@7184

value: `boolean`


### __@hide@7186

value: `() => Promise<void>`


### __@isOpen@7187

value: `boolean`


### __@nestedModals@7192

value: `Map<Modal, boolean>`

  - Modal: declare class Modal extends PreactOverlayElement implements ModalProps {
  accessor accessibilityLabel: ModalProps['accessibilityLabel'];
  accessor heading: ModalProps['heading'];
  accessor padding: ModalProps['padding'];
  accessor size: ModalProps['size'];
  /** @private */
  [abortController]: AbortController;
  /** @private */
  [dialog]: HTMLDialogElement | null;
  /** @private */
  [focusedElement]: HTMLElement | null;
  /** @private */
  [nestedModals]: Map<Modal, boolean>;
  /** @private */
  [childrenRerenderObserver]: MutationObserver;
  /** @private */
  [shadowDomRerenderObserver]: MutationObserver;
  /** @private */
  [onEscape]: (event: KeyboardEvent) => void;
  /** @private */
  [onBackdropClick]: (event: MouseEvent) => void;
  /** @private */
  [onChildModalChange]: EventListenerOrEventListenerObject;
  /** @private */
  get [isOpen](): boolean;
  /** @private */
  [dismiss](): void;
  /** @private */
  get [hasOpenChildModal](): boolean;
  /** @private */
  [show](): Promise<void>;
  /** @private */
  [hide](): Promise<void>;
  showOverlay(): void;
  hideOverlay(): void;
  toggleOverlay(): void;
  /** @private */
  connectedCallback(): void;
  /** @private */
  disconnectedCallback(): void;
  constructor();
}

### __@onBackdropClick@7193

value: `(event: MouseEvent) => void`


### __@onChildModalChange@7195

value: `EventListenerOrEventListenerObject`


### __@onEscape@7191

value: `(event: KeyboardEvent) => void`


### __@overlayActivator@7141

value: `HTMLElement`


### __@overlayHidden@7140

value: `boolean`


### __@overlayHideFrameId@7142

value: `number`


### __@shadowDomRerenderObserver@7197

value: `MutationObserver`


### __@show@7185

value: `() => Promise<void>`


### accessibilityLabel

value: `string`

A label that describes the purpose of the modal. When set, it will be announced to users using assistive technologies and will provide them with more context.

This overrides the `heading` prop for screen readers.

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


### heading

value: `string`

A title that describes the content of the Modal.

### hideOverlay

value: `() => void`

Method to hide an overlay.

### padding

value: `"base" | "none"`

Adjust the padding around the Modal content.

`base`: applies padding that is appropriate for the element.

`none`: removes all padding from the element. This can be useful when elements inside the Modal need to span to the edge of the Modal. For example, a full-width image. In this case, rely on `Box` with a padding of 'base' to bring back the desired padding for the rest of the content.

### queueRender

value: `() => void`

Queue a run of the render function. You shouldn't need to call this manually - it should be handled by changes to

### setAttribute

value: `(name: string, value: string) => void`


### showOverlay

value: `() => void`

Method to show an overlay.

### size

value: `"small" | "small-100" | "base" | "large" | "large-100"`

Adjust the size of the Modal.

### toggleOverlay

value: `() => void`

Method to toggle the visiblity of an overlay.

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

Displays content in an overlay. Use to create a distraction-free experience such as a confirmation dialog or a settings panel.


### Basic usage

Simple modal with heading and basic content for displaying information. Click the button to open the modal.```jsx
<>
  <s-button commandFor="info-modal" command="--show">
    Show product info
  </s-button>

  <s-modal id="info-modal" heading="Product information">
    <s-text>
      This product is currently out of stock and cannot be ordered.
    </s-text>

    <s-button slot="secondary-actions" commandFor="info-modal" command="--hide">
      Close
    </s-button>
  </s-modal>
</>
```

```html
<s-button commandFor="info-modal" command="--show">Show product info</s-button>

<s-modal id="info-modal" heading="Product information">
  <s-text>This product is currently out of stock and cannot be ordered.</s-text>

  <s-button slot="secondary-actions" commandFor="info-modal" command="--hide">
    Close
  </s-button>
</s-modal>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; min-height: 300px}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-button commandFor="info-modal" command="--show">Show product info</s-button>

<s-modal id="info-modal" heading="Product information">
  <s-text>This product is currently out of stock and cannot be ordered.</s-text>

  <s-button slot="secondary-actions" commandFor="info-modal" command="--hide">
    Close
  </s-button>
</s-modal>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; min-height: 300px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
  <s-button commandFor="info-modal" command="--show">
    Show product info
  </s-button>

  <s-modal id="info-modal" heading="Product information">
    <s-text>
      This product is currently out of stock and cannot be ordered.
    </s-text>

    <s-button slot="secondary-actions" commandFor="info-modal" command="--hide">
      Close
    </s-button>
  </s-modal>
</>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Modal with primary and secondary action buttons. Click the button to open the confirmation modal.```jsx
<s-stack gap="base">
  <s-button tone="critical" commandFor="delete-modal" command="--show">
    Delete product
  </s-button>

  <s-modal id="delete-modal" heading="Delete product?">
    <s-stack gap="base">
      <s-text>Are you sure you want to delete "Winter jacket"?</s-text>
      <s-text tone="caution">This action cannot be undone.</s-text>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      tone="critical"
      commandFor="delete-modal"
      command="--hide"
    >
      Delete product
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="delete-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>
</s-stack>
```

```html
<s-stack gap="base">
  <s-button tone="critical" commandFor="delete-modal" command="--show">
    Delete product
  </s-button>

  <s-modal id="delete-modal" heading="Delete product?">
    <s-stack gap="base">
      <s-text>Are you sure you want to delete "Winter jacket"?</s-text>
      <s-text tone="caution">This action cannot be undone.</s-text>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      tone="critical"
      commandFor="delete-modal"
      command="--hide"
    >
      Delete product
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="delete-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>
</s-stack>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; min-height: 300px}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-stack gap="base">
  <s-button tone="critical" commandFor="delete-modal" command="--show">
    Delete product
  </s-button>

  <s-modal id="delete-modal" heading="Delete product?">
    <s-stack gap="base">
      <s-text>Are you sure you want to delete "Winter jacket"?</s-text>
      <s-text tone="caution">This action cannot be undone.</s-text>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      tone="critical"
      commandFor="delete-modal"
      command="--hide"
    >
      Delete product
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="delete-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>
</s-stack>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; min-height: 300px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-button tone="critical" commandFor="delete-modal" command="--show">
    Delete product
  </s-button>

  <s-modal id="delete-modal" heading="Delete product?">
    <s-stack gap="base">
      <s-text>Are you sure you want to delete "Winter jacket"?</s-text>
      <s-text tone="caution">This action cannot be undone.</s-text>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      tone="critical"
      commandFor="delete-modal"
      command="--hide"
    >
      Delete product
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="delete-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Modal containing form fields demonstrating how to structure input fields within a modal. Click the button to open the modal.```jsx
<s-stack gap="base">
  <s-button variant="primary" commandFor="edit-modal" command="--show">
    Edit customer
  </s-button>

  <s-modal id="edit-modal" heading="Edit customer information" size="large">
    <s-stack gap="base">
      <s-text-field
        label="Customer name"
        name="name"
        value="Sarah Johnson"
       />

      <s-email-field
        label="Email address"
        name="email"
        value="sarah@example.com"
       />

      <s-text-field
        label="Phone number"
        name="phone"
        value="+1 555-0123"
       />

      <s-select label="Customer group" name="group">
        <s-option value="retail">Retail</s-option>
        <s-option value="wholesale" selected>
          Wholesale
        </s-option>
        <s-option value="vip">VIP</s-option>
      </s-select>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="edit-modal"
      command="--hide"
    >
      Save changes
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="edit-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>
</s-stack>
```

```html
<s-stack gap="base">
  <s-button variant="primary" commandFor="edit-modal" command="--show">
    Edit customer
  </s-button>

  <s-modal id="edit-modal" heading="Edit customer information" size="large">
    <s-stack gap="base">
      <s-text-field
        label="Customer name"
        name="name"
        value="Sarah Johnson"
      ></s-text-field>

      <s-email-field
        label="Email address"
        name="email"
        value="sarah@example.com"
      ></s-email-field>

      <s-text-field
        label="Phone number"
        name="phone"
        value="+1 555-0123"
      ></s-text-field>

      <s-select label="Customer group" name="group">
        <s-option value="retail">Retail</s-option>
        <s-option value="wholesale" selected>Wholesale</s-option>
        <s-option value="vip">VIP</s-option>
      </s-select>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="edit-modal"
      command="--hide"
    >
      Save changes
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="edit-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>
</s-stack>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; min-height: 300px}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-stack gap="base">
  <s-button variant="primary" commandFor="edit-modal" command="--show">
    Edit customer
  </s-button>

  <s-modal id="edit-modal" heading="Edit customer information" size="large">
    <s-stack gap="base">
      <s-text-field
        label="Customer name"
        name="name"
        value="Sarah Johnson"
      ></s-text-field>

      <s-email-field
        label="Email address"
        name="email"
        value="sarah@example.com"
      ></s-email-field>

      <s-text-field
        label="Phone number"
        name="phone"
        value="+1 555-0123"
      ></s-text-field>

      <s-select label="Customer group" name="group">
        <s-option value="retail">Retail</s-option>
        <s-option value="wholesale" selected>Wholesale</s-option>
        <s-option value="vip">VIP</s-option>
      </s-select>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="edit-modal"
      command="--hide"
    >
      Save changes
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="edit-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>
</s-stack>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; min-height: 300px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-button variant="primary" commandFor="edit-modal" command="--show">
    Edit customer
  </s-button>

  <s-modal id="edit-modal" heading="Edit customer information" size="large">
    <s-stack gap="base">
      <s-text-field
        label="Customer name"
        name="name"
        value="Sarah Johnson"
       />

      <s-email-field
        label="Email address"
        name="email"
        value="sarah@example.com"
       />

      <s-text-field
        label="Phone number"
        name="phone"
        value="+1 555-0123"
       />

      <s-select label="Customer group" name="group">
        <s-option value="retail">Retail</s-option>
        <s-option value="wholesale" selected>
          Wholesale
        </s-option>
        <s-option value="vip">VIP</s-option>
      </s-select>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="edit-modal"
      command="--hide"
    >
      Save changes
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="edit-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates various modal sizes for different content requirements. Click each button to see different modal sizes.```jsx
<s-stack gap="base">
  <s-stack direction="inline" gap="base">
    <s-button commandFor="small-modal" command="--show">
      Small modal
    </s-button>
    <s-button commandFor="large-modal" command="--show">
      Large modal
    </s-button>
  </s-stack>

  {/* Small modal for quick confirmations */}
  <s-modal id="small-modal" heading="Confirm action" size="small-100">
    <s-text>Are you sure you want to proceed?</s-text>
    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="small-modal"
      command="--hide"
    >
      Confirm
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="small-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>

  {/* Large modal for detailed content */}
  <s-modal id="large-modal" heading="Order details" size="large-100">
    <s-stack gap="base">
      <s-section>
        <s-heading>Order #1001</s-heading>
        <s-text>Placed on March 15, 2024</s-text>
      </s-section>

      <s-divider />

      <s-section>
        <s-heading>Items</s-heading>
        <s-stack gap="small">
          <s-text>Winter jacket - $89.99</s-text>
          <s-text>Wool scarf - $29.99</s-text>
          <s-text>Leather gloves - $45.99</s-text>
        </s-stack>
      </s-section>

      <s-divider />

      <s-text type="strong">Total: $165.97</s-text>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="large-modal"
      command="--hide"
    >
      Close
    </s-button>
  </s-modal>
</s-stack>
```

```html
<s-stack gap="base">
  <s-stack direction="inline" gap="base">
    <s-button commandFor="small-modal" command="--show">Small modal</s-button>
    <s-button commandFor="large-modal" command="--show">Large modal</s-button>
  </s-stack>

  <!-- Small modal for quick confirmations -->
  <s-modal id="small-modal" heading="Confirm action" size="small-100">
    <s-text>Are you sure you want to proceed?</s-text>
    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="small-modal"
      command="--hide"
    >
      Confirm
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="small-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>

  <!-- Large modal for detailed content -->
  <s-modal id="large-modal" heading="Order details" size="large-100">
    <s-stack gap="base">
      <s-section>
        <s-heading>Order #1001</s-heading>
        <s-text>Placed on March 15, 2024</s-text>
      </s-section>

      <s-divider></s-divider>

      <s-section>
        <s-heading>Items</s-heading>
        <s-stack gap="small">
          <s-text>Winter jacket - $89.99</s-text>
          <s-text>Wool scarf - $29.99</s-text>
          <s-text>Leather gloves - $45.99</s-text>
        </s-stack>
      </s-section>

      <s-divider></s-divider>

      <s-text type="strong">Total: $165.97</s-text>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="large-modal"
      command="--hide"
    >
      Close
    </s-button>
  </s-modal>
</s-stack>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; min-height: 300px}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-stack gap="base">
  <s-stack direction="inline" gap="base">
    <s-button commandFor="small-modal" command="--show">Small modal</s-button>
    <s-button commandFor="large-modal" command="--show">Large modal</s-button>
  </s-stack>

  <!-- Small modal for quick confirmations -->
  <s-modal id="small-modal" heading="Confirm action" size="small-100">
    <s-text>Are you sure you want to proceed?</s-text>
    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="small-modal"
      command="--hide"
    >
      Confirm
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="small-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>

  <!-- Large modal for detailed content -->
  <s-modal id="large-modal" heading="Order details" size="large-100">
    <s-stack gap="base">
      <s-section>
        <s-heading>Order #1001</s-heading>
        <s-text>Placed on March 15, 2024</s-text>
      </s-section>

      <s-divider></s-divider>

      <s-section>
        <s-heading>Items</s-heading>
        <s-stack gap="small">
          <s-text>Winter jacket - $89.99</s-text>
          <s-text>Wool scarf - $29.99</s-text>
          <s-text>Leather gloves - $45.99</s-text>
        </s-stack>
      </s-section>

      <s-divider></s-divider>

      <s-text type="strong">Total: $165.97</s-text>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="large-modal"
      command="--hide"
    >
      Close
    </s-button>
  </s-modal>
</s-stack>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; min-height: 300px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-stack direction="inline" gap="base">
    <s-button commandFor="small-modal" command="--show">
      Small modal
    </s-button>
    <s-button commandFor="large-modal" command="--show">
      Large modal
    </s-button>
  </s-stack>

  {/* Small modal for quick confirmations */}
  <s-modal id="small-modal" heading="Confirm action" size="small-100">
    <s-text>Are you sure you want to proceed?</s-text>
    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="small-modal"
      command="--hide"
    >
      Confirm
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="small-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>

  {/* Large modal for detailed content */}
  <s-modal id="large-modal" heading="Order details" size="large-100">
    <s-stack gap="base">
      <s-section>
        <s-heading>Order #1001</s-heading>
        <s-text>Placed on March 15, 2024</s-text>
      </s-section>

      <s-divider />

      <s-section>
        <s-heading>Items</s-heading>
        <s-stack gap="small">
          <s-text>Winter jacket - \$89.99</s-text>
          <s-text>Wool scarf - \$29.99</s-text>
          <s-text>Leather gloves - \$45.99</s-text>
        </s-stack>
      </s-section>

      <s-divider />

      <s-text type="strong">Total: \$165.97</s-text>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="large-modal"
      command="--hide"
    >
      Close
    </s-button>
  </s-modal>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Modal with no padding for full-width content. Click to view the modal.```jsx
<s-stack gap="base">
  <s-button commandFor="image-modal" command="--show">
    View product image
  </s-button>

  <s-modal id="image-modal" heading="Product image" padding="none">
    <s-box background="subdued" padding="base">
      <s-text>Image would display here with full width</s-text>
    </s-box>

    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="image-modal"
      command="--hide"
    >
      Close
    </s-button>
  </s-modal>
</s-stack>
```

```html
<s-stack gap="base">
  <s-button commandFor="image-modal" command="--show">
    View product image
  </s-button>

  <s-modal id="image-modal" heading="Product image" padding="none">
    <s-box background="subdued" padding="base">
      <s-text>Image would display here with full width</s-text>
    </s-box>

    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="image-modal"
      command="--hide"
    >
      Close
    </s-button>
  </s-modal>
</s-stack>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; min-height: 300px}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-stack gap="base">
  <s-button commandFor="image-modal" command="--show">
    View product image
  </s-button>

  <s-modal id="image-modal" heading="Product image" padding="none">
    <s-box background="subdued" padding="base">
      <s-text>Image would display here with full width</s-text>
    </s-box>

    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="image-modal"
      command="--hide"
    >
      Close
    </s-button>
  </s-modal>
</s-stack>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; min-height: 300px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-button commandFor="image-modal" command="--show">
    View product image
  </s-button>

  <s-modal id="image-modal" heading="Product image" padding="none">
    <s-box background="subdued" padding="base">
      <s-text>Image would display here with full width</s-text>
    </s-box>

    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="image-modal"
      command="--hide"
    >
      Close
    </s-button>
  </s-modal>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Events

Learn more about [registering events](https://shopify.dev/docs/api/app-home/using-polaris-components#event-handling).

### ModalEvents

### afterhide

value: `CallbackEventListener<typeof tagName> | null`

  - CallbackEventListener: (EventListener & {
      (event: CallbackEvent<T>): void;
    }) | null
  - CallbackEvent: Event & {
  currentTarget: HTMLElementTagNameMap[T];
}

### aftershow

value: `CallbackEventListener<typeof tagName> | null`

  - CallbackEventListener: (EventListener & {
      (event: CallbackEvent<T>): void;
    }) | null
  - CallbackEvent: Event & {
  currentTarget: HTMLElementTagNameMap[T];
}

### hide

value: `CallbackEventListener<typeof tagName> | null`

  - CallbackEventListener: (EventListener & {
      (event: CallbackEvent<T>): void;
    }) | null
  - CallbackEvent: Event & {
  currentTarget: HTMLElementTagNameMap[T];
}

### show

value: `CallbackEventListener<typeof tagName> | null`

  - CallbackEventListener: (EventListener & {
      (event: CallbackEvent<T>): void;
    }) | null
  - CallbackEvent: Event & {
  currentTarget: HTMLElementTagNameMap[T];
}

## Examples

Displays content in an overlay. Use to create a distraction-free experience such as a confirmation dialog or a settings panel.


### Basic usage

Simple modal with heading and basic content for displaying information. Click the button to open the modal.```jsx
<>
  <s-button commandFor="info-modal" command="--show">
    Show product info
  </s-button>

  <s-modal id="info-modal" heading="Product information">
    <s-text>
      This product is currently out of stock and cannot be ordered.
    </s-text>

    <s-button slot="secondary-actions" commandFor="info-modal" command="--hide">
      Close
    </s-button>
  </s-modal>
</>
```

```html
<s-button commandFor="info-modal" command="--show">Show product info</s-button>

<s-modal id="info-modal" heading="Product information">
  <s-text>This product is currently out of stock and cannot be ordered.</s-text>

  <s-button slot="secondary-actions" commandFor="info-modal" command="--hide">
    Close
  </s-button>
</s-modal>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; min-height: 300px}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-button commandFor="info-modal" command="--show">Show product info</s-button>

<s-modal id="info-modal" heading="Product information">
  <s-text>This product is currently out of stock and cannot be ordered.</s-text>

  <s-button slot="secondary-actions" commandFor="info-modal" command="--hide">
    Close
  </s-button>
</s-modal>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; min-height: 300px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
  <s-button commandFor="info-modal" command="--show">
    Show product info
  </s-button>

  <s-modal id="info-modal" heading="Product information">
    <s-text>
      This product is currently out of stock and cannot be ordered.
    </s-text>

    <s-button slot="secondary-actions" commandFor="info-modal" command="--hide">
      Close
    </s-button>
  </s-modal>
</>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Modal with primary and secondary action buttons. Click the button to open the confirmation modal.```jsx
<s-stack gap="base">
  <s-button tone="critical" commandFor="delete-modal" command="--show">
    Delete product
  </s-button>

  <s-modal id="delete-modal" heading="Delete product?">
    <s-stack gap="base">
      <s-text>Are you sure you want to delete "Winter jacket"?</s-text>
      <s-text tone="caution">This action cannot be undone.</s-text>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      tone="critical"
      commandFor="delete-modal"
      command="--hide"
    >
      Delete product
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="delete-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>
</s-stack>
```

```html
<s-stack gap="base">
  <s-button tone="critical" commandFor="delete-modal" command="--show">
    Delete product
  </s-button>

  <s-modal id="delete-modal" heading="Delete product?">
    <s-stack gap="base">
      <s-text>Are you sure you want to delete "Winter jacket"?</s-text>
      <s-text tone="caution">This action cannot be undone.</s-text>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      tone="critical"
      commandFor="delete-modal"
      command="--hide"
    >
      Delete product
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="delete-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>
</s-stack>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; min-height: 300px}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-stack gap="base">
  <s-button tone="critical" commandFor="delete-modal" command="--show">
    Delete product
  </s-button>

  <s-modal id="delete-modal" heading="Delete product?">
    <s-stack gap="base">
      <s-text>Are you sure you want to delete "Winter jacket"?</s-text>
      <s-text tone="caution">This action cannot be undone.</s-text>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      tone="critical"
      commandFor="delete-modal"
      command="--hide"
    >
      Delete product
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="delete-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>
</s-stack>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; min-height: 300px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-button tone="critical" commandFor="delete-modal" command="--show">
    Delete product
  </s-button>

  <s-modal id="delete-modal" heading="Delete product?">
    <s-stack gap="base">
      <s-text>Are you sure you want to delete "Winter jacket"?</s-text>
      <s-text tone="caution">This action cannot be undone.</s-text>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      tone="critical"
      commandFor="delete-modal"
      command="--hide"
    >
      Delete product
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="delete-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Modal containing form fields demonstrating how to structure input fields within a modal. Click the button to open the modal.```jsx
<s-stack gap="base">
  <s-button variant="primary" commandFor="edit-modal" command="--show">
    Edit customer
  </s-button>

  <s-modal id="edit-modal" heading="Edit customer information" size="large">
    <s-stack gap="base">
      <s-text-field
        label="Customer name"
        name="name"
        value="Sarah Johnson"
       />

      <s-email-field
        label="Email address"
        name="email"
        value="sarah@example.com"
       />

      <s-text-field
        label="Phone number"
        name="phone"
        value="+1 555-0123"
       />

      <s-select label="Customer group" name="group">
        <s-option value="retail">Retail</s-option>
        <s-option value="wholesale" selected>
          Wholesale
        </s-option>
        <s-option value="vip">VIP</s-option>
      </s-select>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="edit-modal"
      command="--hide"
    >
      Save changes
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="edit-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>
</s-stack>
```

```html
<s-stack gap="base">
  <s-button variant="primary" commandFor="edit-modal" command="--show">
    Edit customer
  </s-button>

  <s-modal id="edit-modal" heading="Edit customer information" size="large">
    <s-stack gap="base">
      <s-text-field
        label="Customer name"
        name="name"
        value="Sarah Johnson"
      ></s-text-field>

      <s-email-field
        label="Email address"
        name="email"
        value="sarah@example.com"
      ></s-email-field>

      <s-text-field
        label="Phone number"
        name="phone"
        value="+1 555-0123"
      ></s-text-field>

      <s-select label="Customer group" name="group">
        <s-option value="retail">Retail</s-option>
        <s-option value="wholesale" selected>Wholesale</s-option>
        <s-option value="vip">VIP</s-option>
      </s-select>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="edit-modal"
      command="--hide"
    >
      Save changes
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="edit-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>
</s-stack>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; min-height: 300px}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-stack gap="base">
  <s-button variant="primary" commandFor="edit-modal" command="--show">
    Edit customer
  </s-button>

  <s-modal id="edit-modal" heading="Edit customer information" size="large">
    <s-stack gap="base">
      <s-text-field
        label="Customer name"
        name="name"
        value="Sarah Johnson"
      ></s-text-field>

      <s-email-field
        label="Email address"
        name="email"
        value="sarah@example.com"
      ></s-email-field>

      <s-text-field
        label="Phone number"
        name="phone"
        value="+1 555-0123"
      ></s-text-field>

      <s-select label="Customer group" name="group">
        <s-option value="retail">Retail</s-option>
        <s-option value="wholesale" selected>Wholesale</s-option>
        <s-option value="vip">VIP</s-option>
      </s-select>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="edit-modal"
      command="--hide"
    >
      Save changes
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="edit-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>
</s-stack>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; min-height: 300px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-button variant="primary" commandFor="edit-modal" command="--show">
    Edit customer
  </s-button>

  <s-modal id="edit-modal" heading="Edit customer information" size="large">
    <s-stack gap="base">
      <s-text-field
        label="Customer name"
        name="name"
        value="Sarah Johnson"
       />

      <s-email-field
        label="Email address"
        name="email"
        value="sarah@example.com"
       />

      <s-text-field
        label="Phone number"
        name="phone"
        value="+1 555-0123"
       />

      <s-select label="Customer group" name="group">
        <s-option value="retail">Retail</s-option>
        <s-option value="wholesale" selected>
          Wholesale
        </s-option>
        <s-option value="vip">VIP</s-option>
      </s-select>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="edit-modal"
      command="--hide"
    >
      Save changes
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="edit-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates various modal sizes for different content requirements. Click each button to see different modal sizes.```jsx
<s-stack gap="base">
  <s-stack direction="inline" gap="base">
    <s-button commandFor="small-modal" command="--show">
      Small modal
    </s-button>
    <s-button commandFor="large-modal" command="--show">
      Large modal
    </s-button>
  </s-stack>

  {/* Small modal for quick confirmations */}
  <s-modal id="small-modal" heading="Confirm action" size="small-100">
    <s-text>Are you sure you want to proceed?</s-text>
    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="small-modal"
      command="--hide"
    >
      Confirm
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="small-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>

  {/* Large modal for detailed content */}
  <s-modal id="large-modal" heading="Order details" size="large-100">
    <s-stack gap="base">
      <s-section>
        <s-heading>Order #1001</s-heading>
        <s-text>Placed on March 15, 2024</s-text>
      </s-section>

      <s-divider />

      <s-section>
        <s-heading>Items</s-heading>
        <s-stack gap="small">
          <s-text>Winter jacket - $89.99</s-text>
          <s-text>Wool scarf - $29.99</s-text>
          <s-text>Leather gloves - $45.99</s-text>
        </s-stack>
      </s-section>

      <s-divider />

      <s-text type="strong">Total: $165.97</s-text>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="large-modal"
      command="--hide"
    >
      Close
    </s-button>
  </s-modal>
</s-stack>
```

```html
<s-stack gap="base">
  <s-stack direction="inline" gap="base">
    <s-button commandFor="small-modal" command="--show">Small modal</s-button>
    <s-button commandFor="large-modal" command="--show">Large modal</s-button>
  </s-stack>

  <!-- Small modal for quick confirmations -->
  <s-modal id="small-modal" heading="Confirm action" size="small-100">
    <s-text>Are you sure you want to proceed?</s-text>
    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="small-modal"
      command="--hide"
    >
      Confirm
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="small-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>

  <!-- Large modal for detailed content -->
  <s-modal id="large-modal" heading="Order details" size="large-100">
    <s-stack gap="base">
      <s-section>
        <s-heading>Order #1001</s-heading>
        <s-text>Placed on March 15, 2024</s-text>
      </s-section>

      <s-divider></s-divider>

      <s-section>
        <s-heading>Items</s-heading>
        <s-stack gap="small">
          <s-text>Winter jacket - $89.99</s-text>
          <s-text>Wool scarf - $29.99</s-text>
          <s-text>Leather gloves - $45.99</s-text>
        </s-stack>
      </s-section>

      <s-divider></s-divider>

      <s-text type="strong">Total: $165.97</s-text>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="large-modal"
      command="--hide"
    >
      Close
    </s-button>
  </s-modal>
</s-stack>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; min-height: 300px}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-stack gap="base">
  <s-stack direction="inline" gap="base">
    <s-button commandFor="small-modal" command="--show">Small modal</s-button>
    <s-button commandFor="large-modal" command="--show">Large modal</s-button>
  </s-stack>

  <!-- Small modal for quick confirmations -->
  <s-modal id="small-modal" heading="Confirm action" size="small-100">
    <s-text>Are you sure you want to proceed?</s-text>
    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="small-modal"
      command="--hide"
    >
      Confirm
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="small-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>

  <!-- Large modal for detailed content -->
  <s-modal id="large-modal" heading="Order details" size="large-100">
    <s-stack gap="base">
      <s-section>
        <s-heading>Order #1001</s-heading>
        <s-text>Placed on March 15, 2024</s-text>
      </s-section>

      <s-divider></s-divider>

      <s-section>
        <s-heading>Items</s-heading>
        <s-stack gap="small">
          <s-text>Winter jacket - $89.99</s-text>
          <s-text>Wool scarf - $29.99</s-text>
          <s-text>Leather gloves - $45.99</s-text>
        </s-stack>
      </s-section>

      <s-divider></s-divider>

      <s-text type="strong">Total: $165.97</s-text>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="large-modal"
      command="--hide"
    >
      Close
    </s-button>
  </s-modal>
</s-stack>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; min-height: 300px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-stack direction="inline" gap="base">
    <s-button commandFor="small-modal" command="--show">
      Small modal
    </s-button>
    <s-button commandFor="large-modal" command="--show">
      Large modal
    </s-button>
  </s-stack>

  {/* Small modal for quick confirmations */}
  <s-modal id="small-modal" heading="Confirm action" size="small-100">
    <s-text>Are you sure you want to proceed?</s-text>
    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="small-modal"
      command="--hide"
    >
      Confirm
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="small-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>

  {/* Large modal for detailed content */}
  <s-modal id="large-modal" heading="Order details" size="large-100">
    <s-stack gap="base">
      <s-section>
        <s-heading>Order #1001</s-heading>
        <s-text>Placed on March 15, 2024</s-text>
      </s-section>

      <s-divider />

      <s-section>
        <s-heading>Items</s-heading>
        <s-stack gap="small">
          <s-text>Winter jacket - \$89.99</s-text>
          <s-text>Wool scarf - \$29.99</s-text>
          <s-text>Leather gloves - \$45.99</s-text>
        </s-stack>
      </s-section>

      <s-divider />

      <s-text type="strong">Total: \$165.97</s-text>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="large-modal"
      command="--hide"
    >
      Close
    </s-button>
  </s-modal>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Modal with no padding for full-width content. Click to view the modal.```jsx
<s-stack gap="base">
  <s-button commandFor="image-modal" command="--show">
    View product image
  </s-button>

  <s-modal id="image-modal" heading="Product image" padding="none">
    <s-box background="subdued" padding="base">
      <s-text>Image would display here with full width</s-text>
    </s-box>

    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="image-modal"
      command="--hide"
    >
      Close
    </s-button>
  </s-modal>
</s-stack>
```

```html
<s-stack gap="base">
  <s-button commandFor="image-modal" command="--show">
    View product image
  </s-button>

  <s-modal id="image-modal" heading="Product image" padding="none">
    <s-box background="subdued" padding="base">
      <s-text>Image would display here with full width</s-text>
    </s-box>

    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="image-modal"
      command="--hide"
    >
      Close
    </s-button>
  </s-modal>
</s-stack>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; min-height: 300px}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-stack gap="base">
  <s-button commandFor="image-modal" command="--show">
    View product image
  </s-button>

  <s-modal id="image-modal" heading="Product image" padding="none">
    <s-box background="subdued" padding="base">
      <s-text>Image would display here with full width</s-text>
    </s-box>

    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="image-modal"
      command="--hide"
    >
      Close
    </s-button>
  </s-modal>
</s-stack>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; min-height: 300px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-button commandFor="image-modal" command="--show">
    View product image
  </s-button>

  <s-modal id="image-modal" heading="Product image" padding="none">
    <s-box background="subdued" padding="base">
      <s-text>Image would display here with full width</s-text>
    </s-box>

    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="image-modal"
      command="--hide"
    >
      Close
    </s-button>
  </s-modal>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Slots

### ModalSlots

### children

value: `HTMLElement`

The content of the Modal.

### primary-action

value: `HTMLElement`

The primary action to perform.

Only a `Button` with a variant of `primary` is allowed.

### secondary-actions

value: `HTMLElement`

The secondary actions to perform.

Only `Button` elements with a variant of `secondary` or `auto` are allowed.

## Examples

Displays content in an overlay. Use to create a distraction-free experience such as a confirmation dialog or a settings panel.


### Basic usage

Simple modal with heading and basic content for displaying information. Click the button to open the modal.```jsx
<>
  <s-button commandFor="info-modal" command="--show">
    Show product info
  </s-button>

  <s-modal id="info-modal" heading="Product information">
    <s-text>
      This product is currently out of stock and cannot be ordered.
    </s-text>

    <s-button slot="secondary-actions" commandFor="info-modal" command="--hide">
      Close
    </s-button>
  </s-modal>
</>
```

```html
<s-button commandFor="info-modal" command="--show">Show product info</s-button>

<s-modal id="info-modal" heading="Product information">
  <s-text>This product is currently out of stock and cannot be ordered.</s-text>

  <s-button slot="secondary-actions" commandFor="info-modal" command="--hide">
    Close
  </s-button>
</s-modal>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; min-height: 300px}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-button commandFor="info-modal" command="--show">Show product info</s-button>

<s-modal id="info-modal" heading="Product information">
  <s-text>This product is currently out of stock and cannot be ordered.</s-text>

  <s-button slot="secondary-actions" commandFor="info-modal" command="--hide">
    Close
  </s-button>
</s-modal>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; min-height: 300px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
  <s-button commandFor="info-modal" command="--show">
    Show product info
  </s-button>

  <s-modal id="info-modal" heading="Product information">
    <s-text>
      This product is currently out of stock and cannot be ordered.
    </s-text>

    <s-button slot="secondary-actions" commandFor="info-modal" command="--hide">
      Close
    </s-button>
  </s-modal>
</>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Modal with primary and secondary action buttons. Click the button to open the confirmation modal.```jsx
<s-stack gap="base">
  <s-button tone="critical" commandFor="delete-modal" command="--show">
    Delete product
  </s-button>

  <s-modal id="delete-modal" heading="Delete product?">
    <s-stack gap="base">
      <s-text>Are you sure you want to delete "Winter jacket"?</s-text>
      <s-text tone="caution">This action cannot be undone.</s-text>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      tone="critical"
      commandFor="delete-modal"
      command="--hide"
    >
      Delete product
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="delete-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>
</s-stack>
```

```html
<s-stack gap="base">
  <s-button tone="critical" commandFor="delete-modal" command="--show">
    Delete product
  </s-button>

  <s-modal id="delete-modal" heading="Delete product?">
    <s-stack gap="base">
      <s-text>Are you sure you want to delete "Winter jacket"?</s-text>
      <s-text tone="caution">This action cannot be undone.</s-text>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      tone="critical"
      commandFor="delete-modal"
      command="--hide"
    >
      Delete product
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="delete-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>
</s-stack>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; min-height: 300px}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-stack gap="base">
  <s-button tone="critical" commandFor="delete-modal" command="--show">
    Delete product
  </s-button>

  <s-modal id="delete-modal" heading="Delete product?">
    <s-stack gap="base">
      <s-text>Are you sure you want to delete "Winter jacket"?</s-text>
      <s-text tone="caution">This action cannot be undone.</s-text>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      tone="critical"
      commandFor="delete-modal"
      command="--hide"
    >
      Delete product
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="delete-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>
</s-stack>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; min-height: 300px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-button tone="critical" commandFor="delete-modal" command="--show">
    Delete product
  </s-button>

  <s-modal id="delete-modal" heading="Delete product?">
    <s-stack gap="base">
      <s-text>Are you sure you want to delete "Winter jacket"?</s-text>
      <s-text tone="caution">This action cannot be undone.</s-text>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      tone="critical"
      commandFor="delete-modal"
      command="--hide"
    >
      Delete product
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="delete-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Modal containing form fields demonstrating how to structure input fields within a modal. Click the button to open the modal.```jsx
<s-stack gap="base">
  <s-button variant="primary" commandFor="edit-modal" command="--show">
    Edit customer
  </s-button>

  <s-modal id="edit-modal" heading="Edit customer information" size="large">
    <s-stack gap="base">
      <s-text-field
        label="Customer name"
        name="name"
        value="Sarah Johnson"
       />

      <s-email-field
        label="Email address"
        name="email"
        value="sarah@example.com"
       />

      <s-text-field
        label="Phone number"
        name="phone"
        value="+1 555-0123"
       />

      <s-select label="Customer group" name="group">
        <s-option value="retail">Retail</s-option>
        <s-option value="wholesale" selected>
          Wholesale
        </s-option>
        <s-option value="vip">VIP</s-option>
      </s-select>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="edit-modal"
      command="--hide"
    >
      Save changes
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="edit-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>
</s-stack>
```

```html
<s-stack gap="base">
  <s-button variant="primary" commandFor="edit-modal" command="--show">
    Edit customer
  </s-button>

  <s-modal id="edit-modal" heading="Edit customer information" size="large">
    <s-stack gap="base">
      <s-text-field
        label="Customer name"
        name="name"
        value="Sarah Johnson"
      ></s-text-field>

      <s-email-field
        label="Email address"
        name="email"
        value="sarah@example.com"
      ></s-email-field>

      <s-text-field
        label="Phone number"
        name="phone"
        value="+1 555-0123"
      ></s-text-field>

      <s-select label="Customer group" name="group">
        <s-option value="retail">Retail</s-option>
        <s-option value="wholesale" selected>Wholesale</s-option>
        <s-option value="vip">VIP</s-option>
      </s-select>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="edit-modal"
      command="--hide"
    >
      Save changes
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="edit-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>
</s-stack>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; min-height: 300px}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-stack gap="base">
  <s-button variant="primary" commandFor="edit-modal" command="--show">
    Edit customer
  </s-button>

  <s-modal id="edit-modal" heading="Edit customer information" size="large">
    <s-stack gap="base">
      <s-text-field
        label="Customer name"
        name="name"
        value="Sarah Johnson"
      ></s-text-field>

      <s-email-field
        label="Email address"
        name="email"
        value="sarah@example.com"
      ></s-email-field>

      <s-text-field
        label="Phone number"
        name="phone"
        value="+1 555-0123"
      ></s-text-field>

      <s-select label="Customer group" name="group">
        <s-option value="retail">Retail</s-option>
        <s-option value="wholesale" selected>Wholesale</s-option>
        <s-option value="vip">VIP</s-option>
      </s-select>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="edit-modal"
      command="--hide"
    >
      Save changes
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="edit-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>
</s-stack>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; min-height: 300px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-button variant="primary" commandFor="edit-modal" command="--show">
    Edit customer
  </s-button>

  <s-modal id="edit-modal" heading="Edit customer information" size="large">
    <s-stack gap="base">
      <s-text-field
        label="Customer name"
        name="name"
        value="Sarah Johnson"
       />

      <s-email-field
        label="Email address"
        name="email"
        value="sarah@example.com"
       />

      <s-text-field
        label="Phone number"
        name="phone"
        value="+1 555-0123"
       />

      <s-select label="Customer group" name="group">
        <s-option value="retail">Retail</s-option>
        <s-option value="wholesale" selected>
          Wholesale
        </s-option>
        <s-option value="vip">VIP</s-option>
      </s-select>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="edit-modal"
      command="--hide"
    >
      Save changes
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="edit-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates various modal sizes for different content requirements. Click each button to see different modal sizes.```jsx
<s-stack gap="base">
  <s-stack direction="inline" gap="base">
    <s-button commandFor="small-modal" command="--show">
      Small modal
    </s-button>
    <s-button commandFor="large-modal" command="--show">
      Large modal
    </s-button>
  </s-stack>

  {/* Small modal for quick confirmations */}
  <s-modal id="small-modal" heading="Confirm action" size="small-100">
    <s-text>Are you sure you want to proceed?</s-text>
    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="small-modal"
      command="--hide"
    >
      Confirm
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="small-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>

  {/* Large modal for detailed content */}
  <s-modal id="large-modal" heading="Order details" size="large-100">
    <s-stack gap="base">
      <s-section>
        <s-heading>Order #1001</s-heading>
        <s-text>Placed on March 15, 2024</s-text>
      </s-section>

      <s-divider />

      <s-section>
        <s-heading>Items</s-heading>
        <s-stack gap="small">
          <s-text>Winter jacket - $89.99</s-text>
          <s-text>Wool scarf - $29.99</s-text>
          <s-text>Leather gloves - $45.99</s-text>
        </s-stack>
      </s-section>

      <s-divider />

      <s-text type="strong">Total: $165.97</s-text>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="large-modal"
      command="--hide"
    >
      Close
    </s-button>
  </s-modal>
</s-stack>
```

```html
<s-stack gap="base">
  <s-stack direction="inline" gap="base">
    <s-button commandFor="small-modal" command="--show">Small modal</s-button>
    <s-button commandFor="large-modal" command="--show">Large modal</s-button>
  </s-stack>

  <!-- Small modal for quick confirmations -->
  <s-modal id="small-modal" heading="Confirm action" size="small-100">
    <s-text>Are you sure you want to proceed?</s-text>
    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="small-modal"
      command="--hide"
    >
      Confirm
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="small-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>

  <!-- Large modal for detailed content -->
  <s-modal id="large-modal" heading="Order details" size="large-100">
    <s-stack gap="base">
      <s-section>
        <s-heading>Order #1001</s-heading>
        <s-text>Placed on March 15, 2024</s-text>
      </s-section>

      <s-divider></s-divider>

      <s-section>
        <s-heading>Items</s-heading>
        <s-stack gap="small">
          <s-text>Winter jacket - $89.99</s-text>
          <s-text>Wool scarf - $29.99</s-text>
          <s-text>Leather gloves - $45.99</s-text>
        </s-stack>
      </s-section>

      <s-divider></s-divider>

      <s-text type="strong">Total: $165.97</s-text>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="large-modal"
      command="--hide"
    >
      Close
    </s-button>
  </s-modal>
</s-stack>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; min-height: 300px}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-stack gap="base">
  <s-stack direction="inline" gap="base">
    <s-button commandFor="small-modal" command="--show">Small modal</s-button>
    <s-button commandFor="large-modal" command="--show">Large modal</s-button>
  </s-stack>

  <!-- Small modal for quick confirmations -->
  <s-modal id="small-modal" heading="Confirm action" size="small-100">
    <s-text>Are you sure you want to proceed?</s-text>
    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="small-modal"
      command="--hide"
    >
      Confirm
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="small-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>

  <!-- Large modal for detailed content -->
  <s-modal id="large-modal" heading="Order details" size="large-100">
    <s-stack gap="base">
      <s-section>
        <s-heading>Order #1001</s-heading>
        <s-text>Placed on March 15, 2024</s-text>
      </s-section>

      <s-divider></s-divider>

      <s-section>
        <s-heading>Items</s-heading>
        <s-stack gap="small">
          <s-text>Winter jacket - $89.99</s-text>
          <s-text>Wool scarf - $29.99</s-text>
          <s-text>Leather gloves - $45.99</s-text>
        </s-stack>
      </s-section>

      <s-divider></s-divider>

      <s-text type="strong">Total: $165.97</s-text>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="large-modal"
      command="--hide"
    >
      Close
    </s-button>
  </s-modal>
</s-stack>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; min-height: 300px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-stack direction="inline" gap="base">
    <s-button commandFor="small-modal" command="--show">
      Small modal
    </s-button>
    <s-button commandFor="large-modal" command="--show">
      Large modal
    </s-button>
  </s-stack>

  {/* Small modal for quick confirmations */}
  <s-modal id="small-modal" heading="Confirm action" size="small-100">
    <s-text>Are you sure you want to proceed?</s-text>
    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="small-modal"
      command="--hide"
    >
      Confirm
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="small-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>

  {/* Large modal for detailed content */}
  <s-modal id="large-modal" heading="Order details" size="large-100">
    <s-stack gap="base">
      <s-section>
        <s-heading>Order #1001</s-heading>
        <s-text>Placed on March 15, 2024</s-text>
      </s-section>

      <s-divider />

      <s-section>
        <s-heading>Items</s-heading>
        <s-stack gap="small">
          <s-text>Winter jacket - \$89.99</s-text>
          <s-text>Wool scarf - \$29.99</s-text>
          <s-text>Leather gloves - \$45.99</s-text>
        </s-stack>
      </s-section>

      <s-divider />

      <s-text type="strong">Total: \$165.97</s-text>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="large-modal"
      command="--hide"
    >
      Close
    </s-button>
  </s-modal>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Modal with no padding for full-width content. Click to view the modal.```jsx
<s-stack gap="base">
  <s-button commandFor="image-modal" command="--show">
    View product image
  </s-button>

  <s-modal id="image-modal" heading="Product image" padding="none">
    <s-box background="subdued" padding="base">
      <s-text>Image would display here with full width</s-text>
    </s-box>

    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="image-modal"
      command="--hide"
    >
      Close
    </s-button>
  </s-modal>
</s-stack>
```

```html
<s-stack gap="base">
  <s-button commandFor="image-modal" command="--show">
    View product image
  </s-button>

  <s-modal id="image-modal" heading="Product image" padding="none">
    <s-box background="subdued" padding="base">
      <s-text>Image would display here with full width</s-text>
    </s-box>

    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="image-modal"
      command="--hide"
    >
      Close
    </s-button>
  </s-modal>
</s-stack>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; min-height: 300px}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-stack gap="base">
  <s-button commandFor="image-modal" command="--show">
    View product image
  </s-button>

  <s-modal id="image-modal" heading="Product image" padding="none">
    <s-box background="subdued" padding="base">
      <s-text>Image would display here with full width</s-text>
    </s-box>

    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="image-modal"
      command="--hide"
    >
      Close
    </s-button>
  </s-modal>
</s-stack>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; min-height: 300px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-button commandFor="image-modal" command="--show">
    View product image
  </s-button>

  <s-modal id="image-modal" heading="Product image" padding="none">
    <s-box background="subdued" padding="base">
      <s-text>Image would display here with full width</s-text>
    </s-box>

    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="image-modal"
      command="--hide"
    >
      Close
    </s-button>
  </s-modal>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Examples

Displays content in an overlay. Use to create a distraction-free experience such as a confirmation dialog or a settings panel.


### Basic usage

Simple modal with heading and basic content for displaying information. Click the button to open the modal.```jsx
<>
  <s-button commandFor="info-modal" command="--show">
    Show product info
  </s-button>

  <s-modal id="info-modal" heading="Product information">
    <s-text>
      This product is currently out of stock and cannot be ordered.
    </s-text>

    <s-button slot="secondary-actions" commandFor="info-modal" command="--hide">
      Close
    </s-button>
  </s-modal>
</>
```

```html
<s-button commandFor="info-modal" command="--show">Show product info</s-button>

<s-modal id="info-modal" heading="Product information">
  <s-text>This product is currently out of stock and cannot be ordered.</s-text>

  <s-button slot="secondary-actions" commandFor="info-modal" command="--hide">
    Close
  </s-button>
</s-modal>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; min-height: 300px}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-button commandFor="info-modal" command="--show">Show product info</s-button>

<s-modal id="info-modal" heading="Product information">
  <s-text>This product is currently out of stock and cannot be ordered.</s-text>

  <s-button slot="secondary-actions" commandFor="info-modal" command="--hide">
    Close
  </s-button>
</s-modal>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; min-height: 300px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
  <s-button commandFor="info-modal" command="--show">
    Show product info
  </s-button>

  <s-modal id="info-modal" heading="Product information">
    <s-text>
      This product is currently out of stock and cannot be ordered.
    </s-text>

    <s-button slot="secondary-actions" commandFor="info-modal" command="--hide">
      Close
    </s-button>
  </s-modal>
</>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Modal with primary and secondary action buttons. Click the button to open the confirmation modal.```jsx
<s-stack gap="base">
  <s-button tone="critical" commandFor="delete-modal" command="--show">
    Delete product
  </s-button>

  <s-modal id="delete-modal" heading="Delete product?">
    <s-stack gap="base">
      <s-text>Are you sure you want to delete "Winter jacket"?</s-text>
      <s-text tone="caution">This action cannot be undone.</s-text>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      tone="critical"
      commandFor="delete-modal"
      command="--hide"
    >
      Delete product
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="delete-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>
</s-stack>
```

```html
<s-stack gap="base">
  <s-button tone="critical" commandFor="delete-modal" command="--show">
    Delete product
  </s-button>

  <s-modal id="delete-modal" heading="Delete product?">
    <s-stack gap="base">
      <s-text>Are you sure you want to delete "Winter jacket"?</s-text>
      <s-text tone="caution">This action cannot be undone.</s-text>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      tone="critical"
      commandFor="delete-modal"
      command="--hide"
    >
      Delete product
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="delete-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>
</s-stack>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; min-height: 300px}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-stack gap="base">
  <s-button tone="critical" commandFor="delete-modal" command="--show">
    Delete product
  </s-button>

  <s-modal id="delete-modal" heading="Delete product?">
    <s-stack gap="base">
      <s-text>Are you sure you want to delete "Winter jacket"?</s-text>
      <s-text tone="caution">This action cannot be undone.</s-text>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      tone="critical"
      commandFor="delete-modal"
      command="--hide"
    >
      Delete product
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="delete-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>
</s-stack>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; min-height: 300px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-button tone="critical" commandFor="delete-modal" command="--show">
    Delete product
  </s-button>

  <s-modal id="delete-modal" heading="Delete product?">
    <s-stack gap="base">
      <s-text>Are you sure you want to delete "Winter jacket"?</s-text>
      <s-text tone="caution">This action cannot be undone.</s-text>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      tone="critical"
      commandFor="delete-modal"
      command="--hide"
    >
      Delete product
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="delete-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Modal containing form fields demonstrating how to structure input fields within a modal. Click the button to open the modal.```jsx
<s-stack gap="base">
  <s-button variant="primary" commandFor="edit-modal" command="--show">
    Edit customer
  </s-button>

  <s-modal id="edit-modal" heading="Edit customer information" size="large">
    <s-stack gap="base">
      <s-text-field
        label="Customer name"
        name="name"
        value="Sarah Johnson"
       />

      <s-email-field
        label="Email address"
        name="email"
        value="sarah@example.com"
       />

      <s-text-field
        label="Phone number"
        name="phone"
        value="+1 555-0123"
       />

      <s-select label="Customer group" name="group">
        <s-option value="retail">Retail</s-option>
        <s-option value="wholesale" selected>
          Wholesale
        </s-option>
        <s-option value="vip">VIP</s-option>
      </s-select>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="edit-modal"
      command="--hide"
    >
      Save changes
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="edit-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>
</s-stack>
```

```html
<s-stack gap="base">
  <s-button variant="primary" commandFor="edit-modal" command="--show">
    Edit customer
  </s-button>

  <s-modal id="edit-modal" heading="Edit customer information" size="large">
    <s-stack gap="base">
      <s-text-field
        label="Customer name"
        name="name"
        value="Sarah Johnson"
      ></s-text-field>

      <s-email-field
        label="Email address"
        name="email"
        value="sarah@example.com"
      ></s-email-field>

      <s-text-field
        label="Phone number"
        name="phone"
        value="+1 555-0123"
      ></s-text-field>

      <s-select label="Customer group" name="group">
        <s-option value="retail">Retail</s-option>
        <s-option value="wholesale" selected>Wholesale</s-option>
        <s-option value="vip">VIP</s-option>
      </s-select>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="edit-modal"
      command="--hide"
    >
      Save changes
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="edit-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>
</s-stack>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; min-height: 300px}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-stack gap="base">
  <s-button variant="primary" commandFor="edit-modal" command="--show">
    Edit customer
  </s-button>

  <s-modal id="edit-modal" heading="Edit customer information" size="large">
    <s-stack gap="base">
      <s-text-field
        label="Customer name"
        name="name"
        value="Sarah Johnson"
      ></s-text-field>

      <s-email-field
        label="Email address"
        name="email"
        value="sarah@example.com"
      ></s-email-field>

      <s-text-field
        label="Phone number"
        name="phone"
        value="+1 555-0123"
      ></s-text-field>

      <s-select label="Customer group" name="group">
        <s-option value="retail">Retail</s-option>
        <s-option value="wholesale" selected>Wholesale</s-option>
        <s-option value="vip">VIP</s-option>
      </s-select>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="edit-modal"
      command="--hide"
    >
      Save changes
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="edit-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>
</s-stack>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; min-height: 300px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-button variant="primary" commandFor="edit-modal" command="--show">
    Edit customer
  </s-button>

  <s-modal id="edit-modal" heading="Edit customer information" size="large">
    <s-stack gap="base">
      <s-text-field
        label="Customer name"
        name="name"
        value="Sarah Johnson"
       />

      <s-email-field
        label="Email address"
        name="email"
        value="sarah@example.com"
       />

      <s-text-field
        label="Phone number"
        name="phone"
        value="+1 555-0123"
       />

      <s-select label="Customer group" name="group">
        <s-option value="retail">Retail</s-option>
        <s-option value="wholesale" selected>
          Wholesale
        </s-option>
        <s-option value="vip">VIP</s-option>
      </s-select>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="edit-modal"
      command="--hide"
    >
      Save changes
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="edit-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates various modal sizes for different content requirements. Click each button to see different modal sizes.```jsx
<s-stack gap="base">
  <s-stack direction="inline" gap="base">
    <s-button commandFor="small-modal" command="--show">
      Small modal
    </s-button>
    <s-button commandFor="large-modal" command="--show">
      Large modal
    </s-button>
  </s-stack>

  {/* Small modal for quick confirmations */}
  <s-modal id="small-modal" heading="Confirm action" size="small-100">
    <s-text>Are you sure you want to proceed?</s-text>
    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="small-modal"
      command="--hide"
    >
      Confirm
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="small-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>

  {/* Large modal for detailed content */}
  <s-modal id="large-modal" heading="Order details" size="large-100">
    <s-stack gap="base">
      <s-section>
        <s-heading>Order #1001</s-heading>
        <s-text>Placed on March 15, 2024</s-text>
      </s-section>

      <s-divider />

      <s-section>
        <s-heading>Items</s-heading>
        <s-stack gap="small">
          <s-text>Winter jacket - $89.99</s-text>
          <s-text>Wool scarf - $29.99</s-text>
          <s-text>Leather gloves - $45.99</s-text>
        </s-stack>
      </s-section>

      <s-divider />

      <s-text type="strong">Total: $165.97</s-text>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="large-modal"
      command="--hide"
    >
      Close
    </s-button>
  </s-modal>
</s-stack>
```

```html
<s-stack gap="base">
  <s-stack direction="inline" gap="base">
    <s-button commandFor="small-modal" command="--show">Small modal</s-button>
    <s-button commandFor="large-modal" command="--show">Large modal</s-button>
  </s-stack>

  <!-- Small modal for quick confirmations -->
  <s-modal id="small-modal" heading="Confirm action" size="small-100">
    <s-text>Are you sure you want to proceed?</s-text>
    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="small-modal"
      command="--hide"
    >
      Confirm
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="small-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>

  <!-- Large modal for detailed content -->
  <s-modal id="large-modal" heading="Order details" size="large-100">
    <s-stack gap="base">
      <s-section>
        <s-heading>Order #1001</s-heading>
        <s-text>Placed on March 15, 2024</s-text>
      </s-section>

      <s-divider></s-divider>

      <s-section>
        <s-heading>Items</s-heading>
        <s-stack gap="small">
          <s-text>Winter jacket - $89.99</s-text>
          <s-text>Wool scarf - $29.99</s-text>
          <s-text>Leather gloves - $45.99</s-text>
        </s-stack>
      </s-section>

      <s-divider></s-divider>

      <s-text type="strong">Total: $165.97</s-text>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="large-modal"
      command="--hide"
    >
      Close
    </s-button>
  </s-modal>
</s-stack>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; min-height: 300px}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-stack gap="base">
  <s-stack direction="inline" gap="base">
    <s-button commandFor="small-modal" command="--show">Small modal</s-button>
    <s-button commandFor="large-modal" command="--show">Large modal</s-button>
  </s-stack>

  <!-- Small modal for quick confirmations -->
  <s-modal id="small-modal" heading="Confirm action" size="small-100">
    <s-text>Are you sure you want to proceed?</s-text>
    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="small-modal"
      command="--hide"
    >
      Confirm
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="small-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>

  <!-- Large modal for detailed content -->
  <s-modal id="large-modal" heading="Order details" size="large-100">
    <s-stack gap="base">
      <s-section>
        <s-heading>Order #1001</s-heading>
        <s-text>Placed on March 15, 2024</s-text>
      </s-section>

      <s-divider></s-divider>

      <s-section>
        <s-heading>Items</s-heading>
        <s-stack gap="small">
          <s-text>Winter jacket - $89.99</s-text>
          <s-text>Wool scarf - $29.99</s-text>
          <s-text>Leather gloves - $45.99</s-text>
        </s-stack>
      </s-section>

      <s-divider></s-divider>

      <s-text type="strong">Total: $165.97</s-text>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="large-modal"
      command="--hide"
    >
      Close
    </s-button>
  </s-modal>
</s-stack>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; min-height: 300px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-stack direction="inline" gap="base">
    <s-button commandFor="small-modal" command="--show">
      Small modal
    </s-button>
    <s-button commandFor="large-modal" command="--show">
      Large modal
    </s-button>
  </s-stack>

  {/* Small modal for quick confirmations */}
  <s-modal id="small-modal" heading="Confirm action" size="small-100">
    <s-text>Are you sure you want to proceed?</s-text>
    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="small-modal"
      command="--hide"
    >
      Confirm
    </s-button>
    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="small-modal"
      command="--hide"
    >
      Cancel
    </s-button>
  </s-modal>

  {/* Large modal for detailed content */}
  <s-modal id="large-modal" heading="Order details" size="large-100">
    <s-stack gap="base">
      <s-section>
        <s-heading>Order #1001</s-heading>
        <s-text>Placed on March 15, 2024</s-text>
      </s-section>

      <s-divider />

      <s-section>
        <s-heading>Items</s-heading>
        <s-stack gap="small">
          <s-text>Winter jacket - \$89.99</s-text>
          <s-text>Wool scarf - \$29.99</s-text>
          <s-text>Leather gloves - \$45.99</s-text>
        </s-stack>
      </s-section>

      <s-divider />

      <s-text type="strong">Total: \$165.97</s-text>
    </s-stack>

    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="large-modal"
      command="--hide"
    >
      Close
    </s-button>
  </s-modal>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Modal with no padding for full-width content. Click to view the modal.```jsx
<s-stack gap="base">
  <s-button commandFor="image-modal" command="--show">
    View product image
  </s-button>

  <s-modal id="image-modal" heading="Product image" padding="none">
    <s-box background="subdued" padding="base">
      <s-text>Image would display here with full width</s-text>
    </s-box>

    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="image-modal"
      command="--hide"
    >
      Close
    </s-button>
  </s-modal>
</s-stack>
```

```html
<s-stack gap="base">
  <s-button commandFor="image-modal" command="--show">
    View product image
  </s-button>

  <s-modal id="image-modal" heading="Product image" padding="none">
    <s-box background="subdued" padding="base">
      <s-text>Image would display here with full width</s-text>
    </s-box>

    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="image-modal"
      command="--hide"
    >
      Close
    </s-button>
  </s-modal>
</s-stack>

```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; min-height: 300px}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><s-box padding="base" id="wrapper-element"><s-stack gap="base">
  <s-button commandFor="image-modal" command="--show">
    View product image
  </s-button>

  <s-modal id="image-modal" heading="Product image" padding="none">
    <s-box background="subdued" padding="base">
      <s-text>Image would display here with full width</s-text>
    </s-box>

    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="image-modal"
      command="--hide"
    >
      Close
    </s-button>
  </s-modal>
</s-stack>
</s-box></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; min-height: 300px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-button commandFor="image-modal" command="--show">
    View product image
  </s-button>

  <s-modal id="image-modal" heading="Product image" padding="none">
    <s-box background="subdued" padding="base">
      <s-text>Image would display here with full width</s-text>
    </s-box>

    <s-button
      slot="secondary-actions"
      variant="secondary"
      commandFor="image-modal"
      command="--hide"
    >
      Close
    </s-button>
  </s-modal>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

