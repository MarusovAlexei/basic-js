const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let array = [];
  let countTrue = 0;
  let middleString = Math.floor(matrix.length / 2);
  let middleColumn = Math.floor(matrix[0].length / 2);

  for (let i = 0; i < matrix.length; i++) {

    for (let k = 0; k < matrix[i].length; k++) {

      if (matrix[i][k] == true) {
        countTrue += 1;
      }

      let count = 0;
      if (i > 0) {

        if (matrix[i - 1][k] == true) {
          count += 1;
        }
      }

      if (k + 1 < matrix[i].length) {

        if (matrix[i][k + 1] == true) {
          count += 1;
        }
      }

      if (k > 0) {

        if (matrix[i][k - 1] == true) {
          count += 1;
        }
      }

      if (i + 1 < matrix.length) {

        if (matrix[i + 1][k] == true) {
          count += 1;
        }
      }

      if (matrix[middleColumn][middleString] == true) {

        if ((k !== middleColumn) && (i !== middleString)) {
          count += 1;
        }
      }

      array.push(count);
    }
  }

  if (countTrue > 0) {
    countTrue -= 1;
  }

  let size = matrix[0].length;
  let subarray = [];

  for (let i = 0; i < Math.ceil(array.length / size); i++) {
    subarray[i] = array.slice((i * size), (i * size) + size);
  }

  subarray[middleString][middleColumn] = +subarray[middleString][middleColumn] + countTrue;

  return subarray;
}

module.exports = {
  minesweeper,
};