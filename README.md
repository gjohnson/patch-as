
# patch-as

Patch ugly property names with a proxy to a better one.

## usage

```js

var assert = require('assert');
var as = require('..');

// create patch

var patch = as({
  'n': 'name',
  'e': 'email'
});

// apply it

patch(obj);

// gets

assert.equal(obj.n, 'john doe');
assert.equal(obj.n, obj.name);

// sets

obj.n = 'jane doe';
assert.equal(obj.n, 'jane doe');
assert.equal(obj.n, obj.name);

// sets (again)

obj.name = 'buzz doe';
assert.equal(obj.name, 'buzz doe');
assert.equal(obj.name, obj.n);

```

## license

MIT