const sumAll = function (num1, num2) {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    num1 < 0 ||
    num2 < 0 ||
    num1 % 1 !== 0 ||
    num2 % 1 !== 0
  )
    return "ERROR";
  const from = num1 < num2 ? num1 : num2;
  const to = num1 < num2 ? num2 : num1;

  let sum = 0;
  for (let i = from; i <= to; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
