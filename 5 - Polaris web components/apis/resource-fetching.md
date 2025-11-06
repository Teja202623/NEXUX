# Resource Fetching

The `fetch` API allows you to send a fetch request that is authenticated with an [OpenID Connect ID Token](https://shopify.dev/docs/api/app-bridge-library/apis/id-token) from Shopify in the `Authorization` header. This is authenticated for your application domain and subdomains. See the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) documentation for more details.

 App Bridge injects automatic authorization into the global `fetch` function. While this is transparent and should not interfere with existing fetch code, this injection can be disabled using the [`disabledFeatures`](https://shopify.dev/docs/api/app-bridge-library/apis/config#setting-config-values-disabledfeatures) configuration option. You will need to enable [Direct API access](https://shopify.dev/docs/apps/build/cli-for-apps/app-configuration#admin) for your app to use this feature.

```js
fetch('/api/endpoint');

```

## Examples

The `fetch` API allows you to send a fetch request that is authenticated with an [OpenID Connect ID Token](https://shopify.dev/docs/api/app-bridge-library/apis/id-token) from Shopify in the `Authorization` header. This is authenticated for your application domain and subdomains. See the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) documentation for more details.

 App Bridge injects automatic authorization into the global `fetch` function. While this is transparent and should not interfere with existing fetch code, this injection can be disabled using the [`disabledFeatures`](https://shopify.dev/docs/api/app-bridge-library/apis/config#setting-config-values-disabledfeatures) configuration option. You will need to enable [Direct API access](https://shopify.dev/docs/apps/build/cli-for-apps/app-configuration#admin) for your app to use this feature.


Fetch with custom headers

```js
fetch('/api/endpoint', {
  headers: {'accept-language': 'fr'},
});

```


Fetch directly from the Admin API using Direct API access

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

