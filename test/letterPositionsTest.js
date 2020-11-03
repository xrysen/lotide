const letterPositions = require("../letterPositions");
const assert = require("chai").assert;

describe("#letterPositions", () => {
  it ("should return 1 for hello.e", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });

  it("should return [0, 11]", () => {
    assert.deepEqual(letterPositions("lighthouse labs").l, [0, 11]);
  });
});