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

const randomNumbers = [1, 2, 4, 9, 12, -3, 6, 8];
const results1 = takeUntil(randomNumbers, item => item < 0);
assertArraysEqual(results1, [1, 2, 4, 9, 12]);
console.log("---");

// This test goes through randomNumbers, and until the callback returns true, logs the values.

const randomWords = ["sweet", "child", "of", "mine"];
const results2 = takeUntil(randomWords, item => item === "of");
assertArraysEqual(results2, ["sweet", "child"]);
console.log("---");

// This test goes through randomNumbers, and returns the values until the value "of" is found.

const randomActors = ["Samuel L. Jackson", "Emma Stone", "James McAvoy", "Alec Baldwin"];
const result3 = takeUntil(randomActors, item => item === "Adam Sandler");
assertArraysEqual(result3, randomActors);
console.log("---");

// This test checks what happens when the callback element is not present in the given array.