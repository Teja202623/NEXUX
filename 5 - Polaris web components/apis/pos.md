# POS


  The POS API provides the ability to retrieve POS user, device, and location data, while also interacting with the cart and closing the app.

  > Tip:
  > It is recommended to use POS UI extensions for your development needs as they provide a faster, more robust, and easier to use solution for merchants using apps on POS. To learn more about the benefits and implementation details, refer to [POS UI Extensions](https://shopify.dev/docs/apps/pos/ui-extensions).
  

```js
await shopify.pos.cart.fetch();

```

## Cart

Retrieve cart data and perform actions.

### _PosCart

### addAddress

value: `(address: Address) => Promise<void>`

  - Address: interface Address {
  /**
   * The customer's primary address.
   */
  address1?: string;
  /**
   * Any extra information associated with the address (Apartment #, Suite #, Unit #, etc.).
   */
  address2?: string;
  /**
   * The name of the customer's city.
   */
  city?: string;
  /**
   * The company name associated with address.
   */
  company?: string;
  /**
   * The first name of the customer.
   */
  firstName?: string;
  /**
   * 	The last name of the customer.
   */
  lastName?: string;
  /**
   * The phone number of the customer.
   */
  phone?: string;
  /**
   * The province or state of the address.
   */
  province?: string;
  /**
   * The country of the address.
   */
  country?: string;
  /**
   * The ZIP or postal code of the address.
   */
  zip?: string;
  /**
   * The name of the address.
   */
  name?: string;
  /**
   * The acronym of the province or state.
   */
  provinceCode?: string;
  /**
   * The Country Code in ISO 3166-1 (alpha-2) format.
   */
  countryCode?: string;
}
Add a new address to a customer.

### addCartProperties

value: `(properties: Record<string, string>) => Promise<void>`

Add properties for the cart.

### addCustomSale

value: `(customSale: CustomSale) => Promise<void>`

  - CustomSale: interface CustomSale {
  /**
   * Price of line item
   */
  price: number;
  /**
   * Quantity of line item.
   */
  quantity: number;
  /**
   * Title of line item.
   */
  title: string;
  /**
   * If line item charges tax.
   */
  taxable: boolean;
}
Add custom sale for the cart.

### addLineItem

value: `(variantId: number, quantity: number) => Promise<void>`

Add a product to the cart.

### addLineItemProperties

value: `(uuid: string, properties: Record<string, string>) => Promise<void>`

Add properties to a line item.

### applyCartCodeDiscount

value: `(code: string) => Promise<void>`

Apply a code discount to the whole cart.

### applyCartDiscount

value: `(type: DiscountType, discountDescription: string, amount: string) => Promise<void>`

  - DiscountType: 'Percentage' | 'FixedAmount'
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
Apply a percentage or fixed amount discount to the whole cart.

### clear

value: `() => Promise<void>`

Clear all contents from the cart.

### fetch

value: `() => Promise<Cart>`

  - Cart: interface Cart {
  /**
   * 	The total cost of the current cart including discounts, but before taxes and shipping. Value is based on the shop's existing currency settings.
   */
  subTotal: string;
  /**
   * The sum of taxes for the current cart. Value is based on the shop's existing currency settings.
   */
  taxTotal: string;
  /**
   * The total cost of the current cart, after taxes and discounts have been applied. Value is based on the shop's existing currency settings.
   */
  grandTotal: string;
  /**
   * The current discount applied to the entire cart.
   */
  cartDiscount?: Discount;
  /**
   * All current discounts applied to the entire cart and line items.
   */
  cartDiscounts?: Discount[];
  /**
   * The customer associated to the current cart.
   */
  customer?: Customer;
  /**
   * A list of lineItem objects.
   */
  lineItems: LineItem[];
  /**
   * A list of objects containing cart properties.
   */
  properties: Record<string, string>;
}
Fetch the current cart.

### removeAllDiscounts

value: `(disableAutomaticDiscounts: boolean) => Promise<void>`

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
Clears all applied discounts from the cart and optionally disables automatic discounts.

### removeCartDiscount

value: `() => Promise<void>`

Remove the discount applied to the whole cart.

### removeCartProperties

value: `(keys: string[]) => Promise<void>`

Remove properties from the cart.

### removeCustomer

value: `() => Promise<void>`

Remove the current customer from the cart.

### removeLineItem

value: `(uuid: string) => Promise<void>`

Remove a line item in the cart.

### removeLineItemDiscount

value: `(uuid: string) => Promise<void>`

Remove a discount from a line item.

### removeLineItemProperties

value: `(uuid: string, properties: string[]) => Promise<void>`

Remove properties from a line item.

### setCustomer

value: `(customer: Customer) => Promise<void>`

  - Customer: interface Customer {
  /**
   * The ID of existing customer.
   */
  id: number;
  /**
   * The email for a new customer.
   */
  email?: string;
  /**
   * The first name for new customer.
   */
  firstName?: string;
  /**
   * The last name for new customer.
   */
  lastName?: string;
  /**
   * The note for new customer.
   */
  note?: string;
}
Add a new or existing customer to the cart.

### setLineItemDiscount

value: `(uuid: string, type: DiscountType, discountDescription: string, amount: string) => Promise<void>`

  - DiscountType: 'Percentage' | 'FixedAmount'
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
Apply a discount to a line item.

### subscribe

value: `(onSubscribe: CartSubscriber) => Unsubscribe`

  - Cart: interface Cart {
  /**
   * 	The total cost of the current cart including discounts, but before taxes and shipping. Value is based on the shop's existing currency settings.
   */
  subTotal: string;
  /**
   * The sum of taxes for the current cart. Value is based on the shop's existing currency settings.
   */
  taxTotal: string;
  /**
   * The total cost of the current cart, after taxes and discounts have been applied. Value is based on the shop's existing currency settings.
   */
  grandTotal: string;
  /**
   * The current discount applied to the entire cart.
   */
  cartDiscount?: Discount;
  /**
   * All current discounts applied to the entire cart and line items.
   */
  cartDiscounts?: Discount[];
  /**
   * The customer associated to the current cart.
   */
  customer?: Customer;
  /**
   * A list of lineItem objects.
   */
  lineItems: LineItem[];
  /**
   * A list of objects containing cart properties.
   */
  properties: Record<string, string>;
}
  - CartSubscriber: (cart: Cart) => void
  - Unsubscribe: () => void
Subscribe the cart changes.

### updateAddress

value: `(index: number, address: Address) => Promise<void>`

  - Address: interface Address {
  /**
   * The customer's primary address.
   */
  address1?: string;
  /**
   * Any extra information associated with the address (Apartment #, Suite #, Unit #, etc.).
   */
  address2?: string;
  /**
   * The name of the customer's city.
   */
  city?: string;
  /**
   * The company name associated with address.
   */
  company?: string;
  /**
   * The first name of the customer.
   */
  firstName?: string;
  /**
   * 	The last name of the customer.
   */
  lastName?: string;
  /**
   * The phone number of the customer.
   */
  phone?: string;
  /**
   * The province or state of the address.
   */
  province?: string;
  /**
   * The country of the address.
   */
  country?: string;
  /**
   * The ZIP or postal code of the address.
   */
  zip?: string;
  /**
   * The name of the address.
   */
  name?: string;
  /**
   * The acronym of the province or state.
   */
  provinceCode?: string;
  /**
   * The Country Code in ISO 3166-1 (alpha-2) format.
   */
  countryCode?: string;
}
Update an address for a customer.

### updateLineItem

value: `(uuid: string, quantity: number) => Promise<void>`

Make changes to a line item in the cart.

### Address

### address1

value: `string`

The customer's primary address.

### address2

value: `string`

Any extra information associated with the address (Apartment #, Suite #, Unit #, etc.).

### city

value: `string`

The name of the customer's city.

### company

value: `string`

The company name associated with address.

### country

value: `string`

The country of the address.

### countryCode

value: `string`

The Country Code in ISO 3166-1 (alpha-2) format.

### firstName

value: `string`

The first name of the customer.

### lastName

value: `string`

The last name of the customer.

### name

value: `string`

The name of the address.

### phone

value: `string`

The phone number of the customer.

### province

value: `string`

The province or state of the address.

### provinceCode

value: `string`

The acronym of the province or state.

### zip

value: `string`

The ZIP or postal code of the address.

### CustomSale

### price

value: `number`

Price of line item

### quantity

value: `number`

Quantity of line item.

### taxable

value: `boolean`

If line item charges tax.

### title

value: `string`

Title of line item.

### Cart

### cartDiscount

value: `Discount`

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
The current discount applied to the entire cart.

### cartDiscounts

value: `Discount[]`

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
All current discounts applied to the entire cart and line items.

### customer

value: `Customer`

  - Customer: interface Customer {
  /**
   * The ID of existing customer.
   */
  id: number;
  /**
   * The email for a new customer.
   */
  email?: string;
  /**
   * The first name for new customer.
   */
  firstName?: string;
  /**
   * The last name for new customer.
   */
  lastName?: string;
  /**
   * The note for new customer.
   */
  note?: string;
}
The customer associated to the current cart.

### grandTotal

value: `string`

The total cost of the current cart, after taxes and discounts have been applied. Value is based on the shop's existing currency settings.

### lineItems

value: `LineItem[]`

  - LineItem: interface LineItem {
  /**
   * Unique id of line item
   */
  uuid: string;
  /**
   * Price of line item
   */
  price?: number;
  /**
   * Quantity of line item.
   */
  quantity: number;
  /**
   * Title of line item.
   */
  title?: string;
  /**
   * Variant identifier for line item.
   */
  variantId?: number;
  /**
   * Product identifier for line item.
   */
  productId?: number;
  /**
   * Discount applied to line item.
   */
  discounts: Discount[];
  /**
   * If line item charges tax.
   */
  taxable: boolean;
  /**
   * Stock keeping unit of the line item.
   */
  sku?: string;
  /**
   * Vendor of line item.
   */
  vendor?: string;
  /**
   * Properties of the line item.
   */
  properties: {[key: string]: string};
  /**
   * If the line item is a gift card.
   */
  isGiftCard: boolean;
}
A list of lineItem objects.

### properties

value: `Record<string, string>`

A list of objects containing cart properties.

### subTotal

value: `string`

The total cost of the current cart including discounts, but before taxes and shipping. Value is based on the shop's existing currency settings.

### taxTotal

value: `string`

The sum of taxes for the current cart. Value is based on the shop's existing currency settings.

### Discount

### amount

value: `number`

Amount of discount. Only for fixed or percentage discounts.

### discountDescription

value: `string`

Description of discount.

### type

value: `DiscountType`

  - DiscountType: 'Percentage' | 'FixedAmount'
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
Type of discount.

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

### LineItem

### discounts

value: `Discount[]`

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
Discount applied to line item.

### isGiftCard

value: `boolean`

If the line item is a gift card.

### price

value: `number`

Price of line item

### productId

value: `number`

Product identifier for line item.

### properties

value: `{ [key: string]: string; }`

Properties of the line item.

### quantity

value: `number`

Quantity of line item.

### sku

value: `string`

Stock keeping unit of the line item.

### taxable

value: `boolean`

If line item charges tax.

### title

value: `string`

Title of line item.

### uuid

value: `string`

Unique id of line item

### variantId

value: `number`

Variant identifier for line item.

### vendor

value: `string`

Vendor of line item.

### CartSubscriber

Callback to execute when cart updates.

#### Returns: void

#### Params:

- cart: Cart
(cart: Cart) => void


### Unsubscribe

Callback to unsubscribe

#### Returns: void
() => void


## Examples


  The POS API provides the ability to retrieve POS user, device, and location data, while also interacting with the cart and closing the app.

  > Tip:
  > It is recommended to use POS UI extensions for your development needs as they provide a faster, more robust, and easier to use solution for merchants using apps on POS. To learn more about the benefits and implementation details, refer to [POS UI Extensions](https://shopify.dev/docs/apps/pos/ui-extensions).
  


### Cart

```js
await shopify.pos.cart.fetch();

```

```js
await shopify.pos.cart.subscribe((cart) => {
  console.log(cart);
});

```

```js
await shopify.pos.cart.clear();

```

```js
await shopify.pos.cart.addLineItem(40202439393345, 10);

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.updateLineItem(lineItemUuid, 4);

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.removeLineItem(lineItemUuid);

```

```js
await shopify.pos.cart.addCustomSale({
  price: 10,
  quantity: 1,
  title: 'Custom sale',
  taxable: true,
});

```

```js
await shopify.pos.cart.setCustomer({
  email: 'foo@shopify.com',
  firstName: 'Jane',
  lastName: 'Doe',
  note: 'Customer note',
});

```

```js
await shopify.pos.cart.setCustomer({
  id: 5945486803009,
  note: 'Customer note',
});

```

```js
await shopify.pos.cart.removeCustomer();

```

```js
await shopify.pos.cart.addAddress({
  address1: '123 Cherry St.',
  address2: 'Apt. 5',
  city: 'Toronto',
  company: 'Shopify',
  firstName: 'Foo',
  lastName: 'Bar',
  phone: '(613) 555-5555',
  province: 'Ontario',
  country: 'Canada',
  zip: 'M5V0G4',
  name: 'Shopify',
  provinceCode: 'M5V0G4',
  countryCode: '1',
});

```

```js
await shopify.pos.cart.updateAddress(0, {
  address1: '555 Apple St.',
  address2: 'Unit. 10',
  city: 'Vancouver',
  company: 'Shopify',
  firstName: 'Jane',
  lastName: 'Doe',
  phone: '(403) 555-5555',
  province: 'British Columbia',
  country: 'Canada',
  zip: 'M5V0G4',
  name: 'Shopify',
  provinceCode: 'M5V0G4',
  countryCode: '2',
});

```

```js
await shopify.pos.cart.addAddress({
  address1: '123 Cherry St.',
  address2: 'Apt. 5',
  city: 'Toronto',
  company: 'Shopify',
  firstName: 'Foo',
  lastName: 'Bar',
  phone: '(613) 555-5555',
  province: 'Ontario',
  country: 'Canada',
  zip: 'M5V0G4',
  name: 'Shopify',
  provinceCode: 'M5V0G4',
  countryCode: '1',
});

```

```js
await shopify.pos.cart.updateAddress(0, {
  address1: '555 Apple St.',
  address2: 'Unit. 10',
  city: 'Vancouver',
  company: 'Shopify',
  firstName: 'Jane',
  lastName: 'Doe',
  phone: '(403) 555-5555',
  province: 'British Columbia',
  country: 'Canada',
  zip: 'M5V0G4',
  name: 'Shopify',
  provinceCode: 'M5V0G4',
  countryCode: '2',
});

```

```js
await shopify.pos.cart.applyCartDiscount('FixedAmount', 'Holiday sale', '10');

```

```js
await shopify.pos.cart.applyCartCodeDiscount('HOLIDAY SALE');

```

```js
await shopify.pos.cart.removeCartDiscount();

```

```js
await shopify.pos.cart.removeAllDiscounts(true);

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.setLineItemDiscount(
  lineItemUuid,
  'Percentage',
  'Holiday sale',
  '0.5',
);

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.removeLineItemDiscount(lineItemUuid);

```

```js
await shopify.pos.cart.addCartProperties({
  referral: 'Shopify',
  employee: '472',
});

```

```js
await shopify.pos.cart.removeCartProperties(['referral', 'employee']);

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.addLineItemProperties(lineItemUuid, {
  referral: 'Shopify',
  employee: '472',
});

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.removeLineItemProperties(lineItemUuid, [
  'referral',
  'employee',
]);

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.addLineItemProperties(lineItemUuid, {
  referral: 'Shopify',
  employee: '472',
});

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.removeLineItemProperties(lineItemUuid, [
  'referral',
  'employee',
]);

```


### Close

```js
await shopify.pos.close();

```


### Device

```js
await shopify.pos.device();

```


### Location

```js
await shopify.pos.location();

```

## Close

Close the app

### PosClose

#### Returns: Promise<void>
() => Promise<void>


## Examples


  The POS API provides the ability to retrieve POS user, device, and location data, while also interacting with the cart and closing the app.

  > Tip:
  > It is recommended to use POS UI extensions for your development needs as they provide a faster, more robust, and easier to use solution for merchants using apps on POS. To learn more about the benefits and implementation details, refer to [POS UI Extensions](https://shopify.dev/docs/apps/pos/ui-extensions).
  


### Cart

```js
await shopify.pos.cart.fetch();

```

```js
await shopify.pos.cart.subscribe((cart) => {
  console.log(cart);
});

```

```js
await shopify.pos.cart.clear();

```

```js
await shopify.pos.cart.addLineItem(40202439393345, 10);

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.updateLineItem(lineItemUuid, 4);

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.removeLineItem(lineItemUuid);

```

```js
await shopify.pos.cart.addCustomSale({
  price: 10,
  quantity: 1,
  title: 'Custom sale',
  taxable: true,
});

```

```js
await shopify.pos.cart.setCustomer({
  email: 'foo@shopify.com',
  firstName: 'Jane',
  lastName: 'Doe',
  note: 'Customer note',
});

```

```js
await shopify.pos.cart.setCustomer({
  id: 5945486803009,
  note: 'Customer note',
});

```

```js
await shopify.pos.cart.removeCustomer();

```

```js
await shopify.pos.cart.addAddress({
  address1: '123 Cherry St.',
  address2: 'Apt. 5',
  city: 'Toronto',
  company: 'Shopify',
  firstName: 'Foo',
  lastName: 'Bar',
  phone: '(613) 555-5555',
  province: 'Ontario',
  country: 'Canada',
  zip: 'M5V0G4',
  name: 'Shopify',
  provinceCode: 'M5V0G4',
  countryCode: '1',
});

```

```js
await shopify.pos.cart.updateAddress(0, {
  address1: '555 Apple St.',
  address2: 'Unit. 10',
  city: 'Vancouver',
  company: 'Shopify',
  firstName: 'Jane',
  lastName: 'Doe',
  phone: '(403) 555-5555',
  province: 'British Columbia',
  country: 'Canada',
  zip: 'M5V0G4',
  name: 'Shopify',
  provinceCode: 'M5V0G4',
  countryCode: '2',
});

```

```js
await shopify.pos.cart.addAddress({
  address1: '123 Cherry St.',
  address2: 'Apt. 5',
  city: 'Toronto',
  company: 'Shopify',
  firstName: 'Foo',
  lastName: 'Bar',
  phone: '(613) 555-5555',
  province: 'Ontario',
  country: 'Canada',
  zip: 'M5V0G4',
  name: 'Shopify',
  provinceCode: 'M5V0G4',
  countryCode: '1',
});

```

```js
await shopify.pos.cart.updateAddress(0, {
  address1: '555 Apple St.',
  address2: 'Unit. 10',
  city: 'Vancouver',
  company: 'Shopify',
  firstName: 'Jane',
  lastName: 'Doe',
  phone: '(403) 555-5555',
  province: 'British Columbia',
  country: 'Canada',
  zip: 'M5V0G4',
  name: 'Shopify',
  provinceCode: 'M5V0G4',
  countryCode: '2',
});

```

```js
await shopify.pos.cart.applyCartDiscount('FixedAmount', 'Holiday sale', '10');

```

```js
await shopify.pos.cart.applyCartCodeDiscount('HOLIDAY SALE');

```

```js
await shopify.pos.cart.removeCartDiscount();

```

```js
await shopify.pos.cart.removeAllDiscounts(true);

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.setLineItemDiscount(
  lineItemUuid,
  'Percentage',
  'Holiday sale',
  '0.5',
);

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.removeLineItemDiscount(lineItemUuid);

```

```js
await shopify.pos.cart.addCartProperties({
  referral: 'Shopify',
  employee: '472',
});

```

```js
await shopify.pos.cart.removeCartProperties(['referral', 'employee']);

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.addLineItemProperties(lineItemUuid, {
  referral: 'Shopify',
  employee: '472',
});

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.removeLineItemProperties(lineItemUuid, [
  'referral',
  'employee',
]);

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.addLineItemProperties(lineItemUuid, {
  referral: 'Shopify',
  employee: '472',
});

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.removeLineItemProperties(lineItemUuid, [
  'referral',
  'employee',
]);

```


### Close

```js
await shopify.pos.close();

```


### Device

```js
await shopify.pos.device();

```


### Location

```js
await shopify.pos.location();

```

## Device

Retrieve device data 

### PosDevice

#### Returns: Promise<Device>
() => Promise<Device>


### Device

### name

value: `string`

The name of the device.

### serialNumber

value: `string`

The unique ID associated device ID and app ID..

## Examples


  The POS API provides the ability to retrieve POS user, device, and location data, while also interacting with the cart and closing the app.

  > Tip:
  > It is recommended to use POS UI extensions for your development needs as they provide a faster, more robust, and easier to use solution for merchants using apps on POS. To learn more about the benefits and implementation details, refer to [POS UI Extensions](https://shopify.dev/docs/apps/pos/ui-extensions).
  


### Cart

```js
await shopify.pos.cart.fetch();

```

```js
await shopify.pos.cart.subscribe((cart) => {
  console.log(cart);
});

```

```js
await shopify.pos.cart.clear();

```

```js
await shopify.pos.cart.addLineItem(40202439393345, 10);

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.updateLineItem(lineItemUuid, 4);

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.removeLineItem(lineItemUuid);

```

```js
await shopify.pos.cart.addCustomSale({
  price: 10,
  quantity: 1,
  title: 'Custom sale',
  taxable: true,
});

```

```js
await shopify.pos.cart.setCustomer({
  email: 'foo@shopify.com',
  firstName: 'Jane',
  lastName: 'Doe',
  note: 'Customer note',
});

```

```js
await shopify.pos.cart.setCustomer({
  id: 5945486803009,
  note: 'Customer note',
});

```

```js
await shopify.pos.cart.removeCustomer();

```

```js
await shopify.pos.cart.addAddress({
  address1: '123 Cherry St.',
  address2: 'Apt. 5',
  city: 'Toronto',
  company: 'Shopify',
  firstName: 'Foo',
  lastName: 'Bar',
  phone: '(613) 555-5555',
  province: 'Ontario',
  country: 'Canada',
  zip: 'M5V0G4',
  name: 'Shopify',
  provinceCode: 'M5V0G4',
  countryCode: '1',
});

```

```js
await shopify.pos.cart.updateAddress(0, {
  address1: '555 Apple St.',
  address2: 'Unit. 10',
  city: 'Vancouver',
  company: 'Shopify',
  firstName: 'Jane',
  lastName: 'Doe',
  phone: '(403) 555-5555',
  province: 'British Columbia',
  country: 'Canada',
  zip: 'M5V0G4',
  name: 'Shopify',
  provinceCode: 'M5V0G4',
  countryCode: '2',
});

```

```js
await shopify.pos.cart.addAddress({
  address1: '123 Cherry St.',
  address2: 'Apt. 5',
  city: 'Toronto',
  company: 'Shopify',
  firstName: 'Foo',
  lastName: 'Bar',
  phone: '(613) 555-5555',
  province: 'Ontario',
  country: 'Canada',
  zip: 'M5V0G4',
  name: 'Shopify',
  provinceCode: 'M5V0G4',
  countryCode: '1',
});

```

```js
await shopify.pos.cart.updateAddress(0, {
  address1: '555 Apple St.',
  address2: 'Unit. 10',
  city: 'Vancouver',
  company: 'Shopify',
  firstName: 'Jane',
  lastName: 'Doe',
  phone: '(403) 555-5555',
  province: 'British Columbia',
  country: 'Canada',
  zip: 'M5V0G4',
  name: 'Shopify',
  provinceCode: 'M5V0G4',
  countryCode: '2',
});

```

```js
await shopify.pos.cart.applyCartDiscount('FixedAmount', 'Holiday sale', '10');

```

```js
await shopify.pos.cart.applyCartCodeDiscount('HOLIDAY SALE');

```

```js
await shopify.pos.cart.removeCartDiscount();

```

```js
await shopify.pos.cart.removeAllDiscounts(true);

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.setLineItemDiscount(
  lineItemUuid,
  'Percentage',
  'Holiday sale',
  '0.5',
);

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.removeLineItemDiscount(lineItemUuid);

```

```js
await shopify.pos.cart.addCartProperties({
  referral: 'Shopify',
  employee: '472',
});

```

```js
await shopify.pos.cart.removeCartProperties(['referral', 'employee']);

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.addLineItemProperties(lineItemUuid, {
  referral: 'Shopify',
  employee: '472',
});

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.removeLineItemProperties(lineItemUuid, [
  'referral',
  'employee',
]);

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.addLineItemProperties(lineItemUuid, {
  referral: 'Shopify',
  employee: '472',
});

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.removeLineItemProperties(lineItemUuid, [
  'referral',
  'employee',
]);

```


### Close

```js
await shopify.pos.close();

```


### Device

```js
await shopify.pos.device();

```


### Location

```js
await shopify.pos.location();

```

## Location

Retrieve location data

### PosLocation

#### Returns: Promise<Location>
() => Promise<Location>


### Location

### active

value: `boolean`

The status of current location.

### address1

value: `string`

The primary address of current location.

### address2

value: `string`

Any extra information associated with the address (Apartment #, Suite #, Unit #, etc.).

### city

value: `string`

The name of the city.

### countryCode

value: `string`

The Country Code in ISO 3166-1 (alpha-2) format.

### countryName

value: `string`

The country of the address.

### id

value: `number`

The ID of current location.

### locationType

value: `string`

The type of current location.

### name

value: `string`

The name of current location.

### phone

value: `string`

The phone number of the location.

### province

value: `string`

TThe province or state of the address.

### zip

value: `string`

The ZIP or postal code of the address.

## Examples


  The POS API provides the ability to retrieve POS user, device, and location data, while also interacting with the cart and closing the app.

  > Tip:
  > It is recommended to use POS UI extensions for your development needs as they provide a faster, more robust, and easier to use solution for merchants using apps on POS. To learn more about the benefits and implementation details, refer to [POS UI Extensions](https://shopify.dev/docs/apps/pos/ui-extensions).
  


### Cart

```js
await shopify.pos.cart.fetch();

```

```js
await shopify.pos.cart.subscribe((cart) => {
  console.log(cart);
});

```

```js
await shopify.pos.cart.clear();

```

```js
await shopify.pos.cart.addLineItem(40202439393345, 10);

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.updateLineItem(lineItemUuid, 4);

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.removeLineItem(lineItemUuid);

```

```js
await shopify.pos.cart.addCustomSale({
  price: 10,
  quantity: 1,
  title: 'Custom sale',
  taxable: true,
});

```

```js
await shopify.pos.cart.setCustomer({
  email: 'foo@shopify.com',
  firstName: 'Jane',
  lastName: 'Doe',
  note: 'Customer note',
});

```

```js
await shopify.pos.cart.setCustomer({
  id: 5945486803009,
  note: 'Customer note',
});

```

```js
await shopify.pos.cart.removeCustomer();

```

```js
await shopify.pos.cart.addAddress({
  address1: '123 Cherry St.',
  address2: 'Apt. 5',
  city: 'Toronto',
  company: 'Shopify',
  firstName: 'Foo',
  lastName: 'Bar',
  phone: '(613) 555-5555',
  province: 'Ontario',
  country: 'Canada',
  zip: 'M5V0G4',
  name: 'Shopify',
  provinceCode: 'M5V0G4',
  countryCode: '1',
});

```

```js
await shopify.pos.cart.updateAddress(0, {
  address1: '555 Apple St.',
  address2: 'Unit. 10',
  city: 'Vancouver',
  company: 'Shopify',
  firstName: 'Jane',
  lastName: 'Doe',
  phone: '(403) 555-5555',
  province: 'British Columbia',
  country: 'Canada',
  zip: 'M5V0G4',
  name: 'Shopify',
  provinceCode: 'M5V0G4',
  countryCode: '2',
});

```

```js
await shopify.pos.cart.addAddress({
  address1: '123 Cherry St.',
  address2: 'Apt. 5',
  city: 'Toronto',
  company: 'Shopify',
  firstName: 'Foo',
  lastName: 'Bar',
  phone: '(613) 555-5555',
  province: 'Ontario',
  country: 'Canada',
  zip: 'M5V0G4',
  name: 'Shopify',
  provinceCode: 'M5V0G4',
  countryCode: '1',
});

```

```js
await shopify.pos.cart.updateAddress(0, {
  address1: '555 Apple St.',
  address2: 'Unit. 10',
  city: 'Vancouver',
  company: 'Shopify',
  firstName: 'Jane',
  lastName: 'Doe',
  phone: '(403) 555-5555',
  province: 'British Columbia',
  country: 'Canada',
  zip: 'M5V0G4',
  name: 'Shopify',
  provinceCode: 'M5V0G4',
  countryCode: '2',
});

```

```js
await shopify.pos.cart.applyCartDiscount('FixedAmount', 'Holiday sale', '10');

```

```js
await shopify.pos.cart.applyCartCodeDiscount('HOLIDAY SALE');

```

```js
await shopify.pos.cart.removeCartDiscount();

```

```js
await shopify.pos.cart.removeAllDiscounts(true);

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.setLineItemDiscount(
  lineItemUuid,
  'Percentage',
  'Holiday sale',
  '0.5',
);

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.removeLineItemDiscount(lineItemUuid);

```

```js
await shopify.pos.cart.addCartProperties({
  referral: 'Shopify',
  employee: '472',
});

```

```js
await shopify.pos.cart.removeCartProperties(['referral', 'employee']);

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.addLineItemProperties(lineItemUuid, {
  referral: 'Shopify',
  employee: '472',
});

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.removeLineItemProperties(lineItemUuid, [
  'referral',
  'employee',
]);

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.addLineItemProperties(lineItemUuid, {
  referral: 'Shopify',
  employee: '472',
});

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.removeLineItemProperties(lineItemUuid, [
  'referral',
  'employee',
]);

```


### Close

```js
await shopify.pos.close();

```


### Device

```js
await shopify.pos.device();

```


### Location

```js
await shopify.pos.location();

```

## User

Refer to the [user API](https://shopify.dev/docs/api/app-bridge-library/apis/user) to learn more about retrieving POS user data.

### POSUserAPI

#### Returns: Promise<POSUser>
() => Promise<POSUser>


### POSUser

### accountAccess

value: `string`

The account access level of the logged-in user

### accountType

value: `string`

The user's account type.

### email

value: `string`

The user's email address.

### firstName

value: `string`

The user's first name.

### id

value: `number`

The ID of the user's staff.

### lastName

value: `string`

The user's last name.

## Examples


  The POS API provides the ability to retrieve POS user, device, and location data, while also interacting with the cart and closing the app.

  > Tip:
  > It is recommended to use POS UI extensions for your development needs as they provide a faster, more robust, and easier to use solution for merchants using apps on POS. To learn more about the benefits and implementation details, refer to [POS UI Extensions](https://shopify.dev/docs/apps/pos/ui-extensions).
  


### Cart

```js
await shopify.pos.cart.fetch();

```

```js
await shopify.pos.cart.subscribe((cart) => {
  console.log(cart);
});

```

```js
await shopify.pos.cart.clear();

```

```js
await shopify.pos.cart.addLineItem(40202439393345, 10);

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.updateLineItem(lineItemUuid, 4);

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.removeLineItem(lineItemUuid);

```

```js
await shopify.pos.cart.addCustomSale({
  price: 10,
  quantity: 1,
  title: 'Custom sale',
  taxable: true,
});

```

```js
await shopify.pos.cart.setCustomer({
  email: 'foo@shopify.com',
  firstName: 'Jane',
  lastName: 'Doe',
  note: 'Customer note',
});

```

```js
await shopify.pos.cart.setCustomer({
  id: 5945486803009,
  note: 'Customer note',
});

```

```js
await shopify.pos.cart.removeCustomer();

```

```js
await shopify.pos.cart.addAddress({
  address1: '123 Cherry St.',
  address2: 'Apt. 5',
  city: 'Toronto',
  company: 'Shopify',
  firstName: 'Foo',
  lastName: 'Bar',
  phone: '(613) 555-5555',
  province: 'Ontario',
  country: 'Canada',
  zip: 'M5V0G4',
  name: 'Shopify',
  provinceCode: 'M5V0G4',
  countryCode: '1',
});

```

```js
await shopify.pos.cart.updateAddress(0, {
  address1: '555 Apple St.',
  address2: 'Unit. 10',
  city: 'Vancouver',
  company: 'Shopify',
  firstName: 'Jane',
  lastName: 'Doe',
  phone: '(403) 555-5555',
  province: 'British Columbia',
  country: 'Canada',
  zip: 'M5V0G4',
  name: 'Shopify',
  provinceCode: 'M5V0G4',
  countryCode: '2',
});

```

```js
await shopify.pos.cart.addAddress({
  address1: '123 Cherry St.',
  address2: 'Apt. 5',
  city: 'Toronto',
  company: 'Shopify',
  firstName: 'Foo',
  lastName: 'Bar',
  phone: '(613) 555-5555',
  province: 'Ontario',
  country: 'Canada',
  zip: 'M5V0G4',
  name: 'Shopify',
  provinceCode: 'M5V0G4',
  countryCode: '1',
});

```

```js
await shopify.pos.cart.updateAddress(0, {
  address1: '555 Apple St.',
  address2: 'Unit. 10',
  city: 'Vancouver',
  company: 'Shopify',
  firstName: 'Jane',
  lastName: 'Doe',
  phone: '(403) 555-5555',
  province: 'British Columbia',
  country: 'Canada',
  zip: 'M5V0G4',
  name: 'Shopify',
  provinceCode: 'M5V0G4',
  countryCode: '2',
});

```

```js
await shopify.pos.cart.applyCartDiscount('FixedAmount', 'Holiday sale', '10');

```

```js
await shopify.pos.cart.applyCartCodeDiscount('HOLIDAY SALE');

```

```js
await shopify.pos.cart.removeCartDiscount();

```

```js
await shopify.pos.cart.removeAllDiscounts(true);

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.setLineItemDiscount(
  lineItemUuid,
  'Percentage',
  'Holiday sale',
  '0.5',
);

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.removeLineItemDiscount(lineItemUuid);

```

```js
await shopify.pos.cart.addCartProperties({
  referral: 'Shopify',
  employee: '472',
});

```

```js
await shopify.pos.cart.removeCartProperties(['referral', 'employee']);

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.addLineItemProperties(lineItemUuid, {
  referral: 'Shopify',
  employee: '472',
});

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.removeLineItemProperties(lineItemUuid, [
  'referral',
  'employee',
]);

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.addLineItemProperties(lineItemUuid, {
  referral: 'Shopify',
  employee: '472',
});

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.removeLineItemProperties(lineItemUuid, [
  'referral',
  'employee',
]);

```


### Close

```js
await shopify.pos.close();

```


### Device

```js
await shopify.pos.device();

```


### Location

```js
await shopify.pos.location();

```

## Examples


  The POS API provides the ability to retrieve POS user, device, and location data, while also interacting with the cart and closing the app.

  > Tip:
  > It is recommended to use POS UI extensions for your development needs as they provide a faster, more robust, and easier to use solution for merchants using apps on POS. To learn more about the benefits and implementation details, refer to [POS UI Extensions](https://shopify.dev/docs/apps/pos/ui-extensions).
  


### Cart

```js
await shopify.pos.cart.fetch();

```

```js
await shopify.pos.cart.subscribe((cart) => {
  console.log(cart);
});

```

```js
await shopify.pos.cart.clear();

```

```js
await shopify.pos.cart.addLineItem(40202439393345, 10);

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.updateLineItem(lineItemUuid, 4);

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.removeLineItem(lineItemUuid);

```

```js
await shopify.pos.cart.addCustomSale({
  price: 10,
  quantity: 1,
  title: 'Custom sale',
  taxable: true,
});

```

```js
await shopify.pos.cart.setCustomer({
  email: 'foo@shopify.com',
  firstName: 'Jane',
  lastName: 'Doe',
  note: 'Customer note',
});

```

```js
await shopify.pos.cart.setCustomer({
  id: 5945486803009,
  note: 'Customer note',
});

```

```js
await shopify.pos.cart.removeCustomer();

```

```js
await shopify.pos.cart.addAddress({
  address1: '123 Cherry St.',
  address2: 'Apt. 5',
  city: 'Toronto',
  company: 'Shopify',
  firstName: 'Foo',
  lastName: 'Bar',
  phone: '(613) 555-5555',
  province: 'Ontario',
  country: 'Canada',
  zip: 'M5V0G4',
  name: 'Shopify',
  provinceCode: 'M5V0G4',
  countryCode: '1',
});

```

```js
await shopify.pos.cart.updateAddress(0, {
  address1: '555 Apple St.',
  address2: 'Unit. 10',
  city: 'Vancouver',
  company: 'Shopify',
  firstName: 'Jane',
  lastName: 'Doe',
  phone: '(403) 555-5555',
  province: 'British Columbia',
  country: 'Canada',
  zip: 'M5V0G4',
  name: 'Shopify',
  provinceCode: 'M5V0G4',
  countryCode: '2',
});

```

```js
await shopify.pos.cart.addAddress({
  address1: '123 Cherry St.',
  address2: 'Apt. 5',
  city: 'Toronto',
  company: 'Shopify',
  firstName: 'Foo',
  lastName: 'Bar',
  phone: '(613) 555-5555',
  province: 'Ontario',
  country: 'Canada',
  zip: 'M5V0G4',
  name: 'Shopify',
  provinceCode: 'M5V0G4',
  countryCode: '1',
});

```

```js
await shopify.pos.cart.updateAddress(0, {
  address1: '555 Apple St.',
  address2: 'Unit. 10',
  city: 'Vancouver',
  company: 'Shopify',
  firstName: 'Jane',
  lastName: 'Doe',
  phone: '(403) 555-5555',
  province: 'British Columbia',
  country: 'Canada',
  zip: 'M5V0G4',
  name: 'Shopify',
  provinceCode: 'M5V0G4',
  countryCode: '2',
});

```

```js
await shopify.pos.cart.applyCartDiscount('FixedAmount', 'Holiday sale', '10');

```

```js
await shopify.pos.cart.applyCartCodeDiscount('HOLIDAY SALE');

```

```js
await shopify.pos.cart.removeCartDiscount();

```

```js
await shopify.pos.cart.removeAllDiscounts(true);

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.setLineItemDiscount(
  lineItemUuid,
  'Percentage',
  'Holiday sale',
  '0.5',
);

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.removeLineItemDiscount(lineItemUuid);

```

```js
await shopify.pos.cart.addCartProperties({
  referral: 'Shopify',
  employee: '472',
});

```

```js
await shopify.pos.cart.removeCartProperties(['referral', 'employee']);

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.addLineItemProperties(lineItemUuid, {
  referral: 'Shopify',
  employee: '472',
});

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.removeLineItemProperties(lineItemUuid, [
  'referral',
  'employee',
]);

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.addLineItemProperties(lineItemUuid, {
  referral: 'Shopify',
  employee: '472',
});

```

```js
const cart = await shopify.pos.cart.fetch();
const lineItemUuid = cart.lineItems[0].uuid;
await shopify.pos.cart.removeLineItemProperties(lineItemUuid, [
  'referral',
  'employee',
]);

```


### Close

```js
await shopify.pos.close();

```


### Device

```js
await shopify.pos.device();

```


### Location

```js
await shopify.pos.location();

```

