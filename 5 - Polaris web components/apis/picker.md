# Picker

The Picker API provides a search-based interface to help users find and select one or more resources that you provide, such as product reviews, email templates, or subscription options, and then returns the selected resource `id`s to your app.

> Tip:
> If you are picking products, product variants, or collections, you should use the [Resource Picker](resource-picker) API instead.


```js
const picker = await shopify.picker({
  heading: 'Select a template',
  multiple: false,
  headers: [
    {content: 'Templates'},
    {content: 'Created by'},
    {content: 'Times used', type: 'number'},
  ],
  items: [
    {
      id: '1',
      heading: 'Full width, 1 column',
      data: ['Karine Ruby', '0'],
      badges: [{content: 'Draft', tone: 'info'}, {content: 'Marketing'}],
    },
    {
      id: '2',
      heading: 'Large graphic, 3 column',
      data: ['Charlie Mitchell', '5'],
      badges: [
        {content: 'Published', tone: 'success'},
        {content: 'New feature'},
      ],
      selected: true,
    },
    {
      id: '3',
      heading: 'Promo header, 2 column',
      data: ['Russell Winfield', '10'],
      badges: [{content: 'Published', tone: 'success'}],
    },
  ],
});

const selected = await picker.selected;

```

## picker

The `picker` API is a function that accepts an options argument for configuration and returns a Promise that resolves to the picker instance once the picker modal is opened.

### PublicPickerApi

#### Returns: Promise<PickerInstance>

#### Params:

- options: PickerOptions
(
  options: PickerOptions,
) => Promise<PickerInstance>


### PickerOptions

### headers

value: `Header[]`

  - Header: interface Header {
  /**
   * The content to display in the table column header.
   */
  content?: string;
  /**
   * The type of data to display in the column. The type is used to format the data in the column.
   * If the type is 'number', the data in the column will be right-aligned, this should be used when referencing currency or numeric values.
   * If the type is 'string', the data in the column will be left-aligned.
   * @defaultValue 'string'
   */
  type?: 'string' | 'number';
}
The data headers for the picker. These are used to display the table headers in the picker modal.

### heading

value: `string`

The heading of the picker. This is displayed in the title of the picker modal.

### items

value: `PickerItem[]`

  - PickerItem: export interface PickerItem {
  /*
   * The unique identifier of the item. This will be returned by the picker if selected.
   */
  id: string;
  /**
   * The primary content to display in the first column of the row.
   */
  heading: string;
  /**
   * The additional content to display in the second and third columns of the row, if provided.
   */
  data?: DataPoint[];
  /**
   * Whether the item is disabled or not. If the item is disabled, it cannot be selected.
   * @defaultValue false
   */
  disabled?: boolean;
  /**
   * Whether the item is selected or not when the picker is opened. The user may deselect the item if it is preselected.
   */
  selected?: boolean;
  /**
   * The badges to display in the first column of the row. These are used to display additional information about the item, such as progress of an action or tone indicating the status of that item.
   */
  badges?: Badge[];
  /**
   * The thumbnail to display at the start of the row. This is used to display an image or icon for the item.
   */
  thumbnail?: {url: string};
}
The items to display in the picker. These are used to display the rows in the picker modal.

### multiple

value: `boolean | number`

Whether to allow selecting multiple items of a specific type or not. If a number is provided, then limit the selections to a maximum of that number of items.

### Header

### content

value: `string`

The content to display in the table column header.

### type

value: `'string' | 'number'`

The type of data to display in the column. The type is used to format the data in the column. If the type is 'number', the data in the column will be right-aligned, this should be used when referencing currency or numeric values. If the type is 'string', the data in the column will be left-aligned.

### PickerItem

### badges

value: `Badge[]`

  - Badge: interface Badge {
  content: string;
  tone?: Tone;
  progress?: Progress;
}
The badges to display in the first column of the row. These are used to display additional information about the item, such as progress of an action or tone indicating the status of that item.

### data

value: `DataPoint[]`

  - DataPoint: string | number | undefined
The additional content to display in the second and third columns of the row, if provided.

### disabled

value: `boolean`

Whether the item is disabled or not. If the item is disabled, it cannot be selected.

### heading

value: `string`

The primary content to display in the first column of the row.

### id

value: `string`


### selected

value: `boolean`

Whether the item is selected or not when the picker is opened. The user may deselect the item if it is preselected.

### thumbnail

value: `{ url: string; }`

The thumbnail to display at the start of the row. This is used to display an image or icon for the item.

### Badge

### content

value: `string`


### progress

value: `Progress`

  - Progress: 'incomplete' | 'partiallyComplete' | 'complete'

### tone

value: `Tone`

  - Tone: 'info' | 'success' | 'warning' | 'critical'

### PickerInstance

### selected

value: `Promise<string[]>`

A Promise that resolves with the selected item IDs when the user presses the "Select" button in the picker.

## Related

- [Picker](https://shopify.dev/docs/api/admin-extensions/unstable/api/target-apis/picker)

## Examples

The Picker API provides a search-based interface to help users find and select one or more resources that you provide, such as product reviews, email templates, or subscription options, and then returns the selected resource `id`s to your app.

> Tip:
> If you are picking products, product variants, or collections, you should use the [Resource Picker](resource-picker) API instead.



Minimal required fields picker configuration.

If you don't provide the required options (`heading` and `items`), the picker will not open and an error will be logged.

```js
const picker = await shopify.picker({
  heading: 'Simple picker configuration',
  items: [
    {
      id: '1',
      heading: 'Item 1',
    },
    {
      id: '2',
      heading: 'Item 2',
    },
  ],
});

const selected = await picker.selected;

```


Setting a specific number of selectable items. In this example, the user can select up to 2 items.

```js
const picker = await shopify.picker({
  heading: 'Limited selectable items (up to 2)',
  multiple: 2,
  headers: [{content: 'Main heading'}],
  items: [
    {
      id: '1',
      heading: 'Item 1',
    },
    {
      id: '2',
      heading: 'Item 2',
    },
    {
      id: '3',
      heading: 'Item 3',
    },
  ],
});

const selected = await picker.selected;

```


Setting an unlimited number of selectable items.

```js
const picker = await shopify.picker({
  heading: 'Unlimited selectable items',
  multiple: true,
  headers: [{content: 'Main heading'}],
  items: [
    {
      id: '1',
      heading: 'Item 1',
    },
    {
      id: '2',
      heading: 'Item 2',
    },
    {
      id: '3',
      heading: 'Item 3',
    },
  ],
});

const selected = await picker.selected;

```


Providing preselected items in the picker. These will be selected when the picker opens but can be deselected by the user.

```js
const picker = await shopify.picker({
  heading: 'Preselected items',
  items: [
    {
      id: '1',
      heading: 'Item 1',
      selected: true,
    },
    {
      id: '2',
      heading: 'Item 2',
    },
  ],
});

const selected = await picker.selected;

```


Providing disabled items in the picker. These will be disabled and cannot be selected by the user.

```js
const picker = await shopify.picker({
  heading: 'Disabled items',
  items: [
    {
      id: '1',
      heading: 'Item 1',
      disabled: true,
    },
    {
      id: '2',
      heading: 'Item 2',
    },
  ],
});

const selected = await picker.selected;

```

## Examples

The Picker API provides a search-based interface to help users find and select one or more resources that you provide, such as product reviews, email templates, or subscription options, and then returns the selected resource `id`s to your app.

> Tip:
> If you are picking products, product variants, or collections, you should use the [Resource Picker](resource-picker) API instead.



Minimal required fields picker configuration.

If you don't provide the required options (`heading` and `items`), the picker will not open and an error will be logged.

```js
const picker = await shopify.picker({
  heading: 'Simple picker configuration',
  items: [
    {
      id: '1',
      heading: 'Item 1',
    },
    {
      id: '2',
      heading: 'Item 2',
    },
  ],
});

const selected = await picker.selected;

```


Setting a specific number of selectable items. In this example, the user can select up to 2 items.

```js
const picker = await shopify.picker({
  heading: 'Limited selectable items (up to 2)',
  multiple: 2,
  headers: [{content: 'Main heading'}],
  items: [
    {
      id: '1',
      heading: 'Item 1',
    },
    {
      id: '2',
      heading: 'Item 2',
    },
    {
      id: '3',
      heading: 'Item 3',
    },
  ],
});

const selected = await picker.selected;

```


Setting an unlimited number of selectable items.

```js
const picker = await shopify.picker({
  heading: 'Unlimited selectable items',
  multiple: true,
  headers: [{content: 'Main heading'}],
  items: [
    {
      id: '1',
      heading: 'Item 1',
    },
    {
      id: '2',
      heading: 'Item 2',
    },
    {
      id: '3',
      heading: 'Item 3',
    },
  ],
});

const selected = await picker.selected;

```


Providing preselected items in the picker. These will be selected when the picker opens but can be deselected by the user.

```js
const picker = await shopify.picker({
  heading: 'Preselected items',
  items: [
    {
      id: '1',
      heading: 'Item 1',
      selected: true,
    },
    {
      id: '2',
      heading: 'Item 2',
    },
  ],
});

const selected = await picker.selected;

```


Providing disabled items in the picker. These will be disabled and cannot be selected by the user.

```js
const picker = await shopify.picker({
  heading: 'Disabled items',
  items: [
    {
      id: '1',
      heading: 'Item 1',
      disabled: true,
    },
    {
      id: '2',
      heading: 'Item 2',
    },
  ],
});

const selected = await picker.selected;

```

