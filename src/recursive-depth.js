const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

class DepthCalculator {
  calculateDepth(array) {

    if (!Array.isArray(array)) {
      return;
    }

    let number = 0;

    for (let value of array) {
      let newDepth = this.calculateDepth(value);

      if (newDepth > number) {
        number = newDepth;
      } else {
        newDepth = '';
      }
    }

    return number + 1;
  }
}

module.exports = {
  DepthCalculator
};