const assertArraysEqual = require('../assertArraysEqual');
/// Test cases
assertArraysEqual([1, 2, 3], [1, 2, 3]); // Should pass
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);// Should pass
assertArraysEqual([], []); // Should pass