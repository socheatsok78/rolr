# rolr

Rolr is a JavaScript library for managing user roles which restricts what resources a given user is allowed to access

[![npm-version](https://img.shields.io/npm/v/rolr/latest)][npm-url]
[![npm-download](https://img.shields.io/npm/dm/rolr)][npm-url]

## Usage

```js
import Rolr from 'rolr'

const roles = new Rolr(['admin', 'staff'])

roles.has('admin')  // true
roles.has('editor') // false
```

## License

This is free and unencumbered software released into the public domain. See [LICENSE](LICENSE)

<!-- variables -->
[npm-url]: https://www.npmjs.com/package/rolr
