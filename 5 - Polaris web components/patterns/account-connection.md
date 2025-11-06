# Account connection

The account connection component is used so merchants can connect or disconnect their store to various accounts. For example, if merchants want to use the Facebook sales channel, they need to connect their Facebook account to their Shopify store.

  | Used to | Examples |
  | --- | --- |
  | Display connection status | Show if a sales channel is connected or disconnected |
  | Allow merchants to disconnect accounts  | Enable merchants to disconnect from a marketing platform |

  ---
  

  


```jsx
<s-section>
  <s-stack gap="base">
    <s-grid gridTemplateColumns="1fr auto" gap="base" alignItems="center">
      <s-grid-item>
        <s-stack>
          <s-heading>Puzzlify</s-heading>
          <s-text color="subdued">No account connected</s-text>
        </s-stack>
      </s-grid-item>
      <s-grid-item>
        <s-button variant="primary">Connect</s-button>
      </s-grid-item>
    </s-grid>
    <s-text>
      By clicking Connect, you agree to accept Sample App's terms and
      conditions. You'll pay a commission rate of 15% on sales made through
      Sample App.
    </s-text>
  </s-stack>
</s-section>
```

```html
<s-section>
  <s-stack gap="base">
  <s-grid gridTemplateColumns="1fr auto" gap="base" alignItems="center">
    <s-grid-item>
      <s-stack>
        <s-heading>Puzzlify</s-heading>
        <s-text color="subdued">No account connected</s-text>
      </s-stack>
    </s-grid-item>
    <s-grid-item>
      <s-button variant="primary">Connect</s-button>
    </s-grid-item>
  </s-grid>
  <s-text>By clicking Connect, you agree to accept Sample App's terms and conditions. You'll pay a commission rate of 15% on sales made through Sample App.</s-text>
</s-stack>
</s-section>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section>
  <s-stack gap="base">
    <s-grid gridTemplateColumns="1fr auto" gap="base" alignItems="center">
      <s-grid-item>
        <s-stack>
          <s-heading>Puzzlify</s-heading>
          <s-text color="subdued">No account connected</s-text>
        </s-stack>
      </s-grid-item>
      <s-grid-item>
        <s-button variant="primary">Connect</s-button>
      </s-grid-item>
    </s-grid>
    <s-text>
      By clicking Connect, you agree to accept Sample App's terms and
      conditions. You'll pay a commission rate of 15% on sales made through
      Sample App.
    </s-text>
  </s-stack>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

