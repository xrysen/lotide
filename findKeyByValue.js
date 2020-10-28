const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😁 😁 😁 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤨 🤨 🤨 Assertion Failed! ${actual} !== ${expected}`);
  }
};

const findKeyByValue = (obj, value) => {
  for (const keys in obj) {
    if (obj[keys] === value) {
      return keys;
    }
  }
  return undefined;
};

const bestTVShowsByGenre = {
  scifi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

const bandsByGenre = {
  rock: "Foo Fighters",
  metal: "Metallica",
  jPop: "Yui Horie"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bandsByGenre, "Foo Fighters"), "rock");
assertEqual(findKeyByValue(bandsByGenre, "Metallica"), "metal");
