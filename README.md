# rolr

Rolr is a JavaScript library for managing user roles which restricts what resources a given user is allowed to access

## Usage

```js
import Rolr from 'rolr'

const roles = new Rolr(['admin', 'staff'])

roles.is('admin')  // true
roles.is('editor') // false
```

## License

This is free and unencumbered software released into the public domain. See [LICENSE](LICENSE)
