const removeFromArray = function (array, ...element) {
  return array.filter((elem) => !element.includes(elem));
};

// Do not edit below this line
module.exports = removeFromArray;
