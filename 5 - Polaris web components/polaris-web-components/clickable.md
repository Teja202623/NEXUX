# Clickable

A generic interactive container component that provides a flexible alternative for custom interactive elements not achievable with existing components like Button or Link. Use it to apply specific styling such as backgrounds, padding, or borders.

```jsx
<>
  <s-clickable padding="base">Create Store</s-clickable>

  <s-clickable
    border="base"
    padding="base"
    background="subdued"
    borderRadius="base"
  >
    View Shipping Settings
  </s-clickable>
</>
```

```html
<s-clickable padding="base">Create Store</s-clickable>

<s-clickable
  border="base"
  padding="base"
  background="subdued"
  borderRadius="base"
>
  View Shipping Settings
</s-clickable>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
  <s-clickable padding="base">Create Store</s-clickable>

  <s-clickable
    border="base"
    padding="base"
    background="subdued"
    borderRadius="base"
  >
    View Shipping Settings
  </s-clickable>
</>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Properties

### Clickable

### accessibilityLabel

value: `string`

A label that describes the purpose or contents of the element. When set, it will be announced to users using assistive technologies and will provide them with more context.

Only use this when the element's content is not enough context for users using assistive technologies.

### accessibilityRole

value: `AccessibilityRole`

  - AccessibilityRole: 'main' | 'header' | 'footer' | 'section' | 'aside' | 'navigation' | 'ordered-list' | 'list-item' | 'list-item-separator' | 'unordered-list' | 'separator' | 'status' | 'alert' | 'generic' | 'presentation' | 'none'
Sets the semantic meaning of the component’s content. When set, the role will be used by assistive technologies to help users navigate the page.

### accessibilityVisibility

value: `"visible" | "hidden" | "exclusive"`

Changes the visibility of the element.

- `visible`: the element is visible to all users.
- `hidden`: the element is removed from the accessibility tree but remains visible.
- `exclusive`: the element is visually hidden but remains in the accessibility tree.

### adoptedCallback

value: `() => void`


### attributeChangedCallback

value: `(name: string) => void`


### background

value: `BackgroundColorKeyword`

  - BackgroundColorKeyword: 'transparent' | ColorKeyword
  - ColorKeyword: 'subdued' | 'base' | 'strong'
Adjust the background of the component.

### blockSize

value: `SizeUnitsOrAuto`

  - SizeUnitsOrAuto: SizeUnits | 'auto'
  - SizeUnits: `${number}px` | `${number}%` | `0`
Adjust the [block size](https://developer.mozilla.org/en-US/docs/Web/CSS/block-size).

### border

value: `BorderShorthand`

  - BorderShorthand: BorderSizeKeyword | `${BorderSizeKeyword} ${ColorKeyword}` | `${BorderSizeKeyword} ${ColorKeyword} ${BorderStyleKeyword}`
Set the border via the shorthand property.

This can be a size, optionally followed by a color, optionally followed by a style.

If the color is not specified, it will be `base`.

If the style is not specified, it will be `auto`.

Values can be overridden by `borderWidth`, `borderStyle`, and `borderColor`.

### borderColor

value: `"" | ColorKeyword`

  - ColorKeyword: 'subdued' | 'base' | 'strong'
Adjust the color of the border.

### borderRadius

value: `MaybeAllValuesShorthandProperty<BoxBorderRadii>`

  - MaybeAllValuesShorthandProperty: T | `${T} ${T}` | `${T} ${T} ${T}` | `${T} ${T} ${T} ${T}`
  - BoxBorderRadii: 'small' | 'small-200' | 'small-100' | 'base' | 'large' | 'large-100' | 'large-200' | 'none'
Adjust the radius of the border.

### borderStyle

value: `"" | MaybeAllValuesShorthandProperty<BoxBorderStyles>`

  - MaybeAllValuesShorthandProperty: T | `${T} ${T}` | `${T} ${T} ${T}` | `${T} ${T} ${T} ${T}`
  - BoxBorderStyles: 'auto' | 'none' | 'solid' | 'dashed'
Adjust the style of the border.

### borderWidth

value: `"" | MaybeAllValuesShorthandProperty<"small" | "small-100" | "base" | "large" | "large-100" | "none">`

  - MaybeAllValuesShorthandProperty: T | `${T} ${T}` | `${T} ${T} ${T}` | `${T} ${T} ${T} ${T}`
Adjust the width of the border.

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

Disables the clickable, meaning it cannot be clicked or receive focus.

In this state, onClick will not fire. If the click event originates from a child element, the event will immediately stop propagating from this element.

However, items within the clickable can still receive focus and be interacted with.

This has no impact on the visual state by default, but developers are encouraged to style the clickable accordingly.

### disconnectedCallback

value: `() => void`


### display

value: `MaybeResponsive<"auto" | "none">`

  - MaybeResponsive: T | `@container${string}`
Sets the outer [display](https://developer.mozilla.org/en-US/docs/Web/CSS/display) type of the component. The outer type sets a component's participation in [flow layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flow_layout).

- `auto` the component's initial value. The actual value depends on the component and context.
- `none` hides the component from display and removes it from the accessibility tree, making it invisible to screen readers.

### download

value: `string`

Causes the browser to treat the linked URL as a download with the string being the file name. Download only works for same-origin URLs or the `blob:` and `data:` schemes.

### href

value: `string`

The URL to link to.

- If set, it will navigate to the location specified by `href` after executing the `click` event.
- If a `commandFor` is set, the `command` will be executed instead of the navigation.

### inlineSize

value: `SizeUnitsOrAuto`

  - SizeUnitsOrAuto: SizeUnits | 'auto'
  - SizeUnits: `${number}px` | `${number}%` | `0`
Adjust the [inline size](https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size).

### interestFor

value: `string`

Sets the element the [interestFor](https://open-ui.org/components/interest-invokers.explainer/#the-pitch-in-code) should act on when this clickable is activated.

### loading

value: `boolean`

Disables the clickable, and indicates to assistive technology that the loading is in progress.

This also disables the clickable.

### maxBlockSize

value: `SizeUnitsOrNone`

  - SizeUnits: `${number}px` | `${number}%` | `0`
  - SizeUnitsOrNone: SizeUnits | 'none'
Adjust the [maximum block size](https://developer.mozilla.org/en-US/docs/Web/CSS/max-block-size).

### maxInlineSize

value: `SizeUnitsOrNone`

  - SizeUnits: `${number}px` | `${number}%` | `0`
  - SizeUnitsOrNone: SizeUnits | 'none'
Adjust the [maximum inline size](https://developer.mozilla.org/en-US/docs/Web/CSS/max-inline-size).

### minBlockSize

value: `SizeUnits`

  - SizeUnits: `${number}px` | `${number}%` | `0`
Adjust the [minimum block size](https://developer.mozilla.org/en-US/docs/Web/CSS/min-block-size).

### minInlineSize

value: `SizeUnits`

  - SizeUnits: `${number}px` | `${number}%` | `0`
Adjust the [minimum inline size](https://developer.mozilla.org/en-US/docs/Web/CSS/min-inline-size).

### overflow

value: `"visible" | "hidden"`

Sets the overflow behavior of the element.

- `hidden`: clips the content when it is larger than the element’s container. The element will not be scrollable and the users will not be able to access the clipped content by dragging or using a scroll wheel on a mouse.
- `visible`: the content that extends beyond the element’s container is visible.

### padding

value: `MaybeResponsive<MaybeAllValuesShorthandProperty<PaddingKeyword>>`

  - MaybeResponsive: T | `@container${string}`
  - MaybeAllValuesShorthandProperty: T | `${T} ${T}` | `${T} ${T} ${T}` | `${T} ${T} ${T} ${T}`
  - PaddingKeyword: SizeKeyword | 'none'
Adjust the padding of all edges.

[1-to-4-value syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#edges_of_a_box) is supported. Note that, contrary to the CSS, it uses flow-relative values and the order is:

- 4 values: `block-start inline-end block-end inline-start`
- 3 values: `block-start inline block-end`
- 2 values: `block inline`

For example:
- `large` means block-start, inline-end, block-end and inline-start paddings are `large`.
- `large none` means block-start and block-end paddings are `large`, inline-start and inline-end paddings are `none`.
- `large none large` means block-start padding is `large`, inline-end padding is `none`, block-end padding is `large` and inline-start padding is `none`.
- `large none large small` means block-start padding is `large`, inline-end padding is `none`, block-end padding is `large` and inline-start padding is `small`.

A padding value of `auto` will use the default padding for the closest container that has had its usual padding removed.

`padding` also accepts a [responsive value](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported PaddingKeyword as a query value.

### paddingBlock

value: `MaybeResponsive<"" | MaybeTwoValuesShorthandProperty<PaddingKeyword>>`

  - MaybeResponsive: T | `@container${string}`
  - PaddingKeyword: SizeKeyword | 'none'
  - MaybeTwoValuesShorthandProperty: T | `${T} ${T}`
Adjust the block-padding.

- `large none` means block-start padding is `large`, block-end padding is `none`.

This overrides the block value of `padding`.

`paddingBlock` also accepts a [responsive value](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported PaddingKeyword as a query value.

### paddingBlockEnd

value: `MaybeResponsive<"" | PaddingKeyword>`

  - MaybeResponsive: T | `@container${string}`
  - PaddingKeyword: SizeKeyword | 'none'
Adjust the block-end padding.

This overrides the block-end value of `paddingBlock`.

`paddingBlockEnd` also accepts a [responsive value](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported PaddingKeyword as a query value.

### paddingBlockStart

value: `MaybeResponsive<"" | PaddingKeyword>`

  - MaybeResponsive: T | `@container${string}`
  - PaddingKeyword: SizeKeyword | 'none'
Adjust the block-start padding.

This overrides the block-start value of `paddingBlock`.

`paddingBlockStart` also accepts a [responsive value](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported PaddingKeyword as a query value.

### paddingInline

value: `MaybeResponsive<"" | MaybeTwoValuesShorthandProperty<PaddingKeyword>>`

  - MaybeResponsive: T | `@container${string}`
  - PaddingKeyword: SizeKeyword | 'none'
  - MaybeTwoValuesShorthandProperty: T | `${T} ${T}`
Adjust the inline padding.

- `large none` means inline-start padding is `large`, inline-end padding is `none`.

This overrides the inline value of `padding`.

`paddingInline` also accepts a [responsive value](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported PaddingKeyword as a query value.

### paddingInlineEnd

value: `MaybeResponsive<"" | PaddingKeyword>`

  - MaybeResponsive: T | `@container${string}`
  - PaddingKeyword: SizeKeyword | 'none'
Adjust the inline-end padding.

This overrides the inline-end value of `paddingInline`.

`paddingInlineEnd` also accepts a [responsive value](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported PaddingKeyword as a query value.

### paddingInlineStart

value: `MaybeResponsive<"" | PaddingKeyword>`

  - MaybeResponsive: T | `@container${string}`
  - PaddingKeyword: SizeKeyword | 'none'
Adjust the inline-start padding.

This overrides the inline-start value of `paddingInline`.

`paddingInlineStart` also accepts a [responsive value](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported PaddingKeyword as a query value.

### queueRender

value: `() => void`

Queue a run of the render function. You shouldn't need to call this manually - it should be handled by changes to

### setAttribute

value: `(name: string, value: string) => void`


### target

value: `"auto" | AnyString | "_blank" | "_self" | "_parent" | "_top"`

  - AnyString: string & {}
Specifies where to display the linked URL.

### type

value: `"button" | "reset" | "submit"`

The behavior of the Button.

- `submit`: Used to indicate the component acts as a submit button, meaning it submits the closest form.
- `button`: Used to indicate the component acts as a button, meaning it has no default action.
- `reset`: Used to indicate the component acts as a reset button, meaning it resets the closest form (returning fields to their default values).

This property is ignored if the component supports `href` or `commandFor`/`command` and one of them is set.

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

A generic interactive container component that provides a flexible alternative for custom interactive elements not achievable with existing components like Button or Link. Use it to apply specific styling such as backgrounds, padding, or borders.


### Basic usage

A simple clickable button with a base border and padding, demonstrating the default button behavior of the Clickable component.```jsx
<s-clickable border="base" padding="base">
  Click me
</s-clickable>
```

```html
<s-clickable border="base" padding="base">Click me</s-clickable>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-clickable border="base" padding="base">
  Click me
</s-clickable>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates the Clickable component's ability to function as a link, opening the specified URL in a new browser tab when clicked.```jsx
<s-clickable href="javascript:void(0)" target="_blank">
  Visit Shopify
</s-clickable>
```

```html
<s-clickable href="javascript:void(0)" target="_blank">
  Visit Shopify
</s-clickable>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-clickable href="javascript:void(0)" target="_blank">
  Visit Shopify
</s-clickable>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

A disabled submit button that can be used within a form, showing the component's form integration capabilities and disabled state.```jsx
<s-clickable type="submit" disabled border="base" padding="base">
  Save changes
</s-clickable>
```

```html
<s-clickable type="submit" disabled border="base" padding="base">
  Save changes
</s-clickable>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-clickable type="submit" disabled border="base" padding="base">
  Save changes
</s-clickable>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates how the Clickable component can be integrated into a section layout to provide an interactive action button.```jsx
<s-box padding="large-400" background="base" borderRadius="small-200">
  <s-stack gap="large-300">
    <s-heading>Product settings</s-heading>
    <s-text>Configure your product inventory and pricing settings.</s-text>
    <s-clickable background="base" padding="base" borderRadius="small">
      <s-text type="strong">Configure settings</s-text>
    </s-clickable>
  </s-stack>
</s-box>
```

```html
<s-box padding="large-400" background="base" borderRadius="small-200">
  <s-stack gap="large-300">
    <s-heading>Product settings</s-heading>
    <s-text>Configure your product inventory and pricing settings.</s-text>
    <s-clickable background="base" padding="base" borderRadius="small">
      <s-text type="strong">Configure settings</s-text>
    </s-clickable>
  </s-stack>
</s-box>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-box padding="large-400" background="base" borderRadius="small-200">
  <s-stack gap="large-300">
    <s-heading>Product settings</s-heading>
    <s-text>Configure your product inventory and pricing settings.</s-text>
    <s-clickable background="base" padding="base" borderRadius="small">
      <s-text type="strong">Configure settings</s-text>
    </s-clickable>
  </s-stack>
</s-box>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates the use of an accessibility label to provide context for screen readers, enhancing the component's usability for users with assistive technologies.```jsx
<s-clickable
  accessibilityLabel="Delete product winter collection jacket"
  background="base"
  padding="base"
  borderRadius="small"
>
  <s-text>Delete</s-text>
</s-clickable>
```

```html
<s-clickable
  accessibilityLabel="Delete product winter collection jacket"
  background="base"
  padding="base"
  borderRadius="small"
>
  <s-text>Delete</s-text>
</s-clickable>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-clickable
  accessibilityLabel="Delete product winter collection jacket"
  background="base"
  padding="base"
  borderRadius="small"
>
  <s-text>Delete</s-text>
</s-clickable>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows a disabled link with an accessibility label, explaining the unavailability of a feature to users of assistive technologies.```jsx
<s-clickable
  href="javascript:void(0)"
  disabled
  accessibilityLabel="This link is currently unavailable"
>
  <s-text>Unavailable feature</s-text>
</s-clickable>
```

```html
<s-clickable
  href="javascript:void(0)"
  disabled
  accessibilityLabel="This link is currently unavailable"
>
  <s-text>Unavailable feature</s-text>
</s-clickable>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-clickable
  href="javascript:void(0)"
  disabled
  accessibilityLabel="This link is currently unavailable"
>
  <s-text>Unavailable feature</s-text>
</s-clickable>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Events

Learn more about [registering events](https://shopify.dev/docs/api/app-home/using-polaris-components#event-handling).

### ClickableEvents

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

A generic interactive container component that provides a flexible alternative for custom interactive elements not achievable with existing components like Button or Link. Use it to apply specific styling such as backgrounds, padding, or borders.


### Basic usage

A simple clickable button with a base border and padding, demonstrating the default button behavior of the Clickable component.```jsx
<s-clickable border="base" padding="base">
  Click me
</s-clickable>
```

```html
<s-clickable border="base" padding="base">Click me</s-clickable>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-clickable border="base" padding="base">
  Click me
</s-clickable>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates the Clickable component's ability to function as a link, opening the specified URL in a new browser tab when clicked.```jsx
<s-clickable href="javascript:void(0)" target="_blank">
  Visit Shopify
</s-clickable>
```

```html
<s-clickable href="javascript:void(0)" target="_blank">
  Visit Shopify
</s-clickable>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-clickable href="javascript:void(0)" target="_blank">
  Visit Shopify
</s-clickable>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

A disabled submit button that can be used within a form, showing the component's form integration capabilities and disabled state.```jsx
<s-clickable type="submit" disabled border="base" padding="base">
  Save changes
</s-clickable>
```

```html
<s-clickable type="submit" disabled border="base" padding="base">
  Save changes
</s-clickable>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-clickable type="submit" disabled border="base" padding="base">
  Save changes
</s-clickable>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates how the Clickable component can be integrated into a section layout to provide an interactive action button.```jsx
<s-box padding="large-400" background="base" borderRadius="small-200">
  <s-stack gap="large-300">
    <s-heading>Product settings</s-heading>
    <s-text>Configure your product inventory and pricing settings.</s-text>
    <s-clickable background="base" padding="base" borderRadius="small">
      <s-text type="strong">Configure settings</s-text>
    </s-clickable>
  </s-stack>
</s-box>
```

```html
<s-box padding="large-400" background="base" borderRadius="small-200">
  <s-stack gap="large-300">
    <s-heading>Product settings</s-heading>
    <s-text>Configure your product inventory and pricing settings.</s-text>
    <s-clickable background="base" padding="base" borderRadius="small">
      <s-text type="strong">Configure settings</s-text>
    </s-clickable>
  </s-stack>
</s-box>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-box padding="large-400" background="base" borderRadius="small-200">
  <s-stack gap="large-300">
    <s-heading>Product settings</s-heading>
    <s-text>Configure your product inventory and pricing settings.</s-text>
    <s-clickable background="base" padding="base" borderRadius="small">
      <s-text type="strong">Configure settings</s-text>
    </s-clickable>
  </s-stack>
</s-box>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates the use of an accessibility label to provide context for screen readers, enhancing the component's usability for users with assistive technologies.```jsx
<s-clickable
  accessibilityLabel="Delete product winter collection jacket"
  background="base"
  padding="base"
  borderRadius="small"
>
  <s-text>Delete</s-text>
</s-clickable>
```

```html
<s-clickable
  accessibilityLabel="Delete product winter collection jacket"
  background="base"
  padding="base"
  borderRadius="small"
>
  <s-text>Delete</s-text>
</s-clickable>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-clickable
  accessibilityLabel="Delete product winter collection jacket"
  background="base"
  padding="base"
  borderRadius="small"
>
  <s-text>Delete</s-text>
</s-clickable>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows a disabled link with an accessibility label, explaining the unavailability of a feature to users of assistive technologies.```jsx
<s-clickable
  href="javascript:void(0)"
  disabled
  accessibilityLabel="This link is currently unavailable"
>
  <s-text>Unavailable feature</s-text>
</s-clickable>
```

```html
<s-clickable
  href="javascript:void(0)"
  disabled
  accessibilityLabel="This link is currently unavailable"
>
  <s-text>Unavailable feature</s-text>
</s-clickable>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-clickable
  href="javascript:void(0)"
  disabled
  accessibilityLabel="This link is currently unavailable"
>
  <s-text>Unavailable feature</s-text>
</s-clickable>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Slots

### ClickableSlots

### children

value: `HTMLElement`

The content of the Clickable.

## Examples

A generic interactive container component that provides a flexible alternative for custom interactive elements not achievable with existing components like Button or Link. Use it to apply specific styling such as backgrounds, padding, or borders.


### Basic usage

A simple clickable button with a base border and padding, demonstrating the default button behavior of the Clickable component.```jsx
<s-clickable border="base" padding="base">
  Click me
</s-clickable>
```

```html
<s-clickable border="base" padding="base">Click me</s-clickable>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-clickable border="base" padding="base">
  Click me
</s-clickable>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates the Clickable component's ability to function as a link, opening the specified URL in a new browser tab when clicked.```jsx
<s-clickable href="javascript:void(0)" target="_blank">
  Visit Shopify
</s-clickable>
```

```html
<s-clickable href="javascript:void(0)" target="_blank">
  Visit Shopify
</s-clickable>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-clickable href="javascript:void(0)" target="_blank">
  Visit Shopify
</s-clickable>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

A disabled submit button that can be used within a form, showing the component's form integration capabilities and disabled state.```jsx
<s-clickable type="submit" disabled border="base" padding="base">
  Save changes
</s-clickable>
```

```html
<s-clickable type="submit" disabled border="base" padding="base">
  Save changes
</s-clickable>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-clickable type="submit" disabled border="base" padding="base">
  Save changes
</s-clickable>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates how the Clickable component can be integrated into a section layout to provide an interactive action button.```jsx
<s-box padding="large-400" background="base" borderRadius="small-200">
  <s-stack gap="large-300">
    <s-heading>Product settings</s-heading>
    <s-text>Configure your product inventory and pricing settings.</s-text>
    <s-clickable background="base" padding="base" borderRadius="small">
      <s-text type="strong">Configure settings</s-text>
    </s-clickable>
  </s-stack>
</s-box>
```

```html
<s-box padding="large-400" background="base" borderRadius="small-200">
  <s-stack gap="large-300">
    <s-heading>Product settings</s-heading>
    <s-text>Configure your product inventory and pricing settings.</s-text>
    <s-clickable background="base" padding="base" borderRadius="small">
      <s-text type="strong">Configure settings</s-text>
    </s-clickable>
  </s-stack>
</s-box>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-box padding="large-400" background="base" borderRadius="small-200">
  <s-stack gap="large-300">
    <s-heading>Product settings</s-heading>
    <s-text>Configure your product inventory and pricing settings.</s-text>
    <s-clickable background="base" padding="base" borderRadius="small">
      <s-text type="strong">Configure settings</s-text>
    </s-clickable>
  </s-stack>
</s-box>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates the use of an accessibility label to provide context for screen readers, enhancing the component's usability for users with assistive technologies.```jsx
<s-clickable
  accessibilityLabel="Delete product winter collection jacket"
  background="base"
  padding="base"
  borderRadius="small"
>
  <s-text>Delete</s-text>
</s-clickable>
```

```html
<s-clickable
  accessibilityLabel="Delete product winter collection jacket"
  background="base"
  padding="base"
  borderRadius="small"
>
  <s-text>Delete</s-text>
</s-clickable>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-clickable
  accessibilityLabel="Delete product winter collection jacket"
  background="base"
  padding="base"
  borderRadius="small"
>
  <s-text>Delete</s-text>
</s-clickable>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows a disabled link with an accessibility label, explaining the unavailability of a feature to users of assistive technologies.```jsx
<s-clickable
  href="javascript:void(0)"
  disabled
  accessibilityLabel="This link is currently unavailable"
>
  <s-text>Unavailable feature</s-text>
</s-clickable>
```

```html
<s-clickable
  href="javascript:void(0)"
  disabled
  accessibilityLabel="This link is currently unavailable"
>
  <s-text>Unavailable feature</s-text>
</s-clickable>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-clickable
  href="javascript:void(0)"
  disabled
  accessibilityLabel="This link is currently unavailable"
>
  <s-text>Unavailable feature</s-text>
</s-clickable>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Examples

A generic interactive container component that provides a flexible alternative for custom interactive elements not achievable with existing components like Button or Link. Use it to apply specific styling such as backgrounds, padding, or borders.


### Basic usage

A simple clickable button with a base border and padding, demonstrating the default button behavior of the Clickable component.```jsx
<s-clickable border="base" padding="base">
  Click me
</s-clickable>
```

```html
<s-clickable border="base" padding="base">Click me</s-clickable>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-clickable border="base" padding="base">
  Click me
</s-clickable>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates the Clickable component's ability to function as a link, opening the specified URL in a new browser tab when clicked.```jsx
<s-clickable href="javascript:void(0)" target="_blank">
  Visit Shopify
</s-clickable>
```

```html
<s-clickable href="javascript:void(0)" target="_blank">
  Visit Shopify
</s-clickable>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-clickable href="javascript:void(0)" target="_blank">
  Visit Shopify
</s-clickable>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

A disabled submit button that can be used within a form, showing the component's form integration capabilities and disabled state.```jsx
<s-clickable type="submit" disabled border="base" padding="base">
  Save changes
</s-clickable>
```

```html
<s-clickable type="submit" disabled border="base" padding="base">
  Save changes
</s-clickable>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-clickable type="submit" disabled border="base" padding="base">
  Save changes
</s-clickable>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates how the Clickable component can be integrated into a section layout to provide an interactive action button.```jsx
<s-box padding="large-400" background="base" borderRadius="small-200">
  <s-stack gap="large-300">
    <s-heading>Product settings</s-heading>
    <s-text>Configure your product inventory and pricing settings.</s-text>
    <s-clickable background="base" padding="base" borderRadius="small">
      <s-text type="strong">Configure settings</s-text>
    </s-clickable>
  </s-stack>
</s-box>
```

```html
<s-box padding="large-400" background="base" borderRadius="small-200">
  <s-stack gap="large-300">
    <s-heading>Product settings</s-heading>
    <s-text>Configure your product inventory and pricing settings.</s-text>
    <s-clickable background="base" padding="base" borderRadius="small">
      <s-text type="strong">Configure settings</s-text>
    </s-clickable>
  </s-stack>
</s-box>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-box padding="large-400" background="base" borderRadius="small-200">
  <s-stack gap="large-300">
    <s-heading>Product settings</s-heading>
    <s-text>Configure your product inventory and pricing settings.</s-text>
    <s-clickable background="base" padding="base" borderRadius="small">
      <s-text type="strong">Configure settings</s-text>
    </s-clickable>
  </s-stack>
</s-box>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates the use of an accessibility label to provide context for screen readers, enhancing the component's usability for users with assistive technologies.```jsx
<s-clickable
  accessibilityLabel="Delete product winter collection jacket"
  background="base"
  padding="base"
  borderRadius="small"
>
  <s-text>Delete</s-text>
</s-clickable>
```

```html
<s-clickable
  accessibilityLabel="Delete product winter collection jacket"
  background="base"
  padding="base"
  borderRadius="small"
>
  <s-text>Delete</s-text>
</s-clickable>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-clickable
  accessibilityLabel="Delete product winter collection jacket"
  background="base"
  padding="base"
  borderRadius="small"
>
  <s-text>Delete</s-text>
</s-clickable>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows a disabled link with an accessibility label, explaining the unavailability of a feature to users of assistive technologies.```jsx
<s-clickable
  href="javascript:void(0)"
  disabled
  accessibilityLabel="This link is currently unavailable"
>
  <s-text>Unavailable feature</s-text>
</s-clickable>
```

```html
<s-clickable
  href="javascript:void(0)"
  disabled
  accessibilityLabel="This link is currently unavailable"
>
  <s-text>Unavailable feature</s-text>
</s-clickable>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-clickable
  href="javascript:void(0)"
  disabled
  accessibilityLabel="This link is currently unavailable"
>
  <s-text>Unavailable feature</s-text>
</s-clickable>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

