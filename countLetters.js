const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};



const countLetters = function(sentence) {
  const letterCount = {};

  for (const letter of sentence) {
    if (letter === " ") {
      continue;
    }
    if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  }

  return letterCount;
};

const sentence = "lighthouse labs is a great program";
const result1 = countLetters(sentence);

assertEqual(result1["l"], 2);
assertEqual(result1["a"], 4);
assertEqual(result1["z"], undefined);