const assert = require('chai').assert;
const findKey = require("../findKey");

const files = {
  accounts: {folders: 4},
  personal: {folders: 9},
  lighthouse: {folders: 3},
  images: {folders: 2},
  downloads: {folders: 12}
};

describe("#findKey", () => {
  it("returns lighthouse for a folder with 3 embeded folders", () => {
    assert.deepEqual(findKey(files, (x) => x.folders === 3), "lighthouse");
  });
  it("returns undefined for a folder with one embeded folder", () => {
    assert.deepEqual(findKey(files, (x) => x.folders === 1), undefined);
  });
});