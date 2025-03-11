const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual([5, 9, 2, 0], [5, 9, 2, 0]); // should return ✅✅✅ The arrays are equal.
assertArraysEqual(["tree", "plant", "bush"], ["tree", "plant", "bush"]); // should return ✅✅✅ The arrays are equal.
assertArraysEqual(["tree", "plant", "bush"], ["tree", "plant", "fern"]); // should return ❌❌❌ The arrays are different.
assertArraysEqual([1, 2, 3], []); // should return ❌❌❌ The arrays are different.