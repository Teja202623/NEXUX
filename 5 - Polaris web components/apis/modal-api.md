# Modal API

The Modal API allows you to display an overlay that prevents interaction with the rest of the app until dismissed.

```html
<ui-modal id="my-modal">
  <p>Hello, World!</p>
</ui-modal>

<button onclick="shopify.modal.show('my-modal')">Open Modal</button>

```

## Modal

The `modal` API provides a `show` method to display a Modal, a `hide` method to hide a Modal, and a `toggle` method to toggle the visibility of a Modal. These are used in conjunction with the [`ui-modal` element](https://shopify.dev/docs/api/app-bridge-library/web-components/ui-modal). They are alternatives to the `show`, `hide`, and `toggle` instance methods.

### _ModalApi

### hide

value: `(id: string) => Promise<void>`

Hides the modal element. An alternative to the `hide` instance method on the `ui-modal` element.

### show

value: `(id: string) => Promise<void>`

Shows the modal element. An alternative to the `show` instance method on the `ui-modal` element.

### toggle

value: `(id: string) => Promise<void>`

Toggles the modal element visibility. An alternative to the `toggle` instance method on the `ui-modal` element.

## Related

- [ui-modal](https://shopify.dev/docs/api/app-bridge-library/web-components/ui-modal)
- [Modal](https://shopify.dev/docs/api/app-bridge-library/react-components/modal-component)

