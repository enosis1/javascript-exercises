const findTheOldest = function (array) {
  let peopleAges = array.map((item) => ({
    name: item.name,
    age: item.yearOfDeath
      ? item.yearOfDeath - item.yearOfBirth
      : new Date().getFullYear() - item.yearOfBirth,
  }));
  let sortedPeople = peopleAges.sort((a, b) => b.age - a.age);
  return sortedPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;
