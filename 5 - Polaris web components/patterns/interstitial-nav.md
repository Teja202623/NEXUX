# Interstitial nav

Interstitial navigation is used to connect merchants to deeper pages—such as settings, features, or resources—within a section of your app. It helps keep navigation clean and focused by avoiding multiple nested items, making it easier for merchants to discover and access important functionality.
 
  | Used to | Examples |
  | --- | --- |
  | Link to individual settings pages | Navigate from a settings overview to product settings or notification preferences |
  | Connect to feature-specific pages | Direct merchants from campaign overview to reporting or automation setup |
  | Guide merchants to supporting resources | Link to help documentation or integration guides from a central section |
  | Simplify navigation structure | Reduce clutter by providing access to deeper pages without multi-level menus |
  ---


```jsx
<s-section heading="Preferences">
  <s-box border="base" borderRadius="base">
    <s-clickable
      padding="small-100"
      href="#"
      accessibilityLabel="Configure shipping methods, rates, and fulfillment options"
    >
      <s-grid gridTemplateColumns="1fr auto" alignItems="center" gap="base">
        <s-box>
          <s-heading>Shipping & fulfillment</s-heading>
          <s-paragraph color="subdued">
            Shipping methods, rates, zones, and fulfillment preferences.
          </s-paragraph>
        </s-box>
        <s-icon type="chevron-right" />
      </s-grid>
    </s-clickable>
    <s-box paddingInline="small-100">
      <s-divider />
    </s-box>
    <s-clickable
      padding="small-100"
      href="#"
      accessibilityLabel="Configure product defaults, customer experience, and catalog settings"
    >
      <s-grid gridTemplateColumns="1fr auto" alignItems="center" gap="base">
        <s-box>
          <s-heading>Products & catalog</s-heading>
          <s-paragraph color="subdued">
            Product defaults, customer experience, and catalog display options.
          </s-paragraph>
        </s-box>
        <s-icon type="chevron-right" />
      </s-grid>
    </s-clickable>
    <s-box paddingInline="small-100">
      <s-divider />
    </s-box>
    <s-clickable
      padding="small-100"
      href="#"
      accessibilityLabel="Manage customer support settings and help resources"
    >
      <s-grid gridTemplateColumns="1fr auto" alignItems="center" gap="base">
        <s-box>
          <s-heading>Customer support</s-heading>
          <s-paragraph color="subdued">
            Support settings, help resources, and customer service tools.
          </s-paragraph>
        </s-box>
        <s-icon type="chevron-right" />
      </s-grid>
    </s-clickable>
  </s-box>
</s-section>
```

```html
<s-section heading="Preferences">
  <s-box
    border="base"
    borderRadius="base"
  >
    <s-clickable
      padding="small-100"
      href="#"
      accessibilityLabel="Configure shipping methods, rates, and fulfillment options"
    >
      <s-grid
        gridTemplateColumns="1fr auto"
        alignItems="center"
        gap="base"
      >
        <s-box>
          <s-heading>Shipping & fulfillment</s-heading>
          <s-paragraph color="subdued">
            Shipping methods, rates, zones, and fulfillment preferences.
          </s-paragraph>
        </s-box>
        <s-icon type="chevron-right"></s-icon>
      </s-grid>
    </s-clickable>
    <s-box paddingInline="small-100">
      <s-divider></s-divider>
    </s-box>
    <s-clickable
      padding="small-100"
      href="#"
      accessibilityLabel="Configure product defaults, customer experience, and catalog settings"
    >
      <s-grid
        gridTemplateColumns="1fr auto"
        alignItems="center"
        gap="base"
      >
        <s-box>
          <s-heading>Products & catalog</s-heading>
          <s-paragraph color="subdued">
            Product defaults, customer experience, and catalog display
            options.
          </s-paragraph>
        </s-box>
        <s-icon type="chevron-right"></s-icon>
      </s-grid>
    </s-clickable>
    <s-box paddingInline="small-100">
      <s-divider></s-divider>
    </s-box>
    <s-clickable
      padding="small-100"
      href="#"
      accessibilityLabel="Manage customer support settings and help resources"
    >
      <s-grid
        gridTemplateColumns="1fr auto"
        alignItems="center"
        gap="base"
      >
        <s-box>
          <s-heading>Customer support</s-heading>
          <s-paragraph color="subdued">
            Support settings, help resources, and customer service
            tools.
          </s-paragraph>
        </s-box>
        <s-icon type="chevron-right"></s-icon>
      </s-grid>
    </s-clickable>
  </s-box>
</s-section>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section heading="Preferences">
  <s-box border="base" borderRadius="base">
    <s-clickable
      padding="small-100"
      href="#"
      accessibilityLabel="Configure shipping methods, rates, and fulfillment options"
    >
      <s-grid gridTemplateColumns="1fr auto" alignItems="center" gap="base">
        <s-box>
          <s-heading>Shipping & fulfillment</s-heading>
          <s-paragraph color="subdued">
            Shipping methods, rates, zones, and fulfillment preferences.
          </s-paragraph>
        </s-box>
        <s-icon type="chevron-right" />
      </s-grid>
    </s-clickable>
    <s-box paddingInline="small-100">
      <s-divider />
    </s-box>
    <s-clickable
      padding="small-100"
      href="#"
      accessibilityLabel="Configure product defaults, customer experience, and catalog settings"
    >
      <s-grid gridTemplateColumns="1fr auto" alignItems="center" gap="base">
        <s-box>
          <s-heading>Products & catalog</s-heading>
          <s-paragraph color="subdued">
            Product defaults, customer experience, and catalog display options.
          </s-paragraph>
        </s-box>
        <s-icon type="chevron-right" />
      </s-grid>
    </s-clickable>
    <s-box paddingInline="small-100">
      <s-divider />
    </s-box>
    <s-clickable
      padding="small-100"
      href="#"
      accessibilityLabel="Manage customer support settings and help resources"
    >
      <s-grid gridTemplateColumns="1fr auto" alignItems="center" gap="base">
        <s-box>
          <s-heading>Customer support</s-heading>
          <s-paragraph color="subdued">
            Support settings, help resources, and customer service tools.
          </s-paragraph>
        </s-box>
        <s-icon type="chevron-right" />
      </s-grid>
    </s-clickable>
  </s-box>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

