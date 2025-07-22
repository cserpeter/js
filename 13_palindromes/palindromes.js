const palindromes = function (str) {
  let noSpaceString = str
    .split(" ")
    .join("")
    .toLowerCase()
    .replaceAll(/\W+/g, "");
  let firstHalf = noSpaceString.slice(0, Math.floor(noSpaceString.length / 2));
  let secondHalf = noSpaceString
    .slice(Math.ceil(noSpaceString.length / 2), noSpaceString.length)
    .split("")
    .reverse()
    .join("");

  return firstHalf === secondHalf;
};

// Do not edit below this line
module.exports = palindromes;
