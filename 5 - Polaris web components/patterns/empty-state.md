# Empty state

Empty states are used when a list, table, or chart has no items or data to show. This is an opportunity to provide explanation or guidance to help merchants progress. The empty state component is intended for use when a full page in the admin is empty, and not for individual elements or areas in the interface.

  | Used to | Examples |
  | --- | --- |
  | Offer a clear next step when no data is present | Prompt merchants to create their first campaign |
  | Encourage activation of features | Suggest setting up a subscription plan when none exist |
  ---


```jsx
<s-section accessibilityLabel="Empty state section">
  <s-grid gap="base" justifyItems="center" paddingBlock="large-400">
    <s-box maxInlineSize="200px" maxBlockSize="200px">
      {/* aspectRatio should match the actual image dimensions (width/height) */}
      <s-image
        aspectRatio="1/0.5"
        src="https://cdn.shopify.com/static/images/polaris/patterns/callout.png"
        alt="A stylized graphic of four characters, each holding a puzzle piece"
      />
    </s-box>
    <s-grid justifyItems="center" maxInlineSize="450px" gap="base">
      <s-stack alignItems="center">
        <s-heading>Start creating puzzles</s-heading>
        <s-paragraph>
          Create and manage your collection of puzzles for players to enjoy.
        </s-paragraph>
      </s-stack>
      <s-button-group>
        <s-button
          slot="secondary-actions"
          aria-label="Learn more about creating puzzles"
        >
          {" "}
          Learn more{" "}
        </s-button>
        <s-button slot="primary-action" aria-label="Add a new puzzle">
          {" "}
          Create puzzle{" "}
        </s-button>
      </s-button-group>
    </s-grid>
  </s-grid>
</s-section>
```

```html
<s-section accessibilityLabel="Empty state section">
  <s-grid gap="base" justifyItems="center" paddingBlock="large-400">
    <s-box maxInlineSize="200px" maxBlockSize="200px">
      <!-- aspectRatio should match the actual image dimensions (width/height) -->
      <s-image
        aspectRatio="1/0.5"
        src="https://cdn.shopify.com/static/images/polaris/patterns/callout.png"
        alt="A stylized graphic of four characters, each holding a puzzle piece"
      />
    </s-box>
    <s-grid
      justifyItems="center"
      maxInlineSize="450px"
      gap="base"
    >
    <s-stack alignItems="center">
      <s-heading>Start creating puzzles</s-heading>
      <s-paragraph>
        Create and manage your collection of puzzles for players to enjoy.
      </s-paragraph>
    </s-stack>
    <s-button-group>
      <s-button slot="secondary-actions" aria-label="Learn more about creating puzzles"> Learn more </s-button>
      <s-button slot="primary-action" aria-label="Add a new puzzle"> Create puzzle </s-button>
    </s-button-group>
    </s-grid>
  </s-grid>
</s-section>
```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><div id="wrapper-element"><s-section accessibilityLabel="Empty state section">
  <s-grid gap="base" justifyItems="center" paddingBlock="large-400">
    <s-box maxInlineSize="200px" maxBlockSize="200px">
      <!-- aspectRatio should match the actual image dimensions (width/height) -->
      <s-image
        aspectRatio="1/0.5"
        src="https://cdn.shopify.com/static/images/polaris/patterns/callout.png"
        alt="A stylized graphic of four characters, each holding a puzzle piece"
      />
    </s-box>
    <s-grid
      justifyItems="center"
      maxInlineSize="450px"
      gap="base"
    >
    <s-stack alignItems="center">
      <s-heading>Start creating puzzles</s-heading>
      <s-paragraph>
        Create and manage your collection of puzzles for players to enjoy.
      </s-paragraph>
    </s-stack>
    <s-button-group>
      <s-button slot="secondary-actions" aria-label="Learn more about creating puzzles"> Learn more </s-button>
      <s-button slot="primary-action" aria-label="Add a new puzzle"> Create puzzle </s-button>
    </s-button-group>
    </s-grid>
  </s-grid>
</s-section></div></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section accessibilityLabel="Empty state section">
  <s-grid gap="base" justifyItems="center" paddingBlock="large-400">
    <s-box maxInlineSize="200px" maxBlockSize="200px">
      {/* aspectRatio should match the actual image dimensions (width/height) */}
      <s-image
        aspectRatio="1/0.5"
        src="https://cdn.shopify.com/static/images/polaris/patterns/callout.png"
        alt="A stylized graphic of four characters, each holding a puzzle piece"
      />
    </s-box>
    <s-grid justifyItems="center" maxInlineSize="450px" gap="base">
      <s-stack alignItems="center">
        <s-heading>Start creating puzzles</s-heading>
        <s-paragraph>
          Create and manage your collection of puzzles for players to enjoy.
        </s-paragraph>
      </s-stack>
      <s-button-group>
        <s-button
          slot="secondary-actions"
          aria-label="Learn more about creating puzzles"
        >
          {" "}
          Learn more{" "}
        </s-button>
        <s-button slot="primary-action" aria-label="Add a new puzzle">
          {" "}
          Create puzzle{" "}
        </s-button>
      </s-button-group>
    </s-grid>
  </s-grid>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

