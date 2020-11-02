const words = ["ground", "control", "to", "major", "tom"];

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


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word + "s");

assertArraysEqual(results1, ['g','c','t','m','t']);
assertArraysEqual(results2, ['grounds','controls','tos','majors','toms']);

module.exports = map;