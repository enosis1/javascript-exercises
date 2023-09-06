const removeFromArray = function (array, ...args) {
    return array.filter(element => !args.includes(element))
}

removeFromArray([1, 2, 3, 4], 3, 4, 1);
// Do not edit below this line
module.exports = removeFromArray;
