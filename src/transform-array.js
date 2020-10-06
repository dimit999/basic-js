const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArr = []
  if (Array.isArray(arr)) {
    arr.forEach(function(element, number, arrC){
      if (element == '--discard-prev') {
        if (!(arrC[number - 1] == undefined)) {
          let index = arrC.indexOf(arrC[number - 1]);
          newArr.splice(index-1, 1)

        }
      } else if (element == '--discard-next') {
        if (!(arrC[number + 1] == undefined)) {
          let index = arrC.indexOf(arrC[number + 1]);
          newArr.splice(index+1, 1)
        }
      } else if (element == '--double-next') {
            console.log(newArr[number + 1])
            console.log(number)
          if (!(arrC[number + 1] == undefined)) {
            newArr.push(arrC[number + 1]);
          }
      } else if (element == '--double-prev') {
        if (!(arrC[number - 1] == undefined)) {
          if (arrC[number - 2] != '--discard-next') {
            newArr.push(arrC[number - 1]);
          }
        }
      } else {
        newArr.push(element)
      }
    })
    return newArr
  } else {
    throw new Error()
  }
};