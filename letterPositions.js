// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};



// Function to compare if two arrays are equal
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};
  
// Function to calculate letter positions
const letterPositions = function(sentence) {
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
  
    // Check if the letter already exists in the results object
    if (results[letter]) {
      results[letter].push(i); // If it exists, push the current index to its array
    } else {
      results[letter] = [i]; // If it doesn't exist, create a new array with the current index
    }
  }
  
  return results;
};
  
console.log(letterPositions("hello"));
  