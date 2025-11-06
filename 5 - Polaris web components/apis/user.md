# User

The User API lets you asynchronously retrieve information about the currently logged-in user.

The API returns a `Promise`, which contains user information, and the payload varies based on whether the user is logged into the Shopify admin or Shopify POS.

```js
await shopify.user();

```

## Admin User

The `user` API, which is available on the `shopify` global, asynchronously retrieves information about the user that's logged into the Shopify admin.

### AdminUserAPI

Asynchronously returns information about the current user.

#### Returns: Promise<AdminUser>
() => Promise<AdminUser>


### AdminUser

### accountAccess

value: `string`

The account access level of the logged-in user

## POS User

The `user` API, which is available on the `shopify` global, asynchronously retrieves information about the current user logged into Shopify POS.

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

