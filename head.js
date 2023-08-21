const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🙂Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙁Assertion Failed: ${actual} !== ${expected}`);
  };
}

const head = function(testArray) {
  let firstElement = 0;
  firstElement = testArray[0]
  return firstElement;
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1]), 1);
assertEqual(head([]),)