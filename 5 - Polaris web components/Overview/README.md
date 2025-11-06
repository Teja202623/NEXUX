# App home

The [app home](https://shopify.dev/docs/apps/admin/embedded-app-home) is the primary surface for merchants to interact with your app, providing access to data and UI rendering within the Shopify Admin. Using Polaris components and App Bridge, you can integrate using the Web Platform APIs you're already familiar with, making it easy to build and maintain performant apps on the Shopify platform.

## Getting started

To build for the App Home we recommend adding App Bridge and the Polaris Web Components to your application.

Polaris web components provide a consistent UI experience that matches the Shopify Admin while leveraging standard web platform features. To use these components in your app, you need to include the Polaris script in your application.

Apps that use these components can also include pre-built UI [patterns](https://shopify.dev/docs/api/app-home/patterns) that are implemented using Polaris web components. These patterns help you quickly build consistent, familiar experiences for merchants that follow Shopify's design guidelines.

### New React Router Application

Start building your app fast with the Shopify CLI and the [Shopify React Router App template](https://github.com/Shopify/shopify-app-template-react-router). The CLI will set up App Bridge and the Polaris Web Components for you.

You will need to select:
 1. Select Build a React Router app (recommended)
 2. Select JavaScript OR TypeScript.

```shell
shopify app init

```


### Existing Remix Application

Add the Polaris Web Components script tag to your `app/root.tsx` file's `<head>`.

To use the Remix router you will need to control the custom event `shopify:navigate` and push that into `useNavigate`.

```jsx
import {useNavigate} from '@remix-run/react';

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleNavigate = (event) => {
      const href = event.target.getAttribute('href');
      if (href) navigate(href);
    };

    document.addEventListener('shopify:navigate', handleNavigate);
    return () => {
      document.removeEventListener('shopify:navigate', handleNavigate);
    };
  }, [navigate]);

  return (
    <html>
      <head>
        ...
        <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script>
      </head>
      ...
    </html>
  );
}

```


### Build your own way

When building your own way add the script tag right after the existing App Bridge script tag in your HTML head.

```html
<head>
  <meta name="shopify-api-key" content="%SHOPIFY_API_KEY%" />
  <script src="https://cdn.shopify.com/shopifycloud/app-bridge.js"></script>
  <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script>
</head>

```


## Your first API call

The following example uses [`Resource Picker`](https://shopify.dev/docs/api/app-home/apis/resource-picker) to open a UI component that enables users to browse, find, and select products from their store using a familiar experiences.
```html
<!DOCTYPE html>

<head>
  <meta name="shopify-api-key" content="%SHOPIFY_API_KEY%" />
  <script src="https://cdn.shopify.com/shopifycloud/app-bridge.js"></script>
</head>

<body>
  <button id="open-picker">Open resource picker</button>
  <script>
    document
      .getElementById('open-picker')
      .addEventListener('click', async () => {
        const selected = await shopify.resourcePicker({type: 'product'});
        console.log(selected);
      });
  </script>
</body>

```


## TypeScript

Shopify App Bridge provides a companion npm library for TypeScript types, available at [`@shopify/app-bridge-types`](https://www.npmjs.com/package/@shopify/app-bridge-types).

If you're using the [React library](https://shopify.dev/docs/api/app-bridge-library#react), then the types package is already included.

Additionally, Shopify provides a companion npm library for Polaris web components types, available at [`@shopify/polaris-types`](https://www.npmjs.com/package/@shopify/polaris-types).

### App Bridge Installation

The `@shopify/app-bridge-types` package can be installed using `yarn` or `npm`.

```shell
npm install --save-dev @shopify/app-bridge-types

```

```shell
yarn add --dev @shopify/app-bridge-types

```


### App Bridge Configuration

Adding the `@shopify/app-bridge-types` package to your `tsconfig.json` file will enable type checking for all files in your project.

```json
{
  "compilerOptions": {
    "types": ["@shopify/app-bridge-types"]
  }
}

```


### Polaris Web Components Installation

The `@shopify/polaris-types` package can be installed using `yarn` or `npm`. Specify `latest` in package.json if using https://cdn.shopify.com/shopifycloud/polaris.js.

```shell
npm install --save-dev @shopify/polaris-types

```

```shell
yarn add --dev @shopify/polaris-types

```

```json
{
  "devDependencies": {
    "@shopify/polaris-types": "latest"
  }
}

```


### Polaris Web Components Configuration

Adding the `@shopify/polaris-types` package to your `tsconfig.json` file will enable type checking for all files in your project.

```json
{
  "compilerOptions": {
    "types": ["@shopify/polaris-types"]
  }
}

```


## Global variable

After App Bridge is set up in your app, you have access to the `shopify` global variable. This variable exposes various App Bridge functionalities, such as [displaying toast notifications](https://shopify.dev/docs/api/app-home/apis/toast) or [retrieving app configuration details](https://shopify.dev/docs/api/app-home/apis/config).

To explore all the functionality available on the `shopify` global variable:

1. Open the Chrome developer console while in the Shopify admin.
2. Switch the frame context to your app's `iframe`.
3. Enter `shopify` in the console.

## Direct API access

You can make requests to the Admin API directly from your app using the standard [web `fetch` API](https://developer.mozilla.org/en-US/docs/Web/API/fetch)!

Any `fetch()` calls from your app to Shopify's Admin GraphQL API are automatically authenticated by default. These calls are fast too, because Shopify handles requests directly.

Direct API access is disabled by default. It can be [enabled](https://shopify.dev/docs/apps/tools/cli/configuration#admin) in your app TOML file, along with whether you want to use direct API access with [online access](https://shopify.dev/docs/apps/auth/oauth/access-modes#online-access) or [offline access](https://shopify.dev/docs/apps/auth/oauth/access-modes#offline-access) mode.
```js
const res = await fetch('shopify:admin/api/2025-04/graphql.json', {
  method: 'POST',
  body: JSON.stringify({
    query: `
      query GetProduct($id: ID!) {
        product(id: $id) {
          title
        }
      }
    `,
    variables: {id: 'gid://shopify/Product/1234567890'},
  }),
});

const {data} = await res.json();
console.log(data);

```

- [Learn more about API access modes](https://shopify.dev/docs/apps/tools/cli/configuration): Configuration guide

## Migration

If you have an app that uses components and hooks from Shopify App Bridge React 3.x.x, then you can follow the [migration guide](https://shopify.dev/docs/api/app-bridge/migration-guide) to upgrade your components and hooks to the latest version.

## Next steps

Now that you've initialized your app, you can use any [Shopify App Bridge features](https://shopify.dev/docs/api/app-home/apis).

## References

- [App Nav](https://shopify.dev/docs/api/app-home/app-bridge-web-components/app-nav): Creates a navigation menu for your app.
- [App Window](https://shopify.dev/docs/api/app-home/app-bridge-web-components/app-window): Displays a fullscreen modal window.
- [Forms](https://shopify.dev/docs/api/app-home/app-bridge-web-components/forms): Automatically manage save state for forms in your app.
- [Title bar](https://shopify.dev/docs/api/app-home/app-bridge-web-components/title-bar): Manage the title bar for your app.
- [App](https://shopify.dev/docs/api/app-home/apis/app): Access information about the app
- [Config](https://shopify.dev/docs/api/app-home/apis/config): Configuration information for your app
- [Environment](https://shopify.dev/docs/api/app-home/apis/environment): Platform information for App Home
- [Resource Fetching](https://shopify.dev/docs/api/app-home/apis/resource-fetching): Send an authenticated fetch request
- [ID Token](https://shopify.dev/docs/api/app-home/apis/id-token): Retrieves an ID token from Shopify
- [Intents](https://shopify.dev/docs/api/app-home/apis/intents): Orchestrate workflows and operations across Shopify resources
- [Loading](https://shopify.dev/docs/api/app-home/apis/loading): Displays a loading indicator
- [Modal API](https://shopify.dev/docs/api/app-home/apis/modal-api): Displays an overlay with important information.
- [Navigation](https://shopify.dev/docs/api/app-home/apis/navigation): Allows you to navigate within and outside of your app
- [Picker](https://shopify.dev/docs/api/app-home/apis/picker): Opens a Picker in your app
- [POS](https://shopify.dev/docs/api/app-home/apis/pos): Interact and retrieve data for the POS
- [Print](https://shopify.dev/docs/api/app-home/apis/print): Print the App Home page from a mobile device
- [useAppBridge](https://shopify.dev/docs/api/app-home/apis/react-hooks/useappbridge): Enables you to access the `shopify` global in your app.
- [Resource Picker](https://shopify.dev/docs/api/app-home/apis/resource-picker): Opens a Resource Picker in your app
- [Reviews](https://shopify.dev/docs/api/app-home/apis/reviews): Request an app review modal in the Shopify admin
- [Save Bar](https://shopify.dev/docs/api/app-home/apis/save-bar): Display a save bar when a form has unsaved changes.
- [Scanner](https://shopify.dev/docs/api/app-home/apis/scanner): Use the mobile device's camera to scan barcodes
- [Scopes](https://shopify.dev/docs/api/app-home/apis/scopes): Manage optional access scopes
- [Share](https://shopify.dev/docs/api/app-home/apis/share): Share content from your App Home on a mobile device
- [Support](https://shopify.dev/docs/api/app-home/apis/support): Register a custom handler for support requests.
- [Toast](https://shopify.dev/docs/api/app-home/apis/toast): Creates a Toast notification in your app
- [User](https://shopify.dev/docs/api/app-home/apis/user): Retrieves information about the current user
- [Web Vitals](https://shopify.dev/docs/api/app-home/apis/web-vitals): Monitor Web Vitals for your app
- [Avatar](https://shopify.dev/docs/api/app-home/polaris-web-components/media/avatar): Show a user’s profile image or initials in a compact, visual element.
- [Badge](https://shopify.dev/docs/api/app-home/polaris-web-components/titles-and-text/badge): Inform users about the status of an object or indicate that an action has been completed.
- [Banner](https://shopify.dev/docs/api/app-home/polaris-web-components/feedback/banner): Highlights important information or required actions prominently within the interface. Use to communicate statuses, provide feedback, or draw attention to critical updates.
- [Box](https://shopify.dev/docs/api/app-home/polaris-web-components/structure/box): A generic container that provides a flexible alternative for custom designs not achievable with existing components. Use it to apply styling such as backgrounds, padding, or borders, or to nest and group other components. The contents of Box always maintain their natural size, making it especially useful within layout components that would otherwise stretch their children.
- [Button](https://shopify.dev/docs/api/app-home/polaris-web-components/actions/button): Triggers actions or events, such as submitting forms, opening dialogs, or navigating to other pages. Use Button to let users perform specific tasks or initiate interactions throughout the interface. Buttons can also function as links, guiding users to internal or external destinations.
- [ButtonGroup](https://shopify.dev/docs/api/app-home/polaris-web-components/actions/buttongroup): Displays multiple buttons in a layout.
- [Checkbox](https://shopify.dev/docs/api/app-home/polaris-web-components/forms/checkbox): Give users a clear way to make selections, such as agreeing to terms or choosing multiple items from a list.
- [Chip](https://shopify.dev/docs/api/app-home/polaris-web-components/titles-and-text/chip): Represents a set of user-supplied keywords that help label, organize, and categorize objects. Used to categorize or highlight content attributes. They are often displayed near the content they classify, enhancing discoverability by allowing users to identify items with similar properties.
- [ChoiceList](https://shopify.dev/docs/api/app-home/polaris-web-components/forms/choicelist): Present multiple options to users, allowing either single selections with radio buttons or multiple selections with checkboxes.
- [Clickable](https://shopify.dev/docs/api/app-home/polaris-web-components/actions/clickable): A generic interactive container component that provides a flexible alternative for custom interactive elements not achievable with existing components like Button or Link. Use it to apply specific styling such as backgrounds, padding, or borders.
- [ClickableChip](https://shopify.dev/docs/api/app-home/polaris-web-components/actions/clickablechip): Interactive button used to categorize or highlight content attributes. They are often displayed near the content they classify, enhancing discoverability by allowing users to identify items with similar properties.
- [ColorField](https://shopify.dev/docs/api/app-home/polaris-web-components/forms/colorfield): Allow users to select a color with a color picker or as a text input.
- [ColorPicker](https://shopify.dev/docs/api/app-home/polaris-web-components/forms/colorpicker): Allow users to select a color from a color palette.
- [DateField](https://shopify.dev/docs/api/app-home/polaris-web-components/forms/datefield): Allow users to select a specific date with a date picker.
- [DatePicker](https://shopify.dev/docs/api/app-home/polaris-web-components/forms/datepicker): Allow users to select a specific date or date range.
- [Divider](https://shopify.dev/docs/api/app-home/polaris-web-components/structure/divider): Create clear visual separation between elements in your user interface.
- [DropZone](https://shopify.dev/docs/api/app-home/polaris-web-components/forms/dropzone): Lets users upload files through drag-and-drop functionality into a designated area on a page, or by activating a button.
- [EmailField](https://shopify.dev/docs/api/app-home/polaris-web-components/forms/emailfield): Let users enter email addresses with optimized keyboard settings.
- [Grid](https://shopify.dev/docs/api/app-home/polaris-web-components/structure/grid): Use `s-grid` to organize your content in a matrix of rows and columns and make responsive layouts for pages. Grid follows the same pattern as the [CSS grid layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout).
- [Heading](https://shopify.dev/docs/api/app-home/polaris-web-components/titles-and-text/heading): Renders hierarchical titles to communicate the structure and organization of page content. Heading levels adjust automatically based on nesting within parent Section components, ensuring a meaningful and accessible page outline.
- [Icon](https://shopify.dev/docs/api/app-home/polaris-web-components/media/icon): Renders a graphic symbol to visually communicate core parts of the product and available actions. Icons can act as wayfinding tools to help users quickly understand their location within the interface and common interaction patterns.
- [Image](https://shopify.dev/docs/api/app-home/polaris-web-components/media/image): Embeds an image within the interface and controls its presentation. Use to visually illustrate concepts, showcase products, or support user tasks and interactions.
- [Link](https://shopify.dev/docs/api/app-home/polaris-web-components/actions/link): Makes text interactive, allowing users to navigate to other pages or perform specific actions. Supports standard URLs, custom protocols, and navigation within Shopify or app pages.
- [Menu](https://shopify.dev/docs/api/app-home/polaris-web-components/actions/menu): Use Menu to display a list of actions that can be performed on a resource.
- [Modal](https://shopify.dev/docs/api/app-home/polaris-web-components/overlays/modal): Displays content in an overlay. Use to create a distraction-free experience such as a confirmation dialog or a settings panel.
- [MoneyField](https://shopify.dev/docs/api/app-home/polaris-web-components/forms/moneyfield): Collect monetary values from users with built-in currency formatting and validation.
- [NumberField](https://shopify.dev/docs/api/app-home/polaris-web-components/forms/numberfield): Collect numerical values from users with optimized keyboard settings and built-in validation.
- [OrderedList](https://shopify.dev/docs/api/app-home/polaris-web-components/structure/orderedlist): Displays a numbered list of related items in a specific sequence. Use to present step-by-step instructions, ranked items, or procedures where order matters.
- [Page](https://shopify.dev/docs/api/app-home/polaris-web-components/structure/page): Use `s-page` as the main container for placing content in your app. Page comes with preset layouts and automatically adds spacing between elements.
- [Paragraph](https://shopify.dev/docs/api/app-home/polaris-web-components/titles-and-text/paragraph): Displays a block of text and can contain inline elements such as buttons, links, or emphasized text. Use to present standalone blocks of content as opposed to inline text.
- [PasswordField](https://shopify.dev/docs/api/app-home/polaris-web-components/forms/passwordfield): Securely collect sensitive information from users.
- [Popover](https://shopify.dev/docs/api/app-home/polaris-web-components/overlays/popover): Popovers are used to display content in an overlay that can be triggered by a button.
- [QueryContainer](https://shopify.dev/docs/api/app-home/polaris-web-components/structure/querycontainer): Establishes a query container for responsive design. Use `s-query-container` to define an element as a containment context, enabling child components or styles to adapt based on the container’s size.
- [SearchField](https://shopify.dev/docs/api/app-home/polaris-web-components/forms/searchfield): Let users enter search terms or find specific items using a single-line input field.
- [Section](https://shopify.dev/docs/api/app-home/polaris-web-components/structure/section): Groups related content into clearly-defined thematic areas. Sections have contextual styling that automatically adapts based on nesting depth. They also adjust heading levels to maintain a meaningful and accessible page structure.
- [Select](https://shopify.dev/docs/api/app-home/polaris-web-components/forms/select): Allow users to pick one option from a menu. Ideal when presenting four or more choices to keep interfaces uncluttered.
- [Spinner](https://shopify.dev/docs/api/app-home/polaris-web-components/feedback/spinner): Displays an animated indicator showing users that content or actions are loading. Use to communicate ongoing processes, such as fetching data from a server. For loading states on buttons, use the “loading” property on the Button component instead.
- [Stack](https://shopify.dev/docs/api/app-home/polaris-web-components/structure/stack): Organizes elements horizontally or vertically along the block or inline axis. Use to structure layouts, group related components, or control spacing between elements.
- [Switch](https://shopify.dev/docs/api/app-home/polaris-web-components/forms/switch): Give users a clear way to toggle options on or off.
- [Table](https://shopify.dev/docs/api/app-home/polaris-web-components/structure/table): Display data clearly in rows and columns, helping users view, analyze, and compare information. Automatically renders as a list on small screens and a table on large ones.
- [Text](https://shopify.dev/docs/api/app-home/polaris-web-components/titles-and-text/text): Displays inline text with specific visual styles or tones. Use to emphasize or differentiate words or phrases within a Paragraph or other block-level components.
- [TextArea](https://shopify.dev/docs/api/app-home/polaris-web-components/forms/textarea): Collect longer text content from users with a multi-line input that expands automatically.
- [TextField](https://shopify.dev/docs/api/app-home/polaris-web-components/forms/textfield): Lets users enter or edit text within a single-line input. Use to collect short, free-form information from users.
- [Thumbnail](https://shopify.dev/docs/api/app-home/polaris-web-components/media/thumbnail): Display a small preview image representing content, products, or media.
- [Tooltip](https://shopify.dev/docs/api/app-home/polaris-web-components/overlays/tooltip): Displays helpful information in a small overlay when users hover or focus on an element. Use to provide additional context without cluttering the interface.
- [URLField](https://shopify.dev/docs/api/app-home/polaris-web-components/forms/urlfield): Collect URLs from users with built-in formatting and validation.
- [UnorderedList](https://shopify.dev/docs/api/app-home/polaris-web-components/structure/unorderedlist): Displays a bulleted list of related items. Use to present collections of items or options where the sequence isn’t critical.
- [Account connection](https://shopify.dev/docs/api/app-home/patterns/compositions/account-connection): Enable merchants to connect or disconnect their store from external accounts or services.
- [App card](https://shopify.dev/docs/api/app-home/patterns/compositions/app-card): Introduce and promote relevant apps to merchants within your app experience.
- [Callout card](https://shopify.dev/docs/api/app-home/patterns/compositions/callout-card): Encourage merchants to take action on new features or opportunities.
- [Details](https://shopify.dev/docs/api/app-home/patterns/templates/details): Edit and view objects with efficient dual-column layout.
- [Empty state](https://shopify.dev/docs/api/app-home/patterns/compositions/empty-state): Provide guidance and encourage action when no data or items are available.
- [Footer help](https://shopify.dev/docs/api/app-home/patterns/compositions/footer-help): Footer help is used to refer merchants to more information related to the product or feature they’re using.
- [Homepage](https://shopify.dev/docs/api/app-home/patterns/templates/homepage): Design your app homepage for daily merchant value.
- [Index](https://shopify.dev/docs/api/app-home/patterns/templates/index): Manage objects efficiently with dynamic table actions.
- [Index table](https://shopify.dev/docs/api/app-home/patterns/compositions/index-table): Display and manage data with powerful table interactions.
- [Interstitial nav](https://shopify.dev/docs/api/app-home/patterns/compositions/interstitial-nav): Provide deeper navigation by linking merchants to related pages within a section.
- [Media card](https://shopify.dev/docs/api/app-home/patterns/compositions/media-card): Present visual information alongside actionable, educational content.
- [Metrics card](https://shopify.dev/docs/api/app-home/patterns/compositions/metrics-card): Display key metrics, statistics, or trends at a glance.
- [Resource list](https://shopify.dev/docs/api/app-home/patterns/compositions/resource-list): A resource list displays a collection of objects of the same type, like products or customers. The main job of a resource list is to help merchants find an object and navigate to a full-page representation of it.
- [Settings](https://shopify.dev/docs/api/app-home/patterns/templates/settings): Organize settings into categories for easy navigation.
- [Setup guide](https://shopify.dev/docs/api/app-home/patterns/compositions/setup-guide): Guide merchants through onboarding and setup with interactive checklists and progress tracking.


