const removeFromArray = function (array, ...args) {
  for (arg of args) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === arg) {
        array.splice(i, 1);
      }
    }
  }
  return array;
};

removeFromArray([1, 2, 3, 4], 3, 4, 1);
// Do not edit below this line
module.exports = removeFromArray;
