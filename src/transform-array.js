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
  if (Array.isArray(arr)) {
    let newArr = arr.slice();
    let sequence = ['--double-next', '--double-prev', '--discard-next', '--discard-prev']
    for (i = 0; i < newArr.length; i++) {
      if (newArr[i] === '--double-next' && i !== newArr.length - 1) {
        if (!sequence.includes(newArr[i + 1])) {
          newArr.splice(i + 1, 0, newArr[i + 1]); 
        }
      } else if (newArr[i] === '--double-prev' && i !== 0) {
        if (!sequence.includes(newArr[i - 1])) {
          newArr.splice(i + 1, 0, newArr[i - 1]); 
        }      
      } else if (newArr[i] === '--discard-next' && i !== newArr.length - 1) {
        if (!sequence.includes(newArr[i + 1])) {
          newArr.splice(i + 1, 1); 
        }
      } else if (newArr[i] === '--discard-prev' && i !== 0) {
        if (!sequence.includes(newArr[i - 1])) {
          newArr.splice(i - 1, 1); 
        }
      }
    }
    let result = [];
    newArr.forEach((item) => {
      if (!sequence.includes(item)) {
        result.push(item)
      }
    })
    return result
  } else {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
}
module.exports = {
  transform
};
