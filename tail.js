// FUNCTION IMPLEMENTATION
const tail = function(array) {
  // Check if the array has at least one element
  if (array.length <= 1) {
    return [];
  }
  // Return a new array containing all elements except the first one
  return array.slice(1);
};
module.exports = tail;
