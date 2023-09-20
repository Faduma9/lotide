// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
  const findKey = function(object, callback) {
    for (const key of Object.keys(object)) {
      // Check if the callback returns true for the current key's value
      if (callback(object[key])) {
        return key;
      }
    }
    // If no key is found, return undefined
    return undefined;
  };
  
  // Test cases
  const result = findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2);
  
  assertEqual(result, "noma"); // This should pass
  

  