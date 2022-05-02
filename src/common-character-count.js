const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Num}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let arrayFirst = s1.split('');
  let arraySecond = s2.split('');

  for (let i = 0; i <= arrayFirst.length; i++) {

    if (arraySecond.indexOf(arrayFirst[i]) > -1) {
      let number = arraySecond.indexOf(arrayFirst[i]);
      count++;
      arraySecond.splice(number, 1);
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount,
};