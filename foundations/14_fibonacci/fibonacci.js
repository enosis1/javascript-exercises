const fibonacci = function (number) {
  const testNumber = Number(number);
  if (testNumber === 0) {
    return 0;
  } else if (testNumber === 1) {
    return 1;
  } else if (testNumber < 0) {
    return "OOPS";
  } else {
    let prev = 0;
    let current = 1;
    for (let i = 2; i <= testNumber; i++) {
      let next = prev + current;
      prev = current;
      current = next;
    }
    return current;
  }
};

console.log(fibonacci(10));

// Do not edit below this line
module.exports = fibonacci;
