# Web Vitals

The Web Vitals API allows you to access performance metrics for your app directly through App Bridge.

```js
// Define the callback function
const callback = async (metrics) => {
    const monitorUrl = 'https://yourserver.com/web-vitals-metrics';
    const data = JSON.stringify(metrics);

    navigator.sendBeacon(monitorUrl, data);
};

// Register the callback
shopify.webVitals.onReport(callback);

```

## Web Vitals

The Web Vitals API provides an onReport method that registers a callback function to receive Web Vitals data. It allows you to monitor and analyze your app's performance in the Shopify admin.

### WebVitalsApi

### onReport

value: `(callback: WebVitalsCallback) => Promise<void>`

  - WebVitalsCallback: (
  payload: WebVitalsReport,
) => void | Promise<void>

### WebVitalsCallback

#### Returns: void | Promise<void>

#### Params:

- payload: WebVitalsReport
(
  payload: WebVitalsReport,
) => void | Promise<void>


### WebVitalsReport

### metrics

value: `WebVitalsMetric[]`

  - WebVitalsMetric: export interface WebVitalsMetric {
  id: string;
  name: string;
  value: number;
}

### WebVitalsMetric

WebVitals API

### id

value: `string`


### name

value: `string`


### value

value: `number`


## Related

- [App Performance Guidelines](https://shopify.dev/docs/apps/build/performance/admin-installation-oauth)
- [Web Vitals Debug](https://shopify.dev/docs/api/app-bridge-library/apis/config#config-propertydetail-debug)

