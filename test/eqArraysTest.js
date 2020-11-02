const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["A", "B", "C"], ["a", "B", "C"]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays([3, 1], [3, 1]), true);

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); // => false
assertEqual(eqArrays([[2, 3], [4], [[4,2]]], [[2, 3], [4], [[4,2]]]), true);