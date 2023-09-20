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
  
  // Compare arrays and log the result
  const assertArraysEqual = function(arr1, arr2) {
    if (eqArrays(arr1, arr2)) {
      console.log(`✅✅✅ Assertion Passed: Arrays are equal: [${arr1}] === [${arr2}]`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: Arrays are not equal: [${arr1}] !== [${arr2}]`);
    }
  };
  


  const takeUntil = function(array, callback) {
    const results = [];
    for (let item of array) {
      if (!callback(item)) {
        results.push(item);
      } else {
        break; // Stop looping once the callback returns a truthy value
      }
    }
    return results;
  };
  

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


