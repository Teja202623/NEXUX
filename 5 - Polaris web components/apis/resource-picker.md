# Resource Picker

The Resource Picker API provides a search-based interface to help users find and select one or more products, collections, or product variants, and then returns the selected resources to your app. Both the app and the user must have the necessary permissions to access the resources selected.

> Tip:
> If you are picking app resources such as product reviews, email templates, or subscription options, you should use the [Picker](picker) API instead.

```js
const selected = await shopify.resourcePicker({type: 'product'});

```

## Resource Picker Options

The `Resource Picker` accepts a variety of options to customize the picker's behavior.

### ResourcePickerOptions

### action

value: `'add' | 'select'`

The action verb appears in the title and as the primary action of the Resource Picker.

### filter

value: `Filters`

  - Filters: interface Filters {
  /**
   * Whether to show hidden resources, referring to products that are not published on any sales channels.
   * @defaultValue true
   */
  hidden?: boolean;
  /**
   * Whether to show product variants. Only applies to the Product resource type picker.
   * @defaultValue true
   */
  variants?: boolean;
  /**
   * Whether to show [draft products](https://help.shopify.com/en/manual/products/details?shpxid=70af7d87-E0F2-4973-8B09-B972AAF0ADFD#product-availability).
   * Only applies to the Product resource type picker.
   * Setting this to undefined will show a badge on draft products.
   * @defaultValue true
   */
  draft?: boolean | undefined;
  /**
   * Whether to show [archived products](https://help.shopify.com/en/manual/products/details?shpxid=70af7d87-E0F2-4973-8B09-B972AAF0ADFD#product-availability).
   * Only applies to the Product resource type picker.
   * Setting this to undefined will show a badge on draft products.
   * @defaultValue true
   */
  archived?: boolean | undefined;
  /**
   * GraphQL initial search query for filtering resources available in the picker.
   * See [search syntax](https://shopify.dev/docs/api/usage/search-syntax) for more information.
   * This is not displayed in the search bar when the picker is opened.
   */
  query?: string;
}
Filters for what resource to show.

### multiple

value: `boolean | number`

Whether to allow selecting multiple items of a specific type or not. If a number is provided, then limit the selections to a maximum of that number of items. When type is Product, the user may still select multiple variants of a single product, even if multiple is false.

### query

value: `string`

GraphQL initial search query for filtering resources available in the picker. See [search syntax](https://shopify.dev/docs/api/usage/search-syntax) for more information. This is displayed in the search bar when the picker is opened and can be edited by users. For most use cases, you should use the `filter.query` option instead which doesn't show the query in the UI.

### selectionIds

value: `BaseResource[]`

  - BaseResource: interface BaseResource extends Resource {
  variants?: Resource[];
}
  - Resource: interface Resource {
  /** in GraphQL id format, ie 'gid://shopify/Product/1' */
  id: string;
}
Resources that should be preselected when the picker is opened.

### type

value: `ResourceType`

  - Resource: interface Resource {
  /** in GraphQL id format, ie 'gid://shopify/Product/1' */
  id: string;
}
The type of resource you want to pick.

### Filters

### archived

value: `boolean | undefined`

Whether to show [archived products](https://help.shopify.com/en/manual/products/details?shpxid=70af7d87-E0F2-4973-8B09-B972AAF0ADFD#product-availability). Only applies to the Product resource type picker. Setting this to undefined will show a badge on draft products.

### draft

value: `boolean | undefined`

Whether to show [draft products](https://help.shopify.com/en/manual/products/details?shpxid=70af7d87-E0F2-4973-8B09-B972AAF0ADFD#product-availability). Only applies to the Product resource type picker. Setting this to undefined will show a badge on draft products.

### hidden

value: `boolean`

Whether to show hidden resources, referring to products that are not published on any sales channels.

### query

value: `string`

GraphQL initial search query for filtering resources available in the picker. See [search syntax](https://shopify.dev/docs/api/usage/search-syntax) for more information. This is not displayed in the search bar when the picker is opened.

### variants

value: `boolean`

Whether to show product variants. Only applies to the Product resource type picker.

### BaseResource

### id

value: `string`

in GraphQL id format, ie 'gid://shopify/Product/1'

### variants

value: `Resource[]`

  - Resource: interface Resource {
  /** in GraphQL id format, ie 'gid://shopify/Product/1' */
  id: string;
}

### Resource

### id

value: `string`

in GraphQL id format, ie 'gid://shopify/Product/1'

## Examples

The Resource Picker API provides a search-based interface to help users find and select one or more products, collections, or product variants, and then returns the selected resources to your app. Both the app and the user must have the necessary permissions to access the resources selected.

> Tip:
> If you are picking app resources such as product reviews, email templates, or subscription options, you should use the [Picker](picker) API instead.


Alternate resources

```js
const selected = await shopify.resourcePicker({type: 'collection'});

```

```js
const selected = await shopify.resourcePicker({type: 'variant'});

```


Preselected resources

```js
const selected = await shopify.resourcePicker({
  type: 'product',
  selectionIds: [
    {
      id: 'gid://shopify/Product/12345',
      variants: [
        {
          id: 'gid://shopify/ProductVariant/1',
        },
      ],
    },
    {
      id: 'gid://shopify/Product/67890',
    },
  ],
});

```


Action verb

```js
const selected = await shopify.resourcePicker({
  type: 'product',
  action: 'select',
});

```


Multiple selection

```js
const selected = await shopify.resourcePicker({
  type: 'product',
  multiple: true,
});

```

```js
const selected = await shopify.resourcePicker({
  type: 'product',
  multiple: 5,
});

```


Filters

```js
const selected = await shopify.resourcePicker({
  type: 'product',
  filter: {
    hidden: true,
    variants: false,
    draft: false,
    archived: false,
  },
});

```


Filter query

```js
const selected = await shopify.resourcePicker({
  type: 'product',
  filter: {
    query: 'Sweater',
  },
});

```


Selection

```js
const selected = await shopify.resourcePicker({type: 'product'});

if (selected) {
  console.log(selected);
} else {
  console.log('Picker was cancelled by the user');
}

```


Initial query

```js
const selected = await shopify.resourcePicker({
  type: 'product',
  query: 'Sweater',
});

```

## Resource Picker Return Payload

The `Resource Picker` returns a Promise with an array of the selected resources. The object type in the array varies based on the provided `type` option.

If the picker is cancelled, the Promise resolves to `undefined`

### ReturnPayload

### when type is "collection":

value: `Collection[]`

  - Collection: export interface Collection extends Resource {
  availablePublicationCount: number;
  description: string;
  descriptionHtml: string;
  handle: string;
  id: string;
  image?: Image | null;
  productsAutomaticallySortedCount: number;
  productsCount: number;
  productsManuallySortedCount: number;
  publicationCount: number;
  ruleSet?: RuleSet | null;
  seo: {
    description?: string | null;
    title?: string | null;
  };
  sortOrder: CollectionSortOrder;
  storefrontId: string;
  templateSuffix?: string | null;
  title: string;
  updatedAt: string;
}

### when type is "product":

value: `Product[]`

  - Product: export interface Product extends Resource {
  availablePublicationCount: number;
  createdAt: string;
  descriptionHtml: string;
  handle: string;
  hasOnlyDefaultVariant: boolean;
  images: Image[];
  options: {
    id: string;
    name: string;
    position: number;
    values: string[];
  }[];
  productType: string;
  publishedAt?: string | null;
  tags: string[];
  templateSuffix?: string | null;
  title: string;
  totalInventory: number;
  totalVariants: number;
  tracksInventory: boolean;
  variants: Partial<ProductVariant>[];
  vendor: string;
  updatedAt: string;
  status: ProductStatus;
}

### when type is "variant":

value: `ProductVariant[]`

  - Product: export interface Product extends Resource {
  availablePublicationCount: number;
  createdAt: string;
  descriptionHtml: string;
  handle: string;
  hasOnlyDefaultVariant: boolean;
  images: Image[];
  options: {
    id: string;
    name: string;
    position: number;
    values: string[];
  }[];
  productType: string;
  publishedAt?: string | null;
  tags: string[];
  templateSuffix?: string | null;
  title: string;
  totalInventory: number;
  totalVariants: number;
  tracksInventory: boolean;
  variants: Partial<ProductVariant>[];
  vendor: string;
  updatedAt: string;
  status: ProductStatus;
}
  - ProductVariant: export interface ProductVariant extends Resource {
  availableForSale: boolean;
  barcode?: string | null;
  compareAtPrice?: Money | null;
  createdAt: string;
  displayName: string;
  fulfillmentService?: {
    id: string;
    inventoryManagement: boolean;
    productBased: boolean;
    serviceName: string;
    type: FulfillmentServiceType;
  };
  image?: Image | null;
  inventoryItem: {id: string};
  inventoryManagement: ProductVariantInventoryManagement;
  inventoryPolicy: ProductVariantInventoryPolicy;
  inventoryQuantity?: number | null;
  position: number;
  price: Money;
  product: Partial<Product>;
  requiresShipping: boolean;
  selectedOptions: {value?: string | null}[];
  sku?: string | null;
  taxable: boolean;
  title: string;
  weight?: number | null;
  weightUnit: WeightUnit;
  updatedAt: string;
}

### Collection

### availablePublicationCount

value: `number`


### description

value: `string`


### descriptionHtml

value: `string`


### handle

value: `string`


### id

value: `string`

in GraphQL id format, ie 'gid://shopify/Product/1'

### image

value: `Image | null`

  - Image: interface Image {
  id: string;
  altText?: string;
  originalSrc: string;
}

### productsAutomaticallySortedCount

value: `number`


### productsCount

value: `number`


### productsManuallySortedCount

value: `number`


### publicationCount

value: `number`


### ruleSet

value: `RuleSet | null`

  - RuleSet: interface RuleSet {
  appliedDisjunctively: boolean;
  rules: CollectionRule[];
}

### seo

value: `{ description?: string; title?: string; }`


### sortOrder

value: `CollectionSortOrder`

  - Collection: export interface Collection extends Resource {
  availablePublicationCount: number;
  description: string;
  descriptionHtml: string;
  handle: string;
  id: string;
  image?: Image | null;
  productsAutomaticallySortedCount: number;
  productsCount: number;
  productsManuallySortedCount: number;
  publicationCount: number;
  ruleSet?: RuleSet | null;
  seo: {
    description?: string | null;
    title?: string | null;
  };
  sortOrder: CollectionSortOrder;
  storefrontId: string;
  templateSuffix?: string | null;
  title: string;
  updatedAt: string;
}
  - CollectionSortOrder: enum CollectionSortOrder {
  Manual = 'MANUAL',
  BestSelling = 'BEST_SELLING',
  AlphaAsc = 'ALPHA_ASC',
  AlphaDesc = 'ALPHA_DESC',
  PriceDesc = 'PRICE_DESC',
  PriceAsc = 'PRICE_ASC',
  CreatedDesc = 'CREATED_DESC',
  Created = 'CREATED',
  MostRelevant = 'MOST_RELEVANT',
}

### storefrontId

value: `string`


### templateSuffix

value: `string | null`


### title

value: `string`


### updatedAt

value: `string`


### Image

### altText

value: `string`


### id

value: `string`


### originalSrc

value: `string`


### RuleSet

### appliedDisjunctively

value: `boolean`


### rules

value: `CollectionRule[]`

  - Collection: export interface Collection extends Resource {
  availablePublicationCount: number;
  description: string;
  descriptionHtml: string;
  handle: string;
  id: string;
  image?: Image | null;
  productsAutomaticallySortedCount: number;
  productsCount: number;
  productsManuallySortedCount: number;
  publicationCount: number;
  ruleSet?: RuleSet | null;
  seo: {
    description?: string | null;
    title?: string | null;
  };
  sortOrder: CollectionSortOrder;
  storefrontId: string;
  templateSuffix?: string | null;
  title: string;
  updatedAt: string;
}
  - CollectionRule: interface CollectionRule {
  column: string;
  condition: string;
  relation: string;
}

### CollectionRule

### column

value: `string`


### condition

value: `string`


### relation

value: `string`


### CollectionSortOrder

### Manual

value: `MANUAL`


### BestSelling

value: `BEST_SELLING`


### AlphaAsc

value: `ALPHA_ASC`


### AlphaDesc

value: `ALPHA_DESC`


### PriceDesc

value: `PRICE_DESC`


### PriceAsc

value: `PRICE_ASC`


### CreatedDesc

value: `CREATED_DESC`


### Created

value: `CREATED`


### MostRelevant

value: `MOST_RELEVANT`


### Product

### availablePublicationCount

value: `number`


### createdAt

value: `string`


### descriptionHtml

value: `string`


### handle

value: `string`


### hasOnlyDefaultVariant

value: `boolean`


### id

value: `string`

in GraphQL id format, ie 'gid://shopify/Product/1'

### images

value: `Image[]`

  - Image: interface Image {
  id: string;
  altText?: string;
  originalSrc: string;
}

### options

value: `{ id: string; name: string; position: number; values: string[]; }[]`


### productType

value: `string`


### publishedAt

value: `string | null`


### status

value: `ProductStatus`

  - Product: export interface Product extends Resource {
  availablePublicationCount: number;
  createdAt: string;
  descriptionHtml: string;
  handle: string;
  hasOnlyDefaultVariant: boolean;
  images: Image[];
  options: {
    id: string;
    name: string;
    position: number;
    values: string[];
  }[];
  productType: string;
  publishedAt?: string | null;
  tags: string[];
  templateSuffix?: string | null;
  title: string;
  totalInventory: number;
  totalVariants: number;
  tracksInventory: boolean;
  variants: Partial<ProductVariant>[];
  vendor: string;
  updatedAt: string;
  status: ProductStatus;
}
  - ProductStatus: enum ProductStatus {
  Active = 'ACTIVE',
  Archived = 'ARCHIVED',
  Draft = 'DRAFT',
}

### tags

value: `string[]`


### templateSuffix

value: `string | null`


### title

value: `string`


### totalInventory

value: `number`


### totalVariants

value: `number`


### tracksInventory

value: `boolean`


### updatedAt

value: `string`


### variants

value: `Partial<ProductVariant>[]`

  - Product: export interface Product extends Resource {
  availablePublicationCount: number;
  createdAt: string;
  descriptionHtml: string;
  handle: string;
  hasOnlyDefaultVariant: boolean;
  images: Image[];
  options: {
    id: string;
    name: string;
    position: number;
    values: string[];
  }[];
  productType: string;
  publishedAt?: string | null;
  tags: string[];
  templateSuffix?: string | null;
  title: string;
  totalInventory: number;
  totalVariants: number;
  tracksInventory: boolean;
  variants: Partial<ProductVariant>[];
  vendor: string;
  updatedAt: string;
  status: ProductStatus;
}
  - ProductVariant: export interface ProductVariant extends Resource {
  availableForSale: boolean;
  barcode?: string | null;
  compareAtPrice?: Money | null;
  createdAt: string;
  displayName: string;
  fulfillmentService?: {
    id: string;
    inventoryManagement: boolean;
    productBased: boolean;
    serviceName: string;
    type: FulfillmentServiceType;
  };
  image?: Image | null;
  inventoryItem: {id: string};
  inventoryManagement: ProductVariantInventoryManagement;
  inventoryPolicy: ProductVariantInventoryPolicy;
  inventoryQuantity?: number | null;
  position: number;
  price: Money;
  product: Partial<Product>;
  requiresShipping: boolean;
  selectedOptions: {value?: string | null}[];
  sku?: string | null;
  taxable: boolean;
  title: string;
  weight?: number | null;
  weightUnit: WeightUnit;
  updatedAt: string;
}

### vendor

value: `string`


### ProductStatus

### Active

value: `ACTIVE`


### Archived

value: `ARCHIVED`


### Draft

value: `DRAFT`


### ProductVariant

### availableForSale

value: `boolean`


### barcode

value: `string | null`


### compareAtPrice

value: `Money | null`

  - Money: string

### createdAt

value: `string`


### displayName

value: `string`


### fulfillmentService

value: `{ id: string; inventoryManagement: boolean; productBased: boolean; serviceName: string; type: FulfillmentServiceType; }`

  - FulfillmentServiceType: enum FulfillmentServiceType {
  GiftCard = 'GIFT_CARD',
  Manual = 'MANUAL',
  ThirdParty = 'THIRD_PARTY',
}

### id

value: `string`

in GraphQL id format, ie 'gid://shopify/Product/1'

### image

value: `Image | null`

  - Image: interface Image {
  id: string;
  altText?: string;
  originalSrc: string;
}

### inventoryItem

value: `{ id: string; }`


### inventoryManagement

value: `ProductVariantInventoryManagement`

  - Product: export interface Product extends Resource {
  availablePublicationCount: number;
  createdAt: string;
  descriptionHtml: string;
  handle: string;
  hasOnlyDefaultVariant: boolean;
  images: Image[];
  options: {
    id: string;
    name: string;
    position: number;
    values: string[];
  }[];
  productType: string;
  publishedAt?: string | null;
  tags: string[];
  templateSuffix?: string | null;
  title: string;
  totalInventory: number;
  totalVariants: number;
  tracksInventory: boolean;
  variants: Partial<ProductVariant>[];
  vendor: string;
  updatedAt: string;
  status: ProductStatus;
}
  - ProductVariant: export interface ProductVariant extends Resource {
  availableForSale: boolean;
  barcode?: string | null;
  compareAtPrice?: Money | null;
  createdAt: string;
  displayName: string;
  fulfillmentService?: {
    id: string;
    inventoryManagement: boolean;
    productBased: boolean;
    serviceName: string;
    type: FulfillmentServiceType;
  };
  image?: Image | null;
  inventoryItem: {id: string};
  inventoryManagement: ProductVariantInventoryManagement;
  inventoryPolicy: ProductVariantInventoryPolicy;
  inventoryQuantity?: number | null;
  position: number;
  price: Money;
  product: Partial<Product>;
  requiresShipping: boolean;
  selectedOptions: {value?: string | null}[];
  sku?: string | null;
  taxable: boolean;
  title: string;
  weight?: number | null;
  weightUnit: WeightUnit;
  updatedAt: string;
}
  - ProductVariantInventoryManagement: enum ProductVariantInventoryManagement {
  Shopify = 'SHOPIFY',
  NotManaged = 'NOT_MANAGED',
  FulfillmentService = 'FULFILLMENT_SERVICE',
}

### inventoryPolicy

value: `ProductVariantInventoryPolicy`

  - Product: export interface Product extends Resource {
  availablePublicationCount: number;
  createdAt: string;
  descriptionHtml: string;
  handle: string;
  hasOnlyDefaultVariant: boolean;
  images: Image[];
  options: {
    id: string;
    name: string;
    position: number;
    values: string[];
  }[];
  productType: string;
  publishedAt?: string | null;
  tags: string[];
  templateSuffix?: string | null;
  title: string;
  totalInventory: number;
  totalVariants: number;
  tracksInventory: boolean;
  variants: Partial<ProductVariant>[];
  vendor: string;
  updatedAt: string;
  status: ProductStatus;
}
  - ProductVariant: export interface ProductVariant extends Resource {
  availableForSale: boolean;
  barcode?: string | null;
  compareAtPrice?: Money | null;
  createdAt: string;
  displayName: string;
  fulfillmentService?: {
    id: string;
    inventoryManagement: boolean;
    productBased: boolean;
    serviceName: string;
    type: FulfillmentServiceType;
  };
  image?: Image | null;
  inventoryItem: {id: string};
  inventoryManagement: ProductVariantInventoryManagement;
  inventoryPolicy: ProductVariantInventoryPolicy;
  inventoryQuantity?: number | null;
  position: number;
  price: Money;
  product: Partial<Product>;
  requiresShipping: boolean;
  selectedOptions: {value?: string | null}[];
  sku?: string | null;
  taxable: boolean;
  title: string;
  weight?: number | null;
  weightUnit: WeightUnit;
  updatedAt: string;
}
  - ProductVariantInventoryPolicy: enum ProductVariantInventoryPolicy {
  Deny = 'DENY',
  Continue = 'CONTINUE',
}

### inventoryQuantity

value: `number | null`


### position

value: `number`


### price

value: `Money`

  - Money: string

### product

value: `Partial<Product>`

  - Product: export interface Product extends Resource {
  availablePublicationCount: number;
  createdAt: string;
  descriptionHtml: string;
  handle: string;
  hasOnlyDefaultVariant: boolean;
  images: Image[];
  options: {
    id: string;
    name: string;
    position: number;
    values: string[];
  }[];
  productType: string;
  publishedAt?: string | null;
  tags: string[];
  templateSuffix?: string | null;
  title: string;
  totalInventory: number;
  totalVariants: number;
  tracksInventory: boolean;
  variants: Partial<ProductVariant>[];
  vendor: string;
  updatedAt: string;
  status: ProductStatus;
}

### requiresShipping

value: `boolean`


### selectedOptions

value: `{ value?: string; }[]`


### sku

value: `string | null`


### taxable

value: `boolean`


### title

value: `string`


### updatedAt

value: `string`


### weight

value: `number | null`


### weightUnit

value: `WeightUnit`

  - WeightUnit: enum WeightUnit {
  Kilograms = 'KILOGRAMS',
  Grams = 'GRAMS',
  Pounds = 'POUNDS',
  Ounces = 'OUNCES',
}

### FulfillmentServiceType

### GiftCard

value: `GIFT_CARD`


### Manual

value: `MANUAL`


### ThirdParty

value: `THIRD_PARTY`


### ProductVariantInventoryManagement

### Shopify

value: `SHOPIFY`


### NotManaged

value: `NOT_MANAGED`


### FulfillmentService

value: `FULFILLMENT_SERVICE`


### ProductVariantInventoryPolicy

### Deny

value: `DENY`


### Continue

value: `CONTINUE`


### WeightUnit

### Kilograms

value: `KILOGRAMS`


### Grams

value: `GRAMS`


### Pounds

value: `POUNDS`


### Ounces

value: `OUNCES`


## Examples

The Resource Picker API provides a search-based interface to help users find and select one or more products, collections, or product variants, and then returns the selected resources to your app. Both the app and the user must have the necessary permissions to access the resources selected.

> Tip:
> If you are picking app resources such as product reviews, email templates, or subscription options, you should use the [Picker](picker) API instead.


Alternate resources

```js
const selected = await shopify.resourcePicker({type: 'collection'});

```

```js
const selected = await shopify.resourcePicker({type: 'variant'});

```


Preselected resources

```js
const selected = await shopify.resourcePicker({
  type: 'product',
  selectionIds: [
    {
      id: 'gid://shopify/Product/12345',
      variants: [
        {
          id: 'gid://shopify/ProductVariant/1',
        },
      ],
    },
    {
      id: 'gid://shopify/Product/67890',
    },
  ],
});

```


Action verb

```js
const selected = await shopify.resourcePicker({
  type: 'product',
  action: 'select',
});

```


Multiple selection

```js
const selected = await shopify.resourcePicker({
  type: 'product',
  multiple: true,
});

```

```js
const selected = await shopify.resourcePicker({
  type: 'product',
  multiple: 5,
});

```


Filters

```js
const selected = await shopify.resourcePicker({
  type: 'product',
  filter: {
    hidden: true,
    variants: false,
    draft: false,
    archived: false,
  },
});

```


Filter query

```js
const selected = await shopify.resourcePicker({
  type: 'product',
  filter: {
    query: 'Sweater',
  },
});

```


Selection

```js
const selected = await shopify.resourcePicker({type: 'product'});

if (selected) {
  console.log(selected);
} else {
  console.log('Picker was cancelled by the user');
}

```


Initial query

```js
const selected = await shopify.resourcePicker({
  type: 'product',
  query: 'Sweater',
});

```

## Examples

The Resource Picker API provides a search-based interface to help users find and select one or more products, collections, or product variants, and then returns the selected resources to your app. Both the app and the user must have the necessary permissions to access the resources selected.

> Tip:
> If you are picking app resources such as product reviews, email templates, or subscription options, you should use the [Picker](picker) API instead.


Alternate resources

```js
const selected = await shopify.resourcePicker({type: 'collection'});

```

```js
const selected = await shopify.resourcePicker({type: 'variant'});

```


Preselected resources

```js
const selected = await shopify.resourcePicker({
  type: 'product',
  selectionIds: [
    {
      id: 'gid://shopify/Product/12345',
      variants: [
        {
          id: 'gid://shopify/ProductVariant/1',
        },
      ],
    },
    {
      id: 'gid://shopify/Product/67890',
    },
  ],
});

```


Action verb

```js
const selected = await shopify.resourcePicker({
  type: 'product',
  action: 'select',
});

```


Multiple selection

```js
const selected = await shopify.resourcePicker({
  type: 'product',
  multiple: true,
});

```

```js
const selected = await shopify.resourcePicker({
  type: 'product',
  multiple: 5,
});

```


Filters

```js
const selected = await shopify.resourcePicker({
  type: 'product',
  filter: {
    hidden: true,
    variants: false,
    draft: false,
    archived: false,
  },
});

```


Filter query

```js
const selected = await shopify.resourcePicker({
  type: 'product',
  filter: {
    query: 'Sweater',
  },
});

```


Selection

```js
const selected = await shopify.resourcePicker({type: 'product'});

if (selected) {
  console.log(selected);
} else {
  console.log('Picker was cancelled by the user');
}

```


Initial query

```js
const selected = await shopify.resourcePicker({
  type: 'product',
  query: 'Sweater',
});

```

