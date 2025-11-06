# Forms

Enable automatic save bar integration for HTML forms by adding the `data-save-bar` attribute to your form element. When form data changes, a save bar automatically appears, prompting users to save or discard their changes.

Alternatively, use the global `shopify.saveBar` API for programmatic control over the save bar behavior. Programmatic control of the save bar is available as `shopify.saveBar.show()`, `shopify.saveBar.hide()`, and `shopify.saveBar.toggle()`.

**Note:** The save bar functionality requires the full App Bridge UI library to be loaded via a [script tag](https://shopify.dev/docs/api/app-home/using-polaris-components).

```html
<form data-save-bar>
  <s-text-field
    label="Product Title"
    name="title"
    required
  ></s-text-field>

  <s-text-area
    label="Description"
    name="description"
    rows="4"
  ></s-text-area>

  <s-text-field
    label="Price"
    name="price"
    type="number"
    step="0.01"
    min="0"
  ></s-text-field>
</form>

```

## Enable save bar on forms

Simply add `data-save-bar` to your `<form>` element:
```html
<form data-save-bar>
  <!-- Your form fields -->
</form>
```


### _FormElement

### data-discard-confirmation

value: `boolean`


### data-save-bar

value: `boolean`


### onreset

value: `(event: Event) => void`


### onsubmit

value: `(event: SubmitEvent) => void`


## Related

- [Save bar](https://shopify.dev/docs/api/app-bridge/apis/save-bar)
- [Form validation](https://shopify.dev/docs/api/app-bridge/guides/form-validation)
- [Data management](https://shopify.dev/docs/api/app-bridge/guides/data-management)

## Examples

Enable automatic save bar integration for HTML forms by adding the `data-save-bar` attribute to your form element. When form data changes, a save bar automatically appears, prompting users to save or discard their changes.

Alternatively, use the global `shopify.saveBar` API for programmatic control over the save bar behavior. Programmatic control of the save bar is available as `shopify.saveBar.show()`, `shopify.saveBar.hide()`, and `shopify.saveBar.toggle()`.

**Note:** The save bar functionality requires the full App Bridge UI library to be loaded via a [script tag](https://shopify.dev/docs/api/app-home/using-polaris-components).


### Form integration examples

Basic form with automatic save bar functionality.```html
<form data-save-bar>
  <s-text-field
    label="Product Title"
    name="title"
    required
  ></s-text-field>

  <s-text-area
    label="Description"
    name="description"
    rows="4"
  ></s-text-area>

  <s-text-field
    label="Price"
    name="price"
    type="number"
    step="0.01"
    min="0"
  ></s-text-field>
</form>

```

Using the programmatic API for custom save logic.```html
<form id="custom-form">
  <s-text-field
    id="settings-name"
    label="Store Name"
  ></s-text-field>

  <s-checkbox
    id="settings-notifications"
    label="Enable email notifications"
  ></s-checkbox>
</form>

<script>
  // Track form changes manually
  const form = document.getElementById('custom-form');
  let hasChanges = false;

  form.addEventListener('input', () => {
    if (!hasChanges) {
      hasChanges = true;
      // Show save bar programmatically
      shopify.saveBar.show({
        onSave: async () => {
          // Custom save logic
          console.log('Saving form data...');
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          hasChanges = false;
          shopify.saveBar.hide();
        },
        onDiscard: () => {
          // Reset form
          form.reset();
          hasChanges = false;
          shopify.saveBar.hide();
        }
      });
    }
  });
</script>

```

Using the onsubmit and onreset events to handle form submission and reset.```html
<form
  data-save-bar
  onsubmit="console.log('submit');"
  onreset="console.log('reset');"
>
  <s-text-field label="Name" name="name"></s-text-field>
  <s-button type="submit">Submit</s-button>
  <s-button type="reset">Reset</s-button>
</form>

```

## Examples

Enable automatic save bar integration for HTML forms by adding the `data-save-bar` attribute to your form element. When form data changes, a save bar automatically appears, prompting users to save or discard their changes.

Alternatively, use the global `shopify.saveBar` API for programmatic control over the save bar behavior. Programmatic control of the save bar is available as `shopify.saveBar.show()`, `shopify.saveBar.hide()`, and `shopify.saveBar.toggle()`.

**Note:** The save bar functionality requires the full App Bridge UI library to be loaded via a [script tag](https://shopify.dev/docs/api/app-home/using-polaris-components).


### Form integration examples

Basic form with automatic save bar functionality.```html
<form data-save-bar>
  <s-text-field
    label="Product Title"
    name="title"
    required
  ></s-text-field>

  <s-text-area
    label="Description"
    name="description"
    rows="4"
  ></s-text-area>

  <s-text-field
    label="Price"
    name="price"
    type="number"
    step="0.01"
    min="0"
  ></s-text-field>
</form>

```

Using the programmatic API for custom save logic.```html
<form id="custom-form">
  <s-text-field
    id="settings-name"
    label="Store Name"
  ></s-text-field>

  <s-checkbox
    id="settings-notifications"
    label="Enable email notifications"
  ></s-checkbox>
</form>

<script>
  // Track form changes manually
  const form = document.getElementById('custom-form');
  let hasChanges = false;

  form.addEventListener('input', () => {
    if (!hasChanges) {
      hasChanges = true;
      // Show save bar programmatically
      shopify.saveBar.show({
        onSave: async () => {
          // Custom save logic
          console.log('Saving form data...');
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          hasChanges = false;
          shopify.saveBar.hide();
        },
        onDiscard: () => {
          // Reset form
          form.reset();
          hasChanges = false;
          shopify.saveBar.hide();
        }
      });
    }
  });
</script>

```

Using the onsubmit and onreset events to handle form submission and reset.```html
<form
  data-save-bar
  onsubmit="console.log('submit');"
  onreset="console.log('reset');"
>
  <s-text-field label="Name" name="name"></s-text-field>
  <s-button type="submit">Submit</s-button>
  <s-button type="reset">Reset</s-button>
</form>

```

