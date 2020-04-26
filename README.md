# jstransformer-octet

[Octet](https://github.com/tunnckoCore/octet) support for [JSTransformers](http://github.com/jstransformers/jstransformer).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-octet/master.svg)](https://travis-ci.org/jstransformers/jstransformer-octet)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-octet/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-octet)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-octet/master.svg)](http://david-dm.org/jstransformers/jstransformer-octet)
[![NPM version](https://img.shields.io/npm/v/jstransformer-octet.svg)](https://www.npmjs.org/package/jstransformer-octet)

## Installation

    npm install jstransformer-octet

## API

```js
var octet = require('jstransformer')(require('jstransformer-octet'))

var locals = {
  user: {
    name: 'John'
  }
}

octet.render('<p><%this.user.name%></p>', {}, locals).body //=> <p>John</p>
```

## License

MIT
