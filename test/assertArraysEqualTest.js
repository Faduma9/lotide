/*const assertArraysEqual = require('../assertArraysEqual');
/// Test cases
assertArraysEqual([1, 2, 3], [1, 2, 3]); // Should pass
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);// Should pass
assertArraysEqual([], []); // Should pass*/

const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe('assertArraysEqual', () => {
  it('should return true for arrays with the same elements', () => {
    assert.isTrue(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  });

  it('should return true for arrays with the same elements (strings)', () => {
    assert.isTrue(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]));
  });

  it('should return true for empty arrays', () => {
    assert.isTrue(assertArraysEqual([], []));
  });
});

