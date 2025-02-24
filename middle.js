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

const middle = function(arr) {
  const middleOfArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr.length === 1 || arr.length === 2) {
      break;
    } else if (i + i === (arr.length - 1)) {
      middleOfArray.push(i + 1);
    } else if (i + i === (arr.length)) {
      middleOfArray.push(i, i + 1);
    }
  }

  return middleOfArray;
};

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // should log equal
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // should log equal

assertArraysEqual(middle([1, 2]), []) // should log equal, since [1, 2] returns an empty array
assertArraysEqual(middle([1, 2, 3]), [3]) // should log false