/ FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
//cmpare two arrays equality
//check if array have different length, if they ahve diff length return false
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  //loop through the element
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

   

assertEqual(eqArrays([1, 2, 3], [1, 2, 3])); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1])) // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3])); // Should pass
assertEqual(eqArrays([1, 2, 3], [3, 2, 1])); // Should fail
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // Should pass
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3])); // Should fail
assertEqual(eqArrays([], [])); // Should pass for empty arrays

