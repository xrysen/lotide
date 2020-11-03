const findKeyByValue = require("../findKeyByValue");
const assert = require("chai").assert;

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


describe("#findKeyByValue", () => {
  it("should return 'drama' for 'The Wire'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("should return undefined for 'That 70's Show'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That 70's Show"), undefined);
  });

  it("should return 'rock' for 'Foo Fighters'", () => {
    assert.strictEqual(findKeyByValue(bandsByGenre, "Foo Fighters"), "rock");
  });

  it("should return 'metal' for 'Metallica'", () => {
    assert.strictEqual(findKeyByValue(bandsByGenre, "Metallica"), "metal");
  });
});
