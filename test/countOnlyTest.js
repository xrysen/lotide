const countOnly = require("../countOnly");
const assert = require("chai").assert;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

describe("#countOnly", () => {
  it ("should return 1 for result['jason']", () => {
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.equal(result["Jason"], 1);
  });

  it ("should return undefined for result['Karima']", () => {
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.equal(result["Karima"], undefined);
  });
});