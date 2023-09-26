const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe('eqArrays', () => {
  it('should return true for arrays with the same elements', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    assert.isTrue(eqArrays(arr1, arr2));
  });

  it('should return false for arrays with different elements', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [3, 2, 1];
    assert.isFalse(eqArrays(arr1, arr2));
  });

  it('should return true for arrays with the same elements (strings)', () => {
    const arr1 = ["1", "2", "3"];
    const arr2 = ["1", "2", "3"];
    assert.isTrue(eqArrays(arr1, arr2));
  });

  it('should return false for arrays with different elements (mixed types)', () => {
    const arr1 = ["1", "2", "3"];
    const arr2 = ["1", "2", 3];
    assert.isFalse(eqArrays(arr1, arr2));
  });

  it('should return true for empty arrays', () => {
    const arr1 = [];
    const arr2 = [];
    assert.isTrue(eqArrays(arr1, arr2));
  });
});

