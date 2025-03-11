const middle = require("../middle.js");
const assertArraysEqual = require("../assertArraysEqual.js");

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // should log equal
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // should log equal

assertArraysEqual(middle([1, 2]), []) // should log equal, since [1, 2] returns an empty array
assertArraysEqual(middle([1, 2, 3]), [3]) // should log false

console.log(middle([1, 2, 3, 4, 5, 6])); // should log [3, 4]