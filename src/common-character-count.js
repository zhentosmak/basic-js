const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  let str = s2;
  for (i = 0; i < s1.length; i++) {
      str = str.replace(new RegExp(s1[i]), '');
  }
  return s2.length - str.length;
}

module.exports = {
  getCommonCharacterCount
};
