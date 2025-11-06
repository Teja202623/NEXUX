# Image

Embeds an image within the interface and controls its presentation. Use to visually illustrate concepts, showcase products, or support user tasks and interactions.

```jsx
<s-image
  src="https://cdn.shopify.com/static/images/polaris/image-wc_src.png"
  alt="Four pixelated characters ready to build amazing Shopify apps"
  aspectRatio="59/161"
  inlineSize="auto"
 />
```

```html
<s-image
  src="https://cdn.shopify.com/static/images/polaris/image-wc_src.png"
  alt="Four pixelated characters ready to build amazing Shopify apps"
  aspectRatio="59/161"
  inlineSize="auto"
></s-image>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-image
  src="https://cdn.shopify.com/static/images/polaris/image-wc_src.png"
  alt="Four pixelated characters ready to build amazing Shopify apps"
  aspectRatio="59/161"
  inlineSize="auto"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Properties

### Image

### accessibilityRole

value: `"none" | "presentation" | "img"`

Sets the semantic meaning of the component’s content. When set, the role will be used by assistive technologies to help users navigate the page.

### adoptedCallback

value: `() => void`


### alt

value: `string`

An alternative text description that describe the image for the reader to understand what it is about. It is extremely useful for both users using assistive technology and sighted users. A well written description provides people with visual impairments the ability to participate in consuming non-text content. When a screen readers encounters an `s-image`, the description is read and announced aloud. If an image fails to load, potentially due to a poor connection, the `alt` is displayed on screen instead. This has the benefit of letting a sighted buyer know an image was meant to load here, but as an alternative, they’re still able to consume the text content. Read [considerations when writing alternative text](https://www.shopify.com/ca/blog/image-alt-text#4) to learn more.

### aspectRatio

value: ``${number}` | `${number}/${number}` | `${number}/ ${number}` | `${number} /${number}` | `${number} / ${number}``

The aspect ratio of the image.

The rendering of the image will depend on the `inlineSize` value:

- `inlineSize="fill"`: the aspect ratio will be respected and the image will take the necessary space.
- `inlineSize="auto"`: the image will not render until it has loaded and the aspect ratio will be ignored.

For example, if the value is set as `50 / 100`, the getter returns `50 / 100`. If the value is set as `0.5`, the getter returns `0.5 / 1`.

### attributeChangedCallback

value: `(name: string) => void`


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


### inlineSize

value: `"auto" | "fill"`

The displayed inline width of the image.

- `fill`: the image will takes up 100% of the available inline size.
- `auto`: the image will be displayed at its natural size.

### loading

value: `"eager" | "lazy"`

Determines the loading behavior of the image:
- `eager`: Immediately loads the image, irrespective of its position within the visible viewport.
- `lazy`: Delays loading the image until it approaches a specified distance from the viewport.

### objectFit

value: `"contain" | "cover"`

Determines how the content of the image is resized to fit its container. The image is positioned in the center of the container.

### queueRender

value: `() => void`

Queue a run of the render function. You shouldn't need to call this manually - it should be handled by changes to

### setAttribute

value: `(name: string, value: string) => void`


### sizes

value: `string`

A set of media conditions and their corresponding sizes.

### src

value: `string`

The image source (either a remote URL or a local file resource).

When the image is loading or no `src` is provided, a placeholder will be rendered.

### srcSet

value: `string`

A set of image sources and their width or pixel density descriptors.

This overrides the `src` property.

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

Embeds an image within the interface and controls its presentation. Use to visually illustrate concepts, showcase products, or support user tasks and interactions.


### Basic usage

Demonstrates the simplest implementation of an image component with a source and alt text.```jsx
<s-image src="https://cdn.shopify.com/static/sample-product/House-Plant1.png" alt="Product image" />
```

```html
<s-image
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  alt="Product image"
></s-image>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-image src="https://cdn.shopify.com/static/sample-product/House-Plant1.png" alt="Product image" />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how to create a responsive image with a fixed 16:9 aspect ratio, set to cover the container, and loaded lazily.```jsx
<s-image
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  alt="Featured product"
  aspectRatio="16/9"
  objectFit="cover"
  loading="lazy"
 />
```

```html
<s-image
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  alt="Featured product"
  aspectRatio="16/9"
  objectFit="cover"
  loading="lazy"
></s-image>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-image
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  alt="Featured product"
  aspectRatio="16/9"
  objectFit="cover"
  loading="lazy"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates how to provide multiple image sources for different screen sizes and resolutions using srcSet and sizes attributes.```jsx
<s-image
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  srcSet="https://cdn.shopify.com/static/sample-product/House-Plant1.png 400w,
          https://cdn.shopify.com/static/sample-product/House-Plant1.png 800w"
  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 400px"
  alt="Product detail"
  aspectRatio="16/9"
  objectFit="cover"
 />
```

```html
<s-image
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  srcSet="https://cdn.shopify.com/static/sample-product/House-Plant1.png 400w,
          https://cdn.shopify.com/static/sample-product/House-Plant1.png 800w"
  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 400px"
  alt="Product detail"
  aspectRatio="16/9"
  objectFit="cover"
></s-image>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-image
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  srcSet="https://cdn.shopify.com/static/sample-product/House-Plant1.png 400w,
          https://cdn.shopify.com/static/sample-product/House-Plant1.png 800w"
  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 400px"
  alt="Product detail"
  aspectRatio="16/9"
  objectFit="cover"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates how to apply border styling to an image, including width, style, color, and radius, using border-related properties.```jsx
<s-box inlineSize="300px">
  <s-image
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Product thumbnail"
    borderWidth="large"
    borderStyle="solid"
    borderColor="strong"
    borderRadius="large"
    objectFit="cover"
    aspectRatio="1/1"
   />
</s-box>
```

```html
<s-box inlineSize="300px">
  <s-image
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Product thumbnail"
    borderWidth="large"
    borderStyle="solid"
    borderColor="strong"
    borderRadius="large"
    objectFit="cover"
    aspectRatio="1/1"
  ></s-image>
</s-box>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-box inlineSize="300px">
  <s-image
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Product thumbnail"
    borderWidth="large"
    borderStyle="solid"
    borderColor="strong"
    borderRadius="large"
    objectFit="cover"
    aspectRatio="1/1"
   />
</s-box>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how to mark an image as decorative, which will make screen readers ignore the image by setting an empty alt text and presentation role.```jsx
<s-image
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  alt=""
  accessibilityRole="presentation"
  objectFit="cover"
 />
```

```html
<s-image
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  alt=""
  accessibilityRole="presentation"
  objectFit="cover"
></s-image>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-image
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  alt=""
  accessibilityRole="presentation"
  objectFit="cover"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates an image with auto-sizing, which allows the image to adjust its size based on its container's width.```jsx
<s-image
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  alt="Product image"
  inlineSize="auto"
 />
```

```html
<s-image
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  alt="Product image"
  inlineSize="auto"
></s-image>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-image
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  alt="Product image"
  inlineSize="auto"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how to use images within a grid layout, creating a consistent grid of images with equal size, aspect ratio, and styling.```jsx
<s-grid gridTemplateColumns="repeat(3, 150px)" gap="base" alignItems="center">
  <s-image
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Main view"
    aspectRatio="1/1"
    objectFit="cover"
    borderRadius="base"
    inlineSize="fill"
   />
  <s-image
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Side view"
    aspectRatio="1/1"
    objectFit="cover"
    borderRadius="base"
    inlineSize="fill"
   />
  <s-image
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Detail view"
    aspectRatio="1/1"
    objectFit="cover"
    borderRadius="base"
    inlineSize="fill"
   />
</s-grid>
```

```html
<s-grid gridTemplateColumns="repeat(3, 150px)" gap="base" alignItems="center">
  <s-image
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Main view"
    aspectRatio="1/1"
    objectFit="cover"
    borderRadius="base"
    inlineSize="fill"
  ></s-image>
  <s-image
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Side view"
    aspectRatio="1/1"
    objectFit="cover"
    borderRadius="base"
    inlineSize="fill"
  ></s-image>
  <s-image
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Detail view"
    aspectRatio="1/1"
    objectFit="cover"
    borderRadius="base"
    inlineSize="fill"
  ></s-image>
</s-grid>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-grid gridTemplateColumns="repeat(3, 150px)" gap="base" alignItems="center">
  <s-image
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Main view"
    aspectRatio="1/1"
    objectFit="cover"
    borderRadius="base"
    inlineSize="fill"
   />
  <s-image
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Side view"
    aspectRatio="1/1"
    objectFit="cover"
    borderRadius="base"
    inlineSize="fill"
   />
  <s-image
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Detail view"
    aspectRatio="1/1"
    objectFit="cover"
    borderRadius="base"
    inlineSize="fill"
   />
</s-grid>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Events

Learn more about [registering events](https://shopify.dev/docs/api/app-home/using-polaris-components#event-handling).

### ImageEvents

### error

value: `OnErrorEventHandler`


### load

value: `CallbackEventListener<typeof tagName> | null`

  - CallbackEventListener: (EventListener & {
      (event: CallbackEvent<T>): void;
    }) | null
  - CallbackEvent: Event & {
  currentTarget: HTMLElementTagNameMap[T];
}

## Examples

Embeds an image within the interface and controls its presentation. Use to visually illustrate concepts, showcase products, or support user tasks and interactions.


### Basic usage

Demonstrates the simplest implementation of an image component with a source and alt text.```jsx
<s-image src="https://cdn.shopify.com/static/sample-product/House-Plant1.png" alt="Product image" />
```

```html
<s-image
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  alt="Product image"
></s-image>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-image src="https://cdn.shopify.com/static/sample-product/House-Plant1.png" alt="Product image" />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how to create a responsive image with a fixed 16:9 aspect ratio, set to cover the container, and loaded lazily.```jsx
<s-image
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  alt="Featured product"
  aspectRatio="16/9"
  objectFit="cover"
  loading="lazy"
 />
```

```html
<s-image
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  alt="Featured product"
  aspectRatio="16/9"
  objectFit="cover"
  loading="lazy"
></s-image>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-image
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  alt="Featured product"
  aspectRatio="16/9"
  objectFit="cover"
  loading="lazy"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates how to provide multiple image sources for different screen sizes and resolutions using srcSet and sizes attributes.```jsx
<s-image
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  srcSet="https://cdn.shopify.com/static/sample-product/House-Plant1.png 400w,
          https://cdn.shopify.com/static/sample-product/House-Plant1.png 800w"
  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 400px"
  alt="Product detail"
  aspectRatio="16/9"
  objectFit="cover"
 />
```

```html
<s-image
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  srcSet="https://cdn.shopify.com/static/sample-product/House-Plant1.png 400w,
          https://cdn.shopify.com/static/sample-product/House-Plant1.png 800w"
  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 400px"
  alt="Product detail"
  aspectRatio="16/9"
  objectFit="cover"
></s-image>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-image
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  srcSet="https://cdn.shopify.com/static/sample-product/House-Plant1.png 400w,
          https://cdn.shopify.com/static/sample-product/House-Plant1.png 800w"
  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 400px"
  alt="Product detail"
  aspectRatio="16/9"
  objectFit="cover"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates how to apply border styling to an image, including width, style, color, and radius, using border-related properties.```jsx
<s-box inlineSize="300px">
  <s-image
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Product thumbnail"
    borderWidth="large"
    borderStyle="solid"
    borderColor="strong"
    borderRadius="large"
    objectFit="cover"
    aspectRatio="1/1"
   />
</s-box>
```

```html
<s-box inlineSize="300px">
  <s-image
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Product thumbnail"
    borderWidth="large"
    borderStyle="solid"
    borderColor="strong"
    borderRadius="large"
    objectFit="cover"
    aspectRatio="1/1"
  ></s-image>
</s-box>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-box inlineSize="300px">
  <s-image
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Product thumbnail"
    borderWidth="large"
    borderStyle="solid"
    borderColor="strong"
    borderRadius="large"
    objectFit="cover"
    aspectRatio="1/1"
   />
</s-box>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how to mark an image as decorative, which will make screen readers ignore the image by setting an empty alt text and presentation role.```jsx
<s-image
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  alt=""
  accessibilityRole="presentation"
  objectFit="cover"
 />
```

```html
<s-image
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  alt=""
  accessibilityRole="presentation"
  objectFit="cover"
></s-image>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-image
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  alt=""
  accessibilityRole="presentation"
  objectFit="cover"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates an image with auto-sizing, which allows the image to adjust its size based on its container's width.```jsx
<s-image
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  alt="Product image"
  inlineSize="auto"
 />
```

```html
<s-image
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  alt="Product image"
  inlineSize="auto"
></s-image>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-image
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  alt="Product image"
  inlineSize="auto"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how to use images within a grid layout, creating a consistent grid of images with equal size, aspect ratio, and styling.```jsx
<s-grid gridTemplateColumns="repeat(3, 150px)" gap="base" alignItems="center">
  <s-image
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Main view"
    aspectRatio="1/1"
    objectFit="cover"
    borderRadius="base"
    inlineSize="fill"
   />
  <s-image
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Side view"
    aspectRatio="1/1"
    objectFit="cover"
    borderRadius="base"
    inlineSize="fill"
   />
  <s-image
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Detail view"
    aspectRatio="1/1"
    objectFit="cover"
    borderRadius="base"
    inlineSize="fill"
   />
</s-grid>
```

```html
<s-grid gridTemplateColumns="repeat(3, 150px)" gap="base" alignItems="center">
  <s-image
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Main view"
    aspectRatio="1/1"
    objectFit="cover"
    borderRadius="base"
    inlineSize="fill"
  ></s-image>
  <s-image
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Side view"
    aspectRatio="1/1"
    objectFit="cover"
    borderRadius="base"
    inlineSize="fill"
  ></s-image>
  <s-image
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Detail view"
    aspectRatio="1/1"
    objectFit="cover"
    borderRadius="base"
    inlineSize="fill"
  ></s-image>
</s-grid>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-grid gridTemplateColumns="repeat(3, 150px)" gap="base" alignItems="center">
  <s-image
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Main view"
    aspectRatio="1/1"
    objectFit="cover"
    borderRadius="base"
    inlineSize="fill"
   />
  <s-image
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Side view"
    aspectRatio="1/1"
    objectFit="cover"
    borderRadius="base"
    inlineSize="fill"
   />
  <s-image
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Detail view"
    aspectRatio="1/1"
    objectFit="cover"
    borderRadius="base"
    inlineSize="fill"
   />
</s-grid>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Examples

Embeds an image within the interface and controls its presentation. Use to visually illustrate concepts, showcase products, or support user tasks and interactions.


### Basic usage

Demonstrates the simplest implementation of an image component with a source and alt text.```jsx
<s-image src="https://cdn.shopify.com/static/sample-product/House-Plant1.png" alt="Product image" />
```

```html
<s-image
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  alt="Product image"
></s-image>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-image src="https://cdn.shopify.com/static/sample-product/House-Plant1.png" alt="Product image" />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how to create a responsive image with a fixed 16:9 aspect ratio, set to cover the container, and loaded lazily.```jsx
<s-image
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  alt="Featured product"
  aspectRatio="16/9"
  objectFit="cover"
  loading="lazy"
 />
```

```html
<s-image
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  alt="Featured product"
  aspectRatio="16/9"
  objectFit="cover"
  loading="lazy"
></s-image>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-image
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  alt="Featured product"
  aspectRatio="16/9"
  objectFit="cover"
  loading="lazy"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates how to provide multiple image sources for different screen sizes and resolutions using srcSet and sizes attributes.```jsx
<s-image
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  srcSet="https://cdn.shopify.com/static/sample-product/House-Plant1.png 400w,
          https://cdn.shopify.com/static/sample-product/House-Plant1.png 800w"
  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 400px"
  alt="Product detail"
  aspectRatio="16/9"
  objectFit="cover"
 />
```

```html
<s-image
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  srcSet="https://cdn.shopify.com/static/sample-product/House-Plant1.png 400w,
          https://cdn.shopify.com/static/sample-product/House-Plant1.png 800w"
  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 400px"
  alt="Product detail"
  aspectRatio="16/9"
  objectFit="cover"
></s-image>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-image
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  srcSet="https://cdn.shopify.com/static/sample-product/House-Plant1.png 400w,
          https://cdn.shopify.com/static/sample-product/House-Plant1.png 800w"
  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 400px"
  alt="Product detail"
  aspectRatio="16/9"
  objectFit="cover"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates how to apply border styling to an image, including width, style, color, and radius, using border-related properties.```jsx
<s-box inlineSize="300px">
  <s-image
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Product thumbnail"
    borderWidth="large"
    borderStyle="solid"
    borderColor="strong"
    borderRadius="large"
    objectFit="cover"
    aspectRatio="1/1"
   />
</s-box>
```

```html
<s-box inlineSize="300px">
  <s-image
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Product thumbnail"
    borderWidth="large"
    borderStyle="solid"
    borderColor="strong"
    borderRadius="large"
    objectFit="cover"
    aspectRatio="1/1"
  ></s-image>
</s-box>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-box inlineSize="300px">
  <s-image
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Product thumbnail"
    borderWidth="large"
    borderStyle="solid"
    borderColor="strong"
    borderRadius="large"
    objectFit="cover"
    aspectRatio="1/1"
   />
</s-box>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how to mark an image as decorative, which will make screen readers ignore the image by setting an empty alt text and presentation role.```jsx
<s-image
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  alt=""
  accessibilityRole="presentation"
  objectFit="cover"
 />
```

```html
<s-image
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  alt=""
  accessibilityRole="presentation"
  objectFit="cover"
></s-image>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-image
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  alt=""
  accessibilityRole="presentation"
  objectFit="cover"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates an image with auto-sizing, which allows the image to adjust its size based on its container's width.```jsx
<s-image
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  alt="Product image"
  inlineSize="auto"
 />
```

```html
<s-image
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  alt="Product image"
  inlineSize="auto"
></s-image>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-image
  src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
  alt="Product image"
  inlineSize="auto"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how to use images within a grid layout, creating a consistent grid of images with equal size, aspect ratio, and styling.```jsx
<s-grid gridTemplateColumns="repeat(3, 150px)" gap="base" alignItems="center">
  <s-image
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Main view"
    aspectRatio="1/1"
    objectFit="cover"
    borderRadius="base"
    inlineSize="fill"
   />
  <s-image
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Side view"
    aspectRatio="1/1"
    objectFit="cover"
    borderRadius="base"
    inlineSize="fill"
   />
  <s-image
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Detail view"
    aspectRatio="1/1"
    objectFit="cover"
    borderRadius="base"
    inlineSize="fill"
   />
</s-grid>
```

```html
<s-grid gridTemplateColumns="repeat(3, 150px)" gap="base" alignItems="center">
  <s-image
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Main view"
    aspectRatio="1/1"
    objectFit="cover"
    borderRadius="base"
    inlineSize="fill"
  ></s-image>
  <s-image
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Side view"
    aspectRatio="1/1"
    objectFit="cover"
    borderRadius="base"
    inlineSize="fill"
  ></s-image>
  <s-image
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Detail view"
    aspectRatio="1/1"
    objectFit="cover"
    borderRadius="base"
    inlineSize="fill"
  ></s-image>
</s-grid>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-grid gridTemplateColumns="repeat(3, 150px)" gap="base" alignItems="center">
  <s-image
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Main view"
    aspectRatio="1/1"
    objectFit="cover"
    borderRadius="base"
    inlineSize="fill"
   />
  <s-image
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Side view"
    aspectRatio="1/1"
    objectFit="cover"
    borderRadius="base"
    inlineSize="fill"
   />
  <s-image
    src="https://cdn.shopify.com/static/sample-product/House-Plant1.png"
    alt="Detail view"
    aspectRatio="1/1"
    objectFit="cover"
    borderRadius="base"
    inlineSize="fill"
   />
</s-grid>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

