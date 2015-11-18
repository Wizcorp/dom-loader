# dom-loader

HTML DOM element loader for Webpack

## What does it do?

It changes your HTML require calls to return a container element rather
than a string. It defaults to `<div>` as a container, but you can change
this by configuring `tag=section` or `tag=style` for example.

## Installation

```sh
npm install --save dom-loader
```

Make sure you also have the [html-loader](https://www.npmjs.com/package/html-loader)
or [raw-loader](https://www.npmjs.com/package/raw-loader) or similar installed.
The dom-loader depends on the previous loader exporting a string.

## Options

* tag (string): the tag name the container element should have (default: div)
* asText (bool): whether or not to treat the content as text or as HTML. The default
  is `true` for `title`, `style` and `script` tags. It is `false` otherwise.
* attr.NAME (string): an attribute to set on the element (eg: `attr.type=text/css`).

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


