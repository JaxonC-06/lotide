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

module.exports = findKey;