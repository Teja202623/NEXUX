# DateField

Allow users to select a specific date with a date picker.

```jsx
<s-date-field defaultView="2025-09" defaultValue="2025-09-01" />
```

```html
<s-date-field defaultView="2025-09" defaultValue="2025-09-01"></s-date-field>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 300px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-date-field defaultView="2025-09" defaultValue="2025-09-01" />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Properties

### DateField

### __@internals$4@6764

value: `ElementInternals`


### adoptedCallback

value: `() => void`


### allow

value: `string`

Dates that can be selected.

A comma-separated list of dates, date ranges. Whitespace is allowed after commas.

The default `''` allows all dates.

- Dates in `YYYY-MM-DD` format allow a single date.
- Dates in `YYYY-MM` format allow a whole month.
- Dates in `YYYY` format allow a whole year.
- Ranges are expressed as `start--end`.     - Ranges are inclusive.
    - If either `start` or `end` is omitted, the range is unbounded in that direction.
    - If parts of the date are omitted for `start`, they are assumed to be the minimum possible value.
      So `2024--` is equivalent to `2024-01-01--`.
    - If parts of the date are omitted for `end`, they are assumed to be the maximum possible value.
      So `--2024` is equivalent to `--2024-12-31`.
    - Whitespace is allowed either side of `--`.

### allowDays

value: `string`

Days of the week that can be selected. These intersect with the result of `allow` and `disallow`.

A comma-separated list of days. Whitespace is allowed after commas.

The default `''` has no effect on the result of `allow` and `disallow`.

Days are `sunday`, `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`.

### attributeChangedCallback

value: `(name: string) => void`


### autocomplete

value: `DateAutocompleteField`

  - DateAutocompleteField: 'bday-day' | 'bday-month' | 'bday-year' | 'bday' | 'cc-expiry-month' | 'cc-expiry-year' | 'cc-expiry'
A hint as to the intended content of the field.

When set to `on` (the default), this property indicates that the field should support autofill, but you do not have any more semantic information on the intended contents.

When set to `off`, you are indicating that this field contains sensitive information, or contents that are never saved, like one-time codes.

Alternatively, you can provide value which describes the specific data you would like to be entered into this field during autofill.

### click

value: `({ sourceEvent }?: ClickOptions) => void`

  - ClickOptions: export interface ClickOptions {
  /**
   * The event you want to influence the synthetic click.
   */
  sourceEvent?: ActivationEventEsque;
}
Like the standard `element.click()`, but you can influence the behavior with a `sourceEvent`.

For example, if the `sourceEvent` was a middle click, or has particular keys held down, components will attempt to produce the desired behavior on links, such as opening the page in the background tab.

### connectedCallback

value: `() => void`


### defaultValue

value: `string`

The default value for the field.

### defaultView

value: `string`

Default month to display in `YYYY-MM` format.

This value is used until `view` is set, either directly or as a result of user interaction.

Defaults to the current month in the user's locale.

### details

value: `string`

Additional text to provide context or guidance for the field. This text is displayed along with the field and its label to offer more information or instructions to the user.

This will also be exposed to screen reader users.

### disabled

value: `boolean`

Disables the field, disallowing any interaction.

### disallow

value: `string`

Dates that cannot be selected. These subtract from `allow`.

A comma-separated list of dates, date ranges. Whitespace is allowed after commas.

The default `''` has no effect on `allow`.

- Dates in `YYYY-MM-DD` format disallow a single date.
- Dates in `YYYY-MM` format disallow a whole month.
- Dates in `YYYY` format disallow a whole year.
- Ranges are expressed as `start--end`.     - Ranges are inclusive.
    - If either `start` or `end` is omitted, the range is unbounded in that direction.
    - If parts of the date are omitted for `start`, they are assumed to be the minimum possible value.
      So `2024--` is equivalent to `2024-01-01--`.
    - If parts of the date are omitted for `end`, they are assumed to be the maximum possible value.
      So `--2024` is equivalent to `--2024-12-31`.
    - Whitespace is allowed either side of `--`.

### disallowDays

value: `string`

Days of the week that cannot be selected. This subtracts from `allowDays`, and intersects with the result of `allow` and `disallow`.

A comma-separated list of days. Whitespace is allowed after commas.

The default `''` has no effect on `allowDays`.

Days are `sunday`, `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`.

### disconnectedCallback

value: `() => void`


### error

value: `string`

Indicate an error to the user. The field will be given a specific stylistic treatment to communicate problems that have to be resolved immediately.

### formResetCallback

value: `() => void`


### getAttribute

value: `(qualifiedName: string) => string`

Global keyboard event handlers for things like key bindings typically ignore keystrokes originating from within input elements. Unfortunately, these never account for a Custom Element being the input element.

To fix this, we spoof getAttribute & hasAttribute to make a PreactFieldElement appear as a contentEditable "input" when it contains a focused input element.

### hasAttribute

value: `(qualifiedName: string) => boolean`


### id

value: `string`

A unique identifier for the element.

### isContentEditable

value: `boolean`

Checks if the shadow tree contains a focused input (input, textarea, select, <x contentEditable>). Note: this does _not_ return true for focussed non-field form elements like buttons.

### label

value: `string`

Content to use as the field label.

### labelAccessibilityVisibility

value: `"visible" | "exclusive"`

Changes the visibility of the component's label.

- `visible`: the label is visible to all users.
- `exclusive`: the label is visually hidden but remains in the accessibility tree.

### name

value: `string`

An identifier for the field that is unique within the nearest containing form.

### placeholder

value: `string`

A short hint that describes the expected value of the field.

### queueRender

value: `() => void`

Queue a run of the render function. You shouldn't need to call this manually - it should be handled by changes to

### readOnly

value: `boolean`

The field cannot be edited by the user. It is focusable will be announced by screen readers.

### required

value: `boolean`

Whether the field needs a value. This requirement adds semantic value to the field, but it will not cause an error to appear automatically. If you want to present an error when this field is empty, you can do so with the `error` property.

### setAttribute

value: `(name: string, value: string) => void`


### value

value: `string`

The current value for the field. If omitted, the field will be empty.

### view

value: `string`

Displayed month in `YYYY-MM` format.

`onViewChange` is called when this value changes.

Defaults to `defaultView`.

### ClickOptions

### sourceEvent

value: `ActivationEventEsque`

  - ActivationEventEsque: export interface ActivationEventEsque {
  shiftKey: boolean;
  metaKey: boolean;
  ctrlKey: boolean;
  button: number;
}
The event you want to influence the synthetic click.

### ActivationEventEsque

### button

value: `number`


### ctrlKey

value: `boolean`


### metaKey

value: `boolean`


### shiftKey

value: `boolean`


## Examples

Allow users to select a specific date with a date picker.


### Basic usage

Simple date field for collecting a single date with a descriptive label.```jsx
<s-date-field
  label="Order date"
  name="orderDate"
  placeholder="Select date"
 />
```

```html
<s-date-field
  label="Order date"
  name="orderDate"
  placeholder="Select date"
></s-date-field>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 350px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-date-field
  label="Order date"
  name="orderDate"
  placeholder="Select date"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Date field pre-populated with a specific date for editing existing data.```jsx
<s-date-field
  label="Shipping date"
  name="shippingDate"
  value="2024-03-15"
 />
```

```html
<s-date-field
  label="Shipping date"
  name="shippingDate"
  value="2024-03-15"
></s-date-field>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 350px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-date-field
  label="Shipping date"
  name="shippingDate"
  value="2024-03-15"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how to restrict selectable dates to weekdays only.```jsx
<s-date-field
  label="Delivery date"
  name="deliveryDate"
  disallowDays="[0, 6]"
  details="Delivery available Monday through Friday only"
 />
```

```html
<s-date-field
  label="Delivery date"
  name="deliveryDate"
  disallowDays="[0, 6]"
  details="Delivery available Monday through Friday only"
></s-date-field>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 350px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-date-field
  label="Delivery date"
  name="deliveryDate"
  disallowDays="[0, 6]"
  details="Delivery available Monday through Friday only"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates allowing only specific dates from a predefined list.```jsx
<s-date-field
  label="Available appointment dates"
  name="appointmentDate"
  allow='["2024-03-20", "2024-03-22", "2024-03-25", "2024-03-27"]'
  details="Select from available time slots"
 />
```

```html
<s-date-field
  label="Available appointment dates"
  name="appointmentDate"
  allow='["2024-03-20", "2024-03-22", "2024-03-25", "2024-03-27"]'
  details="Select from available time slots"
></s-date-field>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 350px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-date-field
  label="Available appointment dates"
  name="appointmentDate"
  allow='["2024-03-20", "2024-03-22", "2024-03-25", "2024-03-27"]'
  details="Select from available time slots"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Date field showing validation error for required field or invalid date entry.```jsx
<s-date-field
  label="Event date"
  error="Event date is required"
  required
/>
```

```html
<s-date-field
  label="Event date"
  name="eventDate"
  required
  error="Select a valid event date"
></s-date-field>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 350px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-date-field
  label="Event date"
  error="Event date is required"
  required
/>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows date fields in different interaction states for viewing-only or disabled forms.```jsx
<s-stack gap="base">
  <s-date-field
    label="Creation date"
    name="createdDate"
    value="2024-01-01"
    readOnly
   />

  <s-date-field
    label="Archived date"
    name="archivedDate"
    value="2024-02-15"
    disabled
   />
</s-stack>
```

```html
<s-stack gap="base">
  <s-date-field
    label="Creation date"
    name="createdDate"
    value="2024-01-01"
    readOnly
  ></s-date-field>

  <s-date-field
    label="Archived date"
    name="archivedDate"
    value="2024-02-15"
    disabled
  ></s-date-field>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 350px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-date-field
    label="Creation date"
    name="createdDate"
    value="2024-01-01"
    readOnly
   />

  <s-date-field
    label="Archived date"
    name="archivedDate"
    value="2024-02-15"
    disabled
   />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Complete form example showing date field with other form elements.```jsx
<form>
  <s-stack gap="base">
    <s-text-field
      label="Customer name"
      name="customerName"
      required
     />

    <s-date-field
      label="Order date"
      name="orderDate"
      value="2024-03-15"
      required
     />

    <s-date-field
      label="Requested delivery date"
      name="deliveryDate"
      disallowDays="[0, 6]"
      details="Weekdays only"
     />

    <s-button type="submit" variant="primary">
      Process order
    </s-button>
  </s-stack>
</form>
```

```html
<form>
  <s-stack gap="base">
    <s-text-field
      label="Customer name"
      name="customerName"
      required
    ></s-text-field>

    <s-date-field
      label="Order date"
      name="orderDate"
      value="2024-03-15"
      required
    ></s-date-field>

    <s-date-field
      label="Requested delivery date"
      name="deliveryDate"
      disallowDays="[0, 6]"
      details="Weekdays only"
    ></s-date-field>

    <s-button type="submit" variant="primary">Process order</s-button>
  </s-stack>
</form>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 350px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<form>
  <s-stack gap="base">
    <s-text-field
      label="Customer name"
      name="customerName"
      required
     />

    <s-date-field
      label="Order date"
      name="orderDate"
      value="2024-03-15"
      required
     />

    <s-date-field
      label="Requested delivery date"
      name="deliveryDate"
      disallowDays="[0, 6]"
      details="Weekdays only"
     />

    <s-button type="submit" variant="primary">
      Process order
    </s-button>
  </s-stack>
</form>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Example showing two date fields for selecting a date range.```jsx
<s-stack gap="base">
  <s-heading>Sales report period</s-heading>

  <s-stack direction="inline" gap="base">
    <s-date-field
      label="Start date"
      name="startDate"
      id="report-start"
     />

    <s-date-field
      label="End date"
      name="endDate"
      id="report-end"
     />
  </s-stack>

  <s-button variant="primary">Generate report</s-button>
</s-stack>
```

```html
<s-stack gap="base">
  <s-heading>Sales report period</s-heading>

  <s-stack direction="inline" gap="base">
    <s-date-field
      label="Start date"
      name="startDate"
      id="report-start"
    ></s-date-field>

    <s-date-field
      label="End date"
      name="endDate"
      id="report-end"
    ></s-date-field>
  </s-stack>

  <s-button variant="primary">Generate report</s-button>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 350px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-heading>Sales report period</s-heading>

  <s-stack direction="inline" gap="base">
    <s-date-field
      label="Start date"
      name="startDate"
      id="report-start"
     />

    <s-date-field
      label="End date"
      name="endDate"
      id="report-end"
     />
  </s-stack>

  <s-button variant="primary">Generate report</s-button>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates date fields with business logic restrictions and validation.```jsx
<s-section>
  <s-heading>Promotion settings</s-heading>
  <s-stack gap="base">
    <s-text-field
      label="Promotion name"
      name="promoName"
      value="Spring sale"
     />

    <s-date-field
      label="Start date"
      name="promoStart"
      value="2024-04-01"
      details="Promotion begins at midnight"
     />

    <s-date-field
      label="End date"
      name="promoEnd"
      value="2024-04-30"
      details="Promotion ends at 11:59 PM"
     />

    <s-checkbox
      name="autoPublish"
      label="Automatically publish on start date"
     />
  </s-stack>
</s-section>
```

```html
<s-section>
  <s-heading>Promotion settings</s-heading>
  <s-stack gap="base">
    <s-text-field
      label="Promotion name"
      name="promoName"
      value="Spring sale"
    ></s-text-field>

    <s-date-field
      label="Start date"
      name="promoStart"
      value="2024-04-01"
      details="Promotion begins at midnight"
    ></s-date-field>

    <s-date-field
      label="End date"
      name="promoEnd"
      value="2024-04-30"
      details="Promotion ends at 11:59 PM"
    ></s-date-field>

    <s-checkbox
      name="autoPublish"
      label="Automatically publish on start date"
    ></s-checkbox>
  </s-stack>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 550px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section>
  <s-heading>Promotion settings</s-heading>
  <s-stack gap="base">
    <s-text-field
      label="Promotion name"
      name="promoName"
      value="Spring sale"
     />

    <s-date-field
      label="Start date"
      name="promoStart"
      value="2024-04-01"
      details="Promotion begins at midnight"
     />

    <s-date-field
      label="End date"
      name="promoEnd"
      value="2024-04-30"
      details="Promotion ends at 11:59 PM"
     />

    <s-checkbox
      name="autoPublish"
      label="Automatically publish on start date"
     />
  </s-stack>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```


### Form validation

Interactive example showing required date field validation with dynamic error messages.```jsx
const [date, setDate] = useState('');
const [error, setError] = useState('Event date is required');

return (
  <s-section>
    <s-stack gap="base" justifyContent="start">
      <s-text-field label="Event name" />
      <s-date-field
        label="Event date"
        value={date}
        error={error}
        required
        onChange={(e) => {
          setDate(e.currentTarget.value);
          setError(e.currentTarget.value ? '' : 'Event date is required');
        }}
      />
    </s-stack>
  </s-section>
)
```

```html
<s-date-field
  label="Event date"
  name="eventDate"
  required
  error="Select a valid event date"
></s-date-field>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 450px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { const [date, setDate] = useState('');
const [error, setError] = useState('Event date is required');

return (
  <s-section>
    <s-stack gap="base" justifyContent="start">
      <s-text-field label="Event name" />
      <s-date-field
        label="Event date"
        value={date}
        error={error}
        required
        onChange={(e) => {
          setDate(e.currentTarget.value);
          setError(e.currentTarget.value ? '' : 'Event date is required');
        }}
      />
    </s-stack>
  </s-section>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Events

Learn more about [registering events](https://shopify.dev/docs/api/app-home/using-polaris-components#event-handling).

### DateFieldEvents

### blur

value: `CallbackEventListener<'input'>`

  - CallbackEventListener: (EventListener & {
      (event: CallbackEvent<T>): void;
    }) | null
  - CallbackEvent: Event & {
  currentTarget: HTMLElementTagNameMap[T];
}

### change

value: `CallbackEventListener<'input'>`

  - CallbackEventListener: (EventListener & {
      (event: CallbackEvent<T>): void;
    }) | null
  - CallbackEvent: Event & {
  currentTarget: HTMLElementTagNameMap[T];
}

### focus

value: `CallbackEventListener<'input'>`

  - CallbackEventListener: (EventListener & {
      (event: CallbackEvent<T>): void;
    }) | null
  - CallbackEvent: Event & {
  currentTarget: HTMLElementTagNameMap[T];
}

### input

value: `CallbackEventListener<'input'>`

  - CallbackEventListener: (EventListener & {
      (event: CallbackEvent<T>): void;
    }) | null
  - CallbackEvent: Event & {
  currentTarget: HTMLElementTagNameMap[T];
}

### invalid

value: `CallbackEventListener<typeof tagName> | null`

  - CallbackEventListener: (EventListener & {
      (event: CallbackEvent<T>): void;
    }) | null
  - CallbackEvent: Event & {
  currentTarget: HTMLElementTagNameMap[T];
}

### viewchange

value: `CallbackEventListener<typeof tagName> | null`

  - CallbackEventListener: (EventListener & {
      (event: CallbackEvent<T>): void;
    }) | null
  - CallbackEvent: Event & {
  currentTarget: HTMLElementTagNameMap[T];
}

## Examples

Allow users to select a specific date with a date picker.


### Basic usage

Simple date field for collecting a single date with a descriptive label.```jsx
<s-date-field
  label="Order date"
  name="orderDate"
  placeholder="Select date"
 />
```

```html
<s-date-field
  label="Order date"
  name="orderDate"
  placeholder="Select date"
></s-date-field>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 350px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-date-field
  label="Order date"
  name="orderDate"
  placeholder="Select date"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Date field pre-populated with a specific date for editing existing data.```jsx
<s-date-field
  label="Shipping date"
  name="shippingDate"
  value="2024-03-15"
 />
```

```html
<s-date-field
  label="Shipping date"
  name="shippingDate"
  value="2024-03-15"
></s-date-field>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 350px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-date-field
  label="Shipping date"
  name="shippingDate"
  value="2024-03-15"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how to restrict selectable dates to weekdays only.```jsx
<s-date-field
  label="Delivery date"
  name="deliveryDate"
  disallowDays="[0, 6]"
  details="Delivery available Monday through Friday only"
 />
```

```html
<s-date-field
  label="Delivery date"
  name="deliveryDate"
  disallowDays="[0, 6]"
  details="Delivery available Monday through Friday only"
></s-date-field>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 350px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-date-field
  label="Delivery date"
  name="deliveryDate"
  disallowDays="[0, 6]"
  details="Delivery available Monday through Friday only"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates allowing only specific dates from a predefined list.```jsx
<s-date-field
  label="Available appointment dates"
  name="appointmentDate"
  allow='["2024-03-20", "2024-03-22", "2024-03-25", "2024-03-27"]'
  details="Select from available time slots"
 />
```

```html
<s-date-field
  label="Available appointment dates"
  name="appointmentDate"
  allow='["2024-03-20", "2024-03-22", "2024-03-25", "2024-03-27"]'
  details="Select from available time slots"
></s-date-field>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 350px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-date-field
  label="Available appointment dates"
  name="appointmentDate"
  allow='["2024-03-20", "2024-03-22", "2024-03-25", "2024-03-27"]'
  details="Select from available time slots"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Date field showing validation error for required field or invalid date entry.```jsx
<s-date-field
  label="Event date"
  error="Event date is required"
  required
/>
```

```html
<s-date-field
  label="Event date"
  name="eventDate"
  required
  error="Select a valid event date"
></s-date-field>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 350px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-date-field
  label="Event date"
  error="Event date is required"
  required
/>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows date fields in different interaction states for viewing-only or disabled forms.```jsx
<s-stack gap="base">
  <s-date-field
    label="Creation date"
    name="createdDate"
    value="2024-01-01"
    readOnly
   />

  <s-date-field
    label="Archived date"
    name="archivedDate"
    value="2024-02-15"
    disabled
   />
</s-stack>
```

```html
<s-stack gap="base">
  <s-date-field
    label="Creation date"
    name="createdDate"
    value="2024-01-01"
    readOnly
  ></s-date-field>

  <s-date-field
    label="Archived date"
    name="archivedDate"
    value="2024-02-15"
    disabled
  ></s-date-field>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 350px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-date-field
    label="Creation date"
    name="createdDate"
    value="2024-01-01"
    readOnly
   />

  <s-date-field
    label="Archived date"
    name="archivedDate"
    value="2024-02-15"
    disabled
   />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Complete form example showing date field with other form elements.```jsx
<form>
  <s-stack gap="base">
    <s-text-field
      label="Customer name"
      name="customerName"
      required
     />

    <s-date-field
      label="Order date"
      name="orderDate"
      value="2024-03-15"
      required
     />

    <s-date-field
      label="Requested delivery date"
      name="deliveryDate"
      disallowDays="[0, 6]"
      details="Weekdays only"
     />

    <s-button type="submit" variant="primary">
      Process order
    </s-button>
  </s-stack>
</form>
```

```html
<form>
  <s-stack gap="base">
    <s-text-field
      label="Customer name"
      name="customerName"
      required
    ></s-text-field>

    <s-date-field
      label="Order date"
      name="orderDate"
      value="2024-03-15"
      required
    ></s-date-field>

    <s-date-field
      label="Requested delivery date"
      name="deliveryDate"
      disallowDays="[0, 6]"
      details="Weekdays only"
    ></s-date-field>

    <s-button type="submit" variant="primary">Process order</s-button>
  </s-stack>
</form>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 350px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<form>
  <s-stack gap="base">
    <s-text-field
      label="Customer name"
      name="customerName"
      required
     />

    <s-date-field
      label="Order date"
      name="orderDate"
      value="2024-03-15"
      required
     />

    <s-date-field
      label="Requested delivery date"
      name="deliveryDate"
      disallowDays="[0, 6]"
      details="Weekdays only"
     />

    <s-button type="submit" variant="primary">
      Process order
    </s-button>
  </s-stack>
</form>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Example showing two date fields for selecting a date range.```jsx
<s-stack gap="base">
  <s-heading>Sales report period</s-heading>

  <s-stack direction="inline" gap="base">
    <s-date-field
      label="Start date"
      name="startDate"
      id="report-start"
     />

    <s-date-field
      label="End date"
      name="endDate"
      id="report-end"
     />
  </s-stack>

  <s-button variant="primary">Generate report</s-button>
</s-stack>
```

```html
<s-stack gap="base">
  <s-heading>Sales report period</s-heading>

  <s-stack direction="inline" gap="base">
    <s-date-field
      label="Start date"
      name="startDate"
      id="report-start"
    ></s-date-field>

    <s-date-field
      label="End date"
      name="endDate"
      id="report-end"
    ></s-date-field>
  </s-stack>

  <s-button variant="primary">Generate report</s-button>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 350px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-heading>Sales report period</s-heading>

  <s-stack direction="inline" gap="base">
    <s-date-field
      label="Start date"
      name="startDate"
      id="report-start"
     />

    <s-date-field
      label="End date"
      name="endDate"
      id="report-end"
     />
  </s-stack>

  <s-button variant="primary">Generate report</s-button>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates date fields with business logic restrictions and validation.```jsx
<s-section>
  <s-heading>Promotion settings</s-heading>
  <s-stack gap="base">
    <s-text-field
      label="Promotion name"
      name="promoName"
      value="Spring sale"
     />

    <s-date-field
      label="Start date"
      name="promoStart"
      value="2024-04-01"
      details="Promotion begins at midnight"
     />

    <s-date-field
      label="End date"
      name="promoEnd"
      value="2024-04-30"
      details="Promotion ends at 11:59 PM"
     />

    <s-checkbox
      name="autoPublish"
      label="Automatically publish on start date"
     />
  </s-stack>
</s-section>
```

```html
<s-section>
  <s-heading>Promotion settings</s-heading>
  <s-stack gap="base">
    <s-text-field
      label="Promotion name"
      name="promoName"
      value="Spring sale"
    ></s-text-field>

    <s-date-field
      label="Start date"
      name="promoStart"
      value="2024-04-01"
      details="Promotion begins at midnight"
    ></s-date-field>

    <s-date-field
      label="End date"
      name="promoEnd"
      value="2024-04-30"
      details="Promotion ends at 11:59 PM"
    ></s-date-field>

    <s-checkbox
      name="autoPublish"
      label="Automatically publish on start date"
    ></s-checkbox>
  </s-stack>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 550px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section>
  <s-heading>Promotion settings</s-heading>
  <s-stack gap="base">
    <s-text-field
      label="Promotion name"
      name="promoName"
      value="Spring sale"
     />

    <s-date-field
      label="Start date"
      name="promoStart"
      value="2024-04-01"
      details="Promotion begins at midnight"
     />

    <s-date-field
      label="End date"
      name="promoEnd"
      value="2024-04-30"
      details="Promotion ends at 11:59 PM"
     />

    <s-checkbox
      name="autoPublish"
      label="Automatically publish on start date"
     />
  </s-stack>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```


### Form validation

Interactive example showing required date field validation with dynamic error messages.```jsx
const [date, setDate] = useState('');
const [error, setError] = useState('Event date is required');

return (
  <s-section>
    <s-stack gap="base" justifyContent="start">
      <s-text-field label="Event name" />
      <s-date-field
        label="Event date"
        value={date}
        error={error}
        required
        onChange={(e) => {
          setDate(e.currentTarget.value);
          setError(e.currentTarget.value ? '' : 'Event date is required');
        }}
      />
    </s-stack>
  </s-section>
)
```

```html
<s-date-field
  label="Event date"
  name="eventDate"
  required
  error="Select a valid event date"
></s-date-field>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 450px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { const [date, setDate] = useState('');
const [error, setError] = useState('Event date is required');

return (
  <s-section>
    <s-stack gap="base" justifyContent="start">
      <s-text-field label="Event name" />
      <s-date-field
        label="Event date"
        value={date}
        error={error}
        required
        onChange={(e) => {
          setDate(e.currentTarget.value);
          setError(e.currentTarget.value ? '' : 'Event date is required');
        }}
      />
    </s-stack>
  </s-section>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

## Examples

Allow users to select a specific date with a date picker.


### Basic usage

Simple date field for collecting a single date with a descriptive label.```jsx
<s-date-field
  label="Order date"
  name="orderDate"
  placeholder="Select date"
 />
```

```html
<s-date-field
  label="Order date"
  name="orderDate"
  placeholder="Select date"
></s-date-field>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 350px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-date-field
  label="Order date"
  name="orderDate"
  placeholder="Select date"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Date field pre-populated with a specific date for editing existing data.```jsx
<s-date-field
  label="Shipping date"
  name="shippingDate"
  value="2024-03-15"
 />
```

```html
<s-date-field
  label="Shipping date"
  name="shippingDate"
  value="2024-03-15"
></s-date-field>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 350px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-date-field
  label="Shipping date"
  name="shippingDate"
  value="2024-03-15"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows how to restrict selectable dates to weekdays only.```jsx
<s-date-field
  label="Delivery date"
  name="deliveryDate"
  disallowDays="[0, 6]"
  details="Delivery available Monday through Friday only"
 />
```

```html
<s-date-field
  label="Delivery date"
  name="deliveryDate"
  disallowDays="[0, 6]"
  details="Delivery available Monday through Friday only"
></s-date-field>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 350px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-date-field
  label="Delivery date"
  name="deliveryDate"
  disallowDays="[0, 6]"
  details="Delivery available Monday through Friday only"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates allowing only specific dates from a predefined list.```jsx
<s-date-field
  label="Available appointment dates"
  name="appointmentDate"
  allow='["2024-03-20", "2024-03-22", "2024-03-25", "2024-03-27"]'
  details="Select from available time slots"
 />
```

```html
<s-date-field
  label="Available appointment dates"
  name="appointmentDate"
  allow='["2024-03-20", "2024-03-22", "2024-03-25", "2024-03-27"]'
  details="Select from available time slots"
></s-date-field>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 350px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-date-field
  label="Available appointment dates"
  name="appointmentDate"
  allow='["2024-03-20", "2024-03-22", "2024-03-25", "2024-03-27"]'
  details="Select from available time slots"
 />) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Date field showing validation error for required field or invalid date entry.```jsx
<s-date-field
  label="Event date"
  error="Event date is required"
  required
/>
```

```html
<s-date-field
  label="Event date"
  name="eventDate"
  required
  error="Select a valid event date"
></s-date-field>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 350px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-date-field
  label="Event date"
  error="Event date is required"
  required
/>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Shows date fields in different interaction states for viewing-only or disabled forms.```jsx
<s-stack gap="base">
  <s-date-field
    label="Creation date"
    name="createdDate"
    value="2024-01-01"
    readOnly
   />

  <s-date-field
    label="Archived date"
    name="archivedDate"
    value="2024-02-15"
    disabled
   />
</s-stack>
```

```html
<s-stack gap="base">
  <s-date-field
    label="Creation date"
    name="createdDate"
    value="2024-01-01"
    readOnly
  ></s-date-field>

  <s-date-field
    label="Archived date"
    name="archivedDate"
    value="2024-02-15"
    disabled
  ></s-date-field>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 350px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-date-field
    label="Creation date"
    name="createdDate"
    value="2024-01-01"
    readOnly
   />

  <s-date-field
    label="Archived date"
    name="archivedDate"
    value="2024-02-15"
    disabled
   />
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Complete form example showing date field with other form elements.```jsx
<form>
  <s-stack gap="base">
    <s-text-field
      label="Customer name"
      name="customerName"
      required
     />

    <s-date-field
      label="Order date"
      name="orderDate"
      value="2024-03-15"
      required
     />

    <s-date-field
      label="Requested delivery date"
      name="deliveryDate"
      disallowDays="[0, 6]"
      details="Weekdays only"
     />

    <s-button type="submit" variant="primary">
      Process order
    </s-button>
  </s-stack>
</form>
```

```html
<form>
  <s-stack gap="base">
    <s-text-field
      label="Customer name"
      name="customerName"
      required
    ></s-text-field>

    <s-date-field
      label="Order date"
      name="orderDate"
      value="2024-03-15"
      required
    ></s-date-field>

    <s-date-field
      label="Requested delivery date"
      name="deliveryDate"
      disallowDays="[0, 6]"
      details="Weekdays only"
    ></s-date-field>

    <s-button type="submit" variant="primary">Process order</s-button>
  </s-stack>
</form>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 350px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<form>
  <s-stack gap="base">
    <s-text-field
      label="Customer name"
      name="customerName"
      required
     />

    <s-date-field
      label="Order date"
      name="orderDate"
      value="2024-03-15"
      required
     />

    <s-date-field
      label="Requested delivery date"
      name="deliveryDate"
      disallowDays="[0, 6]"
      details="Weekdays only"
     />

    <s-button type="submit" variant="primary">
      Process order
    </s-button>
  </s-stack>
</form>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Example showing two date fields for selecting a date range.```jsx
<s-stack gap="base">
  <s-heading>Sales report period</s-heading>

  <s-stack direction="inline" gap="base">
    <s-date-field
      label="Start date"
      name="startDate"
      id="report-start"
     />

    <s-date-field
      label="End date"
      name="endDate"
      id="report-end"
     />
  </s-stack>

  <s-button variant="primary">Generate report</s-button>
</s-stack>
```

```html
<s-stack gap="base">
  <s-heading>Sales report period</s-heading>

  <s-stack direction="inline" gap="base">
    <s-date-field
      label="Start date"
      name="startDate"
      id="report-start"
    ></s-date-field>

    <s-date-field
      label="End date"
      name="endDate"
      id="report-end"
    ></s-date-field>
  </s-stack>

  <s-button variant="primary">Generate report</s-button>
</s-stack>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 350px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-stack gap="base">
  <s-heading>Sales report period</s-heading>

  <s-stack direction="inline" gap="base">
    <s-date-field
      label="Start date"
      name="startDate"
      id="report-start"
     />

    <s-date-field
      label="End date"
      name="endDate"
      id="report-end"
     />
  </s-stack>

  <s-button variant="primary">Generate report</s-button>
</s-stack>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

Demonstrates date fields with business logic restrictions and validation.```jsx
<s-section>
  <s-heading>Promotion settings</s-heading>
  <s-stack gap="base">
    <s-text-field
      label="Promotion name"
      name="promoName"
      value="Spring sale"
     />

    <s-date-field
      label="Start date"
      name="promoStart"
      value="2024-04-01"
      details="Promotion begins at midnight"
     />

    <s-date-field
      label="End date"
      name="promoEnd"
      value="2024-04-30"
      details="Promotion ends at 11:59 PM"
     />

    <s-checkbox
      name="autoPublish"
      label="Automatically publish on start date"
     />
  </s-stack>
</s-section>
```

```html
<s-section>
  <s-heading>Promotion settings</s-heading>
  <s-stack gap="base">
    <s-text-field
      label="Promotion name"
      name="promoName"
      value="Spring sale"
    ></s-text-field>

    <s-date-field
      label="Start date"
      name="promoStart"
      value="2024-04-01"
      details="Promotion begins at midnight"
    ></s-date-field>

    <s-date-field
      label="End date"
      name="promoEnd"
      value="2024-04-30"
      details="Promotion ends at 11:59 PM"
    ></s-date-field>

    <s-checkbox
      name="autoPublish"
      label="Automatically publish on start date"
    ></s-checkbox>
  </s-stack>
</s-section>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 550px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { return (<s-section>
  <s-heading>Promotion settings</s-heading>
  <s-stack gap="base">
    <s-text-field
      label="Promotion name"
      name="promoName"
      value="Spring sale"
     />

    <s-date-field
      label="Start date"
      name="promoStart"
      value="2024-04-01"
      details="Promotion begins at midnight"
     />

    <s-date-field
      label="End date"
      name="promoEnd"
      value="2024-04-30"
      details="Promotion ends at 11:59 PM"
     />

    <s-checkbox
      name="autoPublish"
      label="Automatically publish on start date"
     />
  </s-stack>
</s-section>) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```


### Form validation

Interactive example showing required date field validation with dynamic error messages.```jsx
const [date, setDate] = useState('');
const [error, setError] = useState('Event date is required');

return (
  <s-section>
    <s-stack gap="base" justifyContent="start">
      <s-text-field label="Event name" />
      <s-date-field
        label="Event date"
        value={date}
        error={error}
        required
        onChange={(e) => {
          setDate(e.currentTarget.value);
          setError(e.currentTarget.value ? '' : 'Event date is required');
        }}
      />
    </s-stack>
  </s-section>
)
```

```html
<s-date-field
  label="Event date"
  name="eventDate"
  required
  error="Select a valid event date"
></s-date-field>

```

```preview
<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {box-sizing: border-box; margin: 0; padding: 0.5rem; display: grid; place-items: start center; gap: 0.5rem; min-height: 450px} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body><div id="wrapper-element"></div><script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = `const App = () => { const [date, setDate] = useState('');
const [error, setError] = useState('Event date is required');

return (
  <s-section>
    <s-stack gap="base" justifyContent="start">
      <s-text-field label="Event name" />
      <s-date-field
        label="Event date"
        value={date}
        error={error}
        required
        onChange={(e) => {
          setDate(e.currentTarget.value);
          setError(e.currentTarget.value ? '' : 'Event date is required');
        }}
      />
    </s-stack>
  </s-section>
) };`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
</html>

```

