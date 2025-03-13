const assert = require('chai').assert;
const eqArrays = require("../eqArrays.js");

describe("#eqArrays", () => {
  it("returns true when the arrays are equal", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false when the arrays do not match", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 4]), false);
  });
});