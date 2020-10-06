const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let nameTeam = []
  if (Array.isArray(members)) {
    members.forEach(element => {
      console.log(element)
      if (typeof(element) == "string") {
        nameTeam.push(element.replace(/\s+/g, "")[0].toUpperCase())
      } else {
        return false
      }
    });
  } else {
    return false
  }
  return nameTeam.sort().join('')
};