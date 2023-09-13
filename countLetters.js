// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
  
//use for off loop with strings
//for (let i = 0; i < names.length; i++) {
//console.log(names[i]); }
  

const countLetters = function (word) {
    // Create an empty object called 'results' to store the letter counts.
  const results = {}
    // Loop through each character (letter) in the input 'word'.
  for (const letter of word) {
  // Check if the letter is already a property in the 'results' object.
    if (results[letter]) {
 // If it exists, increment the count of that letter by 1.

      results[letter] += 1;
    } else {
  // If it doesn't exist, initialize its count to 1.

   results[letter] = 1;
    }
  }
  return results;
};


console.log(countLetters('lighthouse in the house'));

