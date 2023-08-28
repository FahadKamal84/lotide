/*const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length === arrayTwo.length) {
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🙂Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙁Assertion Failed: ${actual} !== ${expected}`);
  }
};*/



const middle = function(array) {
  let middleArray = [];
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      let ans = (array.length / 2);
      middleArray.push(array[ans - 1]);
      middleArray.push(array[ans]);
      return middleArray
    } else {
      let ans = (Math.ceil(array.length / 2));
      middleArray.push(array[ans - 1]);
      return middleArray;
    }
  } else {
    return middleArray;
  } 
};

module.exports = middle;

//assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
//assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
//assertArraysEqual(middle([1, 2]), []);