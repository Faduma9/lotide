//test/eqArrays.js
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// Test cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // Should pass
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // Should fail
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // Should pass
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // Should fail
assertEqual(eqArrays([], []), true); // Should pass
