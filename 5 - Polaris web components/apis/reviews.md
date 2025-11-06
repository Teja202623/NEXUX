# Reviews


  The Reviews API allows you to request an app review modal overlaid on your embedded app in the Shopify admin. You control when to request a modal, but it will only be displayed to the merchant if [certain conditions](#rate-limits-restrictions) are met.
  

```js
try {
  const result = await shopify.reviews.request();
  if (!result.success) {
    console.log(`Review modal not displayed. Reason: ${result.code}: ${result.message}`);
  }
  // if result.success *is* true, then review modal is displayed
} catch (error) {
  console.error('Error requesting review:', error);
}

```

## Reviews

The Reviews API provides a `request()` method that allows you to request an app review modal.

### ReviewsApi

### request

value: `() => Promise<ReviewRequestResponse>`

  - ReviewRequestResponse: ReviewRequestSuccessResponse | ReviewRequestDeclinedResponse

### ReviewRequestSuccessResponse

### code

value: `'success'`


### message

value: `'Review modal shown successfully'`


### success

value: `true`


### ReviewRequestDeclinedResponse

### code

value: `ReviewRequestDeclinedCode`

  - ReviewRequestDeclinedCode: 'mobile-app' | 'already-reviewed' | 'annual-limit-reached' | 'cooldown-period' | 'merchant-ineligible' | 'recently-installed' | 'already-open' | 'open-in-progress' | 'cancelled'

### message

value: `string`


### success

value: `false`


