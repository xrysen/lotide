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

const hasMiddle = (arr) => {
  if (arr.length > 2)
    return true;
};

const isEven = (arr) => {
  if (arr.length % 2 === 0)
    return true;
  else
    return false;
};

const middle = (arr) => {
  let mid;
  let output = [];
  if (!hasMiddle(arr))
    output = [];
  else if (isEven(arr)) {
    mid = (arr.length / 2) - 1;
    output.push(arr[mid], arr[mid + 1]);
  }
  else {
    mid = Math.floor(arr.length / 2);
    output.push(arr[mid]);
  }
  return output;
};

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle(["hello", "what's up", "did you know", "frank wasn't", "always", "this", "happy"]), ["frank wasn't"]);
assertArraysEqual(middle([5, "hola", undefined, 6]), ["hola", undefined]);