
// test/headTest.js

const assertEqualFunction = require('../assertEqual');
const head = require('../head'); 

// Test array with multiple elements
assertEqualFunction(head([5, 6, 7]), 5);
assertEqualFunction(head(["Hello", "Lighthouse", "Labs"]), "Hello");

assertEqualFunction(head([]), undefined);
