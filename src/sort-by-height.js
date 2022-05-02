const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} array
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

function sortByHeight(array) {
  let newArray = [];

  array.forEach(item => {
    if (item !== -1) {
      newArray.push(item);
    }
  });

  let result = newArray.sort((a, b) => a - b);

  for (let i = 0; i < array.length; i++) {

    if (array[i] == -1) {
      result.splice(i, 0, -1);
    }
  }

  return result;
}

module.exports = {
  sortByHeight
};