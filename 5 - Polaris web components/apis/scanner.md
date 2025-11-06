# Scanner

The Scanner API allows you to use the mobile device's camera to scan barcodes.

```js
try {
  const payload = await shopify.scanner.capture();
  console.log('Scanner success', payload);
} catch (error) {
  console.log('Scanner error', error);
}

```

## Scanner

The `scanner` API provides a `capture` method that opens the mobile device's scanner to capture a barcode. It returns a Promise resolving to the scanned barcode data or an error.

### ScannerApi

### capture

value: `() => Promise<ScannerPayload>`

  - ScannerPayload: export interface ScannerPayload {
  data: string;
}

### ScannerPayload

### data

value: `string`


