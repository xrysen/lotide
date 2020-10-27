const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😁 😁 😁 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤨 🤨 🤨 Assertion Failed! ${actual} !== ${expected}`);
  }
};

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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["A", "B", "C"], ["a", "B", "C"]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays([3, 1], [3, 1]), true);