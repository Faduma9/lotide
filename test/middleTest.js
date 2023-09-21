const assertEqual = require('../assertEqual');
const middle = require('../middle');
const assertArraysEqual = require ('../assertArraysEqual');
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