const assert = require("chai").assert;
const eqObjects = require("../eqObjects.js");

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveObject = { size: "medium", color: "red", sleeveLength: "long" };
const multiColorShirtObject = {colors: ["red", "blue"], size: "medium"};
const anotherMultiColorShirtObject = {size: "medium", colors: ["red", "blue"]};

describe("#eqObjects", () => {
  it("returns true for objects with identical key-value pairs in a different order", () => {
    assert.deepEqual(eqObjects(shirtObject, anotherShirtObject), true);
  });
  it("returns false if the objects are not the same", () => {
    assert.deepEqual(eqObjects(shirtObject, longSleeveObject), false);
  });
  it("returns true for objects with an array as a value", () => {
    assert.deepEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
  });
});