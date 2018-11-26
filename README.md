# sample-react-consumes-web-component

A sample React app, started with [create-react-app](https://github.com/facebook/create-react-app), that consumes [a web component](https://github.com/wes566/wc-menu-button).

The [master](https://github.com/wes566/sample-react-consumes-web-component/tree/master) branch uses NPM and `defineCustomElements` to install the web component, and the [script-tag](https://github.com/wes566/sample-react-consumes-web-component/tree/script-tag) branch uses a `<script>` tag to install the web component.

## [Demo](https://react-web-component.netlify.com)

## Steps to consume the web component in react app

1. Add a script tag in the [index.html](public/index.html) file.

```html
<script src="https://unpkg.com/wc-menu-button/dist/wc-menu-button.js"></script>
```

2. Add the element to your TSX

```js
render() {
  return (
    <div>
      <wc-menu-button></wc-menu-button>
    </div>
  );
}
```
