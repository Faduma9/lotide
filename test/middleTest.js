const assert = require('chai').assert;
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
describe('middle', () => {
  it('should return an empty array for an array with less than 3 elements', () => {
    const result = middle([1]);
    assert.deepEqual(result, []);
  });

  it('should return a single middle element for an array with odd length', () => {
    const result = middle([1, 2, 3]);
    assert.deepEqual(result, [2]);
  });

  it('should return two middle elements for an array with even length', () => {
    const result = middle([1, 2, 3, 4]);
    assert.deepEqual(result, [2, 3]);
  });

});
