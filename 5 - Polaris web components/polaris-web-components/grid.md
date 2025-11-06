# Grid

Use `s-grid` to organize your content in a matrix of rows and columns and make responsive layouts for pages. Grid follows the same pattern as the [CSS grid layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout).

```jsx
<s-grid
  gridTemplateColumns="repeat(2, 1fr)"
  gap="small"
  justifyContent="center"
>
  <s-grid-item gridColumn="span 2" border="base" borderStyle="dashed">
    Summary of sales
  </s-grid-item>
  <s-grid-item gridColumn="span 1" border="base" borderStyle="dashed">
    Orders
  </s-grid-item>
  <s-grid-item gridColumn="auto" border="base" borderStyle="dashed">
    Customers
  </s-grid-item>
</s-grid>
```

```html
<s-grid
  gridTemplateColumns="repeat(2, 1fr)"
  gap="small"
  justifyContent="center"
>
  <s-grid-item gridColumn="span 2" border="base" borderStyle="dashed">
    Summary of sales
  </s-grid-item>
  <s-grid-item gridColumn="span 1" border="base" borderStyle="dashed">
    Orders
  </s-grid-item>
  <s-grid-item gridColumn="auto" border="base" borderStyle="dashed">
    Customers
  </s-grid-item>
</s-grid>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-grid
  gridTemplateColumns="repeat(2, 1fr)"
  gap="small"
  justifyContent="center"
>
  <s-grid-item gridColumn="span 2" border="base" borderStyle="dashed">
    Summary of sales
  </s-grid-item>
  <s-grid-item gridColumn="span 1" border="base" borderStyle="dashed">
    Orders
  </s-grid-item>
  <s-grid-item gridColumn="auto" border="base" borderStyle="dashed">
    Customers
  </s-grid-item>
</s-grid>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Properties

### Grid

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


### alignContent

value: `"" | AlignContentKeyword`

  - AlignContentKeyword: 'normal' | BaselinePosition | ContentDistribution | OverflowPosition | ContentPosition
Aligns the grid along the block axis.

This overrides the block value of `placeContent`.

### alignItems

value: `"" | AlignItemsKeyword`

  - AlignItemsKeyword: 'normal' | 'stretch' | BaselinePosition | OverflowPosition | ContentPosition
Aligns the grid items along the block axis.

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

### columnGap

value: `MaybeResponsive<"" | SpacingKeyword>`

  - MaybeResponsive: T | `@container${string}`
  - SpacingKeyword: SizeKeyword | 'none'
Adjust spacing between elements in the inline axis.

This overrides the column value of `gap`. `columnGap` either accepts:
- a single [SpacingKeyword](https://shopify.dev/docs/api/app-home/using-polaris-components#scale) value (e.g. `large-100`)
- OR a [responsive value](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported SpacingKeyword as a query value.

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

### gap

value: `MaybeResponsive<MaybeTwoValuesShorthandProperty<SpacingKeyword>>`

  - MaybeResponsive: T | `@container${string}`
  - MaybeTwoValuesShorthandProperty: T | `${T} ${T}`
  - SpacingKeyword: SizeKeyword | 'none'
Adjust spacing between elements.

`gap` can either accept:
- a single [SpacingKeyword](https://shopify.dev/docs/api/app-home/using-polaris-components#scale) value applied to both axes (e.g. `large-100`)
- OR a pair of values (eg `large-100 large-500`) can be used to set the inline and block axes respectively
- OR a [responsive value](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported SpacingKeyword as a query value.

### gridTemplateColumns

value: `string`

Define columns and specify their size. `gridTemplateColumns` either accepts:
- [track sizing values](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#fixed_and_flexible_track_sizes) (e.g. `1fr auto`)
- OR [responsive values](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported track sizing values as a query value.

### gridTemplateRows

value: `string`

Define rows and specify their size. `gridTemplateRows` either accepts:
- [track sizing values](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#fixed_and_flexible_track_sizes) (e.g. `1fr auto`)
- OR [responsive values](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported track sizing values as a query value.

### inlineSize

value: `SizeUnitsOrAuto`

  - SizeUnitsOrAuto: SizeUnits | 'auto'
  - SizeUnits: `${number}px` | `${number}%` | `0`
Adjust the [inline size](https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size).

### justifyContent

value: `"" | JustifyContentKeyword`

  - JustifyContentKeyword: 'normal' | ContentDistribution | OverflowPosition | ContentPosition
Aligns the grid along the inline axis.

This overrides the inline value of `placeContent`.

### justifyItems

value: `"" | JustifyItemsKeyword`

  - JustifyItemsKeyword: 'normal' | 'stretch' | BaselinePosition | OverflowPosition | ContentPosition
Aligns the grid items along the inline axis.

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
  - MaybeTwoValuesShorthandProperty: T | `${T} ${T}`
  - PaddingKeyword: SizeKeyword | 'none'
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
  - MaybeTwoValuesShorthandProperty: T | `${T} ${T}`
  - PaddingKeyword: SizeKeyword | 'none'
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

### placeContent

value: `"normal normal" | "normal stretch" | "normal start" | "normal end" | "normal center" | "normal unsafe start" | "normal unsafe end" | "normal unsafe center" | "normal safe start" | "normal safe end" | "normal safe center" | "stretch normal" | "stretch stretch" | "stretch start" | "stretch end" | "stretch center" | "stretch unsafe start" | "stretch unsafe end" | "stretch unsafe center" | "stretch safe start" | "stretch safe end" | "stretch safe center" | "baseline normal" | "baseline stretch" | "baseline start" | "baseline end" | "baseline center" | "baseline unsafe start" | "baseline unsafe end" | "baseline unsafe center" | "baseline safe start" | "baseline safe end" | "baseline safe center" | "first baseline normal" | "first baseline stretch" | "first baseline start" | "first baseline end" | "first baseline center" | "first baseline unsafe start" | "first baseline unsafe end" | "first baseline unsafe center" | "first baseline safe start" | "first baseline safe end" | "first baseline safe center" | "last baseline normal" | "last baseline stretch" | "last baseline start" | "last baseline end" | "last baseline center" | "last baseline unsafe start" | "last baseline unsafe end" | "last baseline unsafe center" | "last baseline safe start" | "last baseline safe end" | "last baseline safe center" | "start normal" | "start stretch" | "start start" | "start end" | "start center" | "start unsafe start" | "start unsafe end" | "start unsafe center" | "start safe start" | "start safe end" | "start safe center" | "end normal" | "end stretch" | "end start" | "end end" | "end center" | "end unsafe start" | "end unsafe end" | "end unsafe center" | "end safe start" | "end safe end" | "end safe center" | "center normal" | "center stretch" | "center start" | "center end" | "center center" | "center unsafe start" | "center unsafe end" | "center unsafe center" | "center safe start" | "center safe end" | "center safe center" | "unsafe start normal" | "unsafe start stretch" | "unsafe start start" | "unsafe start end" | "unsafe start center" | "unsafe start unsafe start" | "unsafe start unsafe end" | "unsafe start unsafe center" | "unsafe start safe start" | "unsafe start safe end" | "unsafe start safe center" | "unsafe end normal" | "unsafe end stretch" | "unsafe end start" | "unsafe end end" | "unsafe end center" | "unsafe end unsafe start" | "unsafe end unsafe end" | "unsafe end unsafe center" | "unsafe end safe start" | "unsafe end safe end" | "unsafe end safe center" | "unsafe center normal" | "unsafe center stretch" | "unsafe center start" | "unsafe center end" | "unsafe center center" | "unsafe center unsafe start" | "unsafe center unsafe end" | "unsafe center unsafe center" | "unsafe center safe start" | "unsafe center safe end" | "unsafe center safe center" | "safe start normal" | "safe start stretch" | "safe start start" | "safe start end" | "safe start center" | "safe start unsafe start" | "safe start unsafe end" | "safe start unsafe center" | "safe start safe start" | "safe start safe end" | "safe start safe center" | "safe end normal" | "safe end stretch" | "safe end start" | "safe end end" | "safe end center" | "safe end unsafe start" | "safe end unsafe end" | "safe end unsafe center" | "safe end safe start" | "safe end safe end" | "safe end safe center" | "safe center normal" | "safe center stretch" | "safe center start" | "safe center end" | "safe center center" | "safe center unsafe start" | "safe center unsafe end" | "safe center unsafe center" | "safe center safe start" | "safe center safe end" | "safe center safe center" | AlignContentKeyword | "normal space-between" | "normal space-around" | "normal space-evenly" | "baseline space-between" | "baseline space-around" | "baseline space-evenly" | "first baseline space-between" | "first baseline space-around" | "first baseline space-evenly" | "last baseline space-between" | "last baseline space-around" | "last baseline space-evenly" | "start space-between" | "start space-around" | "start space-evenly" | "end space-between" | "end space-around" | "end space-evenly" | "center space-between" | "center space-around" | "center space-evenly" | "unsafe start space-between" | "unsafe start space-around" | "unsafe start space-evenly" | "unsafe end space-between" | "unsafe end space-around" | "unsafe end space-evenly" | "unsafe center space-between" | "unsafe center space-around" | "unsafe center space-evenly" | "safe start space-between" | "safe start space-around" | "safe start space-evenly" | "safe end space-between" | "safe end space-around" | "safe end space-evenly" | "safe center space-between" | "safe center space-around" | "safe center space-evenly" | "stretch space-between" | "stretch space-around" | "stretch space-evenly" | "space-between normal" | "space-between start" | "space-between end" | "space-between center" | "space-between unsafe start" | "space-between unsafe end" | "space-between unsafe center" | "space-between safe start" | "space-between safe end" | "space-between safe center" | "space-between stretch" | "space-between space-between" | "space-between space-around" | "space-between space-evenly" | "space-around normal" | "space-around start" | "space-around end" | "space-around center" | "space-around unsafe start" | "space-around unsafe end" | "space-around unsafe center" | "space-around safe start" | "space-around safe end" | "space-around safe center" | "space-around stretch" | "space-around space-between" | "space-around space-around" | "space-around space-evenly" | "space-evenly normal" | "space-evenly start" | "space-evenly end" | "space-evenly center" | "space-evenly unsafe start" | "space-evenly unsafe end" | "space-evenly unsafe center" | "space-evenly safe start" | "space-evenly safe end" | "space-evenly safe center" | "space-evenly stretch" | "space-evenly space-between" | "space-evenly space-around" | "space-evenly space-evenly"`

  - AlignContentKeyword: 'normal' | BaselinePosition | ContentDistribution | OverflowPosition | ContentPosition
A shorthand property for `justify-content` and `align-content`.

### placeItems

value: `AlignItemsKeyword | "normal normal" | "normal stretch" | "normal baseline" | "normal first baseline" | "normal last baseline" | "normal start" | "normal end" | "normal center" | "normal unsafe start" | "normal unsafe end" | "normal unsafe center" | "normal safe start" | "normal safe end" | "normal safe center" | "stretch normal" | "stretch stretch" | "stretch baseline" | "stretch first baseline" | "stretch last baseline" | "stretch start" | "stretch end" | "stretch center" | "stretch unsafe start" | "stretch unsafe end" | "stretch unsafe center" | "stretch safe start" | "stretch safe end" | "stretch safe center" | "baseline normal" | "baseline stretch" | "baseline baseline" | "baseline first baseline" | "baseline last baseline" | "baseline start" | "baseline end" | "baseline center" | "baseline unsafe start" | "baseline unsafe end" | "baseline unsafe center" | "baseline safe start" | "baseline safe end" | "baseline safe center" | "first baseline normal" | "first baseline stretch" | "first baseline baseline" | "first baseline first baseline" | "first baseline last baseline" | "first baseline start" | "first baseline end" | "first baseline center" | "first baseline unsafe start" | "first baseline unsafe end" | "first baseline unsafe center" | "first baseline safe start" | "first baseline safe end" | "first baseline safe center" | "last baseline normal" | "last baseline stretch" | "last baseline baseline" | "last baseline first baseline" | "last baseline last baseline" | "last baseline start" | "last baseline end" | "last baseline center" | "last baseline unsafe start" | "last baseline unsafe end" | "last baseline unsafe center" | "last baseline safe start" | "last baseline safe end" | "last baseline safe center" | "start normal" | "start stretch" | "start baseline" | "start first baseline" | "start last baseline" | "start start" | "start end" | "start center" | "start unsafe start" | "start unsafe end" | "start unsafe center" | "start safe start" | "start safe end" | "start safe center" | "end normal" | "end stretch" | "end baseline" | "end first baseline" | "end last baseline" | "end start" | "end end" | "end center" | "end unsafe start" | "end unsafe end" | "end unsafe center" | "end safe start" | "end safe end" | "end safe center" | "center normal" | "center stretch" | "center baseline" | "center first baseline" | "center last baseline" | "center start" | "center end" | "center center" | "center unsafe start" | "center unsafe end" | "center unsafe center" | "center safe start" | "center safe end" | "center safe center" | "unsafe start normal" | "unsafe start stretch" | "unsafe start baseline" | "unsafe start first baseline" | "unsafe start last baseline" | "unsafe start start" | "unsafe start end" | "unsafe start center" | "unsafe start unsafe start" | "unsafe start unsafe end" | "unsafe start unsafe center" | "unsafe start safe start" | "unsafe start safe end" | "unsafe start safe center" | "unsafe end normal" | "unsafe end stretch" | "unsafe end baseline" | "unsafe end first baseline" | "unsafe end last baseline" | "unsafe end start" | "unsafe end end" | "unsafe end center" | "unsafe end unsafe start" | "unsafe end unsafe end" | "unsafe end unsafe center" | "unsafe end safe start" | "unsafe end safe end" | "unsafe end safe center" | "unsafe center normal" | "unsafe center stretch" | "unsafe center baseline" | "unsafe center first baseline" | "unsafe center last baseline" | "unsafe center start" | "unsafe center end" | "unsafe center center" | "unsafe center unsafe start" | "unsafe center unsafe end" | "unsafe center unsafe center" | "unsafe center safe start" | "unsafe center safe end" | "unsafe center safe center" | "safe start normal" | "safe start stretch" | "safe start baseline" | "safe start first baseline" | "safe start last baseline" | "safe start start" | "safe start end" | "safe start center" | "safe start unsafe start" | "safe start unsafe end" | "safe start unsafe center" | "safe start safe start" | "safe start safe end" | "safe start safe center" | "safe end normal" | "safe end stretch" | "safe end baseline" | "safe end first baseline" | "safe end last baseline" | "safe end start" | "safe end end" | "safe end center" | "safe end unsafe start" | "safe end unsafe end" | "safe end unsafe center" | "safe end safe start" | "safe end safe end" | "safe end safe center" | "safe center normal" | "safe center stretch" | "safe center baseline" | "safe center first baseline" | "safe center last baseline" | "safe center start" | "safe center end" | "safe center center" | "safe center unsafe start" | "safe center unsafe end" | "safe center unsafe center" | "safe center safe start" | "safe center safe end" | "safe center safe center"`

  - AlignItemsKeyword: 'normal' | 'stretch' | BaselinePosition | OverflowPosition | ContentPosition
A shorthand property for `justify-items` and `align-items`.

### queueRender

value: `() => void`

Queue a run of the render function. You shouldn't need to call this manually - it should be handled by changes to

### rowGap

value: `MaybeResponsive<"" | SpacingKeyword>`

  - MaybeResponsive: T | `@container${string}`
  - SpacingKeyword: SizeKeyword | 'none'
Adjust spacing between elements in the block axis.

This overrides the row value of `gap`. `rowGap` either accepts:
- a single [SpacingKeyword](https://shopify.dev/docs/api/app-home/using-polaris-components#scale) value (e.g. `large-100`)
- OR a [responsive value](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported SpacingKeyword as a query value.

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

Use `s-grid` to organize your content in a matrix of rows and columns and make responsive layouts for pages. Grid follows the same pattern as the [CSS grid layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout).


### Basic usage

Simple 12-column grid system with equal-width left and right columns.```jsx
<s-grid gridTemplateColumns="repeat(12, 1fr)" gap="base">
  <s-grid-item gridColumn="span 6" gridRow="span 1">
    <s-section>
      <s-text>Left column</s-text>
    </s-section>
  </s-grid-item>
  <s-grid-item gridColumn="span 6" gridRow="span 1">
    <s-section>
      <s-text>Right column</s-text>
    </s-section>
  </s-grid-item>
</s-grid>

```

```html
<s-grid gridTemplateColumns="repeat(12, 1fr)" gap="base">
  <s-grid-item gridColumn="span 6" gridRow="span 1">
    <s-section>
      <s-text>Left column</s-text>
    </s-section>
  </s-grid-item>
  <s-grid-item gridColumn="span 6" gridRow="span 1">
    <s-section>
      <s-text>Right column</s-text>
    </s-section>
  </s-grid-item>
</s-grid>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-grid gridTemplateColumns="repeat(12, 1fr)" gap="base">
  <s-grid-item gridColumn="span 6" gridRow="span 1">
    <s-section>
      <s-text>Left column</s-text>
    </s-section>
  </s-grid-item>
  <s-grid-item gridColumn="span 6" gridRow="span 1">
    <s-section>
      <s-text>Right column</s-text>
    </s-section>
  </s-grid-item>
</s-grid>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Grid layout with full-width, half-width, and third-width column arrangements.```jsx
<s-stack gap="base">
  <s-grid gridTemplateColumns="repeat(12, 1fr)" gap="base">
    <s-grid-item gridColumn="span 12" gridRow="span 1">
      <s-section>
        <s-text>Full width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 6" gridRow="span 2">
      <s-section>
        <s-text>Half width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 6" gridRow="span 2">
      <s-section>
        <s-text>Half width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 4" gridRow="span 3">
      <s-section>
        <s-text>Third width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 4" gridRow="span 3">
      <s-section>
        <s-text>Third width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 4" gridRow="span 3">
      <s-section>
        <s-text>Third width field</s-text>
      </s-section>
    </s-grid-item>
  </s-grid>
</s-stack>

```

```html
<s-stack gap="base">
  <s-grid gridTemplateColumns="repeat(12, 1fr)" gap="base">
    <s-grid-item gridColumn="span 12" gridRow="span 1">
      <s-section>
        <s-text>Full width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 6" gridRow="span 2">
      <s-section>
        <s-text>Half width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 6" gridRow="span 2">
      <s-section>
        <s-text>Half width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 4" gridRow="span 3">
      <s-section>
        <s-text>Third width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 4" gridRow="span 3">
      <s-section>
        <s-text>Third width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 4" gridRow="span 3">
      <s-section>
        <s-text>Third width field</s-text>
      </s-section>
    </s-grid-item>
  </s-grid>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-grid gridTemplateColumns="repeat(12, 1fr)" gap="base">
    <s-grid-item gridColumn="span 12" gridRow="span 1">
      <s-section>
        <s-text>Full width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 6" gridRow="span 2">
      <s-section>
        <s-text>Half width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 6" gridRow="span 2">
      <s-section>
        <s-text>Half width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 4" gridRow="span 3">
      <s-section>
        <s-text>Third width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 4" gridRow="span 3">
      <s-section>
        <s-text>Third width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 4" gridRow="span 3">
      <s-section>
        <s-text>Third width field</s-text>
      </s-section>
    </s-grid-item>
  </s-grid>
</s-stack>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Adaptive grid that automatically adjusts column count based on screen size.```jsx
<s-stack gap="base">
  <s-text type="strong">Narrow container (375px)</s-text>
  <s-box inlineSize="375px">
    <s-query-container>
      <s-grid
        gridTemplateColumns="@container (inline-size > 400px) 1fr 1fr 1fr, 1fr"
        gap="base"
      >
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 1</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 2</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 3</s-text>
          </s-box>
        </s-grid-item>
      </s-grid>
    </s-query-container>
  </s-box>

  <s-text type="strong">Wide container (450px)</s-text>
  <s-box inlineSize="450px">
    <s-query-container>
      <s-grid
        gridTemplateColumns="@container (inline-size > 400px) 1fr 1fr 1fr, 1fr"
        gap="base"
      >
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 1</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 2</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 3</s-text>
          </s-box>
        </s-grid-item>
      </s-grid>
    </s-query-container>
  </s-box>
</s-stack>

```

```html
<s-stack gap="base">
  <s-text type="strong">Narrow container (375px)</s-text>
  <s-box inlineSize="375px">
    <s-query-container>
      <s-grid
        gridTemplateColumns="@container (inline-size > 400px) 1fr 1fr 1fr, 1fr"
        gap="base"
      >
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 1</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 2</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 3</s-text>
          </s-box>
        </s-grid-item>
      </s-grid>
    </s-query-container>
  </s-box>

  <s-text type="strong">Wide container (450px)</s-text>
  <s-box inlineSize="450px">
    <s-query-container>
      <s-grid
        gridTemplateColumns="@container (inline-size > 400px) 1fr 1fr 1fr, 1fr"
        gap="base"
      >
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 1</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 2</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 3</s-text>
          </s-box>
        </s-grid-item>
      </s-grid>
    </s-query-container>
  </s-box>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-text type="strong">Narrow container (375px)</s-text>
  <s-box inlineSize="375px">
    <s-query-container>
      <s-grid
        gridTemplateColumns="@container (inline-size > 400px) 1fr 1fr 1fr, 1fr"
        gap="base"
      >
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 1</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 2</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 3</s-text>
          </s-box>
        </s-grid-item>
      </s-grid>
    </s-query-container>
  </s-box>

  <s-text type="strong">Wide container (450px)</s-text>
  <s-box inlineSize="450px">
    <s-query-container>
      <s-grid
        gridTemplateColumns="@container (inline-size > 400px) 1fr 1fr 1fr, 1fr"
        gap="base"
      >
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 1</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 2</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 3</s-text>
          </s-box>
        </s-grid-item>
      </s-grid>
    </s-query-container>
  </s-box>
</s-stack>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Slots

### GridSlots

### children

value: `HTMLElement`

The content of the Grid.

## Examples

Use `s-grid` to organize your content in a matrix of rows and columns and make responsive layouts for pages. Grid follows the same pattern as the [CSS grid layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout).


### Basic usage

Simple 12-column grid system with equal-width left and right columns.```jsx
<s-grid gridTemplateColumns="repeat(12, 1fr)" gap="base">
  <s-grid-item gridColumn="span 6" gridRow="span 1">
    <s-section>
      <s-text>Left column</s-text>
    </s-section>
  </s-grid-item>
  <s-grid-item gridColumn="span 6" gridRow="span 1">
    <s-section>
      <s-text>Right column</s-text>
    </s-section>
  </s-grid-item>
</s-grid>

```

```html
<s-grid gridTemplateColumns="repeat(12, 1fr)" gap="base">
  <s-grid-item gridColumn="span 6" gridRow="span 1">
    <s-section>
      <s-text>Left column</s-text>
    </s-section>
  </s-grid-item>
  <s-grid-item gridColumn="span 6" gridRow="span 1">
    <s-section>
      <s-text>Right column</s-text>
    </s-section>
  </s-grid-item>
</s-grid>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-grid gridTemplateColumns="repeat(12, 1fr)" gap="base">
  <s-grid-item gridColumn="span 6" gridRow="span 1">
    <s-section>
      <s-text>Left column</s-text>
    </s-section>
  </s-grid-item>
  <s-grid-item gridColumn="span 6" gridRow="span 1">
    <s-section>
      <s-text>Right column</s-text>
    </s-section>
  </s-grid-item>
</s-grid>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Grid layout with full-width, half-width, and third-width column arrangements.```jsx
<s-stack gap="base">
  <s-grid gridTemplateColumns="repeat(12, 1fr)" gap="base">
    <s-grid-item gridColumn="span 12" gridRow="span 1">
      <s-section>
        <s-text>Full width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 6" gridRow="span 2">
      <s-section>
        <s-text>Half width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 6" gridRow="span 2">
      <s-section>
        <s-text>Half width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 4" gridRow="span 3">
      <s-section>
        <s-text>Third width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 4" gridRow="span 3">
      <s-section>
        <s-text>Third width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 4" gridRow="span 3">
      <s-section>
        <s-text>Third width field</s-text>
      </s-section>
    </s-grid-item>
  </s-grid>
</s-stack>

```

```html
<s-stack gap="base">
  <s-grid gridTemplateColumns="repeat(12, 1fr)" gap="base">
    <s-grid-item gridColumn="span 12" gridRow="span 1">
      <s-section>
        <s-text>Full width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 6" gridRow="span 2">
      <s-section>
        <s-text>Half width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 6" gridRow="span 2">
      <s-section>
        <s-text>Half width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 4" gridRow="span 3">
      <s-section>
        <s-text>Third width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 4" gridRow="span 3">
      <s-section>
        <s-text>Third width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 4" gridRow="span 3">
      <s-section>
        <s-text>Third width field</s-text>
      </s-section>
    </s-grid-item>
  </s-grid>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-grid gridTemplateColumns="repeat(12, 1fr)" gap="base">
    <s-grid-item gridColumn="span 12" gridRow="span 1">
      <s-section>
        <s-text>Full width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 6" gridRow="span 2">
      <s-section>
        <s-text>Half width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 6" gridRow="span 2">
      <s-section>
        <s-text>Half width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 4" gridRow="span 3">
      <s-section>
        <s-text>Third width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 4" gridRow="span 3">
      <s-section>
        <s-text>Third width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 4" gridRow="span 3">
      <s-section>
        <s-text>Third width field</s-text>
      </s-section>
    </s-grid-item>
  </s-grid>
</s-stack>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Adaptive grid that automatically adjusts column count based on screen size.```jsx
<s-stack gap="base">
  <s-text type="strong">Narrow container (375px)</s-text>
  <s-box inlineSize="375px">
    <s-query-container>
      <s-grid
        gridTemplateColumns="@container (inline-size > 400px) 1fr 1fr 1fr, 1fr"
        gap="base"
      >
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 1</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 2</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 3</s-text>
          </s-box>
        </s-grid-item>
      </s-grid>
    </s-query-container>
  </s-box>

  <s-text type="strong">Wide container (450px)</s-text>
  <s-box inlineSize="450px">
    <s-query-container>
      <s-grid
        gridTemplateColumns="@container (inline-size > 400px) 1fr 1fr 1fr, 1fr"
        gap="base"
      >
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 1</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 2</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 3</s-text>
          </s-box>
        </s-grid-item>
      </s-grid>
    </s-query-container>
  </s-box>
</s-stack>

```

```html
<s-stack gap="base">
  <s-text type="strong">Narrow container (375px)</s-text>
  <s-box inlineSize="375px">
    <s-query-container>
      <s-grid
        gridTemplateColumns="@container (inline-size > 400px) 1fr 1fr 1fr, 1fr"
        gap="base"
      >
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 1</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 2</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 3</s-text>
          </s-box>
        </s-grid-item>
      </s-grid>
    </s-query-container>
  </s-box>

  <s-text type="strong">Wide container (450px)</s-text>
  <s-box inlineSize="450px">
    <s-query-container>
      <s-grid
        gridTemplateColumns="@container (inline-size > 400px) 1fr 1fr 1fr, 1fr"
        gap="base"
      >
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 1</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 2</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 3</s-text>
          </s-box>
        </s-grid-item>
      </s-grid>
    </s-query-container>
  </s-box>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-text type="strong">Narrow container (375px)</s-text>
  <s-box inlineSize="375px">
    <s-query-container>
      <s-grid
        gridTemplateColumns="@container (inline-size > 400px) 1fr 1fr 1fr, 1fr"
        gap="base"
      >
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 1</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 2</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 3</s-text>
          </s-box>
        </s-grid-item>
      </s-grid>
    </s-query-container>
  </s-box>

  <s-text type="strong">Wide container (450px)</s-text>
  <s-box inlineSize="450px">
    <s-query-container>
      <s-grid
        gridTemplateColumns="@container (inline-size > 400px) 1fr 1fr 1fr, 1fr"
        gap="base"
      >
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 1</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 2</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 3</s-text>
          </s-box>
        </s-grid-item>
      </s-grid>
    </s-query-container>
  </s-box>
</s-stack>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## GridItem

Display content within a single item of a grid layout.

### GridItem

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

### gridColumn

value: `"auto" | `span ${number}``

Number of columns the item will span across

### gridRow

value: `"auto" | `span ${number}``

Number of rows the item will span across

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

Use `s-grid` to organize your content in a matrix of rows and columns and make responsive layouts for pages. Grid follows the same pattern as the [CSS grid layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout).


### Basic usage

Simple 12-column grid system with equal-width left and right columns.```jsx
<s-grid gridTemplateColumns="repeat(12, 1fr)" gap="base">
  <s-grid-item gridColumn="span 6" gridRow="span 1">
    <s-section>
      <s-text>Left column</s-text>
    </s-section>
  </s-grid-item>
  <s-grid-item gridColumn="span 6" gridRow="span 1">
    <s-section>
      <s-text>Right column</s-text>
    </s-section>
  </s-grid-item>
</s-grid>

```

```html
<s-grid gridTemplateColumns="repeat(12, 1fr)" gap="base">
  <s-grid-item gridColumn="span 6" gridRow="span 1">
    <s-section>
      <s-text>Left column</s-text>
    </s-section>
  </s-grid-item>
  <s-grid-item gridColumn="span 6" gridRow="span 1">
    <s-section>
      <s-text>Right column</s-text>
    </s-section>
  </s-grid-item>
</s-grid>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-grid gridTemplateColumns="repeat(12, 1fr)" gap="base">
  <s-grid-item gridColumn="span 6" gridRow="span 1">
    <s-section>
      <s-text>Left column</s-text>
    </s-section>
  </s-grid-item>
  <s-grid-item gridColumn="span 6" gridRow="span 1">
    <s-section>
      <s-text>Right column</s-text>
    </s-section>
  </s-grid-item>
</s-grid>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Grid layout with full-width, half-width, and third-width column arrangements.```jsx
<s-stack gap="base">
  <s-grid gridTemplateColumns="repeat(12, 1fr)" gap="base">
    <s-grid-item gridColumn="span 12" gridRow="span 1">
      <s-section>
        <s-text>Full width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 6" gridRow="span 2">
      <s-section>
        <s-text>Half width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 6" gridRow="span 2">
      <s-section>
        <s-text>Half width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 4" gridRow="span 3">
      <s-section>
        <s-text>Third width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 4" gridRow="span 3">
      <s-section>
        <s-text>Third width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 4" gridRow="span 3">
      <s-section>
        <s-text>Third width field</s-text>
      </s-section>
    </s-grid-item>
  </s-grid>
</s-stack>

```

```html
<s-stack gap="base">
  <s-grid gridTemplateColumns="repeat(12, 1fr)" gap="base">
    <s-grid-item gridColumn="span 12" gridRow="span 1">
      <s-section>
        <s-text>Full width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 6" gridRow="span 2">
      <s-section>
        <s-text>Half width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 6" gridRow="span 2">
      <s-section>
        <s-text>Half width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 4" gridRow="span 3">
      <s-section>
        <s-text>Third width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 4" gridRow="span 3">
      <s-section>
        <s-text>Third width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 4" gridRow="span 3">
      <s-section>
        <s-text>Third width field</s-text>
      </s-section>
    </s-grid-item>
  </s-grid>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-grid gridTemplateColumns="repeat(12, 1fr)" gap="base">
    <s-grid-item gridColumn="span 12" gridRow="span 1">
      <s-section>
        <s-text>Full width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 6" gridRow="span 2">
      <s-section>
        <s-text>Half width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 6" gridRow="span 2">
      <s-section>
        <s-text>Half width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 4" gridRow="span 3">
      <s-section>
        <s-text>Third width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 4" gridRow="span 3">
      <s-section>
        <s-text>Third width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 4" gridRow="span 3">
      <s-section>
        <s-text>Third width field</s-text>
      </s-section>
    </s-grid-item>
  </s-grid>
</s-stack>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Adaptive grid that automatically adjusts column count based on screen size.```jsx
<s-stack gap="base">
  <s-text type="strong">Narrow container (375px)</s-text>
  <s-box inlineSize="375px">
    <s-query-container>
      <s-grid
        gridTemplateColumns="@container (inline-size > 400px) 1fr 1fr 1fr, 1fr"
        gap="base"
      >
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 1</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 2</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 3</s-text>
          </s-box>
        </s-grid-item>
      </s-grid>
    </s-query-container>
  </s-box>

  <s-text type="strong">Wide container (450px)</s-text>
  <s-box inlineSize="450px">
    <s-query-container>
      <s-grid
        gridTemplateColumns="@container (inline-size > 400px) 1fr 1fr 1fr, 1fr"
        gap="base"
      >
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 1</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 2</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 3</s-text>
          </s-box>
        </s-grid-item>
      </s-grid>
    </s-query-container>
  </s-box>
</s-stack>

```

```html
<s-stack gap="base">
  <s-text type="strong">Narrow container (375px)</s-text>
  <s-box inlineSize="375px">
    <s-query-container>
      <s-grid
        gridTemplateColumns="@container (inline-size > 400px) 1fr 1fr 1fr, 1fr"
        gap="base"
      >
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 1</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 2</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 3</s-text>
          </s-box>
        </s-grid-item>
      </s-grid>
    </s-query-container>
  </s-box>

  <s-text type="strong">Wide container (450px)</s-text>
  <s-box inlineSize="450px">
    <s-query-container>
      <s-grid
        gridTemplateColumns="@container (inline-size > 400px) 1fr 1fr 1fr, 1fr"
        gap="base"
      >
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 1</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 2</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 3</s-text>
          </s-box>
        </s-grid-item>
      </s-grid>
    </s-query-container>
  </s-box>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-text type="strong">Narrow container (375px)</s-text>
  <s-box inlineSize="375px">
    <s-query-container>
      <s-grid
        gridTemplateColumns="@container (inline-size > 400px) 1fr 1fr 1fr, 1fr"
        gap="base"
      >
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 1</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 2</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 3</s-text>
          </s-box>
        </s-grid-item>
      </s-grid>
    </s-query-container>
  </s-box>

  <s-text type="strong">Wide container (450px)</s-text>
  <s-box inlineSize="450px">
    <s-query-container>
      <s-grid
        gridTemplateColumns="@container (inline-size > 400px) 1fr 1fr 1fr, 1fr"
        gap="base"
      >
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 1</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 2</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 3</s-text>
          </s-box>
        </s-grid-item>
      </s-grid>
    </s-query-container>
  </s-box>
</s-stack>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Slots

### GridItemSlots

### children

value: `HTMLElement`

The content of the GridItem.

## Examples

Use `s-grid` to organize your content in a matrix of rows and columns and make responsive layouts for pages. Grid follows the same pattern as the [CSS grid layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout).


### Basic usage

Simple 12-column grid system with equal-width left and right columns.```jsx
<s-grid gridTemplateColumns="repeat(12, 1fr)" gap="base">
  <s-grid-item gridColumn="span 6" gridRow="span 1">
    <s-section>
      <s-text>Left column</s-text>
    </s-section>
  </s-grid-item>
  <s-grid-item gridColumn="span 6" gridRow="span 1">
    <s-section>
      <s-text>Right column</s-text>
    </s-section>
  </s-grid-item>
</s-grid>

```

```html
<s-grid gridTemplateColumns="repeat(12, 1fr)" gap="base">
  <s-grid-item gridColumn="span 6" gridRow="span 1">
    <s-section>
      <s-text>Left column</s-text>
    </s-section>
  </s-grid-item>
  <s-grid-item gridColumn="span 6" gridRow="span 1">
    <s-section>
      <s-text>Right column</s-text>
    </s-section>
  </s-grid-item>
</s-grid>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-grid gridTemplateColumns="repeat(12, 1fr)" gap="base">
  <s-grid-item gridColumn="span 6" gridRow="span 1">
    <s-section>
      <s-text>Left column</s-text>
    </s-section>
  </s-grid-item>
  <s-grid-item gridColumn="span 6" gridRow="span 1">
    <s-section>
      <s-text>Right column</s-text>
    </s-section>
  </s-grid-item>
</s-grid>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Grid layout with full-width, half-width, and third-width column arrangements.```jsx
<s-stack gap="base">
  <s-grid gridTemplateColumns="repeat(12, 1fr)" gap="base">
    <s-grid-item gridColumn="span 12" gridRow="span 1">
      <s-section>
        <s-text>Full width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 6" gridRow="span 2">
      <s-section>
        <s-text>Half width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 6" gridRow="span 2">
      <s-section>
        <s-text>Half width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 4" gridRow="span 3">
      <s-section>
        <s-text>Third width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 4" gridRow="span 3">
      <s-section>
        <s-text>Third width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 4" gridRow="span 3">
      <s-section>
        <s-text>Third width field</s-text>
      </s-section>
    </s-grid-item>
  </s-grid>
</s-stack>

```

```html
<s-stack gap="base">
  <s-grid gridTemplateColumns="repeat(12, 1fr)" gap="base">
    <s-grid-item gridColumn="span 12" gridRow="span 1">
      <s-section>
        <s-text>Full width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 6" gridRow="span 2">
      <s-section>
        <s-text>Half width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 6" gridRow="span 2">
      <s-section>
        <s-text>Half width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 4" gridRow="span 3">
      <s-section>
        <s-text>Third width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 4" gridRow="span 3">
      <s-section>
        <s-text>Third width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 4" gridRow="span 3">
      <s-section>
        <s-text>Third width field</s-text>
      </s-section>
    </s-grid-item>
  </s-grid>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-grid gridTemplateColumns="repeat(12, 1fr)" gap="base">
    <s-grid-item gridColumn="span 12" gridRow="span 1">
      <s-section>
        <s-text>Full width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 6" gridRow="span 2">
      <s-section>
        <s-text>Half width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 6" gridRow="span 2">
      <s-section>
        <s-text>Half width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 4" gridRow="span 3">
      <s-section>
        <s-text>Third width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 4" gridRow="span 3">
      <s-section>
        <s-text>Third width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 4" gridRow="span 3">
      <s-section>
        <s-text>Third width field</s-text>
      </s-section>
    </s-grid-item>
  </s-grid>
</s-stack>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Adaptive grid that automatically adjusts column count based on screen size.```jsx
<s-stack gap="base">
  <s-text type="strong">Narrow container (375px)</s-text>
  <s-box inlineSize="375px">
    <s-query-container>
      <s-grid
        gridTemplateColumns="@container (inline-size > 400px) 1fr 1fr 1fr, 1fr"
        gap="base"
      >
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 1</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 2</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 3</s-text>
          </s-box>
        </s-grid-item>
      </s-grid>
    </s-query-container>
  </s-box>

  <s-text type="strong">Wide container (450px)</s-text>
  <s-box inlineSize="450px">
    <s-query-container>
      <s-grid
        gridTemplateColumns="@container (inline-size > 400px) 1fr 1fr 1fr, 1fr"
        gap="base"
      >
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 1</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 2</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 3</s-text>
          </s-box>
        </s-grid-item>
      </s-grid>
    </s-query-container>
  </s-box>
</s-stack>

```

```html
<s-stack gap="base">
  <s-text type="strong">Narrow container (375px)</s-text>
  <s-box inlineSize="375px">
    <s-query-container>
      <s-grid
        gridTemplateColumns="@container (inline-size > 400px) 1fr 1fr 1fr, 1fr"
        gap="base"
      >
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 1</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 2</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 3</s-text>
          </s-box>
        </s-grid-item>
      </s-grid>
    </s-query-container>
  </s-box>

  <s-text type="strong">Wide container (450px)</s-text>
  <s-box inlineSize="450px">
    <s-query-container>
      <s-grid
        gridTemplateColumns="@container (inline-size > 400px) 1fr 1fr 1fr, 1fr"
        gap="base"
      >
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 1</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 2</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 3</s-text>
          </s-box>
        </s-grid-item>
      </s-grid>
    </s-query-container>
  </s-box>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-text type="strong">Narrow container (375px)</s-text>
  <s-box inlineSize="375px">
    <s-query-container>
      <s-grid
        gridTemplateColumns="@container (inline-size > 400px) 1fr 1fr 1fr, 1fr"
        gap="base"
      >
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 1</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 2</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 3</s-text>
          </s-box>
        </s-grid-item>
      </s-grid>
    </s-query-container>
  </s-box>

  <s-text type="strong">Wide container (450px)</s-text>
  <s-box inlineSize="450px">
    <s-query-container>
      <s-grid
        gridTemplateColumns="@container (inline-size > 400px) 1fr 1fr 1fr, 1fr"
        gap="base"
      >
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 1</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 2</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 3</s-text>
          </s-box>
        </s-grid-item>
      </s-grid>
    </s-query-container>
  </s-box>
</s-stack>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Examples

Use `s-grid` to organize your content in a matrix of rows and columns and make responsive layouts for pages. Grid follows the same pattern as the [CSS grid layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout).


### Basic usage

Simple 12-column grid system with equal-width left and right columns.```jsx
<s-grid gridTemplateColumns="repeat(12, 1fr)" gap="base">
  <s-grid-item gridColumn="span 6" gridRow="span 1">
    <s-section>
      <s-text>Left column</s-text>
    </s-section>
  </s-grid-item>
  <s-grid-item gridColumn="span 6" gridRow="span 1">
    <s-section>
      <s-text>Right column</s-text>
    </s-section>
  </s-grid-item>
</s-grid>

```

```html
<s-grid gridTemplateColumns="repeat(12, 1fr)" gap="base">
  <s-grid-item gridColumn="span 6" gridRow="span 1">
    <s-section>
      <s-text>Left column</s-text>
    </s-section>
  </s-grid-item>
  <s-grid-item gridColumn="span 6" gridRow="span 1">
    <s-section>
      <s-text>Right column</s-text>
    </s-section>
  </s-grid-item>
</s-grid>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-grid gridTemplateColumns="repeat(12, 1fr)" gap="base">
  <s-grid-item gridColumn="span 6" gridRow="span 1">
    <s-section>
      <s-text>Left column</s-text>
    </s-section>
  </s-grid-item>
  <s-grid-item gridColumn="span 6" gridRow="span 1">
    <s-section>
      <s-text>Right column</s-text>
    </s-section>
  </s-grid-item>
</s-grid>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Grid layout with full-width, half-width, and third-width column arrangements.```jsx
<s-stack gap="base">
  <s-grid gridTemplateColumns="repeat(12, 1fr)" gap="base">
    <s-grid-item gridColumn="span 12" gridRow="span 1">
      <s-section>
        <s-text>Full width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 6" gridRow="span 2">
      <s-section>
        <s-text>Half width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 6" gridRow="span 2">
      <s-section>
        <s-text>Half width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 4" gridRow="span 3">
      <s-section>
        <s-text>Third width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 4" gridRow="span 3">
      <s-section>
        <s-text>Third width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 4" gridRow="span 3">
      <s-section>
        <s-text>Third width field</s-text>
      </s-section>
    </s-grid-item>
  </s-grid>
</s-stack>

```

```html
<s-stack gap="base">
  <s-grid gridTemplateColumns="repeat(12, 1fr)" gap="base">
    <s-grid-item gridColumn="span 12" gridRow="span 1">
      <s-section>
        <s-text>Full width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 6" gridRow="span 2">
      <s-section>
        <s-text>Half width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 6" gridRow="span 2">
      <s-section>
        <s-text>Half width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 4" gridRow="span 3">
      <s-section>
        <s-text>Third width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 4" gridRow="span 3">
      <s-section>
        <s-text>Third width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 4" gridRow="span 3">
      <s-section>
        <s-text>Third width field</s-text>
      </s-section>
    </s-grid-item>
  </s-grid>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-grid gridTemplateColumns="repeat(12, 1fr)" gap="base">
    <s-grid-item gridColumn="span 12" gridRow="span 1">
      <s-section>
        <s-text>Full width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 6" gridRow="span 2">
      <s-section>
        <s-text>Half width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 6" gridRow="span 2">
      <s-section>
        <s-text>Half width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 4" gridRow="span 3">
      <s-section>
        <s-text>Third width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 4" gridRow="span 3">
      <s-section>
        <s-text>Third width field</s-text>
      </s-section>
    </s-grid-item>
    <s-grid-item gridColumn="span 4" gridRow="span 3">
      <s-section>
        <s-text>Third width field</s-text>
      </s-section>
    </s-grid-item>
  </s-grid>
</s-stack>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Adaptive grid that automatically adjusts column count based on screen size.```jsx
<s-stack gap="base">
  <s-text type="strong">Narrow container (375px)</s-text>
  <s-box inlineSize="375px">
    <s-query-container>
      <s-grid
        gridTemplateColumns="@container (inline-size > 400px) 1fr 1fr 1fr, 1fr"
        gap="base"
      >
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 1</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 2</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 3</s-text>
          </s-box>
        </s-grid-item>
      </s-grid>
    </s-query-container>
  </s-box>

  <s-text type="strong">Wide container (450px)</s-text>
  <s-box inlineSize="450px">
    <s-query-container>
      <s-grid
        gridTemplateColumns="@container (inline-size > 400px) 1fr 1fr 1fr, 1fr"
        gap="base"
      >
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 1</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 2</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 3</s-text>
          </s-box>
        </s-grid-item>
      </s-grid>
    </s-query-container>
  </s-box>
</s-stack>

```

```html
<s-stack gap="base">
  <s-text type="strong">Narrow container (375px)</s-text>
  <s-box inlineSize="375px">
    <s-query-container>
      <s-grid
        gridTemplateColumns="@container (inline-size > 400px) 1fr 1fr 1fr, 1fr"
        gap="base"
      >
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 1</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 2</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 3</s-text>
          </s-box>
        </s-grid-item>
      </s-grid>
    </s-query-container>
  </s-box>

  <s-text type="strong">Wide container (450px)</s-text>
  <s-box inlineSize="450px">
    <s-query-container>
      <s-grid
        gridTemplateColumns="@container (inline-size > 400px) 1fr 1fr 1fr, 1fr"
        gap="base"
      >
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 1</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 2</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 3</s-text>
          </s-box>
        </s-grid-item>
      </s-grid>
    </s-query-container>
  </s-box>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-text type="strong">Narrow container (375px)</s-text>
  <s-box inlineSize="375px">
    <s-query-container>
      <s-grid
        gridTemplateColumns="@container (inline-size > 400px) 1fr 1fr 1fr, 1fr"
        gap="base"
      >
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 1</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 2</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 3</s-text>
          </s-box>
        </s-grid-item>
      </s-grid>
    </s-query-container>
  </s-box>

  <s-text type="strong">Wide container (450px)</s-text>
  <s-box inlineSize="450px">
    <s-query-container>
      <s-grid
        gridTemplateColumns="@container (inline-size > 400px) 1fr 1fr 1fr, 1fr"
        gap="base"
      >
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 1</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 2</s-text>
          </s-box>
        </s-grid-item>
        <s-grid-item>
          <s-box padding="small" background="subdued">
            <s-text>Item 3</s-text>
          </s-box>
        </s-grid-item>
      </s-grid>
    </s-query-container>
  </s-box>
</s-stack>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

