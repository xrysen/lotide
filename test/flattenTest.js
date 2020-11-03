const flatten = require("../flatten");
const assert = require("chai").assert;

describe("#flatten", () => {
  it("should return [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  
  it("should return ['Hi', 'What's', 'Up', 5, 1, 6] for ['Hi', ['What's', 'Up'], 5, 1, 6] ", () => {
    assert.deepEqual(flatten(["Hi", ["What's", "Up"], 5, 1, 6]), ["Hi", "What's", "Up", 5, 1, 6]);
  });
});