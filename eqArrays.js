// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected){
  if(actual === expected) {
        console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
      } else {
        console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
      }
};
   


eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // Should pass
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // Should pass
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // Should pass
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // Should pass
assertEqual(eqArrays([], []), true); // Should pass for empty arrays

