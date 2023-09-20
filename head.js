const assertEqual = require('./assertEqual');
// Define the head function
const head = function(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  return arr[0];

};
module.exports = head;
  
// Test array with multiple elements
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

assertEqual(head([]), undefined)