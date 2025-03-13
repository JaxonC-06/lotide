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

module.exports = countLetters;