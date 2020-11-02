const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😁 😁 😁 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤨 🤨 🤨 Assertion Failed! ${actual} !== ${expected}`);
  }
};

const countLetters = (str) => {
  let letters = {};
  for (let letter of str) {
    if (letters[letter]) {
      letters[letter]++;
    } else {
      letters[letter] = 1;
    }
  }
  return letters;
};

const words = [
  "hello",
  "Sean",
  "emergency",
  "mississippi",
  "penicillion"
];

const result = countLetters(words[3]);

assertEqual(result["s"], 4);
assertEqual(result["i"], 4);
assertEqual(result["p"], 2);

module.exports = countLetters;

