const middle = function(array) {
    const middleArray = [];
    const length = array.length;
    if (length <= 2) {
      return middleArray;
    }
    if (length % 2 === 0) {
      // Even number of elements, return the two middle elements
      middleArray.push(array[length / 2 - 1], array[length / 2]);
    } else {
      // Odd number of elements, return the single middle element
      middleArray.push(array[Math.floor(length / 2)]);
    }
    return middleArray;
  };
  module.exports = middle;

