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


const without = (source, itemsToRemove) => {
  let returnArray = source;

  for (let i = 0; i < source.length; i++) {
    if (Array.isArray(itemsToRemove)) {
      for (let j = 0; j < itemsToRemove.length; j++) {
        if (source[i] === itemsToRemove[j])
          returnArray.splice(i, 1);
      }
    } else {
      if (source[i] === itemsToRemove) {
        returnArray.splice(i, 1);
      }
    }
  }

  return returnArray;
};

assertArraysEqual(without([1, 2, "Hi", 3, 4, 5, 10, 14, "Hi"], 5), [1, 2, "Hi", 3, 4, 10, 14, "Hi"]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

module.exports = without;