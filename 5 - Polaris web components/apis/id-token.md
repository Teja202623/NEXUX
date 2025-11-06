# ID Token

The ID token API asynchronously retrieves an [OpenID Connect ID Token](https://openid.net/specs/openid-connect-core-1_0.html#IDToken%5C) from Shopify that can be used to ensure that requests came from a Shopify authenticated user. See the [ID Token documentation](https://shopify.dev/docs/apps/auth/oauth/session-tokens) from more information.

```js
await shopify.idToken();

```

## ID Token

The `idToken` API is available on the `shopify` global. It asynchronously retrieves an OpenID Connect ID Token from Shopify.

### IdTokenApi

Asynchronously returns an ID token.

#### Returns: Promise<string>
() => Promise<string>


