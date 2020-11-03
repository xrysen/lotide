// Checks if two objects are equal
// Returns true if they are, false f they are not

const eqObjects = (obj1, obj2) => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length)
    return false;
  else {
    for (const i of Object.keys(obj1)) {
      if (Array.isArray(obj1[i]) && Array.isArray(obj2[i])) {
        if (!eqArrays(obj1[i], obj2[i])) {
          return false;
        }
      } else if (typeof obj1[i] === "object" && obj1[i] !== null && !Array.isArray(obj1[i])) {
        return eqObjects(obj1[i], obj2[i]);
      }
      else if (obj1[i] !== obj2[i])
        return false;
    }

  }
  return true;
}

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true);

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false



module.exports = eqObjects;