// FUNCTION IMPLEMENTATION

// A function to check if two values are equal and print a message accordingly
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// A function to compare two arrays for equality
const eqArrays = function(array1, array2) {
};

// A function to compare two objects for equality, using nested arrays
const eqObjects = function(object1, object2) {
  // Get the keys of both objects
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  // If the number of keys is not the same, the objects are not equal
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Loop through the keys of the first object
  for (const key of keys1) {
    // Check if the value of the key is an array in both objects
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // If they are arrays, use the eqArrays function to compare them
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      // If they are not arrays, compare the values using strict equality (===)
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }

  // If all keys and values are equal, the objects are equal
  return true;
};

// Test cases
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);

