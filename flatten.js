const eqArrays = function (arr1, arr2) {
  let n = 0;
  if (arr1.length !== arr2.length)
    return false;
  else {
    while (n < arr1.length) {
      if (arr1[n] !== arr2[n])
        return false;
      else
        n++;
    }
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

const flatten = (input) => {
  let output = [];
  for (let i = 0; i < input.length; i++) {
    if (Array.isArray(input[i])) {
      for (let j = 0; j < input[i].length; j++) {
        output.push(input[i][j]);
      }
    } else {
      output.push(input[i]);
    }
  }
  return output;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten(["Hi", ["What's", "Up"], 5, 1, 6]), ["Hi", "What's", "Up", 5, 1, 6]);

module.exports = flatten;

