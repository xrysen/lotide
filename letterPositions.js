
const eqArrays = function(arr1, arr2) {
  let n = 0;
  while (n < arr1.length) {
    if (arr1[n] !== arr2[n])
      return false;
    else
      n++;
  }
  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`😁 😁 😁 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🤨 🤨 🤨 Assertion Failed! ${arr1} !== ${arr2}`);
  }
};

const letterPositions = (sentences) => {
  const results = {};
  sentences = sentences.toLowerCase().split("");
  for (let i = 0; i < sentences.length; i++) {
    if (results[sentences[i]]) {
      results[sentences[i]].push(i);
    } else {
      results[sentences[i]] = [i];
    }
  }

  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("Lighthouse Labs").l, [0, 11]);