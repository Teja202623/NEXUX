# Callout card

Callout cards are used to encourage merchants to take an action related to a new feature or opportunity. They are most commonly displayed in the sales channels section of Shopify.
 
  | Used to | Examples |
  | --- | --- |
  | Promote new features or integrations | Dismissible feature announcement |
  | Drive adoption of app functionality | Common first actions |
  ---


```jsx
<s-section>
  <s-grid gridTemplateColumns="1fr auto" gap="small-400" alignItems="start">
    <s-grid
      gridTemplateColumns="@container (inline-size <= 480px) 1fr, auto auto"
      gap="base"
      alignItems="center"
    >
      <s-grid gap="small-200">
        <s-heading>Ready to create your custom puzzle?</s-heading>
        <s-paragraph>
          Start by uploading an image to your gallery or choose from one of our
          templates.
        </s-paragraph>
        <s-stack direction="inline" gap="small-200">
          <s-button> Upload image </s-button>
          <s-button tone="neutral" variant="tertiary">
            {" "}
            Browse templates{" "}
          </s-button>
        </s-stack>
      </s-grid>
      <s-stack alignItems="center">
        <s-box maxInlineSize="200px" borderRadius="base" overflow="hidden">
          <s-image
            src="https://cdn.shopify.com/static/images/polaris/patterns/callout.png"
            alt="Customize checkout illustration"
            aspectRatio="1/0.5"
           />
        </s-box>
      </s-stack>
    </s-grid>
    <s-button
      icon="x"
      tone="neutral"
      variant="tertiary"
      accessibilityLabel="Dismiss card"
     />
  </s-grid>
</s-section>
```

```html
<s-section>
  <s-grid gridTemplateColumns="1fr auto" gap="small-400" alignItems="start">
    <s-grid
      gridTemplateColumns="@container (inline-size <= 480px) 1fr, auto auto"
      gap="base"
      alignItems="center"
    >
      <s-grid gap="small-200">
        <s-heading>Ready to create your custom puzzle?</s-heading>
        <s-paragraph>
          Start by uploading an image to your gallery or choose from one of our templates.
        </s-paragraph>
        <s-stack direction="inline" gap="small-200">
          <s-button> Upload image </s-button>
          <s-button tone="neutral" variant="tertiary"> Browse templates </s-button>
        </s-stack>
      </s-grid>
      <s-stack alignItems="center">
        <s-box maxInlineSize="200px" borderRadius="base" overflow="hidden">
          <s-image
            src="https://cdn.shopify.com/static/images/polaris/patterns/callout.png"
            alt="Customize checkout illustration"
            aspectRatio="1/0.5"
          ></s-image>
        </s-box>
      </s-stack>
    </s-grid>
    <s-button
      icon="x"
      tone="neutral"
      variant="tertiary"
      accessibilityLabel="Dismiss card"
    ></s-button>
  </s-grid>
</s-section>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section>
  <s-grid gridTemplateColumns="1fr auto" gap="small-400" alignItems="start">
    <s-grid
      gridTemplateColumns="@container (inline-size <= 480px) 1fr, auto auto"
      gap="base"
      alignItems="center"
    >
      <s-grid gap="small-200">
        <s-heading>Ready to create your custom puzzle?</s-heading>
        <s-paragraph>
          Start by uploading an image to your gallery or choose from one of our
          templates.
        </s-paragraph>
        <s-stack direction="inline" gap="small-200">
          <s-button> Upload image </s-button>
          <s-button tone="neutral" variant="tertiary">
            {" "}
            Browse templates{" "}
          </s-button>
        </s-stack>
      </s-grid>
      <s-stack alignItems="center">
        <s-box maxInlineSize="200px" borderRadius="base" overflow="hidden">
          <s-image
            src="https://cdn.shopify.com/static/images/polaris/patterns/callout.png"
            alt="Customize checkout illustration"
            aspectRatio="1/0.5"
           />
        </s-box>
      </s-stack>
    </s-grid>
    <s-button
      icon="x"
      tone="neutral"
      variant="tertiary"
      accessibilityLabel="Dismiss card"
     />
  </s-grid>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

