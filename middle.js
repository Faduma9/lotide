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
  const middle = function(array) {
    const middleArray = [];
    const length = array.length;
    if (length <= 2) {
      return middleArray;
    }
    if (length % 2 === 0) {
      // Even number of elements, return the two middle elements
      middleArray.push(array[length / 2 - 1], array[length / 2]);
    } else {
      // Odd number of elements, return the single middle element
      middleArray.push(array[Math.floor(length / 2)]);
    }
    return middleArray;
  };
  

// TEST CODE
const testArray1 = [1];
const testArray2 = [1, 2];
const testArray3 = [1, 2, 3];
const testArray4 = [1, 2, 3, 4];
const testArray5 = [1, 2, 3, 4, 5];
const testArray6 = [1, 2, 3, 4, 5, 6];

assertArraysEqual(middle(testArray1), []);           //output: []
assertArraysEqual(middle(testArray2), []);           //output: []
assertArraysEqual(middle(testArray3), [2]);          //output: [2]
assertArraysEqual(middle(testArray4), [2, 3]);       //output: [2, 3]
assertArraysEqual(middle(testArray5), [3]);          //output: [3]
assertArraysEqual(middle(testArray6), [3, 4]);       //output: [3, 4]