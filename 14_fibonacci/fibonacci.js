const fibonacci = function (num) {
  if (num < 3) return 1;
  let solution = 1;
  for (let i = 1; i < num; i++) {
    solution += i;
  }
  return solution;
};

// Do not edit below this line
module.exports = fibonacci;
