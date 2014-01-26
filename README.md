# css-safe

Make string safe for CSS.

## Install

via npm:

```sh
$ npm install --save css-safe
```

Supports Node, AMD, browser global via UMD.

## Use

```js
var cssSafe = require('css-safe');

var safe = cssSafe('Red, and blue.');
// 'red__002c-and-blue__0021'
```

