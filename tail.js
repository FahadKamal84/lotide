const assertEqual = require('./assertEqual');

const tail = function(fullArray) {
  let tailArray = [];
  for (let item of fullArray) {
    tailArray.push(item);
  };
  tailArray.shift();
  return tailArray;
};

module.exports = tail;
