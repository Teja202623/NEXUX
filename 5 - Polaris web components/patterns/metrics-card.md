# Metrics card

Metrics cards are used to highlight important numbers, statistics, or trends from your app, so merchants can quickly understand their activity and performance.
  
  
  | Used to | Examples |
  | --- | --- |
  | Show app-specific metrics | Email open rates, active subscribers |
  | Visualize user engagement | Social media followers, campaign clicks |
  ---


```jsx
<s-section padding="base">
  <s-grid
    gridTemplateColumns="@container (inline-size <= 400px) 1fr, 1fr auto 1fr auto 1fr"
    gap="small"
  >
    <s-clickable
      href=""
      paddingBlock="small-400"
      paddingInline="small-100"
      borderRadius="base"
    >
      <s-grid gap="small-300">
        <s-heading>Total Designs</s-heading>
        <s-stack direction="inline" gap="small-200">
          <s-text>156</s-text>
          <s-badge tone="success" icon="arrow-up">
            {" "}
            12%{" "}
          </s-badge>
        </s-stack>
      </s-grid>
    </s-clickable>
    <s-divider direction="block" />
    <s-clickable
      href=""
      paddingBlock="small-400"
      paddingInline="small-100"
      borderRadius="base"
    >
      <s-grid gap="small-300">
        <s-heading>Units Sold</s-heading>
        <s-stack direction="inline" gap="small-200">
          <s-text>2,847</s-text>
          <s-badge tone="warning">0%</s-badge>
        </s-stack>
      </s-grid>
    </s-clickable>
    <s-divider direction="block" />
    <s-clickable
      href=""
      paddingBlock="small-400"
      paddingInline="small-100"
      borderRadius="base"
    >
      <s-grid gap="small-300">
        <s-heading>Return Rate</s-heading>
        <s-stack direction="inline" gap="small-200">
          <s-text>3.2%</s-text>
          <s-badge tone="critical" icon="arrow-down">
            {" "}
            0.8%{" "}
          </s-badge>
        </s-stack>
      </s-grid>
    </s-clickable>
  </s-grid>
</s-section>
```

```html
<s-section padding="small">
    <s-grid
      gridTemplateColumns="@container (inline-size <= 400px) 1fr, 1fr auto 1fr auto 1fr"
      gap="small"
    >
      <s-clickable
        href=""
        paddingBlock="small-400"
        paddingInline="small-100"
        borderRadius="base"
      >
        <s-grid gap="small-300">
          <s-heading>Total Designs</s-heading>
          <s-stack direction="inline" gap="small-200">
            <s-text>156</s-text>
            <s-badge tone="success" icon="arrow-up"> 12% </s-badge>
          </s-stack>
        </s-grid>
      </s-clickable>
      <s-divider direction="block"></s-divider>
      <s-clickable
        href=""
        paddingBlock="small-400"
        paddingInline="small-100"
        borderRadius="base"
      >
        <s-grid gap="small-300">
          <s-heading>Units Sold</s-heading>
          <s-stack direction="inline" gap="small-200">
            <s-text>2,847</s-text>
            <s-badge tone="warning">0%</s-badge>
          </s-stack>
        </s-grid>
      </s-clickable>
      <s-divider direction="block"></s-divider>
      <s-clickable
        href=""
        paddingBlock="small-400"
        paddingInline="small-100"
        borderRadius="base"
      >
        <s-grid gap="small-300">
          <s-heading>Return Rate</s-heading>
          <s-stack direction="inline" gap="small-200">
            <s-text>3.2%</s-text>
            <s-badge tone="critical" icon="arrow-down"> 0.8% </s-badge>
          </s-stack>
        </s-grid>
      </s-clickable>
    </s-grid>
</s-section>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="base">
  <s-grid
    gridTemplateColumns="@container (inline-size <= 400px) 1fr, 1fr auto 1fr auto 1fr"
    gap="small"
  >
    <s-clickable
      href=""
      paddingBlock="small-400"
      paddingInline="small-100"
      borderRadius="base"
    >
      <s-grid gap="small-300">
        <s-heading>Total Designs</s-heading>
        <s-stack direction="inline" gap="small-200">
          <s-text>156</s-text>
          <s-badge tone="success" icon="arrow-up">
            {" "}
            12%{" "}
          </s-badge>
        </s-stack>
      </s-grid>
    </s-clickable>
    <s-divider direction="block" />
    <s-clickable
      href=""
      paddingBlock="small-400"
      paddingInline="small-100"
      borderRadius="base"
    >
      <s-grid gap="small-300">
        <s-heading>Units Sold</s-heading>
        <s-stack direction="inline" gap="small-200">
          <s-text>2,847</s-text>
          <s-badge tone="warning">0%</s-badge>
        </s-stack>
      </s-grid>
    </s-clickable>
    <s-divider direction="block" />
    <s-clickable
      href=""
      paddingBlock="small-400"
      paddingInline="small-100"
      borderRadius="base"
    >
      <s-grid gap="small-300">
        <s-heading>Return Rate</s-heading>
        <s-stack direction="inline" gap="small-200">
          <s-text>3.2%</s-text>
          <s-badge tone="critical" icon="arrow-down">
            {" "}
            0.8%{" "}
          </s-badge>
        </s-stack>
      </s-grid>
    </s-clickable>
  </s-grid>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

