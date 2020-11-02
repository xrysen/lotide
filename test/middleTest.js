const assert = require("chai").assert;
const middle = require("../middle");

describe("#middeTest", () => {
  it("should return [3] for [1, 2, 3, 4, 5", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("should return [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("should return [frank wasn't] for [hello, what's up, did you know, frank wasn't, always, this, happy", () => {
    assert.deepEqual(middle(["hello", "what's up", "did you know", "frank wasn't", "always", "this", "happy"]), ["frank wasn't"]);
  });

  it("should return ['hola', undefined] for [5, 'hola', undefined, 6", () => {
    assert.deepEqual(middle([5, 'hola', undefined, 6]), ["hola", undefined]);
  });
});