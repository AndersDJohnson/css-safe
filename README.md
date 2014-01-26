# css-safe

Make strings safe for CSS.

Transform to lowercase, replace spaces with dashes, and replace all other characters but a-z with their hexadecimal Unicode index padded to 4 characters.

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

