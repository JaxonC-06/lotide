const assert = require('chai').assert;
const tail = require("../tail.js");

describe("#tail", () => {
  it("returns [2, 3, 4] for [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("ensures the original array is not modified", () => {
    const arr = [1, 2, 3, 4];
    tail(arr);
    assert.lengthOf(arr, 4);
  })
});