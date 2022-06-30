// ES11 - 1: String - matchAll
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('The function `string.matchAll()`', () => {

  it('searches for a string in another string', () => {
    const searchResult = 'Find one word!'.matchAll('word');
    const found = Array.from(searchResult);
    assert.equal(found[0], 'word');
  });

  describe('can also search using a regexp', () => {
    it('also searches using a regexp', () => {
      const regexp = /v..i/g;
      const found = Array.from('veni vidi vici'.matchAll(regexp));
      assert.deepEqual(found.flat(), ['veni', 'vidi', 'vici']);
    });
    it('the regexp MUST use the global flag /g', () => {
      const regexp = /b/g;
      const results = Array.from('baba'.matchAll(regexp));
      assert.deepEqual(results.flat(), ['b', 'b']);
    });
    it('finds any number of occurrences', () => {
      const stringToSearchIn = 'Find a word, another word and even this world!';
      const found = Array.from(stringToSearchIn.matchAll(/worl?d/g));
      assert.equal(found.length, 3);
    });
    it('finds all matches, of all capture groups', () => {
      const fourtyTwo = 'fourty two';
      const results = Array.from(fourtyTwo.matchAll(/f.*(t(.*))/g));
      assert.deepEqual(results.flat(), ['fourty two', 'two', 'wo']);
    });
  });

  describe('returns an iterator', () => {
    it('the iterator has a key `Symbol.iterator`', () => {
      const iterator = ''.matchAll('');
      assert.deepEqual(Symbol.iterator in iterator, true);
    });
    it('the result can be looped over using for-of', () => {
      const iterator = 'or more door'.matchAll(/or/g);
      const results = [];
      for (const r of iterator) {
        results.push(r);
      }
      assert.deepEqual(results.length, 3);
    });
  });

});
