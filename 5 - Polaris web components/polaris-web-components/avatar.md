# Avatar

Show a user’s profile image or initials in a compact, visual element.

```jsx
<s-avatar alt="John Doe" initials="JD" />
```

```html
<s-avatar alt="John Doe" initials="JD"></s-avatar>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-avatar alt="John Doe" initials="JD" />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Properties

### Avatar

### adoptedCallback

value: `() => void`


### alt

value: `string`

An alternative text that describes the avatar for the reader to understand what it is about or identify the user the avatar belongs to.

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


### initials

value: `string`

Initials to display in the avatar.

### queueRender

value: `() => void`

Queue a run of the render function. You shouldn't need to call this manually - it should be handled by changes to

### setAttribute

value: `(name: string, value: string) => void`


### size

value: `"small" | "small-200" | "base" | "large" | "large-200"`

Size of the avatar.

### src

value: `string`

The URL or path to the image.

Initials will be rendered as a fallback if `src` is not provided, fails to load or does not load quickly

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

Show a user’s profile image or initials in a compact, visual element.


### Basic usage

Displays a customer avatar with their initials when no profile image is available.```jsx
<s-avatar initials="SC" alt="Sarah Chen" />
```

```html
<s-avatar initials="SC" alt="Sarah Chen"></s-avatar>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-avatar initials="SC" alt="Sarah Chen" />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows a generic person icon placeholder when no user information is available.```jsx
<s-avatar alt="Customer" />
```

```html
<s-avatar alt="Customer"></s-avatar>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-avatar alt="Customer" />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Loads a customer profile image with automatic fallback to initials if the image fails to load.```jsx
<s-avatar
  src="/customers/profile-123.jpg"
  initials="MR"
  alt="Maria Rodriguez"
  size="base"
 />
```

```html
<s-avatar
  src="/customers/profile-123.jpg"
  initials="MR"
  alt="Maria Rodriguez"
  size="base"
></s-avatar>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-avatar
  src="/customers/profile-123.jpg"
  initials="MR"
  alt="Maria Rodriguez"
  size="base"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Displays customer and merchant avatars in different sizes for various interface contexts.```jsx
<s-stack direction="inline" gap="base">
  <s-avatar initials="SC" alt="Store customer" size="small-200" />
  <s-avatar initials="MR" alt="Merchant representative" size="small" />
  <s-avatar initials="SM" alt="Store manager" size="base" />
  <s-avatar initials="SF" alt="Staff member" size="large" />
  <s-avatar initials="SO" alt="Store owner" size="large-200" />
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-avatar initials="SC" alt="Store customer" size="small-200"></s-avatar>
  <s-avatar initials="MR" alt="Merchant representative" size="small"></s-avatar>
  <s-avatar initials="SM" alt="Store manager" size="base"></s-avatar>
  <s-avatar initials="SF" alt="Staff member" size="large"></s-avatar>
  <s-avatar initials="SO" alt="Store owner" size="large-200"></s-avatar>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-avatar initials="SC" alt="Store customer" size="small-200" />
  <s-avatar initials="MR" alt="Merchant representative" size="small" />
  <s-avatar initials="SM" alt="Store manager" size="base" />
  <s-avatar initials="SF" alt="Staff member" size="large" />
  <s-avatar initials="SO" alt="Store owner" size="large-200" />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how the component handles store and business names of varying lengths in commerce contexts.```jsx
<s-stack direction="inline" gap="base">
  <s-avatar initials="TC" alt="Tech customer" size="base" />
  <s-avatar initials="VIP" alt="VIP customer store" size="base" />
  <s-avatar initials="SHOP" alt="Shopify partner store" size="base" />
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-avatar initials="TC" alt="Tech customer" size="base"></s-avatar>
  <s-avatar initials="VIP" alt="VIP customer store" size="base"></s-avatar>
  <s-avatar initials="SHOP" alt="Shopify partner store" size="base"></s-avatar>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-avatar initials="TC" alt="Tech customer" size="base" />
  <s-avatar initials="VIP" alt="VIP customer store" size="base" />
  <s-avatar initials="SHOP" alt="Shopify partner store" size="base" />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates that identical initials always receive the same color assignment across different store types.```jsx
<s-stack direction="inline" gap="base">
  <s-avatar initials="AB" alt="Apparel boutique" size="base" />
  <s-avatar initials="CD" alt="Coffee direct" size="base" />
  <s-avatar initials="EF" alt="Electronics franchise" size="base" />
  <s-avatar initials="AB" alt="Art books store" size="base" />
  {/* Note: Both AB avatars will have the same color */}
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-avatar initials="AB" alt="Apparel boutique" size="base"></s-avatar>
  <s-avatar initials="CD" alt="Coffee direct" size="base"></s-avatar>
  <s-avatar initials="EF" alt="Electronics franchise" size="base"></s-avatar>
  <s-avatar initials="AB" alt="Art books store" size="base"></s-avatar>
  <!-- Note: Both AB avatars will have the same color -->
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-avatar initials="AB" alt="Apparel boutique" size="base" />
  <s-avatar initials="CD" alt="Coffee direct" size="base" />
  <s-avatar initials="EF" alt="Electronics franchise" size="base" />
  <s-avatar initials="AB" alt="Art books store" size="base" />
  {/* Note: Both AB avatars will have the same color */}
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows automatic fallback to initials when customer or merchant profile images fail to load.```jsx
<s-avatar
  src="/invalid-customer-photo.jpg"
  initials="CS"
  alt="Customer support"
 />

```

```html
<s-avatar
  src="/invalid-customer-photo.jpg"
  initials="CS"
  alt="Customer support"
></s-avatar>
<!-- Will display "CS" initials when image fails -->

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-avatar
  src="/invalid-customer-photo.jpg"
  initials="CS"
  alt="Customer support"
 />
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Typical usage pattern for displaying customer avatars in order lists or customer listings.```jsx
<s-stack gap="base">
  <s-stack direction="inline" gap="small">
    <s-avatar
      src="/customers/merchant-alice.jpg"
      initials="AJ"
      alt="Alice's jewelry store"
      size="small"
     />
    <s-text>Alice's jewelry store</s-text>
  </s-stack>
  <s-stack direction="inline" gap="small">
    <s-avatar initials="BP" alt="Bob's pet supplies" size="small" />
    <s-text>Bob's pet supplies</s-text>
  </s-stack>
  <s-stack direction="inline" gap="small">
    <s-avatar
      src="/customers/charlie-cafe.jpg"
      initials="CC"
      alt="Charlie's coffee corner"
      size="small"
     />
    <s-text>Charlie's coffee corner</s-text>
  </s-stack>
</s-stack>
```

```html
<s-stack gap="base">
  <s-stack direction="inline" gap="small">
    <s-avatar
      src="/customers/merchant-alice.jpg"
      initials="AJ"
      alt="Alice's jewelry store"
      size="small"
    ></s-avatar>
    <s-text>Alice's jewelry store</s-text>
  </s-stack>
  <s-stack direction="inline" gap="small">
    <s-avatar initials="BP" alt="Bob's pet supplies" size="small"></s-avatar>
    <s-text>Bob's pet supplies</s-text>
  </s-stack>
  <s-stack direction="inline" gap="small">
    <s-avatar
      src="/customers/charlie-cafe.jpg"
      initials="CC"
      alt="Charlie's coffee corner"
      size="small"
    ></s-avatar>
    <s-text>Charlie's coffee corner</s-text>
  </s-stack>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-stack direction="inline" gap="small">
    <s-avatar
      src="/customers/merchant-alice.jpg"
      initials="AJ"
      alt="Alice's jewelry store"
      size="small"
     />
    <s-text>Alice's jewelry store</s-text>
  </s-stack>
  <s-stack direction="inline" gap="small">
    <s-avatar initials="BP" alt="Bob's pet supplies" size="small" />
    <s-text>Bob's pet supplies</s-text>
  </s-stack>
  <s-stack direction="inline" gap="small">
    <s-avatar
      src="/customers/charlie-cafe.jpg"
      initials="CC"
      alt="Charlie's coffee corner"
      size="small"
     />
    <s-text>Charlie's coffee corner</s-text>
  </s-stack>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows staff member avatars in different admin interface contexts.```jsx
<s-stack direction="inline" gap="large">
  <s-avatar
    src="/staff/manager-profile.jpg"
    initials="SM"
    alt="Store manager"
    size="large"
   />
  <s-avatar initials="CS" alt="Customer service rep" size="base" />
  <s-avatar initials="FT" alt="Fulfillment team lead" size="small" />
</s-stack>
```

```html
<s-stack direction="inline" gap="large">
  <s-avatar
    src="/staff/manager-profile.jpg"
    initials="SM"
    alt="Store manager"
    size="large"
  ></s-avatar>
  <s-avatar initials="CS" alt="Customer service rep" size="base"></s-avatar>
  <s-avatar initials="FT" alt="Fulfillment team lead" size="small"></s-avatar>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="large">
  <s-avatar
    src="/staff/manager-profile.jpg"
    initials="SM"
    alt="Store manager"
    size="large"
   />
  <s-avatar initials="CS" alt="Customer service rep" size="base" />
  <s-avatar initials="FT" alt="Fulfillment team lead" size="small" />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates avatar integration with other admin-ui components in a merchant section layout.```jsx
<s-section>
  <s-stack gap="base">
    <s-stack direction="inline" gap="small">
      <s-avatar
        src="/merchants/premium-store.jpg"
        initials="PS"
        alt="Premium store"
        size="base"
       />
      <s-stack gap="small-400">
        <s-heading>Premium store</s-heading>
        <s-text color="subdued">Shopify Plus merchant</s-text>
      </s-stack>
    </s-stack>
    <s-text>Monthly revenue: $45,000</s-text>
  </s-stack>
</s-section>
```

```html
<s-section>
  <s-stack gap="base">
    <s-stack direction="inline" gap="small">
      <s-avatar
        src="/merchants/premium-store.jpg"
        initials="PS"
        alt="Premium store"
        size="base"
      ></s-avatar>
      <s-stack gap="small-400">
        <s-heading>Premium store</s-heading>
        <s-text color="subdued">Shopify Plus merchant</s-text>
      </s-stack>
    </s-stack>
    <s-text>Monthly revenue: $45,000</s-text>
  </s-stack>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section>
  <s-stack gap="base">
    <s-stack direction="inline" gap="small">
      <s-avatar
        src="/merchants/premium-store.jpg"
        initials="PS"
        alt="Premium store"
        size="base"
       />
      <s-stack gap="small-400">
        <s-heading>Premium store</s-heading>
        <s-text color="subdued">Shopify Plus merchant</s-text>
      </s-stack>
    </s-stack>
    <s-text>Monthly revenue: \$45,000</s-text>
  </s-stack>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows avatars for different types of fulfillment partners in the Shopify ecosystem.```jsx
<s-stack gap="small">
  <s-stack direction="inline" gap="small">
    <s-avatar initials="3P" alt="3PL partner" size="small" />
    <s-text>Third-party logistics</s-text>
  </s-stack>
  <s-stack direction="inline" gap="small">
    <s-avatar initials="DS" alt="Dropship supplier" size="small" />
    <s-text>Dropship supplier</s-text>
  </s-stack>
  <s-stack direction="inline" gap="small">
    <s-avatar initials="WH" alt="Warehouse hub" size="small" />
    <s-text>Warehouse hub</s-text>
  </s-stack>
</s-stack>
```

```html
<s-stack gap="small">
  <s-stack direction="inline" gap="small">
    <s-avatar initials="3P" alt="3PL partner" size="small"></s-avatar>
    <s-text>Third-party logistics</s-text>
  </s-stack>
  <s-stack direction="inline" gap="small">
    <s-avatar initials="DS" alt="Dropship supplier" size="small"></s-avatar>
    <s-text>Dropship supplier</s-text>
  </s-stack>
  <s-stack direction="inline" gap="small">
    <s-avatar initials="WH" alt="Warehouse hub" size="small"></s-avatar>
    <s-text>Warehouse hub</s-text>
  </s-stack>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="small">
  <s-stack direction="inline" gap="small">
    <s-avatar initials="3P" alt="3PL partner" size="small" />
    <s-text>Third-party logistics</s-text>
  </s-stack>
  <s-stack direction="inline" gap="small">
    <s-avatar initials="DS" alt="Dropship supplier" size="small" />
    <s-text>Dropship supplier</s-text>
  </s-stack>
  <s-stack direction="inline" gap="small">
    <s-avatar initials="WH" alt="Warehouse hub" size="small" />
    <s-text>Warehouse hub</s-text>
  </s-stack>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Events

Learn more about [registering events](https://shopify.dev/docs/api/app-home/using-polaris-components#event-handling).

### AvatarEvents

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

Show a user’s profile image or initials in a compact, visual element.


### Basic usage

Displays a customer avatar with their initials when no profile image is available.```jsx
<s-avatar initials="SC" alt="Sarah Chen" />
```

```html
<s-avatar initials="SC" alt="Sarah Chen"></s-avatar>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-avatar initials="SC" alt="Sarah Chen" />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows a generic person icon placeholder when no user information is available.```jsx
<s-avatar alt="Customer" />
```

```html
<s-avatar alt="Customer"></s-avatar>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-avatar alt="Customer" />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Loads a customer profile image with automatic fallback to initials if the image fails to load.```jsx
<s-avatar
  src="/customers/profile-123.jpg"
  initials="MR"
  alt="Maria Rodriguez"
  size="base"
 />
```

```html
<s-avatar
  src="/customers/profile-123.jpg"
  initials="MR"
  alt="Maria Rodriguez"
  size="base"
></s-avatar>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-avatar
  src="/customers/profile-123.jpg"
  initials="MR"
  alt="Maria Rodriguez"
  size="base"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Displays customer and merchant avatars in different sizes for various interface contexts.```jsx
<s-stack direction="inline" gap="base">
  <s-avatar initials="SC" alt="Store customer" size="small-200" />
  <s-avatar initials="MR" alt="Merchant representative" size="small" />
  <s-avatar initials="SM" alt="Store manager" size="base" />
  <s-avatar initials="SF" alt="Staff member" size="large" />
  <s-avatar initials="SO" alt="Store owner" size="large-200" />
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-avatar initials="SC" alt="Store customer" size="small-200"></s-avatar>
  <s-avatar initials="MR" alt="Merchant representative" size="small"></s-avatar>
  <s-avatar initials="SM" alt="Store manager" size="base"></s-avatar>
  <s-avatar initials="SF" alt="Staff member" size="large"></s-avatar>
  <s-avatar initials="SO" alt="Store owner" size="large-200"></s-avatar>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-avatar initials="SC" alt="Store customer" size="small-200" />
  <s-avatar initials="MR" alt="Merchant representative" size="small" />
  <s-avatar initials="SM" alt="Store manager" size="base" />
  <s-avatar initials="SF" alt="Staff member" size="large" />
  <s-avatar initials="SO" alt="Store owner" size="large-200" />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how the component handles store and business names of varying lengths in commerce contexts.```jsx
<s-stack direction="inline" gap="base">
  <s-avatar initials="TC" alt="Tech customer" size="base" />
  <s-avatar initials="VIP" alt="VIP customer store" size="base" />
  <s-avatar initials="SHOP" alt="Shopify partner store" size="base" />
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-avatar initials="TC" alt="Tech customer" size="base"></s-avatar>
  <s-avatar initials="VIP" alt="VIP customer store" size="base"></s-avatar>
  <s-avatar initials="SHOP" alt="Shopify partner store" size="base"></s-avatar>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-avatar initials="TC" alt="Tech customer" size="base" />
  <s-avatar initials="VIP" alt="VIP customer store" size="base" />
  <s-avatar initials="SHOP" alt="Shopify partner store" size="base" />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates that identical initials always receive the same color assignment across different store types.```jsx
<s-stack direction="inline" gap="base">
  <s-avatar initials="AB" alt="Apparel boutique" size="base" />
  <s-avatar initials="CD" alt="Coffee direct" size="base" />
  <s-avatar initials="EF" alt="Electronics franchise" size="base" />
  <s-avatar initials="AB" alt="Art books store" size="base" />
  {/* Note: Both AB avatars will have the same color */}
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-avatar initials="AB" alt="Apparel boutique" size="base"></s-avatar>
  <s-avatar initials="CD" alt="Coffee direct" size="base"></s-avatar>
  <s-avatar initials="EF" alt="Electronics franchise" size="base"></s-avatar>
  <s-avatar initials="AB" alt="Art books store" size="base"></s-avatar>
  <!-- Note: Both AB avatars will have the same color -->
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-avatar initials="AB" alt="Apparel boutique" size="base" />
  <s-avatar initials="CD" alt="Coffee direct" size="base" />
  <s-avatar initials="EF" alt="Electronics franchise" size="base" />
  <s-avatar initials="AB" alt="Art books store" size="base" />
  {/* Note: Both AB avatars will have the same color */}
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows automatic fallback to initials when customer or merchant profile images fail to load.```jsx
<s-avatar
  src="/invalid-customer-photo.jpg"
  initials="CS"
  alt="Customer support"
 />

```

```html
<s-avatar
  src="/invalid-customer-photo.jpg"
  initials="CS"
  alt="Customer support"
></s-avatar>
<!-- Will display "CS" initials when image fails -->

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-avatar
  src="/invalid-customer-photo.jpg"
  initials="CS"
  alt="Customer support"
 />
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Typical usage pattern for displaying customer avatars in order lists or customer listings.```jsx
<s-stack gap="base">
  <s-stack direction="inline" gap="small">
    <s-avatar
      src="/customers/merchant-alice.jpg"
      initials="AJ"
      alt="Alice's jewelry store"
      size="small"
     />
    <s-text>Alice's jewelry store</s-text>
  </s-stack>
  <s-stack direction="inline" gap="small">
    <s-avatar initials="BP" alt="Bob's pet supplies" size="small" />
    <s-text>Bob's pet supplies</s-text>
  </s-stack>
  <s-stack direction="inline" gap="small">
    <s-avatar
      src="/customers/charlie-cafe.jpg"
      initials="CC"
      alt="Charlie's coffee corner"
      size="small"
     />
    <s-text>Charlie's coffee corner</s-text>
  </s-stack>
</s-stack>
```

```html
<s-stack gap="base">
  <s-stack direction="inline" gap="small">
    <s-avatar
      src="/customers/merchant-alice.jpg"
      initials="AJ"
      alt="Alice's jewelry store"
      size="small"
    ></s-avatar>
    <s-text>Alice's jewelry store</s-text>
  </s-stack>
  <s-stack direction="inline" gap="small">
    <s-avatar initials="BP" alt="Bob's pet supplies" size="small"></s-avatar>
    <s-text>Bob's pet supplies</s-text>
  </s-stack>
  <s-stack direction="inline" gap="small">
    <s-avatar
      src="/customers/charlie-cafe.jpg"
      initials="CC"
      alt="Charlie's coffee corner"
      size="small"
    ></s-avatar>
    <s-text>Charlie's coffee corner</s-text>
  </s-stack>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-stack direction="inline" gap="small">
    <s-avatar
      src="/customers/merchant-alice.jpg"
      initials="AJ"
      alt="Alice's jewelry store"
      size="small"
     />
    <s-text>Alice's jewelry store</s-text>
  </s-stack>
  <s-stack direction="inline" gap="small">
    <s-avatar initials="BP" alt="Bob's pet supplies" size="small" />
    <s-text>Bob's pet supplies</s-text>
  </s-stack>
  <s-stack direction="inline" gap="small">
    <s-avatar
      src="/customers/charlie-cafe.jpg"
      initials="CC"
      alt="Charlie's coffee corner"
      size="small"
     />
    <s-text>Charlie's coffee corner</s-text>
  </s-stack>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows staff member avatars in different admin interface contexts.```jsx
<s-stack direction="inline" gap="large">
  <s-avatar
    src="/staff/manager-profile.jpg"
    initials="SM"
    alt="Store manager"
    size="large"
   />
  <s-avatar initials="CS" alt="Customer service rep" size="base" />
  <s-avatar initials="FT" alt="Fulfillment team lead" size="small" />
</s-stack>
```

```html
<s-stack direction="inline" gap="large">
  <s-avatar
    src="/staff/manager-profile.jpg"
    initials="SM"
    alt="Store manager"
    size="large"
  ></s-avatar>
  <s-avatar initials="CS" alt="Customer service rep" size="base"></s-avatar>
  <s-avatar initials="FT" alt="Fulfillment team lead" size="small"></s-avatar>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="large">
  <s-avatar
    src="/staff/manager-profile.jpg"
    initials="SM"
    alt="Store manager"
    size="large"
   />
  <s-avatar initials="CS" alt="Customer service rep" size="base" />
  <s-avatar initials="FT" alt="Fulfillment team lead" size="small" />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates avatar integration with other admin-ui components in a merchant section layout.```jsx
<s-section>
  <s-stack gap="base">
    <s-stack direction="inline" gap="small">
      <s-avatar
        src="/merchants/premium-store.jpg"
        initials="PS"
        alt="Premium store"
        size="base"
       />
      <s-stack gap="small-400">
        <s-heading>Premium store</s-heading>
        <s-text color="subdued">Shopify Plus merchant</s-text>
      </s-stack>
    </s-stack>
    <s-text>Monthly revenue: $45,000</s-text>
  </s-stack>
</s-section>
```

```html
<s-section>
  <s-stack gap="base">
    <s-stack direction="inline" gap="small">
      <s-avatar
        src="/merchants/premium-store.jpg"
        initials="PS"
        alt="Premium store"
        size="base"
      ></s-avatar>
      <s-stack gap="small-400">
        <s-heading>Premium store</s-heading>
        <s-text color="subdued">Shopify Plus merchant</s-text>
      </s-stack>
    </s-stack>
    <s-text>Monthly revenue: $45,000</s-text>
  </s-stack>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section>
  <s-stack gap="base">
    <s-stack direction="inline" gap="small">
      <s-avatar
        src="/merchants/premium-store.jpg"
        initials="PS"
        alt="Premium store"
        size="base"
       />
      <s-stack gap="small-400">
        <s-heading>Premium store</s-heading>
        <s-text color="subdued">Shopify Plus merchant</s-text>
      </s-stack>
    </s-stack>
    <s-text>Monthly revenue: \$45,000</s-text>
  </s-stack>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows avatars for different types of fulfillment partners in the Shopify ecosystem.```jsx
<s-stack gap="small">
  <s-stack direction="inline" gap="small">
    <s-avatar initials="3P" alt="3PL partner" size="small" />
    <s-text>Third-party logistics</s-text>
  </s-stack>
  <s-stack direction="inline" gap="small">
    <s-avatar initials="DS" alt="Dropship supplier" size="small" />
    <s-text>Dropship supplier</s-text>
  </s-stack>
  <s-stack direction="inline" gap="small">
    <s-avatar initials="WH" alt="Warehouse hub" size="small" />
    <s-text>Warehouse hub</s-text>
  </s-stack>
</s-stack>
```

```html
<s-stack gap="small">
  <s-stack direction="inline" gap="small">
    <s-avatar initials="3P" alt="3PL partner" size="small"></s-avatar>
    <s-text>Third-party logistics</s-text>
  </s-stack>
  <s-stack direction="inline" gap="small">
    <s-avatar initials="DS" alt="Dropship supplier" size="small"></s-avatar>
    <s-text>Dropship supplier</s-text>
  </s-stack>
  <s-stack direction="inline" gap="small">
    <s-avatar initials="WH" alt="Warehouse hub" size="small"></s-avatar>
    <s-text>Warehouse hub</s-text>
  </s-stack>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="small">
  <s-stack direction="inline" gap="small">
    <s-avatar initials="3P" alt="3PL partner" size="small" />
    <s-text>Third-party logistics</s-text>
  </s-stack>
  <s-stack direction="inline" gap="small">
    <s-avatar initials="DS" alt="Dropship supplier" size="small" />
    <s-text>Dropship supplier</s-text>
  </s-stack>
  <s-stack direction="inline" gap="small">
    <s-avatar initials="WH" alt="Warehouse hub" size="small" />
    <s-text>Warehouse hub</s-text>
  </s-stack>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Examples

Show a user’s profile image or initials in a compact, visual element.


### Basic usage

Displays a customer avatar with their initials when no profile image is available.```jsx
<s-avatar initials="SC" alt="Sarah Chen" />
```

```html
<s-avatar initials="SC" alt="Sarah Chen"></s-avatar>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-avatar initials="SC" alt="Sarah Chen" />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows a generic person icon placeholder when no user information is available.```jsx
<s-avatar alt="Customer" />
```

```html
<s-avatar alt="Customer"></s-avatar>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-avatar alt="Customer" />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Loads a customer profile image with automatic fallback to initials if the image fails to load.```jsx
<s-avatar
  src="/customers/profile-123.jpg"
  initials="MR"
  alt="Maria Rodriguez"
  size="base"
 />
```

```html
<s-avatar
  src="/customers/profile-123.jpg"
  initials="MR"
  alt="Maria Rodriguez"
  size="base"
></s-avatar>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-avatar
  src="/customers/profile-123.jpg"
  initials="MR"
  alt="Maria Rodriguez"
  size="base"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Displays customer and merchant avatars in different sizes for various interface contexts.```jsx
<s-stack direction="inline" gap="base">
  <s-avatar initials="SC" alt="Store customer" size="small-200" />
  <s-avatar initials="MR" alt="Merchant representative" size="small" />
  <s-avatar initials="SM" alt="Store manager" size="base" />
  <s-avatar initials="SF" alt="Staff member" size="large" />
  <s-avatar initials="SO" alt="Store owner" size="large-200" />
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-avatar initials="SC" alt="Store customer" size="small-200"></s-avatar>
  <s-avatar initials="MR" alt="Merchant representative" size="small"></s-avatar>
  <s-avatar initials="SM" alt="Store manager" size="base"></s-avatar>
  <s-avatar initials="SF" alt="Staff member" size="large"></s-avatar>
  <s-avatar initials="SO" alt="Store owner" size="large-200"></s-avatar>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-avatar initials="SC" alt="Store customer" size="small-200" />
  <s-avatar initials="MR" alt="Merchant representative" size="small" />
  <s-avatar initials="SM" alt="Store manager" size="base" />
  <s-avatar initials="SF" alt="Staff member" size="large" />
  <s-avatar initials="SO" alt="Store owner" size="large-200" />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how the component handles store and business names of varying lengths in commerce contexts.```jsx
<s-stack direction="inline" gap="base">
  <s-avatar initials="TC" alt="Tech customer" size="base" />
  <s-avatar initials="VIP" alt="VIP customer store" size="base" />
  <s-avatar initials="SHOP" alt="Shopify partner store" size="base" />
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-avatar initials="TC" alt="Tech customer" size="base"></s-avatar>
  <s-avatar initials="VIP" alt="VIP customer store" size="base"></s-avatar>
  <s-avatar initials="SHOP" alt="Shopify partner store" size="base"></s-avatar>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-avatar initials="TC" alt="Tech customer" size="base" />
  <s-avatar initials="VIP" alt="VIP customer store" size="base" />
  <s-avatar initials="SHOP" alt="Shopify partner store" size="base" />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates that identical initials always receive the same color assignment across different store types.```jsx
<s-stack direction="inline" gap="base">
  <s-avatar initials="AB" alt="Apparel boutique" size="base" />
  <s-avatar initials="CD" alt="Coffee direct" size="base" />
  <s-avatar initials="EF" alt="Electronics franchise" size="base" />
  <s-avatar initials="AB" alt="Art books store" size="base" />
  {/* Note: Both AB avatars will have the same color */}
</s-stack>
```

```html
<s-stack direction="inline" gap="base">
  <s-avatar initials="AB" alt="Apparel boutique" size="base"></s-avatar>
  <s-avatar initials="CD" alt="Coffee direct" size="base"></s-avatar>
  <s-avatar initials="EF" alt="Electronics franchise" size="base"></s-avatar>
  <s-avatar initials="AB" alt="Art books store" size="base"></s-avatar>
  <!-- Note: Both AB avatars will have the same color -->
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="base">
  <s-avatar initials="AB" alt="Apparel boutique" size="base" />
  <s-avatar initials="CD" alt="Coffee direct" size="base" />
  <s-avatar initials="EF" alt="Electronics franchise" size="base" />
  <s-avatar initials="AB" alt="Art books store" size="base" />
  {/* Note: Both AB avatars will have the same color */}
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows automatic fallback to initials when customer or merchant profile images fail to load.```jsx
<s-avatar
  src="/invalid-customer-photo.jpg"
  initials="CS"
  alt="Customer support"
 />

```

```html
<s-avatar
  src="/invalid-customer-photo.jpg"
  initials="CS"
  alt="Customer support"
></s-avatar>
<!-- Will display "CS" initials when image fails -->

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-avatar
  src="/invalid-customer-photo.jpg"
  initials="CS"
  alt="Customer support"
 />
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Typical usage pattern for displaying customer avatars in order lists or customer listings.```jsx
<s-stack gap="base">
  <s-stack direction="inline" gap="small">
    <s-avatar
      src="/customers/merchant-alice.jpg"
      initials="AJ"
      alt="Alice's jewelry store"
      size="small"
     />
    <s-text>Alice's jewelry store</s-text>
  </s-stack>
  <s-stack direction="inline" gap="small">
    <s-avatar initials="BP" alt="Bob's pet supplies" size="small" />
    <s-text>Bob's pet supplies</s-text>
  </s-stack>
  <s-stack direction="inline" gap="small">
    <s-avatar
      src="/customers/charlie-cafe.jpg"
      initials="CC"
      alt="Charlie's coffee corner"
      size="small"
     />
    <s-text>Charlie's coffee corner</s-text>
  </s-stack>
</s-stack>
```

```html
<s-stack gap="base">
  <s-stack direction="inline" gap="small">
    <s-avatar
      src="/customers/merchant-alice.jpg"
      initials="AJ"
      alt="Alice's jewelry store"
      size="small"
    ></s-avatar>
    <s-text>Alice's jewelry store</s-text>
  </s-stack>
  <s-stack direction="inline" gap="small">
    <s-avatar initials="BP" alt="Bob's pet supplies" size="small"></s-avatar>
    <s-text>Bob's pet supplies</s-text>
  </s-stack>
  <s-stack direction="inline" gap="small">
    <s-avatar
      src="/customers/charlie-cafe.jpg"
      initials="CC"
      alt="Charlie's coffee corner"
      size="small"
    ></s-avatar>
    <s-text>Charlie's coffee corner</s-text>
  </s-stack>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-stack direction="inline" gap="small">
    <s-avatar
      src="/customers/merchant-alice.jpg"
      initials="AJ"
      alt="Alice's jewelry store"
      size="small"
     />
    <s-text>Alice's jewelry store</s-text>
  </s-stack>
  <s-stack direction="inline" gap="small">
    <s-avatar initials="BP" alt="Bob's pet supplies" size="small" />
    <s-text>Bob's pet supplies</s-text>
  </s-stack>
  <s-stack direction="inline" gap="small">
    <s-avatar
      src="/customers/charlie-cafe.jpg"
      initials="CC"
      alt="Charlie's coffee corner"
      size="small"
     />
    <s-text>Charlie's coffee corner</s-text>
  </s-stack>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows staff member avatars in different admin interface contexts.```jsx
<s-stack direction="inline" gap="large">
  <s-avatar
    src="/staff/manager-profile.jpg"
    initials="SM"
    alt="Store manager"
    size="large"
   />
  <s-avatar initials="CS" alt="Customer service rep" size="base" />
  <s-avatar initials="FT" alt="Fulfillment team lead" size="small" />
</s-stack>
```

```html
<s-stack direction="inline" gap="large">
  <s-avatar
    src="/staff/manager-profile.jpg"
    initials="SM"
    alt="Store manager"
    size="large"
  ></s-avatar>
  <s-avatar initials="CS" alt="Customer service rep" size="base"></s-avatar>
  <s-avatar initials="FT" alt="Fulfillment team lead" size="small"></s-avatar>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack direction="inline" gap="large">
  <s-avatar
    src="/staff/manager-profile.jpg"
    initials="SM"
    alt="Store manager"
    size="large"
   />
  <s-avatar initials="CS" alt="Customer service rep" size="base" />
  <s-avatar initials="FT" alt="Fulfillment team lead" size="small" />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates avatar integration with other admin-ui components in a merchant section layout.```jsx
<s-section>
  <s-stack gap="base">
    <s-stack direction="inline" gap="small">
      <s-avatar
        src="/merchants/premium-store.jpg"
        initials="PS"
        alt="Premium store"
        size="base"
       />
      <s-stack gap="small-400">
        <s-heading>Premium store</s-heading>
        <s-text color="subdued">Shopify Plus merchant</s-text>
      </s-stack>
    </s-stack>
    <s-text>Monthly revenue: $45,000</s-text>
  </s-stack>
</s-section>
```

```html
<s-section>
  <s-stack gap="base">
    <s-stack direction="inline" gap="small">
      <s-avatar
        src="/merchants/premium-store.jpg"
        initials="PS"
        alt="Premium store"
        size="base"
      ></s-avatar>
      <s-stack gap="small-400">
        <s-heading>Premium store</s-heading>
        <s-text color="subdued">Shopify Plus merchant</s-text>
      </s-stack>
    </s-stack>
    <s-text>Monthly revenue: $45,000</s-text>
  </s-stack>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section>
  <s-stack gap="base">
    <s-stack direction="inline" gap="small">
      <s-avatar
        src="/merchants/premium-store.jpg"
        initials="PS"
        alt="Premium store"
        size="base"
       />
      <s-stack gap="small-400">
        <s-heading>Premium store</s-heading>
        <s-text color="subdued">Shopify Plus merchant</s-text>
      </s-stack>
    </s-stack>
    <s-text>Monthly revenue: \$45,000</s-text>
  </s-stack>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows avatars for different types of fulfillment partners in the Shopify ecosystem.```jsx
<s-stack gap="small">
  <s-stack direction="inline" gap="small">
    <s-avatar initials="3P" alt="3PL partner" size="small" />
    <s-text>Third-party logistics</s-text>
  </s-stack>
  <s-stack direction="inline" gap="small">
    <s-avatar initials="DS" alt="Dropship supplier" size="small" />
    <s-text>Dropship supplier</s-text>
  </s-stack>
  <s-stack direction="inline" gap="small">
    <s-avatar initials="WH" alt="Warehouse hub" size="small" />
    <s-text>Warehouse hub</s-text>
  </s-stack>
</s-stack>
```

```html
<s-stack gap="small">
  <s-stack direction="inline" gap="small">
    <s-avatar initials="3P" alt="3PL partner" size="small"></s-avatar>
    <s-text>Third-party logistics</s-text>
  </s-stack>
  <s-stack direction="inline" gap="small">
    <s-avatar initials="DS" alt="Dropship supplier" size="small"></s-avatar>
    <s-text>Dropship supplier</s-text>
  </s-stack>
  <s-stack direction="inline" gap="small">
    <s-avatar initials="WH" alt="Warehouse hub" size="small"></s-avatar>
    <s-text>Warehouse hub</s-text>
  </s-stack>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="small">
  <s-stack direction="inline" gap="small">
    <s-avatar initials="3P" alt="3PL partner" size="small" />
    <s-text>Third-party logistics</s-text>
  </s-stack>
  <s-stack direction="inline" gap="small">
    <s-avatar initials="DS" alt="Dropship supplier" size="small" />
    <s-text>Dropship supplier</s-text>
  </s-stack>
  <s-stack direction="inline" gap="small">
    <s-avatar initials="WH" alt="Warehouse hub" size="small" />
    <s-text>Warehouse hub</s-text>
  </s-stack>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

