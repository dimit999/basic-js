module.exports = class DepthCalculator {

  calculateDepth(arr, currentDepth = 0) {
  if (!Array.isArray(arr)) {
    return currentDepth
  }
  currentDepth++;
  let maxDepth = currentDepth
  arr.forEach(element => {
    let depth = this.calculateDepth(element, currentDepth)
    if (depth > maxDepth) {
      maxDepth = depth
    }
  });
  return maxDepth;
}
}