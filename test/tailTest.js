const assert = require('chai').assert;
const tail = require('../tail');

describe('tail', () => {
  it('should return ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    const inputArray = ["Hello", "Lighthouse", "Labs"];
    const expected = ["Lighthouse", "Labs"];
    assert.deepEqual(tail(inputArray), expected);
  });

  it('should return an empty array for an input array with only one element', () => {
    const singleElementArray = ["OnlyOne"];
    const expected = [];
    assert.deepEqual(tail(singleElementArray), expected);
  });

  it('should return an empty array for an empty input array', () => {
    const emptyArray = [];
    const expected = [];
    assert.deepEqual(tail(emptyArray), expected);
  });

  it('should not modify the original array ["Yo Yo", "Lighthouse", "Labs"]', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    const originalLength = words.length;
    tail(words);
    assert.equal(words.length, originalLength);
  });
});

