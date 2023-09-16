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
  
  const assertArraysEqual = function(arr1, arr2) {
    if (eqArrays(arr1, arr2)) {
      console.log(`✅✅✅ Assertion Passed: Arrays are equal: [${arr1}] === [${arr2}]`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: Arrays are not equal: [${arr1}] !== [${arr2}]`);
    }
  }; 

  const flatten = function(array) {
    const flattenedArray = [];
  
    for (const element of array) {
      if (Array.isArray(element)) {
        // If the element is an array, join them with the rest of the element
        flattenedArray.push(...element);
      } else {
        // If it's not an array, push it as is
        flattenedArray.push(element);
      }
    }
  
    return flattenedArray;
  };
  

// Test case for flatten
const arr1 = [1, 2, [3, 4], 5, [6]];
const flattenedArr1 = flatten(arr1);
assertArraysEqual(flattenedArr1, [1, 2, 3, 4, 5, 6]);


