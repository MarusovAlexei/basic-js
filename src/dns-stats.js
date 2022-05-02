const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {

  let array = domains.map(item => {
    return item.split('.').reverse();
  });

  domains = array.map(item => {

    if (item[2]) {
      return ([`.${item[0]}`, `.${item[0]}.${item[1]}`, `.${item[0]}.${item[1]}.${item[2]}`]);
    } else {
      return ([`.${item[0]}`, `.${item[0]}.${item[1]}`]);
    }
  });

  let result = domains.reduce((elem1, elem2) => elem1.concat(elem2), []);

  return result.reduce(function (elem1, elem2) {
    elem1[elem2] = (elem1[elem2] || 0) + 1;
    return elem1;
  }, {});

}

module.exports = {
  getDNSStats
};