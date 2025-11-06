# App Window

The `s-app-window` component displays a fullscreen modal window. It allows you to open up a page in your app specified by the `src` property. You can use this when you have larger or complex workflows that you want to display. The app window covers the entirety of the screen. The top bar of the app window is controlled by the admin and allows the user to exit if needed.

```html
<s-app-window id="app-window" src="/app-window-content.html"></s-app-window>

<s-button command="--show" commandFor="app-window">Open App Window</s-button>


```

## s-app-window element

The `s-app-window` element is available for use in your app. It configures a App Window to display in the Shopify Admin.

The content of the app window is specified by the src property and should point to a route within your app.

### SAppWindowAttributes

### id

value: `string`

A unique identifier for the S-App-Window

### src

value: `string`

The URL of the content to display within the S-App-Window. S-App-Window only supports src-based content (required).

## Related

- [Modal](https://shopify.dev/docs/api/app-home/apis/modal)
- [Modal](https://shopify.dev/docs/api/app-home/polaris-components/modal)

## Examples

The `s-app-window` component displays a fullscreen modal window. It allows you to open up a page in your app specified by the `src` property. You can use this when you have larger or complex workflows that you want to display. The app window covers the entirety of the screen. The top bar of the app window is controlled by the admin and allows the user to exit if needed.


### App Window title bar options

App Window title```html
<s-app-window src="/app-window-content.html"></s-app-window>

// app-window-content.html
<s-page heading="App Window Title"></s-page>

```

App Window title bar actions```html
<s-app-window src="/app-window-content.html"></s-app-window>

// app-window-content.html
<s-page heading="App Window Title">
  <s-button slot="primary-action" onclick="shopify.toast.show('Save')">Save</s-button>
  <s-button slot="secondary-actions" onclick="shopify.toast.show('Close')">Close</s-button>
</s-page>

```


### Controlling the App Window

Controlling the App Window with the show and hide methods```html
<s-app-window id="app-window" src="/app-window-content.html"></s-app-window>

<s-button onclick="document.getElementById('app-window').show()">Show App Window</s-button>
<s-button onclick="document.getElementById('app-window').hide()">Hide App Window</s-button>

```

Controlling the App Window with the command attribute```html
<s-app-window id="app-window" src="/app-window-content.html"></s-app-window>

<s-button command="--show" commandFor="app-window">Open App Window</s-button>
<s-button command="--hide" commandFor="app-window">Hide App Window</s-button>
<s-button command="--toggle" commandFor="app-window">Toggle App Window</s-button>

```

## s-app-window instance

The `s-app-window` element provides instance properties and methods to control the App Window.

### _SAppWindowElement

### addEventListener

value: `(type: "show" | "hide", listener: EventListenerOrEventListenerObject) => void`

Add 'show' | 'hide' event listeners.

### content

value: `undefined`

Always returns undefined for s-app-window (src-only)

### contentWindow

value: `Window | null`

A getter for the Window object of the s-app-window iframe. Only accessible when the s-app-window is open.

### hide

value: `() => Promise<void>`

Hides the s-app-window element

### removeEventListener

value: `(type: "show" | "hide", listener: EventListenerOrEventListenerObject) => void`

Remove 'show' | 'hide' event listeners.

### show

value: `() => Promise<void>`

Shows the s-app-window element

### src

value: `string`

A getter/setter for the s-app-window src URL

### toggle

value: `() => Promise<void>`

Toggles the s-app-window element between showing and hidden states

## Related

- [Modal](https://shopify.dev/docs/api/app-home/apis/modal)
- [Modal](https://shopify.dev/docs/api/app-home/polaris-components/modal)

## Examples

The `s-app-window` component displays a fullscreen modal window. It allows you to open up a page in your app specified by the `src` property. You can use this when you have larger or complex workflows that you want to display. The app window covers the entirety of the screen. The top bar of the app window is controlled by the admin and allows the user to exit if needed.


### App Window title bar options

App Window title```html
<s-app-window src="/app-window-content.html"></s-app-window>

// app-window-content.html
<s-page heading="App Window Title"></s-page>

```

App Window title bar actions```html
<s-app-window src="/app-window-content.html"></s-app-window>

// app-window-content.html
<s-page heading="App Window Title">
  <s-button slot="primary-action" onclick="shopify.toast.show('Save')">Save</s-button>
  <s-button slot="secondary-actions" onclick="shopify.toast.show('Close')">Close</s-button>
</s-page>

```


### Controlling the App Window

Controlling the App Window with the show and hide methods```html
<s-app-window id="app-window" src="/app-window-content.html"></s-app-window>

<s-button onclick="document.getElementById('app-window').show()">Show App Window</s-button>
<s-button onclick="document.getElementById('app-window').hide()">Hide App Window</s-button>

```

Controlling the App Window with the command attribute```html
<s-app-window id="app-window" src="/app-window-content.html"></s-app-window>

<s-button command="--show" commandFor="app-window">Open App Window</s-button>
<s-button command="--hide" commandFor="app-window">Hide App Window</s-button>
<s-button command="--toggle" commandFor="app-window">Toggle App Window</s-button>

```

## Examples

The `s-app-window` component displays a fullscreen modal window. It allows you to open up a page in your app specified by the `src` property. You can use this when you have larger or complex workflows that you want to display. The app window covers the entirety of the screen. The top bar of the app window is controlled by the admin and allows the user to exit if needed.


### App Window title bar options

App Window title```html
<s-app-window src="/app-window-content.html"></s-app-window>

// app-window-content.html
<s-page heading="App Window Title"></s-page>

```

App Window title bar actions```html
<s-app-window src="/app-window-content.html"></s-app-window>

// app-window-content.html
<s-page heading="App Window Title">
  <s-button slot="primary-action" onclick="shopify.toast.show('Save')">Save</s-button>
  <s-button slot="secondary-actions" onclick="shopify.toast.show('Close')">Close</s-button>
</s-page>

```


### Controlling the App Window

Controlling the App Window with the show and hide methods```html
<s-app-window id="app-window" src="/app-window-content.html"></s-app-window>

<s-button onclick="document.getElementById('app-window').show()">Show App Window</s-button>
<s-button onclick="document.getElementById('app-window').hide()">Hide App Window</s-button>

```

Controlling the App Window with the command attribute```html
<s-app-window id="app-window" src="/app-window-content.html"></s-app-window>

<s-button command="--show" commandFor="app-window">Open App Window</s-button>
<s-button command="--hide" commandFor="app-window">Hide App Window</s-button>
<s-button command="--toggle" commandFor="app-window">Toggle App Window</s-button>

```

