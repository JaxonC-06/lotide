const eqArrays = function(firstArr, secondArr) {
  if (firstArr.length !== secondArr.length) {
    return false;
  }
  for (let i = 0; i < firstArr.length; i++) {
    if (firstArr[i] !== secondArr[i]) {
      return false;
    }
  }

  return true;
};

const eqObjects = function(object1, object2) {
  const object1Array = Object.keys(object1);
  const object2Array = Object.keys(object2);
  if (object1Array.length !== object2Array.length) {
    return false;
  }

  for (const key of object1Array) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const vehicle1 = {year: "2024", company: "toyota", lineup: "tundra"};
const vehicle2 = {company: "toyota", lineup: "tundra", year: "2024"};
const vehicle3 = {year: "2021", company: "Ford", lineup: "F-150"};
const vehicle4 = {years: ["2021", "2022", "2024"], company: "Ford"};
const vehicle5 = {years: ["2021", "2022", "2024"], company: "Ford"};

assertObjectsEqual(vehicle1, vehicle2);
assertObjectsEqual(vehicle2, vehicle3);
assertObjectsEqual(vehicle3, vehicle4);
assertObjectsEqual(vehicle4, vehicle5);