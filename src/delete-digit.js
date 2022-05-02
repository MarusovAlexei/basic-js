const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

function deleteDigit(n) {
  let string = String(n);
  let value = '';
  let array = [];

  for (let i = 0; i < string.length; i++) {
    value = string.slice(0, i) + string.slice(i + 1);
    array.push(value);
  }

  return Math.max.apply(null, array);
}

module.exports = {
  deleteDigit
};