// Create a function that removes certain items from an array
// For each item (..a) in the array
// Remove it
const removeFromArray = function (array, ...a) {
  let newArray = [];
  array.forEach((item, index) => {
    if (!a.includes(item)) {
      newArray.push(item);
    }
  });
  return newArray;
};

let array = [1, 2, 3, 4];
console.log(removeFromArray(array, 3));

// Do not edit below this line
module.exports = removeFromArray;
