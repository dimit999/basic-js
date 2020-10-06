const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (!date) {
      return 'Unable to determine the time of year!'
    } else if (Object.prototype.toString.call(date) === '[object Date]') {

      let month = date.getMonth()+1

      if ([12, 1, 2].includes(Number(month))) {
        return "winter"
      } else if ([3, 4, 5].includes(Number(month))) {
        return "spring"
      } else if ([6, 7, 8].includes(Number(month))) {
        return "summer"
      } else if ([9, 10, 11].includes(Number(month))) {
        return "autumn"
      }
    } else {
      throw new Error()}
};