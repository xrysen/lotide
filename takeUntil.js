const eqArrays = function(arr1, arr2) {
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


const takeUntil = function(array, callback) {
  let result = [];
  for (let element of array) {
    if (!callback(element))
      result.push(element);
    else
      break;
  }
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

module.exports = takeUntil;
