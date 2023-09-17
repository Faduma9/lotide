<<<<<<< HEAD
// FUNCTION IMPLEMENTATION
=======
/ FUNCTION IMPLEMENTATION
>>>>>>> 2bf415dbbf3a582a15d93e7d5a9cf2a10c99c963
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Compare two arrays for equality
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  // Loop through the elements
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

<<<<<<< HEAD

=======
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: Arrays are equal: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: Arrays are not equal: [${arr1}] !== [${arr2}]`);
  }
}; 
>>>>>>> 2bf415dbbf3a582a15d93e7d5a9cf2a10c99c963

// Test cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // Should pass
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // Should fail
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // Should pass
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // Should fail
assertEqual(eqArrays([], []), true); // Should pass
<<<<<<< HEAD
=======


>>>>>>> 2bf415dbbf3a582a15d93e7d5a9cf2a10c99c963
