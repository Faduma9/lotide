// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected){
  if (eqArrays(actual === expected)) {
        console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
      } else {
        console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
      }
};
   


eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false


assertArraysEqual([1, 2, 3], [1, 2, 3]); // Should pass
assertArraysEqual([1, 2, 3], [3, 2, 1]); // Should fail
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // Should pass
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // Should fail
assertArraysEqual([], []); // Should pass for empty arrays
