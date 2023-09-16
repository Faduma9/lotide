// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };

  const without = function(source, itemsToRemove) {
    const result = [];
    for (const item of source) {
        // Check if the item is not in the itemsToRemove array
        if (!itemsToRemove.includes(item)) {
          result.push(item); // Add it to the result array
        }
      }
    
      return result; 
    };
    
// Test case 1: Removing one element from [1, 2, 3]
const result1 = without([1, 2, 3], [1]);
console.log("Test case 1 result:", result1); // Should print: [2, 3]


// Test case 2: Removing numbers and a string from ["1", "2", "3"]
const result2 = without(["1", "2", "3"], [1, 2, "3"]);
console.log("Test case 2 result:", result2); // Should print: ["1", "2"]


// Test case 3: Original array should not be modified
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
console.log("Test case 3 result:", words); // Should print: ["hello", "world", "lighthouse"]







