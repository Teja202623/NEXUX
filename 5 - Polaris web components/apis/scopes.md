# Scopes

The Scopes API provides the ability to dynamically manage your access scopes within an embedded context.

  > Tip:
  > To learn more about declaring and requesting access scopes, as well as required vs. optional scopes, refer to [manage access scopes](https://shopify.dev/docs/apps/build/authentication-authorization/app-installation/manage-access-scopes).  

## Scopes

Provides utilities to query, request, and revoke access scopes for the app using the Admin API.

### Scopes

The Scopes API enables embedded apps and extensions to request merchant consent for access scopes.

### query

value: `() => Promise<ScopesDetail>`

  - Scopes: export interface Scopes {
  /**
   * Queries Shopify for the scopes for this app on this shop
   */
  query: () => Promise<ScopesDetail>;

  /**
   * Requests the merchant to grant the provided scopes for this app on this shop
   *
   * This will open a [permission grant modal](https://shopify.dev/docs/apps/build/authentication-authorization/app-installation/manage-access-scopes#request-access-scopes-using-the-app-bridge-api-for-embedded-apps) for the merchant to accept or decline the scopes.
   */
  request: (scopes: Scope[]) => Promise<ScopesRequestResponse>;

  /**
   * Revokes the provided scopes from this app on this shop
   */
  revoke: (scopes: Scope[]) => Promise<ScopesRevokeResponse>;
}
  - ScopesDetail: export interface ScopesDetail {
  /**
   * The scopes that have been granted on the shop for this app
   */
  granted: Scope[];
  /**
   * The required scopes that the app has declared in its configuration
   */
  required: Scope[];
  /**
   * The optional scopes that the app has declared in its configuration
   */
  optional: Scope[];
}
Queries Shopify for the scopes for this app on this shop

### request

value: `(scopes: string[]) => Promise<ScopesRequestResponse>`

  - Scopes: export interface Scopes {
  /**
   * Queries Shopify for the scopes for this app on this shop
   */
  query: () => Promise<ScopesDetail>;

  /**
   * Requests the merchant to grant the provided scopes for this app on this shop
   *
   * This will open a [permission grant modal](https://shopify.dev/docs/apps/build/authentication-authorization/app-installation/manage-access-scopes#request-access-scopes-using-the-app-bridge-api-for-embedded-apps) for the merchant to accept or decline the scopes.
   */
  request: (scopes: Scope[]) => Promise<ScopesRequestResponse>;

  /**
   * Revokes the provided scopes from this app on this shop
   */
  revoke: (scopes: Scope[]) => Promise<ScopesRevokeResponse>;
}
  - ScopesRequestResponse: export interface ScopesRequestResponse {
  result: UserResult;
  detail: ScopesDetail;
}
Requests the merchant to grant the provided scopes for this app on this shop

This will open a [permission grant modal](https://shopify.dev/docs/apps/build/authentication-authorization/app-installation/manage-access-scopes#request-access-scopes-using-the-app-bridge-api-for-embedded-apps) for the merchant to accept or decline the scopes.

### revoke

value: `(scopes: string[]) => Promise<ScopesRevokeResponse>`

  - Scopes: export interface Scopes {
  /**
   * Queries Shopify for the scopes for this app on this shop
   */
  query: () => Promise<ScopesDetail>;

  /**
   * Requests the merchant to grant the provided scopes for this app on this shop
   *
   * This will open a [permission grant modal](https://shopify.dev/docs/apps/build/authentication-authorization/app-installation/manage-access-scopes#request-access-scopes-using-the-app-bridge-api-for-embedded-apps) for the merchant to accept or decline the scopes.
   */
  request: (scopes: Scope[]) => Promise<ScopesRequestResponse>;

  /**
   * Revokes the provided scopes from this app on this shop
   */
  revoke: (scopes: Scope[]) => Promise<ScopesRevokeResponse>;
}
  - ScopesRevokeResponse: export interface ScopesRevokeResponse {
  detail: ScopesDetail;
}
Revokes the provided scopes from this app on this shop

### ScopesDetail

### granted

value: `string[]`

The scopes that have been granted on the shop for this app

### optional

value: `string[]`

The optional scopes that the app has declared in its configuration

### required

value: `string[]`

The required scopes that the app has declared in its configuration

### ScopesRequestResponse

### detail

value: `ScopesDetail`

  - Scopes: export interface Scopes {
  /**
   * Queries Shopify for the scopes for this app on this shop
   */
  query: () => Promise<ScopesDetail>;

  /**
   * Requests the merchant to grant the provided scopes for this app on this shop
   *
   * This will open a [permission grant modal](https://shopify.dev/docs/apps/build/authentication-authorization/app-installation/manage-access-scopes#request-access-scopes-using-the-app-bridge-api-for-embedded-apps) for the merchant to accept or decline the scopes.
   */
  request: (scopes: Scope[]) => Promise<ScopesRequestResponse>;

  /**
   * Revokes the provided scopes from this app on this shop
   */
  revoke: (scopes: Scope[]) => Promise<ScopesRevokeResponse>;
}
  - ScopesDetail: export interface ScopesDetail {
  /**
   * The scopes that have been granted on the shop for this app
   */
  granted: Scope[];
  /**
   * The required scopes that the app has declared in its configuration
   */
  required: Scope[];
  /**
   * The optional scopes that the app has declared in its configuration
   */
  optional: Scope[];
}

### result

value: `UserResult`

  - UserResult: 'granted-all' | 'declined-all'

### ScopesRevokeResponse

### detail

value: `ScopesDetail`

  - Scopes: export interface Scopes {
  /**
   * Queries Shopify for the scopes for this app on this shop
   */
  query: () => Promise<ScopesDetail>;

  /**
   * Requests the merchant to grant the provided scopes for this app on this shop
   *
   * This will open a [permission grant modal](https://shopify.dev/docs/apps/build/authentication-authorization/app-installation/manage-access-scopes#request-access-scopes-using-the-app-bridge-api-for-embedded-apps) for the merchant to accept or decline the scopes.
   */
  request: (scopes: Scope[]) => Promise<ScopesRequestResponse>;

  /**
   * Revokes the provided scopes from this app on this shop
   */
  revoke: (scopes: Scope[]) => Promise<ScopesRevokeResponse>;
}
  - ScopesDetail: export interface ScopesDetail {
  /**
   * The scopes that have been granted on the shop for this app
   */
  granted: Scope[];
  /**
   * The required scopes that the app has declared in its configuration
   */
  required: Scope[];
  /**
   * The optional scopes that the app has declared in its configuration
   */
  optional: Scope[];
}

## Related

- [Managing Access Scopes](https://shopify.dev/docs/apps/build/authentication-authorization/app-installation/manage-access-scopes)
- [Remix Scopes API](https://shopify.dev/docs/api/shopify-app-remix/v3/apis/scopes)

## Examples

The Scopes API provides the ability to dynamically manage your access scopes within an embedded context.

  > Tip:
  > To learn more about declaring and requesting access scopes, as well as required vs. optional scopes, refer to [manage access scopes](https://shopify.dev/docs/apps/build/authentication-authorization/app-installation/manage-access-scopes).  


### Query

```js
const { granted } = await shopify.scopes.query();

```


### Request

```js
const response = await shopify.scopes.request(['read_products', 'write_discounts']);

if (response.result === 'granted-all') {
  // merchant has been granted access — continue
  ...
}
else if (response.result === 'declined-all') {
  // merchant has declined access — handle accordingly
  ...
}

```


### Revoke

```js
await shopify.scopes.revoke(['read_products']);

```

## Examples

The Scopes API provides the ability to dynamically manage your access scopes within an embedded context.

  > Tip:
  > To learn more about declaring and requesting access scopes, as well as required vs. optional scopes, refer to [manage access scopes](https://shopify.dev/docs/apps/build/authentication-authorization/app-installation/manage-access-scopes).  


### Query

```js
const { granted } = await shopify.scopes.query();

```


### Request

```js
const response = await shopify.scopes.request(['read_products', 'write_discounts']);

if (response.result === 'granted-all') {
  // merchant has been granted access — continue
  ...
}
else if (response.result === 'declined-all') {
  // merchant has declined access — handle accordingly
  ...
}

```


### Revoke

```js
await shopify.scopes.revoke(['read_products']);

```

