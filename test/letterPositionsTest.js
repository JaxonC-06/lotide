const assert = require('chai').assert;
const letterPositions = require("../letterPositions");

describe("#letterPositions", () => {
  it("returns [1] for the letter e in the string 'hello'", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });
  it("returns [2, 3] for the letter l in the string 'hello'", () => {
    assert.deepEqual(letterPositions("hello").l, [2, 3]);
  });
  it("does not count spaces as values", () => {
    assert.deepEqual(letterPositions("I love").l, [2]);
  });
  it("is not case sensitive", () => {
    assert.deepEqual(letterPositions("ccCC").c, [0, 1, 2, 3]);
  });
});