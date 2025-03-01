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

const assertArraysEqual = function(firstArr, secondArr) {
  if (eqArrays(firstArr, secondArr)) {
    console.log(`✅✅✅ The arrays are equal.`);
  } else {
    console.log(`❌❌❌ The arrays are different.`);
  }
};


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["take", "me", "down", "to", "the", "paradise", "city"];
const results1 = map(words, (word) => word[0]);
const results2 = map(words, (word) => word[3]);
const results3 = map(words, (word) => word[8]);
assertArraysEqual(results1, ["t", "m", "d", "t", "t", "p", "c"]);
// Tests if the result after using the map function returns the first letter of each word.
assertArraysEqual(results2, ["e", undefined, "n", undefined, undefined, "a", "y"]);
// Tests what happens is the index of a word in the words array doesn't exist; it will return undefined.
assertArraysEqual(results3, [undefined, undefined, undefined, undefined, undefined, undefined, undefined]);
// If the index doesn't exist in any of the words, undefined will be shown for every word.