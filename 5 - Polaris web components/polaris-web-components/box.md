# Box

A generic container that provides a flexible alternative for custom designs not achievable with existing components. Use it to apply styling such as backgrounds, padding, or borders, or to nest and group other components. The contents of Box always maintain their natural size, making it especially useful within layout components that would otherwise stretch their children.

```jsx
<>
  <s-box padding="base">Available for iPad, iPhone, and Android.</s-box>

  <s-box padding="base" background="subdued" border="base" borderRadius="base">
    Available for iPad, iPhone, and Android.
  </s-box>
</>
```

```html
<s-box padding="base">Available for iPad, iPhone, and Android.</s-box>

<s-box padding="base" background="subdued" border="base" borderRadius="base">
  Available for iPad, iPhone, and Android.
</s-box>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<>
  <s-box padding="base">Available for iPad, iPhone, and Android.</s-box>

  <s-box padding="base" background="subdued" border="base" borderRadius="base">
    Available for iPad, iPhone, and Android.
  </s-box>
</>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Properties

### Box

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

  - Box: declare class Box extends BoxElement implements BoxProps {
  constructor();
}
  - MaybeAllValuesShorthandProperty: T | `${T} ${T}` | `${T} ${T} ${T}` | `${T} ${T} ${T} ${T}`
  - BoxBorderRadii: 'small' | 'small-200' | 'small-100' | 'base' | 'large' | 'large-100' | 'large-200' | 'none'
Adjust the radius of the border.

### borderStyle

value: `"" | MaybeAllValuesShorthandProperty<BoxBorderStyles>`

  - Box: declare class Box extends BoxElement implements BoxProps {
  constructor();
}
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

### connectedCallback

value: `() => void`


### disconnectedCallback

value: `() => void`


### display

value: `MaybeResponsive<"auto" | "none">`

  - MaybeResponsive: T | `@container${string}`
Sets the outer [display](https://developer.mozilla.org/en-US/docs/Web/CSS/display) type of the component. The outer type sets a component's participation in [flow layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flow_layout).

- `auto` the component's initial value. The actual value depends on the component and context.
- `none` hides the component from display and removes it from the accessibility tree, making it invisible to screen readers.

### inlineSize

value: `SizeUnitsOrAuto`

  - SizeUnitsOrAuto: SizeUnits | 'auto'
  - SizeUnits: `${number}px` | `${number}%` | `0`
Adjust the [inline size](https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size).

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

A generic container that provides a flexible alternative for custom designs not achievable with existing components. Use it to apply styling such as backgrounds, padding, or borders, or to nest and group other components. The contents of Box always maintain their natural size, making it especially useful within layout components that would otherwise stretch their children.


### Basic usage

Demonstrates creating a simple container with padding, base background, border, and rounded corners to group and highlight product information.```jsx
<s-box
  padding="base"
  background="base"
  borderWidth="base"
  borderColor="base"
  borderRadius="base"
>
  <s-paragraph>Product information</s-paragraph>
</s-box>

```

```html
<s-box
  padding="base"
  background="base"
  borderWidth="base"
  borderColor="base"
  borderRadius="base"
>
  <s-paragraph>Product information</s-paragraph>
</s-box>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-box
  padding="base"
  background="base"
  borderWidth="base"
  borderColor="base"
  borderRadius="base"
>
  <s-paragraph>Product information</s-paragraph>
</s-box>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates using a box with responsive padding to create an adaptable container for shipping information that can adjust to different screen or container sizes.```jsx
<s-query-container>
  <s-box
    padding="@container (inline-size > 400px) base, large-200"
    background="base"
    borderWidth="base"
    borderColor="base"
  >
    <s-text>Your order will be processed within 2-3 business days</s-text>
  </s-box>
</s-query-container>
```

```html
<s-query-container>
  <s-box
    padding="@container (inline-size > 400px) base, large-200"
    background="base"
    borderWidth="base"
    borderColor="base"
  >
    <s-paragraph>Your order will be processed within 2-3 business days</s-paragraph>
  </s-box>
</s-query-container>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base", inlineSize="100%" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-query-container>
  <s-box
    padding="@container (inline-size > 400px) base, large-200"
    background="base"
    borderWidth="base"
    borderColor="base"
  >
    <s-text>Your order will be processed within 2-3 business days</s-text>
  </s-box>
</s-query-container>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how to use boxes with ARIA roles and visibility controls to create semantic, screen-reader-friendly status and informational messages.```jsx
<s-stack gap="base">
  <s-box
    accessibilityRole="status"
    padding="base"
    background="strong"
    borderRadius="base"
  >
    <s-paragraph>Payment failed</s-paragraph>
  </s-box>

  <s-box accessibilityVisibility="exclusive">
    <s-paragraph>Price includes tax and shipping</s-paragraph>
  </s-box>
</s-stack>

```

```html
<s-stack gap="base">
  <s-box
    accessibilityRole="status"
    padding="base"
    background="strong"
    borderRadius="base"
  >
    <s-paragraph>Payment failed</s-paragraph>
  </s-box>

  <s-box accessibilityVisibility="exclusive">
    <s-paragraph>Price includes tax and shipping</s-paragraph>
  </s-box>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-box
    accessibilityRole="status"
    padding="base"
    background="strong"
    borderRadius="base"
  >
    <s-paragraph>Payment failed</s-paragraph>
  </s-box>

  <s-box accessibilityVisibility="exclusive">
    <s-paragraph>Price includes tax and shipping</s-paragraph>
  </s-box>
</s-stack>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates creating nested, hierarchical layouts using multiple boxes, showing how boxes can be combined to organize related content sections with different styling.```jsx
<s-stack gap="base">
  {/* Inventory status section */}
  <s-box
    padding="base"
    background="base"
    borderRadius="base"
    borderWidth="base"
    borderColor="base"
  >
    <s-stack gap="base">
      <s-box padding="small-100" background="subdued" borderRadius="small">
        <s-paragraph>In stock: 45 units</s-paragraph>
      </s-box>
      <s-box padding="small-100" background="subdued" borderRadius="small">
        <s-paragraph>Low stock alert: 5 units</s-paragraph>
      </s-box>
    </s-stack>
  </s-box>

  {/* Product information section */}
  <s-box
    padding="base"
    background="base"
    borderRadius="base"
    borderWidth="base"
    borderColor="base"
  >
    <s-stack gap="base">
      <s-heading>Product sales</s-heading>
      <s-paragraph color="subdued">No recent sales of this product</s-paragraph>
      <s-link>View details</s-link>
    </s-stack>
  </s-box>
</s-stack>

```

```html
<s-stack gap="base">
  <!-- Inventory status section -->
  <s-box
    padding="base"
    background="base"
    borderRadius="base"
    borderWidth="base"
    borderColor="base"
  >
    <s-stack gap="base">
      <s-box padding="small-100" background="subdued" borderRadius="small">
        <s-paragraph>In stock: 45 units</s-paragraph>
      </s-box>
      <s-box padding="small-100" background="subdued" borderRadius="small">
        <s-paragraph>Low stock alert: 5 units</s-paragraph>
      </s-box>
    </s-stack>
  </s-box>

  <!-- Product information section -->
  <s-box
    padding="base"
    background="base"
    borderRadius="base"
    borderWidth="base"
    borderColor="base"
  >
    <s-stack gap="base">
      <s-heading>Product sales</s-heading>
      <s-paragraph color="subdued">No recent sales of this product</s-paragraph>
      <s-link>View details</s-link>
    </s-stack>
  </s-box>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base", inlineSize="100%" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  {/* Inventory status section */}
  <s-box
    padding="base"
    background="base"
    borderRadius="base"
    borderWidth="base"
    borderColor="base"
  >
    <s-stack gap="base">
      <s-box padding="small-100" background="subdued" borderRadius="small">
        <s-paragraph>In stock: 45 units</s-paragraph>
      </s-box>
      <s-box padding="small-100" background="subdued" borderRadius="small">
        <s-paragraph>Low stock alert: 5 units</s-paragraph>
      </s-box>
    </s-stack>
  </s-box>

  {/* Product information section */}
  <s-box
    padding="base"
    background="base"
    borderRadius="base"
    borderWidth="base"
    borderColor="base"
  >
    <s-stack gap="base">
      <s-heading>Product sales</s-heading>
      <s-paragraph color="subdued">No recent sales of this product</s-paragraph>
      <s-link>View details</s-link>
    </s-stack>
  </s-box>
</s-stack>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Slots

### BoxSlots

### children

value: `HTMLElement`

The content of the Box.

## Examples

A generic container that provides a flexible alternative for custom designs not achievable with existing components. Use it to apply styling such as backgrounds, padding, or borders, or to nest and group other components. The contents of Box always maintain their natural size, making it especially useful within layout components that would otherwise stretch their children.


### Basic usage

Demonstrates creating a simple container with padding, base background, border, and rounded corners to group and highlight product information.```jsx
<s-box
  padding="base"
  background="base"
  borderWidth="base"
  borderColor="base"
  borderRadius="base"
>
  <s-paragraph>Product information</s-paragraph>
</s-box>

```

```html
<s-box
  padding="base"
  background="base"
  borderWidth="base"
  borderColor="base"
  borderRadius="base"
>
  <s-paragraph>Product information</s-paragraph>
</s-box>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-box
  padding="base"
  background="base"
  borderWidth="base"
  borderColor="base"
  borderRadius="base"
>
  <s-paragraph>Product information</s-paragraph>
</s-box>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates using a box with responsive padding to create an adaptable container for shipping information that can adjust to different screen or container sizes.```jsx
<s-query-container>
  <s-box
    padding="@container (inline-size > 400px) base, large-200"
    background="base"
    borderWidth="base"
    borderColor="base"
  >
    <s-text>Your order will be processed within 2-3 business days</s-text>
  </s-box>
</s-query-container>
```

```html
<s-query-container>
  <s-box
    padding="@container (inline-size > 400px) base, large-200"
    background="base"
    borderWidth="base"
    borderColor="base"
  >
    <s-paragraph>Your order will be processed within 2-3 business days</s-paragraph>
  </s-box>
</s-query-container>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base", inlineSize="100%" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-query-container>
  <s-box
    padding="@container (inline-size > 400px) base, large-200"
    background="base"
    borderWidth="base"
    borderColor="base"
  >
    <s-text>Your order will be processed within 2-3 business days</s-text>
  </s-box>
</s-query-container>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how to use boxes with ARIA roles and visibility controls to create semantic, screen-reader-friendly status and informational messages.```jsx
<s-stack gap="base">
  <s-box
    accessibilityRole="status"
    padding="base"
    background="strong"
    borderRadius="base"
  >
    <s-paragraph>Payment failed</s-paragraph>
  </s-box>

  <s-box accessibilityVisibility="exclusive">
    <s-paragraph>Price includes tax and shipping</s-paragraph>
  </s-box>
</s-stack>

```

```html
<s-stack gap="base">
  <s-box
    accessibilityRole="status"
    padding="base"
    background="strong"
    borderRadius="base"
  >
    <s-paragraph>Payment failed</s-paragraph>
  </s-box>

  <s-box accessibilityVisibility="exclusive">
    <s-paragraph>Price includes tax and shipping</s-paragraph>
  </s-box>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-box
    accessibilityRole="status"
    padding="base"
    background="strong"
    borderRadius="base"
  >
    <s-paragraph>Payment failed</s-paragraph>
  </s-box>

  <s-box accessibilityVisibility="exclusive">
    <s-paragraph>Price includes tax and shipping</s-paragraph>
  </s-box>
</s-stack>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates creating nested, hierarchical layouts using multiple boxes, showing how boxes can be combined to organize related content sections with different styling.```jsx
<s-stack gap="base">
  {/* Inventory status section */}
  <s-box
    padding="base"
    background="base"
    borderRadius="base"
    borderWidth="base"
    borderColor="base"
  >
    <s-stack gap="base">
      <s-box padding="small-100" background="subdued" borderRadius="small">
        <s-paragraph>In stock: 45 units</s-paragraph>
      </s-box>
      <s-box padding="small-100" background="subdued" borderRadius="small">
        <s-paragraph>Low stock alert: 5 units</s-paragraph>
      </s-box>
    </s-stack>
  </s-box>

  {/* Product information section */}
  <s-box
    padding="base"
    background="base"
    borderRadius="base"
    borderWidth="base"
    borderColor="base"
  >
    <s-stack gap="base">
      <s-heading>Product sales</s-heading>
      <s-paragraph color="subdued">No recent sales of this product</s-paragraph>
      <s-link>View details</s-link>
    </s-stack>
  </s-box>
</s-stack>

```

```html
<s-stack gap="base">
  <!-- Inventory status section -->
  <s-box
    padding="base"
    background="base"
    borderRadius="base"
    borderWidth="base"
    borderColor="base"
  >
    <s-stack gap="base">
      <s-box padding="small-100" background="subdued" borderRadius="small">
        <s-paragraph>In stock: 45 units</s-paragraph>
      </s-box>
      <s-box padding="small-100" background="subdued" borderRadius="small">
        <s-paragraph>Low stock alert: 5 units</s-paragraph>
      </s-box>
    </s-stack>
  </s-box>

  <!-- Product information section -->
  <s-box
    padding="base"
    background="base"
    borderRadius="base"
    borderWidth="base"
    borderColor="base"
  >
    <s-stack gap="base">
      <s-heading>Product sales</s-heading>
      <s-paragraph color="subdued">No recent sales of this product</s-paragraph>
      <s-link>View details</s-link>
    </s-stack>
  </s-box>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base", inlineSize="100%" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  {/* Inventory status section */}
  <s-box
    padding="base"
    background="base"
    borderRadius="base"
    borderWidth="base"
    borderColor="base"
  >
    <s-stack gap="base">
      <s-box padding="small-100" background="subdued" borderRadius="small">
        <s-paragraph>In stock: 45 units</s-paragraph>
      </s-box>
      <s-box padding="small-100" background="subdued" borderRadius="small">
        <s-paragraph>Low stock alert: 5 units</s-paragraph>
      </s-box>
    </s-stack>
  </s-box>

  {/* Product information section */}
  <s-box
    padding="base"
    background="base"
    borderRadius="base"
    borderWidth="base"
    borderColor="base"
  >
    <s-stack gap="base">
      <s-heading>Product sales</s-heading>
      <s-paragraph color="subdued">No recent sales of this product</s-paragraph>
      <s-link>View details</s-link>
    </s-stack>
  </s-box>
</s-stack>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Examples

A generic container that provides a flexible alternative for custom designs not achievable with existing components. Use it to apply styling such as backgrounds, padding, or borders, or to nest and group other components. The contents of Box always maintain their natural size, making it especially useful within layout components that would otherwise stretch their children.


### Basic usage

Demonstrates creating a simple container with padding, base background, border, and rounded corners to group and highlight product information.```jsx
<s-box
  padding="base"
  background="base"
  borderWidth="base"
  borderColor="base"
  borderRadius="base"
>
  <s-paragraph>Product information</s-paragraph>
</s-box>

```

```html
<s-box
  padding="base"
  background="base"
  borderWidth="base"
  borderColor="base"
  borderRadius="base"
>
  <s-paragraph>Product information</s-paragraph>
</s-box>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-box
  padding="base"
  background="base"
  borderWidth="base"
  borderColor="base"
  borderRadius="base"
>
  <s-paragraph>Product information</s-paragraph>
</s-box>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates using a box with responsive padding to create an adaptable container for shipping information that can adjust to different screen or container sizes.```jsx
<s-query-container>
  <s-box
    padding="@container (inline-size > 400px) base, large-200"
    background="base"
    borderWidth="base"
    borderColor="base"
  >
    <s-text>Your order will be processed within 2-3 business days</s-text>
  </s-box>
</s-query-container>
```

```html
<s-query-container>
  <s-box
    padding="@container (inline-size > 400px) base, large-200"
    background="base"
    borderWidth="base"
    borderColor="base"
  >
    <s-paragraph>Your order will be processed within 2-3 business days</s-paragraph>
  </s-box>
</s-query-container>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base", inlineSize="100%" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-query-container>
  <s-box
    padding="@container (inline-size > 400px) base, large-200"
    background="base"
    borderWidth="base"
    borderColor="base"
  >
    <s-text>Your order will be processed within 2-3 business days</s-text>
  </s-box>
</s-query-container>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how to use boxes with ARIA roles and visibility controls to create semantic, screen-reader-friendly status and informational messages.```jsx
<s-stack gap="base">
  <s-box
    accessibilityRole="status"
    padding="base"
    background="strong"
    borderRadius="base"
  >
    <s-paragraph>Payment failed</s-paragraph>
  </s-box>

  <s-box accessibilityVisibility="exclusive">
    <s-paragraph>Price includes tax and shipping</s-paragraph>
  </s-box>
</s-stack>

```

```html
<s-stack gap="base">
  <s-box
    accessibilityRole="status"
    padding="base"
    background="strong"
    borderRadius="base"
  >
    <s-paragraph>Payment failed</s-paragraph>
  </s-box>

  <s-box accessibilityVisibility="exclusive">
    <s-paragraph>Price includes tax and shipping</s-paragraph>
  </s-box>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-box
    accessibilityRole="status"
    padding="base"
    background="strong"
    borderRadius="base"
  >
    <s-paragraph>Payment failed</s-paragraph>
  </s-box>

  <s-box accessibilityVisibility="exclusive">
    <s-paragraph>Price includes tax and shipping</s-paragraph>
  </s-box>
</s-stack>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates creating nested, hierarchical layouts using multiple boxes, showing how boxes can be combined to organize related content sections with different styling.```jsx
<s-stack gap="base">
  {/* Inventory status section */}
  <s-box
    padding="base"
    background="base"
    borderRadius="base"
    borderWidth="base"
    borderColor="base"
  >
    <s-stack gap="base">
      <s-box padding="small-100" background="subdued" borderRadius="small">
        <s-paragraph>In stock: 45 units</s-paragraph>
      </s-box>
      <s-box padding="small-100" background="subdued" borderRadius="small">
        <s-paragraph>Low stock alert: 5 units</s-paragraph>
      </s-box>
    </s-stack>
  </s-box>

  {/* Product information section */}
  <s-box
    padding="base"
    background="base"
    borderRadius="base"
    borderWidth="base"
    borderColor="base"
  >
    <s-stack gap="base">
      <s-heading>Product sales</s-heading>
      <s-paragraph color="subdued">No recent sales of this product</s-paragraph>
      <s-link>View details</s-link>
    </s-stack>
  </s-box>
</s-stack>

```

```html
<s-stack gap="base">
  <!-- Inventory status section -->
  <s-box
    padding="base"
    background="base"
    borderRadius="base"
    borderWidth="base"
    borderColor="base"
  >
    <s-stack gap="base">
      <s-box padding="small-100" background="subdued" borderRadius="small">
        <s-paragraph>In stock: 45 units</s-paragraph>
      </s-box>
      <s-box padding="small-100" background="subdued" borderRadius="small">
        <s-paragraph>Low stock alert: 5 units</s-paragraph>
      </s-box>
    </s-stack>
  </s-box>

  <!-- Product information section -->
  <s-box
    padding="base"
    background="base"
    borderRadius="base"
    borderWidth="base"
    borderColor="base"
  >
    <s-stack gap="base">
      <s-heading>Product sales</s-heading>
      <s-paragraph color="subdued">No recent sales of this product</s-paragraph>
      <s-link>View details</s-link>
    </s-stack>
  </s-box>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base", inlineSize="100%" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  {/* Inventory status section */}
  <s-box
    padding="base"
    background="base"
    borderRadius="base"
    borderWidth="base"
    borderColor="base"
  >
    <s-stack gap="base">
      <s-box padding="small-100" background="subdued" borderRadius="small">
        <s-paragraph>In stock: 45 units</s-paragraph>
      </s-box>
      <s-box padding="small-100" background="subdued" borderRadius="small">
        <s-paragraph>Low stock alert: 5 units</s-paragraph>
      </s-box>
    </s-stack>
  </s-box>

  {/* Product information section */}
  <s-box
    padding="base"
    background="base"
    borderRadius="base"
    borderWidth="base"
    borderColor="base"
  >
    <s-stack gap="base">
      <s-heading>Product sales</s-heading>
      <s-paragraph color="subdued">No recent sales of this product</s-paragraph>
      <s-link>View details</s-link>
    </s-stack>
  </s-box>
</s-stack>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

