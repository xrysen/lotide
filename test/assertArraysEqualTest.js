const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(["cat", "dog"], [1, "mouse"]);
assertArraysEqual([1.2, 3.1], [1.2, 3.1]);