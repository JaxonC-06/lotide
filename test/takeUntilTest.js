const assert = require('chai').assert;
const takeUntil = require("../takeUntil.js");

const randomNumbers = [1, 2, 4, 9, 12, -3, 6, 8];
const randomWords = ["sweet", "child", "of", "mine"];
const randomActors = ["Samuel L. Jackson", "Emma Stone", "James McAvoy", "Alec Baldwin"];

describe("#takeUntil", () => {
  it("returns all numbers in the array [1, 2, 4, 9, 12, -3, 6, 8] until a negative appears", () => {
    assert.deepEqual(takeUntil(randomNumbers, item => item < 0), [1, 2, 4, 9, 12]);
  });
  it("returns words in the array [sweet, child, of, mine] until the word 'of' appears", () => {
    assert.deepEqual(takeUntil(randomWords, item => item === "of"), ["sweet", "child"]);
  });
  it("returns the full array if the callback item doesn't exist", () => {
    assert.deepEqual(takeUntil(randomActors, item => item === "Adam Sandler"), randomActors);
  });
});