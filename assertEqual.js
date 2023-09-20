// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
// Comparing identical strings
assertEqual("Lighthouse Labs", "Lighthouse Labs"); // Should pass
// Comparing non-identical strings
assertEqual("Lighthouse Labs", "Bootcamp"); // Should fail
// Comparing identical numbers
assertEqual(1, 1); // Should pass
// Comparing non-identical numbers
assertEqual(1, 2); // Should fail
