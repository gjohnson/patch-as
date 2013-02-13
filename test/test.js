
var assert = require('assert');
var as = require('..');

// eek

var obj = {
  'n': 'john doe',
  'e': 'john+doe@email.com'
};

// map it

var patch = as({
  'n': 'name',
  'e': 'email'
});

// patch it

patch(obj);

// get it

assert.equal(obj.n, 'john doe');
assert.equal(obj.n, obj.name);

// set it (both ways)

obj.n = 'jane doe';
assert.equal(obj.n, 'jane doe');
assert.equal(obj.n, obj.name);

obj.name = 'buzz doe';
assert.equal(obj.name, 'buzz doe');
assert.equal(obj.name, obj.n);

// shouldn't enumerate

assert.equal(Object.keys(obj).length, 2);