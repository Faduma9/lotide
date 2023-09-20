// FUNCTION IMPLEMENTATION

// A function to check if two values are equal and print a message accordingly
const aassertObjectsEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };

  const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect; 
  
    // Check if the objects are equal using eqObjects
    if (eqObjects(actual, expected)) {
      console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
  };
  
  //inspect function can be used to format and display objects in a more readable way


  