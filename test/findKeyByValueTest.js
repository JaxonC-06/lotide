const assert = require('chai').assert;
const findKeyByValue = require("../findKeyByValue");

const myFavShowsByGenre = {
  sci_fi: "Lost",
  comedy: "The Office",
  drama: "This Is Us",
  action: "Prison Break"
};

describe("#findKeyByValue", () => {
  it("returns the key 'action' for the show 'Prison Break' in the sample object", () => {
    assert.deepEqual(findKeyByValue(myFavShowsByGenre, "Prison Break"), "action");
  });
  it("returns undefined for a value which doesn't exist", () => {
    assert.deepEqual(findKeyByValue(myFavShowsByGenre, "Arcane League of Legends"), undefined);
  });
  it("returns the key 'drama' when given the value 'This Is Us' in the sample object", () => {
    assert.deepEqual(findKeyByValue(myFavShowsByGenre, "This Is Us"), "drama");
  });
});