// assertEqual.js

const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
  module.exports = assertEqual;
  
// test/assertEqualTest.js

const assertEqualFunction = require('../assertEqual');

// TEST CODE
assertEqualFunction("Lighthouse Labs", "Lighthouse Labs"); // Should pass
assertEqualFunction("Lighthouse Labs", "Bootcamp"); // Should fail
assertEqualFunction(1, 1); // Should pass
assertEqualFunction(1, 2); // Should fail
