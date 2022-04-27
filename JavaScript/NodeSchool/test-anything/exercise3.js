const fancify = require(process.argv[2]);
const tape = require('tape');

tape('fancify function', function (t) {
  t.strictEqual(fancify('Hello'), '~*~Hello~*~');
  t.strictEqual(fancify('Hello', true), '~*~HELLO~*~');
  t.strictEqual(fancify('Hello', false, '!'), '~!~Hello~!~');
  t.end();
});
