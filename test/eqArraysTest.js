const eqArrays = require("../eqArrays");
const assert = require("chai").assert;

describe("#eqArrays", () => {
  it("should return true for [1, 2, 3], [1, 2, 3]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("should return false for ['A', 'B', 'C'], ['a', 'B', 'C']", () => {
    assert.deepEqual(eqArrays(["A", "B", "C"], ["a", "B", "C"]), false);
  });

  it("should return false for ['1', '2', '3'], ['1', '2', 3])", () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });

  it("should return true for [[2, 3], [4], [[4,2]]], [[2, 3], [4], [[4,2]]]", () => {
    assert.deepEqual(eqArrays([[2, 3], [4], [[4, 2]]], [[2, 3], [4], [[4, 2]]]), true);
  });
});
