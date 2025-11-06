# Setup guide

Setup guide provides an interactive checklist to guide merchants through essential onboarding or configuration tasks. Progress is tracked visually, helping merchants complete all required steps and understand what remains.
  | Used to | Examples |
  | --- | --- |
  | Onboard merchants | Initial app setup |
  | Track completion of multi-step processes | Necessary setup steps |
  ---


```jsx
<s-section>
  <s-grid gap="base">
    <s-grid gap="small-200">
      <s-grid
        gridTemplateColumns="1fr auto auto"
        gap="small-300"
        alignItems="center"
      >
        <s-heading>Setup Guide</s-heading>
        <s-button
          accessibilityLabel="Dismiss Guide"
          variant="tertiary"
          tone="neutral"
          icon="x"
         />
        <s-button
          accessibilityLabel="Toggle setup guide"
          variant="tertiary"
          tone="neutral"
          icon="chevron-up"
         />
      </s-grid>
      <s-paragraph>
        Use this personalized guide to get your store ready for sales.
      </s-paragraph>
      <s-paragraph color="subdued">0 out of 3 steps completed</s-paragraph>
    </s-grid>
    <s-box borderRadius="base" border="base" background="base">
      <s-box>
        <s-grid gridTemplateColumns="1fr auto" gap="base" padding="small">
          <s-checkbox label="Upload an image for your puzzle" />
          <s-button
            accessibilityLabel="Toggle step 1 details"
            variant="tertiary"
            icon="chevron-up"
           />
        </s-grid>
        <s-box padding="small" paddingBlockStart="none">
          <s-box padding="base" background="subdued" borderRadius="base">
            <s-grid
              gridTemplateColumns="1fr auto"
              gap="base"
              alignItems="center"
            >
              <s-grid gap="small-200">
                <s-paragraph>
                  Start by uploading a high-quality image that will be used to
                  create your puzzle. For best results, use images that are at
                  least 1200x1200 pixels.
                </s-paragraph>
                <s-stack direction="inline" gap="small-200">
                  <s-button variant="primary">Upload image</s-button>
                  <s-button variant="tertiary" tone="neutral">
                    {" "}
                    Image requirements{" "}
                  </s-button>
                </s-stack>
              </s-grid>
              <s-box maxBlockSize="80px" maxInlineSize="80px">
                <s-image
                  src="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
                  alt="Customize checkout illustration"
                 />
              </s-box>
            </s-grid>
          </s-box>
        </s-box>
      </s-box>
      <s-divider />
      <s-box>
        <s-grid gridTemplateColumns="1fr auto" gap="base" padding="small">
          <s-checkbox label="Choose a puzzle template" />
          <s-button
            accessibilityLabel="Toggle step 2 details"
            variant="tertiary"
            icon="chevron-down"
           />
        </s-grid>
        <s-box
          padding="small"
          paddingBlockStart="none"
         />
      </s-box>
      <s-divider />
      <s-box>
        <s-grid gridTemplateColumns="1fr auto" gap="base" padding="small">
          <s-checkbox label="Customize puzzle piece shapes" />
          <s-button
            accessibilityLabel="Toggle step 3 details"
            variant="tertiary"
            icon="chevron-down"
           />
        </s-grid>
        <s-box
          padding="small"
          paddingBlockStart="none"
         />
      </s-box>
    </s-box>
  </s-grid>
</s-section>
```

```html
<s-section>
  <s-grid gap="base">
    <s-grid gap="small-200">
      <s-grid gridTemplateColumns="1fr auto auto" gap="small-300" alignItems="center">
        <s-heading>Setup Guide</s-heading>
        <s-button
          accessibilityLabel="Dismiss Guide"
          variant="tertiary"
          tone="neutral"
          icon="x"
        ></s-button>
        <s-button
          accessibilityLabel="Toggle setup guide"
          variant="tertiary"
          tone="neutral"
          icon="chevron-up"
        ></s-button>
      </s-grid>
      <s-paragraph>
        Use this personalized guide to get your store ready for sales.
      </s-paragraph>
        <s-paragraph tone="subdued">0 out of 3 steps completed</s-paragraph>
    </s-grid>
    <s-box borderRadius="base" border="base" background="base">
      <s-box>
          <s-grid gridTemplateColumns="1fr auto" gap="base" padding="small">
            <s-checkbox
              label="Upload an image for your puzzle"
            ></s-checkbox>
            <s-button
              accessibilityLabel="Toggle step 1 details"
              variant="tertiary"
              icon="chevron-up"
            ></s-button>
          </s-grid>
        <s-box padding="small" paddingBlockStart="none">
          <s-box padding="base" background="subdued" borderRadius="base">
            <s-grid gridTemplateColumns="1fr auto" gap="base" alignItems="center">
              <s-grid gap="small-200">
                <s-paragraph>
                  Start by uploading a high-quality image that will be used to create your
                  puzzle. For best results, use images that are at least 1200x1200 pixels.
                </s-paragraph>
                <s-stack direction="inline" gap="small-200">
                  <s-button variant="primary">
                    Upload image
                  </s-button>
                  <s-button variant="tertiary" tone="neutral"> Image requirements </s-button>
                </s-stack>
              </s-grid>
              <s-box maxBlockSize="80px" maxInlineSize="80px">
                <s-image
                  src="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
                  alt="Customize checkout illustration"
                ></s-image>
              </s-box>
            </s-grid>
          </s-box>
        </s-box>
      </s-box>
      <s-divider></s-divider>
      <s-box>
          <s-grid gridTemplateColumns="1fr auto" gap="base" padding="small">
            <s-checkbox
              label="Choose a puzzle template"
            ></s-checkbox>
            <s-button
              accessibilityLabel="Toggle step 2 details"
              variant="tertiary"
              icon="chevron-down"
            ></s-button>
          </s-grid>
        <s-box padding="small" paddingBlockStart="none" style="display: none;"></s-box>
      </s-box>
      <s-divider></s-divider>
      <s-box>
          <s-grid gridTemplateColumns="1fr auto" gap="base" padding="small">
            <s-checkbox
              label="Customize puzzle piece shapes"
            ></s-checkbox>
            <s-button
              accessibilityLabel="Toggle step 3 details"
              variant="tertiary"
              icon="chevron-down"
            ></s-button>
          </s-grid>
        <s-box padding="small" paddingBlockStart="none" style="display: none;"></s-box>
      </s-box>
    </s-box>
  </s-grid>
</s-section>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section>
  <s-grid gap="base">
    <s-grid gap="small-200">
      <s-grid
        gridTemplateColumns="1fr auto auto"
        gap="small-300"
        alignItems="center"
      >
        <s-heading>Setup Guide</s-heading>
        <s-button
          accessibilityLabel="Dismiss Guide"
          variant="tertiary"
          tone="neutral"
          icon="x"
         />
        <s-button
          accessibilityLabel="Toggle setup guide"
          variant="tertiary"
          tone="neutral"
          icon="chevron-up"
         />
      </s-grid>
      <s-paragraph>
        Use this personalized guide to get your store ready for sales.
      </s-paragraph>
      <s-paragraph color="subdued">0 out of 3 steps completed</s-paragraph>
    </s-grid>
    <s-box borderRadius="base" border="base" background="base">
      <s-box>
        <s-grid gridTemplateColumns="1fr auto" gap="base" padding="small">
          <s-checkbox label="Upload an image for your puzzle" />
          <s-button
            accessibilityLabel="Toggle step 1 details"
            variant="tertiary"
            icon="chevron-up"
           />
        </s-grid>
        <s-box padding="small" paddingBlockStart="none">
          <s-box padding="base" background="subdued" borderRadius="base">
            <s-grid
              gridTemplateColumns="1fr auto"
              gap="base"
              alignItems="center"
            >
              <s-grid gap="small-200">
                <s-paragraph>
                  Start by uploading a high-quality image that will be used to
                  create your puzzle. For best results, use images that are at
                  least 1200x1200 pixels.
                </s-paragraph>
                <s-stack direction="inline" gap="small-200">
                  <s-button variant="primary">Upload image</s-button>
                  <s-button variant="tertiary" tone="neutral">
                    {" "}
                    Image requirements{" "}
                  </s-button>
                </s-stack>
              </s-grid>
              <s-box maxBlockSize="80px" maxInlineSize="80px">
                <s-image
                  src="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
                  alt="Customize checkout illustration"
                 />
              </s-box>
            </s-grid>
          </s-box>
        </s-box>
      </s-box>
      <s-divider />
      <s-box>
        <s-grid gridTemplateColumns="1fr auto" gap="base" padding="small">
          <s-checkbox label="Choose a puzzle template" />
          <s-button
            accessibilityLabel="Toggle step 2 details"
            variant="tertiary"
            icon="chevron-down"
           />
        </s-grid>
        <s-box
          padding="small"
          paddingBlockStart="none"
         />
      </s-box>
      <s-divider />
      <s-box>
        <s-grid gridTemplateColumns="1fr auto" gap="base" padding="small">
          <s-checkbox label="Customize puzzle piece shapes" />
          <s-button
            accessibilityLabel="Toggle step 3 details"
            variant="tertiary"
            icon="chevron-down"
           />
        </s-grid>
        <s-box
          padding="small"
          paddingBlockStart="none"
         />
      </s-box>
    </s-box>
  </s-grid>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

