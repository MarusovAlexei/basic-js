const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let arr = [];
  let addition = [];

  if (options.addition !== undefined) {

    if (options.additionRepeatTimes == undefined) {
      addition.push(options.addition);
    } else {

      for (let i = 1; i <= options.additionRepeatTimes; i++) {
        addition.push(options.addition);
      }
    }
  }

  if (addition[0] == null) {
    addition = addition.map(item => {
      return 'null';
    });
  }

  if (options.additionSeparator == undefined) {
    addition = addition.join('|');
  } else {
    addition = addition.join(`${options.additionSeparator}`);
  }

  if (options.repeatTimes == undefined) {

    if (addition.length > 0) {
      arr.push(str + addition);
    } else {
      arr.push(str);
    }
  } else {

    for (let i = 1; i <= options.repeatTimes; i++) {
      if (addition.length > 0) {
        arr.push(str + addition);
      } else {
        arr.push(str);
      }
    }
  }

  if (options.separator == undefined) {
    return arr.join('+');
  } else {
    return arr.join(`${options.separator}`);
  }
}

module.exports = {
  repeater
};