const eqArrays = require("./eqArrays.js");

const assertArraysEqual = function(firstArr, secondArr) {
  if (eqArrays(firstArr, secondArr)) {
    console.log(`✅✅✅ The arrays are equal.`);
  } else {
    console.log(`❌❌❌ The arrays are different.`);
  }
};

module.exports = assertArraysEqual;