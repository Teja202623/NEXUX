# Media card

Media cards provide a consistent layout to present visual information to merchants. Visual media is used to provide additional context to the written information it's paired with.

  | Used to | Examples |
  | --- | --- |
  | Educate merchants on key actions | Show how to connect a social account with a demo image |
  | Provide clear calls to action | Show campaign preview with a "Send campaign" button |

  ---
  

  


```jsx
<s-box
  border="base"
  borderRadius="base"
  overflow="hidden"
  maxInlineSize="216px"
>
  <s-clickable href="">
    <s-image
      aspectRatio="1/1"
      objectFit="cover"
      alt="Illustration of characters with a 4-piece puzzle"
      src="https://cdn.shopify.com/static/images/polaris/patterns/4-pieces.png"
     />
  </s-clickable>
  <s-divider />
  <s-grid
    gridTemplateColumns="1fr auto"
    background="base"
    padding="small"
    gap="small"
    alignItems="center"
  >
    <s-heading>4-Pieces</s-heading>
    <s-button href="" accessibilityLabel="View 4-pieces puzzle template">
      View
    </s-button>
  </s-grid>
</s-box>
```

```html
<s-box border="base" borderRadius="base" overflow="hidden" maxInlineSize="216px">
  <s-clickable href="">
    <s-image
      aspectRatio="1/1"
      objectFit="cover"
      alt="Illustration of characters with a 4-piece puzzle"
      src="https://cdn.shopify.com/static/images/polaris/patterns/4-pieces.png"
    ></s-image>
  </s-clickable>
  <s-divider></s-divider>
  <s-grid
    gridTemplateColumns="1fr auto"
    background="base"
    padding="small"
    gap="small"
    alignItems="center"
  >
    <s-heading>4-Pieces</s-heading>
    <s-button href="" accessibilityLabel="View 4-pieces puzzle template">
      View
    </s-button>
  </s-grid>
</s-box>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-box
  border="base"
  borderRadius="base"
  overflow="hidden"
  maxInlineSize="216px"
>
  <s-clickable href="">
    <s-image
      aspectRatio="1/1"
      objectFit="cover"
      alt="Illustration of characters with a 4-piece puzzle"
      src="https://cdn.shopify.com/static/images/polaris/patterns/4-pieces.png"
     />
  </s-clickable>
  <s-divider />
  <s-grid
    gridTemplateColumns="1fr auto"
    background="base"
    padding="small"
    gap="small"
    alignItems="center"
  >
    <s-heading>4-Pieces</s-heading>
    <s-button href="" accessibilityLabel="View 4-pieces puzzle template">
      View
    </s-button>
  </s-grid>
</s-box>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

