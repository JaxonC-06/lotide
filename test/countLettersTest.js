const assert = require('chai').assert;
const countLetters = require("../countLetters");
const sample = countLetters("lighthouse labs is a great program");

describe("#countLetters", () => {
  it("returns 2 for the letter l in 'lighthouse labs is a great program'", () => {
    assert.deepEqual(sample.l, 2);
  });
  it("returns 4 for the letter a in 'lighthouse labs is a great program'", () => {
    assert.deepEqual(sample.a, 4);
  });
  it("returns undefined for the letter z in 'lighthouse labs is a great program'", () => {
    assert.deepEqual(sample.z, undefined);
  });
});