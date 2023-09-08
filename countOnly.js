// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

  
  
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

  
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);



const countOnly = function(allItems, itemsToCount) {
  const results = {};
          
for (const item of allItems) {
    console.log(item);
    // Check if the item exists in the itemsToCount object
    if (itemsToCount[item]) {
    // Check if the item already exists in my object
      if (results[item]) {
        // If it exists, increment the count by 1 (+=1)
        results[item] += 1;
      } else {
      // If it doesn't exist, assign the item 1
        results[item] = 1;
}
    }
  }
          
  return results;
};
          
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
  

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
 