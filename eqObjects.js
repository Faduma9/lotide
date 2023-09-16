// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false

const eqObjects = function(object1, object2) {
    for (const key in object1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        // If both values are arrays, compare them using eqArrays
        if (!eqArrays(object1[key], object2[key])) {
          return false; // Arrays are not equal, return false
        }
      } else {
        // If they are not arrays, assume they are primitives and use ===
        if (object1[key] !== object2[key]) {
          return false; // Primitives are not equal, return false
        }
      }
    }
    return true; // If no mismatches were found, objects are equal
  };
  