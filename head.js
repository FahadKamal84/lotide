const assertEqual = require('./assertEqual');

const head = function(testArray) {
  let firstElement = 0;
  firstElement = testArray[0]
  return firstElement;
}

module.exports = head;