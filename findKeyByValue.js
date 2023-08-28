const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🙂Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙁Assertion Failed: ${actual} !== ${expected}`);
  };
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function (tvshowsgenre, tvshow) {
  let result = "";
  const test = Object.keys(tvshowsgenre);
  for (let shows of test) {
    //console.log(shows);
    if (tvshowsgenre[shows] === tvshow) { 
      return shows;
    }
  }
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));
//assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
//assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;