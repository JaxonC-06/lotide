const assert = require('chai').assert;
const flatten = require("../flatten");

describe("#flatten", () => {
  it("returns a flattened array when given an array with one level of nested array values", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [ 1, 2, 3, 4, 5, 6 ]);
  });
  it("cannot return a flattened array with multiple levels of nesting", () => {
    assert.notDeepEqual(flatten([[1, 2, [3], [[4, 5]]], 6]), [1, 2, 3, 4, 5, 6]);
  });
});