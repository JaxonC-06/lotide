const findKeyByValue = function(object, value) {
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;

// The function takes the value, and returns the key associated with the value in the object.
// Loop through object. If value is present, return key.
// If no value, return undefined.