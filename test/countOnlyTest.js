const assert = require('chai').assert;
const countOnly = require("../countOnly");

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const itemsToCount = {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
};

const sample = countOnly(firstNames, itemsToCount);

describe("#countOnly", () => {
  it("returns 1 occurence for the key Jason", () => {
    assert.deepEqual(sample["Jason"], 1);
  });
  it("returns undefined for a key that does not exist", () => {
    assert.deepEqual(sample["Karima"], undefined);
  });
  it("returns 2 for a key with two occurences", () => {
    assert.deepEqual(sample["Fang"], 2);
  })
  it("returns undefined for a name which exists in the original array but is exluded in the itemsToCount object", () => {
    assert.deepEqual(sample["Agouhanna"], undefined);
  })
})