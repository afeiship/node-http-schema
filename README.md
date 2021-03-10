# node-http-schema
> Http schema for nodejs.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/node-http-schema
```

## usage
```js
import httpSchema from '@jswork/node-http-schema';

const apis = httpSchema({
  host: 'https://api.github.com',
  request: ['', 'json'],
  items: [
    {
      items: {
        profile: ['get', '/users/afeiship']
      }
    }
  ]
});

apis.profile().then((res) => {
  expect(res.login).toBe('afeiship');
  done();
});
```

## license
Code released under [the MIT license](./LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/node-http-schema
[version-url]: https://npmjs.org/package/@jswork/node-http-schema

[license-image]: https://img.shields.io/npm/l/@jswork/node-http-schema
[license-url]: https://github.com/afeiship/node-http-schema/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/node-http-schema
[size-url]: https://github.com/afeiship/node-http-schema/blob/master/dist/node-http-schema.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/node-http-schema
[download-url]: https://www.npmjs.com/package/@jswork/node-http-schema
