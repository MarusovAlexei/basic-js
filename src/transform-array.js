const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

function transform(arr) {
  let newArray = [];

  if (Array.isArray(arr) == false) {
    throw new SyntaxError("'arr' parameter must be an instance of the Array!");
  }

  arr.forEach(item => {
    newArray.push(item)
  });

  console.log(newArray.length);

  for (let i = 0; i < newArray.length; i++) {

    if (newArray[i] == '--discard-next') {
      let j = i + 1;
      newArray[j] = '';
      newArray.splice(i, 1);
    }

    if (newArray[i] == '--double-next') {

      if ((i + 1) < newArray.length) {
        newArray.splice(i + 1, 0, newArray[i + 1]);
        newArray.splice(i, 1);
      } else {
        newArray.splice(i, 1);
      }
    }

    if (newArray[i] == '--discard-prev') {
      newArray[i - 1] = '';
      newArray.splice(i, 1)
    }
    if (newArray[i] == '--double-prev') {

      if (i != 0) {
        newArray.splice(i - 1, 0, newArray[i - 1]);
        newArray.splice(i + 1, 1);
      } else {
        newArray.splice(i, 1);
      }
    }
  }
  let result = [];
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] !== '') {
      result.push(newArray[i]);
    }
  }

  return result;
}


module.exports = {
  transform
};