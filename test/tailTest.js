const tail = require("../tail");
const assert = require("chai").assert;
describe("#tail", () => {
  it("should return 'how' for result[0]", () => {
    const words = ["Hello", "how", "is", "everyone?"];
    const result = tail(words);
    assert.strictEqual(result[0], "how");
  });

  it("should return 'is' for result[1]", () => {
    const words = ["Hello", "how", "is", "everyone?"];
    const result = tail(words);
    assert.strictEqual(result[1], "is");
  });

  it("should return 'everyone?' for result[2]", () => {
    const words = ["Hello", "how", "is", "everyone?"];
    const result = tail(words);
    assert.strictEqual(result[2], "everyone?");
  });
});

