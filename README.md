# jstransformer-octet

[Octet](https://github.com/tunnckoCore/octet) support for [JSTransformers](http://github.com/jstransformers/jstransformer).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-octet/master.svg)](https://travis-ci.org/jstransformers/jstransformer-octet)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-octet/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-octet?branch=master)
[![NPM version](https://img.shields.io/npm/v/jstransformer-octet.svg)](https://www.npmjs.org/package/jstransformer-octet)

## Installation

    npm install jstransformer-octet

## API

```js
var octet = require('jstransformer')(require('jstransformer-foo'))

var locals = {user:{name:'John'}};
foo.render('<p><%this.user.name%></p>', {}, locals).body
//=> <p>John</p>
```

## License

MIT
