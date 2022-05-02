const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {


  constructor(machineType = true, symbolsAlphabet) {
      this.machineType = machineType
      this.symbolsAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  }

  encrypt(str, key) {
      if (!str || !key) {
          throw new Error('Incorrect arguments!')
      };
      let symbols = [];
      let keys = [];
      let count = 0;

      str.split('').forEach(item => {
          if (this.symbolsAlphabet.includes(item.toUpperCase())) {
              count += 1;
          }
          symbols.push(item.toUpperCase())
      });
      let i = 0;
      let j = 0;
      while (key.length < Math.max(key.length, count)) {
          key += key[i];
          i += 1;
      }
      key.split('').forEach(item => {
          keys.push(this.symbolsAlphabet.indexOf(item.toUpperCase()))
      })
      for (let k = 0; k < symbols.length; k++) {
          if (this.symbolsAlphabet.includes(symbols[k])) {
            let resIndex = this.symbolsAlphabet.indexOf(symbols[k]) + keys[j];
              while (resIndex < 0) {
                resIndex =  this.symbolsAlphabet.length - Math.abs(resIndex)
              }  
              while (resIndex >= this.symbolsAlphabet.length) {
                resIndex = resIndex - this.symbolsAlphabet.length;
            }
            symbols[k] = this.symbolsAlphabet[resIndex];
            j++;
          }
      }
      return (this.machineType) ? symbols.join('') : symbols.reverse().join('')    
  }

  decrypt(str, key) {
      if (!str || !key) {
          throw new Error('Incorrect arguments!')
      }
      let symbols = [];
      let keys = [];
      let count = 0;

      str.split('').forEach(item => {
          if (this.symbolsAlphabet.includes(item.toUpperCase())) {
              count += 1;
          }
          symbols.push(item.toUpperCase())
      });
      let i = 0;
      let j = 0;
      while (key.length < Math.max(key.length, count)) {
          key += key[i];
          i += 1;
      }
      key.split('').forEach(item => {
          keys.push(this.symbolsAlphabet.indexOf(item.toUpperCase()))
      })
      for (let k = 0; k < symbols.length; k++) {
          if (this.symbolsAlphabet.includes(symbols[k])) {
            let resIndex = this.symbolsAlphabet.indexOf(symbols[k]) - keys[j];
              while (resIndex < 0) {
                resIndex =  this.symbolsAlphabet.length - Math.abs(resIndex)
            }
              while (resIndex >= this.symbolsAlphabet.length) {
                resIndex = resIndex - this.symbolsAlphabet.length;
            }
            symbols[k] = this.symbolsAlphabet[resIndex];
            j++;
          }
      }
      return (this.machineType) ? symbols.join('') : symbols.reverse().join('')   
  }
}


module.exports = {
  VigenereCipheringMachine
};
