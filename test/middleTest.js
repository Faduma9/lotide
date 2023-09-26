const assert = require('chai').assert;
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

describe('middle', () => {
  it('should return an empty array for an input array with one element', () => {
    const inputArray = [1];
    const expected = [];
    assert.deepEqual(middle(inputArray), expected);
  });

  it('should return an empty array for an input array with two elements', () => {
    const inputArray = [1, 2];
    const expected = [];
    assert.deepEqual(middle(inputArray), expected);
  });

  it('should return [2] for an input array [1, 2, 3]', () => {
    const inputArray = [1, 2, 3];
    const expected = [2];
    assert.deepEqual(middle(inputArray), expected);
  });

  it('should return [2, 3] for an input array [1, 2, 3, 4]', () => {
    const inputArray = [1, 2, 3, 4];
    const expected = [2, 3];
    assert.deepEqual(middle(inputArray), expected);
  });

  it('should return [3] for an input array [1, 2, 3, 4, 5]', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const expected = [3];
    assert.deepEqual(middle(inputArray), expected);
  });

  it('should return [3, 4] for an input array [1, 2, 3, 4, 5, 6]', () => {
    const inputArray = [1, 2, 3, 4, 5, 6];
    const expected = [3, 4];
    assert.deepEqual(middle(inputArray), expected);
  });
});
