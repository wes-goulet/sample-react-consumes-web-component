# sample-react-consumes-web-component

A sample React app, started with [create-react-app](https://github.com/facebook/create-react-app), that consumes [a web component](https://github.com/wes566/wc-menu-button).

The [master](https://github.com/wes566/sample-react-consumes-web-component/tree/master) branch uses NPM and `defineCustomElements` to install the web component, and the [script-tag](https://github.com/wes566/sample-react-consumes-web-component/tree/script-tag) branch uses a `<script>` tag to install the web component.

## [Demo](https://react-web-component.netlify.com)

## Steps to consume the web component in react app

1. NPM install the web component

```bash
npm install wc-menu-button --save
```

2. Add a call to `defineCustomElements` in the [index.js](src/index.js) file.

```js
import { defineCustomElements } from "test-components/dist/loader";
.
.
.
defineCustomElements(window);
```

3. Add the element to your TSX

```js
render() {
  return (
    <div>
      <wc-menu-button></wc-menu-button>
    </div>
  );
}
```
