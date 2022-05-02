const { NotImplementedError } = require('../extensions/index.js');

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
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
      result.push([]);
      for (let j = 0; j < matrix[0].length; j++) {
          let count = 0;
          for (let k = -1; k < 2; k++) {
              for (let s = -1; s < 2; s++) {
                  if (matrix[i + k] && matrix[i + k][j + s]) {
                      count += 1;
                  } 
              }
          }
          if (matrix[i][j]) {
              count -= 1;
          }
          result[i].push(count)
      }
  }
  return result
}

module.exports = {
  minesweeper
};
