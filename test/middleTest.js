const middle = require("../middle.js");
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("returns [] when given an array with only two elements", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("checks [3] is not equal to [1, 2, 3, 4]", () => {
    assert.notDeepEqual(middle([1, 2, 3, 4]), [3]);
  });
});