const eqArrays = (arr1, arr2) => {
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

// Checks if two objects are equal
// Returns true if they are, false f they are not

const eqObjects = (obj1, obj2) => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length)
    return false;
  else {
    for (const i of Object.keys(obj1)) {
      if (Array.isArray(obj1[i]) && Array.isArray(obj2[i])) {
        console.log(obj1[i], obj2[i]);
        console.log(eqArrays(obj1[i], obj2[i]));
        if (!eqArrays(obj1[i], obj2[i]))
          return false;
      } else if (obj1[i] !== obj2[i])
        return false;
    }
  }
  return true;
};

const assertObjectsEqual = (obj1, obj2) => {
  const inspect = require('util').inspect;

  if (eqObjects(obj1, obj2) === true) {
    console.log(`😁 😁 😁 Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    console.log(`🤨 🤨 🤨 Assertion Failed! ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
};

const ab = { a: 1, b: 2 };
const ba = { b: 2, a: 1 };
const cd = { c: 2, a: 1, b: 3 };

assertObjectsEqual(ab, cd);
assertObjectsEqual(ab, ba);
