# Index table

An index table displays a collection of objects of the same type, like orders or products. The main job of an index table is to help merchants get an at-a-glance of the objects to perform actions or navigate to a full-page representation of it.
  | Used to | Examples |
  | --- | --- |
  | Display collections of similar objects | Products, orders, customers, discounts |
  | Perform bulk actions | Delete products, pause/activate campaigns |
  ---

  

```jsx
<s-section padding="none" accessibilityLabel="Puzzles table section">
  <s-table>
    <s-grid slot="filters" gap="small-200" gridTemplateColumns="1fr auto">
      <s-text-field
        label="Search puzzles"
        labelAccessibilityVisibility="exclusive"
        icon="search"
        placeholder="Searching all puzzles"
       />
      <s-button
        icon="sort"
        variant="secondary"
        accessibilityLabel="Sort"
        interestFor="sort-tooltip"
        commandFor="sort-actions"
       />
      <s-tooltip id="sort-tooltip">
        <s-text>Sort</s-text>
      </s-tooltip>
      <s-popover id="sort-actions">
        <s-stack gap="none">
          <s-box padding="small">
            <s-choice-list label="Sort by" name="Sort by">
              <s-choice value="puzzle-name" selected>
                Puzzle name
              </s-choice>
              <s-choice value="pieces">Pieces</s-choice>
              <s-choice value="created">Created</s-choice>
              <s-choice value="status">Status</s-choice>
            </s-choice-list>
          </s-box>
          <s-divider />
          <s-box padding="small">
            <s-choice-list label="Order by" name="Order by">
              <s-choice value="product-title" selected>
                A-Z
              </s-choice>
              <s-choice value="created">Z-A</s-choice>
            </s-choice-list>
          </s-box>
        </s-stack>
      </s-popover>
    </s-grid>
    <s-table-header-row>
      <s-table-header listSlot="primary">Puzzle</s-table-header>
      <s-table-header format="numeric">Pieces</s-table-header>
      <s-table-header>Created</s-table-header>
      <s-table-header listSlot="secondary">Status</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row clickDelegate="mountain-view-checkbox">
        <s-table-cell>
          <s-stack direction="inline" gap="small" alignItems="center">
            <s-checkbox id="mountain-view-checkbox" />
            <s-clickable
              href=""
              accessibilityLabel="Mountain View puzzle thumbnail"
              border="base"
              borderRadius="base"
              overflow="hidden"
              inlineSize="40px"
              blockSize="40px"
            >
              <s-image
                objectFit="cover"
                src="https://picsum.photos/id/29/80/80"
               />
            </s-clickable>
            <s-link href="">Mountain View</s-link>
          </s-stack>
        </s-table-cell>
        <s-table-cell>16</s-table-cell>
        <s-table-cell>Today</s-table-cell>
        <s-table-cell>
          <s-badge color="base" tone="success">
            Active
          </s-badge>
        </s-table-cell>
      </s-table-row>
      <s-table-row clickDelegate="ocean-sunset-checkbox">
        <s-table-cell>
          <s-stack direction="inline" gap="small" alignItems="center">
            <s-checkbox id="ocean-sunset-checkbox" />
            <s-clickable
              href=""
              accessibilityLabel="Ocean Sunset puzzle thumbnail"
              border="base"
              borderRadius="base"
              overflow="hidden"
              inlineSize="40px"
              blockSize="40px"
            >
              <s-image
                objectFit="cover"
                src="https://picsum.photos/id/12/80/80"
               />
            </s-clickable>
            <s-link href="">Ocean Sunset</s-link>
          </s-stack>
        </s-table-cell>
        <s-table-cell>9</s-table-cell>
        <s-table-cell>Yesterday</s-table-cell>
        <s-table-cell>
          <s-badge color="base" tone="success">
            Active
          </s-badge>
        </s-table-cell>
      </s-table-row>
      <s-table-row clickDelegate="forest-animals-checkbox">
        <s-table-cell>
          <s-stack direction="inline" gap="small" alignItems="center">
            <s-checkbox id="forest-animals-checkbox" />
            <s-clickable
              href=""
              accessibilityLabel="Forest Animals puzzle thumbnail"
              border="base"
              borderRadius="base"
              overflow="hidden"
              inlineSize="40px"
              blockSize="40px"
            >
              <s-image
                objectFit="cover"
                src="https://picsum.photos/id/324/80/80"
               />
            </s-clickable>
            <s-link href="">Forest Animals</s-link>
          </s-stack>
        </s-table-cell>
        <s-table-cell>25</s-table-cell>
        <s-table-cell>Last week</s-table-cell>
        <s-table-cell>
          <s-badge color="base" tone="neutral">
            Draft
          </s-badge>
        </s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>
```

```html
<s-section padding="none" accessibilityLabel="Puzzles table section">
  <s-table>
    <s-grid slot="filters" gap="small-200" gridTemplateColumns="1fr auto">
      <s-text-field
        label="Search puzzles"
        labelAccessibilityVisibility="exclusive"
        icon="search"
        placeholder="Searching all puzzles"
      ></s-text-field>
      <s-button
        icon="sort"
        variant="secondary"
        accessibilityLabel="Sort"
        interestFor="sort-tooltip"
        commandFor="sort-actions"
      ></s-button>
      <s-tooltip id="sort-tooltip">
        <s-text>Sort</s-text>
      </s-tooltip>
      <s-popover id="sort-actions">
        <s-stack gap="none">
          <s-box padding="small">
            <s-choice-list label="Sort by" name="Sort by">
              <s-choice value="puzzle-name" selected>Puzzle name</s-choice>
              <s-choice value="pieces">Pieces</s-choice>
              <s-choice value="created">Created</s-choice>
              <s-choice value="status">Status</s-choice>
            </s-choice-list>
          </s-box>
          <s-divider></s-divider>
          <s-box padding="small">
            <s-choice-list label="Order by" name="Order by">
              <s-choice value="product-title" selected>A-Z</s-choice>
              <s-choice value="created">Z-A</s-choice>
            </s-choice-list>
          </s-box>
        </s-stack>
      </s-popover>
    </s-grid>
    <s-table-header-row>
      <s-table-header listSlot="primary">Puzzle</s-table-header>
      <s-table-header format="numeric">Pieces</s-table-header>
      <s-table-header>Created</s-table-header>
      <s-table-header listSlot="secondary">Status</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row clickDelegate="mountain-view-checkbox">
        <s-table-cell>
          <s-stack direction="inline" gap="small" alignItems="center">
            <s-checkbox id="mountain-view-checkbox"></s-checkbox>
            <s-clickable
              href=""
              accessibilityLabel="Mountain View puzzle thumbnail"
              border="base"
              borderRadius="base"
              overflow="hidden"
              inlineSize="40px"
              blockSize="40px"
            >
              <s-image
                objectFit="cover"
                src="https://picsum.photos/id/29/80/80"
              ></s-image>
            </s-clickable>
            <s-link href="">Mountain View</s-link>
          </s-stack>
        </s-table-cell>
        <s-table-cell>16</s-table-cell>
        <s-table-cell>Today</s-table-cell>
        <s-table-cell>
          <s-badge color="base" tone="success">Active</s-badge>
        </s-table-cell>
      </s-table-row>
      <s-table-row clickDelegate="ocean-sunset-checkbox">
        <s-table-cell>
          <s-stack direction="inline" gap="small" alignItems="center">
            <s-checkbox id="ocean-sunset-checkbox"></s-checkbox>
            <s-clickable
              href=""
              accessibilityLabel="Ocean Sunset puzzle thumbnail"
              border="base"
              borderRadius="base"
              overflow="hidden"
              inlineSize="40px"
              blockSize="40px"
            >
              <s-image
                objectFit="cover"
                src="https://picsum.photos/id/12/80/80"
              ></s-image>
            </s-clickable>
            <s-link href="">Ocean Sunset</s-link>
          </s-stack>
        </s-table-cell>
        <s-table-cell>9</s-table-cell>
        <s-table-cell>Yesterday</s-table-cell>
        <s-table-cell>
          <s-badge color="base" tone="success">Active</s-badge>
        </s-table-cell>
      </s-table-row>
      <s-table-row clickDelegate="forest-animals-checkbox">
        <s-table-cell>
          <s-stack direction="inline" gap="small" alignItems="center">
            <s-checkbox id="forest-animals-checkbox"></s-checkbox>
            <s-clickable
              href=""
              accessibilityLabel="Forest Animals puzzle thumbnail"
              border="base"
              borderRadius="base"
              overflow="hidden"
              inlineSize="40px"
              blockSize="40px"
            >
              <s-image
                objectFit="cover"
                src="https://picsum.photos/id/324/80/80"
              ></s-image>
            </s-clickable>
            <s-link href="">Forest Animals</s-link>
          </s-stack>
        </s-table-cell>
        <s-table-cell>25</s-table-cell>
        <s-table-cell>Last week</s-table-cell>
        <s-table-cell>
          <s-badge color="base" tone="neutral">Draft</s-badge>
        </s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: center; gap: 0.5rem; min-height: 400px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section padding="none" accessibilityLabel="Puzzles table section">
  <s-table>
    <s-grid slot="filters" gap="small-200" gridTemplateColumns="1fr auto">
      <s-text-field
        label="Search puzzles"
        labelAccessibilityVisibility="exclusive"
        icon="search"
        placeholder="Searching all puzzles"
       />
      <s-button
        icon="sort"
        variant="secondary"
        accessibilityLabel="Sort"
        interestFor="sort-tooltip"
        commandFor="sort-actions"
       />
      <s-tooltip id="sort-tooltip">
        <s-text>Sort</s-text>
      </s-tooltip>
      <s-popover id="sort-actions">
        <s-stack gap="none">
          <s-box padding="small">
            <s-choice-list label="Sort by" name="Sort by">
              <s-choice value="puzzle-name" selected>
                Puzzle name
              </s-choice>
              <s-choice value="pieces">Pieces</s-choice>
              <s-choice value="created">Created</s-choice>
              <s-choice value="status">Status</s-choice>
            </s-choice-list>
          </s-box>
          <s-divider />
          <s-box padding="small">
            <s-choice-list label="Order by" name="Order by">
              <s-choice value="product-title" selected>
                A-Z
              </s-choice>
              <s-choice value="created">Z-A</s-choice>
            </s-choice-list>
          </s-box>
        </s-stack>
      </s-popover>
    </s-grid>
    <s-table-header-row>
      <s-table-header listSlot="primary">Puzzle</s-table-header>
      <s-table-header format="numeric">Pieces</s-table-header>
      <s-table-header>Created</s-table-header>
      <s-table-header listSlot="secondary">Status</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row clickDelegate="mountain-view-checkbox">
        <s-table-cell>
          <s-stack direction="inline" gap="small" alignItems="center">
            <s-checkbox id="mountain-view-checkbox" />
            <s-clickable
              href=""
              accessibilityLabel="Mountain View puzzle thumbnail"
              border="base"
              borderRadius="base"
              overflow="hidden"
              inlineSize="40px"
              blockSize="40px"
            >
              <s-image
                objectFit="cover"
                src="https://picsum.photos/id/29/80/80"
               />
            </s-clickable>
            <s-link href="">Mountain View</s-link>
          </s-stack>
        </s-table-cell>
        <s-table-cell>16</s-table-cell>
        <s-table-cell>Today</s-table-cell>
        <s-table-cell>
          <s-badge color="base" tone="success">
            Active
          </s-badge>
        </s-table-cell>
      </s-table-row>
      <s-table-row clickDelegate="ocean-sunset-checkbox">
        <s-table-cell>
          <s-stack direction="inline" gap="small" alignItems="center">
            <s-checkbox id="ocean-sunset-checkbox" />
            <s-clickable
              href=""
              accessibilityLabel="Ocean Sunset puzzle thumbnail"
              border="base"
              borderRadius="base"
              overflow="hidden"
              inlineSize="40px"
              blockSize="40px"
            >
              <s-image
                objectFit="cover"
                src="https://picsum.photos/id/12/80/80"
               />
            </s-clickable>
            <s-link href="">Ocean Sunset</s-link>
          </s-stack>
        </s-table-cell>
        <s-table-cell>9</s-table-cell>
        <s-table-cell>Yesterday</s-table-cell>
        <s-table-cell>
          <s-badge color="base" tone="success">
            Active
          </s-badge>
        </s-table-cell>
      </s-table-row>
      <s-table-row clickDelegate="forest-animals-checkbox">
        <s-table-cell>
          <s-stack direction="inline" gap="small" alignItems="center">
            <s-checkbox id="forest-animals-checkbox" />
            <s-clickable
              href=""
              accessibilityLabel="Forest Animals puzzle thumbnail"
              border="base"
              borderRadius="base"
              overflow="hidden"
              inlineSize="40px"
              blockSize="40px"
            >
              <s-image
                objectFit="cover"
                src="https://picsum.photos/id/324/80/80"
               />
            </s-clickable>
            <s-link href="">Forest Animals</s-link>
          </s-stack>
        </s-table-cell>
        <s-table-cell>25</s-table-cell>
        <s-table-cell>Last week</s-table-cell>
        <s-table-cell>
          <s-badge color="base" tone="neutral">
            Draft
          </s-badge>
        </s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

