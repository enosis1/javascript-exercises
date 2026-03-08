const palindromes = function (word) {
  const formattedWord = word
    .replace(/\s/g, "")
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();
  const flippedWord = word
    .replace(/\s/g, "")
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase()
    .split("")
    .reverse()
    .join("");
  return formattedWord === flippedWord ? true : false;
};

palindromes("A car, a man, a maraca.");

// Do not edit below this line
module.exports = palindromes;
