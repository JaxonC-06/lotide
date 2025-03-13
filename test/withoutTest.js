const assert = require('chai').assert;
const without = require("../without.js");

describe("#without", () => {
  it("returns an array without 'lighthouse' for the array [hello, world, lighthouse]", () => {
    assert.deepEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"]);
  });
  it("returns an array without 1 for the array [1, 2, 3]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it("is able to differentiate between primitive value types", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
});