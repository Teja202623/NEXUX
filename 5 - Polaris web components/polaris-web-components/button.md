# Button

Triggers actions or events, such as submitting forms, opening dialogs, or navigating to other pages. Use Button to let users perform specific tasks or initiate interactions throughout the interface. Buttons can also function as links, guiding users to internal or external destinations.

```jsx
<>
  <s-button variant="primary">Add Product</s-button>
  <s-button variant="secondary">Save Theme</s-button>
</>
```

```html
<s-button variant="primary">Add Product</s-button>
<s-button variant="secondary">Save Theme</s-button>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: flex; justify-content: center; align-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
  <s-button variant="primary">Add Product</s-button>
  <s-button variant="secondary">Save Theme</s-button>
</>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Properties

### Button

### accessibilityLabel

value: `string`

A label that describes the purpose or contents of the Button. It will be read to users using assistive technologies such as screen readers.

Use this when using only an icon or the Button text is not enough context for users using assistive technologies.

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

Disables the Button meaning it cannot be clicked or receive focus.

### disconnectedCallback

value: `() => void`


### download

value: `string`

Causes the browser to treat the linked URL as a download with the string being the file name. Download only works for same-origin URLs or the `blob:` and `data:` schemes.

### href

value: `string`

The URL to link to.

- If set, it will navigate to the location specified by `href` after executing the `click` event.
- If a `commandFor` is set, the `command` will be executed instead of the navigation.

### icon

value: `"" | "replace" | "search" | "split" | "link" | "edit" | "product" | "variant" | "collection" | "select" | "info" | "incomplete" | "complete" | "color" | "money" | "adjust" | "affiliate" | "airplane" | "alert-bubble" | "alert-circle" | "alert-diamond" | "alert-location" | "alert-octagon" | "alert-octagon-filled" | "alert-triangle" | "alert-triangle-filled" | "app-extension" | "apps" | "archive" | "arrow-down" | "arrow-down-circle" | "arrow-down-right" | "arrow-left" | "arrow-left-circle" | "arrow-right" | "arrow-right-circle" | "arrow-up" | "arrow-up-circle" | "arrow-up-right" | "arrows-in-horizontal" | "arrows-out-horizontal" | "asterisk" | "attachment" | "automation" | "backspace" | "bag" | "bank" | "barcode" | "battery-low" | "bill" | "blank" | "blog" | "bolt" | "bolt-filled" | "book" | "book-open" | "bug" | "bullet" | "business-entity" | "button" | "button-press" | "calculator" | "calendar" | "calendar-check" | "calendar-compare" | "calendar-list" | "calendar-time" | "camera" | "camera-flip" | "caret-down" | "caret-left" | "caret-right" | "caret-up" | "cart" | "cart-abandoned" | "cart-discount" | "cart-down" | "cart-filled" | "cart-sale" | "cart-send" | "cart-up" | "cash-dollar" | "cash-euro" | "cash-pound" | "cash-rupee" | "cash-yen" | "catalog-product" | "categories" | "channels" | "chart-cohort" | "chart-donut" | "chart-funnel" | "chart-histogram-first" | "chart-histogram-first-last" | "chart-histogram-flat" | "chart-histogram-full" | "chart-histogram-growth" | "chart-histogram-last" | "chart-histogram-second-last" | "chart-horizontal" | "chart-line" | "chart-popular" | "chart-stacked" | "chart-vertical" | "chat" | "chat-new" | "chat-referral" | "check" | "check-circle" | "check-circle-filled" | "checkbox" | "chevron-down" | "chevron-down-circle" | "chevron-left" | "chevron-left-circle" | "chevron-right" | "chevron-right-circle" | "chevron-up" | "chevron-up-circle" | "circle" | "circle-dashed" | "clipboard" | "clipboard-check" | "clipboard-checklist" | "clock" | "clock-list" | "clock-revert" | "code" | "code-add" | "collection-featured" | "collection-list" | "collection-reference" | "color-none" | "compass" | "compose" | "confetti" | "connect" | "content" | "contract" | "corner-pill" | "corner-round" | "corner-square" | "credit-card" | "credit-card-cancel" | "credit-card-percent" | "credit-card-reader" | "credit-card-reader-chip" | "credit-card-reader-tap" | "credit-card-secure" | "credit-card-tap-chip" | "crop" | "currency-convert" | "cursor" | "cursor-banner" | "cursor-option" | "data-presentation" | "data-table" | "database" | "database-add" | "database-connect" | "delete" | "delivered" | "delivery" | "desktop" | "disabled" | "disabled-filled" | "discount" | "discount-add" | "discount-automatic" | "discount-code" | "discount-remove" | "dns-settings" | "dock-floating" | "dock-side" | "domain" | "domain-landing-page" | "domain-new" | "domain-redirect" | "download" | "drag-drop" | "drag-handle" | "drawer" | "duplicate" | "email" | "email-follow-up" | "email-newsletter" | "empty" | "enabled" | "enter" | "envelope" | "envelope-soft-pack" | "eraser" | "exchange" | "exit" | "export" | "external" | "eye-check-mark" | "eye-dropper" | "eye-dropper-list" | "eye-first" | "eyeglasses" | "fav" | "favicon" | "file" | "file-list" | "filter" | "filter-active" | "flag" | "flip-horizontal" | "flip-vertical" | "flower" | "folder" | "folder-add" | "folder-down" | "folder-remove" | "folder-up" | "food" | "foreground" | "forklift" | "forms" | "games" | "gauge" | "geolocation" | "gift" | "gift-card" | "git-branch" | "git-commit" | "git-repository" | "globe" | "globe-asia" | "globe-europe" | "globe-lines" | "globe-list" | "graduation-hat" | "grid" | "hashtag" | "hashtag-decimal" | "hashtag-list" | "heart" | "hide" | "hide-filled" | "home" | "home-filled" | "icons" | "identity-card" | "image" | "image-add" | "image-alt" | "image-explore" | "image-magic" | "image-none" | "image-with-text-overlay" | "images" | "import" | "in-progress" | "incentive" | "incoming" | "info-filled" | "inheritance" | "inventory" | "inventory-edit" | "inventory-list" | "inventory-transfer" | "inventory-updated" | "iq" | "key" | "keyboard" | "keyboard-filled" | "keyboard-hide" | "keypad" | "label-printer" | "language" | "language-translate" | "layout-block" | "layout-buy-button" | "layout-buy-button-horizontal" | "layout-buy-button-vertical" | "layout-column-1" | "layout-columns-2" | "layout-columns-3" | "layout-footer" | "layout-header" | "layout-logo-block" | "layout-popup" | "layout-rows-2" | "layout-section" | "layout-sidebar-left" | "layout-sidebar-right" | "lightbulb" | "link-list" | "list-bulleted" | "list-bulleted-filled" | "list-numbered" | "live" | "live-critical" | "live-none" | "location" | "location-none" | "lock" | "map" | "markets" | "markets-euro" | "markets-rupee" | "markets-yen" | "maximize" | "measurement-size" | "measurement-size-list" | "measurement-volume" | "measurement-volume-list" | "measurement-weight" | "measurement-weight-list" | "media-receiver" | "megaphone" | "mention" | "menu" | "menu-filled" | "menu-horizontal" | "menu-vertical" | "merge" | "metafields" | "metaobject" | "metaobject-list" | "metaobject-reference" | "microphone" | "microphone-muted" | "minimize" | "minus" | "minus-circle" | "mobile" | "money-none" | "money-split" | "moon" | "nature" | "note" | "note-add" | "notification" | "number-one" | "order" | "order-batches" | "order-draft" | "order-filled" | "order-first" | "order-fulfilled" | "order-repeat" | "order-unfulfilled" | "orders-status" | "organization" | "outdent" | "outgoing" | "package" | "package-cancel" | "package-fulfilled" | "package-on-hold" | "package-reassign" | "package-returned" | "page" | "page-add" | "page-attachment" | "page-clock" | "page-down" | "page-heart" | "page-list" | "page-reference" | "page-remove" | "page-report" | "page-up" | "pagination-end" | "pagination-start" | "paint-brush-flat" | "paint-brush-round" | "paper-check" | "partially-complete" | "passkey" | "paste" | "pause-circle" | "payment" | "payment-capture" | "payout" | "payout-dollar" | "payout-euro" | "payout-pound" | "payout-rupee" | "payout-yen" | "person" | "person-add" | "person-exit" | "person-filled" | "person-list" | "person-lock" | "person-remove" | "person-segment" | "personalized-text" | "phablet" | "phone" | "phone-down" | "phone-down-filled" | "phone-in" | "phone-out" | "pin" | "pin-remove" | "plan" | "play" | "play-circle" | "plus" | "plus-circle" | "plus-circle-down" | "plus-circle-filled" | "plus-circle-up" | "point-of-sale" | "point-of-sale-register" | "price-list" | "print" | "product-add" | "product-cost" | "product-filled" | "product-list" | "product-reference" | "product-remove" | "product-return" | "product-unavailable" | "profile" | "profile-filled" | "question-circle" | "question-circle-filled" | "radio-control" | "receipt" | "receipt-dollar" | "receipt-euro" | "receipt-folded" | "receipt-paid" | "receipt-pound" | "receipt-refund" | "receipt-rupee" | "receipt-yen" | "receivables" | "redo" | "referral-code" | "refresh" | "remove-background" | "reorder" | "replay" | "reset" | "return" | "reward" | "rocket" | "rotate-left" | "rotate-right" | "sandbox" | "save" | "savings" | "scan-qr-code" | "search-add" | "search-list" | "search-recent" | "search-resource" | "send" | "settings" | "share" | "shield-check-mark" | "shield-none" | "shield-pending" | "shield-person" | "shipping-label" | "shipping-label-cancel" | "shopcodes" | "slideshow" | "smiley-happy" | "smiley-joy" | "smiley-neutral" | "smiley-sad" | "social-ad" | "social-post" | "sort" | "sort-ascending" | "sort-descending" | "sound" | "sports" | "star" | "star-circle" | "star-filled" | "star-half" | "star-list" | "status" | "status-active" | "stop-circle" | "store" | "store-import" | "store-managed" | "store-online" | "sun" | "table" | "table-masonry" | "tablet" | "target" | "tax" | "team" | "text" | "text-align-center" | "text-align-left" | "text-align-right" | "text-block" | "text-bold" | "text-color" | "text-font" | "text-font-list" | "text-grammar" | "text-in-columns" | "text-in-rows" | "text-indent" | "text-indent-remove" | "text-italic" | "text-quote" | "text-title" | "text-underline" | "text-with-image" | "theme" | "theme-edit" | "theme-store" | "theme-template" | "three-d-environment" | "thumbs-down" | "thumbs-up" | "tip-jar" | "toggle-off" | "toggle-on" | "transaction" | "transaction-fee-add" | "transaction-fee-dollar" | "transaction-fee-euro" | "transaction-fee-pound" | "transaction-fee-rupee" | "transaction-fee-yen" | "transfer" | "transfer-in" | "transfer-internal" | "transfer-out" | "truck" | "undo" | "unknown-device" | "unlock" | "upload" | "variant-list" | "video" | "video-list" | "view" | "viewport-narrow" | "viewport-short" | "viewport-tall" | "viewport-wide" | "wallet" | "wand" | "watch" | "wifi" | "work" | "work-list" | "wrench" | "x" | "x-circle" | "x-circle-filled"`

The type of icon to be displayed in the Button.

### interestFor

value: `string`

Sets the element the [interestFor](https://open-ui.org/components/interest-invokers.explainer/#the-pitch-in-code) should act on when this clickable is activated.

### loading

value: `boolean`

Replaces content with a loading indicator while a background action is being performed.

This also disables the Button.

### queueRender

value: `() => void`

Queue a run of the render function. You shouldn't need to call this manually - it should be handled by changes to

### setAttribute

value: `(name: string, value: string) => void`


### target

value: `"auto" | AnyString | "_blank" | "_self" | "_parent" | "_top"`

  - AnyString: string & {}
Specifies where to display the linked URL.

### tone

value: `"critical" | "auto" | "neutral"`

Sets the tone of the Button based on the intention of the information being conveyed.

### type

value: `"button" | "reset" | "submit"`

The behavior of the Button.

- `submit`: Used to indicate the component acts as a submit button, meaning it submits the closest form.
- `button`: Used to indicate the component acts as a button, meaning it has no default action.
- `reset`: Used to indicate the component acts as a reset button, meaning it resets the closest form (returning fields to their default values).

This property is ignored if the component supports `href` or `commandFor`/`command` and one of them is set.

### variant

value: `"auto" | "primary" | "secondary" | "tertiary"`

Changes the visual appearance of the Button.

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

Triggers actions or events, such as submitting forms, opening dialogs, or navigating to other pages. Use Button to let users perform specific tasks or initiate interactions throughout the interface. Buttons can also function as links, guiding users to internal or external destinations.


### Basic usage

Demonstrates a simple button with default styling, automatically determining its visual variant and using a clear, action-oriented label.```jsx
<s-button>Save</s-button>
```

```html
<s-button>Save</s-button>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-button>Save</s-button>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Showcases different button variants with varying visual emphasis, helping merchants understand action priorities through distinct styling.```jsx
<s-stack direction="inline" gap="base">
  <s-button variant="primary">Primary</s-button>
  <s-button variant="secondary">Secondary</s-button>
  <s-button variant="tertiary">Tertiary</s-button>
  <s-button variant="auto">Auto</s-button>
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-button variant="primary">Primary</s-button>
  <s-button variant="secondary">Secondary</s-button>
  <s-button variant="tertiary">Tertiary</s-button>
  <s-button variant="auto">Auto</s-button>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-button variant="primary">Primary</s-button>
  <s-button variant="secondary">Secondary</s-button>
  <s-button variant="tertiary">Tertiary</s-button>
  <s-button variant="auto">Auto</s-button>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates button tones that signal the semantic importance and potential impact of different actions through color and styling.```jsx
<s-stack direction="inline" gap="base">
  <s-button tone="critical">Delete</s-button>
  <s-button tone="neutral">Save draft</s-button>
  <s-button>Continue</s-button>
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-button tone="critical">Delete</s-button>
  <s-button tone="neutral">Save draft</s-button>
  <s-button>Continue</s-button>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-button tone="critical">Delete</s-button>
  <s-button tone="neutral">Save draft</s-button>
  <s-button>Continue</s-button>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Showcases a button that combines a descriptive text label with an intuitive icon, enhancing visual communication of the action.```jsx
<s-button icon="plus">Add product</s-button>
```

```html
<s-button icon="plus">Add product</s-button>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-button icon="plus">Add product</s-button>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates an icon-only button with an accessibility label, providing a compact interface that remains screen reader friendly.```jsx
<s-button icon="plus" accessibilityLabel="Add product" />
```

```html
<s-button icon="plus" accessibilityLabel="Add product"></s-button>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-button icon="plus" accessibilityLabel="Add product" />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates buttons in various loading states, providing visual feedback during asynchronous operations.```jsx
<s-stack direction="inline" gap="base">
  <s-button loading variant="primary">
    Saving product...
  </s-button>
  <s-button loading variant="secondary">
    Updating 247 variants...
  </s-button>
  <s-button loading tone="neutral">
    Processing shipment...
  </s-button>
</s-stack>
```

```html
<!-- Product save operation -->
<s-button loading variant="primary">Saving product...</s-button>

<!-- Bulk inventory update -->
<s-button loading variant="secondary">Updating 247 variants...</s-button>

<!-- Order fulfillment -->
<s-button loading tone="neutral">Processing shipment...</s-button>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-button loading variant="primary">
    Saving product...
  </s-button>
  <s-button loading variant="secondary">
    Updating 247 variants...
  </s-button>
  <s-button loading tone="neutral">
    Processing shipment...
  </s-button>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates buttons in different interaction states, showing how to represent disabled controls and submit actions within forms.```jsx
<s-stack direction="inline" gap="base">
  <s-button disabled>Save draft</s-button>
  <s-button type="submit" variant="primary">
    Save product
  </s-button>
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-button disabled>Save draft</s-button>
  <s-button type="submit" variant="primary">Save product</s-button>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-button disabled>Save draft</s-button>
  <s-button type="submit" variant="primary">
    Save product
  </s-button>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Showcases buttons that act as hyperlinks, supporting navigation to different pages, external resources, and file downloads.```jsx
<s-stack direction="inline" gap="base">
  <s-button href="javascript:void(0)">View products</s-button>
  <s-button href="javascript:void(0)" target="_blank">
    Help docs
  </s-button>
  <s-button href="javascript:void(0)" download="sales-report.csv">
    Export data
  </s-button>
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-button href="javascript:void(0)">View products</s-button>
  <s-button href="javascript:void(0)" target="_blank">Help docs</s-button>
  <s-button href="javascript:void(0)" download="sales-report.csv">
    Export data
  </s-button>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-button href="javascript:void(0)">View products</s-button>
  <s-button href="javascript:void(0)" target="_blank">
    Help docs
  </s-button>
  <s-button href="javascript:void(0)" download="sales-report.csv">
    Export data
  </s-button>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates a button group with carefully aligned actions, showing how to create a clear visual hierarchy for form submission and cancellation.```jsx
<s-stack direction="inline" gap="base" justifyContent="end">
  <s-button variant="secondary">Cancel</s-button>
  <s-button variant="primary" type="submit">
    Save product
  </s-button>
</s-stack>
```

```html
<s-stack direction="inline" gap="base" justifyContent="end">
  <s-button variant="secondary">Cancel</s-button>
  <s-button variant="primary" type="submit">Save product</s-button>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base" justifyContent="end">
  <s-button variant="secondary">Cancel</s-button>
  <s-button variant="primary" type="submit">
    Save product
  </s-button>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates a button pair for destructive actions, using a critical tone to emphasize the potentially irreversible nature of the operation.```jsx
<s-stack direction="inline" gap="base">
  <s-button variant="secondary">Cancel</s-button>
  <s-button variant="primary" tone="critical">
    Delete variant
  </s-button>
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-button variant="secondary">Cancel</s-button>
  <s-button variant="primary" tone="critical">Delete variant</s-button>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-button variant="secondary">Cancel</s-button>
  <s-button variant="primary" tone="critical">
    Delete variant
  </s-button>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Showcases a navigation button with an icon, enabling quick access to different sections of the interface.```jsx
<s-button href="javascript:void(0)" icon="order">
  View orders
</s-button>
```

```html
<!-- Button that navigates using Shopify's navigation system. Use shopify:navigate for navigation. Refer to [handling navigation events](https://shopify.dev/docs/api/app-home?accordionItem=getting-started-existing-remix-application) for implementation details and framework-specific examples. -->
<s-button href="javascript:void(0)" icon="order">View orders</s-button>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-button href="javascript:void(0)" icon="order">
  View orders
</s-button>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates a button group for executing operations on multiple selected items.```jsx
<s-stack direction="inline" gap="base">
  <s-button variant="secondary">Export selected</s-button>
  <s-button variant="primary" tone="critical">
    Delete selected
  </s-button>
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-button variant="secondary">Export selected</s-button>
  <s-button variant="primary" tone="critical">Delete selected</s-button>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-button variant="secondary">Export selected</s-button>
  <s-button variant="primary" tone="critical">
    Delete selected
  </s-button>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Showcases a set of compact, icon-only buttons with accessibility labels, perfect for creating dense interfaces.```jsx
<s-stack direction="inline" gap="base">
  <s-button
    icon="duplicate"
    variant="tertiary"
    accessibilityLabel="Duplicate product"
   />
  <s-button
    icon="view"
    variant="tertiary"
    accessibilityLabel="Preview product"
   />
  <s-button
    icon="menu-horizontal"
    variant="tertiary"
    accessibilityLabel="More actions"
   />
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-button
    icon="duplicate"
    variant="tertiary"
    accessibilityLabel="Duplicate product"
  ></s-button>
  <s-button
    icon="view"
    variant="tertiary"
    accessibilityLabel="Preview product"
  ></s-button>
  <s-button
    icon="menu-horizontal"
    variant="tertiary"
    accessibilityLabel="More actions"
  ></s-button>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-button
    icon="duplicate"
    variant="tertiary"
    accessibilityLabel="Duplicate product"
   />
  <s-button
    icon="view"
    variant="tertiary"
    accessibilityLabel="Preview product"
   />
  <s-button
    icon="menu-horizontal"
    variant="tertiary"
    accessibilityLabel="More actions"
   />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates advanced button capabilities using `command`, `commandFor`, and `interestFor` properties to enable dynamic component communication.```jsx
<s-stack direction="inline" gap="base">
  {/* Button that navigates using Shopify's navigation system. Use shopify:navigate for navigation. Refer to [handling navigation events](https://shopify.dev/docs/api/app-home?accordionItem=getting-started-existing-remix-application) for implementation details and framework-specific examples. */}
  <s-button href="javascript:void(0)">Edit details</s-button>

  {/* Button that expresses interest in specific data */}
  <s-button interestFor="selected-products">Bulk edit</s-button>
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <!-- Button that navigates using Shopify's navigation system. Use shopify:navigate for navigation. Refer to [handling navigation events](https://shopify.dev/docs/api/app-home?accordionItem=getting-started-existing-remix-application) for implementation details and framework-specific examples. -->
  <s-button href="javascript:void(0)">Edit details</s-button>

  <!-- Button that expresses interest in specific data -->
  <s-button interestFor="selected-products">Bulk edit</s-button>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  {/* Button that navigates using Shopify's navigation system. Use shopify:navigate for navigation. Refer to [handling navigation events](https://shopify.dev/docs/api/app-home?accordionItem=getting-started-existing-remix-application) for implementation details and framework-specific examples. */}
  <s-button href="javascript:void(0)">Edit details</s-button>

  {/* Button that expresses interest in specific data */}
  <s-button interestFor="selected-products">Bulk edit</s-button>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Events

Learn more about [registering events](https://shopify.dev/docs/api/app-home/using-polaris-components#event-handling).

### ButtonEvents

### blur

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

### focus

value: `CallbackEventListener<typeof tagName> | null`

  - CallbackEventListener: (EventListener & {
      (event: CallbackEvent<T>): void;
    }) | null
  - CallbackEvent: Event & {
  currentTarget: HTMLElementTagNameMap[T];
}

## Examples

Triggers actions or events, such as submitting forms, opening dialogs, or navigating to other pages. Use Button to let users perform specific tasks or initiate interactions throughout the interface. Buttons can also function as links, guiding users to internal or external destinations.


### Basic usage

Demonstrates a simple button with default styling, automatically determining its visual variant and using a clear, action-oriented label.```jsx
<s-button>Save</s-button>
```

```html
<s-button>Save</s-button>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-button>Save</s-button>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Showcases different button variants with varying visual emphasis, helping merchants understand action priorities through distinct styling.```jsx
<s-stack direction="inline" gap="base">
  <s-button variant="primary">Primary</s-button>
  <s-button variant="secondary">Secondary</s-button>
  <s-button variant="tertiary">Tertiary</s-button>
  <s-button variant="auto">Auto</s-button>
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-button variant="primary">Primary</s-button>
  <s-button variant="secondary">Secondary</s-button>
  <s-button variant="tertiary">Tertiary</s-button>
  <s-button variant="auto">Auto</s-button>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-button variant="primary">Primary</s-button>
  <s-button variant="secondary">Secondary</s-button>
  <s-button variant="tertiary">Tertiary</s-button>
  <s-button variant="auto">Auto</s-button>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates button tones that signal the semantic importance and potential impact of different actions through color and styling.```jsx
<s-stack direction="inline" gap="base">
  <s-button tone="critical">Delete</s-button>
  <s-button tone="neutral">Save draft</s-button>
  <s-button>Continue</s-button>
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-button tone="critical">Delete</s-button>
  <s-button tone="neutral">Save draft</s-button>
  <s-button>Continue</s-button>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-button tone="critical">Delete</s-button>
  <s-button tone="neutral">Save draft</s-button>
  <s-button>Continue</s-button>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Showcases a button that combines a descriptive text label with an intuitive icon, enhancing visual communication of the action.```jsx
<s-button icon="plus">Add product</s-button>
```

```html
<s-button icon="plus">Add product</s-button>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-button icon="plus">Add product</s-button>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates an icon-only button with an accessibility label, providing a compact interface that remains screen reader friendly.```jsx
<s-button icon="plus" accessibilityLabel="Add product" />
```

```html
<s-button icon="plus" accessibilityLabel="Add product"></s-button>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-button icon="plus" accessibilityLabel="Add product" />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates buttons in various loading states, providing visual feedback during asynchronous operations.```jsx
<s-stack direction="inline" gap="base">
  <s-button loading variant="primary">
    Saving product...
  </s-button>
  <s-button loading variant="secondary">
    Updating 247 variants...
  </s-button>
  <s-button loading tone="neutral">
    Processing shipment...
  </s-button>
</s-stack>
```

```html
<!-- Product save operation -->
<s-button loading variant="primary">Saving product...</s-button>

<!-- Bulk inventory update -->
<s-button loading variant="secondary">Updating 247 variants...</s-button>

<!-- Order fulfillment -->
<s-button loading tone="neutral">Processing shipment...</s-button>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-button loading variant="primary">
    Saving product...
  </s-button>
  <s-button loading variant="secondary">
    Updating 247 variants...
  </s-button>
  <s-button loading tone="neutral">
    Processing shipment...
  </s-button>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates buttons in different interaction states, showing how to represent disabled controls and submit actions within forms.```jsx
<s-stack direction="inline" gap="base">
  <s-button disabled>Save draft</s-button>
  <s-button type="submit" variant="primary">
    Save product
  </s-button>
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-button disabled>Save draft</s-button>
  <s-button type="submit" variant="primary">Save product</s-button>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-button disabled>Save draft</s-button>
  <s-button type="submit" variant="primary">
    Save product
  </s-button>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Showcases buttons that act as hyperlinks, supporting navigation to different pages, external resources, and file downloads.```jsx
<s-stack direction="inline" gap="base">
  <s-button href="javascript:void(0)">View products</s-button>
  <s-button href="javascript:void(0)" target="_blank">
    Help docs
  </s-button>
  <s-button href="javascript:void(0)" download="sales-report.csv">
    Export data
  </s-button>
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-button href="javascript:void(0)">View products</s-button>
  <s-button href="javascript:void(0)" target="_blank">Help docs</s-button>
  <s-button href="javascript:void(0)" download="sales-report.csv">
    Export data
  </s-button>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-button href="javascript:void(0)">View products</s-button>
  <s-button href="javascript:void(0)" target="_blank">
    Help docs
  </s-button>
  <s-button href="javascript:void(0)" download="sales-report.csv">
    Export data
  </s-button>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates a button group with carefully aligned actions, showing how to create a clear visual hierarchy for form submission and cancellation.```jsx
<s-stack direction="inline" gap="base" justifyContent="end">
  <s-button variant="secondary">Cancel</s-button>
  <s-button variant="primary" type="submit">
    Save product
  </s-button>
</s-stack>
```

```html
<s-stack direction="inline" gap="base" justifyContent="end">
  <s-button variant="secondary">Cancel</s-button>
  <s-button variant="primary" type="submit">Save product</s-button>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base" justifyContent="end">
  <s-button variant="secondary">Cancel</s-button>
  <s-button variant="primary" type="submit">
    Save product
  </s-button>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates a button pair for destructive actions, using a critical tone to emphasize the potentially irreversible nature of the operation.```jsx
<s-stack direction="inline" gap="base">
  <s-button variant="secondary">Cancel</s-button>
  <s-button variant="primary" tone="critical">
    Delete variant
  </s-button>
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-button variant="secondary">Cancel</s-button>
  <s-button variant="primary" tone="critical">Delete variant</s-button>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-button variant="secondary">Cancel</s-button>
  <s-button variant="primary" tone="critical">
    Delete variant
  </s-button>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Showcases a navigation button with an icon, enabling quick access to different sections of the interface.```jsx
<s-button href="javascript:void(0)" icon="order">
  View orders
</s-button>
```

```html
<!-- Button that navigates using Shopify's navigation system. Use shopify:navigate for navigation. Refer to [handling navigation events](https://shopify.dev/docs/api/app-home?accordionItem=getting-started-existing-remix-application) for implementation details and framework-specific examples. -->
<s-button href="javascript:void(0)" icon="order">View orders</s-button>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-button href="javascript:void(0)" icon="order">
  View orders
</s-button>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates a button group for executing operations on multiple selected items.```jsx
<s-stack direction="inline" gap="base">
  <s-button variant="secondary">Export selected</s-button>
  <s-button variant="primary" tone="critical">
    Delete selected
  </s-button>
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-button variant="secondary">Export selected</s-button>
  <s-button variant="primary" tone="critical">Delete selected</s-button>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-button variant="secondary">Export selected</s-button>
  <s-button variant="primary" tone="critical">
    Delete selected
  </s-button>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Showcases a set of compact, icon-only buttons with accessibility labels, perfect for creating dense interfaces.```jsx
<s-stack direction="inline" gap="base">
  <s-button
    icon="duplicate"
    variant="tertiary"
    accessibilityLabel="Duplicate product"
   />
  <s-button
    icon="view"
    variant="tertiary"
    accessibilityLabel="Preview product"
   />
  <s-button
    icon="menu-horizontal"
    variant="tertiary"
    accessibilityLabel="More actions"
   />
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-button
    icon="duplicate"
    variant="tertiary"
    accessibilityLabel="Duplicate product"
  ></s-button>
  <s-button
    icon="view"
    variant="tertiary"
    accessibilityLabel="Preview product"
  ></s-button>
  <s-button
    icon="menu-horizontal"
    variant="tertiary"
    accessibilityLabel="More actions"
  ></s-button>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-button
    icon="duplicate"
    variant="tertiary"
    accessibilityLabel="Duplicate product"
   />
  <s-button
    icon="view"
    variant="tertiary"
    accessibilityLabel="Preview product"
   />
  <s-button
    icon="menu-horizontal"
    variant="tertiary"
    accessibilityLabel="More actions"
   />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates advanced button capabilities using `command`, `commandFor`, and `interestFor` properties to enable dynamic component communication.```jsx
<s-stack direction="inline" gap="base">
  {/* Button that navigates using Shopify's navigation system. Use shopify:navigate for navigation. Refer to [handling navigation events](https://shopify.dev/docs/api/app-home?accordionItem=getting-started-existing-remix-application) for implementation details and framework-specific examples. */}
  <s-button href="javascript:void(0)">Edit details</s-button>

  {/* Button that expresses interest in specific data */}
  <s-button interestFor="selected-products">Bulk edit</s-button>
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <!-- Button that navigates using Shopify's navigation system. Use shopify:navigate for navigation. Refer to [handling navigation events](https://shopify.dev/docs/api/app-home?accordionItem=getting-started-existing-remix-application) for implementation details and framework-specific examples. -->
  <s-button href="javascript:void(0)">Edit details</s-button>

  <!-- Button that expresses interest in specific data -->
  <s-button interestFor="selected-products">Bulk edit</s-button>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  {/* Button that navigates using Shopify's navigation system. Use shopify:navigate for navigation. Refer to [handling navigation events](https://shopify.dev/docs/api/app-home?accordionItem=getting-started-existing-remix-application) for implementation details and framework-specific examples. */}
  <s-button href="javascript:void(0)">Edit details</s-button>

  {/* Button that expresses interest in specific data */}
  <s-button interestFor="selected-products">Bulk edit</s-button>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Slots

### ButtonSlots

### children

value: `HTMLElement`

The content of the Button.

## Examples

Triggers actions or events, such as submitting forms, opening dialogs, or navigating to other pages. Use Button to let users perform specific tasks or initiate interactions throughout the interface. Buttons can also function as links, guiding users to internal or external destinations.


### Basic usage

Demonstrates a simple button with default styling, automatically determining its visual variant and using a clear, action-oriented label.```jsx
<s-button>Save</s-button>
```

```html
<s-button>Save</s-button>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-button>Save</s-button>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Showcases different button variants with varying visual emphasis, helping merchants understand action priorities through distinct styling.```jsx
<s-stack direction="inline" gap="base">
  <s-button variant="primary">Primary</s-button>
  <s-button variant="secondary">Secondary</s-button>
  <s-button variant="tertiary">Tertiary</s-button>
  <s-button variant="auto">Auto</s-button>
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-button variant="primary">Primary</s-button>
  <s-button variant="secondary">Secondary</s-button>
  <s-button variant="tertiary">Tertiary</s-button>
  <s-button variant="auto">Auto</s-button>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-button variant="primary">Primary</s-button>
  <s-button variant="secondary">Secondary</s-button>
  <s-button variant="tertiary">Tertiary</s-button>
  <s-button variant="auto">Auto</s-button>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates button tones that signal the semantic importance and potential impact of different actions through color and styling.```jsx
<s-stack direction="inline" gap="base">
  <s-button tone="critical">Delete</s-button>
  <s-button tone="neutral">Save draft</s-button>
  <s-button>Continue</s-button>
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-button tone="critical">Delete</s-button>
  <s-button tone="neutral">Save draft</s-button>
  <s-button>Continue</s-button>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-button tone="critical">Delete</s-button>
  <s-button tone="neutral">Save draft</s-button>
  <s-button>Continue</s-button>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Showcases a button that combines a descriptive text label with an intuitive icon, enhancing visual communication of the action.```jsx
<s-button icon="plus">Add product</s-button>
```

```html
<s-button icon="plus">Add product</s-button>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-button icon="plus">Add product</s-button>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates an icon-only button with an accessibility label, providing a compact interface that remains screen reader friendly.```jsx
<s-button icon="plus" accessibilityLabel="Add product" />
```

```html
<s-button icon="plus" accessibilityLabel="Add product"></s-button>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-button icon="plus" accessibilityLabel="Add product" />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates buttons in various loading states, providing visual feedback during asynchronous operations.```jsx
<s-stack direction="inline" gap="base">
  <s-button loading variant="primary">
    Saving product...
  </s-button>
  <s-button loading variant="secondary">
    Updating 247 variants...
  </s-button>
  <s-button loading tone="neutral">
    Processing shipment...
  </s-button>
</s-stack>
```

```html
<!-- Product save operation -->
<s-button loading variant="primary">Saving product...</s-button>

<!-- Bulk inventory update -->
<s-button loading variant="secondary">Updating 247 variants...</s-button>

<!-- Order fulfillment -->
<s-button loading tone="neutral">Processing shipment...</s-button>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-button loading variant="primary">
    Saving product...
  </s-button>
  <s-button loading variant="secondary">
    Updating 247 variants...
  </s-button>
  <s-button loading tone="neutral">
    Processing shipment...
  </s-button>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates buttons in different interaction states, showing how to represent disabled controls and submit actions within forms.```jsx
<s-stack direction="inline" gap="base">
  <s-button disabled>Save draft</s-button>
  <s-button type="submit" variant="primary">
    Save product
  </s-button>
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-button disabled>Save draft</s-button>
  <s-button type="submit" variant="primary">Save product</s-button>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-button disabled>Save draft</s-button>
  <s-button type="submit" variant="primary">
    Save product
  </s-button>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Showcases buttons that act as hyperlinks, supporting navigation to different pages, external resources, and file downloads.```jsx
<s-stack direction="inline" gap="base">
  <s-button href="javascript:void(0)">View products</s-button>
  <s-button href="javascript:void(0)" target="_blank">
    Help docs
  </s-button>
  <s-button href="javascript:void(0)" download="sales-report.csv">
    Export data
  </s-button>
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-button href="javascript:void(0)">View products</s-button>
  <s-button href="javascript:void(0)" target="_blank">Help docs</s-button>
  <s-button href="javascript:void(0)" download="sales-report.csv">
    Export data
  </s-button>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-button href="javascript:void(0)">View products</s-button>
  <s-button href="javascript:void(0)" target="_blank">
    Help docs
  </s-button>
  <s-button href="javascript:void(0)" download="sales-report.csv">
    Export data
  </s-button>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates a button group with carefully aligned actions, showing how to create a clear visual hierarchy for form submission and cancellation.```jsx
<s-stack direction="inline" gap="base" justifyContent="end">
  <s-button variant="secondary">Cancel</s-button>
  <s-button variant="primary" type="submit">
    Save product
  </s-button>
</s-stack>
```

```html
<s-stack direction="inline" gap="base" justifyContent="end">
  <s-button variant="secondary">Cancel</s-button>
  <s-button variant="primary" type="submit">Save product</s-button>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base" justifyContent="end">
  <s-button variant="secondary">Cancel</s-button>
  <s-button variant="primary" type="submit">
    Save product
  </s-button>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates a button pair for destructive actions, using a critical tone to emphasize the potentially irreversible nature of the operation.```jsx
<s-stack direction="inline" gap="base">
  <s-button variant="secondary">Cancel</s-button>
  <s-button variant="primary" tone="critical">
    Delete variant
  </s-button>
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-button variant="secondary">Cancel</s-button>
  <s-button variant="primary" tone="critical">Delete variant</s-button>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-button variant="secondary">Cancel</s-button>
  <s-button variant="primary" tone="critical">
    Delete variant
  </s-button>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Showcases a navigation button with an icon, enabling quick access to different sections of the interface.```jsx
<s-button href="javascript:void(0)" icon="order">
  View orders
</s-button>
```

```html
<!-- Button that navigates using Shopify's navigation system. Use shopify:navigate for navigation. Refer to [handling navigation events](https://shopify.dev/docs/api/app-home?accordionItem=getting-started-existing-remix-application) for implementation details and framework-specific examples. -->
<s-button href="javascript:void(0)" icon="order">View orders</s-button>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-button href="javascript:void(0)" icon="order">
  View orders
</s-button>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates a button group for executing operations on multiple selected items.```jsx
<s-stack direction="inline" gap="base">
  <s-button variant="secondary">Export selected</s-button>
  <s-button variant="primary" tone="critical">
    Delete selected
  </s-button>
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-button variant="secondary">Export selected</s-button>
  <s-button variant="primary" tone="critical">Delete selected</s-button>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-button variant="secondary">Export selected</s-button>
  <s-button variant="primary" tone="critical">
    Delete selected
  </s-button>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Showcases a set of compact, icon-only buttons with accessibility labels, perfect for creating dense interfaces.```jsx
<s-stack direction="inline" gap="base">
  <s-button
    icon="duplicate"
    variant="tertiary"
    accessibilityLabel="Duplicate product"
   />
  <s-button
    icon="view"
    variant="tertiary"
    accessibilityLabel="Preview product"
   />
  <s-button
    icon="menu-horizontal"
    variant="tertiary"
    accessibilityLabel="More actions"
   />
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-button
    icon="duplicate"
    variant="tertiary"
    accessibilityLabel="Duplicate product"
  ></s-button>
  <s-button
    icon="view"
    variant="tertiary"
    accessibilityLabel="Preview product"
  ></s-button>
  <s-button
    icon="menu-horizontal"
    variant="tertiary"
    accessibilityLabel="More actions"
  ></s-button>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-button
    icon="duplicate"
    variant="tertiary"
    accessibilityLabel="Duplicate product"
   />
  <s-button
    icon="view"
    variant="tertiary"
    accessibilityLabel="Preview product"
   />
  <s-button
    icon="menu-horizontal"
    variant="tertiary"
    accessibilityLabel="More actions"
   />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates advanced button capabilities using `command`, `commandFor`, and `interestFor` properties to enable dynamic component communication.```jsx
<s-stack direction="inline" gap="base">
  {/* Button that navigates using Shopify's navigation system. Use shopify:navigate for navigation. Refer to [handling navigation events](https://shopify.dev/docs/api/app-home?accordionItem=getting-started-existing-remix-application) for implementation details and framework-specific examples. */}
  <s-button href="javascript:void(0)">Edit details</s-button>

  {/* Button that expresses interest in specific data */}
  <s-button interestFor="selected-products">Bulk edit</s-button>
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <!-- Button that navigates using Shopify's navigation system. Use shopify:navigate for navigation. Refer to [handling navigation events](https://shopify.dev/docs/api/app-home?accordionItem=getting-started-existing-remix-application) for implementation details and framework-specific examples. -->
  <s-button href="javascript:void(0)">Edit details</s-button>

  <!-- Button that expresses interest in specific data -->
  <s-button interestFor="selected-products">Bulk edit</s-button>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  {/* Button that navigates using Shopify's navigation system. Use shopify:navigate for navigation. Refer to [handling navigation events](https://shopify.dev/docs/api/app-home?accordionItem=getting-started-existing-remix-application) for implementation details and framework-specific examples. */}
  <s-button href="javascript:void(0)">Edit details</s-button>

  {/* Button that expresses interest in specific data */}
  <s-button interestFor="selected-products">Bulk edit</s-button>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Examples

Triggers actions or events, such as submitting forms, opening dialogs, or navigating to other pages. Use Button to let users perform specific tasks or initiate interactions throughout the interface. Buttons can also function as links, guiding users to internal or external destinations.


### Basic usage

Demonstrates a simple button with default styling, automatically determining its visual variant and using a clear, action-oriented label.```jsx
<s-button>Save</s-button>
```

```html
<s-button>Save</s-button>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-button>Save</s-button>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Showcases different button variants with varying visual emphasis, helping merchants understand action priorities through distinct styling.```jsx
<s-stack direction="inline" gap="base">
  <s-button variant="primary">Primary</s-button>
  <s-button variant="secondary">Secondary</s-button>
  <s-button variant="tertiary">Tertiary</s-button>
  <s-button variant="auto">Auto</s-button>
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-button variant="primary">Primary</s-button>
  <s-button variant="secondary">Secondary</s-button>
  <s-button variant="tertiary">Tertiary</s-button>
  <s-button variant="auto">Auto</s-button>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-button variant="primary">Primary</s-button>
  <s-button variant="secondary">Secondary</s-button>
  <s-button variant="tertiary">Tertiary</s-button>
  <s-button variant="auto">Auto</s-button>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates button tones that signal the semantic importance and potential impact of different actions through color and styling.```jsx
<s-stack direction="inline" gap="base">
  <s-button tone="critical">Delete</s-button>
  <s-button tone="neutral">Save draft</s-button>
  <s-button>Continue</s-button>
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-button tone="critical">Delete</s-button>
  <s-button tone="neutral">Save draft</s-button>
  <s-button>Continue</s-button>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-button tone="critical">Delete</s-button>
  <s-button tone="neutral">Save draft</s-button>
  <s-button>Continue</s-button>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Showcases a button that combines a descriptive text label with an intuitive icon, enhancing visual communication of the action.```jsx
<s-button icon="plus">Add product</s-button>
```

```html
<s-button icon="plus">Add product</s-button>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-button icon="plus">Add product</s-button>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates an icon-only button with an accessibility label, providing a compact interface that remains screen reader friendly.```jsx
<s-button icon="plus" accessibilityLabel="Add product" />
```

```html
<s-button icon="plus" accessibilityLabel="Add product"></s-button>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-button icon="plus" accessibilityLabel="Add product" />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates buttons in various loading states, providing visual feedback during asynchronous operations.```jsx
<s-stack direction="inline" gap="base">
  <s-button loading variant="primary">
    Saving product...
  </s-button>
  <s-button loading variant="secondary">
    Updating 247 variants...
  </s-button>
  <s-button loading tone="neutral">
    Processing shipment...
  </s-button>
</s-stack>
```

```html
<!-- Product save operation -->
<s-button loading variant="primary">Saving product...</s-button>

<!-- Bulk inventory update -->
<s-button loading variant="secondary">Updating 247 variants...</s-button>

<!-- Order fulfillment -->
<s-button loading tone="neutral">Processing shipment...</s-button>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-button loading variant="primary">
    Saving product...
  </s-button>
  <s-button loading variant="secondary">
    Updating 247 variants...
  </s-button>
  <s-button loading tone="neutral">
    Processing shipment...
  </s-button>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates buttons in different interaction states, showing how to represent disabled controls and submit actions within forms.```jsx
<s-stack direction="inline" gap="base">
  <s-button disabled>Save draft</s-button>
  <s-button type="submit" variant="primary">
    Save product
  </s-button>
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-button disabled>Save draft</s-button>
  <s-button type="submit" variant="primary">Save product</s-button>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-button disabled>Save draft</s-button>
  <s-button type="submit" variant="primary">
    Save product
  </s-button>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Showcases buttons that act as hyperlinks, supporting navigation to different pages, external resources, and file downloads.```jsx
<s-stack direction="inline" gap="base">
  <s-button href="javascript:void(0)">View products</s-button>
  <s-button href="javascript:void(0)" target="_blank">
    Help docs
  </s-button>
  <s-button href="javascript:void(0)" download="sales-report.csv">
    Export data
  </s-button>
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-button href="javascript:void(0)">View products</s-button>
  <s-button href="javascript:void(0)" target="_blank">Help docs</s-button>
  <s-button href="javascript:void(0)" download="sales-report.csv">
    Export data
  </s-button>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-button href="javascript:void(0)">View products</s-button>
  <s-button href="javascript:void(0)" target="_blank">
    Help docs
  </s-button>
  <s-button href="javascript:void(0)" download="sales-report.csv">
    Export data
  </s-button>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates a button group with carefully aligned actions, showing how to create a clear visual hierarchy for form submission and cancellation.```jsx
<s-stack direction="inline" gap="base" justifyContent="end">
  <s-button variant="secondary">Cancel</s-button>
  <s-button variant="primary" type="submit">
    Save product
  </s-button>
</s-stack>
```

```html
<s-stack direction="inline" gap="base" justifyContent="end">
  <s-button variant="secondary">Cancel</s-button>
  <s-button variant="primary" type="submit">Save product</s-button>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base" justifyContent="end">
  <s-button variant="secondary">Cancel</s-button>
  <s-button variant="primary" type="submit">
    Save product
  </s-button>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates a button pair for destructive actions, using a critical tone to emphasize the potentially irreversible nature of the operation.```jsx
<s-stack direction="inline" gap="base">
  <s-button variant="secondary">Cancel</s-button>
  <s-button variant="primary" tone="critical">
    Delete variant
  </s-button>
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-button variant="secondary">Cancel</s-button>
  <s-button variant="primary" tone="critical">Delete variant</s-button>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-button variant="secondary">Cancel</s-button>
  <s-button variant="primary" tone="critical">
    Delete variant
  </s-button>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Showcases a navigation button with an icon, enabling quick access to different sections of the interface.```jsx
<s-button href="javascript:void(0)" icon="order">
  View orders
</s-button>
```

```html
<!-- Button that navigates using Shopify's navigation system. Use shopify:navigate for navigation. Refer to [handling navigation events](https://shopify.dev/docs/api/app-home?accordionItem=getting-started-existing-remix-application) for implementation details and framework-specific examples. -->
<s-button href="javascript:void(0)" icon="order">View orders</s-button>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-button href="javascript:void(0)" icon="order">
  View orders
</s-button>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates a button group for executing operations on multiple selected items.```jsx
<s-stack direction="inline" gap="base">
  <s-button variant="secondary">Export selected</s-button>
  <s-button variant="primary" tone="critical">
    Delete selected
  </s-button>
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-button variant="secondary">Export selected</s-button>
  <s-button variant="primary" tone="critical">Delete selected</s-button>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-button variant="secondary">Export selected</s-button>
  <s-button variant="primary" tone="critical">
    Delete selected
  </s-button>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Showcases a set of compact, icon-only buttons with accessibility labels, perfect for creating dense interfaces.```jsx
<s-stack direction="inline" gap="base">
  <s-button
    icon="duplicate"
    variant="tertiary"
    accessibilityLabel="Duplicate product"
   />
  <s-button
    icon="view"
    variant="tertiary"
    accessibilityLabel="Preview product"
   />
  <s-button
    icon="menu-horizontal"
    variant="tertiary"
    accessibilityLabel="More actions"
   />
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-button
    icon="duplicate"
    variant="tertiary"
    accessibilityLabel="Duplicate product"
  ></s-button>
  <s-button
    icon="view"
    variant="tertiary"
    accessibilityLabel="Preview product"
  ></s-button>
  <s-button
    icon="menu-horizontal"
    variant="tertiary"
    accessibilityLabel="More actions"
  ></s-button>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-button
    icon="duplicate"
    variant="tertiary"
    accessibilityLabel="Duplicate product"
   />
  <s-button
    icon="view"
    variant="tertiary"
    accessibilityLabel="Preview product"
   />
  <s-button
    icon="menu-horizontal"
    variant="tertiary"
    accessibilityLabel="More actions"
   />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates advanced button capabilities using `command`, `commandFor`, and `interestFor` properties to enable dynamic component communication.```jsx
<s-stack direction="inline" gap="base">
  {/* Button that navigates using Shopify's navigation system. Use shopify:navigate for navigation. Refer to [handling navigation events](https://shopify.dev/docs/api/app-home?accordionItem=getting-started-existing-remix-application) for implementation details and framework-specific examples. */}
  <s-button href="javascript:void(0)">Edit details</s-button>

  {/* Button that expresses interest in specific data */}
  <s-button interestFor="selected-products">Bulk edit</s-button>
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <!-- Button that navigates using Shopify's navigation system. Use shopify:navigate for navigation. Refer to [handling navigation events](https://shopify.dev/docs/api/app-home?accordionItem=getting-started-existing-remix-application) for implementation details and framework-specific examples. -->
  <s-button href="javascript:void(0)">Edit details</s-button>

  <!-- Button that expresses interest in specific data -->
  <s-button interestFor="selected-products">Bulk edit</s-button>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  {/* Button that navigates using Shopify's navigation system. Use shopify:navigate for navigation. Refer to [handling navigation events](https://shopify.dev/docs/api/app-home?accordionItem=getting-started-existing-remix-application) for implementation details and framework-specific examples. */}
  <s-button href="javascript:void(0)">Edit details</s-button>

  {/* Button that expresses interest in specific data */}
  <s-button interestFor="selected-products">Bulk edit</s-button>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

