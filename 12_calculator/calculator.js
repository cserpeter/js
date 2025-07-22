const add = function (...nums) {
  return nums.reduce((acc, cur) => acc + cur);
};

const subtract = function (...nums) {
  return nums.reduce((acc, cur) => acc - cur);
};

const sum = function (arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
};

const multiply = function (arr) {
  return arr.reduce((acc, cur) => acc * cur);
};

const power = function (num, power) {
  return num ** power;
};

const factorial = function (nums) {
  if (nums < 2) return 1;
  let factorial = 1;
  while (nums > 0) {
    factorial *= nums;
    nums--;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
