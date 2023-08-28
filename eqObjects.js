const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🙂Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙁Assertion Failed: ${actual} !== ${expected}`);
  };
};

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


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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


///////TEST CODE

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true

assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false

assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);

/////////TEST CODE WITH ARRAYS AS KEY VALUES

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium"};
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true

assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false

assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false);

module.exports = eqObjects;