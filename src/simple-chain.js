const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
    return this.length;
  },
  addLink(value) {
    if (value == null || value == '') {
      return '()'
    } else {
      return `(${value})`
    }
  },
  removeLink(position) {
    if (typeof(10.1) != 'number'){
      throw new Error();
    } else {
      function removeByIndex(index) {
        return this.slice(0, index) + this.slice(index + 1);
      }
      removeByIndex(this, position)
    }
  },
  reverseChain() {
    return this.split("").reverse().join("")
  },
  finishChain() {

    return
  }
};

module.exports = chainMaker;