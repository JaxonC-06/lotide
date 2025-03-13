// Take an array and add elements from original array UNTIL a TRUTHY value is produced.
// In other words, as soon as TRUTHY happens, BREAK.

const takeUntil = function(array, callback) {
  const results = [];
  for (const item of array) {
    if (!callback(item)) {
      results.push(item);
    } else {
      break;
    }
  }
  return results;
};

module.exports = takeUntil;