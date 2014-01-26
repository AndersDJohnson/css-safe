# css-safe

Make strings safe for CSS. Useful for data-driven CSS class names.

Transform to lowercase, replace spaces with dashes, and replace all other characters (but a-z) with their double-underscore-prefixed zero-padded-to-4-characters hexadecimal Unicode index.

For example, I use this on websites to add a CSS class to each page's `<body>` based on its title or URI, to allow targeting it uniquely.

## Install

via npm:

```sh
$ npm install --save css-safe
```

Supports Node, AMD, browser global via UMD.

## Use

```js
var cssSafe = require('css-safe');

var safe;

safe = cssSafe('To do');
// 'to-do'

safe = cssSafe('Red, and blue.');
// 'red__002c-and-blue__0021'
```

