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

const letterPositions = function(sentence) {
  let lowerCaseSentence = sentence.toLowerCase();
  const results = {};

  for (let i = 0; i < lowerCaseSentence.length; i++) {
    let letter = lowerCaseSentence[i];

    if (letter === " ") {
      continue;
    } else if (!results[letter]) {
      results[letter] = [i];
    } else {
      results[letter].push(i);
    }
  }

  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("I love").l, [2]);
assertArraysEqual(letterPositions("ccCC").c, [0, 1, 2, 3]);


// Like the last function, iterate over all letters.
// Skip all spaces.
// For each new letter, create an arry.
// Store the index value in a new array.