# Resource list

A resource list displays a collection of objects of the same type, like products or customers. The main job of a resource list is to help merchants find an object and navigate to a full-page representation of it.
.

  | Used to | Examples |
  | --- | --- |
  | Display collections of similar resources |  Campaigns, subscribers, social posts, templates|
  | Help merchants find and select items  | Search subscribers by email; Filter campaigns by status |
  | Perform bulk actions on selected items  | Tag subscribers; Archive campaigns; Publish selected posts |

  ---
  

  


```jsx
<s-section padding="none">
  <s-stack gap="small-200">
    <s-grid gridTemplateColumns="1fr auto" gap="base" alignItems="center" paddingInline="base" paddingBlockStart="base">
      <s-grid gridTemplateColumns="1fr auto" gap="small-200" alignItems="center">
        <s-text-field icon="search" placeholder="Filter customers"></s-text-field>
        <s-button commandFor="tagged-with">Tagged with</s-button>
        <s-popover id="tagged-with">
          <s-stack gap="small-200" padding="small-200">
            <s-text-field value="VIP" placeholder="Add tag"></s-text-field>
            <s-link href="">Clear</s-link>
          </s-stack>
        </s-popover>
      </s-grid>
      <s-button variant="secondary">Save</s-button>
    </s-grid>

    <s-stack direction="inline"  gap="small-400" paddingInline="base">
      <s-clickable-chip removable>Tagged with VIP</s-clickable-chip>
    </s-stack>
    
    <s-grid gridTemplateColumns="1fr auto" gap="base" alignItems="center" paddingInline="base">
      <s-checkbox label="Showing 2 customers"></s-checkbox>
      <s-select>
        <s-option value="newest">Newest update</s-option>
        <s-option value="oldest">Oldest update</s-option>
      </s-select>
    </s-grid>
    
    <s-stack>
      <s-clickable borderStyle="solid none none none" border="base" paddingInline="base" paddingBlock="small">
        <s-grid gridTemplateColumns="1fr auto" gap="base" alignItems="center">
          <s-stack direction="inline" gap="small" alignItems="center">
            <s-checkbox></s-checkbox>
            <s-avatar></s-avatar>
            <s-stack>
              <s-heading>Mae Jemison</s-heading>
              <s-text>Decatur, USA</s-text>
            </s-stack>
          </s-stack>
          <s-button icon="menu-horizontal" variant="tertiary" accessibilityLabel="Actions for Mae Jemison"></s-button>
        </s-grid>
      </s-clickable>
      <s-clickable borderStyle="solid none none none" border="base" paddingInline="base" paddingBlock="small">
        <s-grid gridTemplateColumns="1fr auto" gap="base" alignItems="center">
          <s-stack direction="inline" gap="small" alignItems="center">
            <s-checkbox></s-checkbox>
            <s-avatar></s-avatar>
            <s-stack>
              <s-heading>Ellen Ochoa</s-heading>
              <s-text>Los Angeles, USA</s-text>
            </s-stack>
          </s-stack>
          <s-button icon="menu-horizontal" variant="tertiary" accessibilityLabel="Actions for Ellen Ochoa"></s-button>
        </s-grid>
      </s-clickable>
    </s-stack>
  </s-stack>
</s-section>
```

```html
<s-section padding="none">
  <s-stack gap="small-200">
    <s-grid gridTemplateColumns="1fr auto" gap="base" alignItems="center" paddingInline="base" paddingBlockStart="base">
      <s-grid gridTemplateColumns="1fr auto" gap="small-200" alignItems="center">
        <s-text-field icon="search" placeholder="Filter customers"></s-text-field>
        <s-button commandFor="tagged-with">Tagged with</s-button>
        <s-popover id="tagged-with">
          <s-stack gap="small-200" padding="small-200">
            <s-text-field value="VIP" placeholder="Add tag"></s-text-field>
            <s-link href="">Clear</s-link>
          </s-stack>
        </s-popover>
      </s-grid>
      <s-button variant="secondary">Save</s-button>
    </s-grid>

    <s-stack direction="inline"  gap="small-400" paddingInline="base">
      <s-clickable-chip removable>Tagged with VIP</s-clickable-chip>
    </s-stack>
    
    <s-grid gridTemplateColumns="1fr auto" gap="base" alignItems="center" paddingInline="base">
      <s-checkbox label="Showing 2 customers"></s-checkbox>
      <s-select>
        <s-option value="newest">Newest update</s-option>
        <s-option value="oldest">Oldest update</s-option>
      </s-select>
    </s-grid>
    
    <s-stack>
      <s-clickable borderStyle="solid none none none" border="base" paddingInline="base" paddingBlock="small">
        <s-grid gridTemplateColumns="1fr auto" gap="base" alignItems="center">
          <s-stack direction="inline" gap="small" alignItems="center">
            <s-checkbox></s-checkbox>
            <s-avatar></s-avatar>
            <s-stack>
              <s-heading>Mae Jemison</s-heading>
              <s-text>Decatur, USA</s-text>
            </s-stack>
          </s-stack>
          <s-button icon="menu-horizontal" variant="tertiary" accessibilityLabel="Actions for Mae Jemison"></s-button>
        </s-grid>
      </s-clickable>
      <s-clickable borderStyle="solid none none none" border="base" paddingInline="base" paddingBlock="small">
        <s-grid gridTemplateColumns="1fr auto" gap="base" alignItems="center">
          <s-stack direction="inline" gap="small" alignItems="center">
            <s-checkbox></s-checkbox>
            <s-avatar></s-avatar>
            <s-stack>
              <s-heading>Ellen Ochoa</s-heading>
              <s-text>Los Angeles, USA</s-text>
            </s-stack>
          </s-stack>
          <s-button icon="menu-horizontal" variant="tertiary" accessibilityLabel="Actions for Ellen Ochoa"></s-button>
        </s-grid>
      </s-clickable>
    </s-stack>
  </s-stack>
</s-section>
```

```preview
<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body><div id="wrapper-element"><s-section padding="none">
  <s-stack gap="small-200">
    <s-grid gridTemplateColumns="1fr auto" gap="base" alignItems="center" paddingInline="base" paddingBlockStart="base">
      <s-grid gridTemplateColumns="1fr auto" gap="small-200" alignItems="center">
        <s-text-field icon="search" placeholder="Filter customers"></s-text-field>
        <s-button commandFor="tagged-with">Tagged with</s-button>
        <s-popover id="tagged-with">
          <s-stack gap="small-200" padding="small-200">
            <s-text-field value="VIP" placeholder="Add tag"></s-text-field>
            <s-link href="">Clear</s-link>
          </s-stack>
        </s-popover>
      </s-grid>
      <s-button variant="secondary">Save</s-button>
    </s-grid>

    <s-stack direction="inline"  gap="small-400" paddingInline="base">
      <s-clickable-chip removable>Tagged with VIP</s-clickable-chip>
    </s-stack>
    
    <s-grid gridTemplateColumns="1fr auto" gap="base" alignItems="center" paddingInline="base">
      <s-checkbox label="Showing 2 customers"></s-checkbox>
      <s-select>
        <s-option value="newest">Newest update</s-option>
        <s-option value="oldest">Oldest update</s-option>
      </s-select>
    </s-grid>
    
    <s-stack>
      <s-clickable borderStyle="solid none none none" border="base" paddingInline="base" paddingBlock="small">
        <s-grid gridTemplateColumns="1fr auto" gap="base" alignItems="center">
          <s-stack direction="inline" gap="small" alignItems="center">
            <s-checkbox></s-checkbox>
            <s-avatar></s-avatar>
            <s-stack>
              <s-heading>Mae Jemison</s-heading>
              <s-text>Decatur, USA</s-text>
            </s-stack>
          </s-stack>
          <s-button icon="menu-horizontal" variant="tertiary" accessibilityLabel="Actions for Mae Jemison"></s-button>
        </s-grid>
      </s-clickable>
      <s-clickable borderStyle="solid none none none" border="base" paddingInline="base" paddingBlock="small">
        <s-grid gridTemplateColumns="1fr auto" gap="base" alignItems="center">
          <s-stack direction="inline" gap="small" alignItems="center">
            <s-checkbox></s-checkbox>
            <s-avatar></s-avatar>
            <s-stack>
              <s-heading>Ellen Ochoa</s-heading>
              <s-text>Los Angeles, USA</s-text>
            </s-stack>
          </s-stack>
          <s-button icon="menu-horizontal" variant="tertiary" accessibilityLabel="Actions for Ellen Ochoa"></s-button>
        </s-grid>
      </s-clickable>
    </s-stack>
  </s-stack>
</s-section></div></body></html>
```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem;} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none">
  <s-stack gap="small-200">
    <s-grid gridTemplateColumns="1fr auto" gap="base" alignItems="center" paddingInline="base" paddingBlockStart="base">
      <s-grid gridTemplateColumns="1fr auto" gap="small-200" alignItems="center">
        <s-text-field icon="search" placeholder="Filter customers"></s-text-field>
        <s-button commandFor="tagged-with">Tagged with</s-button>
        <s-popover id="tagged-with">
          <s-stack gap="small-200" padding="small-200">
            <s-text-field value="VIP" placeholder="Add tag"></s-text-field>
            <s-link href="">Clear</s-link>
          </s-stack>
        </s-popover>
      </s-grid>
      <s-button variant="secondary">Save</s-button>
    </s-grid>

    <s-stack direction="inline"  gap="small-400" paddingInline="base">
      <s-clickable-chip removable>Tagged with VIP</s-clickable-chip>
    </s-stack>
    
    <s-grid gridTemplateColumns="1fr auto" gap="base" alignItems="center" paddingInline="base">
      <s-checkbox label="Showing 2 customers"></s-checkbox>
      <s-select>
        <s-option value="newest">Newest update</s-option>
        <s-option value="oldest">Oldest update</s-option>
      </s-select>
    </s-grid>
    
    <s-stack>
      <s-clickable borderStyle="solid none none none" border="base" paddingInline="base" paddingBlock="small">
        <s-grid gridTemplateColumns="1fr auto" gap="base" alignItems="center">
          <s-stack direction="inline" gap="small" alignItems="center">
            <s-checkbox></s-checkbox>
            <s-avatar></s-avatar>
            <s-stack>
              <s-heading>Mae Jemison</s-heading>
              <s-text>Decatur, USA</s-text>
            </s-stack>
          </s-stack>
          <s-button icon="menu-horizontal" variant="tertiary" accessibilityLabel="Actions for Mae Jemison"></s-button>
        </s-grid>
      </s-clickable>
      <s-clickable borderStyle="solid none none none" border="base" paddingInline="base" paddingBlock="small">
        <s-grid gridTemplateColumns="1fr auto" gap="base" alignItems="center">
          <s-stack direction="inline" gap="small" alignItems="center">
            <s-checkbox></s-checkbox>
            <s-avatar></s-avatar>
            <s-stack>
              <s-heading>Ellen Ochoa</s-heading>
              <s-text>Los Angeles, USA</s-text>
            </s-stack>
          </s-stack>
          <s-button icon="menu-horizontal" variant="tertiary" accessibilityLabel="Actions for Ellen Ochoa"></s-button>
        </s-grid>
      </s-clickable>
    </s-stack>
  </s-stack>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

