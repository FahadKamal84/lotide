const takeUntil = function(array, callback) {
  const ans = []; 
  for (let item of array) {
    if (callback(item) === false) {
    ans.push(item);
    } else {
    return ans;
    }
  }
};


//// TEST CODE

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

///// ASSERTION TEST
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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🙂Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙁Assertion Failed: ${actual} !== ${expected}`);
  };
};

assertArraysEqual(results1, [1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
