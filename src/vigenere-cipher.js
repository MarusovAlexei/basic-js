const { NotImplementedError } = require("../extensions/index.js");

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
  array = [];
  newArray = [];
  keys = [];
  letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
    "S", "T", "U", "V", "W", "X", "Y", "Z",
  ];

  constructor(reverse) {
    if (reverse === undefined) {
      this.reverse = true;
    } else {
      this.reverse = false;
    }
  }

  editStr(value) {
    let str = value.toUpperCase();
    let strArr = str.split("");
    return strArr.map((item) => {

      if (/[A-Z]/i.test(item) == true) {
        return this.letters.indexOf(item);
      } else {
        return item;
      }
    });
  }

  encrypt(text, key) {
    if (text == undefined || key == undefined) {
      throw new Error("Incorrect arguments!");
    }

    [this.array, this.keys] = [this.editStr(text), this.editStr(key)];

    let j = 0;
    for (let i = 0; i < this.array.length; i++) {

      if (typeof this.array[i] !== "number") {
        this.newArray.push(this.array[i]);
      } else {
        let num = this.array[i] + this.keys[j];

        if (this.array[i] + this.keys[j] >= 26) {
          num = num - 26;
        }
        this.newArray.push(this.letters[num]);

        if (j + 1 >= this.keys.length) {
          j = j + 1;
          j = j - this.keys.length;
        } else {
          j = j + 1;
        }
      }
    }

    if (this.reverse == false) {
      this.newArray.reverse();
    }

    let resultArr = this.newArray;
    this.newArray = [];

    return resultArr.join("");
  }

  decrypt(text, key) {

    if (text == undefined || key == undefined) {
      throw new Error("Incorrect arguments!");
    }

    [this.array, this.keys] = [this.editStr(text), this.editStr(key)];

    let j = 0;

    for (let i = 0; i < this.array.length; i++) {

      if (typeof this.array[i] !== "number") {
        this.newArray.push(this.array[i]);
      } else {
        let num = this.array[i] - this.keys[j];

        if (this.array[i] - this.keys[j] < 0) {
          num = num + 26;
        }
        this.newArray.push(this.letters[num]);

        if (j + 1 >= this.keys.length) {
          j = j + 1;
          j = j - this.keys.length;
        } else {
          j = j + 1;
        }
      }
    }

    if (this.reverse == false) {
      this.newArray.reverse();
    }

    let resultArr = this.newArray;
    this.newArray = [];

    return resultArr.join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};