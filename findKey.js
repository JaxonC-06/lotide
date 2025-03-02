const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Scan the given object, return FIRST key fo which callback returns TRUTHY.
// If no key returns truthy, return undefined.
// For...in iterates over object keys.

const findKey = function(object, callback) {
  for (const x in object) {
    if (callback(object[x])) {
      return x;
    }
  }
};

const files = {
  accounts: {folders: 4},
  personal: {folders: 9},
  lighthouse: {folders: 3},
  images: {folders: 2},
  downloads: {folders: 12}
};

const result1 = findKey(files, (x) => x.folders === 3);
assertEqual(result1, "lighthouse");
// The above test should return lighthouse.
const result2 = findKey(files, (x) => x.folders === 1);
assertEqual(result2, undefined);
// The above test should return undefined.