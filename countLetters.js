const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🙂Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙁Assertion Failed: ${actual} !== ${expected}`);
  };
};

const countLetters = function(string) {
  answer = {};
  for (letter of string) {
    if (answer[letter]) {
      answer[letter] += 1;
    } else {
      answer[letter] = 1;
    }
  }
  return answer;
};

const result = countLetters("hello");
assertEqual(result["h"], 1);
assertEqual(result["l"], 2);