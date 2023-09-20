//test/tailTest.js
const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure the first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure the second element is "Labs"

// Test Case 2: Check an array with only one element
const singleElementArray = ["OnlyOne"];
const singleElementResult = tail(singleElementArray);
assertEqual(singleElementResult.length, 0); // ensure we get an empty array

// Test Case 3: Check an empty array
const emptyArray = [];
const emptyArrayResult = tail(emptyArray);
assertEqual(emptyArrayResult.length, 0); // ensure we get an empty array

// Test Case 4: Check the original array (should not be modified)
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3); // original array should still have 3 elements!
