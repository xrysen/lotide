const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😁 😁 😁 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤨 🤨 🤨 Assertion Failed! ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  let output = [];
  if (arr.length > 1) {
    for (let i = 1; i < arr.length; i++) {
      output.push(arr[i]);
    }
  }
  return output;
};

const words = [];
console.log(tail(words));
assertEqual(words.length, 0);