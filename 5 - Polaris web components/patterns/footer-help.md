# Footer help

Footer help is used to refer merchants to more information related to the product or feature they’re using.

  | Used to | Examples |
  | --- | --- |
  | Refer merchants to related help docs |  Learn more about [shipping zones]|
  | Offer support as a secondary option  | [Contact us] about email marketing |

  ---
  

  


```jsx
<s-stack alignItems="center">
  <s-text>Learn more about <s-link href="">creating puzzles</s-link>.</s-text>
</s-stack>
```

```html
<s-stack alignItems="center">
  <s-text>Learn more about <s-link href="">creating puzzles</s-link>.</s-text>
</s-stack>
```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><div id="wrapper-element"><s-stack alignItems="center">
  <s-text>Learn more about <s-link href="">creating puzzles</s-link>.</s-text>
</s-stack></div></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack alignItems="center">
  <s-text>Learn more about <s-link href="">creating puzzles</s-link>.</s-text>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

