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
    console.log("The arrays are equal.")
  } else {
    console.log("The arrays are different.")
  }
};

const without = function(source, itemsToRemove) {
  const filteredArr = [];

  for (let i = 0; i < source.length; i++) {
    let shouldRemove = false;

    for (const item of itemsToRemove) {
      if (item === source[i]) {
        shouldRemove = true;
        break;
      }
    }
    if (!shouldRemove) {
      filteredArr.push(source[i]);
    }
  }

  return filteredArr;
};

// Verifying through tests
const words = ["hello", "world", "lighthouse"];
const result1 = without([1, 2, 3], [1]);
const result2 = without(["1", "2", "3"], [1, 2, "3"]);
assertArraysEqual(result1, [2, 3]);
assertArraysEqual(result2, ["1", "2"]);

// Making sure original is unchanged
without(words, ["lighthouse"])
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

