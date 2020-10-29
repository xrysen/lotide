const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😁 😁 😁 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤨 🤨 🤨 Assertion Failed! ${actual} !== ${expected}`);
  }
};

const findKey = (obj, callback) => {
  for (const keys in obj) {
    if (callback(obj[keys])) {
      return keys;
    }
  }
  return undefined;
};

const testObj = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

const testObj2 = {
  fighter: { str: 10 },
  wizard: { str: 2 },
  paladin: { str: 8 }
};

const test1 = findKey(testObj, (x) => x.stars === 2);
const test2 = findKey(testObj2, (x) => x.str === 8);
const test3 = findKey(testObj2, (x) => x.str === 4);

assertEqual(test1, "noma");
assertEqual(test2, "paladin");
assertEqual(test3, undefined);