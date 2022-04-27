const assert = require('assert');
const feedCat = require(process.argv[2]);

assert.strictEqual(feedCat('foo'), 'yum');
assert.throws(function () {
  feedCat('chocolate');
});
