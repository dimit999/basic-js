const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  matrix.forEach(function(element) {
    element.forEach(function(item) {
      if (item == "^^") {
        count++
      }
    });
  });
  return count
};