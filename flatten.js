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
    console.log("The arrays are equal.");
  } else {
    console.log("The arrays are different.");
  }
};

const flatten = function(arr) {
  const flatArr = [];

  for (const i of arr) {
    if (Array.isArray(i)) {
      for (const j of i) {
        flatArr.push(j);
      }
    }
    if (!Array.isArray(i)) {
      flatArr.push(i);
    }
  }

  return flatArr;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [ 1, 2, 3, 4, 5, 6 ]);