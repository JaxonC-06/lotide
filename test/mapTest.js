const assert = require('chai').assert;
const map = require("../map.js");

const words = ["take", "me", "down", "to", "the", "paradise", "city"];

describe("#map", () => {
  it("returns an array with the first letter of every word in [take, me, down, to, the, paradise, city]", () => {
    assert.deepEqual(map(words, (word) => word[0]), ["t", "m", "d", "t", "t", "p", "c"]);
  });
  it("returns the fourth letter of every word, if none, returns undefined in place of the word", () => {
    assert.deepEqual(map(words, (word) => word[3]), ["e", undefined, "n", undefined, undefined, "a", "y"]);
  });
  it("returns undefined for every word because there is no 9th letter in any word", () => {
    assert.deepEqual(map(words, (word) => word[8]), [undefined, undefined, undefined, undefined, undefined, undefined, undefined]);
  });
});