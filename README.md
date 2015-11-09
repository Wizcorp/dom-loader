# dom-loader

HTML DOM element loader for Webpack

## What does it do?

It changes your HTML require calls to return a container element rather
than a string. It defaults to `<div>` as a container, but you can change
this by configuring `tag=section` for example.

## Installation

```sh
npm install --save dom-loader
```

Make sure you also have the [html-loader](https://www.npmjs.com/package/html-loader)
installed. The dom-loader depends on its output.

## Example

```js
module.exports = {
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.css$/, loader: 'css' },
            { test: /\.html?$/, loader: 'dom?tag=section!html' }
        ]
    }
};
```


