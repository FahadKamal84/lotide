const eqArrays = function(arrayOne, arrayTwo) {
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


const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let property of Object.keys(object1)) {
      if (Array.isArray(object1[property]) && Array.isArray(object2[property])) {
        return eqArrays(object1[property], object2[property]);
      } else if (object1[property] !== object2[property]) {
        return false;
      }
    } return true;
  } else {
    return false;
  }
};


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; //import util library
  if (eqObjects(actual, expected)) {
    console.log(`🙂Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🙁Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


/////TEST CODE
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium"};
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true

assertObjectsEqual(multiColorShirtObject  , anotherMultiColorShirtObject);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false

assertObjectsEqual(multiColorShirtObject  , longSleeveMultiColorShirtObject);