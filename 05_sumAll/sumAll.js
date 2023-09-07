const sumAll = function (numOne, numTwo) {
  let sum = 0;

  if (!Number.isInteger(numOne) || !Number.isInteger(numTwo)) {
    return "ERROR";
  } else if (numOne < 0 || numTwo < 0) {
    return "ERROR";
  } else if (numOne > numTwo) {
    for (i = 0; i <= numOne; i++) {
      sum += i;
    }
    return sum;
  } else {
    for (i = numTwo; i >= numOne; i--) {
      sum += i;
    }
  }
  return sum;
};

sumAll(90, 40);
// Do not edit below this line
module.exports = sumAll;
