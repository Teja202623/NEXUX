# Link

Makes text interactive, allowing users to navigate to other pages or perform specific actions. Supports standard URLs, custom protocols, and navigation within Shopify or app pages.

```jsx
<s-link href="javascript:void(0)">fufilling orders</s-link>
```

```html
<s-link href="#beep">fufilling orders</s-link>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-link href="javascript:void(0)">fufilling orders</s-link>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Properties

### Link

### accessibilityLabel

value: `string`

A label that describes the purpose or contents of the Link. It will be read to users using assistive technologies such as screen readers.

Use this when using only an icon or the content of the link is not enough context for users using assistive technologies.

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

### interestFor

value: `string`

Sets the element the [interestFor](https://open-ui.org/components/interest-invokers.explainer/#the-pitch-in-code) should act on when this clickable is activated.

### lang

value: `string`

Indicate the text language. Useful when the text is in a different language than the rest of the page. It will allow assistive technologies such as screen readers to invoke the correct pronunciation. [Reference of values](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) ("subtag" label)

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

Sets the tone of the Link, based on the intention of the information being conveyed.

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

Makes text interactive, allowing users to navigate to other pages or perform specific actions. Supports standard URLs, custom protocols, and navigation within Shopify or app pages.


### Basic usage

Links automatically inherit the tone from their surrounding paragraph context.```jsx
<s-paragraph>
  Your product catalog is empty. Start by <s-link href="javascript:void(0)">adding your first product</s-link> or <s-link href="javascript:void(0)">importing existing inventory</s-link>.
</s-paragraph>
```

```html
<s-paragraph>
  Your product catalog is empty. Start by <s-link href="javascript:void(0)">adding your first product</s-link> or <s-link href="javascript:void(0)">importing existing inventory</s-link>.
</s-paragraph>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-paragraph>
  Your product catalog is empty. Start by <s-link href="javascript:void(0)">adding your first product</s-link> or <s-link href="javascript:void(0)">importing existing inventory</s-link>.
</s-paragraph>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates links within subdued paragraph, showing how links can be used in less prominent paragraph contexts for additional guidance or support.```jsx
<s-paragraph color="subdued">
  Need help setting up shipping rates? <s-link>View shipping guide</s-link> or <s-link>contact merchant support</s-link>.
</s-paragraph>
```

```html
<s-paragraph color="subdued">
  Need help setting up shipping rates? <s-link href="javascript:void(0)" target="_blank">View shipping guide</s-link> or <s-link href="javascript:void(0)">contact merchant support</s-link>.
</s-paragraph>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-paragraph color="subdued">
  Need help setting up shipping rates? <s-link>View shipping guide</s-link> or <s-link>contact merchant support</s-link>.
</s-paragraph>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates how links can be used in critical or urgent text contexts, drawing attention to important actions that require immediate user intervention.```jsx
<s-paragraph tone="critical">
  Your store will be suspended in 24 hours due to unpaid balance. <s-link href="javascript:void(0)">Update payment method</s-link> to avoid service interruption.
</s-paragraph>
```

```html
<s-paragraph tone="critical">
  Your store will be suspended in 24 hours due to unpaid balance. <s-link href="javascript:void(0)">Update payment method</s-link> to avoid service interruption.
</s-paragraph>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-paragraph tone="critical">
  Your store will be suspended in 24 hours due to unpaid balance. <s-link href="javascript:void(0)">Update payment method</s-link> to avoid service interruption.
</s-paragraph>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how links automatically adapt their tone to the surrounding text context, maintaining visual consistency while providing navigation.```jsx
<s-paragraph>
  You have 15 pending orders to fulfill. <s-link href="javascript:void(0)">Review unfulfilled orders</s-link> to keep customers happy.
</s-paragraph>
```

```html
<s-paragraph>
  You have 15 pending orders to fulfill. <s-link href="javascript:void(0)">Review unfulfilled orders</s-link> to keep customers happy.
</s-paragraph>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-paragraph>
  You have 15 pending orders to fulfill. <s-link href="javascript:void(0)">Review unfulfilled orders</s-link> to keep customers happy.
</s-paragraph>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates how links can be integrated within banner components to highlight important information and provide direct action paths.```jsx
<s-banner tone="info">
  <s-paragraph>
    Black Friday campaigns are now available!  <s-link href="javascript:void(0)">Create your campaign</s-link>
  </s-paragraph>
</s-banner>
```

```html
<s-banner tone="info">
  <s-paragraph>
    Black Friday campaigns are now available!
    <s-link href="javascript:void(0)">Create your campaign</s-link>
  </s-paragraph>
</s-banner>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-banner tone="info">
  <s-paragraph>
    Black Friday campaigns are now available!  <s-link href="javascript:void(0)">Create your campaign</s-link>
  </s-paragraph>
</s-banner>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates using links within a box container to provide contextual navigation and additional information in a visually contained area.```jsx
<s-box padding="base" background="base" borderWidth="base" borderColor="base">
  <s-paragraph>
    Boost your store's conversion with professional themes. <s-link href="javascript:void(0)">Browse theme store</s-link> or <s-link href="javascript:void(0)">customize your current theme</s-link>.
  </s-paragraph>
</s-box>
```

```html
<s-box padding="base" background="base" borderWidth="base" borderColor="base">
  <s-paragraph>
    Boost your store's conversion with professional themes. <s-link href="javascript:void(0)">Browse theme store</s-link> or <s-link href="javascript:void(0)">customize your current theme</s-link>.
  </s-paragraph>
</s-box>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-box padding="base" background="base" borderWidth="base" borderColor="base">
  <s-paragraph>
    Boost your store's conversion with professional themes. <s-link href="javascript:void(0)">Browse theme store</s-link> or <s-link href="javascript:void(0)">customize your current theme</s-link>.
  </s-paragraph>
</s-box>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how links can be used within warning banners to provide immediate actions related to critical notifications.```jsx
<s-banner tone="warning">
  <s-paragraph>
    Your inventory for "Vintage t-shirt" is running low (3 remaining).  <s-link>Restock inventory</s-link>
  </s-paragraph>
</s-banner>
```

```html
<s-banner tone="warning">
  <s-paragraph>
    Your inventory for "Vintage t-shirt" is running low (3 remaining). <s-link>Restock inventory</s-link>
  </s-paragraph>
</s-banner>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-banner tone="warning">
  <s-paragraph>
    Your inventory for "Vintage t-shirt" is running low (3 remaining).  <s-link>Restock inventory</s-link>
  </s-paragraph>
</s-banner>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates how to create links that trigger file downloads, useful for exporting data or providing downloadable resources.```jsx
<s-paragraph>
  Export your customer data for marketing analysis. <s-link href="javascript:void(0)" download="customer-export.csv">Download customer list</s-link>
</s-paragraph>
```

```html
<s-paragraph>
  Export your customer data for marketing analysis. <s-link href="javascript:void(0)" download="customer-export.csv">Download customer list</s-link>
</s-paragraph>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-paragraph>
  Export your customer data for marketing analysis. <s-link href="javascript:void(0)" download="customer-export.csv">Download customer list</s-link>
</s-paragraph>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates linking to external resources with different targets, showing how to open links in new tabs and provide navigation to external documentation.```jsx
<s-box padding="base">
  <s-paragraph>
    Need help with policies? Read our <s-link href="javascript:void(0)" target="_blank">billing docs</s-link> or review the <s-link href="javascript:void(0)" target="_blank">terms of service</s-link>.
  </s-paragraph>
</s-box>
```

```html
<s-box padding="base">
  <s-paragraph>
    Need help with policies? Read our <s-link href="javascript:void(0)" target="_blank">billing docs</s-link> or review the <s-link href="javascript:void(0)" target="_blank">terms of service</s-link>.
  </s-paragraph>
</s-box>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-box padding="base">
  <s-paragraph>
    Need help with policies? Read our <s-link href="javascript:void(0)" target="_blank">billing docs</s-link> or review the <s-link href="javascript:void(0)" target="_blank">terms of service</s-link>.
  </s-paragraph>
</s-box>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how to use the `lang` attribute to specify the language of a link, supporting internationalization and proper screen reader pronunciation.```jsx
<s-paragraph>
  Voir en français: <s-link lang="fr">Gérer les produits</s-link>
</s-paragraph>
```

```html
<s-paragraph>
  Voir en français: <s-link lang="fr">Gérer les produits</s-link>
</s-paragraph>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-paragraph>
  Voir en français: <s-link lang="fr">Gérer les produits</s-link>
</s-paragraph>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates how links can have different visual tones, including default, neutral, and critical, allowing for varied contextual styling.```jsx
<s-stack gap="base">
  <s-paragraph>
    Default tone: <s-link>View orders</s-link>
  </s-paragraph>

  <s-paragraph tone="success">
    Success tone: <s-link>Inventory help</s-link>
  </s-paragraph>

  <s-paragraph tone="critical">
    Critical tone: <s-link>Close store</s-link>
  </s-paragraph>

  <s-paragraph tone="warning">
    Warning tone: <s-link>Update billing info</s-link>
  </s-paragraph>

  <s-paragraph tone="info">
    Info tone: <s-link>Learn more about reports</s-link>
  </s-paragraph>

  <s-paragraph tone="caution">
    Caution tone: <s-link>View archived products</s-link>
  </s-paragraph>
</s-stack>
```

```html
<s-stack gap="base">
  <s-paragraph>
    Default tone: <s-link>View orders</s-link>
  </s-paragraph>

  <s-paragraph tone="success">
    Neutral tone: <s-link>Inventory help</s-link>
  </s-paragraph>

  <s-paragraph tone="critical">
    Critical tone: <s-link>Close store</s-link>
  </s-paragraph>

  <s-paragraph tone="warning">
    Warning tone: <s-link>Update billing info</s-link>
  </s-paragraph>

  <s-paragraph tone="info">
    Info tone: <s-link>Learn more about reports</s-link>
  </s-paragraph>

  <s-paragraph tone="caution">
    Subdued tone: <s-link>View archived products</s-link>
  </s-paragraph>
</s-stack>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-paragraph>
    Default tone: <s-link>View orders</s-link>
  </s-paragraph>

  <s-paragraph tone="success">
    Success tone: <s-link>Inventory help</s-link>
  </s-paragraph>

  <s-paragraph tone="critical">
    Critical tone: <s-link>Close store</s-link>
  </s-paragraph>

  <s-paragraph tone="warning">
    Warning tone: <s-link>Update billing info</s-link>
  </s-paragraph>

  <s-paragraph tone="info">
    Info tone: <s-link>Learn more about reports</s-link>
  </s-paragraph>

  <s-paragraph tone="caution">
    Caution tone: <s-link>View archived products</s-link>
  </s-paragraph>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Events

Learn more about [registering events](https://shopify.dev/docs/api/app-home/using-polaris-components#event-handling).

### LinkEvents

### click

value: `CallbackEventListener<typeof tagName> | null`

  - CallbackEventListener: (EventListener & {
      (event: CallbackEvent<T>): void;
    }) | null
  - CallbackEvent: Event & {
  currentTarget: HTMLElementTagNameMap[T];
}

## Examples

Makes text interactive, allowing users to navigate to other pages or perform specific actions. Supports standard URLs, custom protocols, and navigation within Shopify or app pages.


### Basic usage

Links automatically inherit the tone from their surrounding paragraph context.```jsx
<s-paragraph>
  Your product catalog is empty. Start by <s-link href="javascript:void(0)">adding your first product</s-link> or <s-link href="javascript:void(0)">importing existing inventory</s-link>.
</s-paragraph>
```

```html
<s-paragraph>
  Your product catalog is empty. Start by <s-link href="javascript:void(0)">adding your first product</s-link> or <s-link href="javascript:void(0)">importing existing inventory</s-link>.
</s-paragraph>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-paragraph>
  Your product catalog is empty. Start by <s-link href="javascript:void(0)">adding your first product</s-link> or <s-link href="javascript:void(0)">importing existing inventory</s-link>.
</s-paragraph>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates links within subdued paragraph, showing how links can be used in less prominent paragraph contexts for additional guidance or support.```jsx
<s-paragraph color="subdued">
  Need help setting up shipping rates? <s-link>View shipping guide</s-link> or <s-link>contact merchant support</s-link>.
</s-paragraph>
```

```html
<s-paragraph color="subdued">
  Need help setting up shipping rates? <s-link href="javascript:void(0)" target="_blank">View shipping guide</s-link> or <s-link href="javascript:void(0)">contact merchant support</s-link>.
</s-paragraph>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-paragraph color="subdued">
  Need help setting up shipping rates? <s-link>View shipping guide</s-link> or <s-link>contact merchant support</s-link>.
</s-paragraph>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates how links can be used in critical or urgent text contexts, drawing attention to important actions that require immediate user intervention.```jsx
<s-paragraph tone="critical">
  Your store will be suspended in 24 hours due to unpaid balance. <s-link href="javascript:void(0)">Update payment method</s-link> to avoid service interruption.
</s-paragraph>
```

```html
<s-paragraph tone="critical">
  Your store will be suspended in 24 hours due to unpaid balance. <s-link href="javascript:void(0)">Update payment method</s-link> to avoid service interruption.
</s-paragraph>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-paragraph tone="critical">
  Your store will be suspended in 24 hours due to unpaid balance. <s-link href="javascript:void(0)">Update payment method</s-link> to avoid service interruption.
</s-paragraph>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how links automatically adapt their tone to the surrounding text context, maintaining visual consistency while providing navigation.```jsx
<s-paragraph>
  You have 15 pending orders to fulfill. <s-link href="javascript:void(0)">Review unfulfilled orders</s-link> to keep customers happy.
</s-paragraph>
```

```html
<s-paragraph>
  You have 15 pending orders to fulfill. <s-link href="javascript:void(0)">Review unfulfilled orders</s-link> to keep customers happy.
</s-paragraph>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-paragraph>
  You have 15 pending orders to fulfill. <s-link href="javascript:void(0)">Review unfulfilled orders</s-link> to keep customers happy.
</s-paragraph>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates how links can be integrated within banner components to highlight important information and provide direct action paths.```jsx
<s-banner tone="info">
  <s-paragraph>
    Black Friday campaigns are now available!  <s-link href="javascript:void(0)">Create your campaign</s-link>
  </s-paragraph>
</s-banner>
```

```html
<s-banner tone="info">
  <s-paragraph>
    Black Friday campaigns are now available!
    <s-link href="javascript:void(0)">Create your campaign</s-link>
  </s-paragraph>
</s-banner>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-banner tone="info">
  <s-paragraph>
    Black Friday campaigns are now available!  <s-link href="javascript:void(0)">Create your campaign</s-link>
  </s-paragraph>
</s-banner>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates using links within a box container to provide contextual navigation and additional information in a visually contained area.```jsx
<s-box padding="base" background="base" borderWidth="base" borderColor="base">
  <s-paragraph>
    Boost your store's conversion with professional themes. <s-link href="javascript:void(0)">Browse theme store</s-link> or <s-link href="javascript:void(0)">customize your current theme</s-link>.
  </s-paragraph>
</s-box>
```

```html
<s-box padding="base" background="base" borderWidth="base" borderColor="base">
  <s-paragraph>
    Boost your store's conversion with professional themes. <s-link href="javascript:void(0)">Browse theme store</s-link> or <s-link href="javascript:void(0)">customize your current theme</s-link>.
  </s-paragraph>
</s-box>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-box padding="base" background="base" borderWidth="base" borderColor="base">
  <s-paragraph>
    Boost your store's conversion with professional themes. <s-link href="javascript:void(0)">Browse theme store</s-link> or <s-link href="javascript:void(0)">customize your current theme</s-link>.
  </s-paragraph>
</s-box>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how links can be used within warning banners to provide immediate actions related to critical notifications.```jsx
<s-banner tone="warning">
  <s-paragraph>
    Your inventory for "Vintage t-shirt" is running low (3 remaining).  <s-link>Restock inventory</s-link>
  </s-paragraph>
</s-banner>
```

```html
<s-banner tone="warning">
  <s-paragraph>
    Your inventory for "Vintage t-shirt" is running low (3 remaining). <s-link>Restock inventory</s-link>
  </s-paragraph>
</s-banner>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-banner tone="warning">
  <s-paragraph>
    Your inventory for "Vintage t-shirt" is running low (3 remaining).  <s-link>Restock inventory</s-link>
  </s-paragraph>
</s-banner>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates how to create links that trigger file downloads, useful for exporting data or providing downloadable resources.```jsx
<s-paragraph>
  Export your customer data for marketing analysis. <s-link href="javascript:void(0)" download="customer-export.csv">Download customer list</s-link>
</s-paragraph>
```

```html
<s-paragraph>
  Export your customer data for marketing analysis. <s-link href="javascript:void(0)" download="customer-export.csv">Download customer list</s-link>
</s-paragraph>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-paragraph>
  Export your customer data for marketing analysis. <s-link href="javascript:void(0)" download="customer-export.csv">Download customer list</s-link>
</s-paragraph>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates linking to external resources with different targets, showing how to open links in new tabs and provide navigation to external documentation.```jsx
<s-box padding="base">
  <s-paragraph>
    Need help with policies? Read our <s-link href="javascript:void(0)" target="_blank">billing docs</s-link> or review the <s-link href="javascript:void(0)" target="_blank">terms of service</s-link>.
  </s-paragraph>
</s-box>
```

```html
<s-box padding="base">
  <s-paragraph>
    Need help with policies? Read our <s-link href="javascript:void(0)" target="_blank">billing docs</s-link> or review the <s-link href="javascript:void(0)" target="_blank">terms of service</s-link>.
  </s-paragraph>
</s-box>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-box padding="base">
  <s-paragraph>
    Need help with policies? Read our <s-link href="javascript:void(0)" target="_blank">billing docs</s-link> or review the <s-link href="javascript:void(0)" target="_blank">terms of service</s-link>.
  </s-paragraph>
</s-box>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how to use the `lang` attribute to specify the language of a link, supporting internationalization and proper screen reader pronunciation.```jsx
<s-paragraph>
  Voir en français: <s-link lang="fr">Gérer les produits</s-link>
</s-paragraph>
```

```html
<s-paragraph>
  Voir en français: <s-link lang="fr">Gérer les produits</s-link>
</s-paragraph>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-paragraph>
  Voir en français: <s-link lang="fr">Gérer les produits</s-link>
</s-paragraph>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates how links can have different visual tones, including default, neutral, and critical, allowing for varied contextual styling.```jsx
<s-stack gap="base">
  <s-paragraph>
    Default tone: <s-link>View orders</s-link>
  </s-paragraph>

  <s-paragraph tone="success">
    Success tone: <s-link>Inventory help</s-link>
  </s-paragraph>

  <s-paragraph tone="critical">
    Critical tone: <s-link>Close store</s-link>
  </s-paragraph>

  <s-paragraph tone="warning">
    Warning tone: <s-link>Update billing info</s-link>
  </s-paragraph>

  <s-paragraph tone="info">
    Info tone: <s-link>Learn more about reports</s-link>
  </s-paragraph>

  <s-paragraph tone="caution">
    Caution tone: <s-link>View archived products</s-link>
  </s-paragraph>
</s-stack>
```

```html
<s-stack gap="base">
  <s-paragraph>
    Default tone: <s-link>View orders</s-link>
  </s-paragraph>

  <s-paragraph tone="success">
    Neutral tone: <s-link>Inventory help</s-link>
  </s-paragraph>

  <s-paragraph tone="critical">
    Critical tone: <s-link>Close store</s-link>
  </s-paragraph>

  <s-paragraph tone="warning">
    Warning tone: <s-link>Update billing info</s-link>
  </s-paragraph>

  <s-paragraph tone="info">
    Info tone: <s-link>Learn more about reports</s-link>
  </s-paragraph>

  <s-paragraph tone="caution">
    Subdued tone: <s-link>View archived products</s-link>
  </s-paragraph>
</s-stack>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-paragraph>
    Default tone: <s-link>View orders</s-link>
  </s-paragraph>

  <s-paragraph tone="success">
    Success tone: <s-link>Inventory help</s-link>
  </s-paragraph>

  <s-paragraph tone="critical">
    Critical tone: <s-link>Close store</s-link>
  </s-paragraph>

  <s-paragraph tone="warning">
    Warning tone: <s-link>Update billing info</s-link>
  </s-paragraph>

  <s-paragraph tone="info">
    Info tone: <s-link>Learn more about reports</s-link>
  </s-paragraph>

  <s-paragraph tone="caution">
    Caution tone: <s-link>View archived products</s-link>
  </s-paragraph>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Slots

### LinkSlots

### children

value: `HTMLElement`

The content of the Link.

## Examples

Makes text interactive, allowing users to navigate to other pages or perform specific actions. Supports standard URLs, custom protocols, and navigation within Shopify or app pages.


### Basic usage

Links automatically inherit the tone from their surrounding paragraph context.```jsx
<s-paragraph>
  Your product catalog is empty. Start by <s-link href="javascript:void(0)">adding your first product</s-link> or <s-link href="javascript:void(0)">importing existing inventory</s-link>.
</s-paragraph>
```

```html
<s-paragraph>
  Your product catalog is empty. Start by <s-link href="javascript:void(0)">adding your first product</s-link> or <s-link href="javascript:void(0)">importing existing inventory</s-link>.
</s-paragraph>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-paragraph>
  Your product catalog is empty. Start by <s-link href="javascript:void(0)">adding your first product</s-link> or <s-link href="javascript:void(0)">importing existing inventory</s-link>.
</s-paragraph>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates links within subdued paragraph, showing how links can be used in less prominent paragraph contexts for additional guidance or support.```jsx
<s-paragraph color="subdued">
  Need help setting up shipping rates? <s-link>View shipping guide</s-link> or <s-link>contact merchant support</s-link>.
</s-paragraph>
```

```html
<s-paragraph color="subdued">
  Need help setting up shipping rates? <s-link href="javascript:void(0)" target="_blank">View shipping guide</s-link> or <s-link href="javascript:void(0)">contact merchant support</s-link>.
</s-paragraph>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-paragraph color="subdued">
  Need help setting up shipping rates? <s-link>View shipping guide</s-link> or <s-link>contact merchant support</s-link>.
</s-paragraph>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates how links can be used in critical or urgent text contexts, drawing attention to important actions that require immediate user intervention.```jsx
<s-paragraph tone="critical">
  Your store will be suspended in 24 hours due to unpaid balance. <s-link href="javascript:void(0)">Update payment method</s-link> to avoid service interruption.
</s-paragraph>
```

```html
<s-paragraph tone="critical">
  Your store will be suspended in 24 hours due to unpaid balance. <s-link href="javascript:void(0)">Update payment method</s-link> to avoid service interruption.
</s-paragraph>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-paragraph tone="critical">
  Your store will be suspended in 24 hours due to unpaid balance. <s-link href="javascript:void(0)">Update payment method</s-link> to avoid service interruption.
</s-paragraph>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how links automatically adapt their tone to the surrounding text context, maintaining visual consistency while providing navigation.```jsx
<s-paragraph>
  You have 15 pending orders to fulfill. <s-link href="javascript:void(0)">Review unfulfilled orders</s-link> to keep customers happy.
</s-paragraph>
```

```html
<s-paragraph>
  You have 15 pending orders to fulfill. <s-link href="javascript:void(0)">Review unfulfilled orders</s-link> to keep customers happy.
</s-paragraph>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-paragraph>
  You have 15 pending orders to fulfill. <s-link href="javascript:void(0)">Review unfulfilled orders</s-link> to keep customers happy.
</s-paragraph>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates how links can be integrated within banner components to highlight important information and provide direct action paths.```jsx
<s-banner tone="info">
  <s-paragraph>
    Black Friday campaigns are now available!  <s-link href="javascript:void(0)">Create your campaign</s-link>
  </s-paragraph>
</s-banner>
```

```html
<s-banner tone="info">
  <s-paragraph>
    Black Friday campaigns are now available!
    <s-link href="javascript:void(0)">Create your campaign</s-link>
  </s-paragraph>
</s-banner>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-banner tone="info">
  <s-paragraph>
    Black Friday campaigns are now available!  <s-link href="javascript:void(0)">Create your campaign</s-link>
  </s-paragraph>
</s-banner>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates using links within a box container to provide contextual navigation and additional information in a visually contained area.```jsx
<s-box padding="base" background="base" borderWidth="base" borderColor="base">
  <s-paragraph>
    Boost your store's conversion with professional themes. <s-link href="javascript:void(0)">Browse theme store</s-link> or <s-link href="javascript:void(0)">customize your current theme</s-link>.
  </s-paragraph>
</s-box>
```

```html
<s-box padding="base" background="base" borderWidth="base" borderColor="base">
  <s-paragraph>
    Boost your store's conversion with professional themes. <s-link href="javascript:void(0)">Browse theme store</s-link> or <s-link href="javascript:void(0)">customize your current theme</s-link>.
  </s-paragraph>
</s-box>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-box padding="base" background="base" borderWidth="base" borderColor="base">
  <s-paragraph>
    Boost your store's conversion with professional themes. <s-link href="javascript:void(0)">Browse theme store</s-link> or <s-link href="javascript:void(0)">customize your current theme</s-link>.
  </s-paragraph>
</s-box>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how links can be used within warning banners to provide immediate actions related to critical notifications.```jsx
<s-banner tone="warning">
  <s-paragraph>
    Your inventory for "Vintage t-shirt" is running low (3 remaining).  <s-link>Restock inventory</s-link>
  </s-paragraph>
</s-banner>
```

```html
<s-banner tone="warning">
  <s-paragraph>
    Your inventory for "Vintage t-shirt" is running low (3 remaining). <s-link>Restock inventory</s-link>
  </s-paragraph>
</s-banner>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-banner tone="warning">
  <s-paragraph>
    Your inventory for "Vintage t-shirt" is running low (3 remaining).  <s-link>Restock inventory</s-link>
  </s-paragraph>
</s-banner>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates how to create links that trigger file downloads, useful for exporting data or providing downloadable resources.```jsx
<s-paragraph>
  Export your customer data for marketing analysis. <s-link href="javascript:void(0)" download="customer-export.csv">Download customer list</s-link>
</s-paragraph>
```

```html
<s-paragraph>
  Export your customer data for marketing analysis. <s-link href="javascript:void(0)" download="customer-export.csv">Download customer list</s-link>
</s-paragraph>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-paragraph>
  Export your customer data for marketing analysis. <s-link href="javascript:void(0)" download="customer-export.csv">Download customer list</s-link>
</s-paragraph>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates linking to external resources with different targets, showing how to open links in new tabs and provide navigation to external documentation.```jsx
<s-box padding="base">
  <s-paragraph>
    Need help with policies? Read our <s-link href="javascript:void(0)" target="_blank">billing docs</s-link> or review the <s-link href="javascript:void(0)" target="_blank">terms of service</s-link>.
  </s-paragraph>
</s-box>
```

```html
<s-box padding="base">
  <s-paragraph>
    Need help with policies? Read our <s-link href="javascript:void(0)" target="_blank">billing docs</s-link> or review the <s-link href="javascript:void(0)" target="_blank">terms of service</s-link>.
  </s-paragraph>
</s-box>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-box padding="base">
  <s-paragraph>
    Need help with policies? Read our <s-link href="javascript:void(0)" target="_blank">billing docs</s-link> or review the <s-link href="javascript:void(0)" target="_blank">terms of service</s-link>.
  </s-paragraph>
</s-box>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how to use the `lang` attribute to specify the language of a link, supporting internationalization and proper screen reader pronunciation.```jsx
<s-paragraph>
  Voir en français: <s-link lang="fr">Gérer les produits</s-link>
</s-paragraph>
```

```html
<s-paragraph>
  Voir en français: <s-link lang="fr">Gérer les produits</s-link>
</s-paragraph>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-paragraph>
  Voir en français: <s-link lang="fr">Gérer les produits</s-link>
</s-paragraph>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates how links can have different visual tones, including default, neutral, and critical, allowing for varied contextual styling.```jsx
<s-stack gap="base">
  <s-paragraph>
    Default tone: <s-link>View orders</s-link>
  </s-paragraph>

  <s-paragraph tone="success">
    Success tone: <s-link>Inventory help</s-link>
  </s-paragraph>

  <s-paragraph tone="critical">
    Critical tone: <s-link>Close store</s-link>
  </s-paragraph>

  <s-paragraph tone="warning">
    Warning tone: <s-link>Update billing info</s-link>
  </s-paragraph>

  <s-paragraph tone="info">
    Info tone: <s-link>Learn more about reports</s-link>
  </s-paragraph>

  <s-paragraph tone="caution">
    Caution tone: <s-link>View archived products</s-link>
  </s-paragraph>
</s-stack>
```

```html
<s-stack gap="base">
  <s-paragraph>
    Default tone: <s-link>View orders</s-link>
  </s-paragraph>

  <s-paragraph tone="success">
    Neutral tone: <s-link>Inventory help</s-link>
  </s-paragraph>

  <s-paragraph tone="critical">
    Critical tone: <s-link>Close store</s-link>
  </s-paragraph>

  <s-paragraph tone="warning">
    Warning tone: <s-link>Update billing info</s-link>
  </s-paragraph>

  <s-paragraph tone="info">
    Info tone: <s-link>Learn more about reports</s-link>
  </s-paragraph>

  <s-paragraph tone="caution">
    Subdued tone: <s-link>View archived products</s-link>
  </s-paragraph>
</s-stack>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-paragraph>
    Default tone: <s-link>View orders</s-link>
  </s-paragraph>

  <s-paragraph tone="success">
    Success tone: <s-link>Inventory help</s-link>
  </s-paragraph>

  <s-paragraph tone="critical">
    Critical tone: <s-link>Close store</s-link>
  </s-paragraph>

  <s-paragraph tone="warning">
    Warning tone: <s-link>Update billing info</s-link>
  </s-paragraph>

  <s-paragraph tone="info">
    Info tone: <s-link>Learn more about reports</s-link>
  </s-paragraph>

  <s-paragraph tone="caution">
    Caution tone: <s-link>View archived products</s-link>
  </s-paragraph>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Examples

Makes text interactive, allowing users to navigate to other pages or perform specific actions. Supports standard URLs, custom protocols, and navigation within Shopify or app pages.


### Basic usage

Links automatically inherit the tone from their surrounding paragraph context.```jsx
<s-paragraph>
  Your product catalog is empty. Start by <s-link href="javascript:void(0)">adding your first product</s-link> or <s-link href="javascript:void(0)">importing existing inventory</s-link>.
</s-paragraph>
```

```html
<s-paragraph>
  Your product catalog is empty. Start by <s-link href="javascript:void(0)">adding your first product</s-link> or <s-link href="javascript:void(0)">importing existing inventory</s-link>.
</s-paragraph>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-paragraph>
  Your product catalog is empty. Start by <s-link href="javascript:void(0)">adding your first product</s-link> or <s-link href="javascript:void(0)">importing existing inventory</s-link>.
</s-paragraph>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates links within subdued paragraph, showing how links can be used in less prominent paragraph contexts for additional guidance or support.```jsx
<s-paragraph color="subdued">
  Need help setting up shipping rates? <s-link>View shipping guide</s-link> or <s-link>contact merchant support</s-link>.
</s-paragraph>
```

```html
<s-paragraph color="subdued">
  Need help setting up shipping rates? <s-link href="javascript:void(0)" target="_blank">View shipping guide</s-link> or <s-link href="javascript:void(0)">contact merchant support</s-link>.
</s-paragraph>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-paragraph color="subdued">
  Need help setting up shipping rates? <s-link>View shipping guide</s-link> or <s-link>contact merchant support</s-link>.
</s-paragraph>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates how links can be used in critical or urgent text contexts, drawing attention to important actions that require immediate user intervention.```jsx
<s-paragraph tone="critical">
  Your store will be suspended in 24 hours due to unpaid balance. <s-link href="javascript:void(0)">Update payment method</s-link> to avoid service interruption.
</s-paragraph>
```

```html
<s-paragraph tone="critical">
  Your store will be suspended in 24 hours due to unpaid balance. <s-link href="javascript:void(0)">Update payment method</s-link> to avoid service interruption.
</s-paragraph>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-paragraph tone="critical">
  Your store will be suspended in 24 hours due to unpaid balance. <s-link href="javascript:void(0)">Update payment method</s-link> to avoid service interruption.
</s-paragraph>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how links automatically adapt their tone to the surrounding text context, maintaining visual consistency while providing navigation.```jsx
<s-paragraph>
  You have 15 pending orders to fulfill. <s-link href="javascript:void(0)">Review unfulfilled orders</s-link> to keep customers happy.
</s-paragraph>
```

```html
<s-paragraph>
  You have 15 pending orders to fulfill. <s-link href="javascript:void(0)">Review unfulfilled orders</s-link> to keep customers happy.
</s-paragraph>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-paragraph>
  You have 15 pending orders to fulfill. <s-link href="javascript:void(0)">Review unfulfilled orders</s-link> to keep customers happy.
</s-paragraph>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates how links can be integrated within banner components to highlight important information and provide direct action paths.```jsx
<s-banner tone="info">
  <s-paragraph>
    Black Friday campaigns are now available!  <s-link href="javascript:void(0)">Create your campaign</s-link>
  </s-paragraph>
</s-banner>
```

```html
<s-banner tone="info">
  <s-paragraph>
    Black Friday campaigns are now available!
    <s-link href="javascript:void(0)">Create your campaign</s-link>
  </s-paragraph>
</s-banner>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-banner tone="info">
  <s-paragraph>
    Black Friday campaigns are now available!  <s-link href="javascript:void(0)">Create your campaign</s-link>
  </s-paragraph>
</s-banner>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates using links within a box container to provide contextual navigation and additional information in a visually contained area.```jsx
<s-box padding="base" background="base" borderWidth="base" borderColor="base">
  <s-paragraph>
    Boost your store's conversion with professional themes. <s-link href="javascript:void(0)">Browse theme store</s-link> or <s-link href="javascript:void(0)">customize your current theme</s-link>.
  </s-paragraph>
</s-box>
```

```html
<s-box padding="base" background="base" borderWidth="base" borderColor="base">
  <s-paragraph>
    Boost your store's conversion with professional themes. <s-link href="javascript:void(0)">Browse theme store</s-link> or <s-link href="javascript:void(0)">customize your current theme</s-link>.
  </s-paragraph>
</s-box>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-box padding="base" background="base" borderWidth="base" borderColor="base">
  <s-paragraph>
    Boost your store's conversion with professional themes. <s-link href="javascript:void(0)">Browse theme store</s-link> or <s-link href="javascript:void(0)">customize your current theme</s-link>.
  </s-paragraph>
</s-box>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how links can be used within warning banners to provide immediate actions related to critical notifications.```jsx
<s-banner tone="warning">
  <s-paragraph>
    Your inventory for "Vintage t-shirt" is running low (3 remaining).  <s-link>Restock inventory</s-link>
  </s-paragraph>
</s-banner>
```

```html
<s-banner tone="warning">
  <s-paragraph>
    Your inventory for "Vintage t-shirt" is running low (3 remaining). <s-link>Restock inventory</s-link>
  </s-paragraph>
</s-banner>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-banner tone="warning">
  <s-paragraph>
    Your inventory for "Vintage t-shirt" is running low (3 remaining).  <s-link>Restock inventory</s-link>
  </s-paragraph>
</s-banner>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates how to create links that trigger file downloads, useful for exporting data or providing downloadable resources.```jsx
<s-paragraph>
  Export your customer data for marketing analysis. <s-link href="javascript:void(0)" download="customer-export.csv">Download customer list</s-link>
</s-paragraph>
```

```html
<s-paragraph>
  Export your customer data for marketing analysis. <s-link href="javascript:void(0)" download="customer-export.csv">Download customer list</s-link>
</s-paragraph>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-paragraph>
  Export your customer data for marketing analysis. <s-link href="javascript:void(0)" download="customer-export.csv">Download customer list</s-link>
</s-paragraph>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Illustrates linking to external resources with different targets, showing how to open links in new tabs and provide navigation to external documentation.```jsx
<s-box padding="base">
  <s-paragraph>
    Need help with policies? Read our <s-link href="javascript:void(0)" target="_blank">billing docs</s-link> or review the <s-link href="javascript:void(0)" target="_blank">terms of service</s-link>.
  </s-paragraph>
</s-box>
```

```html
<s-box padding="base">
  <s-paragraph>
    Need help with policies? Read our <s-link href="javascript:void(0)" target="_blank">billing docs</s-link> or review the <s-link href="javascript:void(0)" target="_blank">terms of service</s-link>.
  </s-paragraph>
</s-box>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-box padding="base">
  <s-paragraph>
    Need help with policies? Read our <s-link href="javascript:void(0)" target="_blank">billing docs</s-link> or review the <s-link href="javascript:void(0)" target="_blank">terms of service</s-link>.
  </s-paragraph>
</s-box>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how to use the `lang` attribute to specify the language of a link, supporting internationalization and proper screen reader pronunciation.```jsx
<s-paragraph>
  Voir en français: <s-link lang="fr">Gérer les produits</s-link>
</s-paragraph>
```

```html
<s-paragraph>
  Voir en français: <s-link lang="fr">Gérer les produits</s-link>
</s-paragraph>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-paragraph>
  Voir en français: <s-link lang="fr">Gérer les produits</s-link>
</s-paragraph>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates how links can have different visual tones, including default, neutral, and critical, allowing for varied contextual styling.```jsx
<s-stack gap="base">
  <s-paragraph>
    Default tone: <s-link>View orders</s-link>
  </s-paragraph>

  <s-paragraph tone="success">
    Success tone: <s-link>Inventory help</s-link>
  </s-paragraph>

  <s-paragraph tone="critical">
    Critical tone: <s-link>Close store</s-link>
  </s-paragraph>

  <s-paragraph tone="warning">
    Warning tone: <s-link>Update billing info</s-link>
  </s-paragraph>

  <s-paragraph tone="info">
    Info tone: <s-link>Learn more about reports</s-link>
  </s-paragraph>

  <s-paragraph tone="caution">
    Caution tone: <s-link>View archived products</s-link>
  </s-paragraph>
</s-stack>
```

```html
<s-stack gap="base">
  <s-paragraph>
    Default tone: <s-link>View orders</s-link>
  </s-paragraph>

  <s-paragraph tone="success">
    Neutral tone: <s-link>Inventory help</s-link>
  </s-paragraph>

  <s-paragraph tone="critical">
    Critical tone: <s-link>Close store</s-link>
  </s-paragraph>

  <s-paragraph tone="warning">
    Warning tone: <s-link>Update billing info</s-link>
  </s-paragraph>

  <s-paragraph tone="info">
    Info tone: <s-link>Learn more about reports</s-link>
  </s-paragraph>

  <s-paragraph tone="caution">
    Subdued tone: <s-link>View archived products</s-link>
  </s-paragraph>
</s-stack>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><s-box padding="base" id="wrapper-element"></s-box><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-paragraph>
    Default tone: <s-link>View orders</s-link>
  </s-paragraph>

  <s-paragraph tone="success">
    Success tone: <s-link>Inventory help</s-link>
  </s-paragraph>

  <s-paragraph tone="critical">
    Critical tone: <s-link>Close store</s-link>
  </s-paragraph>

  <s-paragraph tone="warning">
    Warning tone: <s-link>Update billing info</s-link>
  </s-paragraph>

  <s-paragraph tone="info">
    Info tone: <s-link>Learn more about reports</s-link>
  </s-paragraph>

  <s-paragraph tone="caution">
    Caution tone: <s-link>View archived products</s-link>
  </s-paragraph>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

