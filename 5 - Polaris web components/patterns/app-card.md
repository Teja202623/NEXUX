# App card

App cards provide a consistent layout for presenting another app to merchants. They are used to highlight apps that can extend functionality or help merchants accomplish related tasks. App cards should educate merchants about the value of the suggested app and provide a clear, actionable way to learn more or install it.

  | Used to | Examples |
  | --- | --- |
  | Suggest complementary apps | Recommend an email marketing app to subscription service users |
  | Promote integrations | Highlight a social media scheduler that connects with your app |
  | Guide merchants to explore new solutions | Introduce a reporting tool for advanced analytics |

  ---
  

  


```jsx
<s-clickable
  href="https://apps.shopify.com/planet"
  border="base"
  borderRadius="base"
  padding="base"
  inlineSize="100%"
>
  <s-grid gridTemplateColumns="auto 1fr auto" alignItems="stretch" gap="base">
    <s-thumbnail
      size="small"
      src="https://cdn.shopify.com/app-store/listing_images/87176a11f3714753fdc2e1fc8bbf0415/icon/CIqiqqXsiIADEAE=.png"
      alt="Shopify Planet icon"
     />
    <s-box>
      <s-heading>Shopify Planet</s-heading>
      <s-paragraph>Free</s-paragraph>
      <s-paragraph>
        Offer carbon-neutral shipping and showcase your commitment.
      </s-paragraph>
    </s-box>
    <s-stack justifyContent="start">
      <s-button
        href="https://apps.shopify.com/planet"
        icon="download"
        accessibilityLabel="Download Shopify Planet"
       />
    </s-stack>
  </s-grid>
</s-clickable>
```

```html
<s-clickable
  href="https://apps.shopify.com/planet"
  border="base"
  borderRadius="base"
  padding="base"
  inlineSize="100%"
>
  <s-grid gridTemplateColumns="auto 1fr auto" alignItems="stretch" gap="base">
      <s-thumbnail
        size="small"
        src="https://cdn.shopify.com/app-store/listing_images/87176a11f3714753fdc2e1fc8bbf0415/icon/CIqiqqXsiIADEAE=.png"
        alt="Shopify Planet icon"
      ></s-thumbnail>
    <s-box>
      <s-heading>Shopify Planet</s-heading>
      <s-paragraph>Free</s-paragraph>
      <s-paragraph>
        Offer carbon-neutral shipping and showcase your commitment.
      </s-paragraph>
    </s-box>
    <s-stack justifyContent="start">
      <s-button
        href="https://apps.shopify.com/planet"
        icon="download"
        accessibilityLabel="Download Shopify Planet"
      ></s-button>
    </s-stack>
  </s-grid>
</s-clickable>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-clickable
  href="https://apps.shopify.com/planet"
  border="base"
  borderRadius="base"
  padding="base"
  inlineSize="100%"
>
  <s-grid gridTemplateColumns="auto 1fr auto" alignItems="stretch" gap="base">
    <s-thumbnail
      size="small"
      src="https://cdn.shopify.com/app-store/listing_images/87176a11f3714753fdc2e1fc8bbf0415/icon/CIqiqqXsiIADEAE=.png"
      alt="Shopify Planet icon"
     />
    <s-box>
      <s-heading>Shopify Planet</s-heading>
      <s-paragraph>Free</s-paragraph>
      <s-paragraph>
        Offer carbon-neutral shipping and showcase your commitment.
      </s-paragraph>
    </s-box>
    <s-stack justifyContent="start">
      <s-button
        href="https://apps.shopify.com/planet"
        icon="download"
        accessibilityLabel="Download Shopify Planet"
       />
    </s-stack>
  </s-grid>
</s-clickable>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

