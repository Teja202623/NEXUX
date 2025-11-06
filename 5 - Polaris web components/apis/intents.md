# Intents

The Intents API provides a way to invoke existing admin workflows for creating, editing, and managing Shopify resources.

```js
const activity = await shopify.intents.invoke('create:shopify/Collection');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Collection created:', response.data);
}

```

## invoke

The `invoke` API is a function that accepts either a string query or an options object describing the intent to invoke and returns a Promise that resolves to an activity handle for the workflow.

## Intent Format

Intents are invoked using a string query format: `${action}:${type},${value}`

Where:
- `action` - The operation to perform (`create` or `edit`)
- `type` - The resource type (e.g., `shopify/Product`)
- `value` - The resource identifier (only for edit actions)

## Supported Resources

### Article
| Action | Type | Value | Data |
|--------|------|-------|------|
| `create` | `shopify/Article` | — | — |
| `edit` | `shopify/Article` | `gid://shopify/Article/{id}` | — |

### Catalog
| Action | Type | Value | Data |
|--------|------|-------|------|
| `create` | `shopify/Catalog` | — | — |
| `edit` | `shopify/Catalog` | `gid://shopify/Catalog/{id}` | — |

### Collection
| Action | Type | Value | Data |
|--------|------|-------|------|
| `create` | `shopify/Collection` | — | — |
| `edit` | `shopify/Collection` | `gid://shopify/Collection/{id}` | — |

### Customer
| Action | Type | Value | Data |
|--------|------|-------|------|
| `create` | `shopify/Customer` | — | — |
| `edit` | `shopify/Customer` | `gid://shopify/Customer/{id}` | — |

### Discount
| Action | Type | Value | Data |
|--------|------|-------|------|
| `create` | `shopify/Discount` | — | `{ type: 'amount-off-product' \| 'amount-off-order' \| 'buy-x-get-y' \| 'free-shipping' }` |
| `edit` | `shopify/Discount` | `gid://shopify/Discount/{id}` | — |

### Market
| Action | Type | Value | Data |
|--------|------|-------|------|
| `create` | `shopify/Market` | — | — |
| `edit` | `shopify/Market` | `gid://shopify/Market/{id}` | — |

### Menu
| Action | Type | Value | Data |
|--------|------|-------|------|
| `create` | `shopify/Menu` | — | — |
| `edit` | `shopify/Menu` | `gid://shopify/Menu/{id}` | — |

### Metafield Definition
| Action | Type | Value | Data |
|--------|------|-------|------|
| `create` | `shopify/MetafieldDefinition` | — | — |
| `edit` | `shopify/MetafieldDefinition` | `gid://shopify/MetafieldDefinition/{id}` | — |

### Metaobject
| Action | Type | Value | Data |
|--------|------|-------|------|
| `create` | `shopify/Metaobject` | — | `{ type: 'shopify--color-pattern' }` |
| `edit` | `shopify/Metaobject` | `gid://shopify/Metaobject/{id}` | `{ type: 'shopify--color-pattern' }` |

### Metaobject Definition
| Action | Type | Value | Data |
|--------|------|-------|------|
| `create` | `shopify/MetaobjectDefinition` | — | — |
| `edit` | `shopify/MetaobjectDefinition` | `gid://shopify/MetaobjectDefinition/{id}` | — |

### Page
| Action | Type | Value | Data |
|--------|------|-------|------|
| `create` | `shopify/Page` | — | — |
| `edit` | `shopify/Page` | `gid://shopify/Page/{id}` | — |

### Product
| Action | Type | Value | Data |
|--------|------|-------|------|
| `create` | `shopify/Product` | — | — |
| `edit` | `shopify/Product` | `gid://shopify/Product/{id}` | — |

### Product Variant
| Action | Type | Value | Data |
|--------|------|-------|------|
| `create` | `shopify/ProductVariant` | — | `{ productId: 'gid://shopify/Product/{id}' }` |
| `edit` | `shopify/ProductVariant` | `gid://shopify/ProductVariant/{id}` | `{ productId: 'gid://shopify/Product/{id}' }` |

> **Note**: To determine whether to use the `shopify/ProductVariant` `edit` intent or the `shopify/Product` `edit` intent, query the [`product.hasOnlyDefaultVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.hasOnlyDefaultVariant) field. If the product has only the default variant (`hasOnlyDefaultVariant` is `true`), use the `shopify/Product` `edit` intent.

### PublicIntentsApi

Entry point for Shopify intents.

A unified surface for describing and orchestrating operations. Intents pair an `action` (verb) with a resource `type` and optional `value` and `data` to request a workflow.

### invoke

value: `{ (query: IntentQuery): Promise<IntentActivity>; (intentURL: string, options?: IntentQueryOptions): Promise<IntentActivity>; }`

  - IntentQuery: export interface IntentQuery extends IntentQueryOptions {
  action: IntentAction;
  type: IntentType;
}
  - IntentActivity: export interface IntentActivity {
  /**
   * A Promise that resolves when the intent workflow completes, returning the response.
   */
  complete?: Promise<IntentResponse>;
}
  - IntentQueryOptions: export interface IntentQueryOptions {
  /**
   * The resource identifier for edit actions (e.g., 'gid://shopify/Product/123').
   */
  value?: string;
  /**
   * Additional data required for certain intent types.
   * For example:
   * - Discount creation requires { type: 'amount-off-product' | 'amount-off-order' | 'buy-x-get-y' | 'free-shipping' }
   * - ProductVariant creation requires { productId: 'gid://shopify/Product/123' }
   * - Metaobject creation requires { type: 'shopify--color-pattern' }
   */
  data?: {[key: string]: unknown};
}
Invoke an intent using the object syntax.

Invoke an intent using the URL syntax.

URL format: `action:type[,value][?params]`.

### IntentQuery

### action

value: `IntentAction`

  - IntentAction: 'create' | 'edit'

### data

value: `{ [key: string]: unknown; }`

Additional data required for certain intent types. For example:
- Discount creation requires { type: 'amount-off-product' | 'amount-off-order' | 'buy-x-get-y' | 'free-shipping' }
- ProductVariant creation requires { productId: 'gid://shopify/Product/123' }
- Metaobject creation requires { type: 'shopify--color-pattern' }

### type

value: `IntentType`

  - IntentType: 'shopify/Article' | 'shopify/Catalog' | 'shopify/Collection' | 'shopify/Customer' | 'shopify/Discount' | 'shopify/Market' | 'shopify/Menu' | 'shopify/MetafieldDefinition' | 'shopify/Metaobject' | 'shopify/MetaobjectDefinition' | 'shopify/Page' | 'shopify/Product' | 'shopify/ProductVariant'

### value

value: `string`

The resource identifier for edit actions (e.g., 'gid://shopify/Product/123').

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


### Customer

### email

value: `string`

The email for a new customer.

### firstName

value: `string`

The first name for new customer.

### id

value: `number`

The ID of existing customer.

### lastName

value: `string`

The last name for new customer.

### note

value: `string`

The note for new customer.

### Discount

### amount

value: `number`

Amount of discount. Only for fixed or percentage discounts.

### discountDescription

value: `string`

Description of discount.

### type

value: `DiscountType`

  - Discount: interface Discount {
  /**
   * Amount of discount. Only for fixed or percentage discounts.
   */
  amount: number;
  /**
   * Description of discount.
   */
  discountDescription?: string;
  /**
   * Type of discount.
   */
  type: DiscountType;
}
  - DiscountType: 'Percentage' | 'FixedAmount'
Type of discount.

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


### IntentActivity

Activity handle for tracking intent workflow progress.

### complete

value: `Promise<IntentResponse>`

  - IntentResponse: ClosedIntentResponse | SuccessIntentResponse | ErrorIntentResponse
A Promise that resolves when the intent workflow completes, returning the response.

### ClosedIntentResponse

User dismissed or closed the workflow without completing it.

### code

value: `'closed'`


### SuccessIntentResponse

Successful intent completion.

### code

value: `'ok'`


### data

value: `{ [key: string]: unknown; }`


### ErrorIntentResponse

Failed intent completion.

### code

value: `'error'`


### issues

value: `Issue[]`


### message

value: `string`


### IntentQueryOptions

Options for invoking intents when using the query string format.

### data

value: `{ [key: string]: unknown; }`

Additional data required for certain intent types. For example:
- Discount creation requires { type: 'amount-off-product' | 'amount-off-order' | 'buy-x-get-y' | 'free-shipping' }
- ProductVariant creation requires { productId: 'gid://shopify/Product/123' }
- Metaobject creation requires { type: 'shopify--color-pattern' }

### value

value: `string`

The resource identifier for edit actions (e.g., 'gid://shopify/Product/123').

## Examples

The Intents API provides a way to invoke existing admin workflows for creating, editing, and managing Shopify resources.


### Article

Create a new article. Opens the article creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Article');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Article created:', response.data);
}

```

Edit an existing article. Requires an article GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Article', {
  value: 'gid://shopify/Article/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Article updated:', response.data);
}

```


### Catalog

Create a new catalog. Opens the catalog creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Catalog');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Catalog created:', response.data);
}

```

Edit an existing catalog. Requires a catalog GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Catalog', {
  value: 'gid://shopify/Catalog/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Catalog updated:', response.data);
}

```


### Collection

Create a new collection. Opens the collection creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Collection');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Collection created:', response.data);
}

```

Edit an existing collection. Requires a collection GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Collection', {
  value: 'gid://shopify/Collection/987654321',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Collection updated:', response.data);
}

```


### Customer

Create a new customer. Opens the customer creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Customer');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Customer created:', response.data);
}

```

Edit an existing customer. Requires a customer GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Customer', {
  value: 'gid://shopify/Customer/456789123',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Customer updated:', response.data);
}

```


### Discount

Create a new discount. Opens the discount creation workflow. Requires a discount type.```js
const activity = await shopify.intents.invoke('create:shopify/Discount', {
  data: {type: 'amount-off-product'},
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Discount created:', response.data);
}

```

Edit an existing discount. Requires a discount GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Discount', {
  value: 'gid://shopify/Discount/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Discount updated:', response.data);
}

```


### Market

Create a new market. Opens the market creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Market');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Market created:', response.data);
}

```

Edit an existing market. Requires a market GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Market', {
  value: 'gid://shopify/Market/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Market updated:', response.data);
}

```


### Menu

Create a new menu. Opens the menu creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Menu');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Menu created:', response.data);
}

```

Edit an existing menu. Requires a menu GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Menu', {
  value: 'gid://shopify/Menu/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Menu updated:', response.data);
}

```


### Metafield Definition

Create a new metafield definition. Opens the metafield definition creation workflow.```js
const activity = await shopify.intents.invoke(
  'create:shopify/MetafieldDefinition',
  {data: {ownerType: 'product'}},
);

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Metafield definition created:', response.data);
}

```

Edit an existing metafield definition. Requires a metafield definition GID.```js
const activity = await shopify.intents.invoke(
  'edit:shopify/MetafieldDefinition',
  {
    value: 'gid://shopify/MetafieldDefinition/123456789',
    data: {ownerType: 'product'},
  },
);

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Metafield definition updated:', response.data);
}

```


### Metaobject

Create a new metaobject. Opens the metaobject creation workflow. Requires a type.```js
const activity = await shopify.intents.invoke('create:shopify/Metaobject', {
  data: {type: 'shopify--color-pattern'},
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Metaobject created:', response.data);
}

```

Edit an existing metaobject. Requires a metaobject GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Metaobject', {
  value: 'gid://shopify/Metaobject/123456789',
  data: {type: 'shopify--color-pattern'},
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Metaobject updated:', response.data);
}

```


### Metaobject Definition

Create a new metaobject definition. Opens the metaobject definition creation workflow.```js
const activity = await shopify.intents.invoke(
  'create:shopify/MetaobjectDefinition',
);

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Metaobject definition created:', response.data);
}

```

Edit an existing metaobject definition. Requires a metaobject definition GID.```js
const activity = await shopify.intents.invoke(
  'edit:shopify/MetaobjectDefinition',
  {value: 'gid://shopify/MetaobjectDefinition/123456789'},
);

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Metaobject definition updated:', response.data);
}

```


### Page

Create a new page. Opens the page creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Page');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Page created:', response.data);
}

```

Edit an existing page. Requires a page GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Page', {
  value: 'gid://shopify/Page/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Page updated:', response.data);
}

```


### Product

Create a new product. Opens the product creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Product');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Product created:', response.data);
}

```

Edit an existing product. Requires a product GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Product', {
  value: 'gid://shopify/Product/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Product updated:', response.data);
}

```


### Product Variant

Create a new product variant. Opens the variant creation workflow. Requires a product ID.```js
const activity = await shopify.intents.invoke('create:shopify/ProductVariant', {
  data: {productId: 'gid://shopify/Product/123456789'},
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Product variant created:', response.data);
}

```

Edit an existing product variant. Requires a variant GID.```js
const activity = await shopify.intents.invoke('edit:shopify/ProductVariant', {
  value: 'gid://shopify/ProductVariant/123456789',
  data: {productId: 'gid://shopify/Product/123456789'},
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Product variant updated:', response.data);
}

```

## IntentAction

Supported actions that can be performed on resources.
- `create`: Opens a creation workflow for a new resource
- `edit`: Opens an editing workflow for an existing resource (requires `value` parameter)

## Examples

The Intents API provides a way to invoke existing admin workflows for creating, editing, and managing Shopify resources.


### Article

Create a new article. Opens the article creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Article');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Article created:', response.data);
}

```

Edit an existing article. Requires an article GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Article', {
  value: 'gid://shopify/Article/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Article updated:', response.data);
}

```


### Catalog

Create a new catalog. Opens the catalog creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Catalog');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Catalog created:', response.data);
}

```

Edit an existing catalog. Requires a catalog GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Catalog', {
  value: 'gid://shopify/Catalog/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Catalog updated:', response.data);
}

```


### Collection

Create a new collection. Opens the collection creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Collection');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Collection created:', response.data);
}

```

Edit an existing collection. Requires a collection GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Collection', {
  value: 'gid://shopify/Collection/987654321',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Collection updated:', response.data);
}

```


### Customer

Create a new customer. Opens the customer creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Customer');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Customer created:', response.data);
}

```

Edit an existing customer. Requires a customer GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Customer', {
  value: 'gid://shopify/Customer/456789123',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Customer updated:', response.data);
}

```


### Discount

Create a new discount. Opens the discount creation workflow. Requires a discount type.```js
const activity = await shopify.intents.invoke('create:shopify/Discount', {
  data: {type: 'amount-off-product'},
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Discount created:', response.data);
}

```

Edit an existing discount. Requires a discount GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Discount', {
  value: 'gid://shopify/Discount/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Discount updated:', response.data);
}

```


### Market

Create a new market. Opens the market creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Market');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Market created:', response.data);
}

```

Edit an existing market. Requires a market GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Market', {
  value: 'gid://shopify/Market/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Market updated:', response.data);
}

```


### Menu

Create a new menu. Opens the menu creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Menu');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Menu created:', response.data);
}

```

Edit an existing menu. Requires a menu GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Menu', {
  value: 'gid://shopify/Menu/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Menu updated:', response.data);
}

```


### Metafield Definition

Create a new metafield definition. Opens the metafield definition creation workflow.```js
const activity = await shopify.intents.invoke(
  'create:shopify/MetafieldDefinition',
  {data: {ownerType: 'product'}},
);

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Metafield definition created:', response.data);
}

```

Edit an existing metafield definition. Requires a metafield definition GID.```js
const activity = await shopify.intents.invoke(
  'edit:shopify/MetafieldDefinition',
  {
    value: 'gid://shopify/MetafieldDefinition/123456789',
    data: {ownerType: 'product'},
  },
);

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Metafield definition updated:', response.data);
}

```


### Metaobject

Create a new metaobject. Opens the metaobject creation workflow. Requires a type.```js
const activity = await shopify.intents.invoke('create:shopify/Metaobject', {
  data: {type: 'shopify--color-pattern'},
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Metaobject created:', response.data);
}

```

Edit an existing metaobject. Requires a metaobject GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Metaobject', {
  value: 'gid://shopify/Metaobject/123456789',
  data: {type: 'shopify--color-pattern'},
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Metaobject updated:', response.data);
}

```


### Metaobject Definition

Create a new metaobject definition. Opens the metaobject definition creation workflow.```js
const activity = await shopify.intents.invoke(
  'create:shopify/MetaobjectDefinition',
);

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Metaobject definition created:', response.data);
}

```

Edit an existing metaobject definition. Requires a metaobject definition GID.```js
const activity = await shopify.intents.invoke(
  'edit:shopify/MetaobjectDefinition',
  {value: 'gid://shopify/MetaobjectDefinition/123456789'},
);

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Metaobject definition updated:', response.data);
}

```


### Page

Create a new page. Opens the page creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Page');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Page created:', response.data);
}

```

Edit an existing page. Requires a page GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Page', {
  value: 'gid://shopify/Page/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Page updated:', response.data);
}

```


### Product

Create a new product. Opens the product creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Product');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Product created:', response.data);
}

```

Edit an existing product. Requires a product GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Product', {
  value: 'gid://shopify/Product/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Product updated:', response.data);
}

```


### Product Variant

Create a new product variant. Opens the variant creation workflow. Requires a product ID.```js
const activity = await shopify.intents.invoke('create:shopify/ProductVariant', {
  data: {productId: 'gid://shopify/Product/123456789'},
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Product variant created:', response.data);
}

```

Edit an existing product variant. Requires a variant GID.```js
const activity = await shopify.intents.invoke('edit:shopify/ProductVariant', {
  value: 'gid://shopify/ProductVariant/123456789',
  data: {productId: 'gid://shopify/Product/123456789'},
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Product variant updated:', response.data);
}

```

## IntentType

Supported resource types that can be targeted by intents.

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


### Customer

### email

value: `string`

The email for a new customer.

### firstName

value: `string`

The first name for new customer.

### id

value: `number`

The ID of existing customer.

### lastName

value: `string`

The last name for new customer.

### note

value: `string`

The note for new customer.

### Discount

### amount

value: `number`

Amount of discount. Only for fixed or percentage discounts.

### discountDescription

value: `string`

Description of discount.

### type

value: `DiscountType`

  - Discount: interface Discount {
  /**
   * Amount of discount. Only for fixed or percentage discounts.
   */
  amount: number;
  /**
   * Description of discount.
   */
  discountDescription?: string;
  /**
   * Type of discount.
   */
  type: DiscountType;
}
  - DiscountType: 'Percentage' | 'FixedAmount'
Type of discount.

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

The Intents API provides a way to invoke existing admin workflows for creating, editing, and managing Shopify resources.


### Article

Create a new article. Opens the article creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Article');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Article created:', response.data);
}

```

Edit an existing article. Requires an article GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Article', {
  value: 'gid://shopify/Article/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Article updated:', response.data);
}

```


### Catalog

Create a new catalog. Opens the catalog creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Catalog');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Catalog created:', response.data);
}

```

Edit an existing catalog. Requires a catalog GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Catalog', {
  value: 'gid://shopify/Catalog/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Catalog updated:', response.data);
}

```


### Collection

Create a new collection. Opens the collection creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Collection');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Collection created:', response.data);
}

```

Edit an existing collection. Requires a collection GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Collection', {
  value: 'gid://shopify/Collection/987654321',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Collection updated:', response.data);
}

```


### Customer

Create a new customer. Opens the customer creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Customer');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Customer created:', response.data);
}

```

Edit an existing customer. Requires a customer GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Customer', {
  value: 'gid://shopify/Customer/456789123',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Customer updated:', response.data);
}

```


### Discount

Create a new discount. Opens the discount creation workflow. Requires a discount type.```js
const activity = await shopify.intents.invoke('create:shopify/Discount', {
  data: {type: 'amount-off-product'},
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Discount created:', response.data);
}

```

Edit an existing discount. Requires a discount GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Discount', {
  value: 'gid://shopify/Discount/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Discount updated:', response.data);
}

```


### Market

Create a new market. Opens the market creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Market');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Market created:', response.data);
}

```

Edit an existing market. Requires a market GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Market', {
  value: 'gid://shopify/Market/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Market updated:', response.data);
}

```


### Menu

Create a new menu. Opens the menu creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Menu');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Menu created:', response.data);
}

```

Edit an existing menu. Requires a menu GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Menu', {
  value: 'gid://shopify/Menu/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Menu updated:', response.data);
}

```


### Metafield Definition

Create a new metafield definition. Opens the metafield definition creation workflow.```js
const activity = await shopify.intents.invoke(
  'create:shopify/MetafieldDefinition',
  {data: {ownerType: 'product'}},
);

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Metafield definition created:', response.data);
}

```

Edit an existing metafield definition. Requires a metafield definition GID.```js
const activity = await shopify.intents.invoke(
  'edit:shopify/MetafieldDefinition',
  {
    value: 'gid://shopify/MetafieldDefinition/123456789',
    data: {ownerType: 'product'},
  },
);

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Metafield definition updated:', response.data);
}

```


### Metaobject

Create a new metaobject. Opens the metaobject creation workflow. Requires a type.```js
const activity = await shopify.intents.invoke('create:shopify/Metaobject', {
  data: {type: 'shopify--color-pattern'},
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Metaobject created:', response.data);
}

```

Edit an existing metaobject. Requires a metaobject GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Metaobject', {
  value: 'gid://shopify/Metaobject/123456789',
  data: {type: 'shopify--color-pattern'},
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Metaobject updated:', response.data);
}

```


### Metaobject Definition

Create a new metaobject definition. Opens the metaobject definition creation workflow.```js
const activity = await shopify.intents.invoke(
  'create:shopify/MetaobjectDefinition',
);

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Metaobject definition created:', response.data);
}

```

Edit an existing metaobject definition. Requires a metaobject definition GID.```js
const activity = await shopify.intents.invoke(
  'edit:shopify/MetaobjectDefinition',
  {value: 'gid://shopify/MetaobjectDefinition/123456789'},
);

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Metaobject definition updated:', response.data);
}

```


### Page

Create a new page. Opens the page creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Page');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Page created:', response.data);
}

```

Edit an existing page. Requires a page GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Page', {
  value: 'gid://shopify/Page/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Page updated:', response.data);
}

```


### Product

Create a new product. Opens the product creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Product');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Product created:', response.data);
}

```

Edit an existing product. Requires a product GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Product', {
  value: 'gid://shopify/Product/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Product updated:', response.data);
}

```


### Product Variant

Create a new product variant. Opens the variant creation workflow. Requires a product ID.```js
const activity = await shopify.intents.invoke('create:shopify/ProductVariant', {
  data: {productId: 'gid://shopify/Product/123456789'},
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Product variant created:', response.data);
}

```

Edit an existing product variant. Requires a variant GID.```js
const activity = await shopify.intents.invoke('edit:shopify/ProductVariant', {
  value: 'gid://shopify/ProductVariant/123456789',
  data: {productId: 'gid://shopify/Product/123456789'},
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Product variant updated:', response.data);
}

```

## IntentQueryOptions

Options for invoking intents when using the query string format.

### IntentQueryOptions

Options for invoking intents when using the query string format.

### data

value: `{ [key: string]: unknown; }`

Additional data required for certain intent types. For example:
- Discount creation requires { type: 'amount-off-product' | 'amount-off-order' | 'buy-x-get-y' | 'free-shipping' }
- ProductVariant creation requires { productId: 'gid://shopify/Product/123' }
- Metaobject creation requires { type: 'shopify--color-pattern' }

### value

value: `string`

The resource identifier for edit actions (e.g., 'gid://shopify/Product/123').

## Examples

The Intents API provides a way to invoke existing admin workflows for creating, editing, and managing Shopify resources.


### Article

Create a new article. Opens the article creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Article');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Article created:', response.data);
}

```

Edit an existing article. Requires an article GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Article', {
  value: 'gid://shopify/Article/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Article updated:', response.data);
}

```


### Catalog

Create a new catalog. Opens the catalog creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Catalog');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Catalog created:', response.data);
}

```

Edit an existing catalog. Requires a catalog GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Catalog', {
  value: 'gid://shopify/Catalog/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Catalog updated:', response.data);
}

```


### Collection

Create a new collection. Opens the collection creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Collection');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Collection created:', response.data);
}

```

Edit an existing collection. Requires a collection GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Collection', {
  value: 'gid://shopify/Collection/987654321',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Collection updated:', response.data);
}

```


### Customer

Create a new customer. Opens the customer creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Customer');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Customer created:', response.data);
}

```

Edit an existing customer. Requires a customer GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Customer', {
  value: 'gid://shopify/Customer/456789123',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Customer updated:', response.data);
}

```


### Discount

Create a new discount. Opens the discount creation workflow. Requires a discount type.```js
const activity = await shopify.intents.invoke('create:shopify/Discount', {
  data: {type: 'amount-off-product'},
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Discount created:', response.data);
}

```

Edit an existing discount. Requires a discount GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Discount', {
  value: 'gid://shopify/Discount/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Discount updated:', response.data);
}

```


### Market

Create a new market. Opens the market creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Market');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Market created:', response.data);
}

```

Edit an existing market. Requires a market GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Market', {
  value: 'gid://shopify/Market/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Market updated:', response.data);
}

```


### Menu

Create a new menu. Opens the menu creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Menu');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Menu created:', response.data);
}

```

Edit an existing menu. Requires a menu GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Menu', {
  value: 'gid://shopify/Menu/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Menu updated:', response.data);
}

```


### Metafield Definition

Create a new metafield definition. Opens the metafield definition creation workflow.```js
const activity = await shopify.intents.invoke(
  'create:shopify/MetafieldDefinition',
  {data: {ownerType: 'product'}},
);

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Metafield definition created:', response.data);
}

```

Edit an existing metafield definition. Requires a metafield definition GID.```js
const activity = await shopify.intents.invoke(
  'edit:shopify/MetafieldDefinition',
  {
    value: 'gid://shopify/MetafieldDefinition/123456789',
    data: {ownerType: 'product'},
  },
);

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Metafield definition updated:', response.data);
}

```


### Metaobject

Create a new metaobject. Opens the metaobject creation workflow. Requires a type.```js
const activity = await shopify.intents.invoke('create:shopify/Metaobject', {
  data: {type: 'shopify--color-pattern'},
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Metaobject created:', response.data);
}

```

Edit an existing metaobject. Requires a metaobject GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Metaobject', {
  value: 'gid://shopify/Metaobject/123456789',
  data: {type: 'shopify--color-pattern'},
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Metaobject updated:', response.data);
}

```


### Metaobject Definition

Create a new metaobject definition. Opens the metaobject definition creation workflow.```js
const activity = await shopify.intents.invoke(
  'create:shopify/MetaobjectDefinition',
);

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Metaobject definition created:', response.data);
}

```

Edit an existing metaobject definition. Requires a metaobject definition GID.```js
const activity = await shopify.intents.invoke(
  'edit:shopify/MetaobjectDefinition',
  {value: 'gid://shopify/MetaobjectDefinition/123456789'},
);

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Metaobject definition updated:', response.data);
}

```


### Page

Create a new page. Opens the page creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Page');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Page created:', response.data);
}

```

Edit an existing page. Requires a page GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Page', {
  value: 'gid://shopify/Page/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Page updated:', response.data);
}

```


### Product

Create a new product. Opens the product creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Product');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Product created:', response.data);
}

```

Edit an existing product. Requires a product GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Product', {
  value: 'gid://shopify/Product/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Product updated:', response.data);
}

```


### Product Variant

Create a new product variant. Opens the variant creation workflow. Requires a product ID.```js
const activity = await shopify.intents.invoke('create:shopify/ProductVariant', {
  data: {productId: 'gid://shopify/Product/123456789'},
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Product variant created:', response.data);
}

```

Edit an existing product variant. Requires a variant GID.```js
const activity = await shopify.intents.invoke('edit:shopify/ProductVariant', {
  value: 'gid://shopify/ProductVariant/123456789',
  data: {productId: 'gid://shopify/Product/123456789'},
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Product variant updated:', response.data);
}

```

## IntentResponse

Response object returned when the intent workflow completes.

### ClosedIntentResponse

User dismissed or closed the workflow without completing it.

### code

value: `'closed'`


### SuccessIntentResponse

Successful intent completion.

### code

value: `'ok'`


### data

value: `{ [key: string]: unknown; }`


### ErrorIntentResponse

Failed intent completion.

### code

value: `'error'`


### issues

value: `Issue[]`


### message

value: `string`


## Examples

The Intents API provides a way to invoke existing admin workflows for creating, editing, and managing Shopify resources.


### Article

Create a new article. Opens the article creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Article');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Article created:', response.data);
}

```

Edit an existing article. Requires an article GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Article', {
  value: 'gid://shopify/Article/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Article updated:', response.data);
}

```


### Catalog

Create a new catalog. Opens the catalog creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Catalog');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Catalog created:', response.data);
}

```

Edit an existing catalog. Requires a catalog GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Catalog', {
  value: 'gid://shopify/Catalog/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Catalog updated:', response.data);
}

```


### Collection

Create a new collection. Opens the collection creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Collection');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Collection created:', response.data);
}

```

Edit an existing collection. Requires a collection GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Collection', {
  value: 'gid://shopify/Collection/987654321',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Collection updated:', response.data);
}

```


### Customer

Create a new customer. Opens the customer creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Customer');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Customer created:', response.data);
}

```

Edit an existing customer. Requires a customer GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Customer', {
  value: 'gid://shopify/Customer/456789123',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Customer updated:', response.data);
}

```


### Discount

Create a new discount. Opens the discount creation workflow. Requires a discount type.```js
const activity = await shopify.intents.invoke('create:shopify/Discount', {
  data: {type: 'amount-off-product'},
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Discount created:', response.data);
}

```

Edit an existing discount. Requires a discount GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Discount', {
  value: 'gid://shopify/Discount/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Discount updated:', response.data);
}

```


### Market

Create a new market. Opens the market creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Market');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Market created:', response.data);
}

```

Edit an existing market. Requires a market GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Market', {
  value: 'gid://shopify/Market/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Market updated:', response.data);
}

```


### Menu

Create a new menu. Opens the menu creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Menu');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Menu created:', response.data);
}

```

Edit an existing menu. Requires a menu GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Menu', {
  value: 'gid://shopify/Menu/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Menu updated:', response.data);
}

```


### Metafield Definition

Create a new metafield definition. Opens the metafield definition creation workflow.```js
const activity = await shopify.intents.invoke(
  'create:shopify/MetafieldDefinition',
  {data: {ownerType: 'product'}},
);

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Metafield definition created:', response.data);
}

```

Edit an existing metafield definition. Requires a metafield definition GID.```js
const activity = await shopify.intents.invoke(
  'edit:shopify/MetafieldDefinition',
  {
    value: 'gid://shopify/MetafieldDefinition/123456789',
    data: {ownerType: 'product'},
  },
);

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Metafield definition updated:', response.data);
}

```


### Metaobject

Create a new metaobject. Opens the metaobject creation workflow. Requires a type.```js
const activity = await shopify.intents.invoke('create:shopify/Metaobject', {
  data: {type: 'shopify--color-pattern'},
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Metaobject created:', response.data);
}

```

Edit an existing metaobject. Requires a metaobject GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Metaobject', {
  value: 'gid://shopify/Metaobject/123456789',
  data: {type: 'shopify--color-pattern'},
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Metaobject updated:', response.data);
}

```


### Metaobject Definition

Create a new metaobject definition. Opens the metaobject definition creation workflow.```js
const activity = await shopify.intents.invoke(
  'create:shopify/MetaobjectDefinition',
);

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Metaobject definition created:', response.data);
}

```

Edit an existing metaobject definition. Requires a metaobject definition GID.```js
const activity = await shopify.intents.invoke(
  'edit:shopify/MetaobjectDefinition',
  {value: 'gid://shopify/MetaobjectDefinition/123456789'},
);

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Metaobject definition updated:', response.data);
}

```


### Page

Create a new page. Opens the page creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Page');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Page created:', response.data);
}

```

Edit an existing page. Requires a page GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Page', {
  value: 'gid://shopify/Page/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Page updated:', response.data);
}

```


### Product

Create a new product. Opens the product creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Product');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Product created:', response.data);
}

```

Edit an existing product. Requires a product GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Product', {
  value: 'gid://shopify/Product/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Product updated:', response.data);
}

```


### Product Variant

Create a new product variant. Opens the variant creation workflow. Requires a product ID.```js
const activity = await shopify.intents.invoke('create:shopify/ProductVariant', {
  data: {productId: 'gid://shopify/Product/123456789'},
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Product variant created:', response.data);
}

```

Edit an existing product variant. Requires a variant GID.```js
const activity = await shopify.intents.invoke('edit:shopify/ProductVariant', {
  value: 'gid://shopify/ProductVariant/123456789',
  data: {productId: 'gid://shopify/Product/123456789'},
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Product variant updated:', response.data);
}

```

## Examples

The Intents API provides a way to invoke existing admin workflows for creating, editing, and managing Shopify resources.


### Article

Create a new article. Opens the article creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Article');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Article created:', response.data);
}

```

Edit an existing article. Requires an article GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Article', {
  value: 'gid://shopify/Article/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Article updated:', response.data);
}

```


### Catalog

Create a new catalog. Opens the catalog creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Catalog');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Catalog created:', response.data);
}

```

Edit an existing catalog. Requires a catalog GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Catalog', {
  value: 'gid://shopify/Catalog/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Catalog updated:', response.data);
}

```


### Collection

Create a new collection. Opens the collection creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Collection');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Collection created:', response.data);
}

```

Edit an existing collection. Requires a collection GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Collection', {
  value: 'gid://shopify/Collection/987654321',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Collection updated:', response.data);
}

```


### Customer

Create a new customer. Opens the customer creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Customer');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Customer created:', response.data);
}

```

Edit an existing customer. Requires a customer GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Customer', {
  value: 'gid://shopify/Customer/456789123',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Customer updated:', response.data);
}

```


### Discount

Create a new discount. Opens the discount creation workflow. Requires a discount type.```js
const activity = await shopify.intents.invoke('create:shopify/Discount', {
  data: {type: 'amount-off-product'},
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Discount created:', response.data);
}

```

Edit an existing discount. Requires a discount GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Discount', {
  value: 'gid://shopify/Discount/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Discount updated:', response.data);
}

```


### Market

Create a new market. Opens the market creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Market');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Market created:', response.data);
}

```

Edit an existing market. Requires a market GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Market', {
  value: 'gid://shopify/Market/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Market updated:', response.data);
}

```


### Menu

Create a new menu. Opens the menu creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Menu');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Menu created:', response.data);
}

```

Edit an existing menu. Requires a menu GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Menu', {
  value: 'gid://shopify/Menu/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Menu updated:', response.data);
}

```


### Metafield Definition

Create a new metafield definition. Opens the metafield definition creation workflow.```js
const activity = await shopify.intents.invoke(
  'create:shopify/MetafieldDefinition',
  {data: {ownerType: 'product'}},
);

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Metafield definition created:', response.data);
}

```

Edit an existing metafield definition. Requires a metafield definition GID.```js
const activity = await shopify.intents.invoke(
  'edit:shopify/MetafieldDefinition',
  {
    value: 'gid://shopify/MetafieldDefinition/123456789',
    data: {ownerType: 'product'},
  },
);

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Metafield definition updated:', response.data);
}

```


### Metaobject

Create a new metaobject. Opens the metaobject creation workflow. Requires a type.```js
const activity = await shopify.intents.invoke('create:shopify/Metaobject', {
  data: {type: 'shopify--color-pattern'},
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Metaobject created:', response.data);
}

```

Edit an existing metaobject. Requires a metaobject GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Metaobject', {
  value: 'gid://shopify/Metaobject/123456789',
  data: {type: 'shopify--color-pattern'},
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Metaobject updated:', response.data);
}

```


### Metaobject Definition

Create a new metaobject definition. Opens the metaobject definition creation workflow.```js
const activity = await shopify.intents.invoke(
  'create:shopify/MetaobjectDefinition',
);

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Metaobject definition created:', response.data);
}

```

Edit an existing metaobject definition. Requires a metaobject definition GID.```js
const activity = await shopify.intents.invoke(
  'edit:shopify/MetaobjectDefinition',
  {value: 'gid://shopify/MetaobjectDefinition/123456789'},
);

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Metaobject definition updated:', response.data);
}

```


### Page

Create a new page. Opens the page creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Page');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Page created:', response.data);
}

```

Edit an existing page. Requires a page GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Page', {
  value: 'gid://shopify/Page/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Page updated:', response.data);
}

```


### Product

Create a new product. Opens the product creation workflow.```js
const activity = await shopify.intents.invoke('create:shopify/Product');

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Product created:', response.data);
}

```

Edit an existing product. Requires a product GID.```js
const activity = await shopify.intents.invoke('edit:shopify/Product', {
  value: 'gid://shopify/Product/123456789',
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Product updated:', response.data);
}

```


### Product Variant

Create a new product variant. Opens the variant creation workflow. Requires a product ID.```js
const activity = await shopify.intents.invoke('create:shopify/ProductVariant', {
  data: {productId: 'gid://shopify/Product/123456789'},
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Product variant created:', response.data);
}

```

Edit an existing product variant. Requires a variant GID.```js
const activity = await shopify.intents.invoke('edit:shopify/ProductVariant', {
  value: 'gid://shopify/ProductVariant/123456789',
  data: {productId: 'gid://shopify/Product/123456789'},
});

const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Product variant updated:', response.data);
}

```

