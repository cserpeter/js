const findTheOldest = function (array) {
  const date = new Date();
  const ageArray = array.map((person) => {
    if ("yearOfDeath" in person) return person.yearOfDeath - person.yearOfBirth;
    else return date.getFullYear() - person.yearOfBirth;
  });
  const oldestAge = Math.max(...ageArray);
  const oldestIndex = ageArray.indexOf(oldestAge);
  return array[oldestIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
