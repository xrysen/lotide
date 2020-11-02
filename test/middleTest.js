const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle(["hello", "what's up", "did you know", "frank wasn't", "always", "this", "happy"]), ["frank wasn't"]);
assertArraysEqual(middle([5, "hola", undefined, 6]), ["hola", undefined]);