const assert = require('chai').assert;
const tail = require('../tail');
const assertArraysEqual = require('../assertArraysEqual');

describe('tail', () => {
  it('should return an empty array for an array with only one element', () => {
    const result = tail(["OnlyOne"]);
    assert.deepEqual(result, []);
  });

  it('should return an empty array for an empty array', () => {
    const result = tail([]);
    assert.deepEqual(result, []);
  });

  it('should return the tail of an array with multiple elements', () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });

});



