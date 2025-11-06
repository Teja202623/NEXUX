# Section

Groups related content into clearly-defined thematic areas. Sections have contextual styling that automatically adapts based on nesting depth. They also adjust heading levels to maintain a meaningful and accessible page structure.

```jsx
<s-section heading="Online store dashboard">
  <s-paragraph>View a summary of your online store’s performance.</s-paragraph>
</s-section>
```

```html
<s-section heading="Online store dashboard">
  <s-paragraph>View a summary of your online store’s performance.</s-paragraph>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; background: #F1F1F1;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section heading="Online store dashboard">
  <s-paragraph>View a summary of your online store’s performance.</s-paragraph>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Properties

### Section

### accessibilityLabel

value: `string`

A label used to describe the section that will be announced by assistive technologies.

When no `heading` property is provided or included as a children of the Section, you **must** provide an `accessibilityLabel` to describe the Section. This is important as it allows assistive technologies to provide the right context to users.

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

A title that describes the content of the section.

### padding

value: `"base" | "none"`

Adjust the padding of all edges.

- `base`: applies padding that is appropriate for the element. Note that it may result in no padding if this is the right design decision in a particular context.
- `none`: removes all padding from the element. This can be useful when elements inside the Section need to span to the edge of the Section. For example, a full-width image. In this case, rely on `s-box` with a padding of 'base' to bring back the desired padding for the rest of the content.

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

Groups related content into clearly-defined thematic areas. Sections have contextual styling that automatically adapts based on nesting depth. They also adjust heading levels to maintain a meaningful and accessible page structure.


### Basic usage

Demonstrates a level 1 section with a heading and multiple form fields. This example shows how sections provide visual hierarchy and structure for input elements.```jsx
<s-section heading="Customer information">
  <s-text-field label="First name" value="John" />
  <s-text-field label="Last name" value="Doe" />
  <s-email-field label="Email" value="john@example.com" />
</s-section>
```

```html
<!-- Level 1 section - elevated with shadow on desktop -->
<s-section heading="Customer information">
  <s-text-field label="First name" value="John"></s-text-field>
  <s-text-field label="Last name" value="Doe"></s-text-field>
  <s-email-field label="Email" value="john@example.com"></s-email-field>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section heading="Customer information">
  <s-text-field label="First name" value="John" />
  <s-text-field label="Last name" value="Doe" />
  <s-email-field label="Email" value="john@example.com" />
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates how sections can be nested to create a hierarchical layout, with each nested section automatically adjusting its visual style. This example demonstrates the automatic visual leveling of nested sections.```jsx
<s-stack gap="base">
  {/* Level 1 section */}
  <s-section heading="Order details">
    <s-paragraph>Order #1234 placed on January 15, 2024</s-paragraph>

    {/* Level 2 section - nested with different visual treatment */}
    <s-section heading="Customer">
      <s-text-field label="Name" value="Jane Smith" />
      <s-text-field label="Email" value="jane@example.com" />

      {/* Level 3 section - further nested */}
      <s-section heading="Billing address">
        <s-text-field label="Street" value="123 Main St" />
        <s-text-field label="City" value="Toronto" />
      </s-section>
    </s-section>

    {/* Another Level 2 section */}
    <s-section heading="Items">
      <s-paragraph>2 items totaling $49.99</s-paragraph>
    </s-section>
  </s-section>
</s-stack>
```

```html
<s-stack gap="base">
  <!-- Level 1 section -->
  <s-section heading="Order details">
    <s-paragraph>Order #1234 placed on January 15, 2024</s-paragraph>

    <!-- Level 2 section - nested with different visual treatment -->
    <s-section heading="Customer">
      <s-text-field label="Name" value="Jane Smith"></s-text-field>
      <s-text-field label="Email" value="jane@example.com"></s-text-field>

      <!-- Level 3 section - further nested -->
      <s-section heading="Billing address">
        <s-text-field label="Street" value="123 Main St"></s-text-field>
        <s-text-field label="City" value="Toronto"></s-text-field>
      </s-section>
    </s-section>

    <!-- Another Level 2 section -->
    <s-section heading="Items">
      <s-paragraph>2 items totaling $49.99</s-paragraph>
    </s-section>
  </s-section>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  {/* Level 1 section */}
  <s-section heading="Order details">
    <s-paragraph>Order #1234 placed on January 15, 2024</s-paragraph>

    {/* Level 2 section - nested with different visual treatment */}
    <s-section heading="Customer">
      <s-text-field label="Name" value="Jane Smith" />
      <s-text-field label="Email" value="jane@example.com" />

      {/* Level 3 section - further nested */}
      <s-section heading="Billing address">
        <s-text-field label="Street" value="123 Main St" />
        <s-text-field label="City" value="Toronto" />
      </s-section>
    </s-section>

    {/* Another Level 2 section */}
    <s-section heading="Items">
      <s-paragraph>2 items totaling \$49.99</s-paragraph>
    </s-section>
  </s-section>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how to add an accessibility label to a section, providing an additional hidden heading for screen readers while maintaining a visible heading.```jsx
<s-section
  heading="Payment summary"
  accessibilityLabel="Order payment breakdown and totals"
>
  <s-stack>
    <s-paragraph>Subtotal: $42.99</s-paragraph>
    <s-paragraph>Tax: $5.59</s-paragraph>
    <s-paragraph>Shipping: $1.41</s-paragraph>
    <s-paragraph>
      <s-text type="strong">Total: $49.99</s-text>  
    </s-paragraph>
  </s-stack>
</s-section>
```

```html
<s-section
  heading="Payment summary"
  accessibilityLabel="Order payment breakdown and totals"
>
  <s-stack gap="base">
    <s-paragraph>Subtotal: $42.99</s-paragraph>
    <s-paragraph>Tax: $5.59</s-paragraph>
    <s-paragraph>Shipping: $1.41</s-paragraph>
    <s-paragraph>
      <s-text type="strong">Total: $49.99</s-text>
    </s-paragraph>
  </s-stack>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section
  heading="Payment summary"
  accessibilityLabel="Order payment breakdown and totals"
>
  <s-stack>
    <s-paragraph>Subtotal: \$42.99</s-paragraph>
    <s-paragraph>Tax: \$5.59</s-paragraph>
    <s-paragraph>Shipping: \$1.41</s-paragraph>
    <s-paragraph>
      <s-text type="strong">Total: \$49.99</s-text>  
    </s-paragraph>
  </s-stack>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates using a section with `padding="none"` to create a full-width layout, ideal for displaying tables or other content that requires edge-to-edge rendering.```jsx
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>Cotton t-shirt</s-table-cell>
        <s-table-cell>$29.99</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>Cotton t-shirt</s-table-cell>
        <s-table-cell>$29.99</s-table-cell>
        <s-table-cell><s-badge tone="success">Active</s-badge></s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>Cotton t-shirt</s-table-cell>
        <s-table-cell>\$29.99</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Slots

### SectionSlots

### children

value: `HTMLElement`

The content of the Section.

## Examples

Groups related content into clearly-defined thematic areas. Sections have contextual styling that automatically adapts based on nesting depth. They also adjust heading levels to maintain a meaningful and accessible page structure.


### Basic usage

Demonstrates a level 1 section with a heading and multiple form fields. This example shows how sections provide visual hierarchy and structure for input elements.```jsx
<s-section heading="Customer information">
  <s-text-field label="First name" value="John" />
  <s-text-field label="Last name" value="Doe" />
  <s-email-field label="Email" value="john@example.com" />
</s-section>
```

```html
<!-- Level 1 section - elevated with shadow on desktop -->
<s-section heading="Customer information">
  <s-text-field label="First name" value="John"></s-text-field>
  <s-text-field label="Last name" value="Doe"></s-text-field>
  <s-email-field label="Email" value="john@example.com"></s-email-field>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section heading="Customer information">
  <s-text-field label="First name" value="John" />
  <s-text-field label="Last name" value="Doe" />
  <s-email-field label="Email" value="john@example.com" />
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates how sections can be nested to create a hierarchical layout, with each nested section automatically adjusting its visual style. This example demonstrates the automatic visual leveling of nested sections.```jsx
<s-stack gap="base">
  {/* Level 1 section */}
  <s-section heading="Order details">
    <s-paragraph>Order #1234 placed on January 15, 2024</s-paragraph>

    {/* Level 2 section - nested with different visual treatment */}
    <s-section heading="Customer">
      <s-text-field label="Name" value="Jane Smith" />
      <s-text-field label="Email" value="jane@example.com" />

      {/* Level 3 section - further nested */}
      <s-section heading="Billing address">
        <s-text-field label="Street" value="123 Main St" />
        <s-text-field label="City" value="Toronto" />
      </s-section>
    </s-section>

    {/* Another Level 2 section */}
    <s-section heading="Items">
      <s-paragraph>2 items totaling $49.99</s-paragraph>
    </s-section>
  </s-section>
</s-stack>
```

```html
<s-stack gap="base">
  <!-- Level 1 section -->
  <s-section heading="Order details">
    <s-paragraph>Order #1234 placed on January 15, 2024</s-paragraph>

    <!-- Level 2 section - nested with different visual treatment -->
    <s-section heading="Customer">
      <s-text-field label="Name" value="Jane Smith"></s-text-field>
      <s-text-field label="Email" value="jane@example.com"></s-text-field>

      <!-- Level 3 section - further nested -->
      <s-section heading="Billing address">
        <s-text-field label="Street" value="123 Main St"></s-text-field>
        <s-text-field label="City" value="Toronto"></s-text-field>
      </s-section>
    </s-section>

    <!-- Another Level 2 section -->
    <s-section heading="Items">
      <s-paragraph>2 items totaling $49.99</s-paragraph>
    </s-section>
  </s-section>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  {/* Level 1 section */}
  <s-section heading="Order details">
    <s-paragraph>Order #1234 placed on January 15, 2024</s-paragraph>

    {/* Level 2 section - nested with different visual treatment */}
    <s-section heading="Customer">
      <s-text-field label="Name" value="Jane Smith" />
      <s-text-field label="Email" value="jane@example.com" />

      {/* Level 3 section - further nested */}
      <s-section heading="Billing address">
        <s-text-field label="Street" value="123 Main St" />
        <s-text-field label="City" value="Toronto" />
      </s-section>
    </s-section>

    {/* Another Level 2 section */}
    <s-section heading="Items">
      <s-paragraph>2 items totaling \$49.99</s-paragraph>
    </s-section>
  </s-section>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how to add an accessibility label to a section, providing an additional hidden heading for screen readers while maintaining a visible heading.```jsx
<s-section
  heading="Payment summary"
  accessibilityLabel="Order payment breakdown and totals"
>
  <s-stack>
    <s-paragraph>Subtotal: $42.99</s-paragraph>
    <s-paragraph>Tax: $5.59</s-paragraph>
    <s-paragraph>Shipping: $1.41</s-paragraph>
    <s-paragraph>
      <s-text type="strong">Total: $49.99</s-text>  
    </s-paragraph>
  </s-stack>
</s-section>
```

```html
<s-section
  heading="Payment summary"
  accessibilityLabel="Order payment breakdown and totals"
>
  <s-stack gap="base">
    <s-paragraph>Subtotal: $42.99</s-paragraph>
    <s-paragraph>Tax: $5.59</s-paragraph>
    <s-paragraph>Shipping: $1.41</s-paragraph>
    <s-paragraph>
      <s-text type="strong">Total: $49.99</s-text>
    </s-paragraph>
  </s-stack>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section
  heading="Payment summary"
  accessibilityLabel="Order payment breakdown and totals"
>
  <s-stack>
    <s-paragraph>Subtotal: \$42.99</s-paragraph>
    <s-paragraph>Tax: \$5.59</s-paragraph>
    <s-paragraph>Shipping: \$1.41</s-paragraph>
    <s-paragraph>
      <s-text type="strong">Total: \$49.99</s-text>  
    </s-paragraph>
  </s-stack>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates using a section with `padding="none"` to create a full-width layout, ideal for displaying tables or other content that requires edge-to-edge rendering.```jsx
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>Cotton t-shirt</s-table-cell>
        <s-table-cell>$29.99</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>Cotton t-shirt</s-table-cell>
        <s-table-cell>$29.99</s-table-cell>
        <s-table-cell><s-badge tone="success">Active</s-badge></s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>Cotton t-shirt</s-table-cell>
        <s-table-cell>\$29.99</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Examples

Groups related content into clearly-defined thematic areas. Sections have contextual styling that automatically adapts based on nesting depth. They also adjust heading levels to maintain a meaningful and accessible page structure.


### Basic usage

Demonstrates a level 1 section with a heading and multiple form fields. This example shows how sections provide visual hierarchy and structure for input elements.```jsx
<s-section heading="Customer information">
  <s-text-field label="First name" value="John" />
  <s-text-field label="Last name" value="Doe" />
  <s-email-field label="Email" value="john@example.com" />
</s-section>
```

```html
<!-- Level 1 section - elevated with shadow on desktop -->
<s-section heading="Customer information">
  <s-text-field label="First name" value="John"></s-text-field>
  <s-text-field label="Last name" value="Doe"></s-text-field>
  <s-email-field label="Email" value="john@example.com"></s-email-field>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section heading="Customer information">
  <s-text-field label="First name" value="John" />
  <s-text-field label="Last name" value="Doe" />
  <s-email-field label="Email" value="john@example.com" />
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates how sections can be nested to create a hierarchical layout, with each nested section automatically adjusting its visual style. This example demonstrates the automatic visual leveling of nested sections.```jsx
<s-stack gap="base">
  {/* Level 1 section */}
  <s-section heading="Order details">
    <s-paragraph>Order #1234 placed on January 15, 2024</s-paragraph>

    {/* Level 2 section - nested with different visual treatment */}
    <s-section heading="Customer">
      <s-text-field label="Name" value="Jane Smith" />
      <s-text-field label="Email" value="jane@example.com" />

      {/* Level 3 section - further nested */}
      <s-section heading="Billing address">
        <s-text-field label="Street" value="123 Main St" />
        <s-text-field label="City" value="Toronto" />
      </s-section>
    </s-section>

    {/* Another Level 2 section */}
    <s-section heading="Items">
      <s-paragraph>2 items totaling $49.99</s-paragraph>
    </s-section>
  </s-section>
</s-stack>
```

```html
<s-stack gap="base">
  <!-- Level 1 section -->
  <s-section heading="Order details">
    <s-paragraph>Order #1234 placed on January 15, 2024</s-paragraph>

    <!-- Level 2 section - nested with different visual treatment -->
    <s-section heading="Customer">
      <s-text-field label="Name" value="Jane Smith"></s-text-field>
      <s-text-field label="Email" value="jane@example.com"></s-text-field>

      <!-- Level 3 section - further nested -->
      <s-section heading="Billing address">
        <s-text-field label="Street" value="123 Main St"></s-text-field>
        <s-text-field label="City" value="Toronto"></s-text-field>
      </s-section>
    </s-section>

    <!-- Another Level 2 section -->
    <s-section heading="Items">
      <s-paragraph>2 items totaling $49.99</s-paragraph>
    </s-section>
  </s-section>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  {/* Level 1 section */}
  <s-section heading="Order details">
    <s-paragraph>Order #1234 placed on January 15, 2024</s-paragraph>

    {/* Level 2 section - nested with different visual treatment */}
    <s-section heading="Customer">
      <s-text-field label="Name" value="Jane Smith" />
      <s-text-field label="Email" value="jane@example.com" />

      {/* Level 3 section - further nested */}
      <s-section heading="Billing address">
        <s-text-field label="Street" value="123 Main St" />
        <s-text-field label="City" value="Toronto" />
      </s-section>
    </s-section>

    {/* Another Level 2 section */}
    <s-section heading="Items">
      <s-paragraph>2 items totaling \$49.99</s-paragraph>
    </s-section>
  </s-section>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how to add an accessibility label to a section, providing an additional hidden heading for screen readers while maintaining a visible heading.```jsx
<s-section
  heading="Payment summary"
  accessibilityLabel="Order payment breakdown and totals"
>
  <s-stack>
    <s-paragraph>Subtotal: $42.99</s-paragraph>
    <s-paragraph>Tax: $5.59</s-paragraph>
    <s-paragraph>Shipping: $1.41</s-paragraph>
    <s-paragraph>
      <s-text type="strong">Total: $49.99</s-text>  
    </s-paragraph>
  </s-stack>
</s-section>
```

```html
<s-section
  heading="Payment summary"
  accessibilityLabel="Order payment breakdown and totals"
>
  <s-stack gap="base">
    <s-paragraph>Subtotal: $42.99</s-paragraph>
    <s-paragraph>Tax: $5.59</s-paragraph>
    <s-paragraph>Shipping: $1.41</s-paragraph>
    <s-paragraph>
      <s-text type="strong">Total: $49.99</s-text>
    </s-paragraph>
  </s-stack>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section
  heading="Payment summary"
  accessibilityLabel="Order payment breakdown and totals"
>
  <s-stack>
    <s-paragraph>Subtotal: \$42.99</s-paragraph>
    <s-paragraph>Tax: \$5.59</s-paragraph>
    <s-paragraph>Shipping: \$1.41</s-paragraph>
    <s-paragraph>
      <s-text type="strong">Total: \$49.99</s-text>  
    </s-paragraph>
  </s-stack>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates using a section with `padding="none"` to create a full-width layout, ideal for displaying tables or other content that requires edge-to-edge rendering.```jsx
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>Cotton t-shirt</s-table-cell>
        <s-table-cell>$29.99</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>Cotton t-shirt</s-table-cell>
        <s-table-cell>$29.99</s-table-cell>
        <s-table-cell><s-badge tone="success">Active</s-badge></s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-table>
    <s-table-header-row>
      <s-table-header listSlot="primary">Product</s-table-header>
      <s-table-header listSlot="labeled">Price</s-table-header>
      <s-table-header listSlot="inline">Status</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>Cotton t-shirt</s-table-cell>
        <s-table-cell>\$29.99</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Active</s-badge>
        </s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

