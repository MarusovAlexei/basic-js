const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
  maker: [],
  getLength() {
    return this.maker.length;
  },
  addLink(value) {

    if (value === null) {
      value = 'null';
    } else if (value === undefined) {
      value = ' ';
    }

    this.maker.push(`( ${value} )`);
    return this;
  },
  removeLink(value) {

    if ((typeof value !== 'number') || (value % 1 !== 0) || (value < 1) || ((value) > this.maker.length)) {
      this.maker.length = 0;
      throw new SyntaxError("You can't remove incorrect link!");
    }

    this.maker.splice((value - 1), 1);
    return this;
  },
  reverseChain() {
    this.maker.reverse();
    return this;
  },
  finishChain() {
    let result = this.maker.join('~~');
    this.maker.length = 0;
    return result;
  }
};

module.exports = {
  chainMaker
};