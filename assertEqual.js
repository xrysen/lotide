const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("😁 😁 😁 Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🤨 🤨 🤨 Assertion Failed! " + actual + " !== " + expected);
  }
};

// TEST Code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("October", "October");
assertEqual(1, 1);
assertEqual(23, 43);
