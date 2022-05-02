const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

function getSeason(date) {

  if ((Boolean(date) == false) && (date !== 0)) {

    return 'Unable to determine the time of year!';
  }

  try {
    date.getMonth();

  } catch (e) {
    throw new Error("Invalid date!");
  }

  let now = new Date();

  if ((now.getFullYear() == date.getFullYear()) && (now.getMonth() == date.getMonth())
    && (now.getDate() == date.getDate())) {
    throw new Error("Invalid date!");
  }

  if (date.hasOwnProperty('getMonth') == true) {
    throw new Error("Invalid date!");
  }

  let month = date.getMonth();

  if ((month == 0) || (month == 11) || (month == 1)) {
    return 'winter';
  } else if (month > 1 && month < 5) {
    return 'spring';
  } else if (month > 4 && month < 8) {
    return 'summer';
  } else if (month > 7 && month < 11) {
    return 'autumn';
  } else {
    throw new Error("Invalid date!");
  }
}

module.exports = {
  getSeason
};