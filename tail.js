const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🙂Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙁Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(fullArray) {
  let tailArray = [];
  for (let i = 0; i < fullArray; i++) {
    tailArray[i] = fullArray[i];
  }
  tailArray.shift();
  return tailArray;
};


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);
