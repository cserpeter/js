const fibonacci = function (n) {
  const num = typeof n === "string" ? parseInt(n) : n;
  if (num < 0) return "OOPS";
  if (num === 0) return 0;
  if (num < 3) return 1;
  const arr = [1, 1];
  let newLastNum;
  let newFirstNum;
  for (let i = 2; i < num; i++) {
    newLastNum = arr.reduce((acc, cur) => acc + cur);
    newFirstNum = arr.pop();
    arr[0] = newFirstNum;
    arr[1] = newLastNum;
  }

  return arr[1];
};

// Do not edit below this line
module.exports = fibonacci;
